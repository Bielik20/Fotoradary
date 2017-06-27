




/*
     FILE ARCHIVED ON 2:16:34 sie 21, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:09:12 lut 24, 2016.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*!
 * jQuery JavaScript Library v1.4.2
 * /web/20150821021634/http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * /web/20150821021634/http://jquery.org/license
 *
 * Includes Sizzle.js
 * /web/20150821021634/http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);

var $j = jQuery.noConflict();


/*
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: /web/20150821021634/http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.99 (12-MAR-2011)
 * Dual licensed under the MIT and GPL licenses.
 * /web/20150821021634/http://jquery.malsup.com/license.html
 * Requires: jQuery v1.3.2 or later
 */
(function($){var ver="2.99";if($.support==undefined){$.support={opacity:!($.browser.msie)};}function debug(s){$.fn.cycle.debug&&log(s);}function log(){window.console&&console.log&&console.log("[cycle] "+Array.prototype.join.call(arguments," "));}$.expr[":"].paused=function(el){return el.cyclePause;};$.fn.cycle=function(options,arg2){var o={s:this.selector,c:this.context};if(this.length===0&&options!="stop"){if(!$.isReady&&o.s){log("DOM not ready, queuing slideshow");$j(function(){$j(o.s,o.c).cycle(options,arg2);});return this;}log("terminating; zero elements found by selector"+($.isReady?"":" (DOM not ready)"));return this;}return this.each(function(){var opts=handleArguments(this,options,arg2);if(opts===false){return;}opts.updateActivePagerLink=opts.updateActivePagerLink||$.fn.cycle.updateActivePagerLink;if(this.cycleTimeout){clearTimeout(this.cycleTimeout);}this.cycleTimeout=this.cyclePause=0;var $cont=$j(this);var $slides=opts.slideExpr?$j(opts.slideExpr,this):$cont.children();var els=$slides.get();if(els.length<2){log("terminating; too few slides: "+els.length);return;}var opts2=buildOptions($cont,$slides,els,opts,o);if(opts2===false){return;}var startTime=opts2.continuous?10:getTimeout(els[opts2.currSlide],els[opts2.nextSlide],opts2,!opts2.backwards);if(startTime){startTime+=(opts2.delay||0);if(startTime<10){startTime=10;}debug("first timeout: "+startTime);this.cycleTimeout=setTimeout(function(){go(els,opts2,0,!opts.backwards);},startTime);}});};function handleArguments(cont,options,arg2){if(cont.cycleStop==undefined){cont.cycleStop=0;}if(options===undefined||options===null){options={};}if(options.constructor==String){switch(options){case"destroy":case"stop":var opts=$j(cont).data("cycle.opts");if(!opts){return false;}cont.cycleStop++;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);}cont.cycleTimeout=0;$j(cont).removeData("cycle.opts");if(options=="destroy"){destroy(opts);}return false;case"toggle":cont.cyclePause=(cont.cyclePause===1)?0:1;checkInstantResume(cont.cyclePause,arg2,cont);return false;case"pause":cont.cyclePause=1;return false;case"resume":cont.cyclePause=0;checkInstantResume(false,arg2,cont);return false;case"prev":case"next":var opts=$j(cont).data("cycle.opts");if(!opts){log('options not found, "prev/next" ignored');return false;}$.fn.cycle[options](opts);return false;default:options={fx:options};}return options;}else{if(options.constructor==Number){var num=options;options=$j(cont).data("cycle.opts");if(!options){log("options not found, can not advance slide");return false;}if(num<0||num>=options.elements.length){log("invalid slide index: "+num);return false;}options.nextSlide=num;if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}if(typeof arg2=="string"){options.oneTimeFx=arg2;}go(options.elements,options,1,num>=options.currSlide);return false;}}return options;function checkInstantResume(isPaused,arg2,cont){if(!isPaused&&arg2===true){var options=$j(cont).data("cycle.opts");if(!options){log("options not found, can not resume");return false;}if(cont.cycleTimeout){clearTimeout(cont.cycleTimeout);cont.cycleTimeout=0;}go(options.elements,options,1,!options.backwards);}}}function removeFilter(el,opts){if(!$.support.opacity&&opts.cleartype&&el.style.filter){try{el.style.removeAttribute("filter");}catch(smother){}}}function destroy(opts){if(opts.next){$j(opts.next).unbind(opts.prevNextEvent);}if(opts.prev){$j(opts.prev).unbind(opts.prevNextEvent);}if(opts.pager||opts.pagerAnchorBuilder){$.each(opts.pagerAnchors||[],function(){this.unbind().remove();});}opts.pagerAnchors=null;if(opts.destroy){opts.destroy(opts);}}function buildOptions($cont,$slides,els,options,o){var opts=$.extend({},$.fn.cycle.defaults,options||{},$.metadata?$cont.metadata():$.meta?$cont.data():{});if(opts.autostop){opts.countdown=opts.autostopCount||els.length;}var cont=$cont[0];$cont.data("cycle.opts",opts);opts.$cont=$cont;opts.stopCount=cont.cycleStop;opts.elements=els;opts.before=opts.before?[opts.before]:[];opts.after=opts.after?[opts.after]:[];if(!$.support.opacity&&opts.cleartype){opts.after.push(function(){removeFilter(this,opts);});}if(opts.continuous){opts.after.push(function(){go(els,opts,0,!opts.backwards);});}saveOriginalOpts(opts);if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($slides);}if($cont.css("position")=="static"){$cont.css("position","relative");}if(opts.width){$cont.width(opts.width);}if(opts.height&&opts.height!="auto"){$cont.height(opts.height);}if(opts.startingSlide){opts.startingSlide=parseInt(opts.startingSlide);}else{if(opts.backwards){opts.startingSlide=els.length-1;}}if(opts.random){opts.randomMap=[];for(var i=0;i<els.length;i++){opts.randomMap.push(i);}opts.randomMap.sort(function(a,b){return Math.random()-0.5;});opts.randomIndex=1;opts.startingSlide=opts.randomMap[1];}else{if(opts.startingSlide>=els.length){opts.startingSlide=0;}}opts.currSlide=opts.startingSlide||0;var first=opts.startingSlide;$slides.css({position:"absolute",top:0,left:0}).hide().each(function(i){var z;if(opts.backwards){z=first?i<=first?els.length+(i-first):first-i:els.length-i;}else{z=first?i>=first?els.length-(i-first):first-i:els.length-i;}$j(this).css("z-index",z);});$j(els[first]).css("opacity",1).show();removeFilter(els[first],opts);if(opts.fit&&opts.width){$slides.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$slides.height(opts.height);}var reshape=opts.containerResize&&!$cont.innerHeight();if(reshape){var maxw=0,maxh=0;for(var j=0;j<els.length;j++){var $e=$j(els[j]),e=$e[0],w=$e.outerWidth(),h=$e.outerHeight();if(!w){w=e.offsetWidth||e.width||$e.attr("width");}if(!h){h=e.offsetHeight||e.height||$e.attr("height");}maxw=w>maxw?w:maxw;maxh=h>maxh?h:maxh;}if(maxw>0&&maxh>0){$cont.css({width:maxw+"px",height:maxh+"px"});}}if(opts.pause){$cont.hover(function(){this.cyclePause++;},function(){this.cyclePause--;});}if(supportMultiTransitions(opts)===false){return false;}var requeue=false;options.requeueAttempts=options.requeueAttempts||0;$slides.each(function(){var $el=$j(this);this.cycleH=(opts.fit&&opts.height)?opts.height:($el.height()||this.offsetHeight||this.height||$el.attr("height")||0);this.cycleW=(opts.fit&&opts.width)?opts.width:($el.width()||this.offsetWidth||this.width||$el.attr("width")||0);if($el.is("img")){var loadingIE=($.browser.msie&&this.cycleW==28&&this.cycleH==30&&!this.complete);var loadingFF=($.browser.mozilla&&this.cycleW==34&&this.cycleH==19&&!this.complete);var loadingOp=($.browser.opera&&((this.cycleW==42&&this.cycleH==19)||(this.cycleW==37&&this.cycleH==17))&&!this.complete);var loadingOther=(this.cycleH==0&&this.cycleW==0&&!this.complete);if(loadingIE||loadingFF||loadingOp||loadingOther){if(o.s&&opts.requeueOnImageNotLoaded&&++options.requeueAttempts<100){log(options.requeueAttempts," - img slide not loaded, requeuing slideshow: ",this.src,this.cycleW,this.cycleH);setTimeout(function(){$j(o.s,o.c).cycle(options);},opts.requeueTimeout);requeue=true;return false;}else{log("could not determine size of image: "+this.src,this.cycleW,this.cycleH);}}}return true;});if(requeue){return false;}opts.cssBefore=opts.cssBefore||{};opts.cssAfter=opts.cssAfter||{};opts.cssFirst=opts.cssFirst||{};opts.animIn=opts.animIn||{};opts.animOut=opts.animOut||{};$slides.not(":eq("+first+")").css(opts.cssBefore);$j($slides[first]).css(opts.cssFirst);if(opts.timeout){opts.timeout=parseInt(opts.timeout);if(opts.speed.constructor==String){opts.speed=$.fx.speeds[opts.speed]||parseInt(opts.speed);}if(!opts.sync){opts.speed=opts.speed/2;}var buffer=opts.fx=="none"?0:opts.fx=="shuffle"?500:250;while((opts.timeout-opts.speed)<buffer){opts.timeout+=opts.speed;}}if(opts.easing){opts.easeIn=opts.easeOut=opts.easing;}if(!opts.speedIn){opts.speedIn=opts.speed;}if(!opts.speedOut){opts.speedOut=opts.speed;}opts.slideCount=els.length;opts.currSlide=opts.lastSlide=first;if(opts.random){if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.backwards){opts.nextSlide=opts.startingSlide==0?(els.length-1):opts.startingSlide-1;}else{opts.nextSlide=opts.startingSlide>=(els.length-1)?0:opts.startingSlide+1;}}if(!opts.multiFx){var init=$.fn.cycle.transitions[opts.fx];if($.isFunction(init)){init($cont,$slides,opts);}else{if(opts.fx!="custom"&&!opts.multiFx){log("unknown transition: "+opts.fx,"; slideshow terminating");return false;}}}var e0=$slides[first];if(opts.before.length){opts.before[0].apply(e0,[e0,e0,opts,true]);}if(opts.after.length){opts.after[0].apply(e0,[e0,e0,opts,true]);}if(opts.next){$j(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,1);});}if(opts.prev){$j(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,0);});}if(opts.pager||opts.pagerAnchorBuilder){buildPager(els,opts);}exposeAddSlide(opts,els);return opts;}function saveOriginalOpts(opts){opts.original={before:[],after:[]};opts.original.cssBefore=$.extend({},opts.cssBefore);opts.original.cssAfter=$.extend({},opts.cssAfter);opts.original.animIn=$.extend({},opts.animIn);opts.original.animOut=$.extend({},opts.animOut);$.each(opts.before,function(){opts.original.before.push(this);});$.each(opts.after,function(){opts.original.after.push(this);});}function supportMultiTransitions(opts){var i,tx,txs=$.fn.cycle.transitions;if(opts.fx.indexOf(",")>0){opts.multiFx=true;opts.fxs=opts.fx.replace(/\s*/g,"").split(",");for(i=0;i<opts.fxs.length;i++){var fx=opts.fxs[i];tx=txs[fx];if(!tx||!txs.hasOwnProperty(fx)||!$.isFunction(tx)){log("discarding unknown transition: ",fx);opts.fxs.splice(i,1);i--;}}if(!opts.fxs.length){log("No valid transitions named; slideshow terminating.");return false;}}else{if(opts.fx=="all"){opts.multiFx=true;opts.fxs=[];for(p in txs){tx=txs[p];if(txs.hasOwnProperty(p)&&$.isFunction(tx)){opts.fxs.push(p);}}}}if(opts.multiFx&&opts.randomizeEffects){var r1=Math.floor(Math.random()*20)+30;for(i=0;i<r1;i++){var r2=Math.floor(Math.random()*opts.fxs.length);opts.fxs.push(opts.fxs.splice(r2,1)[0]);}debug("randomized fx sequence: ",opts.fxs);}return true;}function exposeAddSlide(opts,els){opts.addSlide=function(newSlide,prepend){var $s=$j(newSlide),s=$s[0];if(!opts.autostopCount){opts.countdown++;}els[prepend?"unshift":"push"](s);if(opts.els){opts.els[prepend?"unshift":"push"](s);}opts.slideCount=els.length;$s.css("position","absolute");$s[prepend?"prependTo":"appendTo"](opts.$cont);if(prepend){opts.currSlide++;opts.nextSlide++;}if(!$.support.opacity&&opts.cleartype&&!opts.cleartypeNoBg){clearTypeFix($s);}if(opts.fit&&opts.width){$s.width(opts.width);}if(opts.fit&&opts.height&&opts.height!="auto"){$s.height(opts.height);}s.cycleH=(opts.fit&&opts.height)?opts.height:$s.height();s.cycleW=(opts.fit&&opts.width)?opts.width:$s.width();$s.css(opts.cssBefore);if(opts.pager||opts.pagerAnchorBuilder){$.fn.cycle.createPagerAnchor(els.length-1,s,$j(opts.pager),els,opts);}if($.isFunction(opts.onAddSlide)){opts.onAddSlide($s);}else{$s.hide();}};}$.fn.cycle.resetState=function(opts,fx){fx=fx||opts.fx;opts.before=[];opts.after=[];opts.cssBefore=$.extend({},opts.original.cssBefore);opts.cssAfter=$.extend({},opts.original.cssAfter);opts.animIn=$.extend({},opts.original.animIn);opts.animOut=$.extend({},opts.original.animOut);opts.fxFn=null;$.each(opts.original.before,function(){opts.before.push(this);});$.each(opts.original.after,function(){opts.after.push(this);});var init=$.fn.cycle.transitions[fx];if($.isFunction(init)){init(opts.$cont,$j(opts.elements),opts);}};function go(els,opts,manual,fwd){if(manual&&opts.busy&&opts.manualTrump){debug("manualTrump in go(), stopping active transition");$j(els).stop(true,true);opts.busy=0;}if(opts.busy){debug("transition active, ignoring new tx request");return;}var p=opts.$cont[0],curr=els[opts.currSlide],next=els[opts.nextSlide];if(p.cycleStop!=opts.stopCount||p.cycleTimeout===0&&!manual){return;}if(!manual&&!p.cyclePause&&!opts.bounce&&((opts.autostop&&(--opts.countdown<=0))||(opts.nowrap&&!opts.random&&opts.nextSlide<opts.currSlide))){if(opts.end){opts.end(opts);}return;}var changed=false;if((manual||!p.cyclePause)&&(opts.nextSlide!=opts.currSlide)){changed=true;var fx=opts.fx;curr.cycleH=curr.cycleH||$j(curr).height();curr.cycleW=curr.cycleW||$j(curr).width();next.cycleH=next.cycleH||$j(next).height();next.cycleW=next.cycleW||$j(next).width();if(opts.multiFx){if(opts.lastFx==undefined||++opts.lastFx>=opts.fxs.length){opts.lastFx=0;}fx=opts.fxs[opts.lastFx];opts.currFx=fx;}if(opts.oneTimeFx){fx=opts.oneTimeFx;opts.oneTimeFx=null;}$.fn.cycle.resetState(opts,fx);if(opts.before.length){$.each(opts.before,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});}var after=function(){opts.busy=0;$.each(opts.after,function(i,o){if(p.cycleStop!=opts.stopCount){return;}o.apply(next,[curr,next,opts,fwd]);});};debug("tx firing("+fx+"); currSlide: "+opts.currSlide+"; nextSlide: "+opts.nextSlide);opts.busy=1;if(opts.fxFn){opts.fxFn(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}else{if($.isFunction($.fn.cycle[opts.fx])){$.fn.cycle[opts.fx](curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}else{$.fn.cycle.custom(curr,next,opts,after,fwd,manual&&opts.fastOnEvent);}}}if(changed||opts.nextSlide==opts.currSlide){opts.lastSlide=opts.currSlide;if(opts.random){opts.currSlide=opts.nextSlide;if(++opts.randomIndex==els.length){opts.randomIndex=0;}opts.nextSlide=opts.randomMap[opts.randomIndex];if(opts.nextSlide==opts.currSlide){opts.nextSlide=(opts.currSlide==opts.slideCount-1)?0:opts.currSlide+1;}}else{if(opts.backwards){var roll=(opts.nextSlide-1)<0;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=1;opts.currSlide=0;}else{opts.nextSlide=roll?(els.length-1):opts.nextSlide-1;opts.currSlide=roll?0:opts.nextSlide+1;}}else{var roll=(opts.nextSlide+1)==els.length;if(roll&&opts.bounce){opts.backwards=!opts.backwards;opts.nextSlide=els.length-2;opts.currSlide=els.length-1;}else{opts.nextSlide=roll?0:opts.nextSlide+1;opts.currSlide=roll?els.length-1:opts.nextSlide-1;}}}}if(changed&&opts.pager){opts.updateActivePagerLink(opts.pager,opts.currSlide,opts.activePagerClass);}var ms=0;if(opts.timeout&&!opts.continuous){ms=getTimeout(els[opts.currSlide],els[opts.nextSlide],opts,fwd);}else{if(opts.continuous&&p.cyclePause){ms=10;}}if(ms>0){p.cycleTimeout=setTimeout(function(){go(els,opts,0,!opts.backwards);},ms);}}$.fn.cycle.updateActivePagerLink=function(pager,currSlide,clsName){$j(pager).each(function(){$j(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);});};function getTimeout(curr,next,opts,fwd){if(opts.timeoutFn){var t=opts.timeoutFn.call(curr,curr,next,opts,fwd);while(opts.fx!="none"&&(t-opts.speed)<250){t+=opts.speed;}debug("calculated timeout: "+t+"; speed: "+opts.speed);if(t!==false){return t;}}return opts.timeout;}$.fn.cycle.next=function(opts){advance(opts,1);};$.fn.cycle.prev=function(opts){advance(opts,0);};function advance(opts,moveForward){var val=moveForward?1:-1;var els=opts.elements;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}if(opts.random&&val<0){opts.randomIndex--;if(--opts.randomIndex==-2){opts.randomIndex=els.length-2;}else{if(opts.randomIndex==-1){opts.randomIndex=els.length-1;}}opts.nextSlide=opts.randomMap[opts.randomIndex];}else{if(opts.random){opts.nextSlide=opts.randomMap[opts.randomIndex];}else{opts.nextSlide=opts.currSlide+val;if(opts.nextSlide<0){if(opts.nowrap){return false;}opts.nextSlide=els.length-1;}else{if(opts.nextSlide>=els.length){if(opts.nowrap){return false;}opts.nextSlide=0;}}}}var cb=opts.onPrevNextEvent||opts.prevNextClick;if($.isFunction(cb)){cb(val>0,opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,moveForward);return false;}function buildPager(els,opts){var $p=$j(opts.pager);$.each(els,function(i,o){$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);});opts.updateActivePagerLink(opts.pager,opts.startingSlide,opts.activePagerClass);}$.fn.cycle.createPagerAnchor=function(i,el,$p,els,opts){var a;if($.isFunction(opts.pagerAnchorBuilder)){a=opts.pagerAnchorBuilder(i,el);debug("pagerAnchorBuilder("+i+", el) returned: "+a);}else{a='<a href="#">'+(i+1)+"</a>";}if(!a){return;}var $a=$j(a);if($a.parents("body").length===0){var arr=[];if($p.length>1){$p.each(function(){var $clone=$a.clone(true);$j(this).append($clone);arr.push($clone[0]);});$a=$j(arr);}else{$a.appendTo($p);}}opts.pagerAnchors=opts.pagerAnchors||[];opts.pagerAnchors.push($a);$a.bind(opts.pagerEvent,function(e){e.preventDefault();opts.nextSlide=i;var p=opts.$cont[0],timeout=p.cycleTimeout;if(timeout){clearTimeout(timeout);p.cycleTimeout=0;}var cb=opts.onPagerEvent||opts.pagerClick;if($.isFunction(cb)){cb(opts.nextSlide,els[opts.nextSlide]);}go(els,opts,1,opts.currSlide<i);});if(!/^click/.test(opts.pagerEvent)&&!opts.allowPagerClickBubble){$a.bind("click.cycle",function(){return false;});}if(opts.pauseOnPagerHover){$a.hover(function(){opts.$cont[0].cyclePause++;},function(){opts.$cont[0].cyclePause--;});}};$.fn.cycle.hopsFromLast=function(opts,fwd){var hops,l=opts.lastSlide,c=opts.currSlide;if(fwd){hops=c>l?c-l:opts.slideCount-l;}else{hops=c<l?l-c:l+opts.slideCount-c;}return hops;};function clearTypeFix($slides){debug("applying clearType background-color hack");function hex(s){s=parseInt(s).toString(16);return s.length<2?"0"+s:s;}function getBg(e){for(;e&&e.nodeName.toLowerCase()!="html";e=e.parentNode){var v=$.css(e,"background-color");if(v&&v.indexOf("rgb")>=0){var rgb=v.match(/\d+/g);return"#"+hex(rgb[0])+hex(rgb[1])+hex(rgb[2]);}if(v&&v!="transparent"){return v;}}return"#ffffff";}$slides.each(function(){$j(this).css("background-color",getBg(this));});}$.fn.cycle.commonReset=function(curr,next,opts,w,h,rev){$j(opts.elements).not(curr).hide();if(typeof opts.cssBefore.opacity=="undefined"){opts.cssBefore.opacity=1;}opts.cssBefore.display="block";if(opts.slideResize&&w!==false&&next.cycleW>0){opts.cssBefore.width=next.cycleW;}if(opts.slideResize&&h!==false&&next.cycleH>0){opts.cssBefore.height=next.cycleH;}opts.cssAfter=opts.cssAfter||{};opts.cssAfter.display="none";$j(curr).css("zIndex",opts.slideCount+(rev===true?1:0));$j(next).css("zIndex",opts.slideCount+(rev===true?0:1));};$.fn.cycle.custom=function(curr,next,opts,cb,fwd,speedOverride){var $l=$j(curr),$n=$j(next);var speedIn=opts.speedIn,speedOut=opts.speedOut,easeIn=opts.easeIn,easeOut=opts.easeOut;$n.css(opts.cssBefore);if(speedOverride){if(typeof speedOverride=="number"){speedIn=speedOut=speedOverride;}else{speedIn=speedOut=1;}easeIn=easeOut=null;}var fn=function(){$n.animate(opts.animIn,speedIn,easeIn,function(){cb();});};$l.animate(opts.animOut,speedOut,easeOut,function(){$l.css(opts.cssAfter);if(!opts.sync){fn();}});if(opts.sync){fn();}};$.fn.cycle.transitions={fade:function($cont,$slides,opts){$slides.not(":eq("+opts.currSlide+")").css("opacity",0);opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.opacity=0;});opts.animIn={opacity:1};opts.animOut={opacity:0};opts.cssBefore={top:0,left:0};}};$.fn.cycle.ver=function(){return ver;};$.fn.cycle.defaults={activePagerClass:"activeSlide",after:null,allowPagerClickBubble:false,animIn:null,animOut:null,autostop:0,autostopCount:0,backwards:false,before:null,cleartype:!$.support.opacity,cleartypeNoBg:false,containerResize:1,continuous:0,cssAfter:null,cssBefore:null,delay:0,easeIn:null,easeOut:null,easing:null,end:null,fastOnEvent:0,fit:0,fx:"fade",fxFn:null,height:"auto",manualTrump:true,next:null,nowrap:0,onPagerEvent:null,onPrevNextEvent:null,pager:null,pagerAnchorBuilder:null,pagerEvent:"click.cycle",pause:0,pauseOnPagerHover:0,prev:null,prevNextEvent:"click.cycle",random:0,randomizeEffects:1,requeueOnImageNotLoaded:true,requeueTimeout:250,rev:0,shuffle:null,slideExpr:null,slideResize:1,speed:1000,speedIn:null,speedOut:null,startingSlide:0,sync:1,timeout:4000,timeoutFn:null,updateActivePagerLink:null};})(jQuery);
/*
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: /web/20150821021634/http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.73
 * Dual licensed under the MIT and GPL licenses:
 * /web/20150821021634/http://www.opensource.org/licenses/mit-license.php
 * /web/20150821021634/http://www.gnu.org/licenses/gpl.html
 */
