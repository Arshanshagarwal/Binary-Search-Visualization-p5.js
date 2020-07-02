let h = [];

let i = 0;
let j = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  h = new Array(width);
  for (let i = 0; i < h.length; i++) {
    h[i] = random(height / 3);
    //values[i] = noise(i/100.0)*height;
  }
}

function draw() {
  background(0);

  if (i < h.length) {
    for (let j = 0; j < h.length - i - 1; j++) {
      let a = h[j];
      let b = h[j + 1];
      if (a > b) {
        swap(h, j, j + 1);
      }
    }
  } else {
    console.log("finished");
    noLoop();
  }
  i++;

  for (let i = 0; i < h.length; i++) {
    stroke(255);
    line(i, height / 3, i, height / 3 - h[i]);
    // noFill();
    // ellipse(i, height, height - h[i]);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
