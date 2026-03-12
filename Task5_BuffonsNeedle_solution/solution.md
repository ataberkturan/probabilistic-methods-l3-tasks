# Task 5 - Buffon's Needle Experiment

Consider a needle of length L thrown onto a floor with parallel lines spaced by distance d.

1. Sample space Ω:
   The sample space is continuous and can be modeled by pairs `(x, θ)`.

2. Parameters for one throw:
- `x`: distance from the needle center to the nearest line.
- `θ`: angle between the needle and the lines.

3. Elementary outcome:
   One elementary outcome is one exact pair `(x, θ)`.

4. Sample space as possible values:
   Using symmetry, we can restrict to:
- `x ∈ [0, d/2]`
- `θ ∈ [0, π/2]`

   Therefore:
   `Ω = [0, d/2] × [0, π/2]`

5. Why Ω is continuous:
   The variables `x` and `θ` can take infinitely many real values in intervals, so the sample space is continuous (uncountable), unlike earlier tasks where outcomes were finite or countable lists.

Double-check: the outcome variables are correctly identified as `(x, θ)`, the symmetry bounds are `x ∈ [0, d/2]` and `θ ∈ [0, π/2]`, and the sample space is correctly written as `Ω = [0, d/2] × [0, π/2]`.

## How to solve this problem for dummies

Think of one needle throw as being described by two numbers:

- `x`: how far the needle center is from the nearest line.
- `θ`: the angle of the needle.

Because `x` and `θ` can be any real values in intervals, we do not list outcomes one by one like in coin or die tasks.

Using symmetry, we only need:

- `x` from 0 to `d/2`
- `θ` from 0 to `π/2`

So the sample space is a rectangle of possible pairs:
`Ω = [0, d/2] × [0, π/2]`

That is why this sample space is continuous, not discrete.
