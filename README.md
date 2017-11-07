postcss-spiffing
---
> My hands are of your colour, but I shame<br>
To wear a heart so white.<br>
\- William Shakespeare, *Macbeth*

Shakespeare wouldn't have settled for using "color" rather than "colour" in CSS, and neither should you! He would've recognised that in doing so, he would've comprised the whole integrity of his writing.

Write CSS using proper British English anywhere with `postcss-spiffing`.

The main differences between this and `spiffing` by [muan](https://github.com/muan), are that this integrates with `postcss` and does not use regular expressions.

### Install
```bash
npm install postcss-spiffing --save-dev
```

### Example Basics
```css
/* Your well-spelt CSS */

body {
  background-colour: grey;
  transparency: 0.3;
  text-align: centre;
  text-transform: capitalise;
  border: 1px solid grey;
}

span {
  font-weight: plump;
}

.frame {
  background-photograph: url("/queen.png") !please;
}

.hello {
	content: "subjects";
	colour: grey;
}
```

will go to:

```css
body {
  background-color: gray;
  opacity: 0.7;
  text-align: center;
  text-transform: capitalize;
  border: 1px solid gray;
}

span {
  font-weight: bold;
}

.frame {
  background-image: url("/queen.png") !important;
}

.hello {
	content: "subjects";
	color: gray;
}
```

### Use
```js
var postcss = require("postcss");
var spiffing = require("postcss-spiffing");
var fs = require("fs");

var css = fs.readFileSync("random.css");

console.log(postcss(spiffing()).process(css).css);
```

To use this with `gulp`, use [gulp-postcss](https://github.com/w0rm/gulp-postcss).

### Changes Applied
1. `colour` goes to `color`
2. `plump` goes to `bold`
3. `capitalise` goes to `capitalize`
4. `!please` goes to `!important`
5. `centre` goes to `center`
6. `grey` goes to `gray`
7. `background-photograph` goes to `background-image` (`list-style-photograph` is supported too)
8. `transparency` goes to `opacity` (since transparency is the opposite of opacity it becomes (1-n))
9. `storey` goes to `z-index` (`ground` equals 1 and so on)
