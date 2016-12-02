<template>
    <header>
        <div class="bar">
            <div class="home-icon">
                <router-link to="/">
                    <md-button class="md-icon-button md-raised md-primary">
                        <md-icon>home</md-icon>
                    </md-button>
                </router-link>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
    header {
        height: 50px;
        width: 100%;
        top: 0;
        left: 0;
    }
    .bar {
        margin-top: 10px;
    }
</style>

<script>
  export default {
    name: 'header-view'
  }
</script>
