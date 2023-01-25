<template>
  <!-- <h1>carts</h1> -->
  <div class="mx-auto cart-nav">
    <nav-bar></nav-bar>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-10">
        <div
          class="products"
          v-for="(prod, index) in getCartData.products"
          :key="prod.id"
        >
          <div class="row">
            <div class="col-5">
              <img
                class="img-fluid prod-img"
                :src="require(`../assets/images/${prod.img}`)"
              />
            </div>
            <div class="col-5">
              <h5>{{ prod.name }}</h5>
              <h3>Rs. {{ prod.price }}</h3>
              <!-- <div><i :class="prod.rating"></i>rating</div> -->
              <button class="btn btn-secondary" @click="remove(index)">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2">
        <h4>Total Price ({{ getTotal }})</h4>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
// const searchQuery = ref("");
// console.log(count);

// function icrease() {
//   count.value++;
// }
// function decrease() {
//   count.value--;
// }
// console.log(store.getters.getCartData);
const { getCartData, getTotal } = Object.fromEntries(
  Object.keys(store.getters).map((getter) => [
    getter,
    computed(() => store.getters[getter]),
  ])
);

function remove(index) {
  store.dispatch("delItem", index);
}
</script>

<style scoped>
.prod-img {
  height: 330px;
  width: 330px;
}
/* .cart-nav {
  width: 100%;
} */
</style>