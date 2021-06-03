var fs = require('fs')
fs.readFile('colors.csv', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
  });