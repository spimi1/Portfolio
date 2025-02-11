<template>
    <div class="container mx-auto max-w-4xl">
      <header class=" justify-between md:items-center sticky top-4 ">
        <div class="flex items-center md:space-x-12">
          <div class="hidden md:block">
            <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200 dark:hover:bg-gray-800">
            </NuxtLink>
          </div>
  
          <Menu class=""/>
        </div>
      </header>
  
      <main class="p-2 mt-10">
        <slot />
      </main>
    </div>
  </template>
  
  <script setup>
  
  useHead({
    titleTemplate: '%s - Spimi',
    link: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
        crossorigin: ''
      }
    ]
  })
  </script>
  
  <style>
  body {
    font-family: 'Roboto';
  }
  
  body {
    @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300
  }
  </style>