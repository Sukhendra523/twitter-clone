import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDOICRIO-fdBcjWZjPH4MSRhrffIM1vGWU",
  authDomain: "twitter-clone-19745.firebaseapp.com",
  databaseURL: "https://twitter-clone-19745.firebaseio.com",
  projectId: "twitter-clone-19745",
  storageBucket: "twitter-clone-19745.appspot.com",
  messagingSenderId: "830981370092",
  appId: "1:830981370092:web:18199a4afcb78a638c35c9",
  measurementId: "G-2Y90YSBZVQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
