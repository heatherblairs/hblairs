$(document).ready(function(){
  clickContact();
  showCurrentPage();
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

function showCurrentPage(){
  $('.links').click(function(){
    $(".navLinks [href]").each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("currentPage");
        }
    });
  })
}
