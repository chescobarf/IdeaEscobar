function subTotal(array) {
    let counter = 0
    array.map((e) => counter = counter + e.newPrice)
    return counter
}

export default subTotal