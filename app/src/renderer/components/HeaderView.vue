<template>
    <header>
        <div>
            <md-toolbar>
                <md-button class="md-icon-button" @click="$refs.sidenav.toggle()" id="menu-toggle">
                    <md-icon>menu</md-icon>
                </md-button>

                <h2 class="md-title" style="flex: 1">{{ $t($route.meta.title) }}</h2>
                <div class="langage">
                    <language-select label=""></language-select>
                </div>
            </md-toolbar>
            <md-sidenav class="md-left" ref="sidenav" id="sidenav">
                <md-toolbar class="md-account-header">
                    <md-list class="md-transparent">
                        <md-list-item class="md-avatar-list">
                            <md-avatar class="md-large">
                                <img src="https://placeimg.com/64/64" alt="People">
                            </md-avatar>
                        </md-list-item>

                        <md-list-item>
                            <div class="md-list-text-container">
                                <span>{{ username }}</span>
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
                            <span>{{ $t('components.header.nav.home') }}</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item id="new-seed-toggle">
                        <md-icon>create_new_folder</md-icon>
                        <span>{{ $t('components.header.nav.new_seed') }}</span>

                        <md-list-expand id="new-seed">
                            <md-list>
                                <router-link :to="{ name: 'find-seed' }" exact>
                                    <md-list-item class="md-inset"
                                                  @click="$refs.sidenav.toggle()">
                                        {{ $t('components.header.nav.existing_file') }}
                                    </md-list-item>
                                </router-link>
                                <router-link :to="{ name: 'new-seed' }" exact>
                                    <md-list-item class="md-inset"
                                                  @click="$refs.sidenav.toggle()">
                                        {{ $t('components.header.nav.new_file') }}
                                    </md-list-item>
                                </router-link>
                            </md-list>
                        </md-list-expand>
                    </md-list-item>

                    <md-list-item @click="$refs.sidenav.toggle()">
                        <router-link :to="{ name: 'seed-list' }" exact>
                            <md-icon>local_florist</md-icon>
                            <span>{{ $t('components.header.nav.my_seeds') }}</span>
                        </router-link>
                    </md-list-item>

                    <md-list-item @click="$refs.sidenav.toggle()">
                        <router-link :to="{ name: 'settings' }" exact>
                            <md-icon>settings</md-icon>
                            <span>{{ $t('components.header.nav.settings') }}</span>
                        </router-link>
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

<script>
  import LanguageSelect from './LanguageSelectView.vue'

  export default{
    name: 'header',
    components: {
      'language-select': LanguageSelect
    },
    computed: {
      username () {
        return this.$store.state.authUser
      }
    }
  }
</script>
