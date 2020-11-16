<template>
  <div class="about">
    <div class="container">
    <div v-if="actor">
      <div class="row">
        <div class="col s12 m6">
          <img :src="actor.img" :alt="actor.name">
        </div>
        <div class="col s12 m6">
          <ul class="collection with-header">
            <li class="collection-header center">
              <h4 class="center">{{actor.name}}</h4>
              <div v-if="actor.nickname">
                <span>A.K.A</span>
                <h5>{{actor.nickname}}</h5>
              </div>
            </li>
            <li class="collection-item">
              Birthday: <span class="bolden">{{actor.birthday}}</span>
            </li>
            <li class="collection-item">
              Occupation: <span class="bolden">{{occupation}}</span>
            </li>
            <li class="collection-item">
              <p v-if="actor.status !== 'Deceased'">
                Status: {{actor.status}}
              </p>
              <p v-else-if="actor.status === 'Deceased'" class="center-item">
                Status: {{actor.status}} <span class="show-dead red-text">☠</span>
              </p>
              <p v-else>
                Status: <span class="bolden">No info</span>
              </p>
            </li>
            <li class="collection-item">
              Character Portrayed: <span class="bolden">{{actor.portrayed}}</span>            
            </li>
            <li class="collection-item">
              Death Count: <span class="bolden">{{deathCount}}</span>            
            </li>
            <li class="collection-item">
              Season appearance: <span class="bolden">{{actor.appearance}}</span>            
            </li>
          </ul>
          <div>
            <router-link to="/" class="btn teal white-text z-depth-0 ml-2">Back</router-link>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div v-if="!actor" class="loader-parent">
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
  </div>
</template>

<script>
//import {useRouter} from "vue-router";
export default {
  name: "More",
  data(){
    return {
      actor: null,
      id: null,
      occupation: '',
      deathCount: 0
    }
  },
  watch: {
    "$route": "fetchActorData"
  },
  mounted() {
    // Get user id when component is mounted
    this.fetchActorData();
  },
  methods: {
    fetchActorData(){
     let id = this.$route.params.id;
      fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
      .then(res => res.json())
      .then(data => {
        this.actor = data[0]; 
        this.occupation = this.formatOccupation(data[0])
        this.getDeathCount(data[0].name)
      });

    },
    getDeathCount(name){
      fetch(`https://www.breakingbadapi.com/api/death-count?name=${name}`)
      .then(response => response.json())
      .then(data => this.deathCount = data[0].deathCount)
    },
    formatOccupation(data){
      let formatedData = '';
      let lastArrayData = data.occupation[data.occupation.length - 1];
      if (data){
        for (let datum of data.occupation){
          if (datum !== lastArrayData){
            formatedData += (datum + ', ');
          }else {
            formatedData += (datum + '');
          }
        }
        return formatedData;
      } else {
        return 'none';
      }
    }
  },
}
</script>

<style scoped>
  .row {
    height: 100%;
  }

  .about {
    height: 70vh;
    margin: auto 0;
  }

  .ml-2 {
    margin-left: 20px;
  }

  img {
    height: 600px;
    width: 100%;
  }

  .show-dead {
    color: red;
    font-size: 30px;
    margin-left: 5px;
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

  .center-item {
    display: flex;
    align-items: center;
  }

  .bolden {
    font-weight: bold !important;
  }

  /* .preloader-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  } */
</style>
