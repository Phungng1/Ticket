let navBar = document.getElementById("nav")

navBar.innerHTML += `
    <div class="logo" id="logo"><a href="../html/home.html">vietexpress</a></div>
    <div class="tabs" id="tabs">
        <div id="home">Home</div>
        <div id="cart">Cart</div>
        <div id="schedule">Schedule</div>
        <div id="about">About</div>
        <div id="login-register"></div>
    </div>
    <button id="myBtn" onclick="topFunction()">Top</button>

`

let homeButton = document.getElementById("home")
let cartButton = document.getElementById("cart")
let scheduleButton = document.getElementById("schedule")
let aboutButton = document.getElementById("about")
let divLoginRegister = document.getElementById("login-register")



homeButton.addEventListener("click", () => {
    location.replace("../html/home.html")
})
cartButton.addEventListener("click", () => {
    location.replace("../html/cart.html")
})
scheduleButton.addEventListener("click", () => {
    location.replace("../html/schedule.html")
})
aboutButton.addEventListener("click", () => {
    location.replace("../html/about.html")
})

let logo = document.getElementById("logo")

logo.addEventListener("click", () => {
    location.replace("../html/home.html")
})

import { auth } from "../js/firebase.js"
import {
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"


onAuthStateChanged(auth, (user) => {
    if (!user) {
        divLoginRegister.innerHTML += `
                <div id="login">Login</div>
                <div id="register">Register</div>   
            `
        let loginBtn = document.getElementById("login")
        let registerBtn = document.getElementById("register")
        loginBtn.addEventListener("click", () => {
            location.replace("../html/login.html")
        })
        registerBtn.addEventListener("click", () => {
            location.replace("../html/register.html")
        })
    } else {
        divLoginRegister.innerHTML += `
                <a href="../html/user.html" id="register">User</a>
            `
    }

})

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { topBtnFunction() };

function topBtnFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

let footer = document.getElementById("footer")
footer.innerHTML += `
        <h1>Send us a feedback</h1>
        <section>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Train information</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Station</a></li>
            </ul>
            <form action="submit">
                <label for="name">Name</label> <br>
                <input type="text" id="name" placeholder="Your name here"><br>
                <label for="">Feedback</label><br>
                <textarea type="text" id="feedback" placeholder="Tell us what you think"></textarea>
                <button type="button">Send</button>
            </form>
        </section>
`