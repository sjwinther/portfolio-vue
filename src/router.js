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
  }
];

export default new Router({
  routes
});
