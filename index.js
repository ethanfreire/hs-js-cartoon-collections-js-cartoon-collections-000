function dwarfRollCall(dwarves) {
  var string = "";
  for(let i = 0 ; i < dwarves.length ; i ++){
    string += `${i+1}. ${dwarves[i]} `;
  }
  return string;
}

function summonCaptainPlanet(planeteerCalls){
  for(let i = 0 ; i < planeteerCalls.length ; i++){
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!";
  }
  return planeteerCalls;
}

function longPlaneteerCalls(words) {
  if(words.length === 0 ){
    return null;
  }
  for(let i = 0 ; i < words.length ; i++){
    if(words[i].length > 4){
      return true ;
    }else {
      return false;
    }
  }

  function findTheCheese (foods) {
    for(let i = 0 ; i < foods.length ; i++){
      if(foods[i] == "cheddar" ){
        return "cheddar";
      }else if(foods[i] == "gouda"){
        return "gouda";
      }else if(foods[i] == "camembert"){
        return "camembert";
      }
    }
    return "no cheese!";
  }


  function wordswithB (words){
    var wordsstartwithB = [] ;
    for(let i =0 ; i < words.length ; i++){
      if( words[i].charAt(0) === "b" || words[i].charAt(0) === "B" ){
        wordsstartwithB.push(words[i]);
      }
    }
    return wordsstartwithB;
  }
