<template>
  <div id="chatroom">
    <h2>Forum</h2>
    <template v-if="user == null">
      <router-link to="/profile">
        <b-button>Login</b-button>
      </router-link>
    </template>
    <template v-else>
      <div class="body">
        <div v-for="(message,index) in messages" :key="index" class="bubble">
          <p>
            <strong>{{message.author}} said:</strong>
          </p>
          <p>{{message.body}}</p>
        </div>
      </div>
      <div>
        <input type="text" placeholder="Your message" id="box" />
        <b-button @click="post()">Send</b-button>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { db } from "../firebase/db";

export default {
  name: "Chatroom",
  data() {
    return {
      messages: [],
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    post() {
      let folder = db.ref("forum/match" + this.$route.params.id)
      let input = document.getElementById("box");
      let post = {
        body: input.value,
        author: this.user.displayName,
        date: new Date(),
      };

      folder.push(post);

      input.value = "";
    },
  },
  mounted() {
    this.messages = []
    db.ref("forum/match" + this.$route.params.id).on(
      "child_added",
      (snapshot) => {
        this.messages.push(snapshot.val());
      }
    );
  },
};
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.bubble {
  text-align: left;
  border-radius: 20px;
  background-color: aquamarine;
  padding: 2em 1em;
  margin: 20px 0;
  min-width: 25vw;
}
</style>