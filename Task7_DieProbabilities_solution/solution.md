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

The method is always the same:

1. Count all possible outcomes.
2. Count the outcomes that satisfy the event.
3. Divide good outcomes by total outcomes.

Because the die is fair, every ordered outcome has the same probability.

Examples:

- For one roll, there are 6 total outcomes.
- For two rolls, there are 36 total ordered outcomes.
- For three rolls, there are 216 total ordered outcomes.

Example:

- For A2, the sum must be 7.
- The good ordered pairs are `(1,6)`, `(2,5)`, `(3,4)`, `(4,3)`, `(5,2)`, `(6,1)`.
- That gives 6 good outcomes out of 36 total.
- So `P(A2) = 6/36 = 1/6`.

You solve the other events in the same way: count the good cases, then divide by the total number of possible ordered outcomes.
