
const user = { cart: [], orders: [] }

const item = { name: "laptop", price: 200 }

function addToCart(user, item) {
    const cart = user.cart.concat(item)
    return { ...user, cart }
}

function buyItems(user) {
    return { ...user, orders: [...user.cart] }
}

function emptyCart(user) {
    return { ...user, cart: [] }
}

function placeOrder() {

    return emptyCart(buyItems(addToCart(user, item)))
}