define(['jquery'], function ($) {
    var methods = {};
    methods.changeHTML = function (arg) {
        $('body').html(arg);
    }

    methods.showAlert = function (arg) {
        alert(arg);
    }

    return methods; // <--
})