<template>
  <div class="container-fluid">
    <nav-bar>
      <!-- search -->
      <div class="search-bar">
        <form class="d-flex">
          <input
            class="form-control"
            type="text"
            placeholder="search your favorite products here"
            v-model="searchQuery"
          />
        </form>
      </div>
      <!--  -->
    </nav-bar>
    <!-- search -->
    <!--  -->
    <img class="banner-img" :src="banner" alt="" />

    <div class="container">
      <div class="row prod-row">
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 mt-5" v-for="prod in searchedProducts" :key="prod.id">
          <div class="card">
            <img
              class="prod-img"
              :src="require(`../assets/images/${prod.img}`)"
            />
            <router-link
              class="rout-link"
              :to="{
                name: 'prodDetail',
                params: {
                  id: JSON.stringify(prod),
                },
              }"
            >
              <h5 class="prod-name px-3 py-2">{{ prod.name.slice(0, 30) }}......</h5>
              <h4 class="prod-name px-3">Rs. {{ prod.price }}</h4>
              <!-- <svg
                v-for="prod in prod.rating"
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
              </svg> -->
            </router-link>
            <button class="add-cart-btn mt-auto py-2" @click="addToCart(prod)">
              Add to Cart
            </button>
            <!-- </router-link> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import banner from "../assets/images/banner.jpg";
import { useStore } from "vuex";
import { ref, computed } from "vue";
const store = useStore();
const products = store.getters.getProducts;
// console.log(products);
const searchQuery = ref("");
const searchedProducts = computed(() => {
  return products.filter((product) => {
    return (
      product.name.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1
    );
  });
});
// console.log(searchedProducts);
// SearchedProducts computed property which filters all the items from the products array
//that match the searchQuery text and returns only the matched items to the searchedProducts array.
//It’s important to convert both product title and searchQuery text to lowercase before checking
//the match using indexOf method.
//The indexOf() method returns the position of the first occurrence of a value in a string.
//The indexOf() method returns -1 if the value is not found.
//The indexOf() method is case sensitive.
// ---

function addToCart(prod) {
  // console.log(prod);
  store.dispatch("addToCart", prod);
}
</script>

<style scoped>
.search-bar {
  width: 100%;
}
.banner-img {
  width: 100%;
  height: 444px;
}

/* h4 {
  text-decoration: none;
} */
a {
  text-decoration: none;
  font-size: 14px;
  color: #000;
}

.prod-row {
  /* transform: translateY(-35%); */
  transform: translateY(-25vw);
}
.card {
  height: 20rem;
  transition: transform 0.2s;
}
.card:hover {
  box-shadow: 0px 0px 5px 10px rgb(221 224 211 / 50%);
  transform: scale(1.1);
}
.prod-img {
  height: 12rem;
}
.prod-name{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 16px;
}
.add-cart-btn{
  border: 1px solid #f57224;
  background: #f57224;
  color: #fff;
  font-size: 16px;
}
.add-cart-btn:hover{
  background: #d0611e;
  color: #092fdb;
  font-weight: 600;
}
</style>