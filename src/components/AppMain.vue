<script>
import {store} from "../store.js";
import CardItem from "./CardItem.vue";
export default {
  name: "AppMain",
  
  data() {
    return {
      
      store,
    }
  },
  components: {
    CardItem,
  },
}
</script>

<template>
  <div>
    <h1>Lista delle prime 50 carte di Yu-Gi-Oh</h1>

    <div id="cards-list">
      <CardItem v-for="(card, index) in store.cards" :card="card" :card-number="index+1"></CardItem>
    </div>


  </div>
</template>

<style lang="sass" scoped>
#cards-list
  display: flex
  flex-flow: row wrap
  
</style>