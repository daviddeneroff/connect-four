var Game = function() {
  this.gameOver = false;
  this.playerCounter = 1
};

  Game.prototype.gameOver = function() {

  }

  Game.prototype.clearBoard = function() {
  }

  Game.prototype.setArrays = function() {
    var array1 = $('.one');
    var array2 = $('.two');
    var array3 = $('.three');
    var array4 = $('.four');
    var array5 = $('.five');
    var array6 = $('.six');
    var array7 = $('.seven');
    allArrays = [array1, array2, array3, array4, array5, array6, array7];
    for(i = 0; i < allArrays.length; i ++) {
      for(j = 0; j < allArrays[i].length; j ++) {
        allArrays[i][j] = $(allArrays[i][j]).html()
      }
    }
  }