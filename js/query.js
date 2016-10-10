$(document).ready(function(){
  clickContact();
})

function clickContact(){
  $('#contact').click(function(){
    $('.social-icons').toggle();
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    return false;
  });
}
