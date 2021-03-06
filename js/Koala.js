/*
// KOALA CONSTRUCTOR
*/
var koalaImgSrc = 'images/koala_icon.png';
imgFloor = new Image();
imgJump = new Image();
imgCrash = new Image();
imgFloor.src = koalaImgSrc;
imgJump.src = 'images/koala-icon_jump.png';
imgCrash.src = 'images/koala-icon_crash';

function Koala(x, y, width, height, img, ctx) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.speedX = 0;
    this.speedY = 0;
    this.numberOfJumps = 0;
    this.width = width;
    this.height = height;
    this.img = img;
    // Parameters to adapt:
    this.gravity = 0.1; // The bigger, the faster the fall will be
    this.bounce = 0.6; // The bigger, the more it will bounce. 0 => nothing, 1 => bounce for ever
    this.friction = 0.07; // The bigger, the smoother the fall will be
    this.maxJumps = 6;
}
// Draw Koala figure:
Koala.prototype.draw = function() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};
// Move Koala figure:
Koala.prototype.newPos = function() {
    this.speedY += this.gravity - this.friction * this.speedY;
    this.x += this.speedX;
    this.y += this.speedY;

    // Reach the top / set limit:
    if (this.y < this.height) {
        this.y = this.height;
        this.speedY = 0;
    }
    // Reach the bottom / set bounce:
    if (this.y > canvasHeight - 50 - this.height) {
        this.numberOfJumps = 0;
        this.y = canvasHeight - 50 - this.height;
        this.speedY *= -this.bounce;
    }
};

// Set Koala jumps:
Koala.prototype.jump = function(n) {
    if (this.numberOfJumps < this.maxJumps) {
        this.numberOfJumps++;
        this.speedY = -20;
    }
    soundJump.play();
};

// On collision with obstacles:
Koala.prototype.collide = function(obstacle) {
    var myleft = this.x - 20;
    var myright = this.x + this.width - 30;
    var mytop = this.y;
    var mybottom = this.y + this.height - 25;
    var otherleft = obstacle.x;
    var otherright = obstacle.x + obstacle.width;
    var othertop = obstacle.y;
    var otherbottom = obstacle.y + obstacle.height;
    var crash = true;
    if (mybottom < othertop || mytop > otherbottom || myright < otherleft || myleft > otherright) {
        crash = false;
    }
    return crash;
};
// On collecting bonus:
Koala.prototype.collectBonus = function(bonus) {
    var myleft = this.x;
    var myright = this.x + this.width;
    var mytop = this.y;
    var mybottom = this.y + this.height;
    var otherleft = bonus.x;
    var otherright = bonus.x + bonus.width;
    var othertop = bonus.y;
    var otherbottom = bonus.y + bonus.height;
    var bonus = true;
    if (mybottom < othertop || mytop > otherbottom || myright < otherleft || myleft > otherright) {
        bonus = false;
    }
    return bonus;
};
