import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBznoFLbuPlfhNcrwJNisIWrlSRsQIAuDE",
  authDomain: "nysl-demo.firebaseapp.com",
  databaseURL: "https://nysl-demo.firebaseio.com",
  projectId: "nysl-demo",
  storageBucket: "nysl-demo.appspot.com",
  messagingSenderId: "369318932571",
  appId: "1:369318932571:web:9292171cf983b5acba4f7e",
  measurementId: "G-EZX1FRREPR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

