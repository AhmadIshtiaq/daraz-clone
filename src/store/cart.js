
const cart = {
    state: {
        cartData: {
            products: [],
            totalPrice: 0,
            quantity: 0
        }
    },
    getters: {
        getCartData(state) {
            return state.cartData
        },
        getQnty(state) {
            let quantity = 0;
            state.cartData.products.forEach(prod => (
                quantity += prod.quantity
            ))
            return quantity;
        },
        getTotal(state) {
            let price = 0;
            state.cartData.products.forEach(prod => (
                price += prod.totalPrice
            ))
            return price;
            // console.log(state.products);
            // return state.cartData.totalPrice
        }
    },
    mutations: {
        addToCart(state, payload) {
            const product = state.cartData.products.find(pro => pro.id === payload.id);
            if (product) {
                return state;
            } else {
                payload.totalPrice = parseInt(payload.quantity) * payload.price;
                // console.log(payload);
                state.cartData = { ...state.cartData, products: [...state.cartData.products, payload], totalPrice: state.cartData.totalPrice + payload.price, quantity: state.cartData.quantity + 1 };
                // console.log(state.cartData)
            }
        },
        deleteItem(state, index) {
            state.cartData.products.splice(index, 1)
        }
    },
    actions: {
        addToCart({ commit }, payload) {
            commit('addToCart', payload)
        },
        delItem({ commit }, index) {
            commit('deleteItem', index)
        }
    }
}
export default cart