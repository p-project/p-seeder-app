<template>
    <div class="row">
        <!--<side-nav></side-nav>-->
        <seed-list></seed-list>
    </div>
</template>


<style scoped lang="scss">
    .row {
        display: flex;
        flex-direction: column;
    }
</style>

<script>
  import SideNav from './SeederManagerView/SideNavView'
  import SeedList from './SeedListView'

  export default {
    components: {
      'side-nav': SideNav,
      'seed-list': SeedList
    }
  }
</script>