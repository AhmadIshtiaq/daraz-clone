import { createStore } from "vuex";
import products from './products.js'
import cart from "./cart.js";
const store = createStore({
    state: {
        price: 20000
    },
    modules: {
        products,
        cart
    }
})
export default store