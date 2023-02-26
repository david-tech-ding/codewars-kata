var splitInParts = function(s, partLength){
    let finalParts = [];
    for(let i = 0; i < s.length; i += partLength){
      const part = s.substr(i, partLength);
      
      finalParts.push(part);
    }
    return finalParts.join(' ')
  }