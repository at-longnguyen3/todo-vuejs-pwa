<template>
  <div class="section-todo-list">
    <ul class="list-todo">
      <li class="item-todo" v-for="index in 5" v-bind:key="index">
        <div class="item">
          <input type="checkbox" class="hidden-box" v-bind:id="index" />
          <label v-bind:for="index" class="check-label">
            <span class="check-label-box"></span>
            <span class="check-label-text">Checkbox {{index}}</span>
          </label>
        </div>
        <div class="delete-item">x</div>
      </li>
    </ul>
  </div>
</template>
<script lang='ts'>
  export default {
    name: 'List',
  };
</script>
