const canvas = document.getElementById("scene");
const ctx = canvas.getContext("2d");

function uniform(min, max) {
  return min + Math.random() * (max - min);
}

function eventConfig(L, d) {
  return [
    { name: "A", meaning: "The needle intersects a line. This happens when X <= (L/2) sin(theta).", exact: (2 * L) / (d * Math.PI), test: (x, theta) => x <= (L / 2) * Math.sin(theta) },
    { name: "B", meaning: "The needle does not intersect a line. This is the opposite of A.", exact: 1 - (2 * L) / (d * Math.PI), test: (x, theta) => x > (L / 2) * Math.sin(theta) },
    { name: "C", meaning: "The angle is smaller than pi/6.", exact: 1 / 3, test: (x, theta) => theta < Math.PI / 6 },
    { name: "D", meaning: "The center of the needle is closer than d/4 to the nearest line.", exact: 1 / 2, test: (x, theta) => x < d / 4 },
    { name: "E", meaning: "The needle intersects a line and the angle is greater than pi/4.", exact: (L * Math.sqrt(2)) / (d * Math.PI), test: (x, theta) => x <= (L / 2) * Math.sin(theta) && theta > Math.PI / 4 },
    { name: "F", meaning: "The angle is greater than pi/3.", exact: 1 / 3, test: (x, theta) => theta > Math.PI / 3 }
  ];
}

function drawScene(d, sample, isHit) {
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const topLineY = 80;
  const pxPerDistance = 90;
  const secondLineY = topLineY + d * pxPerDistance;

  ctx.strokeStyle = "#375f9a";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, topLineY);
  ctx.lineTo(w, topLineY);
  ctx.moveTo(0, secondLineY);
  ctx.lineTo(w, secondLineY);
  ctx.stroke();

  const centerX = w * 0.5;
  const centerY = topLineY + sample.x * pxPerDistance;

  const needlePx = sample.L * pxPerDistance;
  const dx = (needlePx / 2) * Math.cos(sample.theta);
  const dy = (needlePx / 2) * Math.sin(sample.theta);

  ctx.strokeStyle = isHit ? "#1b8a5a" : "#b23a48";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(centerX - dx, centerY - dy);
  ctx.lineTo(centerX + dx, centerY + dy);
  ctx.stroke();

  ctx.fillStyle = "#18263d";
  ctx.beginPath();
  ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
  ctx.fill();
}

function runSimulation() {
  const L = Number(document.getElementById("needleLength").value);
  const d = Number(document.getElementById("lineDistance").value);
  const rawTrials = Number(document.getElementById("trialCount").value);
  const trials = Number.isFinite(rawTrials) && rawTrials > 0 ? Math.floor(rawTrials) : 1;
  const summary = document.getElementById("summary");
  const spaceInfo = document.getElementById("spaceInfo");

  if (!Number.isFinite(L) || !Number.isFinite(d) || L <= 0 || d <= 0) {
    summary.textContent = "Invalid input: L and d must be positive numbers.";
    spaceInfo.textContent = "Enter positive values for L and d to describe the Buffon model.";
    return;
  }

  if (L > d) {
    summary.textContent = "Invalid input: use L <= d for this model.";
    spaceInfo.textContent = "This version assumes L <= d, so the needle is not longer than the distance between lines.";
    return;
  }

  const events = eventConfig(L, d);
  const counts = new Array(events.length).fill(0);
  let latest = null;

  for (let i = 0; i < trials; i += 1) {
    const x = uniform(0, d / 2);
    const theta = uniform(0, Math.PI / 2);
    latest = { x, theta, L };
    events.forEach((event, index) => {
      if (event.test(x, theta)) counts[index] += 1;
    });
  }

  spaceInfo.textContent =
    `One throw is one point (X, theta) inside the rectangle Ω = [0, d/2] × [0, pi/2]. Here X is the center distance to the nearest line, and theta is the angle of the needle. In this run, L = ${L} and d = ${d}.`;

  summary.textContent =
    `Model: X ~ Uniform[0,d/2], theta ~ Uniform[0,pi/2], independent | Throws: ${trials} | Latest sample: x=${latest.x.toFixed(4)}, theta=${latest.theta.toFixed(4)} rad (${(latest.theta * 180 / Math.PI).toFixed(2)} deg)`;

  const body = document.getElementById("resultBody");
  body.innerHTML = "";

  events.forEach((event, index) => {
    const observed = counts[index] / trials;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${event.name}</td>
      <td>${event.meaning}</td>
      <td>${event.exact.toFixed(6)}</td>
      <td>${counts[index]} / ${trials} = ${observed.toFixed(6)}</td>
    `;
    body.appendChild(row);
  });

  drawScene(d, latest, latest.x <= (L / 2) * Math.sin(latest.theta));
}

document.getElementById("runBtn").addEventListener("click", runSimulation);
runSimulation();
