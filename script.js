// Create an input type text that takes/shows only letters.
// Hint: use the keyup or the keydown events and remove 
// any character that is not a letter.
// Hint : Check out keycodes in Javascript or Regular Expressions

//keycode 65 a 90

//retrieve the input

// let nueve = 9
// console.log(nueve)
// console.log(parseInt(nueve))



let inputLocation = document.getElementById("fname")



inputLocation.addEventListener("keyup", checkKey)


function checkKey(e){
	let input = inputLocation.value
	let eKeyCode = e.keyCode
	console.log(input)
	console.log(e.target.value)

	if(eKeyCode<65 || eKeyCode>90){
		console.log(`no es letra`)
		inputLocation.value = input.slice(0, -1);

		
		
	}
	else{
		console.log(`test else`)
	}


}
