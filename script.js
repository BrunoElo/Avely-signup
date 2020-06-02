let x = document.getElementsByClassName("pwordeye")[0];
let y = document.getElementsByClassName("pwordeye")[1];
let p = document.getElementById("userpword");
x.setAttribute('style', "visibility:hidden;")
// Toggle password visibility
x.addEventListener('click', myFunction); // hide password (eye slash)
y.addEventListener('click', myFunction); // show password (eye)
function myFunction() {

    if (p.type === "password") {
        p.type = "text";
        y.setAttribute('style', "visibility:hidden;")
        x.setAttribute('style', "visibility:visible;")
    } else {
        p.type = "password";
        y.setAttribute('style', "visibility:visible;")
        x.setAttribute('style', "visibility:hidden;")
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

