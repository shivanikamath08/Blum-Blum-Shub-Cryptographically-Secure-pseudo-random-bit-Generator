🔐 Blum Blum Shub (BBS) Cryptographically Secure Pseudo-Random Bit Generator

A web-based implementation of the Blum Blum Shub (BBS) pseudo-random bit generator — a cryptographically secure random number generator (CSRNG) based on modular squaring.  
This project allows users to input two large primes `p` and `q`, along with a seed and desired bit length, to generate a sequence of secure random bits.


🌟 Features
-> 🧮 Implements the BBS algorithm for generating cryptographically secure random bits.  
-> ⚙️ Validates user inputs to ensure both `p` and `q` are prime and congruent to 3 (mod 4).  
-> 💻 Interactive frontend interface built with HTML, CSS, and JavaScript.  
-> 🖥️ Backend (Node.js + Express) handles random bit generation logic.  
-> 📊 Real-time display of the generated bit sequence on the web interface.


🧠 About the BBS Algorithm
The Blum Blum Shub generator is a cryptographically strong pseudorandom number generator defined as:

-> xₙ₊₁ = xₙ² mod n,  
-> where n = p × q, and both p and q are large primes such that p ≡ q ≡ 3 (mod 4).

The output bits are typically taken from the least significant bit of each generated number.


