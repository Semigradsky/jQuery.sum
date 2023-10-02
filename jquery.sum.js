($ => {

    const reduce = Array.prototype.reduce;

    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const multiply = (a, b) => a * b
    const division = (a, b) => a / b

    $.fn.sum = (...arguments) => {
        return reduce.call(arguments, add);
    };

    $.fn.diff = (...arguments) => {
        return reduce.call(arguments, sub);
    };

    $.fn.product = (...arguments) => {
        return reduce.call(arguments, multiply);
    };

    $.fn.quotient = (...arguments) => {
        return reduce.call(arguments, division);
    };
})(jQuery);