(function($){$.fn.cycle.transitions.none=function($cont,$slides,opts){opts.fxFn=function(curr,next,opts,after){$j(next).show();$j(curr).hide();after();};};$.fn.cycle.transitions.fadeout=function($cont,$slides,opts){$slides.not(":eq("+opts.currSlide+")").css({display:"block",opacity:1});opts.before.push(function(curr,next,opts,w,h,rev){$j(curr).css("zIndex",opts.slideCount+(!rev===true?1:0));$j(next).css("zIndex",opts.slideCount+(!rev===true?0:1));});opts.animIn.opacity=1;opts.animOut.opacity=0;opts.cssBefore.opacity=1;opts.cssBefore.display="block";opts.cssAfter.zIndex=0;};$.fn.cycle.transitions.scrollUp=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssBefore.top=h;opts.cssBefore.left=0;opts.cssFirst.top=0;opts.animIn.top=0;opts.animOut.top=-h;};$.fn.cycle.transitions.scrollDown=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var h=$cont.height();opts.cssFirst.top=0;opts.cssBefore.top=-h;opts.cssBefore.left=0;opts.animIn.top=0;opts.animOut.top=h;};$.fn.cycle.transitions.scrollLeft=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst.left=0;opts.cssBefore.left=w;opts.cssBefore.top=0;opts.animIn.left=0;opts.animOut.left=0-w;};$.fn.cycle.transitions.scrollRight=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push($.fn.cycle.commonReset);var w=$cont.width();opts.cssFirst.left=0;opts.cssBefore.left=-w;opts.cssBefore.top=0;opts.animIn.left=0;opts.animOut.left=w;};$.fn.cycle.transitions.scrollHorz=function($cont,$slides,opts){$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts,fwd){if(opts.rev){fwd=!fwd;}$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.left=fwd?(next.cycleW-1):(1-next.cycleW);opts.animOut.left=fwd?-curr.cycleW:curr.cycleW;});opts.cssFirst.left=0;opts.cssBefore.top=0;opts.animIn.left=0;opts.animOut.top=0;};$.fn.cycle.transitions.scrollVert=function($cont,$slides,opts){$cont.css("overflow","hidden");opts.before.push(function(curr,next,opts,fwd){if(opts.rev){fwd=!fwd;}$.fn.cycle.commonReset(curr,next,opts);opts.cssBefore.top=fwd?(1-next.cycleH):(next.cycleH-1);opts.animOut.top=fwd?curr.cycleH:-curr.cycleH;});opts.cssFirst.top=0;opts.cssBefore.left=0;opts.animIn.top=0;opts.animOut.left=0;};$.fn.cycle.transitions.slideX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$j(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;});opts.cssBefore.left=0;opts.cssBefore.top=0;opts.cssBefore.width=0;opts.animIn.width="show";opts.animOut.width=0;};$.fn.cycle.transitions.slideY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$j(opts.elements).not(curr).hide();$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;});opts.cssBefore.left=0;opts.cssBefore.top=0;opts.cssBefore.height=0;opts.animIn.height="show";opts.animOut.height=0;};$.fn.cycle.transitions.shuffle=function($cont,$slides,opts){var i,w=$cont.css("overflow","visible").width();$slides.css({left:0,top:0});opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);});if(!opts.speedAdjusted){opts.speed=opts.speed/2;opts.speedAdjusted=true;}opts.random=0;opts.shuffle=opts.shuffle||{left:-w,top:15};opts.els=[];for(i=0;i<$slides.length;i++){opts.els.push($slides[i]);}for(i=0;i<opts.currSlide;i++){opts.els.push(opts.els.shift());}opts.fxFn=function(curr,next,opts,cb,fwd){if(opts.rev){fwd=!fwd;}var $el=fwd?$j(curr):$j(next);$j(next).css(opts.cssBefore);var count=opts.slideCount;$el.animate(opts.shuffle,opts.speedIn,opts.easeIn,function(){var hops=$.fn.cycle.hopsFromLast(opts,fwd);for(var k=0;k<hops;k++){fwd?opts.els.push(opts.els.shift()):opts.els.unshift(opts.els.pop());}if(fwd){for(var i=0,len=opts.els.length;i<len;i++){$j(opts.els[i]).css("z-index",len-i+count);}}else{var z=$j(curr).css("z-index");$el.css("z-index",parseInt(z)+1+count);}$el.animate({left:0,top:0},opts.speedOut,opts.easeOut,function(){$j(fwd?this:curr).hide();if(cb){cb();}});});};$.extend(opts.cssBefore,{display:"block",opacity:1,top:0,left:0});};$.fn.cycle.transitions.turnUp=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=next.cycleH;opts.animIn.height=next.cycleH;opts.animOut.width=next.cycleW;});opts.cssFirst.top=0;opts.cssBefore.left=0;opts.cssBefore.height=0;opts.animIn.top=0;opts.animOut.height=0;};$.fn.cycle.transitions.turnDown=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssFirst.top=0;opts.cssBefore.left=0;opts.cssBefore.top=0;opts.cssBefore.height=0;opts.animOut.height=0;};$.fn.cycle.transitions.turnLeft=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=next.cycleW;opts.animIn.width=next.cycleW;});opts.cssBefore.top=0;opts.cssBefore.width=0;opts.animIn.left=0;opts.animOut.width=0;};$.fn.cycle.transitions.turnRight=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});$.extend(opts.cssBefore,{top:0,left:0,width:0});opts.animIn.left=0;opts.animOut.width=0;};$.fn.cycle.transitions.zoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false,true);opts.cssBefore.top=next.cycleH/2;opts.cssBefore.left=next.cycleW/2;$.extend(opts.animIn,{top:0,left:0,width:next.cycleW,height:next.cycleH});$.extend(opts.animOut,{width:0,height:0,top:curr.cycleH/2,left:curr.cycleW/2});});opts.cssFirst.top=0;opts.cssFirst.left=0;opts.cssBefore.width=0;opts.cssBefore.height=0;};$.fn.cycle.transitions.fadeZoom=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,false);opts.cssBefore.left=next.cycleW/2;opts.cssBefore.top=next.cycleH/2;$.extend(opts.animIn,{top:0,left:0,width:next.cycleW,height:next.cycleH});});opts.cssBefore.width=0;opts.cssBefore.height=0;opts.animOut.opacity=0;};$.fn.cycle.transitions.blindX=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.width=next.cycleW;opts.animOut.left=curr.cycleW;});opts.cssBefore.left=w;opts.cssBefore.top=0;opts.animIn.left=0;opts.animOut.left=w;};$.fn.cycle.transitions.blindY=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore.top=h;opts.cssBefore.left=0;opts.animIn.top=0;opts.animOut.top=h;};$.fn.cycle.transitions.blindZ=function($cont,$slides,opts){var h=$cont.css("overflow","hidden").height();var w=$cont.width();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH;});opts.cssBefore.top=h;opts.cssBefore.left=w;opts.animIn.top=0;opts.animIn.left=0;opts.animOut.top=h;opts.animOut.left=w;};$.fn.cycle.transitions.growX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true);opts.cssBefore.left=this.cycleW/2;opts.animIn.left=0;opts.animIn.width=this.cycleW;opts.animOut.left=0;});opts.cssBefore.top=0;opts.cssBefore.width=0;};$.fn.cycle.transitions.growY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false);opts.cssBefore.top=this.cycleH/2;opts.animIn.top=0;opts.animIn.height=this.cycleH;opts.animOut.top=0;});opts.cssBefore.height=0;opts.cssBefore.left=0;};$.fn.cycle.transitions.curtainX=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,false,true,true);opts.cssBefore.left=next.cycleW/2;opts.animIn.left=0;opts.animIn.width=this.cycleW;opts.animOut.left=curr.cycleW/2;opts.animOut.width=0;});opts.cssBefore.top=0;opts.cssBefore.width=0;};$.fn.cycle.transitions.curtainY=function($cont,$slides,opts){opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,false,true);opts.cssBefore.top=next.cycleH/2;opts.animIn.top=0;opts.animIn.height=next.cycleH;opts.animOut.top=curr.cycleH/2;opts.animOut.height=0;});opts.cssBefore.height=0;opts.cssBefore.left=0;};$.fn.cycle.transitions.cover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts);if(d=="right"){opts.cssBefore.left=-w;}else{if(d=="up"){opts.cssBefore.top=h;}else{if(d=="down"){opts.cssBefore.top=-h;}else{opts.cssBefore.left=w;}}}});opts.animIn.left=0;opts.animIn.top=0;opts.cssBefore.top=0;opts.cssBefore.left=0;};$.fn.cycle.transitions.uncover=function($cont,$slides,opts){var d=opts.direction||"left";var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(d=="right"){opts.animOut.left=w;}else{if(d=="up"){opts.animOut.top=-h;}else{if(d=="down"){opts.animOut.top=h;}else{opts.animOut.left=-w;}}}});opts.animIn.left=0;opts.animIn.top=0;opts.cssBefore.top=0;opts.cssBefore.left=0;};$.fn.cycle.transitions.toss=function($cont,$slides,opts){var w=$cont.css("overflow","visible").width();var h=$cont.height();opts.before.push(function(curr,next,opts){$.fn.cycle.commonReset(curr,next,opts,true,true,true);if(!opts.animOut.left&&!opts.animOut.top){$.extend(opts.animOut,{left:w*2,top:-h/2,opacity:0});}else{opts.animOut.opacity=0;}});opts.cssBefore.left=0;opts.cssBefore.top=0;opts.animIn.left=0;};$.fn.cycle.transitions.wipe=function($cont,$slides,opts){var w=$cont.css("overflow","hidden").width();var h=$cont.height();opts.cssBefore=opts.cssBefore||{};var clip;if(opts.clip){if(/l2r/.test(opts.clip)){clip="rect(0px 0px "+h+"px 0px)";}else{if(/r2l/.test(opts.clip)){clip="rect(0px "+w+"px "+h+"px "+w+"px)";}else{if(/t2b/.test(opts.clip)){clip="rect(0px "+w+"px 0px 0px)";}else{if(/b2t/.test(opts.clip)){clip="rect("+h+"px "+w+"px "+h+"px 0px)";}else{if(/zoom/.test(opts.clip)){var top=parseInt(h/2);var left=parseInt(w/2);clip="rect("+top+"px "+left+"px "+top+"px "+left+"px)";}}}}}}opts.cssBefore.clip=opts.cssBefore.clip||clip||"rect(0px 0px 0px 0px)";var d=opts.cssBefore.clip.match(/(\d+)/g);var t=parseInt(d[0]),r=parseInt(d[1]),b=parseInt(d[2]),l=parseInt(d[3]);opts.before.push(function(curr,next,opts){if(curr==next){return;}var $curr=$j(curr),$next=$j(next);$.fn.cycle.commonReset(curr,next,opts,true,true,false);opts.cssAfter.display="block";var step=1,count=parseInt((opts.speedIn/13))-1;(function f(){var tt=t?t-parseInt(step*(t/count)):0;var ll=l?l-parseInt(step*(l/count)):0;var bb=b<h?b+parseInt(step*((h-b)/count||1)):h;var rr=r<w?r+parseInt(step*((w-r)/count||1)):w;$next.css({clip:"rect("+tt+"px "+rr+"px "+bb+"px "+ll+"px)"});(step++<=count)?setTimeout(f,13):$curr.css("display","none");})();});$.extend(opts.cssBefore,{display:"block",opacity:1,top:0,left:0});opts.animIn={left:0};opts.animOut={left:0};};})(jQuery);

