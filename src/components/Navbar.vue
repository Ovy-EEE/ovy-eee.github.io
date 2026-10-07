<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled ? 'bg-[#030712]/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-black/40' : 'bg-transparent py-5'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <!-- Logo & Hardware Identity -->
      <a href="#hero" class="group flex items-center gap-3">
        <div class="relative w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center overflow-hidden group-hover:border-cyan-400 group-hover:shadow-glow-cyan transition-all duration-300">
          <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent"></div>
          <!-- Microchip Die Pins -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-cyan-400"></div>
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-cyan-400"></div>
          <div class="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-cyan-400"></div>
          <div class="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-cyan-400"></div>
          <span class="font-mono font-bold text-cyan-400 text-sm tracking-tighter group-hover:scale-110 transition-transform">SAO</span>
        </div>
        <div>
          <div class="font-bold text-white text-base tracking-wide flex items-center gap-1.5">
            <span>Sanwar Ahmed Ovy</span>
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
          </div>
          <p class="text-xs font-mono text-cyan-400/80">ECE PhD @ NDSU | VLSI & Fab</p>
        </div>
      </a>

      <!-- Desktop Nav Items -->
      <nav class="hidden lg:flex items-center gap-1 xl:gap-2">
        <a 
          v-for="link in navLinks" 
          :key="link.href" 
          :href="link.href"
          :class="[
            activeSection === link.href.substring(1) 
              ? 'text-cyan-400 bg-cyan-950/50 border-cyan-500/30' 
              : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/40 border-transparent'
          ]"
          class="px-3 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all duration-200 border"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Right CTAs -->
      <div class="hidden sm:flex items-center gap-3">
        <a 
          href="#interactive-lab"
          class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-glow-cyan transition-all"
        >
          <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>Silicon Lab</span>
        </a>

        <a 
          href="#contact"
          class="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-200 shadow-md shadow-cyan-500/20 hover:shadow-glow-cyan"
        >
          <span>Connect</span>
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button 
        @click="mobileMenuOpen = !mobileMenuOpen"
        class="lg:hidden p-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 border border-slate-700/60"
        aria-label="Toggle Navigation Menu"
      >
        <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Drawer -->
    <div 
      v-if="mobileMenuOpen"
      class="lg:hidden bg-[#070d1e]/95 backdrop-blur-xl border-b border-cyan-500/30 px-4 pt-4 pb-6 space-y-2 animate-fadeIn"
    >
      <a 
        v-for="link in navLinks" 
        :key="link.href" 
        :href="link.href"
        @click="mobileMenuOpen = false"
        class="block px-4 py-2.5 rounded-lg text-sm font-mono text-slate-200 hover:text-cyan-400 hover:bg-cyan-950/40 border border-transparent hover:border-cyan-500/20 transition-all"
      >
        {{ link.label }}
      </a>
      <div class="pt-4 flex flex-col gap-2">
        <a 
          href="#interactive-lab"
          @click="mobileMenuOpen = false"
          class="w-full text-center py-2.5 rounded-lg text-sm font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-500/30"
        >
          Interactive Silicon Lab
        </a>
        <a 
          href="#contact"
          @click="mobileMenuOpen = false"
          class="w-full text-center py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);
const activeSection = ref('hero');

const navLinks = [
  { label: 'Vision', href: '#hero' },
  { label: 'Research', href: '#research' },
  { label: 'Timeline', href: '#education-experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Awards', href: '#awards' },
  { label: 'Silicon Lab', href: '#interactive-lab' },
  { label: 'Skills', href: '#skills' },
  { label: 'Reference', href: '#reference' },
];

function handleScroll() {
  isScrolled.value = window.scrollY > 30;

  const sections = ['hero', 'research', 'education-experience', 'projects', 'awards', 'interactive-lab', 'skills', 'reference'];
  const scrollPos = window.scrollY + 200;

  for (const id of sections) {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        activeSection.value = id;
        break;
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.25s ease-out forwards;
}
</style>
