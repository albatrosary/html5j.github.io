function fontplusloadc21a2e2f(){var v8=['I-OTF-UDゴ本文Pro RA'],oth_fonts=[],nicknames=[],eot_files=['b70a0588ec96bce40ff844af3f50fdc789f1eaa0'];var v7=document.getElementsByTagName("script");var v2=v7[v7.length-1].src;var M=v2.slice(0,v2.lastIndexOf("/")+1);var v9=String(document.location).substring(0,String(document.location).indexOf(":"))+"://";var B="http://webfont.fontplus.jp/".replace("http://",v9);var S1=function(C,v,h){var N=C.toLowerCase();for(h=v.length;h--&&v[h].toLowerCase()!=N;);return h};var J=function(N){return N.replace(/^\s+|\s+$/g,'')};var F=function(){var N=['MSIE','Firefox','Chrome','Safari','Opera'],agent=navigator.userAgent,name,ver,mode,n,i,os,fd='fontplus-unused';name=ver=mode=n='';for(i in N){if(!N.hasOwnProperty(i))continue;if(agent.indexOf(N[i])!=-1){name=N[i];n=N[i].substr(0,1);if(name=='Opera'&&agent.match(/; Opera (Mobi|Tablet)\/(.*) Version\/([0-9\.]+)/)){name+=' Mobile';ver=RegExp.$3;n='T'}else if(agent.match(/(iPad|iPhone); (.*) OS ([0-9_]+) like /)){name+=' iOS';ver=RegExp.$3.replace(/_/g,'.');n='I';os='iOS'}else if(agent.match(/Android ([0-9\.]+)/)){name=os='Android';ver=RegExp.$1;n='A'}else if(agent.match(/Version\/([0-9\.]+)/))ver=RegExp.$1;else if(agent.match(RegExp(name+"[\/ ]([0-9\.]+)")))ver=RegExp.$1;break}}if(!name){name='Unknown:'+agent;ver=99;n='U'}if(!os){if(agent.match(/Windows Phone/))os='Windows Phone';else if(agent.match(/Windows/)){if(agent.match(/NT 5.(1|2; (Win|WOW)64)/)){os='WindowsXP'}else{os='Windows'}}else if(agent.match(/Macintosh/))os='Macintosh';else if(agent.match(/Linux/))os='Linux';else os='Unknown:'+agent}if(n=='M'){mode=document.documentMode?document.documentMode:5;if(parseInt(ver)<9)fd='Courier New'}else if(n=='O')fd='Courier New';else if(n=='T')fd='Droid Sans';return{'name':name,'ver':ver,'mode':mode,'os':os,'fd':fd,'n':n,'v':parseFloat(ver)}};var v1=function(N){var C=[],i=0,n=N.firstChild;while((N=n)){if(N.nodeType===1)C[i++]=N;n=N.firstChild||N.nextSibling;while(!n&&(N=N.parentNode))n=N.nextSibling}return C};var I=function(g){var h6=new Array();if(!document.getElementsByTagName)return h6;g=g.replace(/\s*([^\w])\s*/g,"$1");var d=g.split(",");var r=function(h,v){if(!v)v='*';var S=new Array;for(var N=0,len=h.length;con=h[N],N<len;N++){var V;if(v=='*')V=con.all?con.all:con.getElementsByTagName("*");else V=con.getElementsByTagName(v);for(var C=0,leng=V.length;C<leng;C++)S.push(V[C])}return S};COMMA:for(var h0=0,len1=d.length;selector=d[h0],h0<len1;h0++){var q=new Array(document);var A=selector.split(" ");SPACE:for(var C0=0,len2=A.length;element=A[C0],C0<len2;C0++){var C4=element.indexOf("[");var t=element.indexOf("]");var p=element.indexOf("#");if(p+1&&!(p>C4&&p<t)){var h5=element.split("#");var l=h5[0];var c=h5[1];var h1=document.getElementById(c);if(!h1||(l&&h1.nodeName.toLowerCase()!=l)){continue COMMA}q=new Array(h1);continue SPACE}p=element.indexOf(".");if(p+1&&!(p>C4&&p<t)){var h5=element.split('.');var l=h5[0];var R=h5[1];var Z=r(q,l);q=new Array;for(var h4=0,len=Z.length;fnd=Z[h4],h4<len;h4++){if(fnd.className&&fnd.className.match(new RegExp('(^|\s)'+R+'(\s|$)')))q.push(fnd)}continue SPACE}if(element.indexOf('[')+1){if(element.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?['"]?([^\]'"]*)['"]?\]$/)){var l=RegExp.$1;var m=RegExp.$2;var x=RegExp.$3;var h2=RegExp.$4}var Z=r(q,l);q=new Array;for(var h4=0,len=Z.length;fnd=Z[h4],h4<len;h4++){if(x=='='&&fnd.getAttribute(m)!=h2)continue;if(x=='~'&&!fnd.getAttribute(m).match(new RegExp('(^|\\s)'+h2+'(\\s|$)')))continue;if(x=='|'&&!fnd.getAttribute(m).match(new RegExp('^'+h2+'-?')))continue;if(x=='^'&&fnd.getAttribute(m).indexOf(h2)!=0)continue;if(x=='$'&&fnd.getAttribute(m).lastIndexOf(h2)!=(fnd.getAttribute(m).length-h2.length))continue;if(x=='*'&&!(fnd.getAttribute(m).indexOf(h2)+1))continue;else if(!fnd.getAttribute(m))continue;q.push(fnd)}continue SPACE}var Z=r(q,element);q=Z}for(var h7=0,len=q.length;h7<len;h7++)h6.push(q[h7])}return h6};var v4=function(){var C=document;var N=v1(C);u(N);D(C)};var u=function(N){var C,k;for(k=N.length;k--;){if((C=h9(N[k]))==null)continue;v0(N[k],C)}};var D=function(N){for(var C=N.styleSheets.length;C--;)f(N.styleSheets[C])};var f=function(v){var N,sc,st,act,p_cls;try{N=v.cssRules?v.cssRules:v.rules}catch(e){N=null}if(!N)return;for(var C=N.length;C--;){try{sc=N[C].styleSheet}catch(e){sc=null}if(sc)f(sc);if(!N[C].selectorText)continue;var V=N[C].selectorText.match(/(:link|:visited|:hover|:active)/ig);if(V&&V.length&&N[C].style.fontFamily.length){act=N[C].selectorText.replace(/:link|:visited|:hover|:active/ig,"");p_cls=I(act);for(var h=p_cls.length;h--;){if((st=h9(p_cls[h]))==null||J(st)==J(N[C].style.fontFamily)){continue}v0(p_cls[h],N[C].style.fontFamily)}}}};var h9=function(N){return N.currentStyle?N.currentStyle['fontFamily']:(document.defaultView?document.defaultView.getComputedStyle(N,null).getPropertyValue('fontFamily'):null)};var v0=function(h,N){var C=N.replace(/'/g,"").replace(/"/g,"").split(","),idx,nst=false;for(var v=0;v<C.length;v++){C[v]=J(C[v]);if(S1(C[v],oth_fonts)>=0){continue}idx=S1(C[v],v8);if(idx<0){oth_fonts.push(C[v]);continue}if(!nst)nst=N.replace(/'/g,"").replace(/"/g,"");if(nicknames[idx]==null)nicknames[idx]='FP-'+b(16);ecp_fa=C[v].replace(/\+/g,"\\+").replace(/\^/g,"\\^").replace(/\$/g,"\\$").replace(/\*/g,"\\*").replace(/\?/g,"\\?").replace(/\./g,"\\.");nst=nst.replace(new RegExp(ecp_fa),nicknames[idx]);break}if(nst)h.style.fontFamily=nst};var b=function(N){var C='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',rand='',i,n=C.length;for(i=N;i--;)rand+=C.charAt(Math.floor(Math.random()*n));return rand};var v3=function(){var N=document.createElement('style');N.setAttribute('type','text/css');N.setAttribute('id','fontplus_ie_css');document.getElementsByTagName("head")[0].appendChild(N);var C="";for(var h=0;h<nicknames.length;h++){if(nicknames[h]){C+="@font-face { font-family: '"+nicknames[h]+"'; src: url('"+M+eot_files[h]+"'); }\n"}}N.styleSheet.cssText=C};var G=function(){var h=2,rsp=2,img=document.createElement('img'),s,tooltip='';img.setAttribute('src',B+"img/common/banner.gif");img.setAttribute('id','fontplus-trial-banner');img.setAttribute('class','fontplus-trial-banner');img.setAttribute('alt',tooltip);img.setAttribute('title',tooltip);s=img.style;s.position='fixed';s.bottom=h+'px';s.right=rsp+'px';s.cursor='pointer';s.zIndex=2147483647;s.textDecoration='none';s.verticalAlign='baseline';s.outline=s.padding=s.margin=s.border=0;if(a.n=='M'&&(a.v<7||parseInt(a.mode)<7)||a.n=='I'){other_scroll=function(){var N,cw,st,sl;if(a.n=='I'){cw=window.innerWidth;N=window.innerHeight;st=window.scrollY;sl=window.scrollX}else{N=document.documentElement.clientHeight||document.body.clientHeight||document.clientHeight||0;cw=document.documentElement.clientWidth||document.body.clientWidth||document.clientWidth||0;st=document.documentElement.scrollTop||document.body.scrollTop||document.scrollTop||0;sl=document.documentElement.scrollLeft||document.body.scrollLeft||document.scrollLeft||0}s.top=(N+st-img.height-rsp)+'px';s.left=(cw+sl-img.width-h)+'px'};s.position='absolute';window.onscroll=window.onresize=other_scroll}var C=new Function("window.open('http://webfont.fontplus.jp/');");img.onclick=C;document.getElementsByTagName("BODY")[0].appendChild(img)};var o=function(){if(V7){v4();v3()}var N=0;if(N){G()}};var a=F();var V7=(a.n=='M'&&a.v<=8&&eot_files.length>0);if(!V7){var h8=document.createElement("link");h8.rel="stylesheet";h8.type="text/css";h8.charset="UTF-8";if(a.os=='Windows'&&a.n!='M'||a.os=='WindowsXP'&&a.n!='C'&&a.n!='S'){h8.href=M+"SubFontCSS_h.css"}else{h8.href=M+"SubFontCSS.css"}document.getElementsByTagName("head")[0].appendChild(h8)}var Q=B+"download/access/fontplus.js?Mxq1yHi4hbM%3D";document.write("<script type='text/javascript' src='"+Q+"&lurl="+encodeURIComponent(document.location)+"'></script>");if(window.attachEvent){window.attachEvent("onload",o)}else if(window.addEventListener){window.addEventListener("load",o,false)}else{window.onload=o}}fontplusloadc21a2e2f();