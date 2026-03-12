# Task 5 - Buffon's Needle Experiment

Consider a needle of length L thrown onto a floor with parallel lines spaced by distance d.

To solve this problem, we first ask what information is enough to describe one throw completely.

We need two parameters:

- `x`: the distance from the center of the needle to the nearest line
- `θ`: the angle between the needle and the parallel lines

These two parameters determine the outcome of a single throw.

So one elementary outcome can be represented by one exact pair:

`(x, θ)`

This means the sample space is not a list of separate outcomes, but the set of all possible values of these two variables.

Because of symmetry, we do not need to look at all possible positions and all possible angles. It is enough to use:

- `x ∈ [0, d/2]`
- `θ ∈ [0, π/2]`

So the sample space is

`Ω = [0, d/2] × [0, π/2]`

This describes all possible throws in the experiment.

The sample space is continuous, not discrete. The reason is that `x` and `θ` are real numbers from intervals, so they can take infinitely many possible values. In the earlier tasks, we could list all outcomes one by one, but here the outcomes fill a whole region instead of forming a finite set.

In other words, each point in this rectangle corresponds to one possible throw of the needle.

Double-check: the outcome variables are correctly identified as `(x, θ)`, the symmetry bounds are `x ∈ [0, d/2]` and `θ ∈ [0, π/2]`, and the sample space is correctly written as `Ω = [0, d/2] × [0, π/2]`.

## How to solve this problem for dummies

This task is different from coin, die, or card questions because the result is not a single countable answer.

When the needle lands, we care about two things:

- how far its center is from the nearest line
- what angle it makes with the lines

So one throw is described by two variables:

- `x`: the distance from the needle center to the nearest line
- `θ`: the angle of the needle

That means one elementary outcome is one pair:

`(x, θ)`

Using symmetry, we only need:

- `x ∈ [0, d/2]`
- `θ ∈ [0, π/2]`

So the sample space is

`Ω = [0, d/2] × [0, π/2]`

The maximum distance is `d/2` because the center cannot be farther than half the distance between two neighboring lines from the nearest line.

This sample space is continuous because `x` and `θ` can take infinitely many real values, not just a small list of outcomes. That is why Buffon's needle is a geometry-based probability problem.
