function media_slider() {
  $(".media__slider").each(function(t, e) {
    var i = "#" + e.id + "-controls";
    $(this).slick({
      appendArrows: i,
      prevArrow: '<button type="button" data-role="none" class="col-md-1 col-md-pull-1 pull-right text-left btn-link" aria-label="Previous" tabindex="0" role="button"> &larr; </button>',
      nextArrow: '<button type="button" data-role="none" class="col-md-1 col-md-push-1 pull-right text-right btn-link" aria-label="Next" tabindex="0" role="button"> &rarr; </button>',
      centerMode: !1,
      centerPadding: "50px",
      cssEase: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
      easing: "linear",
      infinite: !1,
      initialSlide: 0,
      slidesPerRow: 1,
      slidesToShow: 1.05,
      slidesToScroll: 1,
      speed: 1500,
      swipe: !0,
      swipeToSlide: !1,
      touchThreshold: 5,
      useCSS: !0,
      useTransform: !0,
      variableWidth: !1,
      vertical: !1,
      verticalSwiping: !1
    })
  })
}

function mobileMenuActions() {
  $(".mobile__trigger").on("click tap", function(t) {
    t.preventDefault(), $(this).toggleClass("active"), $(".nav-primary").toggleClass("active")
  })
}

function lg_hidetext() {
  $(".entry-content").addClass("hide")
}

function lg_readmore() {
  $(".project__more, .fulltext__closer").on("click tap", function(t) {
    if($(".project__more").innerHTML=='Read More')
    {
      $(".project__more").innerHTML=='Close'
    }
    if($(".project__more").innerHTML=='Close')
    {
      $(".project__more").innerHTML=='Read More'
    }
    
    t.preventDefault(), $(".entry-content").toggleClass("faded"), $(".entry__fulltext").toggleClass("show"), $(".project__media").toggleClass("soft")
  })
}

