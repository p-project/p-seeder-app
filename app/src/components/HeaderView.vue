<template>
    <header>
        <div class="bar">
            <router-link to="/">
                <md-button class="md-icon-button md-raised md-primary" md-menu-trigger>
                    <md-icon>home</md-icon>
                </md-button>
            </router-link>
        </div>
    </header>
</template>

<style scoped lang="scss">
    header {
        padding-top: 10px;
        margin-bottom: 10px;
        width: 100%;
        top: 0;
        left: 0;
    }

</style>

<script>
  export default {
    name: 'header-view'
  }
</script>
