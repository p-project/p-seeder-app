<template>
    <div class="file-selector">
        <form novalidate @submit.stop.prevent="submit">
            <md-input-container>
                <md-input type="file"></md-input>
            </md-input-container>
            <md-button class="md-raised md-primary">Seed</md-button>
        </form>
    </div>
</template>

<style lang="scss">
    .file-selector {
        width: 40%;
    }
</style>

<script>
  export default{
    name: 'selector'
  }
</script>
