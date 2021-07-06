$(document).ready(function(){
$(document).on("click", ".heading-man-2", function(){
    $(".man-info").hide();
    $(".man-info-2").show(500);
    $(".man-info-3").hide();
})

$(document).on("click", ".heading-man-3", function(){
    $(".man-info-2").hide();
    $(".man-info-3").show(500);
    $(".man-info").hide();
})

$(document).on("click", ".heading-man", function(){
    $(".man-info-2").hide();
    $(".man-info").show(500);
    $(".man-info-3").hide();
})


$(document).on("click", ".search_click", function(){
    $(".search-box").show(500);
})

$(document).on("click", ".exit", function(){
    $(".search-box").hide(500);
})


$(document).on("click", ".pin", function(){
    $witdth = $(window).width();
    $klass = "myadress";
    if($witdth < 992 && $witdth > 600){
        $klass = "myadress-tablet";
    }else if($witdth < 600){
        $klass = "myadress-phone";
    }
    // }else if($witdth < 400){
    //     $klass = "myadress-mini";
    // }
    if($(this).hasClass("clicked")){
        $("."+$klass).hide(500);
        // $(this).removeClass("clicked");
    }else{
        $("."+$klass).show(500);
        // $(this).addClass("clicked");
    }
    $(this).toggleClass("clicked");

})


$('.message-reviews').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 1000,
    prevArrow:'<i class="fas fa-angle-left"></i>',
    nextArrow:'<i class="fas fa-angle-right"></i>',
    responsive: [
        {
          breakpoint: 700,
          settings: {
            prevArrow: false ,
            nextArrow: false,
          }
        },
        
    ]


    }); 
  });


$('.joshua_reviews').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 1000,
    // prevArrow:'<i class="fas fa-angle-left"></i>',
    // nextArrow:'<i class="fas fa-angle-right"></i>',
    // responsive: [
    //     {
    //       breakpoint: 700,
    //       settings: {
    //         prevArrow: false ,
    //         nextArrow: false,
    //       }
    //     },
        
    // ]


    }); 
  


$('.main-slider').slick({
    dots: true,
    customPaging : function(slider, i) {
        if(i==0){
            return '<span class="slider_num">01</span> intro';
        }else if(i==1){
            return '<span class="slider_num">02</span> work';
        }else if(i==2){
            return '<span class="slider_num">03</span> about';
        } else if(i==3){
            return '<span class="slider_num">04</span> contact';
        }
    },
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false
});

$(document).on("submit", ".subscribe", function(event){
    $element = $(".subscribe_input").val();
    try {
        if($element.length > 1){
            $(".subscribe_input").css({"border":"0px red solid"})
        }else{
            event.preventDefault();   
            $(".subscribe_input").css({"border":"1px red solid"})
        }        
    } catch (error) {
        console.log(error)
    }




});

// $(document).on("click", ".fas_burger", function(){
//     $(".nav.open").hide();
//     $(".nav.open").show(500);
//     $(".nav.open").hide();
  
// })

$(".menu-btn_burger .fas_burger").click(function(){
    $("nav.open").toggleClass("active");
})    