(function(d){d.fn.oembed=function(l,k,j){b=d.extend(true,d.fn.oembed.defaults,k);g();return this.each(function(){var m=d(this),n=(l!=null)?l:m.attr("href"),o;if(j){b.onEmbed=j}else{b.onEmbed=function(p){d.fn.oembed.insertCode(this,b.embedMethod,p)}}if(n!=null){o=d.fn.oembed.getOEmbedProvider(n);if(o!=null){o.params=h(b[o.name])||{};o.maxWidth=b.maxWidth;o.maxHeight=b.maxHeight;a(m,n,o)}else{b.onProviderNotFound.call(m,n)}}return m})};var b,e=[];d.fn.oembed.defaults={maxWidth:null,maxHeight:null,embedMethod:"replace",defaultOEmbedProvider:"oohembed",allowedProviders:null,disallowedProviders:null,customProviders:null,defaultProvider:null,greedy:true,onProviderNotFound:function(){},beforeEmbed:function(){},afterEmbed:function(){},onEmbed:function(){},onError:function(){},ajaxOptions:{}};function i(o,n){var k=o.apiendpoint,j="",m=o.callbackparameter||"callback",l;if(k.indexOf("?")<=0){k=k+"?"}else{k=k+"&"}if(o.maxWidth!=null&&o.params.maxwidth==null){o.params.maxwidth=o.maxWidth}if(o.maxHeight!=null&&o.params.maxheight==null){o.params.maxheight=o.maxHeight}for(l in o.params){if(l==o.callbackparameter){continue}if(o.params[l]!=null){j+="&"+escape(l)+"="+o.params[l]}}k+="format=json&url="+escape(n)+j+"&"+m+"=?";return k}function a(j,n,l){var m=i(l,n),k=d.extend({url:m,type:"get",dataType:"json",success:function(p){var o=d.extend({},p);switch(o.type){case"photo":o.code=d.fn.oembed.getPhotoCode(n,o);break;case"video":o.code=d.fn.oembed.getVideoCode(n,o);break;case"rich":o.code=d.fn.oembed.getRichCode(n,o);break;default:o.code=d.fn.oembed.getGenericCode(n,o);break}b.beforeEmbed.call(j,o);b.onEmbed.call(j,o);b.afterEmbed.call(j,o)},error:b.onError.call(j,n,l)},b.ajaxOptions||{});d.ajax(k)}function g(){e=[];var m,j=[],k,l;if(!c(b.allowedProviders)){for(k=0;k<d.fn.oembed.providers.length;k++){if(d.inArray(d.fn.oembed.providers[k].name,b.allowedProviders)>=0){e.push(d.fn.oembed.providers[k])}}b.greedy=false}else{e=d.fn.oembed.providers}if(!c(b.disallowedProviders)){for(k=0;k<e.length;k++){if(d.inArray(e[k].name,b.disallowedProviders)<0){j.push(e[k])}}e=j;b.greedy=false}if(!c(b.customProviders)){d.each(b.customProviders,function(p,o){if(o instanceof d.fn.oembed.OEmbedProvider){e.push(l)}else{l=new d.fn.oembed.OEmbedProvider();if(l.fromJSON(o)){e.push(l)}}})}m=f(b.defaultOEmbedProvider);if(b.greedy==true){e.push(m)}for(k=0;k<e.length;k++){if(e[k].apiendpoint==null){e[k].apiendpoint=m.apiendpoint}}}function f(j){var k="/web/20150821021634/http://oohembed.com/oohembed/";if(j=="embed.ly"){k="/web/20150821021634/http://api.embed.ly/v1/api/oembed?"}return new d.fn.oembed.OEmbedProvider(j,null,null,k,"callback")}function h(l){if(l==null){return null}var j,k={};for(j in l){if(j!=null){k[j.toLowerCase()]=l[j]}}return k}function c(j){if(typeof j=="undefined"){return true}if(j==null){return true}if(d.isArray(j)&&j.length==0){return true}return false}d.fn.oembed.insertCode=function(j,l,k){if(k==null){return}switch(l){case"auto":if(j.attr("href")!=null){d.fn.oembed.insertCode(j,"append",k)}else{d.fn.oembed.insertCode(j,"replace",k)}break;case"replace":j.replaceWith(k.code);break;case"fill":j.html(k.code);break;case"append":var m=j.next();if(m==null||!m.hasClass("oembed-container")){m=j.after('<div class="oembed-container"></div>').next(".oembed-container");if(k!=null&&k.provider_name!=null){m.toggleClass("oembed-container-"+k.provider_name)}}m.html(k.code);break}};d.fn.oembed.getPhotoCode=function(j,k){var l,m=k.title?k.title:"";m+=k.author_name?" - "+k.author_name:"";m+=k.provider_name?" - "+k.provider_name:"";l='<div><a href="'+j+"\" target='_blank'><img src=\""+k.url+'" alt="'+m+'"/></a></div>';if(k.html){l+="<div>"+k.html+"</div>"}return l};d.fn.oembed.getVideoCode=function(j,k){var l=k.html;return l};d.fn.oembed.getRichCode=function(j,k){var l=k.html;return l};d.fn.oembed.getGenericCode=function(j,k){var m=(k.title!=null)?k.title:j,l='<a href="'+j+'">'+m+"</a>";if(k.html){l+="<div>"+k.html+"</div>"}return l};d.fn.oembed.isProviderAvailable=function(j){var k=getOEmbedProvider(j);return(k!=null)};d.fn.oembed.getOEmbedProvider=function(j){for(var k=0;k<e.length;k++){if(e[k].matches(j)){return e[k]}}return null};d.fn.oembed.OEmbedProvider=function(k,p,l,m,n){this.name=k;this.type=p;this.urlschemes=j(l);this.apiendpoint=m;this.callbackparameter=n;this.maxWidth=500;this.maxHeight=400;var o,r,q;this.matches=function(s){for(o=0;o<this.urlschemes.length;o++){q=new RegExp(this.urlschemes[o],"i");if(s.match(q)!=null){return true}}return false};this.fromJSON=function(s){for(r in s){if(r!="urlschemes"){this[r]=s[r]}else{this[r]=j(s[r])}}return true};function j(s){if(c(s)){return["."]}if(d.isArray(s)){return s}return s.split(";")}};d.fn.oembed.providers=[new d.fn.oembed.OEmbedProvider("youtube","video",["youtube\\.com/watch.+v=[\\w-]+&?"]),new d.fn.oembed.OEmbedProvider("flickr","photo",["flickr\\.com/photos/[-.\\w@]+/\\d+/?"],"/web/20150821021634/http://flickr.com/services/oembed","jsoncallback"),new d.fn.oembed.OEmbedProvider("viddler","video",["viddler.com"]),new d.fn.oembed.OEmbedProvider("blip","video",["blip\\.tv/.+"],"/web/20150821021634/http://blip.tv/oembed/"),new d.fn.oembed.OEmbedProvider("hulu","video",["hulu\\.com/watch/.*"],"/web/20150821021634/http://www.hulu.com/api/oembed.json"),new d.fn.oembed.OEmbedProvider("vimeo","video",["/web/20150821021634/http://www.vimeo.com/groups/.*/videos/.*","/web/20150821021634/http://www.vimeo.com/.*","/web/20150821021634/http://vimeo.com/groups/.*/videos/.*","/web/20150821021634/http://vimeo.com/.*"],"/web/20150821021634/http://vimeo.com/api/oembed.json"),new d.fn.oembed.OEmbedProvider("dailymotion","video",["dailymotion\\.com/.+"]),new d.fn.oembed.OEmbedProvider("scribd","rich",["scribd\\.com/.+"]),new d.fn.oembed.OEmbedProvider("slideshare","rich",["slideshare.net"],"/web/20150821021634/http://www.slideshare.net/api/oembed/1"),new d.fn.oembed.OEmbedProvider("photobucket","photo",["photobucket\\.com/(albums|groups)/.*"],"/web/20150821021634/http://photobucket.com/oembed/")]})(jQuery);

