console.log('main.js');

requirejs(['selector'], function (selector) {
    console.log('selector.js loaded');
});

requirejs(['demo1'], function (demo1) {
    console.log('demo1.js loaded');
});