<template>
  <footer id="contact" class="relative pt-24 pb-12 z-10 border-t border-slate-800/80 bg-[#02050f]/90">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top Reference & Contact Split -->
      <div id="reference" class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        
        <!-- Left: Academic Reference from CV (5 cols) -->
        <div class="lg:col-span-5 space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 text-xs font-mono">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>OFFICIAL ACADEMIC REFERENCE</span>
          </div>

          <h3 class="text-2xl sm:text-3xl font-black font-mono text-white">
            Doctoral <span class="text-cyan-400">Supervision</span>
          </h3>

          <div class="p-6 rounded-2xl bg-[#091124] border border-cyan-500/30 shadow-chip space-y-4">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <div>
                <h4 class="text-lg font-bold font-mono text-white">{{ academicReference.name }}</h4>
                <div class="text-xs font-mono text-cyan-400 font-semibold">{{ academicReference.title }}</div>
                <div class="text-xs text-slate-400 font-sans mt-0.5">{{ academicReference.department }}</div>
                <div class="text-xs text-slate-300 font-medium font-sans">{{ academicReference.institution }}</div>
              </div>
            </div>

            <div class="pt-4 border-t border-slate-800 space-y-2 text-xs font-mono">
              <a 
                :href="'mailto:' + academicReference.email" 
                class="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors p-2 rounded-lg bg-slate-900/60 border border-slate-800"
              >
                <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{{ academicReference.email }}</span>
              </a>

              <a 
                :href="'tel:' + academicReference.phone" 
                class="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors p-2 rounded-lg bg-slate-900/60 border border-slate-800"
              >
                <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{{ academicReference.phone }}</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Right: Direct Connect & Message Form (7 cols) -->
        <div class="lg:col-span-7 space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>GET IN TOUCH FOR COLLABORATIONS</span>
          </div>

          <h3 class="text-2xl sm:text-3xl font-black font-mono text-white">
            Connect with <span class="text-emerald-400 glow-text-green">Sanwar</span>
          </h3>

          <!-- Direct Coordinates Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
            <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div class="flex items-center gap-2.5 overflow-hidden">
                <svg class="w-4 h-4 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span class="truncate text-slate-200">{{ personalInfo.email }}</span>
              </div>
              <button 
                @click="copyText(personalInfo.email, 'email')"
                class="px-2 py-1 rounded bg-slate-800 hover:bg-cyan-500 hover:text-black text-cyan-300 text-[10px] transition-colors"
              >
                {{ copiedType === 'email' ? 'Copied!' : 'Copy' }}
              </button>
            </div>

            <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
              <div class="flex items-center gap-2.5 overflow-hidden">
                <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="truncate text-slate-200">{{ personalInfo.phone }}</span>
              </div>
              <button 
                @click="copyText(personalInfo.phone, 'phone')"
                class="px-2 py-1 rounded bg-slate-800 hover:bg-emerald-500 hover:text-black text-emerald-300 text-[10px] transition-colors"
              >
                {{ copiedType === 'phone' ? 'Copied!' : 'Copy' }}
              </button>
            </div>
          </div>

          <!-- Message Inquire Form -->
          <form @submit.prevent="sendMessage" class="p-6 rounded-2xl bg-[#091124] border border-slate-800 space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-mono text-slate-400 mb-1">Your Name / Organization</label>
                <input 
                  v-model="form.name" 
                  type="text" 
                  required
                  placeholder="e.g. Intel / TSMC Recruiter or Colleague"
                  class="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:outline-none text-xs font-mono text-white placeholder-slate-600"
                />
              </div>

              <div>
                <label class="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
                <input 
                  v-model="form.email" 
                  type="email" 
                  required
                  placeholder="name@organization.com"
                  class="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:outline-none text-xs font-mono text-white placeholder-slate-600"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs font-mono text-slate-400 mb-1">Subject / Inquiry</label>
              <input 
                v-model="form.subject" 
                type="text" 
                required
                placeholder="Hardware Project Collaboration / Chip Design Opportunity"
                class="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:outline-none text-xs font-mono text-white placeholder-slate-600"
              />
            </div>

            <div>
              <label class="block text-xs font-mono text-slate-400 mb-1">Message</label>
              <textarea 
                v-model="form.message" 
                rows="3" 
                required
                placeholder="Write your note or opportunity details..."
                class="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 focus:border-cyan-400 focus:outline-none text-xs font-mono text-white placeholder-slate-600 resize-none"
              ></textarea>
            </div>

            <div class="flex items-center justify-between pt-1">
              <span v-if="submitted" class="text-xs font-mono text-emerald-400 flex items-center gap-1.5 animate-fadeIn">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Message dispatched to mailto client!
              </span>
              <span v-else class="text-[11px] font-mono text-slate-500">
                Direct transmission to sanwar.ovy@ndsu.edu
              </span>

              <button 
                type="submit"
                class="px-5 py-2.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold font-mono text-xs tracking-wide transition-all shadow-md hover:shadow-glow-cyan"
              >
                Send Message
              </button>
            </div>
          </form>

        </div>

      </div>

      <!-- Bottom Bar with Copyright & CV Download -->
      <div class="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <div class="flex items-center gap-2">
          <span>© {{ new Date().getFullYear() }} Sanwar Ahmed Ovy.</span>
          <span class="text-slate-600">|</span>
          <span class="text-cyan-400">Next Generation System Design Lab</span>
        </div>

        <div class="flex items-center gap-4">
          <a 
            href="/Sanwar Ahmed Ovy(CV).docx" 
            download="Sanwar_Ahmed_Ovy_CV.docx"
            class="hover:text-cyan-300 flex items-center gap-1.5 text-slate-300 transition-colors"
          >
            <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download CV (.docx)</span>
          </a>

          <a href="#hero" class="hover:text-white transition-colors flex items-center gap-1">
            <span>Back to top</span>
            <span>↑</span>
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { personalInfo, academicReference } from '../data/portfolioData';

const copiedType = ref(null);
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});
const submitted = ref(false);

function copyText(text, type) {
  navigator.clipboard.writeText(text);
  copiedType.value = type;
  setTimeout(() => {
    copiedType.value = null;
  }, 2000);
}

function sendMessage() {
  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.value.subject)}&body=${encodeURIComponent(
    `From: ${form.value.name} (${form.value.email})\n\nMessage:\n${form.value.message}`
  )}`;
  window.location.href = mailtoLink;
  submitted.value = true;
}
</script>
