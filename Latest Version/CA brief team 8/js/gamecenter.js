//booking page//

// Form Validation//

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var name = document.getElementById("username").value;
    var email = document.getElementById("useremail").value;
    var phone = document.getElementById("userphone").value;
    var password1 = document.getElementById("userpassword1").value;
    var password2 = document.getElementById("userpassword2").value;
    
    if (name.trim() === "") {
        alert("Name field is required");
        return;
    }
    
    if (email.trim() === "") {
        alert("Email field is required");
        return;
    }
    
    if (phone.trim() === "") {
        alert("Phone number field is required");
        return;
    }
    
    if (password1.trim() === "") {
        alert("Password field is required");
        return;
    }
    
    if (password1 !== password2) {
        alert("Passwords do not match");
        return;
    }
    
    alert("Form submitted successfully!");
});

//calculation//
function calculateTotal(){
    var tournament = document.getElementById("tour").value;
    var quantity = parseInt(document.getElementById("quantityInt").value);
    var prices = {
        "PoolTour":5,
        "ChessTour":5,
        "PingpongTour":7
    };

var totalprice = prices[tournament]*quantity;
document.getElementById("totalpricej").innerHTML = "€"+ totalprice;
}