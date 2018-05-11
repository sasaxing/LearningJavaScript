define(['jquery', 'oh_my_logger', 'methods'], function ($, myLogger, methods) { // define(['dep'], function(){}) will also trigger a dep to be loaded.
    // the following will be executed immediately after 'jquery' and 'oh_my_logger' are both loaded.
    console.log('jquery = ', $)
    console.log('myLogger = ', myLogger)
    //jquery('body').html('hello, from the other side!')
    console.log('methods = ', methods)

    $('#clickMe').click(function () {
        methods.changeHTML('I was clicked!');
    })
})
