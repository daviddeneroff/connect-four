var clickChecker = (function() {
  var classClick = function(classNum) {
    $(classNum).click(function(event) {
      console.log(event.target);
      makeXs.findEmpty(makeXs.findArray(classNum), classNum);
      // allArrays[0][0] = "X"
      if(assignModule.pieceType(newGame) == false) {
        console.log("piece is odd")
      } else {
        console.log("piece is even")
      }
    })
  }
  return {
    look: classClick
  }
}());