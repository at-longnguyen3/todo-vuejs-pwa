<template>
  <div class="todos">
    <todoHeader @addTodo="add($event)"/>
    <todoItem v-for="(todo, index) in todos"
              :todo="todo" 
              @deleteMe="deleteTodo($event)"
              @onToggle="toggle($event)"
              />
    <todoFooter @onFinish="onChange($event)" />
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
        todos: [],
        filterTodos: [],
      };
    },
    created() {
      this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    },
    methods: {
      add(e) {
        this.todos = [e, ...this.todos];
        this.filterTodos = [...this.todos];
        this.saveTodosToLocalStorage(this.filterTodos);
      },
      deleteTodo(e) {
        this.todos = this.todos.filter(item => item.id !== e.id);
        let termDelete = JSON.parse(localStorage.getItem('todos'));
        termDelete = termDelete.filter(item => {
          return item.id !== e.id;
        });
        this.saveTodosToLocalStorage(termDelete);
      },
      saveTodosToLocalStorage(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
      },
      toggle(e) {
        this.todos = this.todos.map(item => {
          if (item.id === e.id) {
            item.isCompleted = !item.isCompleted;
          }
          return item
        });
        let term = JSON.parse(localStorage.getItem('todos')).map(item => {
          if (item.id === e.id) {
            item.isCompleted = e.isCompleted;
          }
          return item;
        });
        this.saveTodosToLocalStorage(term);
      },
      onChange(e) {
        switch(e) {
          case 'completed':
            this.todos = JSON.parse(localStorage.getItem('todos')).filter(item => {
              return item.isCompleted === true;
            });
            // this.todos = termCompleted;
            // localStorage.setItem('todos', JSON.stringify(this.todos));
            break;
          case 'active':
            this.todos = JSON.parse(localStorage.getItem('todos')).filter(item => {
              return item.isCompleted === false;
            });
            // this.todos = termActive;
            // localStorage.setItem('todos', JSON.stringify(this.todos));            
            break;
          case 'all':
            this.todos = JSON.parse(localStorage.getItem('todos'));
            break;
          case 'clear':
            this.todos = this.todos.filter(item => item.isCompleted === false);
            let termClear = JSON.parse(localStorage.getItem('todos'));
            termClear = termClear.filter(item => {
              return item.isCompleted === false;
            });
            this.saveTodosToLocalStorage(termClear);
            break;
          // default: this.saveTodosToLocalStorage(this.todos); 
          //   break;
        }
      }
    },
  });
</script>

<style lang="scss">
  @import "./../../../assets/style/styles.scss";
</style>
