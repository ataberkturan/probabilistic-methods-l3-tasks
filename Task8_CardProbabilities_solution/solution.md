# Task 8 - Events and Probabilities in Card Drawing

Refer to Task 3, where the sample spaces for card drawing were defined.

Assume the deck is well-shuffled, and all ordered outcomes are equally likely in each experiment.

## Elementary outcome probabilities

- In Ω1, each card has probability 1/52.
- In Ω2 (with replacement), each ordered pair has probability 1/2704.
- In Ω2' (without replacement), each ordered pair has probability 1/2652.

## One card drawn

- A1 = hearts, so P(A1) = 13/52 = 1/4.
- B1 = kings, so P(B1) = 4/52 = 1/13.
- C1 = not a face card, so P(C1) = 40/52 = 10/13.

## Two cards drawn with replacement

- A2 = both cards are hearts, so P(A2) = (13/52) × (13/52) = 1/16.
- B2 = both cards have the same rank.
  There are 13 choices for the rank, and for each draw there are 4 cards of that rank:
  count = 13 × 4 × 4 = 208
  so P(B2) = 208/2704 = 1/13.
- C2 = at least one ace.
  Use the complement:
  P(C2) = 1 - (48/52)^2 = 1 - (12/13)^2 = 25/169.

## Two cards drawn without replacement

- A3 = both cards are hearts, so P(A3) = (13/52) × (12/51) = 1/17.
- B3 = both cards have the same rank.
  count = 13 × 4 × 3 = 156
  so P(B3) = 156/2652 = 1/17.
- C3 = one card is a king and the other is a queen, in any order.
  count = 4 × 4 + 4 × 4 = 32
  so P(C3) = 32/2652 = 8/663.

## Additional event on Ω2'

Choose:

- D3 = both cards are aces
- count = 4 × 3 = 12
- P(D3) = 12/2652 = 1/221

Double-check: the denominators 52, 2704, and 2652 match the correct sample spaces, replacement and no-replacement are handled correctly, and all event counts are consistent with ordered outcomes.

## How to solve this problem for dummies

The method is always:

1. Count all possible ordered outcomes.
2. Count the outcomes that satisfy the event.
3. Divide good outcomes by total outcomes.

The important difference is this:

- With replacement: after the first draw, the card goes back into the deck.
- Without replacement: after the first draw, the card does not go back.

Examples:

- For one draw, there are 52 possible outcomes.
- For two draws with replacement, there are 52 x 52 = 2704 ordered outcomes.
- For two draws without replacement, there are 52 x 51 = 2652 ordered outcomes.

Example:

- For A3 = both cards are hearts without replacement:
- The first card can be any of 13 hearts.
- Then 12 hearts remain out of 51 cards.
- So `P(A3) = (13/52) x (12/51) = 1/17`.

You solve the other events the same way: count the good cases, then divide by the total number of ordered outcomes.
