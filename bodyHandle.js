var Remarkable = require('remarkable');
var md = new Remarkable();

module.exports = {
    insertPrism: function(body) {

        // 这里要全局替换

        // body=body.replace('<script>','啊')

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
        // body=body.replace('<script>','<pre><script>');

            // body=body.replace('</script>','</script></pre>');


            // 这里要替换所有其他标记。。。。并且为他们加上 <code class="language-markup">,除了script和style

            //body=body.replace(/</g,'&lt;<code class="language-markup">');
            //body=body.replace(/>/g,'&gt;</code>');

            body=body.replace(/</g,'<code class="language-markup">&lt;');
            body=body.replace(/\/>/g,'&gt;</code>');


            var s2=body;
            s2=s2.replace('&lt;script&gt;','&lt;script&gt;<code class="language-javascript">');
            s2=s2.replace('&lt;\/script&gt;','</code>&lt;\/script&gt;');
            //s2=s2.replace('<script>','&lt;script&gt;');
            //s2=s2.replace('<\/script>','&lt;/script&gt;');
            return '<pre>'+s2+'</pre>';
            // pre2.innerHTML=s2;




            // return '<pre><code class="language-markup"><script type="prism-html-markup">' + body + '</script></code></pre>';
            //return '<pre><code class="language-markup"><script type="prism-html-markup">' + body + '</script></code></pre>';
            //return body;
        }
    },

    addScript: function(body) {
        return '<script>' + body + '</script>';
    },

    transMarkDown: function(body) {

        var css='<link href="/libs/markdownstyle/GitHub2.css" rel="stylesheet">';
        var js = '<script src="/libs/prism.js"></script>';

        //return css + '<code class="language-markup"><script type="prism-html-markup">' + md.render(body) + '</script></code>'+ js;

       return css+md.render(body);
    }

}
