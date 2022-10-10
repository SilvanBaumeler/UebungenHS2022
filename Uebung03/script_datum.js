function zeit(event) {
    setInterval(zeit, 500);

    var d = new Date();
    var ds = d.toDateString();
    var ts = d.toTimeString();

    var time = document.getElementById("time");
    var date = document.querySelector("#date");

    date.innerHTML = ds
    time.innerHTML = ts
}

