// src/stores/gameTodoStore.js
import { defineStore } from 'pinia'

export const useGameTodoStore = defineStore('gameTodo', {
  state: () => ({
    tasks: [
      { id: 1, text: 'Selesaikan Main Quest', game: 'The Witcher 3', isFinished: false },
      { id: 2, text: 'Farming material', game: 'Genshin Impact', isFinished: true },
      { id: 3, text: 'Coba build baru', game: 'Elden Ring', isFinished: false },
    ],
    nextId: 4,
  }),

  getters: {
    unfinishedTasksCount: (state) => {
      return state.tasks.filter(task => !task.isFinished).length
    },
    allTasks: (state) => state.tasks,
  },

  actions: {
    /**
    
     * @param {object} taskData 
     */
    addTask(taskData) {
      const { text, game } = taskData;
      if (!text || !game) return 

      this.tasks.unshift({ 
        id: this.nextId++,
        text: text,
        game: game,
        isFinished: false,
      })
    },

    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId)
    },

    toggleTaskStatus(taskId) {
      const task = this.tasks.find(task => task.id === taskId)
      if (task) {
        task.isFinished = !task.isFinished
      }
    },
  },
})