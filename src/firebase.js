import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAqgx6g1xosVxxc6elxT9h3xWUX3kTnZ4Q",
    authDomain: "react-ecommerce-1203e.firebaseapp.com",
    databaseURL: "https://react-ecommerce-1203e.firebaseio.com",
    projectId: "react-ecommerce-1203e",
    storageBucket: "react-ecommerce-1203e.appspot.com",
    messagingSenderId: "361700868494",
    appId: "1:361700868494:web:e6e58e1133127dbed4e4df"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export { db,storage,auth }