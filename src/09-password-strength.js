/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // will figure out this returning strength from array through some logic later
  // let ans = ["weak", "medium", "strong", "very strong"];
  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowerCase = upperCase.toLowerCase();
  let numbers = "0123456789";
  let specialSymbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  let passStrength = 0
  console.log(typeof password);
  if(!password || typeof password !== "string") return "weak";

  let isEightChars = password.length >= 8 ? true : false;
  let hasUpperCase = false;
  let hasLowerCase =  false;
  let hasNumber = false;
  let hasSpecialChar = false;

  for(let char = 0; char < password.length; char++){
    // upper case check
    if(!hasUpperCase){
      if(upperCase.includes(password[char])){
        passStrength += 1;
        hasUpperCase = true;
      }
    }

    // lower case check
    if(!hasLowerCase){
      if(lowerCase.includes(password[char])){
        passStrength += 1;
        hasLowerCase = true;
      }
    }

    // number check
    if(!hasNumber){
      if(numbers.includes(password[char])){
        passStrength += 1;
        hasNumber = true;
      }
    }

    // special char check
    if(!hasSpecialChar){
      if(specialSymbols.includes(password[char])){
        passStrength += 1;
        hasSpecialChar = true;
      }
    }
  }

  if(isEightChars){
    passStrength += 1;
  }

  if(passStrength === 0 || passStrength === 1){ 
    return "weak" 
  } else if(passStrength === 2 || passStrength === 3){ 
    return "medium";
  } else if(passStrength === 4){
    return "strong";
  } else{
    return "very strong";
  }
}
