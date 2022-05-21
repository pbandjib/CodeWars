// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

function validatePIN (pin) {
  
    let pinlength = pin.length;
    let pinLengthCheck = (pinlength == 4 || pinlength == 6);
    let hasOnlyNumbers = pin.match(/^\d+$/);
      
    if(pinLengthCheck && hasOnlyNumbers){
      return true;
    }
    
    return false;
  
  }