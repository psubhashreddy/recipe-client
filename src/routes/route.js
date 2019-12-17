import Vue from "vue";
import VueRouter from "vue-router";

import ListRecipes from '@/components/ListRecipes'

Vue.use(VueRouter);

const routes = [
    {
      path: '/api/recipe/list',
      name: 'All',
      component: ListRecipes
    },
    {
      path: '/:id',
      name: 'Recipe',
      component: ListRecipes
    },
    {
      path: '/save',
      name: 'Recipe',
      component: ListRecipes
    },
    {
      path: '/update',
      name: 'Recipe',
      component: ListRecipes
    },
    {
      path: '/delete/:id',
      name: 'Recipe',
      component: ListRecipes
    }
  ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

export default router;
