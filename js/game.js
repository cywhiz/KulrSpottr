var game;
var scores = [];

function CoolTiles() {
    // Initialize the game
    game = this;
    game.newGame();

    // Register and monitor click events
    $(document).on('click', '.tile', game.checkTile);
    $(document).on('click', '#showHint', game.showHint);
    $(document).on('click', '#addScore', game.addScore);
    $(document).on('click', '#newGame', game.newGame);
}

/*
    Set default score and level, then initialize the game
*/

CoolTiles.prototype.newGame = function() {
    // Set the initial score and level
    game.score = 0;
    game.level = 2;

    // Show the score and draw the game board
    $('#modal').css('visibility', 'hidden');
    $('#score').html('Score: ' + game.score);
    $('#game').css('filter', 'none');
    game.drawBoard(game.level);
};

/*
    Draw N x N square tiles depending on level
*/

CoolTiles.prototype.drawBoard = function(level) {
    // Make sure the Show Hint checkbox is not checked
    $('#showHint').prop('checked', false);

    // Generate random colour based on HSL values, leaning towards bright colours
    var h = Math.floor(Math.random() * 361);
    var s = 80;
    var l = 60;
    var tileColour = 'hsl(' + h + ',' + s + '%,' + l + '%)';
    var specialColour = 'hsl(' + h + ',' + (s + 15) + '%,' + (l + 15) + '%)';

    // Generate special tile
    var specialX = Math.floor(Math.random() * level);
    var specialY = Math.floor(Math.random() * level);

    // Generate a grid of tiles depending on the level
    var html = '';
    for (var i = 0; i < level; i++) {
        html += '<div class="row">';

        for (var j = 0; j < level; j++) {
            if (i == specialY && j == specialX) {
                html += '<div class="tile" style="background:' + specialColour + '" data-special=1></div>';
            } else {
                html += '<div class="tile" style="background:' + tileColour + '"></div>';
            }
        }

        html += '</div>';
    }

    $('#gameBoard').html(html);
};

/*
    If the clicked tile is the special tile, increase score and move on to the next level, otherwise, game over!
*/

CoolTiles.prototype.checkTile = function() {
    if ($(this).data('special')) {
        $('#score').html('Score: ' + ++game.score);
        game.drawBoard(++game.level);
    } else {
        game.gameOver();
    }
};

/*
    Hint the player with a dashed border around the special tile
*/

CoolTiles.prototype.showHint = function() {
    $('div[data-special=1]').css('border', $(this).prop('checked') ? '3px dashed black' : 'none');
    $('div[data-special=1]').css('margin', $(this).prop('checked') ? '0' : '3px');
};

/*
    Generate the 'Game Over' modal
*/

CoolTiles.prototype.gameOver = function() {
    // Generate and show the 'Game Over' modal
    var html = '';
    html += '<div id="gameOver">';
    html += '<h1>GAME OVER!</h1>';
    html += '<h3>Your score is ' + game.score + '</h3>';
    html += '<p>Submit your name to the Hall of Fame</p>';
    html += '<form>';
    html += '<input type="text" id="player"> <button type="button" class="btn btn-success" id="addScore">Submit</button>';
    html += '</form>';
    html += '</div>';

    $('#game').css('filter', 'blur(4px)');
    $('#modal').html(html);
    $('#modal').css('visibility', 'visible');
};

/*
    Add current score and display top 10 scores
*/

CoolTiles.prototype.addScore = function() {
    // Add current score to list of scores
    game.player = $('#player').val();
    scores.push({ 'player': game.player, 'score': game.score });

    // Sort scores in descending order, from highest to lowest
    scores.sort(function(a, b) {
        return b.score - a.score;
    });

    // Generate the 'High Scores' modal
    var html = '';
    html += '<div id="highScores">';
    html += '<h1>High Scores</h1>';
    html += '<ol>';

    $.each(scores, function(k, v) {
        // Exit loop when number of scores exceed 10 
        if (k >= 10) {
            return false;
        }

        html += '<li><span style="margin:40px">' + v.player + '</span><span class="right">' + v.score + '</span></li>';
    });

    html += '</ol>';
    html += '<button class="btn btn-success" id="newGame">New Game</button>';
    html += '</div>';

    $('#modal').html(html);
    $('#modal').css('visibility', 'visible');
};
