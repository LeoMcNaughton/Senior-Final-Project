var exports = module.exports = {};

function PasswordMessage(m){
  this.name="Password M3SS7GE";
  this.message=m;
}

function inRange(char,min,max){
    let unicode = char.charCodeAt(0);
    if(unicode >= min && unicode <= max){
      return true;
    }
    else{
      return false;
    }
}

exports.checkLength = function(str){
    let valid = (str.length >= 8 && str.length <= 20);
    try{
        if(str.length < 8){
            throw new PasswordMessage("Your password is too short. Should be at least 8 letters.");
        }
        else if(str.length > 20){
            throw new PasswordMessage("Your password is too long. Should be at most 20 letters.");
        }
        else{
            throw new PasswordMessage("Your password is an appropriate length.");
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return valid;
    }
}


exports.containsUpper =function(str){
  let hasuppercase = false;
    try{
        for(let x=0;x < str.length;x++){
            if(inRange(str[x],65,90)){
                hasuppercase = true;
                throw new PasswordMessage('Your Password has an uppercase letter!');
            }
        }
        if(hasuppercase === false){
            throw new PasswordMessage('Your Password does not have an uppercase letter!');
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return hasuppercase;
    }
}


exports.containsLower =function(str){
  let haslowercase = false;
    try{
        for(let x=0;x < str.length;x++){
            if(inRange(str[x],97,122)){
                haslowercase = true;
                throw new PasswordMessage('Your Password has an lowercase letter!');
            }
        }
        if(haslowercase === false){
            throw new PasswordMessage('Your Password does not have an lowercase letter!');
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return haslowercase;
    }
}


exports.containsNumerical =function(str){
  let hasnumber = false;
    try{
        for(let x=0;x < str.length;x++){
            if(inRange(str[x],48,57)){
                hasnumber = true;
                throw new PasswordMessage('Your Password has a number!');
            }
        }
        if(hasnumber === false){
            throw new PasswordMessage('Your Password does not have a number!');
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return hasnumber;
    }
}


exports.containsSpecial =function(str){
  specialcharacter = false;
    let special = [33,64,35,36,37,94,38,42]
    try{
        for(let x=0;x < str.length;x++){
            for(let c=0;c < special.length;c++){
                if(str[x].charCodeAt(0) == special[c]){
                    specialcharacter = true;
                    throw new PasswordMessage('Your Password has a special character! ');
                }
            }
        }
        if(specialcharacter === false){
            throw new PasswordMessage('Your Password does not have a special character! ');
        }
    }
    catch(e){
        console.log(e.name+": "+e.message);
        return specialcharacter;
    }
}
