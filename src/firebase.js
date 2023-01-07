// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoMEVXaJz1FxPKCM2cuy-E_7cw7YIEDE8",
  authDomain: "netflix-clone-31fa3.firebaseapp.com",
  projectId: "netflix-clone-31fa3",
  storageBucket: "netflix-clone-31fa3.appspot.com",
  messagingSenderId: "212513076630",
  appId: "1:212513076630:web:77928e25a46c8d51b1d9b7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
