<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar bg-transparent flex justify-center">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">Debt management service</a>
    </div>
    <div class="flex-1 navbar-center hidden px-2 mx-2 lg:flex bg-white rounded-full">
      <div class="items-stretch hidden lg:flex">
        <RouterLink class="btn btn-ghost btn-sm rounded-btn" to="/">Home</RouterLink>
        <RouterLink class="btn btn-ghost btn-sm rounded-btn" to="/dashboard">Dashboard</RouterLink>|
        <RouterLink class="btn btn-ghost btn-sm rounded-btn" to="/debt">Debt Management</RouterLink>|
        <RouterLink class="btn btn-ghost btn-sm rounded-btn" to="/learning">Learning</RouterLink>
      </div>
    </div>
    <div class="flex-none gap-2">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
          </div>
        </label>
        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>

    <div class="flex justify-end ">
      <button class="btn bg-white text-black rounded-full">current data:{}</button>
    </div>
  </header>

  <RouterView class="bg-cover bg-center" />
</template>

<!-- 
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
