$(function() {

  // Slider
  $('#coin-slider').coinslider({width:940,height:310,opacity:1});

  // Colorbox
  $('.gallery a').colorbox({current: "{current}/{total}"});


// Cufon
Cufon.replace('h1, h2, h3, h4, h5, h6, .article a.com, .menu_nav ul li a, .post_content a.rm', { hover: true });
//Cufon.replace('h1', { color: '-linear-gradient(#fff, #ffaf02)'});
//Cufon.replace('h1 small', { color: '#8a98a5'});

});	


