function login(form) {
	// Password for Professor. HardCoded
	if (document.getElementById('passwordTextbox').value == "professor") {
		document.getElementById('usernameAndPassword').action = "./SendMessage.html";
		document.getElementById('loginButton').type = "";
	}
	// Student password. HardCoded
	else if (document.getElementById('passwordTextbox').value == "student") {
		document.getElementById('usernameAndPassword').action = "./ViewNotifications_Student.html";
		document.getElementById('loginButton').type = "";
	}
	else {
		// When password is correct then go to index.html
		document.getElementById('usernameAndPassword').action = "./index.html";
		// block when password is incorrect
		document.getElementById('wrongPassword').style.display = "block";
		document.getElementById('passwordTextbox').value = "";
	}
}