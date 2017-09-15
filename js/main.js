console.log('main.js');

require.config({
    baseUrl: 'js'
});

require(['selector'], function (query) {
    console.log('selector.js loaded');

    console.log('selector', query);

    var els = query('.wrapper');
    console.log('els', els);
});

require(['demo1'], function (demo1) {
    console.log('demo1.js loaded');
});