<template>
   <!-- Technologies Section -->
   <section class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-6">{{ t("tech") }}</h2>
      <div class="grid gap-8">
        <div v-for="category in technologies" :key="category.name" class="space-y-4 z-">
          <h3 class="text-xl font-semibold">{{ category.name }}</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <UCard
              v-for="tech in category.items"
              :key="tech.name"
              class="flex flex-col items-center p-4 dark:bg-gray-900"
            >
              <Icon :name="tech.icon" class="w-8 h-8 mb-3" />
              <span class="text-sm font-medium">{{ tech.name }}</span>
            </UCard>
          </div>
        </div>
      </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const localePath = useLocalePath();
const { t, setLocale } = useI18n();
// Technologies Data with Iconify icons
const technologies = [
  {
    name: 'Frontend',
    items: [
      { name: 'HTML', icon: 'fontisto:html5' },
      { name: 'CSS', icon: 'flowbite:css-solid' },
      { name: 'JavaScript', icon: 'fa6-brands:js' },
      { name: 'TypeScript', icon: 'teenyicons:typescript-outline' },
      { name: 'Vue.js', icon: 'carbon:logo-vue' },
      { name: 'React', icon: 'mingcute:react-fill' }
    ]
  },
  {
    name: 'Frameworks',
    items: [
      { name: 'Nuxt.js', icon: 'simple-icons:nuxt' },
      { name: 'Next.js', icon: 'akar-icons:nextjs-fill' },
      { name: 'TailwindCSS', icon: 'teenyicons:tailwind-outline' },
      { name: 'Nuxt UI', icon: 'lineicons:nuxt' }
    ]
  },
  {
    name: 'Backend & Database',
    items: [
      { name: 'Supabase', icon: 'ri:supabase-line' },
      { name: 'Node.js', icon: 'tabler:brand-nodejs' },
    ]
  },
  {
    name: 'Tools & Version Control',
    items: [
      { name: 'Git', icon: 'iconoir:git' },
      { name: 'GitHub', icon: 'line-md:github-twotone' },
      { name: 'VS Code', icon: 'akar-icons:vscode-fill' },
      { name: 'npm', icon: 'teenyicons:npm-outline' }
    ]
  }
]
</script>