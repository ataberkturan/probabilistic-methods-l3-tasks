# Task 9 - Events and Probabilities in Weekly Weather Observation

Refer to Task 4, where Ω7 describes the weather during seven consecutive days.

Assume the 7 days are independent, and each day is:
- S (Sunny) with probability 1/3
- C (Cloudy) with probability 1/3
- R (Rainy) with probability 1/3

## Events and probabilities

- A: the entire weekend is sunny.
  Rule: Saturday = S and Sunday = S
  P(A) = (1/3) × (1/3) = 1/9

- B: Wednesday, Thursday, and Friday are all rainy.
  Rule: Wed = R, Thu = R, Fri = R
  P(B) = (1/3)^3 = 1/27

- C: at least one day during the week is sunny.
  Use the complement:
  P(C) = 1 - P(no sunny day)
  P(C) = 1 - (2/3)^7

- D: no rainy day occurs during the entire week.
  Each day must be S or C.
  P(D) = (2/3)^7

- E: exactly two days during the week are sunny.
  Choose which 2 of the 7 days are sunny:
  P(E) = C(7,2) × (1/3)^2 × (2/3)^5
  P(E) = 21 × (1/9) × (32/243) = 224/729

## Additional event on Ω7

Choose:

- F: exactly one rainy day
- Choose which 1 of the 7 days is rainy:
  P(F) = C(7,1) × (1/3) × (2/3)^6
  P(F) = 7 × (1/3) × (64/729) = 448/729

Double-check: all probabilities use the independent 7-day model correctly, complement logic is used properly for event C, and combination counting is used correctly for events E and F.

## How to solve this problem for dummies

Think of each day as one of 3 weather types:

- S
- C
- R

Each day is independent, so what happens on one day does not change the next day.

Main ideas:

1. For fixed days, multiply probabilities.
2. For "at least one", use the complement.
3. For "exactly k days", use combinations.

Examples:

- Event A: both weekend days are sunny.
  So `P(A) = (1/3) x (1/3) = 1/9`.

- Event C: at least one sunny day.
  It is easier to compute `no sunny day`, then subtract from 1.
  So `P(C) = 1 - (2/3)^7`.

- Event E: exactly two sunny days.
  First choose which 2 days are sunny, then multiply the probabilities.

That is the main pattern for all events in this task.
