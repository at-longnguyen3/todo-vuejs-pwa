<template>
  <div class="todos-header">
    <!-- <i class="icon-chevron-down1"></i> -->
    <!-- <span class="form-add-task-style" @click="onToggleAll()"></span> -->
    <form @submit.prevent="addTodo()">
      <input  class="task-name" 
              placeholder="Add item ... " 
              v-model="newTodo"
              value="">
    </form>	
  </div>
</template>

<script lang="ts">
  import Todo from '../../../models/todo.js';

  export default {
    name: 'todoHeader',
    // props: ['value'],
    data() {
      return {
        newTodo: this.value,
      };
    },
    methods: {
      addTodo() {
        if(this.newTodo !== '') {
          this.$emit('addTodo', new Todo(this.newTodo));
        }
        this.newTodo = '';
      },
      onToggleAll() {
        this.$emit('selectTodos');
      }
    },
  };
</script>
