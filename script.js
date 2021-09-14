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
          scrollTop: $("#JFP_bio").offset().top},
          'slow');
      });
  });
  
  $(document).ready(function() {
      $("#eth-hex").click(function() {
          $('html,body').animate({
          scrollTop: $("#eth-icon").offset().top},
          'slow');
      });
  });
  
  $(document).ready(function() {
      $("#news-hex").click(function() {
          $('html,body').animate({
          scrollTop: $("#news-icon").offset().top},
          'slow');
      });
  });
  
  
  $(document).ready(function() {
      $("#pi-hex").click(function() {
          $('html,body').animate({
          scrollTop: $("#pi-icon").offset().top},
          'slow');
      });
  });
  
  $(document).ready(function() {
      $("#lse-hex").click(function() {
          $('html,body').animate({
          scrollTop: $("#lse-icon").offset().top},
          'slow');
      });
  });
  
  $(document).ready(function() {
      $("#NDT-hex").click(function() {
          $('html,body').animate({
          scrollTop: $("#ndt-icon").offset().top},
          'slow');
      });
  });
  
  $(document).ready(function() {
      $("#hobby-hex").click(function() {
          $('html,body').animate({
          scrollTop: $("#hobby-icon").offset().top},
          'slow');
      });
  });
  
  $(document).ready(function() {
      $("#ibm-hex").click(function() {
          $('html,body').animate({
          scrollTop: $("#ibm-icon").offset().top},
          'slow');
      });
  });
  
  $(document).ready(function() {
      $("#aa-hex").click(function() {
          $('html,body').animate({
          scrollTop: $("#aa-icon").offset().top},
          'slow');
      });
  });