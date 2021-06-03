// var image = require("./image.png");


function imageLoaded(){

    image = new MarvinImage();
    image.load("./image.png", imageLoaded);

    var threshold=200;
    for(var y=0; y<image.getHeight(); y++){
        for(var x=0; x<image.getWidth(); x++){
            var r = image.getIntComponent0(x,y);
            var g = image.getIntComponent1(x,y);
            var b = image.getIntComponent2(x,y);


            if(r <= threshold && g <= threshold && b <= threshold){
                image.setIntColor(x, y, 0xFF000000);
            } else{
                image.setIntColor(x, y, 0xFFFFFFFF);
            }
        }
    }
}