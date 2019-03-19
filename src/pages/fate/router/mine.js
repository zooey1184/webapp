export default [
  {
    path: '/info',
    name: 'info',
    component: () => import('../views/mine/info.vue'),
    meta: {
      title: '个人信息'
    }
  },
]