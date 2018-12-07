var dss = require('../dss');
var fs = require('fs');
var path = require('path');

exports.testParse = function(test){
    test.expect(2);

    var fileContents = fs.readFileSync(path.join(__dirname, 'data/custom-parser.css'), 'utf8');
    dss.parser('sectionmaker', function () {
        // Just returns the lines contents
        return this.line.contents.split('>').map(section => section.trim());
    });
    dss.parse(fileContents, {}, function(parsed) {
        console.log(JSON.stringify(parsed, null, 2));
        var block = parsed.blocks[0];
        test.equal(block.helloworld, 'hello world');
        test.equal(JSON.stringify(block.sectionmaker), JSON.stringify(['Base', 'Button']));
        test.done();
    });
};
