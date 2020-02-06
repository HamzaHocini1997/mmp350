const loginEmail = document.getElementById("login-email")
const loginPassword = document.getElementById("login-password")
const loginButton = document.getElementById("login-button")
const loginMessage = document.getElementById("login-message")
const userName = document.getElementById("user-name")


// console.log(loginEmail.value, loginPassword.value);
//  loginMessage.textContent = "You logged in"; 
loginButton.onclick = function(){
	fb.login ( loginEmail.value, loginPassword.value);
};

function onError(errorMessage) {
	loginMessage.textContent = errorMessage;
}
function userLoggedIn (uid, displayName) {
	userName.textContent = "Welcome" + displayName
}