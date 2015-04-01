$(document).ready(function() {
  $('.new_game_button').on('click', function(){
      newGame = new Game();
      newGame.clearBoard();
      newGame.setArrays();
    })

  var listenUp = [".one", ".two", ".three", ".four", ".five", ".six", ".seven"]
    for(i = 0; i < listenUp.length; i++ ) {
     document.addEventListener('click', clickChecker.look(listenUp[i]), true);
    }

});