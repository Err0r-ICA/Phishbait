/*!
 * FitVids 1.0
 * Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 */
(function(a) {
    a.fn.fitVids = function(b) {
        var c = {
            customSelector: null
        };
        var e = document.createElement("div"),
            d = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
        e.className = "fit-vids-style";
        e.innerHTML = "&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>";
        d.parentNode.insertBefore(e, d);
        if (b) {
            a.extend(c, b)
        }
        return this.each(function() {
            var f = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com']", "object", "embed"];
            if (c.customSelector) {
                f.push(c.customSelector)
            }
            var g = a(this).find(f.join(","));
            g.each(function() {
                var l = a(this);
                if (this.tagName.toLowerCase() === "embed" && l.parent("object").length || l.parent(".fluid-width-video-wrapper").length) {
                    return
                }
                var h = (this.tagName.toLowerCase() === "object" || (l.attr("height") && !isNaN(parseInt(l.attr("height"), 10)))) ? parseInt(l.attr("height"), 10) : l.height(),
                    i = !isNaN(parseInt(l.attr("width"), 10)) ? parseInt(l.attr("width"), 10) : l.width(),
                    j = h / i;
                if (!l.attr("id")) {
                    var k = "fitvid" + Math.floor(Math.random() * 999999);
                    l.attr("id", k)
                }
                l.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", (j * 100) + "%");
                l.removeAttr("height").removeAttr("width")
            })
        })
    }
})(jQuery);
/*
 * jQuery Superfish Menu Plugin - v1.7.4
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

;
(function(e) {
    "use strict";
    var s = function() {
        var s = {
                bcClass: "sf-breadcrumb",
                menuClass: "sf-js-enabled",
                anchorClass: "sf-with-ul",
                menuArrowClass: "sf-arrows"
            },
            o = function() {
                var s = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                return s && e(window).load(function() {
                    e("body").children().on("click", e.noop)
                }), s
            }(),
            n = function() {
                var e = document.documentElement.style;
                return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent)
            }(),
            t = function(e, o) {
                var n = s.menuClass;
                o.cssArrows && (n += " " + s.menuArrowClass), e.toggleClass(n)
            },
            i = function(o, n) {
                return o.find("li." + n.pathClass).slice(0, n.pathLevels).addClass(n.hoverClass + " " + s.bcClass).filter(function() {
                    return e(this).children(n.popUpSelector).hide().show().length
                }).removeClass(n.pathClass)
            },
            r = function(e) {
                e.children("a").toggleClass(s.anchorClass)
            },
            a = function(e) {
                var s = e.css("ms-touch-action");
                s = "pan-y" === s ? "auto" : "pan-y", e.css("ms-touch-action", s)
            },
            l = function(s, t) {
                var i = "li:has(" + t.popUpSelector + ")";
                e.fn.hoverIntent && !t.disableHI ? s.hoverIntent(u, p, i) : s.on("mouseenter.superfish", i, u).on("mouseleave.superfish", i, p);
                var r = "MSPointerDown.superfish";
                o || (r += " touchend.superfish"), n && (r += " mousedown.superfish"), s.on("focusin.superfish", "li", u).on("focusout.superfish", "li", p).on(r, "a", t, h)
            },
            h = function(s) {
                var o = e(this),
                    n = o.siblings(s.data.popUpSelector);
                n.length > 0 && n.is(":hidden") && (o.one("click.superfish", !1), "MSPointerDown" === s.type ? o.trigger("focus") : e.proxy(u, o.parent("li"))())
            },
            u = function() {
                var s = e(this),
                    o = d(s);
                clearTimeout(o.sfTimer), s.siblings().superfish("hide").end().superfish("show")
            },
            p = function() {
                var s = e(this),
                    n = d(s);
                o ? e.proxy(f, s, n)() : (clearTimeout(n.sfTimer), n.sfTimer = setTimeout(e.proxy(f, s, n), n.delay))
            },
            f = function(s) {
                s.retainPath = e.inArray(this[0], s.$path) > -1, this.superfish("hide"), this.parents("." + s.hoverClass).length || (s.onIdle.call(c(this)), s.$path.length && e.proxy(u, s.$path)())
            },
            c = function(e) {
                return e.closest("." + s.menuClass)
            },
            d = function(e) {
                return c(e).data("sf-options")
            };
        return {
            hide: function(s) {
                if (this.length) {
                    var o = this,
                        n = d(o);
                    if (!n) return this;
                    var t = n.retainPath === !0 ? n.$path : "",
                        i = o.find("li." + n.hoverClass).add(this).not(t).removeClass(n.hoverClass).children(n.popUpSelector),
                        r = n.speedOut;
                    s && (i.show(), r = 0), n.retainPath = !1, n.onBeforeHide.call(i), i.stop(!0, !0).animate(n.animationOut, r, function() {
                        var s = e(this);
                        n.onHide.call(s)
                    })
                }
                return this
            },
            show: function() {
                var e = d(this);
                if (!e) return this;
                var s = this.addClass(e.hoverClass),
                    o = s.children(e.popUpSelector);
                return e.onBeforeShow.call(o), o.stop(!0, !0).animate(e.animation, e.speed, function() {
                    e.onShow.call(o)
                }), this
            },
            destroy: function() {
                return this.each(function() {
                    var o, n = e(this),
                        i = n.data("sf-options");
                    return i ? (o = n.find(i.popUpSelector).parent("li"), clearTimeout(i.sfTimer), t(n, i), r(o), a(n), n.off(".superfish").off(".hoverIntent"), o.children(i.popUpSelector).attr("style", function(e, s) {
                        return s.replace(/display[^;]+;?/g, "")
                    }), i.$path.removeClass(i.hoverClass + " " + s.bcClass).addClass(i.pathClass), n.find("." + i.hoverClass).removeClass(i.hoverClass), i.onDestroy.call(n), n.removeData("sf-options"), void 0) : !1
                })
            },
            init: function(o) {
                return this.each(function() {
                    var n = e(this);
                    if (n.data("sf-options")) return !1;
                    var h = e.extend({}, e.fn.superfish.defaults, o),
                        u = n.find(h.popUpSelector).parent("li");
                    h.$path = i(n, h), n.data("sf-options", h), t(n, h), r(u), a(n), l(n, h), u.not("." + s.bcClass).superfish("hide", !0), h.onInit.call(this)
                })
            }
        }
    }();
    e.fn.superfish = function(o) {
        return s[o] ? s[o].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof o && o ? e.error("Method " + o + " does not exist on jQuery.fn.superfish") : s.init.apply(this, arguments)
    }, e.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: e.noop,
        onBeforeShow: e.noop,
        onShow: e.noop,
        onBeforeHide: e.noop,
        onHide: e.noop,
        onIdle: e.noop,
        onDestroy: e.noop
    }, e.fn.extend({
        hideSuperfishUl: s.hide,
        showSuperfishUl: s.show
    })
})(jQuery);

/**
 * jQuery ScrollTo
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3
 */

