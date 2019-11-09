<template>
  <div class="login-page register-page">
    <Header />
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
            <span class="login100-form-title">Register</span>
            <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
              <input class="input100" type="text" name="username" placeholder="Username">
              <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate="Please enter password">
              <input class="input100" type="password" name="pass" placeholder="Password">
              <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate="Please enter password">
              <input class="input100" type="password" name="pass" placeholder="Confirm Password">
              <span class="focus-input100"></span>
            </div>
            <div class="container-login100-form-btn flex-col-c">
              <router-link class="login100-form-btn" to="/login">Submit</router-link>
              <router-link class="login100-form-btn" to="/login">Sign in</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './share/Header.vue';
  export default {
    name: 'Register',
    components: {
      Header
    },
  }

</script>
