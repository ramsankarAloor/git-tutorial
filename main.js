
let form = document.getElementById('my-form')

form.addEventListener('submit', doThis)

function doThis(e){
  e.preventDefault()
  let username = document.getElementById('name').value 
  let emailId = document.getElementById('email').value 

  let myObj_serialised = JSON.stringify({
    'name' : username,
    'email': emailId
  })

  localStorage.setItem('my_obj', myObj_serialised)

  document.getElementById('name').value = ''
  document.getElementById('email').value = ''


}