(function($) {
  "use strict";
  
    $.fn.andSelf = function() {
      return this.addBack.apply(this, arguments);
    }

    /*
    |====================
    | Mobile NAv trigger
    |=====================
    */
    
    var trigger = $('.navbar-toggler'),
      overlay     = $('.overlay'),
      navc     = $('.navbar-collapse'),
      active      = false;
  

      $('.navbar-toggler, .navbar-nav li a, .overlay').on('click', function () {
          $('.navbar-toggler').toggleClass('active')
        //   $('#js-navbar-menu').toggleClass('active');
        //   $('.navbar-collapse').toggleClass('show');
          overlay.toggleClass('active');
          navc.toggleClass('active');
      });  
      
        
    /*
    |=================
    | Onepage Nav
    |================
    */
        
      $('#mh-header').onePageNav({
          currentClass: 'active', 
          changeHash: false,
          scrollSpeed: 750,
          scrollThreshold: 0.5,
      });
    
    /*
    |=================
    | fancybox
    |================
    */
 
      $("[data-fancybox]").fancybox({});
      
      
    /*
    |===============
    | WOW ANIMATION
    |==================
    */
    	var wow = new WOW({
          mobile: false  // trigger animations on mobile devices (default is true)
      });
      wow.init();
 
  
    /*
    | ==========================
    | NAV FIXED ON SCROLL
    | ==========================
    */
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".nav-scroll").addClass("nav-strict");
        } else {
            $(".nav-scroll").removeClass("nav-strict");
        }
    });
    
        
    /*
    |=================
    | CONTACT FORM
    |=================
    */
        
      
        function submitForm(){
          var name = $("#name").val();
          var email = $("#email").val();
          var message = $("#message").val();
          $.ajax({
              type: "POST",
              url: "process.php",
              data: "name=" + name + "&email=" + email + "&message=" + message,
              success : function(text){
                  if (text == "success"){
                      formSuccess();
                    } else {
                      formError();
                      submitMSG(false,text);
                    }
                }
            });
        }
        function formSuccess(){
            $("#contactForm")[0].reset();
            submitMSG(true, "Message Sent!")
        }
    	  function formError(){   
    	    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    	        $(this).removeClass();
    	    });
    	  }
        function submitMSG(valid, msg){
          if(valid){
            var msgClasses = "h3 text-center fadeInUp animated text-success";
          } else {
            var msgClasses = "h3 text-center shake animated text-danger";
          }
          $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
        }
    

    
}(jQuery));
