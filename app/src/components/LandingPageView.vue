<template>
    <div class="main">
        <h1>Welcome.</h1>

        <form novalidate @submit.stop.prevent="submit" class="login-form">
            <md-input-container>
                <label>Pseudo</label>
                <md-input></md-input>
            </md-input-container>
            <br />
            <md-input-container>
                <label>Password</label>
                <md-input type="password"></md-input>
            </md-input-container>
            <md-button class="md-raised md-primary">Primary</md-button>
            <br />
        </form>

        <router-link to="/seederManager">Continue anonymously</router-link>

    </div>
</template>

<style>
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center
  }

  .login-form {
    width: 300px;
  }

</style>


<script>
    export default {
      name: 'landing-page'
    }
</script>
