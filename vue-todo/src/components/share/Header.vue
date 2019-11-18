<template>
  <div class="page-header">
    <div class="container">
      <div class="content-header">
        <a class="page-logo">
          <img class="logo desktop-only" src="../../assets/logo/logo-1x.png" alt="FUA PWA">
          <img class="logo mobile-only" src="../../assets/logo/logo-2x.png" alt="FUA PWA">
        </a>
        <h1 class="page-title title-art insetshadow">Todos List</h1>
        <div class="button-logout" v-if="checkImg">
          <a @click="logout()"> Logout</a>
        </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default ({
    name: 'Header',
    data() {
      return {
        checkImg: '',
        checkMenu: false,
      };
    },
    created() {
      this.checkImg = localStorage.getItem('checkImg') ? JSON.parse(localStorage.getItem('checkImg')) : '';
    },
    methods: {
      logout() {
        localStorage.clear();
        this.$router.replace('/login');
      },
      showMenu() {
        this.checkMenu = !this.checkMenu;
      }
    },
  });
</script>
