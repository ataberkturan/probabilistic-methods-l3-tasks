function rollOutcome(rolls) {
  const values = [];
  for (let i = 0; i < rolls; i += 1) {
    values.push(1 + Math.floor(Math.random() * 6));
  }
  return values;
}

function outcomeLabel(values) {
  return `(${values.join(",")})`;
}

function buildSampleSpace(rolls) {
  const outcomes = [];

  function walk(prefix, depth) {
    if (depth === rolls) {
      outcomes.push([...prefix]);
      return;
    }
    for (let value = 1; value <= 6; value += 1) {
      walk([...prefix, value], depth + 1);
    }
  }

  walk([], 0);
  return outcomes;
}

function getConfig(rolls) {
  if (rolls === 1) {
    const sampleSpace = buildSampleSpace(1);
    return {
      sampleSpace,
      sampleSpaceSize: 6,
      perOutcomeProbability: "1/6",
      events: [
        { name: "A1", rule: "{2,4,6}", exact: 1 / 2, test: (v) => v[0] % 2 === 0 },
        { name: "B1", rule: "{5,6}", exact: 1 / 3, test: (v) => v[0] > 4 },
        { name: "C1", rule: "{1,2,3}", exact: 1 / 2, test: (v) => v[0] <= 3 }
      ]
    };
  }

  if (rolls === 2) {
    const sampleSpace = buildSampleSpace(2);
    return {
      sampleSpace,
      sampleSpaceSize: 36,
      perOutcomeProbability: "1/36",
      events: [
        { name: "A2", rule: "sum = 7", exact: 1 / 6, test: (v) => v[0] + v[1] === 7 },
        { name: "B2", rule: "both equal", exact: 1 / 6, test: (v) => v[0] === v[1] },
        { name: "C2", rule: "sum >= 10", exact: 1 / 6, test: (v) => v[0] + v[1] >= 10 }
      ]
    };
  }

  const sampleSpace = buildSampleSpace(3);
  return {
    sampleSpace,
    sampleSpaceSize: 216,
    perOutcomeProbability: "1/216",
    events: [
      { name: "A3", rule: "sum = 10", exact: 1 / 8, test: (v) => v[0] + v[1] + v[2] === 10 },
      {
        name: "B3",
        rule: "exactly two equal",
        exact: 5 / 12,
        test: (v) => {
          const counts = {};
          v.forEach((n) => {
            counts[n] = (counts[n] || 0) + 1;
          });
          return Object.values(counts).includes(2);
        }
      },
      {
        name: "C3",
        rule: "two 2s and one 3",
        exact: 1 / 72,
        test: (v) => {
          const sorted = [...v].sort((a, b) => a - b);
          return sorted[0] === 2 && sorted[1] === 2 && sorted[2] === 3;
        }
      },
      { name: "D3", rule: "at least one 6", exact: 91 / 216, test: (v) => v.includes(6) }
    ]
  };
}

function runSimulation() {
  const rolls = Number(document.getElementById("rollCount").value);
  const rawTrials = Number(document.getElementById("trialCount").value);
  const trials = Number.isFinite(rawTrials) && rawTrials > 0 ? Math.floor(rawTrials) : 1;
  const config = getConfig(rolls);
  const eventSubsets = config.events.map((event) =>
    config.sampleSpace.filter((values) => event.test(values)).map((values) => outcomeLabel(values))
  );

  const counts = new Array(config.events.length).fill(0);
  let latestOutcome = null;

  for (let i = 0; i < trials; i += 1) {
    const values = rollOutcome(rolls);
    latestOutcome = values;
    config.events.forEach((event, index) => {
      if (event.test(values)) counts[index] += 1;
    });
  }

  document.getElementById("spaceInfo").textContent =
    `For ${rolls} roll${rolls === 1 ? "" : "s"}, there are ${config.sampleSpaceSize} equally likely ordered outcomes. Each one has probability ${config.perOutcomeProbability}.`;

  const sampleSpaceEl = document.getElementById("sampleSpace");
  sampleSpaceEl.innerHTML = "";
  config.sampleSpace.forEach((values) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = outcomeLabel(values);
    sampleSpaceEl.appendChild(chip);
  });

  document.getElementById("summary").textContent =
    `Rolls: ${rolls} | Trials: ${trials} | Total possible outcomes: ${config.sampleSpaceSize} | Probability of each elementary outcome: ${config.perOutcomeProbability} | Latest outcome: ${outcomeLabel(latestOutcome)}`;

  const body = document.getElementById("resultBody");
  body.innerHTML = "";

  config.events.forEach((event, index) => {
    const observed = counts[index] / trials;
    const subset = eventSubsets[index];
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${event.name}</td>
      <td>${subset.join(", ")}</td>
      <td>${subset.length} out of ${config.sampleSpaceSize}</td>
      <td>${event.exact.toFixed(6)}</td>
      <td>${counts[index]} / ${trials} = ${observed.toFixed(6)}</td>
    `;
    body.appendChild(row);
  });
}

document.getElementById("runBtn").addEventListener("click", runSimulation);
document.getElementById("rollCount").addEventListener("change", runSimulation);
runSimulation();
