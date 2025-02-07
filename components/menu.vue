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
      label: "Language",
      icon: "i-line-md:compass-twotone-loop",
      disabled: true,
    },
  ],
  [
    {
      label: "Polish",
      icon: "i-heroicons-pencil-square-20-solid",
      shortcuts: ["P"],
      click: () => {
        setLocale("pl");
      },
    },
    {
      label: "English",
      icon: "i-heroicons-pencil-square-20-solid",
      shortcuts: ["E"],
      click: () => {
        setLocale("en");
      },
    },
  ],
];
</script>
<template>
  <nav class="font-mono flex items-center">
    <UAvatar
      class="mr-4"
      chip-color="primary"
      chip-text=""
      chip-position="top-right"
      size="sm"
      src="https://avatars.githubusercontent.com/u/739984?v=4"
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
        <NuxtLink to="/about" class="link">{{ t("about") }}</NuxtLink>
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
        label="Options"
        trailing-icon="i-heroicons-chevron-down-20-solid"
      />
    </UDropdown>
  </nav>
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
  margin-left: 1px; /* Opcjonalnie, aby dodać odstęp między tekstem a kursorem */
  vertical-align: baseline; /* Dodaj tę linię */
}

.typed-cursor.typing {
  animation: none;
  opacity: 1;
}
</style>
