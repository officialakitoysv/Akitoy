// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCzXxkU2iaj6f1ApwsClP_chkHq3yrv0L4",
    authDomain: "akitoy-f20ec.firebaseapp.com",
    projectId: "akitoy-f20ec",
    storageBucket: "akitoy-f20ec.firebasestorage.app",
    messagingSenderId: "89492565749",
    appId: "1:89492565749:web:ebd51768253fabaffa1fbc",
    measurementId: "G-4W6FLCV3N6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);