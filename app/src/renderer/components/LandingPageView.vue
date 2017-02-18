<template>
    <div class="main">
        <loader :load="loading"></loader>

        <h1>{{ $t('components.landing_page.welcome') }}</h1>
        <form @submit.stop.prevent="submit" class="login-form">
            <md-input-container>
                <label>{{ $t('components.landing_page.pseudo') }}</label>
                <md-input></md-input>
            </md-input-container>
            <br />
            <md-input-container>
                <label>{{ $t('components.landing_page.password') }}</label>
                <md-input type="password"></md-input>
            </md-input-container>
            <md-button class="md-raised md-primary" v-on:click="log">{{ $t('components.landing_page.login') }}</md-button>
            <br />
        </form>

        <router-link :to="{ name: 'seed-list' }">{{ $t('components.landing_page.anonymous') }}</router-link>

    </div>
</template>

<style lang="scss">
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center
    }

    .login-form {
        width: 300px;
    }

</style>

<script>
  import Loader from './LoaderView.vue'

  export default{
    components: {
      'loader': Loader
    },
    data () {
      return {
        loading: false
      }
    },
    methods: {
      log () {
        this.$store.dispatch('login')
      }
    }
  }
</script>
