import Router from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: require('./views/Home.vue').default,
    props: true
  },
  {
    path: '/project/:uid',
    name: 'Project',
    component: require('./views/Project.vue').default,
    props: true
  },
  {
    path: '/*',
    name: 'MissingPage',
    component: require('./views/404.vue').default
  }
];

export default new Router({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
