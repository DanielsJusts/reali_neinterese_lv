(function (w, d) {
    var hasCookie;

    try {
        hasCookie = localStorage.getItem('cookie-accepted') === 'yes';
    } catch (e) {}

    if (!hasCookie) {
        d.querySelector('.cookies').classList.add('active');
    }
    
    function closeCookieNotice() {
        d.querySelector('.cookies').classList.remove('active');
    }

    d.getElementById('js-reject-cookies').onclick = closeCookieNotice;


    d.getElementById('js-accept-cookies').onclick = function (e) {
        try {
            localStorage.setItem('cookie-accepted', 'yes');
        } catch (e) {}

        closeCookieNotice();
    }
})(window, document);