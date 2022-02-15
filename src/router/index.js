import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TopicsView from "../views/TopicsView.vue";
import ZeroState from "../components/ZeroState.vue";
import Topic from "../components/Topic.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: '/topics',
      name: 'topics',
      component: TopicsView,
      children: [
        {
          path: '',
          name: 'ZeroState',
          component: ZeroState,
          props: {title: "topic"}
        },
        {
          path: '/topic/:id',
          name: 'Topic',
          component: Topic,
          /*children: [
            {
              path: '',
              name: 'TopicShow',
              component: TopicShow
            },
            {
              path: 'edit',
              name: 'TopicEdit',
              component: TopicEdit
            }
          ]*/
        }
      ]
    },
  ],
});

export default router;
