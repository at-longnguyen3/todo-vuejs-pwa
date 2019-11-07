<template>
<div class="page-todo">
  <div class="todos">
    <Header />
    <div class="page-main">
      <div class="container">
        <todoHeader @addTodo="add($event)"
                    @selectTodos="onToggleAll()"/>
        <todoItem v-for="(todo, index) in todos"
                  :todo="todo" 
                  @deleteMe="deleteTodo($event)"
                  @onToggle="toggle($event)"/>
      </div>
    </div>
    <Footer @onFinish="onChange($event)" 
            :counter="counter"
            :action="action"/>
  </div>
</div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import todoHeader from './features/todos/todo-header.vue';
  import todoItem from './features/todos/todo-item.vue';
  import Footer from './share/Footer.vue';
  import Header from './share/Header.vue';
  export default ({
    name: 'TodoApp',
    components: {
      todoHeader,
      todoItem,
      Footer,
      Header
    },
    data() {
      return {
        todos: [],
        filterTodos: [],
        counter: Number,
        action: '',
      };
    },
    created() {
      this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
      this.countTodos();
    },
    methods: {
      add(e) {
        if (JSON.parse(localStorage.getItem('todos'))) {
          this.todos = JSON.parse(localStorage.getItem('todos'));
          this.todos = [e, ...this.todos];
          this.filterTodos = [...this.todos];
          this.saveTodosToLocalStorage(this.filterTodos);
          this.countTodos();
          this.action = 'all';
        } else {
          this.todos = [e, ...this.todos];
          this.filterTodos = [...this.todos];
          this.saveTodosToLocalStorage(this.filterTodos);
          this.countTodos();
          this.action = 'all';
        }
      },
      deleteTodo(e) {
        if(this.todos) {
          this.todos = this.todos.filter(item => item.id !== e.id);
        }
        let termDelete = JSON.parse(localStorage.getItem('todos'));
        if(termDelete) {
          termDelete = termDelete.filter(item => {
            return item.id !== e.id;
          });
        }
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
        this.countTodos();
      },
      onToggleAll() {
        this.todos.forEach(todo => {
          todo.isCompleted = true;
          this.saveTodosToLocalStorage(this.todos);
          this.countTodos();
        });
      },
      countTodos() {
        if(this.todos) {
          this.counter = this.todos.reduce((obj, item) => {
            item.isCompleted ? obj.completed++ : obj.active++;
            return obj;
          }, { active: 0, completed: 0 });
        }
      },
      onChange(e) {
        this.action = e;
        switch(this.action) {
          case 'completed':
          if(JSON.parse(localStorage.getItem('todos'))) {
            this.todos = JSON.parse(localStorage.getItem('todos')).filter(item => {
              return item.isCompleted === true;
            });  
          }
          break;
          case 'active':
            if(JSON.parse(localStorage.getItem('todos'))) {
              this.todos = JSON.parse(localStorage.getItem('todos')).filter(item => {
                return item.isCompleted === false;
              });          
            }
          break;
          case 'all':
            this.todos = JSON.parse(localStorage.getItem('todos'));
          break;
          case 'clear':
            if(this.todos) {
              this.todos = this.todos.filter(item => item.isCompleted === false);
            }
            let termClear = JSON.parse(localStorage.getItem('todos'));
            if(termClear) {
              termClear = termClear.filter(item => {
                return item.isCompleted === false;
              });
            }
            this.saveTodosToLocalStorage(termClear);
          break;
        }
        this.countTodos();
      }
    },
  });
</script>
<style lang="scss">
</style>
