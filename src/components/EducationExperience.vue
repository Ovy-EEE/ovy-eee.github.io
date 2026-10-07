<template>
  <section id="education-experience" class="relative py-24 z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 text-xs font-mono">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span>CHRONOLOGICAL TRAJECTORY</span>
        </div>

        <h2 class="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight">
          Education & <span class="text-emerald-400 glow-text-green">Experience</span>
        </h2>

        <p class="text-slate-400 font-sans text-base sm:text-lg">
          Tracking the academic and investigative milestones from BUET EEE to doctoral research at North Dakota State University.
        </p>
      </div>

      <!-- Main Layout: Timeline (left 8 cols) + Standardized Test Scores & Lab Focus (right 4 cols) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Animated Vertical Timeline (8 cols) -->
        <div class="lg:col-span-8 relative">
          
          <!-- Central glowing circuit trace line -->
          <div class="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-emerald-400 to-purple-500/40 shadow-glow-cyan"></div>

          <div class="space-y-12">
            
            <!-- 1. Current PhD & Graduate Research Assistant -->
            <div class="relative pl-16 md:pl-20 group">
              <!-- Circuit Node Via -->
              <div class="absolute left-6 md:left-8 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-[#030712] border-2 border-cyan-400 flex items-center justify-center shadow-glow-cyan group-hover:scale-125 transition-transform">
                <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              </div>

              <!-- Card Content -->
              <div class="p-6 rounded-2xl bg-[#091124]/90 border border-cyan-500/40 hover:border-cyan-400 shadow-chip transition-all space-y-4">
                
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <span class="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-700/60 font-semibold">
                    CURRENT DOCTORAL PROGRAM
                  </span>
                  <span class="text-xs font-mono text-slate-400">
                    August 2023 – Present
                  </span>
                </div>

                <div>
                  <h3 class="text-xl sm:text-2xl font-bold font-mono text-white">
                    Ph.D. in Electrical & Computer Engineering
                  </h3>
                  <div class="text-cyan-400 font-mono text-sm font-medium mt-1">
                    North Dakota State University (NDSU) • Fargo, ND, USA
                  </div>
                  <div class="inline-block mt-2 px-2.5 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
                    Coursework GPA: 4.00 / 4.00
                  </div>
                </div>

                <!-- Role Breakdown -->
                <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div class="flex items-center justify-between text-xs font-mono text-slate-300">
                    <span class="font-bold text-white flex items-center gap-1.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      Graduate Research Assistant (Full-time)
                    </span>
                    <span class="text-cyan-400">Next Gen System Design Lab</span>
                  </div>
                  <p class="text-xs text-slate-300 font-sans leading-relaxed">
                    <strong>Supervisor:</strong> Dr. Sumitha George (Assistant Professor, ECE, NDSU). Conducting investigation into 
                    <em>emerging technology-based circuit and system design</em>.
                  </p>
                </div>

                <ul class="space-y-1.5 text-xs text-slate-300 font-sans">
                  <li class="flex items-start gap-2">
                    <span class="text-cyan-400 font-mono">▸</span>
                    <span>Formulating emerging device circuit models and novel low-power microarchitectures.</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-cyan-400 font-mono">▸</span>
                    <span>High-performance simulation workflows combining SPICE, Verilog, and Python.</span>
                  </li>
                </ul>

              </div>
            </div>

            <!-- 2. BUET Bachelor of Science in EEE -->
            <div class="relative pl-16 md:pl-20 group">
              <!-- Circuit Node Via -->
              <div class="absolute left-6 md:left-8 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-[#030712] border-2 border-emerald-400 flex items-center justify-center shadow-glow-green group-hover:scale-125 transition-transform">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>

              <!-- Card Content -->
              <div class="p-6 rounded-2xl bg-[#091124]/90 border border-emerald-500/40 hover:border-emerald-400 shadow-chip transition-all space-y-4">
                
                <div class="flex flex-wrap items-center justify-between gap-2">
                  <span class="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-700/60 font-semibold">
                    UNDERGRADUATE DEGREE
                  </span>
                  <span class="text-xs font-mono text-slate-400">
                    February 2017 – May 2022
                  </span>
                </div>

                <div>
                  <h3 class="text-xl sm:text-2xl font-bold font-mono text-white">
                    B.Sc. in Electrical & Electronic Engineering (EEE)
                  </h3>
                  <div class="text-emerald-400 font-mono text-sm font-medium mt-1">
                    Bangladesh University of Engineering and Technology (BUET) • Dhaka, Bangladesh
                  </div>
                  <div class="inline-block mt-2 px-2.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono">
                    CGPA: 3.26 / 4.00
                  </div>
                </div>

                <!-- Undergraduate Thesis Box -->
                <div class="p-4 rounded-xl bg-[#050b18] border border-emerald-500/30 space-y-2.5">
                  <div class="flex items-center justify-between">
                    <span class="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                      UNDERGRADUATE THESIS
                    </span>
                    <span class="text-[11px] font-mono text-slate-400">March 2021 – May 2022</span>
                  </div>

                  <h4 class="text-sm font-mono font-bold text-slate-100">
                    "ION ENERGY DISTRIBUTION IN TRIPLE FREQUENCY CAPACITIVE RF SHEATH"
                  </h4>

                  <p class="text-xs text-slate-300 font-sans leading-relaxed">
                    <strong>Thesis Supervisor:</strong> Dr. Md. Nasim Ahmed Dewan (Professor, EEE, BUET).
                  </p>

                  <p class="text-xs text-slate-300 font-sans leading-relaxed">
                    The core research objective was identifying the optimal parameter combination in semiconductor fabrication processing to provide the 
                    <span class="text-emerald-300 font-medium">narrowest and most controllable Ion Energy Distribution (IED)</span>. Examined capacitively coupled plasma fed by single and triple-frequency RF sources and benchmarked multi-parameter responses in MATLAB.
                  </p>
                </div>

                <div class="flex flex-wrap gap-1.5 pt-1">
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">Semiconductor Fabrication</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">Plasma RF Sheath</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">MATLAB Modeling</span>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">VLSI Lab Sequence</span>
                </div>

              </div>
            </div>

            <!-- 3. Higher Secondary Certificate (HSC) -->
            <div class="relative pl-16 md:pl-20 group">
              <!-- Circuit Node Via -->
              <div class="absolute left-6 md:left-8 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-[#030712] border-2 border-amber-400 flex items-center justify-center shadow-glow-amber group-hover:scale-125 transition-transform">
                <span class="w-2 h-2 rounded-full bg-amber-400"></span>
              </div>

              <div class="p-5 rounded-2xl bg-[#091124]/90 border border-amber-500/30 hover:border-amber-400 transition-all space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono text-amber-400 font-semibold">HIGHER SECONDARY (HSC)</span>
                  <span class="text-xs font-mono text-slate-400">2014 – 2016</span>
                </div>
                <h4 class="text-lg font-bold font-mono text-white">Sylhet M.C. College</h4>
                <div class="flex items-center gap-3 text-xs font-mono">
                  <span class="text-amber-300 font-bold">GPA: 5.00 / 5.00</span>
                  <span class="text-slate-500">•</span>
                  <span class="text-cyan-300 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Board Merit Scholarship (2016)
                  </span>
                </div>
              </div>
            </div>

            <!-- 4. Secondary School Certificate (SSC) -->
            <div class="relative pl-16 md:pl-20 group">
              <!-- Circuit Node Via -->
              <div class="absolute left-6 md:left-8 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-[#030712] border-2 border-purple-400 flex items-center justify-center shadow-glow-purple group-hover:scale-125 transition-transform">
                <span class="w-2 h-2 rounded-full bg-purple-400"></span>
              </div>

              <div class="p-5 rounded-2xl bg-[#091124]/90 border border-purple-500/30 hover:border-purple-400 transition-all space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono text-purple-400 font-semibold">SECONDARY SCHOOL (SSC)</span>
                  <span class="text-xs font-mono text-slate-400">2009 – 2014</span>
                </div>
                <h4 class="text-lg font-bold font-mono text-white">Sylhet Govt. Pilot High School</h4>
                <div class="flex items-center gap-3 text-xs font-mono">
                  <span class="text-purple-300 font-bold">GPA: 5.00 / 5.00</span>
                  <span class="text-slate-500">•</span>
                  <span class="text-cyan-300 flex items-center gap-1">
                    <svg class="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Board Merit Scholarship (2014)
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Right Side: Standardized Test Scores & Lab Profile (4 cols) -->
        <div class="lg:col-span-4 space-y-6">
          
          <!-- Standardized Test Scores Section -->
          <div class="p-6 rounded-2xl bg-[#091124]/90 border border-cyan-500/30 backdrop-blur-md shadow-chip space-y-5">
            <div class="flex items-center gap-2 border-b border-slate-800 pb-3">
              <svg class="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 class="font-mono font-bold text-white text-base">Standardized Test Scores</h3>
            </div>

            <!-- GRE Card -->
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-cyan-400">GRE EXAM</span>
                <span class="text-[10px] font-mono text-slate-400">25th January 2023</span>
              </div>
              <div class="flex items-baseline justify-between">
                <span class="text-2xl font-mono font-black text-white">313 <span class="text-xs text-slate-400 font-normal">/ 340</span></span>
                <span class="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700/50">
                  Quant: 167 / 170
                </span>
              </div>
              <div class="space-y-1.5 pt-1 text-xs font-mono">
                <div>
                  <div class="flex justify-between text-[11px] text-slate-300 mb-1">
                    <span>Quantitative</span>
                    <span class="text-cyan-400 font-bold">167 / 170 (90th+ %ile)</span>
                  </div>
                  <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div class="bg-cyan-400 h-full rounded-full" style="width: 98%;"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-[11px] text-slate-300 mb-1">
                    <span>Verbal</span>
                    <span class="text-slate-400 font-bold">146 / 170</span>
                  </div>
                  <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div class="bg-slate-500 h-full rounded-full" style="width: 86%;"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- IELTS Card -->
            <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-emerald-400">IELTS EXAM</span>
                <span class="text-[10px] font-mono text-slate-400">8th October 2022</span>
              </div>
              <div class="flex items-baseline justify-between">
                <span class="text-2xl font-mono font-black text-white">Band 8.0 <span class="text-xs text-slate-400 font-normal">/ 9.0</span></span>
                <span class="text-xs font-mono text-cyan-300 font-bold bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-700/50">
                  C1/C2 Fluent
                </span>
              </div>
              <div class="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
                <div class="p-2 rounded bg-[#070e1e] border border-slate-800">
                  <span class="text-[10px] text-slate-400 block">LISTENING</span>
                  <span class="text-cyan-300 font-bold text-sm">8.5</span>
                </div>
                <div class="p-2 rounded bg-[#070e1e] border border-slate-800">
                  <span class="text-[10px] text-slate-400 block">READING</span>
                  <span class="text-cyan-300 font-bold text-sm">8.5</span>
                </div>
                <div class="p-2 rounded bg-[#070e1e] border border-slate-800">
                  <span class="text-[10px] text-slate-400 block">WRITING</span>
                  <span class="text-slate-300 font-bold text-sm">7.0</span>
                </div>
                <div class="p-2 rounded bg-[#070e1e] border border-slate-800">
                  <span class="text-[10px] text-slate-400 block">SPEAKING</span>
                  <span class="text-slate-300 font-bold text-sm">7.0</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Academic Affiliation Info -->
          <div class="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-[#091124] border border-cyan-500/20 text-xs font-mono space-y-2 text-slate-300">
            <span class="text-cyan-400 font-bold block">LABORATORY AFFILIATION</span>
            <p class="font-sans leading-relaxed text-slate-300">
              Active Member at the <strong>Next Generation System Design Laboratory</strong>, North Dakota State University.
            </p>
            <div class="pt-2 text-slate-400 text-[11px] border-t border-slate-800 flex items-center justify-between">
              <span>Status: Full-time GRA</span>
              <span class="text-emerald-400">Active</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { educationHistory, standardizedTests } from '../data/portfolioData';
</script>
