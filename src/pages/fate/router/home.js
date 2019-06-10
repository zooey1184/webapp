export default [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/detail/index.vue'),
    meta: {
      title: '详情'
    }
  }
]
