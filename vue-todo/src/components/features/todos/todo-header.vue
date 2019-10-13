<template>
  <div class="todos-header">
    <!-- <i class="icon-chevron-down1"></i> -->
    <span class="add-icon"></span>
    <form class="form-add-task" @submit.prevent="addTodo()">
      <input  class="task-name" 
              placeholder="What needs to be done?" 
              v-model="newTodo"
              value="">
      <button class="new-task mobile-only"><i class="i-plus"></i></button>
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
    },
  };
</script>
