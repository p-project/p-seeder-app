<template>
    <div id="app">
        <header-v></header-v>
        <router-view></router-view>
    </div>
</template>

<style>
    @import url(https://fonts.googleapis.com/css?family=Lato:300);
    @import url(https://fonts.googleapis.com/icon?family=Material+Icons);
    @import url(https://code.getmdl.io/1.2.1/material.teal-orange.min.css);

    * {
        margin: 0;
        padding: 0;
    }

    html,
    body { height: 100%; }

    body {
        align-items: center;
        background:
            radial-gradient(
                ellipse at center,
                rgba(255, 255, 255, 1) 0%,
                rgba(229, 229, 229, .85) 100%
             );
        background-position: center;
        display: flex;
        font-family: Lato, Helvetica, sans-serif;
        justify-content: center;
        text-align: center;
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
