import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const app = firebase.initializeApp({
        apiKey: "AIzaSyDKegHyBmSLl8IcxhnHpEYigdS6_gSotcw",
        authDomain: "petproject-4e14e.firebaseapp.com",
        projectId: "petproject-4e14e",
        storageBucket: "petproject-4e14e.appspot.com",
        messagingSenderId: "498611197054",
        appId: "1:498611197054:web:8f414dac907a285c74b42f"
})

export const google = new firebase.auth.GoogleAuthProvider();