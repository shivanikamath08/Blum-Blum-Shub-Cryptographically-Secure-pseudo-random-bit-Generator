import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Modular exponentiation
function modPow(base, exp, mod) {
  base = base % mod;
  let result = 1n;
  while (exp > 0n) {
    if (exp & 1n) result = (result * base) % mod;
    base = (base * base) % mod;
    exp >>= 1n;
  }
  return result;
}

// BBS generator
function blumBlumShub(p, q, seed, length) {
  p = BigInt(p);
  q = BigInt(q);
  const n = p * q;
  seed = BigInt(seed);

  let x = (seed * seed) % n;
  const bits = [];

  for (let i = 0; i < length; i++) {
    x = (x * x) % n;
    bits.push(Number(x % 2n)); // extract least significant bit
  }

  return { n: n.toString(), bits: bits.join(""), seed: seed.toString() };
}

// API route
app.post("/generate", (req, res) => {
  const { p, q, seed, length } = req.body;

  if (!p || !q || !seed || !length)
    return res.status(400).json({ error: "Missing input values." });

  try {
    const result = blumBlumShub(p, q, seed, parseInt(length));
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = 4000;
app.listen(PORT, () => console.log(`✅ BBS Server running on http://localhost:${PORT}`));
