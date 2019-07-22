function hideRow() {
	var notifTable = document.getElementById("notificationsTable");
	var messageRow = notifTable.getElementsByTagName("tr");

	// loops through the rows and hides the checked input elements
	for( var i=0; i < messageRow.length; i++ ) {
		var inputTag = messageRow[i].getElementsByTagName("input");
		for( var j=0; j < inputTag.length; j++ ) {
			if( inputTag[j].name == "read" ) {
				if( inputTag[j].checked ) {
					messageRow[i].style.display = "none";
				}
				break;
			}
		}					
	}

}