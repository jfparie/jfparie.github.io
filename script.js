function check_width() { 
    if (window.innerWidth < 960) {
      window.location = "index_mobile.html";
      }
    if (window.innerWidth >= 960) {
        window.location = "index.html";
    }
}

function sendEmail() 
        {window.location ="mailto:jfparie@me.com";};

$(document).ready(function() {
    $("#logo").click(function() {
        $('html,body').animate({
        scrollTop: $("#lightblue1-area").offset().top},
        'slow');
    });
});

$(document).ready(function() {
    $("#eth-hex").click(function() {
        $('html,body').animate({
        scrollTop: $("#blue-area").offset().top},
        'slow');
    });
});

$(document).ready(function() {
    $("#news-hex").click(function() {
        $('html,body').animate({
        scrollTop: $("#green-area").offset().top},
        'slow');
    });
});


$(document).ready(function() {
    $("#pi-hex").click(function() {
        $('html,body').animate({
        scrollTop: $("#yellow-area").offset().top},
        'slow');
    });
});

$(document).ready(function() {
    $("#lse-hex").click(function() {
        $('html,body').animate({
        scrollTop: $("#red-area").offset().top},
        'slow');
    });
});

$(document).ready(function() {
    $("#NDT-hex").click(function() {
        $('html,body').animate({
        scrollTop: $("#violet-area").offset().top},
        'slow');
    });
});

$(document).ready(function() {
    $("#hobby-hex").click(function() {
        $('html,body').animate({
        scrollTop: $("#lightblue2-area").offset().top},
        'slow');
    });
});