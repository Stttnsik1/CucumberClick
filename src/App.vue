<template>
  <div><h1>{{score}}</h1></div>
  <center>
  <button class="click" @click="click()"><img class="Cucumber" src="https://i.postimg.cc/L8h57Z2R/IMG-0722.png" width="250px" height="250px"></button>
  </center>
  

  <center><div class="container">
  <router-link to="/task"><button class="task">Task</button></router-link>
  <router-link to="/home"><button class="game">Game</button></router-link>
  <router-link to="/"><button class="ref">Ref</button></router-link>
  </div>
  </center>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
  
    setup() {
      const score = ref(localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0);
  
      const click = () => {
        score.value += 1;
        saveScore();
      };
  
      const saveScore = () => {
        localStorage.setItem('score', score.value);
      };
  
      return {
        score,
        click,
      };
    },
  };
  </script>
  
  <style scoped>
  .body {
      text-align: center;
  }
  
  div {
      text-align: center
      
  }
  .click {
    margin-top: 150px;
    border: none;
    background-image: url("https://i.postimg.cc/DzkhgWzx/IMG-0723.jpg");
    cursor: pointer;
  }
  .game {
    width: 133px;
    height: 80px;
    border-radius: 25px;
    border: none;
    background-color: rgb(87, 87, 87);
    color: rgb(255, 255, 255);
    cursor: pointer;
  }
  </style>
  
  
  
  
  