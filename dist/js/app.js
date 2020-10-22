(function (w, d) {
    var hasCookie;
    var hasTouched;

    try {
        hasCookie = sessionStorage.getItem('cookie-accepted') === 'yes';
    } catch (e) {}

    if (!hasCookie) {
        d.querySelector('.cookies').classList.add('active');
    }
    
    function closeCookieNotice() {
        d.querySelector('.cookies').classList.remove('active');
    }

    d.getElementById('js-reject-cookies').onclick = closeCookieNotice;

    d.getElementById('js-accept-cookies').addEventListener('touchstart', function () {
        hasTouched = true;
    });

    d.getElementById('js-accept-cookies').onclick = function (e) {
        e.target.classList.add('rainbow');

        try {
            sessionStorage.setItem('cookie-accepted', 'yes');
        } catch (e) {}

        setTimeout(function () {
            if (!hasTouched) {
                closeCookieNotice()
            } else {
                setTimeout(closeCookieNotice, 1.5 * 1000);
            }
        }, 50);
    }
})(window, document);