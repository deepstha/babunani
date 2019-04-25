        // $(window).load(function(){
        //    loader(); 
        //     function loader(){
        //         var n = 0;
        //         for(i=0; i<=100; i++){
        //           setTimeout(function() { 
        //             $('.loader span').html(n + '%');
        //             $('.bar').css('width', n + '%');
        //             n++;
        //           },i*50);
        //         }
        //     };
        //     setTimeout(function(){  
        //         $('body').css('overflow', 'auto'); 
        //         $('#preloader').fadeOut();
        //         $('.preloader_img').delay(150).fadeOut('slow'); 
        //     }, 5500);
        // });

        // lastScroll = 0;
        // $(window).scroll(function() {
        //     var scroll = $(window).scrollTop();
        //     if (lastScroll - scroll > 0) {
        //         $('.header-block').addClass('is-sticky');
        //     } else {
        //         $('.header-block').removeClass('is-sticky');
        //     }
        //     lastScroll = scroll;
        // })

        // Windows Scroll
        $(window).scroll(function() {
            if($(window).width() < 992){
                if ($(this).scrollTop() > 200) {
                    $('.header-block').addClass(' is-sticky');
                } else {
                    $('.header-block').removeClass('is-sticky');
                }
            }else{
                if ($(this).scrollTop() > 500) {
                    $('.header-block').addClass(' is-sticky');
                } else {
                    $('.header-block').removeClass('is-sticky');
                }
            }
        })
        $(document).ready(function() {
            $(".close-button").click(function() {
                $(this).parent().removeClass('active in');
                $('.icon-bar > .nav-tabs > li').removeClass('active');
            });

            $('.navbar-nav a').on('click', function() {
                $('.navbar-nav').find('li.active').removeClass('active');
                $(this).parent('li').addClass('active');
                $('.navbar-collapse').removeClass('show');
            });

            //Banner
            var owl = $('#banner-wrap1');
            owl.owlCarousel({
                items: 1,
                loop: true,
                nav: true,
                animateOut: 'fadeOut',
                autoplayTimeout:5000,
                autoplay: true
            });

            // add animate.css class(es) to the elements to be animated
            function setAnimation(_elem, _InOut) {
                // Store all animationend event name in a string.
                // cf animate.css documentation
                var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

                _elem.each(function() {
                    var $elem = $(this);
                    var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

                    $elem.addClass($animationType).one(animationEndEvent, function() {
                        $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
                    });
                });
            }

            // Fired before current slide change
            owl.on('change.owl.carousel', function(event) {
                var $currentItem = $('.owl-item', owl).eq(event.item.index);
                var $elemsToanim = $currentItem.find("[data-animation-out]");
                setAnimation($elemsToanim, 'out');
            });

            // Fired after current slide has been changed
            owl.on('changed.owl.carousel', function(event) {
                var $currentItem = $('.owl-item', owl).eq(event.item.index);
                var $elemsToanim = $currentItem.find("[data-animation-in]");
                setAnimation($elemsToanim, 'in');
            })

            //remove
            var tab = $('#tab-info');
            $('.button-rm').on('click', function() {
                // if (tab.hasClass('hidden-block')){
                //     tab.removeClass('hidden-block');
                //     setTimeout(function(){
                //         tab.removeClass('visuallyhidden');
                //     }, 20);
                // }
                // else {
                //     tab.addClass('visuallyhidden');
                //     tab.one('transitionend', function(e){
                //         tab.addClass('hidden-block');
                //     });
                // }
                // tab.one('transitionend', function(e){
                //     tab.addClass('hidden-block');
                // })

                tab.toggleClass('gutter-ls');
                tab.toggleClass('hidden-block');

            });

            //AOS scroll
            AOS.init({
                duration: 1200,
            })

            // Add smooth scrolling to all links
            $(".navbar-nav a").on('click', function(event) {
                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                    // Prevent default anchor click behavior
                    event.preventDefault();

                    // Store hash
                    var hash = this.hash;

                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function() {

                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                } // End if
            });

            // animate
            // $('.navbar-nav a').animate({
            //     scrollTop: $(hash).offset().top
            // }, 1000, function() {

            //     // when done, add hash to url
            //     // (default click behaviour)
            //     window.location.hash = hash;
            // });

            $('#carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 210,
                itemMargin: 5,
                asNavFor: '#slider'
            });

            $('#slider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: "#carousel",
                start: function(slider) {
                    $('body').removeClass('loading');
                }
            });
            //sidebar active
            $('button.navbar-toggle').on('click', function() {
                $('.sidebar ').toggleClass('is-active');
            });

        });