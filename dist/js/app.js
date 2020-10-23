(function (w, d) {
    var hasCookie;
    var hasTouched;

    try {
        hasCookie = sessionStorage.getItem('cookie-accepted') === 'yes';
    } catch (e) {}

    if (!hasCookie) {
        d.querySelector('.cookies').classList.add('active');
    }

    function docReady(fn) {
        // see if DOM is already available
        if (document.readyState === "complete" || document.readyState === "interactive") {
            // call on next available tick
            setTimeout(fn, 1);
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }  
    
    function closeCookieNotice() {
        d.querySelector('.cookies').classList.remove('active');
    }

    function shakeDainis() {
        var dainis = d.getElementById('dainis');

        dainis.classList.add('shake');

        setTimeout(function () {
            dainis.classList.remove('shake');
        }, 1000);
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

    docReady(function () {
        shakeDainis();

        setInterval(shakeDainis, 5 * 1000);
    })
})(window, document);
