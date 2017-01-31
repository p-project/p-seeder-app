<template>
    <div class="manager">
        <loader :load="loading"></loader>
        <div class="seed-list">
            <md-card v-for="torrent in torrents">
                <md-card-header>
                    <div class="md-title">{{ torrent }}</div>
                    <div class="md-subhead">Subtitle here</div>
                </md-card-header>

                <md-card-media>
                    <img src="http://lorempixel.com/400/200" alt="People">
                </md-card-media>

                <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.
                </md-card-content>

                <md-card-actions>
                    <md-button @click="remove(torrent)">Delete</md-button>
                </md-card-actions>
            </md-card>
        </div>
        </md-whiteframe>
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
            color: #ff9800;
        }
    }
    .seed-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .md-card {
        width: 300px;
        margin: 10px 10px 10px 10px;
    }
    .new-seed {
        margin: auto;
        width: 20%;
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
        torrents: [],
        newTorrent: '',
        loading: false
      }
    },
    mounted () {
      this.loading = true
      this.$http.get('http://localhost:2342/list').then((response) => {
        this.torrents = response.data
        this.loading = false
      }, (response) => {
        console.log('error', response)
        this.loading = false
      })
    },
    methods: {
      remove (torrent) {
        this.loading = true
        this.$http.delete('http://localhost:2342/delete/' + torrent).then((response) => {
          this.torrents = this.torrents.filter(t => t !== torrent)
          this.loading = false
        }, (response) => {
          console.log('error', response)
          this.loading = false
        })
      }
    }
  }
</script>
