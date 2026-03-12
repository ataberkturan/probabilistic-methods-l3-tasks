const RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const SUITS = ["S", "H", "D", "C"];

function buildDeck() {
  const deck = [];
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      deck.push({ rank, suit, label: `${rank}${suit}` });
    }
  }
  return deck;
}

function pick(deck) {
  return deck[Math.floor(Math.random() * deck.length)];
}

function drawOne(deck) {
  return [pick(deck)];
}

function drawTwoWithReplacement(deck) {
  return [pick(deck), pick(deck)];
}

function drawTwoWithoutReplacement(deck) {
  const firstIndex = Math.floor(Math.random() * deck.length);
  let secondIndex = Math.floor(Math.random() * (deck.length - 1));
  if (secondIndex >= firstIndex) secondIndex += 1;
  return [deck[firstIndex], deck[secondIndex]];
}

function pairLabel(cards) {
  return `(${cards[0].label}, ${cards[1].label})`;
}

function getConfig(mode) {
  if (mode === "one") {
    return {
      sampleSpaceSize: 52,
      perOutcomeProbability: "1/52",
      draw: drawOne,
      exampleOutcomes: ["A S", "10 H", "Q D", "7 C"],
      events: [
        { name: "A1", description: "card is a heart", exact: 1 / 4, goodCount: 13, examples: ["AH", "7H", "QH"], test: (cards) => cards[0].suit === "H" },
        { name: "B1", description: "card is a king", exact: 1 / 13, goodCount: 4, examples: ["KS", "KH", "KD"], test: (cards) => cards[0].rank === "K" },
        { name: "C1", description: "card is not a face card", exact: 10 / 13, goodCount: 40, examples: ["AS", "7D", "10C"], test: (cards) => !["J", "Q", "K"].includes(cards[0].rank) }
      ]
    };
  }

  if (mode === "with") {
    return {
      sampleSpaceSize: 2704,
      perOutcomeProbability: "1/2704",
      draw: drawTwoWithReplacement,
      exampleOutcomes: ["(AS, AS)", "(KH, 2C)", "(10D, 10D)", "(7S, QH)"],
      events: [
        { name: "A2", description: "both cards are hearts", exact: 1 / 16, goodCount: 169, examples: ["(AH, 7H)", "(QH, 2H)"], test: (cards) => cards[0].suit === "H" && cards[1].suit === "H" },
        { name: "B2", description: "both cards have same rank", exact: 1 / 13, goodCount: 208, examples: ["(7S, 7D)", "(KC, KH)"], test: (cards) => cards[0].rank === cards[1].rank },
        { name: "C2", description: "at least one ace", exact: 25 / 169, goodCount: 400, examples: ["(AS, 5D)", "(10H, AC)"], test: (cards) => cards[0].rank === "A" || cards[1].rank === "A" }
      ]
    };
  }

  return {
    sampleSpaceSize: 2652,
    perOutcomeProbability: "1/2652",
    draw: drawTwoWithoutReplacement,
    exampleOutcomes: ["(AS, KH)", "(7D, 7C)", "(QH, KS)", "(AC, AD)"],
    events: [
      { name: "A3", description: "both cards are hearts", exact: 1 / 17, goodCount: 156, examples: ["(AH, 7H)", "(QH, 2H)"], test: (cards) => cards[0].suit === "H" && cards[1].suit === "H" },
      { name: "B3", description: "both cards have same rank", exact: 1 / 17, goodCount: 156, examples: ["(7S, 7D)", "(KC, KH)"], test: (cards) => cards[0].rank === cards[1].rank },
      {
        name: "C3",
        description: "one king and one queen",
        exact: 8 / 663,
        goodCount: 32,
        examples: ["(KS, QH)", "(QD, KC)"],
        test: (cards) => {
          const ranks = [cards[0].rank, cards[1].rank];
          return ranks.includes("K") && ranks.includes("Q");
        }
      },
      { name: "D3", description: "both cards are aces", exact: 1 / 221, goodCount: 12, examples: ["(AS, AH)", "(AD, AC)"], test: (cards) => cards[0].rank === "A" && cards[1].rank === "A" }
    ]
  };
}

function runSimulation() {
  const mode = document.getElementById("mode").value;
  const rawTrials = Number(document.getElementById("trialCount").value);
  const trials = Number.isFinite(rawTrials) && rawTrials > 0 ? Math.floor(rawTrials) : 1;
  const deck = buildDeck();
  const config = getConfig(mode);
  const counts = new Array(config.events.length).fill(0);
  let latest = null;

  for (let i = 0; i < trials; i += 1) {
    const cards = config.draw(deck);
    latest = cards.map((card) => card.label).join(", ");
    config.events.forEach((event, index) => {
      if (event.test(cards)) counts[index] += 1;
    });
  }

  const deckView = document.getElementById("deckView");
  deckView.innerHTML = "";
  deck.forEach((card) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = card.label;
    deckView.appendChild(chip);
  });

  const exampleOutcomes = document.getElementById("exampleOutcomes");
  exampleOutcomes.innerHTML = "";
  config.exampleOutcomes.forEach((example, index) => {
    const card = document.createElement("div");
    card.className = "example-card";
    card.innerHTML = `<strong>Example ${index + 1}</strong><span>${example}</span>`;
    exampleOutcomes.appendChild(card);
  });

  const modeLabel = mode === "one"
    ? "one draw from a 52-card deck"
    : mode === "with"
      ? "two ordered draws with replacement"
      : "two ordered draws without replacement";

  document.getElementById("spaceInfo").textContent =
    `This mode uses ${modeLabel}. The full deck is shown below. For this experiment, the total number of equally likely ordered outcomes is ${config.sampleSpaceSize}, so each elementary outcome has probability ${config.perOutcomeProbability}.`;

  document.getElementById("summary").textContent =
    `Mode: ${modeLabel} | Trials: ${trials} | Total possible outcomes: ${config.sampleSpaceSize} | Probability of each elementary outcome: ${config.perOutcomeProbability} | Latest outcome: ${latest}`;

  const body = document.getElementById("resultBody");
  body.innerHTML = "";

  config.events.forEach((event, index) => {
    const observed = counts[index] / trials;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${event.name}</td>
      <td>${event.description}<br>Examples: ${event.examples.join(", ")}</td>
      <td>${event.goodCount} out of ${config.sampleSpaceSize}</td>
      <td>${event.exact.toFixed(6)}</td>
      <td>${counts[index]} / ${trials} = ${observed.toFixed(6)}</td>
    `;
    body.appendChild(row);
  });
}

document.getElementById("runBtn").addEventListener("click", runSimulation);
document.getElementById("mode").addEventListener("change", runSimulation);
runSimulation();