/*****************************************************************************/
//jquery.jCarousel.js
/*****************************************************************************/
/*!
 * jCarousel - Riding carousels with jQuery
 *   /web/20150821021634/http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (/web/20150821021634/http://sorgalla.com)
 * Dual licensed under the MIT (/web/20150821021634/http://www.opensource.org/licenses/mit-license.php)
 * and GPL (/web/20150821021634/http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   /web/20150821021634/http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   /web/20150821021634/http://billwscott.com/carousel/
 */

(function($) {
		/**
		 * Creates a carousel for all matched elements.
		 *
		 * @example $("#mycarousel").jcarousel();
		 * @before <ul id="mycarousel" class="jcarousel-skin-name"><li>First item</li><li>Second item</li></ul>
		 * @result
		 *
		 * <div class="jcarousel-skin-name">
		 *   <div class="jcarousel-container">
		 *     <div class="jcarousel-clip">
		 *       <ul class="jcarousel-list">
		 *         <li class="jcarousel-item-1">First item</li>
		 *         <li class="jcarousel-item-2">Second item</li>
		 *       </ul>
		 *     </div>
		 *     <div disabled="disabled" class="jcarousel-prev jcarousel-prev-disabled"></div>
		 *     <div class="jcarousel-next"></div>
		 *   </div>
		 * </div>
		 *
		 * @method jcarousel
		 * @return jQuery
		 * @param o {Hash|String} A set of key/value pairs to set as configuration properties or a method name to call on a formerly created instance.
		 */
		$.fn.jcarousel = function(o) {
				if (typeof o == 'string') {
						var instance = $j(this).data('jcarousel'), args = Array.prototype.slice.call(arguments, 1);
						return instance[o].apply(instance, args);
				} else
						return this.each(function() {
								$j(this).data('jcarousel', new $jc(this, o));
						});
		};

		// Default configuration properties.
		var defaults = {
				vertical: false,
				rtl: false,
				start: 1,
				offset: 1,
				size: null,
				scroll: 3,
				visible: null,
				animation: 'normal',
				easing: 'swing',
				auto: 0,
				wrap: null,
				initCallback: null,
				reloadCallback: null,
				itemLoadCallback: null,
				itemFirstInCallback: null,
				itemFirstOutCallback: null,
				itemLastInCallback: null,
				itemLastOutCallback: null,
				itemVisibleInCallback: null,
				itemVisibleOutCallback: null,
				buttonNextHTML: '<div></div>',
				buttonPrevHTML: '<div></div>',
				buttonNextEvent: 'click',
				buttonPrevEvent: 'click',
				buttonNextCallback: null,
				buttonPrevCallback: null,
				itemFallbackDimension: null
		}, windowLoaded = false;

		$j(window).bind('load.jcarousel', function() { windowLoaded = true; })

		/**
		 * The jCarousel object.
		 *
		 * @constructor
		 * @class jcarousel
		 * @param e {HTMLElement} The element to create the carousel for.
		 * @param o {Object} A set of key/value pairs to set as configuration properties.
		 * @cat Plugins/jCarousel
		 */
		$.jcarousel = function(e, o) {
				this.options    = $.extend({}, defaults, o || {});

				this.locked     = false;

				this.container  = null;
				this.clip       = null;
				this.list       = null;
				this.buttonNext = null;
				this.buttonPrev = null;

				// Only set if not explicitly passed as option
				if (!o || o.rtl === undefined)
						this.options.rtl = ($j(e).attr('dir') || $j('html').attr('dir') || '').toLowerCase() == 'rtl';

				this.wh = !this.options.vertical ? 'width' : 'height';
				this.lt = !this.options.vertical ? (this.options.rtl ? 'right' : 'left') : 'top';

				// Extract skin class
				var skin = '', split = e.className.split(' ');

				for (var i = 0; i < split.length; i++) {
						if (split[i].indexOf('jcarousel-skin') != -1) {
								$j(e).removeClass(split[i]);
								skin = split[i];
								break;
						}
				}

				if (e.nodeName.toUpperCase() == 'UL' || e.nodeName.toUpperCase() == 'OL') {
						this.list = $j(e);
						this.container = this.list.parent();

						if (this.container.hasClass('jcarousel-clip')) {
								if (!this.container.parent().hasClass('jcarousel-container'))
										this.container = this.container.wrap('<div></div>');

								this.container = this.container.parent();
						} else if (!this.container.hasClass('jcarousel-container'))
								this.container = this.list.wrap('<div></div>').parent();
				} else {
						this.container = $j(e);
						this.list = this.container.find('ul,ol').eq(0);
				}

				if (skin != '' && this.container.parent()[0].className.indexOf('jcarousel-skin') == -1)
						this.container.wrap('<div class=" '+ skin + '"></div>');

				this.clip = this.list.parent();

				if (!this.clip.length || !this.clip.hasClass('jcarousel-clip'))
						this.clip = this.list.wrap('<div></div>').parent();

				this.buttonNext = $j('.jcarousel-next', this.container);

				if (this.buttonNext.size() == 0 && this.options.buttonNextHTML != null)
						this.buttonNext = this.clip.after(this.options.buttonNextHTML).next();

				this.buttonNext.addClass(this.className('jcarousel-next'));

				this.buttonPrev = $j('.jcarousel-prev', this.container);

				if (this.buttonPrev.size() == 0 && this.options.buttonPrevHTML != null)
						this.buttonPrev = this.clip.after(this.options.buttonPrevHTML).next();

				this.buttonPrev.addClass(this.className('jcarousel-prev'));

				this.clip.addClass(this.className('jcarousel-clip')).css({
						overflow: 'hidden',
						position: 'relative'
				});
				this.list.addClass(this.className('jcarousel-list')).css({
						overflow: 'hidden',
						position: 'relative',
						top: 0,
						margin: 0,
						padding: 0
				}).css((this.options.rtl ? 'right' : 'left'), 0);
				this.container.addClass(this.className('jcarousel-container')).css({
						position: 'relative'
				});
				if (!this.options.vertical && this.options.rtl)
						this.container.addClass('jcarousel-direction-rtl').attr('dir', 'rtl');

				var di = this.options.visible != null ? Math.ceil(this.clipping() / this.options.visible) : null;
				var li = this.list.children('li');

				var self = this;

				if (li.size() > 0) {
						var wh = 0, i = this.options.offset;
						li.each(function() {
								self.format(this, i++);
								wh += self.dimension(this, di);
						});

						this.list.css(this.wh, (wh + 100) + 'px');

						// Only set if not explicitly passed as option
						if (!o || o.size === undefined)
								this.options.size = li.size();
				}

				// For whatever reason, .show() does not work in Safari...
				this.container.css('display', 'block');
				this.buttonNext.css('display', 'block');
				this.buttonPrev.css('display', 'block');

				this.funcNext   = function() { self.next(); };
				this.funcPrev   = function() { self.prev(); };
				this.funcResize = function() { self.reload(); };

				if (this.options.initCallback != null)
						this.options.initCallback(this, 'init');

				if (!windowLoaded && $.browser.safari) {
						this.buttons(false, false);
						$j(window).bind('load.jcarousel', function() { self.setup(); });
				} else
						this.setup();
		};

		// Create shortcut for internal use
		var $jc = $.jcarousel;

		$jc.fn = $jc.prototype = {
				jcarousel: '0.2.5'
		};

		$jc.fn.extend = $jc.extend = $.extend;

		$jc.fn.extend({
				/**
				 * Setups the carousel.
				 *
				 * @method setup
				 * @return undefined
				 */
				setup: function() {
						this.first     = null;
						this.last      = null;
						this.prevFirst = null;
						this.prevLast  = null;
						this.animating = false;
						this.timer     = null;
						this.tail      = null;
						this.inTail    = false;

						if (this.locked)
								return;

						this.list.css(this.lt, this.pos(this.options.offset) + 'px');
						var p = this.pos(this.options.start);
						this.prevFirst = this.prevLast = null;
						this.animate(p, false);

						$j(window).unbind('resize.jcarousel', this.funcResize).bind('resize.jcarousel', this.funcResize);
				},

				/**
				 * Clears the list and resets the carousel.
				 *
				 * @method reset
				 * @return undefined
				 */
				reset: function() {
						this.list.empty();

						this.list.css(this.lt, '0px');
						this.list.css(this.wh, '10px');

						if (this.options.initCallback != null)
								this.options.initCallback(this, 'reset');

						this.setup();
				},

				/**
				 * Reloads the carousel and adjusts positions.
				 *
				 * @method reload
				 * @return undefined
				 */
				reload: function() {
						if (this.tail != null && this.inTail)
								this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) + this.tail);

						this.tail   = null;
						this.inTail = false;

						if (this.options.reloadCallback != null)
								this.options.reloadCallback(this);

						if (this.options.visible != null) {
								var self = this;
								var di = Math.ceil(this.clipping() / this.options.visible), wh = 0, lt = 0;
								this.list.children('li').each(function(i) {
										wh += self.dimension(this, di);
										if (i + 1 < self.first)
												lt = wh;
								});

								this.list.css(this.wh, wh + 'px');
								this.list.css(this.lt, -lt + 'px');
						}

						this.scroll(this.first, false);
				},

				/**
				 * Locks the carousel.
				 *
				 * @method lock
				 * @return undefined
				 */
				lock: function() {
						this.locked = true;
						this.buttons();
				},

				/**
				 * Unlocks the carousel.
				 *
				 * @method unlock
				 * @return undefined
				 */
				unlock: function() {
						this.locked = false;
						this.buttons();
				},

				/**
				 * Sets the size of the carousel.
				 *
				 * @method size
				 * @return undefined
				 * @param s {Number} The size of the carousel.
				 */
				size: function(s) {
						if (s != undefined) {
								this.options.size = s;
								if (!this.locked)
										this.buttons();
						}

						return this.options.size;
				},

				/**
				 * Checks whether a list element exists for the given index (or index range).
				 *
				 * @method get
				 * @return bool
				 * @param i {Number} The index of the (first) element.
				 * @param i2 {Number} The index of the last element.
				 */
				has: function(i, i2) {
						if (i2 == undefined || !i2)
								i2 = i;

						if (this.options.size !== null && i2 > this.options.size)
								i2 = this.options.size;

						for (var j = i; j <= i2; j++) {
								var e = this.get(j);
								if (!e.length || e.hasClass('jcarousel-item-placeholder'))
										return false;
						}

						return true;
				},

				/**
				 * Returns a jQuery object with list element for the given index.
				 *
				 * @method get
				 * @return jQuery
				 * @param i {Number} The index of the element.
				 */
				get: function(i) {
						return $j('.jcarousel-item-' + i, this.list);
				},

				/**
				 * Adds an element for the given index to the list.
				 * If the element already exists, it updates the inner html.
				 * Returns the created element as jQuery object.
				 *
				 * @method add
				 * @return jQuery
				 * @param i {Number} The index of the element.
				 * @param s {String} The innerHTML of the element.
				 */
				add: function(i, s) {
						var e = this.get(i), old = 0, n = $j(s);

						if (e.length == 0) {
								var c, e = this.create(i), j = $jc.intval(i);
								while (c = this.get(--j)) {
										if (j <= 0 || c.length) {
												j <= 0 ? this.list.prepend(e) : c.after(e);
												break;
										}
								}
						} else
								old = this.dimension(e);

						if (n.get(0).nodeName.toUpperCase() == 'LI') {
								e.replaceWith(n);
								e = n;
						} else
								e.empty().append(s);

						this.format(e.removeClass(this.className('jcarousel-item-placeholder')), i);

						var di = this.options.visible != null ? Math.ceil(this.clipping() / this.options.visible) : null;
						var wh = this.dimension(e, di) - old;

						if (i > 0 && i < this.first)
								this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) - wh + 'px');

						this.list.css(this.wh, $jc.intval(this.list.css(this.wh)) + wh + 'px');

						return e;
				},

				/**
				 * Removes an element for the given index from the list.
				 *
				 * @method remove
				 * @return undefined
				 * @param i {Number} The index of the element.
				 */
				remove: function(i) {
						var e = this.get(i);

						// Check if item exists and is not currently visible
						if (!e.length || (i >= this.first && i <= this.last))
								return;

						var d = this.dimension(e);

						if (i < this.first)
								this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) + d + 'px');

						e.remove();

						this.list.css(this.wh, $jc.intval(this.list.css(this.wh)) - d + 'px');
				},

				/**
				 * Moves the carousel forwards.
				 *
				 * @method next
				 * @return undefined
				 */
				next: function() {
						this.stopAuto();

						if (this.tail != null && !this.inTail)
								this.scrollTail(false);
						else
								this.scroll(((this.options.wrap == 'both' || this.options.wrap == 'last') && this.options.size != null && this.last == this.options.size) ? 1 : this.first + this.options.scroll);
				},

				/**
				 * Moves the carousel backwards.
				 *
				 * @method prev
				 * @return undefined
				 */
				prev: function() {
						this.stopAuto();

						if (this.tail != null && this.inTail)
								this.scrollTail(true);
						else
								this.scroll(((this.options.wrap == 'both' || this.options.wrap == 'first') && this.options.size != null && this.first == 1) ? this.options.size : this.first - this.options.scroll);
				},

				/**
				 * Scrolls the tail of the carousel.
				 *
				 * @method scrollTail
				 * @return undefined
				 * @param b {Boolean} Whether scroll the tail back or forward.
				 */
				scrollTail: function(b) {
						if (this.locked || this.animating || !this.tail)
								return;

						var pos  = $jc.intval(this.list.css(this.lt));

						!b ? pos -= this.tail : pos += this.tail;
						this.inTail = !b;

						// Save for callbacks
						this.prevFirst = this.first;
						this.prevLast  = this.last;

						this.animate(pos);
				},

				/**
				 * Scrolls the carousel to a certain position.
				 *
				 * @method scroll
				 * @return undefined
				 * @param i {Number} The index of the element to scoll to.
				 * @param a {Boolean} Flag indicating whether to perform animation.
				 */
				scroll: function(i, a) {
						if (this.locked || this.animating)
								return;

						this.animate(this.pos(i), a);
				},

				/**
				 * Prepares the carousel and return the position for a certian index.
				 *
				 * @method pos
				 * @return {Number}
				 * @param i {Number} The index of the element to scoll to.
				 */
				pos: function(i) {
						var pos  = $jc.intval(this.list.css(this.lt));

						if (this.locked || this.animating)
								return pos;

						if (this.options.wrap != 'circular')
								i = i < 1 ? 1 : (this.options.size && i > this.options.size ? this.options.size : i);

						var back = this.first > i;

						// Create placeholders, new list width/height
						// and new list position
						var f = this.options.wrap != 'circular' && this.first <= 1 ? 1 : this.first;
						var c = back ? this.get(f) : this.get(this.last);
						var j = back ? f : f - 1;
						var e = null, l = 0, p = false, d = 0, g;

						while (back ? --j >= i : ++j < i) {
								e = this.get(j);
								p = !e.length;
								if (e.length == 0) {
										e = this.create(j).addClass(this.className('jcarousel-item-placeholder'));
										c[back ? 'before' : 'after' ](e);

										if (this.first != null && this.options.wrap == 'circular' && this.options.size !== null && (j <= 0 || j > this.options.size)) {
												g = this.get(this.index(j));
												if (g.length)
														e = this.add(j, g.clone(true));
										}
								}

								c = e;
								d = this.dimension(e);

								if (p)
										l += d;

								if (this.first != null && (this.options.wrap == 'circular' || (j >= 1 && (this.options.size == null || j <= this.options.size))))
										pos = back ? pos + d : pos - d;
						}

						// Calculate visible items
						var clipping = this.clipping();
						var cache = [];
						var visible = 0, j = i, v = 0;
						var c = this.get(i - 1);

						while (++visible) {
								e = this.get(j);
								p = !e.length;
								if (e.length == 0) {
										e = this.create(j).addClass(this.className('jcarousel-item-placeholder'));
										// This should only happen on a next scroll
										c.length == 0 ? this.list.prepend(e) : c[back ? 'before' : 'after' ](e);

										if (this.first != null && this.options.wrap == 'circular' && this.options.size !== null && (j <= 0 || j > this.options.size)) {
												g = this.get(this.index(j));
												if (g.length)
														e = this.add(j, g.clone(true));
										}
								}

								c = e;
								var d = this.dimension(e);
								if (d == 0) {
										throw new Error('jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...');
								}

								if (this.options.wrap != 'circular' && this.options.size !== null && j > this.options.size)
										cache.push(e);
								else if (p)
										l += d;

								v += d;

								if (v >= clipping)
										break;

								j++;
						}

						// Remove out-of-range placeholders
						for (var x = 0; x < cache.length; x++)
								cache[x].remove();

						// Resize list
						if (l > 0) {
								this.list.css(this.wh, this.dimension(this.list) + l + 'px');

								if (back) {
										pos -= l;
										this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) - l + 'px');
								}
						}

						// Calculate first and last item
						var last = i + visible - 1;
						if (this.options.wrap != 'circular' && this.options.size && last > this.options.size)
								last = this.options.size;

						if (j > last) {
								visible = 0, j = last, v = 0;
								while (++visible) {
										var e = this.get(j--);
										if (!e.length)
												break;
										v += this.dimension(e);
										if (v >= clipping)
												break;
								}
						}

						var first = last - visible + 1;
						if (this.options.wrap != 'circular' && first < 1)
								first = 1;

						if (this.inTail && back) {
								pos += this.tail;
								this.inTail = false;
						}

						this.tail = null;
						if (this.options.wrap != 'circular' && last == this.options.size && (last - visible + 1) >= 1) {
								var m = $jc.margin(this.get(last), !this.options.vertical ? 'marginRight' : 'marginBottom');
								if ((v - m) > clipping)
										this.tail = v - clipping - m;
						}

						// Adjust position
						while (i-- > first)
								pos += this.dimension(this.get(i));

						// Save visible item range
						this.prevFirst = this.first;
						this.prevLast  = this.last;
						this.first     = first;
						this.last      = last;

						return pos;
				},

				/**
				 * Animates the carousel to a certain position.
				 *
				 * @method animate
				 * @return undefined
				 * @param p {Number} Position to scroll to.
				 * @param a {Boolean} Flag indicating whether to perform animation.
				 */
				animate: function(p, a) {
						if (this.locked || this.animating)
								return;

						this.animating = true;

						var self = this;
						var scrolled = function() {
								self.animating = false;

								if (p == 0)
										self.list.css(self.lt,  0);

								if (self.options.wrap == 'circular' || self.options.wrap == 'both' || self.options.wrap == 'last' || self.options.size == null || self.last < self.options.size)
										self.startAuto();

								self.buttons();
								self.notify('onAfterAnimation');

								// This function removes items which are appended automatically for circulation.
								// This prevents the list from growing infinitely.
								if (self.options.wrap == 'circular' && self.options.size !== null)
										for (var i = self.prevFirst; i <= self.prevLast; i++)
												if (i !== null && !(i >= self.first && i <= self.last) && (i < 1 || i > self.options.size))
														self.remove(i);
						};

						this.notify('onBeforeAnimation');

						// Animate
						if (!this.options.animation || a == false) {
								this.list.css(this.lt, p + 'px');
								scrolled();
						} else {
								var o = !this.options.vertical ? (this.options.rtl ? {'right': p} : {'left': p}) : {'top': p};
								this.list.animate(o, this.options.animation, this.options.easing, scrolled);
						}
				},

				/**
				 * Starts autoscrolling.
				 *
				 * @method auto
				 * @return undefined
				 * @param s {Number} Seconds to periodically autoscroll the content.
				 */
				startAuto: function(s) {
						if (s != undefined)
								this.options.auto = s;

						if (this.options.auto == 0)
								return this.stopAuto();

						if (this.timer != null)
								return;

						var self = this;
						this.timer = setTimeout(function() { self.next(); }, this.options.auto * 1000);
				},

				/**
				 * Stops autoscrolling.
				 *
				 * @method stopAuto
				 * @return undefined
				 */
				stopAuto: function() {
						if (this.timer == null)
								return;

						clearTimeout(this.timer);
						this.timer = null;
				},

				/**
				 * Sets the states of the prev/next buttons.
				 *
				 * @method buttons
				 * @return undefined
				 */
				buttons: function(n, p) {
						if (n == undefined || n == null) {
								var n = !this.locked && this.options.size !== 0 && ((this.options.wrap && this.options.wrap != 'first') || this.options.size == null || this.last < this.options.size);
								if (!this.locked && (!this.options.wrap || this.options.wrap == 'first') && this.options.size != null && this.last >= this.options.size)
										n = this.tail != null && !this.inTail;
						}

						if (p == undefined || p == null) {
								var p = !this.locked && this.options.size !== 0 && ((this.options.wrap && this.options.wrap != 'last') || this.first > 1);
								if (!this.locked && (!this.options.wrap || this.options.wrap == 'last') && this.options.size != null && this.first == 1)
										p = this.tail != null && this.inTail;
						}

						var self = this;

						this.buttonNext[n ? 'bind' : 'unbind'](this.options.buttonNextEvent + '.jcarousel', this.funcNext)[n ? 'removeClass' : 'addClass'](this.className('jcarousel-next-disabled')).attr('disabled', n ? false : true);
						this.buttonPrev[p ? 'bind' : 'unbind'](this.options.buttonPrevEvent + '.jcarousel', this.funcPrev)[p ? 'removeClass' : 'addClass'](this.className('jcarousel-prev-disabled')).attr('disabled', p ? false : true);

						if (this.options.buttonNextCallback != null && this.buttonNext.data('jcarouselstate') != n) {
								this.buttonNext.each(function() { self.options.buttonNextCallback(self, this, n); }).data('jcarouselstate', n);
						}

						if (this.options.buttonPrevCallback != null && (this.buttonPrev.data('jcarouselstate') != p)) {
								this.buttonPrev.each(function() { self.options.buttonPrevCallback(self, this, p); }).data('jcarouselstate', p);
						}
				},

				/**
				 * Notify callback of a specified event.
				 *
				 * @method notify
				 * @return undefined
				 * @param evt {String} The event name
				 */
				notify: function(evt) {
						var state = this.prevFirst == null ? 'init' : (this.prevFirst < this.first ? 'next' : 'prev');

						// Load items
						this.callback('itemLoadCallback', evt, state);

						if (this.prevFirst !== this.first) {
								this.callback('itemFirstInCallback', evt, state, this.first);
								this.callback('itemFirstOutCallback', evt, state, this.prevFirst);
						}

						if (this.prevLast !== this.last) {
								this.callback('itemLastInCallback', evt, state, this.last);
								this.callback('itemLastOutCallback', evt, state, this.prevLast);
						}

						this.callback('itemVisibleInCallback', evt, state, this.first, this.last, this.prevFirst, this.prevLast);
						this.callback('itemVisibleOutCallback', evt, state, this.prevFirst, this.prevLast, this.first, this.last);
				},

				callback: function(cb, evt, state, i1, i2, i3, i4) {
						if (this.options[cb] == undefined || (typeof this.options[cb] != 'object' && evt != 'onAfterAnimation'))
								return;

						var callback = typeof this.options[cb] == 'object' ? this.options[cb][evt] : this.options[cb];

						if (!$.isFunction(callback))
								return;

						var self = this;

						if (i1 === undefined)
								callback(self, state, evt);
						else if (i2 === undefined)
								this.get(i1).each(function() { callback(self, this, i1, state, evt); });
						else {
								for (var i = i1; i <= i2; i++)
										if (i !== null && !(i >= i3 && i <= i4))
												this.get(i).each(function() { callback(self, this, i, state, evt); });
						}
				},

				create: function(i) {
						return this.format('<li></li>', i);
				},

				format: function(e, i) {
						var e = $j(e), split = e.get(0).className.split(' ');
						for (var j = 0; j < split.length; j++) {
								if (split[j].indexOf('jcarousel-') != -1) {
										e.removeClass(split[j]);
								}
						}
						e.addClass(this.className('jcarousel-item')).addClass(this.className('jcarousel-item-' + i)).css({
								'float': (this.options.rtl ? 'right' : 'left'),
								'list-style': 'none'
						}).attr('jcarouselindex', i);
						return e;
				},

				className: function(c) {
						return c + ' ' + c + (!this.options.vertical ? '-horizontal' : '-vertical');
				},

				dimension: function(e, d) {
						var el = e.jquery != undefined ? e[0] : e;

						var old = !this.options.vertical ?
								(el.offsetWidth || $jc.intval(this.options.itemFallbackDimension)) + $jc.margin(el, 'marginLeft') + $jc.margin(el, 'marginRight') :
								(el.offsetHeight || $jc.intval(this.options.itemFallbackDimension)) + $jc.margin(el, 'marginTop') + $jc.margin(el, 'marginBottom');

						if (d == undefined || old == d)
								return old;

						var w = !this.options.vertical ?
								d - $jc.margin(el, 'marginLeft') - $jc.margin(el, 'marginRight') :
								d - $jc.margin(el, 'marginTop') - $jc.margin(el, 'marginBottom');

						$j(el).css(this.wh, w + 'px');

						return this.dimension(el);
				},

				clipping: function() {
						return !this.options.vertical ?
								this.clip[0].offsetWidth - $jc.intval(this.clip.css('borderLeftWidth')) - $jc.intval(this.clip.css('borderRightWidth')) :
								this.clip[0].offsetHeight - $jc.intval(this.clip.css('borderTopWidth')) - $jc.intval(this.clip.css('borderBottomWidth'));
				},

				index: function(i, s) {
						if (s == undefined)
								s = this.options.size;

						return Math.round((((i-1) / s) - Math.floor((i-1) / s)) * s) + 1;
				}
		});

		$jc.extend({
				/**
				 * Gets/Sets the global default configuration properties.
				 *
				 * @method defaults
				 * @return {Object}
				 * @param d {Object} A set of key/value pairs to set as configuration properties.
				 */
				defaults: function(d) {
						return $.extend(defaults, d || {});
				},

				margin: function(e, p) {
						if (!e)
								return 0;

						var el = e.jquery != undefined ? e[0] : e;

						if (p == 'marginRight' && $.browser.safari) {
								var old = {'display': 'block', 'float': 'none', 'width': 'auto'}, oWidth, oWidth2;

								$.swap(el, old, function() { oWidth = el.offsetWidth; });

								old['marginRight'] = 0;
								$.swap(el, old, function() { oWidth2 = el.offsetWidth; });

								return oWidth2 - oWidth;
						}

						return $jc.intval($.css(el, p));
				},

				intval: function(v) {
						v = parseInt(v);
						return isNaN(v) ? 0 : v;
				}
		});

})(jQuery);

