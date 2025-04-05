<template>
  <v-app-bar app elevate-on-scroll>
    <div class="d-flex align-center ml-2">
      <v-avatar size="48">
        <v-img src="@/assets/logo.png" />
      </v-avatar>
      <v-toolbar-title class="text-h5 font-weight-bold ml-2">
        CRSim
      </v-toolbar-title>
    </div>

    <v-spacer />

    <v-btn text to="/" active-class="active-link" class="mx-1 nav-btn">
      <v-icon left class="mr-1">mdi-home</v-icon>
      首页
    </v-btn>

    <v-btn text href="https://docs.crsim.tech/" target="_blank" rel="noopener noreferrer"
      class="mx-1 nav-btn">
      <v-icon left class="mr-1">mdi-text-box</v-icon>
      文档
      <v-icon right small class="ml-1">mdi-open-in-new</v-icon>
    </v-btn>

    <v-btn text href="http://47.122.74.193/CRSim/Key/" target="_blank" rel="noopener noreferrer"
      class="mx-1 nav-btn">
      <v-icon left class="mr-1">mdi-key</v-icon>
      申请密钥
      <v-icon right small class="ml-1">mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style scoped>

/* 按钮悬停动画 */
.nav-btn {
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  /* 增加字间距 */

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.1);
  }
}

/* 激活链接样式 */
.active-link {
  color: #FFD700 !important;
  /* 使用金色高亮 */
  font-weight: 600;
  border-bottom: 2px solid currentColor;
}

/* 响应式调整 */
@media (max-width: 600px) {
  .v-toolbar__title {
    font-size: 1.25rem !important;
  }

  .v-btn {
    font-size: 0.875rem;
    padding: 0 8px;
  }
}
</style>