<template>
    <div class="manager">
        <div class="overlay" v-if="loading">
            <div class="loader">
                <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
            </div>
        </div>
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
        <div class="file-selector">
            <form novalidate @submit.stop.prevent="submit">
                <md-input-container>
                    <md-input @click.native="openDialog" v-model="newTorrent"></md-input>
                </md-input-container >
                <md-button class="md-raised md-primary" v-on:click="add">Seed</md-button>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss" rel="stylesheet/scss">
    .overlay {
        background: rgba(0,0,0,.5);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        filter: blur(1px);

        .loader {
            position: absolute;
            top: calc(50% - 21px);
            left: calc(50% - 21px);
            color: #009688;
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
    .file-selector {
        margin: auto;
        width: 40%;
    }
</style>

<script>
  export default{
    data () {
      return {
        torrents: [],
        newTorrent: '',
        loading: true
      }
    },
    mounted () {
      this.$http.get('http://localhost:2342/list').then((response) => {
        this.torrents = response.data
      }, (response) => {
        console.log('error', response)
      })
    },
    methods: {
      openDialog () {
        const {dialog} = require('electron').remote
        this.newTorrent = dialog.showOpenDialog({properties: ['openFile']})[0]
        console.log(this.newTorrent)
      },
      remove (torrent) {
        this.$http.delete('http://localhost:2342/delete/' + torrent).then((response) => {
          this.torrents = this.torrents.filter(t => t !== torrent)
        }, (response) => {
          console.log('error', response)
        })
      },
      add () {
        this.$http.post('http://localhost:2342/seedNewVideo', {videoPath: this.newTorrent}).then((response) => {
          this.torrents.push(response.data.torrentHashInfo)
          this.newTorrent = ''
        }, (response) => {
          console.log('error')
        })
      }
    }
  }
</script>
