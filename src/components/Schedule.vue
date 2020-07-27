<template>
  <div id="schedule">
    <h2>Schedule</h2>
    <div class="match" v-for="(match,index) in matches" :key="index">
      <div class="date">
        <h3>{{match.date}}</h3>
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
      <div class="info">
        <p>At {{match.time}} in {{match.location}}</p>
        <div class="buttons">
          <router-link :to="'/match-info/' + index">
            <b-button pill class="btn-nysl-secondary">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                class="bi bi-info"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"
                />
                <circle cx="8" cy="4.5" r="1" />
              </svg>
            </b-button>
          </router-link>
          <router-link :to="'/chatroom/' + index">
            <b-button pill class="btn-nysl-secondary">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                class="bi bi-chat"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                />
              </svg>
            </b-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "Schedule",
  computed: {
      ...mapState(['matches'])
  }
};
</script>

<style lang="scss" scoped>
.match {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  margin: 2em 1em;
  padding: 1em;
  border-radius: 20px;
  background-color: var(--primary-color);
  color: whitesmoke;

  .teams {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .info .buttons{
      display: flex;
      justify-content: space-around;
      padding: 0 1em;
  }
}
</style>