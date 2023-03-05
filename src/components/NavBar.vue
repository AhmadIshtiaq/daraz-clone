<template>
  <nav class="navbar navbar-expand-sm bg-light pb-5">
    <div class="container-fluid justify-content-center">
      <ul class="navbar-nav align-items-center custom-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" href="#"
            ><img class="home-img img-fluid" :src="daraz" alt="img"
          /></router-link>
        </li>
        <slot></slot>
        <!-- <form class="d-flex justify-content-center">
          <input class="form-control me-2" type="text" placeholder="Search" />
          <button class="btn btn-primary" type="button">Search</button>
        </form> -->
        <li class="nav-item">
          <router-link to="/cart" class="nav-link position-relative" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-cart"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
            <span
              class="
                position-absolute
                top-1
                start-100
                translate-middle
                badge
                rounded-pill
                bg-danger
              "
            >
              {{ getQnty }}
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
import daraz from "../assets/images/daraz-logo.png";
import { computed } from "vue";
import { useStore } from "vuex";
// defineProps({
//   searchQuery: String,

// })
const store = useStore();
const { getQnty } = Object.fromEntries(
  Object.keys(store.getters).map((getter) => [
    getter,
    computed(() => store.getters[getter]),
  ])
);
</script>

<style scoped>
.home-img {
  height: 2rem;
}
.custom-nav {
  width: 50%;
  justify-content: center;
}
</style>