(function ($) {
    "use strict";

    // Function to check if an element is visible
    function visible(partial) {
        if (!partial || !partial.offset) return false; // Check if the element is undefined or has no offset function
        var $t = partial,
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));
    }

    // Rest of your code goes here...

    // Scroll event handler
    $(window).scroll(function () {
        if (visible($('.count-digit'))) {
            if ($('.count-digit').hasClass('counter-loaded')) return;
            $('.count-digit').addClass('counter-loaded');

            $('.count-digit').each(function () {
                var $this = $(this);
                jQuery({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    });

})(window.jQuery);
