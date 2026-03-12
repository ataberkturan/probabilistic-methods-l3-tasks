function formatOutcome(values) {
  return `(${values.join(",")})`;
}

function allOutcomes(rolls) {
  const result = [];

  function build(prefix, depth) {
    if (depth === rolls) {
      result.push(formatOutcome(prefix));
      return;
    }
    for (let value = 1; value <= 6; value += 1) {
      build([...prefix, value], depth + 1);
    }
  }

  build([], 0);
  return result;
}

function randomOutcome(rolls) {
  const values = [];
  for (let i = 0; i < rolls; i += 1) {
    values.push(1 + Math.floor(Math.random() * 6));
  }
  return formatOutcome(values);
}

function setSummary(rolls, trials, outcomesCount, observedSum) {
  const summary = document.getElementById("summary");
  summary.textContent =
    `Trials: ${trials} | Rolls per trial: ${rolls} | Elementary outcomes: ${outcomesCount} | Sum of observed frequencies: ${observedSum.toFixed(4)}`;
}

function renderRows(rows, bodyId) {
  const body = document.getElementById(bodyId);
  body.innerHTML = "";

  for (const row of rows) {
    const tr = document.createElement("tr");
    tr.innerHTML = row;
    body.appendChild(tr);
  }
}

function runSimulation() {
  const rolls = Number(document.getElementById("rollCount").value);
  const trialsRaw = Number(document.getElementById("trialCount").value);
  const trials = Number.isFinite(trialsRaw) && trialsRaw > 0 ? Math.floor(trialsRaw) : 1;

  const outcomes = allOutcomes(rolls);
  const counts = Object.fromEntries(outcomes.map((o) => [o, 0]));
  const sampleSpaceEl = document.getElementById("sampleSpace");
  sampleSpaceEl.innerHTML = "";

  for (let t = 0; t < trials; t += 1) {
    counts[randomOutcome(rolls)] += 1;
  }

  const theoretical = 1 / Math.pow(6, rolls);
  let observedSum = 0;

  const tableTitle = document.getElementById("tableTitle");
  const tablePanel = document.getElementById("tablePanel");
  const topPanel = document.getElementById("topPanel");
  document.getElementById("spaceInfo").textContent =
    `For ${rolls} roll${rolls === 1 ? "" : "s"}, there are ${outcomes.length} equally likely ordered outcomes. Each one has probability ${theoretical.toFixed(5)}.`;
  outcomes.forEach((outcome) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = outcome;
    sampleSpaceEl.appendChild(chip);
  });

  if (rolls <= 2) {
    tableTitle.textContent = `All elementary outcomes for ${rolls} roll${rolls === 1 ? "" : "s"}`;
    tablePanel.hidden = false;
    topPanel.hidden = true;

    const rows = outcomes.map((outcome) => {
      const count = counts[outcome];
      const observed = count / trials;
      observedSum += observed;
      return `
        <td>${outcome}</td>
        <td>${count}</td>
        <td>${observed.toFixed(5)}</td>
        <td>${theoretical.toFixed(5)}</td>
      `;
    }).map((cells) => `<tr>${cells}</tr>`);

    renderRows(rows, "resultsBody");
  } else {
    tableTitle.textContent = "Aggregated expectation for 3-roll mode";
    tablePanel.hidden = false;
    topPanel.hidden = false;

    for (const outcome of outcomes) {
      observedSum += counts[outcome] / trials;
    }

    const aggregateRows = [
      `<tr><td>Any specific ordered triple</td><td>-</td><td>~${(1 / outcomes.length).toFixed(5)}</td><td>${theoretical.toFixed(5)}</td></tr>`,
      `<tr><td>Total outcomes tracked</td><td>${trials}</td><td>${observedSum.toFixed(5)}</td><td>1.00000</td></tr>`
    ];
    renderRows(aggregateRows, "resultsBody");

    const topRows = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([outcome, count]) => {
        const observed = count / trials;
        return `<tr><td>${outcome}</td><td>${count}</td><td>${observed.toFixed(5)}</td></tr>`;
      });

    renderRows(topRows, "topBody");
  }

  setSummary(rolls, trials, outcomes.length, observedSum);
}

document.getElementById("runBtn").addEventListener("click", runSimulation);
document.getElementById("rollCount").addEventListener("change", runSimulation);
runSimulation();
