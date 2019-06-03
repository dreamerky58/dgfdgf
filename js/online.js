$(document).ready(function()
{
    // Максимум онлайна
    var m = 600;

    var o = parseInt($("#online").text());

    var p = Math.floor((o / m) * 100);

    $("#bar").animate({
        width: p + "%"
    }, 1500 );
});