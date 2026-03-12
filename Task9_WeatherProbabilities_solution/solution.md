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

This task is about weather events during one full week.

An event means a condition about the week.

For example:

- `weekend is sunny` means Saturday and Sunday are both sunny
- `no rainy day` means none of the 7 days is rainy
- `exactly two sunny days` means only 2 of the 7 days are sunny

Each day can be:

- `S` = sunny
- `C` = cloudy
- `R` = rainy

Each day is independent. That means one day does not change the probability of the next day.

Main ideas:

1. If the event talks about fixed days, multiply probabilities.
2. If the event says `at least one`, it is often easier to use the opposite event first.
3. If the event says `exactly k days`, first choose which days those are.

Examples:

- Event `A`:
  weekend is sunny
  means Saturday = S and Sunday = S
  so `P(A) = (1/3) x (1/3) = 1/9`

- Event `C`:
  at least one sunny day
  it is easier to first find `no sunny day`
  one day is not sunny with probability `2/3`
  so `P(C) = 1 - (2/3)^7`

- Event `E`:
  exactly two sunny days
  first choose which 2 days are sunny
  then multiply by the probability that those 2 are sunny and the other 5 are not sunny

So the main job in this task is to understand what the event says about the week, then use multiplication, complements, or combinations in the right place.
