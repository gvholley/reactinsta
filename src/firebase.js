import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD36An4pSkfaOAKypF1v2oZdUJY_9I_mMU",
  authDomain: "reactinsta-e5ec7.firebaseapp.com",
  databaseURL: "https://reactinsta-e5ec7-default-rtdb.firebaseio.com",
  projectId: "reactinsta-e5ec7",
  storageBucket: "reactinsta-e5ec7.appspot.com",
  messagingSenderId: "191811453044",
  appId: "1:191811453044:web:e88ad6c0b9288033aa9121"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

/* export default db; */
