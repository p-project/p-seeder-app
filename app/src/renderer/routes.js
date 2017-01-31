export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/seedList',
    name: 'seed-list',
    component: require('components/SeedListView')
  },
  {
    path: '/newSeed',
    name: 'new-seed',
    component: require('components/NewSeedView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
