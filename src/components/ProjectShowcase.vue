<template>
  <section id="projects" class="relative py-24 z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 text-xs font-mono">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span>SILICON, HARDWARE & EMBEDDED ENGINEERING</span>
        </div>

        <h2 class="text-3xl sm:text-5xl font-black text-white font-mono tracking-tight">
          Academic <span class="text-cyan-400 glow-text-cyan">Projects</span>
        </h2>

        <p class="text-slate-400 font-sans text-base sm:text-lg">
          Hands-on ASIC tapeout simulations, FPGA prototyping, analog RF hardware, and microcontroller design from BUET laboratories.
        </p>
      </div>

      <!-- Featured Triumvirate: 3 Key Highlighted Projects -->
      <div class="mb-16">
        <div class="flex items-center gap-3 mb-6">
          <span class="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            FLAGSHIP HARDWARE & CHIP DESIGN PROJECTS
          </span>
          <div class="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent"></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div 
            v-for="project in featuredProjects" 
            :key="project.id"
            @click="openModal(project)"
            class="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#09142f] via-[#070f24] to-[#040816] border border-cyan-500/50 hover:border-cyan-300 shadow-chip hover:shadow-glow-cyan transition-all duration-300 cursor-pointer group hover:-translate-y-2 flex flex-col justify-between"
          >
            <!-- High-voltage badge -->
            <div class="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-cyan-950 border border-cyan-400 text-[10px] font-mono text-cyan-300 font-bold uppercase tracking-wider">
              {{ project.semester }}
            </div>

            <div>
              <div class="text-[11px] font-mono text-cyan-400 mb-1 flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <span>{{ project.lab }}</span>
              </div>

              <h3 class="text-xl sm:text-2xl font-bold font-mono text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {{ project.title }}
              </h3>

              <p class="text-sm text-slate-300 font-sans leading-relaxed mb-4">
                {{ project.brief }}
              </p>

              <!-- Hover reveal key points -->
              <div class="space-y-1.5 mb-6 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div 
                  v-for="(ach, i) in project.keyAchievements.slice(0, 2)" 
                  :key="i"
                  class="text-xs text-slate-300 font-sans flex items-start gap-1.5"
                >
                  <span class="text-cyan-400 font-bold">›</span>
                  <span>{{ ach }}</span>
                </div>
              </div>
            </div>

            <!-- Tech Stack & CTA -->
            <div class="pt-4 border-t border-slate-800/80 space-y-3">
              <div class="flex flex-wrap gap-1.5">
                <span 
                  v-for="tech in project.techStack" 
                  :key="tech"
                  class="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-800/60 text-cyan-300"
                >
                  {{ tech }}
                </span>
              </div>

              <div class="flex items-center justify-between text-xs font-mono text-cyan-400 pt-1 group-hover:text-cyan-300">
                <span>Inspect Architecture</span>
                <span class="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Category Filter Tabs -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              activeCategory === cat 
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20' 
                : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            ]"
            class="px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200"
          >
            {{ cat }}
          </button>
        </div>

        <div class="text-xs font-mono text-slate-400">
          Showing <span class="text-cyan-400 font-bold">{{ filteredProjects.length }}</span> of {{ academicProjects.length }} Projects
        </div>
      </div>

      <!-- Project Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          @click="openModal(project)"
          class="relative p-6 rounded-2xl bg-[#091124]/80 border border-slate-800 hover:border-cyan-500/50 hover:shadow-chip transition-all duration-300 cursor-pointer group flex flex-col justify-between hover:-translate-y-1"
        >
          <div>
            <div class="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
              <span class="text-cyan-400">{{ project.semester }}</span>
              <span class="px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">{{ project.lab }}</span>
            </div>

            <h4 class="text-lg font-bold font-mono text-white mb-2 group-hover:text-cyan-300 transition-colors">
              {{ project.title }}
            </h4>

            <p class="text-xs text-slate-300 font-sans leading-relaxed mb-4 line-clamp-3">
              {{ project.brief }}
            </p>
          </div>

          <div class="pt-4 border-t border-slate-800/80 space-y-3">
            <div class="flex flex-wrap gap-1.5">
              <span 
                v-for="tech in project.techStack.slice(0, 3)" 
                :key="tech"
                class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
              >
                {{ tech }}
              </span>
              <span v-if="project.techStack.length > 3" class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-500">
                +{{ project.techStack.length - 3 }}
              </span>
            </div>

            <div class="text-xs font-mono text-slate-400 group-hover:text-cyan-400 flex items-center justify-between transition-colors">
              <span>View Dossier</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Project Details Modal Component -->
    <ProjectModal :project="selectedProject" @close="selectedProject = null" />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { academicProjects } from '../data/portfolioData';
import ProjectModal from './ProjectModal.vue';

const activeCategory = ref('All');
const selectedProject = ref(null);

const featuredProjects = computed(() => {
  return academicProjects.filter(p => p.featured);
});

const categories = [
  'All',
  'VLSI & Chip Design',
  'Optoelectronics & Physics',
  'Embedded & Microcontroller',
  'Digital Logic',
  'Control & Biomedical',
  'RF & Analog Communications',
  'Power Systems',
  'Signal Processing & AI',
  'Renewable Energy',
  'Electrical CAD & Infrastructure'
];

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return academicProjects;
  return academicProjects.filter(p => p.category === activeCategory.value);
});

function openModal(project) {
  selectedProject.value = project;
}
</script>
