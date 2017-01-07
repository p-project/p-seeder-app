<template>
    <div class="new-seed">
        <h2>Here you can browse a video to seed.</h2>
        <file-selector></file-selector>
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
  import FileSelector from './FileSelectorView'

  export default {
    components: {
      'file-selector': FileSelector
    }
  }
</script>
