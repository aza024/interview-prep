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

    // Write a function that takes an array of chars and an array of maps and returns an array of maps where the output maps have at least one of the keys passed into the input array 


afn = (input, maps) => {
    let newMap = []
    for(let i = 0; i < input.length; i++){
      const letter = input[i]
      for(let j = 0; j < maps.length; j++){
        const fnmaps = maps[j]
        const value = fnmaps.get(letter)
        if (value !== undefined){
          newMap.push(fnmaps)
        }
      } 
    }
    return newMap
  }
  
  map1 = new Map()
  map1.set('a',3)
  
  map2 = new Map() 
  map2.set('b', 5)
  
  map3 = new Map()
  map3.set('c', 22)
  
  map4 = new Map() 
  map4.set('b', 5)
  map4.set('c', 7)
  
  
  afn(['a', 'b'], [map1, map2, map3, map4])
    
  // ])