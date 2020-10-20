function palindrome(str) {
  
  let scrubbedString = str.toLowerCase().replace(/[^a-z0-9]/ig,'');
  if (scrubbedString === scrubbedString.split("").reverse().join("")){
    return true;
  }else {
    return false;
  }
}