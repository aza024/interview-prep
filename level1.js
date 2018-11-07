// reverse a string
revStr = (str) => {
    newStr = ''
    for(let i = str.length - 1; i >= 0; i--){
      newStr += str[i]
    }
    return newStr
  }
  
  revStr('Test String')


// interleave two strings
leaf = (str1, str2) => {
    newStr = ""
    for(var i = 0; i <= str1.length - 1 ; i++){
      newStr += str1[i]
      newStr += str2[i]
    }
    return newStr
  }
  
  
  leaf('abc','def')