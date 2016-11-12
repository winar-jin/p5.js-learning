function setup() {
    for(var i = 0; i<10;i++){
        var redP = createA("https://google.com","I am a red P!");
        redP.position(random(windowWidth),random(windowHeight));
        redP.class("red");
        redP.mousePressed(changeClass);
    }
    for(var j = 0; j<10;j++){
        var greenP = createA("#","I am a green P!");
        greenP.position(random(windowWidth),random(windowHeight));
        greenP.class("green");
    }

    // var red = selectAll(".red");
    // var green = selectAll(".green");
    // console.log(red);
    // for(var i = 0;i<red.length;i++){
    //     red[i].
    // }

    
}
function changeClass(){
    console.log("I am clicked");
    this.removeClass("red");
    this.class("green");
}
function draw() {
  
}