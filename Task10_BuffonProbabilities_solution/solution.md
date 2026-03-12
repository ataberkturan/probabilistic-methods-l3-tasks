# Task 10 - Events and Probabilities in Buffon's Needle Experiment

Refer to Task 5, where the sample space was

`Ω = [0, d/2] × [0, π/2]`

Assume:

- `L <= d`
- `X` and `θ` are independent
- `X` is uniform on `[0, d/2]`
- `θ` is uniform on `[0, π/2]`

The hit condition is:

`X <= (L/2) sin(θ)`

So each event can be viewed as a region inside the rectangle sample space.

## Event A

- `A`: the needle intersects one of the lines
- Region: `X <= (L/2) sin(θ)`

Therefore:

`P(A) = 2L / (dπ)`

## Event B

- `B`: the needle does not intersect any line
- This is the complement of `A`

Therefore:

`P(B) = 1 - 2L / (dπ)`

## Event C

- `C`: `θ < π/6`
- This is a vertical strip in the sample-space rectangle

Therefore:

`P(C) = (π/6) / (π/2) = 1/3`

## Event D

- `D`: `X < d/4`
- This is a horizontal strip in the sample-space rectangle

Therefore:

`P(D) = (d/4) / (d/2) = 1/2`

## Event E

- `E`: the needle intersects a line and `θ > π/4`
- Region: `θ > π/4` and `X <= (L/2) sin(θ)`

Therefore:

`P(E) = L√2 / (dπ)`

## Additional event

Choose:

- `F`: `θ > π/3`

Because `θ` is uniform on `[0, π/2]`:

`P(F) = (π/2 - π/3) / (π/2) = 1/3`

Double-check: the hit condition `X <= (L/2) sin(θ)` is used consistently, `B` is the complement of `A`, and the interval-length ratios for `C`, `D`, and `F` are correct.

## How to solve this problem for dummies

This task is different from coin, die, or card questions.

In those questions, you count separate outcomes.
Here, one result is a geometric position of the needle.

So first ask:

What tells us exactly how the needle landed?

We need two numbers:

- `X`: how far the needle center is from the nearest line
- `θ`: the angle of the needle

That means one throw is one point inside a rectangle:

`Ω = [0, d/2] × [0, π/2]`

So this is the main idea:

- probability = area of the event region / total area of the rectangle

Now what do the events mean?

- `A` means the needle hits a line
- `B` means it does not hit a line
- `C` means the angle is small
- `D` means the center is close to a line
- `E` means both a hit happens and the angle is larger than `π/4`

Some events are easy:

- For `C`, the only condition is `θ < π/6`, so you compare angle lengths.
- For `D`, the only condition is `X < d/4`, so you compare distance lengths.
- For `F`, the only condition is `θ > π/3`, so again you compare angle lengths.

The harder event is `A`.

The needle hits a line when

`X <= (L/2) sin(θ)`

So for `A`, you do not count outcomes. You look at the region under this curve inside the rectangle.

So the whole task is about understanding which region of the rectangle belongs to the event, then comparing its area with the total area of the sample space.
