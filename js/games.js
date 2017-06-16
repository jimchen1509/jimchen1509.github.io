var v1 = 0,
    v2 = 0,
    v3 = 0,
    v4 = 0,
    v5 = 0,
    v6 = 0;
var caculate = function() {
    var res = va * 1 + v2 * 2 + v3 * 4 + v4 * 8 + v5 * 16 + v6 * 32;

}
$('#game-guess > div.container > div > div:nth-child(1) > a').on('click', function() {
    $('#game-guess > div.container > div > div:nth-child(1) > h4:nth-child(8)').show();
    $('#pic1 > img').show();
    $('#game-guess > div.container > div > div:nth-child(3) > a:nth-child(1)').show();
    $('#game-guess > div.container > div > div:nth-child(3) > a:nth-child(2)').show();
    $('#game-guess > div.container > div > div:nth-child(3) > h4').hide();
    $('#pic2 > img').hide();
    $('#game-guess > div.container > div > div:nth-child(5) > a:nth-child(1)').hide();
    $('#game-guess > div.container > div > div:nth-child(5) > a:nth-child(2)').hide();
    $('#game-guess > div.container > div > div:nth-child(5) > h4').hide();
    $('#pic3 > img').hide();
    $('#game-guess > div.container > div > div:nth-child(7) > a:nth-child(1)').hide();
    $('#game-guess > div.container > div > div:nth-child(7) > a:nth-child(2)').hide();
    $('#game-guess > div.container > div > div:nth-child(7) > h4').hide();
    $('#pic4 > img').hide();
    $('#game-guess > div.container > div > div:nth-child(9) > a:nth-child(1)').hide();
    $('#game-guess > div.container > div > div:nth-child(9) > a:nth-child(2)').hide();
    $('#game-guess > div.container > div > div:nth-child(9) > h4').hide();
    $('#pic5 > img').hide();
    $('#game-guess > div.container > div > div:nth-child(11) > a:nth-child(1)').hide();
    $('#game-guess > div.container > div > div:nth-child(11) > a:nth-child(2)').hide();
    $('#game-guess > div.container > div > div:nth-child(11) > h4').hide();
    $('#pic6 > img').hide();
    $('#game-guess > div.container > div > div:nth-child(13) > a:nth-child(1)').hide();
    $('#game-guess > div.container > div > div:nth-child(13) > a:nth-child(2)').hide();
})
$('#game-guess > div > div > div:nth-child(3) > a:nth-child(1)').on('click', function() {
    $('#game-guess > div > div > div:nth-child(1) > h4:nth-child(8)').hide();
    $('#pic1 > img').hide();
    $('#game-guess > div > div > div:nth-child(3) > a:nth-child(1)').hide();
    $('#game-guess > div > div > div:nth-child(3) > a:nth-child(2)').hide();
    $('#game-guess > div > div > div:nth-child(3) > h4').show();
    $('#pic2 > img').show();
    $('#game-guess > div > div > div:nth-child(5) > a:nth-child(1)').show();
    $('#game-guess > div > div > div:nth-child(5) > a:nth-child(2)').show();
    $('#pic1 > img').val(1);
})
$('#game-guess > div > div > div:nth-child(3) > a:nth-child(2)').on('click', function() {
    $('#game-guess > div > div > div:nth-child(1) > h4:nth-child(8)').hide();
    $('#pic1 > img').hide();
    $('#game-guess > div > div > div:nth-child(3) > a:nth-child(1)').hide();
    $('#game-guess > div > div > div:nth-child(3) > a:nth-child(2)').hide();
    $('#game-guess > div > div > div:nth-child(3) > h4').show();
    $('#pic2 > img').show();
    $('#game-guess > div > div > div:nth-child(5) > a:nth-child(1)').show();
    $('#game-guess > div > div > div:nth-child(5) > a:nth-child(2)').show();
    $('#pic1 > img').val(0);
})
$('#game-guess > div > div > div:nth-child(5) > a:nth-child(1)').on('click', function() {
    $('#game-guess > div > div > div:nth-child(3) > h4').hide();
    $('#pic2 > img').hide();
    $('#game-guess > div > div > div:nth-child(5) > a:nth-child(1)').hide();
    $('#game-guess > div > div > div:nth-child(5) > a:nth-child(2)').hide();
    $('#game-guess > div > div > div:nth-child(5) > h4').show();
    $('#pic3 > img').show();
    $('#game-guess > div > div > div:nth-child(7) > a:nth-child(1)').show();
    $('#game-guess > div > div > div:nth-child(7) > a:nth-child(2)').show();
    $('#pic2 > img').val(1);
})
$('#game-guess > div > div > div:nth-child(5) > a:nth-child(2)').on('click', function() {
    $('#game-guess > div > div > div:nth-child(3) > h4').hide();
    $('#pic2 > img').hide();
    $('#game-guess > div > div > div:nth-child(5) > a:nth-child(1)').hide();
    $('#game-guess > div > div > div:nth-child(5) > a:nth-child(2)').hide();
    $('#game-guess > div > div > div:nth-child(5) > h4').show();
    $('#pic3 > img').show();
    $('#game-guess > div > div > div:nth-child(7) > a:nth-child(1)').show();
    $('#game-guess > div > div > div:nth-child(7) > a:nth-child(2)').show();
    $('#pic2 > img').val(0);
})
$('#game-guess > div > div > div:nth-child(7) > a:nth-child(1)').on('click', function() {
    $('#game-guess > div > div > div:nth-child(5) > h4').hide();
    $('#pic3 > img').hide();
    $('#game-guess > div > div > div:nth-child(7) > a:nth-child(1)').hide();
    $('#game-guess > div > div > div:nth-child(7) > a:nth-child(2)').hide();
    $('#game-guess > div > div > div:nth-child(7) > h4').show();
    $('#pic4 > img').show();
    $('#game-guess > div > div > div:nth-child(9) > a:nth-child(1)').show();
    $('#game-guess > div > div > div:nth-child(9) > a:nth-child(2)').show();
    $('#pic3 > img').val(1);
})
$('#game-guess > div > div > div:nth-child(7) > a:nth-child(2)').on('click', function() {
    $('#game-guess > div > div > div:nth-child(5) > h4').hide();
    $('#pic3 > img').hide();
    $('#game-guess > div > div > div:nth-child(7) > a:nth-child(1)').hide();
    $('#game-guess > div > div > div:nth-child(7) > a:nth-child(2)').hide();
    $('#game-guess > div > div > div:nth-child(7) > h4').show();
    $('#pic4 > img').show();
    $('#game-guess > div > div > div:nth-child(9) > a:nth-child(1)').show();
    $('#game-guess > div > div > div:nth-child(9) > a:nth-child(2)').show();
    $('#pic3 > img').val(0);
})
$('#game-guess > div > div > div:nth-child(9) > a:nth-child(1)').on('click', function() {
    $('#game-guess > div > div > div:nth-child(7) > h4').hide();
    $('#pic4 > img').hide();
    $('#game-guess > div > div > div:nth-child(9) > a:nth-child(1)').hide();
    $('#game-guess > div > div > div:nth-child(9) > a:nth-child(2)').hide();
    $('#game-guess > div > div > div:nth-child(9) > h4').show();
    $('#pic5 > img').show();
    $('#game-guess > div > div > div:nth-child(11) > a:nth-child(1)').show();
    $('#game-guess > div > div > div:nth-child(11) > a:nth-child(2)').show();
    $('#pic4 > img').val(1);
})
$('#game-guess > div > div > div:nth-child(9) > a:nth-child(2)').on('click', function() {
    $('#game-guess > div > div > div:nth-child(7) > h4').hide();
    $('#pic4 > img').hide();
    $('#game-guess > div > div > div:nth-child(9) > a:nth-child(1)').hide();
    $('#game-guess > div > div > div:nth-child(9) > a:nth-child(2)').hide();
    $('#game-guess > div > div > div:nth-child(9) > h4').show();
    $('#pic5 > img').show();
    $('#game-guess > div > div > div:nth-child(11) > a:nth-child(1)').show();
    $('#game-guess > div > div > div:nth-child(11) > a:nth-child(2)').show();
    $('#pic4 > img').val(0);
})
$('#game-guess > div > div > div:nth-child(11) > a:nth-child(1)').on('click', function() {
    $('#game-guess > div > div > div:nth-child(9) > h4').hide();
    $('#pic5 > img').hide();
    $('#game-guess > div > div > div:nth-child(11) > a:nth-child(1)').hide();
    $('#game-guess > div > div > div:nth-child(11) > a:nth-child(2)').hide();
    $('#game-guess > div > div > div:nth-child(11) > h4').show();
    $('#pic6 > img').show();
    $('#game-guess > div > div > div:nth-child(13) > a:nth-child(1)').show();
    $('#game-guess > div > div > div:nth-child(13) > a:nth-child(2)').show();
    $('#pic5 > img').val(1);
})
$('#game-guess > div > div > div:nth-child(11) > a:nth-child(2)').on('click', function() {
    $('#game-guess > div > div > div:nth-child(9) > h4').hide();
    $('#pic5 > img').hide();
    $('#game-guess > div > div > div:nth-child(11) > a:nth-child(1)').hide();
    $('#game-guess > div > div > div:nth-child(11) > a:nth-child(2)').hide();
    $('#game-guess > div > div > div:nth-child(13) > h4').show();
    $('#pic6 > img').show();
    $('#game-guess > div > div > div:nth-child(13) > a:nth-child(1)').show();
    $('#game-guess > div > div > div:nth-child(13) > a:nth-child(2)').show();
    $('#pic5 > img').val(0);
})
$('#game-guess > div > div > div:nth-child(13) > a:nth-child(1)').on('click', function() {
    $('#game-guess > div > div > div:nth-child(11) > h4').hide();
    $('#pic6 > img').hide();
    $('#game-guess > div > div > div:nth-child(13) > a:nth-child(1)').hide();
    $('#game-guess > div > div > div:nth-child(13) > a:nth-child(2)').hide();
    $('#pic6 > img').val(1);
})
$('#game-guess > div > div > div:nth-child(13) > a:nth-child(2)').on('click', function() {
    $('#game-guess > div > div > div:nth-child(11) > h4').hide();
    $('#pic6 > img').hide();
    $('#game-guess > div > div > div:nth-child(13) > a:nth-child(1)').hide();
    $('#game-guess > div > div > div:nth-child(13) > a:nth-child(2)').hide();
    $('#pic6 > img').val(0);
})
$('#game-guess > div.col-lg-8.col-lg-offset-2.text-center > a').on('click', function() {
    var ans = ($('#pic1 > img').val()) * 1 + ($('#pic2 > img').val()) * 2 + ($('#pic3 > img').val()) * 4 + ($('#pic4 > img').val()) * 8 + ($('#pic5 > img').val()) * 16 + ($('#pic6 > img').val()) * 32
    $('#result2').val(ans)

})