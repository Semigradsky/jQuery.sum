;(function($) {

    var reduce = Array.prototype.reduce;

    function add(a, b) {
        return a + b;
    }

    $.fn.sum = function () {
        return reduce.call(arguments, add, 0);
    };

})(jQuery);
