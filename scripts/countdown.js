{/* <script> */ }
var dest = new Date("oct 31, 2021 00:00:00:00").getTime();
// var dest = new Date(new Date().getTime() + 10000).getTime();

const f = function () {
  var currentdate = new Date().getTime();
  var left = dest - currentdate;
  console.log(left);
  if (left < 0) {
    clearInterval(x);
    document.getElementById("he1").innerHTML = "EXPIRED";
    document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 00;
    document.getElementById("minutes").innerHTML = 00;
    document.getElementById("seconds").innerHTML = 00;
    return;
  }

  var days = Math.floor(left / (1000 * 60 * 60 * 24));
  var h = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((left % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = h;
  document.getElementById("minutes").innerHTML = m;
  document.getElementById("seconds").innerHTML = seconds2;
}
var x = setInterval(f, 1000);
