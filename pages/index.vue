<template>
  <main class="min-h-screen p-6 space-y-12 relative z-0 pt-24">
    <!-- Profile Section -->
    <section class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="space-y-4">
          <div class="flex items-center space-x-4">
            <UAvatar
              size="2xl"
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjc4bmRpYjJpYm9lcXhjNzFuMWY0ZTZyMmg0azFkdmJjeGZsa2ZzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2kkdSiVkuKHzsCuou2/giphy.gif"
              alt="Profile"
            />
            <div>
              <h1 class="text-4xl font-bold">Spimi</h1>
              <p class="text-gray-600 dark:text-gray-400">Full Stack Developer</p>
            </div>
          </div>
          <div class="flex items-center space-x-6">
            <div class="flex items-center space-x-2">
              <Icon name="mdi:eye" class="w-5 h-5 text-gray-500" />
              <span class="text-sm font-medium">{{ visitorCount }} visitors</span>
            </div>
            <div class="flex items-center space-x-2">
              <div class="relative">
                <Icon 
                  name="mdi:heart"
                  @click="toggleLike"
                  :class="['w-5 h-5 cursor-pointer transition-all duration-300', 
                    hasLiked ? 'text-red-500 scale-110' : 'text-gray-500']" 
                />
                <div v-if="showHeartAnimation" class="absolute heart-animation">
                  ❤️
                </div>
              </div>
              <span class="text-sm font-medium">{{ likeCount }} likes</span>
            </div>
          </div>
        </div>
        <div class="bg-gray-900 rounded-lg p-4">
          <GitHubCalendar v-if="contributions.length" 
            :contributions="contributions"
            class="w-full"
          />
          <div class="mt-2 text-center">
            <UButton
              icon="i-simple-icons-github"
              color="gray"
              variant="ghost"
              to="https://github.com/spimi1"
              target="_blank"
            >
              View GitHub Profile
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-6">About Me</h2>
      <UCard class="dark:bg-gray-900">
        <p class="text-lg leading-relaxed">
          I'm a passionate Full Stack Developer with a focus on modern web technologies.
          I love building beautiful, responsive, and user-friendly applications.
          My expertise spans across frontend and backend development, with a particular
          interest in JavaScript/TypeScript ecosystems.
        </p>
      </UCard>
    </section>

    <!-- Projects Section -->
    <section class="max-w-6xl mx-auto relative z-0">
      <h2 class="text-3xl font-bold mb-6">Featured Projects</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <UCard 
          v-for="project in projects" 
          :key="project.title"
          class="dark:bg-gray-900"
        >
          <template #header>
            <div class="relative h-48 bg-gray-800 rounded-t-lg overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover"
              />
            </div>
          </template>
          <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400 mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <UBadge 
              v-for="tech in project.technologies" 
              :key="tech" 
              color="primary"
              variant="subtle"
            >
              {{ tech }}
            </UBadge>
          </div>
        </UCard>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold mb-6">Technologies & Tools</h2>
      <div class="grid gap-8">
        <div v-for="category in technologies" :key="category.name" class="space-y-4">
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
  </main>
</template>

<script setup>
import GitHubCalendar from '~/components/GitHubCalendar.vue'
import { ref, onMounted } from 'vue'

// Visitor and Like Count Logic with Animation
const visitorCount = ref(0)
const likeCount = ref(0)
const hasLiked = ref(false)
const showHeartAnimation = ref(false)

const VISITOR_KEY = 'localVisitorCount'
const LIKE_KEY = 'localLikeCount'
const HAS_LIKED_KEY = 'localHasLikedPage'
const LAST_VISIT_KEY = 'lastVisitTimestamp'
const SESSION_VISIT_KEY = 'hasVisitedThisSession'

// GitHub Contributions
const contributions = ref([])

onMounted(async () => {
  checkAndIncrementVisitorCount()
  loadLikeCount()
  checkIfLiked()
  await fetchGitHubContributions()
})

async function fetchGitHubContributions() {
  try {
    const response = await fetch('https://api.github.com/users/spimi1/events')
    const data = await response.json()
    contributions.value = data
      .filter(event => event.type === 'PushEvent')
      .map(event => ({
        date: event.created_at,
        count: event.payload.commits.length
      }))
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error)
  }
}

function checkAndIncrementVisitorCount() {
  const now = new Date().getTime()
  const lastVisit = parseInt(localStorage.getItem(LAST_VISIT_KEY) || '0')
  const hasVisitedThisSession = sessionStorage.getItem(SESSION_VISIT_KEY) === 'true'

  if (!hasVisitedThisSession) {
    const currentCount = parseInt(localStorage.getItem(VISITOR_KEY) || '0')
    const newCount = currentCount + 1
    localStorage.setItem(VISITOR_KEY, newCount.toString())
    localStorage.setItem(LAST_VISIT_KEY, now.toString())
    sessionStorage.setItem(SESSION_VISIT_KEY, 'true')
    visitorCount.value = newCount
  } else {
    visitorCount.value = parseInt(localStorage.getItem(VISITOR_KEY) || '0')
  }
}

function loadLikeCount() {
  likeCount.value = parseInt(localStorage.getItem(LIKE_KEY) || '0')
}

function checkIfLiked() {
  hasLiked.value = localStorage.getItem(HAS_LIKED_KEY) === 'true'
}

function toggleLike() {
  if (!hasLiked.value) {
    const newLikeCount = likeCount.value + 1
    localStorage.setItem(LIKE_KEY, newLikeCount.toString())
    localStorage.setItem(HAS_LIKED_KEY, 'true')
    likeCount.value = newLikeCount
    hasLiked.value = true
    
    // Trigger heart animation
    showHeartAnimation.value = true
    setTimeout(() => {
      showHeartAnimation.value = false
    }, 1000)
  }
}

// Sample Projects Data
const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Nuxt.js and Supabase',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['Nuxt.js', 'Supabase', 'TailwindCSS']
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['Vue.js', 'TypeScript', 'Nuxt UI']
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects and skills',
    image: '/placeholder.svg?height=300&width=400',
    technologies: ['Next.js', 'React', 'TailwindCSS']
  }
]

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

<style scoped>
.heart-animation {
  animation: float-up 1s ease-out forwards;
  opacity: 0;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
}

@keyframes float-up {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateY(-20px) scale(1.5);
    opacity: 0;
  }
}
</style>