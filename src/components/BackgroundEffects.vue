<template>
  <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
    <!-- Dark Tech Gradient Base -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#060c1d] to-[#030712] opacity-95"></div>

    <!-- Silicon Circuit Board & Pulses Canvas -->
    <canvas ref="canvasRef" class="absolute inset-0 w-full h-full opacity-60"></canvas>

    <!-- Floating Math Formula Elements (honoring 10 years Math Olympiad background) -->
    <div 
      v-for="(item, index) in mathFormulas" 
      :key="index"
      class="absolute text-cyan-400/20 font-mono transition-transform duration-1000 ease-out hover:text-cyan-300/60"
      :style="{
        left: item.x + '%',
        top: item.y + '%',
        fontSize: item.size + 'rem',
        opacity: item.opacity,
        transform: `translate(${item.offsetX}px, ${item.offsetY}px) rotate(${item.rotation}deg)`
      }"
    >
      {{ item.text }}
    </div>

    <!-- Soft radial glow centers representing microchip hot-spots -->
    <div class="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
    <div class="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-32 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref(null);

const mathFormulas = ref([
  { text: 'e^{iπ} + 1 = 0', x: 8, y: 14, size: 1.1, opacity: 0.25, offsetX: 0, offsetY: 0, rotation: -4, speedX: 0.04, speedY: 0.03 },
  { text: '∫_{-∞}^{∞} e^{-x²} dx = √π', x: 78, y: 12, size: 1.0, opacity: 0.22, offsetX: 0, offsetY: 0, rotation: 3, speedX: -0.03, speedY: 0.04 },
  { text: '∑ 1/n² = π²/6', x: 14, y: 45, size: 0.95, opacity: 0.2, offsetX: 0, offsetY: 0, rotation: -2, speedX: 0.05, speedY: -0.03 },
  { text: '∇ × B = μ₀J + μ₀ε₀(∂E/∂t)', x: 72, y: 52, size: 0.9, opacity: 0.22, offsetX: 0, offsetY: 0, rotation: 2, speedX: -0.04, speedY: 0.02 },
  { text: 'f_clk ≤ 1 / (T_cq + T_comb + T_setup)', x: 25, y: 76, size: 0.9, opacity: 0.25, offsetX: 0, offsetY: 0, rotation: -1, speedX: 0.03, speedY: 0.03 },
  { text: 'V_th = V_FB + 2φ_F + γ√(2φ_F)', x: 65, y: 82, size: 0.9, opacity: 0.22, offsetX: 0, offsetY: 0, rotation: 4, speedX: -0.02, speedY: -0.04 },
  { text: 'F{f(t)} = ∫ f(t) e^{-i2πft} dt', x: 85, y: 32, size: 0.85, opacity: 0.18, offsetX: 0, offsetY: 0, rotation: -3, speedX: -0.03, speedY: 0.03 },
  { text: 'gcd(a, b) = gcd(b, a mod b)', x: 6, y: 88, size: 0.85, opacity: 0.2, offsetX: 0, offsetY: 0, rotation: 2, speedX: 0.03, speedY: -0.02 },
  { text: 'φ = (1 + √5) / 2', x: 42, y: 8, size: 0.9, opacity: 0.2, offsetX: 0, offsetY: 0, rotation: -2, speedX: 0.04, speedY: 0.03 },
  { text: 'Δx · Δp ≥ ℏ/2', x: 48, y: 92, size: 0.9, opacity: 0.2, offsetX: 0, offsetY: 0, rotation: 1, speedX: -0.02, speedY: -0.03 },
  { text: 'C_ox = ε_ox / t_ox', x: 90, y: 70, size: 0.85, opacity: 0.18, offsetX: 0, offsetY: 0, rotation: -2, speedX: -0.03, speedY: 0.02 }
]);

let animationFrameId = null;
let traces = [];
let pulses = [];
let width = 0;
let height = 0;
let mouseX = -1000;
let mouseY = -1000;

class TraceSegment {
  constructor(x, y, dx, dy, length) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.length = length;
    this.targetX = x + dx * length;
    this.targetY = y + dy * length;
  }
}

class SignalPulse {
  constructor(trace, color = '#00f0ff') {
    this.trace = trace;
    this.progress = 0;
    this.speed = 0.004 + Math.random() * 0.006;
    this.size = 2 + Math.random() * 2;
    this.color = color;
  }

  update() {
    this.progress += this.speed;
    if (this.progress > 1) {
      this.progress = 0;
      if (Math.random() < 0.3) {
        this.color = Math.random() > 0.5 ? '#00ff88' : '#00f0ff';
      }
    }
  }

