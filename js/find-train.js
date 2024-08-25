let trainOnClick = document.getElementById("train")

trainOnClick.addEventListener("click", () => {
    location.href = "../html/train.html"
})


////Get Data From Firestore
import {
    doc,
    getDocs,
    collection,
    onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"
import { db } from "./firebase.js"

const docRef = collection(db, "train_info_list")
getDocs(docRef)
    .then((snapshot)=>{
        let data = []
        snapshot.forEach((doc) => {
            data.push({id: doc.id, ...doc.data()})
            localStorage.setItem("train info", JSON.stringify(data))            
        });

        
    })
    .catch(err =>{
        console.log(err.message);
        
    })
const train_list_info = JSON.parse(localStorage.getItem("train info"))
console.log(train_list_info);
let i 
for(i=0;i<train_list_info.length;i++){
    let li = document.createElement("li")
    li.setAttribute("data-id", train_list_info[1].id);
    let dateData = formatDate(train_list_info[0].Date)
    let date = dateData.replace("lúc ", " ")
    li.innerHTML += `
            <div class="image">
                <img src="../img/transport-in-vietnam.jpg" alt="">
            </div>
            <div class="info">
                <h3>${train_list_info[1].Name}</h3>
                <p>Date: ${date}</p>
                <p>Train type: ${train_list_info[1].Type}</p>
                <span>Price: ${train_list_info[1].Price}</span> 
            </div>
    `
    let trainList = document.getElementById("train")
    trainList.appendChild(li)

}
function formatDate(date) {
    const formatDate = new Date(
            date.seconds * 1000 + date.nanoseconds / 1000000
        );
        return formatDate.toLocaleTimeString("vi", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }

    






