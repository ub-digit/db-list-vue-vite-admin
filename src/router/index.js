import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TopicsView from "../views/TopicsView.vue";
import TopicsViewIndex from "../views/TopicsViewIndex.vue";
import Topic from "../views/Topic.vue";
import TopicShow from "../views/TopicsShow.vue";
import TopicEdit from "../views/TopicEdit.vue";
import TopicNew from "../views/TopicNew.vue";

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
          path: '/',
          name: 'Topic',
          component: Topic,
          children: [
            { 
              path: 'new',
              name: 'TopicNew',
              component: TopicNew
            },
            {
              path: 'show/:id',
              name: 'TopicShow',
              component: TopicShow
            },
            {
              path: 'edit/:id',
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
