function wuerfel() {
    var nummer = Math.floor(6*Math.random()) + 1;
    return nummer
}

var x = wuerfel();
console.log(x);