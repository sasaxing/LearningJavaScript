define("methods", ['jquery'], function ($) {
    var methods = {};
    methods.changeHTML = function (arg) {
        $('body').html(arg);
    }

    methods.showAlert = function (arg) {
        alert(arg);
    }

    return methods; // <--
})

define("mymethods", ['jquery', 'methods'], function ($, m) {
    var methods = {};
    methods.greeting = function (arg) {
        console.log(arg);
    }
    methods.changeHTML = m.changeHTML;
    return methods; // <--
})