// build time:Tue Sep 15 2020 08:38:12 GMT+0800 (GMT+08:00)
var e={hostname:"whitebear7396.top",root:"/",statics:"/",favicon:{normal:"images/favicon.ico",hidden:"images/failure.ico"},js:{valine:"js/valine.js",chart:"npm/frappe-charts@1.5.0/dist/frappe-charts.min.iife.min.js",copy_tex:"npm/katex@0/dist/contrib/copy-tex.min.js",mediumzoom:"npm/medium-zoom@1.0.5/dist/medium-zoom.min.js"},css:{valine:"css/comment.css",katex:"npm/katex@0/dist/katex.min.css",mermaid:"css/mermaid.css"},search:null,quicklink:{timeout:3e3,priority:true},audio:["1405283464 || 句号-邓紫棋","512358200|| 打上花火-米津玄師"]};Object.assign(HTMLElement.prototype,{wrap:function(e){this.parentNode.insertBefore(e,this);this.parentNode.removeChild(this);e.appendChild(this)},height:function(e){if(e){this.style.height=typeof e=="number"?e+"px":e}return this.getBoundingClientRect().height},width:function(e){if(e){this.style.width=typeof e=="number"?e+"px":e}return this.getBoundingClientRect().width},top:function(){return this.getBoundingClientRect().top},left:function(){return this.getBoundingClientRect().left},attr:function(e,t){if(t){return this.setAttribute(e,t)}else{return this.getAttribute(e)}},insertAfter:function(e){var t=this.parentNode;if(t.lastChild==this){t.appendChild(e)}else{t.insertBefore(e,this.nextSibling)}},display:function(e){this.style.display=e}});const t=function(e){if(e.indexOf("#")===0){return document.getElementById(e.replace("#",""))}return document.querySelector(e)};t.all=function(e){return document.querySelectorAll(e)};t.each=function(e,n){return t.all(e).forEach(n)};const n=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var i=e.statics.indexOf("//")>0?e.statics:e.root;var a={x:"undefined",y:"undefined"};var s=0;var r,o;const c=document.getElementsByTagName("body")[0];const l=t("body > .container");const d=t(".container > header nav");const u=d.height();const f=t(".container > header");const p=f.height();const m=p-u;const h=t(".back-to-top");const v=t(".chat");const g=t(".container > header .brand .meta");const y=t(".container > header .tool");const L=t(".container > header .tool .player");const w=t("main .sidebar");const b=function(){return t("main > .inner").offsetHeight};const x=function(e){var n=b();if(n>document.body.offsetHeight){t(".sidebar .quick").display("flex");t(".sidebar .panels").height("100vh")}else{t(".sidebar .quick").display("none")}t.each("pre.code span.marked",function(e){e.style.width=null;setTimeout(function(){e.style.width=e.parentNode.scrollWidth-1+"px"},300)})};const E=function(e){var n=window.innerHeight;var i=b();var r=i>n?i-n:document.body.scrollHeight-n;var o=window.pageYOffset>m;var c=window.pageYOffset>0;if(o){t('meta[name="theme-color"]').setAttribute("content","#FFF")}else{t('meta[name="theme-color"]').setAttribute("content","#222")}d.classList.toggle("show",o);g.classList.toggle("affix",c);y.classList.toggle("affix",c);w.classList.toggle("affix",o&&document.body.offsetWidth>991);if(typeof a.y=="undefined"){a.y=window.pageYOffset}s=a.y-window.pageYOffset;if(s<0){d.classList.remove("up");d.classList.toggle("down",o)}else if(s>0){d.classList.remove("down");d.classList.toggle("up",o)}else{}a.y=window.pageYOffset;var l=Math.round(Math.min(100*window.pageYOffset/r,100))+"%";h.querySelector("span").innerText=l;t(".percent").style.width=l};const k=function(e){t(".toggle.menu").classList.toggle("close");var n=w.classList.contains("on")?"transition.slideRightOut":"transition.slideRightIn";Velocity(w,n,{duration:200,complete:function(){w.classList.toggle("on")}})};const C=function(){t.each(".menu .item",function(t){var n=t.querySelector("a[href]");if(!n)return;var i=n.pathname===location.pathname||n.pathname===location.pathname.replace("index.html","");var a=!e.root.startsWith(n.pathname)&&location.pathname.startsWith(n.pathname);var s=n.hostname===location.hostname&&(i||a);t.classList.toggle("active",s);t.parentNode.parentNode.classList.toggle("expand",t.parentNode.classList.contains("sub")&&t.parentNode.querySelector(".active"))})};const N=function(){var e=t(".sidebar .inner");var n=t.all(".sidebar .panel");if(t(".sidebar ul.tab")){e.removeChild(t(".sidebar ul.tab"))}var i=document.createElement("ul"),a="active";i.className="tab";["contents","related","overview"].forEach(function(e){var n=t(".sidebar .panel."+e);if(n.innerHTML.replace(/(^\s*)|(\s*$)/g,"").length<1){return}var s=document.createElement("li");var r=document.createElement("span");var o=document.createTextNode(n.attr("data-title"));r.appendChild(o);s.appendChild(r);s.classList.add(e);if(a){n.classList.add(a);s.classList.add(a)}else{n.classList.remove("active")}s.addEventListener("click",function(e){var n=event.currentTarget;if(n.classList.contains("active"))return;t.each(".sidebar .tab li",function(e){e.classList.remove("active")});t.each(".sidebar .panel",function(e){e.classList.remove("active")});t(".sidebar .panel."+n.className).classList.add("active");Velocity(t(".sidebar .panels > .inner"),"finish");Velocity(t(".sidebar .panels > .inner"),"transition.slideUpBigIn");n.classList.add("active")});i.appendChild(s);a=""});if(i.childNodes.length>1){e.insertBefore(i,e.childNodes[0]);t(".sidebar .panels").style.paddingTop=""}else{t(".sidebar .panels").style.paddingTop="10px"}};const T=function(){var e=t.all(".contents li");if(e.length<1){return}var n=Array.prototype.slice.call(e)||[];var i=null;n=n.map(function(e,n){var a=e.querySelector("a.toc-link");var s=t(decodeURI(a.attr("href")));var o=s.querySelector("a.anchor");var c=function(e){e.preventDefault();var a=t(decodeURI(e.currentTarget.attr("href")));i=n;S(window.pageYOffset+a.top()-a.height()-m-u,function(){r(n);i=null})};a.addEventListener("click",c);o&&o.addEventListener("click",c);return s});var a=t(".sidebar .panels .inner");var r=function(i,s){var r=e[i];if(!r)return;if(r.classList.contains("current")){return}t.each(".toc .active",function(e){e.classList.remove("active","current")});n.forEach(function(e){e.classList.remove("active")});r.classList.add("active","current");n[i].classList.add("active");var o=r.parentNode;while(!o.matches(".contents")){if(o.matches("li")){o.classList.add("active");var c=t(o.querySelector("a.toc-link").attr("href"));if(c){c.classList.add("active")}}o=o.parentNode}Velocity(r,"scroll",{container:a,offset:-(a.offsetHeight/2)})};var o=function(e){var t=0;var i=e[t];if(i.boundingClientRect.top>0){t=n.indexOf(i.target);return t===0?0:t-1}for(;t<e.length;t++){if(e[t].boundingClientRect.top<=0){i=e[t]}else{return n.indexOf(i.target)}}return n.indexOf(i.target)};var c=function(){var e=new IntersectionObserver(function(e,t){var n=o(e)+(s<0?1:0);if(i===null){r(n)}},{rootMargin:"0px 0px -100% 0px",threshold:0});n.forEach(function(t){t&&e.observe(t)})};c()};const O=function(){t.each(".md img",function(e){var t;if(t=e.attr("title")){var n=document.createElement("span");var i=document.createTextNode(t);n.appendChild(i);n.classList.add("image-info");e.insertAfter(n)}});if(t(".md :not(a) > img, .md > img")){LOCAL["mediumzoom"]=true;j("mediumzoom",function(){window.mediumZoom(".md :not(a) > img, .md > img",{background:"rgba(0, 0, 0, 0.6)"})},window.mediumZoom)}t.each("li ruby",function(e){var t=e.parentNode;if(e.parentNode.tagName!="LI"){t=e.parentNode.parentNode}t.classList.add("ruby")});t.each("figure.highlight",function(e){var n=e.querySelector(".code-container");var i=function(){e.classList.remove("fullscreen");t("html").classList.remove("fullscreen")};if(n&&n.height()>300){n.style.maxHeight="300px";n.insertAdjacentHTML("beforeend",'<div class="show-btn"><i class="ic i-angle-down"></i></div>');var a=n.querySelector(".show-btn");var s=a.querySelector("i");var r=function(){n.style.maxHeight="";a.classList.add("open")};var o=function(){n.style.maxHeight="300px";a.classList.remove("open")};a.addEventListener("click",function(e){if(a.classList.contains("open")){i();o();Velocity(n.parentNode,"scroll")}else{r()}})}e.insertAdjacentHTML("beforeend",'<div class="copy-btn"><i class="ic i-clipboard fa-fw"></i></div>');var c=e.querySelector(".copy-btn");c.addEventListener("click",function(e){var t=e.currentTarget;var n=t.parentNode.querySelector("pre.code").innerText;var i=document.createElement("textarea");i.style.top=window.scrollY+"px";i.style.position="absolute";i.style.opacity="0";i.readOnly=true;i.value=n;document.body.append(i);const a=document.getSelection();const s=a.rangeCount>0?a.getRangeAt(0):false;i.select();i.setSelectionRange(0,n.length);i.readOnly=false;var r=document.execCommand("copy");t.querySelector("i").className=r?"ic i-check":"ic i-times";i.blur();t.blur();if(s){a.removeAllRanges();a.addRange(s)}document.body.removeChild(i)});c.addEventListener("mouseleave",function(e){setTimeout(function(){e.target.querySelector("i").className="ic i-clipboard"},300)});e.querySelector("figcaption").addEventListener("click",function(a){if(e.classList.contains("fullscreen")){i();o&&o();Velocity(n.parentNode,"scroll")}else{e.classList.add("fullscreen");t("html").classList.add("fullscreen");r&&r()}})});t.each(".md table",function(e){const t=document.createElement("div");t.className="table-container";e.wrap(t)});t.each("pre.mermaid > svg",function(e){e.style.maxWidth=""});t.each(".reward button",function(e){e.addEventListener("click",function(e){e.preventDefault();var n=t("#qr");if(n.style.display==="inline-flex"){Velocity(n,"fadeOut")}else{Velocity(n,"transition.slideUpBigIn",{display:"inline-flex"})}})});t.each(".quiz > ul.options li",function(e){e.addEventListener("click",function(t){if(e.classList.contains("correct")){e.classList.toggle("right");e.parentNode.parentNode.classList.add("show")}else{e.classList.toggle("wrong")}})});t.each(".quiz > p",function(e){e.addEventListener("click",function(t){e.parentNode.classList.toggle("show")})});t.each("div.tab",function(e,n){var i=e.attr("data-id");var a=e.attr("data-title");var s=t("#"+i);if(!s){s=document.createElement("div");s.className="tabs";s.id=i;e.parentNode.insertBefore(s,e);r=document.createElement("ul");r.classList.add("nav");s.appendChild(r)}var r=s.querySelector(".nav");if(!r){r=document.createElement("ul");r.classList.add("nav");s.appendChild(r)}var o=document.createElement("li");o.innerHTML=a;if(n==0){o.classList.add("active");e.classList.add("active")}o.addEventListener("click",function(t){var n=t.currentTarget;s.querySelectorAll(".active").forEach(function(e){e.classList.remove("active")});e.classList.add("active");n.classList.add("active")});r.appendChild(o);s.appendChild(e)});V()};const S=function(e,n){Velocity(t("main .content"),"scroll",{duration:500,offset:e,complete:n||function(){}})};const q=function(){S(-p)};const A=function(){S(b()+t(".container > footer").offsetHeight)};const I=function(){S(window.pageYOffset+t("#comments").top()-u)};const M=function(e,t,n){if(n){t()}else{var i=document.createElement("script");i.onload=i.onreadystatechange=function(e,n){if(n||!i.readyState||/loaded|complete/.test(i.readyState)){i.onload=i.onreadystatechange=null;i=undefined;if(!n&&t)setTimeout(t,0)}};i.src=e;document.head.appendChild(i)}};const H=function(t,n){return(e[t][n].indexOf("npm")>-1?"//cdn.jsdelivr.net/":i)+e[t][n]};const j=function(e,t,n){if(LOCAL[e]){M(H("js",e),t||function(){window[e]=true},n||window[e])}};const R=function(e,t){if(window["css"+e])return;if(LOCAL[e]){var n=document.createElement("link");n.setAttribute("rel","stylesheet");n.href=H("css",e);document.head.appendChild(n);window["css"+e]=true}};const V=function(){var e=t("#comments");if(!e){v.display("none");return}else{v.display("")}var n=new IntersectionObserver(function(n,i){j("valine",function(){var a=n[0];R("valine");if(a.isIntersecting){var s={appId:null,appKey:null,placeholder:"ヽ(○´∀`)ﾉ♪",avatar:"mp",pageSize:10,lang:"en",visitor:true,recordIP:true,serverURLs:null,requiredFields:["nick","mail"],enableQQ:true,masters:["master@email.com","master2@email.com"],masterTag:"主人",tips:"昵称框中填入QQ号，将自动获取QQ昵称&邮箱&头像；其他邮箱由Gavatar提供头像。"};s.el="#comments";s.path=e.attr("data-id");new Valine(s);Velocity(t("#comments"),"transition.bounceUpIn");i.disconnect()}},window.Valine)});n.observe(e)};const B=function(e){window.sessionStorage.setItem(e,a.y-m-u)};const z=function(n){if(e.search===null)return;var i=instantsearch({indexName:e.search.indexName,searchClient:algoliasearch(e.search.appID,e.search.apiKey),searchFunction:function(e){var n=t(".search-input");if(n.value){e.search()}}});i.on("render",function(){n.refresh(t("#search-hits"))});i.addWidgets([instantsearch.widgets.configure({hitsPerPage:e.search.hits.per_page||10}),instantsearch.widgets.searchBox({container:".search-input-container",placeholder:LOCAL.search.placeholder,showReset:false,showSubmit:false,showLoadingIndicator:false,cssClasses:{input:"search-input"}}),instantsearch.widgets.stats({container:"#search-stats",templates:{text:function(e){var t=LOCAL.search.stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS);return t+'<span class="algolia-powered"></span><hr>'}}}),instantsearch.widgets.hits({container:"#search-hits",templates:{item:function(t){var n=t.categories.join('<i class="ic i-angle-right"></i>');return'<a href="'+e.root+t.path+'"><span>'+n+"</span>"+t._highlightResult.title.value+"</a>"},empty:function(e){return'<div id="hits-empty">'+LOCAL.search.empty.replace(/\$\{query}/,e.query)+"</div>"}},cssClasses:{item:"item"}}),instantsearch.widgets.pagination({container:"#search-pagination",scrollTo:false,showFirst:false,showLast:false,templates:{first:'<i class="ic i-angle-double-left"></i>',last:'<i class="ic i-angle-double-right"></i>',previous:'<i class="ic i-angle-left"></i>',next:'<i class="ic i-angle-right"></i>'},cssClasses:{root:"pagination",item:"pagination-item",link:"page-number",selectedItem:"current",disabledItem:"disabled-item"}})]);i.start();t.each(".search-btn",function(e){e.addEventListener("click",function(){document.body.style.overflow="hidden";Velocity(t(".search"),"transition.shrinkIn",{duration:200,complete:function(){t(".search-input").focus()}})})});const a=function(){document.body.style.overflow="";Velocity(t(".search"),"transition.shrinkOut")};t(".search").addEventListener("click",function(e){if(e.target===t(".search")){a()}});t(".close-btn").addEventListener("click",a);window.addEventListener("pjax:success",a);window.addEventListener("keyup",function(e){if(e.key==="Escape"){a()}})};const Y={timer:null,lock:false,show:function(){clearTimeout(this.timer);document.body.classList.remove("loaded");Velocity(t(".loading"),"fadeIn",{display:"flex",complete:function(){Y.lock=false}})},hide:function(e){this.timer=setTimeout(this.vanish,e||3e3)},vanish:function(){if(Y.lock)return;Velocity(t(".loading"),"fadeOut");P();Y.lock=true}};const P=function(){document.body.classList.add("loaded");var e=t("main > .inner > .content > .wrap");var n=e.style.display;Velocity(e,"transition.bounceUpIn",{display:n,complete:function(){e.style.transform=""}})};const U=function(e){if(!e)return;var t=document.createElement("div");t.innerHTML=e;t.classList.add("tip");c.appendChild(t);window.setTimeout(function(){c.removeChild(t)},3e3)};const F=function(){t.each("span.exturl",function(e){var t=document.createElement("a");t.href=decodeURIComponent(atob(e.dataset.url).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""));t.rel="noopener external nofollow noreferrer";t.target="_blank";t.className=e.className;t.title=e.title||e.innerText;t.innerHTML=e.innerHTML;if(e.dataset.backgroundImage){t.dataset.backgroundImage=e.dataset.backgroundImage}e.parentNode.replaceChild(t,e)})};const Q=function(){B(window.location.href);if(w.classList.contains("on")){Velocity(w,"transition.slideRightOut",{duration:200,complete:function(){w.classList.remove("on");t(".toggle.menu").classList.remove("close")}})}t(".content").innerHTML="";var e=t(".loading").cloneNode(true);Velocity(e,"fadeIn",{duration:200});t(".content").appendChild(e)};const W=function(e){var t=e.text||e.textContent||e.innerHTML||"";var n=e.parentNode;n.removeChild(e);var i=document.createElement("script");if(e.id){i.id=e.id}if(e.className){i.className=e.className}if(e.type){i.type=e.type}if(e.src){i.src=e.src;i.async=false}if(e.dataset.pjax!==undefined){i.dataset.pjax=""}if(t!==""){i.appendChild(document.createTextNode(t))}n.appendChild(i)};const _=function(e){if(e){window.document.documentElement.setAttribute("data-theme",e)}else{window.document.documentElement.removeAttribute("data-theme")}};const D=function(){window.matchMedia("(prefers-color-scheme: dark)").addListener(function(e){if(e.matches){_("dark")}else{_()}});t(".theme-btn").addEventListener("click",function(e){var t=e.currentTarget.querySelector(".ic");if(t.classList.contains("i-sun")){_("dark");t.classList.remove("i-sun");t.classList.add("i-moon")}else{_();t.classList.remove("i-moon");t.classList.add("i-sun")}})};const $=function(){document.addEventListener("visibilitychange",function(){switch(document.visibilityState){case"hidden":t('[rel="icon"]').attr("href",i+e.favicon.hidden);document.title=LOCAL.favicon.hide;Y.show();clearTimeout(o);break;case"visible":t('[rel="icon"]').attr("href",i+e.favicon.normal);document.title=LOCAL.favicon.show;Y.hide(1e3);o=setTimeout(function(){document.title=r},2e3);break}})};const K=function(e){var t=this,n={btns:["play-pause","music"],events:{"play-pause":function(e){if(t.player.media.paused){t.player.play()}else{t.player.pause()}},music:function(e){t.player.list.classList.toggle("on")}}};t.player={id:Math.floor(Math.random()*1e5),index:-1,media:null,buttons:{},utils:{random:function(e){return Math.floor(Math.random()*e)},list:function(e){return e.map(function(e){var e=e.split("||");var t=e[0].trim();return{url:t.indexOf("//")>0?t:"http://music.163.com/song/media/outer/url?id="+t+".mp3",title:e[1].trim()}})}},getSource:function(e){var n=this.options.mediaList.length;var i=function(e){if(e+1==n){e=-1}t.player.index=++e};switch(e){case"random":var a=this.utils.random(n);if(this.index!==a){this.index=a}else{i(this.index)}break;case"next":i(this.index);break}return this.options.mediaList[this.index]},refresh:function(e){if(e){if(this.options.rawList!==e){this.options.rawList=e;this.options.mediaList=this.utils.list(e);this.set("random");this.setPlayList()}}},set:function(e){var t=this.getSource(e);var n=false;if(!this.media.paused){n=true;this.stop()}this.media.attr("src",t.url);this.media.attr("title",t.title);if(n==true){this.play()}},setPlayList:function(){var e=t.player.list.querySelector("ul");e.innerHTML="";this.options.mediaList.forEach(function(n,i){var a=document.createElement("li");a.innerHTML=n.title;a.addEventListener("click",function(e){var n=t.player.list.querySelectorAll("li")[t.player.index];if(t.player.index==i&&t.player.progress){if(t.player.media.paused){t.player.play()}else{t.player.media.currentTime=t.player.media.duration*Math.floor(e.clientX-n.left())/n.width()}return}t.player.setCurrent(i);t.player.play()});e.appendChild(a)});t.player.setCurrent(t.player.index)},setCurrent:function(e){if(e!=this.index){var n=this.list.querySelectorAll("li");if(n[this.index]){n[this.index].classList.remove("current");this.progress&&n[this.index].removeChild(this.progress)}if(e){this.index=e;this.set()}else{this.set("next")}}var i=t.player.list.querySelectorAll("li");if(i[this.index]){i[this.index].classList.add("current");var a=document.createElement("div");i[this.index].appendChild(a);this.progress=a}},pause:function(){this.media.pause()},play:function(){this.media.play()},stop:function(){this.media.pause();this.media.currentTime=0}};var i={button:function(e){if(!t.player.buttons[e]){var n=document.createElement("div");n.classList.add(e);n.addEventListener("click",t.player.options.events[e]||function(){});t.appendChild(n);t.player.buttons[e]=n}},audio:function(){if(!t.player.media){var e=document.createElement("audio");e.addEventListener("play",function(){t.classList.add("playing");U(t.player.media.attr("title"))});e.addEventListener("pause",function(){t.classList.remove("playing")});e.addEventListener("timeupdate",function(){var n=Math.floor(e.currentTime/e.duration*100);t.player.progress.width(n+"%");if(n==100){t.player.setCurrent();t.player.play()}});t.appendChild(e);t.player.media=e}},list:function(){if(!t.player.list){var e=document.createElement("div");e.classList.add("play-list");e.innerHTML='<div class="preview"></div><ul></ul>';t.player.list=e;t.insertAfter(e)}}},a=function(e){if(t.player.created)return;else t.player.created=true;t.player.options=Object.assign(n,e);t.player.options.btns.forEach(i.button);i.audio();i.list()};a()};Object.assign(HTMLElement.prototype,{initPlayer:K});const Z=function(n){R("katex");j("copy_tex");R("mermaid");j("chart");if(!n){t.each("script[data-pjax]",W)}r=document.title;x();C();N();T();O();F();L.player.refresh(LOCAL.audio||e.audio||{});lozad(t.all("img, [data-background-image]"),{loaded:function(e){e.classList.add("lozaded")}}).observe();Y.hide();var i=window.sessionStorage.getItem(window.location.href);if(i){S(i);window.sessionStorage.removeItem(window.location.href)}P();t.each(".card",function(e){["mouseenter","touchstart"].forEach(function(n){e.addEventListener(n,function(n){if(t(".card.active")){t(".card.active").classList.remove("active")}e.classList.add("active")})});["mouseleave"].forEach(function(t){e.addEventListener(t,function(t){e.classList.remove("active")})})})};const G=function(){document.body.oncopy=function(){U(LOCAL.copyright)};var n=new Pjax({selectors:["head title",".languages",".pjax","script[data-config]"],analytics:false,cacheBust:false});e.quicklink.ignores=LOCAL.ignores;quicklink.listen(e.quicklink);$();D();t(".toggle.menu").addEventListener("click",k);t(".dimmer").addEventListener("click",k);t(".quick .down").addEventListener("click",A);t(".quick .up").addEventListener("click",q);h.addEventListener("click",q);t(".loading").addEventListener("click",Y.vanish);window.addEventListener("scroll",E);v.addEventListener("click",I);L.initPlayer();window.addEventListener("resize",x);window.addEventListener("pjax:send",Q);window.addEventListener("pjax:success",Z);window.addEventListener("beforeunload",function(){B(window.location.href)});z(n);Z(1)};window.addEventListener("DOMContentLoaded",G);
//rebuild by hrmmi 