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
  import firebase from 'firebase';
  import { todosService } from '../service/todos.service.js'

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
        todosService: new todosService(),
        todos: [],
        filterTodos: [],
        counter: Number,
        action: 'all',
      };
    },
    created() {
      this.countTodos();
      this.getTodo();
    },
    methods: {
      getTodo: function() {
        this.todosService.getTodo()
        .get()
        .then((data) => {
          data.forEach((doc) => {
            const obj = {
              id: doc.id,
              name: doc.data().name,
              isCompleted: doc.data().isCompleted,
            }
            this.todos.push(obj);
          });
          this.filterTodos = [...this.todos];
        })
        .catch((error) => {
          console.log(error);
        })
      },
      add(e) {
        this.todosService.addTodo(e)
        .then((res) => {
          this.todos.push({
            id: res.id,
            name: e.name,
            isCompleted: false
          });
          this.filterTodos = this.todos;
        })
        .catch((error) => {
          console.log(error);
        })
      },
      deleteTodo(e) {
        this.todosService.deleteTodo(e)
        .then(() => {
          this.todos.splice(this.todos.indexOf(e), 1);
        })
        .catch((error) => {
          console.log(error);
        })
      },
      toggle(e) {
        this.todosService.toggleTodo(e);
        this.todos = this.todos.map(item => {
          if(item.id === e.id) {
            item.isCompleted = !item.isCompleted;
          }
          return item;
        })
      },
      // onToggleAll() {
      //   this.todos.forEach(todo => {
      //     todo.isCompleted = true;
      //     this.saveTodosToLocalStorage(this.todos);
      //     this.countTodos();
      //   });
      // },
      countTodos() {
        if(this.todos) {
          this.counter = this.todos.reduce((obj, item) => {
            item.isCompleted ? obj.completed++ : obj.active++;
            return obj;
          }, { active: 0, completed: 0 });
        }
      },
      onChange(e) {
        let filtered = this.todos;
        this.action = e;
        switch(this.action) {
          case 'completed':
            this.todos = this.filterTodos.filter((e) => { return e.isCompleted === true; });
          break;
          case 'active':
            this.todos = this.filterTodos.filter((e) => { return e.isCompleted === false; });
          break;
          case 'all':
            this.todos = this.filterTodos;
          break;
          case 'clear':
            this.todosService.clearActive(e)
            .get()
            .then((querySnapshot) => {
              const batch = firebase.firestore().batch();
              querySnapshot.forEach((doc) => {
                batch.delete(doc.ref)
              });
              batch.commit().then(() => {
                this.todos = this.filterTodos = this.filterTodos.filter((e) => !e.isCompleted);
              });
            })
          break;
        }
        this.countTodos();
      }
    },
  });
</script>
<style lang="scss">
</style>
