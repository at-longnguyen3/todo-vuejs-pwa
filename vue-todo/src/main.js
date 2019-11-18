import Vue from 'vue';
import App from './App.vue';
import router from './router'
import firebase from 'firebase';
import './assets/style/styles.scss';
import './registerServiceWorker';
import firestore from 'firebase';

Vue.config.productionTip = false;

// const config = {
//   apiKey: "AIzaSyBnGfr45Qvi3yt5S30ahkwAntTL0FlXJ1U",
//   authDomain: "todos-app-2b22f.firebaseapp.com",
//   databaseURL: "https://todos-app-2b22f.firebaseio.com",
//   projectId: "todos-app-2b22f",
//   storageBucket: "todos-app-2b22f.appspot.com",
//   messagingSenderId: "551052142983",
//   appId: "1:551052142983:web:9cc4ca98d81fcf0e358b22",
//   measurementId: "G-1JL1WX8186"
// };

// firebase.initializeApp(firebaseConfig);

// // const firebaseApp = firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
