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

  //return array with only even characters 

evenChars = (string) => {
    words = string.split(" ")
    newString = []
    for (let i = 0; i < words.length; i ++){
     if( words[i].length % 2 == 0 ){
       newString.push(words[i])
     }
    }
    return newString
  }
  evenChars("This is an example of my string list.")

  // Implement search on an array (given element of array - give index of element in arr) 

searchArr = (val, arr) => {
    for (var i =0; i < arr.length; i++){
      if(val == arr[i]){
        return i
      }
    }  
    return -1
  } 
  searchArr(4, [2, 3, 4, 5, 19, 4, 23, 0])

  // Implement search on an array (given element of array - give index of element in arr) 

searchArr = (val, occur, arr) => {
    count = 0; 
    for (var i =0; i < arr.length; i++){
        if(val == arr[i]){
        count += 1 
        console.log('count'+ count)
        if (occur == count){
          return i 
          console.log('Index' + i)
        }
        }
      } 
    return -1
  } 
  searchArr(4, 2, [2, 3, 4, 5, 19, 4, 23, 0, 4])