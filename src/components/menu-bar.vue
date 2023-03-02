<template>
  <div class="container max-w-4xl my-6 text-center overflow-x-auto">
    <div
      class="container w-fit text-center text-md font-bold px-6 py-4 backdrop-blur-xl text-slate-700 bg-white/100 shadow-md rounded-md">
      <p>
        Made by
        <a
          class="text-[#148854]"
          href="https://github.com/fnogcps"
          target="_blank"
          >Felipe Nogueira</a
        >
      </p>
    </div>
    <ul class="menu menu-horizontal bg-base-100 p-2 mt-4 shadow-lg rounded-lg">
      <li>
        <router-link to="/dashboard">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </button>
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="/product">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          Novo produto
        </router-link>
      </li>
      <li>
        <button @click.prevent="logout()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>
          Logout
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    data() {
      return {};
    },
    methods: {
      logout() {
        localStorage.clear();
        window.location.replace("../");
      }
    }
  };
</script>
