<template>
    <div class="manager">
        <loader :load="loading"></loader>
        <div class="seed-list">
            <md-card v-for="torrent in torrentsInfo">
                <md-card-header>
                    <div class="md-title">{{ torrent.name }}</div>
                </md-card-header>

                <md-card-media>
                    <img src="http://lorempixel.com/400/200" alt="People">
                </md-card-media>

                <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
                </md-card-content>

                <md-card-actions>
                    <md-button @click="remove(torrent.hash)">{{ $t('components.seed_list.delete') }}</md-button>
                </md-card-actions>
            </md-card>
        </div>
        </md-whiteframe>
    </div>
</template>

<style scoped lang="scss" rel="stylesheet/scss">

    .seed-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .md-card {
        width: 300px;
        margin: 10px 10px 10px 10px;
    }
</style>

<script>
  import Loader from './LoaderView.vue'

  export default{
    name: 'seed-list',
    components: {
      'loader': Loader
    },
    data: () => ({
      torrentsHash: [],
      torrentsInfo: [],
      newTorrent: '',
      loading: false
    }),
    mounted () {
      this.loading = true
      this.$http.get('http://localhost:2342/list').then((response) => {
        this.torrentsHash = response.data
        this.torrentsHash.forEach((hash, index) => {
          this.$http.get('http://localhost:2342/info/' + hash).then((response) => {
            this.torrentsInfo.push({'name': response.body['name'], 'hash': response.body['infoHash']})
          }, (response) => {
            console.log('error', response)
          })
        })
        this.loading = false
      }, (response) => {
        console.log('error', response)
        this.loading = false
      })
    },
    methods: {
      remove (hash) {
        this.loading = true
        this.$http.delete('http://localhost:2342/delete/' + hash).then((response) => {
          this.torrentsHash = this.torrentsHash.filter(t => t !== hash)
          this.torrentsInfo = this.torrentsInfo.filter(t => t.hash !== hash)
          this.loading = false
        }, (response) => {
          console.log('error', response)
          this.loading = false
        })
      }
    }
  }
</script>
