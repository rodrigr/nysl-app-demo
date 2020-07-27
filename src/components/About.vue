<template>
  <div id="about">
    <h2>About NYSL</h2>
    <div>
        <b-card title="Mission" tag="article">
            <b-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto architecto deserunt blanditiis illum nisi consequatur quibusdam ipsum consectetur. Rem aperiam dolorum culpa, eaque illo architecto est odit temporibus similique! Reprehenderit?
            </b-card-text>
        </b-card>
         <b-card title="Vision" tag="article">
            <b-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto architecto deserunt blanditiis illum nisi consequatur quibusdam ipsum consectetur. Rem aperiam dolorum culpa, eaque illo architecto est odit temporibus similique! Reprehenderit?
            </b-card-text>
        </b-card>
         <b-card title="General Information" tag="article">
            <b-card-text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto architecto deserunt blanditiis illum nisi consequatur quibusdam ipsum consectetur. Rem aperiam dolorum culpa, eaque illo architecto est odit temporibus similique! Reprehenderit?
            </b-card-text>
        </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>
    
<style lang="scss">
    .card{
        margin: 1em;
        border-radius: 20px;
        border: 0;
        background-color: var(--primary-color);
        color: whitesmoke;

        .card-title{
            color: var(--secondary-color)
        }
    }
</style>