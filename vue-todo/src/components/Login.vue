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
                  <a class="login100-social-item bg1" @click="loginFb()">
                    <i class="icon-facebook"></i>
                  </a>
                </li>
                <li class="google">
                  <a href="#" class="login100-social-item bg3" @click="loginGg()">
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

import Header from './share/Header.vue';
import firebase from 'firebase';

export default {
  name: 'Login',
  components: {
    Header
  },
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      // firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
      //   (user) => {
      //     alert('Well done ! You are now connected');
      //     this.$router.replace('/todo-app');
      //   },
      //   (err) => {
      //     alert('0ops.' + err.message)
      //   }
      // );

       firebase.auth().signInWithEmailAndPassword(this.username.trim(), this.password.trim())
        .then(() => {
          firebase.auth().currentUser.getIdToken()
          .then((idToken) => {
            localStorage.setItem('token', idToken);
            localStorage.setItem('userId', firebase.auth().currentUser.uid);
            localStorage.setItem('checkImg', 1);
            alert('Well done ! You are now connected');
            this.$router.replace('/todo-app');
          })
        })
        .catch((error) => {
          alert('0ops.' + error.message)
        })
    },

    loginFb: function() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        console.log(result);
        localStorage.setItem('token', result.credential.accessToken);
        localStorage.setItem('userId', result.user.uid);
        localStorage.setItem('checkImg', 1);
        this.$router.replace('/todo-app');
      }).catch(function(error) {
        console.log(error);
      });
    },

    loginGg: function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((result) => {
        localStorage.setItem('token', result.credential.accessToken);
        localStorage.setItem('userId', result.user.uid);
        localStorage.setItem('checkImg', 1);
        this.$router.replace('/todo-app');
      }).catch((error) => {
        console.log(error);
      });
    },
  },
}

</script>
