// var image = require("./image.png");
const Pixel = require('./Structures/Pixel').Pixel;
const ColorProfile = require('./Structures/colorProfile').colorProfile;


function handleThreshold(image, colorDict, threshold) {
    for (let y = 0; y < image.getHeight(); y++) {
        for (let x = 0; x < image.getWidth(); x++) {
            let r = image.getIntComponent0(x, y);
            let g = image.getIntComponent1(x, y);
            let b = image.getIntComponent2(x, y);
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

function crowsAlgorithm(image, colorDict){
    let result = {};
    let threshold = 10;
    for (const key in colorDict) {
        result.push(key);
    }
    while (result.length > 4){

    }
    return result;
}

