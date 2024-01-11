import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import RoadmapView from '../views/RoadmapView.vue';
import DetailView from '../views/DetailView.vue';
import EditView from '../views/EditView.vue';
import NewView from '../views/NewView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView,
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditView,
    },
    {
      path: '/new',
      name: 'new',
      component: NewView,
    },
    {
      path: '/roadmap',
      name: 'roadmap',
      component: RoadmapView,
    },
  ],
});

export default router;
