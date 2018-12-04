// Require
var fs = require('fs');
var path = require('path');
var dss = require('../dss');

// Basic Parsing Stylus
exports.parseSASS = function (test) {

    test.expect(3);

    var fileContents = fs.readFileSync(path.join(__dirname, 'data/parse.sass'), 'utf8');

    dss.parse(fileContents, {}, function (parsed) {
        console.log(JSON.stringify(parsed, null, 2));
        var block = parsed.blocks[0];
        test.equal(block.name, 'Button');
        test.equal(block.description, 'Your standard form button.');
        test.equal(block.custom, 'Some custom info');
        test.done();

    });
};
