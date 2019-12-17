import axios from "axios";

const RECIPE = "recipe";
const RECIPE_BASE_URL = "http://localhost:8090";
const RECIPE_API_URL = `${RECIPE_BASE_URL}/api/${RECIPE}`;

class RecipeDataService {
    retrieveAllRecipes() {
        return axios.get(`${RECIPE_API_URL}/list`);
    }
    deleteRecipe(id) {
        return axios.delete(`${RECIPE_API_URL}/delte/${id}`);
    }
    updateRecipe() {
        return axios.put(`${RECIPE_API_URL}/update`);
    }
    addRecipe() {
        return axios.post(`${RECIPE_API_URL}/save`);
    }
    getRecipe(id) {
        return axios.get(`${RECIPE_API_URL}/${id}`)
    }
}

export default new RecipeDataService();