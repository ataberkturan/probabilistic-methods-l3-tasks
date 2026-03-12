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
    rule: "Saturday = S and Sunday = S",
    exact: 1 / 9,
    test: (week) => week[5] === "S" && week[6] === "S"
  },
  {
    name: "B",
    rule: "Wednesday, Thursday, Friday are all R",
    exact: 1 / 27,
    test: (week) => week[2] === "R" && week[3] === "R" && week[4] === "R"
  },
  {
    name: "C",
    rule: "at least one sunny day",
    exact: 1 - Math.pow(2 / 3, 7),
    test: (week) => week.includes("S")
  },
  {
    name: "D",
    rule: "no rainy day",
    exact: Math.pow(2 / 3, 7),
    test: (week) => !week.includes("R")
  },
  {
    name: "E",
    rule: "exactly two sunny days",
    exact: 224 / 729,
    test: (week) => countValue(week, "S") === 2
  },
  {
    name: "F",
    rule: "exactly one rainy day",
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

  document.getElementById("summary").textContent =
    `Model: 7 independent days, each with probability 1/3 for S, C, and R | Simulated weeks: ${trials} | Latest week: ${latestWeek.map((day, index) => `${DAY_NAMES[index]}=${day}`).join(", ")}`;

  const body = document.getElementById("resultBody");
  body.innerHTML = "";

  EVENTS.forEach((event, index) => {
    const observed = counts[index] / trials;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${event.name}</td>
      <td>${event.rule}</td>
      <td>${event.exact.toFixed(6)}</td>
      <td>${observed.toFixed(6)}</td>
    `;
    body.appendChild(row);
  });
}

document.getElementById("runBtn").addEventListener("click", runSimulation);
runSimulation();
