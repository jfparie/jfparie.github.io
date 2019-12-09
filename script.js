function sendEmail() 
        {window.location ="mailto:jfparie@me.com";};

$(document).ready(function() {
    $("#pi-hex").click(function() {
        $("#row-pi").slideToggle(300);
        $('html,body').animate({
        scrollTop: $("#row-pi").offset().top},
        'slow');
    });
});

$(document).ready(function() {
    $("#data-hex").click(function() {
        $("#row-data").slideToggle(300);
        $('html,body').animate({
        scrollTop: $("#row-data").offset().top},
        'slow');
    });
});

$(document).ready(function() {
    $("#NDT-hex").click(function() {
        $("#row-NDT").slideToggle(300);
        $('html,body').animate({
        scrollTop: $("#row-NDT").offset().top},
        'slow');
    });
});

$(document).ready(function() {
    $("#hobby-hex").click(function() {
        $("#row-hobby").slideToggle(300);
        $('html,body').animate({
        scrollTop: $("#row-hobby").offset().top},
        'slow');
    });
});