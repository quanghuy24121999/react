import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBHXES0O73sxmoHpskLZCA5aXfjkv4Otxk",
    authDomain: "myreactnativeapp-61fe9.firebaseapp.com",
    projectId: "myreactnativeapp-61fe9",
    storageBucket: "myreactnativeapp-61fe9.appspot.com",
    messagingSenderId: "457786878833",
    appId: "1:457786878833:web:80dab3b0c01d8ef96464d0",
    measurementId: "G-4201H6GFVB"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);