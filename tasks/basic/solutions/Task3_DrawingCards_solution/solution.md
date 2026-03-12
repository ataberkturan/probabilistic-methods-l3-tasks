# Task 3 - Drawing Cards

## Question

Consider an experiment consisting of drawing cards from a standard 52-card deck.

The order of outcomes matters. Treat each outcome as an ordered sequence of drawn cards.

1. Define the sample space Ω1 for drawing one card.
2. Construct the sample space Ω2 for two consecutive draws with replacement.
3. Construct the sample space Ω2' for two consecutive draws without replacement.
4. Determine the number of elementary outcomes in both cases.
5. Briefly describe what an elementary outcome represents in these experiments.

## Answer

Consider an experiment of drawing cards from a standard 52-card deck, where order matters.

Use ranks `A,2,3,4,5,6,7,8,9,10,J,Q,K` and suits `♠,♥,♦,♣`.

1. Sample space for drawing one card:
   Ω1 = {all 52 cards in the deck}
   Example elements: `A♠`, `10♥`, `Q♦`, `7♣`.

2. Sample space for two consecutive draws with replacement:
   Ω2 = {(c1, c2) : c1, c2 are any cards from the 52-card deck}
   Repetition is allowed because the first card is returned before the second draw.
   Example elements: `(A♠,A♠)`, `(K♦,2♣)`, `(10♥,10♥)`.

3. Sample space for two consecutive draws without replacement:
   Ω2' = {(c1, c2) : c1 and c2 are cards from the deck, c1 != c2}
   Repetition is not allowed because the first card is not returned.
   Example elements: `(A♠,A♥)`, `(K♦,2♣)`.

4. Number of elementary outcomes:
   |Ω1| = 52
   |Ω2| = 52 x 52 = 2704
   |Ω2'| = 52 x 51 = 2652

5. Meaning of an elementary outcome:
- In Ω1: one exact card.
- In Ω2: one exact ordered pair of drawn cards, with replacement.
- In Ω2': one exact ordered pair of distinct drawn cards, without replacement.

Double-check: the counts are consistent with replacement rules (52 then 52 choices) and no-replacement rules (52 then 51 choices), and order is treated as important in both two-draw experiments.

## How to solve this problem for dummies

Think of the deck as 52 different cards.

- For one draw, you can get any one of the 52 cards.
- For two draws with replacement, after the first draw you put the card back, so the second draw still has 52 options.
- For two draws without replacement, after the first draw you do not put it back, so the second draw has 51 options.

Because order matters, `(A♠,K♦)` and `(K♦,A♠)` are different outcomes.

So the counts are:

- Ω1: 52
- Ω2 (with replacement): 52 x 52 = 2704
- Ω2' (without replacement): 52 x 51 = 2652

An elementary outcome means one full ordered result of the experiment, like `A♠` for one draw, or `(A♠,K♦)` for two draws.
