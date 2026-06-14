const canvas = document.getElementById('spiderCanvas');
const ctx = canvas.getContext('2d');

let width = 0;
let height = 0;
let dpr = Math.min(window.devicePixelRatio || 1, 2);

const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const spider = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  vx: 0,
  vy: 0,
  pulse: 0,
};

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

window.addEventListener('resize', resize);
window.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

window.addEventListener('touchmove', (event) => {
  const touch = event.touches[0];
  if (touch) {
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
  }
}, { passive: true });

function drawGlowLine(x1, y1, x2, y2, color, width, alpha) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.globalAlpha = alpha;
  ctx.shadowBlur = 18;
  ctx.shadowColor = color;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
}

function drawSpider(x, y, t) {
  const bodyScale = 1 + Math.sin(t * 0.0018) * 0.02;
  const pulse = Math.sin(t * 0.0022) * 0.4 + 0.6;
  const toMouseX = mouse.x - x;
  const toMouseY = mouse.y - y;
  const mouseDir = Math.atan2(toMouseY, toMouseX);

  ctx.save();
  ctx.translate(x, y);
  ctx.scale(bodyScale, bodyScale);

  for (let i = 0; i < 8; i++) {
    const side = i < 4 ? -1 : 1;
    const legIndex = i < 4 ? i : i - 4;
    const baseAngle = (legIndex / 3) * 0.9 - 0.45;
    const sway = Math.sin(t * 0.0022 + i * 0.8) * 0.18;
    const reach = Math.cos(t * 0.0018 + i * 0.6) * 6 + 6;
    const angle = mouseDir + side * (0.35 + baseAngle) + sway;

    const startX = Math.cos(angle * 0.18) * (18 + legIndex * 1.4);
    const startY = Math.sin(angle * 0.18) * (10 + legIndex * 1.4);
    const bend = 44 + legIndex * 4 + reach;
    const endX = Math.cos(angle) * (58 + i * 2.2 + reach * 2.5);
    const endY = Math.sin(angle) * (58 + i * 2.2 + reach * 2.5);

    const c1x = startX + Math.cos(angle + 0.55) * bend;
    const c1y = startY + Math.sin(angle + 0.55) * bend;
    const c2x = endX - Math.cos(angle + 0.25) * bend * 0.65;
    const c2y = endY - Math.sin(angle + 0.25) * bend * 0.65;

    const glow = i % 2 === 0 ? 'rgba(145, 208, 255, 0.95)' : 'rgba(186, 132, 255, 0.92)';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    drawGlowLine(startX, startY, c1x, c1y, glow, 2.3, 0.45);
    drawGlowLine(c1x, c1y, c2x, c2y, glow, 2.3, 0.75);
    drawGlowLine(c2x, c2y, endX, endY, glow, 2.3, 0.45);

    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.beginPath();
    ctx.arc(endX, endY, 1.6 + (i % 3) * 0.2, 0, Math.PI * 2);
    ctx.fill();
  }

  // body / abdomen
  const bodyGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, 60);
  bodyGradient.addColorStop(0, 'rgba(255,255,255,0.95)');
  bodyGradient.addColorStop(0.2, 'rgba(148, 165, 255, 0.52)');
  bodyGradient.addColorStop(0.7, 'rgba(75, 91, 140, 0.18)');
  bodyGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

  ctx.fillStyle = bodyGradient;
  ctx.beginPath();
  ctx.ellipse(0, 0, 26, 18 + pulse * 2, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = 'rgba(236, 242, 255, 0.9)';
  ctx.lineWidth = 1.4;
  ctx.shadowBlur = 18;
  ctx.shadowColor = 'rgba(148, 163, 255, 0.75)';
  ctx.beginPath();
  ctx.ellipse(0, 0, 26, 18 + pulse * 2, 0, 0, Math.PI * 2);
  ctx.stroke();

  // segmented spine / dragon feel
  ctx.strokeStyle = 'rgba(255,255,255,0.75)';
  ctx.lineWidth = 1.2;
  ctx.shadowBlur = 10;
  ctx.shadowColor = 'rgba(255,255,255,0.38)';
  for (let i = 0; i < 4; i++) {
    const r = 10 + i * 5;
    ctx.beginPath();
    ctx.ellipse(0, 0, r, r * 0.6, 0.1 * i, 0, Math.PI * 2);
    ctx.stroke();
  }

  // eyes
  ctx.fillStyle = 'rgba(255, 255, 255, 0.98)';
  ctx.shadowBlur = 16;
  ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
  ctx.fillRect(-3, -4, 2.6, 2.6);
  ctx.fillRect(3, -4, 2.6, 2.6);

  // mouth / fangs
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(-4, 4);
  ctx.lineTo(0, 7);
  ctx.lineTo(4, 4);
  ctx.stroke();

  ctx.restore();
}

function animate(now) {
  const t = now || 0;

  spider.vx += (mouse.x - spider.x) * 0.03;
  spider.vy += (mouse.y - spider.y) * 0.03;
  spider.vx *= 0.82;
  spider.vy *= 0.82;

  spider.x += spider.vx;
  spider.y += spider.vy;

  spider.pulse = (spider.pulse + 0.02) % (Math.PI * 2);

  ctx.clearRect(0, 0, width, height);

  // subtle black ambient glow
  const glow = ctx.createRadialGradient(width * 0.5, height * 0.35, 0, width * 0.5, height * 0.35, Math.max(width, height) * 0.75);
  glow.addColorStop(0, 'rgba(8, 8, 12, 0.1)');
  glow.addColorStop(0.35, 'rgba(7, 9, 14, 0.18)');
  glow.addColorStop(1, 'rgba(0, 0, 0, 0.95)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);

  drawSpider(spider.x, spider.y, t);

  // little floating particles around the spider
  for (let i = 0; i < 5; i++) {
    const a = (t * 0.0003 + i * 0.8) % (Math.PI * 2);
    const px = spider.x + Math.cos(a) * (50 + i * 8) + Math.sin(t * 0.001 + i) * 6;
    const py = spider.y + Math.sin(a) * (35 + i * 6) + Math.cos(t * 0.0014 + i) * 6;
    ctx.fillStyle = i % 2 === 0 ? 'rgba(145, 208, 255, 0.55)' : 'rgba(186, 132, 255, 0.45)';
    ctx.beginPath();
    ctx.arc(px, py, 1.2 + (i % 3) * 0.35, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(animate);
}

resize();
requestAnimationFrame(animate);
