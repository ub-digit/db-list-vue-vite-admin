import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TopicsView from "../views/TopicsView.vue";
import TopicsViewIndex from "../views/TopicsViewIndex.vue";
import Topic from "../views/Topic.vue";
import TopicShow from "../views/TopicsShow.vue";
import TopicEdit from "../views/TopicEdit.vue";
import TopicNew from "../views/TopicNew.vue";
import MediatypesView from "../views/MediatypesView.vue";
import MediatypesViewIndex from "../views/MediatypesViewIndex.vue";
import Mediatype from "../views/Mediatype.vue";
import MediatypeNew from "../views/MediatypeNew.vue";
import MediatypeShow from "../views/MediatypeShow.vue";
import MediatypeEdit from "../views/MediatypeEdit.vue"; 
import PublishersView from "../views/PublishersView.vue";
import PublishersViewIndex from "../views/PublishersViewIndex.vue"
import Publisher from "../views/Publisher.vue"
import PublisherNew from "../views/PublisherNew.vue"
import PublisherShow from "../views/PublisherShow.vue"
import PublisherEdit from "../views/PublisherEdit.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/publishers",
      name: "publishers",
      component: PublishersView,
      children: [
        {
          path: "",
          name: "publisherindex",
          component: PublishersViewIndex,
          props:  {title: "publisher"}
        },
        {
          path: '/',
          name: 'publisher',
          component: Publisher,
          children: [
            {
              path: "new",
              name: "PublisherNew",
              component: PublisherNew
            },
            {
              path: 'show/:id',
              name: 'PublisherShow',
              component: PublisherShow
            },
            {
              path: 'edit/:id',
              name: 'PublisherEdit',
              component: PublisherEdit
            }
          ]
        }
      ]
    },
    {
      path: "/mediatypes",
      name: "mediatypes",
      component: MediatypesView,
      children: [
        {
          path: '',
          name: "mediatypeindex",
          component: MediatypesViewIndex,
          props: {title: "mediatype"}
        },
        {
          path: "/",
          name: "mediatype",
          component: Mediatype,
          children: [
            { 
              path: 'new',
              name: 'MediatypeNew',
              component: MediatypeNew
            },
            {
              path: 'show/:id',
              name: 'MediatypeShow',
              component: MediatypeShow
            },
            {
              path: 'edit/:id',
              name: 'MediatypeEdit',
              component: MediatypeEdit
            }
          ]
        }
      ]
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
