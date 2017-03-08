$(document).ready(function(){
  clickContact();
})

function clickContact(){
  $('#contact').click(function(){
    $('.socialIcons').toggle();
    $("html, body").animate({
      scrollTop: $(document).height()
    }, "slow");
    return false;
  });
}
