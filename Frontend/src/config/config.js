/* import * as firebase from 'firebase'; */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBT09pnd64HuNOVzl7XhVa9KI5V4pv5C9Q",
    authDomain: "agrocart-ca60a.firebaseapp.com",
    projectId: "agrocart-ca60a",
    storageBucket: "agrocart-ca60a.appspot.com",
    messagingSenderId: "881411886334",
    appId: "1:881411886334:web:bd6b9ecec2618580f069af",
    measurementId: "G-H127QS79PG"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
