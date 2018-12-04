var dss = require('../dss');
var fs = require('fs');
var path = require('path');

exports.testParse = function(test){
  test.expect(4);

  var fileContents = fs.readFileSync(path.join(__dirname, 'data/multiline.css'), 'utf8');
  dss.parse(fileContents, {}, function(parsed) {
    var block = parsed.blocks[0];
    test.equal(block.name, 'Button');
    console.log(block.description);
    test.equal(block.description, 'Your standard form button.\nIt works great.');
    console.log(block.markup.example);
    test.equal(block.markup.example.trim(), '<div class="test">\n  <a>Test</a>\r\n</div>');
    test.equal(block.markup.escaped.trim(), '&lt;div class="test"&gt;\n  &lt;a&gt;Test&lt;/a&gt;\r\n&lt;/div&gt;');
    test.done();
  });
};
