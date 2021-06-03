// var image = require("./image.png");
const Pixel = require('./Structures/Pixel').Pixel;
const ColorProfile = require('./Structures/colorProfile').colorProfile;


function imageLoaded(image, colorDict, threshold) {

    //image = new MarvinImage();
    //image.load("./image.png", imageLoaded);

    //var threshold=200;
    for (var y = 0; y < image.getHeight(); y++) {
        for (var x = 0; x < image.getWidth(); x++) {
            var r = image.getIntComponent0(x, y);
            var g = image.getIntComponent1(x, y);
            var b = image.getIntComponent2(x, y);

            updateColorsDict(colorDict, r, g, b, threshold);
        }
    }
}

function updateColorsDict(colorDict, r, g, b, threshold) {
    colorDict.forEach(profile => {
        let absRed = Math.abs(r - profile.pixel.red);
        let absGreen = Math.abs(r - profile.pixel.green);
        let absBlue = Math.abs(r - profile.pixel.blue);
        if (absRed <= threshold && absGreen <= threshold && absBlue <= threshold)
            profile.count++;
        });
}
