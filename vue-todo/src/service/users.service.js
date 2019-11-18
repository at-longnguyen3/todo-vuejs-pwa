import { auth, firestore } from './configFirebase.js';
import firebase from 'firebase';
import router from './../router/index.js';

export class UsersService {
  signIn(username, password) {
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then(() => {
        auth.currentUser.getIdToken()
          .then((idToken) => {
            localStorage.setItem('token', idToken);
            localStorage.setItem('userId', firebase.auth().currentUser.uid);
            localStorage.setItem('checkImg', 1);
            alert('Well done ! You are now connected');
            router.push('/todo-app');
          })
      })
      .catch((error) => {
        alert('0ops.' + error.message)
      })
  }

  signUp(username, password) {
    firebase.auth().createUserWithEmailAndPassword(username, password).then(
      (user) => {
        alert('Your account has been is created');
        router.push('/login');
      },
      (err) => {
        alert('0ops.' + err.message)
      }
    );
  }

  loginFb() {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
      this.setStorage(result);
      router.push('/todo-app');
    })
  }

  loginGg() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
      this.setStorage(result);
      router.push('/todo-app');
    }).catch((error) => {
      console.log(error);
    });
  }

  setStorage(result) {
    localStorage.setItem('token', result.credential.accessToken);
    localStorage.setItem('userId', result.user.uid);
    localStorage.setItem('checkImg', 1);
  }
}
