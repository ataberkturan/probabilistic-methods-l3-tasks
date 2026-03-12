const STATES = ["S", "C", "R"];
const TOP_N = 20;

function randomState() {
  return STATES[Math.floor(Math.random() * STATES.length)];
}

function randomSequence(days) {
  const seq = [];
  for (let i = 0; i < days; i += 1) {
    seq.push(randomState());
  }
  return `(${seq.join(",")})`;
}

function runSimulation() {
  const days = Number(document.getElementById("horizon").value);
  const rawTrials = Number(document.getElementById("trials").value);
  const trials = Number.isFinite(rawTrials) && rawTrials > 0 ? Math.floor(rawTrials) : 1;

  const counts = new Map();
  for (let i = 0; i < trials; i += 1) {
    const outcome = randomSequence(days);
    counts.set(outcome, (counts.get(outcome) || 0) + 1);
  }

  const totalOutcomes = Math.pow(3, days);
  const theoretical = 1 / totalOutcomes;

  const sorted = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, TOP_N);

  const resultBody = document.getElementById("resultBody");
  resultBody.innerHTML = "";

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
    resultBody.appendChild(row);
  }

  const summary = document.getElementById("summary");
  summary.textContent =
    `Horizon: ${days} day(s) | Trials: ${trials} | Theoretical total outcomes: ${totalOutcomes} | Distinct observed outcomes: ${counts.size} | Top-${TOP_N} observed-frequency sum: ${topObservedSum.toFixed(6)} | Global observed-frequency sum: ~1.000000`;
}

document.getElementById("runBtn").addEventListener("click", runSimulation);
runSimulation();
