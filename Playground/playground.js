function foo() {
    function bar(a) {
        i = 3;
        console.log(a+i);
    }
    {for (let i=0; i<10; i++) {
        bar(i*2);       //输出为11，然后又将i重置回3，无限循环下去，导致浏览器宕机
    }}
}

foo();