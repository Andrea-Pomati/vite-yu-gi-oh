import {reactive} from "vue";

export const store = reactive({
  
  cards: [],
  
  isLoading: true,


  ApibaseSearch: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0",

  cardNameSearch: "",

    
});