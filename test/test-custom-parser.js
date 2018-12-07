var dss = require('../dss');
var fs = require('fs');
var path = require('path');

exports.testParse = function(test){
    test.expect(3);

    var fileContents = fs.readFileSync(path.join(__dirname, 'data/custom-parser.css'), 'utf8');
    const detectorFilter = [
        'media',
        'import',
        'tailwind',
        'apply',
        'variants',
        'responsive',
        'screen'
    ];
    const match = new RegExp(".*@");
    const unmatch = new RegExp(".*@(" + detectorFilter.join("|") + ")");
    dss.detector( function(line) {
        if (typeof line !== 'string') {
            return false;
        }
        const reference = line.split("\n\n").pop();
        return !!reference.match(match) && !reference.match(unmatch);
    });
    
    dss.parser('sectionmaker', function () {
        // Just returns the lines contents
        return this.line.contents.split('>').map(section => section.trim());
    });

    dss.parse(fileContents, {}, function(parsed) {
        console.log(JSON.stringify(parsed, null, 2));
        var block = parsed.blocks[0];
        test.equal(block.helloworld, 'hello world');
        test.equal(block.media, undefined);
        test.equal(JSON.stringify(block.sectionmaker), JSON.stringify(['Base', 'Button']));
        test.done();
    });
};
