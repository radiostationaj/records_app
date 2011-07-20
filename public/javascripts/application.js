$(function() {

  var currentPosition = 0;
  var slideWidth = 620;
  var slideHeight = 320;
  var slides = $('.slide');
  var numberOfSlides = slides.length;


  $('#holder').css('overflow', 'hidden');
  $('#slider').css('height', '320px');


  $('a#news').css( { 'background-color' : '#111111' ,  'text-decoration' : 'none' });
  $('#home_nav').css( 'visibility' , 'visible' );




  $('a.home_link').bind('click', function(){
  //  e.preventDefault();

    if($(this).attr('id')=='news'){
      currentPosition = 0;
      $('a#news').css( 'background-color' , '#111111' );
      $('a#current').css( 'background-color' , '#888888' );
      $('a#soon').css( 'background-color' , '#888888' );
      $('a#us').css( 'background-color', '#888888' );
    }else
    if($(this).attr('id')=='current'){
      currentPosition = 1;
      $('a#news').css( 'background-color' , '#888888' );
      $('a#current').css( 'background-color' , '#111111' );
      $('a#soon').css( 'background-color' , '#888888' );
      $('a#us').css( 'background-color', '#888888' );
    }else
    if($(this).attr('id')=='soon'){
      currentPosition = 2;
      $('a#news').css( 'background-color' , '#888888' );
      $('a#current').css( 'background-color' , '#888888' );
      $('a#soon').css( 'background-color' , '#111111' );
      $('a#us').css( 'background-color', '#888888' );
    }else
    if($(this).attr('id')=='us'){
      currentPosition = 3;
      $('a#news').css( 'background-color' , '#888888' );
      $('a#current').css( 'background-color' , '#888888' );
      $('a#soon').css( 'background-color' , '#888888' );
      $('a#us').css( 'background-color', '#111111' );
      $('a#slide_3:hover').css( 'color', 'red');
    };

     //alert(currentPosition)

    $('#slider').animate({ 'marginLeft' : slideWidth*-currentPosition });

    return false;


  });
})



