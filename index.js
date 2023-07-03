let validation = ()=>{
            
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cPassword").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;

    let usercheck = /^[A-Za-z. ]{3,20}$/;
    let passwordcheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,16}$/;
    let emailcheck =  /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6}$/;
    let numbercheck = /^[789][0-9]{9}$/;

    if(usercheck.test(username)){
        document.getElementById("usererror").innerHTML="";
    }else {
        document.getElementById("usererror").innerHTML="*** Invalid UserName";
        return false
    }

    if(passwordcheck.test(password)){
        document.getElementById("passworderror").innerHTML="";

    }else {
        document.getElementById("passworderror").innerHTML="*** Invalid Password";
        return false
    }

    //  if(cpassword.match(password)){}
    if(password === cpassword){
        document.getElementById("cpassworderror").innerHTML="";

    }else {
        document.getElementById("cpassworderror").innerHTML="***Password Does Not Match";
       return false
    }

    if(emailcheck.test(email)){
        document.getElementById("emailerror").innerHTML="";

    }else {
        document.getElementById("emailerror").innerHTML="*** Email is Invalid";
       return false
    }

    
    if(numbercheck.test(number)){
        document.getElementById("mobileerror").innerHTML="";

    }else {
        document.getElementById("mobileerror").innerHTML="*** Invalid Number ";
       return false
    }


}
