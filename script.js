console.log("Hunter's Den Restaurant Website Loaded Successfully");


function sendMessage(){

    alert("Message Sent Successfully!");
}


function loginUser(){

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    if(email === "" || password === ""){

        alert("Please fill all login details");

    }else{

        alert("Login Successful!");
    }
}


function registerUser(){

    let name = document.getElementById("name").value;

    let email = document.getElementById("registerEmail").value;

    let password = document.getElementById("registerPassword").value;

    if(name === "" || email === "" || password === ""){

        alert("Please fill all register details");

    }else{

        alert("Registration Successful!");

        showLogin();
    }
}


function showRegister(){

    document.getElementById("loginBox").style.display = "none";

    document.getElementById("registerBox").style.display = "block";
}


function showLogin(){

    document.getElementById("registerBox").style.display = "none";

    document.getElementById("loginBox").style.display = "block";
}
