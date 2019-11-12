<template>
  <div class="todos-footer">
    <ul class="todos-footer-toolbar">
      <li>	
        <span><span class="n-counter">{{ counter.active }}</span> item(s)</span>
      </li>	
      <li class="toolbar-item" @click="onFilter('all')" :class="{active:visibility == 'all'}">	
        <i class="icon-clipboard-list"></i>	
        <p>All Tasks</p>
      </li>	
      <li class="toolbar-item" @click="onFilter('active')" :class="{active:visibility == 'active'}">	
        <i class="icon-document-time"></i>	
        <p>Active</p>
      </li>	
      <li class="toolbar-item" @click="onFilter('completed')" :class="{active:visibility == 'completed'}">	
        <i class="icon-clipboard-checked"></i>
        <p>Completed</p>
      </li>	
      <li class="toolbar-item" @click="onFilter('clear')" :class="{active:visibility == 'clear'}">	
        <i class="icon-clipboard-remove"></i>
        <p>Clear completed</p>
      </li>	
    </ul>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Footer',
    props: ['counter','action'],
    data() {
      return {
        visibility: 'all',
      };
    },
    updated() {
      this.visibility = this.action;
    },
    methods: {
      onFilter(e) {
        this.$emit('onFinish', e);
        this.visibility = e;
      },
    },
  };
</script>
