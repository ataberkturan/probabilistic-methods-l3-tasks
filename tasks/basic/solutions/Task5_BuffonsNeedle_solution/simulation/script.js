const statusEl = document.getElementById("status");
const canvas = document.getElementById("scene");
const ctx = canvas.getContext("2d");

function uniform(min, max) {
  return min + Math.random() * (max - min);
}

function drawScene(distance, sample, isHit) {
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const topLineY = 80;
  const pxPerDistance = 90;
  const secondLineY = topLineY + distance * pxPerDistance;

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
  const rawThrows = Number(document.getElementById("throwsCount").value);
  const throwsCount = Number.isFinite(rawThrows) && rawThrows > 0 ? Math.floor(rawThrows) : 1;

  if (!Number.isFinite(L) || !Number.isFinite(d) || L <= 0 || d <= 0) {
    statusEl.innerHTML = `<span class="bad">Invalid input:</span> L and d must be positive numbers.`;
    return;
  }

  if (L > d) {
    statusEl.innerHTML = `<span class="bad">Input guard:</span> please use L <= d.`;
    return;
  }

  let hits = 0;
  let latest = null;

  for (let i = 0; i < throwsCount; i += 1) {
    const x = uniform(0, d / 2);
    const theta = uniform(0, Math.PI / 2);
    const hit = x <= (L / 2) * Math.sin(theta);
    if (hit) hits += 1;
    latest = { x, theta, hit, L };
  }

  const misses = throwsCount - hits;
  const rate = hits / throwsCount;

  statusEl.innerHTML =
    `Latest sample: x=${latest.x.toFixed(4)}, theta=${latest.theta.toFixed(4)} rad ` +
    `(${(latest.theta * 180 / Math.PI).toFixed(2)} deg)<br>` +
    `Latest throw result: <span class="${latest.hit ? "ok" : "bad"}">${latest.hit ? "HIT" : "MISS"}</span><br>` +
    `Throws: ${throwsCount} | Hits: ${hits} | Misses: ${misses} | Empirical hit rate: ${rate.toFixed(6)}`;

  drawScene(d, latest, latest.hit);
}

document.getElementById("runBtn").addEventListener("click", runSimulation);
runSimulation();
