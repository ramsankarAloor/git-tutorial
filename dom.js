
let itemList = document.querySelector('#items')
//parent node
// console.log(itemList.parentNode)
itemList.parentElement.style.backgroundColor = "#d4d4d4"

//children
//better practice is to use children and not childNodes
console.log(itemList.children)
itemList.children[1].style.backgroundColor = "yellow"

//better to use firstElemectChild instead of firstChild

itemList.firstElementChild.style.fontWeight = "bold"
itemList.lastElementChild.textContent = "Hello 4"

console.log(itemList.nextElementSibling)

let newText = document.createTextNode('Hello world')

let container = document.querySelector('header .container')
let h1 = document.querySelector("header h1")

container.insertBefore(newText, h1)

let items = document.querySelector('#items')
let item1 = items.firstElementChild

items.insertBefore(newText, item1)

