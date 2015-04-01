var assignModule = (function() {
  var pieceType = function (game) {
    if(game.playerCounter % 2 == 0) {
      console.log("even deli")
      game.playerCounter = game.playerCounter + 1
      return true
    }
    else {
      console.log("odd deli")
      game.playerCounter = game.playerCounter + 1
      return false
    }
  }
  return {
    pieceType: pieceType
  }
}());