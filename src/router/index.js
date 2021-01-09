import Vue from "vue";
import VueRouter from "vue-router";

import ListArticle from "../views/ListArticle.vue";
import CreateArticle from "../views/CreateArticle.vue";
import EditArticle from "../views/EditArticle.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/article/index"
  },
  {
    path: "/article/index",
    name: "List-article",
    component: ListArticle
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/article/create",
    name: "create-article",
    component: CreateArticle
  },
  {
    path: "/article/:id/edit",
    name: "edit-article",
    component: EditArticle
  }
];

const router = new VueRouter({
  routes
});

export default router;
