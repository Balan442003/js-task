// const hideLog = () => {
//     if (window.localStorage.getItem("users") !== null) {
//         document.getElementById("form").style.display = "none";
//         const h2 = document.createElement("h2");
//         h2.setAttribute("id", "lgHead");
//         h2.innerHTML = "You Are already Register in!";
//         document.body.appendChild(h2);
//         const btn = document.createElement("BUTTON");
//         btn.setAttribute("id", "logout");
//         btn.innerHTML = "Log out";
//         document.body.appendChild(btn);
//         document.getElementById("logout").addEventListener("click", () => {
//             window.localStorage.removeItem("users");
//             window.open("register.html");
//         });
//     }
// };

// const form = document.getElementById("form");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();


//     var name = document.getElementById('name');
//     var pw = document.getElementById('pw');
//     var fname = document.getElementById('fname');
//     var lname = document.getElementById('lname');
//     var email = document.getElementById('email');
//     var cpw = document.getElementById('cpw');
//     var mob = document.getElementById('mob');
//     var regdate = document.getElementById('regdate');
//     regdate = new Date();
//     // var emailexp = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/g;
//     var lowerCaseLetters = /[a-z]/g;
//     var upperCaseLetters = /[A-Z]/g;
//     var numbers = /[0-9]/g;
//     // var radios = document.getElementsByName('s1');
//     // var rates = document.getElementById('rates').value;
//     // var s1_value;
//     // if(rates == 'Male'){
//     //     s1_value = document.getElementById('r1').value;

//     // }else{
//     //     s1_value = document.getElementById('r2').value;
//     // }

//     // var indian = /[6-9]/g;
//     let users = new Array();
//     let usersobj = {
//         name: name.value,
//         fname: fname.value,
//         lname: lname.value,
//         email: email.value.toLowerCase(),
//         pw: pw.value,
//         cpw: cpw.value,
//         mob: mob.value,
//         date: regdate,
//         // gender:s1_value,
//     }
//     users = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
//     // e.preventDefault();
//     // document.getElementById('submit').onclick = function() {
//     //     var radios = document.getElementsByName('contact');
//     //     for (var radio of radios)
//     //     {
//     //         if (radio.checked) {
//     //             alert(radio.value);
//     //             console.log(radio.value)
//     //         }
//     //     }
//     // }

//     if (name.value.length == 0) {
//         // alert('Please fill in username');
//         document.getElementById('uname').innerHTML = "Please fill in username";

//     } else if (fname.value.length == 0) {
//         // alert('Please fill in firstname');
//         document.getElementById('finame').innerHTML = "Please fill in firstname";

//     } else if (lname.value.length == 0) {
//         // alert('Please fill in lname');
//         document.getElementById('liname').innerHTML = "Please fill in lastname";

//     } else if (pw.value.length == 0) {
//         // alert('Please fill in password');
//         document.getElementById('pass').innerHTML = "Please fill in password";
//     } else if (pw.value.length > 8) {
//         // alert('Min  of 8');
//         document.getElementById('pass').innerHTML = "password should not greater than 8";

//     } else if (!pw.value.match(numbers)) {
//         // alert('please add number');
//         document.getElementById('pass').innerHTML = "please add 1 number";

//     } else if (!pw.value.match(upperCaseLetters)) {
//         // alert('please add 1 uppercase letter');
//         document.getElementById('pass').innerHTML = "please add 1 uppercaseletters"

//     } else if (!pw.value.match(lowerCaseLetters)) {
//         // alert('please add 1 lowercase letter');
//         document.getElementById('pass').innerHTML = "please add 1 lowercaseletters"
//     } else if (email.value.length == 0) {
//         // alert('please enter a valid email');
//         document.getElementById('mail').innerHTML = "please enter mail ID"
//     } else if (pw.value != cpw.value) {
//         // alert('Please fill in correct password');
//         document.getElementById('cpass').innerHTML = "Please fill in password";
//     }
//     else if (mob.value.length == 0 || mob.value.length > 10) {
//         // alert('Please fill in mobile 0 to 10 number');
//         document.getElementById('mobile').innerHTML = "Please fill in password";
//     }else {
//         users.push(usersobj);
//         localStorage.setItem('users', JSON.stringify(users));
//         alert("you are successfully registered");
//         formData.reset()
//         window.onload = hideLog();
//         window.open("login.html");

