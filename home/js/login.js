// function store(){

//     var name = document.getElementById('name');
//     var pw = document.getElementById('pw');
//     var lowerCaseLetters = /[a-z]/g;
//     var upperCaseLetters = /[A-Z]/g;
//     var numbers = /[0-9]/g;
//     // let users=new Array();
//     // users=JSON.parse(localStorage.getItem(users))?JSON.parse(localStorage.getItem(users)):[]
//     // e.preventDefault();


//     if(name.value.length == 0){
//         alert('Please fill in username and password');
//         // document.getElementById('uname').innerHTML="Please fill in username";
//     }else if(pw.value.length == 0){
//         alert('Please fill in password');
//         // document.getElementById('pass').innerHTML="Please fill in password";
//     }else if(pw.value.length > 8){
//         alert('Max of 8');
//         // document.getElementById('pass').innerHTML="password should not greater than 8";
//     }else if(!pw.value.match(numbers)){
//         alert('please add 1 number');
//         // document.getElementById('pass').innerHTML="please add 1 number";
//     }else if(!pw.value.match(upperCaseLetters)){
//         alert('please add 1 uppercase letter');
//         // document.getElementById('pass').innerHTML="please add 1 uppercaseletters"
//     }else if(!pw.value.match(lowerCaseLetters)){
//         alert('please add 1 lowercase letter');
//         // document.getElementById('pass').innerHTML="please add 1 lowercaseletters"
//     }else{

//     }
// }



const form = document.getElementById("loginform");
form.addEventListener("submit", (e) => {
  e.preventDefault()

  var name = document.getElementById('name').value;
  var pass = document.getElementById('pw').value;
  // let existUsers = JSON.parse(localStorage.getItem("users"));

  // console.log(pass);
  let login = new Array();
  let loginobj = {
    loginmail: name,
    password: pass,
  }
  var storedName = JSON.parse(localStorage.getItem('users')) || [];
  let user = storedName.length && JSON.parse(localStorage.getItem('users')).find(obj => obj.email === name && obj.pw === pass);

  // var userRemember = document.getElementById("rememberMe");
  if (name.length == 0) {
    // alert('Please fill in emailID');
    document.getElementById('uname').innerHTML = "Please fill in username";

  } else if (pass.length == 0) {
    // alert('Please fill in password');
    document.getElementById('pass').innerHTML = "Please fill in password";

  } else if (user) {

    login.push(loginobj);
    alert('You are successfully logged in.');
    getUser(name);
    // localStorage.setItem("loginusers",JSON.stringify(login));     
    // localStorage.setItem()
    // window.open("dashboot.html");

  } else {
    alert("Invalid");
  }

  formData.reset()
  window.onload = hideLog();
});
// if(JSON.parse(localStorage.getItem("loginusers")==login)){
//     alert("you are already logged in")
// }else{
//     alert("you are logged in now");
// }


// const login = document.getElementById("loginform");
// login.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let email = document.getElementById('name').value;
//   let userpassword = document.getElementById("pw").value;
//   let existUsers = JSON.parse(localStorage.getItem("users"));

//   existUsers.filter((obj) => {
//     if (obj.email === email && obj.pw === userpassword) {
//       getUser(email);
//       window.open("dashboot.html");
//       // document.getElementById("err").style.display = "none";
//     } else {
//       // document.getElementById("err").innerHTML = "Invalid User!";
//       alert("invalid");
//     }
//   });

// FormData.reset
// });

// /name find
function getUser(data) {
  let existUsers = JSON.parse(localStorage.getItem("users"));

  existUsers.forEach((user) => {
    if (data === user.email) {

      let login = {
        email: document.getElementById('name').value,
        password: document.getElementById("pw").value,
        username: user.name,
        mobile: user.mob
      };
      console.log(login);
      window.localStorage.setItem("loginusers", JSON.stringify(login));
      window.open("dashboot.html");

    }
  });
}

//already login
const hideLog = () => {
  if (window.localStorage.getItem("loginusers") !== null) {
    document.getElementById("loginform").style.display = "none";
    const h2 = document.createElement("h2");
    h2.setAttribute("id", "lgHead");
    h2.innerHTML = "You Are already Logged in!";
    document.body.appendChild(h2);
    const btn = document.createElement("BUTTON");
    btn.setAttribute("id", "logout");
    btn.innerHTML = "Log out";
    document.body.appendChild(btn);
    document.getElementById("logout").addEventListener("click", () => {
      window.localStorage.removeItem("loginusers");
      window.open("login.html");
    });
  }
};


