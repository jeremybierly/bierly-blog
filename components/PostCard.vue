<template>
  <article class="rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700 p-6 shadow-sm">
    <NuxtLink :to="post._path" class="block hover:no-underline">
      <h2 class="mb-2 text-2xl font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400 font-raleway">
        {{ post.title }}
      </h2>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed font-baskerville">{{ post.description }}</p>
      <div class="mt-4 text-sm text-gray-600 dark:text-gray-400 font-baskerville">
        {{ formatDate(post.date) }}
      </div>
    </NuxtLink>
  </article>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})

function formatDate(date) {
  return new Date(date).toLocaleDateString()
}
</script>