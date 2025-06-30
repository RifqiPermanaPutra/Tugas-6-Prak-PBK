// File: App.vue

<template>
  <main>
    <GameTodoList />
  </main>
</template>

<script setup>
import GameTodoList from './components/GameTodoList.vue';
</script>


<style>
  body {
    background-image: url('./assets/aaa.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    

    background-color: #4f4f66;
    background-blend-mode: overlay;
  }

 
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh; 
  }
</style>