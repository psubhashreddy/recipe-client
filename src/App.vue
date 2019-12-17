<template>
  <div id="app">
    <b-container>
      <Header />
      <AddRecipe />
      <ListRecipes />
      <router-view/>
    </b-container>
    
  </div>
</template>

<script>
  import Header from '@/components/layout/Header';
    import AddRecipe from '@/components/AddRecipe.vue'
    import ListRecipes from "@/components/ListRecipes.vue";
  
  export default {
    components: {
      Header,
      AddRecipe,
      ListRecipes
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
  }

</style>
