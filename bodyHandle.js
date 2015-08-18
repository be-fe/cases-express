var Remarkable = require('remarkable');
var md = new Remarkable();

module.exports = {
    insertPrism: function(body) {
        var css = '<link href="/libs/prism.css" rel="stylesheet">';
        var js = '<script src="/libs/prism.js"></script>';
        return css + body + js;
    },

    addHighlight: function(body, type) {
        var type = type || 'js';
        if (type === 'js') {
            return '<pre><code class="language-javascript">' + body + '</code></pre>';
        }
        else if (type === 'html') {
            return '<pre><code class="language-markup"><script type="prism-html-markup">' + body + '</script></code></pre>';
        }
    },

    addScript: function(body) {
        return '<script>' + body + '</script>';
    },

    transMarkDown: function(body) {
        return md.render(body);
    }

}
