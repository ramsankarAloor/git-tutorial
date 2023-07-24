
// query selector //

let secondItem = document.querySelector("li:nth-child(2)")

secondItem.style.backgroundColor = "green"

let thirdItem = document.querySelector("li:nth-child(3)")

thirdItem.style.display = "none"

// query selector all //

let items = document.querySelectorAll("li")

// console.log(items)

items[1].style.color = "green"

for(let i=0; i<items.length; i++){
    if((i+1)%2===1){
        items[i].style.backgroundColor = "green"
    }
}