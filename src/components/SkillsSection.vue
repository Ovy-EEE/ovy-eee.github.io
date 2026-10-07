<template>
  <section id="skills" class="relative py-24 z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 text-xs font-mono">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span>ENGINEERING TOOLBOX & PROFICIENCIES</span>
        </div>

        <h2 class="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight">
          Technical & <span class="text-cyan-400 glow-text-cyan">Software Skills</span>
        </h2>

        <p class="text-slate-400 font-sans text-base sm:text-lg">
          Mastery across hardware laboratory instrumentation, electronic design automation (EDA), hardware description languages, and academic communication.
        </p>
      </div>

      <!-- Skills Grid (4 Main Pillars) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- 1. EDA & CAD Simulation Software -->
        <div class="p-6 rounded-2xl bg-[#091124]/90 border border-cyan-500/30 hover:border-cyan-400 shadow-chip transition-all group">
          <div class="flex items-center gap-3 mb-5 border-b border-slate-800 pb-3">
            <div class="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold font-mono text-white">EDA & CAD Software</h3>
              <p class="text-[11px] font-mono text-cyan-400">Silicon & Schematic Design</p>
            </div>
          </div>

          <div class="space-y-3">
            <div 
              v-for="sw in technicalSkills.software" 
              :key="sw.name"
              class="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
            >
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-slate-200">{{ sw.name }}</span>
                <span class="text-[10px] font-mono text-cyan-400">Verified</span>
              </div>
              <p class="text-[11px] text-slate-400 font-sans mt-0.5">{{ sw.desc }}</p>
            </div>
          </div>
        </div>

        <!-- 2. Programming & HDLs -->
        <div class="p-6 rounded-2xl bg-[#091124]/90 border border-emerald-500/30 hover:border-emerald-400 shadow-chip transition-all group">
          <div class="flex items-center gap-3 mb-5 border-b border-slate-800 pb-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold font-mono text-white">Programming & HDLs</h3>
              <p class="text-[11px] font-mono text-emerald-400">Verilog, MATLAB & Python</p>
            </div>
          </div>

          <div class="space-y-3">
            <div 
              v-for="prog in technicalSkills.programming" 
              :key="prog.name"
              class="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/30 transition-colors"
            >
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-slate-200">{{ prog.name }}</span>
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                  {{ prog.level }}
                </span>
              </div>
              <p class="text-[11px] text-slate-400 font-sans mt-0.5">{{ prog.desc }}</p>
            </div>
          </div>
        </div>

        <!-- 3. Hardware & Lab Instruments -->
        <div class="p-6 rounded-2xl bg-[#091124]/90 border border-amber-500/30 hover:border-amber-400 shadow-chip transition-all group">
          <div class="flex items-center gap-3 mb-5 border-b border-slate-800 pb-3">
            <div class="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold font-mono text-white">Hardware & Instruments</h3>
              <p class="text-[11px] font-mono text-amber-400">Physical Lab Testbenches</p>
            </div>
          </div>

          <div class="space-y-3">
            <div 
              v-for="hw in technicalSkills.hardware" 
              :key="hw.name"
              class="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 transition-colors"
            >
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-slate-200">{{ hw.name }}</span>
                <span class="text-[10px] font-mono text-amber-400">Bench Tested</span>
              </div>
              <p class="text-[11px] text-slate-400 font-sans mt-0.5">{{ hw.desc }}</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Split: Academic Presentations & Spoken Languages -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Academic Presentation Skills -->
        <div class="p-6 rounded-2xl bg-[#091124]/90 border border-slate-800 space-y-4">
          <div class="flex items-center gap-2 border-b border-slate-800 pb-3">
            <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            <h3 class="font-mono font-bold text-white text-base">Presentation & Academic Dissemination</h3>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div 
              v-for="pres in technicalSkills.presentation" 
              :key="pres.title"
              class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center space-y-1"
            >
              <span class="text-xs font-mono font-bold text-cyan-300 block">{{ pres.title }}</span>
              <p class="text-[11px] text-slate-400 font-sans leading-relaxed">{{ pres.desc }}</p>
            </div>
          </div>

          <div class="text-[11px] font-mono text-slate-400 pt-1">
            Office Productivity: Microsoft Word, Excel, PowerPoint certified workflows.
          </div>
        </div>

        <!-- Languages Proficiency -->
        <div class="p-6 rounded-2xl bg-[#091124]/90 border border-slate-800 space-y-4">
          <div class="flex items-center gap-2 border-b border-slate-800 pb-3">
            <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
            <h3 class="font-mono font-bold text-white text-base">Languages Proficiency</h3>
          </div>

          <div class="space-y-3">
            <div 
              v-for="lang in technicalSkills.languages" 
              :key="lang.name"
              class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between"
            >
              <div>
                <span class="text-xs font-mono font-bold text-white">{{ lang.name }}</span>
                <p class="text-[11px] text-slate-400 font-sans mt-0.5">{{ lang.details }}</p>
              </div>
              <span class="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                {{ lang.proficiency }}
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { technicalSkills } from '../data/portfolioData';
</script>
