
let form = document.getElementById('my-form')

form.addEventListener('submit', doThis)


function doThis(e){
  e.preventDefault()
  let amount = document.getElementById('amount').value 
  let description = document.getElementById('description').value 
  let catagory = document.getElementById('dropdown').value 

  let myObj_serialised = JSON.stringify({
    'amount' : amount,
    'description': description,
    'catagory' : catagory
  })

  let toBePrinted = amount+' - '+description+' - '+catagory

  let textInside = document.createTextNode(toBePrinted)
  let deleteBtn = document.createElement('button')
  let editBtn = document.createElement('button')
  deleteBtn.textContent = "Delete"
  editBtn.textContent = 'Edit'
  deleteBtn.className = 'btnDelete'
  editBtn.className = 'btnDelete'
  let li = document.createElement('li')
  li.appendChild(textInside)
  li.appendChild(deleteBtn)
  li.appendChild(editBtn)
  
  let ul = document.getElementById('items')
  
  ul.appendChild(li)
  
  localStorage.setItem(description, myObj_serialised)

  deleteBtn.addEventListener('click', deleteEle)
  editBtn.addEventListener('click', editEle)

  function deleteEle(e){
    let liCurrent = e.target.parentElement
    let ul = document.getElementById('items')
    localStorage.removeItem(description)
    ul.removeChild(liCurrent)
  }

  function editEle(e){
    let liCurrent = e.target.parentElement
    let ul = document.getElementById('items')
    localStorage.removeItem(description)
    ul.removeChild(liCurrent)

    document.getElementById('amount').value = amount
    document.getElementById('description').value = description
    document.getElementById('dropdown').value = catagory


  }

  document.getElementById('amount').value = ''
  document.getElementById('description').value = ''
  document.getElementById('dropdown').value = 'Food'


}