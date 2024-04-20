//Home Page//
//javascript of message box//
function showimagetext(imageId) {
    var modal = document.getElementById("imageInfoModal");
    var modalText = document.getElementById("imageInfoText");

    // Display corresponding text based on image clicked
    switch(imageId) {
        case 1:
            modalText.innerHTML = "Chess Game!";
            break;
        case 2:
            modalText.innerHTML = "Guess Number!";
            break;
        case 3:
            modalText.innerHTML = "Pool Game!";
            break;
        case 4:
            modalText.innerHTML = "Papper Sissor Rock!";
            break;
        default:
            modalText.innerHTML = "";
    }

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("imageInfoModal").style.display = "none";
}

//Jquery Using//
$(document).ready(function(){
  $("#hide").click(function(){
    $("#catch").hide();
  });
 $("#show").click(function(){
    $("#catch").show();
  });
});

// ABC Minigame
function playGame() {
    var letters = ['A', 'B', 'C'];
    var randomIndex = Math.floor(Math.random() * letters.length);
    var randomLetter = letters[randomIndex];
    var guess = prompt("Guess a letter (A, B, or C):").toUpperCase();

    if (guess === randomLetter) {
        document.getElementById("gameResult").innerHTML = "Congratulations! You guessed correctly.";
    } else {
        document.getElementById("gameResult").innerHTML = "The correct letter was " + randomLetter + ".";
    }
}

