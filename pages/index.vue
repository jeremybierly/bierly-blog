<template>
  <div>
    <h1 class="mb-8 text-4xl font-bold text-gray-900 dark:text-gray-100 font-raleway">Latest Posts</h1>
    <div class="space-y-6">
      <ContentList path="/" v-slot="{ list }">
        <PostCard v-for="post in list" :key="post._path" :post="post" />
      </ContentList>
    </div>
  </div>
</template>