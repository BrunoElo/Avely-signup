let x = document.getElementById("pwordeye");
let p = document.getElementById("userpword");

// Toggle password visibility
x.addEventListener('click', myFunction)
function myFunction() {

    if (p.type === "password") {
        p.type = "text";
    } else {
        p.type = "password";
    }
}

/*
// This is to load google custom sign in button (also add ?onload=renderButton in the script in head tag)
function onSuccess(googleUser) {
    console.log("Logged in as: " + googleUser.getBasicProfile().getName());
}
function onFailure(error) {
    console.log(error);
}
function renderButton() {
    gapi.signin2.render('gbtn', {
        'scope': 'profile email',
        'width': 143,
        'height': 51,
        'longtitle': false,
        'theme': 'light',
        'onsuccess': onSuccess,
        'onFailure': onFailure
    });
}*/

