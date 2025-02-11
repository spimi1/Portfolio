<template>
  <!-- Projects Section -->
  <section class="max-w-6xl mx-auto">
    <h2 class="text-3xl font-bold mb-6">{{ t("featuredprojects") }}</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <UCard
        v-for="project in projects"
        :key="project.title"
        class="dark:bg-gray-900"
      >
        <template #header>
          <div class="h-48 bg-gray-800 rounded-t-lg overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover z-auto"
            />
          </div>
        </template>
        <h3 class="text-xl font-semibold mb-2 z-auto">{{ project.title }}</h3>
        <p class="text-gray-600 dark:text-gray-400 mb-4 z-auto">
          {{ project.description }}
        </p>
        <div class="flex flex-wrap gap-2 z-0">
          <UBadge
            v-for="tech in project.technologies"
            :key="tech"
            color="primary"
            variant="subtle"
            class="z-auto"
          >
            {{ tech }}
          </UBadge>
        </div>
      </UCard>
    </div>
  </section>
</template>

<script setup>
const localePath = useLocalePath();
const { t, setLocale } = useI18n();
const projects = [
  {
    title: "My portfolio",
    description: "The portfolio you are watching right now",
    image: "/images/portfolio.png",
    technologies: [
      "Nuxt.js",
      "NuxtUI",
      "Iconify",
      "TailwindCSS",
      "Nitro",
      "i18n",
    ],
  },
  {
    title: "Ekobilans",
    description: "A website created for a accountancy company",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "TypeScript", "Nuxt UI"],
  },
  {
    title: "Finance-tracker",
    description: "A personal webiste that I made in my Nuxt course",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Nuxt", "NuxtUI", "Iconify", "TailwindCSS"],
  },
];
</script>
