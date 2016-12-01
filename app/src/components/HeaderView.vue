<template>
    <header>
        <div class="bar">
            <router-link to="/">Login</router-link>
        </div>
    </header>
</template>

<style scoped>
  header {
    height: 20px;
    background: #777777;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
</style>

<script>
  export default {
    name: 'header-view'
  }
</script>
