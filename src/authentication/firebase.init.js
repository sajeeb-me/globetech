import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAGHbpemGE7SFSXVd9rzb9Z5hWMJ9fkuZE",
    authDomain: "globeteck-93881.firebaseapp.com",
    projectId: "globeteck-93881",
    storageBucket: "globeteck-93881.appspot.com",
    messagingSenderId: "145927475920",
    appId: "1:145927475920:web:b5595e86e0bf7d617484d5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;