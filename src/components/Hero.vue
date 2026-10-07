<template>
  <section id="hero" class="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
      
      <!-- Top Grid: Introduction & Interactive Silicon Core -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Column: Bold Typography & Career Vision (7 cols) -->
        <div class="lg:col-span-7 space-y-6 hero-content">
          
          <!-- Live Research Lab Badge -->
          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-sm shadow-cyan-500/10">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Next Generation System Design Lab • NDSU</span>
          </div>

          <!-- Bold Name & Academic Trajectory -->
          <div class="space-y-2">
            <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-mono">
              <span class="block text-slate-400 text-xl sm:text-2xl font-sans font-medium mb-1">Hello, I'm</span>
              <span class="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent glow-text-cyan">
                Sanwar Ahmed Ovy
              </span>
            </h1>

            <p class="text-lg sm:text-xl text-slate-300 font-sans leading-relaxed">
              <span class="text-cyan-400 font-semibold">BUET EEE Graduate</span> and current 
              <span class="text-white font-semibold">Ph.D. Student in Electrical & Computer Engineering</span> at 
              <span class="text-cyan-300 font-medium">North Dakota State University (NDSU)</span>.
            </p>
          </div>

          <!-- Prominent Career Vision Feature Card -->
          <div class="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0c1936]/90 via-[#071126]/90 to-[#020617]/95 border border-cyan-500/40 shadow-chip group overflow-hidden">
            <!-- Glowing circuit accent line -->
            <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div class="absolute -right-12 -bottom-12 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-400/20 transition-all duration-500"></div>

            <div class="flex items-start gap-3.5">
              <div class="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 shrink-0 mt-0.5">
                <svg class="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>

              <div class="space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                    Ultimate Career Vision // Silicon Architecture
                  </span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-900/60 text-cyan-200 border border-cyan-700/50">
                    TARGET: CHIP INDUSTRY
                  </span>
                </div>

                <blockquote class="text-sm sm:text-base text-slate-200 font-sans leading-relaxed italic border-l-2 border-cyan-400/60 pl-3">
                  "I envision myself working for the <span class="text-cyan-300 font-semibold not-italic">chip-manufacturing industry</span> someday — channeling ten years of Math Olympiad rigor, deep VLSI design mastery, and plasma sheath fabrication insight into next-generation microelectronics."
                </blockquote>

                <div class="pt-1 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
                  <span class="inline-flex items-center gap-1 text-cyan-300">
                    <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Fabrication & IED
                  </span>
                  <span class="inline-flex items-center gap-1 text-emerald-300">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Transistor VLSI
                  </span>
                  <span class="inline-flex items-center gap-1 text-amber-300">
                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Custom FPGA/CLB
                  </span>
                  <span class="inline-flex items-center gap-1 text-purple-300">
                    <span class="w-1.5 h-1.5 rounded-full bg-purple-400"></span> Emerging Devices
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- CTAs & Action Buttons -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#projects"
              class="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold font-mono text-sm tracking-wide transition-all shadow-lg shadow-cyan-500/25 hover:shadow-glow-cyan flex items-center gap-2 group"
            >
              <span>Explore Chip Projects</span>
              <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a 
              href="#research"
              class="px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-cyan-300 font-mono text-sm tracking-wide border border-cyan-500/30 hover:border-cyan-400 transition-all flex items-center gap-2"
            >
              <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span>Research Focus</span>
            </a>

            <a 
              href="#contact"
              class="px-5 py-3 rounded-xl bg-slate-900/40 hover:bg-slate-800/60 text-slate-300 font-mono text-sm border border-slate-700 hover:border-slate-500 transition-all"
            >
              Contact Sanwar
            </a>
          </div>

        </div>

        <!-- Right Column: Interactive Silicon Microchip Die Simulator & Spec Dashboard (5 cols) -->
        <div class="lg:col-span-5 hero-chip-card">
          <div class="relative p-6 sm:p-7 rounded-2xl bg-[#091124]/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-950/50">
            
            <!-- Terminal Header -->
            <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span class="text-xs font-mono text-slate-400 ml-2">ARCH_DIE_REV_4.0</span>
              </div>
              <span class="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                SYSTEM ONLINE
              </span>
            </div>

            <!-- Stylized Silicon Die Graphic -->
            <div class="relative mx-auto my-3 w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-gradient-to-br from-[#060c1d] to-[#02050f] border-2 border-cyan-500/50 p-4 shadow-inner flex flex-col justify-between overflow-hidden">
              
              <!-- Subtle die wafer grid background -->
              <div class="absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>

              <!-- Top Microchip Pins -->
              <div class="flex justify-around -mt-4">
                <span v-for="i in 7" :key="'pin-top-'+i" class="w-1.5 h-3 bg-cyan-400/80 rounded-b"></span>
              </div>

              <!-- Core Die Content -->
              <div class="relative z-10 text-center space-y-2 py-2">
                <div class="inline-block px-2.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-400/40 text-[10px] font-mono text-cyan-300">
                  TSMC / NDSU RESEARCH CORE
                </div>

                <div class="font-mono font-black text-2xl text-white tracking-widest glow-text-cyan">
                  OVY-CLB-1
                </div>

                <p class="text-xs font-mono text-slate-400">
                  Configurable Logic Tile & Plasma Sheath Modeling
                </p>

                <!-- Status Metrics -->
                <div class="grid grid-cols-2 gap-2 text-left pt-2 font-mono text-[11px]">
                  <div class="p-2 rounded bg-slate-900/80 border border-slate-800">
                    <span class="text-slate-500 block">CLOCK/SYNC</span>
                    <span class="text-cyan-300 font-bold">100% CALIBRATED</span>
                  </div>
                  <div class="p-2 rounded bg-slate-900/80 border border-slate-800">
                    <span class="text-slate-500 block">IED RF SHEATH</span>
                    <span class="text-emerald-300 font-bold">TRIPLE FREQ</span>
                  </div>
                </div>
              </div>

              <!-- Bottom Microchip Pins -->
              <div class="flex justify-around -mb-4">
                <span v-for="i in 7" :key="'pin-bot-'+i" class="w-1.5 h-3 bg-cyan-400/80 rounded-t"></span>
              </div>
            </div>

            <!-- Fast Quick Specs -->
            <div class="mt-5 space-y-2.5 font-mono text-xs text-slate-300">
              <div class="flex items-center justify-between p-2 rounded-lg bg-slate-900/50 border border-slate-800/80">
                <span class="text-slate-400 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Doctoral Institution
                </span>
                <span class="text-cyan-300 font-medium">NDSU (Fargo, ND)</span>
              </div>
              <div class="flex items-center justify-between p-2 rounded-lg bg-slate-900/50 border border-slate-800/80">
                <span class="text-slate-400 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Undergraduate
                </span>
                <span class="text-emerald-300 font-medium">BUET (Dhaka, Bangladesh)</span>
              </div>
              <div class="flex items-center justify-between p-2 rounded-lg bg-slate-900/50 border border-slate-800/80">
                <span class="text-slate-400 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Math Olympiad
                </span>
                <span class="text-amber-300 font-medium">National Champ & 5x Regional</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <!-- Bottom Hardware Stat Strip -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 stats-strip">
        <div class="p-4 rounded-xl bg-[#091124]/70 border border-cyan-500/20 backdrop-blur-md hover:border-cyan-400/50 transition-all">
          <div class="text-2xl sm:text-3xl font-mono font-bold text-cyan-400">4.00<span class="text-sm text-slate-400">/4.00</span></div>
          <p class="text-xs font-mono text-slate-400 mt-1">NDSU Ph.D. Coursework GPA</p>
        </div>

        <div class="p-4 rounded-xl bg-[#091124]/70 border border-emerald-500/20 backdrop-blur-md hover:border-emerald-400/50 transition-all">
          <div class="text-2xl sm:text-3xl font-mono font-bold text-emerald-400">167<span class="text-sm text-slate-400">/170</span></div>
          <p class="text-xs font-mono text-slate-400 mt-1">GRE Quantitative (~90th %ile)</p>
        </div>

        <div class="p-4 rounded-xl bg-[#091124]/70 border border-amber-500/20 backdrop-blur-md hover:border-amber-400/50 transition-all">
          <div class="text-2xl sm:text-3xl font-mono font-bold text-amber-400">5x + 1x</div>
          <p class="text-xs font-mono text-slate-400 mt-1">National Champ & Regional Streak</p>
        </div>

        <div class="p-4 rounded-xl bg-[#091124]/70 border border-purple-500/20 backdrop-blur-md hover:border-purple-400/50 transition-all">
          <div class="text-2xl sm:text-3xl font-mono font-bold text-purple-400">13+</div>
          <p class="text-xs font-mono text-slate-400 mt-1">Hardware & VLSI Lab Projects</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  // GSAP Entrance animation
  gsap.from('.hero-content > *', {
    duration: 1.0,
    y: 35,
    opacity: 0,
    stagger: 0.15,
    ease: 'power3.out'
  });

  gsap.from('.hero-chip-card', {
    duration: 1.2,
    scale: 0.9,
    opacity: 0,
    delay: 0.3,
    ease: 'back.out(1.4)'
  });

  gsap.from('.stats-strip > div', {
    duration: 0.8,
    y: 20,
    opacity: 0,
    stagger: 0.1,
    delay: 0.6,
    ease: 'power2.out'
  });
});
</script>
