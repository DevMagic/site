$(function() {
    function e() {
        c = $(window).innerHeight(), $(".single-view[data-set-height]").css("height", c)
    }

    function n() {
        return b = C
    }

    function i() {
        if ($(window).innerWidth() < 1400) {
            $(".infoline.list ul li").addClass("cut");
            var e = $("#infoline-" + b + " ul li").length + 1,
                t = $("#infoline-" + b + " ul li:eq(" + q + ")");
            return t.addClass("up"), n(), setTimeout(function() {
                t.removeClass("up"), q == e ? q = 0 : q++, i()
            }, 2500), k = !0
        }
    }

    function t() {
        h = $(".infoline.active"), m = g.index(h), C = m + 1, C >= w && (C = 0), b = C, q = -1, v = g.eq(C), n(), h.hasClass("first") && h.removeClass("first"), h.removeClass("active"), v.delay(500).queue(function(e) {
            $(this).addClass("active"), e()
        })
    }

    function a() {
        History.pushState("", "Jobs", "/jobs")
    }

    function o() {
        var e = $("div[data-position=" + x + "]");
        return f.animate({
            scrollTop: e.offset().top - 20
        }, 1500), e.addClass("active").children(".pos-body").slideToggle(400), y = !0
    }

    function s() {
        $(".top-header").on("touchmove", function(e) {
            e.preventDefault()
        })
    }

    function r() {
        I = $(window).scrollTop(), l()
    }

    function l() {
        A || (requestAnimationFrame(d), A = !0)
    }

    function d() {
        S || (S = $(".top-header")), j > I ? I > H && S.addClass("top-header--fixed") : (S.removeClass("top-header--fixed"), I > H && (f.addClass("menu-hidden"), setTimeout(function() {
            f.addClass("menu-anim")
        }, 200))), 0 == I && (f.removeClass("menu-hidden menu-anim"), S.removeClass("top-header--fixed")), j = I, A = !1
    }
    var p = Modernizr.touch;
    $("#main-nav a").on("mouseenter", function() {
        $("#main-nav a").addClass("faded"), $(this).removeClass("faded")
    }), $("#main-nav a").on("mouseleave", function() {
        $("#main-nav a").removeClass("faded")
    }), $(".social-list a").on("mouseenter", function() {
        $(".social-list a").addClass("faded"), $(this).removeClass("faded")
    }), $(".social-list a").on("mouseleave", function() {
        $(".social-list a").removeClass("faded")
    });
    var c, u = $("#projects-list .t-col.anim");
    $(window).innerWidth() < 920;
    e(), imagesLoaded(".preload-img", function() {
        $(".preload-img").remove(), u.each(function(e) {
            var n = $(this);
            setTimeout(function() {
                n.addClass("visible")
            }, 300 * e)
        })
    }), $(window).resize(function() {
        if (e(), k) {
            if ($(window).innerWidth() > 1400) return $("#infoline-" + b + " ul li").removeClass("cut"), k = !1
        } else i()
    }), $("#media-list").packery({
        itemSelector: ".media-box-wrapper"
    });
    var f = $("html, body");
    $(".move-down-bar").click(function() {
        f.animate({
            scrollTop: c
        }, 700)
    });
    $(document).ready(function() { 
        $("#projects-cols-inner").scrollTop(0);
        $(".ps-container").scrollTop(0);
        $("#projects-cols-inner").perfectScrollbar('update');
        $(".ps-container").perfectScrollbar('update');
    });
    $(".move-right-bar").click(function() {
        $(".ps-container").scrollLeft($('.ps-scrollbar-x').position().left + $(window).innerWidth());
    });
    $(".move-left-bar").click(function() {
        $(".ps-container").scrollLeft(0);
    });

    var h, m, v, w = $(".infoline").length,
        b = Math.floor(Math.random() * w),
        g = $(".infoline"),
        k = !1,
        q = 0,
        C = b;
    setTimeout(function() {
        $("#infoline-" + b).addClass("active first").fadeIn()
    }, 500), i(), setInterval(t, 1e4), $("#purascents-video").fitVids(), $("#hiring-video").fitVids(), $("#sales-video").fitVids();
    var y;
    $(".pos-inner .pos-header").on("click", function(e) {
        var n = $(".pos-inner"),
            i = $(this).parent(),
            t = $(this).parent().hasClass("active"),
            o = ($(".pos-inner").hasClass("active"), $(this).parent().offset()),
            s = i.data("position"),
            r = i.find(".pos-name").text(),
            l = "/jobs/" + s;
        return t ? ($(".pos-inner.active .pos-body").slideToggle(400), f.animate({
            scrollTop: o.top - 20
        }, 400), n.removeClass("active"), a(), y = !1) : 1 != y ? (i.addClass("active"), i.children(".pos-body").slideToggle(400), History.pushState("", r, l), f.animate({
            scrollTop: o.top - 20
        }, 700), y = !0) : void $(".pos-inner.active .pos-body").slideToggle(500, function() {
            n.removeClass("active"), i.addClass("active"), i.children(".pos-body").slideToggle(400), History.pushState("", r, l), f.animate({
                scrollTop: i.offset().top - 20
            }, 700)
        })
    }), $(".pos-footer .apply,.pos-inner form").on("click", function(e) {
        e.stopPropagation()
    }), $(".pos-footer .fb").on("click", function(e) {
        var n = ($(window).innerHeight() - 300) / 2,
            i = ($(window).innerWidth() - 600) / 2,
            t = "width=600 height=300 top=" + n + " left=" + i,
            a = encodeURIComponent("http://www.strv.com" + window.location.pathname);
        $("meta[property=og\\:title]").attr("content", "STRV is hiring!"), $("meta[property='og\\:url']").attr("content", "http://www.strv.com" + window.location.pathname), window.open("https://www.facebook.com/sharer/sharer.php?u=" + a, "test", t), e.preventDefault(), e.stopPropagation()
    }), $(".pos-footer .tw").on("click", function(e) {
        var n = ($(window).innerHeight() - 300) / 2,
            i = ($(window).innerWidth() - 600) / 2,
            t = "width=600 height=300 top=" + n + " left=" + i,
            a = encodeURIComponent(window.location.href),
            o = "https://twitter.com/intent/tweet?text=STRV+is+hiring!+Spread+the+word!&hashtags=job,hiring,strvcom&via=strvcom&url=" + a;
        console.log(o), window.open(o, "test", t), e.preventDefault()
    });
    var _, x, T = $("section[data-scrollto]");
    T.data("scrollto");
    History.Adapter.bind(window, "statechange", function() {
        _ = History.getState()
    }), $(document).ready(function() {
        var e = window.location.hash.substring(1),
            n = History.getState();
        x = n.url.replace(/.*(\/|\\)/, "").replace(/\?.*/, "").replace(/ +$/, ""), $("#jobs-view").is("section") && setTimeout(function() {
            "undefined" != typeof Site.positions && Site.positions.indexOf(x) > -1 ? o() : "current-openings" == e && f.animate({
                scrollTop: T.offset().top
            }, 1500)
        }, 1800)
    }), $("#show-positions").click(function(e) {
        f.animate({
            scrollTop: T.offset().top
        }, 1e3, function() {
            window.location.hash = "open-positions"
        })
    }), $("#testim-carousel").slick({
        dots: !0,
        arrows: !0,
        autoplay: !0,
        autoplaySpeed: 6e3,
        speed: 600
    }), $("a.scrollto").click(function(e) {
        var n = $.attr(this, "href");
        f.animate({
            scrollTop: $(n).offset().top
        }, 1e3, function() {
            window.location.hash = n
        }), e.preventDefault()
    }), $("#mobile-menu-btn").click(function() {
        var e = $(this).hasClass("active");
        e ? ($(this).removeClass("active"), $(".page-wrapper").removeClass("menu-open")) : ($(this).addClass("active"), $(".page-wrapper").addClass("menu-open"), s())
    }), $("#projects-list .t-col").click( /*function(){var e=$(this).data("url");window.location.href="/our-work/"+e}*/ ), p || $("#projects-cols-inner").perfectScrollbar({
        useBothWheelAxes: !0,
        suppressScrollY: !0
    });
    var S = null,
        I = ($("body"), 0),
        j = 0,
        H = c,
        A = !1;
    $(window).on("scroll", r), $(document).ready(function() {
        function e() {
            setTimeout(function() {
                window.location = "/thank-you"
            }, 4e3)
        }

        function n(n) {
            var i = n.find("input.file-input")[0],
                a = new FormData(n),
                r = n.find("input[name=id]").val(),
                l = {
                    35606: {
                        linkedin: "question_151192",
                        portfolio: "question_151193",
                        textarea: "question_151194"
                    },
                    35602: {
                        linkedin: "question_151180",
                        github: "question_151181",
                        textarea: "question_151182"
                    },
                    35605: {
                        linkedin: "question_151189",
                        github: "question_151190",
                        textarea: "question_151191"
                    },
                    35600: {
                        linkedin: "question_151168",
                        github: "question_151169",
                        textarea: "question_151170"
                    },
                    35603: {
                        linkedin: "question_151183",
                        github: "question_151184",
                        textarea: "question_151185"
                    },
                    52451: {
                        linkedin: "question_249337",
                        github: "question_249338",
                        textarea: "question_249339"
                    },
                    36195: {
                        linkedin: "question_154075",
                        github: "question_154076",
                        textarea: "question_154077"
                    },
                    53674: {
                        linkedin: "question_255196",
                        github: "question_255197",
                        textarea: "question_255198"
                    },
                    46348: {
                        linkedin: "question_217463",
                        github: "question_217464",
                        textarea: "question_217465"
                    },
                    65763: {
                        linkedin: "question_343033",
                        github: "question_343034",
                        textarea: "question_343035"
                    },
                    67058: {
                        linkedin: "question_351543",
                        github: "question_351544",
                        textarea: "question_351545"
                    },
                    73860: {
                        linkedin: "question_399124",
                        github: "question_399125",
                        textarea: "question_399126"
                    },
                    82771: {
                        linkedin: "question_477154",
                        textarea: "question_477156"
                    },
                    83487: {
                        linkedin: "question_483478",
                        textarea: "question_483480"
                    },
                    83485: {
                        linkedin: "question_483462",
                        textarea: "question_483464"
                    },
                    97875: {
                        linkedin: "question_570927",
                        textarea: "question_570929"
                    }
                };
            a.append("resume", i.files[0]), a.append("id", r), a.append("fullname", n.find("input[name=fullname]").val()), a.append(l[r].linkedin, n.find("input[name=linkedin]").val()), a.append("email", n.find("input[name=email]").val()), a.append("cover_letter_text", n.find("textarea[name=textarea]").val()), $.ajax({
                url: "/jobs/application",
                type: "POST",
                cache: !1,
                contentType: !1,
                processData: !1,
                data: a,
                success: function(e) {},
                error: function(e) {
                    null !== t && (n.find(".btn-wrapper .spinner").fadeOut(300, function() {
                        $(this).remove(), n.find(".btn-wrapper").append(s), n.find(".btn-wrapper .apply").addClass("left").prop("disabled", !0), n.find(".btn-wrapper .checkmark.error").fadeIn(300), n.find(".apply span").fadeIn(300).text("Whoops, Sorry, Try Again")
                    }), setTimeout(function() {
                        n.find(".btn-wrapper .checkmark").fadeOut(300, function() {
                            $(this).remove(), n.find(".btn-wrapper .apply").removeClass("left").prop("disabled", !1)
                        }), n.find(".apply span").fadeOut(300, function() {
                            $(this).text("Apply for This Position").fadeIn(300)
                        })
                    }, 6e3))
                },
                statusCode: {
                    0: function() {
                        n.find(".btn-wrapper .spinner").fadeOut(300, function() {
                            n.find(".btn-wrapper").append(o), n.find(".btn-wrapper .checkmark").fadeIn(300), n.find(".apply").addClass("left").prop("disabled", !0).find("span").fadeIn(300).html("Application Has Been Sent")
                        }), e()
                    },
                    200: function() {
                        n.find(".btn-wrapper .spinner").fadeOut(300, function() {
                            n.find(".btn-wrapper").append(o), n.find(".btn-wrapper .checkmark").fadeIn(300), n.find(".apply").addClass("left").prop("disabled", !0).find("span").fadeIn(300).html("Application Has Been Sent")
                        }), e()
                    },
                    500: function() {
                        n.find(".btn-wrapper .spinner").fadeOut(300, function() {
                            $(this).remove(), n.find(".btn-wrapper").append(s), n.find(".btn-wrapper .apply").addClass("left").prop("disabled", !0), n.find(".btn-wrapper .checkmark.error").fadeIn(300), n.find(".apply span").fadeIn(300).text("Whoops, Sorry, Try Again")
                        }), setTimeout(function() {
                            n.find(".btn-wrapper .checkmark").fadeOut(300, function() {
                                $(this).remove(), n.find(".btn-wrapper .apply").removeClass("left").prop("disabled", !1)
                            }), n.find(".apply span").fadeOut(300, function() {
                                $(this).text("Apply for This Position").fadeIn(300)
                            })
                        }, 6e3)
                    }
                }
            })
        }
        jQuery.validator.addMethod("fullemail", function(e, n) {
            return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
        }, "");
        var i, t, a = '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>',
            o = '<div class="checkmark"><div class="stem"></div><div class="kick"></div></span>',
            s = '<div class="checkmark error"><div class="stem"></div><div class="kick"></div></span>';
        $("#main-nav a").click(function() {
            var e = $(this).attr("href");
            "#" === e[0] && $(".page-wrapper").hasClass("menu-open") && ($("#mobile-menu-btn").removeClass("active"), $(".page-wrapper").removeClass("menu-open"))
        }), $("input[type=file]").each(function() {
            $(this).change(function() {
                $(this).parent().addClass("active"), t = $(this).val().replace(/.*(\/|\\)/, ""), $(this).siblings("span").html(t)
            })
        }), $(".apply-form").each(function() {
            $(this).validate({
                rules: {
                    fullname: {
                        required: !0
                    },
                    email: {
                        required: !0,
                        fullemail: !0
                    },
                    textarea: {
                        required: !0
                    }
                },
                messages: {
                    fullname: "",
                    email: "",
                    textarea: ""
                },
                submitHandler: function(e) {
                    return i = $(e), i.find(".apply span").fadeOut(300).html(""), i.find(".btn-wrapper").append(a), i.find(".btn-wrapper .spinner").fadeIn(300), n(i), !1
                }
            })
        })
    }), $(".contact-em-link").click(function(e) {
        e.preventDefault();
        var n = "hello",
            i = "strv.com";
        window.location.href = "mailto:" + n + "@" + i
    }), $(".jobs-em-link").click(function(e) {
        var n = "jobs",
            i = "strv.com";
        window.location.href = "mailto:" + n + "@" + i, e.preventDefault()
    })
});