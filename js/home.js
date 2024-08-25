let findTrainBtn = document.getElementById("find-train")
findTrainBtn.addEventListener("click", ()=>{
    location.href = "../html/find_train.html"
})

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