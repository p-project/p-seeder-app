<template>
    <div class="new-seed">
        <loader :load="loading"></loader>
        <h2>Here you can browse a video to seed.</h2>
        <form novalidate @submit.stop.prevent="submit">
            <md-input-container>
                <label>Name</label>
                <md-input></md-input>
            </md-input-container>
            <md-input-container>
                <label>Description</label>
                <md-textarea></md-textarea>
            </md-input-container>
            <md-input-container>
                <md-input @click.native="openDialog" v-model="newTorrent"></md-input>
                <md-input></md-input>
            </md-input-container >
            <md-button class="md-raised md-primary" v-on:click="add">Seed</md-button>
        </form>
    </div>
</template>

<style lang="scss">
    .new-seed {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
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
        newTorrent: '',
        loading: false
      }
    },
    methods: {
      openDialog () {
        const {dialog} = require('electron').remote
        let result = dialog.showOpenDialog({properties: ['openFile']})
        if (result) {
          this.newTorrent = result[0]
        }
      },
      add () {
        if (this.newTorrent) {
          this.loading = true
          this.$http.post('http://localhost:2342/seedNewVideo', {videoPath: this.newTorrent}).then((response) => {
            this.newTorrent = ''
            this.loading = false
          }, (response) => {
            console.log('error')
            this.loading = false
          })
        }
      }
    }
  }
</script>
