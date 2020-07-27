import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: null,
        matches: [
            {
              team1: {
                name: "U1",
                color: "blue",
              },
              team2: {
                name: "U4",
                color: "green",
              },
              date: "9/01",
              time: "9:00 am",
              location: "AJ Katzenmaier",
            },
            {
              team1: {
                name: "U3",
                color: "red",
              },
              team2: {
                name: "U2",
                color: "orange",
              },
              date: "9/01",
              time: "1:00 pm",
              location: "Greenbay",
            },
            {
              team1: {
                name: "U5",
                color: "purple",
              },
              team2: {
                name: "U6",
                color: "brown",
              },
              date: "9/08",
              time: "9:00 am",
              location: "Howard A Yeager",
            },
            {
              team1: {
                name: "U6",
                color: "brown",
              },
              team2: {
                name: "U1",
                color: "blue",
              },
              date: "9/08",
              time: "1:00 pm",
              location: "Marjorie P Hart",
            },
          ],
          locations: {
            kat: {
                name: "AJ Katzenmaier",
                address: "24 W. Walton St., Chicago, IL 60610",
                map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.65406042623!2d-87.63123908425513!3d41.90029637200328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1595808797655!5m2!1ses-419!2sar"  allowfullscreen=""></iframe>'
            },
            gbay:{
                name: "Greenbay",
                address: "1734 N. Orleans St., Chicago, IL 60614",
                map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986746067!2d-87.64002798425481!3d41.913806271157426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1595809626981!5m2!1ses-419!2sar" allowfullscreen=""></iframe>'
            },
            yeager:{
                name: 'Howard A Yeager',
                address: '2245 N. Southport Ave., Chicago, IL 60614',
                map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5907222346573!2d-87.6653139842546!3d41.92315627057185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1595809738630!5m2!1ses-419!2sar"  allowfullscreen="" ></iframe>'
            },
            hart: {
                name: 'Marjorie P Hart',
                address: '2625 N. Orchard St., Chicago, IL 60614',
                map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291728953152!2d-87.6480862842545!3d41.92958227016933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1595809863360!5m2!1ses-419!2sar"  allowfullscreen="" ></iframe>'
            }
        },
        messages: [{author: 'Rodri', body:"hi"}]
    },
    mutations:{
        getUser(state){
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                  state.user = user
                } else {
                  state.user = null
                }
              });
        }
    }
})

export default store