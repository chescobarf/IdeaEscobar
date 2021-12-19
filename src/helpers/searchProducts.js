import { products } from "../constants/products"

function searchProducts(idsProductsToSearch) {
    try {
        const res = idsProductsToSearch.map((element) => {
            const product = products.find(producto => {
                return producto.id == element
            })
            console.log(product.name)

        })
        return res
    } catch (error) {
        return error
    }
}

export default searchProducts;
