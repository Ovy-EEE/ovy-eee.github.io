<template>
  <section id="awards" class="relative py-24 z-10 overflow-hidden">
    <!-- Celebratory Glow Backdrops -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-mono">
          <svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>ANALYTICAL RIGOR & PRESTIGE</span>
        </div>

        <h2 class="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight">
          Awards & <span class="text-amber-400 glow-text-amber">Achievements</span>
        </h2>

        <p class="text-slate-300 font-sans text-base sm:text-lg">
          Celebrating almost a decade of competitive Mathematical Olympiad triumphs, national podiums, and government merit scholarships.
        </p>

        <!-- Interactive Confetti Celebration Trigger -->
        <div class="pt-2">
          <button 
            @click="triggerConfetti"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-bold font-mono text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-amber-500/25 hover:shadow-glow-amber transition-all"
          >
            <svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span>Celebrate Olympiad Record</span>
          </button>
        </div>
      </div>

      <!-- 10 Years Pedigree Banner -->
      <div class="mb-12 p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-[#0a1532]/80 to-cyan-950/40 border border-amber-500/40 backdrop-blur-md shadow-chip flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center shrink-0">
            <span class="text-2xl">🏆</span>
          </div>
          <div>
            <div class="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">10-YEAR COMPETITIVE PEDIGREE</div>
            <h3 class="text-lg sm:text-xl font-bold font-mono text-white mt-0.5">
              Competitive Math Olympiad Champion (2012 – 2021)
            </h3>
            <p class="text-xs sm:text-sm text-slate-300 font-sans mt-1">
              Reflecting nearly a decade of problem solving in combinatorics, number theory, geometry, and advanced algebra that now fuels his VLSI and chip architecture intuition.
            </p>
          </div>
        </div>

        <div class="flex items-center gap-6 shrink-0 font-mono text-center">
          <div class="p-3 rounded-xl bg-slate-900/80 border border-amber-500/30">
            <div class="text-2xl font-bold text-amber-400">5x</div>
            <div class="text-[10px] text-slate-400 uppercase">Consecutive Reg. Champ</div>
          </div>
          <div class="p-3 rounded-xl bg-slate-900/80 border border-cyan-500/30">
            <div class="text-2xl font-bold text-cyan-400">100%</div>
            <div class="text-[10px] text-slate-400 uppercase">Perfect Score (2016)</div>
          </div>
        </div>
      </div>

      <!-- Math Olympiad Accolades Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div 
          v-for="award in awardsAndAchievements.mathOlympiad" 
          :key="award.title"
          class="p-6 rounded-2xl bg-[#091124]/90 border transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
          :class="[
            award.color === 'amber' ? 'border-amber-500/40 hover:border-amber-400 hover:shadow-glow-amber' : '',
            award.color === 'cyan' ? 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-glow-cyan' : '',
            award.color === 'emerald' ? 'border-emerald-500/40 hover:border-emerald-400 hover:shadow-glow-green' : '',
            award.color === 'purple' ? 'border-purple-500/40 hover:border-purple-400 hover:shadow-glow-purple' : '',
          ]"
        >
          <div>
            <!-- Top Badges -->
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border text-slate-300 flex items-center gap-1.5" :class="badgeBorder(award.color)">
                <span class="w-1.5 h-1.5 rounded-full" :class="bulletColor(award.color)"></span>
                {{ award.level }} Round
              </span>
              <span class="text-xs font-mono font-bold" :class="textColor(award.color)">
                {{ award.year }}
              </span>
            </div>

            <!-- Title & Rank -->
            <h4 class="text-xl font-bold font-mono text-white mb-2 group-hover:text-amber-300 transition-colors">
              {{ award.title }}
            </h4>

            <div class="inline-block px-2.5 py-1 rounded bg-slate-900/90 text-xs font-mono font-semibold mb-4" :class="textColor(award.color)">
              ★ Rank: {{ award.rank }}
              <span v-if="award.specialNote" class="text-amber-300 ml-1 font-bold">({{ award.specialNote }})</span>
            </div>

            <p class="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {{ award.description }}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span>Bangladesh Mathematical Olympiad Committee</span>
            <span class="text-amber-400 font-bold">Verified Honor</span>
          </div>
        </div>
      </div>

      <!-- Board Merit Scholarships -->
      <div class="mt-8">
        <div class="flex items-center gap-3 mb-6">
          <span class="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
            <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            GOVERNMENT BOARD MERIT SCHOLARSHIPS
          </span>
          <div class="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            v-for="scholarship in awardsAndAchievements.scholarships" 
            :key="scholarship.title"
            class="p-6 rounded-2xl bg-[#091124]/80 border border-cyan-500/30 hover:border-cyan-400 shadow-chip transition-all group"
          >
            <div class="flex items-center justify-between mb-3">
              <span class="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                {{ scholarship.year }}
              </span>
              <span class="text-xs font-mono text-emerald-400 font-semibold">100% Merit Awarded</span>
            </div>

            <h4 class="text-lg font-bold font-mono text-white mb-1 group-hover:text-cyan-300 transition-colors">
              {{ scholarship.title }}
            </h4>

            <p class="text-xs font-mono text-cyan-400/90 mb-2">
              {{ scholarship.authority }}
            </p>

            <div class="text-xs font-mono text-amber-300/90 mb-3 bg-amber-950/40 p-2 rounded border border-amber-900/60">
              Basis: {{ scholarship.qualification }}
            </div>

            <p class="text-xs text-slate-300 font-sans leading-relaxed">
              {{ scholarship.description }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import confetti from 'canvas-confetti';
import { awardsAndAchievements } from '../data/portfolioData';

function triggerConfetti() {
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ffb703', '#00f0ff', '#00ff88', '#ffffff']
  });
}

function badgeBorder(color) {
  if (color === 'amber') return 'border-amber-500/40 text-amber-300';
  if (color === 'cyan') return 'border-cyan-500/40 text-cyan-300';
  if (color === 'emerald') return 'border-emerald-500/40 text-emerald-300';
  return 'border-purple-500/40 text-purple-300';
}

function bulletColor(color) {
  if (color === 'amber') return 'bg-amber-400';
  if (color === 'cyan') return 'bg-cyan-400';
  if (color === 'emerald') return 'bg-emerald-400';
  return 'bg-purple-400';
}

function textColor(color) {
  if (color === 'amber') return 'text-amber-400';
  if (color === 'cyan') return 'text-cyan-400';
  if (color === 'emerald') return 'text-emerald-400';
  return 'text-purple-400';
}
</script>
