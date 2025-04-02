

function checkValidation() {
    let isValid = true;
    let name = document.getElementById("name").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
   

    document.getElementById("nameError").style.display = name ? "none" : "block";
    document.getElementById("lnameError").style.display = lname ? "none" : "block";
    document.getElementById("emailError").style.display = email.includes("@") ? "none" : "block";
    document.getElementById("messageError").style.display = message ? "none" : "block";

   

    if (!name || !lname ||  !email.includes("@") || !message) {
        isValid = false;
    }
    if (isValid) {
        document.getElementById("success-alert").style.display = "block";
    } else {
      document.getElementById("success-alert").style.display = "none";
    }
}
function checkValidation(){
    if(invalidCheck.checked == true){
      invalidCheck.style.display = "block";
      console.log("Your are Agree");
     }else{
       invalidCheck.style.display = "none";
     }
   }