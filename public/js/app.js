

console.log("Application js has been loaded")



const weatherForm = document.querySelector('form')
const output = document.querySelector('#random')
const val = document.querySelector('#puzzle')

output.addEventListener('click',(e) => {
    val.innerHTML="<div class='progress'>" +
    "<div class='progress-bar progress-bar-striped bg-primary' role='progressbar' style='width: 100%' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'></div>" +
  "</div>"
e.preventDefault();
fetch("https://puzzle.mead.io/puzzle").then((response) => {
response.json().then((data) => {
    console.log(data)
    val.textContent=data.puzzle
})
});


})