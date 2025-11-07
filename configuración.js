import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    FIREBASE_CONFIGURATION
};

// Initialize Firebase
firebase.initializeApp({
apiKey: "AIzaSyCzXxkU2iaj6f1ApwsClP_chkHq3yrv0L4",
  authDomain: "akitoy-f20ec.firebaseapp.com",
  projectId: "akitoy-f20ec",
  storageBucket: "akitoy-f20ec.firebasestorage.app",
  messagingSenderId: "89492565749",
  appId: "1:89492565749:web:ebd51768253fabaffa1fbc",
  measurementId: "G-4W6FLCV3N6"
})

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();