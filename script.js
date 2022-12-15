function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }
  
  function validateForm() {
  var name = document.contactForm.name.value;
  var pw = document.contactForm.password.value;

  var nameErr = passErr= true;
  if(name == "") {
    printError("nameErr", "Please enter your name");
  }else{
    var regex = /^[a-zA-Z\s]+$/;
    if(regex.test(name) === false) {
      printError("nameErr", "Please enter a valid name");
    }else{
      printError("nameErr", "");
  nameErr = false;
    }
  }
  
   if(pw == "") {
    printError("passErr", "Please enter a password");
  }else{
    var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if(regex.test(pw) === false) {
      printError("passErr", "[7 to 15 characters which contain at least one numeric digit and a special character]");
    }else{
      printError("passErr", "");
  passErr = false;
    }
  }

   
  if((nameErr || passErr  ) == true) {
  return false;
  }else{
  alert("You've entered the following details: \n" + "Full Name: " + name + "\n" + "Password: " + pw + "\n");
  document.write("submited success");
 }
  };
  