<template>
  <div class="login-page">
    <Header />
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
            <span class="login100-form-title">Login</span>
            <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
              <input class="input100" type="text" name="username" placeholder="Username">
              <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate="Please enter password">
              <input class="input100" type="password" name="pass" placeholder="Password">
              <span class="focus-input100"></span>
            </div>
            <div class="">
              <span class="txt1">
                Forgot
              </span>
              <a href="#" class="txt2">
                Username / Password?
              </a>
            </div>
            <div class="container-login100-form-btn">
              <router-link class="login100-form-btn" to="/todo-app">Sign in</router-link>
            </div>
            <div>
              <ul class="list-share">
                <li class="facebook">
                  <a href="#" class="login100-social-item bg1">
                    <i class="icon-facebook"></i>
                  </a>
                </li>
                <li class="twitter">
                  <a href="#" class="login100-social-item bg2">
                    <i class="icon-twitter"></i>
                  </a>
                </li>
                <li class="google">
                  <a href="#" class="login100-social-item bg3">
                    <i class="icon-google"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="flex-col-c p-t-170 p-b-40">
              <span class="txt1 p-b-9">
                Don’t have an account?
              </span>
              <router-link class="txt3" to="/register">Sign up now</router-link>
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
  name: 'Login',
  components: {
    Header
  },
}

</script>
