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

// Implement search on an array (given element of array - give index of element in arr). Then take in a new parameter that gives occurance of the index for duplicates

searchArr = (val, occur, arr) => {
    count = 0;
    for(var i = 0; i < arr.length; i++){
        if (arr[i] == val){
        count += 1
    }
    else if (count == occur){
        return ('INFO: Index: ' + i)
    }
    }
    return ('Not Found')
}

searchArr(2, 1, [22, 4, 8, 2, 4, 9, 27, 30])