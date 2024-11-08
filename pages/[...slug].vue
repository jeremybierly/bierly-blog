<template>
  <article class="prose prose-lg dark:prose-invert mx-auto font-baskerville prose-headings:font-raleway">
    <ContentDoc v-slot="{ doc }">
      <h1 class="font-raleway text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4">{{ doc.title }}</h1>
      <div class="text-gray-700 dark:text-gray-200">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </article>
</template>