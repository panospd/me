$(function() {

checkScreenSize();

$(window).resize(function(){
    checkScreenSize();
});



  function checkScreenSize() {
    if($(window).width() < 346){
      if ($("h1.myName").hasClass("display-4")) {
        $("h1.myName").removeClass("display-4");
      }
    }else{
      if (!$("h1.myName").hasClass("display-4")) {
        $("h1.myName").addClass("display-4");
      }

    }
  }

});
