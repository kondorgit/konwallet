history.scrollRestoration = 'manual';

var language = ['en', 'ko', 'ja', 'zh', 'vn'];
var currentLang = '';
var isMobile = false;
var docWidth = 0;
let delay = 500;
let timer = null;

var myAtropos, myAtropos2, myAtropos3, myAtropos4, myAtropos5, myAtropos6, myAtropos7;

function langOpenClose() {
    if ($('.lang-header').hasClass('on')) {
        $('.lang-body').removeClass('on');
        setTimeout(() => {
            $('.lang-header').removeClass('on');
        }, 200);
    } else {
        $('.lang-header').addClass('on');
        setTimeout(() => {
            $('.lang-body').addClass('on');
        }, 200);
    }
}

function langOpenCloseMobile() {
    if ($('.mobile-lang-header').hasClass('on')) {
        $('.mobile-lang-body').removeClass('on');
        setTimeout(() => {
            $('.mobile-lang-header').removeClass('on');
        }, 200);
    } else {
        $('.mobile-lang-header').addClass('on');
        setTimeout(() => {
            $('.mobile-lang-body').addClass('on');
        }, 200);
    }
}

function languageChange(lang) {
    $('#lang-0, #lang-1, #lang-2, #lang-3, #lang-4').removeClass('lang-en lang-ko lang-ja lang-zh lang-vn');
    $('#mobile-lang-0, #mobile-lang-1, #mobile-lang-2, #mobile-lang-3, #mobile-lang-4').removeClass('mobile-lang-en mobile-lang-ko mobile-lang-ja mobile-lang-zh mobile-lang-vn');

    var orderIdx = 1;
    for (var i = 0; i < language.length; i++) {
        if (language[i] != lang) {
            $('#lang-' + orderIdx).addClass('lang-' + language[i]);
            $('#lang-txt-' + orderIdx).text(language[i].toUpperCase());
            $('#mobile-lang-' + orderIdx).addClass('mobile-lang-' + language[i]);
            $('#mobile-lang-txt-' + orderIdx).text(language[i].toUpperCase());
            orderIdx++;
        } else {
            $('#lang-0').addClass('lang-' + language[i]);
            $('#lang-txt-0').text(language[i].toUpperCase());
            $('#mobile-lang-0').addClass('mobile-lang-' + language[i]);
            $('#mobile-lang-txt-0').text(language[i].toUpperCase());
        }
    }

    window.localStorage.setItem('language', lang.toUpperCase());
    setLanguage(lang.toUpperCase());
    currentLang = lang.toUpperCase();
}

