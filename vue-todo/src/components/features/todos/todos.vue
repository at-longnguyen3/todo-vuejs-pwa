<template>
  <div class="todos">
    <div class="container">
      <todoHeader @addTodo="add($event)"/>
      <todoItem v-for="(todo, index) in todos"
                :todo="todo" 
                @deleteMe="deleteTodo($event)"
                @onToggle="toggle($event)"/>
      <todoFooter @onFinish="onChange($event)" />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import todoHeader from './todo-header.vue';
  import todoItem from './todo-item.vue';
  import todoFooter from './todo-footer.vue';

  export default ({
    name: 'Todos',
    components: {
      todoHeader,
      todoItem,
      todoFooter
    },
    data() {
      return {
        todos : []
      };
    },
    created() {
      this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    },
    methods: {
      add(e) {
        this.todos = [e, ...this.todos];
        this.saveTodosToLocalStorage(this.todos);
      },
      deleteTodo(e) {
        console.log(123)
        this.todos = this.todos.filter(item => item.id !== e.id);
        this.saveTodosToLocalStorage(this.todos);
      },
      saveTodosToLocalStorage(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
      },
      toggle(e) {
        this.todo = this.todos.map(a => {
          if(a.id === e.id) {
            a.isCompleted = !a.isCompleted;
          }
        });
        localStorage.setItem('todos', JSON.stringify(this.todos));
      },
      onChange(e) {
        console.log(e)
        switch(e) {
          case 'completed':
            this.todos = JSON.parse(localStorage.getItem('todos'));
            this.todos = this.todos.filter(item => {
              return item.isCompleted === true;
            });
            break;
          case 'active':
            this.todos = JSON.parse(localStorage.getItem('todos'));
            this.todos = this.todos.filter(item => {
              return item.isCompleted === false;
            });
            break;
          case 'all':
            this.todos = JSON.parse(localStorage.getItem('todos'));
            break;
          case 'clear':
            this.todos = this.todos.filter(item => item.isCompleted === false);
            this.saveTodosToLocalStorage(this.todos);
            break;
          default:
            // code block
        }
      }
    },
  });
</script>

<style lang="scss">
</style>
