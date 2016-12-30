<template>
    <div class="row">
        <side-nav></side-nav>
        <div class="content">
            <h2>Here you can manage your seeding options.</h2>
        </div>

    </div>
</template>


<style scoped lang="scss">
    .row {
        display: flex;
        flex-direction: row;
    }
    .content {
        width: 60%;
        text-align: center;
    }
</style>

<script>
  import SideNav from './SeederManagerView/SideNavView'

  export default {
    components: {
      'side-nav': SideNav
    }
  }
</script>