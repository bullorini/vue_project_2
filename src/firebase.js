// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDWSIDyTdSw_ccJSflZLBNzEaXlaOSpbfs",
    authDomain: "dev-vue-d9529.firebaseapp.com",
    databaseURL: "https://dev-vue-d9529-default-rtdb.firebaseio.com",
    projectId: "dev-vue-d9529",
    storageBucket: "dev-vue-d9529.appspot.com",
    messagingSenderId: "888973814113",
    appId: "1:888973814113:web:99c3b1071bc93cb9633d20"
  };

firebase.initializeApp(firebaseConfig);
export const fb = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
