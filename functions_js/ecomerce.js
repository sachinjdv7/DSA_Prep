
const user = { cart: [], orders: [] }

const item = { name: "laptop", price: 200 }

function addToCart(user, item) {
    user.cart.push(item)
}

function buyItems(user) {
    user.orders = [...user.cart]
}

function emptyCart(user) {
    user.cart.length = 0
}

function placeOrder() {
    addToCart(user, item)
    buyItems(user, item)
    emptyCart(user)
}