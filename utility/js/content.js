(function () {

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
        hamburger.classList.toggle("toggle");
    });

    window.onload = () => {
        const anchors = document.querySelectorAll('a:not([target="_blank"]):not(.exclude)');
        const transition = document.querySelector('.transition');

        setTimeout(() => {
            transition.classList.remove('is-active');
        }, 500);

        for (let i = 0; i < anchors.length; i++) {
            const anchor = anchors[i];

            anchor.addEventListener('click', e => {
                e.preventDefault();
                let target = e.currentTarget.href;

                console.log(transition);

                transition.classList.add('is-active');

                console.log(transition);

                window.setTimeout(function () {
                    window.location.href = target;
                }, 500);
            })
        }
    }

    window.addEventListener('load', () => {
        var lastScrollTop = 0;
        $(window).scroll(function () {
            var st = $(this).scrollTop();
            var banner = $('.top');
            setTimeout(function () {
                if (st > lastScrollTop) {
                    banner.addClass('hidden');
                } else {
                    banner.removeClass('hidden');
                }
                lastScrollTop = st;
            }, 100);
        });
        AOS.init({
            duration: 750,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });


    "use strict";

    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    if ($('.graphic').length > 0) {
        window.addEventListener('load', () => {
            let graphicContainer = select('.graphic');
            if (graphicContainer) {
                let graphicIsotope = new Isotope(graphicContainer, {
                    itemSelector: '.iso-item',
                    layoutMode: 'masonry',
                    filter: '.graphic',
                });

                let graphicFilters = select('#filters a', true);

                on('click', '#filters a', function (e) {
                    e.preventDefault();
                    graphicFilters.forEach(function (el) {
                        el.classList.remove('active');
                    });
                    this.classList.add('active');

                    graphicIsotope.arrange({
                        filter: this.getAttribute('data-filter')
                    });
                    graphicIsotope.on('arrangeComplete', function () {
                        AOS.refresh()
                    });
                }, true);
            }

        });
    }
})()

