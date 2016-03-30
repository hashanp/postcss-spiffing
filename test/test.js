var postcss = require("postcss")
	expect = require("expect.js"),
	fs = require("fs"),
	path = require("path"),
	plugin = require("../");


describe("Main test", function() {
	it("should translate correctly", function() {
		var source = fs.readFileSync(path.join(__dirname, "source.css"), "utf-8"),
			expected = fs.readFileSync(path.join(__dirname, "expected.css"), "utf-8"),
			translated = postcss([ plugin() ]).process(source).css;

		expect(translated).to.eql(expected);
	});
});
