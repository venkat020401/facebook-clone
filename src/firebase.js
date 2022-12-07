import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA7dNSBDfzcVSVeQNrFUw39sbCFzVg03Xo",
  authDomain: "myfbclone-3601e.firebaseapp.com",
  databaseURL: "https://myfbclone-3601e-default-rtdb.firebaseio.com",
  projectId: "myfbclone-3601e",
  storageBucket: "myfbclone-3601e.appspot.com",
  messagingSenderId: "1037719148909",
  appId: "1:1037719148909:web:036b1b9d8e70cae630a264",
  measurementId: "G-EJQFYEE0SS"
});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };
