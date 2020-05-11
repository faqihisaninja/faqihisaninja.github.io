function run() {
  var input = document.getElementById("input").value.split(" ");
  if (input.length >= 3) {
    main(parseInt(input[0]), parseInt(input[1]), parseInt(input[2]));
  } else {
    console.log("Please enter 3 numbers.");
  }
}

function main(a, b, c) {
  var positions = [];
  while (a > b && c > 0) {
    a -= 1;
    c -= b + 1;
    if (c < 0) {
      c += a + 1;
    }
    positions.push(c);
  }
  console.log(positions);
  if (c == 0) {
    console.log("Sorry, you are not selected");
  } else {
    console.log("Congratulations, you are in!");
  }
}

var target = document.getElementById('target');
var divs = document.getElementsByTagName('div');
var stuff = document.getElementsByClassName('class1');

target.className += 'hidden';

function hello(e) { // e = event
    console.log(e);
};
window.addEventListener("resize", hello);

document.getElementsByTagName('button').addEventListener("click", () => {
    document.getElementsByTagName('button').innerHTML = 'WEE!!';
});