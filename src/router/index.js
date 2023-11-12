import { createRouter, createWebHistory } from "vue-router";
import EventListView from "../views/EventListView.vue";
import EventsDetailsView from "../views/EventsDetailsView.vue";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventListView,
    },

    {
      path: "/events/:id",
      name: "event-details",
      props: true,
      component: EventsDetailsView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
