<template>
  <div>
    <div id="google-sign-in-button"></div>
  </div>
</template>

<script>
export default {
  name: 'GoogleSignInButton',
  props: {
    width: {
      type: String,
      default: null
    },
    height: {
      type: String,
      default: null
    }
  },
  mounted() {
    window.gapi.signin2.render('google-sign-in-button', {
      scope: 'profile email',
      width: this.width,
      height: this.height,
      longtitle: true,
      theme: 'light',
      onsuccess: this.signIn,
      onfailure: () => {}
    });
  },
  methods: {
    signIn(googleUser) {
      const id_token = googleUser.getAuthResponse().id_token;
      this.$emit('sign-in', id_token);
    }
  }
};
</script>