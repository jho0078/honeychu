<template>
  <div>
    <h1>Test</h1>
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
    <button @click="handleClickGetAuth" :disabled="!isInit">get auth code</button>
    <button @click="handleClickSignIn" v-if="!isSignIn" :disabled="!isInit">signIn</button>
    <button @click="handleClickSignOut" v-if="isSignIn" :disabled="!isInit">signOout</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isInit: false,
      isSignIn: false
    };
  },
  methods: {
    handleClickGetAuth() {
      this.$gAuth
        .getAuthCode()
        .then(authCode => {
          // On success
          return this.$http.post("http://localhost:8080/starbucks", {
            code: authCode,
            redirect_uri: "postmessage"
          });
        })
        .then(response => {
          //   console.log("Success!");
        });
      // .catch(error => {
      //   console.log("Error:(");
      // });
    },
    handleClickSignIn() {
      this.$gAuth.signIn().then(user => {
        // On success do something, refer to https://developers.google.com/api-client-library/javascript/reference/referencedocs#googleusergetid
        // console.log("user", GoogleUser);
        this.isSignIn = this.$gAuth.isAuthorized;
      });
      // .catch(error => {
      // On fail do something
      // });
    },
    handleClickSignOut() {
      this.$gAuth.signOut().then(() => {
        // On success do something
        this.isSignIn = this.$gAuth.isAuthorized;
      });
      // .catch(error => {
      // On fail do something
      // });
    }
  },
  mounted() {
    let that = this;
    let checkGauthLoad = setInterval(function() {
      that.isInit = that.$gAuth.isInit;
      that.isSignIn = that.$gAuth.isAuthorized;
      if (that.isInit) clearInterval(checkGauthLoad);
    }, 1000);
  }
};
</script>