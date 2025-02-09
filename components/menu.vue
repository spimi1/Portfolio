<script setup>
const localePath = useLocalePath();
const { t, setLocale } = useI18n();

const typedText = ref("");
const isTyping = ref(true);
let typingInterval = null;

const typeText = () => {
  const textToType = "Spimi";
  let charIndex = 0;

  typingInterval = setInterval(() => {
    if (charIndex < textToType.length) {
      typedText.value += textToType.charAt(charIndex);
      charIndex++;
    } else {
      clearInterval(typingInterval);
      isTyping.value = false;
    }
  }, 300);
};

onMounted(() => {
  typeText();
});

onUnmounted(() => {
  clearInterval(typingInterval);
});

const items = [
  [
    {
      label: "Polish",
      icon: "mdi:language",
      shortcuts: ["P"],
      click: () => {
        setLocale("pl");
      },
    },
    {
      label: "English",
      icon: "mdi:language",
      shortcuts: ["E"],
      click: () => {
        setLocale("en");
      },
    },
  ],
];
</script>
<template>
  <div class="absolute border-2 rounded-2xl border-gray-200 dark:border-gray-800 bg-opacity-10 p-4 backdrop-blur-sm ">
    <nav class="font-mono flex items-center bg-opcaity-10">
      <UAvatar
        class="mr-4"
        chip-color="primary"
        chip-text="Available"
        chip-position="bottom-right"
        size="md"
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjc4bmRpYjJpYm9lcXhjNzFuMWY0ZTZyMmg0azFkdmJjeGZsa2ZzbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2kkdSiVkuKHzsCuou2/giphy.gif"
        alt="Avatar"
      />
      <div class="w-24">
        <span class="text-2xl">
          {{ typedText }}
          <span class="typed-cursor" :class="{ typing: isTyping }">|</span>
        </span>
      </div>

      <ul class="flex flex-col md:flex-row md:space-x-4">
        <li>
          <NuxtLink :to="localePath('/')" class="link">{{ t("home") }}</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/about')" class="link">{{
            t("about")
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/projects')" class="link">{{
            t("projects")
          }}</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('/blog')" class="link">{{
            t("blog")
          }}</NuxtLink>
        </li>
      </ul>
      <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
      <UButton
        color="white"
        icon="famicons:language"
        trailing-icon="i-heroicons-chevron-down-20-solid"
        class="flex items-centered rounded-full ml-20"
      />
    </UDropdown>
    </nav>
  </div>
</template>

<style scoped>
.link {
  @apply p-2 hover:bg-gray-200 dark:hover:bg-gray-800 text-2xl md:text-base;
}

@keyframes blink {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.typed-cursor {
  display: inline;
  animation: blink 1s step-end infinite;
  margin-left: 0.2px; /* Opcjonalnie, aby dodać odstęp między tekstem a kursorem */
  vertical-align: baseline; /* Dodaj tę linię */
}

.typed-cursor.typing {
  animation: none;
  opacity: 1;
}
</style>
