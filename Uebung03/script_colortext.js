function style3() {
    var p = document.querySelector("#change");
    var random= Math.floor(Math.random()*16777215).toString(16);
    var farbe = "#" + random

    p.innerHTML = document.querySelector("#txt").value;
    p.style["color"] = farbe;
    p.style["font-size"] = "50px";
}