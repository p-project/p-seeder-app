export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/seederManager',
    name: 'seeder-manager',
    component: require('components/SeederManagerView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
