/**
 * The app's Firebase configuration
 */

// Import everything from firebase app
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA7VsKT-iQ3r94UXsuySc6n0hdChks3E8s",
    authDomain: "social-web-app-a8bf4.firebaseapp.com",
    projectId: "social-web-app-a8bf4",
    storageBucket: "social-web-app-a8bf4.appspot.com",
    messagingSenderId: "129508084505",
    appId: "1:129508084505:web:2d655f34ecf3b8a5035388",
    measurementId: "G-QET3Q2NLP8"
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
// Initialize the storage service
const storageService = firebase.storage()
const firestoreService = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export to use this two services in other files in the future
export { storageService, firestoreService, timestamp }


