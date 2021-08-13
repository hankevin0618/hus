import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyDrICxenlVfwbaIN-KR2dE_MoYrzY1IRl8",
    authDomain: "hus-fb.firebaseapp.com",
    projectId: "hus-fb",
    storageBucket: "hus-fb.appspot.com",
    messagingSenderId: "282388248517",
    appId: "1:282388248517:web:b854c85aea206ed7663dac",
    measurementId: "G-91KBN4N2X3"
};

export default firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const fbFireStore = firebase.firestore();
export const storageService = firebase.storage();
export const realtimeDB = firebase.database();