<template>
  <nav-bar></nav-bar>
  <!-- <h1>product detail</h1> -->
  <!-- <p>{{ prod.name }}</p> -->
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-12">
        <div class="card">
          <img
            class="img-fluid prod-img"
            :src="require(`../assets/images/${product.img}`)"
          />
        </div>
      </div>
      <div class="col-lg-6 col-12 border">
        <div class="card-detail mt-5">
          <h5>{{ product.name }}</h5>
          <h5 class="text-info">Rs. {{ product.price }}</h5>
          <svg
            v-for="prod in product.rating"
            :key="prod"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            :class="prod"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
  <!-- <h5>Rs: {{ product.price }}</h5> -->
</template>
<script setup>
import { ref, defineProps } from "vue";
const props = defineProps(["id"]);
let product = ref(JSON.parse(props.id));
</script>

<style>
/* .prod-img {
  width: ;
} */
.bi-star-fill {
  margin: 5px;
  color: #faca51;
}
</style>