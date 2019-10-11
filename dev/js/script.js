/* Tabs */
$(document).ready(function () {
    $('.tabs.tabs-top, .tabs.tabs-side').easytabs({
        animationSpeed: 300,
        updateHash: false
    });
});

/* OWL Carousel */
$(document).ready(function () {
    $(".owlcarousel").owlCarousel({
        navigation: true,
        navigationText: ['<i class="icon-left-open"></i>', '<i class="icon-right-open"></i>'],
        pagination: false,
        rewindNav: false,
        items: 3,
        mouseDrag: true,
        itemsDesktop: [1200, 3],
        itemsDesktopSmall: [1024, 3],
        itemsTablet: [970, 2],
        itemsMobile: [767, 1]
    });

    $(".owl-clients").owlCarousel({
        autoPlay: 9000,
        rewindNav: false,
        items: 6,
        itemsDesktop: [1200, 6],
        itemsDesktopSmall: [1024, 4],
        itemsTablet: [768, 3],
        itemsMobile: [480, 2],
        navigation: false,
        pagination: false
    });

    var owl = $(".owl-portfolio-slider");

    owl.owlCarousel({
        navigation: false,
        autoHeight: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });

    // Custom Navigation Events
    $(".slider-next").click(function () {
        owl.trigger('owl.next');
    });
    $(".slider-prev").click(function () {
        owl.trigger('owl.prev');
    });
});

/* Image Hover */
$(document).ready(function () {
    $('.icon-overlay a').prepend('<span class="icn-more"></span>');
});

/* Video */
$(document).ready(function () {
    $('.player').fitVids();
});

/* Prettify */
$(document).ready(function () {
    window.prettyPrint && prettyPrint();
});

/* Data Rel */
$('a[data-rel]').each(function () {
    $(this).attr('rel', $(this).data('rel'));
});

/* Tooltip */
$(document).ready(function () {
    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip();
    }
});

/* Fancybox */
$(document).ready(function () {
    $(".fancybox-media").fancybox({
        arrows: true,
        padding: 0,
        closeBtn: true,
        openEffect: 'fade',
        closeEffect: 'fade',
        prevEffect: 'fade',
        nextEffect: 'fade',
        helpers: {
            media: {},
            overlay: {
                locked: false
            },
            buttons: false,
            thumbs: {
                width: 50,
                height: 50
            },
            title: {
                type: 'inside'
            }
        },
        beforeLoad: function () {
            var el, id = $(this.element).data('title-id');
            if (id) {
                e = $('#' + id);
                if (el.length) {
                    this.title = el.html();
                }
            }
        }
    });
});

/* Forms */
$(document).ready(function () {
    $('.forms').dcSlickForms();
});
$(document).ready(function () {
    $('.comment-form input[title], .comment-form textarea').each(function () {
        if ($(this).val() === '') {
            $(this).val($(this).attr('title'));
        }
        $(this).focus(function () {
            if ($(this).val() === $(this).attr('title')) {
                $(this).val('').addClass('focused');
            }
        });
        $(this).blur(function () {
            if ($(this).val() === '') {
                $(this).val($(this).attr('title')).removeClass('focused');
            }
        });
    });
});

/* Go to top */
!function (a, b, c) {
    a.fn.scrollUp = function (b) {
        a.data(c.body, "scrollUp") || (a.data(c.body, "scrollUp", !0), a.fn.scrollUp.init(b));
    }, a.fn.scrollUp.init = function (d) {
        var e = a.fn.scrollUp.settings = a.extend({}, a.fn.scrollUp.defaults, d),
                f = e.scrollTitle ? e.scrollTitle : e.scrollText,
                g = a("<a/>", {
                    id: e.scrollName,
                    href: "#top",
                    title: f
                }).appendTo("body");
        e.scrollImg || g.html(e.scrollText), g.css({
            display: "none",
            position: "fixed",
            zIndex: e.zIndex
        }), e.activeOverlay && a("<div/>", {
            id: e.scrollName + "-active"
        }).css({
            position: "absolute",
            top: e.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + e.activeOverlay,
            zIndex: e.zIndex
        }).appendTo("body"), scrollEvent = a(b).scroll(function () {
            switch (scrollDis = "top" === e.scrollFrom ? e.scrollDistance : a(c).height() - a(b).height() - e.scrollDistance, e.animation) {
                case "fade":
                    a(a(b).scrollTop() > scrollDis ? g.fadeIn(e.animationInSpeed) : g.fadeOut(e.animationOutSpeed));
                    break;
                case "slide":
                    a(a(b).scrollTop() > scrollDis ? g.slideDown(e.animationInSpeed) : g.slideUp(e.animationOutSpeed));
                    break;
                default:
                    a(a(b).scrollTop() > scrollDis ? g.show(0) : g.hide(0));
            }
        }), g.click(function (b) {
            b.preventDefault(), a("html, body").animate({
                scrollTop: 0
            }, e.topSpeed, e.easingType);
        });
    }, a.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationInSpeed: 200,
        animationOutSpeed: 200,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }, a.fn.scrollUp.destroy = function (d) {
        a.removeData(c.body, "scrollUp"), a("#" + a.fn.scrollUp.settings.scrollName).remove(), a("#" + a.fn.scrollUp.settings.scrollName + "-active").remove(), a.fn.jquery.split(".")[1] >= 7 ? a(b).off("scroll", d) : a(b).unbind("scroll", d);
    }, a.scrollUp = a.fn.scrollUp;
}(jQuery, window, document);

$(document).ready(function () {
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollDistance: 300, // Distance from top/bottom before showing element (px)
        scrollFrom: 'top', // 'top' or 'bottom'
        scrollSpeed: 300, // Speed back to top (ms)
        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="icon-up-open"></i>', // Text for element, can contain HTML
        scrollTitle: false, // Set a custom <a> title if required. Defaults to scrollText
        scrollImg: false, // Set true to use image
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 1001 // Z-Index for the overlay
    });
});

