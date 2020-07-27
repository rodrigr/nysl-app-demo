<template>
  <div id="locations">
      <h2>Locations</h2>
      <div class="buttons">
          <div v-for="(location,index) in locations" :key="index">
              <b-button v-b-toggle="index + '-accordion'" class="btn-nysl-primary">{{location.name}}</b-button>  
          </div>
      </div>
      <div>
          <div v-for="(location,index) in locations" :key="index">
              <b-collapse :id="index + '-accordion'" accordion="maps">
                  <span v-html="location.map"></span>
              </b-collapse>
          </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'Locations',
    computed:{
        ...mapState(['locations'])
    }
}
</script>
<style lang="scss" scoped>
    

    .buttons{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;

        div{
            margin: 1em;
        }
    }
</style>