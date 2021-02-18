let background = document.getElementById("formBackground")
let submit = document.getElementById("submit")
function closeForm() {
    background.style.visibility = "hidden"
    submit.style.visibility = "hidden"
}
function openForm() {
    background.style.visibility = "visible"
    submit.style.visibility = "visible"

}