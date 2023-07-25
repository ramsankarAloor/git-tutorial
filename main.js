
let form = document.getElementById('my-form')

form.addEventListener('submit', doThis)

function doThis(e){
  e.preventDefault()
  let username = document.getElementById('name').value 
  let emailId = document.getElementById('email').value 

  localStorage.setItem('name', username)
  localStorage.setItem('email', emailId)

  document.getElementById('name').value = ''
  document.getElementById('email').value = ''
}