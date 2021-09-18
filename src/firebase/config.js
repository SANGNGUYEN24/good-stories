/**
 * The app's Firebase configuration
 */

// Import everything from firebase app
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGE_SENDER_ID,
    appId: FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
// Initialize the storage service
const storageService = firebase.storage()
const firestoreService = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export to use this two services in other files in the future
export { storageService, firestoreService, timestamp }


