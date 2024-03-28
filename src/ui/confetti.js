export default class Confetti {
  constructor(root) {
    this.root = root;
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.root.appendChild(this.canvas);

    this.canvas.width = this.root.offsetWidth;
    this.canvas.height = this.root.offsetHeight;

    this.confettis = [];

    this.animate();
  }

  getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  createConfetti() {
    const x = this.getRandomNumber(0, this.canvas.width);
    const y = this.getRandomNumber(-this.canvas.height, 0);
    const rotation = this.getRandomNumber(0, 2 * Math.PI);
    const color = "#" + (Math.random().toString(16) + "000000").substring(2, 8);
    const speed = this.getRandomNumber(3, 5);
    const size = this.getRandomNumber(5, 15);

    const confetti = {
      x,
      y,
      rotation,
      color,
      speed,
      size,
    };

    this.confettis.push(confetti);
  }

  removeOffScreenConfetti() {
    this.confettis = this.confettis.filter(
      (confetti) => confetti.y <= this.canvas.height
    );
  }

  drawConfetti(confetti) {
    this.ctx.save();
    this.ctx.translate(confetti.x, confetti.y);
    this.ctx.rotate(confetti.rotation);
    this.ctx.fillStyle = confetti.color;
    this.ctx.fillRect(
      -confetti.size / 2,
      -confetti.size / 2,
      confetti.size,
      confetti.size
    );
    this.ctx.restore();
  }

  updateConfetti(confetti) {
    confetti.y += confetti.speed;
    if (confetti.y > this.canvas.height) {
      confetti.y = this.getRandomNumber(-this.canvas.height, 0);
      confetti.x = this.getRandomNumber(0, this.canvas.width);
      confetti.speed = this.getRandomNumber(3, 6);
      confetti.size = this.getRandomNumber(5, 15);
    }
  }

  stopAnimationAfterTimeout(timeout) {
    setTimeout(() => {
      this.animationStopped = true;
    }, timeout);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (Math.random() < 0.2) {
      this.createConfetti();
    }

    this.confettis.forEach((confetti) => {
      this.updateConfetti(confetti);
      this.drawConfetti(confetti);
    });

    this.removeOffScreenConfetti();
  }
}