;
(function($) {
    var h = $.scrollTo = function(a, b, c) {
        $(window).scrollTo(a, b, c)
    };
    h.defaults = {
        axis: 'xy',
        duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
        limit: true
    };
    h.window = function(a) {
        return $(window)._scrollable()
    };
    $.fn._scrollable = function() {
        return this.map(function() {
            var a = this,
                isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
            if (!isWin) return a;
            var b = (a.contentWindow || a).document || a.ownerDocument || a;
            return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCompat' ? b.body : b.documentElement
        })
    };
    $.fn.scrollTo = function(e, f, g) {
        if (typeof f == 'object') {
            g = f;
            f = 0
        }
        if (typeof g == 'function') g = {
            onAfter: g
        };
        if (e == 'max') e = 9e9;
        g = $.extend({}, h.defaults, g);
        f = f || g.duration;
        g.queue = g.queue && g.axis.length > 1;
        if (g.queue) f /= 2;
        g.offset = both(g.offset);
        g.over = both(g.over);
        return this._scrollable().each(function() {
            if (!e) return;
            var d = this,
                $elem = $(d),
                targ = e,
                toff, attr = {},
                win = $elem.is('html,body');
            switch (typeof targ) {
                case 'number':
                case 'string':
                    if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
                        targ = both(targ);
                        break
                    }
                    targ = $(targ, this);
                    if (!targ.length) return;
                case 'object':
                    if (targ.is || targ.style) toff = (targ = $(targ)).offset()
            }
            $.each(g.axis.split(''), function(i, a) {
                var b = a == 'x' ? 'Left' : 'Top',
                    pos = b.toLowerCase(),
                    key = 'scroll' + b,
                    old = d[key],
                    max = h.max(d, a);
                if (toff) {
                    attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
                    if (g.margin) {
                        attr[key] -= parseInt(targ.css('margin' + b)) || 0;
                        attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0
                    }
                    attr[key] += g.offset[pos] || 0;
                    if (g.over[pos]) attr[key] += targ[a == 'x' ? 'width' : 'height']() * g.over[pos]
                } else {
                    var c = targ[pos];
                    attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c
                }
                if (g.limit && /^\d+$/.test(attr[key])) attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
                if (!i && g.queue) {
                    if (old != attr[key]) animate(g.onAfterFirst);
                    delete attr[key]
                }
            });
            animate(g.onAfter);

            function animate(a) {
                $elem.animate(attr, f, g.easing, a && function() {
                    a.call(this, e, g)
                })
            }
        }).end()
    };
    h.max = function(a, b) {
        var c = b == 'x' ? 'Width' : 'Height',
            scroll = 'scroll' + c;
        if (!$(a).is('html,body')) return a[scroll] - $(a)[c.toLowerCase()]();
        var d = 'client' + c,
            html = a.ownerDocument.documentElement,
            body = a.ownerDocument.body;
        return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d])
    };

    function both(a) {
        return typeof a == 'object' ? a : {
            top: a,
            left: a
        }
    }
})(jQuery);
/*
Plugin Name: 	Count To
Written by: 	Matt Huggins - https://github.com/mhuggins/jquery-countTo

*/
(function($) {
    $.fn.countTo = function(options) {
        options = options || {};

        return $(this).each(function() {
            // set options for current element
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);

            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;

            // references & variables that will change with each update
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};

            $self.data('countTo', data);

            // if an existing interval can be found, clear it first
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);

            // initialize the element with the starting value
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;

                render(value);

                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }

                if (loopCount >= loops) {
                    // remove the interval
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 0, // the number the element should end at
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 100, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        formatter: formatter, // handler for formatting the value before rendering
        onUpdate: null, // callback method for every time the element is updated
        onComplete: null // callback method for when the element finishes updating
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
}(jQuery));

