//Examine document object

let headerTitle = document.getElementById("header-title")

headerTitle.textContent = "New Title"
headerTitle.innerText = 'Good bye friends'

headerTitle.style.borderBottom = "solid 2px black"

let addItems = document.querySelector(".title")

console.log(addItems)

addItems.innerHTML = "<b>ADD ITEM</b>"
addItems.style.color = "green"