  draw(ctx) {
    const px = this.trace.x + (this.trace.targetX - this.trace.x) * this.progress;
    const py = this.trace.y + (this.trace.targetY - this.trace.y) * this.progress;

    ctx.save();
    ctx.shadowBlur = 10;
    ctx.shadowColor = this.color;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(px, py, this.size, 0, Math.PI * 2);
    ctx.fill();

    // Pulse tail
    const tailLength = 20;
    const tx = px - (this.trace.targetX - this.trace.x) * (tailLength / this.trace.length) * 0.2;
    const ty = py - (this.trace.targetY - this.trace.y) * (tailLength / this.trace.length) * 0.2;
    const grad = ctx.createLinearGradient(px, py, tx, ty);
    grad.addColorStop(0, this.color);
    grad.addColorStop(1, 'transparent');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(px, py);
    ctx.lineTo(tx, ty);
    ctx.stroke();

    ctx.restore();
  }
}

function initTraces() {
  traces = [];
  pulses = [];
  const gridSize = 60;
  const cols = Math.floor(width / gridSize);
  const rows = Math.floor(height / gridSize);

  // Generate circuit bus traces
  for (let i = 0; i < cols; i += 2) {
    for (let j = 0; j < rows; j += 2) {
      if (Math.random() < 0.45) {
        const x = i * gridSize;
        const y = j * gridSize;
        const directions = [
          { dx: 1, dy: 0 },
          { dx: 0, dy: 1 },
          { dx: 1, dy: 1 }, // 45 degree trace
          { dx: 1, dy: -1 } // 45 degree trace
        ];
        const dir = directions[Math.floor(Math.random() * directions.length)];
        const length = (1 + Math.floor(Math.random() * 3)) * gridSize;
        const trace = new TraceSegment(x, y, dir.dx, dir.dy, length);
        traces.push(trace);

        if (Math.random() < 0.7) {
          const color = Math.random() > 0.3 ? '#00f0ff' : '#00ff88';
          pulses.push(new SignalPulse(trace, color));
        }
      }
    }
  }
}

function resizeCanvas() {
  if (!canvasRef.value) return;
  width = window.innerWidth;
  height = window.innerHeight;
  canvasRef.value.width = width;
  canvasRef.value.height = height;
  initTraces();
}

function onMouseMove(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

let tick = 0;
function animate() {
  tick++;
  if (!canvasRef.value) return;
  const ctx = canvasRef.value.getContext('2d');
  ctx.clearRect(0, 0, width, height);

  // Draw subtle circuit trace lines and vias
  ctx.lineWidth = 1;
  for (let i = 0; i < traces.length; i++) {
    const t = traces[i];
    
    // Check distance to mouse for interactive illumination
    const distToMouse = Math.hypot((t.x + t.targetX) / 2 - mouseX, (t.y + t.targetY) / 2 - mouseY);
    const isNearby = distToMouse < 180;

    ctx.strokeStyle = isNearby ? 'rgba(0, 240, 255, 0.4)' : 'rgba(14, 116, 144, 0.12)';
    ctx.beginPath();
    ctx.moveTo(t.x, t.y);
    ctx.lineTo(t.targetX, t.targetY);
    ctx.stroke();

    // Draw via dots at terminals
    ctx.fillStyle = isNearby ? '#00f0ff' : 'rgba(6, 182, 212, 0.2)';
    ctx.beginPath();
    ctx.arc(t.x, t.y, 2, 0, Math.PI * 2);
    ctx.arc(t.targetX, t.targetY, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  // Draw signal pulses traveling along traces
  for (let i = 0; i < pulses.length; i++) {
    pulses[i].update();
    pulses[i].draw(ctx);
  }

  // Floating math animations tick
  mathFormulas.value.forEach((item) => {
    item.offsetX += item.speedX;
    item.offsetY += item.speedY;

    if (Math.abs(item.offsetX) > 30) item.speedX *= -1;
    if (Math.abs(item.offsetY) > 25) item.speedY *= -1;
  });

  animationFrameId = requestAnimationFrame(animate);
}

onMounted(() => {
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  window.addEventListener('mousemove', onMouseMove);
  animate();
});

onUnmounted(() => {
  if (animationFrameId) cancelAnimationFrame(animationFrameId);
  window.removeEventListener('resize', resizeCanvas);
  window.removeEventListener('mousemove', onMouseMove);
});
</script>
