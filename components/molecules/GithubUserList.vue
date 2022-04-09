<template >
  <div>
    <h1>TEst</h1>
    <div v-if="items.length" class="px-4 sm:px-6">
      <AppLink
        v-for="contributor of items"
        :key="contributor.login"
        :href="`https://github.com/${contributor.login}`"
        class="
          inline-flex
          mb-2
          mr-2
          overflow-hidden
          transition-colors
          duration-300
          ease-linear
          border
          rounded
          text-light-onSurfacePrimary
          dark:text-dark-onSurfacePrimary
          bg-light-surfaceElevated
          light:hover:bg-gray-300
          dark:bg-dark-elevatedSurface dark:hover:bg-dark-surface
          border-light-border
          dark:border-dark-border
        "
      >
        <NuxtImg
          :alt="contributor.name"
          :srcset="`https://github.com/${contributor.login}.png?size=32 1x, https://github.com/${contributor.login}.png?size=64 2x`"
          :src="`https://github.com/${contributor.login}.png?size=32`"
          loading="lazy"
          class="h-8"
        />
        <span class="inline-block px-2 leading-loose">
          {{ contributor.name }}
        </span>
      </AppLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>