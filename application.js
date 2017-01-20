$(document).ready(function() {
  
  $('.featured').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    $('.articles-top').slideToggle();
  });
  
  $('#search').on('focus', function() {
    $(this).attr("placeholder", "You're Looking For?");
  });
  
  $('#search').on('focusout', function() {
    $(this).attr("placeholder", "Search");
  });
  
  $('.left-nav').on('mouseenter', function() {
    $('.main-menu').css("display", "block").animate({'top': '60px', 'opacity': '1'}, 'fast');
  });
  $('.left-nav').on('mouseleave', function() {
    $('.main-menu').css("display", "block").animate({'top': '70px', 'opacity': '0'}, 'fast');
  });
  
  $('.main-menu li').on('click', function(event) {
	$(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
  
});