import {
    collection, addDoc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"
import { db } from "./firebase.js"

const colRef = collection(db, "train_info_list")

const addTrainForm = document.getElementById("add-train-form");
addTrainForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    addDoc(colRef, {
        Start: addTrainForm.start.value,
        End: addTrainForm.end.value,
        Name: addTrainForm.name.value,
        Date: addTrainForm.date.value,
        Type: addTrainForm.type.value,
        Price: addTrainForm.price.value,
    })
    .then(()=>{
        addTrainForm.reset()
        location.href = "../html/find_train.html"
    })

})