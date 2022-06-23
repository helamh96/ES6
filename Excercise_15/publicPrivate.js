var foo = (function () { 
    function bar(){
        alert("this is a public method")
    }
    function privateMethod(){
        alert("This is a Private method")
    }
    function test(){
        privateMethod()
    }
    return{
        bar,
        test
    }
 })()
foo.bar()
foo.test()