<template>
  <section id="research" class="relative py-24 z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 text-xs font-mono">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <span>CORE SCIENTIFIC SPECIALIZATIONS</span>
        </div>

        <h2 class="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight">
          Research <span class="text-cyan-400 glow-text-cyan">Interests</span>
        </h2>

        <p class="text-slate-400 font-sans text-base sm:text-lg">
          Focusing on the convergence of microelectronic fabrication, transistor-level VLSI physical design, reconfigurable FPGA blocks, and emerging AI architectures.
        </p>
      </div>

      <!-- Glowing Grid: 4 Core Focus Areas -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="item in researchInterests" 
          :key="item.id"
          @click="selectedTopic = item"
          class="relative p-7 rounded-2xl bg-[#091124]/80 border transition-all duration-300 cursor-pointer group hover:-translate-y-1.5 flex flex-col justify-between"
          :class="[
            item.accent === 'cyan' ? 'border-cyan-500/30 hover:border-cyan-400 hover:shadow-glow-cyan' : '',
            item.accent === 'green' ? 'border-emerald-500/30 hover:border-emerald-400 hover:shadow-glow-green' : '',
            item.accent === 'amber' ? 'border-amber-500/30 hover:border-amber-400 hover:shadow-glow-amber' : '',
            item.accent === 'purple' ? 'border-purple-500/30 hover:border-purple-400 hover:shadow-glow-purple' : '',
          ]"
        >
          <!-- Corner Tech Accents -->
          <div class="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2" :class="accentBorder(item.accent)"></div>
          <div class="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2" :class="accentBorder(item.accent)"></div>
          <div class="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2" :class="accentBorder(item.accent)"></div>
          <div class="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2" :class="accentBorder(item.accent)"></div>

          <div>
            <!-- Header with Icon & Category Tag -->
            <div class="flex items-center justify-between mb-4">
              <div 
                class="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300"
                :class="iconContainerClasses(item.accent)"
              >
                <!-- Fabrication Icon -->
                <svg v-if="item.id === 'fabrication'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <!-- VLSI Icon -->
                <svg v-else-if="item.id === 'vlsi'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <!-- FPGA Icon -->
                <svg v-else-if="item.id === 'fpga'" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <!-- ML Icon -->
                <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <span class="text-[11px] font-mono px-2.5 py-1 rounded-md border" :class="badgeClasses(item.accent)">
                {{ item.tag }}
              </span>
            </div>

            <!-- Title & Short Description -->
            <h3 class="text-2xl font-bold font-mono text-white mb-2 group-hover:text-cyan-300 transition-colors">
              {{ item.title }}
            </h3>

            <p class="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
              {{ item.shortDesc }}
            </p>

            <!-- Key Highlights List -->
            <ul class="space-y-2 mb-6">
              <li 
                v-for="(point, idx) in item.highlights" 
                :key="idx"
                class="text-xs text-slate-400 font-sans flex items-start gap-2"
              >
                <span class="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" :class="bulletColor(item.accent)"></span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>

          <!-- Bottom: Tools & Interactive Action -->
          <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <div class="flex flex-wrap gap-1.5">
              <span 
                v-for="tool in item.tools" 
                :key="tool"
                class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
              >
                {{ tool }}
              </span>
            </div>

            <div class="text-xs font-mono flex items-center gap-1 group-hover:translate-x-1 transition-transform" :class="textColor(item.accent)">
              <span>Explore Details</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Interactive Topic Detail Modal -->
    <div 
      v-if="selectedTopic"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      @click.self="selectedTopic = null"
    >
      <div class="relative w-full max-w-2xl bg-[#091124] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
        <!-- Close button -->
        <button 
          @click="selectedTopic = null"
          class="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="flex items-center gap-3">
          <span class="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">RESEARCH DOSSIER</span>
          <span class="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">{{ selectedTopic.title }}</span>
        </div>

        <h3 class="text-2xl sm:text-3xl font-black font-mono text-white">
          {{ selectedTopic.title }} — Deep Dive
        </h3>

        <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-300 font-sans leading-relaxed">
          {{ selectedTopic.fullDesc }}
        </div>

        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 font-semibold">Key Methodological Pillars</h4>
          <div class="space-y-2.5">
            <div 
              v-for="(hl, i) in selectedTopic.highlights" 
              :key="i"
              class="p-3 rounded-lg bg-[#060c1d] border border-slate-800/80 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5"
            >
              <span class="text-cyan-400 font-mono font-bold mt-0.5">0{{ i + 1 }}.</span>
              <span>{{ hl }}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">Associated Toolchains & Environments</h4>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tool in selectedTopic.tools" 
              :key="tool"
              class="text-xs font-mono px-3 py-1 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-500/40"
            >
              {{ tool }}
            </span>
          </div>
        </div>

        <div class="pt-4 border-t border-slate-800 flex justify-end">
          <button 
            @click="selectedTopic = null"
            class="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { researchInterests } from '../data/portfolioData';

const selectedTopic = ref(null);

function accentBorder(accent) {
  if (accent === 'cyan') return 'border-cyan-400';
  if (accent === 'green') return 'border-emerald-400';
  if (accent === 'amber') return 'border-amber-400';
  return 'border-purple-400';
}

function iconContainerClasses(accent) {
  if (accent === 'cyan') return 'bg-cyan-950/60 text-cyan-400 border-cyan-500/30 group-hover:border-cyan-400 group-hover:bg-cyan-900/60';
  if (accent === 'green') return 'bg-emerald-950/60 text-emerald-400 border-emerald-500/30 group-hover:border-emerald-400 group-hover:bg-emerald-900/60';
  if (accent === 'amber') return 'bg-amber-950/60 text-amber-400 border-amber-500/30 group-hover:border-amber-400 group-hover:bg-amber-900/60';
  return 'bg-purple-950/60 text-purple-400 border-purple-500/30 group-hover:border-purple-400 group-hover:bg-purple-900/60';
}

function badgeClasses(accent) {
  if (accent === 'cyan') return 'bg-cyan-950/70 text-cyan-300 border-cyan-500/30';
  if (accent === 'green') return 'bg-emerald-950/70 text-emerald-300 border-emerald-500/30';
  if (accent === 'amber') return 'bg-amber-950/70 text-amber-300 border-amber-500/30';
  return 'bg-purple-950/70 text-purple-300 border-purple-500/30';
}

function bulletColor(accent) {
  if (accent === 'cyan') return 'bg-cyan-400';
  if (accent === 'green') return 'bg-emerald-400';
  if (accent === 'amber') return 'bg-amber-400';
  return 'bg-purple-400';
}

function textColor(accent) {
  if (accent === 'cyan') return 'text-cyan-400';
  if (accent === 'green') return 'text-emerald-400';
  if (accent === 'amber') return 'text-amber-400';
  return 'text-purple-400';
}
</script>
