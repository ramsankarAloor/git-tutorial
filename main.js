
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
  deleteBtn.textContent = "Delete"
  deleteBtn.className = 'btnDelete'
  let li = document.createElement('li')
  li.appendChild(textInside)
  li.appendChild(deleteBtn)
  
  let ul = document.getElementById('items')
  
  ul.appendChild(li)
  
  localStorage.setItem(emailId, myObj_serialised)

  deleteBtn.addEventListener('click', deleteEle)

  function deleteEle(e){
    let liCurrent = e.target.parentElement
    let ul = document.getElementById('items')
    localStorage.removeItem(emailId)
    ul.removeChild(liCurrent)
  }

  document.getElementById('name').value = ''
  document.getElementById('email').value = ''
  document.getElementById('phone').value = ''


}