/*****************************************************************************/
//jQuery Easing
/*****************************************************************************/

/*
 * jQuery Easing v1.1.1 - /web/20150821021634/http://gsgd.co.uk/sandbox/jquery.easing.php
 *
 * Uses the built in easing capabilities added in jQuery 1.1
 * to offer multiple easing options
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   /web/20150821021634/http://www.opensource.org/licenses/mit-license.php
 */

jQuery.extend({
	easing: {
		easein: function(x, t, b, c, d) {
			return c*(t/=d)*t + b; // in
		},
		easeinout: function(x, t, b, c, d) {
			if (t < d/2) return 2*c*t*t/(d*d) + b;
			var ts = t - d/2;
			return -2*c*ts*ts/(d*d) + 2*c*ts/d + c/2 + b;
		},
		easeout: function(x, t, b, c, d) {
			return -c*t*t/(d*d) + 2*c*t/d + b;
		},
		expoin: function(x, t, b, c, d) {
			var flip = 1;
			if (c < 0) {
				flip *= -1;
				c *= -1;
			}
			return flip * (Math.exp(Math.log(c)/d * t)) + b;
		},
		expoout: function(x, t, b, c, d) {
			var flip = 1;
			if (c < 0) {
				flip *= -1;
				c *= -1;
			}
			return flip * (-Math.exp(-Math.log(c)/d * (t-d)) + c + 1) + b;
		},
		expoinout: function(x, t, b, c, d) {
			var flip = 1;
			if (c < 0) {
				flip *= -1;
				c *= -1;
			}
			if (t < d/2) return flip * (Math.exp(Math.log(c/2)/(d/2) * t)) + b;
			return flip * (-Math.exp(-2*Math.log(c/2)/d * (t-d)) + c + 1) + b;
		},
		bouncein: function(x, t, b, c, d) {
			return c - jQuery.easing['bounceout'](x, d-t, 0, c, d) + b;
		},
		bounceout: function(x, t, b, c, d) {
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
			} else {
				return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
			}
		},
		bounceinout: function(x, t, b, c, d) {
			if (t < d/2) return jQuery.easing['bouncein'] (x, t*2, 0, c, d) * .5 + b;
			return jQuery.easing['bounceout'] (x, t*2-d,0, c, d) * .5 + c*.5 + b;
		},
		elasin: function(x, t, b, c, d) {
			var s=1.70158;var p=0;var a=c;
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		},
		elasout: function(x, t, b, c, d) {
			var s=1.70158;var p=0;var a=c;
			if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
			if (a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
		},
		elasinout: function(x, t, b, c, d) {
			var s=1.70158;var p=0;var a=c;
			if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
			if (a < Math.abs(c)) { a=c; var s=p/4; }
			else var s = p/(2*Math.PI) * Math.asin (c/a);
			if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
			return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
		},
		backin: function(x, t, b, c, d) {
			var s=1.70158;
			return c*(t/=d)*t*((s+1)*t - s) + b;
		},
		backout: function(x, t, b, c, d) {
			var s=1.70158;
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		},
		backinout: function(x, t, b, c, d) {
			var s=1.70158;
			if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		},
		linear: function(x, t, b, c, d) {
			return c*t/d + b; //linear
		}
	}
});

