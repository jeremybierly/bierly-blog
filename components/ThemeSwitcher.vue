<template>
  <div class="flex items-center gap-2">
    <ClientOnly>
      <button
        class="i-carbon-sun dark:i-carbon-moon h-5 w-5 text-gray-700 dark:text-gray-200 transition hover:text-blue-600 dark:hover:text-blue-400"
        @click="toggleTheme"
        :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

function toggleTheme() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>