import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDEYe_IeerXt461HStNPPGpRmd5uO4fes8",
  authDomain: "go-go-d869c.firebaseapp.com",
  projectId: "go-go-d869c",
  storageBucket: "go-go-d869c.appspot.com",
  messagingSenderId: "137730118951",
  appId: "1:137730118951:web:2bb1a26354f0aa46484502",
  measurementId: "G-2DXC711VF4"
});

const db = firebase.firestore();

export default db;
