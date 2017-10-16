function foo() {
    function bar(a) {
        i = 3;
        console.log(a + i);
    } {
        for (let i = 0; i < 10; i++) {
            bar(i * 2); //输出为11，然后又将i重置回3，无限循环下去，导致浏览器宕机
        }
    }
}

foo(); // 3

function foo() {
    console.log(1);
}

var foo = function () {
    console.log(2);
};

function foo() {
    console.log(3);
}

function foo() {
    var a = 2;

    function baz() {
        console.log(a); // 2 }

        bar(baz);

    }
}
function bar(fn) {
    fn(); // 妈妈快看呀，这就是闭包！ 
}

for(var i=1; i<=5; i++) {
    (function(){
        var j = i;
        setTimeout(function timer(){
            console.log(j);
        }, j*1000);
    })();
}

for(var i=1; i<=5; i++) {
    (function(j){
        setTimeout(function timer(){
            console.log(j);
        }, j*1000);
    })(i);
}