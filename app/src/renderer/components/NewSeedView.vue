<template>
    <div class="new-seed">
        <loader :load="loading"></loader>
        <h3>Select a video to seed.</h3>
        <form @submit.stop.prevent="submit" class="seed-form">
            <div class="file-selection">
                <md-button @click.native="openDialog" class="md-fab md-primary md-mini">
                    <md-icon>create_new_folder</md-icon>
                </md-button>
                <md-chip v-if="newTorrent">{{ newTorrent }}</md-chip>
            </div>
            <md-input-container>
                <label>Name</label>
                <md-input></md-input>
            </md-input-container>
            <md-input-container>
                <label>Description</label>
                <md-textarea></md-textarea>
            </md-input-container>

            <div>
                <md-radio v-model="visibility" id="private" name="visibility" md-value="1" class="md-primary">Private</md-radio>
                <md-radio v-model="visibility" id="public" name="visibility" md-value="2" class="md-primary">Public</md-radio>
                <md-radio v-model="visibility" id="link" name="visibility" md-value="3" class="md-primary">Link</md-radio>
            </div>

            <md-button class="md-raised md-primary" v-on:click="add">Seed</md-button>
        </form>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss">
    .new-seed {
        margin: auto;
        width: 50%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .seed-form {
        width: 100%;
    }
    .file-selection {
        display: flex;
        flex-direction: row;
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
        visibility: 2,
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
          this.$http.post('http://localhost:2342/seed', {path: this.newTorrent}).then((response) => {
            this.loading = false
              /* eslint-disable no-new */
            new Notification('The file is now being seeded.')
            this.newTorrent = ''
            this.$router.push('/seedList')
          }, (response) => {
            console.log('error')
            this.loading = false
          })
        }
      }
    }
  }
</script>
