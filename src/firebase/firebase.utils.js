import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyADSKWCZUVY2pyfPXcmzsdt2aIcp2wGuPU",
    authDomain: "zm-garment-db.firebaseapp.com",
    databaseURL: "https://zm-garment-db.firebaseio.com",
    projectId: "zm-garment-db",
    storageBucket: "zm-garment-db.appspot.com",
    messagingSenderId: "693818538383",
    appId: "1:693818538383:web:682c30d23a5ee1b06133fa",
    measurementId: "G-PY7TJLV50P"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;