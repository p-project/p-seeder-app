<template>
    <header>
        <div>
            <md-toolbar>
                <md-button class="md-icon-button" @click="$refs.sidenav.toggle()">
                    <md-icon>menu</md-icon>
                </md-button>

                <h2 class="md-title" style="flex: 1">{{ $route.name }}</h2>

            </md-toolbar>
            <md-sidenav class="md-left" ref="sidenav">
                <md-toolbar class="md-account-header">
                    <md-list class="md-transparent">
                        <md-list-item class="md-avatar-list">
                            <md-avatar class="md-large">
                                <img src="https://placeimg.com/64/64" alt="People">
                            </md-avatar>
                        </md-list-item>

                        <md-list-item>
                            <div class="md-list-text-container">
                                <span>John Doe</span>
                                <span>johndoe@email.com</span>
                            </div>

                            <md-button class="md-icon-button md-list-action">
                                <md-icon>arrow_drop_down</md-icon>
                            </md-button>
                        </md-list-item>
                    </md-list>
                </md-toolbar>

                <md-list>
                    <md-list-item @click="$refs.sidenav.toggle()">
                        <router-link :to="{ name: 'landing-page' }" exact>
                            <md-icon>home</md-icon>
                            <span>Home</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item @click="$refs.sidenav.toggle()">
                        <router-link :to="{ name: 'seed-list' }" exact>
                            <md-icon>local_florist</md-icon>
                            <span>My seeds</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item @click="$refs.sidenav.toggle()">
                        <router-link :to="{ name: 'new-seed' }" exact>
                            <md-icon>create_new_folder</md-icon>
                            <span>New seed</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>access_time</md-icon>
                        <span>Recent</span>
                    </md-list-item>

                    <md-list-item>
                        <md-icon>start</md-icon>
                        <span>Starred</span>
                    </md-list-item>
                </md-list>
            </md-sidenav>
        </div>
    </header>
</template>

<style scoped lang="scss">
    header {
        margin-bottom: 10px;
        width: 100%;
        top: 0;
        left: 0;
    }
</style>

