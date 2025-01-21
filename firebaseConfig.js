// NOTE YOU CAN REMOVE THE ANALYTICS IMPORT 
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Additional imports to initialize Firebase 
// NOTE YOU CAN REMOVE THE ANALYTICS variable 
export const auth = getAuth(app);
export const db = getFirestore(app);