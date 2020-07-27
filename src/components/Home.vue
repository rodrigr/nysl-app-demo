<template>
  <div id="home">
    <h2>Upcoming Events</h2>
    <div class="body">
      <b-carousel controls indicators img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;">
        <b-carousel-slide
          caption="August 4"
          text="NYSL Fundraiser"
          img-src="../assets/fundraiser.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="August 16"
          text="Season Kick-off: Meet the Teams"
          img-src="../assets/meet-teams.jpg"
        ></b-carousel-slide>
        <b-carousel-slide
          caption="September 1"
          text="First Game of the Season"
          img-src="../assets/first-game.jpg"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
};
</script>

<style scoped>
.body{
  padding: 1em;
}
</style>