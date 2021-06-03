
const Pixel = require('./Structures/Pixel').Pixel;
let fs = require('fs');
let lines

const result = fs.readFileSync('colors.csv', 'utf8');
lines = result.toString().split("\n");
getData();
function getData() {
    let dict = {}
    for (const [k, line] of Object.entries(lines)) {
         let r = line.slice(0,line.length- 1);
        let values = r.split(',');
        let key = values[3];
        if(values[4] == null)
            break;
        let RGB = values[4].split(';');
        let p = new Pixel(RGB[0], RGB[1], RGB[2]);
        dict[key] = p;
      }
    console.log(dict)
    return dict;
}
