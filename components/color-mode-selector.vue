<template>
  <div class="flex items-center">
    <button @click="toggleMode" class="p-2 text-gray-500">
      <div class="relative w-6 h-6 md:w-5 md:h-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-sun absolute top-0 left-0 transition-all duration-300 ease-in-out"
          :class="{
            'opacity-0 rotate-90': isDark,
            'opacity-100 rotate-0': !isDark,
          }"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-moon absolute top-0 left-0 transition-all duration-300 ease-in-out"
          :class="{
            'opacity-100 rotate-0': isDark,
            'opacity-0 rotate-90': !isDark,
          }"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </div>
    </button>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

const isDark = computed(() => colorMode.value === "dark");

const nextMode = computed(() => (isDark.value ? "light" : "dark"));

const toggleMode = () => {
  colorMode.preference = nextMode.value;
};
</script>

<style scoped>
.feather {
  transform-origin: center;
}
</style>