$(document).ready(function () {
    var storeLanguage = window.localStorage.getItem('language');

    if (storeLanguage != null) {
        languageChange(storeLanguage.toLowerCase().trim());
    } else {
        window.localStorage.setItem('language', 'EN');
        currentLang = 'EN';
    }

    docWidth = document.documentElement.clientWidth;

    setTimeout(() => {
        //window.scrollTo(0, 0);
        disableScroll();
    }, 100);

    $('#lang0, #lang1, #lang2, #lang3, #lang4').click(function () {
        languageChange($(this).text().toLowerCase().trim());
        langOpenClose();
    });

    $('#mobile-menu-btn-buy').click(function () {
        if ($('.mobie-buy-kon').hasClass('on')) {
            $('#mobile-menu-btn-buy').removeClass('on');

            setTimeout(() => {
                $('.mobie-buy-kon').removeClass('on');
            }, 200);
        } else {
            $('.mobie-buy-kon').addClass('on');
            setTimeout(() => {
                $('#mobile-menu-btn-buy').addClass('on');
            }, 200);
        }
    });

    $('.buy-btn-lang').click(function () {
        if ($('.buy-header').hasClass('on')) {
            /*
            myAtropos = Atropos({
                el: '.my-atropos1',
                highlight: false,
            });
            */

            $('.buy-body').removeClass('on');

            setTimeout(() => {
                $('.buy-header').removeClass('on');

                $('#my-atropos1-inner').css('overflow', 'hidden');
            }, 200);
        } else {
            $('#my-atropos1-inner').css('overflow', 'visible');
            $('#my-atropos1-rotate').css('transform', 'inherit');
            $('#my-atropos1-scale').css('transform', 'inherit');

            $('.buy-header').addClass('on');

            setTimeout(() => {
                $('.buy-body').addClass('on');
                //myAtropos.destroy();
            }, 200);
        }
    });

    $('.bang2, .bang3').click(function () {
        var ex = $(this).text().trim();
        if (ex == 'VEXK') {
            setTimeout(() => {
                window.open('https://vexk.io/trade/spot/kon/usdt');
            }, 200);
        } else if (ex == 'Bybit') {
            setTimeout(() => {
                window.open('https://www.bybit.com/en-US/trade/spot/KON/USDT');
            }, 200);
        } else if (ex == 'Gate.io') {
            setTimeout(() => {
                window.open('https://www.gate.io/trade/KON_USDT');
            }, 200);
        } else if (ex == 'GDAC') {
            setTimeout(() => {
                window.open('https://www.gdac.com/exchange/KON/USDT');
            }, 200);
        } else if (ex == 'Poloniex') {
            setTimeout(() => {
                window.open('https://poloniex.com/trade/KON_USDT/?type=spot');
            }, 200);
        }

        /*
        myAtropos = Atropos({
            el: '.my-atropos1',
            highlight: false,
        });
        */

        $('.buy-body').removeClass('on');

        setTimeout(() => {
            $('.buy-header').removeClass('on');

            $('#my-atropos1-inner').css('overflow', 'hidden');
        }, 200);
    });

    $('#mobile-lang0, #mobile-lang1, #mobile-lang2, #mobile-lang3, #mobile-lang4').click(function () {
        languageChange($(this).text().toLowerCase().trim());
        langOpenCloseMobile();
    });

    $('.close-btn, .mobile-nav, .mobile-menu-backdrop').click(function () {
        $('.mobile-menu-div').toggleClass('on');
        if ($('.mobile-menu-div').hasClass('on')) {
            lax.removeElements('.sub-title');
            lax.removeElements('.sub-title2');
            lax.removeElements('.sub-title3');
            lax.removeElements('.sub-title4');

            setTimeout(() => {
                $('.nav').removeClass('on');
            }, 300);
            disableScroll();
        } else {
            $('.nav').addClass('on');
            enableScroll();
            lax.addElements('.sub-title', {
                scrollY: {
                    opacity: [
                        ['elCenterY/1.5', 'elCenterY', 'elOutY'],
                        [0.1, 1, 0],
                    ],
                },
            });

            lax.addElements('.sub-title2', {
                scrollY: {
                    opacity: [
                        ['elCenterY/1.5', 'elCenterY', 'elOutY'],
                        [0.1, 1, 0],
                    ],
                },
            });

            lax.addElements('.sub-title3', {
                scrollY: {
                    opacity: [
                        ['elCenterY/1.5', 'elCenterY', 'elOutY'],
                        [0.1, 1, 0],
                    ],
                },
            });

            lax.addElements('.sub-title4', {
                scrollY: {
                    opacity: [
                        ['elCenterY/1.5', 'elCenterY', 'elOutY'],
                        [0.1, 1, 0],
                    ],
                },
            });
        }
    });

    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;

    if (!isMobile) {
        myAtropos5 = Atropos({
            el: '.my-atropos5',
            highlight: false,
            shadow: false,
        });
        /*
        myAtropos = Atropos({
            el: '.my-atropos1',
            highlight: false,
        });
        */
        myAtropos2 = Atropos({
            el: '.my-atropos2',
            highlight: false,
        });
        myAtropos3 = Atropos({
            el: '.my-atropos3',
            highlight: false,
        });
        myAtropos4 = Atropos({
            el: '.my-atropos4',
            highlight: false,
            rotateYMax: 10,
            shadow: false,
        });
        myAtropos6 = Atropos({
            el: '.my-atropos6',
            highlight: false,
        });
        myAtropos7 = Atropos({
            el: '.my-atropos7',
            highlight: false,
        });
    } else {
        $('#iframe').remove();
        $('#hud').fadeIn(0);
    }

    let randomIndexArray = [
        [-1, '', ''],
        [-1, '', ''],
        [-1, '', ''],
        [-1, '', ''],
        [-1, '', ''],
        [-1, '', ''],
        [-1, '', ''],
        [-1, '', ''],
    ];
    for (var i = 0; i < 8; i++) {
        var randomNum = Math.floor(Math.random() * 8);
        var isExist = false;
        for (var j = 0; j < 8; j++) {
            if (randomIndexArray[j][0] == randomNum) {
                isExist = true;
                break;
            }
        }

        if (isExist == false) {
            var top = '0';
            var left = '0';
            switch (randomNum) {
                case 0:
                    if (matchMedia('(max-width: 575px)').matches) {
                        top = '19%';
                        left = '77.5%';
                    } else if (matchMedia('(min-width: 576px) and (max-width: 767px)').matches) {
                        top = '19%';
                        left = '77.5%';
                    } else {
                        top = '16%';
                        left = '71.5%';
                    }

                    break;
                case 1:
                    if (matchMedia('(max-width: 575px)').matches) {
                        top = '75%';
                        left = '79%';
                    } else if (matchMedia('(min-width: 576px) and (max-width: 767px)').matches) {
                        top = '75%';
                        left = '72%';
                    } else {
                        top = '80%';
                        left = '64%';
                    }
                    break;
                case 2:
                    if (matchMedia('(max-width: 575px)').matches) {
                        top = '29%';
                        left = '11.5%';
                    } else if (matchMedia('(min-width: 576px) and (max-width: 767px)').matches) {
                        top = '25%';
                        left = '18.5%';
                    } else {
                        top = '18%';
                        left = '24.5%';
                    }

                    break;
                case 3:
                    if (matchMedia('(max-width: 575px)').matches) {
                        top = '52%';
                        left = '19%';
                    } else if (matchMedia('(min-width: 576px) and (max-width: 767px)').matches) {
                        top = '52%';
                        left = '27%';
                    } else {
                        top = '52%';
                        left = '37%';
                    }

                    break;
                case 4:
                    if (matchMedia('(max-width: 575px)').matches) {
                        top = '34.25%';
                        left = '73.5%';
                    } else if (matchMedia('(min-width: 576px) and (max-width: 767px)').matches) {
                        top = '34.25%';
                        left = '73.5%';
                    } else {
                        top = '54.25%';
                        left = '66.5%';
                    }

                    break;
                case 5:
                    if (matchMedia('(max-width: 575px)').matches) {
                        top = '61.25%';
                        left = '72.5%';
                    } else if (matchMedia('(min-width: 576px) and (max-width: 767px)').matches) {
                        top = '61.25%';
                        left = '74.5%';
                    } else {
                        top = '84.25%';
                        left = '74.5%';
                    }

                    break;
                case 6:
                    if (matchMedia('(max-width: 575px)').matches) {
                        top = '63.25%';
                        left = '12.5%';
                    } else if (matchMedia('(min-width: 576px) and (max-width: 767px)').matches) {
                        top = '76.25%';
                        left = '12.5%';
                    } else {
                        top = '76.25%';
                        left = '32.5%';
                    }

                    break;
                case 7:
                    if (matchMedia('(max-width: 575px)').matches) {
                        top = '40.65%';
                        left = '79.7%';
                    } else if (matchMedia('(min-width: 576px) and (max-width: 767px)').matches) {
                        top = '69.65%';
                        left = '57.7%';
                    } else {
                        top = '69.65%';
                        left = '57.7%';
                    }

                    break;
            }
            randomIndexArray[i][0] = randomNum;
            randomIndexArray[i][1] = top;
            randomIndexArray[i][2] = left;
        } else {
            i--;
        }
    }

    const tl = gsap.timeline();

    gsap.to('.main-img', { opacity: 1, delay: 0, duration: 1.3, ease: 'expo.inOut' });

    if (matchMedia('(max-width: 575px)').matches) {
        gsap.to('.main-img', { height: '140vw', opacity: 1, delay: 1.3, duration: 2, ease: 'expo.inOut' });
    } else if (matchMedia('(min-width: 576px) and (max-width: 767px)').matches) {
        gsap.to('.main-img', { height: '93vw', opacity: 1, delay: 1.3, duration: 2, ease: 'expo.inOut' });
    } else {
        gsap.to('.main-img', { height: '53.056vw', opacity: 1, delay: 1.3, duration: 2, ease: 'expo.inOut' });
    }

    gsap.to('.main-title-fadeIn', { scale: 1, opacity: 1, delay: 1.3, duration: 2, ease: 'expo.inOut' });

    gsap.to('.main-sub-img-0', { opacity: '1', delay: 2, duration: 0, ease: 'none' });
    gsap.to('.main-sub-img-1', { opacity: '1', delay: 2, duration: 0, ease: 'none' });
    gsap.to('.main-sub-img-2', { opacity: '1', delay: 2, duration: 0, ease: 'none' });
    gsap.to('.main-sub-img-3', { opacity: '1', delay: 2, duration: 0, ease: 'none' });
    gsap.to('.main-sub-img-4', { opacity: '1', delay: 2, duration: 0, ease: 'none' });
    gsap.to('.main-sub-img-5', { opacity: '1', delay: 2, duration: 0, ease: 'none' });
    gsap.to('.main-sub-img-6', { opacity: '1', delay: 2, duration: 0, ease: 'none' });
    gsap.to('.main-sub-img-7', { opacity: '1', delay: 2, duration: 0, ease: 'none' });

    gsap.to('.main-sub-img-' + randomIndexArray[0][0], { top: randomIndexArray[0][1], left: randomIndexArray[0][2], delay: 2.2, duration: 0.6, ease: 'expo.inOut' });
    gsap.to('.main-sub-img-' + randomIndexArray[1][0], { top: randomIndexArray[1][1], left: randomIndexArray[1][2], delay: 2.3, duration: 0.6, ease: 'expo.inOut' });
    gsap.to('.main-sub-img-' + randomIndexArray[2][0], { top: randomIndexArray[2][1], left: randomIndexArray[2][2], delay: 2.4, duration: 0.6, ease: 'expo.inOut' });
    gsap.to('.main-sub-img-' + randomIndexArray[3][0], { top: randomIndexArray[3][1], left: randomIndexArray[3][2], delay: 2.5, duration: 0.6, ease: 'expo.inOut' });
    gsap.to('.main-sub-img-' + randomIndexArray[4][0], { top: randomIndexArray[4][1], left: randomIndexArray[4][2], delay: 2.6, duration: 0.6, ease: 'expo.inOut' });
    gsap.to('.main-sub-img-' + randomIndexArray[5][0], { top: randomIndexArray[5][1], left: randomIndexArray[5][2], delay: 2.7, duration: 0.6, ease: 'expo.inOut' });
    gsap.to('.main-sub-img-' + randomIndexArray[6][0], { top: randomIndexArray[6][1], left: randomIndexArray[6][2], delay: 2.8, duration: 0.6, ease: 'expo.inOut' });
    gsap.to('.main-sub-img-' + randomIndexArray[7][0], { top: randomIndexArray[7][1], left: randomIndexArray[7][2], delay: 2.9, duration: 0.6, ease: 'expo.inOut' });

    gsap.to('.main-btn', { opacity: 1, delay: 2, scale: 1, duration: 1.3, ease: 'expo.inOut', onComplete: laxInit });

    tl.from('.main-subtxt', 1.8, {
        y: 100,
        ease: 'power4.out',
        delay: 2.4,
        skewY: 2,
        opacity: 0,
        stagger: {
            amount: 0.3,
        },
    });
});

