var HelloWorld = (function () {
    function HelloWorld(name) {
        this.name = name;
    }
    HelloWorld.prototype.SayHi = function (htmlDOM) {
        htmlDOM.innerHTML = "Hi " + this.name;
    };
    return HelloWorld;
}());
