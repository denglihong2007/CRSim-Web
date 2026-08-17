<template>
  <v-app-bar class="site-bar" flat height="72"><v-container class="bar-inner d-flex align-center" fluid><router-link
        to="/" class="brand" aria-label="CRSim 首页"><v-avatar size="38"><v-img src="@/assets/logo.png"
            alt="CRSim" /></v-avatar><span>CRSim</span></router-link><v-spacer />
      <nav class="desktop-nav" aria-label="主导航"><v-btn to="/" variant="text" active-class="active-link"
          prepend-icon="mdi-home-outline">首页</v-btn><v-btn href="https://docs.crsim.raillog.top/" target="_blank"
          rel="noopener noreferrer" variant="text" append-icon="mdi-open-in-new">文档</v-btn><v-btn
          href="https://docs.crsim.raillog.top/app/key.html" target="_blank" rel="noopener noreferrer" variant="text"
          append-icon="mdi-open-in-new">申请密钥</v-btn></nav><v-btn class="mobile-menu" icon="mdi-menu" variant="text"
        aria-label="打开菜单" @click="menuOpen = !menuOpen" />
    </v-container></v-app-bar>
  <v-expand-transition>
    <div v-if="menuOpen" class="mobile-nav"><v-btn to="/" block variant="text">首页</v-btn><v-btn
        href="https://docs.crsim.raillog.top/" target="_blank" block variant="text">文档</v-btn><v-btn
        href="https://docs.crsim.raillog.top/app/key.html" target="_blank" block variant="text">申请密钥</v-btn></div>
  </v-expand-transition>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)
</script>
<style
  scoped>
  .site-bar {
    background: rgba(10, 16, 23, .9) !important;
    border-bottom: 1px solid rgba(255, 255, 255, .08);
    backdrop-filter: blur(14px)
  }

  .bar-inner {
    max-width: 1240px;
    padding: 0 32px
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #f1f7f7;
    text-decoration: none;
    font-size: 1.18rem;
    font-weight: 750;
    letter-spacing: -.02em
  }

  .desktop-nav {
    display: flex;
    gap: 4px
  }

  .desktop-nav :deep(.v-btn) {
    color: #aab8c6;
    font-size: .9rem
  }

  .desktop-nav :deep(.v-btn:hover),
  .active-link {
    color: #65d7c8 !important
  }

  .mobile-menu,
  .mobile-nav {
    display: none
  }

  @media(max-width:650px) {
    .bar-inner {
      padding: 0 18px
    }

    .desktop-nav {
      display: none
    }

    .mobile-menu {
      display: inline-flex
    }

    .mobile-nav {
      display: flex;
      flex-direction: column;
      padding: 8px 18px 14px;
      background: #0a1017;
      border-bottom: 1px solid rgba(255, 255, 255, .08)
    }

    .mobile-nav :deep(.v-btn) {
      justify-content: flex-start;
      color: #aab8c6
    }
  }
</style>
