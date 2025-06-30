<template>
  <div class="game-todo-app">
    <header class="app-header">
      <h1>Todo List Game</h1>
      <p>Daftar tugas untuk game yang akan dimainkan</p>
    </header>

    <form @submit.prevent="handleAddTask" class="task-form">
      <div class="input-group">
        <input
          type="text"
          v-model="newTask.text"
          placeholder="e.g., Kalahkan boss terakhir"
          required
        />
        <input
          type="text"
          v-model="newTask.game"
          placeholder="e.g., Elden Ring"
          required
        />
      </div>
      <button type="submit">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        <span>Tambah Tugas</span>
      </button>
    </form>

    <div class="task-stats">
        Tugas Belum Selesai: <strong>{{ store.unfinishedTasksCount }}</strong>
    </div>

    <ul class="task-list">
      <li
        v-for="task in store.allTasks"
        :key="task.id"
        class="task-item"
        :class="{ 'finished': task.isFinished }"
      >
        <div class="task-content" @click="store.toggleTaskStatus(task.id)">
          <span class="task-text">{{ task.text }}</span>
          <span class="task-game">{{ task.game }}</span>
        </div>
        <button @click="store.deleteTask(task.id)" class="delete-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
        </button>
      </li>
    </ul>

  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useGameTodoStore } from '../stores/gameTodoStore'; 

const store = useGameTodoStore();

const newTask = reactive({
  text: '',
  game: ''
});

const handleAddTask = () => {
  store.addTask({ ...newTask });
  // Reset form
  newTask.text = '';
  newTask.game = '';
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');


:root {
  --bg-primary: #ffffff;       
  --bg-secondary: #f2f3f5;     
  --bg-card: #4A5568;          
  --text-primary: #EDF2F7;    
  --text-secondary: #A0AEC0;   
  --accent-primary: #4299E1;   
  --accent-secondary: #63B3ED; 
  --danger: #E53E3E;
  --finished-text: #718096;
}

.game-todo-app {
  max-width: 700px;
  margin: 50px auto;
  padding: 2rem;
  background-color:#ffffff; 
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  font-family: 'Poppins', sans-serif;
  color: var(--text-primary);
  border: 1px solid #f8faff; 
}

.app-header {
  text-align: center;
  margin-bottom: 2rem;
}

.app-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #6182bd;
  margin: 0;
}

.app-header p {
  color: var(--text-secondary);
  font-size: 1rem;
}

.task-form {
  margin-bottom: 2rem;
}

.input-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

}

.task-form input {
  width: 100%;
  padding: 14px 18px;
  background-color: var(--bg-card); 
  border: 1px solid #6182bd;
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
}

.task-form input::placeholder {
  color: #6182bd;
}

.task-form input:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px #ffffff;
}

.task-form button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 14px;
  background-color:  #e8e9eb;
  color: #161515;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.task-form button:hover {
  background-color: var(--accent-secondary);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px #6182bd;
}

.task-stats {
    text-align: center;
    margin-bottom: 1.5rem;
    color: var(--text-secondary);
    background-color: #e8e9eb; 
    padding: 0.75rem;
    border-radius: 8px;
}

.task-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2c313d; 
  color: #a9071a;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  border-left: 5px solid var(--accent-primary);
}

.task-item:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 10px rgba(4, 8, 106, 0.3);
}

.task-item.finished {
  background-color: var(--bg-primary);
  border-left-color: var(--finished-text);
}

.task-item.finished .task-text,
.task-item.finished .task-game {
  text-decoration: line-through;
  color: var(--finished-text);
}

.task-content {
  cursor: pointer;
  flex-grow: 1;
}

.task-text {
  display: block;
  font-size: 1.1rem;
  font-weight: 500;
  color: #ffffff;
  transition: color 0.3s ease;

}

.task-game {
  display: block;
  font-size: 0.9rem;
  color: #6182bd;
  font-weight: 400;
  margin-top: 4px;
}

.delete-btn {
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.delete-btn:hover {
  color: var(--danger);
  background-color:#FFFFFF;
}
</style>