jQuery(document).ready(function() {

    //form validate
    jQuery("form").validate({

        rules:{
            name:{
                required: true,
                minlength: 2
            },
            phone:{
                required: true,
                digits: true
            },
            email:{
                required: true,
                email: true
            }

        }

    });

    //modal form
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');

    open_modal.click( function(event){
        event.preventDefault();

        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function(){
                $(div)
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    close.click( function(){
        modal
            .animate({opacity: 0, top: '45%'}, 200,
            function(){
                $(this).css('display', 'none');
                overlay.fadeOut(400);
                $(".message_modal").removeClass("show");
            }
        );
    });


//bxslider
    jQuery(window).load(function() {


        jQuery('.visa_slider1').each(function() {
            jQuery(this).bxSlider({
                //auto: true,
                minSlides: 1,
                maxSlides: 3,
                slideWidth: 355,
                nextText: "",
                prevText: "",
                slideMargin: 20,
                infiniteLoop: false

            });
        });

        jQuery('.list_comment').each(function() {
            jQuery(this).bxSlider({
                //auto: true,
                minSlides: 1,
                maxSlides: 3,
                slideWidth: 350,
                nextText: "",
                prevText: "",
                slideMargin: 20,
                infiniteLoop: false

            });
        });



    });


    jQuery('.slider_faq, [class^="jobs_slider"]').bxSlider({
        nextText: "",
        prevText: "",
        adaptiveHeight: true,
        infiniteLoop: false,

        hideControlOnEnd: false
                //auto: true

    });



    //modal form text
    jQuery("#visu .open_modal").click(function() {
            var title_visa = jQuery(this).closest(".tabs").find(".tabs-menu .active").text() + ' (' +jQuery(this).closest(".visa_item").find("h4").text()+ ')';
            jQuery(".title_visa").text(title_visa);
            var country_visa = jQuery(this).closest(".tabs").find(".tabs-menu .active").text();
            var name_visa = jQuery(this).closest(".visa_item").find("h4").text();

            var time_visa = jQuery(this).closest(".visa_item").find(".time").text();
            jQuery(".time_visa").text(time_visa);

            var price_visa = jQuery(this).closest(".visa_item").find(".price").text();
            jQuery(".price_visa").text(price_visa);
            jQuery("input[name='visa[type]']").attr("value", name_visa);
            jQuery("input[name='visa[country]']").attr("value", country_visa);
            jQuery("input[name='visa[period]']").attr("value", time_visa);
            jQuery("input[name='visa[price]']").attr("value", price_visa);


    });

    jQuery("#jobs .open_modal").click(function() {
        var title_jobs = jQuery(this).closest(".tabs").find(".tabs-menu .active").text();
        var job_title = jQuery(this).closest(".jobs_item").find("h4").text();

        jQuery(".title_visa").text(title_jobs);
        var job_id = jQuery(this).closest(".jobs_item").attr('data-id');
        jQuery("input[name='job[id]']").attr("value", job_id);
        jQuery(".job_title").text(job_title);
        //jQuery(".time_visa").text("");
        jQuery(".price_visa").text("");
        var country_job = jQuery(this).closest(".tabs").find(".tabs-menu .active").text();
        var name_job = jQuery(this).closest(".jobs_item").find("h4").text();
        jQuery("input[name='job[title]']").attr("value", name_job);
        jQuery("input[name='job[country]']").attr("value", country_job);
    });



    //map
    /*
    $(window).on('load', function() {
        // Create a map object and specify the DOM element for display.
        var map1 = new google.maps.Map(document.getElementById('map1'), {
            center: {lat:49.4417281, lng: 32.0660435},
            scrollwheel: false,
            zoom: 16
        });
        var marker1 = new google.maps.Marker({
            position: {lat:49.4417281, lng: 32.0660435},
            map: map1

        });

        var map2 = new google.maps.Map(document.getElementById('map2'), {
            center: {lat:48.7699292, lng: 30.2154405},
            scrollwheel: false,
            zoom: 16
        });
        var marker2 = new google.maps.Marker({
            position: {lat:48.7699292, lng: 30.2154405},
            map: map2

        });

    });
    */



    //city filter
    /*jQuery(".header-phone .city").click(function(){
        jQuery(this).find("ul").slideToggle();

    });
    jQuery(".header-phone .city li").click(function(){
        var active_text=jQuery(this).text();
        //console.log(active_text);
        jQuery(".city_active").text(active_text);
        jQuery(this).addClass("active").siblings().removeClass('active');

        var customType = jQuery(this).attr('data-filter');


        jQuery('.phone_list div, .address_list div,[id^="map"]').each(function(){
            if(jQuery(this).attr('data-filter')==customType) jQuery(this).addClass("show"); else jQuery(this).removeClass("show");
        });


    });*/


/*
    jQuery(".header-phone .block_phone").click(function(){
        jQuery(this).toggleClass("open");

    });*/



    jQuery(window).scroll(function () {

        if ((jQuery(this).scrollTop() > 20) ) {
            jQuery("#menu-holder").addClass("fixed");
            // console.log("fbhdfh5555");


        } else{
            jQuery("#menu-holder").removeClass("fixed");
        }
    });



///menu
    jQuery("#menu").on("click","a[href^='#']", function (event) {

        event.preventDefault();
        var id  = jQuery(this).attr('href'),
        top = jQuery(id).offset().top;
        jQuery('body,html').animate({scrollTop: top}, 1500);
    });
    jQuery("#menu-icon").on("click", function () {
        jQuery(this).next().slideToggle();
    });
    jQuery("#menu a").on("click", function(){

        if (jQuery(window).width() <= 959) {
            jQuery("#menu").slideToggle();

        }


    });

    $(".select_toggle").on('click', function () {
        $(this).parent().parent().toggleClass('open');
    });

    
///main slider
    $(function() {

        var Page = (function() {

            var $nav = $( '#nav-dots > span' ),
                slitslider = $( '#slider' ).slitslider( {
                    onBeforeChange : function( slide, pos ) {

                        $nav.removeClass( 'nav-dot-current' );
                        $nav.eq( pos ).addClass( 'nav-dot-current' );

                    }
                } ),

                init = function() {

                    initEvents();

                },
                initEvents = function() {

                    $nav.each( function( i ) {

                        $( this ).on( 'click', function( event ) {

                            var $dot = $( this );

                            if( !slitslider.isActive() ) {

                                $nav.removeClass( 'nav-dot-current' );
                                $dot.addClass( 'nav-dot-current' );

                            }

                            slitslider.jump( i + 1 );
                            return false;

                        } );

                    } );

                };

            return { init : init };

        })();

        Page.init();

        /**
         * Notes:
         *
         * example how to add items:
         */

        /*

         var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');

         // call the plugin's add method
         ss.add($items);

         */

    });



});


jQuery(document).ready(function($){

    var
        speed = 500,
        $scrollTop = $('<a href="#" class="scrollTop">').appendTo('body');
    $scrollTop.click(function(e){
        e.preventDefault();

        $( 'html:not(:animated),body:not(:animated)' ).animate({ scrollTop: 0}, speed );
    });

    function show_scrollTop(){
        ( $(window).scrollTop() > 300 ) ? $scrollTop.fadeIn(600) : $scrollTop.fadeOut(600);
    }
    $(window).scroll( function(){ show_scrollTop(); } );
    show_scrollTop();


    $('.text_header .number').each(function () {
        var $this = $(this);
        var split = $(this).text().split('');
        console.log(split);
        $this.text('');
        for (var i = 0; i < 3; i++) {
            var n = i+1;
            console.log(split[i]);
            $this.append('<div class="number'+n+'">'+split[i]+'</div>');
        }
    });



});