var playing = false;
var score;
var trialsleft;
var step;
var action;

$(function () {

    $('#startreset').click(function () {

        if (playing === true) {

            // reload page
            location.reload();
        } else {

            // we are not playing
            playing = true; // game initiated

            score = 0;
            $('#scorevalue').html(score);

            $('#trialsleft').show();
            trialsleft = 3;
            addHearts();

            $('#gameOver').hide();

            $('#startreset').html('Reset Game');
        }
    });

});

function addHearts() {
    $('#trialsLeft').empty();
    for (i = 0; i < trialsleft; i++) {
        $('#trialsleft').append('<img src="images/heart.png" class="life">');
    }
}
