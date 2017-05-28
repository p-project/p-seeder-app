<template>
    <div class="config">
        <form class="config-form">

            <language-select></language-select>

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
  import LanguageSelect from './LanguageSelectView.vue'

  export default{
    name: 'settings',
    components: {
      'language-select': LanguageSelect
    }
  }
</script>
