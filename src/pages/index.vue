<template>
  <v-app>
    <v-main>
      <div class="introduction-container">
        <div class="introduction d-flex flex-column margin-x " style="z-index: 1">
          <div class="introduction-col description">
            <div class="brand-home">
              <h1 class="brand-title">CRSim</h1>
            </div>
            <div class="feature-main">
              <p class="bold">
                可以模拟
                <transition name="slide-fade" mode="out-in" @enter="dynamicEnter" @leave="dynamicLeave">
                  <span :key="currentText" class="dynamic-text" :style="{
                    backgroundImage: currentGradient,
                    '--gradient': currentGradient
                  }">
                    {{ currentText }}
                  </span>
                </transition>
              </p>
              <p class="bold">
                的信息显示模拟软件
              </p>
            </div>
            <div class="d-flex ga-2 flex-wrap mt-8 mb-2">
              <a href="https://github.com/denglihong2007/CRSim">
                <img src="https://img.shields.io/github/stars/denglihong2007/CRSim" alt="Stars">
              </a>
              <a>
                <img src="https://img.shields.io/github/license/denglihong2007/CRSim?style=flat-square" alt="开源许可证">
              </a>
            </div>
            <v-btn to="/setup.exe" color="blue-lighten-3" prepend-icon="mdi-download" size="large">立即下载</v-btn>
              <v-btn href="https://github.com/denglihong2007/CRSim" class="ml-3" color="gray-lighten-3" target="_blank"
                prepend-icon="mdi-github" size="large">GitHub 仓库</v-btn>
          </div>
        </div>
      </div>

      <!-- 功能展示部分 -->
      <!-- <v-sheet class="py-16" color="grey lighten-3">
        <v-container>
          <v-row>
            <v-col v-for="(feature, i) in features" :key="i" cols="12" md="4">
              <v-card class="pa-6" height="100%">
                <v-icon x-large class="mb-4">{{ feature.icon }}</v-icon>
                <h3 class="headline mb-4">{{ feature.title }}</h3>
                <p class="body-1">{{ feature.desc }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet> -->
    </v-main>
  </v-app>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  data: () => ({
    features: [
      {
        icon: 'mdi-rocket',
        title: '功能特性 1',
        desc: '详细介绍第一个功能的优势和特点'
      },
      {
        icon: 'mdi-shield-check',
        title: '功能特性 2',
        desc: '详细介绍第二个功能的优势和特点'
      },
      {
        icon: 'mdi-chart-line',
        title: '功能特性 3',
        desc: '详细介绍第三个功能的优势和特点'
      }
    ]
  }),
  setup() {
    // 文字和颜色数组
    const texts = ['候车室大屏', '站台屏', '出站大屏', '售票网站'];
    const gradients = ["linear-gradient(to right, orange, red)", "linear-gradient(to right, blue, cyan)", "linear-gradient(to right, red, purple)", "linear-gradient(to right, green, lime)",];

    const index = ref(0);
    const currentText = ref(texts[index.value]);
    const currentGradient = ref(gradients[index.value]);

    // 定时切换文字和颜色
    let interval;

    const startRotation = () => {
      interval = setInterval(() => {
        index.value = (index.value + 1) % texts.length;
        currentText.value = texts[index.value];
        currentGradient.value = gradients[index.value];
      }, 2000);
    };

    // 生命周期
    onMounted(startRotation);
    onUnmounted(() => clearInterval(interval.value));

    const dynamicEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'all 1s cubic-bezier(0.25, 0.8, 0.25, 1)';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, 50);
    };


    const dynamicLeave = (el) => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      setTimeout(() => {
        el.style.transition = 'all 1s cubic-bezier(0.25, 0.8, 0.25, 1)';
        el.style.opacity = 0;
        el.style.transform = 'translateY(-20px)';
      }, 50);
    };

    return {
      dynamicEnter,
      dynamicLeave,
      currentText,
      currentGradient
    };
  },
  methods: {
    download() {
      // 处理下载逻辑
      alert('下载功能待实现')
    }
  }
}
</script>

<style scoped>
.download-btn {
  margin-right: 10px;
}

.github-btn {
  color: #3498db;
}

.dynamic-text {
  font-weight: 800;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  position: relative;
  display: inline-block;
  transition: all 0.6s;
}

.introduction-container {
  background-color: black;
  background-image: linear-gradient(135deg, #26c4ce11, #00000000, #00000000, #00000000), url("../assets/home.png");
  background-position: right;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-clip: content-box;

  @media (max-width: 1200px) {
    background-image: linear-gradient(135deg, #26c4ce11, #00000000, #00000000, #00000000), url("../assets/home.png");
  }

  @media (max-width: 1000px) {
    background-image: linear-gradient(135deg, #26c4ce11, #00000000, #00000000, #00000000);
  }
}

.introduction {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  @media (max-width: 1000px) {
    .img-col {
      display: none;
    }
  }

  .img-col {
    flex-basis: 0;
    flex-shrink: 1;
    margin-right: -200px;
  }

  .description {
    margin-top: 20vh;
    margin-left: 16vh;
    ;
  }

  @media (min-width: 1000px) {
    .img-position-absolute {
      position: absolute;
    }

    .desktop-img {
      transition: all 0.8s cubic-bezier(0.08, 0.82, 0.17, 1) 0.1s;
      height: 80vh;
      margin-top: 10vh;
      margin-right: -30vw;
    }

    .desktop-img:hover {
      transform: translateX(-15vw);
    }

  }

}

.brand-home {
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 60px;
  }
}

.introduction-col {
  min-width: 400px;
  flex-basis: 490px;
}

.brand-title {
  font-size: 52px;

  @media (max-width: 675px) {
    font-size: 42px;
  }
}

.feature-main {
  font-size: 42px;
  line-height: 60px;
  font-weight: bold;
}
</style>