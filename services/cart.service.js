class Cart {
    products = [];

    addProduct(product) {
        const savedProductIndex = this.products.findIndex(product_stored => product_stored.id == product.id);
        if (savedProduct >= 0) {
            this.products[savedProductIndex] = { ...this.products[savedProductIndex], cant: this.products[savedProductIndex].cant + product.cant }
        }
    }

    getTotal() {
        return this.products.reduce((sum, product) => sum + product.price * product.cant, 0).toFixed(2);
    }

    getTotalWithDisscounts(disscount) {
        return (this.products.reduce((sum, product) => sum + product.price * product.cant, 0) - disscount).toFixed(2);
    }
}

const cart = new Cart();
export default cart;