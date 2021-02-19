import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// 定义一个路由数组
const routes: Array<RouteRecordRaw> = [
  // 注意：这里是一级路由
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/home.vue'),
    // component: home,
    // 注意：这里是二级路由
    children: [
      {
        path: '',
        redirect: { name: 'showposts' }
      },
      {
        path: '/showposts',
        name: 'showposts',
        component: () => import(/* webpackChunkName: "showposts" */ '@/components/showposts.vue'),
      },
      {
        path: '/post/:postId',
        name: 'post',
        component: () => import(/* webpackChunkName: "post" */ '@/components/post.vue'),
      },
      {
          path: '/add',
          name: 'add',
          component: () => import(/* webpackChunkName: "add" */ '@/components/add.vue'),
      },
      {
        path: '/edit/:postId',
        name: 'edit',
        component: () => import(/* webpackChunkName: "edit" */ '@/components/edit.vue'),
      },
      {
          path: '/about',
          name: 'about',
          component: () => import(/* webpackChunkName: "about" */ '@/components/about.vue'),
          // component: about
      },
      {
        path: '/tags',
        name: 'tags',
        component: () => import(/* webpackChunkName: "tags" */ '@/components/tags.vue'),
      },
      {
          path: '/categories',
          name: 'categories',
          component: () => import(/* webpackChunkName: "categories" */ '@/components/categories.vue'),
      },
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 路由处于激活状态时给li添加active属性
  linkExactActiveClass: 'active'
});

export default router;

