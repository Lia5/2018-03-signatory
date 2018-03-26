$(document).ready(function(){
/*========================
slick clider header
=======================*/
  $('.main-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    adaptiveHeight: true,    
    prevArrow: '<i class="fa fa-angle-left feedback-slider-arrows arrow-left_mob"></i>',

    nextArrow: '<i class="fa fa-angle-right feedback-slider-arrows arrow-right_mob"></i>',
    dots: true,
    dotsClass: "slider--my-dots",
  });
  /*========================
slick clider page-card-main-slider
=======================*/

$('.page-card-main-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 3000,
  arrows: true,
  adaptiveHeight: true,    
  prevArrow: '<i class="fa fa-angle-left slider-company-arrows slider-company_arrow-left"></i>',
  nextArrow: '<i class="fa fa-angle-right slider-company-arrows slider-company_arrow-right"></i>',
  dots: false,
});
/*========================
slick clider page-card-main-videoslider
=======================*/

  $('.page-card-main-videoslider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,    
    prevArrow: '<i class="fa fa-angle-left slider-company-arrows slider-company_arrow-left"></i>',
    nextArrow: '<i class="fa fa-angle-right slider-company-arrows slider-company_arrow-right"></i>',
    dots: false,
  });

  $('.page-card-series').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,    
    prevArrow: '<i class="fa fa-angle-left slider-company-arrows slider-company_arrow-left"></i>',
    nextArrow: '<i class="fa fa-angle-right slider-company-arrows slider-company_arrow-right"></i>',
    dots: false,
  });
/*========================
slick clider footer
=======================*/
  $('.slider-company').slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,    
    prevArrow: '<i class="fa fa-angle-left slider-company-arrows slider-company_arrow-left"></i>',

    nextArrow: '<i class="fa fa-angle-right slider-company-arrows slider-company_arrow-right"></i>',
    dots: false,
    dotsClass: "slider--my-dots",
  });

/*========================
 mega menu
=======================*/

 $('.catalog-menu').on('click', function(e) {
    e.preventDefault();
    $('.modal-mega-menu').toggleClass('modal-mega-menu_show');
    e.preventDefault();
    $('.catalog-ico').toggleClass('catalog-ico-show');
})
});

/*========================
MAP
=======================*/
if(jQuery('.page-contacts-map').length) {
    ymaps.ready(init);
    function init(){     
       var myMap = new ymaps.Map("page-contacts-map", {
            center: [55.880685, 37.454716],
            zoom: 10,
            controls: []
        });
        
        
    
   myMap.behaviors.disable('scrollZoom');
   
    };
  }
  /*========================
tabs
 =======================*/			
 jQuery.fn.lightTabs = function(options) {
        
  var createTabs = function() {
      tabs = this;
      i = 0;
      
      showPage = function(i) {
          $(tabs).children("div").children("div").hide();
          $(tabs).children("div").children("div").eq(i).show();
          $(tabs).children("ul").children("li").removeClass("active");
          $(tabs).children("ul").children("li").eq(i).addClass("active");
      }
      
      showPage(0);				
      
      $(tabs).children("ul").children("li").each(function(index, element){
          $(element).attr("data-page", i);
          i++;                        
      });
      
      $(tabs).children("ul").children("li").click(function(){
          showPage(parseInt($(this).attr("data-page")));
      });				
  };		
  return this.each(createTabs);
};

/*========================
tabs2
=======================*/      
// $( function() {
//   $( "#tabs" ).tabs();
// });
$(".tab_item").not(":first").hide();
$(".box-tab .tab").click(function() {
  $(".box-tab .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
/*===================
tabs
===================*/
$(".tabs").lightTabs();

/*range*/

$(function() {
  $("#slider-range").slider({
      range: true,
      min: 0,
      max: 80000,
      values: [500, 50000],
      slide: function(event, ui) {
          $("#amount").val("от " + ui.values[0]);
          $("#amount-max").val("от " + ui.values[1]);
      }
  });
  $("#amount").val("от " + $("#slider-range").slider("values", 0));
  $("#amount-max").val("от " + $("#slider-range").slider("values", 1));
});
// Изменение местоположения ползунка при вводиде данных в первый элемент input
$("input#amount").change(function() {
  var value1 = $("input#amount").val();
  var value2 = $("input#amount-max").val();
  if (parseInt(value1) > parseInt(value2)) {
      value1 = value2;
      $("input#amount").val(value1);
  }
  $("#slider-range").slider("values", 0, value1);
});

// Изменение местоположения ползунка при вводиде данных в второй элемент input  
$("input#amount-max").change(function() {
  var value1 = $("input#amount").val();
  var value2 = $("input#amount-max").val();

  if (parseInt(value1) > parseInt(value2)) {
      value2 = value1;
      $("input#amount-max").val(value2);
  }
  $("#slider-range").slider("values", 1, value2);
});