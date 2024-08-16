<template>
    <div><h1>{{score}}</h1></div>
    
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
    </style>
    
    
    
    
    