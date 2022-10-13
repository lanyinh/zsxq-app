import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "首页",
      component: () => import("@/components/home/home")
    }
  ]
});
