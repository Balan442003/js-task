// function proadd(){
//     var pname=document.getElementById('pname');
//     var pquantity=document.getElementById('pquantity');
//     var pmrp=document.getElementById('pmrp');
//     var psale=document.getElementById('psale');
//     var regdate=document.getElementById('regdate');
//     regdate=new Date();
//     let products=new Array();
//     let productsobj={
//         pname:pname.value,
//         pquantity:pquantity.value,
//         pmrp:pmrp.value,
//         psale:psale.value,
//         date:regdate,
//     }
//     products=JSON.parse(localStorage.getItem("products"))?JSON.parse(localStorage.getItem("products")):[] 
//     if(pname.value.length == 0){
//         alert("Please Enter Product Name");
//     }else if(pquantity.value.length == 0){
//         alert("Please Enter Product Quantity");
//     }else if(pmrp.value.length == 0){
//         alert("Please Enter Product MRP Price");
//     }else if(psale.value.length == 0){
//         alert("Please Enter Product Sale Price")
//     }else{
//         products.push(productsobj);
//         localStorage.setItem('products', JSON.stringify(products));
//         alert("you are successfully registered");
//         window.open("product view.html");
//     }

// }

const form = document.getElementById("productform");

const loginData = JSON.parse(localStorage.getItem("loginusers")) || [];
userName=loginData.username;
const formData = JSON.parse(localStorage.getItem(userName)) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let productName = document.getElementById("productname").value;
  let productQty = document.getElementById("productquantity").value;
  let productMrp = parseFloat(document.getElementById("productmrp").value);
  let productSp = parseFloat(document.getElementById("productsalesprice").value);
  let productDate = document.getElementById("productcreatedate").value;
//   var productcreatedate=document.getElementById('productcreatedate');
  productDate=new Date();
  year=productDate.getFullYear();
  month=productDate.getMonth()+1;
  day=productDate.getDate();
  datevalue=`${year}-${month}-${day}`;
  
  const productId = formData.length + 1; 
  let product = {
    productId: productId,
    productName: productName,
    productQty: productQty,
    productMrp: productMrp.toFixed(2),
    productSp: productSp.toFixed(2),
    productDate: datevalue,
  };

  if(productName.length == 0){
    document.getElementById('pname').innerHTML="please enter product name";
  }else if(productQty.length == 0 ){
    document.getElementById('pqty').innerHTML="please enter product quantity";
  }else if(productMrp.length == 0 ){
    document.getElementById('pmrp').innerHTML="please enter product MRP";
  }else if(productSp.length == 0 ){
    document.getElementById('psp').innerHTML="please enter product sales price";
  }
  else{
  formData.push(product);
  console.log(formData);
  localStorage.setItem(userName, JSON.stringify(formData));
  form.reset();
  window.location.href="productview.html";
  }
});

const hideLog = () => {
  if (window.localStorage.getItem("loginusers") === null) {
    document.getElementById("productform").style.display = "none";
    const h2 = document.createElement("h2");
    h2.setAttribute("id", "lgHead");
    h2.innerHTML = "You are not logged in!";
    document.body.appendChild(h2);
    const btn = document.createElement("BUTTON");
    btn.setAttribute("id", "logout");
    btn.innerHTML = "Go to Login Page";
    document.body.appendChild(btn);
    document.getElementById("logout").addEventListener("click", () => {
      // window.localStorage.removeItem("users");
      window.open("login.html");
    });
  }
};