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

function getConfig(mode) {
  if (mode === "one") {
    return {
      sampleSpaceSize: 52,
      perOutcomeProbability: "1/52",
      draw: drawOne,
      events: [
        { name: "A1", rule: "card is a heart", exact: 1 / 4, test: (cards) => cards[0].suit === "H" },
        { name: "B1", rule: "card is a king", exact: 1 / 13, test: (cards) => cards[0].rank === "K" },
        { name: "C1", rule: "card is not a face card", exact: 10 / 13, test: (cards) => !["J", "Q", "K"].includes(cards[0].rank) }
      ]
    };
  }

  if (mode === "with") {
    return {
      sampleSpaceSize: 2704,
      perOutcomeProbability: "1/2704",
      draw: drawTwoWithReplacement,
      events: [
        { name: "A2", rule: "both cards are hearts", exact: 1 / 16, test: (cards) => cards[0].suit === "H" && cards[1].suit === "H" },
        { name: "B2", rule: "both cards have same rank", exact: 1 / 13, test: (cards) => cards[0].rank === cards[1].rank },
        { name: "C2", rule: "at least one ace", exact: 25 / 169, test: (cards) => cards[0].rank === "A" || cards[1].rank === "A" }
      ]
    };
  }

  return {
    sampleSpaceSize: 2652,
    perOutcomeProbability: "1/2652",
    draw: drawTwoWithoutReplacement,
    events: [
      { name: "A3", rule: "both cards are hearts", exact: 1 / 17, test: (cards) => cards[0].suit === "H" && cards[1].suit === "H" },
      { name: "B3", rule: "both cards have same rank", exact: 1 / 17, test: (cards) => cards[0].rank === cards[1].rank },
      {
        name: "C3",
        rule: "one king and one queen",
        exact: 8 / 663,
        test: (cards) => {
          const ranks = [cards[0].rank, cards[1].rank];
          return ranks.includes("K") && ranks.includes("Q");
        }
      },
      { name: "D3", rule: "both cards are aces", exact: 1 / 221, test: (cards) => cards[0].rank === "A" && cards[1].rank === "A" }
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

  document.getElementById("summary").textContent =
    `Mode: ${mode} | Sample-space size: ${config.sampleSpaceSize} | Probability of each elementary outcome: ${config.perOutcomeProbability} | Trials: ${trials} | Latest outcome: ${latest}`;

  const body = document.getElementById("resultBody");
  body.innerHTML = "";

  config.events.forEach((event, index) => {
    const observed = counts[index] / trials;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${event.name}</td>
      <td>${event.rule}</td>
      <td>${event.exact.toFixed(4)}</td>
      <td>${observed.toFixed(4)}</td>
    `;
    body.appendChild(row);
  });
}

document.getElementById("runBtn").addEventListener("click", runSimulation);
runSimulation();
