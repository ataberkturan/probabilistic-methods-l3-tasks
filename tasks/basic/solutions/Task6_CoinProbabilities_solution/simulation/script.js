function generateOutcome(tosses) {
  const values = [];
  for (let i = 0; i < tosses; i += 1) {
    values.push(Math.random() < 0.5 ? "H" : "T");
  }
  return `(${values.join(",")})`;
}

function buildSampleSpace(tosses) {
  const outcomes = [];

  function walk(prefix, depth) {
    if (depth === tosses) {
      outcomes.push(`(${prefix.join(",")})`);
      return;
    }
    walk([...prefix, "H"], depth + 1);
    walk([...prefix, "T"], depth + 1);
  }

  walk([], 0);
  return outcomes;
}

function getConfig(tosses) {
  if (tosses === 1) {
    const sampleSpace = ["(H)", "(T)"];
    return {
      sampleSpace,
      sampleSpaceSize: 2,
      perOutcomeProbability: "1/2",
      events: [
        { name: "A1", exact: 0.5, test: (o) => o === "(H)" },
        { name: "B1", exact: 0.5, test: (o) => o === "(T)" },
        { name: "C1", exact: 0.5, test: (o) => o === "(H)" }
      ]
    };
  }

  if (tosses === 2) {
    const sampleSpace = buildSampleSpace(2);
    return {
      sampleSpace,
      sampleSpaceSize: 4,
      perOutcomeProbability: "1/4",
      events: [
        { name: "A2", exact: 0.5, test: (o) => o === "(H,T)" || o === "(T,H)" },
        { name: "B2", exact: 0.75, test: (o) => o !== "(T,T)" },
        { name: "C2", exact: 0.5, test: (o) => o === "(H,H)" || o === "(T,T)" }
      ]
    };
  }

  const sampleSpace = buildSampleSpace(3);
  return {
    sampleSpace,
    sampleSpaceSize: 8,
    perOutcomeProbability: "1/8",
    events: [
      { name: "A3", exact: 0.375, test: (o) => ["(H,H,T)","(H,T,H)","(T,H,H)"].includes(o) },
      { name: "B3", exact: 0.875, test: (o) => o !== "(H,H,H)" },
      { name: "C3", exact: 0.25, test: (o) => o === "(H,H,H)" || o === "(T,T,T)" },
      { name: "D3", exact: 0.375, test: (o) => ["(H,T,T)","(T,H,T)","(T,T,H)"].includes(o) }
    ]
  };
}

function runSimulation() {
  const tosses = Number(document.getElementById("tossCount").value);
  const rawTrials = Number(document.getElementById("trialCount").value);
  const trials = Number.isFinite(rawTrials) && rawTrials > 0 ? Math.floor(rawTrials) : 1;
  const config = getConfig(tosses);
  const sampleSpace = config.sampleSpace;
  const eventSubsets = config.events.map((event) =>
    sampleSpace.filter((outcome) => event.test(outcome))
  );

  const counts = new Array(config.events.length).fill(0);
  for (let i = 0; i < trials; i += 1) {
    const outcome = generateOutcome(tosses);
    config.events.forEach((event, index) => {
      if (event.test(outcome)) counts[index] += 1;
    });
  }

  document.getElementById("spaceInfo").textContent =
    `For ${tosses} toss${tosses === 1 ? "" : "es"}, there are ${config.sampleSpaceSize} equally likely outcomes. Each outcome below is one possible result, and each one has probability ${config.perOutcomeProbability}.`;

  const sampleSpaceEl = document.getElementById("sampleSpace");
  sampleSpaceEl.innerHTML = "";
  sampleSpace.forEach((outcome) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = outcome;
    sampleSpaceEl.appendChild(chip);
  });

  document.getElementById("summary").textContent =
    `Tosses: ${tosses} | Trials: ${trials} | Total possible outcomes: ${config.sampleSpaceSize} | Probability of each elementary outcome: ${config.perOutcomeProbability}`;

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
document.getElementById("tossCount").addEventListener("change", runSimulation);
runSimulation();
