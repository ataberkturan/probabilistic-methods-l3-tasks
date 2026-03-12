const STATES = ["S", "C", "R"];
const TOP_N = 20;
const horizonEl = document.getElementById("horizon");
const summaryEl = document.getElementById("summary");
const resultBodyEl = document.getElementById("resultBody");
const spaceInfoEl = document.getElementById("spaceInfo");
const exampleOutcomesEl = document.getElementById("exampleOutcomes");

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

function getExampleOutcomes(days) {
  if (days === 1) {
    return [
      ["One sunny day", "(S)"],
      ["One cloudy day", "(C)"],
      ["One rainy day", "(R)"],
    ];
  }

  if (days === 2) {
    return [
      ["Sunny then cloudy", "(S,C)"],
      ["Rainy then sunny", "(R,S)"],
      ["Two rainy days", "(R,R)"],
    ];
  }

  return [
    ["Mixed week", "(S,C,R,R,S,C,S)"],
    ["All sunny", "(S,S,S,S,S,S,S)"],
    ["Rain starts the week", "(R,R,C,S,S,C,R)"],
  ];
}

function runSimulation() {
  const days = Number(horizonEl.value);
  const rawTrials = Number(document.getElementById("trials").value);
  const trials = Number.isFinite(rawTrials) && rawTrials > 0 ? Math.floor(rawTrials) : 1;

  const counts = new Map();
  for (let i = 0; i < trials; i += 1) {
    const outcome = randomSequence(days);
    counts.set(outcome, (counts.get(outcome) || 0) + 1);
  }

  const totalOutcomes = Math.pow(3, days);
  const theoretical = 1 / totalOutcomes;
  spaceInfoEl.textContent = `For ${days} day(s), one elementary outcome is one ordered weather sequence using S, C, and R. There are ${totalOutcomes} equally likely outcomes in total, so each one has theoretical frequency ${theoretical.toFixed(6)}.`;
  exampleOutcomesEl.innerHTML = getExampleOutcomes(days)
    .map(
      ([label, example]) => `
        <div class="example-card">
          <strong>${label}</strong>
          <span>${example}</span>
        </div>
      `
    )
    .join("");

  const sorted = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, TOP_N);

  resultBodyEl.innerHTML = "";

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
    resultBodyEl.appendChild(row);
  }

  summaryEl.textContent =
    `Horizon: ${days} day(s) | Trials: ${trials} | Theoretical total outcomes: ${totalOutcomes} | Distinct observed outcomes: ${counts.size} | Top-${TOP_N} observed-frequency sum: ${topObservedSum.toFixed(6)} | Global observed-frequency sum: ~1.000000`;
}

document.getElementById("runBtn").addEventListener("click", runSimulation);
horizonEl.addEventListener("change", runSimulation);
runSimulation();
