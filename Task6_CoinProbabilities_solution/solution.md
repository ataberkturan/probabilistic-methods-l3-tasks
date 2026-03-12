# Task 6 - Events and Probabilities in Coin Tossing

Refer to Task 1, where the sample spaces for one, two, and three fair coin tosses were defined.

Because the coin is fair, all elementary outcomes in each sample space are equally likely.

## Elementary outcome probabilities

- In Ω1 = {H, T}, each elementary outcome has probability 1/2.
- In Ω2 = {(H,H), (H,T), (T,H), (T,T)}, each elementary outcome has probability 1/4.
- In Ω3 = {(H,H,H), (H,H,T), (H,T,H), (H,T,T), (T,H,H), (T,H,T), (T,T,H), (T,T,T)}, each elementary outcome has probability 1/8.

## One coin toss

- A1 = {H}, so P(A1) = 1/2.
- B1 = {T}, so P(B1) = 1/2.
- C1 = {H}, because "not tails" means heads, so P(C1) = 1/2.

## Two coin tosses

- A2 = {(H,T), (T,H)}, so P(A2) = 2/4 = 1/2.
- B2 = {(H,H), (H,T), (T,H)}, so P(B2) = 3/4.
- C2 = {(H,H), (T,T)}, so P(C2) = 2/4 = 1/2.

## Three coin tosses

- A3 = {(H,H,T), (H,T,H), (T,H,H)}, so P(A3) = 3/8.
- B3 = Ω3 \ {(H,H,H)}, so P(B3) = 7/8.
- C3 = {(H,H,H), (T,T,T)}, so P(C3) = 2/8 = 1/4.

## Additional event on Ω3

Choose:

- D3 = exactly one head
- D3 = {(H,T,T), (T,H,T), (T,T,H)}
- P(D3) = 3/8

Double-check: every event is written as a subset of the correct sample space, every elementary outcome in Ω1, Ω2, and Ω3 is equally likely, and each probability equals favorable outcomes divided by total outcomes.

## How to solve this problem for dummies

The main idea is simple:

1. List the sample space.
2. Count how many outcomes belong to the event.
3. Divide by the total number of outcomes.

Because the coin is fair, all elementary outcomes are equally likely.

- For 1 toss, there are 2 outcomes.
- For 2 tosses, there are 4 outcomes.
- For 3 tosses, there are 8 outcomes.

Example:

- For A2 = exactly one head, the good outcomes are `(H,T)` and `(T,H)`.
- That gives 2 good outcomes out of 4 total.
- So `P(A2) = 2/4 = 1/2`.

You solve all the other events in the same way: count the good outcomes, then divide by the total number of possible outcomes.
