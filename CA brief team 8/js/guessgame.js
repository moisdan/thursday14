


document.getElementById("guessB").onclick = function() { // confuring the click function button
				var guess = Math.round(Math.random() * 9) + 1; //Choosing the random bottom between 1-10 using mAth round funct.
				
				var g = parseInt(document.getElementById("guessText").value);// getting input value converting it to a integer as a user guess.
				
				if(!isNaN(g)) { // if is a number, play game
					if(g == guess) { // if guess is equal to chosen number, player won
						document.getElementById("guessA").innerHTML = "" + guess; // show chosen number
						alert("Cheater!!"); // winning message
					} else { //if not equal, player lost
						document.getElementById("guessA").innerHTML = "" + guess; // show chosen number
						alert("It was " + guess + ", you loose!");guessText // losing message
					}
				} else { // if not a number, show error
					document.getElementById("guessText").placeholder = "invalid input"; //change the place holder text to the error message
					document.getElementById("guessText").value = "";//delete the text so the placeholder shows again.
					document.getElementById("guessA").innerHTML = "?";//reset the answer to the question mark
				}
			}