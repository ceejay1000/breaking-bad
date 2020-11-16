<template>
  <div class="thumbnail">
    <img :src="character.img" :alt="character.name">
    <div class="mini-info">
      <router-link :to="{name: 'More', params:{id: character.char_id}}">{{ character.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Thumbnail",
  props: {
    character: {
      type: Object,
      required: true
    },
  },
  data(){
    return{
      
    }
  },
  computed: {
    getCharacterName(character){
      let firstName = character.name.split(" ")[0];
      let lastName = character.name.split(" ")[1];
      let fullName = lastName.length > 6 && firstName > 6 ? firstName : lastName + " " + firstName;
      return fullName;
    }
  },
}
</script>

<style>
.card {
  margin: 0;
  padding: 0;
}
img {
  height: 100%;
  width: 100%;
  display: inline-block;
  object-fit: cover;
}

.thumbnail {
  height: 200px;
  width: 200px;
  overflow: hidden;
  margin: 10px !important;
  position: relative;
  z-index: 1;
}

img {
  transition: transform .4s ease;
}

.thumbnail:hover {
  cursor: pointer;
}

.thumbnail:hover img {
  transform: scale(1.1);
}

.mini-info {
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.3);
  height: 100%;
  width: 100%;
  z-index: 3;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mini-info a {
  text-decoration: none;
  border: 1px solid #fff;
  letter-spacing: 1px;
  font-size: 18px;
  display: inline-block;
  padding: 5px 10px;
  color: #fff;
}
</style>