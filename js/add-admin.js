import {
    collection, addDoc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"
import { db } from "./firebase.js"

const colRef = collection(db, "admin_info")

const addAdminForm = document.getElementById("add-admin-form");
addAdminForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    addDoc(colRef, {
        email: addAdminForm.email.value,
    })
    .then(()=>{
        addAdminForm.reset()
        location.href = "../html/find_train.html"
    })

})