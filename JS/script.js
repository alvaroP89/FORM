/*Author: Alvaro Puig Bellido*/

//Constants variables to store inputs by their id
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const button = document.getElementById("submit");

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    console.log();
    
    var esCorrecto = checkInputs();
    if(esCorrecto){
        document.getElementById("form").reset;
    }
    
    
});


function checkInputs(){
    //get values from inputs,and use trim method to trim extra space
    var userValue = username.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var password2Value = password2.value.trim();
    var  correct = false;
    
    //Check Username
    if(userValue == ''){
        //show error
        //add error class
        setErrorFor(username,"Username cannot be blank");
    }else{
        //add success class
        setSuccessFor(username);
        correct = true;
    }//

    //Check email
    if(emailValue == ''){
        setErrorFor(email,"Email cannot be blank");
        correct = false;
    }else{
        if(!isEmail(emailValue)){
            setErrorFor(email,"Email is not valid");
            correct = false;
        }else{
            setSuccessFor(email);
            correct = true;
        }//
    }//
    //Check passwords
    if(passwordValue == ''){
        setErrorFor(password,"Password cannot blank");
        correct = false;
    }else{
        if(!isPassword(passwordValue)){
            setErrorFor(password,"Minimun of 8 characters, at least 1 letter and 1 number");
            correct = false;
        }else{
            setSuccessFor(password); 
            correct = true;
        }//
    }

    //Check Second Password
    if(password2Value == ''){
        setErrorFor(password,"Check Password must be filled");
        correct = false;
    }else{
        if(passwordValue !== password2Value ){
            setErrorFor(password2,"Passwords does not match");
            correct = false;
        }else{
            setSuccessFor(password2);
            correct = true;
        }//
    }//
    return correct;
}





function setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    
    formControl.className = 'form-control error';
}
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isEmail(email){
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(email);
}
function isPassword(password){
   return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g.test(password);
}
