// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import{ getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHy0o0_D9QS_l3SEZTOUjj6Cfn8COqKE8",
  authDomain: "lc-hn-9b983.firebaseapp.com",
  projectId: "lc-hn-9b983",
  storageBucket: "lc-hn-9b983.appspot.com",
  messagingSenderId: "815202859965",
  appId: "1:815202859965:web:b90c1e8dd62f50be74b0d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
export{
  app,
  db,
  auth,
}


