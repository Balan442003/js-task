function logout(){
    window.localStorage.removeItem("loginusers");
    window.open("login.html");
}