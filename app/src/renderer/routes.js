export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView'),
    meta: { title: 'components.landing_page.title' }
  },
  {
    path: '/seedList',
    name: 'seed-list',
    component: require('components/SeedListView'),
    meta: { title: 'components.seed_list.title' }
  },
  {
    path: '/newSeed',
    name: 'new-seed',
    component: require('components/NewSeedView'),
    meta: { title: 'components.new_seed.title' }
  },
  {
    path: '/findSeed',
    name: 'find-seed',
    component: require('components/FindSeedView'),
    meta: { title: 'components.find_seed.title' }
  },
  {
    path: '*',
    redirect: '/'
  }
]
