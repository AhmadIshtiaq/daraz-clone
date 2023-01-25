const products = {
    state: {

        products: [
            { id: 1, name: 'IWO DT NO.I7 Smart Watch with NFC 1.9inch Square Screen Bluetooth Call IP68 Waterproof Long Standby Watches Heart Rate Monitor', price: 4200, img: 'smart watch.jpg', quantity: 1, rating: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star-fill'] },
            { id: 2, name: 'D-power Digital Power Bank', price: 1199, img: 'D-power Digital Power Bank.jpg', quantity: 1, rating: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star-fill'] },
            { id: 3, name: 'Free Standing Paper Towel Holder Creative Tissue Holder For Bathroom And Kitchen', price: 293, img: 'Free Standing Paper Towel Holder Creative Tissue Holder For Bathroom And Kitchen.jpg', quantity: 1, rating: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star-fill'] },
            { id: 4, name: 'Mi Redmi Power Bank 10000 mAh Power Bank - Model PB100LZM Fast Charging Global Version - Dual USB Port Battery Charger Bank - Black', price: 1399, img: 'd7e0f9da5d51d0d9098e455cb0dbc34f.jpg', quantity: 1, rating: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star-fill'] },
            { id: 5, name: 'handfree', price: 320, img: 'handfree.jpg', quantity: 1, rating: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star-fill'] },
            { id: 6, name: 'D-power Digital Power Bank', price: 1199, img: 'D-power Digital Power Bank.jpg', quantity: 1, rating: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star-fill'] },
            { id: 7, name: '12 pieces makeup matte Lipsticks', price: 293, img: 'lipstack.jpg', quantity: 1, rating: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star-fill'] },
            { id: 8, name: 'Bluetooth', price: 293, img: 'd7e0f9da5d51d0d9098e455cb0dbc34f.jpg', quantity: 1, rating: ['bi bi-star-fill', 'bi bi-star-fill', 'bi bi-star-fill'] },
        ]

    },
    getters: {
        getProducts(state) {
            return state.products;
        }
    }
}

export default products