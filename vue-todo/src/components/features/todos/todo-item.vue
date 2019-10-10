<template>
<div class="todos-main">
  <ul class="todo-list">
    <li class="todo-item animated bounceInDown faster">
      <input type="checkbox" 
             :checked="todo.isCompleted"
             @click="onToggle(todo)">
      <label class="item-name">{{ todo.name }}</label>
      <button class="item-btn" @click="onDelete(todo)"></button>
    </li> 
  </ul>
</div>
</template>

<script lang="ts">
  export default {
  name: 'todoItem',
  props: ['todo'],
  methods: {
    onToggle(e) {
      this.$emit('onToggle', e);
    },
    onDelete(id) {
      this.$emit('deleteMe', id);
    },
  }
};
</script>