//     }

// });

const user = JSON.parse(localStorage.getItem("users")) || [];
var regdate = document.getElementById('regdate');
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    regdate.value = `${day}/${month}/${year}`;


const validateform = () => {
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    var cpw = document.getElementById('cpw');
    var mob = document.getElementById('mob');
    // var regdate = document.getElementById('regdate');

    // regdate = new Date();
    // dateyear = regdate.getFullYear();
    // datemonth = regdate.getMonth() + 1;
    // datedate = regdate.getDate();
    // date.value = `${datedate}-${datemonth}-${dateyear}`;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (name.value.length == 0) {
        // alert('Please fill in username');
        document.getElementById('uname').innerHTML = "Please fill in username";
        return false;
    } else if (fname.value.length == 0) {
        // alert('Please fill in firstname');
        document.getElementById('finame').innerHTML = "Please fill in firstname";
        return false;
    } else if (lname.value.length == 0) {
        // alert('Please fill in lname');
        document.getElementById('liname').innerHTML = "Please fill in lastname";
        return false;
    } else if (pw.value.length == 0) {
        // alert('Please fill in password');
        document.getElementById('pass').innerHTML = "Please fill in password";
        return false;
    } else if (pw.value.length > 8) {
        // alert('Min  of 8');
        document.getElementById('pass').innerHTML = "password should not greater than 8";
        return false;
    } else if (!pw.value.match(numbers)) {
        // alert('please add number');
        document.getElementById('pass').innerHTML = "please add 1 number";
        return false;
    } else if (!pw.value.match(upperCaseLetters)) {
        // alert('please add 1 uppercase letter');
        document.getElementById('pass').innerHTML = "please add 1 uppercaseletters"
        return false;
    } else if (!pw.value.match(lowerCaseLetters)) {
        // alert('please add 1 lowercase letter');
        document.getElementById('pass').innerHTML = "please add 1 lowercaseletters"
        return false;
    } else if (email.value.length == 0) {
        // alert('please enter a valid email');
        document.getElementById('mail').innerHTML = "please enter mail ID"
        return false;
    } else if (pw.value != cpw.value) {
        // alert('Please fill in correct password');
        document.getElementById('cpass').innerHTML = "Please fill in password";
    }
    else if (mob.value.length == 0 || mob.value.length > 10) {
        // alert('Please fill in mobile 0 to 10 number');
        document.getElementById('mobile').innerHTML = "Please fill in password";
        return false;
    } else {
        return true;
    }
};

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateform()) {
        let email = document.getElementById("email").value;
        let name = document.getElementById("name").value;
        if (isNameAlreadyExists(name)){
            alert("UserName is aleady exists");
            return;
        }else if(isEmailAlreadyExists(email)) {
            alert("Email is already exists.");
            return;
        }
        let formData = {
            name: document.getElementById('name').value,
            pw: document.getElementById('pw').value,
            fname: document.getElementById('fname').value,
            lname: document.getElementById('lname').value,
            email: document.getElementById('email').value.toLowerCase(),
            cpw: document.getElementById('cpw').value,
            mob: document.getElementById('mob').value,
            regdate :document.getElementById('regdate').value,
        }
        user.push(formData);
        console.log(user);
        localStorage.setItem("users", JSON.stringify(user));
        window.open('login.html');

        form.reset();
    }
});

function isEmailAlreadyExists(email) {
    var email = document.getElementById('email').value;
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    return existingUsers.some(
        (user) => user.email.toLowerCase() === email.toLowerCase()
    );
}

function isNameAlreadyExists(name) {
    var name = document.getElementById('name').value;
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    return existingUsers.some(
        (user) => user.name === name
    );
}


