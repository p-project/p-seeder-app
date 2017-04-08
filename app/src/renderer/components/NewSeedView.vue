<template>
    <div class="new-seed">
        <loader :load="loading" :loading-message="$t('components.new_seed.loading_message')"></loader>
        <h3>{{ $t('components.new_seed.browse') }}</h3>
        <form @submit.stop.prevent="submit" class="seed-form">
            <div class="file-selection" @dragover.prevent @drop="onDrop">
                <md-button class="md-raised md-primary" @click.native="openDialog"> {{ $t('components.new_seed.drop') }}</md-button>
                <md-chip v-if="path" md-deletable @delete="empty">{{ path }}</md-chip>
            </div>
            <md-input-container>
                <label>{{ $t('components.new_seed.name') }}</label>
                <md-input v-model="name"></md-input>
            </md-input-container>

            <label>{{ $t('components.new_seed.description') }}</label>
            <simple-mde></simple-mde>

            <div>
                <md-radio v-model="visibility" id="private" name="visibility" md-value="1" class="md-primary">Private</md-radio>
                <md-radio v-model="visibility" id="public" name="visibility" md-value="2" class="md-primary">Public</md-radio>
                <md-radio v-model="visibility" id="link" name="visibility" md-value="3" class="md-primary">Link</md-radio>
            </div>

            <md-input-container>
                <label for="categories">Categories</label>
                <md-select multiple v-model="selectedCategories">
                    <md-option v-for="item in categories" id="categories" :value="item.value">
                        {{ item.label }}
                    </md-option>
                </md-select>
            </md-input-container>
            <md-button class="md-raised md-primary" v-on:click="add">{{ $t('components.new_seed.seed') }}</md-button>
        </form>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss">
    .new-seed {
        margin: auto;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .seed-form {
        width: 100%;
    }
    .file-selection {
        display: flex;
        flex-direction: column;
        border: 4px dashed #ccc;
        background-color: #f6f6f6;
        border-radius: 2px;
        height: 100%;
        max-height: 400px;
        max-width: 600px;
        width: 100%;
        padding: 10px 10px 10px 10px;

        .md-button {
            width: 300px;
        }

    }
</style>

<script>
  import Loader from './LoaderView.vue'
  import SimpleMDE from './SimpleMDEView.vue'

  export default{
    components: {
      'loader': Loader,
      'simple-mde': SimpleMDE
    },
    mounted () {
      this.$http.get('http://localhost:2342/pApi/categories').then((response) => {
        response.body.forEach((category, index) => {
          this.categories.push({'value': category['id'], 'label': category['name']})
        })
      }, (response) => {
        console.log('error', response)
        this.loading = false
      })
    },
    data () {
      return {
        path: '',
        name: '',
        desc: '# Coucou',
        categories: [],
        selectedCategories: [],
        visibility: 2,
        loading: false
      }
    },
    methods: {
      openDialog () {
        const {dialog} = require('electron').remote
        let result = dialog.showOpenDialog({
          filters: [
            {name: 'Movies', extensions: ['mkv', 'avi', 'mp4', 'webm']}
          ],
          properties: ['openFile']})
        if (result) {
          this.path = result[0]
        }
      },
      add () {
        if (this.path) {
          this.loading = true
          var stringCategories = 'categories/' + this.selectedCategories[0]
          this.$http.post('http://localhost:2342/seed', {
            path: this.path, desc: this.desc, name: this.name, categories: stringCategories
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
      empty () {
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
