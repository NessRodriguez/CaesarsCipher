var caesarShift = function(){

	var cipherString = ""
	var myString = "hello";
	var shiftAmount = 14;
	var counter = 0

	for(var counter = 0; counter < ; counter ++){
		// cipherString[counter] = myString[counter] 
		// + shiftAmount
		var x = '';
		var asciiCode = myString.charCodeAt(counter);

		cipherString[counter] = String.fromCharCode((asciiCode - 65 + shiftAmount) + 65)
	}

	return cipherString;
}

document.getElementById("demo").innerHTML = window.caesarShift