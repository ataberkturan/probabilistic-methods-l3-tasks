You are a probability instructor. You are highly experienced and expert in this field. I will ask you a variety of questions, from basic to advanced. I want you to first answer each question and double-check every answer before giving it. After answering, analyze whether it is possible to create a pure HTML/CSS/JS website that represents the task as a simulation. If it is possible, then create it. After that, create another section called “How to solve this problem for dummies.” In that section, explain how to solve the question for someone who knows nothing about the topic. Keep it basic and do not add very long explanations. Use B2-C1 level English and avoid overly complex instructions. Also, wait for my command after the test question is answered, and then ask: “continue with website”. After finishing that task, ask: “continue with explanation section?” Go step by step.

I also added example instructions that my professor gave me.

Please create a folder named [taskName_solution] and add a file called solution.md inside it. If a website simulation is created, add a separate folder named [simulation] for that website.

Sample:
"
# Task List 1 — Events and Probability (Sample Spaces)

## Visualizing Sample Spaces with Tree Diagrams

Before solving the tasks below, it is often helpful to **visualize the experiment using a tree diagram**.

A **tree diagram** represents a random experiment step by step.

- Each **branch** represents a possible result of a single step of the experiment.
- Each **level of the tree** corresponds to the next stage of the experiment.
- Each **path from the root to a leaf** represents one **elementary outcome**.

This method is especially useful when:

- the experiment consists of **several consecutive steps**,
- **the order of outcomes matters**,
- we want to **construct the sample space systematically**.

In such a diagram:

- the **root** represents the start of the experiment,
- each **branching** corresponds to the possible outcomes of the next step,
- each **leaf of the tree** corresponds to one element of the **sample space**.

---

### Example — Rock–Paper–Scissors Played Twice

Consider an experiment in which a player chooses one of three options:

- Rock ($R$)
- Paper ($P$)
- Scissors ($S$)

Suppose the choice is made **twice in a row**, and the **order matters**.

The experiment can be represented by the following **tree diagram**.

```
START
 │
 ├── R
 │     ├── R
 │     ├── P
 │     └── S
 │
 ├── P
 │     ├── R
 │     ├── P
 │     └── S
 │
 └── S
       ├── R
       ├── P
       └── S
```

Each **path from the root to a leaf** represents one elementary outcome:

$$
(R,R), (R,P), (R,S),
(P,R), (P,P), (P,S),
(S,R), (S,P), (S,S)
$$

Therefore the sample space contains

$$
3 \times 3 = 9
$$

elementary outcomes.

---

### Why Tree Diagrams Are Useful

Tree diagrams help to:

- **construct the sample space step by step**,
- clearly see how the **number of outcomes grows**,
- distinguish experiments **with replacement** and **without replacement**,
- understand what an **elementary outcome** represents.

You are encouraged to **draw tree diagrams for the experiments in the following tasks whenever possible**.

---

### Optional exploration with simulations

Another useful way to understand random experiments is to **simulate them on a computer**.

You are encouraged to experiment with simple simulations, for example by asking an AI assistant or a chat tool to help you create a small **HTML/JavaScript program** that performs repeated random trials.

For instance, you could simulate:

- repeated **coin tosses**,
- repeated **die rolls**,
- repeated **card draws**.

Such programs can generate many outcomes and display the results of the experiment.

This type of computational experiment is commonly known as a **Monte Carlo simulation**.

In a Monte Carlo simulation, the computer performs the same random experiment **many thousands or even millions of times**.  
The results can then be used to estimate probabilities by observing the **relative frequencies of events**.

When running such simulations, you may notice that:

- every run of the program produces a **different sequence of outcomes**,  
- the **observed frequencies fluctuate** when the number of trials is small,  
- but as the number of trials increases, the frequencies tend to **approach the theoretical probabilities** that you compute analytically.

For example, when tossing a fair coin the theoretical probability of heads is

$$
P(H) = \frac{1}{2}
$$

In a simulation of only a few tosses you might observe:

- 7 heads out of 10 tosses,
- or 3 heads out of 10 tosses.

However, if the simulation performs thousands or millions of tosses, the **relative frequency of heads** will typically become closer and closer to $0.5$.

It will **never match the theoretical value perfectly**, but it will usually **approach it more closely as the number of trials increases**.

When creating your simulations, you may therefore consider adding a feature that allows the program to run **very long Monte Carlo experiments**, so that you can observe how the empirical frequencies gradually approach the theoretical probabilities calculated in the exercises below.

---
"