$('body').mousedown(function (e) {
    if (e.which == 2) {
        return false;
    }
});

function laxInit() {
    //$('html').easeScroll();
    if (isMobile == false) {
        myAtropos5.isActive = true;
    }

    setTimeout(() => {
        lax.init();

        lax.addDriver(
            'scrollY',
            function () {
                return document.documentElement.scrollTop;
            },
            { frameStep: 1, inertiaEnabled: false }
        );

        setLaxEl();

        /*
        lax.addElements('.section-3-txt', {
            scrollY: {
                opacity: [
                    ['elCenterY+1500', 'elCenterY+2500', 'elCenterY+2900', 'elCenterY+3000'],
                    [0, 1, 1, 0],
                ],
            },
        });*/

        setTimeout(() => {
            //console.log(document.querySelector('.footer').getBoundingClientRect().bottom);
            //$('body').css('height', document.querySelector('.footer').getBoundingClientRect().bottom + 7662.796875);
            $('body').removeClass('non-scroll');
            enableScroll();
        }, 100);
    }, 100);
}

function setLaxEl() {
    var lax_main_title = 'screenHeight';
    if (matchMedia('(max-width: 575px)').matches) {
        lax_main_title = 'screenHeight+2000';
    } else if (matchMedia('(min-width: 576px) and (max-width: 767px)').matches) {
        lax_main_title = 'screenHeight+2000';
    } else {
        lax_main_title = 'screenHeight';
    }

    lax.addElements('.main-title', {
        scrollY: {
            translateY: [
                [0, 'screenHeight'],
                [0, lax_main_title],
            ],
            scale: [
                [100, 'screenHeight'],
                [1, 8],
            ],
            opacity: [
                [0, 'screenHeight/1.5'],
                [1, 0],
            ],
        },
    });

    lax.addElements('.nav');

    /*
    lax.addElements('.main-title', {
        scrollY: {
            translateY: [
                [0, 'screenHeight'],
                [0, 'screenHeight'],
            ],
            translateX: [
                [0, 'screenHeight/1.5'],
                [0, 420],
            ],
            scale: [
                [100, 'screenHeight'],
                [1, 30],
            ],
            opacity: [
                [0, 'screenHeight/1.5', 'screenHeight'],
                [1, 0.5, 0],
            ],
        },
    });
    
    lax.addElements('.title2', {
        scrollY: {
            translateY: [
                [0, 'screenHeight'],
                [0, 'screenHeight'],
            ],
            translateX: [
                [0, 'screenHeight'],
                [0, 1000],
            ],
            opacity: [
                [0, 'screenHeight/1.5'],
                [1, 0],
            ],
        },
    });
*/
    lax.addElements('.main-bottom', {
        scrollY: {
            opacity: [
                ['screenHeight/2', 'screenHeight/1.1'],
                [1, 0],
            ],
        },
    });

    lax.addElements('.sub-title', {
        scrollY: {
            opacity: [
                ['elCenterY/1.5', 'elCenterY', 'elOutY'],
                [0.1, 1, 0],
            ],
        },
    });

    lax.addElements('.sub-title2', {
        scrollY: {
            opacity: [
                ['elCenterY/1.5', 'elCenterY', 'elOutY'],
                [0.1, 1, 0],
            ],
        },
    });

    lax.addElements('.sub-title3', {
        scrollY: {
            opacity: [
                ['elCenterY/1.5', 'elCenterY', 'elOutY'],
                [0.1, 1, 0],
            ],
        },
    });

    lax.addElements('.sub-title4', {
        scrollY: {
            opacity: [
                ['elCenterY/1.5', 'elCenterY', 'elOutY'],
                [0.1, 1, 0],
            ],
        },
    });

    var lax_video_div1 = '';
    var lax_video_div2 = '';
    var lax_video_div3 = '';

    if (matchMedia('(max-width: 575px)').matches) {
        lax_video_div1 = 'screenHeight*0.5';
        lax_video_div2 = 'screenHeight*0.7';
        lax_video_div3 = 'screenHeight*1.5';
    } else if (matchMedia('(min-width: 576px) and (max-width: 767px)').matches) {
        lax_video_div1 = 'screenHeight/1.2';
        lax_video_div2 = 'screenHeight*1.1';
        lax_video_div3 = 'screenHeight*5';
    } else {
        lax_video_div1 = 'screenHeight/1.2';
        lax_video_div2 = 'screenHeight*1.1';
        lax_video_div3 = 'screenHeight*5';
    }

    lax.addElements('.video-div', {
        scrollY: {
            opacity: [
                ['screenHeight/1.2', 'screenHeight*1.1', 'screenHeight*5'],
                [0, 1, 0],
            ],
        },
    });

    var lax_my_atropos4_1 = '';
    var lax_my_atropos4_2 = '';

    if (matchMedia('(max-width: 575px)').matches) {
        lax_my_atropos4_1 = 'elCenterY-1000';
        lax_my_atropos4_2 = 'elCenterY-800';
    } else if (matchMedia('(min-width: 576px) and (max-width: 767px)').matches) {
        lax_my_atropos4_1 = 'elCenterY-1000';
        lax_my_atropos4_2 = 'elCenterY-800';
    } else {
        lax_my_atropos4_1 = 'elCenterY-200';
        lax_my_atropos4_2 = 'elCenterY';
    }

    /*
    lax.addElements('.my-atropos4', {
        scrollY: {
            opacity: [
                [lax_my_atropos4_1, lax_my_atropos4_2, 'elCenterY+7000', 'elCenterY+8000'],
                [0, 1, 1, 0],
            ],
        },
    });

    lax.addElements('.section-2-txt', {
        scrollY: {
            opacity: [
                ['elInY-100', 'elCenterY+100', 'elCenterY+900', 'elCenterY+1500'],
                [0, 1, 1, 0],
            ],
        },
    });
    lax.addElements('.section-3-txt', {
        scrollY: {
            opacity: [
                ['elInY+1200', 'elCenterY+1900', 'elCenterY+2400', 'elCenterY+3000'],
                [0, 1, 1, 0],
            ],
        },
    });

    lax.addElements('.section-4-txt', {
        scrollY: {
            opacity: [
                ['elInY+2500', 'elCenterY+3000', 'elCenterY+3900', 'elCenterY+4000'],
                [0, 1, 1, 0],
            ],
        },
    });

    lax.addElements('.section-5-txt', {
        scrollY: {
            opacity: [
                ['elInY+4000', 'elCenterY+5000', 'elCenterY+6400', 'elCenterY+7000'],
                [0, 1, 1, 0],
            ],
        },
    });
*/

    //lax.addElements('.footer');
}

