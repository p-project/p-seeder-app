<template>
    <div class="find-seed">
        <form method="get" @submit.prevent="search">
            <md-input-container>
                <md-icon>search</md-icon>
                <label>{{ $t('components.find_seed.search') }}</label>
                <md-input type="search"
                          name="search"
                          v-model="keywords"
                          @keyup.enter.native="search"
                          @keyup.esc.native="escape($event.currentTarget)"></md-input>
            </md-input-container>
        </form>
        <div class="result">
            <search-result v-for="result in results" :video="result"></search-result>
        </div>
    </div>
</template>


<style scoped lang="scss" rel="stylesheet/scss">
    .find-seed {
        margin: auto;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .md-input {
            width: 400px;
        }
        .result {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }
</style>

<script type="text/javascript">
  import SearchResult from './SearchResultView.vue'

  export default {
    name: 'search',
    components: {
      'search-result': SearchResult
    },
    data: () => ({
      keywords: '',
      results: []
    }),
    methods: {
      search () {
        if (this.keywords.length < 3) {
          this.results = []
          return
        }
        this.$http.get('http://localhost:2342/pApi/videos?title=' + this.keywords)
          .then((response) => {
            this.results = response.body
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
