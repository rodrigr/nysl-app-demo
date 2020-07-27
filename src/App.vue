<template>
  <div id="app">
    <img src="./assets/nysl_logo.png" alt="nysl logo" id="logo">
    <div id="nav">
      <router-link to="/">
        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
          class="bi bi-house-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
          />
          <path
            fill-rule="evenodd"
            d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
          />
        </svg>
        <span class="d-none d-sm-inline">Home</span>
      </router-link>
      <router-link to="/about">
        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
          class="bi bi-info-circle-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          />
        </svg>
        <span class="d-none d-sm-inline">About</span>
      </router-link>
      <router-link to="/schedule">
        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
          class="bi bi-calendar-event-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM0 5h16v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5zm12.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
          />
        </svg>
        <span class="d-none d-sm-inline">Schedule</span>
      </router-link>
      <router-link to="/locations">
        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
          class="bi bi-geo-alt"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          />
        </svg>
        <span class="d-none d-sm-inline">Locations</span>
      </router-link>
      <router-link to="/profile">
      <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-person-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
        <span class="d-none d-sm-inline">Profile</span>
      </router-link>
    </div>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapMutations(['getUser'])
  },
  mounted(){
    this.getUser()
  }
}
</script>
<style lang="scss">
:root {
  --primary-color: #033949;
  --secondary-color: #a3ff15;
}

.btn-nysl-primary{
  background-color: var(--primary-color);
  color: var(--secondary-color);
  border: 0;
}

.btn-nysl-secondary{
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary-color);
  padding-bottom: 7vh;
}

#logo{
  width: 70px;
  height: 70px;
  position: absolute;
  left: .5em;
  top: .5em;
}

h2{
  margin: .6em .3em .3em .7em;
  padding: .2em .5em .2em 70px;
  background-color: var(--primary-color);
  color: whitesmoke;
  border-radius: 20px;
  border: 2px solid var(--secondary-color);
}

#nav {
  height: 7vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: var(--secondary-color);
  position: fixed;
  bottom: 0;
  z-index: 999;

  a {
    font-weight: bold;
    color: var(--primary-color);
    text-decoration: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;

    &.router-link-exact-active {
      background-color: var(--primary-color);
      color: whitesmoke;
    }

    span {
      margin-left: 0.5em;
    }
  }
}

@media screen and (orientation: landscape) {
  #app{
    padding-left: 12vw;
  }

  #logo{
    left: calc(12vw + .5em);
    width: 75px;
    height: 75px;
  }

  #nav {
    top: 0;
    left: 0;
    bottom: initial;
    height: 100vh;
    width: 12vw;
    flex-direction: column;

    a {
      height: initial;
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: .5em 0;

      span {
        margin-left: 0;
        margin-top: 0.5em;
      }
    }
  }
}

iframe{
        width: 75vw;
        height: 50vh;
        border: 2px solid var(--primary-color) !important;
        border-radius: 20px;
    }

    @media screen and (orientation: landscape){
        iframe{
            width: 60vw;
            height: 75vh;
        }
    }
</style>
