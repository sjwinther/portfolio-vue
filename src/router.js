import Router from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: require('./views/Home.vue').default
  },
  {
    path: '/:id',
    name: 'Project',
    component: require('./views/Project.vue').default
  }
];

export default new Router({
  routes
});
