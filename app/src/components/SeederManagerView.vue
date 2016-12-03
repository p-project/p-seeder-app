<template>
    <div class="row">
        <side-nav></side-nav>
        <div class="content">
            <h2>Here you can manage your seeding options.</h2>
        </div>
        <file-selector></file-selector>
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
  import FileSelector from './FileSelectorView'
  export default {
    name: 'seeder-manager',
    components: {
      SideNav,
      FileSelector
    }
  }
</script>