console.log("ĐÂY LÀ Register");

//import cac ham den tu firebase de lap tirnh tinh nang xac thucj nguoi dung

import { app, auth } from "./firebase.js"

import {
    createUserWithEmailAndPassword,
    sendEmailVerification,

} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const controller = {}
const registerForm = document.querySelector("#register-form")
const lowerCaseLetter = /[a-z]/g
const upperCaseLetter = /[A-Z]/g
const number = /[0-9]/g

registerForm.addEventListener("submit", (event) => {
    event.preventDefault()
    controller.register = (dataSignUp) => {
        //Check the username
        if (dataSignUp.username == "") {
            document.getElementById("username-error").innerText = "Please enter your username"
        } else {
            document.getElementById("username-error").innerText = ""
        }
        //Check the email
        if (dataSignUp.email == "") {
            document.getElementById("email-error").innerHTML = "Please enter your email address"
        } else {
            document.getElementById("email-error").innerText = ""
        }
        //Check the password
        if (dataSignUp.password == "") {
            document.getElementById("password-error").innerText = "Please enter a password"
        } else {
            document.getElementById("password-error").innerText = ""
        }
        //Check password confirmation
        if (dataSignUp.confirmPassword !== dataSignUp.password) {
            document.getElementById("confirm-password-error").innerText = "The confirm password does not fit the password"
        } else {
            document.getElementById("confirm-password-error").innerText = ""
        }
        //Check password criteria
        if (dataSignUp.password.length < 6) {
            document.getElementById("password-error").innerText = "Your password must be at least 6 characters long"
        } else if (!dataSignUp.password.match(lowerCaseLetter)) {
            document.getElementById("password-error").innerText = "Your password must contain a lowercase letter"
        } else if (!dataSignUp.password.match(upperCaseLetter)) {
            document.getElementById("password-error").innerText = "Your password must contain an uppercase letter"
        } else if (!dataSignUp.password.match(number)) {
            document.getElementById("password-error").innerText = "Your password must contain a number"
        } else {
            if (
                dataSignUp.username !== "" &&
                dataSignUp.email !== "" &&
                dataSignUp.password !== "" &&
                dataSignUp.confirmPassword !== ""

            ) {
                return dataSignUp
            }
        }

    }


    const a = {
        username: registerForm.username.value.trim(),
        email: registerForm.email.value.trim(),
        password: registerForm.password.value,
        confirmPassword: registerForm.confirmPassword.value,
    }
    console.log(a);
    controller.register(a)

    const dataSignUpInfo = controller.register(a)

    createUserWithEmailAndPassword(
        auth,
        dataSignUpInfo.email,
        dataSignUpInfo.password
    ).then((userCredential) => {
        alert("Verification email sent")
        const user = userCredential.user
        sendEmailVerification(user)
        .then(async (credential)=>{
            const user = credential.user;
            await user.emailVerified
            window.location.href = "../html/home.html"
        })
      
    }).catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
    })
    registerForm.reset()

})

    

