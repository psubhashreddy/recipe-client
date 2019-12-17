<template>
    <div>
        <b-table :items="recipes">
            <template v-slot:cell(name)="recipe">
                <router-link :to="`/api/recipe/${recipe.index}`">
                    {{ recipe.value }}
                </router-link>
            </template>
            <template v-slot:cell(ingredient)="row">
                <ul v-for="(id, name) in row.item" :key="id">
                    <li>{{ name }}</li>
                </ul>
            </template>
        </b-table>
    </div>
</template>
<script>
import RecipeDataService from "../service/RecipeDataService";

export default {
    name: "RecipeList",
    data() {
        return {
            recipes: [],
            message: null,
            RECIPE: "recipe"
        };
    },
    methods: {
        refreshRecipes() {
            RecipeDataService.retrieveAllRecipes(this.RECIPE).then(respone =>{
                this.recipes =  respone.data;
            });
        },
        deleteRecipeClicked(id) {
            RecipeDataService.deleteRecipe(id).then(response =>{
                this.message = response.data;
                this.refreshRecipes();
            });
        },
        updateRecipeClicked(recipe, id) {
            this.$router.push(`/recipes/${id}`);
        },
        addRecipeClicked() {
            this.$router.push(`/recipe/-1`);
        }
    },
    created() {
        this.refreshRecipes();
    }
};
</script>

<style scoped>
</style>