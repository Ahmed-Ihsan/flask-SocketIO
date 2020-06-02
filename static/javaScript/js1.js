// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

var user__name = localStorage.getItem('user_name');
if (user__name) {
	 location.replace("http://127.0.0.1:5000//sign up")
	 //document.getElementById("OutUser").innerHTML = UserLogin;
}

function login() {
		var UserLogin = document.getElementById('user_login').value;
		var PasswordLogin= document.getElementById('password_login').value;
		if (UserLogin && PasswordLogin) {
		  		//document.getElementById("OutUser").innerHTML = UserLogin;
		  		localStorage.setItem('user_name', UserLogin);
		  		localStorage.setItem('password', PasswordLogin);
		  		location.replace("http://127.0.0.1:5000//sign up")
		}
	}



function sing_up() {
  var user_name = document.getElementById('email_user').value;
  var paswoord = document.getElementById('psw').value;
  var paswoord_2 = document.getElementById('psw-repeat').value;
  
  if (user_name && paswoord_2 && password) {
  	if (password == paswoord_2 ) {
		  localStorage.setItem('user_name', user_name);
		  localStorage.setItem('password', paswoord);
		  location.replace("http://127.0.0.1:5000//sign up")
		  //document.getElementById("OutUser").innerHTML = UserLogin;
		}
	}
}