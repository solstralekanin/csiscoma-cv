<script lang="ts" setup>
import {
  EnvelopeIcon,
  PhoneIcon,
  BuildingOffice2Icon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <div
    class="relative border space-y-2 h-auto w-full rounded-2xl p-4 shadow-lg transition-colors duration-300 bg-white border-gray-200"
  >
    <!-- Static Heading -->
    <div class="">Hello Friend!</div>

    <h3 class="">Cassidy Sisco-Martinez</h3>
    <p class="">
      Builder | Sr. Front-End Engineer | UI/UX-Focused Developer | Bridging
      Design & Development | Figma to Functional UI
    </p>

    <div class="flex items-center gap-2">
      <BuildingOffice2Icon class="w-5 h-5" />
      <span class="">New Braunfels, Texas</span>
    </div>
    <div class="flex items-center gap-2">
      <PhoneIcon class="w-5 h-5" />
      <span class="">830 220 0871</span>
    </div>
    <div class="flex items-center gap-2">
      <EnvelopeIcon class="w-5 h-5" />
      <span class="">cassidysisco@gmail.com</span>
    </div>
    <div class="flex items-center gap-2">
      <svg
        class="h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fill-rule="evenodd"
          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
          clip-rule="evenodd"
        />
      </svg>
      <a
        href="https://www.linkedin.com/in/csiscomartinez/"
        target="_blank"
        class="hover:underline"
      >
        csiscomartinez
      </a>
    </div>
  </div>
</template>
