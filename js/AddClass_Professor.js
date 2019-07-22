/* require all fields to be completed alert */
function alertFunction(form){
	if (!form.checkValidity()) {
		alert("Must input all course fields");
		document.getElementById('addButtonForm').action = "";				
	}
	/* show alert that class has been added */
	else {
		alert("Class has been added!");
	}
}