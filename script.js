const btnScrollToTop = document.querySelector("#btnScrollToTop");
btnScrollToTop.addEventListener("click", function () {

var offset = 300

    $(window) .on('btnScrollToTop', function () {

        if( $(window) .scrollTop() > offset ) {
            $('body') .addClass('show')
        }else{
            $ ('body') .removeClass('show')
        }
    });    

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});