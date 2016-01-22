requirejs.config({
    baseUrl: 'js/client'
});

requirejs(['greeter'],function(greeter){
    var el = document.getElementById('content');
    var newGreeter = new greeter.Greeter(el);
    newGreeter.start();
});