var postcss = require("postcss");
var fs = require("fs");
var plugin = require("../");


fs.readFile("./test.css", function(err, css) {
  postcss([ plugin() ]).process(css).then(function(result) {
        console.log(result.css);
    }).catch(function(e) {
      console.log(e);
    });
});
