<template>
  <div class="login-page register-page">
    <Header />
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
            <span class="login100-form-title">Register</span>
            <div class="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
              <input class="input100" type="text" name="username" v-model="username" placeholder="Username">
              <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate="Please enter password">
              <input class="input100" type="password" name="pass" v-model="password" placeholder="Password">
              <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100 validate-input" data-validate="Please enter password">
              <input class="input100" type="password" name="pass" v-model="confirmPassword" placeholder="Confirm Password">
              <span class="focus-input100"></span>
            </div>
            <p class="error" v-if="checkPass">The password and confirm password must be the same</p>
            <div class="container-login100-form-btn flex-col-c">
              <button type="button" class="login100-form-btn" @click="signUp()" :disabled="checkPass">Submit</button>
            </div>
            <div class="login-now">
              <span>You are already in account?</span>
              <router-link class="" to="/login"> Login Now</router-link>
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
  // import firebase from 'firebase/app';

  export default {
    name: 'Register',
    components: {
      Header
    },
    data() {
      return {
        users: new UsersService(),
        username: '',
        password: '',
        confirmPassword: '',
        checkPass: false,
      }
    },
    updated() {
      this.matchPassword();
    },
    methods: {
      signUp() {
        this.users.signUp(this.username, this.password);
      },
      matchPassword() {
        this.checkPass = true ? this.password !== this.confirmPassword : false
      }
    },
  }

</script>
