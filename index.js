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