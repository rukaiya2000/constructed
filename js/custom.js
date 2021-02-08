/******************************************
    File Name: custom.js
/****************************************** */

(function($) {
    "use strict";

    /* ==============================================
    AFFIX
    =============================================== */
    $('.megamenu').affix({
        offset: {
            top: 0,
            bottom: function() {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    })

    /* ==============================================
    BACK TOP
    =============================================== */
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.dmtop').css({
                bottom: "75px"
            });
        } else {
            jQuery('.dmtop').css({
                bottom: "-100px"
            });
        }
    });

    /* ==============================================
       LOADER -->
        =============================================== */

    $(window).load(function() {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

    /* ==============================================
     FUN FACTS -->
     =============================================== */

    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 50; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() {
                count($this)
            }, 30);
        }
    }
    $(".stat_count, .stat_count_download").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });

    /* ==============================================
     TOOLTIP -->
     =============================================== */
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()

    /* ==============================================
     CONTACT -->
     =============================================== */
    jQuery(document).ready(function() {
        $('#contactform').submit(function() {
            var action = $(this).attr('action');
            $("#message").slideUp(750, function() {
                $('#message').hide();
                $('#submit')
                    .after('<img src="images/ajax-loader.gif" class="loader" />')
                    .attr('disabled', 'disabled');
                $.post(action, {
                        first_name: $('#first_name').val(),
                        last_name: $('#last_name').val(),
                        email: $('#email').val(),
                        phone: $('#phone').val(),
                        select_service: $('#select_service').val(),
                        select_price: $('#select_price').val(),
                        comments: $('#comments').val(),
                        verify: $('#verify').val()
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#contactform img.loader').fadeOut('slow', function() {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#contactform').slideUp('slow');
                    }
                );
            });
            return false;
        });
    });

    /* ==============================================
     CODE WRAPPER -->
     =============================================== */

    $('.code-wrapper').on("mousemove", function(e) {
        var offsets = $(this).offset();
        var fullWidth = $(this).width();
        var mouseX = e.pageX - offsets.left;

        if (mouseX < 0) {
            mouseX = 0;
        } else if (mouseX > fullWidth) {
            mouseX = fullWidth
        }

        $(this).parent().find('.divider-bar').css({
            left: mouseX,
            transition: 'none'
        });
        $(this).find('.design-wrapper').css({
            transform: 'translateX(' + (mouseX) + 'px)',
            transition: 'none'
        });
        $(this).find('.design-image').css({
            transform: 'translateX(' + (-1 * mouseX) + 'px)',
            transition: 'none'
        });
    });
    $('.divider-wrapper').on("mouseleave", function() {
        $(this).parent().find('.divider-bar').css({
            left: '50%',
            transition: 'all .3s'
        });
        $(this).find('.design-wrapper').css({
            transform: 'translateX(50%)',
            transition: 'all .3s'
        });
        $(this).find('.design-image').css({
            transform: 'translateX(-50%)',
            transition: 'all .3s'
        });
    });

})(jQuery);
$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('nav').addClass('navback');
    } else {
        $('nav').removeClass('navback');
    }
});

//read more button about
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
//read more button service
function myFun() {
    var dot = document.getElementById("dot");
    var moresText = document.getElementById("mores");
    var buttonText = document.getElementById("myButton");
  
    if (dot.style.display === "none") {
      dot.style.display = "inline";
      buttonText.innerHTML = "Read more";
      moresText.style.display = "none";
    } else {
      dot.style.display = "none";
      buttonText.innerHTML = "Read less";
      moresText.style.display = "inline";
    }
  }
	$('.grid').imagesLoaded(function(){
		$('.grid').isotope({
		  itemSelector: '.grid-item',
		  layoutMode: 'fitRows'
		});
	});
	$('.btn.all').click(function(){
		$('.grid').isotope({
			filter: '*'
		})			
	});
	$('.btn.field').click(function(){
		$('.grid').isotope({
			filter: '.field'
		})
	});
	$('.btn.geo').click(function(){
		$('.grid').isotope({
			filter: '.geo'
		})
	});
	$('.btn.bridge').click(function(){
		$('.grid').isotope({
			filter: '.bridge'
		})
    });
    $('.btn.lab').click(function(){
		$('.grid').isotope({
			filter: '.lab'
		})
	});
	$('.btn').click(function(){
		$('.btn').removeClass('on');
		$(this).toggleClass('on');
	});



    $("#form").validate({
        rules: {
          email: { required: true, email: true },
          first_name: { required: true },
          last_name: { required: true },
          custom_title: { required: true },
          custom_company: { required: true },
          custom_phone_novalid: { required: true },
          custom_state: { required: true },
          custom_natureofyourinquiry: { required: true },
          custom_country: { required: true },
          'custom_consent[]': { required: true }
        },
        messages: {
            email: "Enter Your Email Address",
            first_name: "Come on, you don't even know your own first name",
            last_name: "Come on, you don't even know your own last name",
            custom_title: "What is your title",
            custom_company: "Don't make me ask again",
            custom_phone_novalid: "Can I get your number",
            custom_country: "What country do you live in"
        }        
      });

