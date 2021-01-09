function myFunction() {
	var text;
	var x = document.forms["my-form"]["amount"].value;

	if (x==""){
		alert("Amount must be filled out.");
		return false;
	}
	else if (isNaN(x)){
		text = "Input is invalid. Please enter a number."
		document.getElementById("output1").innerHTML = text;
	}
	else{
		var y = 22*x;
		var z = y/4173;
		document.getElementById("output1").innerHTML = "Your contribution could be used to plant up to "+x+" trees!";
		document.getElementById("output2").innerHTML = x+" trees absorb "+y+" kg of carbon dioxide each year and can help to reduce the carbon emissions equivalent to that of "+z+" cars in one year.";
	}

	
}