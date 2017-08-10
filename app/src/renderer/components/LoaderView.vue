<template>
    <div>
        <div class="overlay" v-if="load">
            <div class="loader">
                <md-spinner :md-size="60" md-indeterminate></md-spinner>
                <p>{{ loadingMessage }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss" rel="stylesheet/scss">
    .overlay {
        background: rgba(0,0,0,.8);
        text-align: center;
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

            p {
                color: white;
                font-weight: bold;
            }
        }
    }
</style>

<script>
  export default{
    name: 'loader',
    props: ['load', 'loadingMessage'],
    data: () => ({
      loading: false
    })
  }
</script>
