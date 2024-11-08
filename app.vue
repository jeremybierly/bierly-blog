<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 font-baskerville">
    <AppHeader />
    <main class="mx-auto max-w-4xl px-4 py-8">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import '@fontsource-variable/raleway'
import '@fontsource/libre-baskerville'
</script>