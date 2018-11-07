// function takes array of characters and a map where keys are characters and values are integers - return a new map where only keys are where integer count is > 10 

charCount = (arr, mapIn) => {
  
    for(let i = 0; i < arr.length; i++){
      char = arr[i] //a, b
      let returnMap = new Map()
      currChar = mapIn.get(char) //5, 15
      if(currChar >= 10){
        returnMap.set(char, currChar)
        return returnMap
      }    
    }
  }
  
  let APMap = new Map() 
    APMap.set('a', 5)
    APMap.set('b', 15)
    APMap.set('c', 2)
    
  charCount(['a', 'b'], APMap)