//clickheat
/** Code by www.labsmedia.com */function addEvtListener(c,b,a){if(document.addEventListener){if(c){c.addEventListener(b,a,false)}else{addEventListener(b,a,false)}}else{if(attachEvent){if(c){c.attachEvent("on"+b,a)}else{attachEvent("on"+b,a)}}}}var clickHeatGroup="",clickHeatSite="",clickHeatServer="",clickHeatLastIframe=-1,clickHeatTime=0,clickHeatQuota=-1,clickHeatBrowser="",clickHeatDocument="",clickHeatWait=500,clickHeatLocalWait=0,clickHeatDebug=(document.location.href.indexOf("debugclickheat")!==-1);function showClickHeatDebug(a){if(clickHeatDebug===true){document.getElementById("clickHeatDebuggerSpan").innerHTML=a;document.getElementById("clickHeatDebuggerDiv").style.display="block"}}function catchClickHeat(o){var p,d,j,i,k,n,m,b,a,v,s,f,r,q,u=false,z=false;try{showClickHeatDebug("Gathering click data...");if(clickHeatQuota===0){showClickHeatDebug("Click not logged: quota reached");return true}if(clickHeatGroup===""){showClickHeatDebug("Click not logged: group name empty (clickHeatGroup)");return true}if(!o){o=window.event
}p=o.which||o.button;d=o.srcElement||null;if(p===0){showClickHeatDebug("Click not logged: no button pressed");return true}if(d!==null&&d.tagName.toLowerCase()==="iframe"){if(d.sourceIndex===clickHeatLastIframe){showClickHeatDebug("Click not logged: same iframe (a click on iframe opens a popup and popup is closed => iframe gets the focus again)");return true}clickHeatLastIframe=d.sourceIndex}else{clickHeatLastIframe=-1}j=o.clientX;i=o.clientY;k=clickHeatDocument.clientWidth||window.innerWidth;n=clickHeatDocument.clientHeight||window.innerHeight;a=window.pageXOffset||clickHeatDocument.scrollLeft;v=window.pageYOffset||clickHeatDocument.scrollTop;m=Math.max(clickHeatDocument.scrollWidth,clickHeatDocument.offsetWidth,k);b=Math.max(clickHeatDocument.scrollHeight,clickHeatDocument.offsetHeight,n);if(j>k||i>n){showClickHeatDebug("Click not logged: out of document (should be a click on scrollbars)");return true}j+=a;i+=v;if(j<0||i<0||j>m||i>b){showClickHeatDebug("Click not logged: out of document (should be a click out of the document's body)");
return true}s=new Date();if(s.getTime()-clickHeatTime<1000){showClickHeatDebug("Click not logged: at least 1 second between clicks");return true}clickHeatTime=s.getTime();if(clickHeatQuota>0){clickHeatQuota=clickHeatQuota-1}q="s="+clickHeatSite+"&g="+clickHeatGroup+"&x="+j+"&y="+i+"&w="+k+"&b="+clickHeatBrowser+"&c="+p+"&random="+Date();showClickHeatDebug("Ready to send click data...");if(clickHeatServer.indexOf("http")!==0){try{z=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{z=new ActiveXObject("Microsoft.XMLHTTP")}catch(l){z=null}}if(!z&&typeof(XMLHttpRequest)!=="undefined"){z=new XMLHttpRequest()}if(z){if(clickHeatDebug===true){z.onreadystatechange=function(){if(z.readyState===4){if(z.status===200){showClickHeatDebug("Click recorded at "+clickHeatServer+" with the following parameters:<br/>x = "+j+" ("+(j-a)+"px from left + "+a+"px of horizontal scrolling, max width = "+m+")<br/>y = "+i+" ("+(i-v)+"px from top + "+v+"px of vertical scrolling, max height = "+b+")<br/>width = "+k+"<br/>browser = "+clickHeatBrowser+"<br/>click = "+p+"<br/>site = "+clickHeatSite+"<br/>group = "+clickHeatGroup+"<br/><br/>Server answer: "+z.responseText)
}else{if(z.status===404){showClickHeatDebug("click.php was not found at: "+(clickHeatServer!==""?clickHeatServer:"/clickheat/click.php")+" please set clickHeatServer value")}else{showClickHeatDebug("click.php returned a status code "+z.status+" with the following error: "+z.responseText)}}clickHeatLocalWait=0}}}z.open("GET",clickHeatServer+"?"+q,true);z.send(null);u=true}}if(u===false){if(clickHeatDebug===true){showClickHeatDebug("Click recorded at "+clickHeatServer+" with the following parameters:<br/>x = "+(j+a)+" ("+j+"px from left + "+a+"px of horizontal scrolling)<br/>y = "+(i+v)+" ("+i+"px from top + "+v+"px of vertical scrolling)<br/>width = "+k+"<br/>browser = "+clickHeatBrowser+"<br/>click = "+p+"<br/>site = "+clickHeatSite+"<br/>group = "+clickHeatGroup+'<br/><br/>Server answer:<br/><iframe src="'+clickHeatServer+"?"+q+'" width="700" height="60"></iframe>')}else{r=new Image();r.src=clickHeatServer+"?"+q}}f=new Date();clickHeatLocalWait=f.getTime()+clickHeatWait;while(clickHeatLocalWait>f.getTime()){f=new Date()
}}catch(g){showClickHeatDebug("An error occurred while processing click (Javascript error): "+g.message)}return true}function initClickHeat(){var d,f,a,c,e,g;if(clickHeatDebug===true){g=document.createElement("div");g.id="clickHeatDebuggerDiv";g.style.padding="5px";g.style.display="none";g.style.position="absolute";g.style.top="200px";g.style.left="200px";g.style.border="1px solid #888";g.style.backgroundColor="#eee";g.style.color="#a00";g.style.zIndex=99;g.innerHTML='<a href="#" onmouseover="document.getElementById(\'clickHeatDebuggerDiv\').style.display = \'none\'; return false" style="float:right">Rollover to close</a><strong>ClickHeat debug:</strong><br/><br/><span id="clickHeatDebuggerSpan"></span>';document.body.appendChild(g)}if(clickHeatGroup===""||clickHeatServer===""){showClickHeatDebug("ClickHeat NOT initialised: either clickHeatGroup or clickHeatServer is empty");return false}e=document.location.protocol+"//"+document.location.host;if(clickHeatServer.indexOf(e)===0){clickHeatServer=clickHeatServer.substring(e.length,clickHeatServer.length)
}addEvtListener(document,"mousedown",catchClickHeat);f=document.getElementsByTagName("iframe");for(d=0;d<f.length;d+=1){addEvtListener(f[d],"focus",catchClickHeat)}clickHeatDocument=document.documentElement&&document.documentElement.clientHeight!==0?document.documentElement:document.body;a=navigator.userAgent?navigator.userAgent.toLowerCase().replace(/-/g,""):"";c=["chrome","firefox","safari","msie","opera"];clickHeatBrowser="unknown";for(d=0;d<c.length;d+=1){if(a.indexOf(c[d])!==-1){clickHeatBrowser=c[d];break}}showClickHeatDebug("ClickHeat initialised with:<br/>site = "+clickHeatSite+"<br/>group = "+clickHeatGroup+"<br/>server = "+clickHeatServer+"<br/>quota = "+(clickHeatQuota===-1?"unlimited":clickHeatQuota)+"<br/>browser = "+clickHeatBrowser+"<br/><br/><strong>Click in a blank area (not on a link) to test ClickHeat</strong>")};


/*****************************************************************************/
//function.js
/*****************************************************************************/
var COOKIE = {
	set: function(key, val, o){
		o = o||{};
		val = encodeURIComponent(val);
		if (o.domain) {
				val += '; domain=' + o.domain;
		}
		if (o.path) {
				val += '; path=' + o.path;
		}
		else {
				val += '; path=/';
		}
		if (o.duration) {
				var date = new Date();
				date.setTime(date.getTime() + o.duration*24*60*60*1000);
				val += '; expires=' + date.toGMTString();
		}
		if (o.secure) {
				val += '; secure';
		}
		document.cookie = key + '=' + val;
	},

	get: function(key){
		var m = document.cookie.match('(?:^|;)\\s*?' + key + '=([^;]*)');
		return (m) ? decodeURIComponent(m[1]) : null;
	},

	remove: function(key){
		return this.set(key, "", {duration: -1});
	}
}

