 $(document).ready(function() {
   $(".card").hover(function() {
    $(this).filter(':not(:animated)').removeClass("card-inverse");     
   }, function() {
     $(this).addClass("card-inverse");
   });
});