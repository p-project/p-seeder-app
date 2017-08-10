<template>
    <div>
        <markdown-editor :value="value" ref="markdownEditor"></markdown-editor>
    </div>
</template>

<script>
  import markdownEditor from 'vue-simplemde/markdown-editor.vue'

  export default {
    name: 'simple-mde',
    props: ['value'],
    components: {
      markdownEditor
    },
    data: () => ({
      content: '',
      configs: {
        hideIcons: ['image'],
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
      }
    })
  }
</script>
