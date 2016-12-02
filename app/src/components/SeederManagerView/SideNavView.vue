<template>
    <div class="nav">
        <md-list>
            <md-list-item>
                <md-icon>videogame_asset</md-icon>
                <span>Games</span>

                <md-list-expand>
                    <md-list>
                        <md-list-item class="md-inset">Console</md-list-item>
                        <md-list-item class="md-inset">PC</md-list-item>
                    </md-list>
                </md-list-expand>
            </md-list-item>

            <md-list-item>
                <md-icon>video_library</md-icon>
                <span>Video</span>

                <md-list-expand>
                    <md-list>
                        <md-list-item class="md-inset">Humor</md-list-item>
                        <md-list-item class="md-inset">Music</md-list-item>
                        <md-list-item class="md-inset">Movies</md-list-item>
                        <md-list-item class="md-inset">TV Shows</md-list-item>
                    </md-list>
                </md-list-expand>
            </md-list-item>
        </md-list>
    </div>
</template>

<style lang="scss">
    .nav {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        width: 20%;
    }

</style>

<script>

    export default{
         name: 'side-nav'
    }
</script>
