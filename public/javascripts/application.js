$(function() {

  var currentPosition = 0;
  var slideWidth = 620;
  var slideHeight = 320;
  var slides = $('.slide');
  var numberOfSlides = slides.length;


  $('#holder').css('overflow', 'hidden');
  $('#slider').css('height', '320px');


  $('a#news').css( { 'background-color' : '#111111' ,  'text-decoration' : 'none' });


  function rollOverLink(){ 
  $('div#home_nav').mouseenter(function(e){
      if($(e.target) == $('news')){
        alert();
      };
    });
  };



  $('a.home_link').bind('click', function(){
  //  e.preventDefault();

    if($(this).attr('id')=='news'){
      currentPosition = 0;
      $('a#news').css( 'background-color' , '#111111' );
      $('a#current').css( 'background-color' , '#999999' );
      $('a#soon').css( 'background-color' , '#999999' );
      $('a#us').css( 'background-color', '#999999' );
      rollOverLink();
    }else
    if($(this).attr('id')=='current'){
      currentPosition = 1;
      $('a#news').css( 'background-color' , '#999999' );
      $('a#current').css( 'background-color' , '#111111' );
      $('a#soon').css( 'background-color' , '#999999' );
      $('a#us').css( 'background-color', '#999999' );
    }else
    if($(this).attr('id')=='soon'){
      currentPosition = 2;
      $('a#news').css( 'background-color' , '#999999' );
      $('a#current').css( 'background-color' , '#999999' );
      $('a#soon').css( 'background-color' , '#111111' );
      $('a#us').css( 'background-color', '#999999' );
    }else
    if($(this).attr('id')=='us'){
      currentPosition = 3;
      $('a#news').css( 'background-color' , '#999999' );
      $('a#current').css( 'background-color' , '#999999' );
      $('a#soon').css( 'background-color' , '#999999' );
      $('a#us').css( 'background-color', '#111111' );
    };

     //alert(currentPosition)

    $('#slider').animate({ 'marginLeft' : slideWidth*-currentPosition });

    return false;


  });
})