/*!
 * Bootstrap-select v1.6.0 (http://silviomoreto.github.io/bootstrap-select/)
 *
 * Copyright 2013-2014 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
! function(a) {
    "use strict";
    a.expr[":"].icontains = function(b, c, d) {
        return a(b).text().toUpperCase().indexOf(d[3].toUpperCase()) >= 0
    };
    var b = function(c, d, e) {
        e && (e.stopPropagation(), e.preventDefault()), this.$element = a(c), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = d, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = b.prototype.val, this.render = b.prototype.render, this.refresh = b.prototype.refresh, this.setStyle = b.prototype.setStyle, this.selectAll = b.prototype.selectAll, this.deselectAll = b.prototype.deselectAll, this.destroy = b.prototype.destroy, this.remove = b.prototype.destroy, this.show = b.prototype.show, this.hide = b.prototype.hide, this.init()
    };
    b.VERSION = "1.6.0", b.DEFAULTS = {
        style: "btn-default",
        size: "auto",
        title: null,
        selectedTextFormat: "values",
        noneSelectedText: "Nothing selected",
        noneResultsText: "No results match",
        countSelectedText: "{0} of {1} selected",
        maxOptionsText: ["Limit reached ({n} {var} max)", "Group limit reached ({n} {var} max)", ["items", "item"]],
        width: !1,
        container: !1,
        hideDisabled: !1,
        showSubtext: !1,
        showIcon: !0,
        showContent: !0,
        dropupAuto: !0,
        header: !1,
        liveSearch: !1,
        actionsBox: !1,
        multipleSeparator: ", ",
        iconBase: "glyphicon",
        tickIcon: "glyphicon-ok",
        maxOptions: !1,
        mobile: !1
    }, b.prototype = {
        constructor: b,
        init: function() {
            var b = this,
                c = this.$element.attr("id");
            this.$element.hide(), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement), this.$menu = this.$newElement.find("> .dropdown-menu"), this.$button = this.$newElement.find("> button"), this.$searchbox = this.$newElement.find("input"), void 0 !== c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function(a) {
                a.preventDefault(), b.$button.focus()
            })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.liHeight(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile()
        },
        createDropdown: function() {
            var b = this.multiple ? " show-tick" : "",
                c = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                d = this.autofocus ? " autofocus" : "",
                e = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                f = this.options.liveSearch ? '<div class="bootstrap-select-searchbox"><input type="text" class="input-block-level form-control" autocomplete="off" /></div>' : "",
                g = this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-block"><button class="actions-btn bs-select-all btn btn-sm btn-default">Select All</button><button class="actions-btn bs-deselect-all btn btn-sm btn-default">Deselect All</button></div></div>' : "",
                h = '<div class="btn-group bootstrap-select' + b + c + '"><button type="button" class="btn dropdown-toggle selectpicker" data-toggle="dropdown"' + d + '><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">' + e + f + g + '<ul class="dropdown-menu inner selectpicker" role="menu"></ul></div></div>';
            return a(h)
        },
        createView: function() {
            var a = this.createDropdown(),
                b = this.createLi();
            return a.find("ul").append(b), a
        },
        reloadLi: function() {
            this.destroyLi();
            var a = this.createLi();
            this.$menu.find("ul").append(a)
        },
        destroyLi: function() {
            this.$menu.find("li").remove()
        },
        createLi: function() {
            var b = this,
                c = [],
                d = "",
                e = 0;
            return this.$element.find("option").each(function() {
                var d = a(this),
                    f = d.attr("class") || "",
                    g = d.attr("style") || "",
                    h = d.data("content") ? d.data("content") : d.html(),
                    i = void 0 !== d.data("subtext") ? '<small class="muted text-muted">' + d.data("subtext") + "</small>" : "",
                    j = void 0 !== d.data("icon") ? '<i class="' + b.options.iconBase + " " + d.data("icon") + '"></i> ' : "";
                if ("" !== j && (d.is(":disabled") || d.parent().is(":disabled")) && (j = "<span>" + j + "</span>"), d.data("content") || (h = j + '<span class="text">' + h + i + "</span>"), b.options.hideDisabled && (d.is(":disabled") || d.parent().is(":disabled"))) c.push('<a style="min-height: 0; padding: 0"></a>');
                else if (d.parent().is("optgroup") && d.data("divider") !== !0)
                    if (0 === d.index()) {
                        var k = d.parent().attr("label"),
                            l = void 0 !== d.parent().data("subtext") ? '<small class="muted text-muted">' + d.parent().data("subtext") + "</small>" : "",
                            m = d.parent().data("icon") ? '<i class="' + b.options.iconBase + " " + d.parent().data("icon") + '"></i> ' : "";
                        k = m + '<span class="text">' + k + l + "</span>", e += 1, c.push(0 !== d[0].index ? '<div class="div-contain"><div class="divider"></div></div><dt>' + k + "</dt>" + b.createA(h, "opt " + f, g, e) : "<dt>" + k + "</dt>" + b.createA(h, "opt " + f, g, e))
                    } else c.push(b.createA(h, "opt " + f, g, e));
                else c.push(d.data("divider") === !0 ? '<div class="div-contain"><div class="divider"></div></div>' : a(this).data("hidden") === !0 ? "<a></a>" : b.createA(h, f, g))
            }), a.each(c, function(a, b) {
                var c = "<a></a>" === b ? 'class="hide is-hidden"' : "";
                d += '<li rel="' + a + '"' + c + ">" + b + "</li>"
            }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), a(d)
        },
        createA: function(a, b, c, d) {
            return '<a tabindex="0" class="' + b + '" style="' + c + '"' + ("undefined" != typeof d ? 'data-optgroup="' + d + '"' : "") + ">" + a + '<i class="' + this.options.iconBase + " " + this.options.tickIcon + ' icon-ok check-mark"></i></a>'
        },
        render: function(b) {
            var c = this;
            b !== !1 && this.$element.find("option").each(function(b) {
                c.setDisabled(b, a(this).is(":disabled") || a(this).parent().is(":disabled")), c.setSelected(b, a(this).is(":selected"))
            }), this.tabIndex();
            var d = this.$element.find("option:selected").map(function() {
                    var b, d = a(this),
                        e = d.data("icon") && c.options.showIcon ? '<i class="' + c.options.iconBase + " " + d.data("icon") + '"></i> ' : "";
                    return b = c.options.showSubtext && d.attr("data-subtext") && !c.multiple ? ' <small class="muted text-muted">' + d.data("subtext") + "</small>" : "", d.data("content") && c.options.showContent ? d.data("content") : void 0 !== d.attr("title") ? d.attr("title") : e + d.html() + b
                }).toArray(),
                e = this.multiple ? d.join(this.options.multipleSeparator) : d[0];
            if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                var f = this.options.selectedTextFormat.split(">"),
                    g = this.options.hideDisabled ? ":not([disabled])" : "";
                (f.length > 1 && d.length > f[1] || 1 == f.length && d.length >= 2) && (e = this.options.countSelectedText.replace("{0}", d.length).replace("{1}", this.$element.find('option:not([data-divider="true"], [data-hidden="true"])' + g).length))
            }
            this.options.title = this.$element.attr("title"), "static" == this.options.selectedTextFormat && (e = this.options.title), e || (e = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", a.trim(a("<div/>").html(e).text()).replace(/\s\s+/g, " ")), this.$newElement.find(".filter-option").html(e)
        },
        setStyle: function(a, b) {
            this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|validate\[.*\]/gi, ""));
            var c = a ? a : this.options.style;
            "add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c))
        },
        liHeight: function() {
            if (this.options.size !== !1) {
                var a = this.$menu.parent().clone().find("> .dropdown-toggle").prop("autofocus", !1).end().appendTo("body"),
                    b = a.addClass("open").find("> .dropdown-menu"),
                    c = b.find("li > a").outerHeight(),
                    d = this.options.header ? b.find(".popover-title").outerHeight() : 0,
                    e = this.options.liveSearch ? b.find(".bootstrap-select-searchbox").outerHeight() : 0,
                    f = this.options.actionsBox ? b.find(".bs-actionsbox").outerHeight() : 0;
                a.remove(), this.$newElement.data("liHeight", c).data("headerHeight", d).data("searchHeight", e).data("actionsHeight", f)
            }
        },
        setSize: function() {
            var b, c, d, e = this,
                f = this.$menu,
                g = f.find(".inner"),
                h = this.$newElement.outerHeight(),
                i = this.$newElement.data("liHeight"),
                j = this.$newElement.data("headerHeight"),
                k = this.$newElement.data("searchHeight"),
                l = this.$newElement.data("actionsHeight"),
                m = f.find("li .divider").outerHeight(!0),
                n = parseInt(f.css("padding-top")) + parseInt(f.css("padding-bottom")) + parseInt(f.css("border-top-width")) + parseInt(f.css("border-bottom-width")),
                o = this.options.hideDisabled ? ":not(.disabled)" : "",
                p = a(window),
                q = n + parseInt(f.css("margin-top")) + parseInt(f.css("margin-bottom")) + 2,
                r = function() {
                    c = e.$newElement.offset().top - p.scrollTop(), d = p.height() - c - h
                };
            if (r(), this.options.header && f.css("padding-top", 0), "auto" == this.options.size) {
                var s = function() {
                    var a, h = e.$lis.not(".hide");
                    r(), b = d - q, e.options.dropupAuto && e.$newElement.toggleClass("dropup", c > d && b - q < f.height()), e.$newElement.hasClass("dropup") && (b = c - q), a = h.length + h.find("dt").length > 3 ? 3 * i + q - 2 : 0, f.css({
                        "max-height": b + "px",
                        overflow: "hidden",
                        "min-height": a + j + k + l + "px"
                    }), g.css({
                        "max-height": b - j - k - l - n + "px",
                        "overflow-y": "auto",
                        "min-height": Math.max(a - n, 0) + "px"
                    })
                };
                s(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", s), a(window).off("resize.getSize").on("resize.getSize", s), a(window).off("scroll.getSize").on("scroll.getSize", s)
            } else if (this.options.size && "auto" != this.options.size && f.find("li" + o).length > this.options.size) {
                var t = f.find("li" + o + " > *").not(".div-contain").slice(0, this.options.size).last().parent().index(),
                    u = f.find("li").slice(0, t + 1).find(".div-contain").length;
                b = i * this.options.size + u * m + n, e.options.dropupAuto && this.$newElement.toggleClass("dropup", c > d && b < f.height()), f.css({
                    "max-height": b + j + k + l + "px",
                    overflow: "hidden"
                }), g.css({
                    "max-height": b - n + "px",
                    "overflow-y": "auto"
                })
            }
        },
        setWidth: function() {
            if ("auto" == this.options.width) {
                this.$menu.css("min-width", "0");
                var a = this.$newElement.clone().appendTo("body"),
                    b = a.find("> .dropdown-menu").css("width"),
                    c = a.css("width", "auto").find("> button").css("width");
                a.remove(), this.$newElement.css("width", Math.max(parseInt(b), parseInt(c)) + "px")
            } else "fit" == this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
            this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
        },
        selectPosition: function() {
            var b, c, d = this,
                e = "<div />",
                f = a(e),
                g = function(a) {
                    f.addClass(a.attr("class").replace(/form-control/gi, "")).toggleClass("dropup", a.hasClass("dropup")), b = a.offset(), c = a.hasClass("dropup") ? 0 : a[0].offsetHeight, f.css({
                        top: b.top + c,
                        left: b.left,
                        width: a[0].offsetWidth,
                        position: "absolute"
                    })
                };
            this.$newElement.on("click", function() {
                d.isDisabled() || (g(a(this)), f.appendTo(d.options.container), f.toggleClass("open", !a(this).hasClass("open")), f.append(d.$menu))
            }), a(window).resize(function() {
                g(d.$newElement)
            }), a(window).on("scroll", function() {
                g(d.$newElement)
            }), a("html").on("click", function(b) {
                a(b.target).closest(d.$newElement).length < 1 && f.removeClass("open")
            })
        },
        mobile: function() {
            this.$element.addClass("mobile-device").appendTo(this.$newElement), this.options.container && this.$menu.hide()
        },
        refresh: function() {
            this.$lis = null, this.reloadLi(), this.render(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight()
        },
        update: function() {
            this.reloadLi(), this.setWidth(), this.setStyle(), this.checkDisabled(), this.liHeight()
        },
        setSelected: function(b, c) {
            null == this.$lis && (this.$lis = this.$menu.find("li")), a(this.$lis[b]).toggleClass("selected", c)
        },
        setDisabled: function(b, c) {
            null == this.$lis && (this.$lis = this.$menu.find("li")), c ? a(this.$lis[b]).addClass("disabled").find("a").attr("href", "#").attr("tabindex", -1) : a(this.$lis[b]).removeClass("disabled").find("a").removeAttr("href").attr("tabindex", 0)
        },
        isDisabled: function() {
            return this.$element.is(":disabled")
        },
        checkDisabled: function() {
            var a = this;
            this.isDisabled() ? this.$button.addClass("disabled").attr("tabindex", -1) : (this.$button.hasClass("disabled") && this.$button.removeClass("disabled"), -1 == this.$button.attr("tabindex") && (this.$element.data("tabindex") || this.$button.removeAttr("tabindex"))), this.$button.click(function() {
                return !a.isDisabled()
            })
        },
        tabIndex: function() {
            this.$element.is("[tabindex]") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex")))
        },
        clickListener: function() {
            var b = this;
            this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(a) {
                a.stopPropagation()
            }), this.$newElement.on("click", function() {
                b.setSize(), b.options.liveSearch || b.multiple || setTimeout(function() {
                    b.$menu.find(".selected a").focus()
                }, 10)
            }), this.$menu.on("click", "li a", function(c) {
                var d = a(this).parent().index(),
                    e = b.$element.val(),
                    f = b.$element.prop("selectedIndex");
                if (b.multiple && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !a(this).parent().hasClass("disabled")) {
                    var g = b.$element.find("option"),
                        h = g.eq(d),
                        i = h.prop("selected"),
                        j = h.parent("optgroup"),
                        k = b.options.maxOptions,
                        l = j.data("maxOptions") || !1;
                    if (b.multiple) {
                        if (h.prop("selected", !i), b.setSelected(d, !i), a(this).blur(), k !== !1 || l !== !1) {
                            var m = k < g.filter(":selected").length,
                                n = l < j.find("option:selected").length,
                                o = b.options.maxOptionsText,
                                p = o[0].replace("{n}", k),
                                q = o[1].replace("{n}", l),
                                r = a('<div class="notify"></div>');
                            if (k && m || l && n)
                                if (k && 1 == k) g.prop("selected", !1), h.prop("selected", !0), b.$menu.find(".selected").removeClass("selected"), b.setSelected(d, !0);
                                else if (l && 1 == l) {
                                j.find("option:selected").prop("selected", !1), h.prop("selected", !0);
                                var s = a(this).data("optgroup");
                                b.$menu.find(".selected").has('a[data-optgroup="' + s + '"]').removeClass("selected"), b.setSelected(d, !0)
                            } else o[2] && (p = p.replace("{var}", o[2][k > 1 ? 0 : 1]), q = q.replace("{var}", o[2][l > 1 ? 0 : 1])), h.prop("selected", !1), b.$menu.append(r), k && m && (r.append(a("<div>" + p + "</div>")), b.$element.trigger("maxReached.bs.select")), l && n && (r.append(a("<div>" + q + "</div>")), b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                                b.setSelected(d, !1)
                            }, 10), r.delay(750).fadeOut(300, function() {
                                a(this).remove()
                            })
                        }
                    } else g.prop("selected", !1), h.prop("selected", !0), b.$menu.find(".selected").removeClass("selected"), b.setSelected(d, !0);
                    b.multiple ? b.options.liveSearch && b.$searchbox.focus() : b.$button.focus(), (e != b.$element.val() && b.multiple || f != b.$element.prop("selectedIndex") && !b.multiple) && b.$element.change()
                }
            }), this.$menu.on("click", "li.disabled a, li dt, li .div-contain, .popover-title, .popover-title :not(.close)", function(a) {
                a.target == this && (a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus())
            }), this.$menu.on("click", ".popover-title .close", function() {
                b.$button.focus()
            }), this.$searchbox.on("click", function(a) {
                a.stopPropagation()
            }), this.$menu.on("click", ".actions-btn", function(c) {
                b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).is(".bs-select-all") ? b.selectAll() : b.deselectAll(), b.$element.change()
            }), this.$element.change(function() {
                b.render(!1)
            })
        },
        liveSearchListener: function() {
            var b = this,
                c = a('<li class="no-results"></li>');
            this.$newElement.on("click.dropdown.data-api", function() {
                b.$menu.find(".active").removeClass("active"), b.$searchbox.val() && (b.$searchbox.val(""), b.$lis.not(".is-hidden").removeClass("hide"), c.parent().length && c.remove()), b.multiple || b.$menu.find(".selected").addClass("active"), setTimeout(function() {
                    b.$searchbox.focus()
                }, 10)
            }), this.$searchbox.on("input propertychange", function() {
                b.$searchbox.val() ? (b.$lis.not(".is-hidden").removeClass("hide").find("a").not(":icontains(" + b.$searchbox.val() + ")").parent().addClass("hide"), b.$menu.find("li").filter(":visible:not(.no-results)").length ? c.parent().length && c.remove() : (c.parent().length && c.remove(), c.html(b.options.noneResultsText + ' "' + b.$searchbox.val() + '"').show(), b.$menu.find("li").last().after(c))) : (b.$lis.not(".is-hidden").removeClass("hide"), c.parent().length && c.remove()), b.$menu.find("li.active").removeClass("active"), b.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus(), a(this).focus()
            }), this.$menu.on("mouseenter", "a", function(c) {
                b.$menu.find(".active").removeClass("active"), a(c.currentTarget).parent().not(".disabled").addClass("active")
            }), this.$menu.on("mouseleave", "a", function() {
                b.$menu.find(".active").removeClass("active")
            })
        },
        val: function(a) {
            return void 0 !== a ? (this.$element.val(a), this.$element.change(), this.render(), this.$element) : this.$element.val()
        },
        selectAll: function() {
            null == this.$lis && (this.$lis = this.$menu.find("li")), this.$element.find("option:enabled").prop("selected", !0), a(this.$lis).not(".disabled").addClass("selected"), this.render(!1)
        },
        deselectAll: function() {
            null == this.$lis && (this.$lis = this.$menu.find("li")), this.$element.find("option:enabled").prop("selected", !1), a(this.$lis).not(".disabled").removeClass("selected"), this.render(!1)
        },
        keydown: function(b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o = {
                32: " ",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9"
            };
            if (c = a(this), e = c.parent(), c.is("input") && (e = c.parent().parent()), l = e.data("this"), l.options.liveSearch && (e = c.parent().parent()), l.options.container && (e = l.$menu), d = a("[role=menu] li:not(.divider) a", e), n = l.$menu.parent().hasClass("open"), !n && /([0-9]|[A-z])/.test(String.fromCharCode(b.keyCode)) && (l.options.container ? l.$newElement.trigger("click") : (l.setSize(), l.$menu.parent().addClass("open"), n = !0), l.$searchbox.focus()), l.options.liveSearch && (/(^9$|27)/.test(b.keyCode.toString(10)) && n && 0 === l.$menu.find(".active").length && (b.preventDefault(), l.$menu.parent().removeClass("open"), l.$button.focus()), d = a("[role=menu] li:not(.divider):visible", e), c.val() || /(38|40)/.test(b.keyCode.toString(10)) || 0 === d.filter(".active").length && (d = l.$newElement.find("li").filter(":icontains(" + o[b.keyCode] + ")"))), d.length) {
                if (/(38|40)/.test(b.keyCode.toString(10))) f = d.index(d.filter(":focus")), h = d.parent(":not(.disabled):visible").first().index(), i = d.parent(":not(.disabled):visible").last().index(), g = d.eq(f).parent().nextAll(":not(.disabled):visible").eq(0).index(), j = d.eq(f).parent().prevAll(":not(.disabled):visible").eq(0).index(), k = d.eq(g).parent().prevAll(":not(.disabled):visible").eq(0).index(), l.options.liveSearch && (d.each(function(b) {
                    a(this).is(":not(.disabled)") && a(this).data("index", b)
                }), f = d.index(d.filter(".active")), h = d.filter(":not(.disabled):visible").first().data("index"), i = d.filter(":not(.disabled):visible").last().data("index"), g = d.eq(f).nextAll(":not(.disabled):visible").eq(0).data("index"), j = d.eq(f).prevAll(":not(.disabled):visible").eq(0).data("index"), k = d.eq(g).prevAll(":not(.disabled):visible").eq(0).data("index")), m = c.data("prevIndex"), 38 == b.keyCode && (l.options.liveSearch && (f -= 1), f != k && f > j && (f = j), h > f && (f = h), f == m && (f = i)), 40 == b.keyCode && (l.options.liveSearch && (f += 1), -1 == f && (f = 0), f != k && g > f && (f = g), f > i && (f = i), f == m && (f = h)), c.data("prevIndex", f), l.options.liveSearch ? (b.preventDefault(), c.is(".dropdown-toggle") || (d.removeClass("active"), d.eq(f).addClass("active").find("a").focus(), c.focus())) : d.eq(f).focus();
                else if (!c.is("input")) {
                    var p, q, r = [];
                    d.each(function() {
                        a(this).parent().is(":not(.disabled)") && a.trim(a(this).text().toLowerCase()).substring(0, 1) == o[b.keyCode] && r.push(a(this).parent().index())
                    }), p = a(document).data("keycount"), p++, a(document).data("keycount", p), q = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), q != o[b.keyCode] ? (p = 1, a(document).data("keycount", p)) : p >= r.length && (a(document).data("keycount", 0), p > r.length && (p = 1)), d.eq(r[p - 1]).focus()
                }
                /(13|32)/.test(b.keyCode.toString(10)) && n && (/(32)/.test(b.keyCode.toString(10)) || b.preventDefault(), l.options.liveSearch ? /(32)/.test(b.keyCode.toString(10)) || (l.$menu.find(".active a").click(), c.focus()) : a(":focus").click(), a(document).data("keycount", 0)), (/(^9$|27)/.test(b.keyCode.toString(10)) && n && (l.multiple || l.options.liveSearch) || /(27)/.test(b.keyCode.toString(10)) && !n) && (l.$menu.parent().removeClass("open"), l.$button.focus())
            }
        },
        hide: function() {
            this.$newElement.hide()
        },
        show: function() {
            this.$newElement.show()
        },
        destroy: function() {
            this.$newElement.remove(), this.$element.remove()
        }
    }, a.fn.selectpicker = function(c, d) {
        var e, f = arguments,
            g = this.each(function() {
                if (a(this).is("select")) {
                    var g = a(this),
                        h = g.data("selectpicker"),
                        i = "object" == typeof c && c;
                    if (h) {
                        if (i)
                            for (var j in i) i.hasOwnProperty(j) && (h.options[j] = i[j])
                    } else g.data("selectpicker", h = new b(this, a.extend({}, b.DEFAULTS, a.fn.selectpicker.defaults || {}, g.data(), i), d));
                    if ("string" == typeof c) {
                        var k = c;
                        h[k] instanceof Function ? ([].shift.apply(f), e = h[k].apply(h, f)) : e = h.options[k]
                    }
                }
            });
        return "undefined" != typeof e ? e : g
    }, a.fn.selectpicker.Constructor = b, a(document).data("keycount", 0).on("keydown", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input", b.prototype.keydown).on("focusin.modal", ".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input", function(a) {
        a.stopPropagation()
    })
}(jQuery);


// Bootstrap DatePicker
! function($) {
    function UTCDate() {
        return new Date(Date.UTC.apply(Date, arguments))
    }

    function UTCToday() {
        var today = new Date();
        return UTCDate(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())
    }
    var Datepicker = function(element, options) {
        var that = this;
        this.element = $(element);
        this.language = options.language || this.element.data('date-language') || "en";
        this.language = this.language in dates ? this.language : "en";
        this.isRTL = dates[this.language].rtl || false;
        this.format = DPGlobal.parseFormat(options.format || this.element.data('date-format') || 'mm/dd/yyyy');
        this.isInline = false;
        this.isInput = this.element.is('input');
        this.component = this.element.is('.date') ? this.element.find('.add-on') : false;
        this.hasInput = this.component && this.element.find('input').length;
        if (this.component && this.component.length === 0) this.component = false;
        this._attachEvents();
        this.forceParse = true;
        if ('forceParse' in options) {
            this.forceParse = options.forceParse
        } else if ('dateForceParse' in this.element.data()) {
            this.forceParse = this.element.data('date-force-parse')
        }
        this.picker = $(DPGlobal.template).appendTo(this.isInline ? this.element : 'body').on({
            click: $.proxy(this.click, this),
            mousedown: $.proxy(this.mousedown, this)
        });
        if (this.isInline) {
            this.picker.addClass('datepicker-inline')
        } else {
            this.picker.addClass('datepicker-dropdown dropdown-menu')
        }
        if (this.isRTL) {
            this.picker.addClass('datepicker-rtl');
            this.picker.find('.prev i, .next i').toggleClass('icon-arrow-left icon-arrow-right')
        }
        $(document).on('mousedown', function(e) {
            if ($(e.target).closest('.datepicker').length === 0) {
                that.hide()
            }
        });
        this.autoclose = false;
        if ('autoclose' in options) {
            this.autoclose = options.autoclose
        } else if ('dateAutoclose' in this.element.data()) {
            this.autoclose = this.element.data('date-autoclose')
        }
        this.keyboardNavigation = true;
        if ('keyboardNavigation' in options) {
            this.keyboardNavigation = options.keyboardNavigation
        } else if ('dateKeyboardNavigation' in this.element.data()) {
            this.keyboardNavigation = this.element.data('date-keyboard-navigation')
        }
        this.viewMode = this.startViewMode = 0;
        switch (options.startView || this.element.data('date-start-view')) {
            case 2:
            case 'decade':
                this.viewMode = this.startViewMode = 2;
                break;
            case 1:
            case 'year':
                this.viewMode = this.startViewMode = 1;
                break
        }
        this.todayBtn = (options.todayBtn || this.element.data('date-today-btn') || false);
        this.todayHighlight = (options.todayHighlight || this.element.data('date-today-highlight') || false);
        this.weekStart = ((options.weekStart || this.element.data('date-weekstart') || dates[this.language].weekStart || 0) % 7);
        this.weekEnd = ((this.weekStart + 6) % 7);
        this.startDate = -Infinity;
        this.endDate = Infinity;
        this.daysOfWeekDisabled = [];
        this.setStartDate(options.startDate || this.element.data('date-startdate'));
        this.setEndDate(options.endDate || this.element.data('date-enddate'));
        this.setDaysOfWeekDisabled(options.daysOfWeekDisabled || this.element.data('date-days-of-week-disabled'));
        this.fillDow();
        this.fillMonths();
        this.update();
        this.showMode();
        if (this.isInline) {
            this.show()
        }
    };
    Datepicker.prototype = {
        constructor: Datepicker,
        _events: [],
        _attachEvents: function() {
            this._detachEvents();
            if (this.isInput) {
                this._events = [
                    [this.element, {
                        focus: $.proxy(this.show, this),
                        keyup: $.proxy(this.update, this),
                        keydown: $.proxy(this.keydown, this)
                    }]
                ]
            } else if (this.component && this.hasInput) {
                this._events = [
                    [this.element.find('input'), {
                        focus: $.proxy(this.show, this),
                        keyup: $.proxy(this.update, this),
                        keydown: $.proxy(this.keydown, this)
                    }],
                    [this.component, {
                        click: $.proxy(this.show, this)
                    }]
                ]
            } else if (this.element.is('div')) {
                this.isInline = true
            } else {
                this._events = [
                    [this.element, {
                        click: $.proxy(this.show, this)
                    }]
                ]
            }
            for (var i = 0, el, ev; i < this._events.length; i++) {
                el = this._events[i][0];
                ev = this._events[i][1];
                el.on(ev)
            }
        },
        _detachEvents: function() {
            for (var i = 0, el, ev; i < this._events.length; i++) {
                el = this._events[i][0];
                ev = this._events[i][1];
                el.off(ev)
            }
            this._events = []
        },
        show: function(e) {
            this.picker.show();
            this.height = this.component ? this.component.outerHeight() : this.element.outerHeight();
            this.update();
            this.place();
            $(window).on('resize', $.proxy(this.place, this));
            if (e) {
                e.stopPropagation();
                e.preventDefault()
            }
            this.element.trigger({
                type: 'show',
                date: this.date
            })
        },
        hide: function(e) {
            if (this.isInline) return;
            this.picker.hide();
            $(window).off('resize', this.place);
            this.viewMode = this.startViewMode;
            this.showMode();
            if (!this.isInput) {
                $(document).off('mousedown', this.hide)
            }
            if (this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find('input').val())) this.setValue();
            this.element.trigger({
                type: 'hide',
                date: this.date
            })
        },
        remove: function() {
            this._detachEvents();
            this.picker.remove();
            delete this.element.data().datepicker
        },
        getDate: function() {
            var d = this.getUTCDate();
            return new Date(d.getTime() + (d.getTimezoneOffset() * 60000))
        },
        getUTCDate: function() {
            return this.date
        },
        setDate: function(d) {
            this.setUTCDate(new Date(d.getTime() - (d.getTimezoneOffset() * 60000)))
        },
        setUTCDate: function(d) {
            this.date = d;
            this.setValue()
        },
        setValue: function() {
            var formatted = this.getFormattedDate();
            if (!this.isInput) {
                if (this.component) {
                    this.element.find('input').val(formatted)
                }
                this.element.data('date', formatted)
            } else {
                this.element.val(formatted)
            }
        },
        getFormattedDate: function(format) {
            if (format === undefined) format = this.format;
            return DPGlobal.formatDate(this.date, format, this.language)
        },
        setStartDate: function(startDate) {
            this.startDate = startDate || -Infinity;
            if (this.startDate !== -Infinity) {
                this.startDate = DPGlobal.parseDate(this.startDate, this.format, this.language)
            }
            this.update();
            this.updateNavArrows()
        },
        setEndDate: function(endDate) {
            this.endDate = endDate || Infinity;
            if (this.endDate !== Infinity) {
                this.endDate = DPGlobal.parseDate(this.endDate, this.format, this.language)
            }
            this.update();
            this.updateNavArrows()
        },
        setDaysOfWeekDisabled: function(daysOfWeekDisabled) {
            this.daysOfWeekDisabled = daysOfWeekDisabled || [];
            if (!$.isArray(this.daysOfWeekDisabled)) {
                this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)
            }
            this.daysOfWeekDisabled = $.map(this.daysOfWeekDisabled, function(d) {
                return parseInt(d, 10)
            });
            this.update();
            this.updateNavArrows()
        },
        place: function() {
            if (this.isInline) return;
            var zIndex = parseInt(this.element.parents().filter(function() {
                return $(this).css('z-index') != 'auto'
            }).first().css('z-index')) + 10;
            var offset = this.component ? this.component.offset() : this.element.offset();
            var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(true);
            this.picker.css({
                top: offset.top + height,
                left: offset.left,
                zIndex: zIndex
            })
        },
        update: function() {
            var date, fromArgs = false;
            if (arguments && arguments.length && (typeof arguments[0] === 'string' || arguments[0] instanceof Date)) {
                date = arguments[0];
                fromArgs = true
            } else {
                date = this.isInput ? this.element.val() : this.element.data('date') || this.element.find('input').val()
            }
            this.date = DPGlobal.parseDate(date, this.format, this.language);
            if (fromArgs) this.setValue();
            var oldViewDate = this.viewDate;
            if (this.date < this.startDate) {
                this.viewDate = new Date(this.startDate)
            } else if (this.date > this.endDate) {
                this.viewDate = new Date(this.endDate)
            } else {
                this.viewDate = new Date(this.date)
            }
            if (oldViewDate && oldViewDate.getTime() != this.viewDate.getTime()) {
                this.element.trigger({
                    type: 'changeDate',
                    date: this.viewDate
                })
            }
            this.fill()
        },
        fillDow: function() {
            var dowCnt = this.weekStart,
                html = '<tr>';
            while (dowCnt < this.weekStart + 7) {
                html += '<th class="dow">' + dates[this.language].daysMin[(dowCnt++) % 7] + '</th>'
            }
            html += '</tr>';
            this.picker.find('.datepicker-days thead').append(html)
        },
        fillMonths: function() {
            var html = '',
                i = 0;
            while (i < 12) {
                html += '<span class="month">' + dates[this.language].monthsShort[i++] + '</span>'
            }
            this.picker.find('.datepicker-months td').html(html)
        },
        fill: function() {
            var d = new Date(this.viewDate),
                year = d.getUTCFullYear(),
                month = d.getUTCMonth(),
                startYear = this.startDate !== -Infinity ? this.startDate.getUTCFullYear() : -Infinity,
                startMonth = this.startDate !== -Infinity ? this.startDate.getUTCMonth() : -Infinity,
                endYear = this.endDate !== Infinity ? this.endDate.getUTCFullYear() : Infinity,
                endMonth = this.endDate !== Infinity ? this.endDate.getUTCMonth() : Infinity,
                currentDate = this.date && this.date.valueOf(),
                today = new Date();
            this.picker.find('.datepicker-days thead th:eq(1)').text(dates[this.language].months[month] + ' ' + year);
            this.picker.find('tfoot th.today').text(dates[this.language].today).toggle(this.todayBtn !== false);
            this.updateNavArrows();
            this.fillMonths();
            var prevMonth = UTCDate(year, month - 1, 28, 0, 0, 0, 0),
                day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
            prevMonth.setUTCDate(day);
            prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.weekStart + 7) % 7);
            var nextMonth = new Date(prevMonth);
            nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
            nextMonth = nextMonth.valueOf();
            var html = [];
            var clsName;
            while (prevMonth.valueOf() < nextMonth) {
                if (prevMonth.getUTCDay() == this.weekStart) {
                    html.push('<tr>')
                }
                clsName = '';
                if (prevMonth.getUTCFullYear() < year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() < month)) {
                    clsName += ' old'
                } else if (prevMonth.getUTCFullYear() > year || (prevMonth.getUTCFullYear() == year && prevMonth.getUTCMonth() > month)) {
                    clsName += ' new'
                }
                if (this.todayHighlight && prevMonth.getUTCFullYear() == today.getFullYear() && prevMonth.getUTCMonth() == today.getMonth() && prevMonth.getUTCDate() == today.getDate()) {
                    clsName += ' today'
                }
                if (currentDate && prevMonth.valueOf() == currentDate) {
                    clsName += ' active'
                }
                if (prevMonth.valueOf() < this.startDate || prevMonth.valueOf() > this.endDate || $.inArray(prevMonth.getUTCDay(), this.daysOfWeekDisabled) !== -1) {
                    clsName += ' disabled'
                }
                html.push('<td class="day' + clsName + '">' + prevMonth.getUTCDate() + '</td>');
                if (prevMonth.getUTCDay() == this.weekEnd) {
                    html.push('</tr>')
                }
                prevMonth.setUTCDate(prevMonth.getUTCDate() + 1)
            }
            this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
            var currentYear = this.date && this.date.getUTCFullYear();
            var months = this.picker.find('.datepicker-months').find('th:eq(1)').text(year).end().find('span').removeClass('active');
            if (currentYear && currentYear == year) {
                months.eq(this.date.getUTCMonth()).addClass('active')
            }
            if (year < startYear || year > endYear) {
                months.addClass('disabled')
            }
            if (year == startYear) {
                months.slice(0, startMonth).addClass('disabled')
            }
            if (year == endYear) {
                months.slice(endMonth + 1).addClass('disabled')
            }
            html = '';
            year = parseInt(year / 10, 10) * 10;
            var yearCont = this.picker.find('.datepicker-years').find('th:eq(1)').text(year + '-' + (year + 9)).end().find('td');
            year -= 1;
            for (var i = -1; i < 11; i++) {
                html += '<span class="year' + (i == -1 || i == 10 ? ' old' : '') + (currentYear == year ? ' active' : '') + (year < startYear || year > endYear ? ' disabled' : '') + '">' + year + '</span>';
                year += 1
            }
            yearCont.html(html)
        },
        updateNavArrows: function() {
            var d = new Date(this.viewDate),
                year = d.getUTCFullYear(),
                month = d.getUTCMonth();
            switch (this.viewMode) {
                case 0:
                    if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear() && month <= this.startDate.getUTCMonth()) {
                        this.picker.find('.prev').css({
                            visibility: 'hidden'
                        })
                    } else {
                        this.picker.find('.prev').css({
                            visibility: 'visible'
                        })
                    }
                    if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear() && month >= this.endDate.getUTCMonth()) {
                        this.picker.find('.next').css({
                            visibility: 'hidden'
                        })
                    } else {
                        this.picker.find('.next').css({
                            visibility: 'visible'
                        })
                    }
                    break;
                case 1:
                case 2:
                    if (this.startDate !== -Infinity && year <= this.startDate.getUTCFullYear()) {
                        this.picker.find('.prev').css({
                            visibility: 'hidden'
                        })
                    } else {
                        this.picker.find('.prev').css({
                            visibility: 'visible'
                        })
                    }
                    if (this.endDate !== Infinity && year >= this.endDate.getUTCFullYear()) {
                        this.picker.find('.next').css({
                            visibility: 'hidden'
                        })
                    } else {
                        this.picker.find('.next').css({
                            visibility: 'visible'
                        })
                    }
                    break
            }
        },
        click: function(e) {
            e.stopPropagation();
            e.preventDefault();
            var target = $(e.target).closest('span, td, th');
            if (target.length == 1) {
                switch (target[0].nodeName.toLowerCase()) {
                    case 'th':
                        switch (target[0].className) {
                            case 'switch':
                                this.showMode(1);
                                break;
                            case 'prev':
                            case 'next':
                                var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className == 'prev' ? -1 : 1);
                                switch (this.viewMode) {
                                    case 0:
                                        this.viewDate = this.moveMonth(this.viewDate, dir);
                                        break;
                                    case 1:
                                    case 2:
                                        this.viewDate = this.moveYear(this.viewDate, dir);
                                        break
                                }
                                this.fill();
                                break;
                            case 'today':
                                var date = new Date();
                                date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
                                this.showMode(-2);
                                var which = this.todayBtn == 'linked' ? null : 'view';
                                this._setDate(date, which);
                                break
                        }
                        break;
                    case 'span':
                        if (!target.is('.disabled')) {
                            this.viewDate.setUTCDate(1);
                            if (target.is('.month')) {
                                var month = target.parent().find('span').index(target);
                                this.viewDate.setUTCMonth(month);
                                this.element.trigger({
                                    type: 'changeMonth',
                                    date: this.viewDate
                                })
                            } else {
                                var year = parseInt(target.text(), 10) || 0;
                                this.viewDate.setUTCFullYear(year);
                                this.element.trigger({
                                    type: 'changeYear',
                                    date: this.viewDate
                                })
                            }
                            this.showMode(-1);
                            this.fill()
                        }
                        break;
                    case 'td':
                        if (target.is('.day') && !target.is('.disabled')) {
                            var day = parseInt(target.text(), 10) || 1;
                            var year = this.viewDate.getUTCFullYear(),
                                month = this.viewDate.getUTCMonth();
                            if (target.is('.old')) {
                                if (month === 0) {
                                    month = 11;
                                    year -= 1
                                } else {
                                    month -= 1
                                }
                            } else if (target.is('.new')) {
                                if (month == 11) {
                                    month = 0;
                                    year += 1
                                } else {
                                    month += 1
                                }
                            }
                            this._setDate(UTCDate(year, month, day, 0, 0, 0, 0))
                        }
                        break
                }
            }
        },
        _setDate: function(date, which) {
            if (!which || which == 'date') this.date = date;
            if (!which || which == 'view') this.viewDate = date;
            this.fill();
            this.setValue();
            this.element.trigger({
                type: 'changeDate',
                date: this.date
            });
            var element;
            if (this.isInput) {
                element = this.element
            } else if (this.component) {
                element = this.element.find('input')
            }
            if (element) {
                element.change();
                if (this.autoclose && (!which || which == 'date')) {
                    this.hide()
                }
            }
        },
        moveMonth: function(date, dir) {
            if (!dir) return date;
            var new_date = new Date(date.valueOf()),
                day = new_date.getUTCDate(),
                month = new_date.getUTCMonth(),
                mag = Math.abs(dir),
                new_month, test;
            dir = dir > 0 ? 1 : -1;
            if (mag == 1) {
                test = dir == -1 ? function() {
                    return new_date.getUTCMonth() == month
                } : function() {
                    return new_date.getUTCMonth() != new_month
                };
                new_month = month + dir;
                new_date.setUTCMonth(new_month);
                if (new_month < 0 || new_month > 11) new_month = (new_month + 12) % 12
            } else {
                for (var i = 0; i < mag; i++) new_date = this.moveMonth(new_date, dir);
                new_month = new_date.getUTCMonth();
                new_date.setUTCDate(day);
                test = function() {
                    return new_month != new_date.getUTCMonth()
                }
            }
            while (test()) {
                new_date.setUTCDate(--day);
                new_date.setUTCMonth(new_month)
            }
            return new_date
        },
        moveYear: function(date, dir) {
            return this.moveMonth(date, dir * 12)
        },
        dateWithinRange: function(date) {
            return date >= this.startDate && date <= this.endDate
        },
        keydown: function(e) {
            if (this.picker.is(':not(:visible)')) {
                if (e.keyCode == 27) this.show();
                return
            }
            var dateChanged = false,
                dir, day, month, newDate, newViewDate;
            switch (e.keyCode) {
                case 27:
                    this.hide();
                    e.preventDefault();
                    break;
                case 37:
                case 39:
                    if (!this.keyboardNavigation) break;
                    dir = e.keyCode == 37 ? -1 : 1;
                    if (e.ctrlKey) {
                        newDate = this.moveYear(this.date, dir);
                        newViewDate = this.moveYear(this.viewDate, dir)
                    } else if (e.shiftKey) {
                        newDate = this.moveMonth(this.date, dir);
                        newViewDate = this.moveMonth(this.viewDate, dir)
                    } else {
                        newDate = new Date(this.date);
                        newDate.setUTCDate(this.date.getUTCDate() + dir);
                        newViewDate = new Date(this.viewDate);
                        newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir)
                    }
                    if (this.dateWithinRange(newDate)) {
                        this.date = newDate;
                        this.viewDate = newViewDate;
                        this.setValue();
                        this.update();
                        e.preventDefault();
                        dateChanged = true
                    }
                    break;
                case 38:
                case 40:
                    if (!this.keyboardNavigation) break;
                    dir = e.keyCode == 38 ? -1 : 1;
                    if (e.ctrlKey) {
                        newDate = this.moveYear(this.date, dir);
                        newViewDate = this.moveYear(this.viewDate, dir)
                    } else if (e.shiftKey) {
                        newDate = this.moveMonth(this.date, dir);
                        newViewDate = this.moveMonth(this.viewDate, dir)
                    } else {
                        newDate = new Date(this.date);
                        newDate.setUTCDate(this.date.getUTCDate() + dir * 7);
                        newViewDate = new Date(this.viewDate);
                        newViewDate.setUTCDate(this.viewDate.getUTCDate() + dir * 7)
                    }
                    if (this.dateWithinRange(newDate)) {
                        this.date = newDate;
                        this.viewDate = newViewDate;
                        this.setValue();
                        this.update();
                        e.preventDefault();
                        dateChanged = true
                    }
                    break;
                case 13:
                    this.hide();
                    e.preventDefault();
                    break;
                case 9:
                    this.hide();
                    break
            }
            if (dateChanged) {
                this.element.trigger({
                    type: 'changeDate',
                    date: this.date
                });
                var element;
                if (this.isInput) {
                    element = this.element
                } else if (this.component) {
                    element = this.element.find('input')
                }
                if (element) {
                    element.change()
                }
            }
        },
        showMode: function(dir) {
            if (dir) {
                this.viewMode = Math.max(0, Math.min(2, this.viewMode + dir))
            }
            this.picker.find('>div').hide().filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
            this.updateNavArrows()
        }
    };
    $.fn.datepicker = function(option) {
        var args = Array.apply(null, arguments);
        args.shift();
        return this.each(function() {
            var $this = $(this),
                data = $this.data('datepicker'),
                options = typeof option == 'object' && option;
            if (!data) {
                $this.data('datepicker', (data = new Datepicker(this, $.extend({}, $.fn.datepicker.defaults, options))))
            }
            if (typeof option == 'string' && typeof data[option] == 'function') {
                data[option].apply(data, args)
            }
        })
    };
    $.fn.datepicker.defaults = {};
    $.fn.datepicker.Constructor = Datepicker;
    var dates = $.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today"
        }
    };
    var DPGlobal = {
        modes: [{
            clsName: 'days',
            navFnc: 'Month',
            navStep: 1
        }, {
            clsName: 'months',
            navFnc: 'FullYear',
            navStep: 1
        }, {
            clsName: 'years',
            navFnc: 'FullYear',
            navStep: 10
        }],
        isLeapYear: function(year) {
            return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))
        },
        getDaysInMonth: function(year, month) {
            return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
        },
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
        parseFormat: function(format) {
            var separators = format.replace(this.validParts, '\0').split('\0'),
                parts = format.match(this.validParts);
            if (!separators || !separators.length || !parts || parts.length === 0) {
                throw new Error("Invalid date format.");
            }
            return {
                separators: separators,
                parts: parts
            }
        },
        parseDate: function(date, format, language) {
            if (date instanceof Date) return date;
            if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
                var part_re = /([\-+]\d+)([dmwy])/,
                    parts = date.match(/([\-+]\d+)([dmwy])/g),
                    part, dir;
                date = new Date();
                for (var i = 0; i < parts.length; i++) {
                    part = part_re.exec(parts[i]);
                    dir = parseInt(part[1]);
                    switch (part[2]) {
                        case 'd':
                            date.setUTCDate(date.getUTCDate() + dir);
                            break;
                        case 'm':
                            date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
                            break;
                        case 'w':
                            date.setUTCDate(date.getUTCDate() + dir * 7);
                            break;
                        case 'y':
                            date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
                            break
                    }
                }
                return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0)
            }
            var parts = date && date.match(this.nonpunctuation) || [],
                date = new Date(),
                parsed = {},
                setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
                setters_map = {
                    yyyy: function(d, v) {
                        return d.setUTCFullYear(v)
                    },
                    yy: function(d, v) {
                        return d.setUTCFullYear(2000 + v)
                    },
                    m: function(d, v) {
                        v -= 1;
                        while (v < 0) v += 12;
                        v %= 12;
                        d.setUTCMonth(v);
                        while (d.getUTCMonth() != v) d.setUTCDate(d.getUTCDate() - 1);
                        return d
                    },
                    d: function(d, v) {
                        return d.setUTCDate(v)
                    }
                },
                val, filtered, part;
            setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
            setters_map['dd'] = setters_map['d'];
            date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
            var fparts = format.parts.slice();
            if (parts.length != fparts.length) {
                fparts = $(fparts).filter(function(i, p) {
                    return $.inArray(p, setters_order) !== -1
                }).toArray()
            }
            if (parts.length == fparts.length) {
                for (var i = 0, cnt = fparts.length; i < cnt; i++) {
                    val = parseInt(parts[i], 10);
                    part = fparts[i];
                    if (isNaN(val)) {
                        switch (part) {
                            case 'MM':
                                filtered = $(dates[language].months).filter(function() {
                                    var m = this.slice(0, parts[i].length),
                                        p = parts[i].slice(0, m.length);
                                    return m == p
                                });
                                val = $.inArray(filtered[0], dates[language].months) + 1;
                                break;
                            case 'M':
                                filtered = $(dates[language].monthsShort).filter(function() {
                                    var m = this.slice(0, parts[i].length),
                                        p = parts[i].slice(0, m.length);
                                    return m == p
                                });
                                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                                break
                        }
                    }
                    parsed[part] = val
                }
                for (var i = 0, s; i < setters_order.length; i++) {
                    s = setters_order[i];
                    if (s in parsed && !isNaN(parsed[s])) setters_map[s](date, parsed[s])
                }
            }
            return date
        },
        formatDate: function(date, format, language) {
            var val = {
                d: date.getUTCDate(),
                D: dates[language].daysShort[date.getUTCDay()],
                DD: dates[language].days[date.getUTCDay()],
                m: date.getUTCMonth() + 1,
                M: dates[language].monthsShort[date.getUTCMonth()],
                MM: dates[language].months[date.getUTCMonth()],
                yy: date.getUTCFullYear().toString().substring(2),
                yyyy: date.getUTCFullYear()
            };
            val.dd = (val.d < 10 ? '0' : '') + val.d;
            val.mm = (val.m < 10 ? '0' : '') + val.m;
            var date = [],
                seps = $.extend([], format.separators);
            for (var i = 0, cnt = format.parts.length; i < cnt; i++) {
                if (seps.length) date.push(seps.shift());
                date.push(val[format.parts[i]])
            }
            return date.join('')
        },
        headTemplate: '<thead>' + '<tr>' + '<th class="prev"><i class="icon-arrow-left"/></th>' + '<th colspan="5" class="switch"></th>' + '<th class="next"><i class="icon-arrow-right"/></th>' + '</tr>' + '</thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr></tfoot>'
    };
    DPGlobal.template = '<div class="datepicker">' + '<div class="datepicker-days">' + '<table class=" table-condensed">' + DPGlobal.headTemplate + '<tbody></tbody>' + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-months">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-years">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '</div>';
    $.fn.datepicker.DPGlobal = DPGlobal
}(window.jQuery);



// Jquery Equal height (http://brm.io/jquery-match-height-demo/) 
(function(e) {
    var t = -1,
        n = -1;
    var r = function(t) {
        var n = 1,
            r = e(t),
            s = null,
            o = [];
        r.each(function() {
            var t = e(this),
                r = t.offset().top - i(t.css("margin-top")),
                u = o.length > 0 ? o[o.length - 1] : null;
            if (u === null) {
                o.push(t)
            } else {
                if (Math.floor(Math.abs(s - r)) <= n) {
                    o[o.length - 1] = u.add(t)
                } else {
                    o.push(t)
                }
            }
            s = r
        });
        return o
    };
    var i = function(e) {
        return parseFloat(e) || 0
    };
    var s = function(t) {
        var n = {
            byRow: true,
            remove: false,
            property: "height"
        };
        if (typeof t === "object") {
            return e.extend(n, t)
        }
        if (typeof t === "boolean") {
            n.byRow = t
        } else if (t === "remove") {
            n.remove = true
        }
        return n
    };
    var o = e.fn.matchHeight = function(t) {
        var n = s(t);
        if (n.remove) {
            var r = this;
            this.css(n.property, "");
            e.each(o._groups, function(e, t) {
                t.elements = t.elements.not(r)
            });
            return this
        }
        if (this.length <= 1) return this;
        o._groups.push({
            elements: this,
            options: n
        });
        o._apply(this, n);
        return this
    };
    o._groups = [];
    o._throttle = 80;
    o._maintainScroll = false;
    o._beforeUpdate = null;
    o._afterUpdate = null;
    o._apply = function(t, n) {
        var u = s(n),
            a = e(t),
            f = [a];
        var l = e(window).scrollTop(),
            c = e("html").outerHeight(true);
        var h = a.parents().filter(":hidden");
        h.each(function() {
            var t = e(this);
            t.data("style-cache", t.attr("style"))
        });
        h.css("display", "block");
        if (u.byRow) {
            a.each(function() {
                var t = e(this),
                    n = t.css("display") === "inline-block" ? "inline-block" : "block";
                t.data("style-cache", t.attr("style"));
                t.css({
                    display: n,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px"
                })
            });
            f = r(a);
            a.each(function() {
                var t = e(this);
                t.attr("style", t.data("style-cache") || "")
            })
        }
        e.each(f, function(t, n) {
            var r = e(n),
                s = 0;
            if (u.byRow && r.length <= 1) {
                r.css(u.property, "");
                return
            }
            r.each(function() {
                var t = e(this),
                    n = t.css("display") === "inline-block" ? "inline-block" : "block";
                var r = {
                    display: n
                };
                r[u.property] = "";
                t.css(r);
                if (t.outerHeight(false) > s) s = t.outerHeight(false);
                t.css("display", "")
            });
            r.each(function() {
                var t = e(this),
                    n = 0;
                if (t.css("box-sizing") !== "border-box") {
                    n += i(t.css("border-top-width")) + i(t.css("border-bottom-width"));
                    n += i(t.css("padding-top")) + i(t.css("padding-bottom"))
                }
                t.css(u.property, s - n)
            })
        });
        h.each(function() {
            var t = e(this);
            t.attr("style", t.data("style-cache") || null)
        });
        if (o._maintainScroll) e(window).scrollTop(l / c * e("html").outerHeight(true));
        return this
    };
    o._applyDataApi = function() {
        var t = {};
        e("[data-match-height], [data-mh]").each(function() {
            var n = e(this),
                r = n.attr("data-match-height") || n.attr("data-mh");
            if (r in t) {
                t[r] = t[r].add(n)
            } else {
                t[r] = n
            }
        });
        e.each(t, function() {
            this.matchHeight(true)
        })
    };
    var u = function(t) {
        if (o._beforeUpdate) o._beforeUpdate(t, o._groups);
        e.each(o._groups, function() {
            o._apply(this.elements, this.options)
        });
        if (o._afterUpdate) o._afterUpdate(t, o._groups)
    };
    o._update = function(r, i) {
        if (i && i.type === "resize") {
            var s = e(window).width();
            if (s === t) return;
            t = s
        }
        if (!r) {
            u(i)
        } else if (n === -1) {
            n = setTimeout(function() {
                u(i);
                n = -1
            }, o._throttle)
        }
    };
    e(o._applyDataApi);
    e(window).bind("load", function(e) {
        o._update(false, e)
    });
    e(window).bind("resize orientationchange", function(e) {
        o._update(true, e)
    })
})(jQuery);