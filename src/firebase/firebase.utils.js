import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDlUIWdaVzUqp8Ud8NmcnGByd6Nnzzezy4",
  authDomain: "react-e-commerce-8a37b.firebaseapp.com",
  databaseURL: "https://react-e-commerce-8a37b.firebaseio.com",
  projectId: "react-e-commerce-8a37b",
  storageBucket: "react-e-commerce-8a37b.appspot.com",
  messagingSenderId: "893005843641",
  appId: "1:893005843641:web:849afc904f4a0a9daa9f68",
  measurementId: "G-XYLPX14KC1"
};

firebase.initializeApp(config)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;