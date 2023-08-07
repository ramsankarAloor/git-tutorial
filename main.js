let form = document.getElementById("my-form");
let sum = 0
form.addEventListener("submit", doThis);

function addMember(memberObj) {
  let toBePrinted =
    memberObj.price + " - " + memberObj.product + '  ';

  let textInside = document.createTextNode(toBePrinted);
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete Product";
  let li = document.createElement("li");
  li.appendChild(textInside);
  li.appendChild(deleteBtn);

  let ul = document.getElementById("items");

  ul.appendChild(li);

  deleteBtn.addEventListener("click", deleteEle);

  function deleteEle(e) {
    let liCurrent = e.target.parentElement;
    let ul = document.getElementById("items");
    ul.removeChild(liCurrent);
    axios
      .delete(
        `https://crudcrud.com/api/7793b69ddb824f17a597f48fbad7dfb9/productDetails/${memberObj._id}`
      ).then(()=>{
        sum -= Number(memberObj.price)
        displaySum()
      })
      .catch((err) => {
        console.log(err);
      });
  }


  
}

axios.get("https://crudcrud.com/api/7793b69ddb824f17a597f48fbad7dfb9/productDetails")
.then((res)=>{
  for(let i=0; i<res.data.length; i++){
    sum += Number(res.data[i].price)
    addMember(res.data[i])
  }
  displaySum()
})
.catch((err)=>{
  console.log(err)
})



function doThis(e) {
  e.preventDefault();
  
  let price = document.getElementById("price").value
  let product = document.getElementById("product").value

  let obj = {
    price : price,
    product : product
  };

  axios.post("https://crudcrud.com/api/7793b69ddb824f17a597f48fbad7dfb9/productDetails", obj)
  .then((res)=>{
    addMember(res.data)
    sum += Number(res.data.price)
    displaySum()
  })
  .catch(err=>{
    console.log(err)
  })

  document.getElementById("price").value = "";
  document.getElementById("product").value = "";
}

function displaySum(){
  document.getElementById("suminput").value = sum
}

