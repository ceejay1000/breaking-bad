<template>
  <div class="home">
    <Navbar />
       <div v-if="!charactersIsLoaded" class="loader-parent">
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div><div class="gap-patch">
              <div class="circle"></div>
            </div><div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </div>
    <div id="main">
      <div class="container">
      <div v-if="characters">
        <div class="character-container">
          <thumbnail v-for="character in characters" :key="character.char_id" :character="character"/>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Thumbnail from "@/components/Thumbnail.vue";
import { setTimeout } from 'timers';
// This function gets all movie characters
async function getMovieCharacters(){
  const response = await fetch("https://www.breakingbadapi.com/api/characters");
  const data = await response.json();
  return data;
}

export default {
  name: "Home",
  components: {
    Navbar,
    Thumbnail
  },
  data(){
    return {
      characters: [],
      charactersIsLoaded: false,
      delayCount: 0
    }
  },
  methods: {
    setLoadingState(){
      this.charactersIsLoaded = false;
      setTimeout(() => {
        if (this.characters) this.charactersIsLoaded = true;
      },1000);
    }
  },
  mounted() {
    (async function loadCharacters(){
      this.characters = await getMovieCharacters();
      // (this.characters) await getDeathCount(this.characters.nam)
      console.log('Data',this.characters, this.charactersIsLoaded)
    }.bind(this))();
    console.log('Data', this.characters);
    this.setLoadingState();
  }
}
</script>

<style scoped>
#main {
  margin-top: 20px !important;
}

.thumbnail-enter-active,
.thumbnail-leave-active {
  transition: opacity .3s ease-out;
}

.thumbnail-enter-to,
.thumbnail-leave-to{
  opacity: 0;
}

.character-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.loader-parent {
    position: relative;
    height: 100vh;
    width: 100%;
    background: rgba(0,0,0,.01);
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
