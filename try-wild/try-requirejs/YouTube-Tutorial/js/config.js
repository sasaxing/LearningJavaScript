// config.js

requirejs.config({
    //baseUrl: 'js',
    paths: {
        jquery: [
            'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min',
            'lib/jquery'
        ],
        // Q: why I can't use 'oh_my_jquery' here?
        oh_my_logger: 'lib/myLogger',
        methods: 'customScripts/methods'
    }
})