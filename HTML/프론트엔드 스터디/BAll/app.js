class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        this.ball = new Ball(this.stageWidth, this.stageHeight, 200, 50);
        this.block = new Block(700, 30, 300, 450);

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.Height = this.stageHeight * 2;
        this.ctx.scale(2, 2);
    }

    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.block.draw(this.ctx);

        this.ball.draw(this.ctx, this.stageWidth, this.stageHeight);
    }

}

class Ball {
    constructor(stageWidth, stageHeight, radius, speed) {
        this.radius = radius;
        this.vx = speed;
        this.vy = speed;

        const diameter = this.radius * 2;
        this.x = diameter + (Math.random() * stageWidth - diameter);
        this.y = diameter + (Math.random() * stageHeight - diameter);
    }

    draw(ctx, stageWidth, stageHeight) {
        this.x += this.vx;
        this.y += this.vy;

        this.bounceWindow(stageWidth, stageHeight);

        ctx.fillStyle = '#fdd700';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    bounceWindow(stageWidth, stageHeight) {
        const minX = this.radius;
        const maxX = stageWidth - this.radius;
        const minY = this.radius;
        const maxY = stageHeight - this.radius;

        if (this.x <= minX || this.x >= maxX) {
            this.vx *= -1;
            this.x += this.vx;
        }
        else if (this.y <= minY || this.y >= maxY) {
            this.vy *= -1;
            this.y += this.vy;
        }
    }

}

class Block{
    constructor(width, height, x, y) {
        this.width = width;
        this.height = width;
        this.x = x;
        this.y = y;
        this.maxX = width + x;
        this.maxY = width + y;

    }
    draw(ctx){
        const xGap = 80;
        const yGap = 60;

        ctx.fillStyle = '#ff384e';
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }
}
window.onload = () => {
    new App();
};