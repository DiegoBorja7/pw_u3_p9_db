import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HolaMundo from "../views/HolaMundo.vue";

const routes = [
  //higer order function
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/hola-mundo",
    name: "hola-mundo",
    component: HolaMundo,
  },
  {
    path: "/pregunta",
    name: "pregunta",
    component: () =>
      import(/* webpackChunkName: "pregunta" */ "../views/PreguntaView.vue"),
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component: () =>
      import(/* webpackChunkName: "pokemon" */ "../views/PokemonView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
