<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/images/logo.png">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    TodoList
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
