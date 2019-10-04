<template>
  <div class="page-todo">
    <Header />
    <main class="page-main">
      <div class="container">
        <Form />
        <List />
      </div>
    </main>
    <Footer />
  </div>
</template>
<script lang="ts">
  import Vue from 'vue';
  import Header from './share/Header.vue';
  import Footer from './share/Footer.vue';
  import Form from './features/Form.vue';
  import List from './features/List.vue';
  export default ({
    name: 'TodoApp',
    components: {
      Header,
      Footer,
      Form,
      List,
    },
  });
</script>
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
