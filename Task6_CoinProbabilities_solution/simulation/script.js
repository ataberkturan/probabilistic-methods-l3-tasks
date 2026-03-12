function generateOutcome(tosses) {
  const values = [];
  for (let i = 0; i < tosses; i += 1) {
    values.push(Math.random() < 0.5 ? "H" : "T");
  }
  return `(${values.join(",")})`;
}

function getConfig(tosses) {
  if (tosses === 1) {
    return {
      sampleSpaceSize: 2,
      perOutcomeProbability: "1/2",
      events: [
        { name: "A1", subset: "{H}", exact: 0.5, test: (o) => o === "(H)" },
        { name: "B1", subset: "{T}", exact: 0.5, test: (o) => o === "(T)" },
        { name: "C1", subset: "{H}", exact: 0.5, test: (o) => o === "(H)" }
      ]
    };
  }

  if (tosses === 2) {
    return {
      sampleSpaceSize: 4,
      perOutcomeProbability: "1/4",
      events: [
        { name: "A2", subset: "{(H,T),(T,H)}", exact: 0.5, test: (o) => o === "(H,T)" || o === "(T,H)" },
        { name: "B2", subset: "{(H,H),(H,T),(T,H)}", exact: 0.75, test: (o) => o !== "(T,T)" },
        { name: "C2", subset: "{(H,H),(T,T)}", exact: 0.5, test: (o) => o === "(H,H)" || o === "(T,T)" }
      ]
    };
  }

  return {
    sampleSpaceSize: 8,
    perOutcomeProbability: "1/8",
    events: [
      { name: "A3", subset: "{(H,H,T),(H,T,H),(T,H,H)}", exact: 0.375, test: (o) => ["(H,H,T)","(H,T,H)","(T,H,H)"].includes(o) },
      { name: "B3", subset: "Ω3 \\ {(H,H,H)}", exact: 0.875, test: (o) => o !== "(H,H,H)" },
      { name: "C3", subset: "{(H,H,H),(T,T,T)}", exact: 0.25, test: (o) => o === "(H,H,H)" || o === "(T,T,T)" },
      { name: "D3", subset: "{(H,T,T),(T,H,T),(T,T,H)}", exact: 0.375, test: (o) => ["(H,T,T)","(T,H,T)","(T,T,H)"].includes(o) }
    ]
  };
}

function runSimulation() {
  const tosses = Number(document.getElementById("tossCount").value);
  const rawTrials = Number(document.getElementById("trialCount").value);
  const trials = Number.isFinite(rawTrials) && rawTrials > 0 ? Math.floor(rawTrials) : 1;
  const config = getConfig(tosses);

  const counts = new Array(config.events.length).fill(0);
  for (let i = 0; i < trials; i += 1) {
    const outcome = generateOutcome(tosses);
    config.events.forEach((event, index) => {
      if (event.test(outcome)) counts[index] += 1;
    });
  }

  document.getElementById("summary").textContent =
    `Tosses: ${tosses} | Sample-space size: ${config.sampleSpaceSize} | Probability of each elementary outcome: ${config.perOutcomeProbability} | Trials: ${trials}`;

  const body = document.getElementById("resultBody");
  body.innerHTML = "";

  config.events.forEach((event, index) => {
    const observed = counts[index] / trials;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${event.name}</td>
      <td>${event.subset}</td>
      <td>${event.exact.toFixed(3)}</td>
      <td>${observed.toFixed(3)}</td>
    `;
    body.appendChild(row);
  });
}

document.getElementById("runBtn").addEventListener("click", runSimulation);
runSimulation();
