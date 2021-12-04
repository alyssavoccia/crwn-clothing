import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBt1HDMGQ3gYPMNIbBZ3RvvIUVl63N8olI",
  authDomain: "crwn-db-833c1.firebaseapp.com",
  projectId: "crwn-db-833c1",
  storageBucket: "crwn-db-833c1.appspot.com",
  messagingSenderId: "520004092814",
  appId: "1:520004092814:web:00a8a33e789b716d899adf",
  measurementId: "G-7D74Y3NYZR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;