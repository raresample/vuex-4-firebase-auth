import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDi1VEPYul5CSAsU764JcteeZlsq2fG30U",
  authDomain: "vuex-4-firebase-auth-3f69d.firebaseapp.com",
  projectId: "vuex-4-firebase-auth-3f69d",
  storageBucket: "vuex-4-firebase-auth-3f69d.appspot.com",
  messagingSenderId: "803305362110",
  appId: "1:803305362110:web:acee0d85e8ceea836044ef"
}

// initialize firebase
initializeApp(firebaseConfig)

// initialize firebase auth
const auth = getAuth()

export { auth }