<script lang="ts" setup>
import {
  EnvelopeIcon,
  PhoneIcon,
  BuildingOffice2Icon,
} from "@heroicons/vue/24/outline";
import WelcomeGlitch from "../components/WelcomeGlitch.vue";
</script>

<template>
  <!-- Outer container ensures full screen and no scroll -->
  <div
    class="relative min-h-screen w-full overflow-hidden bg-black text-white flex flex-col font-sans"
  >
    <!-- Glitch heading at the top -->
    <div class="flex justify-center pt-8">
      <WelcomeGlitch />
    </div>

    <!-- Main grid area takes up the remaining vertical space -->
    <div
      class="grid grid-cols-12 gap-4 p-4 items-start justify-center h-[calc(100vh-8rem)]"
    >
      <!-- Left column: vertical text + Spotify -->
      <div class="col-span-4 flex items-center space-x-4">
        <!-- Vertical Text -->
        <p
          class="text-base md:text-lg font-semibold"
          style="
            writing-mode: vertical-rl;
            text-orientation: mixed;
            transform: rotate(180deg);
          "
        >
          What I'm listening to on repeat...
        </p>

        <div class="flex-1">
          <!-- Visible on small and medium screens -->
          <iframe
            class="block md:hidden rounded-xl shadow-lg border-[1px] border-pink-500/50"
            src="https://open.spotify.com/embed/track/6xHlnkbGTtQaPvFJVIweaD?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          <!-- Visible on large screens -->
          <iframe
            class="hidden md:block rounded-xl shadow-lg border-[1px] border-pink-500/50 transition hover:border-pink-500"
            src="https://open.spotify.com/embed/track/6xHlnkbGTtQaPvFJVIweaD?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameborder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <!-- Middle column: Profile info -->
      <div
        class="col-span-7 md:col-span-6 rounded-xl p-4 border border-white/20 shadow-lg transition hover:shadow-[0_0_8px_rgba(255,0,255,0.7)]"
      >
        <div class="flex flex-col space-y-3">
          <div class="flex items-center gap-4">
            <img
              src="../assets/me.jpg"
              alt="Profile"
              class="w-10 h-10 object-cover rounded-xl ring-1 ring-pink-500/50"
            />
            <p class="text-lg font-semibold">Cassidy Sisco-Martinez</p>
          </div>
          <p class="text-sm md:text-base leading-relaxed">
            Builder | UI/UX-Focused Developer | Bridging Design & Development |
            Figma to Functional UI
          </p>

          <div class="flex items-center gap-2 text-sm">
            <BuildingOffice2Icon class="w-5 h-5 text-pink-500" />
            <span>New Braunfels, Texas</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <PhoneIcon class="w-5 h-5 text-pink-500" />
            <span>830 220 0871</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <EnvelopeIcon class="w-5 h-5 text-pink-500" />
            <span>cassidysisco@gmail.com</span>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <svg
              class="h-5 w-5 text-pink-500"
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
      </div>

      <!-- Right column: logos -->
      <div
        class="col-span-1 md:col-span-2 row-span-5 border border-white/20 rounded-xl p-4 flex items-center justify-center shadow-lg transition hover:shadow-[0_0_8px_rgba(0,255,255,0.7)]"
      >
        <div class="grid grid-cols-1 gap-6 place-items-center">
          <div class="neon-icon">
            <img
              src="../assets/FDC.png"
              alt="Icon"
              class="w-12 h-12 object-contain"
            />
          </div>
          <div class="neon-icon">
            <img
              src="../assets/NATO.svg"
              alt="Icon"
              class="w-12 h-12 object-contain"
            />
          </div>
          <div class="neon-icon">
            <img
              src="../assets/BIO.svg"
              alt="Icon"
              class="w-12 h-12 object-contain"
            />
          </div>
          <div class="neon-icon">
            <img
              src="../assets/HY.png"
              alt="Icon"
              class="w-12 h-12 object-contain"
            />
          </div>
          <div class="neon-icon">
            <img
              src="../assets/EL.png"
              alt="Icon"
              class="w-12 h-12 object-contain"
            />
          </div>
          <div class="neon-icon">
            <img
              src="../assets/HERTZ.png"
              alt="Icon"
              class="w-12 h-12 object-contain"
            />
          </div>
          <div class="neon-icon">
            <img
              src="../assets/TH.png"
              alt="Icon"
              class="w-12 h-12 object-contain"
            />
          </div>
          <div class="neon-icon">
            <img
              src="../assets/MK.svg.png"
              alt="Icon"
              class="w-12 h-12 object-contain"
            />
          </div>
          <div class="neon-icon">
            <img
              src="../assets/WH.svg.png"
              alt="Icon"
              class="w-12 h-12 object-contain"
            />
          </div>
        </div>
      </div>

      <!-- Summary / Bio section -->
      <div
        class="md:col-span-10 border border-white/20 rounded-xl p-4 shadow-lg transition hover:shadow-[0_0_8px_rgba(148,0,211,0.7)]"
      >
        <p class="text-sm md:text-base">
          Builder who expertly bridges design and development, praised for
          unmatched attention to design fidelity and rapid mastery of new
          frameworks. Known for adapting swiftly to shifting project demands and
          collaborating seamlessly with designers, product teams, and engineers.
          Consistently exceeds expectations by delivering pixel-perfect,
          user-focused solutions under tight deadlines.
        </p>
      </div>

      <!-- Skills section -->
      <div
        class="md:col-span-10 border border-white/20 rounded-xl p-4 flex items-center shadow-lg transition hover:shadow-[0_0_8px_rgba(57,255,20,0.7)]"
      >
        <div class="flex flex-wrap gap-2 text-sm">
          <span class="border border-white/20 px-3 py-1 rounded-full">
            Vue
          </span>
          <span class="border border-white/20 px-3 py-1 rounded-full">
            Vite
          </span>
          <span class="border border-white/20 px-3 py-1 rounded-full">
            TypeScript
          </span>
          <span class="border border-white/20 px-3 py-1 rounded-full">
            Tailwind CSS
          </span>
          <span class="border border-white/20 px-3 py-1 rounded-full">
            HTML5
          </span>
          <span class="border border-white/20 px-3 py-1 rounded-full">
            CSS3
          </span>
        </div>
      </div>

      <!-- Experience section -->
      <div
        class="col-span-11 md:col-span-5 border border-white/20 rounded-xl p-4 shadow-lg transition hover:shadow-[0_0_8px_rgba(255,111,0,0.7)]"
      >
        <div class="flex flex-col space-y-2 text-sm md:text-base">
          <div class="flex w-full justify-between">
            <p class="font-semibold">Sr. Design Engineer</p>
            <p>@ Launch by NTT DATA</p>
            <p>06/21 to 01/25</p>
          </div>
          <ul class="list-disc ml-4 space-y-1">
            <li>
              Bridged design and development by translating Figma designs &
              prototypes into pixel-perfect, accessible front-end solutions
              using Angular, Vue, and React.
            </li>
            <li>
              Rapidly adopted new frameworks, demonstrating agility under tight
              deadlines and complex project scopes.
            </li>
            <li>
              Optimized performance through structured code reviews, WCAG
              compliance, and accessibility-first design principles.
            </li>
            <li>
              Improved team efficiency by integrating GitHub Copilot, agile
              methodologies, and collaborative workflows, resulting in faster
              releases and maintainable codebases.
            </li>
            <li>
              Collaborated closely with designers, clients, and QA, ensuring
              design fidelity, user-centric experiences, and minimal
              rework—consistently exceeding expectations under pressure.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Example “neon-icon” utility to give each icon block a faint glow */
.neon-icon {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  transition: box-shadow 0.3s;
}
.neon-icon:hover {
  box-shadow: 0 0 8px 2px rgba(0, 255, 255, 0.7);
}
</style>
