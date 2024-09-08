import {
    getAuth,
    signOut,
    onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js"

const auth = getAuth()

const p = document.getElementsByTagName("p")

onAuthStateChanged(auth, (user)=>{
    if (user){
        const email = user.email
        console.log(email);
        p[1].innerHTML +=`
        Email: ${email}
        `
        p[0].innerHTML +=`
        Name: 
        `
    }
})

let logOutBtn = document.getElementById("log-out-button")
logOutBtn.addEventListener("click", ()=>{
    signOut(auth)
        .then(()=>{
            location.href = "../html/home.html"
        })
        .catch(error=>{
            alert(error.message);
            
        })
})