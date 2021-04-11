var navBar = document.getElementById('js-menu');
var navBarToggle = document.getElementById('navbar-toggle');

if(navBarToggle) {
  navBarToggle.addEventListener('click', function () {
    navBar.classList.toggle('active');
  });
}

$('.nav-bar a').click(function(event){
  event.preventDefault();
  //get displaying tab content jQuery selector
  var active_tab_selector = $('.nav-bar  a.item--active').attr('href');

  // find actived navigation and remove 'active' css
  var actived_nav = $('.nav-bar  a.item--active');
  actived_nav.removeClass('item--active');

  //add 'active' css into clicked navigation
  $(this).addClass('item--active');

  //hide displaying tab content
  $(active_tab_selector).removeClass('item--active');
  $(active_tab_selector).addClass('hide');

  var target_tab_selector = $(this).attr('href');
  $(target_tab_selector).removeClass('hide');
  $(target_tab_selector).addClass('item--active');

  var navBarToggle = document.getElementById('navbar-toggle');

  if(navBarToggle) {
    navBar.classList.toggle('active');
  }
})
