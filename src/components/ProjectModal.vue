<template>
  <div 
    v-if="project"
    class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
    @click.self="$emit('close')"
  >
    <div class="relative w-full max-w-3xl bg-[#091124] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
      
      <!-- Close Button -->
      <button 
        @click="$emit('close')"
        class="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 transition-colors"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Header -->
      <div>
        <div class="flex flex-wrap items-center gap-2 mb-2">
          <span class="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">PROJECT DOSSIER</span>
          <span class="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">{{ project.semester }}</span>
          <span class="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">{{ project.lab }}</span>
        </div>

        <h3 class="text-2xl sm:text-3xl font-extrabold font-mono text-white flex items-center gap-2">
          <span>{{ project.title }}</span>
          <span v-if="project.featured" class="text-xs font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-600">Featured VLSI</span>
        </h3>
      </div>

      <!-- Overview Box -->
      <div class="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-300 font-sans leading-relaxed">
        {{ project.description }}
      </div>

      <!-- Key Engineering Achievements -->
      <div>
        <h4 class="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 font-semibold flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Key Engineering Milestones & Methodologies
        </h4>
        <div class="space-y-2">
          <div 
            v-for="(ach, i) in project.keyAchievements" 
            :key="i"
            class="p-3 rounded-lg bg-[#050c1e] border border-cyan-500/20 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5"
          >
            <span class="text-cyan-400 font-mono font-bold mt-0.5">0{{ i + 1 }}.</span>
            <span>{{ ach }}</span>
          </div>
        </div>
      </div>

      <!-- Tech Stack Badges -->
      <div>
        <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">Engineered With Toolchain</h4>
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tech in project.techStack" 
            :key="tech"
            class="text-xs font-mono px-3 py-1 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-500/40"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="pt-4 border-t border-slate-800 flex items-center justify-between">
        <span class="text-xs font-mono text-slate-400">BUET EEE Academic Project Archive</span>
        <button 
          @click="$emit('close')"
          class="px-5 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-bold transition-colors"
        >
          Dismiss View
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    default: null
  }
});

defineEmits(['close']);
</script>
