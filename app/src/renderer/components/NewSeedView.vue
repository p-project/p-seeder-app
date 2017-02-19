<template>
    <div class="new-seed">
        <loader :load="loading"></loader>
        <h3>{{ $t('components.new_seed.browse') }}</h3>
        <form @submit.stop.prevent="submit" class="seed-form">
            <div class="file-selection" @dragover.prevent @drop="onDrop">
                <md-button class="md-raised md-primary" @click.native="openDialog">Select or drop a file</md-button>
                <md-chip v-if="path" md-deletable @delete="test">{{ path }}</md-chip>
            </div>
            <md-input-container>
                <label>{{ $t('components.new_seed.name') }}</label>
                <md-input v-model="name"></md-input>
            </md-input-container>

            <md-input-container>
                <label>{{ $t('components.new_seed.description') }}</label>
                <md-textarea v-model="desc"></md-textarea>
            </md-input-container>

            <div>
                <md-radio v-model="visibility" id="private" name="visibility" md-value="1" class="md-primary">Private</md-radio>
                <md-radio v-model="visibility" id="public" name="visibility" md-value="2" class="md-primary">Public</md-radio>
                <md-radio v-model="visibility" id="link" name="visibility" md-value="3" class="md-primary">Link</md-radio>
            </div>

            <md-button class="md-raised md-primary" v-on:click="add">{{ $t('components.new_seed.seed') }}</md-button>
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
        border: 4px dashed #ccc;
        background-color: #f6f6f6;
        border-radius: 2px;
        height: 100%;
        max-height: 400px;
        max-width: 600px;
        width: 100%;
    }
    #drag-file {
        background-color: blue;
        color:white;
        text-align: center;
        width:300px;
        height:300px;
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
        path: '',
        name: '',
        desc: '',
        categories: '/categories/',
        visibility: 2,
        loading: false
      }
    },
    methods: {
      openDialog () {
        const {dialog} = require('electron').remote
        let result = dialog.showOpenDialog({properties: ['openFile']})
        if (result) {
          this.path = result[0]
        }
      },
      add () {
        if (this.path) {
          this.loading = true
          this.$http.post('http://localhost:2342/seed', {
            path: this.path, desc: this.desc, name: this.name, categories: this.categories
          }).then((response) => {
            this.loading = false
              /* eslint-disable no-new */
            new Notification('The video "' + this.name + '" is now being seeded.')
            this.path = ''
            this.$router.push('/seedList')
          }, (response) => {
            console.log('error: ' + response.body)
            this.loading = false
          })
        }
      },
      test () {
        this.path = ''
      },
      onDrop (e) {
        e.stopPropagation()
        e.preventDefault()
        var files = e.dataTransfer.files
        this.path = files[0]['path']
      }
    }
  }
</script>
