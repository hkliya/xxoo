var game;
var rows = 3, cols = 3;

$(document).ready(function() {
  restartGame();
});

function restartGame() {
  game = new Xxoo();
  cleanCanvas();
}

function cleanCanvas() {
  var $canvas = $("#canvas");
  $canvas.empty();
  for (var i=0; i<rows; i++) {
    var $tr = $("<tr></tr>");
    for (var j=0; j<cols; j++) {
      var $td = $("<td></td>");
      bind($td, i, j);
      $tr.append($td);
    }
    $canvas.append($tr);
  }

}

function bind($td, x, y) {
  $td.click(function() {
    var isSuccess = game.place(x, y);
    if (isSuccess) {
      $td.addClass((game.last == 1 ? "red" : "green"));
      var winner = game.winner();
      if (winner) {
        notify("Player" + winner + " win! Restarting...", function() {
          restartGame();
        });
      } else if (game.draw()) {
        notify("Draw! Restarting...", function() {
          restartGame();
        });
      }
    }
  });
}

function notify(msg, onClose) {
  noty({
    modal: true, 
    timeout: 2000,
    layout: "topCenter",
    type: "alert",
    text: msg,
    callback: {
      onClose: onClose
    }
  });
}
