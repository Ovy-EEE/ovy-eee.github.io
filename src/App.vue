<template>
  <div class="relative min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
    <!-- Glowing Circuit Board & Math Particle Background Effects -->
    <BackgroundEffects />

    <!-- Navigation Bar -->
    <Navbar />

    <!-- Main Content Sections -->
    <main class="relative z-10">
      <!-- 1. Hero Section -->
      <Hero />

      <!-- 2. Core Research Interests -->
      <ResearchInterests />

      <!-- 3. Education & Work Experience Timeline -->
      <EducationExperience />

      <!-- 4. Academic Projects Showcase (Featured + 13 Lab Projects) -->
      <ProjectShowcase />

      <!-- 5. Awards & 10-Year Math Olympiad Record -->
      <AwardsSection />

      <!-- 6. Virtual VLSI & Silicon Lab (CLB, FSM, IC Tester) -->
      <InteractiveChipLab />

      <!-- 7. Technical, Software & Hardware Skills -->
      <SkillsSection />
    </main>

    <!-- 8. Official Reference & Contact Footer -->
    <ContactFooter />
  </div>
</template>

<script setup>
import BackgroundEffects from './components/BackgroundEffects.vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import ResearchInterests from './components/ResearchInterests.vue';
import EducationExperience from './components/EducationExperience.vue';
import ProjectShowcase from './components/ProjectShowcase.vue';
import AwardsSection from './components/AwardsSection.vue';
import InteractiveChipLab from './components/InteractiveChipLab.vue';
import SkillsSection from './components/SkillsSection.vue';
import ContactFooter from './components/ContactFooter.vue';
</script>
