<template>
  <div class="login-page">
    <Header />
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
            <span class="login100-form-title">Login</span>
            <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
              <input class="input100" type="text" name="username" v-model="username" placeholder="Username">
              <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate="Please enter password">
              <input class="input100" type="password" name="pass" v-model="password" placeholder="Password">
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
              <button type="button" class="login100-form-btn" @click="login()">Sign in</button>
            </div>
            <div>
              <ul class="list-share">
                <li class="facebook">
                  <a class="login100-social-item bg1" @click="users.loginFb()">
                    <i class="icon-facebook"></i>
                  </a>
                </li>
                <li class="google">
                  <a href="#" class="login100-social-item bg3" @click="users.loginGg()">
                    <i class="icon-google"></i>
                  </a>
                </li>
                <li class="twitter">
                  <a href="#" class="login100-social-item bg2">
                    <i class="icon-twitter"></i>
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

import Header from './../share/Header.vue';
import firebase from 'firebase';
import { UsersService } from '../../service/users.service.js'
import { firestore, auth } from '../../service/configFirebase.js'

export default {
  name: 'Login',
  components: {
    Header
  },
  data() {
    return {
      users: new UsersService(),
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.users.signIn(this.username.trim(), this.password.trim());
    }
  }
}

</script>
