(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-74037320-1', 'auto');
ga('send', 'pageview');

$(document).ready(function() {
    $(".login_form,.login_page_form").on("submit", function(e) {
        var form = $(this);
        var animation = false;
        if ($(this).hasClass('login_form')) {
            var container = $(".login-form-error", $('.header'));
            animation = true;
        } else {
            var container = $(".login-page-form-error", $('.login_page_form'));
        }
        $(".login-button", form).attr("disabled", !0).html('Signing In <i class="fa fa-spinner fa-spin fa-lg"></i>');
        e.preventDefault(), $.post($(this).attr("action"), $(this).serialize(), function(e) {
            try {
                $(".login-button", form).attr("disabled", !1).html('Sign In');
                if ("success" == e) {
                    var t = '<div class="alert alert-success alert-dismissable"><button class="close" aria-hidden="true" data-dismiss="alert" type="button">x</button><div style="font-size: 14px">Authentication successful. Redirecting please wait......</div></div>';
                    container.css("background-color", "#d6e9c6"), container.html(t), container.slideDown(), window.location = base_url + "user"
                } else if ('ga_authentication' == e) {
                    var t = '<div class="alert alert-success alert-dismissable"><button class="close" aria-hidden="true" data-dismiss="alert" type="button">x</button><div style="font-size: 14px">Authentication successful. Redirecting to Two-Factor authentication......</div></div>';
                    container.css("background-color", "#d6e9c6"), container.html(t), container.slideDown(), window.location = base_url + "ga_two_step_verification"
                } else if ('sms_authentication' == e) {
                    var t = '<div class="alert alert-success alert-dismissable"><button class="close" aria-hidden="true" data-dismiss="alert" type="button">x</button><div style="font-size: 14px">Authentication successful. Redirecting to Two-Factor authentication......</div></div>';
                    container.css("background-color", "#d6e9c6"), container.html(t), container.slideDown(), window.location = base_url + "sms_two_step_verification"
                } else if ('captcha-required' == e) {
                    var t = '<div class="alert alert-error alert-dismissable"><button class="close" aria-hidden="true" data-dismiss="alert" type="button">x</button><div style="font-size: 14px">Please verify valid captcha on login page......</div></div>';
                    container.css("background-color", "#d6e9c6"), container.html(t), container.slideDown(), window.location = base_url + "login"
                } else {
                    container.css("background-color", "#f2dede"), container.html(e), container.slideDown();
                    if ($('.login_page_form').length == 1) grecaptcha.reset();
                }
            } catch (e) {} finally {
                if (animation) {
                    setTimeout(function() {
                        container.slideUp(), container.empty()
                    }, 3e3)
                }
            }
        });
    })
})

function SK_headerSearch(a) {
    search_wrapper = $(".dropdown-search-container"), 0 == a.length ? search_wrapper.hide() : (search_wrapper.show(), $.get(base_url + "/publicprofile/ajax.php", {
        t: "search",
        a: "header",
        q: a
    }, function(a) {
        200 == a.status && (0 == a.html.length ? search_wrapper.find(".search-list-wrapper").html('<div class="no-wrapper">No result found!</div>').end().find("a.page-link").hide() : search_wrapper.find(".search-list-wrapper").html(a.html).end().find("a.page-link").attr("href", a.link).show())
    }))
}
$(document).ready(function() {
    $(".login-button").removeAttr("disabled")
});