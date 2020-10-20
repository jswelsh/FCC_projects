function palindrome(str) {
  
  let cleanString = str.toLowerCase().replace(/[^a-z0-9]/ig,'');
  if (cleandString === cleanString.split("").reverse().join("")){
    return true;
  }else {
    return false;
  }
}