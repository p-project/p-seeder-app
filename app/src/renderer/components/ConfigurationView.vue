<template>
    <div class="config">
        <div class="config-form">

            <language-select :label="$t('components.settings.label')"></language-select>

            <div class="number-input">
                <md-input-container class="input">
                    <label>{{ $t('components.settings.max_flow') }}</label>
                    <md-input v-model="maxFlow"
                              type="number"
                              :placeholder="$t('components.settings.unlimited')"
                              @keyup.native="editFlow"
                              @click.native="editFlow"></md-input>
                </md-input-container>
                <div v-if="loadingFlow" class="status"><md-spinner :md-size="20" md-indeterminate></md-spinner></div>
                <div v-else class="status"><i class="material-icons">done</i></div>
            </div>
            <div class="number-input">
                <md-input-container class="input">
                    <label>{{ $t('components.settings.max_space') }}</label>
                    <md-input v-model="maxSpace"
                              type="number"
                              :placeholder="$t('components.settings.unlimited')"
                              @keyup.native="editSpace"
                              @click.native="editSpace"></md-input>
                </md-input-container>
                <div v-if="loadingSpace" class="status"><md-spinner :md-size="20" md-indeterminate></md-spinner></div>
                <div v-else class="status"><i class="material-icons">done</i></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss">
    .config {
        margin: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .config-form {
            width: 300px;

            .number-input {
                display: flex;

                .input {
                    width: 300px;
                }
                .status {
                    color: #009688;
                    margin-top: 20px;
                    width: 20px;
                }
            }
        }
    }
</style>

<script>
  import LanguageSelect from './LanguageSelectView.vue'
  import config from '../config'

  export default{
    name: 'settings',
    components: {
      'language-select': LanguageSelect
    },
    data: () => ({
      maxFlow: config.get('maxFlow'),
      maxSpace: config.get('maxSpace'),
      typingTimer: 0,
      loadingFlow: false,
      loadingSpace: false
    }),
    methods: {
      editFlow () {
        this.loadingFlow = true
        clearTimeout(this.typingTimer)
        this.typingTimer = setTimeout(this.doneTypingFlow, 2000)
      },
      doneTypingFlow () {
        this.loadingFlow = false
        config.set('maxFlow', this.maxFlow)
      },
      editSpace () {
        this.loadingSpace = true
        clearTimeout(this.typingTimer)
        this.typingTimer = setTimeout(this.doneTypingSpace, 2000)
      },
      doneTypingSpace () {
        this.loadingSpace = false
        config.set('maxSpace', this.maxSpace)
      }
    }
  }
</script>
