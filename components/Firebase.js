import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA3pUQZX0jXFQhNO3vVFVUISwjt96DFzVs",
    authDomain: "fir-auth-aissist.firebaseapp.com",
    projectId: "fir-auth-aissist",
    storageBucket: "fir-auth-aissist.appspot.com",
    messagingSenderId: "934303173196",
    appId: "1:934303173196:web:86001b3b1fa039ea0102e9"
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth();
const db = firebase.firestore();

// db.collection('testsdata').get().then((snapshot) =>{
//     snapshot.docs.forEach(doc  =>{
//         console.log(doc.data());
//     })

//     // console.log(db.collections);

// });


export { auth, db };
