<template>
    <main> 
        <div v-if="loading">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
        <div v-if="error" class="text-red-500"> {{error}} </div>
        <div v-if="data">
            <div v-for="book in data" :key="book.url">
                <RouterLink :to="`/books/${getId(book.url)}`">{{book.name}}</RouterLink>
        </div>

        </div>
    </main>
</template>

<script>
import axios from "axios";

export default {
 name: "Home",
 data() {
     return {
         data: null,
         loading: false,
         error: null,
     };
 },
 methods: {
     async getBooks() {
        this.loading = true 
        this.error = null
        try{
             const {data} = await axios("https://www.anapioficeandfire.com/api/books")
             this.data = data;
         } catch (error) {
             this.error = error;
         } finally {
             this.loading = false;
         }
     },
     getId(url) {
         return url.split("/").reverse()[0];
     },
 },
 mounted () {
     this.getBooks()
 },
};
</script>
