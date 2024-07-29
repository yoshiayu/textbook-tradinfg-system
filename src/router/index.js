import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import MemberList from '@/views/MemberList.vue';
import MemberCreate from '@/views/MemberCreate.vue';
import MemberEdit from '@/views/MemberEdit.vue';
import TextbookList from '@/views/TextbookList.vue';
import TextbookCreate from '@/views/TextbookCreate.vue';
import TextbookEdit from '@/views/TextbookEdit.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/members',
    name: 'MemberList',
    component: MemberList
  },
  {
    path: '/members/new',
    name: 'MemberCreate',
    component: MemberCreate
  },
  {
    path: '/members/:id/edit',
    name: 'MemberEdit',
    component: MemberEdit
  },
  {
    path: '/textbooks',
    name: 'TextbookList',
    component: TextbookList
  },
  {
    path: '/textbooks/new',
    name: 'TextbookCreate',
    component: TextbookCreate
  },
  {
    path: '/textbooks/:id/edit',
    name: 'TextbookEdit',
    component: TextbookEdit
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
