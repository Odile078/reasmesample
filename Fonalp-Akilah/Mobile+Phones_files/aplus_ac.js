/*! 2020-06-10 16:02:26 v8.14.1 */
!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";!function(){var t=window.goldlog||(window.goldlog={});t._aplus_ac||(t._aplus_ac={status:"init",elementSelectorSizeMap:{}},n(1).init(function(){t._aplus_ac.status="complete"}))}()},function(t,e,n){"use strict";var r=n(2),o=n(3),a=n(4),i=n(20),u=n(18);e.init=function(t){var e,n=window.goldlog||(window.goldlog={}),l=!1,c=function(){l||(r.wrap(function(){e=u.getAutoClkConfig();var t=i.create({autoClkConfig:e});t.init(),a.watch_clk(),n.aplus_pubsub.subscribe("setMetaInfo",function(n,r,o){if("aplus-auto-clk"===n){var i=u.getAutoExpConfig(r);if(JSON.stringify(i)===JSON.stringify(e))return;e=i,o||(o={from:"setMetaInfo"}),a.clear(),t.clear(o),r&&(t.reset({autoClkConfig:e},o),a.watch_clk())}})},"do_init"),l=!0)};setTimeout(function(){l||o.logger({msg:"aplus_ac_init failed! please check whether aplusJs is loaded correctly!"})},5e3);var s=n._$||{},f=window.g_SPM||{};"complete"===s.status&&f.spm&&c();var g=window.goldlog_queue||(window.goldlog_queue=[]);g.push({action:"goldlog.aplus_pubsub.subscribe",arguments:["aplusReady",function(t){"complete"===t&&c("aplusReady")}]}),"function"==typeof t&&t()}},function(t,e){"use strict";var n=function(t,e){var n=window.goldlog_queue||(window.goldlog_queue=[]);n.push({action:"goldlog._aplus_cplugin_track_deb.monitor",arguments:[{key:"APLUS_PLUGIN_DEBUG",title:"aplus_core",msg:["_error_:methodName="+e+",params="+JSON.stringify(t)],type:"updateMsg",description:e||"aplus_core"}]})},r=function(t,e,n){var r=window.goldlog_queue||(window.goldlog_queue=[]);r.push({action:["goldlog","_aplus_cplugin_m",e].join("."),arguments:[t,n]})};e.do_tracker_jserror=function(t,e){var o="do_tracker_jserror";r(t,o,e),n(t,o)},e.do_tracker_obsolete_inter=function(t,e){var o="do_tracker_obsolete_inter";r(t,o,e),n(t,o)},e.wrap=function(t){if("function"==typeof t)try{t()}catch(t){n({msg:t.message||t},"exception")}finally{}}},function(t,e){"use strict";var n=function(){var t=!1;return"boolean"==typeof goldlog.aplusDebug&&(t=goldlog.aplusDebug),t};e.isDebugAplus=n;var r=function(t){t||(t={});var e=t.level||"warn";window.console&&window.console[e]&&window.console[e](t.msg)};e.logger=r},function(t,e,n){"use strict";var r=n(5),o=n(6),a=n(7),i=n(11),u=n(13),l=n(9),c=n(14),s=n(10),f=n(15),g=n(18),p=function(){var t=u.getGoldlogVal("_$")||{},e=t.meta_info||{},n=e["aplus-touch"];return a.isTouch()&&("1"===n||"tap"===n)},d=window,h=["iframe","html","body","head"],v=g.DATA_APLUS_AC_KEY,_=function(t){var e=[],n=t?o.tryToGetAttribute(t,v):"",r=u.getGoldlogVal("_aplus_ac")||{},a=r._acHashMap||{};return c(a,function(t,r){s(r,function(t){t.hash_value===n&&e.push(t.clkConfig)})}),{clkConfigs:e,el:t}},m=function(t){var e=_(t);if(e&&e.clkConfigs&&e.clkConfigs.length>0)return e;for(;(t=t.parentNode)&&r.indexof(h,t.tagName?t.tagName.toLowerCase():"html")===-1;)if(e=_(t),e&&e.clkConfigs&&e.clkConfigs.length>0)return e},y=function(t){t=t||d.event;var e=t.target||t.srcElement,n=m(e)||{},r=n.clkConfigs;n&&r&&n.el&&s(r,function(t){var r=t;e=n.el;var o=goldlog.spm_ab?goldlog.spm_ab.join("."):"0.0",a=o+".0.0",i="";d.g_SPM&&"function"==typeof d.g_SPM.spm&&(a=d.g_SPM.spm(e));var u=[],c={},s=f.fillPropsData(r,e,c);s=f.fillFilterData(r,e,c);var p=g.getAutoClkUserFn();if(p){var h=f.autoUserFnHandler(p,e,r.elementSelector);"object"==typeof h&&("object"==typeof h.userdata&&(s=l.assign(s,h.userdata)),h.spm&&(a=h.spm),h.scm&&(i=h.scm))}u.push("clkdata="+JSON.stringify([{exargs:s,scm:i,spm:a,aplusContentId:""}])),u.push("_is_auto_clk=1"),goldlog.record(r.logkey,"CLK",u.join("&"),r.method||"POST")})};e.watch_clk=function(){a.isTouch()||p()?i.on(document,"tap",y):i.on(document,"mousedown",y)},e.clear=function(){a.isTouch()||p()?i.un(document,"tap",y):i.un(document,"mousedown",y)}},function(t,e){"use strict";e.indexof=function(t,e){var n=-1;try{n=t.indexOf(e)}catch(o){for(var r=0;r<t.length;r++)t[r]===e&&(n=r)}finally{return n}}},function(t,e){"use strict";e.tryToGetAttribute=function(t,e){return t&&t.getAttribute?t.getAttribute(e)||"":""};var n=function(t,e,n){if(t&&t.setAttribute)try{t.setAttribute(e,n)}catch(t){}};e.tryToSetAttribute=n,e.tryToRemoveAttribute=function(t,e){if(t&&t.removeAttribute)try{t.removeAttribute(e)}catch(r){n(t,e,"")}}},function(t,e,n){"use strict";function r(){return u||(u=g.getElementById("beacon-aplus")||g.getElementById("tb-beacon-aplus")),u}function o(t){var e=r(),n=f.tryToGetAttribute(e,"cspx");t&&n&&(t.nonce=n)}function a(t,e,n){var a="script",u=g.createElement(a);u.type="text/javascript",u.async=!0;var c=r(),s=c&&c.hasAttribute("crossorigin");s&&(u.crossOrigin="anonymous");var f="https:"===location.protocol?e||t:t;0===f.indexOf("//")&&(f=l.getProtocal()+f),u.src=f,n&&(u.id=n),o(u);var p=g.getElementsByTagName(a)[0];i=i||g.getElementsByTagName("head")[0],p?p.parentNode.insertBefore(u,p):i&&i.appendChild(u)}var i,u,l=n(8),c=n(9),s=n(3),f=n(6),g=document;e.getCurrentNode=r,e.addScript=a,e.loadScript=function(t,e){function n(t){r.onreadystatechange=r.onload=r.onerror=null,r=null,e(t)}var r=g.createElement("script");if(i=i||g.getElementsByTagName("head")[0],r.async=!0,"onload"in r)r.onload=n;else{var a=function(){/loaded|complete/.test(r.readyState)&&n()};r.onreadystatechange=a,a()}r.onerror=function(t){n(t)},r.src=t,o(r),i.appendChild(r)},e.isTouch=function(){return"ontouchend"in document.createElement("div")};var p=function(){var t=goldlog&&goldlog._$?goldlog._$:{},e=t.meta_info||{};return e["aplus-exparams"]||""};e.getExParamsFromMeta=p,e.getExParams=function(t){var e=r(),n=f.tryToGetAttribute(e,"exparams"),o=d(n,p(),t)||"";return o&&o.replace(/&amp;/g,"&").replace(/\buser(i|I)d=/,"uidaplus=")};var d=function(t,e,n){var r="aplus&sidx=aplusSidex",o=t||r;try{if(e){var a=n.param2obj(e),i=["aplus","cna","spm-cnt","spm-url","spm-pre","logtype","pre","uidaplus","asid","sidx","trid","gokey"];c.each(i,function(t){a.hasOwnProperty(t)&&(s.logger({msg:"Can not inject keywords: "+t}),delete a[t])}),delete a[""];var u="";if(t){var l=t.match(/aplus&/).index,f=l>0?n.param2obj(t.substring(0,l)):{};delete f[""],u=n.obj2param(c.assign(f,a))+"&"+t.substring(l,t.length)}else u=n.obj2param(a)+"&"+r;return u}return o}catch(t){return o}};e.mergeExparams=d},function(t,e,n){"use strict";var r=n(9),o=function(){if(goldlog.aplusDebug){var t=location.protocol;return"http:"!==t&&"https:"!==t&&(t="https:"),t}return"https:"};e.getProtocal=o,e.isStartWithProtocol=function(t){for(var e=["javascript:","tel:","sms:","mailto:","tmall://","#"],n=0,o=e.length;n<o;n++)if(r.isStartWith(t,e[n]))return!0;return!1}},function(t,e,n){"use strict";function r(t,e){return"function"!=typeof Object.assign?function(t){if(null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var r=arguments[n];if(null!==r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}(t,e):Object.assign({},t,e)}function o(t){return"function"==typeof t}function a(t){return"string"==typeof t}function i(t){return"undefined"==typeof t}function u(t,e){return t.indexOf(e)>-1}var l=window;e.assign=r,e.makeCacheNum=function(){return Math.floor(268435456*Math.random()).toString(16)},e.each=n(10),e.isStartWith=function(t,e){return 0===t.indexOf(e)},e.isEndWith=function(t,e){var n=t.length,r=e.length;return n>=r&&t.indexOf(e)==n-r},e.any=function(t,e){var n,r=t.length;for(n=0;n<r;n++)if(e(t[n]))return!0;return!1},e.isFunction=o,e.isArray=function(t){return Array.isArray?Array.isArray(t):/Array/.test(Object.prototype.toString.call(t))},e.isString=a,e.isNumber=function(t){return"number"==typeof t},e.isUnDefined=i,e.isContain=u;var c=function(t){var e,n=t.constructor===Array?[]:{};if("object"==typeof t){if(l.JSON&&l.JSON.parse)e=JSON.stringify(t),n=JSON.parse(e);else for(var r in t)n[r]="object"==typeof t[r]?c(t[r]):t[r];return n}};e.cloneObj=c,e.cloneDeep=c},function(t,e){"use strict";t.exports=function(t,e){var n,r=t.length;for(n=0;n<r;n++)e(t[n],n)}},function(t,e,n){"use strict";function r(t,e){var n=goldlog._$||{},r=n.meta_info||{},o=r.aplus_ctap||{},a=r["aplus-touch"];if(o&&"function"==typeof o.on)o.on(t,e);else{var l="ontouchend"in document.createElement("div");l&&"tap"===a?i.on(t,e):u(t,l?"touchstart":"mousedown",e)}}function o(t,e){var n=goldlog._$||{},r=n.meta_info||{},o=r.aplus_ctap||{},a=r["aplus-touch"];if(o&&"function"==typeof o.un)o.un(t,e);else{var u="ontouchend"in document.createElement("div");u&&"tap"===a?i.un(t,e):l(t,u?"touchstart":"mousedown",e)}}var a=!!document.attachEvent,i=n(12),u=function(t,e,n){return"tap"===e?void r(t,n):void(a?t.attachEvent(e,n):t.addEventListener(e,n))};e.on=u;var l=function(t,e,n){return"tap"===e?void o(t,n):void(a?t.detachEvent(e,n):t.removeEventListener(e,n))};e.un=l},function(t,e){"use strict";function n(t,e){return t+Math.floor(Math.random()*(e-t+1))}function r(t,e,n){var r=s.createEvent("HTMLEvents");if(r.initEvent(e,!0,!0),"object"==typeof n)for(var o in n)r[o]=n[o];t.dispatchEvent(r)}function o(t){0===Object.keys(g).length&&(f.addEventListener(h,a,!1),f.addEventListener(d,i,!1),f.addEventListener(_,i,!1));for(var e=0;e<t.changedTouches.length;e++){var n=t.changedTouches[e],r={};for(var o in n)r[o]=n[o];var u={startTouch:r,startTime:Date.now(),status:v,element:t.srcElement||t.target};g[n.identifier]=u}}function a(t){for(var e=0;e<t.changedTouches.length;e++){var n=t.changedTouches[e],r=g[n.identifier];if(!r)return;var o=n.clientX-r.startTouch.clientX,a=n.clientY-r.startTouch.clientY,i=Math.sqrt(Math.pow(o,2)+Math.pow(a,2));(r.status===v||"pressing"===r.status)&&i>10&&(r.status="panning")}}function i(t){for(var e=0;e<t.changedTouches.length;e++){var n=t.changedTouches[e],o=n.identifier,u=g[o];u&&(u.status===v&&t.type===d&&(u.timestamp=Date.now(),r(u.element,m,{touch:n,touchEvent:t})),delete g[o])}0===Object.keys(g).length&&(f.removeEventListener(h,a,!1),f.removeEventListener(d,i,!1),f.removeEventListener(_,i,!1))}function u(t){t.__fixTouchEvent||(t.addEventListener(p,function(){},!1),t.__fixTouchEvent=!0)}function l(){c||(f.addEventListener(p,o,!1),c=!0)}var c=!1,s=window.document,f=s.documentElement,g={},p="touchstart",d="touchend",h="touchmove",v="tapping",_="touchcancel",m="aplus_tap"+n(1,1e5);t.exports={on:function(t,e){l(),t&&t.addEventListener&&e&&(u(t),t.addEventListener(m,e._aplus_tap_callback=function(t){e(t,t.target)},!1))},un:function(t,e){t&&t.removeEventListener&&e&&e._aplus_tap_callback&&t.removeEventListener(m,e._aplus_tap_callback,!1)}}},function(t,e){"use strict";var n=function(t){var e;try{window.goldlog||(window.goldlog={}),e=window.goldlog[t]}catch(t){e=""}finally{return e}};e.getGoldlogVal=n;var r=function(t,e){var n=!1;try{window.goldlog||(window.goldlog={}),t&&(window.goldlog[t]=e,n=!0)}catch(t){n=!1}finally{return n}};e.setGoldlogVal=r,e.getClientInfo=function(){return n("_aplus_client")||{}}},function(t,e){"use strict";t.exports=function(t,e){if(Object&&Object.keys)for(var n=Object.keys(t),r=n.length,o=0;o<r;o++){var a=n[o];e(a,t[a])}else for(var i in t)e(i,t[i])}},function(t,e,n){"use strict";function r(t,e,n){var r=e.hash_value,o=i.getGoldlogVal(n)||{};if(o.hash_value||(o.hash_value={}),o.hash_value[t]||(o.hash_value[t]=a.Map?new a.Map:{}),a.Map){var u=o.hash_value[t].get(r);u?++u:u=1,o.hash_value[t].set(r,u)}else o.hash_value[t][r]?++o.hash_value[t][r]:o.hash_value[t][r]=1;i.setGoldlogVal(n,o)}var o=document,a=window,i=n(13),u=n(3),l=n(16),c=n(10),s=n(14),f=n(17),g=n(18),p=function(t){return"[object Array]"===Object.prototype.toString.call(t)};e.isArray=p,e.getXPath=function(t){var e,n,r,a,i,u,l=o.getElementsByTagName("*");for(e=[];t&&1==t.nodeType;t=t.parentNode)if(t.id){for(u=t.id,a=0,n=0;n<l.length;n++)if(i=l[n],i.id&&i.id==u){a++;break}if(e.unshift(t.tagName.toLowerCase()+'[@id="'+u+'"]'),1==a)return e.unshift("/"),e.join("/")}else{for(n=1,r=t.previousSibling;r;r=r.previousSibling)r.tagName==t.tagName&&n++;e.unshift(t.tagName.toLowerCase()+"["+n+"]")}return e.length?"/"+e.join("/"):null};var d=function(t,e){if(e&&0!==e.length||(e=[]),t&&t.length>0)for(var n=0;n<t.length;n++)e.push(t[n]);return e};e.nodelistToArray=d,e.getElements=function(t,e){var n=e||o,r=[];if(n.querySelectorAll)r=d(n.querySelectorAll(t.elementSelector)||[]);else for(var a=document.getElementsByTagName(t.tag),i=t.filter.split("="),u=i.length>0?i[0].trim():"",l=i.length>1?i[1].trim():"",c=0;c<a.length;c++){var s=a[c],f=s.getAttribute(u),g=s.hasAttribute(u);!g||l&&l!==f||r.push(s)}return r};var h=function(){return/aplusDebug=true/.test(location.search)},v=h();e.IS_DEBUG=v,e.fillPropsData=function(t,e,n){n||(n={});try{var r=t.props||[];if(r&&p(r)&&r.length>0)for(var o=0;o<r.length;o++)if(e&&e.getAttribute){var a=r[o],i=e.getAttribute(a);void 0!==typeof i&&null!==i&&""!==i&&(n[a]=encodeURIComponent(i))}}catch(t){u.logger({msg:t&&t.message})}return n},e.fillFilterData=function(t,e,n){n||(n={});try{var r=t.filter||"",o=r.split("=");if(p(o)&&o[1])n[o[0]]=o[1];else if(o[0]&&e&&e.getAttribute){var a=e.getAttribute(o[0])||"";void 0!==typeof a&&null!==a&&""!==a&&(n[o[0]]=a)}}catch(t){u.logger({msg:t&&t.message})}return n};var _=function(t){return!!/^POST|GET$/i.test(t)};e.isMethod=_;var m=function(t){var e=!!/^\d+$/.test(t);return!!(e&&parseInt(t)>0)};e.isPkgSize=m,e.filterExpConfigRequestCfg=function(t){var e=g.getDefaultRequestCfg()||{};try{var n=t||{};_(n.method)&&(e.method=n.method),m(n.pkgSize)&&(e.pkgSize=parseInt(n.pkgSize))}catch(t){u.logger({msg:t&&t.message})}return e};var y=function(t){var e=t.split("&"),n={};return e.length>0&&c(e,function(t){var e=t.split("=");2===e.length&&(n[e[0]]=f.tryToEncodeURIComponent(e[1]))}),n};e.autoUserFnHandler=function(t,e,n){var r={userdata:{},spm:"",scm:""};try{var o=t(e,n);o&&("string"==typeof o?r.userdata=y(o):"object"==typeof o&&"object"==typeof o.userdata&&(s(o.userdata,function(t,e){r.userdata[t]=f.tryToEncodeURIComponent(e)}),r.spm=o.spm,r.scm=o.scm))}catch(t){console.log(t)}return r};var b=function(t,e){var n="";if(t&&e){var r=[t.getAttribute(e.filter)],o=e.props||[];if(o)for(var a=0;a<o.length;a++)r.push(t.getAttribute(o[a]));n=r.join("_")}return n},A=function(t){var e=t.getAttribute("data-spm-anchor-id");if(e){var n=e.split(".");return{a:n[0],b:n[1],c:n[2],d:n[3],e:n[4]}}};e.getSpmObj=A,e.getElementHash=function(t,e){var n={};"aplus_webvt"!==t.source&&(n=A(e.ele)||g_SPM.getParam(e.ele));var r="",o="x"+e.index;if(n.a&&n.b&&n.c&&n.d){var a=/^i/.test(n.d)?o:n.d;r=n.a+"_"+n.b+"_"+n.c+"_"+a,n.e&&(r+="_"+n.e)}else r=o,goldlog.pvid&&(r+=goldlog.pvid);e.ignore_attr||(r+=t.logkey+"_",r+=t.elementSelector+"_",r+=b(e.ele,t));var i=o+"_"+l.hash(r);return i},e.filterUnloadAttr=function(t){return t&&(t=t.replace(/(href|style|data-spm-anchor-id)=[\'|\"][\w|\W|\.]+[\'|\"]/,""),t=t.replace(/\s\>/g,">"),t=t.replace(new RegExp(g.DATA_APLUS_AE_KEY+"=[\\'|\\\"]\\w+[\\'|\\\"]"),""),t=t.replace(new RegExp(g.DATA_APLUS_AC_KEY+"=[\\'|\\\"]\\w+[\\'|\\\"]"),"")),t};var w=function(t,e){for(var n,r=0,o=t.length;r<o;){var a=t[r]||{};if(a.hash_value===e.hash_value)return t[r]=e,n=!0,t;r++}return n||t.push(e),t},E=function(t,e,n,o){if(n||(n="ADD"),t&&"object"==typeof e){var a=i.getGoldlogVal(o)||{},u=a._acHashMap||{},l=u[t]||[],c=function(){for(var t=0,n=l.length;t<n;){var r=l[t]||{};if(r.hash_value===e.hash_value)return t;t++}return-1},s=c();"ADD"===n&&s===-1?(l.push(e),r(t,e,o)):"CLEAR"===n&&s>-1?l.splice(s,1):"UPDATE"===n&&(l=w(l,e)),u[t]=l,a._acHashMap=u,i.setGoldlogVal(o,a)}};e.updateExpHashMap=function(t,e,n){E(t,e,n,"_aplus_auto_exp")},e.updateClkHashMap=function(t,e,n){E(t,e,n,"_aplus_ac")};var S=function(){return(new Date).getTime()};e.throttle=function(t,e,n){var r,o,a,i,u=0;n||(n={});var l=function(){u=n.leading===!1?0:S(),r=null,i=t.apply(o,a),r||(o=a=null)},c=function(){var c=S();u||n.leading!==!1||(u=c);var s=e-(c-u);return o=this,a=arguments,s<=0||s>e?(r&&(clearTimeout(r),r=null),u=c,i=t.apply(o,a),r||(o=a=null)):r||n.trailing===!1||(r=setTimeout(l,s)),i};return c.cancel=function(){clearTimeout(r),u=0,r=o=a=null},c},e.checkIsInHashMap=function(t){var e=i.getGoldlogVal(t.goldlogKey)||{},n=e.hash_value||{},r=n[t.logkey]||(a.Map?new a.Map:{}),o=r&&r.get?r.get(t.hash_value):r[t.hash_value];if(o>1)return!0;for(var u=e._acHashMap||{},l=u[t.logkey]||[],c=l.length,s=0;s<c;s++)if(l[s].hash_value===t.hash_value)return!0;return!1},e.setRecordSuccess=function(t,e){try{var n=t?t.element:{},r=t.hash_value||"";n&&n.setAttribute&&n.setAttribute(e,r)}catch(t){}}},function(t,e){"use strict";var n=1315423911;e.hash=function(t,e){var r,o,a=e||n;for(r=t.length-1;r>=0;r--)o=t.charCodeAt(r),a^=(a<<5)+o+(a>>2);var i=(2147483647&a).toString(16);return i}},function(t,e){"use strict";e.tryToEncodeURIComponent=function(t){var e=t||"";if(t)try{e=encodeURIComponent(decodeURIComponent(t))}catch(t){}return e}},function(t,e,n){"use strict";function r(t){return goldlog&&goldlog.getMetaInfo?goldlog.getMetaInfo(t):a.getMetaCnt(t)}var o=n(5),a=n(19);e.DATA_APLUS_AE_KEY="data-aplus-ae",e.DATA_APLUS_AC_KEY="data-aplus-clk",e.LOOP_TIME=1e3,e.getDefaultRequestCfg=function(){return{method:"POST",pkgSize:10}};var i=function(t,e){var n=e;try{var o=r(t);o&&(n=parseFloat(o)),n<=0&&(n=e)}catch(t){n=e}finally{return n}},u=i("aplus-auto-exp-visible",.3);e.AUTO_AT_VIEW_RATE=u,e.AUTO_AT_VIEW_RATE_IN_WINDOW=i("aplus-auto-exp-window",0)||u;var l=function(t){var e=t;try{var n=r("aplus-auto-exp-duration"),o=parseInt(n);o+""!="NaN"&&(e=o)}catch(t){}finally{return e}};e.EXP_DURATION=l(300);var c=function(t,e){var n,a=[],i=[];try{n=e||r(t);var u=[];if(n&&"string"==typeof n)try{u=JSON.parse(n)}catch(t){u=JSON.parse(n.replace(/'/g,'"'))}else"object"==typeof n&&n.constructor===Array&&(u=n);if(u&&u.constructor===Array)for(var l=0;l<u.length;l++){var c=u[l]||{},s=c.logkey||"",f=c.tag?c.tag:"",g=c.filter,p=c.cssSelector,d=p||f&&g;if(!s||!d)throw new Error("meta "+t+" config error, "+JSON.stringify(c));g="string"==typeof g?g.split("="):[];var h=f;if(g.length>=2?h+="["+g.shift()+'="'+decodeURIComponent(g.join(""))+'"]':1==g.length&&g[0]&&(h+="["+decodeURIComponent(g[0])+"]"),p&&(h+=p),c.elementSelector=h,o.indexof(i,h)>-1)throw new Error("meta "+t+" config error, tag_filter_cssSelector "+h+" repeated");i.push(h),a.push(c)}}catch(t){}finally{return a}};e.getAutoExpConfig=function(t){return c("aplus-auto-exp",t)||[]},e.getAutoExpUserFn=function(){var t=r("aplus-auto-exp-userfn");if(t){var e=window[t]||t;if("function"==typeof e)return e}return null},e.isThrottleWatchDom=function(){var t=!1;try{t="throttle"===r("aplus-auto-exp-watchdom")}catch(t){}return t},e.getAutoClkConfig=function(t){return c("aplus-auto-clk",t)||[]},e.getAutoClkUserFn=function(){var t=r("aplus-auto-clk-userfn");if(t){var e=window[t]||t;if("function"==typeof e)return e}return null}},function(t,e,n){"use strict";function r(t){return i=i||document.getElementsByTagName("head")[0],u&&!t?u:i?u=i.getElementsByTagName("meta"):[]}function o(t,e){var n,o,a,i=r(),u=i.length;for(n=0;n<u;n++)o=i[n],l.tryToGetAttribute(o,"name")===t&&(a=l.tryToGetAttribute(o,e||"content"));return a||""}function a(t){var e={isonepage:"-1",urlpagename:""},n=t.qGet();if(n&&n.hasOwnProperty("isonepage_data"))e.isonepage=n.isonepage_data.isonepage,e.urlpagename=n.isonepage_data.urlpagename;else{var r=o("isonepage")||"-1",a=r.split("|");e.isonepage=a[0],e.urlpagename=a[1]?a[1]:""}return e}var i,u,l=n(6);e.getMetaTags=r,e.getMetaCnt=o,e.getOnePageInfo=a},function(t,e,n){"use strict";var r=n(21),o=n(2),a=n(11),i=n(3),u=n(15),l=n(18),c=window,s=document,f=r.extend({eachElements:function(t,e){for(var n=e.logkey||"",r=0;r<t.length;r++){var o=t[r],a=o.getAttribute(l.DATA_APLUS_AC_KEY);if(!(a&&a.indexOf("_")>0)){isNaN(parseInt(a))&&(a=goldlog._aplus_ac.elementSelectorSizeMap[e.elementSelector]++,o.setAttribute(l.DATA_APLUS_AC_KEY,a));var i=u.getElementHash(e,{ignore_attr:!1,index:a,ele:o});if(!u.checkIsInHashMap({logkey:n,hash_value:i,goldlogKey:"_aplus_ac"})){var c={clkConfig:e,hash_value:i,element:o,status:0,elementSelector:e.elementSelector};u.updateClkHashMap(n,c,"ADD"),u.setRecordSuccess(c,l.DATA_APLUS_AC_KEY)}}}},handler_dom_change:function(){for(var t=this,e=t.autoClkConfig||[],n=0;n<e.length;n++){var r=e[n];goldlog._aplus_ac.elementSelectorSizeMap[r.elementSelector]||(goldlog._aplus_ac.elementSelectorSizeMap[r.elementSelector]=1);var o=u.getElements(r,s);t.eachElements(o,r)}},throttle_handler_dom_change:u.throttle(function(){this.handler_dom_change()},200),init_observer:function(t,e){var n=new t(function(){o.wrap(function(){var t=goldlog._aplus_ac||{};++t.observer_times,e()},"init_observer_init_elements")}),r={childList:!0,characterData:!0,subtree:!0};n.observe(s.body,r),u.IS_DEBUG&&i.logger({msg:"aplus_ac init MutationObserver success!"}),this._observer=n},init_watch_dom:function(){var t=this,e=goldlog._aplus_ac||{};t._loop_observer=setTimeout(function(){"blur"!==e.current_win_status?(u.IS_DEBUG&&i.logger({msg:"watch_dom LOOP_TIME is "+l.LOOP_TIME+"ms total: "+ ++e.watch_times}),t.throttle_handler_dom_change(),t.init_watch_dom()):e.watch_dom_running=!1},l.LOOP_TIME)},onFocusHandler:function(){var t=this,e=goldlog._aplus_ac||{};e.current_win_status="focus",e.watch_dom_running||t.init_watch_dom()},onBlurHandler:function(){var t=goldlog._aplus_ac||{};t.current_win_status="blur"},onVisibilityChange:function(){var t=this;"visible"===s.visibilityState?t.onFocusHandler():"hidden"===s.visibilityState&&t.onBlurHandler()},addAllListener:function(){var t=this,e=goldlog._aplus_ac||{};e.watch_times=0,e.watch_dom_running=!0,t.init_watch_dom(),c.WindVane&&s.addEventListener&&(a.on(s,"WV.Event.APP.Active",t.onFocusHandler,!1),a.on(s,"WV.Event.APP.Background",t.onBlurHandler,!1)),"hidden"in s?a.on(c,"visibilitychange",t.onVisibilityChange):(a.on(c,"blur",t.onBlurHandler),a.on(c,"focus",t.onFocusHandler))},removeAllListener:function(){var t=this;c.WindVane&&s.removeEventListener&&(a.un(s,"WV.Event.APP.Active",t.onFocusHandler,!1),a.un(s,"WV.Event.APP.Background",t.onBlurHandler,!1)),"hidden"in s?a.un(c,"visibilitychange",t.onVisibilityChange):(a.un(c,"blur",t.onBlurHandler),a.un(c,"focus",t.onFocusHandler))},init:function(){var t=this,e=goldlog._aplus_ac||{};t.throttle_handler_dom_change();var n=c.MutationObserver||c.WebKitMutationObserver||c.MozMutationObserver;n?(e.observer_times=0,t.init_observer(n,function(){t.throttle_handler_dom_change()})):t.addAllListener()},clearDom:function(t,e){var n=this.autoClkConfig||[];if(e&&"appendMetaInfo"!==e.from)for(var r=0;r<n.length;r++)try{for(var o=n[r].elementSelector,a=s.querySelectorAll(o),i=0;i<a.length;i++)a[i].setAttribute(l.DATA_APLUS_AC_KEY,"")}catch(t){}this.autoClkConfig=t&&t.autoClkConfig},clear:function(t){if(!t||"appendMetaInfo"!==t.from){var e=goldlog._aplus_ac||{};e._acHashMap&&(e._acHashMap={}),e.hash_value&&(e.hash_value={}),goldlog._aplus_ac=e,this._loop_observer&&(clearTimeout(this._loop_observer),this._loop_observer=null),this._observer?this._observer.disconnect():this.removeAllListener()}},reset:function(t,e){this.clearDom(t,e),this.init()}});t.exports=f},function(t,e){"use strict";function n(){}n.prototype.extend=function(){},n.prototype.create=function(){},n.extend=function(t){return this.prototype.extend.call(this,t)},n.prototype.create=function(t){var e=new this;for(var n in t)e[n]=t[n];return e},n.prototype.extend=function(t){var e=function(){};try{"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),e.prototype=Object.create(this.prototype);for(var n in t)e.prototype[n]=t[n];e.prototype.constructor=e,e.extend=e.prototype.extend,e.create=e.prototype.create}catch(t){console.log(t)}finally{return e}},t.exports=n}]);