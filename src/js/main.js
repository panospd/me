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

});
