<template>
    <div id="app" v-md-theme="'default'">
        <header-v></header-v>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="scss">
    @import url(https://fonts.googleapis.com/css?family=Lato:300);
    @import url(https://fonts.googleapis.com/icon?family=Material+Icons);

    body {
        display: flex;
        justify-content: space-around;
        font-family: Lato, Helvetica, sans-serif;
    }

    #app {
        width: 100%;
    }

</style>


<script>
  import HeaderV from './components/HeaderView'

  export default {
    components: {
      'header-v': HeaderV
    }
  }
</script>
