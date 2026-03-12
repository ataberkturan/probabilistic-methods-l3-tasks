# Task 7 - Events and Probabilities in Die Rolling

Refer to Task 2, where the sample spaces for one, two, and three rolls of a fair die were defined.

Because the die is fair, all elementary outcomes in each sample space are equally likely.

## Elementary outcome probabilities

- In Ω1, each elementary outcome has probability 1/6.
- In Ω2, each ordered pair has probability 1/36.
- In Ω3, each ordered triple has probability 1/216.

## One die roll

- A1 = {2,4,6}, so P(A1) = 3/6 = 1/2.
- B1 = {5,6}, so P(B1) = 2/6 = 1/3.
- C1 = {1,2,3}, so P(C1) = 3/6 = 1/2.

## Two die rolls

- A2 = {(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)}, so P(A2) = 6/36 = 1/6.
- B2 = {(1,1),(2,2),(3,3),(4,4),(5,5),(6,6)}, so P(B2) = 6/36 = 1/6.
- C2 = {(4,6),(5,5),(6,4),(5,6),(6,5),(6,6)}, so P(C2) = 6/36 = 1/6.

## Three die rolls

- A3 = sum equals 10.
  The number of favorable ordered triples is 27, so P(A3) = 27/216 = 1/8.

- B3 = exactly two rolls give the same number.
  The number of favorable ordered triples is 90, so P(B3) = 90/216 = 5/12.

- C3 = {(2,2,3),(2,3,2),(3,2,2)}, so P(C3) = 3/216 = 1/72.

## Additional event on Ω3

Choose:

- D3 = at least one 6
- This means all ordered triples that contain at least one 6.
- P(D3) = 1 - (5/6)^3 = 1 - 125/216 = 91/216

Double-check: every event is matched with the correct sample space, all elementary outcomes are equally likely, and each probability is computed as favorable outcomes divided by total outcomes.

## How to solve this problem for dummies

This task is about events in die rolling.

An event means a group of outcomes with some condition.

For example:

- `even` means the result is 2, 4, or 6
- `sum = 7` means the two rolls together must add up to 7
- `both equal` means both rolls show the same number
- `at least one 6` means one roll or more is 6

So first, understand what the event is asking.

Then use this method:

1. Find the total number of possible ordered outcomes.
2. Find the outcomes that satisfy the event.
3. Count them.
4. Divide by the total number of outcomes.

Because the die is fair, every ordered outcome has the same probability.

Useful totals:

- 1 roll -> 6 outcomes
- 2 rolls -> 36 ordered outcomes
- 3 rolls -> 216 ordered outcomes

Example:

- `A2` says the sum must be 7
- That means the good outcomes are `(1,6)`, `(2,5)`, `(3,4)`, `(4,3)`, `(5,2)`, `(6,1)`
- There are 6 good outcomes
- There are 36 total outcomes
- So `P(A2) = 6/36 = 1/6`

So the whole task is really: understand the condition, count the good outcomes, and divide by the total number of equally likely outcomes.
