Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore

@at-hieptran2
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


1
00at-loantruong/VueJS-Todo
Code Issues 0 Pull requests 1 Projects 0 Wiki Security Insights
VueJS-Todo/vue-pwa-todolist/src/components/TodoList.vue
@at-loantruong at-loantruong Add footer
5d38823 3 days ago
30 lines (28 sloc) 555 Bytes

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
