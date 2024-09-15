////Get Data From Firestore
import {
    getDocs,
    collection,
    deleteDoc,
    doc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"
import { db } from "./firebase.js"
const docRef1 = collection(db, "train_info_list")
getDocs(docRef1)
    .then((snapshot) => {
        let data = []
        snapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
            localStorage.setItem("train info", JSON.stringify(data))
        });
    })
    .catch(err => {
        console.log(err.message);

    })

    

//////////////////////////////////////////////////////////////
const docRef2 = collection(db, "user_input")
getDocs(docRef2)
    .then((snapshot) => {
        let data = []
        snapshot.forEach((doc) => {
            data.push({ id: doc.id, ...doc.data() })
            localStorage.setItem("user input", JSON.stringify(data))
        });
    })
    .catch(err => {
        console.log(err.message);

    })
const train_list_info = JSON.parse(localStorage.getItem("train info"))
const user_input = JSON.parse(localStorage.getItem("user input"))



////////////////////////////////////////////////////////////////
let trainList = document.getElementById("train")
let i




////////////////////////////////////////////////////////////////
let divAdminDelete = document.getElementById("divAdmin-delete")
let divAdminAdd = document.getElementById("divAdmin-add")
import { auth } from "../js/firebase.js"
import {
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"

onAuthStateChanged(auth, (user) => {
    if (user) {

        for (i = 0; i < train_list_info.length; i++) {
            let user_input_start = user_input[0].Start.trim().toLowerCase()
            let train_info_list_start = train_list_info[i].Start.trim().toLowerCase()
            
            if (user_input_start == train_info_list_start){
                let li = document.createElement("li")
                li.setAttribute("data-id", train_list_info[i].id);
                li.innerHTML += `
                <div class="image">
                <img src="../img/transport-in-vietnam.jpg" alt="">
                </div>
                <div class="info">
                <h3>${train_list_info[i].Name}</h3>
                <span>From: <b>${train_list_info[i].Start}</b></span>
                <span>to: <b>${train_list_info[i].End}</b></span>
                <p>Date: ${train_list_info[i].Date}</p>
                <p>Train type: ${train_list_info[i].Type}</p>
                <span>Price: ${train_list_info[i].Price}</span> 
                <p><b>ID:<br> ${train_list_info[i].id}</p> 
                </div>
                `
                trainList.appendChild(li)
            }
            else{
                trainList.innerHTML += 'No train found'
            }
        }

        let deleteBtn = document.getElementById("deleteBtn")
        let deleteInputId = document.getElementById("deleteInputId")
        
        deleteBtn.addEventListener("click", ()=>{
            if (train_list_info.length > 1 && deleteInputId.value != "") {
                const docRef = doc(db, "train_info_list", deleteInputIdId.value)
                deleteDoc(docRef)
                    .then(()=>{
                        console.log(train_list_info);                   
                    })
                    .catch(error=>{
                        alert(error.message);
                    })
                    .finally(()=>{
                        let i 
                        for(i=0;i<3;i++){
                            location.reload()
                        }
                    })

            }else if (train_list_info.length > 1 && deleteInputId.value == ""){
                alert("PLease insert an ID to delete")
            }
            else{
                alert("Not enough files, cannot delete anymore!")
            }
        })
    }
    else {
        for (i = 0; i < train_list_info.length; i++) {
            let user_input_start = user_input[0].Start.trim().toLowerCase()
            let train_info_list_start = train_list_info[i].Start.trim().toLowerCase()
            
            if (user_input_start == train_info_list_start){
                let li = document.createElement("li")
                li.setAttribute("data-id", train_list_info[i].id);
                li.addEventListener("click",()=>{
                    location.href = "../html/train.html"
                })
                li.innerHTML += `
                <div class="image">
                <img src="../img/transport-in-vietnam.jpg" alt="">
                </div>
                <div class="info">
                <h3>${train_list_info[i].Name}</h3>
                <span>From: <b>${train_list_info[i].Start}</b></span>
                <span>to: <b>${train_list_info[i].End}</b></span>
                <p>Date: ${train_list_info[i].Date}</p>
                <p>Train type: ${train_list_info[i].Type}</p>
                <span>Price: ${train_list_info[i].Price}</span> 
                </div>
                `
                trainList.appendChild(li)
            }
            else{
                trainList.innerHTML += 'No train found'
            }
        }

        divAdminDelete.style.display = "none"
        divAdminAdd.style.display = "none"
    }
})











