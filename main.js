
let form = document.getElementById('my-form')

form.addEventListener('submit', doThis)


function doThis(e){
  e.preventDefault()
  let username = document.getElementById('name').value 
  let emailId = document.getElementById('email').value 
  let phone = document.getElementById('phone').value 

  let myObj_serialised = JSON.stringify({
    'name' : username,
    'email': emailId,
    'phone' : phone
  })

  let toBePrinted = username+' - '+emailId+' - '+phone

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
  
  localStorage.setItem(emailId, myObj_serialised)

  deleteBtn.addEventListener('click', deleteEle)
  editBtn.addEventListener('click', editEle)

  function deleteEle(e){
    let liCurrent = e.target.parentElement
    let ul = document.getElementById('items')
    localStorage.removeItem(emailId)
    ul.removeChild(liCurrent)
  }

  function editEle(e){
    let liCurrent = e.target.parentElement
    let ul = document.getElementById('items')
    localStorage.removeItem(emailId)
    ul.removeChild(liCurrent)

    document.getElementById('name').value = username
    document.getElementById('email').value = emailId
    document.getElementById('phone').value = phone


  }

  document.getElementById('name').value = ''
  document.getElementById('email').value = ''
  document.getElementById('phone').value = ''


}