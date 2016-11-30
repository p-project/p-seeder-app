<template>
    <div>
        <h1>Welcome.</h1>

        <mdl-textfield floating-label="Pseudo"></mdl-textfield><br />
        <mdl-textfield floating-label="Password" type="password"></mdl-textfield><br />
        <mdl-button colored raised>Start</mdl-button><br /><br />

        <router-link to="/seederManager">Continue anonymously</router-link>

    </div>
</template>

<style>
</style>


<script>
    export default {
      name: 'landing-page'
    }
</script>
