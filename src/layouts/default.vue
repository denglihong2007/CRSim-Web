<template>
  <AppBar/>
  <v-main>
    <router-view />
  </v-main>
  <AppFooter/>
</template>

<script lang="ts" setup>
import AppFooter from '@/components/AppFooter.vue';
import AppBar from '@/components/AppBar.vue';

  //
</script>
