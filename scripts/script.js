$$(document).ready(function () {
    $("#back-top").hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});

// 100 - это количество пикселей, после прокрутки которого появляется кнопка;
// 0 - это значит что прокрутка будет производится до нулевого пикселя т. е. до самого верха.
// 800 - это скорость прокрутки в миллисекундах.  