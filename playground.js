function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}



//使用字面量添加新方法，会导致上一行代码无效
SubType.prototype = {
    getSubValue: function () {
        return this.subproperty;
    },
    
    someOtherMethod: function() {
        return false;
    }
};
//继承了SuperType（子类型定义的方法要在后面）
SubType.prototype = new SuperType(); 
var instance = new SubType();
console.log(instance.getSuperValue());  //报错