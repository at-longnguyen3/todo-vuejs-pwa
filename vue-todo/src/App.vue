<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/images/logo.png"> -->
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

<style lang="scss">

</style>
