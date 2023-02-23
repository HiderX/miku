// page scroll -------------------------------------------------
$(function() {

    var backTop = $('#pageTop');

    $(window).scroll(function () {

        if ($(this).scrollTop() > 100){
            backTop.removeClass('hide');
        }
		else{
            backTop.addClass('hide');
        }
    });

	$(window).scroll(function () {

        if ($(this).scrollTop() > 140){
            $(".mobile_title").removeClass('hide');
        }
		else{
            $(".mobile_title").addClass('hide');
        }
    });

    backTop.click(function () {

        $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});
