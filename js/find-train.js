////Get Data From Firestore
import {
    getDocs,
    collection,
    deleteDoc,
    doc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"
import { db } from "./firebase.js"

const docRef = collection(db, "train_info_list")
getDocs(docRef)
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


const train_list_info = JSON.parse(localStorage.getItem("train info"))
console.log(train_list_info);

function formatDate(date) {
    const formatDate = new Date(
        date.seconds * 1000 + date.nanoseconds / 1000000
    );
    return formatDate.toLocaleTimeString("vi", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

let trainList = document.getElementById("train")
if (train_list_info.length == ""){
    trainList.innerHTML+=`
    No train found
    `
}

import { auth } from "../js/firebase.js"
import {
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"

let divAdmin = document.getElementById("divAdmin")

onAuthStateChanged(auth, (user) => {
    if (user) {
        let i
        for (i = 0; i < train_list_info.length; i++) {
            let li = document.createElement("li")
            li.setAttribute("data-id", train_list_info[i].id);
            // let dateData = formatDate(train_list_info[i].Date)
            // let date = dateData.replace("lúc ", " ")
            li.innerHTML += `
            <div class="image">
            <img src="../img/transport-in-vietnam.jpg" alt="">
            </div>
            <div class="info">
            <h3>${train_list_info[i].Name}</h3>
            <p>Date: ${train_list_info[i].Date}</p>
            <p>Train type: ${train_list_info[i].Type}</p>
            <span>Price: ${train_list_info[i].Price}</span> 
            <p><b>ID:<br> ${train_list_info[i].id}</p> 
            </div>
            `
            trainList.appendChild(li)
        }

        let deleteBtn = document.getElementById("deleteBtn")
        let deleteInput = document.getElementById("deleteInput")

        deleteBtn.addEventListener("click", ()=>{
            if (train_list_info.length > 1 && deleteInput.value != "") {
                const docRef  = doc(db, "train_info_list", deleteInput.value)
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

            }else if (train_list_info.length > 1 && deleteInput.value == ""){
                alert("PLease insert an ID to delete")
            }
            else{
                alert("Not enough files, cannot delete anymore!")
            }
        })
    }
    else {
        let i
        for (i = 0; i < train_list_info.length; i++) {
            let li = document.createElement("li")
            li.setAttribute("data-id", train_list_info[i].id);
            // let dateData = formatDate(train_list_info[i].Date)
            // let date = dateData.replace("lúc ", " ")
            li.innerHTML += `
            <div class="image">
            <img src="../img/transport-in-vietnam.jpg" alt="">
            </div>
            <div class="info">
            <h3>${train_list_info[i].Name}</h3>
            <p>Date: ${train_list_info[i].Date}</p>
            <p>Train type: ${train_list_info[i].Type}</p>
            <span>Price: ${train_list_info[i].Price}</span> 
            </div>
            `
            trainList.appendChild(li)
        }
        divAdmin.style.display = "none"
    }
})











