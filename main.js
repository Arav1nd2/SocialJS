let loginForm, username, password;


window.onload = function() {
    let loginState = localStorage.getItem("loginStatus");
    if(loginState === "true") {
        window.location = "admin.html";
    }
    loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        console.log("Form Submitted")
        username = document.getElementById("username");
        password = document.getElementById("password");
        console.log("heyy");    
        if( username.value === "Bob") {
            if( password.value === "iamawesome") {
                localStorage.setItem("loginStatus", true );
                console.log("login success");
                window.location = "admin.html";
            } else {
                let alert = document.getElementById("msg-alert");
                alert.style.display = "block";
                alert.innerText = "Invalid Credentials!";
            }
        } else {
            let alert = document.getElementById("msg-alert");
            alert.style.display = "block";
            alert.innerText = "Invalid Credentials!";
        }
    });
}