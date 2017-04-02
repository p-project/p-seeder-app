<template>
    <md-card>
        <md-card-header>
            <div class="md-title">{{ video.title }}</div>
        </md-card-header>

        <md-card-media>
            <img src="http://lorempixel.com/400/200" alt="People">
        </md-card-media>
            <span>{{ video.description }}</span>
        <md-card-content>

        </md-card-content>

        <md-card-actions>
            <md-button>{{ $t('components.search_result.seed') }}</md-button>
        </md-card-actions>
    </md-card>
</template>

<style scoped lang="scss" rel="stylesheet/scss">
    .md-card {
        width: 300px;
        margin: 10px 10px 10px 10px;
    }
</style>

<script type="text/javascript">
  export default {
    props: ['video']
  }
</script>
