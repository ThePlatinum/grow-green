export class Plants {

    topPick = [];
    topCategories = [];

    getTopPicks() {
        return new Promise(resolve => 
            setTimeout(() => {
                this.topPick = [{ "id": 1, "name": "Rocket", "picture": "https://www.rhs.org.uk/getmedia/ada7442e-1241-4dfb-a912-67fe5861b9cd/Salad-rocket940x627.jpg?width=940&height=627&ext=.jpg" }, { "id": 2, "name": "Rocket", "picture": "https://www.rhs.org.uk/getmedia/ada7442e-1241-4dfb-a912-67fe5861b9cd/Salad-rocket940x627.jpg?width=940&height=627&ext=.jpg" }, { "id": 3, "name": "Rocket", "picture": "https://www.rhs.org.uk/getmedia/ada7442e-1241-4dfb-a912-67fe5861b9cd/Salad-rocket940x627.jpg?width=940&height=627&ext=.jpg" }]
                resolve(this.topPick);
            }, 1000)
        )
    }

    getTopCategories() {
        return new Promise(resolve =>
            setTimeout(() => {
                this.topCategories = [{ "id": 1, "name": "Rocket", "picture": "https://www.rhs.org.uk/getmedia/ada7442e-1241-4dfb-a912-67fe5861b9cd/Salad-rocket940x627.jpg?width=940&height=627&ext=.jpg" }, { "id": 2, "name": "Rocket", "picture": "https://www.rhs.org.uk/getmedia/ada7442e-1241-4dfb-a912-67fe5861b9cd/Salad-rocket940x627.jpg?width=940&height=627&ext=.jpg" }, { "id": 3, "name": "Rocket", "picture": "https://www.rhs.org.uk/getmedia/ada7442e-1241-4dfb-a912-67fe5861b9cd/Salad-rocket940x627.jpg?width=940&height=627&ext=.jpg" }]
                resolve(this.topCategories);
            }, 1000)
        )
    }

}
