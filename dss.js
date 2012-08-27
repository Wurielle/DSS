/**
 * DSS CLI Tool
 * @author Darcy Clarke
 *
 * Dual licensed under the MIT and GPL licenses.
 *
 * Based on KSS: https://github.com/kneath/kss
 * @author Kyle Neath
 */

var path = require('path');
  
var program = require('commander');
  
var cli = function(){
  
  program
    .version('0.0.1')
    .command('dss')
    .option('build, -b, --build', 'Build Documentation')
    .description('Build documentation')
    .action(function(cmd, options){
      console.log('building...', cmd, options);
    });
  program.parse(process.argv);

};

/*
(function() {
	
  var KssStateGenerator;

  KssStateGenerator = (function() {

    function KssStateGenerator() {
      var idx, idxs, pseudos, replaceRule, rule, stylesheet, _i, _len, _len2, _ref, _ref2;
      pseudos = /(\:hover|\:disabled|\:active|\:visited|\:focus)/g;
      try {
        _ref = document.styleSheets;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          stylesheet = _ref[_i];
          idxs = [];
          _ref2 = stylesheet.cssRules;
          for (idx = 0, _len2 = _ref2.length; idx < _len2; idx++) {
            rule = _ref2[idx];
            while ((rule.type === CSSRule.STYLE_RULE) && pseudos.test(rule.selectorText)) {
              replaceRule = function(matched, stuff) {
                return matched.replace(/\:/g, '.pseudo-class-');
              };
              this.insertRule(rule.cssText.replace(pseudos, replaceRule));
            }
          }
        }
      } catch (_error) {}
    }

    KssStateGenerator.prototype.insertRule = function(rule) {
      var headEl, styleEl;
      headEl = document.getElementsByTagName('head')[0];
      styleEl = document.createElement('style');
      styleEl.type = 'text/css';
      if (styleEl.styleSheet) {
        styleEl.styleSheet.cssText = rule;
      } else {
        styleEl.appendChild(document.createTextNode(rule));
      }
      return headEl.appendChild(styleEl);
    };

    return KssStateGenerator;

  })();

  new KssStateGenerator;

}).call(this);

*/