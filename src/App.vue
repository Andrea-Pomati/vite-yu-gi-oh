<script>
import {store} from "./store.js";
import axios from "axios";
import AppMain from "./components/AppMain.vue";
import AppLoader from "./components/AppLoader.vue";
import AppSearch from "./components/AppSearch.vue";
export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppMain,
    AppLoader,
    AppSearch
  },
  created() {
    
    axios.get(this.store.ApibaseSearch).then((response) => {
      
      console.log(response.data.data);
      this.store.cards = response.data.data;

      this.store.isLoading = false;
    });


  },

  methods: {

    searchName() {
      

      if(this.cardNameSearch != "") {

        let newParameters = "&fname=" + this.store.cardNameSearch;

        console.log(newParameters);

        axios.get(this.store.ApibaseSearch + newParameters).then((response) => {
          this.store.cards = response.data.data


        })

      } else {

        axios.get(this.store.ApibaseSearch).then((response) => {
          this.store.cards = response.data.data
        
        });


      }


    
    },

  },
}
</script>

<template>
 
  <AppLoader v-if="store.isLoading"></AppLoader>

  <AppSearch @userSearch="searchName()"></AppSearch>

  <div>

    <AppMain></AppMain>


  </div>
</template>

<style lang="scss" scoped>
</style>