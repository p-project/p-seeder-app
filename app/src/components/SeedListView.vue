<template>
    <div class="manager">
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
                    <md-input type="text" v-model="newTorrent"></md-input>
                </md-input-container >
                <md-button class="md-raised md-primary" v-on:click="add">Seed</md-button>
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
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
        newTorrent: ''
      }
    },
    mounted () {
      this.$http.get('http://localhost:2342/list').then((response) => {
        this.torrents = response.data
      }, (response) => {
        console.log('error', response)
      })
    },
    methods : {
      remove (torrent) {
        this.$http.delete('http://localhost:2342/delete/' + torrent).then((response) => {
          this.torrents = this.torrents.filter(t => t != torrent)
        }, (response) => {
          console.log('error', response)
        })
      },
      add () {
        this.$http.post('http://localhost:2342/seedNewVideo', {videoPath: this.newTorrent}).then((response) => {
          this.torrents.push(response.data.torrentHashInfo)
        }, (response) => {
          console.log('error')
        })
      }
    }
  }
</script>
