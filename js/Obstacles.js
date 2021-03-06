/*
// OBSTACLES CONSTRUCTOR
*/
function Obstacles(randomBob, canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.img = new Image();
    switch (randomBob) {
        case 'bob1':
            this.height = 93;
            this.width = 63;
            this.img.src = 'images/obstacle_01.png';
            break;
        case 'bob2':
            this.height = 68;
            this.width = 46;
            this.img.src = 'images/obstacle_02.png';
            break;
        case 'bob3':
            this.height = 93;
            this.width = 51;
            this.img.src = 'images/obstacle_03.png';
            break;
        case 'bob4':
            this.height = 80;
            this.width = 47;
            this.img.src = 'images/obstacle_04.png';
            break;
        case 'bob5':
            this.height = 105;
            this.width = 47;
            this.img.src = 'images/obstacle_05.png';
            break;
    }
    this.x = this.canvas.width;
    this.y = this.canvas.height - 50 - this.height;
    this.speedX = 0;
    this.speedY = 0;
}
// Appear Randomly:
Obstacles.prototype.draw = function() {
    this.ctx.drawImage(this.img, this.x, this.y);
};
// Move:
Obstacles.prototype.move = function() {
    this.x--;
};
