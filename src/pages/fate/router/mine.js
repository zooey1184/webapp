export default [
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/mine/info.vue'),
    meta: {
      title: '个人信息'
    }
  },
  {
    path: '/changeInfo',
    name: 'changeInfo',
    component: () => import('../views/mine/changeInfo.vue'),
    meta: {
      title: '个人信息'
    }
  },
  {
    path: '/mine/myReckon',
    name: 'myReckon',
    component: () => import('../views/mine/myReckon.vue'),
    meta: {
      title: '个人信息'
    }
  }
]
