<template>
    <div class="config">
        <form class="config-form">
            <md-input-container>
                <md-select name="langage" v-model="lang" v-on:click="setLang()">
                    <md-option value="en">English</md-option>
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
  import config from '../config'

  export default{
    name: 'settings',
    data () {
      return {
        lang: config.get('lang')
      }
    },
    methods: {
      setLang () {
        config.set('lang', this.lang)
      }
    }
  }
</script>
