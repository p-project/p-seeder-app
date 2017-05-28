<template>
    <div class="config">
        <form class="config-form">
            <md-input-container>
                <label for="lang">Language</label>
                <md-select name="lang" v-model="lang" id="lang">
                    <md-option value="english">English</md-option>
                    <md-option value="fr">Français</md-option>
                </md-select>
            </md-input-container>

            <md-input-container>
                <label>Débit maximum</label>
                <md-input type="number"></md-input>
            </md-input-container>

            <md-input-container>
                <label>Espace disque maximum</label>
                <md-input type="number"></md-input>
            </md-input-container>
        </form>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss">
    .config {
        margin: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .seed-form {
        width: 100%;
    }
</style>

<script>
  import Vue from 'vue'
  import config from '../config'

  export default{
    name: 'settings',
    data: () => ({
      lang: 'english'
    }),
    methods: {
      setLang () {
        config.set('lang', this.lang)
        Vue.config.lang = this.lang
      }
    }
  }
</script>
