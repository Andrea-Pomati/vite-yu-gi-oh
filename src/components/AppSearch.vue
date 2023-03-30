<script>
import {store} from "../store.js";

export default {
    name: "AppSearch",

    data() {
        return {
            search:  "",

            store,


        }
    },

    emits: ['userSearch'],
}

</script>

<template> 
    
    <div id="search">
        <input v-model="store.cardNameSearch" type="text" placeholder="Ricerca la tua carta per nome" @keyup.enter="$emit('userSearch')">
        <button @click="$emit('userSearch')">Cerca</button>

    </div>


</template>


<style lang="sass">

#search
    display: flex
    flex-flow: row no-wrap
    gap: 10px
    padding: 20px
    border-bottom: 1px solid #555
    margin-bottom: 2em

    input
        width: 200px



</style>
