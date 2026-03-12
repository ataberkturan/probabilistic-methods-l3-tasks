const RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const SUITS = ["♠", "♥", "♦", "♣"];
const TOP_N = 25;

function createDeck() {
  const deck = [];
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      deck.push(`${rank}${suit}`);
    }
  }
  return deck;
}

function randomInt(maxExclusive) {
  return Math.floor(Math.random() * maxExclusive);
}

function drawPairWithReplacement(deck) {
  const c1 = deck[randomInt(deck.length)];
  const c2 = deck[randomInt(deck.length)];
  return `(${c1},${c2})`;
}

function drawPairWithoutReplacement(deck) {
  const firstIndex = randomInt(deck.length);
  let secondIndex = randomInt(deck.length - 1);
  if (secondIndex >= firstIndex) {
    secondIndex += 1;
  }
  return `(${deck[firstIndex]},${deck[secondIndex]})`;
}

function runSimulation() {
  const mode = document.getElementById("mode").value;
  const rawTrials = Number(document.getElementById("trials").value);
  const trials = Number.isFinite(rawTrials) && rawTrials > 0 ? Math.floor(rawTrials) : 1;
  const deck = createDeck();
  const counts = new Map();

  for (let i = 0; i < trials; i += 1) {
    const outcome = mode === "with"
      ? drawPairWithReplacement(deck)
      : drawPairWithoutReplacement(deck);
    counts.set(outcome, (counts.get(outcome) || 0) + 1);
  }

  const outcomesCount = mode === "with" ? 52 * 52 : 52 * 51;
  const theoretical = 1 / outcomesCount;

  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, TOP_N);
  const body = document.getElementById("resultBody");
  body.innerHTML = "";

  let topObservedSum = 0;
  for (const [outcome, count] of sorted) {
    const observed = count / trials;
    topObservedSum += observed;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${outcome}</td>
      <td>${count}</td>
      <td>${observed.toFixed(6)}</td>
      <td>${theoretical.toFixed(6)}</td>
    `;
    body.appendChild(row);
  }

  const summary = document.getElementById("summary");
  summary.textContent =
    `Mode: ${mode === "with" ? "with replacement" : "without replacement"} | Trials: ${trials} | Total elementary outcomes: ${outcomesCount} | Distinct observed outcomes: ${counts.size} | Top-${TOP_N} observed-frequency sum: ${topObservedSum.toFixed(6)} | Global observed-frequency sum: ~1.000000`;
}

document.getElementById("runBtn").addEventListener("click", runSimulation);
runSimulation();
