"use strict";

function alertFunction(form){
	if (!form.checkValidity()) {
		alert("Must input subject and message before sending");
	}
	else {
		alert("Message Sent!");

		subjectBox.innerHTML="";
		messageBox.innerHTML="";
	}
}