function searchTrigger() {
  $(".menu-search").on("click", function() {
    $("#modal-search").fadeToggle(0), $('#modal-search input[type="text"]').focus()
  })
}! function(t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
  "use strict";
  var e = window.Slick || {};
  e = function() {
    function e(e, o) {
      var s, n = this;
      n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: t(e),
        appendDots: t(e),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function(e, i) {
          return t('<button type="button" />').text(i + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: !1,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        swiping: !1,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, t.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = t(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = t(e).data("slick") || {}, n.options = t.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, "undefined" != typeof document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = t.proxy(n.autoPlay, n), n.autoPlayClear = t.proxy(n.autoPlayClear, n), n.autoPlayIterator = t.proxy(n.autoPlayIterator, n), n.changeSlide = t.proxy(n.changeSlide, n), n.clickHandler = t.proxy(n.clickHandler, n), n.selectHandler = t.proxy(n.selectHandler, n), n.setPosition = t.proxy(n.setPosition, n), n.swipeHandler = t.proxy(n.swipeHandler, n), n.dragHandler = t.proxy(n.dragHandler, n), n.keyHandler = t.proxy(n.keyHandler, n), n.instanceUid = i++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
    }
    var i = 0;
    return e
  }(), e.prototype.activateADA = function() {
    var t = this;
    t.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    })
  }, e.prototype.addSlide = e.prototype.slickAdd = function(e, i, o) {
    var s = this;
    if ("boolean" == typeof i) o = i, i = null;
    else if (i < 0 || i >= s.slideCount) return !1;
    s.unload(), "number" == typeof i ? 0 === i && 0 === s.$slides.length ? t(e).appendTo(s.$slideTrack) : o ? t(e).insertBefore(s.$slides.eq(i)) : t(e).insertAfter(s.$slides.eq(i)) : o === !0 ? t(e).prependTo(s.$slideTrack) : t(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, i) {
      t(i).attr("data-slick-index", e)
    }), s.$slidesCache = s.$slides, s.reinit()
  }, e.prototype.animateHeight = function() {
    var t = this;
    if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
      var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
      t.$list.animate({
        height: e
      }, t.options.speed)
    }
  }, e.prototype.animateSlide = function(e, i) {
    var o = {},
      s = this;
    s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (e = -e), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({
      left: e
    }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({
      top: e
    }, s.options.speed, s.options.easing, i) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), t({
      animStart: s.currentLeft
    }).animate({
      animStart: e
    }, {
      duration: s.options.speed,
      easing: s.options.easing,
      step: function(t) {
        t = Math.ceil(t), s.options.vertical === !1 ? (o[s.animType] = "translate(" + t + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + t + "px)", s.$slideTrack.css(o))
      },
      complete: function() {
        i && i.call()
      }
    })) : (s.applyTransition(), e = Math.ceil(e), s.options.vertical === !1 ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), i && setTimeout(function() {
      s.disableTransition(), i.call()
    }, s.options.speed))
  }, e.prototype.getNavTarget = function() {
    var e = this,
      i = e.options.asNavFor;
    return i && null !== i && (i = t(i).not(e.$slider)), i
  }, e.prototype.asNavFor = function(e) {
    var i = this,
      o = i.getNavTarget();
    null !== o && "object" == typeof o && o.each(function() {
      var i = t(this).slick("getSlick");
      i.unslicked || i.slideHandler(e, !0)
    })
  }, e.prototype.applyTransition = function(t) {
    var e = this,
      i = {};
    e.options.fade === !1 ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
  }, e.prototype.autoPlay = function() {
    var t = this;
    t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
  }, e.prototype.autoPlayClear = function() {
    var t = this;
    t.autoPlayTimer && clearInterval(t.autoPlayTimer)
  }, e.prototype.autoPlayIterator = function() {
    var t = this,
      e = t.currentSlide + t.options.slidesToScroll;
    t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 === 0 && (t.direction = 1))), t.slideHandler(e))
  }, e.prototype.buildArrows = function() {
    var e = this;
    e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }))
  }, e.prototype.buildDots = function() {
    var e, i, o = this;
    if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
      for (o.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) i.append(t("<li />").append(o.options.customPaging.call(this, o, e)));
      o.$dots = i.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
    }
  }, e.prototype.buildOut = function() {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, i) {
      t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
  }, e.prototype.buildRows = function() {
    var t, e, i, o, s, n, r, a = this;
    if (o = document.createDocumentFragment(), n = a.$slider.children(), a.options.rows > 0) {
      for (r = a.options.slidesPerRow * a.options.rows, s = Math.ceil(n.length / r), t = 0; t < s; t++) {
        var l = document.createElement("div");
        for (e = 0; e < a.options.rows; e++) {
          var d = document.createElement("div");
          for (i = 0; i < a.options.slidesPerRow; i++) {
            var c = t * r + (e * a.options.slidesPerRow + i);
            n.get(c) && d.appendChild(n.get(c))
          }
          l.appendChild(d)
        }
        o.appendChild(l)
      }
      a.$slider.empty().append(o), a.$slider.children().children().children().css({
        width: 100 / a.options.slidesPerRow + "%",
        display: "inline-block"
      })
    }
  }, e.prototype.checkResponsive = function(e, i) {
    var o, s, n, r = this,
      a = !1,
      l = r.$slider.width(),
      d = window.innerWidth || t(window).width();
    if ("window" === r.respondTo ? n = d : "slider" === r.respondTo ? n = l : "min" === r.respondTo && (n = Math.min(d, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
      s = null;
      for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (r.originalSettings.mobileFirst === !1 ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
      null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || i) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = s), e || a === !1 || r.$slider.trigger("breakpoint", [r, a])
    }
  }, e.prototype.changeSlide = function(e, i) {
    var o, s, n, r = this,
      a = t(e.currentTarget);
    switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), n = r.slideCount % r.options.slidesToScroll !== 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
      case "previous":
        s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, i);
        break;
      case "next":
        s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, i);
        break;
      case "index":
        var l = 0 === e.data.index ? 0 : e.data.index || a.index() * r.options.slidesToScroll;
        r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
        break;
      default:
        return
    }
  }, e.prototype.checkNavigable = function(t) {
    var e, i, o = this;
    if (e = o.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
    else
      for (var s in e) {
        if (t < e[s]) {
          t = i;
          break
        }
        i = e[s]
      }
    return t
  }, e.prototype.cleanUpEvents = function() {
    var e = this;
    e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.options.accessibility === !0 && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), e.options.accessibility === !0 && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
  }, e.prototype.cleanUpSlideEvents = function() {
    var e = this;
    e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
  }, e.prototype.cleanUpRows = function() {
    var t, e = this;
    e.options.rows > 0 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
  }, e.prototype.clickHandler = function(t) {
    var e = this;
    e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
  }, e.prototype.destroy = function(e) {
    var i = this;
    i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
      t(this).attr("style", t(this).data("originalStyling"))
    }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
  }, e.prototype.disableTransition = function(t) {
    var e = this,
      i = {};
    i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
  }, e.prototype.fadeSlide = function(t, e) {
    var i = this;
    i.cssTransitions === !1 ? (i.$slides.eq(t).css({
      zIndex: i.options.zIndex
    }), i.$slides.eq(t).animate({
      opacity: 1
    }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
      opacity: 1,
      zIndex: i.options.zIndex
    }), e && setTimeout(function() {
      i.disableTransition(t), e.call()
    }, i.options.speed))
  }, e.prototype.fadeSlideOut = function(t) {
    var e = this;
    e.cssTransitions === !1 ? e.$slides.eq(t).animate({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
      opacity: 0,
      zIndex: e.options.zIndex - 2
    }))
  }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
    var e = this;
    null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
  }, e.prototype.focusHandler = function() {
    var e = this;
    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
      i.stopImmediatePropagation();
      var o = t(this);
      setTimeout(function() {
        e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
      }, 0)
    })
  }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
    var t = this;
    return t.currentSlide
  }, e.prototype.getDotCount = function() {
    var t = this,
      e = 0,
      i = 0,
      o = 0;
    if (t.options.infinite === !0)
      if (t.slideCount <= t.options.slidesToShow) ++o;
      else
        for (; e < t.slideCount;) ++o, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
    else if (t.options.centerMode === !0) o = t.slideCount;
    else if (t.options.asNavFor)
      for (; e < t.slideCount;) ++o, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
    else o = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
    return o - 1
  }, e.prototype.getLeft = function(t) {
    var e, i, o, s, n = this,
      r = 0;
    return n.slideOffset = 0, i = n.$slides.first().outerHeight(!0), n.options.infinite === !0 ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, n.options.vertical === !0 && n.options.centerMode === !0 && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = i * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll !== 0 && t + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (t > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (t - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (t - n.slideCount)) * i * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * i * -1))) : t + n.options.slidesToShow > n.slideCount && (n.slideOffset = (t + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (t + n.options.slidesToShow - n.slideCount) * i), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : n.options.centerMode === !0 && n.options.infinite === !0 ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : n.options.centerMode === !0 && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = n.options.vertical === !1 ? t * n.slideWidth * -1 + n.slideOffset : t * i * -1 + r, n.options.variableWidth === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, n.options.centerMode === !0 && (o = n.slideCount <= n.options.slidesToShow || n.options.infinite === !1 ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow + 1), e = n.options.rtl === !0 ? o[0] ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1 : 0 : o[0] ? o[0].offsetLeft * -1 : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
  }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
    var e = this;
    return e.options[t]
  }, e.prototype.getNavigableIndexes = function() {
    var t, e = this,
      i = 0,
      o = 0,
      s = [];
    for (e.options.infinite === !1 ? t = e.slideCount : (i = e.options.slidesToScroll * -1, o = e.options.slidesToScroll * -1, t = 2 * e.slideCount); i < t;) s.push(i), i = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    return s
  }, e.prototype.getSlick = function() {
    return this
  }, e.prototype.getSlideCount = function() {
    var e, i, o, s = this;
    return o = s.options.centerMode === !0 ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, s.options.swipeToSlide === !0 ? (s.$slideTrack.find(".slick-slide").each(function(e, n) {
      if (n.offsetLeft - o + t(n).outerWidth() / 2 > s.swipeLeft * -1) return i = n, !1
    }), e = Math.abs(t(i).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
  }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
    var i = this;
    i.changeSlide({
      data: {
        message: "index",
        index: parseInt(t)
      }
    }, e)
  }, e.prototype.init = function(e) {
    var i = this;
    t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
  }, e.prototype.initADA = function() {
    var e = this,
      i = Math.ceil(e.slideCount / e.options.slidesToShow),
      o = e.getNavigableIndexes().filter(function(t) {
        return t >= 0 && t < e.slideCount
      });
    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(i) {
      var s = o.indexOf(i);
      if (t(this).attr({
          role: "tabpanel",
          id: "slick-slide" + e.instanceUid + i,
          tabindex: -1
        }), s !== -1) {
        var n = "slick-slide-control" + e.instanceUid + s;
        t("#" + n).length && t(this).attr({
          "aria-describedby": n
        })
      }
    }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
      var n = o[s];
      t(this).attr({
        role: "presentation"
      }), t(this).find("button").first().attr({
        role: "tab",
        id: "slick-slide-control" + e.instanceUid + s,
        "aria-controls": "slick-slide" + e.instanceUid + n,
        "aria-label": s + 1 + " of " + i,
        "aria-selected": null,
        tabindex: "-1"
      })
    }).eq(e.currentSlide).find("button").attr({
      "aria-selected": "true",
      tabindex: "0"
    }).end());
    for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.options.focusOnChange ? e.$slides.eq(s).attr({
      tabindex: "0"
    }) : e.$slides.eq(s).removeAttr("tabindex");
    e.activateADA()
  }, e.prototype.initArrowEvents = function() {
    var t = this;
    t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, t.changeSlide), t.options.accessibility === !0 && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
  }, e.prototype.initDotEvents = function() {
    var e = this;
    e.options.dots === !0 && e.slideCount > e.options.slidesToShow && (t("li", e.$dots).on("click.slick", {
      message: "index"
    }, e.changeSlide), e.options.accessibility === !0 && e.$dots.on("keydown.slick", e.keyHandler)), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
  }, e.prototype.initSlideEvents = function() {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
  }, e.prototype.initializeEvents = function() {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
  }, e.prototype.initUI = function() {
    var t = this;
    t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
  }, e.prototype.keyHandler = function(t) {
    var e = this;
    t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
      data: {
        message: e.options.rtl === !0 ? "next" : "previous"
      }
    }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
      data: {
        message: e.options.rtl === !0 ? "previous" : "next"
      }
    }))
  }, e.prototype.lazyLoad = function() {
    function e(e) {
      t("img[data-lazy]", e).each(function() {
        var e = t(this),
          i = t(this).attr("data-lazy"),
          o = t(this).attr("data-srcset"),
          s = t(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
          n = document.createElement("img");
        n.onload = function() {
          e.animate({
            opacity: 0
          }, 100, function() {
            o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", i).animate({
              opacity: 1
            }, 200, function() {
              e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
            }), r.$slider.trigger("lazyLoaded", [r, e, i])
          })
        }, n.onerror = function() {
          e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, i])
        }, n.src = i
      })
    }
    var i, o, s, n, r = this;
    if (r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), n = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(s + r.options.slidesToShow), r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)), i = r.$slider.find(".slick-slide").slice(s, n), "anticipated" === r.options.lazyLoad)
      for (var a = s - 1, l = n, d = r.$slider.find(".slick-slide"), c = 0; c < r.options.slidesToScroll; c++) a < 0 && (a = r.slideCount - 1), i = i.add(d.eq(a)), i = i.add(d.eq(l)), a--, l++;
    e(i), r.slideCount <= r.options.slidesToShow ? (o = r.$slider.find(".slick-slide"), e(o)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (o = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(o)) : 0 === r.currentSlide && (o = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1), e(o))
  }, e.prototype.loadSlider = function() {
    var t = this;
    t.setPosition(), t.$slideTrack.css({
      opacity: 1
    }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
  }, e.prototype.next = e.prototype.slickNext = function() {
    var t = this;
    t.changeSlide({
      data: {
        message: "next"
      }
    })
  }, e.prototype.orientationChange = function() {
    var t = this;
    t.checkResponsive(), t.setPosition()
  }, e.prototype.pause = e.prototype.slickPause = function() {
    var t = this;
    t.autoPlayClear(), t.paused = !0
  }, e.prototype.play = e.prototype.slickPlay = function() {
    var t = this;
    t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
  }, e.prototype.postSlide = function(e) {
    var i = this;
    if (!i.unslicked && (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), i.options.accessibility === !0 && (i.initADA(), i.options.focusOnChange))) {
      var o = t(i.$slides.get(i.currentSlide));
      o.attr("tabindex", 0).focus()
    }
  }, e.prototype.prev = e.prototype.slickPrev = function() {
    var t = this;
    t.changeSlide({
      data: {
        message: "previous"
      }
    })
  }, e.prototype.preventDefault = function(t) {
    t.preventDefault()
  }, e.prototype.progressiveLazyLoad = function(e) {
    e = e || 1;
    var i, o, s, n, r, a = this,
      l = t("img[data-lazy]", a.$slider);
    l.length ? (i = l.first(), o = i.attr("data-lazy"), s = i.attr("data-srcset"), n = i.attr("data-sizes") || a.$slider.attr("data-sizes"), r = document.createElement("img"), r.onload = function() {
      s && (i.attr("srcset", s), n && i.attr("sizes", n)), i.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), a.options.adaptiveHeight === !0 && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, o]), a.progressiveLazyLoad()
    }, r.onerror = function() {
      e < 3 ? setTimeout(function() {
        a.progressiveLazyLoad(e + 1)
      }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, o]), a.progressiveLazyLoad())
    }, r.src = o) : a.$slider.trigger("allImagesLoaded", [a])
  }, e.prototype.refresh = function(e) {
    var i, o, s = this;
    o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), i = s.currentSlide, s.destroy(!0), t.extend(s, s.initials, {
      currentSlide: i
    }), s.init(), e || s.changeSlide({
      data: {
        message: "index",
        index: i
      }
    }, !1)
  }, e.prototype.registerBreakpoints = function() {
    var e, i, o, s = this,
      n = s.options.responsive || null;
    if ("array" === t.type(n) && n.length) {
      s.respondTo = s.options.respondTo || "window";
      for (e in n)
        if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
          for (i = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === i && s.breakpoints.splice(o, 1), o--;
          s.breakpoints.push(i), s.breakpointSettings[i] = n[e].settings
        } s.breakpoints.sort(function(t, e) {
        return s.options.mobileFirst ? t - e : e - t
      })
    }
  }, e.prototype.reinit = function() {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
  }, e.prototype.resize = function() {
    var e = this;
    t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
      e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
    }, 50))
  }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
    var o = this;
    return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : o.slideCount - 1) : t = e === !0 ? --t : t, !(o.slideCount < 1 || t < 0 || t > o.slideCount - 1) && (o.unload(), i === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(t).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, void o.reinit())
  }, e.prototype.setCSS = function(t) {
    var e, i, o = this,
      s = {};
    o.options.rtl === !0 && (t = -t), e = "left" == o.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == o.positionProp ? Math.ceil(t) + "px" : "0px", s[o.positionProp] = t, o.transformsEnabled === !1 ? o.$slideTrack.css(s) : (s = {}, o.cssTransitions === !1 ? (s[o.animType] = "translate(" + e + ", " + i + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + i + ", 0px)", o.$slideTrack.css(s)))
  }, e.prototype.setDimensions = function() {
    var t = this;
    t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
      padding: "0px " + t.options.centerPadding
    }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
      padding: t.options.centerPadding + " 0px"
    })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
    var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
    t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
  }, e.prototype.setFade = function() {
    var e, i = this;
    i.$slides.each(function(o, s) {
      e = i.slideWidth * o * -1, i.options.rtl === !0 ? t(s).css({
        position: "relative",
        right: e,
        top: 0,
        zIndex: i.options.zIndex - 2,
        opacity: 0
      }) : t(s).css({
        position: "relative",
        left: e,
        top: 0,
        zIndex: i.options.zIndex - 2,
        opacity: 0
      })
    }), i.$slides.eq(i.currentSlide).css({
      zIndex: i.options.zIndex - 1,
      opacity: 1
    })
  }, e.prototype.setHeight = function() {
    var t = this;
    if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
      var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
      t.$list.css("height", e)
    }
  }, e.prototype.setOption = e.prototype.slickSetOption = function() {
    var e, i, o, s, n, r = this,
      a = !1;
    if ("object" === t.type(arguments[0]) ? (o = arguments[0], a = arguments[1], n = "multiple") : "string" === t.type(arguments[0]) && (o = arguments[0], s = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? n = "responsive" : "undefined" != typeof arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
    else if ("multiple" === n) t.each(o, function(t, e) {
      r.options[t] = e
    });
    else if ("responsive" === n)
      for (i in s)
        if ("array" !== t.type(r.options.responsive)) r.options.responsive = [s[i]];
        else {
          for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[i].breakpoint && r.options.responsive.splice(e, 1), e--;
          r.options.responsive.push(s[i])
        } a && (r.unload(), r.reinit())
  }, e.prototype.setPosition = function() {
    var t = this;
    t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
  }, e.prototype.setProps = function() {
    var t = this,
      e = document.body.style;
    t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
  }, e.prototype.setSlideClasses = function(t) {
    var e, i, o, s, n = this;
    if (i = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(t).addClass("slick-current"), n.options.centerMode === !0) {
      var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
      e = Math.floor(n.options.slidesToShow / 2), n.options.infinite === !0 && (t >= e && t <= n.slideCount - 1 - e ? n.$slides.slice(t - e + r, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + t, i.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - n.options.slidesToShow).addClass("slick-center") : t === n.slideCount - 1 && i.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(t).addClass("slick-center")
    } else t >= 0 && t <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(t, t + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= n.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = n.options.infinite === !0 ? n.options.slidesToShow + t : t, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - t < n.options.slidesToShow ? i.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
    "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
  }, e.prototype.setupInfinite = function() {
    var e, i, o, s = this;
    if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (i = null, s.slideCount > s.options.slidesToShow)) {
      for (o = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) i = e - 1, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
      for (e = 0; e < o + s.slideCount; e += 1) i = e, t(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
      s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
        t(this).attr("id", "")
      })
    }
  }, e.prototype.interrupt = function(t) {
    var e = this;
    t || e.autoPlay(), e.interrupted = t
  }, e.prototype.selectHandler = function(e) {
    var i = this,
      o = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
      s = parseInt(o.attr("data-slick-index"));
    return s || (s = 0), i.slideCount <= i.options.slidesToShow ? void i.slideHandler(s, !1, !0) : void i.slideHandler(s)
  }, e.prototype.slideHandler = function(t, e, i) {
    var o, s, n, r, a, l = null,
      d = this;
    if (e = e || !1, !(d.animating === !0 && d.options.waitForAnimate === !0 || d.options.fade === !0 && d.currentSlide === t)) return e === !1 && d.asNavFor(t), o = t, l = d.getLeft(o), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, d.options.infinite === !1 && d.options.centerMode === !1 && (t < 0 || t > d.getDotCount() * d.options.slidesToScroll) ? void(d.options.fade === !1 && (o = d.currentSlide, i !== !0 && d.slideCount > d.options.slidesToShow ? d.animateSlide(r, function() {
      d.postSlide(o)
    }) : d.postSlide(o))) : d.options.infinite === !1 && d.options.centerMode === !0 && (t < 0 || t > d.slideCount - d.options.slidesToScroll) ? void(d.options.fade === !1 && (o = d.currentSlide, i !== !0 && d.slideCount > d.options.slidesToShow ? d.animateSlide(r, function() {
      d.postSlide(o)
    }) : d.postSlide(o))) : (d.options.autoplay && clearInterval(d.autoPlayTimer), s = o < 0 ? d.slideCount % d.options.slidesToScroll !== 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + o : o >= d.slideCount ? d.slideCount % d.options.slidesToScroll !== 0 ? 0 : o - d.slideCount : o, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, s]), n = d.currentSlide, d.currentSlide = s, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (a = d.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide)), d.updateDots(), d.updateArrows(), d.options.fade === !0 ? (i !== !0 ? (d.fadeSlideOut(n), d.fadeSlide(s, function() {
      d.postSlide(s)
    })) : d.postSlide(s), void d.animateHeight()) : void(i !== !0 && d.slideCount > d.options.slidesToShow ? d.animateSlide(l, function() {
      d.postSlide(s)
    }) : d.postSlide(s)))
  }, e.prototype.startLoad = function() {
    var t = this;
    t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
  }, e.prototype.swipeDirection = function() {
    var t, e, i, o, s = this;
    return t = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(e, t), o = Math.round(180 * i / Math.PI), o < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? s.options.rtl === !1 ? "left" : "right" : o <= 360 && o >= 315 ? s.options.rtl === !1 ? "left" : "right" : o >= 135 && o <= 225 ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
  }, e.prototype.swipeEnd = function(t) {
    var e, i, o = this;
    if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
    if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
    if (o.touchObject.edgeHit === !0 && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (i = o.swipeDirection()) {
        case "left":
        case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
          break;
        case "right":
        case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
      }
      "vertical" != i && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, i]))
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
  }, e.prototype.swipeHandler = function(t) {
    var e = this;
    if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && t.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
      case "start":
        e.swipeStart(t);
        break;
      case "move":
        e.swipeMove(t);
        break;
      case "end":
        e.swipeEnd(t)
    }
  }, e.prototype.swipeMove = function(t) {
    var e, i, o, s, n, r, a = this;
    return n = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || a.scrolling || n && 1 !== n.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== n ? n[0].pageX : t.clientX, a.touchObject.curY = void 0 !== n ? n[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (a.options.verticalSwiping === !0 && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, t.preventDefault()), s = (a.options.rtl === !1 ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), a.options.verticalSwiping === !0 && (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1), o = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, a.options.infinite === !1 && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (o = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), a.options.vertical === !1 ? a.swipeLeft = e + o * s : a.swipeLeft = e + o * (a.$list.height() / a.listWidth) * s, a.options.verticalSwiping === !0 && (a.swipeLeft = e + o * s), a.options.fade !== !0 && a.options.touchMove !== !1 && (a.animating === !0 ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
  }, e.prototype.swipeStart = function(t) {
    var e, i = this;
    return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
  }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
    var t = this;
    null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
  }, e.prototype.unload = function() {
    var e = this;
    t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }, e.prototype.unslick = function(t) {
    var e = this;
    e.$slider.trigger("unslick", [e, t]), e.destroy()
  }, e.prototype.updateArrows = function() {
    var t, e = this;
    t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, e.prototype.updateDots = function() {
    var t = this;
    null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
  }, e.prototype.visibility = function() {
    var t = this;
    t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
  }, t.fn.slick = function() {
    var t, i, o = this,
      s = arguments[0],
      n = Array.prototype.slice.call(arguments, 1),
      r = o.length;
    for (t = 0; t < r; t++)
      if ("object" == typeof s || "undefined" == typeof s ? o[t].slick = new e(o[t], s) : i = o[t].slick[s].apply(o[t].slick, n), "undefined" != typeof i) return i;
    return o
  }
}),
function(t) {
  "use strict";
  t.ajaxChimp = {
    responses: {
      "We have sent you a confirmation email": 0,
      "Please enter a value": 1,
      "An email address must contain a single @": 2,
      "The domain portion of the email address is invalid (the portion after the @: )": 3,
      "The username portion of the email address is invalid (the portion before the @: )": 4,
      "This email address looks fake or invalid. Please enter a real email address": 5
    },
    translations: {
      en: null
    },
    init: function(e, i) {
      t(e).ajaxChimp(i)
    }
  }, t.fn.ajaxChimp = function(e) {
    return t(this).each(function(i, o) {
      var s = t(o),
        n = s.find("input[type=email]"),
        r = s.find("label[for=" + n.attr("id") + "]"),
        a = t.extend({
          url: s.attr("action"),
          language: "en"
        }, e),
        l = a.url.replace("/post?", "/post-json?").concat("&c=?");
      s.attr("novalidate", "true"), n.attr("name", "EMAIL"), s.submit(function() {
        function e(e) {
          if ("success" === e.result) i = "We have sent you a confirmation email", r.removeClass("error").addClass("valid"), n.removeClass("error").addClass("valid");
          else {
            n.removeClass("valid").addClass("error"), r.removeClass("valid").addClass("error");
            var o = -1;
            try {
              var s = e.msg.split(" - ", 2);
              if (void 0 === s[1]) i = e.msg;
              else {
                var l = parseInt(s[0], 10);
                l.toString() === s[0] ? (o = s[0], i = s[1]) : (o = -1, i = e.msg)
              }
            } catch (d) {
              o = -1, i = e.msg
            }
          }
          "en" !== a.language && void 0 !== t.ajaxChimp.responses[i] && t.ajaxChimp.translations && t.ajaxChimp.translations[a.language] && t.ajaxChimp.translations[a.language][t.ajaxChimp.responses[i]] && (i = t.ajaxChimp.translations[a.language][t.ajaxChimp.responses[i]]), r.html(i), r.show(2e3), a.callback && a.callback(e)
        }
        var i, o = {},
          d = s.serializeArray();
        t.each(d, function(t, e) {
          o[e.name] = e.value
        }), t.ajax({
          url: l,
          data: o,
          success: e,
          dataType: "jsonp",
          error: function(t, e) {
            console.log("mailchimp ajax submit error: " + e)
          }
        });
        var c = "Submitting...";
        return "en" !== a.language && t.ajaxChimp.translations && t.ajaxChimp.translations[a.language] && t.ajaxChimp.translations[a.language].submit && (c = t.ajaxChimp.translations[a.language].submit), r.html(c).show(2e3), !1
      })
    }), this
  }
}(jQuery),
function(t, e, i, o) {
  function s(t, e) {
    return t[e] === o ? w[e] : t[e]
  }

  function n() {
    var t = e.pageYOffset;
    return t === o ? m.scrollTop : t
  }

  function r(t, e) {
    var i = w["on" + t];
    i && (T(i) ? i.call(e[0]) : (i.addClass && e.addClass(i.addClass), i.removeClass && e.removeClass(i.removeClass))), e.trigger("lazy" + t, [e]), c()
  }

  function a(e) {
    r(e.type, t(this).off(v, a))
  }

  function l(i) {
    if (x.length) {
      i = i || w.forceLoad, A = 1 / 0;
      var o, s, l = n(),
        d = e.innerHeight || m.clientHeight,
        c = e.innerWidth || m.clientWidth;
      for (o = 0, s = x.length; o < s; o++) {
        var p, h = x[o],
          f = h[0],
          g = h[u],
          y = !1,
          b = i;
        if (C(m, f)) {
          if (i || !g.visibleOnly || f.offsetWidth || f.offsetHeight) {
            if (!b) {
              var $ = f.getBoundingClientRect(),
                k = g.edgeX,
                S = g.edgeY;
              p = $.top + l - S - d, b = p <= l && $.bottom > -S && $.left <= c + k && $.right > -k
            }
            if (b) {
              r("show", h);
              var E = g.srcAttr,
                O = T(E) ? E(h) : f.getAttribute(E);
              O && (h.on(v, a), f.src = O), y = !0
            } else p < A && (A = p)
          }
        } else y = !0;
        y && (x.splice(o--, 1), s--)
      }
      s || r("complete", t(m))
    }
  }

  function d() {
    E > 1 ? (E = 1, l(), setTimeout(d, w.throttle)) : E = 0
  }

  function c(t) {
    x.length && (t && "scroll" === t.type && t.currentTarget === e && A >= n() || (E || setTimeout(d, 0), E = 2))
  }

  function p() {
    $.lazyLoadXT()
  }

  function h() {
    l(!0)
  }
  var u = "lazyLoadXT",
    f = "lazied",
    v = "load error",
    g = "lazy-hidden",
    m = i.documentElement || i.body,
    y = e.onscroll === o || !!e.operamini || !m.getBoundingClientRect,
    w = {
      autoInit: !0,
      selector: "img[data-src]",
      blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      throttle: 99,
      forceLoad: y,
      loadEvent: "pageshow",
      updateEvent: "load orientationchange resize scroll touchmove focus",
      forceEvent: "",
      oninit: {
        removeClass: "lazy"
      },
      onshow: {
        addClass: g
      },
      onload: {
        removeClass: g,
        addClass: "lazy-loaded"
      },
      onerror: {
        removeClass: g
      },
      checkDuplicates: !0
    },
    b = {
      srcAttr: "data-src",
      edgeX: 0,
      edgeY: 0,
      visibleOnly: !0
    },
    $ = t(e),
    T = t.isFunction,
    k = t.extend,
    S = t.data || function(e, i) {
      return t(e).data(i)
    },
    C = t.contains || function(t, e) {
      for (; e = e.parentNode;)
        if (e === t) return !0;
      return !1
    },
    x = [],
    A = 0,
    E = 0;
  t[u] = k(w, b, t[u]), t.fn[u] = function(i) {
    i = i || {};
    var o, n = s(i, "blankImage"),
      a = s(i, "checkDuplicates"),
      l = s(i, "scrollContainer"),
      d = {};
    t(l).on("scroll", c);
    for (o in b) d[o] = s(i, o);
    return this.each(function(o, s) {
      if (s === e) t(w.selector).lazyLoadXT(i);
      else {
        if (a && S(s, f)) return;
        var l = t(s).data(f, 1);
        n && "IMG" === s.tagName && !s.src && (s.src = n), l[u] = k({}, d), r("init", l), x.push(l)
      }
    })
  }, t(i).ready(function() {
    r("start", $), $.on(w.loadEvent, p).on(w.updateEvent, c).on(w.forceEvent, h), t(i).on(w.updateEvent, c), w.autoInit && p()
  })
}(window.jQuery || window.Zepto || window.$, window, document),
function(t, e, i, o) {
  function s(t, e) {
    return t[e] === o ? w[e] : t[e]
  }

  function n() {
    var t = e.pageYOffset;
    return t === o ? m.scrollTop : t
  }

  function r(t, e) {
    var i = w["on" + t];
    i && (T(i) ? i.call(e[0]) : (i.addClass && e.addClass(i.addClass), i.removeClass && e.removeClass(i.removeClass))), e.trigger("lazy" + t, [e]), c()
  }

  function a(e) {
    r(e.type, t(this).off(v, a))
  }

  function l(i) {
    if (x.length) {
      i = i || w.forceLoad, A = 1 / 0;
      var o, s, l = n(),
        d = e.innerHeight || m.clientHeight,
        c = e.innerWidth || m.clientWidth;
      for (o = 0, s = x.length; o < s; o++) {
        var p, h = x[o],
          f = h[0],
          g = h[u],
          y = !1,
          b = i;
        if (C(m, f)) {
          if (i || !g.visibleOnly || f.offsetWidth || f.offsetHeight) {
            if (!b) {
              var $ = f.getBoundingClientRect(),
                k = g.edgeX,
                S = g.edgeY;
              p = $.top + l - S - d, b = p <= l && $.bottom > -S && $.left <= c + k && $.right > -k
            }
            if (b) {
              r("show", h);
              var E = g.srcAttr,
                O = T(E) ? E(h) : f.getAttribute(E);
              O && (h.on(v, a), f.src = O), y = !0
            } else p < A && (A = p)
          }
        } else y = !0;
        y && (x.splice(o--, 1), s--)
      }
      s || r("complete", t(m))
    }
  }

  function d() {
    E > 1 ? (E = 1, l(), setTimeout(d, w.throttle)) : E = 0
  }

  function c(t) {
    x.length && (t && "scroll" === t.type && t.currentTarget === e && A >= n() || (E || setTimeout(d, 0), E = 2))
  }

  function p() {
    $.lazyLoadXT()
  }

  function h() {
    l(!0)
  }
  var u = "lazyLoadXT",
    f = "lazied",
    v = "load error",
    g = "lazy-hidden",
    m = i.documentElement || i.body,
    y = e.onscroll === o || !!e.operamini || !m.getBoundingClientRect,
    w = {
      autoInit: !0,
      selector: "img[data-src]",
      blankImage: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      throttle: 99,
      forceLoad: y,
      loadEvent: "pageshow",
      updateEvent: "load orientationchange resize scroll touchmove focus",
      forceEvent: "",
      oninit: {
        removeClass: "lazy"
      },
      onshow: {
        addClass: g
      },
      onload: {
        removeClass: g,
        addClass: "lazy-loaded"
      },
      onerror: {
        removeClass: g
      },
      checkDuplicates: !0
    },
    b = {
      srcAttr: "data-src",
      edgeX: 0,
      edgeY: 0,
      visibleOnly: !0
    },
    $ = t(e),
    T = t.isFunction,
    k = t.extend,
    S = t.data || function(e, i) {
      return t(e).data(i)
    },
    C = t.contains || function(t, e) {
      for (; e = e.parentNode;)
        if (e === t) return !0;
      return !1
    },
    x = [],
    A = 0,
    E = 0;
  t[u] = k(w, b, t[u]), t.fn[u] = function(i) {
    i = i || {};
    var o, n = s(i, "blankImage"),
      a = s(i, "checkDuplicates"),
      l = s(i, "scrollContainer"),
      d = {};
    t(l).on("scroll", c);
    for (o in b) d[o] = s(i, o);
    return this.each(function(o, s) {
      if (s === e) t(w.selector).lazyLoadXT(i);
      else {
        if (a && S(s, f)) return;
        var l = t(s).data(f, 1);
        n && "IMG" === s.tagName && !s.src && (s.src = n), l[u] = k({}, d), r("init", l), x.push(l)
      }
    })
  }, t(i).ready(function() {
    r("start", $), $.on(w.loadEvent, p).on(w.updateEvent, c).on(w.forceEvent, h), t(i).on(w.updateEvent, c), w.autoInit && p()
  })
}(window.jQuery || window.Zepto || window.$, window, document),
function(t) {
  var e = t.lazyLoadXT;
  e.selector += ",video,iframe[data-src]", e.videoPoster = "data-poster", t(document).on("lazyshow", "video", function(i, o) {
    var s = o.lazyLoadXT.srcAttr,
      n = t.isFunction(s);
    o.attr("poster", o.attr(e.videoPoster)).children("source,track").each(function(e, i) {
      var o = t(i);
      o.attr("src", n ? s(o) : o.attr(s))
    }), this.load()
  })
}(window.jQuery || window.Zepto || window.$), + function(t) {
  "use strict";

  function e() {
    var t = document.createElement("bootstrap"),
      e = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
    for (var i in e)
      if (void 0 !== t.style[i]) return {
        end: e[i]
      };
    return !1
  }
  t.fn.emulateTransitionEnd = function(e) {
    var i = !1,
      o = this;
    t(this).one("bsTransitionEnd", function() {
      i = !0
    });
    var s = function() {
      i || t(o).trigger(t.support.transition.end)
    };
    return setTimeout(s, e), this
  }, t(function() {
    t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
      bindType: t.support.transition.end,
      delegateType: t.support.transition.end,
      handle: function(e) {
        if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    })
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var i = t(this),
        s = i.data("bs.alert");
      s || i.data("bs.alert", s = new o(this)), "string" == typeof e && s[e].call(i)
    })
  }
  var i = '[data-dismiss="alert"]',
    o = function(e) {
      t(e).on("click", i, this.close)
    };
  o.VERSION = "3.3.6", o.TRANSITION_DURATION = 150, o.prototype.close = function(e) {
    function i() {
      r.detach().trigger("closed.bs.alert").remove()
    }
    var s = t(this),
      n = s.attr("data-target");
    n || (n = s.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, ""));
    var r = t(n);
    e && e.preventDefault(), r.length || (r = s.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
  };
  var s = t.fn.alert;
  t.fn.alert = e, t.fn.alert.Constructor = o, t.fn.alert.noConflict = function() {
    return t.fn.alert = s, this
  }, t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var o = t(this),
        s = o.data("bs.button"),
        n = "object" == typeof e && e;
      s || o.data("bs.button", s = new i(this, n)), "toggle" == e ? s.toggle() : e && s.setState(e)
    })
  }
  var i = function(e, o) {
    this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, o), this.isLoading = !1
  };
  i.VERSION = "3.3.6", i.DEFAULTS = {
    loadingText: "loading..."
  }, i.prototype.setState = function(e) {
    var i = "disabled",
      o = this.$element,
      s = o.is("input") ? "val" : "html",
      n = o.data();
    e += "Text", null == n.resetText && o.data("resetText", o[s]()), setTimeout(t.proxy(function() {
      o[s](null == n[e] ? this.options[e] : n[e]), "loadingText" == e ? (this.isLoading = !0, o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, o.removeClass(i).removeAttr(i))
    }, this), 0)
  }, i.prototype.toggle = function() {
    var t = !0,
      e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
      var i = this.$element.find("input");
      "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
  };
  var o = t.fn.button;
  t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
    return t.fn.button = o, this
  }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
    var o = t(i.target);
    o.hasClass("btn") || (o = o.closest(".btn")), e.call(o, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var o = t(this),
        s = o.data("bs.carousel"),
        n = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
        r = "string" == typeof e ? e : n.slide;
      s || o.data("bs.carousel", s = new i(this, n)), "number" == typeof e ? s.to(e) : r ? s[r]() : n.interval && s.pause().cycle()
    })
  }
  var i = function(e, i) {
    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
  };
  i.VERSION = "3.3.6", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, i.prototype.keydown = function(t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
      switch (t.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      t.preventDefault()
    }
  }, i.prototype.cycle = function(e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
  }, i.prototype.getItemIndex = function(t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
  }, i.prototype.getItemForDirection = function(t, e) {
    var i = this.getItemIndex(e),
      o = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
    if (o && !this.options.wrap) return e;
    var s = "prev" == t ? -1 : 1,
      n = (i + s) % this.$items.length;
    return this.$items.eq(n)
  }, i.prototype.to = function(t) {
    var e = this,
      i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
      e.to(t)
    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
  }, i.prototype.pause = function(e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, i.prototype.next = function() {
    if (!this.sliding) return this.slide("next")
  }, i.prototype.prev = function() {
    if (!this.sliding) return this.slide("prev")
  }, i.prototype.slide = function(e, o) {
    var s = this.$element.find(".item.active"),
      n = o || this.getItemForDirection(e, s),
      r = this.interval,
      a = "next" == e ? "left" : "right",
      l = this;
    if (n.hasClass("active")) return this.sliding = !1;
    var d = n[0],
      c = t.Event("slide.bs.carousel", {
        relatedTarget: d,
        direction: a
      });
    if (this.$element.trigger(c), !c.isDefaultPrevented()) {
      if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var p = t(this.$indicators.children()[this.getItemIndex(n)]);
        p && p.addClass("active")
      }
      var h = t.Event("slid.bs.carousel", {
        relatedTarget: d,
        direction: a
      });
      return t.support.transition && this.$element.hasClass("slide") ? (n.addClass(e), n[0].offsetWidth, s.addClass(a), n.addClass(a), s.one("bsTransitionEnd", function() {
        n.removeClass([e, a].join(" ")).addClass("active"), s.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
          l.$element.trigger(h)
        }, 0)
      }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(h)), r && this.cycle(), this
    }
  };
  var o = t.fn.carousel;
  t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
    return t.fn.carousel = o, this
  };
  var s = function(i) {
    var o, s = t(this),
      n = t(s.attr("data-target") || (o = s.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
    if (n.hasClass("carousel")) {
      var r = t.extend({}, n.data(), s.data()),
        a = s.attr("data-slide-to");
      a && (r.interval = !1), e.call(n, r), a && n.data("bs.carousel").to(a), i.preventDefault()
    }
  };
  t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function() {
    t('[data-ride="carousel"]').each(function() {
      var i = t(this);
      e.call(i, i.data())
    })
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
    return t(o)
  }

  function i(e) {
    return this.each(function() {
      var i = t(this),
        s = i.data("bs.collapse"),
        n = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
      !s && n.toggle && /show|hide/.test(e) && (n.toggle = !1), s || i.data("bs.collapse", s = new o(this, n)), "string" == typeof e && s[e]()
    })
  }
  var o = function(e, i) {
    this.$element = t(e), this.options = t.extend({}, o.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  o.VERSION = "3.3.6", o.TRANSITION_DURATION = 350, o.DEFAULTS = {
    toggle: !0
  }, o.prototype.dimension = function() {
    var t = this.$element.hasClass("width");
    return t ? "width" : "height"
  }, o.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(s && s.length && (e = s.data("bs.collapse"), e && e.transitioning))) {
        var n = t.Event("show.bs.collapse");
        if (this.$element.trigger(n), !n.isDefaultPrevented()) {
          s && s.length && (i.call(s, "hide"), e || s.data("bs.collapse", null));
          var r = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var a = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!t.support.transition) return a.call(this);
          var l = t.camelCase(["scroll", r].join("-"));
          this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[r](this.$element[0][l])
        }
      }
    }
  }, o.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var e = t.Event("hide.bs.collapse");
      if (this.$element.trigger(e), !e.isDefaultPrevented()) {
        var i = this.dimension();
        this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var s = function() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : s.call(this)
      }
    }
  }, o.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, o.prototype.getParent = function() {
    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, o) {
      var s = t(o);
      this.addAriaAndCollapsedClass(e(s), s)
    }, this)).end()
  }, o.prototype.addAriaAndCollapsedClass = function(t, e) {
    var i = t.hasClass("in");
    t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
  };
  var s = t.fn.collapse;
  t.fn.collapse = i, t.fn.collapse.Constructor = o, t.fn.collapse.noConflict = function() {
    return t.fn.collapse = s, this
  }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(o) {
    var s = t(this);
    s.attr("data-target") || o.preventDefault();
    var n = e(s),
      r = n.data("bs.collapse"),
      a = r ? "toggle" : s.data();
    i.call(n, a)
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    var i = e.attr("data-target");
    i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
    var o = i && t(i);
    return o && o.length ? o : e.parent()
  }

  function i(i) {
    i && 3 === i.which || (t(s).remove(), t(n).each(function() {
      var o = t(this),
        s = e(o),
        n = {
          relatedTarget: this
        };
      s.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(s[0], i.target) || (s.trigger(i = t.Event("hide.bs.dropdown", n)), i.isDefaultPrevented() || (o.attr("aria-expanded", "false"), s.removeClass("open").trigger(t.Event("hidden.bs.dropdown", n)))))
    }))
  }

  function o(e) {
    return this.each(function() {
      var i = t(this),
        o = i.data("bs.dropdown");
      o || i.data("bs.dropdown", o = new r(this)), "string" == typeof e && o[e].call(i)
    })
  }
  var s = ".dropdown-backdrop",
    n = '[data-toggle="dropdown"]',
    r = function(e) {
      t(e).on("click.bs.dropdown", this.toggle)
    };
  r.VERSION = "3.3.6", r.prototype.toggle = function(o) {
    var s = t(this);
    if (!s.is(".disabled, :disabled")) {
      var n = e(s),
        r = n.hasClass("open");
      if (i(), !r) {
        "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
        var a = {
          relatedTarget: this
        };
        if (n.trigger(o = t.Event("show.bs.dropdown", a)), o.isDefaultPrevented()) return;
        s.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
      }
      return !1
    }
  }, r.prototype.keydown = function(i) {
    if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
      var o = t(this);
      if (i.preventDefault(), i.stopPropagation(), !o.is(".disabled, :disabled")) {
        var s = e(o),
          r = s.hasClass("open");
        if (!r && 27 != i.which || r && 27 == i.which) return 27 == i.which && s.find(n).trigger("focus"), o.trigger("click");
        var a = " li:not(.disabled):visible a",
          l = s.find(".dropdown-menu" + a);
        if (l.length) {
          var d = l.index(i.target);
          38 == i.which && d > 0 && d--, 40 == i.which && d < l.length - 1 && d++, ~d || (d = 0), l.eq(d).trigger("focus")
        }
      }
    }
  };
  var a = t.fn.dropdown;
  t.fn.dropdown = o, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
    return t.fn.dropdown = a, this
  }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
    t.stopPropagation()
  }).on("click.bs.dropdown.data-api", n, r.prototype.toggle).on("keydown.bs.dropdown.data-api", n, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery), + function(t) {
  "use strict";

  function e(e, o) {
    return this.each(function() {
      var s = t(this),
        n = s.data("bs.modal"),
        r = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
      n || s.data("bs.modal", n = new i(this, r)), "string" == typeof e ? n[e](o) : r.show && n.show(o)
    })
  }
  var i = function(e, i) {
    this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, i.prototype.toggle = function(t) {
    return this.isShown ? this.hide() : this.show(t)
  }, i.prototype.show = function(e) {
    var o = this,
      s = t.Event("show.bs.modal", {
        relatedTarget: e
      });
    this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
      o.$element.one("mouseup.dismiss.bs.modal", function(e) {
        t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function() {
      var s = t.support.transition && o.$element.hasClass("fade");
      o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), s && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus();
      var n = t.Event("shown.bs.modal", {
        relatedTarget: e
      });
      s ? o.$dialog.one("bsTransitionEnd", function() {
        o.$element.trigger("focus").trigger(n)
      }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(n)
    }))
  }, i.prototype.hide = function(e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
  }, i.prototype.enforceFocus = function() {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
      this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
    }, this))
  }, i.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
      27 == t.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, i.prototype.resize = function() {
    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
  }, i.prototype.hideModal = function() {
    var t = this;
    this.$element.hide(), this.backdrop(function() {
      t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
    })
  }, i.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, i.prototype.backdrop = function(e) {
    var o = this,
      s = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var n = t.support.transition && s;
      if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
          return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
        }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
      n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var r = function() {
        o.removeBackdrop(), e && e()
      };
      t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r()
    } else e && e()
  }, i.prototype.handleUpdate = function() {
    this.adjustDialog()
  }, i.prototype.adjustDialog = function() {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    })
  }, i.prototype.resetAdjustments = function() {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    })
  }, i.prototype.checkScrollbar = function() {
    var t = window.innerWidth;
    if (!t) {
      var e = document.documentElement.getBoundingClientRect();
      t = e.right - Math.abs(e.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
  }, i.prototype.setScrollbar = function() {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
  }, i.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
  }, i.prototype.measureScrollbar = function() {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
  };
  var o = t.fn.modal;
  t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
    return t.fn.modal = o, this
  }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
    var o = t(this),
      s = o.attr("href"),
      n = t(o.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
      r = n.data("bs.modal") ? "toggle" : t.extend({
        remote: !/#/.test(s) && s
      }, n.data(), o.data());
    o.is("a") && i.preventDefault(), n.one("show.bs.modal", function(t) {
      t.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
        o.is(":visible") && o.trigger("focus")
      })
    }), e.call(n, r, this)
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var o = t(this),
        s = o.data("bs.tooltip"),
        n = "object" == typeof e && e;
      !s && /destroy|hide/.test(e) || (s || o.data("bs.tooltip", s = new i(this, n)), "string" == typeof e && s[e]())
    })
  }
  var i = function(t, e) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
  };
  i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, i.prototype.init = function(e, i, o) {
    if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(o), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
        click: !1,
        hover: !1,
        focus: !1
      }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var s = this.options.trigger.split(" "), n = s.length; n--;) {
      var r = s[n];
      if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
      else if ("manual" != r) {
        var a = "hover" == r ? "mouseenter" : "focusin",
          l = "hover" == r ? "mouseleave" : "focusout";
        this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = t.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, i.prototype.getDefaults = function() {
    return i.DEFAULTS
  }, i.prototype.getOptions = function(e) {
    return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
      show: e.delay,
      hide: e.delay
    }), e
  }, i.prototype.getDelegateOptions = function() {
    var e = {},
      i = this.getDefaults();
    return this._options && t.each(this._options, function(t, o) {
      i[t] != o && (e[t] = o)
    }), e
  }, i.prototype.enter = function(e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
      "in" == i.hoverState && i.show()
    }, i.options.delay.show)) : i.show())
  }, i.prototype.isInStateTrue = function() {
    for (var t in this.inState)
      if (this.inState[t]) return !0;
    return !1
  }, i.prototype.leave = function(e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
      "out" == i.hoverState && i.hide()
    }, i.options.delay.hide)) : i.hide()
  }, i.prototype.show = function() {
    var e = t.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e);
      var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (e.isDefaultPrevented() || !o) return;
      var s = this,
        n = this.tip(),
        r = this.getUID(this.type);
      this.setContent(), n.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && n.addClass("fade");
      var a = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
        l = /\s?auto?\s?/i,
        d = l.test(a);
      d && (a = a.replace(l, "") || "top"), n.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(a).data("bs." + this.type, this), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var c = this.getPosition(),
        p = n[0].offsetWidth,
        h = n[0].offsetHeight;
      if (d) {
        var u = a,
          f = this.getPosition(this.$viewport);
        a = "bottom" == a && c.bottom + h > f.bottom ? "top" : "top" == a && c.top - h < f.top ? "bottom" : "right" == a && c.right + p > f.width ? "left" : "left" == a && c.left - p < f.left ? "right" : a, n.removeClass(u).addClass(a)
      }
      var v = this.getCalculatedOffset(a, c, p, h);
      this.applyPlacement(v, a);
      var g = function() {
        var t = s.hoverState;
        s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s)
      };
      t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
    }
  }, i.prototype.applyPlacement = function(e, i) {
    var o = this.tip(),
      s = o[0].offsetWidth,
      n = o[0].offsetHeight,
      r = parseInt(o.css("margin-top"), 10),
      a = parseInt(o.css("margin-left"), 10);
    isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(o[0], t.extend({
      using: function(t) {
        o.css({
          top: Math.round(t.top),
          left: Math.round(t.left)
        })
      }
    }, e), 0), o.addClass("in");
    var l = o[0].offsetWidth,
      d = o[0].offsetHeight;
    "top" == i && d != n && (e.top = e.top + n - d);
    var c = this.getViewportAdjustedDelta(i, e, l, d);
    c.left ? e.left += c.left : e.top += c.top;
    var p = /top|bottom/.test(i),
      h = p ? 2 * c.left - s + l : 2 * c.top - n + d,
      u = p ? "offsetWidth" : "offsetHeight";
    o.offset(e), this.replaceArrow(h, o[0][u], p)
  }, i.prototype.replaceArrow = function(t, e, i) {
    this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
  }, i.prototype.setContent = function() {
    var t = this.tip(),
      e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
  }, i.prototype.hide = function(e) {
    function o() {
      "in" != s.hoverState && n.detach(), s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), e && e()
    }
    var s = this,
      n = t(this.$tip),
      r = t.Event("hide.bs." + this.type);
    if (this.$element.trigger(r), !r.isDefaultPrevented()) return n.removeClass("in"), t.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), this.hoverState = null, this
  }, i.prototype.fixTitle = function() {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
  }, i.prototype.hasContent = function() {
    return this.getTitle()
  }, i.prototype.getPosition = function(e) {
    e = e || this.$element;
    var i = e[0],
      o = "BODY" == i.tagName,
      s = i.getBoundingClientRect();
    null == s.width && (s = t.extend({}, s, {
      width: s.right - s.left,
      height: s.bottom - s.top
    }));
    var n = o ? {
        top: 0,
        left: 0
      } : e.offset(),
      r = {
        scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
      },
      a = o ? {
        width: t(window).width(),
        height: t(window).height()
      } : null;
    return t.extend({}, s, r, a, n)
  }, i.prototype.getCalculatedOffset = function(t, e, i, o) {
    return "bottom" == t ? {
      top: e.top + e.height,
      left: e.left + e.width / 2 - i / 2
    } : "top" == t ? {
      top: e.top - o,
      left: e.left + e.width / 2 - i / 2
    } : "left" == t ? {
      top: e.top + e.height / 2 - o / 2,
      left: e.left - i
    } : {
      top: e.top + e.height / 2 - o / 2,
      left: e.left + e.width
    }
  }, i.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
    var s = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return s;
    var n = this.options.viewport && this.options.viewport.padding || 0,
      r = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
      var a = e.top - n - r.scroll,
        l = e.top + n - r.scroll + o;
      a < r.top ? s.top = r.top - a : l > r.top + r.height && (s.top = r.top + r.height - l)
    } else {
      var d = e.left - n,
        c = e.left + n + i;
      d < r.left ? s.left = r.left - d : c > r.right && (s.left = r.left + r.width - c)
    }
    return s
  }, i.prototype.getTitle = function() {
    var t, e = this.$element,
      i = this.options;
    return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
  }, i.prototype.getUID = function(t) {
    do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
    return t
  }, i.prototype.tip = function() {
    if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
  }, i.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, i.prototype.enable = function() {
    this.enabled = !0
  }, i.prototype.disable = function() {
    this.enabled = !1
  }, i.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  }, i.prototype.toggle = function(e) {
    var i = this;
    e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
  }, i.prototype.destroy = function() {
    var t = this;
    clearTimeout(this.timeout), this.hide(function() {
      t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
    })
  };
  var o = t.fn.tooltip;
  t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
    return t.fn.tooltip = o, this
  }
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var o = t(this),
        s = o.data("bs.popover"),
        n = "object" == typeof e && e;
      !s && /destroy|hide/.test(e) || (s || o.data("bs.popover", s = new i(this, n)), "string" == typeof e && s[e]())
    })
  }
  var i = function(t, e) {
    this.init("popover", t, e)
  };
  if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
  i.VERSION = "3.3.6", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
    return i.DEFAULTS
  }, i.prototype.setContent = function() {
    var t = this.tip(),
      e = this.getTitle(),
      i = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
  }, i.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
  }, i.prototype.getContent = function() {
    var t = this.$element,
      e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
  }, i.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  var o = t.fn.popover;
  t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
    return t.fn.popover = o, this
  }
}(jQuery), + function(t) {
  "use strict";

  function e(i, o) {
    this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, o), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
  }

  function i(i) {
    return this.each(function() {
      var o = t(this),
        s = o.data("bs.scrollspy"),
        n = "object" == typeof i && i;
      s || o.data("bs.scrollspy", s = new e(this, n)), "string" == typeof i && s[i]()
    })
  }
  e.VERSION = "3.3.6", e.DEFAULTS = {
    offset: 10
  }, e.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, e.prototype.refresh = function() {
    var e = this,
      i = "offset",
      o = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", o = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
      var e = t(this),
        s = e.data("target") || e.attr("href"),
        n = /^#./.test(s) && t(s);
      return n && n.length && n.is(":visible") && [
        [n[i]().top + o, s]
      ] || null
    }).sort(function(t, e) {
      return t[0] - e[0]
    }).each(function() {
      e.offsets.push(this[0]), e.targets.push(this[1])
    })
  }, e.prototype.process = function() {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
      i = this.getScrollHeight(),
      o = this.options.offset + i - this.$scrollElement.height(),
      s = this.offsets,
      n = this.targets,
      r = this.activeTarget;
    if (this.scrollHeight != i && this.refresh(), e >= o) return r != (t = n[n.length - 1]) && this.activate(t);
    if (r && e < s[0]) return this.activeTarget = null, this.clear();
    for (t = s.length; t--;) r != n[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(n[t])
  }, e.prototype.activate = function(e) {
    this.activeTarget = e, this.clear();
    var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
      o = t(i).parents("li").addClass("active");
    o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")), o.trigger("activate.bs.scrollspy")
  }, e.prototype.clear = function() {
    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var o = t.fn.scrollspy;
  t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
    return t.fn.scrollspy = o, this
  }, t(window).on("load.bs.scrollspy.data-api", function() {
    t('[data-spy="scroll"]').each(function() {
      var e = t(this);
      i.call(e, e.data())
    })
  })
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var o = t(this),
        s = o.data("bs.tab");
      s || o.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]()
    })
  }
  var i = function(e) {
    this.element = t(e)
  };
  i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
    var e = this.element,
      i = e.closest("ul:not(.dropdown-menu)"),
      o = e.data("target");
    if (o || (o = e.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
      var s = i.find(".active:last a"),
        n = t.Event("hide.bs.tab", {
          relatedTarget: e[0]
        }),
        r = t.Event("show.bs.tab", {
          relatedTarget: s[0]
        });
      if (s.trigger(n), e.trigger(r), !r.isDefaultPrevented() && !n.isDefaultPrevented()) {
        var a = t(o);
        this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
          s.trigger({
            type: "hidden.bs.tab",
            relatedTarget: e[0]
          }), e.trigger({
            type: "shown.bs.tab",
            relatedTarget: s[0]
          })
        })
      }
    }
  }, i.prototype.activate = function(e, o, s) {
    function n() {
      r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
    }
    var r = o.find("> .active"),
      a = s && t.support.transition && (r.length && r.hasClass("fade") || !!o.find("> .fade").length);
    r.length && a ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), r.removeClass("in")
  };
  var o = t.fn.tab;
  t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
    return t.fn.tab = o, this
  };
  var s = function(i) {
    i.preventDefault(), e.call(t(this), "show")
  };
  t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}(jQuery), + function(t) {
  "use strict";

  function e(e) {
    return this.each(function() {
      var o = t(this),
        s = o.data("bs.affix"),
        n = "object" == typeof e && e;
      s || o.data("bs.affix", s = new i(this, n)), "string" == typeof e && s[e]()
    })
  }
  var i = function(e, o) {
    this.options = t.extend({}, i.DEFAULTS, o), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
    offset: 0,
    target: window
  }, i.prototype.getState = function(t, e, i, o) {
    var s = this.$target.scrollTop(),
      n = this.$element.offset(),
      r = this.$target.height();
    if (null != i && "top" == this.affixed) return s < i && "top";
    if ("bottom" == this.affixed) return null != i ? !(s + this.unpin <= n.top) && "bottom" : !(s + r <= t - o) && "bottom";
    var a = null == this.affixed,
      l = a ? s : n.top,
      d = a ? r : e;
    return null != i && s <= i ? "top" : null != o && l + d >= t - o && "bottom"
  }, i.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(i.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
      e = this.$element.offset();
    return this.pinnedOffset = e.top - t
  }, i.prototype.checkPositionWithEventLoop = function() {
    setTimeout(t.proxy(this.checkPosition, this), 1)
  }, i.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var e = this.$element.height(),
        o = this.options.offset,
        s = o.top,
        n = o.bottom,
        r = Math.max(t(document).height(), t(document.body).height());
      "object" != typeof o && (n = s = o), "function" == typeof s && (s = o.top(this.$element)), "function" == typeof n && (n = o.bottom(this.$element));
      var a = this.getState(r, e, s, n);
      if (this.affixed != a) {
        null != this.unpin && this.$element.css("top", "");
        var l = "affix" + (a ? "-" + a : ""),
          d = t.Event(l + ".bs.affix");
        if (this.$element.trigger(d), d.isDefaultPrevented()) return;
        this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == a && this.$element.offset({
        top: r - e - n
      })
    }
  };
  var o = t.fn.affix;
  t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
    return t.fn.affix = o, this
  }, t(window).on("load", function() {
    t('[data-spy="affix"]').each(function() {
      var i = t(this),
        o = i.data();
      o.offset = o.offset || {}, null != o.offsetBottom && (o.offset.bottom = o.offsetBottom), null != o.offsetTop && (o.offset.top = o.offsetTop), e.call(i, o)
    })
  })
}(jQuery), media_slider(), mobileMenuActions(), last = $('[data-mode="image"][data-scroll-speed]:last-child'), $(window).on("scroll resize", function() {
  var t = last.position().top,
    e = last.outerHeight(),
    i = t + e + 200;
  $(".work__list").height(i), $(".work__list").css("overflow", "hidden")
});
var width = $(window).width();
$.fn.moveIt = function() {
  var t = $(window),
    e = [];
  $(this).each(function() {
    e.push(new moveItItem($(this)))
  }), window.onscroll = function() {
    var i = t.scrollTop();
    e.forEach(function(t) {
      t.update(i)
    })
  }
};
var moveItItem = function(t) {
  this.el = $(t), this.speed = parseFloat(this.el.attr("data-scroll-speed")), console.log(this.speed)
};
moveItItem.prototype.update = function(t) {
  var e = t * this.speed;
  this.el.css("transform", "translateY(" + -e + "px)")
}, width > 768 && $('[data-mode="image"][data-scroll-speed]').moveIt(), $(window).on("resize", function() {
  var t = $(window).width();
  t > 768 && $('[data-mode="image"][data-scroll-speed]').moveIt()
}), $(window).scroll(function() {
  var t = $(window).scrollTop();
  t > 200 ? $(".entry-content").addClass("faded") : $(".entry-content").removeClass("faded")
}), lg_readmore(), searchTrigger(), $(document).on("ready", function() {
  $("body").on("click", ".hair-modal-closer, .modal__closer, .close__modal", function(t) {
    t.preventDefault(), $(".hair-modal-wrap").hide(), $("html, body").removeClass("no-scroll")
  })
}), $("#mc-embedded-subscribe-form").ajaxChimp({});
//# sourceMappingURL=main.js.map
