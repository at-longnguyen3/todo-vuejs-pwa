import { auth, firestore } from './configFirebase.js';
import firebase from 'firebase';
import router from '../router/index.js';

export class todosService {
  getTodo() {
    return firebase.firestore().collection("todos").where('userId', '==', localStorage.getItem('userId'));
  }

  addTodo(e) {
    const add = firebase.firestore().collection("todos").add({
      name: e.name,
      isCompleted: false,
      userId: localStorage.getItem('userId')
    })
    return add;
  }

  deleteTodo(e) {
    return firebase.firestore().collection("todos").doc(e.id).delete();
  }

  toggleTodo(e) {
    const toggle = firebase.firestore().collection("todos").doc(e.id).set({
      userId: localStorage.getItem('userId'),
      name: e.name,
      isCompleted: !e.isCompleted
    });
    return toggle;
  }

  clearActive() {
    const clear = firebase.firestore().collection('todos')
      .where('isCompleted', '==', true)
      .where('userId', '==', localStorage.getItem('userId'));
    return clear;
  }
}
