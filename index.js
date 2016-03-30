var postcss = require("postcss");

module.exports = postcss.plugin("postcss-spiffing", function(opts) {
  return function(css) {
		css.walkDecls(function(decl) {
      decl.prop = decl.prop.replace(/colour/g, "color").replace(/photograph/g, "image");
        if (decl.prop === "font-weight" && decl.value === "plump") {
          decl.value = "bold";
        } else if (decl.prop === "transparency") {
          decl.prop = "opacity";

          if (Number(decl.value) == decl.value && (parseFloat(decl.value) <= 1 && parseFloat(decl.value) >= 0)) {
            decl.value = (1 - parseFloat(decl.value)).toFixed((Number(decl.value) + "").replace(".", "").length - 1);
          }
        } else if (decl.prop === "text-transform" && decl.value === "capitalise") {
          decl.value = "capitalize";
        } else if (decl.prop === "storey") {
          decl.prop = "z-index";

          if (decl.value === "ground") {
            decl.value = "1";
          } else {
            decl.value = Number(decl.value) + 1 + "";
          }
        }

        if (decl.value.match(/!please$/)) {
          decl.value = decl.value.substring(0, decl.value.length - 7).trim();
          decl.important = true;
        }

        if (decl.prop !== "content") {
          decl.value = decl.value.split(" ").map(function(i) {
            if (i === "centre") {
              return "center";
            }

            if (i === "grey") {
             return "gray";
            }

            return i;
          }).join(" ");
        }

        decl.value = decl.value.replace(/(var\(--[^\)]*)colour([^\)]*\))/g, "$1color$2");
      });

      css.walkAtRules(function(rule) {
        if (rule.name === "medium") {
          rule.name = "media";
        }
      });
    }
});
