# Task 1 - Coin Tossing

Consider a fair coin, where order matters.

1. Sample space for one toss:
   `Omega_1 = {H, T}`

2. Sample space for two tosses:
   `Omega_2 = {(H,H), (H,T), (T,H), (T,T)}`

3. Sample space for three tosses:
   `Omega_3 = {(H,H,H), (H,H,T), (H,T,H), (H,T,T), (T,H,H), (T,H,T), (T,T,H), (T,T,T)}`

4. Number of elementary outcomes:
   `|Omega_1| = 2`, `|Omega_2| = 4`, `|Omega_3| = 8`
   In general, for `n` tosses of a fair coin, the number of elementary outcomes is `2^n`.

5. Meaning of an elementary outcome:
- For one toss: one exact result (either `H` or `T`).
- For two tosses: one exact ordered pair (for example, `(H,T)`).
- For three tosses: one exact ordered triple (for example, `(T,H,T)`).

Double-check: all sample spaces list every ordered outcome exactly once, and the counts \(2, 4, 8\) are correct.

## How to solve this problem for dummies

Think of each coin toss as having 2 options: `H` or `T`.

- For 1 toss, just list both options: `H, T`.
- For 2 tosses, write all ordered pairs:
  first toss can be `H` or `T`, and for each one, second toss can be `H` or `T`.
- For 3 tosses, do the same idea with triples.

Because each toss has 2 possible results, the total number of elementary outcomes is:

`2^n`

where `n` is the number of tosses.

So:
- `n=1 => 2^1=2`
- `n=2 => 2^2=4`
- `n=3 => 2^3=8`

An elementary outcome means one complete ordered result of the whole experiment, like `(H,T)` or `(T,H,T)`.
