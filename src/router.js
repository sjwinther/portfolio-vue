import Router from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: require('./views/Home.vue').default
  },
  {
    path: '/projects/',
    name: 'Projects',
    component: require('./views/Projects.vue').default
  },
  {
    path: '/contact/',
    name: 'Contact',
    component: require('./views/Contact.vue').default
  }
];

export default new Router({
  routes
});
