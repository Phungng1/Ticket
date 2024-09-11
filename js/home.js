
let navBar = document.getElementById("nav")
let mybutton = document.getElementById("myBtn");



window.onscroll = function () { changeBackgroundColor() };

function changeBackgroundColor() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        navBar.style.backgroundColor = "rgba(0,0,0,0.9)";
    } else {
        mybutton.style.display = "none";
        navBar.style.backgroundColor = "transparent";
    }
}



import { db } from "../js/firebase.js"
import {
    setDoc, doc, 
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"

const findTrainForm = document.getElementById("find-train-form")
findTrainForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    if (findTrainForm.start.value == '' || findTrainForm.end.value == ''){
        alert("Please enter both the START and END point")
    } else if (findTrainForm.start.value != '' && findTrainForm.end.value != ''){
        setDoc(doc(db, "user_input", "input_fields"), {
            Start: findTrainForm.start.value,
            End: findTrainForm.end.value,
        }).then(()=>{
            findTrainForm.reset()            
            location.href = "../html/find_train.html"
        })
    }
})



