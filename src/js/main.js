$(function() {

checkScreenSize();

$(window).resize(function(){
    checkScreenSize();
});



  function checkScreenSize() {
    if($(window).width() < 991){
      if ($(".myName").hasClass("display-4")) {
        $(".myName").removeClass("display-4");
      }
    }else{
      if (!$(".myName").hasClass("display-4")) {
        $(".myName").addClass("display-4");
      }

    }
  }

  $(".show-more-less").click(function (event) {
      if(!$(this).hasClass("more")) {
          $(this).text("Show Less");
      } else {
          $(this).text("Show More");
      }

      $(this).toggleClass("more");
  });

});
