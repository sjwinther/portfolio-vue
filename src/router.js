import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: require('./views/Home.vue').default
  },
  {
    path: '/project/',
    name: 'Project',
    component: require('./views/Project.vue').default
  }
];

export default new VueRouter({
  routes
});
