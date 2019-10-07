<template>
  <div class="filters">
    <button class="btn btn-all" v-on:click="filterTodos('all')">All</button>
    <button class="btn btn-complete" v-on:click="filterTodos('complete')">Complete</button>
    <button class="btn btn-incomplete" v-on:click="filterTodos('incomplete')">Incomplete</button>
    <button class="btn btn-clearall" v-on:click="filterTodos('clearall')">ClearAll</button>
  </div>
</template>
<script lang="ts">
  export default ({
    name: 'Footer',
  });
</script>