// Łatka do pola "Zasoby A-Z", które na Linuxie jest
// zbyt niskie ze wzgledu na niekompatybilne czcionki

if (navigator.appVersion.indexOf("Linux") != -1 || navigator.appVersion.indexOf("X11") != -1) {
	var block_bottom_height = [360, 573];
} else {
	var block_bottom_height = [380, 543];
}


// dlugosc strony w px
// [do usunięcia, zmienna przestała być używana ]
// var moveBXPagelength = 727;

// szerokosc boksow wraz z ramkami, uzywana
// do wyliczania moveBXPagelength
var classLength = {
	'default': 231,
	'box_width_inner': 248
}

// ilosc elementów (boksów) na stronie
var moveBXelements = 3;
var moveBXclasses = [ '', 'box_width_inner', 'box_width_inner', 'box_last' ];
// którym elementom kreacji nadac systemowy cien
// indeks 0: duza kreacja; indeks 1-3: male kreacje
var shadowBlocks = [true,true,false,true];

var setSize = function(container, size) {
	if($j('#ln_size') != undefined && $j('#ln_size').attr('id') == 'ln_size') {
		$j(container).css('fontSize', (.8+.2*size)+'em');
		$j(container+' .NavigationList a, '+container+' .NavigationList span').
			removeClass('size_1').
			removeClass('size_2').
			addClass('size_'+size);

		COOKIE.set('poznanpl_font_size', size);
	}
}

$j(document).ready(function() {
	$j("a.oembed").oembed();
	var css = COOKIE.get('poznanpl_hc_style');
	css ? $j('body').attr('className', css) : null;

	var fontSize = COOKIE.get('poznanpl_font_size');
	fontSize = fontSize ? fontSize : 0;

	setSize('#article_content', fontSize);

	if( typeof(lang) != "undefined"  && lang == 'en'){
		initializeHighContrastOptions('en');
	}else{
		initializeHighContrastOptions('pl');
	}
	initializeKreacjaShadow(shadowBlocks);
	formValidatorInitialize();

	$j("#cookies_button_ok").click(function() {
		COOKIE.set('poznanpl_cookies_ok', "true", {duration: 30});
		$j('#cookies_box_top').hide();
		updateShadowPosition("hide");
	});
	COOKIE.get('poznanpl_cookies_ok') ? $j('#cookies_box_top').hide() : null;
	if ($j('#cookies_box_top').is(":visible")) {
		updateShadowPosition("show");
	}

	$j('#nv_prev').unbind('click');
	$j('#nv_prev').click(function(){
		moveBX(-1);
		return false;
	});

	$j('#nv_next').unbind('click');
	$j('#nv_next').click(function(){
		moveBX(1);
		return false;
	});
	$j('#show_all a').unbind('click');
	$j('#show_all_undo a').unbind('click');

	var moveBXpage = 0;
	var moveBX = function(offset) {
		// kontener
		var $el = $j('#box_scrollable_container');
		// czyscimy kolejke
		$el.clearQueue();
		// <<moveBXelements>> elementow na strone, liczymy od 0
		var elements = (($el.find('div.box_info').length)/moveBXelements)-1;
		// aktualna strona (bez korekty)
		var newPage = moveBXpage + offset;
		// korekta aktualnej strony
		if (newPage < 0) newPage = 0;
		else if (newPage > elements) newPage = elements;
		// aktualizujemy globalny numer strony
		moveBXpage = newPage;

		var currentIndex = newPage*moveBXelements;

		// liczymy wymiar klas z lewej strony (dlugosc strony)
		var currentMoveBXPagelength = 0;
		var instance=0;
		var lang='pl';
		var $els = $j('#box_scrollable_container .box_info:lt('+currentIndex+')');
		$els.each(function(i,el) {
			if($j(this).hasClass('box_width_inner')) {
				currentMoveBXPagelength += classLength['box_width_inner'];
			} else {
				currentMoveBXPagelength += classLength['default'];
			}
		});
		currentMoveBXPagelength *= -1;

		// suwamy elementy do konkretnej strony
		$el.animate({
			//left: (-1*newPage*moveBXPagelength*Math.abs(offset))
			left: currentMoveBXPagelength
		}, 500, function() {
		});

		// nadpisujemy klasy dla widocznych elementow
		// box_last przydaje sie w kulturze
		var visibleClasses = moveBXclasses;
		var $els = $j('#box_scrollable_container .box_info:eq('+currentIndex+'), #box_scrollable_container .box_info:gt('+currentIndex+')');
		$els.each(function(i,el) {
			$j(this).removeClass('box_width_inner').removeClass('box_last').addClass(visibleClasses[i]);
		});
	}

	$j("#ln_size a").click(function(){
		setSize('#article_content', $j(this).attr('index'));
		return false;
	}).each(function(index,ui) {
		$j(this).attr('index', index);
	});

	var mapRotatorIndex = 0;
	var mapRotatorDelay = 3000;
	var mapRotator = function() {
		var fadeDelay = 1500;
		var $rotatedElements = $j('.map_image');
		if ($j('.map_image').length > 1) {
			$j($rotatedElements.get(mapRotatorIndex)).fadeOut(fadeDelay);
			mapRotatorIndex++;
			if (mapRotatorIndex >= $rotatedElements.length) {
				mapRotatorIndex = 0;
			}
			$j($rotatedElements.get(mapRotatorIndex)).fadeIn(fadeDelay);
			setTimeout(mapRotator, mapRotatorDelay+fadeDelay);
		}
	}


	$j(document).delay(function(){mapRotator()})
	setTimeout(mapRotator, mapRotatorDelay);


	var enabledNewsCategoriesIdx = 0;
	var enabledNewsCategories = new Array ('news_category_1', 'news_category_2', 'news_category_3', 'news_category_4', 'news_category_5', 'news_category_6');
	var currentNewsCategoryIndex = 0;
	var currentNewsCategory = '';
	var previousNewsCategory = '';
	var currentNewsPackageURL = $j('#blok_wiadomosci_tresc .news_category_1').find('#url_news_category_1').val();
	$j('#blok_wiadomosci_menu').find('a').unbind('click');

	$j('#blok_wiadomosci_menu').find('a').click(function(){
		setPackageURL($j(this).attr('id'));
		enabledNewsCategoriesIdx = getEnabledNewsCategoriesIdx($j(this).attr('id'));
		showNewsCategory($j(this).attr('id'));
		return false;
	});

	var updateInnerNavigation = function(index, elements) {
		var $el = $j('#news_navigation');
		$el.empty();
		if (elements > 1) {
			for(var i=1;i<=elements;i++) {
				if (index+1 == i) {
					$el.append('<li class="selected"><a href="">'+i+'</a></li>');
				} else {
					$el.append('<li><a href="">'+i+'</a></li>');
				}
			}

			$el.find('a').click(function() {
				// jeśli istnieje to usuwamy interwał rotatora newsów
				eventsRotatorInterval ? clearInterval(eventsRotatorInterval) : null;
				enabledNewsCategoriesIdx = getEnabledNewsCategoriesIdx(currentNewsCategory);
				showNewsCategory(currentNewsCategory,($j(this).html()-1));
				eventsRotatorInterval = setInterval(eventsRotator, 5500);
				return false;
			});
			var new_url = currentNewsPackageURL.split('/');
			if(new_url[1]="mim") new_url.shift();
			if(typeof(lang) != "undefined"  && lang == 'en' && new_url.length>2 && new_url[1]=='studia'){
				var temp='/mim/'+new_url[1]+'/en/'+new_url[2]+'/';
				$el.append('<li><a href="'+temp+'" class="more_button">more</a></li>');
			}else{
				$el.append('<li><a href="'+currentNewsPackageURL+'" class="more_button">więcej</a></li>');
			}
			$el.fadeIn();
		} else {
			$el.fadeOut();
		}
	}

	var showNewsCategory = function(id, index) {
		var $el = $j('#'+id);
		// zmiana newsa gdy zmieniamy kategorię lub aktualny indeks
		if (id != currentNewsCategory || (index != undefined && index != currentNewsCategoryIndex)) {
			// przypisanie indeksu
			var index = index ? index : 0;

			if (currentNewsCategory != '') {
				// chowamy aktualnie wyświetlane newsy
				$j('#blok_wiadomosci_tresc .'+currentNewsCategory).fadeOut(150);
				// odznaczamy poprzednią pozycję w menu
				$j('#'+currentNewsCategory).parent().removeClass('selected');
			}

			if (previousNewsCategory != '') {
				// chowamy aktualnie wyświetlane newsy
				$j('#blok_wiadomosci_tresc .'+previousNewsCategory).fadeOut(150);
				// odznaczamy poprzednią pozycję w menu
				$j('#'+previousNewsCategory).parent().removeClass('selected');
				previousNewsCategory = '';
			}

			// wyciągam listę newsów do wyświetlenia
			var element = $j('#blok_wiadomosci_tresc .'+id);
			// wyświetlamy news z określonym indeksem
			$j(element.get(index)).fadeIn(500);

			// aktualizjemy wewnętrzną nawigację newsa
			updateInnerNavigation(index, element.length);

			// zaznaczamy aktywną pozycję w menu
			$el.parent().addClass('selected');

			// aktualizacja kategorii i indeksu
			currentNewsCategory = id;
			currentNewsCategoryIndex = index;
		}

	};

	var getEnabledNewsCategoriesIdx = function(newsCategory) {
		for (i=0; i < enabledNewsCategories.length; ++i) {
			if (enabledNewsCategories[i] == newsCategory) {
				return i;
			}
		}
		return 0;
	};

	var getMaxNewsCategoryIndex = function(newsCategory) {
		return $j('#blok_wiadomosci_tresc .'+newsCategory).length;
	}

	// rotator wydarzeń z panelu wydarzeń w zakładkach
	var eventsRotatorInterval = 5500;
	var instance=0;
	var eventsRotator = function() {
		var max = 1;

		if (currentNewsPackageURL && currentNewsPackageURL.indexOf("kultura") == -1) {
			max = getMaxNewsCategoryIndex(currentNewsCategory);
			enabledNewsCategoriesIdx = -1;
		}

		currentNewsCategoryIndex++;
		if (currentNewsCategoryIndex >= max) {
			currentNewsCategoryIndex = 0;

			previousNewsCategory = currentNewsCategory;
			enabledNewsCategoriesIdx++;
			if (enabledNewsCategoriesIdx > enabledNewsCategories.length - 1) {
				enabledNewsCategoriesIdx = 0;
			}
			currentNewsCategory = enabledNewsCategories[enabledNewsCategoriesIdx];
		}
		showNewsCategory(currentNewsCategory, currentNewsCategoryIndex++);
	}

	var eventsRotatorInterval = setInterval(eventsRotator, eventsRotatorInterval);

	var setPackageURL = function(id){
			currentNewsPackageURL = $j('#blok_wiadomosci_tresc .'+id).find('#url_'+id).val();
	};

	showNewsCategory('news_category_1', 0);
	initializeMegaBanner(instance);

	var currentBookstoreCategoryIndex = 0;
	var getMaxBookstoreCategoryIndex = function() {
		return $j('#bookstore_panel_tresc .books').length;
	}

	var showBookstore = function(id, index) {
		var $el = $j('#'+id);

		// zmiana newsa gdy zmieniamy kategorię lub aktualny indeks
		if ((index != undefined && index != currentBookstoreCategoryIndex)) {
			// przypisanie indeksu
			var index = index ? index : 0;


			// wyciągam listę pozycji do wyświetlenia
			var element = $j('#bookstore_panel_tresc .books');
			// wyświetlamy pozycje z określonym indeksem

			for (var i = 0 ; i < $j('#bookstore_panel_tresc .books').length; i++) {
				if (i == index) {
					$j($j('#bookstore_panel_tresc .books').get(i)).fadeIn(500);
				} else {
					$j($j('#bookstore_panel_tresc .books').get(i)).fadeOut(300);
				}
			}

			// aktualizjemy wewnętrzną nawigację ksiegarni
			updateBookstoreNavigation(index, element.length);

			// aktualizacja indeksu
			currentBookstoreCategoryIndex = index;
		}
	};

	var updateBookstoreNavigation = function(index, elements) {
		var $el = $j('#news_nav');
		$el.empty();
		if (elements > 1) {
			for(var i=1;i<=elements;i++) {
				if (index+1 == i) {
					$el.append('<li class="selected"><a href="">'+i+'</a></li>');
				} else {
					$el.append('<li><a href="">'+i+'</a></li>');
				}
			}

			$el.find('a').click(function() {
				// jeśli istnieje to usuwamy interwał rotatora newsów
				bookstoreRotatorInterval ? clearInterval(bookstoreRotatorInterval) : null;
				showBookstore('bookstore_panel', ($j(this).html()-1));
				return false;
			});
			$el.append('<li><a href="/web/20150821021634/http://www.poznan.pl/wm-sklep/" class="more_button">więcej</a></li>');
			$el.fadeIn();
		} else {
			$el.fadeOut();
		}
	}

	//rotator pozycji w ksiegarni
	var bookstoreRotatorInterval = 5500;
	var bookstoreRotator = function() {
		var max = getMaxBookstoreCategoryIndex();

		currentBookstoreCategoryIndex++;
		if (currentBookstoreCategoryIndex >= max) {
			currentBookstoreCategoryIndex = 0;
		}
		showBookstore('bookstore_panel', currentBookstoreCategoryIndex++);
	}
	var bookstoreRotatorInterval = setInterval(bookstoreRotator, bookstoreRotatorInterval);

	showBookstore('bookstore_panel', 0);
});

