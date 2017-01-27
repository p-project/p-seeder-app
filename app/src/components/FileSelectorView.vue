<template>
    <div class="file-selector">
        <form novalidate @submit.stop.prevent="submit">
            <md-input-container>
                <md-input type="text" v-model="torrent"></md-input>
            </md-input-container >
            <md-button class="md-raised md-primary" v-on:click="add">Seed</md-button>
        </form>
    </div>
</template>

<style scoped lang="scss">
    .file-selector {
        width: 40%;
    }
</style>

<script>
  export default{
    name: 'selector',
    data: function () {
      return {
        torrent: ''
      }
    },
    methods: {
      add (torrent) {
        this.$http.post('http://localhost:2342/add', torrent).then((response) => {
          console.log('http://localhost:2342/add')
        }, (response) => {
          console.log('error')
        })
      }
    }
  }
</script>
