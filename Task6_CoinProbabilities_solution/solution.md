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

To solve these questions, always use the same method.

First write the sample space.

- For 1 toss: `{H, T}`
- For 2 tosses: `{(H,H), (H,T), (T,H), (T,T)}`
- For 3 tosses: 8 ordered outcomes

Then remember this important idea:

Because the coin is fair, every elementary outcome has the same probability.

So after you list the sample space, do these steps:

1. Find the event you want.
2. List the outcomes that belong to that event.
3. Count how many good outcomes there are.
4. Divide by the total number of outcomes in the sample space.

Example 1:

- `A1 = heads`
- In one toss, the good outcome is only `{H}`
- There is 1 good outcome out of 2 total outcomes
- So `P(A1) = 1/2`

Example 2:

- `A2 = exactly one head`
- In two tosses, the good outcomes are `(H,T)` and `(T,H)`
- There are 2 good outcomes out of 4 total outcomes
- So `P(A2) = 2/4 = 1/2`

Example 3:

- `C3 = all three tosses give the same result`
- The good outcomes are `(H,H,H)` and `(T,T,T)`
- There are 2 good outcomes out of 8 total outcomes
- So `P(C3) = 2/8 = 1/4`

So the whole task is really about counting the correct outcomes and then dividing by the total number of equally likely outcomes.
