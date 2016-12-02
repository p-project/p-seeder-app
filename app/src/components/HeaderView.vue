<template>
    <header>
        <div class="bar">
            <md-menu>
                <md-button class="md-icon-button md-raised md-primary" md-menu-trigger>
                    <md-icon>more_vert</md-icon>
                </md-button>

                <md-menu-content>
                        <md-menu-item>
                            <md-icon>home</md-icon>
                        </md-menu-item>
                    <md-menu-item>My Item 2</md-menu-item>
                    <md-menu-item>My Item 3</md-menu-item>
                </md-menu-content>
            </md-menu>
        </div>
    </header>
</template>

<style scoped lang="scss">
    header {
        padding-top: 10px;
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
