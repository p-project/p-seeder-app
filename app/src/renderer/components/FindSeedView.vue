<template>
    <div>
        <form method="get" action="" @submit.prevent="search">
            <button type="submit"><i class="fa fa-search"></i></button>
            <input type="search"
                   name="search"
                   v-model="keywords"
                   @keyup="search"
                   @keyup.esc="escape($event.currentTarget)"/>
            <ul>
                <li v-if="results.length === 0" class="no-result">Status</li>
                <search-result v-for="result in results" :video="result"></search-result>
            </ul>
        </form>
    </div>
</template>


<style scoped lang="scss" rel="stylesheet/scss">

</style>

<script type="text/javascript">
  import SearchResult from './SearchResultView.vue'

  export default {
    name: 'search',
    components: {
      'search-result': SearchResult
    },
    data () {
      return {
        keywords: '',
        results: []
      }
    },
    methods: {
      search () {
        if (this.keywords.length < 3) {
          this.results = []
          return
        }
        this.$http.get('http://localhost:8001/videos?title=' + this.keywords)
          .then((response) => {
            this.results = JSON.parse(response.body)['hydra:member']
          })
          .catch(() => {
            this.results = []
          })
      },
      escape (input) {
        input.blur()
      }
    }
  }
</script>
