var makeXs = (function() {
  var findEmpty = function (input, selector) {
    for(i = 0; i < allArrays[input].length; i ++) {
        $(selector).empty();
        // if(allArrays[input][i] == "--"){
        //   return allArrays[input][i] = "X"
        // }
      }
    }

  var findArray = function(input) {
    if(input == ".one") {
      return 0
    }
    else if (input == ".two") {
      return 1
    }
    else if (input == ".three") {
      return 2
    }
    else if (input == ".four") {
      return 3
    }
    else if (input == ".five") {
      return 4
    }
    else if (input == ".six") {
      return 5
    }
    else if (input == ".seven") {
      return 6
    }
  }
  return {
    findEmpty: findEmpty,
    findArray: findArray
  }
}());