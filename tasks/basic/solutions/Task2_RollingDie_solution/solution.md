# Task 2 - Rolling a Die

Consider an experiment consisting of rolling a fair six-sided die, where order matters.

1. Sample space for one roll:
   Ω1 = {1,2,3,4,5,6}

2. Sample space for two consecutive rolls:
   Ω2 = {(i,j) : i,j ∈ {1,2,3,4,5,6}}
   This means all ordered pairs from (1,1) up to (6,6).

3. Sample space for three consecutive rolls:
   Ω3 = {(i,j,k) : i,j,k ∈ {1,2,3,4,5,6}}
   This means all ordered triples from (1,1,1) up to (6,6,6).

4. Number of elementary outcomes:
   |Ω1| = 6
   |Ω2| = 6 × 6 = 36
   |Ω3| = 6 × 6 × 6 = 216
   In general, for n rolls: number of elementary outcomes = 6^n.

5. Meaning of an elementary outcome:
- For one roll: one exact die result (for example, 4).
- For two rolls: one exact ordered pair (for example, (2,5)).
- For three rolls: one exact ordered triple (for example, (6,1,3)).

Double-check: Ω1 contains exactly 6 outcomes, Ω2 represents all 36 ordered pairs, Ω3 represents all 216 ordered triples, and all counts are consistent with 6^n.

## How to solve this problem for dummies

Think of each die roll as having 6 options: 1, 2, 3, 4, 5, 6.

- For 1 roll, list all numbers from 1 to 6.
- For 2 rolls, use ordered pairs. The first roll has 6 options and the second roll has 6 options.
- For 3 rolls, use ordered triples. Each position has 6 options.

To count outcomes, multiply the number of options at each step:

- 1 roll: 6
- 2 rolls: 6 x 6 = 36
- 3 rolls: 6 x 6 x 6 = 216

In general, for n rolls, total elementary outcomes = 6^n.

An elementary outcome is one complete ordered result, like (4), (2,5), or (6,1,3).
