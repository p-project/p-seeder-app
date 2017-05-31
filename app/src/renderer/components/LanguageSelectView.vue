<template>
    <md-input-container>
        <label for="lang">{{ label }}</label>
        <md-select name="lang" v-model="localLang" :value="globalLang" @change="setLang()">
            <md-option value="en">English</md-option>
            <md-option value="fr">Français</md-option>
        </md-select>
    </md-input-container>
</template>

<style lang="scss" rel="stylesheet/scss">
</style>

<script>
  export default{
    name: 'language-select',
    props: ['label'],
    data: () => ({
      localLang: this.globalLang
    }),
    methods: {
      setLang () {
        this.$store.commit('SET_LANG', this.localLang)
      }
    },
    computed: {
      globalLang () {
        return this.$store.state.lang
      }
    }
  }
</script>
