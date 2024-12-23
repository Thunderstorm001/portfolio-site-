(function () {
    "use strict";
    function swapStyle() {
        const el = document.querySelector('nav');
        el.classList.toggle('show');
    }

    const menu = document.querySelectorAll('.menu-btn');
    for (let item of menu) {
        item.addEventListener('click', swapStyle);
    }
})();