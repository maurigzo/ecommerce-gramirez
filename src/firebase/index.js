import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBFQWaEXa69hRWnJj1HciOUMV3ppjLcHdQ",
    authDomain: "ecommerce-gramirez.firebaseapp.com",
    databaseURL: "https://ecommerce-gramirez.firebaseio.com",
    projectId: "ecommerce-gramirez",
    storageBucket: "ecommerce-gramirez.appspot.com",
    messagingSenderId: "629537438401",
    appId: "1:629537438401:web:c8de3d187c5f0e412bb240"
});

export function getFirebase(){
    return app;
};

export function getFirestore(){
    return firebase.firestore(app);
};