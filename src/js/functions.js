jQuery(document).ready(function() {

    //form validate
    jQuery(".call_back_form, .form_visa").validate({

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
            }
        );
    });



    jQuery(window).load(function() {
        //slider visa
        jQuery('.visa_slider').each(function() {
            jQuery(this).bxSlider({
                //auto: true,
                minSlides: 3,
                maxSlides: 3,
                slideWidth: 500,
                nextText: "",
                prevText: "",
                slideMargin: 20

            });
        });


    });
    jQuery(window).load(function() {
        //slider visa
        jQuery('.jobs_slider').each(function() {
            jQuery(this).bxSlider({
                //auto: true,
                minSlides: 3,
                maxSlides: 3,
                slideWidth: 500,
                nextText: "",
                prevText: "",
                slideMargin: 20

            });
        });


    });


    jQuery("#visu .open_modal").click(function() {
            var title_visa = jQuery(this).closest(".tabs").find(".tabs-menu .active").text() + ' (' +jQuery(this).closest(".visa_item").find("h4").text()+ ')';
            jQuery(".title_visa").text(title_visa);
            var time_visa = jQuery(this).closest(".visa_item").find(".time").text();
            jQuery(".time_visa").text(time_visa);
            var price_visa = jQuery(this).closest(".visa_item").find(".price").text();
            jQuery(".price_visa").text(price_visa);
    });

    jQuery("#jobs .open_modal").click(function() {
        var title_jobs = jQuery(this).closest(".tabs").find(".tabs-menu .active").text() + ' (' +jQuery(this).closest(".jobs_item").find("h4").text()+ ')';
        jQuery(".title_visa").text(title_jobs);
        jQuery(".time_visa").text("");
        jQuery(".price_visa").text("");
    });

});