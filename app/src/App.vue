<template>
    <div id="app" v-md-theme="'default'">
        <header-v></header-v>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
    @import url(https://fonts.googleapis.com/css?family=Lato:300);
    @import url(https://fonts.googleapis.com/icon?family=Material+Icons);

    body {
        background:
            radial-gradient(
                ellipse at center,
                rgba(255, 255, 255, 1) 0%,
                rgba(229, 229, 229, .85) 100%
             );
        background-position: center;
        display: flex;
        justify-content: space-around;
        font-family: Lato, Helvetica, sans-serif;
    }
    .container {
        margin: 0 auto;
    }
</style>


<script>
  import HeaderV from './components/HeaderView'

  export default {
    name: 'app',
    components: {
      HeaderV
    }
  }
</script>
