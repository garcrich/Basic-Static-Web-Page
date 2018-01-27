var logoToggle = document.getElementById('logo-toggle'),
    scrollToTop = document.getElementById('scrollToTop'),
    uk2GroupLogo = document.querySelector('.UK2-Group-Logo'),
    toggleButton = document.querySelector('.toggle-button'),
    slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 225,
        'tolerance': 70
    });

function scrollTopAnimation() {
    var cosParameter = window.scrollY / 2,
        scrollCount = 0,
        oldTimestamp = performance.now();

    function step(newTimestamp) {
        scrollCount += Math.PI / (500 / (newTimestamp - oldTimestamp));
        if (scrollCount >= Math.PI) window.scrollTo(0, 0);
        if (window.scrollY === 0) return;
        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
};

function mobileNavToggle() {
    toggleButton.classList.toggle('transition-nav');
    slideout.toggle();
}

toggleButton.addEventListener('click', function () {
    mobileNavToggle();
});

window.addEventListener("resize", function () {
    clearTimeout(checkForOpenNav);
    var checkForOpenNav = setTimeout(function() {
        if (document.body.clientWidth >= 426 && document.documentElement.classList.contains('slideout-open')) {
            mobileNavToggle();
        }
    },300)
})

logoToggle.onclick = function () {
    uk2GroupLogo.classList.remove('logo-hide');
    logoToggle.removeAttribute('id');
};

scrollToTop.addEventListener('click', scrollTopAnimation);