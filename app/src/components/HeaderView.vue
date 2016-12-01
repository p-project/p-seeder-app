<template>
    <header>
        <div class="bar">
            <mdl-button id="menu" icon>
                <i class="material-icons">more_vert</i>
            </mdl-button>
            <mdl-menu for="menu">
                <mdl-menu-item><router-link to="/">Login</router-link></mdl-menu-item>
                <mdl-menu-item><router-link to="/">Login</router-link></mdl-menu-item>
            </mdl-menu>
        </div>
    </header>
</template>

<style>
  .bar {
    position: relative;
    background: #3F51B5;
    color: white;
    height: 64px;
    padding: 16px;
}
</style>

<script>
  export default {
    name: 'header-view'
  }
</script>
