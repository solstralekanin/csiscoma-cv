<template>
    <div class="relative w-full h-20 flex items-center justify-center overflow-hidden">
      <h1 class="glitch" :class="{ 'glitch-active': isGlitching }">
        {{ message }}
        <span aria-hidden="true">{{ message }}</span>
        <span aria-hidden="true">{{ message }}</span>
        <span aria-hidden="true">{{ message }}</span>
        <span aria-hidden="true">{{ message }}</span>
        <span aria-hidden="true">{{ message }}</span>
      </h1>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const message = ref('Welcome');
  const isGlitching = ref(false);
  
  let interval: number;
  
  onMounted(() => {
    interval = setInterval(() => {
      isGlitching.value = true;
      message.value = message.value === 'Hello Friend' ? 'Hej Vän' : 'Hello Friend';
      
      setTimeout(() => {
        isGlitching.value = false;
      }, 400); // Length of glitch effect
    }, 3000); // Switch every 3 seconds
  });
  
  onUnmounted(() => {
    clearInterval(interval);
  });
  </script>
  
  <style scoped>
  /* Base glitch effect */
  .glitch {
    font-size: 4rem;
    font-weight: bold;
    position: relative;
    z-index: 1;
    text-transform: uppercase;
    background-image: linear-gradient(
      90deg,
      #ff00ff, /* Hot Pink */
      #00ffff, /* Electric Blue */
      #9400d3, /* Deep Purple */
      #39ff14, /* Neon Green */
      #ff6f00 /* Electric Orange */
    );
    background-size: 300% 300%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: gradient-shift 3s infinite ease-in-out, flicker 2s infinite ease-in-out;
  }
  
  .glitch span {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    mix-blend-mode: screen;
  }
  
  /* Hot Pink Layer */
  .glitch span:nth-child(1) {
    color: #ff00ff;
    z-index: -1;
    transform: translate(-3px, -3px);
  }
  
  /* Electric Blue Layer */
  .glitch span:nth-child(2) {
    color: #00ffff;
    z-index: -1;
    transform: translate(3px, 3px);
  }
  
  /* Deep Purple Layer */
  .glitch span:nth-child(3) {
    color: #9400d3;
    z-index: -1;
    transform: translate(-3px, 3px);
  }
  
  /* Neon Green Layer */
  .glitch span:nth-child(4) {
    color: #39ff14;
    z-index: -1;
    transform: translate(2px, -2px);
  }
  
  /* Electric Orange Layer */
  .glitch span:nth-child(5) {
    color: #ff6f00;
    z-index: -1;
    transform: translate(-2px, -2px);
  }
  
  /* Activate the glitch effect */
  .glitch-active span {
    animation: cyberpunk-glitch 0.4s ease-in-out;
  }
  
  /* Gradient animation */
  @keyframes gradient-shift {
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
  
  /* Glitch animation */
  @keyframes cyberpunk-glitch {
    0% {
      opacity: 0.9;
      transform: translate(0, 0);
      clip-path: inset(0 0 0 0);
    }
    20% {
      opacity: 0.7;
      transform: translate(-2px, -2px);
      clip-path: inset(10% 0 20% 0);
    }
    40% {
      opacity: 0.8;
      transform: translate(2px, 2px);
      clip-path: inset(30% 0 40% 0);
    }
    60% {
      opacity: 0.6;
      transform: translate(-2px, 2px);
      clip-path: inset(20% 0 10% 0);
    }
    80% {
      opacity: 0.9;
      transform: translate(2px, -2px);
      clip-path: inset(5% 0 15% 0);
      filter: hue-rotate(90deg);
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
      clip-path: inset(0 0 0 0);
    }
  }
  
  /* Flicker Effect */
  @keyframes flicker {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.85;
    }
    75% {
      opacity: 0.95;
    }
  }
  </style>
  