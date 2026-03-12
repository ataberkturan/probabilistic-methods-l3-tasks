const STATES = ["S", "C", "R"];
const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function simulateWeek() {
  return Array.from({ length: 7 }, () => STATES[Math.floor(Math.random() * STATES.length)]);
}

function countValue(week, value) {
  return week.filter((day) => day === value).length;
}

const EVENTS = [
  {
    name: "A",
    description: "Weekend is sunny",
    example: "Sat=S, Sun=S",
    exact: 1 / 9,
    test: (week) => week[5] === "S" && week[6] === "S"
  },
  {
    name: "B",
    description: "Wednesday, Thursday, Friday are all rainy",
    example: "Wed=R, Thu=R, Fri=R",
    exact: 1 / 27,
    test: (week) => week[2] === "R" && week[3] === "R" && week[4] === "R"
  },
  {
    name: "C",
    description: "At least one sunny day",
    example: "The week contains at least one S",
    exact: 1 - Math.pow(2 / 3, 7),
    test: (week) => week.includes("S")
  },
  {
    name: "D",
    description: "No rainy day",
    example: "All 7 days are only S or C",
    exact: Math.pow(2 / 3, 7),
    test: (week) => !week.includes("R")
  },
  {
    name: "E",
    description: "Exactly two sunny days",
    example: "The week contains exactly two S values",
    exact: 224 / 729,
    test: (week) => countValue(week, "S") === 2
  },
  {
    name: "F",
    description: "Exactly one rainy day",
    example: "The week contains exactly one R value",
    exact: 448 / 729,
    test: (week) => countValue(week, "R") === 1
  }
];

function runSimulation() {
  const rawTrials = Number(document.getElementById("trialCount").value);
  const trials = Number.isFinite(rawTrials) && rawTrials > 0 ? Math.floor(rawTrials) : 1;
  const counts = new Array(EVENTS.length).fill(0);
  let latestWeek = null;

  for (let i = 0; i < trials; i += 1) {
    const week = simulateWeek();
    latestWeek = week;
    EVENTS.forEach((event, index) => {
      if (event.test(week)) counts[index] += 1;
    });
  }

  const stateLegend = document.getElementById("stateLegend");
  stateLegend.innerHTML = "";
  [
    "S = Sunny",
    "C = Cloudy",
    "R = Rainy"
  ].forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = item;
    stateLegend.appendChild(chip);
  });

  document.getElementById("spaceInfo").textContent =
    "One weekly outcome means one full ordered 7-day sequence from Monday to Sunday. Each day is independent, and each day has probability 1/3 for S, C, and R.";

  const exampleWeeks = document.getElementById("exampleWeeks");
  exampleWeeks.innerHTML = "";
  [
    ["Mon=S", "Tue=C", "Wed=R", "Thu=R", "Fri=S", "Sat=C", "Sun=S"],
    ["Mon=R", "Tue=R", "Wed=C", "Thu=S", "Fri=C", "Sat=S", "Sun=R"],
    ["Mon=C", "Tue=C", "Wed=C", "Thu=R", "Fri=S", "Sat=S", "Sun=C"]
  ].forEach((week, index) => {
    const card = document.createElement("div");
    card.className = "example-card";
    card.innerHTML = `<strong>Example week ${index + 1}</strong><span>${week.join(", ")}</span>`;
    exampleWeeks.appendChild(card);
  });

  document.getElementById("summary").textContent =
    `Model: 7 independent days, each with probability 1/3 for S, C, and R | Simulated weeks: ${trials} | Latest week: ${latestWeek.map((day, index) => `${DAY_NAMES[index]}=${day}`).join(", ")}`;

  const body = document.getElementById("resultBody");
  body.innerHTML = "";

  EVENTS.forEach((event, index) => {
    const observed = counts[index] / trials;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${event.name}</td>
      <td>${event.description}<br>Example: ${event.example}</td>
      <td>${event.exact.toFixed(6)}</td>
      <td>${counts[index]} / ${trials} = ${observed.toFixed(6)}</td>
    `;
    body.appendChild(row);
  });
}

document.getElementById("runBtn").addEventListener("click", runSimulation);
runSimulation();
