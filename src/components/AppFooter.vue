<template>
  <v-footer height="40" app>
    <a
      v-for="item in items"
      :key="item.title"
      :href="item.href"
      :title="item.title"
      class="d-inline-block mx-2 social-link"
      rel="noopener noreferrer"
      target="_blank"
    >
      <v-icon
        :icon="item.icon"
      />
    </a>

    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px;"
    >
      &copy; {{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block">电排骨</span>
      —
      <a
        class="text-decoration-none on-surface"
        href="https://www.gnu.org/licenses/gpl-3.0.html"
        rel="noopener noreferrer"
        target="_blank"
      >
        GPL-3.0 License
      </a>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { red } from 'vuetify/util/colors';

  const items = [
    {
      title: 'CRSim-Web GitHub',
      icon: `mdi-github`,
      href: 'https://github.com/denglihong2007/CRSim-Web',
    },
  ]
</script>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>
