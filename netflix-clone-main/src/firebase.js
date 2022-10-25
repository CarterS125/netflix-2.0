import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBnbIWCim6TtFiAbqyeOcCxCje2aWvf6dk",
  authDomain: "netflix-clone-34a9c.firebaseapp.com",
  projectId: "netflix-clone-34a9c",
  storageBucket: "netflix-clone-34a9c.appspot.com",
  messagingSenderId: "692394173390",
  appId: "1:692394173390:web:53b4343fcb96497590019f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
