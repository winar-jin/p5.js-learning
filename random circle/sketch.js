var circles = [];
function setup() {
    createCanvas(600, 600);
    background(200);
    var protection = 0; //保护，防止死循环，当圆圈数量过多的时候
    while (circles.length < 300) {
        var circle = {
            x: random(width),
            y: random(height),
            r: random(5,30)
        };
        //circles.push(circle);
        // circles[0] = circle;
        var overlapping = false;
        for (var j = 0; j < circles.length; j++) {

            var other = circles[j];
            console.log(other);
            var distance = dist(other.x, other.y, circle.x, circle.y);
            if (distance < (other.r + circle.r)) {
                overlapping = true;
            }

        }
        if (!overlapping) {
            circles.push(circle);
        }
        protection++;
        if (protection > 1000) {
            break;
        }
    }

    for (var i = 0; i < circles.length; i++) {
        fill(255, 0, 100, 100);
        noStroke();
        ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
    }
}