function getAbsoluteTop(element) {
    return window.pageYOffset + element.getBoundingClientRect().top;
}

var scroll_event1 = false;
var scroll_event2 = false;
var scroll_event3 = false;
var scroll_event4 = false;
var scroll_event5 = false;

var section_2_img_scroll = getAbsoluteTop(document.querySelector('.section-2-img')) - 100;
var scroll_event2_scroll = getAbsoluteTop(document.querySelector('.section-3-txt')) + 1500;
var scroll_event3_scroll = getAbsoluteTop(document.querySelector('.section-4-txt')) + 2500;
var scroll_event4_scroll = getAbsoluteTop(document.querySelector('.section-5-txt')) + 4000;
var scroll_event5_scroll = scroll_event4_scroll + 1000;
var scroll_event4_ani = gsap.to('.pagination-indicator', { width: '100%', delay: 0, duration: 12, ease: 'none', repeat: -1 });
scroll_event4_ani.pause();

$(window).on('resize', function () {
    if (document.documentElement.clientWidth != docWidth) {
        if ($('.refresh-div').css('display') == 'none') {
            $('.refresh-div').fadeIn(0);
        }

        $( ".refresh-div").hide();


        clearTimeout(timer);
        timer = setTimeout(function () {
        window.location.reload();
            /*
        section_2_img_scroll = getAbsoluteTop(document.querySelector('.section-2-img'));
        scroll_event2_scroll = getAbsoluteTop(document.querySelector('.section-3-txt')) + 1000;
        scroll_event3_scroll = getAbsoluteTop(document.querySelector('.section-4-txt')) + 2500;
        scroll_event4_scroll = getAbsoluteTop(document.querySelector('.section-5-txt')) + 4000;
        scroll_event5_scroll = scroll_event4_scroll + 1800;

        section_2_img_scroll = getAbsoluteTop(document.querySelector('.section-2-img')) * 0.936;
    scroll_event2_scroll = getAbsoluteTop(document.querySelector('.section-3-txt')) * 0.967;
    scroll_event3_scroll = getAbsoluteTop(document.querySelector('.section-4-txt')) * 1.34;
    scroll_event4_scroll = getAbsoluteTop(document.querySelector('.section-5-txt')) * 1.5312;
        */
        }, delay);
    }
});

function topLayer() {}

var ani1, ani2, ani3, ani4, ani5, ani6, ani7, ani8, ani9, ani10, ani11, ani12;
var ani2_1, ani2_2, ani2_3, ani2_4, ani2_5, ani2_6, ani2_7, ani2_8, ani2_9, ani2_10;
var ani4_1, ani4_2, ani4_3, ani4_4, ani4_5, ani4_6, ani4_7, ani4_8, ani4_9, ani4_10, ani4_11, ani4_12, ani4_13, ani4_14, ani4_15, ani4_16, ani4_17, ani4_18;
var scrollBottom = 0;

