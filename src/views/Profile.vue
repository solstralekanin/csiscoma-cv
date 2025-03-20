<template>
  <div class="grid grid-cols-12 gap-4 p-4">
    <!-- Profile Photo -->
    <div
      class="col-span-12 md:col-span-4 row-span-2 bg-gray-800 rounded-xl flex items-center justify-center"
    >
      <!-- Placeholder Image -->
      <img
        src="../placeholder.jpg"
        alt="Profile"
        class="w-48 h-48 object-cover rounded-full"
      />
    </div>

    <!-- Contact Info -->
    <div class="col-span-12 md:col-span-4 bg-gray-700 rounded-xl p-4">
      <h2 class="text-xl font-semibold">Contact Info</h2>
      <p>Email: example@gmail.com</p>
      <p>Location: City, State</p>
      <p>LinkedIn: /example</p>
    </div>

    <!-- Skills (as badges) -->
    <div class="col-span-12 md:col-span-4 bg-gray-700 rounded-xl p-4">
      <h2 class="text-xl font-semibold">Skills</h2>
      <div class="flex flex-wrap gap-2 mt-2">
        <span class="bg-blue-500 text-white text-sm px-3 py-1 rounded-full"
          >Vue.js</span
        >
        <span class="bg-green-500 text-white text-sm px-3 py-1 rounded-full"
          >TypeScript</span
        >
        <span class="bg-purple-500 text-white text-sm px-3 py-1 rounded-full"
          >Tailwind</span
        >
        <!-- Add more badges as needed -->
      </div>
    </div>

    <!-- Client Projects (default icons) -->
    <div class="col-span-12 md:col-span-6 bg-gray-800 rounded-xl p-4">
      <h2 class="text-xl font-semibold">Client Projects</h2>
      <div class="grid grid-cols-4 gap-4 mt-2">
        <div
          class="bg-gray-600 w-16 h-16 flex items-center justify-center rounded-lg"
        >
          Icon
        </div>
        <div
          class="bg-gray-600 w-16 h-16 flex items-center justify-center rounded-lg"
        >
          Icon
        </div>
        <div
          class="bg-gray-600 w-16 h-16 flex items-center justify-center rounded-lg"
        >
          Icon
        </div>
        <div
          class="bg-gray-600 w-16 h-16 flex items-center justify-center rounded-lg"
        >
          Icon
        </div>
      </div>
    </div>

    <!-- NTT Data Experience -->
    <div class="col-span-12 md:col-span-3 bg-gray-700 rounded-xl p-4">
      <h2 class="text-xl font-semibold">NTT Data</h2>
      <p>Senior Design Engineer</p>
      <p>June 2021 – Jan 2025</p>
    </div>

    <!-- TaskUs Experience -->
    <div class="col-span-12 md:col-span-3 bg-gray-700 rounded-xl p-4">
      <h2 class="text-xl font-semibold">TaskUs</h2>
      <p>Social Media Data Scientist</p>
      <p>Oct 2018 – June 2021</p>
    </div>

    <!-- Fun Facts -->
    <div class="col-span-12 md:col-span-6 bg-gray-800 rounded-xl p-4">
      <h2 class="text-xl font-semibold">Fun Facts</h2>
      <ul class="list-disc list-inside">
        <li>Learning Swedish on Duolingo</li>
        <li>Rupert is 20 years old!</li>
        <li>Love skincare routines</li>
      </ul>
    </div>

    <!-- Embedded Video/Playlist -->
    <div class="col-span-12 md:col-span-6 bg-gray-700 rounded-xl p-4">
      <h2 class="text-xl font-semibold">My Playlist</h2>
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/track/07mdQUH1Cy5j4mTpyG6IOe?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>
