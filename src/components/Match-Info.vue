<template>
  <div id="match-info">
    <h2>Match Info</h2>
    <div class="match" v-if="match != null">
      <div class="date">
        <h3>{{match.date}} at {{match.time}}</h3>
      </div>
      <div class="teams">
        <div class="team1 team">
          <svg
            width="50"
            height="50"
            viewBox="0 0 16 16"
            class="bi bi-shield-fill"
            :fill="match.team1.color"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.187 1.025C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z"
            />
          </svg>
          <h3>{{match.team1.name}}</h3>
        </div>
        <span>vs</span>
        <div class="team2 team">
          <svg
            width="50"
            height="50"
            viewBox="0 0 16 16"
            class="bi bi-shield-fill"
            :fill="match.team2.color"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.187 1.025C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z"
            />
          </svg>
          <h3>{{match.team2.name}}</h3>
        </div>
      </div>
      <div class="location">
        <h4>{{match.location}}</h4>
        <p>{{loc.address}}</p>
        <span v-html="loc.map"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Match-Info",
  data() {
    return {
      match: null,
      loc: null,
    };
  },
  methods: {
    searchLocations(name) {
        for(let loc in this.locations){
            if(this.locations[loc].name == name){
                return this.locations[loc]
            }
        }
    },
  },
  computed: {
    ...mapState(["matches", "locations"]),
  },
  mounted() {
    this.match = this.matches[this.$route.params.index];
    this.loc = this.searchLocations(this.match.location);
  },
};
</script>

<style>
.teams {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
</style>