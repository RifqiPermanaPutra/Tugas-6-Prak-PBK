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
    background-image: url('C:\Users\ASUS ROG\OneDrive\Documents\Visual Studio Code\pertemuan7\satu\src\assets\aaa.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    
    /* Optional: Membuat background sedikit lebih gelap agar komponen lebih menonjol */
    background-color: #34344a;
    background-blend-mode: overlay;
  }

  /* === TAMBAHKAN STYLE DI BAWAH INI === */
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh; /* KUNCI UTAMA: Memastikan wadah mengisi seluruh tinggi layar */
  }
</style>