import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyAKcBiTHJKYD-IPUmpK5fVCbCfGgR0Rspw",
  authDomain: "instagram-clone-react-ebfc5.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-ebfc5.firebaseio.com",
  projectId: "instagram-clone-react-ebfc5",
  storageBucket: "instagram-clone-react-ebfc5.appspot.com",
  messagingSenderId: "124086308370",
  appId: "1:124086308370:web:45df3f6ef02782b6c8d2cb",
  measurementId: "G-58NHV32QTY"
});

const db =firebaseApp.firestore();
const auth = firebase.auth();
const storage=firebase.storage();

export {db, auth, storage};
