import axios from 'axios';

export default class Search {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch(error) {
            console.log(error);
            alert('Something went wrong :(');
        }
    }

    calcTime() {
        // A very rough calculation that every 3 ingredients adds 15 minutes
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3, 10);
        this.time = periods * 15;
    }

    calcServings(){
        //api doesn't return servings so this is just an assumption
        this.servings = 4;
    }
}