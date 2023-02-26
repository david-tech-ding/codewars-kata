function XO(str) {
    const lowerCaseStr = str.toLowerCase()
    // for case insensitivity
    
    let xCount = 0;
    let oCount = 0;
  
  //looping through each character in string to find X and O
  for (let i = 0; i< lowerCaseStr.length; i++){
    const char = lowerCaseStr.charAt(i);
  
  if(char === 'x'){
    xCount++
  } else if (char === 'o'){
    oCount++
  }
}
  return xCount === oCount;
}