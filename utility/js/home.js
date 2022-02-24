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

        function aboutText(item) {
            item.style.display = 'inline-block';
            item.style.fontSize = '1px';
            var parentWidth = item.parentNode.offsetWidth;
            var percentage = parentWidth / item.offsetWidth;
            var size = 0;
            while (item.offsetWidth < parentWidth) {
                size += 1;
                item.style.fontSize = size + 'px';
            }
            item.style.fontSize = size - 1 + 'px';
        }

        var elements = document.querySelectorAll('.about-text div');
        window.onresize = function () {
            Array.prototype.forEach.call(elements, aboutText);
        };

        window.onresize();

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
        if ($(window).width() > 767) {
            const ScrollWrapper = document.querySelector('.scroll-wrapper');
            document.body.style.height = ScrollWrapper.clientHeight + 'px';

            scrollPosition = 0,
                translateAmount = 0;

            window.addEventListener('scroll', () => {
                scrollPosition = window.pageYOffset;
            });

            window.requestAnimationFrame(render);

            function render() {
                translateAmount += (scrollPosition - translateAmount) * 0.05;
                ScrollWrapper.style.transform = `translateY(-${translateAmount}px)`;
                window.requestAnimationFrame(render);
            }
        } else {
            $(".mid").removeClass('scroll-wrapper');
        }

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

    if ($('#title').length > 0) {
        var Char = function (container, char) {
            var span = document.createElement("span");
            span.setAttribute('data-char', char);
            span.innerText = char;
            container.appendChild(span);
            return this;
        }

        var VFont = function () {
            this.scale = true;
            this.flex = true;
            var title, str, chars = [];

            this.init = function () {
                title = document.getElementById("title");
                str = title.innerText;
                title.innerHTML = "";
                for (var i = 0; i < str.length; i++) {
                    var _char = new Char(title, str[i]);
                    chars.push(_char);
                }
                this.set();
                window.addEventListener("resize", this.setSize.bind(this));
            }

            this.set = function () {
                title.className = "";
                title.className += this.flex ? " flex" : "";
                this.setSize();
            }

            this.setSize = function () {
                var fontSize = window.innerWidth / (str.length / 2);
                title.style = "font-size: " + fontSize + "px;";
                if (this.scale && $(window).width() > 767) {
                    var scaleY = (window.innerHeight * 1.25 / title.getBoundingClientRect().height).toFixed(1);
                    var lineHeight = scaleY * 1;
                    title.style = "font-size: " + fontSize + "px; transform: scale(0.66," + scaleY + "); line-height: " + lineHeight + "em;"
                }
                else {
                    var scaleY = (window.innerHeight * 0.55 / title.getBoundingClientRect().height).toFixed(2);
                    var lineHeight = scaleY * 1;
                    title.style = "font-size: " + fontSize + "px; transform: scale(0.64," + scaleY + "); line-height: " + lineHeight + "em;"
                }
            };
        }
    }
})()