<template>
  <div class="page-todo">
    <Header />
    <div class="container">
      <Todos />
    </div>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Todos from './features/todos/todos.vue';
  import Header from './share/Header.vue';
  export default ({
    name: 'TodoApp',
    components: {
      Todos,
      Header,
    },
  });
</script>
