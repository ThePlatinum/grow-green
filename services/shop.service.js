export class Shop {

    topSellers = [];

    getTopSellers() {
        return new Promise(resolve =>
            setTimeout(() => {
                this.topSellers = [
                    {
                        "discounted_price": 0,
                        "id": 1,
                        "name": "Wasabi Rocket",
                        "picture": "https://img.crocdn.co.uk/images/products2/pl/20/00/02/39/pl2000023947.jpg?width=940&height=940",
                        "price": 5.0
                    },
                    {
                        "discounted_price": 4.0,
                        "id": 2,
                        "name": "Wasabi Rocket",
                        "picture": "https://img.crocdn.co.uk/images/products2/pl/20/00/02/39/pl2000023947.jpg?width=940&height=940",
                        "price": 5.0
                    },
                    {
                        "discounted_price": 4.0,
                        "id": 3,
                        "name": "Wasabi Rocket",
                        "picture": "https://img.crocdn.co.uk/images/products2/pl/20/00/02/39/pl2000023947.jpg?width=940&height=940",
                        "price": 5.0
                    }
                ]
                resolve(this.topSellers);
            }, 1000)
        )
    }

}
