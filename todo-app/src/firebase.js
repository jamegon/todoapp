import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDsPofkN6ewcpwt1reUfPMouW7qH2Uvt1A",
  authDomain: "todo-app-e357a.firebaseapp.com",
  databaseURL: "https://todo-app-e357a.firebaseio.com",
  projectId: "todo-app-e357a",
  storageBucket: "todo-app-e357a.appspot.com",
  messagingSenderId: "278344857070",
  appId: "1:278344857070:web:feb8399fec39e1f20d0aff"
});

const db = firebaseApp.firestore();

export default db;