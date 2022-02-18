import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TopicsView from "../views/TopicsView.vue";
import TopicsViewIndex from "../views/TopicsViewIndex.vue";
import Topic from "../components/Topic.vue";
import TopicShow from "../components/TopicsShow.vue";
import TopicEdit from "../components/TopicEdit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: '/topics',
      name: 'topics',
      component: TopicsView,
      children: [
        {
          path: '',
          name: 'index',
          component: TopicsViewIndex,
          props: {title: "topic"}
        },
        {
          path: '/topic/:id',
          name: 'Topic',
          component: Topic,
          children: [
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
          ]
        }
      ]
    },
  ],
});

export default router;