var OriginalPosition = 0;

window.addEventListener('scroll', function () {
    //console.log(window.scrollY);

    if (window.scrollY > 100 && $('.nav').hasClass('on') == false) {
        $('.nav').addClass('on');
    } else if (window.scrollY <= 100 && $('.nav').hasClass('on') == true) {
        $('.nav').removeClass('on');
    }

    if ($('.scroll-container').css('display') != 'none' && (OriginalPosition + 10 < window.scrollY || OriginalPosition - 10 < window.scrollY)) {
        $('.scroll-container').fadeOut(300);
    }

    if (window.scrollY >= section_2_img_scroll && window.scrollY < scroll_event2_scroll && scroll_event1 == false) {
        window.scrollTo(0, section_2_img_scroll + 500);

        scroll_event1 = true;

        disableScroll();

        OriginalPosition = window.scrollY;

        setTimeout(() => {
            enableScroll();
            $('.scroll-container').fadeIn(300);
        }, 2000);

        $('.section-2-div').addClass('fixed');
        $('.section-2-txt').addClass('section-2-txt-fixed');
        $('.section-3-txt').addClass('section-3-txt-fixed');
        $('.section-4-txt').addClass('section-4-txt-fixed');

        gsap.to('.my-atropos4', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.out' });

        /*=====*/
        gsap.to('.section-2-txt', { opacity: 0, delay: 0, duration: 0, ease: 'expo.out' });

        gsap.to('.section-2-phoneback2', { opacity: 0, delay: 0, duration: 0, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto5', { opacity: 0, delay: 0, duration: 0, ease: 'expo.inOut' });
        if (matchMedia('(max-width: 575px)').matches) {
            gsap.to('.section-2-phonebottom1', { bottom: '-31.6vw', delay: 0, duration: 0, ease: 'expo.inOut' });
            gsap.to('.section-2-phonebottom2', { bottom: '-31.6vw', delay: 0, duration: 0, ease: 'expo.inOut' });
            gsap.to('.section-2-phonebottom3', { bottom: '-31.6vw', delay: 0, duration: 0, ease: 'expo.inOut' });

            gsap.to('.section-2-phonecrypto1', { top: '38.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0, ease: 'expo.out' });
            gsap.to('.section-2-phonecrypto2', { top: '38.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0, ease: 'expo.out' });
            gsap.to('.section-2-phonecrypto3', { top: '38.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0, ease: 'expo.out' });
            gsap.to('.section-2-phonecrypto4', { top: '38.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0, ease: 'expo.out' });
        } else if (matchMedia('(min-width: 576px) and (max-width: 767px)').matches) {
            gsap.to('.section-2-phonebottom1', { bottom: '-31.6vw', delay: 0, duration: 0, ease: 'expo.inOut' });
            gsap.to('.section-2-phonebottom2', { bottom: '-31.6vw', delay: 0, duration: 0, ease: 'expo.inOut' });
            gsap.to('.section-2-phonebottom3', { bottom: '-31.6vw', delay: 0, duration: 0, ease: 'expo.inOut' });

            gsap.to('.section-2-phonecrypto1', { top: '38.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0, ease: 'expo.out' });
            gsap.to('.section-2-phonecrypto2', { top: '38.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0, ease: 'expo.out' });
            gsap.to('.section-2-phonecrypto3', { top: '38.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0, ease: 'expo.out' });
            gsap.to('.section-2-phonecrypto4', { top: '38.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0, ease: 'expo.out' });
        } else {
            gsap.to('.section-2-phonebottom1', { bottom: '-17.6vw', delay: 0, duration: 0, ease: 'expo.inOut' });
            gsap.to('.section-2-phonebottom2', { bottom: '-13.6vw', delay: 0, duration: 0, ease: 'expo.inOut' });
            gsap.to('.section-2-phonebottom3', { bottom: '-15.7vw', delay: 0, duration: 0, ease: 'expo.inOut' });

            gsap.to('.section-2-phonecrypto1', { opacity: 0, delay: 0, duration: 0, ease: 'none' });
            gsap.to('.section-2-phonecrypto2', { opacity: 0, delay: 0, duration: 0, ease: 'none' });
            gsap.to('.section-2-phonecrypto3', { opacity: 0, delay: 0, duration: 0, ease: 'none' });
            gsap.to('.section-2-phonecrypto4', { opacity: 0, delay: 0, duration: 0, ease: 'none' });

            gsap.to('.section-2-phonecrypto1', { top: '23.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0, ease: 'none' });
            gsap.to('.section-2-phonecrypto2', { top: '23.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0, ease: 'none' });
            gsap.to('.section-2-phonecrypto3', { top: '23.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0, ease: 'none' });
            gsap.to('.section-2-phonecrypto4', { top: '23.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0, ease: 'none' });
        }

        /*=====*/

        gsap.to('.section-2-phoneback', { opacity: 1, delay: 0, duration: 0, ease: 'expo.inOut' });

        gsap.to('.section-2-phonebottom1', { opacity: 1, delay: 0, duration: 0, ease: 'expo.inOut' });
        gsap.to('.section-2-phonebottom2', { opacity: 1, delay: 0, duration: 0, ease: 'expo.inOut' });
        gsap.to('.section-2-phonebottom3', { opacity: 1, delay: 0, duration: 0, ease: 'expo.inOut' });

        gsap.to('.my-atropos4', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.out' });
        gsap.to('.section-2-txt', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.out' });

        gsap.to('.section-2-phonebottom1', { bottom: '0vw', delay: 0, duration: 1, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto1', { opacity: 1, delay: 0.5, duration: 0.1, ease: 'expo.out' });
        gsap.to('.section-2-phonecrypto1', { rotation: '360deg', delay: 0.5, duration: 1, ease: 'expo.out' });

        gsap.to('.section-2-phonecrypto2', { opacity: 1, delay: 0.8, duration: 0.1, ease: 'expo.out' });
        gsap.to('.section-2-phonecrypto2', { rotation: '360deg', delay: 0.8, duration: 1, ease: 'expo.out' });

        gsap.to('.section-2-phonecrypto3', { opacity: 1, delay: 1.1, duration: 0.1, ease: 'expo.out' });
        gsap.to('.section-2-phonecrypto3', { rotation: '360deg', delay: 1.1, duration: 1, ease: 'expo.out' });

        gsap.to('.section-2-phonecrypto4', { opacity: 1, delay: 1.4, duration: 0.1, ease: 'expo.out' });
        gsap.to('.section-2-phonecrypto4', { rotation: '360deg', delay: 1.4, duration: 1, ease: 'expo.out' });

        if (matchMedia('(max-width: 575px)').matches) {
            gsap.to('.section-2-phonebottom2', { bottom: '6vw', delay: 0, duration: 1, ease: 'expo.inOut' });
            gsap.to('.section-2-phonebottom3', { bottom: '2.3vw', delay: 0, duration: 1, ease: 'expo.inOut' });
            ani3 = gsap.to('.section-2-phonecrypto1', { top: '13.681vw', delay: 0.5, duration: 1, ease: 'expo.out' });
            ani6 = gsap.to('.section-2-phonecrypto2', { top: '24.881vw', delay: 0.8, duration: 1, ease: 'expo.out' });
            ani9 = gsap.to('.section-2-phonecrypto3', { top: '29.381vw', delay: 1.1, duration: 1, ease: 'expo.out' });
            ani12 = gsap.to('.section-2-phonecrypto4', { top: '32.8vw', delay: 1.4, duration: 1, ease: 'expo.out' });
        } else if (matchMedia('(min-width: 576px) and (max-width: 767px)').matches) {
            gsap.to('.section-2-phonebottom2', { bottom: '6vw', delay: 0, duration: 1, ease: 'expo.inOut' });
            gsap.to('.section-2-phonebottom3', { bottom: '2.3vw', delay: 0, duration: 1, ease: 'expo.inOut' });
            ani3 = gsap.to('.section-2-phonecrypto1', { top: '13.681vw', delay: 0.5, duration: 1, ease: 'expo.out' });
            ani6 = gsap.to('.section-2-phonecrypto2', { top: '24.881vw', delay: 0.8, duration: 1, ease: 'expo.out' });
            ani9 = gsap.to('.section-2-phonecrypto3', { top: '29.381vw', delay: 1.1, duration: 1, ease: 'expo.out' });
            ani12 = gsap.to('.section-2-phonecrypto4', { top: '32.8vw', delay: 1.4, duration: 1, ease: 'expo.out' });
        } else {
            gsap.to('.section-2-phonebottom2', { bottom: '3.4vw', delay: 0, duration: 1, ease: 'expo.inOut' });
            gsap.to('.section-2-phonebottom3', { bottom: '1.3vw', delay: 0, duration: 1, ease: 'expo.inOut' });
            ani3 = gsap.to('.section-2-phonecrypto1', { top: '5.681vw', delay: 0.5, duration: 1, ease: 'expo.out' });
            ani6 = gsap.to('.section-2-phonecrypto2', { top: '12.881vw', delay: 0.8, duration: 1, ease: 'expo.out' });
            ani9 = gsap.to('.section-2-phonecrypto3', { top: '15.381vw', delay: 1.1, duration: 1, ease: 'expo.out' });
            ani12 = gsap.to('.section-2-phonecrypto4', { top: '16.8vw', delay: 1.4, duration: 1, ease: 'expo.out' });
        }
    } else if (window.scrollY < section_2_img_scroll && scroll_event1 == true) {
        scroll_event1 = false;

        $('.scroll-container').fadeOut(300);

        $('.section-2-phonebottom1').removeClass('active');
        $('.section-2-div').removeClass('fixed');
        $('.section-2-txt').removeClass('section-2-txt-fixed');
        $('.section-3-txt').removeClass('section-3-txt-fixed');
        $('.section-4-txt').removeClass('section-4-txt-fixed');

        if (matchMedia('(max-width: 575px)').matches) {
            gsap.to('.section-2-phonebottom1', { bottom: '-31.6vw', delay: 0, duration: 0.5, ease: 'expo.inOut' });
            gsap.to('.section-2-phonebottom2', { bottom: '-31.6vw', delay: 0, duration: 0.5, ease: 'expo.inOut' });
            gsap.to('.section-2-phonebottom3', { bottom: '-31.6vw', delay: 0, duration: 0.5, ease: 'expo.inOut' });

            gsap.to('.section-2-phonecrypto1', { top: '38.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0.5, ease: 'expo.out' });
            gsap.to('.section-2-phonecrypto2', { top: '38.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0.5, ease: 'expo.out' });
            gsap.to('.section-2-phonecrypto3', { top: '38.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0.5, ease: 'expo.out' });
            gsap.to('.section-2-phonecrypto4', { top: '38.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0.5, ease: 'expo.out' });
        } else if (matchMedia('(min-width: 576px) and (max-width: 767px)').matches) {
            gsap.to('.section-2-phonebottom1', { bottom: '-31.6vw', delay: 0, duration: 0.5, ease: 'expo.inOut' });
            gsap.to('.section-2-phonebottom2', { bottom: '-31.6vw', delay: 0, duration: 0.5, ease: 'expo.inOut' });
            gsap.to('.section-2-phonebottom3', { bottom: '-31.6vw', delay: 0, duration: 0.5, ease: 'expo.inOut' });

            gsap.to('.section-2-phonecrypto1', { top: '38.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0.5, ease: 'expo.out' });
            gsap.to('.section-2-phonecrypto2', { top: '38.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0.5, ease: 'expo.out' });
            gsap.to('.section-2-phonecrypto3', { top: '38.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0.5, ease: 'expo.out' });
            gsap.to('.section-2-phonecrypto4', { top: '38.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0.5, ease: 'expo.out' });
        } else {
            gsap.to('.section-2-phonebottom1', { bottom: '-17.6vw', delay: 0, duration: 0.5, ease: 'expo.inOut' });
            gsap.to('.section-2-phonebottom2', { bottom: '-13.6vw', delay: 0, duration: 0.5, ease: 'expo.inOut' });
            gsap.to('.section-2-phonebottom3', { bottom: '-15.7vw', delay: 0, duration: 0.5, ease: 'expo.inOut' });

            gsap.to('.section-2-phonecrypto1', { top: '23.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0.5, ease: 'expo.out' });
            gsap.to('.section-2-phonecrypto2', { top: '23.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0.5, ease: 'expo.out' });
            gsap.to('.section-2-phonecrypto3', { top: '23.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0.5, ease: 'expo.out' });
            gsap.to('.section-2-phonecrypto4', { top: '23.081vw', rotation: '0deg', opacity: 0, delay: 0, duration: 0.5, ease: 'expo.out' });
        }

        gsap.to('.section-2-txt', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.out' });
    }

    if (window.scrollY >= scroll_event2_scroll && window.scrollY < scroll_event3_scroll && scroll_event2 == false) {
        window.scrollTo(0, scroll_event2_scroll + 500);

        scroll_event2 = true;
        scroll_event1 = false;

        disableScroll();

        setTimeout(() => {
            enableScroll();
            $('.scroll-container').fadeIn(300);
        }, 1000);

        /*=====*/
        gsap.to('.section-2-phoneback2', { opacity: 0, delay: 0, duration: 0, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto5', { opacity: 0, delay: 0, duration: 0, ease: 'expo.inOut' });
        gsap.to('.section-3-txt', { opacity: 0, delay: 0, duration: 0, ease: 'expo.out' });
        /*=====*/

        gsap.to('.section-2-txt', { opacity: 0, delay: 0, duration: 0, ease: 'expo.out' });
        gsap.to('.section-3-txt', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.out' });

        gsap.to('.section-2-phoneback', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonebottom1', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonebottom2', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonebottom3', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto1', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto2', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto3', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto4', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phoneback2', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto5', { opacity: 1, delay: 0.3, duration: 1, ease: 'expo.inOut' });
    } else if (window.scrollY < scroll_event2_scroll && scroll_event2 == true) {
        scroll_event2 = false;

        gsap.to('.section-2-phoneback2', { opacity: 0, delay: 0, duration: 0, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto5', { opacity: 0, delay: 0, duration: 0, ease: 'expo.inOut' });
        gsap.to('.section-3-txt', { opacity: 0, delay: 0, duration: 0, ease: 'expo.out' });
    }

    if (window.scrollY >= scroll_event3_scroll && window.scrollY < scroll_event4_scroll && scroll_event3 == false) {
        window.scrollTo(0, scroll_event3_scroll + 1000);

        scroll_event3 = true;
        scroll_event2 = false;

        disableScroll();

        setTimeout(() => {
            enableScroll();
            $('.scroll-container').fadeIn(300);
        }, 2000);

        if (isMobile == false) {
            myAtropos4.destroy();
        }
        setTimeout(() => {
            $('.section-2-phone').removeAttr('style');
            $('.section-2-phone').parent().parent().parent().removeAttr('style');
        }, 200);

        /*=====*/
        gsap.to('.section-2-hud', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });

        gsap.to('.section-2-phoneback', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonebottom1', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonebottom2', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonebottom3', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto1', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto2', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto3', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto4', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phoneback2', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto5', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phone', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });

        gsap.to('.section-4-txt', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.out' });
        /*=====*/

        gsap.to('.section-3-txt', { opacity: 0, delay: 0, duration: 0, ease: 'expo.out' });
        gsap.to('.section-5-txt', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.out' });
        gsap.to('.section-4-txt', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.out' });

        //$('#iframe').attr('style', 'width: 44vw; height: 44vw;');

        gsap.to('.section-2-phoneback', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonebottom1', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonebottom2', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonebottom3', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto1', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto2', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto3', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto4', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phoneback2', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phonecrypto5', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-phone', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-hud', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });
    } else if (window.scrollY < scroll_event3_scroll && scroll_event3 == true) {
        scroll_event3 = false;

        myAtropos4 = Atropos({
            el: '.my-atropos4',
            highlight: false,
            rotateYMax: 10,
            shadow: false,
        });
        myAtropos4.isActive = true;

        gsap.to('.section-2-hud', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });

        gsap.to('.section-2-phone', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });

        gsap.to('.section-4-txt', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.out' });
    }

    if (window.scrollY >= scroll_event4_scroll && window.scrollY < scroll_event5_scroll && scroll_event4 == false) {
        window.scrollTo(0, scroll_event4_scroll + 100);

        scroll_event4 = true;
        scroll_event3 = false;

        disableScroll();

        setTimeout(() => {
            enableScroll();
            $('.scroll-container').fadeIn(300);
        }, 2000);

        event4_reset();
        event4_restart();
    } else if (window.scrollY < scroll_event4_scroll && scroll_event4 == true) {
        scroll_event4 = false;

        ani4_1.pause();
        ani4_2.pause();
        ani4_3.pause();
        ani4_4.pause();
        ani4_5.pause();
        ani4_6.pause();
        ani4_7.pause();
        ani4_8.pause();
        ani4_9.pause();
        ani4_10.pause();
        ani4_11.pause();
        ani4_12.pause();
        ani4_13.pause();
        ani4_14.pause();
        ani4_15.pause();
        ani4_16.pause();
        ani4_17.pause();
        ani4_18.pause();

        scroll_event4_ani.pause();

        clearTimeout(event4_restart_timer);
        $('.pagination-indicator').css('width', '0%');
        gsap.to('.section-2-phone', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.section-2-hud', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });

        gsap.to('.phone-process-div', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.process_dim', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.pro_02', { bottom: '-30vw', delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.pro_02_1', { bottom: '-30vw', delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.pro_02_1', { attr: { src: '/assets/img/pro_02_1.png' }, delay: 0.5, duration: 0, ease: 'none' });
        gsap.to('.pro_02_1', { left: '0', delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.pro_03', { left: '100%', delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.pro_04', { left: '100%', delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.pro_05', { left: '100%', delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.pro_06', { left: '100%', delay: 0, duration: 0.5, ease: 'expo.inOut' });
        gsap.to('.pro_06_1', { opacity: 0, scale: 0.8, delay: 0, duration: 0.5, ease: 'expo.inOut' });
    }

    if (window.scrollY >= scroll_event5_scroll && scroll_event5 == false) {
        scroll_event5 = true;
        scroll_event4 = false;

        gsap.to('.section-2-hud', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        $('.sub-section-3').css('margin-top', scroll_event5_scroll);
        gsap.to('.sub-section-3', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });

        $('.section-2-div').removeClass('fixed');
        $('.section-2-txt').removeClass('section-2-txt-fixed');
        $('.section-3-txt').removeClass('section-3-txt-fixed');
        $('.section-4-txt').removeClass('section-4-txt-fixed');
    } else if (window.scrollY < scroll_event5_scroll && scroll_event5 == true) {
        event4_reset();
        event4_restart();

        scroll_event5 = false;

        $('.section-2-div').addClass('fixed');
        $('.section-2-txt').addClass('section-2-txt-fixed');
        $('.section-3-txt').addClass('section-3-txt-fixed');
        $('.section-4-txt').addClass('section-4-txt-fixed');

        gsap.to('.section-2-hud', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
        if (matchMedia('(max-width: 575px)').matches) {
            $('.sub-section-3').css('margin-top', '3000vw');
        } else if (matchMedia('(min-width: 576px) and (max-width: 767px)').matches) {
            $('.sub-section-3').css('margin-top', '1800vw');
        } else {
            $('.sub-section-3').css('margin-top', '700vw');
        }

        gsap.to('.sub-section-3', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });

        gsap.to('.section-5-txt', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.out' });
    }
});

var event4_restart_timer;
function event4_restart() {
    clearTimeout(event4_restart_timer);

    gsap.to('.section-4-txt', { opacity: 0, delay: 0, duration: 0, ease: 'expo.out' });
    gsap.to('.section-5-txt', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.out' });

    ani4_1 = gsap.to('.section-2-phone', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });
    ani4_2 = gsap.to('.section-2-hud', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
    scroll_event4_ani.restart();
    ani4_3 = gsap.to('.phone-process-div', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });
    ani4_4 = gsap.to('.pro_01_1', { scale: 0.9, delay: 1.5, duration: 0.2, ease: 'expo.out' });
    ani4_5 = gsap.to('.pro_01_1', { scale: 1, delay: 1.7, duration: 0.2, ease: 'expo.out' });
    ani4_6 = gsap.to('.process_dim', { opacity: 0.7, delay: 1.9, duration: 0.3, ease: 'expo.inOut' });

    ani4_7 = gsap.to('.pro_02', { bottom: '1vw', delay: 2.1, duration: 0.3, ease: 'expo.inOut' });
    ani4_8 = gsap.to('.pro_02_1', { bottom: '0.6vw', delay: 2.1, duration: 0.3, ease: 'expo.inOut' });
    ani4_9 = gsap.to('.pro_02_1', { attr: { src: '/assets/img/pro_02_2.png' }, delay: 3.0, duration: 0, ease: 'none' });
    ani4_10 = gsap.to('.pro_02_1', { left: '-100%', delay: 3.5, duration: 0.5, ease: 'expo.inOut' });
    ani4_11 = gsap.to('.pro_03', { left: '0', delay: 3.5, duration: 0.5, ease: 'expo.inOut' });

    ani4_12 = gsap.to('.pro_03', { left: '-100%', delay: 5.0, duration: 0.5, ease: 'expo.inOut' });
    ani4_13 = gsap.to('.pro_04', { left: '0', delay: 5.0, duration: 0.5, ease: 'expo.inOut' });

    ani4_14 = gsap.to('.pro_04', { left: '-100%', delay: 6.5, duration: 0.5, ease: 'expo.inOut' });
    ani4_15 = gsap.to('.pro_05', { left: '0', delay: 6.5, duration: 0.5, ease: 'expo.inOut' });

    ani4_16 = gsap.to('.pro_05', { left: '-100%', delay: 8, duration: 0.5, ease: 'expo.inOut' });
    ani4_17 = gsap.to('.pro_06', { left: '0', delay: 8, duration: 0.5, ease: 'expo.inOut' });
    ani4_18 = gsap.to('.pro_06_1', { opacity: 1, scale: 1, delay: 8, duration: 2, ease: 'expo.inOut' });

    event4_restart_timer = setTimeout(function () {
        event4_reset();
        event4_restart();
    }, 12000);
}

function event4_reset() {
    try {
        ani4_1.pause();
        ani4_2.pause();
        ani4_3.pause();
        ani4_4.pause();
        ani4_5.pause();
        ani4_6.pause();
        ani4_7.pause();
        ani4_8.pause();
        ani4_9.pause();
        ani4_10.pause();
        ani4_11.pause();
        ani4_12.pause();
        ani4_13.pause();
        ani4_14.pause();
        ani4_15.pause();
        ani4_16.pause();
        ani4_17.pause();
        ani4_18.pause();
    } catch {}

    clearTimeout(event4_restart_timer);

    $('.pagination-indicator').css('width', '0%');
    gsap.to('.section-2-phone', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
    gsap.to('.section-2-hud', { opacity: 1, delay: 0, duration: 0.5, ease: 'expo.inOut' });

    gsap.to('.phone-process-div', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
    gsap.to('.process_dim', { opacity: 0, delay: 0, duration: 0.5, ease: 'expo.inOut' });
    gsap.to('.pro_02', { bottom: '-30vw', delay: 0, duration: 0.5, ease: 'expo.inOut' });
    gsap.to('.pro_02_1', { bottom: '-30vw', delay: 0, duration: 0.5, ease: 'expo.inOut' });
    gsap.to('.pro_02_1', { attr: { src: '/assets/img/pro_02_1.png' }, delay: 0.5, duration: 0, ease: 'none' });
    gsap.to('.pro_02_1', { left: '0', delay: 0, duration: 0.5, ease: 'expo.inOut' });
    gsap.to('.pro_03', { left: '100%', delay: 0, duration: 0.5, ease: 'expo.inOut' });
    gsap.to('.pro_04', { left: '100%', delay: 0, duration: 0.5, ease: 'expo.inOut' });
    gsap.to('.pro_05', { left: '100%', delay: 0, duration: 0.5, ease: 'expo.inOut' });
    gsap.to('.pro_06', { left: '100%', delay: 0, duration: 0.5, ease: 'expo.inOut' });
    gsap.to('.pro_06_1', { opacity: 0, scale: 0.8, delay: 0, duration: 0.5, ease: 'expo.inOut' });
}

function disableScroll() {
    $('body').addClass('non-scroll');
    $('body').bind('touchmove', function (e) {
        e.preventDefault();
    });
}

function enableScroll() {
    $('body').removeClass('non-scroll');
    $('body').unbind('touchmove');
}

//loading
