let background = document.getElementById("formBackground")
let submit = document.getElementById("submit")
function closeForm() {
    background.style.visibility = "hidden"
}
function submitF() {
    if ((document.getElementById("name").value != "") && (document.getElementById("email").value != "")) {
        background.style.visibility = "hidden"
    }

}
function openForm() {
    background.style.visibility = "visible"

}
let sum = 2
var foot = document.getElementById("footy")
let footertxt = document.getElementById("footerTxt")
let expand = document.getElementById("expand")
let arrow = document.getElementById("expandArrow")
function footerOpen() {



    if (sum % 2 == 0) {

        foot.style.marginBottom = "0"
        sum++
        expand.innerHTML = "collapse"
        footertxt.innerHTML = "Thanks for reading The Times"
        footertxt.style.fontWeight = "900"
        arrow.classList = ""
        arrow.classList.add("col")

    }
    else {
        foot.style.marginBottom = "-200px "
        sum++
        footertxt.style.fontWeight = "100"
        expand.innerHTML = "expand"
        footertxt.innerHTML = "Access more of The Times by creating a free account or logging in."
        arrow.classList = ""
        arrow.classList.add("exp")

    }

}
window.onscroll = function () { scrollFunc() };

function scrollFunc() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("navbar1").style.visibility = "hidden"
        document.getElementById("navbar2").style.visibility = "visible";
    } else {
        document.getElementById("navbar1").style.visibility = "visible"
        document.getElementById("navbar2").style.visibility = "hidden";
    }
}