function subTotal(array) {
    let counter = 0
    array.map((e) => counter = counter + e.newPrice * e.quantity)
    return counter
}

export default subTotal