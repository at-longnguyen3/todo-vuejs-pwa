<template>
  <div class="todos-footer">
    <ul class="todos-footer-toolbar">
      <li class="toolbar-item counter">	
        <strong class="n-counter">{{ counter.active }}</strong> item(s) left	
      </li>	
      <li class="toolbar-item">	
        <button class="toolbar-btn" @click="onFilter('all')">	
          <i class="i-clean-filter"></i>	
          All Tasks	
        </button>	
      </li>	
      <li class="toolbar-item">	
        <button class="toolbar-btn" @click="onFilter('active')">	
          <i class="i-tasks"></i>	
          Active	
        </button>	
      </li>	
      <li class="toolbar-item">	
        <button class="toolbar-btn" @click="onFilter('completed')">	
          <i class="i-tasks-done"></i>	
          Completed	
        </button>	
      </li>	
      <li class="toolbar-item cleaner">	
        <button class="guardian" @click="onFilter('clear')">
            <i class="i-tasks-closing"></i>
            Clear completed
        </button>
      </li>	
    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Footer',
    props: ['counter'],
    methods: {
      onFilter(e) {
        this.$emit('onFinish', e);
      }
    },
  };
</script>
