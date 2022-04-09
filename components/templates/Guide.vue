<template>
  <AppPage class="d-container">
    <PageContent :page="page">
      <template #mobile-toc>
        <PageMobileToc
          :title="page.body.toc.title"
          :toc="page.body.toc.links"
        />
      </template>
    </PageContent>

    <EditOnGithub v-if="repoUrl" :page="page" />

    <template #toc>
      <PageToc
        v-if="!page.body.hideToc"
        :title="page.body.toc.title"
        :toc="page.body.toc.links"
      />
    </template>
  </AppPage>
</template>

<script lang="ts">
//import { defineComponent, onMounted } from "@nuxtjs/composition-api";
//import { useGitHub, scrollToHeading } from "@docus/theme/runtime";

export default {
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  
};
</script>
