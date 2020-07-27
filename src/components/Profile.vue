<template>
  <div id="profile">
    <template v-if="user == null">
      <h2>Please Login</h2>
      <b-button @click="login()">Login with Google</b-button>
    </template>
    <template v-else>
      <h2>Profile</h2>
      <p>Hi {{user.displayName}}</p>
      <b-button @click="logout()">Logout</b-button>
    </template>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import { mapState } from "vuex";

export default {
  name: "Login",
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    login() {
      let provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          console.log(result.user);
        })
        .catch((error) => {
          console.log(error.code);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(function () {
          console.log("logout")
        })
        .catch(function (error) {
          console.log(error.code)
        });
    },
  },
};
</script>

<style>
</style>