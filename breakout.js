var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var word = "hello";

class Ball {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;
    this.dx = 2;
    this.dy = -2;
    this.radius = 10;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
      this.dx = -this.dx;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
      this.dy = -this.dy;
    }
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
  }
}

class Paddle {
  constructor() {
    this.width = 50;
    this.height = 10;
    this.x = canvas.width / 2;
    this.y = 0;
  }

  draw() {
    context.beginPath();
    context.rect(this.x - this.width / 2, canvas.height - this.height, this.width, this.height);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
  }
}

ball = new Ball();
paddle = new Paddle();

setInterval(loop, 6);

function loop() {
  update();
  draw();
}

function update() {
  ball.update();
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  paddle.draw();
}
