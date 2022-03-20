// Assignment code here

var lowercase = ['a', 'b', 'c'];
var uppercase = ['A', 'B', 'C'];
var numeric = ['2', '3', '4'];
var special = ['@', '$', '%'];

function generatePassword() {
    var result = []
    var finalPassword = []
    var message = alert("Welcome, Let's Generate a Secure Password!");
    var criteria = alert("Password Criteria: LENGTH and CHARACTER TYPE");
    var passwordLength = parseInt(prompt("choose a length of at least 8 characters and no more than 128 characters. Write the length below"));

    if (passwordLength < 8  || passwordLength > 128) {
        alert("Please chose at least 8 characters and no more than 128");
        return null
    }

    if(isNaN(passwordLength)){
         alert("Please enter a number!");
        return null
    }

    var uppercaseConfirm = confirm('would you like uppercase characters?')
    var lowercaseConfirm = confirm('would you like lowercase characters?')
    var numericConfirm = confirm('would you like numeric characters?')
    var specialConfirm = confirm('would you like special characters?')
  

    if (uppercaseConfirm === false && lowercaseConfirm === false && numericConfirm === false && specialConfirm === false) {
        alert('Please make sure to select at least ONE character type!')
        return null;
    }

    if(uppercaseConfirm){
        result = result.concat(uppercase)
    }
//this checks if the user selected this character type
    if(lowercaseConfirm){
        result = result.concat(lowercase)
    }
    if(numericConfirm){
        result = result.concat(numeric)
    }
    if(specialConfirm){
        result = result.concat(special)
    }

    //for loop based on the user selected password length
    for (var i = 0; i < passwordLength; i++) {
        //this will get a random character from the result array
       var character =  random(result)
       //this pushes the random character into the final password array
       finalPassword.push(character)
        
    }
     //this joins the array as one string
return finalPassword.join('');
};

function random(array){
    return array[Math.floor(Math.random() * array.length)]
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
    


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







//GIVEN I need a new, secure password

//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria


//WHEN prompted for password criteria
//THEN I select which criteria to include in the password


//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters


//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected


//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria


//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page