function generateSampleSpace(tosses) {
  const outcomes = [];

  function build(prefix, depth) {
    if (depth === tosses) {
      outcomes.push(`(${prefix.join(",")})`);
      return;
    }
    build([...prefix, "H"], depth + 1);
    build([...prefix, "T"], depth + 1);
  }

  build([], 0);
  return outcomes;
}

function simulateOneOutcome(tosses) {
  const result = [];
  for (let i = 0; i < tosses; i += 1) {
    result.push(Math.random() < 0.5 ? "H" : "T");
  }
  return `(${result.join(",")})`;
}

function runSimulation() {
  const tossCount = Number(document.getElementById("tossCount").value);
  const trialCountInput = Number(document.getElementById("trialCount").value);
  const trialCount = Number.isFinite(trialCountInput) && trialCountInput > 0
    ? Math.floor(trialCountInput)
    : 1;

  const sampleSpace = generateSampleSpace(tossCount);
  const counts = Object.fromEntries(sampleSpace.map((outcome) => [outcome, 0]));

  for (let i = 0; i < trialCount; i += 1) {
    const outcome = simulateOneOutcome(tossCount);
    counts[outcome] += 1;
  }

  const body = document.getElementById("resultsBody");
  body.innerHTML = "";

  const theoretical = 1 / Math.pow(2, tossCount);
  let observedSum = 0;

  sampleSpace.forEach((outcome) => {
    const count = counts[outcome];
    const observed = count / trialCount;
    observedSum += observed;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${outcome}</td>
      <td>${count}</td>
      <td>${observed.toFixed(4)}</td>
      <td>${theoretical.toFixed(4)}</td>
    `;
    body.appendChild(row);
  });

  document.getElementById("summary").textContent =
    `Total trials: ${trialCount} | Number of outcomes: ${sampleSpace.length} | Sum of observed frequencies: ${observedSum.toFixed(4)}`;
}

document.getElementById("runBtn").addEventListener("click", runSimulation);
runSimulation();
