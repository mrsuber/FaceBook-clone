// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyAiunj5vqeoJwK7uLOidPNXEF5RrqilKbA",
  authDomain: "facebook-clone-a97e2.firebaseapp.com",
  projectId: "facebook-clone-a97e2",
  storageBucket: "facebook-clone-a97e2.appspot.com",
  messagingSenderId: "197296547637",
  appId: "1:197296547637:web:d18a2a804d6b7457dbce7c",
  measurementId: "G-J3MHZT109N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
export {auth,provider}
export default db
