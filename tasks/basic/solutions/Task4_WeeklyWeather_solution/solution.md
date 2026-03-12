# Task 4 - Weekly Weather Observation

The weather on each day can be exactly one of:
- S (Sunny)
- C (Cloudy)
- R (Rainy)

Order matters.

1. Sample space for one day:
   Ω1 = {S, C, R}

2. Sample space for two consecutive days:
   Ω2 = {(x1,x2) : x1,x2 ∈ {S,C,R}}
   This is the set of all ordered pairs, for example:
   (S,S), (S,C), (S,R), (C,S), (C,C), (C,R), (R,S), (R,C), (R,R)

3. Sample space for seven consecutive days:
   Ω7 = {(x1,x2,x3,x4,x5,x6,x7) : xi ∈ {S,C,R} for i=1,...,7}
   Each element is one ordered 7-day weather sequence.

4. Number of elementary outcomes:
   |Ω1| = 3
   |Ω2| = 3^2 = 9
   |Ω7| = 3^7 = 2187

5. Meaning of an elementary outcome (weekly case):
   One elementary outcome is one exact ordered weekly sequence, for example:
   (S,C,R,R,S,C,S)

Double-check: Ω1 contains exactly S, C, R; Ω2 covers all 9 ordered 2-day sequences; Ω7 covers all ordered 7-day sequences; and the counts 3, 9, 2187 follow the rule 3^n.

## How to solve this problem for dummies

Each day has 3 possible weather states: S, C, or R.

- For 1 day, there are 3 outcomes.
- For 2 days, each day has 3 options, so total outcomes are 3 x 3 = 9.
- For 7 days, each day still has 3 options, so total outcomes are 3^7 = 2187.

This works because you multiply choices at each step.

Order matters, so `(S,C)` and `(C,S)` are different outcomes.

An elementary outcome for the weekly case is one full 7-day ordered sequence, for example `(S,C,R,R,S,C,S)`.
