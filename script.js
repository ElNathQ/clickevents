var button1 = document.querySelector("#first");
var button2 = document.querySelector("#second");
var button3 = document.querySelector("#third");
var body = document.querySelector("body");

button1.addEventListener('click', function(){
    var foo = document.createElement('h3');
    foo.textContent = "Foo";
    body.appendChild(foo);
})

button2.addEventListener('click', function(){
    var bar = document.createElement('h3');
    bar.textContent = "Bar";
    body.appendChild(bar);
})

button3.addEventListener('click', function(){
    var foobar = document.createElement('h2');
    foobar.textContent = "FooBar";
    body.appendChild(foobar);
})