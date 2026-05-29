<template>
  <section
    class="pt-28 text-gray-500"
    id="home"
  >
    <div class="mx-auto my-5 text-center">
      <h2
        class="bg-gradient-to-r from-purple-600 to-gray-200 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent dark:from-purple-600 dark:to-gray-100 lg:text-4xl xl:text-5xl"
      >
        Ailorix 职场英语句子练习
      </h2>

      <div class="mt-5 text-sm md:text-base xl:text-lg">
        <p class="pt-2 text-center text-gray-500 dark:text-gray-300 lg:text-xl">
          用<span class="text-purple-400 dark:text-purple-200"> 连词成句 </span>和<span
            class="text-purple-400 dark:text-purple-200"
          >
            高频重复 </span
          >练准会议、汇报、邮件里的英文表达
        </p>
        <p class="pt-2 text-center text-gray-500 dark:text-gray-300 lg:text-xl">
          先把句子结构练到熟，再回到 Ailorix 完成真实职业场景输出
        </p>
        <p class="pt-2 text-center text-gray-500 dark:text-gray-300 lg:text-xl">
          适合每天 10 分钟，给工作英语建立可持续的肌肉记忆
        </p>
      </div>
    </div>
    <div class="my-10 flex flex-wrap items-center justify-center gap-4 font-customFont">
      <button
        @click="handleKeydown"
        class="btn relative"
        type="button"
      >
        <strong>开始练习</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </button>
      <a
        href="https://ailorix.com/dashboard"
        class="inline-flex h-12 items-center justify-center rounded-full bg-purple-50 px-6 font-medium text-purple-600 transition hover:bg-purple-100 dark:bg-white/10 dark:text-purple-200"
      >
        回到 Ailorix Dashboard
      </a>
    </div>
    <div class="mt-20 flex w-full justify-center">
      <img
        alt=""
        src="~/assets/home-page-preview.png"
        class="w-4/5 lg:w-3/4"
      />
    </div>

    <CommonDivider />
  </section>
</template>

<script setup lang="ts">
const emit = defineEmits(["start-earthworm"]);

function handleKeydown() {
  emit("start-earthworm");
}
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  overflow: hidden;
  height: 3rem;
  background-size: 300% 300%;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#05051d, #05051d),
    linear-gradient(137.48deg, #ffdb3b 10%, #fe53bb 45%, #8f51ea 67%, #0044ff 87%);
  background-origin: border-box;
  background-clip: content-box, border-box;
}

#container-stars {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  background-color: #05051d;
}

strong {
  z-index: 2;
  font-family: "Avalors Personal Use";
  font-size: 15px;
  letter-spacing: 5px;
  color: #ffffff;
  /* text-shadow: 0 0 4px white; */
}

#glow {
  position: absolute;
  display: flex;
  width: 12rem;
}

.circle {
  width: 100%;
  height: 30px;
  filter: blur(2rem);
  animation: pulse_3011 4s infinite;
  z-index: -1;
}

.circle:nth-of-type(1) {
  background: rgba(254, 83, 186, 0.636);
}

.circle:nth-of-type(2) {
  background: rgba(142, 81, 234, 0.704);
}

.btn:hover #container-stars {
  z-index: 1;
  background-color: #05051d;
}

.btn:hover {
  transform: scale(1.1);
}

.btn:active {
  border: double 4px #fe53bb;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: none;
}

.btn:active .circle {
  background: #fe53bb;
}

#stars {
  position: relative;
  background: transparent;
  width: 200rem;
  height: 200rem;
}

#stars::after {
  content: "";
  position: absolute;
  top: -10rem;
  left: -100rem;
  width: 100%;
  height: 100%;
  animation: animStarRotate 90s linear infinite;
}

#stars::after {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
}

#stars::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 170%;
  height: 500%;
  animation: animStar 60s linear infinite;
}

#stars::before {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
  opacity: 0.5;
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-135rem);
  }
}

@keyframes animStarRotate {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@keyframes gradient_301 {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulse_3011 {
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
