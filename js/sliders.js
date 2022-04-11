$(document).ready(function(){
  $(".hero__slider").owlCarousel({
    items: 1.48,
    margin: 20,
    dots: false,
    responsive : {
      // breakpoint from 768 up
      768 : {
          items : 1.5,
      },
      1200 : {
          items : 2,
      },
      1400 : {
        items : 2.5,
      },
      1900 : {
        items : 3,
     }  
  }
    
  });

  $(".trends__slider").owlCarousel({
    items: 1.45,
    margin: 30,
    dots: false,
    responsive : {
      // breakpoint from 768 up
      768 : {
          items : 1.5,
      },
      900: {
          items : 2,
          
      },
      1100 : {
          items : 2.5,
          
      },
      1300 : {
          items : 3, 
      },
      1500 : {
        items : 3.5, 
      },
      1700 : {
        items : 4, 
      }
    }
  });

  $(".arrivals__slider").owlCarousel({
    items: 1.2,
    margin: 40,
    dots: false,
    responsive : {
      // breakpoint from 768 up
      768 : {
          items : 1.5,
      },
      900: {
          items : 1.7,
          
      },
      1100 : {
          items : 2,
          
      },
      1300 : {
          items : 2.3, 
      },
      1500 : {
        items : 2.8, 
      },
      1700 : {
        items : 3, 
      }
    }
    
  });
});

