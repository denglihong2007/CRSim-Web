<template>
  <section class="home-page">
    <div class="hero-shell">
      <div class="hero-glow" aria-hidden="true" />
      <v-container class="hero-content" fluid>
        <div class="hero-copy">
          <div class="eyebrow"><span class="eyebrow-dot" /> 开源铁路信息显示模拟器</div>
          <h1>让每一个<br /><span class="hero-accent">站点都清晰可见</span></h1>
          <p class="hero-description">可以模拟 <transition name="display-slide" mode="out-in"><span :key="currentText" class="dynamic-text">{{ currentText }}</span></transition> 的信息显示软件</p>
          <div class="hero-actions">
            <v-menu location="bottom start">
              <template #activator="{ props }"><v-btn v-bind="props" class="primary-action" size="x-large" prepend-icon="mdi-download" append-icon="mdi-chevron-down">立即下载</v-btn></template>
              <v-list class="download-menu" density="comfortable">
                <v-list-item href="https://apps.microsoft.com/detail/9n4xhrrmph8v?referrer=appbadge&amp;mode=direct" target="_blank" rel="noopener noreferrer" prepend-icon="mdi-microsoft-windows" title="Microsoft Store" subtitle="推荐，自动获取更新" />
                <v-list-item href="https://github.com/denglihong2007/CRSim/releases" target="_blank" rel="noopener noreferrer" prepend-icon="mdi-github" title="GitHub Releases" subtitle="下载独立安装包" />
              </v-list>
            </v-menu>
            <v-btn class="secondary-action" href="https://github.com/denglihong2007/CRSim" target="_blank" rel="noopener noreferrer" size="x-large" variant="outlined" prepend-icon="mdi-github">查看源码</v-btn>
          </div>
          <div class="trust-row">
            <a href="https://github.com/denglihong2007/CRSim" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/denglihong2007/CRSim?style=flat-square&label=Stars" alt="GitHub stars" /></a>
            <a href="https://github.com/denglihong2007/CRSim/releases" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/v/tag/denglihong2007/CRSim?style=flat-square&label=Latest" alt="Latest version" /></a>
            <a href="https://github.com/denglihong2007/CRSim/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/license/denglihong2007/CRSim?style=flat-square" alt="License" /></a>
          </div>
        </div>
      </v-container>
    </div>
    <section class="feature-section"><v-container><div class="section-heading"><div><span class="eyebrow">为真实场景而设计</span><h2>一套工具，覆盖每块屏幕</h2></div><p>从数据到视觉呈现，保持铁路信息的准确与秩序。</p></div><div class="feature-grid"><article v-for="feature in features" :key="feature.title" class="feature-item"><div class="feature-icon"><v-icon :icon="feature.icon" /></div><h3>{{ feature.title }}</h3><p>{{ feature.description }}</p></article></div></v-container></section>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
const displays = ['候车室大屏', '站台屏', '出站大屏', '售票网站']
const displayIndex = ref(0)
const currentText = computed(() => displays[displayIndex.value])
let rotation: ReturnType<typeof setInterval> | undefined
onMounted(() => { rotation = setInterval(() => { displayIndex.value = (displayIndex.value + 1) % displays.length }, 2400) })
onUnmounted(() => { if (rotation) clearInterval(rotation) })
const features = [
  { icon: 'mdi-monitor-dashboard', title: '多场景还原', description: '覆盖旅客从进站到出站所见的每一块信息屏。' },
  { icon: 'mdi-database-sync-outline', title: '数据驱动', description: '使用真实车次与站点数据，模拟结果更可信。' },
  { icon: 'mdi-code-braces', title: '开放可扩展', description: '完整开源，欢迎贡献主题、接口与新的显示场景。' },
]
</script>

<style scoped>
.home-page{background:rgb(var(--v-theme-background));color:rgb(var(--v-theme-on-background))}.hero-shell{position:relative;overflow:hidden;border-bottom:1px solid rgba(255,255,255,.08);background:#0a1017}.hero-shell::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,#0a1017 15%,rgba(10,16,23,.78) 52%,rgba(10,16,23,.18)),url('../assets/home.png') right center/auto 100% no-repeat;opacity:.9}.hero-glow{position:absolute;width:560px;height:560px;left:22%;top:-35%;background:rgba(45,212,191,.12);filter:blur(110px);border-radius:50%}.hero-content{position:relative;min-height:640px;max-width:1240px;display:flex;align-items:center;padding:96px 48px 88px}.hero-copy{max-width:610px}.eyebrow{color:#65d7c8;font-size:.78rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase}.eyebrow-dot{display:inline-block;width:7px;height:7px;margin-right:8px;border-radius:50%;background:#65d7c8;box-shadow:0 0 0 4px rgba(101,215,200,.14)}h1{margin:20px 0 24px;font-size:clamp(2.8rem,6vw,5.3rem);line-height:1.05;letter-spacing:-.04em}.hero-accent{color:#65d7c8}.hero-description{max-width:530px;color:#aab8c6;font-size:1.08rem;line-height:1.8}.dynamic-text{display:inline-block;color:#65d7c8;font-weight:700}.display-slide-enter-active,.display-slide-leave-active{transition:opacity .25s ease,transform .25s ease}.display-slide-enter-from{opacity:0;transform:translateY(10px)}.display-slide-leave-to{opacity:0;transform:translateY(-10px)}.hero-actions{display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-top:34px}.primary-action{background:#65d7c8!important;color:#071214!important;font-weight:700}.secondary-action{border-color:rgba(255,255,255,.3)}.download-menu{min-width:250px;border:1px solid rgba(255,255,255,.1)}.trust-row{display:flex;flex-wrap:wrap;gap:10px;margin-top:30px;opacity:.75}.trust-row img{height:20px}.feature-section{padding:92px 0 110px;background:#0d151d}.section-heading{display:flex;justify-content:space-between;align-items:end;gap:32px;margin-bottom:46px}h2{margin:12px 0 0;font-size:clamp(1.8rem,3vw,2.7rem);letter-spacing:-.03em}.section-heading p{max-width:300px;margin:0;color:#8b9aa8;line-height:1.7}.feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.1)}.feature-item{min-height:210px;padding:30px;background:#0d151d}.feature-icon{display:grid;place-items:center;width:44px;height:44px;margin-bottom:24px;color:#65d7c8;border:1px solid rgba(101,215,200,.3)}h3{margin:0 0 10px;font-size:1.15rem}.feature-item p{margin:0;color:#8b9aa8;line-height:1.7}@media(max-width:800px){.hero-content{min-height:auto;padding:74px 24px 64px}.section-heading{display:block}.section-heading p{margin-top:16px}.feature-grid{grid-template-columns:1fr}}
</style>
