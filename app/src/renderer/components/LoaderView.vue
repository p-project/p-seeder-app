<template>
    <div>
        <div class="overlay" v-if="load">
            <div class="loader">
                <md-spinner :md-size="60" md-indeterminate></md-spinner>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss" rel="stylesheet/scss">
    .overlay {
        background: rgba(0,0,0,.8);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;

        .loader {
            position: absolute;
            top: calc(50% - 21px);
            left: calc(50% - 21px);
        }
    }
</style>

<script>
  export default{
    props: ['load'],
    data () {
      return {
        loading: false
      }
    }
  }
</script>
