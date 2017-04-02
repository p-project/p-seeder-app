<template>
    <li>
        <span class="video-title">{{ video.title }}</span><br />
        <span class="video-description">{{ video.description }}</span>
    </li>
</template>

<script type="text/javascript">
  export default {
    props: ['video']
  }
</script>
