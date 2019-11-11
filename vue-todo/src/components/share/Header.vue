<template>
  <div class="page-header">
    <div class="container">
      <div class="content-header">
        <a class="page-logo">
          <img class="logo desktop-only" src="../../assets/logo/logo-1x.png" alt="FUA PWA">
          <img class="logo mobile-only" src="../../assets/logo/logo-2x.png" alt="FUA PWA">
        </a>
        <h1 class="page-title title-art insetshadow">Todos List</h1>
        <div class="avata-user dropdown">
          <img src="./../../assets/images/user.jpg" alt="user">
          <ul class="dropdown-content">
            <li>
              <a href="#">MyPage</a>
            </li>
            <li>
              <router-link to="/login">Logout</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>
<script lang="ts">
  export default ({
    name: 'Header',
  });
</script>
