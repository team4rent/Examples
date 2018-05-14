var vm = {
    name: ko.observable("sasa")
}

class Rectangle {
    constructor (id, x, y, w, h) {
  
    this.width = w
    this.height = h
    this.name = ko.observable("sasa")
    }
    // Getter and setter
    set width (w) { this._width = w }
    get width () { return this._width }
    }

var TestViewModel = function() 
{
    this.name = ko.observable("sasa");
}

ko.applyBindings(vm, document.querySelector("#person"));

