<template>
  <section id="interactive-lab" class="relative py-24 z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 text-xs font-mono">
          <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>INTERACTIVE SILICON LABORATORY</span>
        </div>

        <h2 class="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight">
          Virtual VLSI & <span class="text-cyan-400 glow-text-cyan">Hardware Lab</span>
        </h2>

        <p class="text-slate-400 font-sans text-base sm:text-lg">
          Interact directly with digital circuits inspired by Sanwar's Cadence 3:1 CLB, Verilog Traffic FSM, and STM32 Logic IC Tester.
        </p>
      </div>

      <!-- Lab Workbench Container -->
      <div class="p-6 sm:p-8 rounded-3xl bg-[#070e22]/90 border border-cyan-500/40 shadow-2xl backdrop-blur-xl">
        
        <!-- Mode Switcher Tabs -->
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
          <div class="flex flex-wrap gap-2">
            <button 
              @click="activeMode = 'clb'"
              :class="[
                activeMode === 'clb' 
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30' 
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              ]"
              class="px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2"
            >
              <span>3:1 Configurable Logic Block (CLB)</span>
            </button>

            <button 
              @click="activeMode = 'fsm'"
              :class="[
                activeMode === 'fsm' 
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30' 
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              ]"
              class="px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2"
            >
              <span>Smart Traffic Verilog FSM</span>
            </button>

            <button 
              @click="activeMode = 'tester'"
              :class="[
                activeMode === 'tester' 
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/30' 
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              ]"
              class="px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2"
            >
              <span>STM32 Logic IC Tester</span>
            </button>
          </div>

          <div class="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>SIMULATION ENGINE RUNNING</span>
          </div>
        </div>

        <!-- MODE 1: 3:1 Configurable Logic Block (CLB) -->
        <div v-if="activeMode === 'clb'" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <!-- Control Panel (5 cols) -->
          <div class="lg:col-span-5 space-y-6">
            <div>
              <span class="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">Cadence Virtuoso Replication</span>
              <h3 class="text-2xl font-bold font-mono text-white">3:1 CLB Unit with SRAM Storage</h3>
              <p class="text-xs sm:text-sm text-slate-300 font-sans mt-2 leading-relaxed">
                Configure input bit streams and select the lookup table logic mode (AND, OR, XOR, or Custom Multiplexing). Real-time simulated propagation delay calibrated to sub-micron transient timings.
              </p>
            </div>

            <!-- Pre-programmed Logic Function Selection -->
            <div>
              <label class="text-xs font-mono text-slate-400 block mb-2">Programmed Function (LUT Logic):</label>
              <div class="grid grid-cols-3 gap-2">
                <button 
                  v-for="fn in ['AND', 'OR', 'XOR']" 
                  :key="fn"
                  @click="clbFunction = fn"
                  :class="[
                    clbFunction === fn ? 'bg-cyan-950 text-cyan-300 border-cyan-400' : 'bg-slate-900 text-slate-400 border-slate-800'
                  ]"
                  class="py-2 px-3 rounded-lg text-xs font-mono border transition-all text-center"
                >
                  {{ fn }} Logic
                </button>
              </div>
            </div>

            <!-- Input Pins -->
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <span class="text-xs font-mono text-slate-300 font-bold block">Input Signal Pins (Toggle):</span>
              <div class="flex items-center gap-4">
                <div 
                  v-for="(val, pin) in clbInputs" 
                  :key="pin"
                  @click="toggleClbInput(pin)"
                  class="flex-1 p-3 rounded-lg border text-center cursor-pointer transition-all select-none"
                  :class="[
                    val === 1 
                      ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300 shadow-glow-cyan' 
                      : 'bg-[#040816] border-slate-700 text-slate-500'
                  ]"
                >
                  <div class="text-[10px] font-mono text-slate-400 uppercase">PIN {{ pin }}</div>
                  <div class="text-xl font-mono font-black mt-1">{{ val }}</div>
                  <div class="text-[9px] font-mono uppercase mt-0.5" :class="val === 1 ? 'text-emerald-400' : 'text-slate-500'">
                    {{ val === 1 ? 'HIGH (Vdd)' : 'LOW (GND)' }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Metrics -->
            <div class="grid grid-cols-2 gap-3 text-xs font-mono">
              <div class="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span class="text-slate-400 block text-[10px]">CALIBRATED DELAY (τpd)</span>
                <span class="text-cyan-300 font-bold text-sm">1.48 ns</span>
              </div>
              <div class="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span class="text-slate-400 block text-[10px]">SRAM POWER STATIC</span>
                <span class="text-emerald-300 font-bold text-sm">18.4 μW</span>
              </div>
            </div>
          </div>

          <!-- Circuit Diagram / Output Display (7 cols) -->
          <div class="lg:col-span-7 p-6 rounded-2xl bg-[#040816] border-2 border-cyan-500/30 relative overflow-hidden flex flex-col items-center justify-center min-h-[360px]">
            <!-- Wafer pattern -->
            <div class="absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none"></div>

            <div class="relative z-10 w-full max-w-lg space-y-6">
              <div class="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>CADENCE SCHEMATIC DIAGRAM</span>
                <span class="text-cyan-400 font-bold">3:1 CLB TILE</span>
              </div>

              <!-- Visual Logic Flow -->
              <div class="flex items-center justify-between gap-4">
                <!-- Inputs column -->
                <div class="space-y-4">
                  <div 
                    v-for="(val, pin) in clbInputs" 
                    :key="pin"
                    class="flex items-center gap-2"
                  >
                    <span class="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs" :class="val === 1 ? 'bg-cyan-500 text-black shadow-glow-cyan' : 'bg-slate-800 text-slate-400'">
                      {{ pin }}
                    </span>
                    <div class="w-12 h-0.5" :class="val === 1 ? 'bg-cyan-400 shadow-glow-cyan' : 'bg-slate-700'"></div>
                  </div>
                </div>

                <!-- CLB Core / Multiplexer Block -->
                <div class="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/60 to-slate-900 border-2 border-cyan-400/60 shadow-chip text-center space-y-2">
                  <div class="text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
                    SRAM LUT CORE ({{ clbFunction }})
                  </div>
                  <div class="text-xs font-mono text-slate-300">
                    Transistor Sizing: W/L = 4:1
                  </div>
                  <div class="text-[11px] font-mono text-emerald-400 pt-1">
                    f(A, B, C) = {{ clbFormula }}
                  </div>
                </div>

                <!-- Output Column -->
                <div class="flex items-center gap-2">
                  <div class="w-12 h-0.5" :class="clbOutput === 1 ? 'bg-emerald-400 shadow-glow-green' : 'bg-slate-700'"></div>
                  <div 
                    class="w-14 h-14 rounded-2xl border-2 flex flex-col items-center justify-center font-mono transition-all duration-300"
                    :class="[
                      clbOutput === 1 
                        ? 'bg-emerald-950 border-emerald-400 text-emerald-300 shadow-glow-green scale-110' 
                        : 'bg-slate-900 border-slate-700 text-slate-500'
                    ]"
                  >
                    <span class="text-[9px] uppercase font-bold text-slate-400">OUT (Y)</span>
                    <span class="text-xl font-black">{{ clbOutput }}</span>
                  </div>
                </div>
              </div>

              <!-- Output Status Waveform Preview -->
              <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono flex items-center justify-between">
                <span class="text-slate-400">Logic State:</span>
                <span class="font-bold" :class="clbOutput === 1 ? 'text-emerald-400' : 'text-slate-400'">
                  {{ clbOutput === 1 ? 'LOGIC HIGH (3.3V) — Active Output' : 'LOGIC LOW (0.0V) — Inactive' }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- MODE 2: Smart Traffic Verilog FSM -->
        <div v-else-if="activeMode === 'fsm'" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-5 space-y-5">
            <div>
              <span class="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">Verilog HDL & EDA Playground</span>
              <h3 class="text-2xl font-bold font-mono text-white">4-Way Double Lane Traffic Controller</h3>
              <p class="text-xs sm:text-sm text-slate-300 font-sans mt-2 leading-relaxed">
                ASIC designed to regulate double-lane 4-way junctions. Includes sensor-driven automated state transitions plus high-priority emergency vehicle manual commands.
              </p>
            </div>

            <!-- FSM Controller Actions -->
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <button 
                  @click="stepFsm"
                  class="px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold transition-all shadow-md flex items-center gap-2"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                  <span>Step Clock Pulse (CLK)</span>
                </button>

                <button 
                  @click="toggleEmergency"
                  :class="[
                    emergencyActive ? 'bg-red-600 text-white shadow-lg shadow-red-600/40' : 'bg-slate-900 text-slate-300 border border-slate-700'
                  ]"
                  class="px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all"
                >
                  {{ emergencyActive ? 'EMERGENCY OVERRIDE ACTIVE' : 'Trigger Emergency Priority' }}
                </button>
              </div>

              <div class="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                Current FSM State: <span class="text-cyan-400 font-bold">{{ fsmStateName }}</span>
              </div>
            </div>
          </div>

          <!-- 4-Way Traffic Junction Visualizer (7 cols) -->
          <div class="lg:col-span-7 p-6 rounded-2xl bg-[#040816] border-2 border-cyan-500/30 min-h-[360px] flex items-center justify-center">
            <div class="grid grid-cols-2 gap-6 w-full max-w-md font-mono text-xs">
              
              <!-- North-South Lane Status -->
              <div class="p-5 rounded-2xl bg-slate-900/90 border border-slate-700 space-y-3 text-center">
                <div class="text-slate-400 uppercase font-bold text-[11px]">North-South Double Lane</div>
                <div class="flex justify-center gap-3">
                  <div class="w-7 h-7 rounded-full border border-red-500" :class="nsColor === 'RED' ? 'bg-red-500 shadow-lg shadow-red-500/60' : 'bg-red-950/40 opacity-30'"></div>
                  <div class="w-7 h-7 rounded-full border border-yellow-500" :class="nsColor === 'YELLOW' ? 'bg-yellow-400 shadow-lg shadow-yellow-400/60' : 'bg-yellow-950/40 opacity-30'"></div>
                  <div class="w-7 h-7 rounded-full border border-emerald-500" :class="nsColor === 'GREEN' ? 'bg-emerald-500 shadow-lg shadow-emerald-500/60' : 'bg-emerald-950/40 opacity-30'"></div>
                </div>
                <div class="font-bold text-sm" :class="nsTextColor">{{ nsColor }} SIGNAL</div>
              </div>

              <!-- East-West Lane Status -->
              <div class="p-5 rounded-2xl bg-slate-900/90 border border-slate-700 space-y-3 text-center">
                <div class="text-slate-400 uppercase font-bold text-[11px]">East-West Double Lane</div>
                <div class="flex justify-center gap-3">
                  <div class="w-7 h-7 rounded-full border border-red-500" :class="ewColor === 'RED' ? 'bg-red-500 shadow-lg shadow-red-500/60' : 'bg-red-950/40 opacity-30'"></div>
                  <div class="w-7 h-7 rounded-full border border-yellow-500" :class="ewColor === 'YELLOW' ? 'bg-yellow-400 shadow-lg shadow-yellow-400/60' : 'bg-yellow-950/40 opacity-30'"></div>
                  <div class="w-7 h-7 rounded-full border border-emerald-500" :class="ewColor === 'GREEN' ? 'bg-emerald-500 shadow-lg shadow-emerald-500/60' : 'bg-emerald-950/40 opacity-30'"></div>
                </div>
                <div class="font-bold text-sm" :class="ewTextColor">{{ ewColor }} SIGNAL</div>
              </div>

            </div>
          </div>
        </div>

        <!-- MODE 3: STM32 Logic IC Tester -->
        <div v-else-if="activeMode === 'tester'" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-5 space-y-5">
            <div>
              <span class="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-1">STM32CubeIDE & Proteus Lab</span>
              <h3 class="text-2xl font-bold font-mono text-white">Automated Logic Gate IC Diagnostics</h3>
              <p class="text-xs sm:text-sm text-slate-300 font-sans mt-2 leading-relaxed">
                Microcontroller firmware that exercises truth tables across unknown logic ICs, verifying gate integrity and identifying device architecture (NAND, NOR, XOR, AND, OR).
              </p>
            </div>

            <div class="space-y-3">
              <label class="text-xs font-mono text-slate-400 block">Select IC under test:</label>
              <div class="grid grid-cols-3 gap-2">
                <button 
                  v-for="gate in ['7400 (NAND)', '7408 (AND)', '7486 (XOR)', '7402 (NOR)', '7432 (OR)']" 
                  :key="gate"
                  @click="selectedGate = gate"
                  :class="[
                    selectedGate === gate ? 'bg-cyan-950 text-cyan-300 border-cyan-400' : 'bg-slate-900 text-slate-400 border-slate-800'
                  ]"
                  class="p-2 rounded-lg text-xs font-mono border transition-all text-center"
                >
                  {{ gate }}
                </button>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 p-6 rounded-2xl bg-[#040816] border-2 border-cyan-500/30 min-h-[360px] flex flex-col justify-center font-mono">
            <div class="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 space-y-4">
              <div class="flex items-center justify-between border-b border-slate-800 pb-3">
                <span class="text-xs text-slate-400 font-bold">STM32 FIRMWARE TELEMETRY</span>
                <span class="text-xs text-emerald-400 font-bold">IC STATUS: FUNCTIONAL (PASS)</span>
              </div>

              <div class="text-xs text-slate-300">
                IC IDENTIFIED: <span class="text-cyan-400 font-bold text-sm">{{ selectedGate }}</span>
              </div>

              <!-- Automated Truth Table Result -->
              <table class="w-full text-left text-xs border border-slate-800">
                <thead class="bg-slate-800/60 text-slate-400">
                  <tr>
                    <th class="p-2 border-r border-slate-800">Pin A</th>
                    <th class="p-2 border-r border-slate-800">Pin B</th>
                    <th class="p-2 border-r border-slate-800">Expected (Y)</th>
                    <th class="p-2">Sensed Output</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-800 text-slate-300">
                  <tr v-for="row in icTruthTable" :key="row.a + '-' + row.b">
                    <td class="p-2 border-r border-slate-800">{{ row.a }}</td>
                    <td class="p-2 border-r border-slate-800">{{ row.b }}</td>
                    <td class="p-2 border-r border-slate-800 text-cyan-400 font-bold">{{ row.y }}</td>
                    <td class="p-2 text-emerald-400 font-bold">{{ row.y }} ✓</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeMode = ref('clb');

// CLB State
const clbFunction = ref('AND');
const clbInputs = ref({ A: 1, B: 1, C: 1 });

function toggleClbInput(pin) {
  clbInputs.value[pin] = clbInputs.value[pin] === 1 ? 0 : 1;
}

const clbOutput = computed(() => {
  const { A, B, C } = clbInputs.value;
  if (clbFunction.value === 'AND') return (A && B && C) ? 1 : 0;
  if (clbFunction.value === 'OR') return (A || B || C) ? 1 : 0;
  if (clbFunction.value === 'XOR') return (A ^ B ^ C) ? 1 : 0;
  return 0;
});

const clbFormula = computed(() => {
  if (clbFunction.value === 'AND') return 'A · B · C';
  if (clbFunction.value === 'OR') return 'A + B + C';
  return 'A ⊕ B ⊕ C';
});

// FSM State
const fsmStateIndex = ref(0);
const emergencyActive = ref(false);

const fsmStates = [
  { name: 'S0_NS_GREEN', ns: 'GREEN', ew: 'RED' },
  { name: 'S1_NS_YELLOW', ns: 'YELLOW', ew: 'RED' },
  { name: 'S2_EW_GREEN', ns: 'RED', ew: 'GREEN' },
  { name: 'S3_EW_YELLOW', ns: 'RED', ew: 'YELLOW' }
];

function stepFsm() {
  if (emergencyActive.value) {
    emergencyActive.value = false;
  }
  fsmStateIndex.value = (fsmStateIndex.value + 1) % fsmStates.length;
}

function toggleEmergency() {
  emergencyActive.value = !emergencyActive.value;
}

const fsmStateName = computed(() => {
  if (emergencyActive.value) return 'EMERGENCY_OVERRIDE (NS PRIORITY)';
  return fsmStates[fsmStateIndex.value].name;
});

const nsColor = computed(() => {
  if (emergencyActive.value) return 'GREEN';
  return fsmStates[fsmStateIndex.value].ns;
});

const ewColor = computed(() => {
  if (emergencyActive.value) return 'RED';
  return fsmStates[fsmStateIndex.value].ew;
});

const nsTextColor = computed(() => {
  if (nsColor.value === 'GREEN') return 'text-emerald-400';
  if (nsColor.value === 'YELLOW') return 'text-yellow-400';
  return 'text-red-400';
});

const ewTextColor = computed(() => {
  if (ewColor.value === 'GREEN') return 'text-emerald-400';
  if (ewColor.value === 'YELLOW') return 'text-yellow-400';
  return 'text-red-400';
});

// IC Tester
const selectedGate = ref('7400 (NAND)');

const icTruthTable = computed(() => {
  const g = selectedGate.value;
  const combos = [
    { a: 0, b: 0 },
    { a: 0, b: 1 },
    { a: 1, b: 0 },
    { a: 1, b: 1 }
  ];

  return combos.map(c => {
    let y = 0;
    if (g.includes('NAND')) y = !(c.a && c.b) ? 1 : 0;
    else if (g.includes('AND')) y = (c.a && c.b) ? 1 : 0;
    else if (g.includes('XOR')) y = (c.a ^ c.b) ? 1 : 0;
    else if (g.includes('NOR')) y = !(c.a || c.b) ? 1 : 0;
    else if (g.includes('OR')) y = (c.a || c.b) ? 1 : 0;
    return { a: c.a, b: c.b, y };
  });
});
</script>
