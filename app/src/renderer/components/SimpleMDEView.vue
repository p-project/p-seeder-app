<template>
    <div>
        <textarea ref="area"></textarea>
    </div>
</template>

<style lang="scss">
</style>

<script>
  import 'simplemde/dist/simplemde.min.css'
  import Simplemde from 'simplemde'

  export default {
    props: ['value'],
    mounted () {
      this.mde = new Simplemde({
        hideIcons: ['image'],
        element: this.$refs.area,
        toolbar: ['bold', 'italic', 'strikethrough', 'heading',
          '|', 'code', 'quote', 'unordered-list', 'ordered-list',
          'clean-block', 'link', '|', 'horizontal-rule', '|', 'preview',
          'side-by-side', 'fullscreen',
          {
            name: 'guide',
            action: () => {
              this.$electron.shell.openExternal('https://simplemde.com/markdown-guide')
            },
            className: 'fa fa-question-circle',
            title: 'Custom Button'
          }
        ],
        spellChecker: false
      })
      this.mde.value(this.value)
      var self = this
      this.mde.codemirror.on('change', function () {
        self.$emit('input', self.mde.value())
      })
    }
  }
</script>
