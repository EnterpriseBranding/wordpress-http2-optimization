function zb(){Ba("log",arguments,"#fbbc05")}function Ab(a){var c,b,d;return(c=Math,b=c.log,d=b(a)/b(1E3)|0,a/c.pow(1E3,d)).toFixed(2)+" "+(d?"kMGTPEZY"[--d]+"B":"Bytes")}function Bb(a){var c;try{c=new Blob([a],{type:"application/javascript"})}catch(b){c=new (m.BlobBuilder||m.WebKitBlobBuilder||m.B),c.append(a),c=c.getBlob("application/javascript")}return URL.createObjectURL(c)}function Cb(){return Math.round(+new Date/1E3)}var Ya=[7,4,6,8];
function R(a,c,b){if(a=Db.getItem(Eb+a))try{var d=JSON.parse(a);if(d){var e=void 0!==c?c:d[4];return e&&d[3]+e<Cb()||!b&&null===d[5]?!1:d}}catch(f){}return!1}function Fb(a,c){var b=R(a,!1,!0);b&&(b[3]=Cb(),c&&(b[9]=c),Db.setItem(Eb+a,JSON.stringify(b)))}
function Gb(a,c,b){if("undefined"!==typeof b&&10<parseInt(b))J("localStorage","quota reached","tried to remove 10 scripts, it did not free enough space. Try localStorage.clear();",a);else{"object"===typeof c&&(c=JSON.stringify(c));try{Db.setItem(Eb+a,c)}catch(k){if(0<=k.name.toUpperCase().indexOf("QUOTA")){var d,e,f,g=[];for(d in Db)0===d.indexOf(Eb)&&-1===d.indexOf("chunk:")&&(f=d.split(Eb)[1],(e=R(f))&&g.push([f,e]));g.length?(g.sort(function(a,b){return a[1][3]-b[1][3]}),J("localStorage","quota reached",
"removed",g[0][0],"for key",a),Hb(g[0][0]),B(function(){"undefined"===typeof b&&(b=0);Gb(a,c,++b)},500)):J("localStorage","quota reached","no items to remove")}else J("localStorage","error",k.name,k)}}}function Hb(a){R(a)&&Db.removeItem(Eb+a)}
function $a(a,c){Ib(function(){if(c[11]){var b=c[11];for(key in c)c.hasOwnProperty(key)&&void 0!==b[key]&&(c[key]=b[key])}var d=R(a,c[4],!0);if(d){b=Cb();if(c[6]&&b<d[3]+c[6])return;null===d[5]?d[7]?c[7]&&d[7]<=c[7]&&(d=!1):d=!1:c[7]&&d[7]&&d[7]>c[7]&&(d=!1);d&&c[8]&&(c[8]={},c[8][9]=d[9],c[8][10]=d[10])}Jb++;b=parseInt(Jb);Kb[b]={};Kb[b][0]=a;Kb[b][2]=function(b){b[0]instanceof Array?1===b[0][0]?d&&(Fb(a,b[1]),null===d[5]&&"undefined"!==typeof d[7]&&zb("localStorage","to big ("+Ab(d[7])+")",a)):
2===b[0][0]&&B(function(){var c={};c[3]=Cb();c[7]=b[0][1];c[5]=null;c[9]=b[1];c[10]=b[2];Gb(a,c);zb("localStorage","to big ("+Ab(b[0][1])+")",a)},1):B(function(){var d={};d[3]=Cb();d[7]=b[0].length;d[4]=c[4]||Lb;d[5]=b[0];d[9]=b[1];d[10]=b[2];Gb(a,d);zb("localStorage","saved ("+Ab(d[7])+")",a)},1)};var e={};e[0]=a;e[14]=d?1:0;e[1]=b;e[7]=c[7];e[8]=d?c[8]:0;e[9]=d?d[9]:0;e[10]=d?d[10]:0;W.postMessage(e)})}
function Ib(a){sa(function(){B(function(){if(!W){var c=function(){self.v=5E3;self.m=function(a){function b(b,d){f||(f=!0,b&&(b=[n.status,n.statusText]),c(),h&&!v&&"string"===typeof d&&(content_size=d.length,content_size>h&&(d=[2,content_size])),self.u(a,b,[d,p,t]))}function c(){4!==n.readyState&&n.abort();g&&(self.clearTimeout(g),g=!1)}var f=!1,g=!1,k=a[8],h=a[7],q=!1,p,t,v,n=new XMLHttpRequest;n.open(k?"HEAD":"GET",a[0],!0);1===a[14]&&(a[9]&&n.setRequestHeader("If-None-Match",a[9]),a[10]&&n.setRequestHeader("If-Modified-Since",
a[10]));n.onreadystatechange=function(){if(!f)if(2===n.readyState){if(!q){q=!0;p=n.getResponseHeader("ETag");t=n.getResponseHeader("Last-Modified");if(304===n.status)return b(!1,[1]);if(h&&(v=n.getResponseHeader("Content-Length"))&&(v=parseInt(v),!isNaN(v)&&v>h))return b(!1,[2,v]);if(k){var d=!0;k[9]&&p&&k[9]===p&&(d=!1);d&&k[10]&&t&&k[10]===t&&(d=!1);d?(a[8]=!1,c(),self.m(a)):b(!1,[1])}}}else 4===n.readyState&&(304===n.status?b(!1,[1]):200!==n.status?b(!0):b(!1,n.responseText))};n.onerror=function(){f||
b(!0)};g=self.setTimeout(function(){if(!f){try{n.abort()}catch(r){}b("timeout")}},self.v);n.send(null)};self.u=function(a,c,e){c?self.postMessage([2,a[1],c]):self.postMessage([1,a[1],e])};self.onmessage=function(a){a=a.data;if(a instanceof Array)for(var b=a.length,c=0;c<b;c++)"object"===typeof a[c]&&"undefined"!==typeof a[c][0]&&"undefined"!==typeof a[c][1]&&self.m(a[c]);else if("object"===typeof a&&"undefined"!==typeof a[0]&&"undefined"!==typeof a[1])self.m(a);else throw Error("Web Worker Script Loader: Invalid resource object");
}}.toString().replace(/^function\s*\(\s*\)\s*\{/,"").replace(/\}$/,""),c=Bb(c);W=new Worker(c);W.addEventListener("message",Mb);W.addEventListener("error",function(a){J(["localStorage","worker"],a)})}a()},1)})}
function Mb(a){if(W){a=a.data;var c=a[1];if("undefined"===typeof Kb[c])J("localStorage","web worker invalid response",a);else if(1===a[0])Kb[c][2](a[2]);else 2===a[0]&&(c=Kb[c][0],a[2]instanceof Array?200<a[2][0]&&600>a[2][0]&&J("localStorage","web worker error",c,a[2][0],a[2][1]):J("localStorage","web worker error",c,a))}}
if("localStorage"in m&&m.localStorage){var Db=m.localStorage,Eb="optimization-",Lb=86400,W,Kb=[],Jb=0;m.addEventListener("beforeunload",function(){W&&(W.terminate(),W=!1)});B(function(){var a,c,b=Cb(),d=[];for(a in Db)(c=a.split(Eb)[1])&&(a=R(c))&&a[3]+a[4]<=b&&(Hb(c),d.push(c));0<d.length&&J("localStorage","cleared",d.length,"expired items")},3,function(a){function c(){b&&clearTimeout(b);b=setTimeout(a,2E3)}var b;c();SCRIPT_ONLOAD(c)})};
