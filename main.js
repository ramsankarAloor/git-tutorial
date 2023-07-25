
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

  let toBePrinted = username+'-'+emailId+'-'+phone

  let textInside = document.createTextNode(toBePrinted)
  let li = document.createElement('li')
  li.classname = "item"
  li.appendChild(textInside)
  
  let ul = document.getElementById('items')

  ul.appendChild(li)

  localStorage.setItem(emailId, myObj_serialised)

  document.getElementById('name').value = ''
  document.getElementById('email').value = ''
  document.getElementById('phone').value = ''


}