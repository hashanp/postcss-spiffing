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

### Example
```css
/* Your well-spelt CSS */

body {
  background-colour: grey !please;
  transparency: 0.5;
  text-align: centre;
  font-weight: plump;
  text-transform: capitalise;
  border: 1px solid grey;
}

.frame {
  background-photograph: url('/queen.png') !please;
}

@medium screen and (min-width:300px) {
  .hello {
    content:"subjects";
    color:grey(0);
  }
}
```

will go to:

```css
body {
  background-color: gray !important;
  opacity: 0.5;
  text-align: center;
  font-weight: bold;
  text-transform: capitalize;
  border: 1px solid gray;
}

.frame {
  background-image: url('/queen.png') !important;
}

@media screen and (min-width:300px) {
  .hello {
    content:"subjects";
    color:gray(0);
  }
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
2. `@medium` (i.e. the singular of `media`) goes to `@media`
3. `plump` goes to `bold`
4. `capitalise` goes to `capitalize`
5. `!please` goes to `!important`
6. `centre` goes to `center`
7. `grey` goes to `gray`
8. `background-photograph` goes to `background-image`
9. `transparency` goes to `opacity`
