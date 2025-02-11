<template>
  <main class="min-h-screen p-6 space-y-12 pt-24">
    <!-- Profile Section -->
    <section class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <div class="space-y-4">
          <div class="flex items-center space-x-4">
            <UAvatar
              size="2xl"
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjc4bmRpYjJpYm9lcXhjNzFuMWY0ZTZyMmg0azFkdmJjeGZsa2ZzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2kkdSiVkuKHzsCuou2/giphy.gif"
              alt="Profile"
              class="mix-blend-mode-overlay"
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
              <div class="">
                <Icon 
                  name="mdi:heart"
                  @click="toggleLike"
                  :class="['w-5 h-5 cursor-pointer transition-all duration-300', 
                    hasLiked ? 'text-red-500 scale-110' : 'text-gray-500']" 
                />
                <div v-if="showHeartAnimation" class="heart-animation z-auto">
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
          <div class="mt-2 text-center relative z-10">
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
      <h2 class="text-3xl font-bold mb-6">{{ t("aboutindex") }}</h2>
      <UCard class="dark:bg-gray-900">
        <p class="text-lg leading-relaxed">
          {{ t("abouts") }}
        </p>
      </UCard>
    </section>

    <projects />
    <technologies />
  </main>
</template>

<script setup>
const localePath = useLocalePath();
const { t, setLocale } = useI18n();
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

</script>

<style scoped>
.heart-animation {
  animation: float-up 1s ease-out forwards;
  opacity: 0;
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