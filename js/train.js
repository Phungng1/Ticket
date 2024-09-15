import { db } from "../js/firebase.js"
import {
    addDoc, collection,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js"
let reservation_list = []
const reserveForm = document.getElementById("reserve-form")
reserveForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let reservation_info = {
        name: reserveForm.name.value,
        email: reserveForm.email.value,
        phone_number: reserveForm.phone_num.value,
        number_of_seats: reserveForm.num_of_seat.value
    }
    reservation_list.append(reservation_info)
    .then(()=>{
        localStorage.setItem("reservation_list", JSON.stringify(reservation_list))
    })
    .then(()=>{alert("to localStorage")})
})