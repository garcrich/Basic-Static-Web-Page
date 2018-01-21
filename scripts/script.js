
var logoToggle = document.getElementById('logo-toggle'),
    scrollToTop = document.getElementById('scrollToTop'),
    uk2GroupLogo = document.querySelector('.UK2-Group-Logo'),
    toggleButton = document.querySelector('.toggle-button'),
    slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
    }),
    scrollTopAnimation = function () {
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

toggleButton.addEventListener('click', function () {
    toggleButton.classList.toggle('transition-nav');
    slideout.toggle();
});

logoToggle.onclick = function () {
    uk2GroupLogo.classList.remove('logo-hide');
    logoToggle.removeAttribute('id');
};

scrollToTop.addEventListener('click', scrollTopAnimation);