// ustawienie podpowiedzi w wyszukiwarce gdy JS wlaczony
$j('#search_query').ready(function() {
	var focusSearchQuery = function() {
		if ($j('#search_query').hasClass('default')) {
			$j('#search_query').removeClass('default').val('');
		}
	}
	var unfocusSearchQuery = function() {
		if ($j('#search_query').val() == '') {
			$j('#search_query').addClass('default').val('szukaj');
		}
	}
	$j('#search_query').focus(focusSearchQuery).blur(unfocusSearchQuery);
	unfocusSearchQuery();
});

$j('#show_all').ready(function() {
	var showAll = function(instantly) {
		$j('#area_block_bottom .box_info_long').animate({
			height: block_bottom_height[1]
		}, 350);
		$j('#show_all').fadeOut(150,function(){$j('#show_all_undo').delay(150).fadeIn(350)});
	}
	var hideAll = function(instantly) {
		$j('#area_block_bottom .box_info_long').animate({
			height: block_bottom_height[0]
		}, 350);
		$j('#show_all_undo').fadeOut(150,function(){$j('#show_all').fadeIn(350)});
	}

	$j('#show_all a').click(function(){
		showAll();
		return false;
	});
	$j('#show_all_undo a').click(function(){
		hideAll();
		return false;
	});
	$j('#area_block_bottom .box_info_long').animate({
			height: block_bottom_height[0]
		}, 0);
	$j('#show_all').show();
	$j('#show_all_undo').hide();
});

var initializeKreacjaShadow = function(blocks) {
	var blocks = (blocks == undefined ? [true,true,true,true] : blocks);

	if ($j('#promotion_small').attr('id') != undefined) {
		if (blocks[1] == true) {
			$j('#menu_and_promotion').prepend('<div id="kreacja_shadow_small"></div>');
		}
		if (blocks[2] == true) {
			$j('#menu_and_promotion').prepend('<div id="kreacja_shadow_small" class="element_2"></div>');
		}
		if (blocks[3] == true) {
			$j('#menu_and_promotion').prepend('<div id="kreacja_shadow_small" class="element_3"></div>');
		}
	}
}

var initializeHighContrastOptions = function(lang) {
	if(lang == 'en'){
		var $html  = '<div id="high_contrast_options" class="hidden">';
		$html += '<div id="hc_close"><input type="button" class="button" value="close" /></div>';
		$html += '<h3>High contrast</h3>';
		$html += '<ul>';
		$html += '<li><input type="button" class="css_normal" css="default" value="default version" /></li>';
		$html += '<div class="clear"></div>';
		$html += '<li><input type="button" class="high_contrast_02" css="02" value="high contrast version" /></li>';
		$html += '<li><input type="button" class="high_contrast_01" css="01" value="high contrast version" /></li>';
		$html += '<li><input type="button" class="high_contrast_04" css="04" value="high contrast version" /></li>';
		$html += '<li><input type="button" class="high_contrast_03" css="03" value="high contrast version" /></li>';
		$html += '<li><input type="button" class="high_contrast_05" css="05" value="high contrast version" /></li>';
		$html += '<li><input type="button" class="high_contrast_06" css="06" value="high contrast version" /></li>';
		$html += '<li><input type="button" class="high_contrast_07" css="07" value="high contrast version" /></li>';
		$html += '<li><input type="button" class="high_contrast_08" css="08" value="high contrast version" /></li>';
		$html += '</ul>';
		$html += '<div class="clear"></div>';
		$html += '</div>';
	}else{
		var $html  = '<div id="high_contrast_options" class="hidden">';
		$html += '<div id="hc_close"><input type="button" class="button" value="zamknij" /></div>';
		$html += '<h3>Wysoki kontrast</h3>';
		$html += '<ul>';
		$html += '<li><input type="button" class="css_normal" css="default" value="wersja domyślna" /></li>';
		$html += '<div class="clear"></div>';
		$html += '<li><input type="button" class="high_contrast_02" css="02" value="wersja kontrastowa" /></li>';
		$html += '<li><input type="button" class="high_contrast_01" css="01" value="wersja kontrastowa" /></li>';
		$html += '<li><input type="button" class="high_contrast_04" css="04" value="wersja kontrastowa" /></li>';
		$html += '<li><input type="button" class="high_contrast_03" css="03" value="wersja kontrastowa" /></li>';
		$html += '<li><input type="button" class="high_contrast_05" css="05" value="wersja kontrastowa" /></li>';
		$html += '<li><input type="button" class="high_contrast_06" css="06" value="wersja kontrastowa" /></li>';
		$html += '<li><input type="button" class="high_contrast_07" css="07" value="wersja kontrastowa" /></li>';
		$html += '<li><input type="button" class="high_contrast_08" css="08" value="wersja kontrastowa" /></li>';
		$html += '</ul>';
		$html += '<div class="clear"></div>';
		$html += '</div>';
	}
	if ($j('body') != undefined) {
		$j('body').prepend($html);
	}
	$j('#high_contrast_options ul input').click(function() { hcfSetCSS(this) });
	$j('#ln_high_contrast a').click(hcfOpenPanel);
	$j('#hc_close input').click(hcfClosePanel);
}

var hcfSetCSS = function(el) {
	var css = $j(el).attr('css');
	$j('body').attr('className', '');
	if (css != 'default') {
		$j('body').addClass('hc_'+css);
	}
	COOKIE.set('poznanpl_hc_style', $j('body').attr('className'));
}
var hcfOpenPanel = function() {
	$j('#high_contrast_options').fadeIn(350);
	return false;
}
var hcfClosePanel = function() {
	$j('#high_contrast_options').fadeOut(200);
	return false;
}

var formValidatorInitialize = function() {
}

var formValidator = function(context) {

}
var hideMapPanel = function() {
	$j('#area_important_links').animate({ left: -235, width: 0 }).fadeOut(0);
	$j('#hide_map_panel').animate({ left: -235 }).fadeOut(0);
	$j('#show_map_panel').animate({ left: 0 });
}
var showMapPanel = function() {
	$j('#area_important_links').animate({ left: 0, width: 260 }).fadeIn(0);
	$j('#hide_map_panel').animate({ left: 0 }).fadeIn(0);
	$j('#show_map_panel').animate({ left: -160 });
}

/*****************************************************************************/
//swfobject.js
/*****************************************************************************/
/*	SWFObject v2.2 </web/20150821021634/http://code.google.com/p/swfobject/>
is released under the MIT License </web/20150821021634/http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();


function MM_openBrWindow(theURL,winName,features) { //v2.0
	window.open(theURL,winName,features);
}

/***********************************************
* Disable "Enter" key in Form script- By Nurul Fadilah(nurul@REMOVETHISvolmedia.com)
* This notice must stay intact for use
* Visit /web/20150821021634/http://www.dynamicdrive.com/ for full source code
* Usage:
* <form>
* <input type="text" onkeypress="return handleEnter(this, event)"><br>
* <input type="text" onkeypress="return handleEnter(this, event)"><br>
* <textarea>Some text</textarea>
* </form>
*
***********************************************/
function handleEnter (field, event) {
var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
if (keyCode == 13) {
	var i;
	for (i = 0; i < field.form.elements.length; i++)
		if (field == field.form.elements[i])
			break;
	i = (i + 1) % field.form.elements.length;
	field.form.elements[i].focus();
	return false;
}
else
return true;
}

/***********************************************
show/hide element with hide_id id
***********************************************/
function showHideElementById(hide_id, visible) {
	if(visible){
		try {
			document.getElementById(hide_id).style.display = '';
		} catch(error) {}
	}else{
		try {
			document.getElementById(hide_id).style.display = 'none';
		} catch(error) {}
	}
}

/***********************************************
update field value when ifValue is equal "org" field value - wf tax
***********************************************/
function updateDateValue(org, change, ifValue) {
	var org_elem = document.getElementById(org);
	var change_elem = document.getElementById(change);
	if (org_elem.value == ifValue) {
		change_elem.value = org_elem.value;
	}
}

/*konwersja kodowania*/

function utf8(wide) {
	var c, s;
	var enc = "";
	var i = 0;
	while(i<wide.length) {
	c= wide.charCodeAt(i++);
	// handle UTF-16 surrogates
	if (c>=0xDC00 && c<0xE000) continue;
	if (c>=0xD800 && c<0xDC00) {
		if (i>=wide.length) continue;
		s= wide.charCodeAt(i++);
		if (s<0xDC00 || c>=0xDE00) continue;
		c= ((c-0xD800)<<10)+(s-0xDC00)+0x10000;
	}
	// output value
	if (c<0x80) enc += String.fromCharCode(c);
	else if (c<0x800) enc += String.fromCharCode(0xC0+(c>>6),0x80+(c&0x3F));
	else if (c<0x10000) enc += String.fromCharCode(0xE0+(c>>12),0x80+(c>>6&0x3F),0x80+(c&0x3F));
	else enc += String.fromCharCode(0xF0+(c>>18),0x80+(c>>12&0x3F),0x80+(c>>6&0x3F),0x80+(c&0x3F));
	}
	return enc;
}

var hexchars = "0123456789ABCDEF";

function toHex(n) {
	return hexchars.charAt(n>>4)+hexchars.charAt(n & 0xF);
}

var okURIchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";

function encodeURIComponentNew(s) {
	var s = utf8(s);
	var c;
	var enc = "";
	for (var i= 0; i<s.length; i++) {
	if (okURIchars.indexOf(s.charAt(i))==-1)
		enc += "%"+toHex(s.charCodeAt(i));
	else
		enc += s.charAt(i);
	}
	return enc;
}

/** begin: functions-map.js **/
$j(window).resize(function() {
	refreshPageSize();
});
$j(document).ready(function() {
	refreshPageSize();
});

var refreshPageSize = function() {
	var h = $j(window).height() - 74;
	$j('.map #block_content_area').css('height', h);
	var h = $j(window).height() - 74;
	$j('.map #area_important_links').css('height', h);
}

function replacePagina(element, lang){
	var pagina = document.getElementById(element);
	var background = "";
	if(pagina != null){
		if(pagina.currentStyle) {
			var background = pagina.currentStyle.backgroundImage;
		} else {
			var background = document.defaultView.getComputedStyle(pagina, null).getPropertyValue('background-image');
		}
		var orgBackground = background;

		var index = background.lastIndexOf('\.');
		if(index != -1 && lang != 'pl'){
			var browser = null;
			browser = navigator.vendor;
			if(browser != null){
				if(browser.indexOf('Apple') != -1){
					browser = 'Safari';
				}
				if(browser.indexOf('Google') != -1){
					browser = 'Chrome';
				}
			}
			background = background.substring(0, index-2) + lang + background.substring(index);

			var image = new Image();
			if('Safari' == browser || 'Chrome' == browser || 'Maxthon Asia Ltd.' == browser){
				image.src = background.substring(4, background.length-1);
			} else {
				image.src = background.substring(5, background.length-2);
			}

			image.onload=function(){pagina.style.background = background;pagina.style.backgroundRepeat = "no-repeat";}
			image.onerror=function(){pagina.style.background = orgBackground;}
			pagina.style.backgroundRepeat = "no-repeat";
		}
	}
}


var initializeMegaBanner = function(instance) {
	if ($j('#promotion_big .banner').length > 1) {
		initializeMegaBannerNavigation(instance);
	}
}
var mbID = 1;
var mbInterval = null;
var initializeMegaBannerNavigation = function(instance) {
	for(var i = 1; i <= $j('#promotion_big .banner').length; i++) {
		$j('#megabanner_navigation ul').append('<li><a href="#'+i+'" onclick="return megabanner('+i+')">'+i+'</a></li>');
	}
	$j('#megabanner_navigation').fadeIn(500);
	megabanner(1);
}
var megabannerCompute = function() {
	if (mbID < 1) {
		mbID = $j('#promotion_big .banner').length;
	} else if (mbID > $j('#promotion_big .banner').length) {
		mbID = 1;
	}
}
var megabanner = function(id) {
	mbID = id;
	megabannerCompute();
	megabannerRotator();
	return false;
}
var megabannerRotatorInterval = function() {
	mbID++;
	megabannerCompute();
	megabannerRotator();
	return true;
}
var megabannerRotator = function() {

	for (var i = 0 ; i < $j('#promotion_big .banner').length; i++) {
		if (i == mbID - 1) {
			$j($j('#promotion_big .banner').get(i)).fadeIn(500);
		} else {
			$j($j('#promotion_big .banner').get(i)).fadeOut(500);
		}
	}

	$j('#megabanner_navigation ul a').removeClass('selected');
	$j($j('#megabanner_navigation ul a').get(mbID-1)).addClass('selected');

	mbInterval ? clearInterval(mbInterval) : null;
	mbInterval = setTimeout(megabannerRotatorInterval, 500 + 6000);
}
var updateShadowPosition = function (mode) {
	switch (mode) {
	case "show": {
			$j("div#kreacja_shadow_small").each(function () {
				switch ($j(this).attr("class")) {
				case "element_2": {
						$j(this).css("top", "322px");
					}break;
				case "element_3": {
						$j(this).css("top", "439px");
					}break;
				default: {
						$j(this).css("top", "205px");
					}
				}
			});
		}break;
	case "hide": {
			$j("div#kreacja_shadow_small").each(function () {
				switch ($j(this).attr("class")) {
				case "element_2": {
						$j(this).css("top", "279px");
					}break;
				case "element_3": {
						$j(this).css("top", "395px");
					}break;
				default: {
						$j(this).css("top", "161px");
					}
				}
			});
		}break;
	}
}
