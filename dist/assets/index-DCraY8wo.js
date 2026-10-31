var n_=Object.defineProperty;var i_=(r,e,t)=>e in r?n_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Fe=(r,e,t)=>i_(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function $i(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Hd(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ka={duration:.5,overwrite:!1,delay:0},ef,pn,Ct,pi=1e8,bt=1/pi,Fc=Math.PI*2,r_=Fc/4,s_=0,Vd=Math.sqrt,a_=Math.cos,o_=Math.sin,cn=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},ar=function(e){return typeof e=="number"},tf=function(e){return typeof e>"u"},zi=function(e){return typeof e=="object"},Bn=function(e){return e!==!1},nf=function(){return typeof window<"u"},co=function(e){return zt(e)||cn(e)},Wd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,l_=/random\([^)]+\)/g,c_=/,\s*/g,$f=/(?:-?\.?\d|\.)+/gi,Xd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yd=/[+-]=-?[.\d]+/,u_=/[^,'"\[\]\s]+/gi,f_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,It,Ri,Oc,rf,si={},ul={},qd,$d=function(e){return(ul=qs(e,si))&&Xn},sf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ga=function(e,t){return!t&&console.warn(e)},Kd=function(e,t){return e&&(si[e]=t)&&ul&&(ul[e]=t)||si},Ha=function(){return 0},h_={suppressEvents:!0,isStart:!0,kill:!1},$o={suppressEvents:!0,kill:!1},d_={suppressEvents:!0},af={},Ar=[],Bc={},Zd,Qn={},Wl={},Kf=30,Ko=[],of="",lf=function(e){var t=e[0],n,i;if(zi(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ko.length;i--&&!Ko[i].targetTest(t););n=Ko[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new vp(e[i],n)))||e.splice(i,1);return e},Jr=function(e){return e._gsap||lf(mi(e))[0]._gsap},Jd=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():tf(n)&&e.getAttribute&&e.getAttribute(t)||n},zn=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},Fs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},p_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},fl=function(){var e=Ar.length,t=Ar.slice(0),n,i;for(Bc={},Ar.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},cf=function(e){return!!(e._initted||e._startAt||e.add)},Qd=function(e,t,n,i){Ar.length&&!pn&&fl(),e.render(t,n,!!(pn&&t<0&&cf(e))),Ar.length&&!pn&&fl()},jd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(u_).length<2?t:cn(e)?e.trim():e},ep=function(e){return e},ai=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},m_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},qs=function(e,t){for(var n in t)e[n]=t[n];return e},Zf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=zi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},hl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Aa=function(e){var t=e.parent||It,n=e.keyframes?m_(bn(e.keyframes)):ai;if(Bn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},__=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},tp=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Nl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Pr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},g_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},zc=function(e,t,n,i){return e._startAt&&(pn?e._startAt.revert($o):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},v_=function r(e){return!e||e._ts&&r(e.parent)},Jf=function(e){return e._repeat?$s(e._tTime,e=e.duration()+e._rDelay)*e:0},$s=function(e,t){var n=Math.floor(e=Dt(e/t));return e&&n===e?n-1:n},dl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ul=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},Fl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ul(e),n._dirty||Qr(n,e)),e},np=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=dl(e.rawTime(),t),(!t._dur||eo(0,t.totalDuration(),n)-t._tTime>bt)&&t.render(n,!0)),Qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-bt}},Li=function(e,t,n,i){return t.parent&&Pr(t),t._start=Dt((ar(n)?n:n||e!==It?ci(e,n,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),tp(e,t,"_first","_last",e._sort?"_start":0),kc(t)||(e._recent=t),i||np(e,t),e._ts<0&&Fl(e,e._tTime),e},ip=function(e,t){return(si.ScrollTrigger||sf("scrollTrigger",t))&&si.ScrollTrigger.create(t,e)},rp=function(e,t,n,i,s){if(ff(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!pn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Zd!==ei.frame)return Ar.push(e),e._lazy=[s,i],1},x_=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},kc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},S_=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&x_(e)&&!(!e._initted&&kc(e))||(e._ts<0||e._dp._ts<0)&&!kc(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=eo(0,e._tDur,t),u=$s(l,o),e._yoyo&&u&1&&(a=1-a),u!==$s(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||pn||i||e._zTime===bt||!t&&e._zTime){if(!e._initted&&rp(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?bt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&zc(e,t,n,!0),e._onUpdate&&!n&&ni(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ni(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Pr(e,1),!n&&!pn&&(ni(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},M_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ks=function(e,t,n,i){var s=e._repeat,a=Dt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Dt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Fl(e,e._tTime=e._tDur*o),e.parent&&Ul(e),n||Qr(e.parent,e),e},Qf=function(e){return e instanceof Fn?Qr(e):Ks(e,e._dur)},y_={_start:0,endTime:Ha,totalDuration:Ha},ci=function r(e,t,n){var i=e.labels,s=e._recent||y_,a=e.duration()>=pi?s.endTime(!1):e._dur,o,l,c;return cn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(bn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ra=function(e,t,n){var i=ar(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Bn(l.vars.inherit)&&l.parent;a.immediateRender=Bn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Kt(t[0],a,t[s+1])},Fr=function(e,t){return e||e===0?t(e):t},eo=function(e,t,n){return n<e?e:n>t?t:n},En=function(e,t){return!cn(e)||!(t=f_.exec(e))?"":t[1]},E_=function(e,t,n){return Fr(n,function(i){return eo(e,t,i)})},Gc=[].slice,sp=function(e,t){return e&&zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&zi(e[0]))&&!e.nodeType&&e!==Ri},T_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return cn(i)&&!t||sp(i,1)?(s=n).push.apply(s,mi(i)):n.push(i)})||n},mi=function(e,t,n){return Ct&&!t&&Ct.selector?Ct.selector(e):cn(e)&&!n&&(Oc||!Zs())?Gc.call((t||rf).querySelectorAll(e),0):bn(e)?T_(e,n):sp(e)?Gc.call(e,0):e?[e]:[]},Hc=function(e){return e=mi(e)[0]||Ga("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return mi(t,n.querySelectorAll?n:n===e?Ga("Invalid scope")||rf.createElement("div"):e)}},ap=function(e){return e.sort(function(){return .5-Math.random()})},op=function(e){if(zt(e))return e;var t=zi(e)?e:{each:e},n=jr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return cn(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(f,h,_){var v=(_||t).length,p=a[v],m,S,w,x,E,b,g,M,L;if(!p){if(L=t.grid==="auto"?0:(t.grid||[1,pi])[1],!L){for(g=-pi;g<(g=_[L++].getBoundingClientRect().left)&&L<v;);L<v&&L--}for(p=a[v]=[],m=l?Math.min(L,v)*u-.5:i%L,S=L===pi?0:l?v*d/L-.5:i/L|0,g=0,M=pi,b=0;b<v;b++)w=b%L-m,x=S-(b/L|0),p[b]=E=c?Math.abs(c==="y"?x:w):Vd(w*w+x*x),E>g&&(g=E),E<M&&(M=E);i==="random"&&ap(p),p.max=g-M,p.min=M,p.v=v=(parseFloat(t.amount)||parseFloat(t.each)*(L>v?v-1:c?c==="y"?v/L:L:Math.max(L,v/L))||0)*(i==="edges"?-1:1),p.b=v<0?s-v:s,p.u=En(t.amount||t.each)||0,n=n&&v<0?O_(n):n}return v=(p[f]-p.min)/p.max||0,Dt(p.b+(n?n(v):v)*p.v)+p.u}},Vc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Dt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ar(n)?0:En(n))}},lp=function(e,t){var n=bn(e),i,s;return!n&&zi(e)&&(i=n=e.radius||pi,e.values?(e=mi(e.values),(s=!ar(e[0]))&&(i*=i)):e=Vc(e.increment)),Fr(t,n?zt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=pi,u=0,d=e.length,f,h;d--;)s?(f=e[d].x-o,h=e[d].y-l,f=f*f+h*h):f=Math.abs(e[d]-o),f<c&&(c=f,u=d);return u=!i||c<=i?e[u]:a,s||u===a||ar(a)?u:u+En(a)}:Vc(e))},cp=function(e,t,n,i){return Fr(bn(e)?!t:n===!0?!!(n=0):!i,function(){return bn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},b_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},w_=function(e,t){return function(n){return e(parseFloat(n))+(t||En(n))}},A_=function(e,t,n){return fp(e,t,0,1,n)},up=function(e,t,n){return Fr(n,function(i){return e[~~t(i)]})},R_=function r(e,t,n){var i=t-e;return bn(e)?up(e,r(0,e.length),t):Fr(n,function(s){return(i+(s-e)%i)%i+e})},C_=function r(e,t,n){var i=t-e,s=i*2;return bn(e)?up(e,r(0,e.length-1),t):Fr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Va=function(e){return e.replace(l_,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(c_);return cp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},fp=function(e,t,n,i,s){var a=t-e,o=i-n;return Fr(s,function(l){return n+((l-e)/a*o||0)})},P_=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=cn(e),o={},l,c,u,d,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(bn(e)&&!bn(t)){for(u=[],d=e.length,f=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(_){_*=d;var v=Math.min(f,~~_);return u[v](_-v)},n=t}else i||(e=qs(bn(e)?[]:{},e));if(!u){for(l in t)uf.call(o,e,l,"get",t[l]);s=function(_){return pf(_,o)||(a?e.p:e)}}}return Fr(n,s)},jf=function(e,t,n){var i=e.labels,s=pi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ni=function(e,t,n){var i=e.vars,s=i[t],a=Ct,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ar.length&&fl(),o&&(Ct=o),u=l?s.apply(c,l):s.call(c),Ct=a,u},va=function(e){return Pr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!pn),e.progress()<1&&ni(e,"onInterrupt"),e},Ns,hp=[],dp=function(e){if(e)if(e=!e.name&&e.default||e,nf()||e.headless){var t=e.name,n=zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ha,render:pf,add:uf,kill:q_,modifier:Y_,rawVars:0},a={targetTest:0,get:0,getSetter:df,aliases:{},register:0};if(Zs(),e!==i){if(Qn[t])return;ai(i,ai(hl(e,s),a)),qs(i.prototype,qs(s,hl(e,a))),Qn[i.prop=t]=i,e.targetTest&&(Ko.push(i),af[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Kd(t,i),e.register&&e.register(Xn,i,kn)}else hp.push(e)},Tt=255,xa={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},Xl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Tt+.5|0},pp=function(e,t,n){var i=e?ar(e)?[e>>16,e>>8&Tt,e&Tt]:0:xa.black,s,a,o,l,c,u,d,f,h,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),xa[e])i=xa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Tt,i&Tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Tt,e&Tt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match($f),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Xl(l+1/3,s,a),i[1]=Xl(l,s,a),i[2]=Xl(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Xd),n&&i.length<4&&(i[3]=1),i}else i=e.match($f)||xa.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/Tt,a=i[1]/Tt,o=i[2]/Tt,d=Math.max(s,a,o),f=Math.min(s,a,o),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===s?(a-o)/h+(a<o?6:0):d===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},mp=function(e){var t=[],n=[],i=-1;return e.split(Rr).forEach(function(s){var a=s.match(Is)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},eh=function(e,t,n){var i="",s=(e+i).match(Rr),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(f){return(f=pp(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=mp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Rr,"1").split(Is),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Rr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},Rr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in xa)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),L_=/hsl[a]?\(/,_p=function(e){var t=e.join(" "),n;if(Rr.lastIndex=0,Rr.test(t))return n=L_.test(t),e[1]=eh(e[1],n),e[0]=eh(e[0],n,mp(e[1])),!0},Wa,ei=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,f,h,_=function v(p){var m=r()-i,S=p===!0,w,x,E,b;if((m>e||m<0)&&(n+=m-t),i+=m,E=i-n,w=E-a,(w>0||S)&&(b=++d.frame,f=E-d.time*1e3,d.time=E=E/1e3,a+=w+(w>=s?4:s-w),x=1),S||(l=c(v)),x)for(h=0;h<o.length;h++)o[h](E,f,b,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){qd&&(!Oc&&nf()&&(Ri=Oc=window,rf=Ri.document||{},si.gsap=Xn,(Ri.gsapVersions||(Ri.gsapVersions=[])).push(Xn.version),$d(ul||Ri.GreenSockGlobals||!Ri.gsap&&Ri||{}),hp.forEach(dp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Wa=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Wa=0,c=Ha},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,S){var w=m?function(x,E,b,g){p(x,E,b,g),d.remove(w)}:p;return d.remove(p),o[S?"unshift":"push"](w),Zs(),w},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&h>=m&&h--},_listeners:o},d})(),Zs=function(){return!Wa&&ei.wake()},st={},D_=/^[\d.\-M][\d.\-,\s]/,I_=/["']/g,N_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(I_,"").trim():+c,i=l.substr(o+1).trim();return t},U_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},F_=function(e){var t=(e+"").split("("),n=st[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[N_(t[1])]:U_(e).split(",").map(jd)):st._CE&&D_.test(e)?st._CE("",e):n},O_=function(e){return function(t){return 1-e(1-t)}},jr=function(e,t){return e&&(zt(e)?e:st[e]||F_(e))||t},us=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return zn(e,function(o){st[o]=si[o]=s,st[a=o.toLowerCase()]=n;for(var l in s)st[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=st[o+"."+l]=s[l]}),s},gp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Yl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Fc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*o_((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:gp(o);return s=Fc/s,l.config=function(c,u){return r(e,c,u)},l},ql=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:gp(n);return i.config=function(s){return r(e,s)},i};zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;us(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});st.Linear.easeNone=st.none=st.Linear.easeIn;us("Elastic",Yl("in"),Yl("out"),Yl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};us("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);us("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});us("Circ",function(r){return-(Vd(1-r*r)-1)});us("Sine",function(r){return r===1?1:-a_(r*r_)+1});us("Back",ql("in"),ql("out"),ql());st.SteppedEase=st.steps=si.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-bt;return function(o){return((i*eo(0,a,o)|0)+s)*n}}};ka.ease=st["quad.out"];zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return of+=r+","+r+"Params,"});var vp=function(e,t){this.id=s_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Jd,this.set=t?t.getSetter:df},Xa=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ks(this,+t.duration,1,1),this.data=t.data,Ct&&(this._ctx=Ct,Ct.data.push(this)),Wa||ei.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ks(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Zs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Fl(this,n),!s._dp||s.parent||np(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Li(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===bt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Qd(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Jf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Jf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?$s(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?dl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-bt?0:this._rts,this.totalTime(eo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Ul(this),g_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Dt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Li(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?dl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=d_);var i=pn;return pn=n,cf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Qf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Qf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ci(this,n),Bn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Bn(i)),this._dur||(this._zTime=-bt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-bt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=zt(n)?n:ep,l=function(){var u=i.then;i.then=null,s&&s(),zt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){va(this)},r})();ai(Xa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var Fn=(function(r){Hd(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Bn(n.sortChildren),It&&Li(n.parent||It,$i(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ip($i(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ra(0,arguments,this),this},t.from=function(i,s,a){return Ra(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ra(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Aa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(i,s,ci(this,a),1),this},t.call=function(i,s,a){return Li(this,Kt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Kt(i,a,ci(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Aa(a).immediateRender=Bn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,Aa(o).immediateRender=Bn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Dt(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,h,_,v,p,m,S,w,x,E,b,g;if(this!==It&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,x=this._start,w=this._ts,m=!w,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=Dt(u%p),u===l?(v=this._repeat,f=c):(E=Dt(u/p),v=~~E,v&&v===E&&(f=c,v--),f>c&&(f=c)),E=$s(this._tTime,p),!o&&this._tTime&&E!==v&&this._tTime-E*p-this._dur<=0&&(E=v),b&&v&1&&(f=c-f,g=1),v!==E&&!this._lock){var M=b&&E&1,L=M===(b&&v&1);if(v<E&&(M=!M),o=M?0:u%c?c:u,this._lock=1,this.render(o||(g?0:Dt(v*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!g&&(this.invalidate()._lock=1,E=v),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,L&&(this._lock=2,o=M?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!g&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=M_(this,Dt(o),Dt(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!E&&(ni(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(h=this._first;h;){if(_=h._next,(h._act||f>=h._start)&&h._ts&&S!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,s,a),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=-bt);break}}h=_}else{h=this._last;for(var R=i<0?i:f;h;){if(_=h._prev,(h._act||R<=h._end)&&h._ts&&S!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(R-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(R-h._start)*h._ts,s,a||pn&&cf(h)),f!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=R?-bt:bt);break}}h=_}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-bt)._zTime=f>=o?1:-1,this._ts))return this._start=x,Ul(this),this.render(i,s,a);this._onUpdate&&!s&&ni(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Pr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(ni(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ar(s)||(s=ci(this,s,i)),!(i instanceof Xa)){if(bn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(cn(i))return this.addLabel(i,s);if(zt(i))i=Kt.delayedCall(0,i);else return this}return this!==i?Li(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-pi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Kt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return cn(i)?this.removeLabel(i):zt(i)?this.killTweensOf(i):(i.parent===this&&Nl(this,i),i===this._recent&&(this._recent=this._last),Qr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt(ei.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ci(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Kt.delayedCall(0,s||Ha,a);return o.data="isPause",this._hasPause=1,Li(this,o,ci(this,i))},t.removePause=function(i){var s=this._first;for(i=ci(this,i);s;)s._start===i&&s.data==="isPause"&&Pr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Sr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=mi(i),l=this._first,c=ar(s),u;l;)l instanceof Kt?p_(l._targets,o)&&(c?(!Sr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=ci(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,_=Kt.to(a,ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||bt,onStart:function(){if(a.pause(),!h){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&Ks(_,p,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ai({startAt:{time:ci(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),jf(this,ci(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),jf(this,ci(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Dt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Qr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=pi,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Li(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Dt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ks(a,a===It&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(It._ts&&(Qd(It,dl(i,It)),Zd=ei.frame),ei.frame>=Kf){Kf+=ri.autoSleep||120;var s=It._first;if((!s||!s._ts)&&ri.autoSleep&&ei._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ei.sleep()}}},e})(Xa);ai(Fn.prototype,{_lock:0,_hasPause:0,_forcing:0});var B_=function(e,t,n,i,s,a,o){var l=new kn(this._pt,e,t,0,1,Tp,null,s),c=0,u=0,d,f,h,_,v,p,m,S;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Va(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(Vl)||[];d=Vl.exec(i);)_=d[0],v=i.substring(c,d.index),h?h=(h+1)%5:v.substr(-5)==="rgba("&&(h=1),_!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:v||u===1?v:",",s:p,c:_.charAt(1)==="="?Fs(p,_)-p:parseFloat(_)-p,m:h&&h<4?Math.round:0},c=Vl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Yd.test(i)||m)&&(l.e=0),this._pt=l,l},uf=function(e,t,n,i,s,a,o,l,c,u){zt(i)&&(i=i(s||0,e,a));var d=e[t],f=n!=="get"?n:zt(d)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,h=zt(d)?c?V_:yp:hf,_;if(cn(i)&&(~i.indexOf("random(")&&(i=Va(i)),i.charAt(1)==="="&&(_=Fs(f,i)+(En(f)||0),(_||_===0)&&(i=_))),!u||f!==i||Wc)return!isNaN(f*i)&&i!==""?(_=new kn(this._pt,e,t,+f||0,i-(f||0),typeof d=="boolean"?X_:Ep,0,h),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&sf(t,i),B_.call(this,e,t,f,i,h,l||ri.stringFilter,c))},z_=function(e,t,n,i,s){if(zt(e)&&(e=Ca(e,s,t,n,i)),!zi(e)||e.style&&e.nodeType||bn(e)||Wd(e))return cn(e)?Ca(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ca(e[o],s,t,n,i);return a},xp=function(e,t,n,i,s,a){var o,l,c,u;if(Qn[e]&&(o=new Qn[e]).init(s,o.rawVars?t[e]:z_(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new kn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ns))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Sr,Wc,ff=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,h=i.autoRevert,_=e._dur,v=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,w=e._overwrite==="auto"&&!ef,x=e.timeline,E=i.easeReverse||d,b,g,M,L,R,N,I,k,D,z,Y,P,G;if(x&&(!f||!s)&&(s="none"),e._ease=jr(s,ka.ease),e._rEase=E&&(jr(E)||e._ease),e._from=!x&&!!i.runBackwards,e._from&&(e.ratio=1),!x||f&&!i.stagger){if(k=p[0]?Jr(p[0]).harness:0,P=k&&i[k.prop],b=hl(i,af),v&&(v._zTime<0&&v.progress(1),t<0&&u&&o&&!h?v.render(-1,!0):v.revert(u&&_?$o:h_),v._lazy=0),a){if(Pr(e._startAt=Kt.set(p,ai({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!v&&Bn(l),startAt:null,delay:0,onUpdate:c&&function(){return ni(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn||!o&&!h)&&e._startAt.revert($o),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!v){if(t&&(o=!1),M=ai({overwrite:!1,data:"isFromStart",lazy:o&&!v&&Bn(l),immediateRender:o,stagger:0,parent:m},b),P&&(M[k.prop]=P),Pr(e._startAt=Kt.set(p,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn?e._startAt.revert($o):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Bn(l)||l&&!_,g=0;g<p.length;g++){if(R=p[g],I=R._gsap||lf(p)[g]._gsap,e._ptLookup[g]=z={},Bc[I.id]&&Ar.length&&fl(),Y=S===p?g:S.indexOf(R),k&&(D=new k).init(R,P||b,e,Y,S)!==!1&&(e._pt=L=new kn(e._pt,R,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(O){z[O]=L}),D.priority&&(N=1)),!k||P)for(M in b)Qn[M]&&(D=xp(M,b,e,Y,R,S))?D.priority&&(N=1):z[M]=L=uf.call(e,R,M,"get",b[M],Y,S,0,i.stringFilter);e._op&&e._op[g]&&e.kill(R,e._op[g]),w&&e._pt&&(Sr=e,It.killTweensOf(R,z,e.globalTime(t)),G=!e.parent,Sr=0),e._pt&&l&&(Bc[I.id]=1)}N&&bp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!G,f&&t<=0&&x.render(pi,!0,!0)},k_=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,f,h;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(u=f[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Wc=1,e.vars[t]="+=0",ff(e,o),Wc=0,l?Ga(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Gt(n)+En(d.e)),d.b&&(d.b=u.s+En(d.b))},G_=function(e,t){var n=e[0]?Jr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=qs({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},H_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(bn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ca=function(e,t,n,i,s){return zt(e)?e.call(t,n,i,s):cn(e)&&~e.indexOf("random(")?Va(e):e},Sp=of+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Mp={};zn(Sp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Mp[r]=1});var Kt=(function(r){Hd(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Aa(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,_=l.keyframes,v=l.defaults,p=l.scrollTrigger,m=i.parent||It,S=(bn(n)||Wd(n)?ar(n[0]):"length"in i)?[n]:mi(n),w,x,E,b,g,M,L,R;if(o._targets=S.length?lf(S):Ga("GSAP target "+n+" not found. https://gsap.com",!ri.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,_||f||co(c)||co(u)){i=o.vars;var N=i.easeReverse||i.yoyoEase;if(w=o.timeline=new Fn({data:"nested",defaults:v||{},targets:m&&m.data==="nested"?m.vars.targets:S}),w.kill(),w.parent=w._dp=$i(o),w._start=0,f||co(c)||co(u)){if(b=S.length,L=f&&op(f),zi(f))for(g in f)~Sp.indexOf(g)&&(R||(R={}),R[g]=f[g]);for(x=0;x<b;x++)E=hl(i,Mp),E.stagger=0,N&&(E.easeReverse=N),R&&qs(E,R),M=S[x],E.duration=+Ca(c,$i(o),x,M,S),E.delay=(+Ca(u,$i(o),x,M,S)||0)-o._delay,!f&&b===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),w.to(M,E,L?L(x,M,S):0),w._ease=st.none;w.duration()?c=u=0:o.timeline=0}else if(_){Aa(ai(w.vars.defaults,{ease:"none"})),w._ease=jr(_.ease||i.ease||"none");var I=0,k,D,z;if(bn(_))_.forEach(function(Y){return w.to(S,Y,">")}),w.duration();else{E={};for(g in _)g==="ease"||g==="easeEach"||H_(g,_[g],E,_.easeEach);for(g in E)for(k=E[g].sort(function(Y,P){return Y.t-P.t}),I=0,x=0;x<k.length;x++)D=k[x],z={ease:D.e,duration:(D.t-(x?k[x-1].t:0))/100*c},z[g]=D.v,w.to(S,z,I),I+=z.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return h===!0&&!ef&&(Sr=$i(o),It.killTweensOf(S),Sr=0),Li(m,$i(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!_&&o._start===Dt(m._time)&&Bn(d)&&v_($i(o))&&m.data!=="nested")&&(o._tTime=-bt,o.render(Math.max(0,-u)||0)),p&&ip($i(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-bt&&!u?l:i<bt?0:i,f,h,_,v,p,m,S,w;if(!c)S_(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,w=this.timeline,this._repeat){if(v=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(v*100+i,s,a);if(f=Dt(d%v),d===l?(_=this._repeat,f=c):(p=Dt(d/v),_=~~p,_&&_===p?(f=c,_--):f>c&&(f=c)),m=this._yoyo&&_&1,m&&(f=c-f),p=$s(this._tTime,v),f===o&&!a&&this._initted&&_===p)return this._tTime=d,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==v&&this._initted&&(this._lock=a=1,this.render(Dt(v*_),!0).invalidate()._lock=0)}if(!this._initted){if(rp(this,u?i:f,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var x=f<o;if(x!==this._inv){var E=x?o:c-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(x?-1:1)/E:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/c);if(this._from&&(this.ratio=S=1-S),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(ni(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(S,h.d),h=h._next;w&&w.render(i<0?i:w._dur*w._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&zc(this,i,s,a),ni(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&ni(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&zc(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Pr(this,1),!s&&!(u&&!o)&&(d||o||m)&&(ni(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Wa||ei.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||ff(this,c),u=this._ease(c/this._dur),k_(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Fl(this,0),this.parent||tp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?va(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Sr&&Sr.vars.overwrite!==!0)._first||va(this),this.parent&&a!==this.timeline.totalDuration()&&Ks(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?mi(i):o,c=this._ptLookup,u=this._pt,d,f,h,_,v,p,m;if((!s||s==="all")&&__(o,l))return s==="all"&&(this._pt=0),va(this);for(d=this._op=this._op||[],s!=="all"&&(cn(s)&&(v={},zn(s,function(S){return v[S]=1}),s=v),s=G_(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){f=c[m],s==="all"?(d[m]=s,_=f,h={}):(h=d[m]=d[m]||{},_=s);for(v in _)p=f&&f[v],p&&((!("kill"in p.d)||p.d.kill(v)===!0)&&Nl(this,p,"_pt"),delete f[v]),h!=="all"&&(h[v]=1)}return this._initted&&!this._pt&&u&&va(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ra(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ra(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return It.killTweensOf(i,s,a)},e})(Xa);ai(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zn("staggerTo,staggerFrom,staggerFromTo",function(r){Kt[r]=function(){var e=new Fn,t=Gc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var hf=function(e,t,n){return e[t]=n},yp=function(e,t,n){return e[t](n)},V_=function(e,t,n,i){return e[t](i.fp,n)},W_=function(e,t,n){return e.setAttribute(t,n)},df=function(e,t){return zt(e[t])?yp:tf(e[t])&&e.setAttribute?W_:hf},Ep=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},X_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Tp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},pf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Y_=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},q_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Nl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},$_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},bp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},kn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Ep,this.d=l||this,this.set=c||hf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=$_,this.m=n,this.mt=s,this.tween=i},r})();zn(of+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return af[r]=1});si.TweenMax=si.TweenLite=Kt;si.TimelineLite=si.TimelineMax=Fn;It=new Fn({sortChildren:!1,defaults:ka,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ri.stringFilter=_p;var es=[],Zo={},K_=[],th=0,Z_=0,$l=function(e){return(Zo[e]||K_).map(function(t){return t()})},Xc=function(){var e=Date.now(),t=[];e-th>2&&($l("matchMediaInit"),es.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Ri.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),$l("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),th=e,$l("matchMedia"))},wp=(function(){function r(t,n){this.selector=n&&Hc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Z_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){zt(n)&&(s=i,i=n,n=zt);var a=this,o=function(){var c=Ct,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Hc(s)),Ct=a,d=i.apply(a,arguments),zt(d)&&a._r.push(d),Ct=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===zt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Ct;Ct=null,n(this),Ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Fn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=es.length;a--;)es[a].id===this.id&&es.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),J_=(function(){function r(t){this.contexts=[],this.scope=t,Ct&&Ct.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){zi(n)||(n={matches:n});var a=new wp(0,s||this.scope),o=a.conditions={},l,c,u;Ct&&!a.selector&&(a.selector=Ct.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Ri.matchMedia(n[c]),l&&(es.indexOf(a)<0&&es.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Xc):l.addEventListener("change",Xc)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),pl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return dp(i)})},timeline:function(e){return new Fn(e)},getTweensOf:function(e,t){return It.getTweensOf(e,t)},getProperty:function(e,t,n,i){cn(e)&&(e=mi(e)[0]);var s=Jr(e||{}).get,a=n?ep:jd;return n==="native"&&(n=""),e&&(t?a((Qn[t]&&Qn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Qn[o]&&Qn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=mi(e),e.length>1){var i=e.map(function(u){return Xn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=Qn[t],o=Jr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;Ns._pt=0,d.init(e,n?u+n:u,Ns,0,[e]),d.render(1,d),Ns._pt&&pf(1,Ns)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Xn.to(e,ai((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return It.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=jr(e.ease,ka.ease)),Zf(ka,e||{})},config:function(e){return Zf(ri,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Qn[o]&&!si[o]&&Ga(t+" effect requires "+o+" plugin.")}),Wl[t]=function(o,l,c){return n(mi(o),ai(l||{},s),c)},a&&(Fn.prototype[t]=function(o,l,c){return this.add(Wl[t](o,zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){st[e]=jr(t)},parseEase:function(e,t){return arguments.length?jr(e,t):st},getById:function(e){return It.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Fn(e),i,s;for(n.smoothChildTiming=Bn(e.smoothChildTiming),It.remove(n),n._dp=0,n._time=n._tTime=It._time,i=It._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Kt&&i.vars.onComplete===i._targets[0]))&&Li(n,i,i._start-i._delay),i=s;return Li(It,n,0),n},context:function(e,t){return e?new wp(e,t):Ct},matchMedia:function(e){return new J_(e)},matchMediaRefresh:function(){return es.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Xc()},addEventListener:function(e,t){var n=Zo[e]||(Zo[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Zo[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:R_,wrapYoyo:C_,distribute:op,random:cp,snap:lp,normalize:A_,getUnit:En,clamp:E_,splitColor:pp,toArray:mi,selector:Hc,mapRange:fp,pipe:b_,unitize:w_,interpolate:P_,shuffle:ap},install:$d,effects:Wl,ticker:ei,updateRoot:Fn.updateRoot,plugins:Qn,globalTimeline:It,core:{PropTween:kn,globals:Kd,Tween:Kt,Timeline:Fn,Animation:Xa,getCache:Jr,_removeLinkedListItem:Nl,reverting:function(){return pn},context:function(e){return e&&Ct&&(Ct.data.push(e),e._ctx=Ct),Ct},suppressOverwrites:function(e){return ef=e}}};zn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return pl[r]=Kt[r]});ei.add(Fn.updateRoot);Ns=pl.to({},{duration:0});var Q_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},j_=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Q_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Kl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(cn(s)&&(l={},zn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}j_(o,s)}}}},Xn=pl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Kl("roundProps",Vc),Kl("modifiers"),Kl("snap",lp))||pl;Kt.version=Fn.version=Xn.version="3.15.0";qd=1;nf()&&Zs();st.Power0;st.Power1;st.Power2;st.Power3;st.Power4;st.Linear;st.Quad;st.Cubic;st.Quart;st.Quint;st.Strong;st.Elastic;st.Back;st.SteppedEase;st.Bounce;st.Sine;st.Expo;st.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nh,Mr,Os,mf,$r,ih,_f,eg=function(){return typeof window<"u"},or={},Xr=180/Math.PI,Bs=Math.PI/180,ds=Math.atan2,rh=1e8,gf=/([A-Z])/g,tg=/(left|right|width|margin|padding|x)/i,ng=/[\s,\(]\S/,Ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ig=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},sg=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ag=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ap=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Rp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},og=function(e,t,n){return e.style[t]=n},lg=function(e,t,n){return e.style.setProperty(t,n)},cg=function(e,t,n){return e._gsap[t]=n},ug=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},fg=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},hg=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Nt="transform",Gn=Nt+"Origin",dg=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in or&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ii[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Zi(i,o)}):this.tfm[e]=a.x?a[e]:Zi(i,e),e===Gn&&(this.tfm.zOrigin=a.zOrigin);else return Ii.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Nt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Gn,t,"")),e=Nt}(s||t)&&this.props.push(e,t,s[e])},Cp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},pg=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(gf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=_f(),(!s||!s.isStart)&&!n[Nt]&&(Cp(n),i.zOrigin&&n[Gn]&&(n[Gn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Pp=function(e,t){var n={target:e,props:[],revert:pg,save:dg};return e._gsap||Xn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Lp,qc=function(e,t){var n=Mr.createElementNS?Mr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Mr.createElement(e);return n&&n.style?n:Mr.createElement(e)},ii=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(gf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Js(t)||t,1)||""},sh="O,Moz,ms,Ms,Webkit".split(","),Js=function(e,t,n){var i=t||$r,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(sh[a]+e in s););return a<0?null:(a===3?"ms":a>=0?sh[a]:"")+e},$c=function(){eg()&&window.document&&(nh=window,Mr=nh.document,Os=Mr.documentElement,$r=qc("div")||{style:{}},qc("div"),Nt=Js(Nt),Gn=Nt+"Origin",$r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Lp=!!Js("perspective"),_f=Xn.core.reverting,mf=1)},ah=function(e){var t=e.ownerSVGElement,n=qc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Os.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Os.removeChild(n),s},oh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Dp=function(e){var t,n;try{t=e.getBBox()}catch{t=ah(e),n=1}return t&&(t.width||t.height)||n||(t=ah(e)),t&&!t.width&&!t.x&&!t.y?{x:+oh(e,["x","cx","x1"])||0,y:+oh(e,["y","cy","y1"])||0,width:0,height:0}:t},Ip=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Dp(e))},Lr=function(e,t){if(t){var n=e.style,i;t in or&&t!==Gn&&(t=Nt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(gf,"-$1").toLowerCase())):n.removeAttribute(t)}},yr=function(e,t,n,i,s,a){var o=new kn(e._pt,t,n,0,1,a?Rp:Ap);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},lh={deg:1,rad:1,turn:1},mg={grid:1,flex:1},Dr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=$r.style,l=tg.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",h=i==="%",_,v,p,m;if(i===a||!s||lh[i]||lh[a])return s;if(a!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&Ip(e),(h||a==="%")&&(or[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Gt(h?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(f?a:i),v=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(v=(e.ownerSVGElement||{}).parentNode),(!v||v===Mr||!v.appendChild)&&(v=Mr.body),p=v._gsap,p&&h&&p.width&&l&&p.time===ei.time&&!p.uncache)return Gt(s/p.width*d);if(h&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=d+i,_=e[u],S?e.style[t]=S:Lr(e,t)}else(h||a==="%")&&!mg[ii(v,"display")]&&(o.position=ii(e,"position")),v===e&&(o.position="static"),v.appendChild($r),_=$r[u],v.removeChild($r),o.position="absolute";return l&&h&&(p=Jr(v),p.time=ei.time,p.width=v[u]),Gt(f?_*s/d:_&&s?d/_*s:0)},Zi=function(e,t,n,i){var s;return mf||$c(),t in Ii&&t!=="transform"&&(t=Ii[t],~t.indexOf(",")&&(t=t.split(",")[0])),or[t]&&t!=="transform"?(s=qa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:_l(ii(e,Gn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ml[t]&&ml[t](e,t,n)||ii(e,t)||Jd(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Dr(e,t,s,n)+n:s},_g=function(e,t,n,i){if(!n||n==="none"){var s=Js(t,e,1),a=s&&ii(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ii(e,"borderTopColor"))}var o=new kn(this._pt,e.style,t,0,1,Tp),l=0,c=0,u,d,f,h,_,v,p,m,S,w,x,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ii(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(v=e.style[t],e.style[t]=i,i=ii(e,t)||i,v?e.style[t]=v:Lr(e,t)),u=[n,i],_p(u),n=u[0],i=u[1],f=n.match(Is)||[],E=i.match(Is)||[],E.length){for(;d=Is.exec(i);)p=d[0],S=i.substring(l,d.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(v=f[c++]||"")&&(h=parseFloat(v)||0,x=v.substr((h+"").length),p.charAt(1)==="="&&(p=Fs(h,p)+x),m=parseFloat(p),w=p.substr((m+"").length),l=Is.lastIndex-w.length,w||(w=w||ri.units[t]||x,l===i.length&&(i+=w,o.e+=w)),x!==w&&(h=Dr(e,t,v,w)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:h,c:m-h,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Rp:Ap;return Yd.test(i)&&(o.e=0),this._pt=o,o},ch={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},gg=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=ch[n]||n,t[1]=ch[i]||i,t.join(" ")},vg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],or[o]&&(l=1,o=o==="transformOrigin"?Gn:Nt),Lr(n,o);l&&(Lr(n,Nt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",qa(n,1),a.uncache=1,Cp(i)))}},ml={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new kn(e._pt,t,n,0,0,vg);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ya=[1,0,0,1,0,0],Np={},Up=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},uh=function(e){var t=ii(e,Nt);return Up(t)?Ya:t.substr(7).match(Xd).map(Gt)},vf=function(e,t){var n=e._gsap||Jr(e),i=e.style,s=uh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ya:s):(s===Ya&&!e.offsetParent&&e!==Os&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Os.appendChild(e)),s=uh(e),l?i.display=l:Lr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Os.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Kc=function(e,t,n,i,s,a){var o=e._gsap,l=s||vf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,h=l[0],_=l[1],v=l[2],p=l[3],m=l[4],S=l[5],w=t.split(" "),x=parseFloat(w[0])||0,E=parseFloat(w[1])||0,b,g,M,L;n?l!==Ya&&(g=h*p-_*v)&&(M=x*(p/g)+E*(-v/g)+(v*S-p*m)/g,L=x*(-_/g)+E*(h/g)-(h*S-_*m)/g,x=M,E=L):(b=Dp(e),x=b.x+(~w[0].indexOf("%")?x/100*b.width:x),E=b.y+(~(w[1]||w[0]).indexOf("%")?E/100*b.height:E)),i||i!==!1&&o.smooth?(m=x-c,S=E-u,o.xOffset=d+(m*h+S*v)-m,o.yOffset=f+(m*_+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Gn]="0px 0px",a&&(yr(a,o,"xOrigin",c,x),yr(a,o,"yOrigin",u,E),yr(a,o,"xOffset",d,o.xOffset),yr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",x+" "+E)},qa=function(e,t){var n=e._gsap||new vp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ii(e,Gn)||"0",u,d,f,h,_,v,p,m,S,w,x,E,b,g,M,L,R,N,I,k,D,z,Y,P,G,O,A,H,J,ce,V,ae;return u=d=f=v=p=m=S=w=x=0,h=_=1,n.svg=!!(e.getCTM&&Ip(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Nt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Nt]!=="none"?l[Nt]:"")),i.scale=i.rotate=i.translate="none"),g=vf(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",P=""):P=!t&&e.getAttribute("data-svg-origin"),Kc(e,P||c,!!P||n.originIsAbsolute,n.smooth!==!1,g)),E=n.xOrigin||0,b=n.yOrigin||0,g!==Ya&&(N=g[0],I=g[1],k=g[2],D=g[3],u=z=g[4],d=Y=g[5],g.length===6?(h=Math.sqrt(N*N+I*I),_=Math.sqrt(D*D+k*k),v=N||I?ds(I,N)*Xr:0,S=k||D?ds(k,D)*Xr+v:0,S&&(_*=Math.abs(Math.cos(S*Bs))),n.svg&&(u-=E-(E*N+b*k),d-=b-(E*I+b*D))):(ae=g[6],ce=g[7],A=g[8],H=g[9],J=g[10],V=g[11],u=g[12],d=g[13],f=g[14],M=ds(ae,J),p=M*Xr,M&&(L=Math.cos(-M),R=Math.sin(-M),P=z*L+A*R,G=Y*L+H*R,O=ae*L+J*R,A=z*-R+A*L,H=Y*-R+H*L,J=ae*-R+J*L,V=ce*-R+V*L,z=P,Y=G,ae=O),M=ds(-k,J),m=M*Xr,M&&(L=Math.cos(-M),R=Math.sin(-M),P=N*L-A*R,G=I*L-H*R,O=k*L-J*R,V=D*R+V*L,N=P,I=G,k=O),M=ds(I,N),v=M*Xr,M&&(L=Math.cos(M),R=Math.sin(M),P=N*L+I*R,G=z*L+Y*R,I=I*L-N*R,Y=Y*L-z*R,N=P,z=G),p&&Math.abs(p)+Math.abs(v)>359.9&&(p=v=0,m=180-m),h=Gt(Math.sqrt(N*N+I*I+k*k)),_=Gt(Math.sqrt(Y*Y+ae*ae)),M=ds(z,Y),S=Math.abs(M)>2e-4?M*Xr:0,x=V?1/(V<0?-V:V):0),n.svg&&(P=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Up(ii(e,Nt)),P&&e.setAttribute("transform",P))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(h*=-1,S+=v<=0?180:-180,v+=v<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Gt(h),n.scaleY=Gt(_),n.rotation=Gt(v)+o,n.rotationX=Gt(p)+o,n.rotationY=Gt(m)+o,n.skewX=S+o,n.skewY=w+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Gn]=_l(c)),n.xOffset=n.yOffset=0,n.force3D=ri.force3D,n.renderTransform=n.svg?Sg:Lp?Fp:xg,n.uncache=0,n},_l=function(e){return(e=e.split(" "))[0]+" "+e[1]},Zl=function(e,t,n){var i=En(t);return Gt(parseFloat(t)+parseFloat(Dr(e,"x",n+"px",i)))+i},xg=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Fp(e,t)},zr="0deg",aa="0px",kr=") ",Fp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,f=n.skewX,h=n.skewY,_=n.scaleX,v=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,w=n.zOrigin,x="",E=m==="auto"&&e&&e!==1||m===!0;if(w&&(d!==zr||u!==zr)){var b=parseFloat(u)*Bs,g=Math.sin(b),M=Math.cos(b),L;b=parseFloat(d)*Bs,L=Math.cos(b),a=Zl(S,a,g*L*-w),o=Zl(S,o,-Math.sin(b)*-w),l=Zl(S,l,M*L*-w+w)}p!==aa&&(x+="perspective("+p+kr),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(E||a!==aa||o!==aa||l!==aa)&&(x+=l!==aa||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+kr),c!==zr&&(x+="rotate("+c+kr),u!==zr&&(x+="rotateY("+u+kr),d!==zr&&(x+="rotateX("+d+kr),(f!==zr||h!==zr)&&(x+="skew("+f+", "+h+kr),(_!==1||v!==1)&&(x+="scale("+_+", "+v+kr),S.style[Nt]=x||"translate(0, 0)"},Sg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,f=n.scaleY,h=n.target,_=n.xOrigin,v=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,w=parseFloat(a),x=parseFloat(o),E,b,g,M,L;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Bs,c*=Bs,E=Math.cos(l)*d,b=Math.sin(l)*d,g=Math.sin(l-c)*-f,M=Math.cos(l-c)*f,c&&(u*=Bs,L=Math.tan(c-u),L=Math.sqrt(1+L*L),g*=L,M*=L,u&&(L=Math.tan(u),L=Math.sqrt(1+L*L),E*=L,b*=L)),E=Gt(E),b=Gt(b),g=Gt(g),M=Gt(M)):(E=d,M=f,b=g=0),(w&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(w=Dr(h,"x",a,"px"),x=Dr(h,"y",o,"px")),(_||v||p||m)&&(w=Gt(w+_-(_*E+v*g)+p),x=Gt(x+v-(_*b+v*M)+m)),(i||s)&&(L=h.getBBox(),w=Gt(w+i/100*L.width),x=Gt(x+s/100*L.height)),L="matrix("+E+","+b+","+g+","+M+","+w+","+x+")",h.setAttribute("transform",L),S&&(h.style[Nt]=L)},Mg=function(e,t,n,i,s){var a=360,o=cn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Xr:1),c=l-i,u=i+c+"deg",d,f;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*rh)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*rh)%a-~~(c/a)*a)),e._pt=f=new kn(e._pt,t,n,i,c,ig),f.e=u,f.u="deg",e._props.push(n),f},fh=function(e,t){for(var n in t)e[n]=t[n];return e},yg=function(e,t,n){var i=fh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,f,h,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Nt]=t,o=qa(n,1),Lr(n,Nt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Nt],a[Nt]=t,o=qa(n,1),a[Nt]=c);for(l in or)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=En(c),_=En(u),d=h!==_?Dr(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new kn(e._pt,o,l,d,f-d,Yc),e._pt.u=_||0,e._props.push(l));fh(o,i)};zn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ml[e>1?"border"+r:r]=function(o,l,c,u,d){var f,h;if(arguments.length<4)return f=a.map(function(_){return Zi(o,_,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},a.forEach(function(_,v){return h[_]=f[v]=f[v]||f[(v-1)/2|0]}),o.init(l,h,d)}});var Op={name:"css",register:$c,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,f,h,_,v,p,m,S,w,x,E,b,g,M,L;mf||$c(),this.styles=this.styles||Pp(e),M=this.styles.props,this.tween=n;for(v in t)if(v!=="autoRound"&&(u=t[v],!(Qn[v]&&xp(v,t,n,i,e,s)))){if(h=typeof u,_=ml[v],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Va(u)),_)_(this,e,v,u,n)&&(g=1);else if(v.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(v)+"").trim(),u+="",Rr.lastIndex=0,Rr.test(c)||(p=En(c),m=En(u),m?p!==m&&(c=Dr(e,v,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,v),a.push(v),M.push(v,0,o[v]);else if(h!=="undefined"){if(l&&v in l?(c=typeof l[v]=="function"?l[v].call(n,i,e,s):l[v],cn(c)&&~c.indexOf("random(")&&(c=Va(c)),En(c+"")||c==="auto"||(c+=ri.units[v]||En(Zi(e,v))||""),(c+"").charAt(1)==="="&&(c=Zi(e,v))):c=Zi(e,v),f=parseFloat(c),S=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),d=parseFloat(u),v in Ii&&(v==="autoAlpha"&&(f===1&&Zi(e,"visibility")==="hidden"&&d&&(f=0),M.push("visibility",0,o.visibility),yr(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),v!=="scale"&&v!=="transform"&&(v=Ii[v],~v.indexOf(",")&&(v=v.split(",")[0]))),w=v in or,w){if(this.styles.save(v),L=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=ii(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=ii(e,"perspective"),R?e.style.perspective=R:Lr(e,"perspective")}d=parseFloat(u)}if(x||(E=e._gsap,E.renderTransform&&!t.parseTransform||qa(e,t.parseTransform),b=t.smoothOrigin!==!1&&E.smooth,x=this._pt=new kn(this._pt,o,Nt,0,1,E.renderTransform,E,0,-1),x.dep=1),v==="scale")this._pt=new kn(this._pt,E,"scaleY",E.scaleY,(S?Fs(E.scaleY,S+d):d)-E.scaleY||0,Yc),this._pt.u=0,a.push("scaleY",v),v+="X";else if(v==="transformOrigin"){M.push(Gn,0,o[Gn]),u=gg(u),E.svg?Kc(e,u,0,b,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==E.zOrigin&&yr(this,E,"zOrigin",E.zOrigin,m),yr(this,o,v,_l(c),_l(u)));continue}else if(v==="svgOrigin"){Kc(e,u,1,b,0,this);continue}else if(v in Np){Mg(this,E,v,f,S?Fs(f,S+u):u);continue}else if(v==="smoothOrigin"){yr(this,E,"smooth",E.smooth,u);continue}else if(v==="force3D"){E[v]=u;continue}else if(v==="transform"){yg(this,u,e);continue}}else v in o||(v=Js(v)||v);if(w||(d||d===0)&&(f||f===0)&&!ng.test(u)&&v in o)p=(c+"").substr((f+"").length),d||(d=0),m=En(u)||(v in ri.units?ri.units[v]:p),p!==m&&(f=Dr(e,v,c,m)),this._pt=new kn(this._pt,w?E:o,v,f,(S?Fs(f,S+d):d)-f,!w&&(m==="px"||v==="zIndex")&&t.autoRound!==!1?ag:Yc),this._pt.u=m||0,w&&L!==u?(this._pt.b=c,this._pt.e=L,this._pt.r=sg):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=rg);else if(v in o)_g.call(this,e,v,c,S?S+u:u);else if(v in e)this.add(e,v,c||e[v],S?S+u:u,i,s);else if(v!=="parseTransform"){sf(v,u);continue}w||(v in o?M.push(v,0,o[v]):typeof e[v]=="function"?M.push(v,2,e[v]()):M.push(v,1,c||e[v])),a.push(v)}}g&&bp(this)},render:function(e,t){if(t.tween._time||!_f())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Zi,aliases:Ii,getSetter:function(e,t,n){var i=Ii[t];return i&&i.indexOf(",")<0&&(t=i),t in or&&t!==Gn&&(e._gsap.x||Zi(e,"x"))?n&&ih===n?t==="scale"?ug:cg:(ih=n||{})&&(t==="scale"?fg:hg):e.style&&!tf(e.style[t])?og:~t.indexOf("-")?lg:df(e,t)},core:{_removeProperty:Lr,_getMatrix:vf}};Xn.utils.checkPrefix=Js;Xn.core.getStyleSaver=Pp;(function(r,e,t,n){var i=zn(r+","+e+","+t,function(s){or[s]=1});zn(e,function(s){ri.units[s]="deg",Np[s]=1}),Ii[i[13]]=r+","+e,zn(n,function(s){var a=s.split(":");Ii[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ri.units[r]="px"});Xn.registerPlugin(Op);var $e=Xn.registerPlugin(Op)||Xn;$e.core.Tween;function Eg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Tg(r,e,t){return e&&Eg(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fn,Jo,ti,Er,Tr,zs,Bp,Yr,ks,zp,er,Mi,kp,Gp=function(){return fn||typeof window<"u"&&(fn=window.gsap)&&fn.registerPlugin&&fn},Hp=1,Us=[],Ze=[],Oi=[],Pa=Date.now,Zc=function(e,t){return t},bg=function(){var e=ks.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Ze),i.push.apply(i,Oi),Ze=n,Oi=i,Zc=function(a,o){return t[a](o)}},Cr=function(e,t){return~Oi.indexOf(e)&&Oi[Oi.indexOf(e)+1][t]},La=function(e){return!!~zp.indexOf(e)},Rn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},An=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},uo="scrollLeft",fo="scrollTop",Jc=function(){return er&&er.isPressed||Ze.cache++},gl=function(e,t){var n=function i(s){if(s||s===0){Hp&&(ti.history.scrollRestoration="manual");var a=er&&er.isPressed;s=i.v=Math.round(s)||(er&&er.iOS?1:0),e(s),i.cacheID=Ze.cache,a&&Zc("ss",s)}else(t||Ze.cache!==i.cacheID||Zc("ref"))&&(i.cacheID=Ze.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},In={s:uo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:gl(function(r){return arguments.length?ti.scrollTo(r,tn.sc()):ti.pageXOffset||Er[uo]||Tr[uo]||zs[uo]||0})},tn={s:fo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:In,sc:gl(function(r){return arguments.length?ti.scrollTo(In.sc(),r):ti.pageYOffset||Er[fo]||Tr[fo]||zs[fo]||0})},Un=function(e,t){return(t&&t._ctx&&t._ctx.selector||fn.utils.toArray)(e)[0]||(typeof e=="string"&&fn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},wg=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ir=function(e,t){var n=t.s,i=t.sc;La(e)&&(e=Er.scrollingElement||Tr);var s=Ze.indexOf(e),a=i===tn.sc?1:2;!~s&&(s=Ze.push(e)-1),Ze[s+a]||Rn(e,"scroll",Jc);var o=Ze[s+a],l=o||(Ze[s+a]=gl(Cr(e,n),!0)||(La(e)?i:gl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=fn.getProperty(e,"scrollBehavior")==="smooth"),l},Qc=function(e,t,n){var i=e,s=e,a=Pa(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,v){var p=Pa();v||p-a>l?(s=i,i=_,o=a,a=p):n?i+=_:i=s+(_-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},f=function(_){var v=o,p=s,m=Pa();return(_||_===0)&&_!==i&&u(_),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-v)*1e3};return{update:u,reset:d,getVelocity:f}},oa=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},hh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Vp=function(){ks=fn.core.globals().ScrollTrigger,ks&&ks.core&&bg()},Wp=function(e){return fn=e||Gp(),!Jo&&fn&&typeof document<"u"&&document.body&&(ti=window,Er=document,Tr=Er.documentElement,zs=Er.body,zp=[ti,Er,Tr,zs],fn.utils.clamp,kp=fn.core.context||function(){},Yr="onpointerenter"in zs?"pointer":"mouse",Bp=Ht.isTouch=ti.matchMedia&&ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mi=Ht.eventTypes=("ontouchstart"in Tr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Tr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Hp=0},500),Jo=1),ks||Vp(),Jo};In.op=tn;Ze.cache=0;var Ht=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Jo||Wp(fn)||console.warn("Please gsap.registerPlugin(Observer)"),ks||Vp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,f=n.onStopDelay,h=n.ignore,_=n.wheelSpeed,v=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,w=n.onPress,x=n.onRelease,E=n.onRight,b=n.onLeft,g=n.onUp,M=n.onDown,L=n.onChangeX,R=n.onChangeY,N=n.onChange,I=n.onToggleX,k=n.onToggleY,D=n.onHover,z=n.onHoverEnd,Y=n.onMove,P=n.ignoreCheck,G=n.isNormalizer,O=n.onGestureStart,A=n.onGestureEnd,H=n.onWheel,J=n.onEnable,ce=n.onDisable,V=n.onClick,ae=n.scrollSpeed,ve=n.capture,Ee=n.allowClicks,he=n.lockAxis,Ce=n.onLockAxis;this.target=o=Un(o)||Tr,this.vars=n,h&&(h=fn.utils.toArray(h)),i=i||1e-9,s=s||0,_=_||1,ae=ae||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ti.getComputedStyle(zs).lineHeight)||22);var ut,Ae,ke,Ie,Oe,ft,at,Q=this,Je=0,Vt=0,St=n.passive||!u&&n.passive!==!1,nt=Ir(o,In),Ut=Ir(o,tn),kt=nt(),B=Ut(),pt=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Mi[0]==="pointerdown",ot=La(o),Ge=o.ownerDocument||Er,pe=[0,0,0],ht=[0,0,0],Ne=0,Be=function(){return Ne=Pa()},C=function(ge,se){return(Q.event=ge)&&h&&wg(ge.target,h)||se&&pt&&ge.pointerType!=="touch"||P&&P(ge,se)},y=function(){Q._vx.reset(),Q._vy.reset(),Ae.pause(),d&&d(Q)},X=function(){var ge=Q.deltaX=hh(pe),se=Q.deltaY=hh(ht),ne=Math.abs(ge)>=i,Se=Math.abs(se)>=i;N&&(ne||Se)&&N(Q,ge,se,pe,ht),ne&&(E&&Q.deltaX>0&&E(Q),b&&Q.deltaX<0&&b(Q),L&&L(Q),I&&Q.deltaX<0!=Je<0&&I(Q),Je=Q.deltaX,pe[0]=pe[1]=pe[2]=0),Se&&(M&&Q.deltaY>0&&M(Q),g&&Q.deltaY<0&&g(Q),R&&R(Q),k&&Q.deltaY<0!=Vt<0&&k(Q),Vt=Q.deltaY,ht[0]=ht[1]=ht[2]=0),(Ie||ke)&&(Y&&Y(Q),ke&&(p&&ke===1&&p(Q),S&&S(Q),ke=0),Ie=!1),ft&&!(ft=!1)&&Ce&&Ce(Q),Oe&&(H(Q),Oe=!1),ut=0},oe=function(ge,se,ne){pe[ne]+=ge,ht[ne]+=se,Q._vx.update(ge),Q._vy.update(se),c?ut||(ut=requestAnimationFrame(X)):X()},re=function(ge,se){he&&!at&&(Q.axis=at=Math.abs(ge)>Math.abs(se)?"x":"y",ft=!0),at!=="y"&&(pe[2]+=ge,Q._vx.update(ge,!0)),at!=="x"&&(ht[2]+=se,Q._vy.update(se,!0)),c?ut||(ut=requestAnimationFrame(X)):X()},de=function(ge){if(!C(ge,1)){ge=oa(ge,u);var se=ge.clientX,ne=ge.clientY,Se=se-Q.x,ie=ne-Q.y,be=Q.isDragging;Q.x=se,Q.y=ne,(be||(Se||ie)&&(Math.abs(Q.startX-se)>=s||Math.abs(Q.startY-ne)>=s))&&(ke||(ke=be?2:1),be||(Q.isDragging=!0),re(Se,ie))}},xe=Q.onPress=function(le){C(le,1)||le&&le.button||(Q.axis=at=null,Ae.pause(),Q.isPressed=!0,le=oa(le),Je=Vt=0,Q.startX=Q.x=le.clientX,Q.startY=Q.y=le.clientY,Q._vx.reset(),Q._vy.reset(),Rn(G?o:Ge,Mi[1],de,St,!0),Q.deltaX=Q.deltaY=0,w&&w(Q))},q=Q.onRelease=function(le){if(!C(le,1)){An(G?o:Ge,Mi[1],de,!0);var ge=!isNaN(Q.y-Q.startY),se=Q.isDragging,ne=se&&(Math.abs(Q.x-Q.startX)>3||Math.abs(Q.y-Q.startY)>3),Se=oa(le);!ne&&ge&&(Q._vx.reset(),Q._vy.reset(),u&&Ee&&fn.delayedCall(.08,function(){if(Pa()-Ne>300&&!le.defaultPrevented){if(le.target.click)le.target.click();else if(Ge.createEvent){var ie=Ge.createEvent("MouseEvents");ie.initMouseEvent("click",!0,!0,ti,1,Se.screenX,Se.screenY,Se.clientX,Se.clientY,!1,!1,!1,!1,0,null),le.target.dispatchEvent(ie)}}})),Q.isDragging=Q.isGesturing=Q.isPressed=!1,d&&se&&!G&&Ae.restart(!0),ke&&X(),m&&se&&m(Q),x&&x(Q,ne)}},te=function(ge){return ge.touches&&ge.touches.length>1&&(Q.isGesturing=!0)&&O(ge,Q.isDragging)},fe=function(){return(Q.isGesturing=!1)||A(Q)},U=function(ge){if(!C(ge)){var se=nt(),ne=Ut();oe((se-kt)*ae,(ne-B)*ae,1),kt=se,B=ne,d&&Ae.restart(!0)}},ee=function(ge){if(!C(ge)){ge=oa(ge,u),H&&(Oe=!0);var se=(ge.deltaMode===1?l:ge.deltaMode===2?ti.innerHeight:1)*_;oe(ge.deltaX*se,ge.deltaY*se,0),d&&!G&&Ae.restart(!0)}},j=function(ge){if(!C(ge)){var se=ge.clientX,ne=ge.clientY,Se=se-Q.x,ie=ne-Q.y;Q.x=se,Q.y=ne,Ie=!0,d&&Ae.restart(!0),(Se||ie)&&re(Se,ie)}},me=function(ge){Q.event=ge,D(Q)},ue=function(ge){Q.event=ge,z(Q)},_e=function(ge){return C(ge)||oa(ge,u)&&V(Q)};Ae=Q._dc=fn.delayedCall(f||.25,y).pause(),Q.deltaX=Q.deltaY=0,Q._vx=Qc(0,50,!0),Q._vy=Qc(0,50,!0),Q.scrollX=nt,Q.scrollY=Ut,Q.isDragging=Q.isGesturing=Q.isPressed=!1,kp(this),Q.enable=function(le){return Q.isEnabled||(Rn(ot?Ge:o,"scroll",Jc),a.indexOf("scroll")>=0&&Rn(ot?Ge:o,"scroll",U,St,ve),a.indexOf("wheel")>=0&&Rn(o,"wheel",ee,St,ve),(a.indexOf("touch")>=0&&Bp||a.indexOf("pointer")>=0)&&(Rn(o,Mi[0],xe,St,ve),Rn(Ge,Mi[2],q),Rn(Ge,Mi[3],q),Ee&&Rn(o,"click",Be,!0,!0),V&&Rn(o,"click",_e),O&&Rn(Ge,"gesturestart",te),A&&Rn(Ge,"gestureend",fe),D&&Rn(o,Yr+"enter",me),z&&Rn(o,Yr+"leave",ue),Y&&Rn(o,Yr+"move",j)),Q.isEnabled=!0,Q.isDragging=Q.isGesturing=Q.isPressed=Ie=ke=!1,Q._vx.reset(),Q._vy.reset(),kt=nt(),B=Ut(),le&&le.type&&xe(le),J&&J(Q)),Q},Q.disable=function(){Q.isEnabled&&(Us.filter(function(le){return le!==Q&&La(le.target)}).length||An(ot?Ge:o,"scroll",Jc),Q.isPressed&&(Q._vx.reset(),Q._vy.reset(),An(G?o:Ge,Mi[1],de,!0)),An(ot?Ge:o,"scroll",U,ve),An(o,"wheel",ee,ve),An(o,Mi[0],xe,ve),An(Ge,Mi[2],q),An(Ge,Mi[3],q),An(o,"click",Be,!0),An(o,"click",_e),An(Ge,"gesturestart",te),An(Ge,"gestureend",fe),An(o,Yr+"enter",me),An(o,Yr+"leave",ue),An(o,Yr+"move",j),Q.isEnabled=Q.isPressed=Q.isDragging=!1,ce&&ce(Q))},Q.kill=Q.revert=function(){Q.disable();var le=Us.indexOf(Q);le>=0&&Us.splice(le,1),er===Q&&(er=0)},Us.push(Q),G&&La(o)&&(er=Q),Q.enable(v)},Tg(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ht.version="3.15.0";Ht.create=function(r){return new Ht(r)};Ht.register=Wp;Ht.getAll=function(){return Us.slice()};Ht.getById=function(r){return Us.filter(function(e){return e.vars.id===r})[0]};Gp()&&fn.registerPlugin(Ht);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Re,Ps,Ke,vt,jn,gt,xf,vl,$a,Da,Sa,ho,Mn,Ol,jc,Ln,dh,ph,Ls,Xp,Jl,Yp,Pn,eu,qp,$p,gr,tu,Sf,Gs,Mf,Ia,nu,Ql,po=1,yn=Date.now,jl=yn(),_i=0,Ma=0,mh=function(e,t,n){var i=Jn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},_h=function(e,t){return t&&(!Jn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Ag=function r(){return Ma&&requestAnimationFrame(r)},gh=function(){return Ol=1},vh=function(){return Ol=0},Ci=function(e){return e},ya=function(e){return Math.round(e*1e5)/1e5||0},Kp=function(){return typeof window<"u"},Zp=function(){return Re||Kp()&&(Re=window.gsap)&&Re.registerPlugin&&Re},rs=function(e){return!!~xf.indexOf(e)},Jp=function(e){return(e==="Height"?Mf:Ke["inner"+e])||jn["client"+e]||gt["client"+e]},Qp=function(e){return Cr(e,"getBoundingClientRect")||(rs(e)?function(){return nl.width=Ke.innerWidth,nl.height=Mf,nl}:function(){return ji(e)})},Rg=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Cr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Jp(s):e["client"+s])||0}},Cg=function(e,t){return!t||~Oi.indexOf(e)?Qp(e):function(){return nl}},Ni=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Cr(e,n))?a()-Qp(e)()[s]:rs(e)?(jn[n]||gt[n])-Jp(i):e[n]-e["offset"+i])},mo=function(e,t){for(var n=0;n<Ls.length;n+=3)(!t||~t.indexOf(Ls[n+1]))&&e(Ls[n],Ls[n+1],Ls[n+2])},Jn=function(e){return typeof e=="string"},Tn=function(e){return typeof e=="function"},Ea=function(e){return typeof e=="number"},qr=function(e){return typeof e=="object"},la=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},ps=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},ms=Math.abs,jp="left",em="top",yf="right",Ef="bottom",ts="width",ns="height",Na="Right",Ua="Left",Fa="Top",Oa="Bottom",$t="padding",fi="margin",Qs="Width",Tf="Height",en="px",hi=function(e){return Ke.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},Pg=function(e){var t=hi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},xh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ji=function(e,t){var n=t&&hi(e)[jc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Re.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},xl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},tm=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Lg=function(e){return function(t){return Re.utils.snap(tm(e),t)}},bf=function(e){var t=Re.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},Dg=function(e){return function(t,n){return bf(tm(e))(t,n.direction)}},_o=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},ln=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},on=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},go=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Sh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},vo={toggleActions:"play",anticipatePin:0},Sl={top:0,left:0,center:.5,bottom:1,right:1},Qo=function(e,t){if(Jn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Sl?Sl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},xo=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,f=s.indent,h=s.fontWeight,_=vt.createElement("div"),v=rs(n)||Cr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=v?gt:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,w=S?c:u,x="border-color:"+w+";font-size:"+d+";color:"+w+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&v?"fixed;":"absolute;"),(p||l||!v)&&(x+=(i===tn?yf:Ef)+":"+(a+parseFloat(f))+"px;"),o&&(x+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=x,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],jo(_,0,i,S),_},jo=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Qs]=1,s["border"+o+Qs]=0,s[n.p]=t+"px",Re.set(e,s)},qe=[],iu={},Ka,Mh=function(){return yn()-_i>34&&(Ka||(Ka=requestAnimationFrame(nr)))},_s=function(){(!Pn||!Pn.isPressed||Pn.startX>gt.clientWidth)&&(Ze.cache++,Pn?Ka||(Ka=requestAnimationFrame(nr)):nr(),_i||as("scrollStart"),_i=yn())},ec=function(){$p=Ke.innerWidth,qp=Ke.innerHeight},Ta=function(e){Ze.cache++,(e===!0||!Mn&&!Yp&&!vt.fullscreenElement&&!vt.webkitFullscreenElement&&(!eu||$p!==Ke.innerWidth||Math.abs(Ke.innerHeight-qp)>Ke.innerHeight*.25))&&vl.restart(!0)},ss={},Ig=[],nm=function r(){return on(Ye,"scrollEnd",r)||Kr(!0)},as=function(e){return ss[e]&&ss[e].map(function(t){return t()})||Ig},Zn=[],im=function(e){for(var t=0;t<Zn.length;t+=5)(!e||Zn[t+4]&&Zn[t+4].query===e)&&(Zn[t].style.cssText=Zn[t+1],Zn[t].getBBox&&Zn[t].setAttribute("transform",Zn[t+2]||""),Zn[t+3].uncache=1)},rm=function(){return Ze.forEach(function(e){return Tn(e)&&++e.cacheID&&(e.rec=e())})},wf=function(e,t){var n;for(Ln=0;Ln<qe.length;Ln++)n=qe[Ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ia=!0,t&&im(t),t||as("revert")},sm=function(e,t){Ze.cache++,(t||!Dn)&&Ze.forEach(function(n){return Tn(n)&&n.cacheID++&&(n.rec=0)}),Jn(e)&&(Ke.history.scrollRestoration=Sf=e)},Dn,is=0,yh,Ng=function(){if(yh!==is){var e=yh=is;requestAnimationFrame(function(){return e===is&&Kr(!0)})}},am=function(){gt.appendChild(Gs),Mf=!Pn&&Gs.offsetHeight||Ke.innerHeight,gt.removeChild(Gs)},Eh=function(e){return $a(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Kr=function(e,t){if(jn=vt.documentElement,gt=vt.body,xf=[Ke,vt,jn,gt],_i&&!e&&!Ia){ln(Ye,"scrollEnd",nm);return}am(),Dn=Ye.isRefreshing=!0,Ia||rm();var n=as("refreshInit");Xp&&Ye.sort(),t||wf(),Ze.forEach(function(i){Tn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),qe.slice(0).forEach(function(i){return i.refresh()}),Ia=!1,qe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),nu=1,Eh(!0),qe.forEach(function(i){var s=Ni(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Eh(!1),nu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Ze.forEach(function(i){Tn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),sm(Sf,1),vl.pause(),is++,Dn=2,nr(2),qe.forEach(function(i){return Tn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Dn=Ye.isRefreshing=!1,as("refresh")},ru=0,el=1,Ba,nr=function(e){if(e===2||!Dn&&!Ia){Ye.isUpdating=!0,Ba&&Ba.update(0);var t=qe.length,n=yn(),i=n-jl>=50,s=t&&qe[0].scroll();if(el=ru>s?-1:1,Dn||(ru=s),i&&(_i&&!Ol&&n-_i>200&&(_i=0,as("scrollEnd")),Sa=jl,jl=n),el<0){for(Ln=t;Ln-- >0;)qe[Ln]&&qe[Ln].update(0,i);el=1}else for(Ln=0;Ln<t;Ln++)qe[Ln]&&qe[Ln].update(0,i);Ye.isUpdating=!1}Ka=0},su=[jp,em,Ef,yf,fi+Oa,fi+Na,fi+Fa,fi+Ua,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],tl=su.concat([ts,ns,"boxSizing","max"+Qs,"max"+Tf,"position",fi,$t,$t+Fa,$t+Na,$t+Oa,$t+Ua]),Ug=function(e,t,n){Hs(n);var i=e._gsap;if(i.spacerIsNative)Hs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},tc=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=su.length,a=t.style,o=e.style,l;s--;)l=su[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Ef]=o[yf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ts]=xl(e,In)+en,a[ns]=xl(e,tn)+en,a[$t]=o[fi]=o[em]=o[jp]="0",Hs(i),o[ts]=o["max"+Qs]=n[ts],o[ns]=o["max"+Tf]=n[ns],o[$t]=n[$t],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Fg=/([A-Z])/g,Hs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Re.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(Fg,"-$1").toLowerCase())}},So=function(e){for(var t=tl.length,n=e.style,i=[],s=0;s<t;s++)i.push(tl[s],n[tl[s]]);return i.t=e,i},Og=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},nl={left:0,top:0},Th=function(e,t,n,i,s,a,o,l,c,u,d,f,h,_){Tn(e)&&(e=e(l)),Jn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Qo("0"+e.substr(3),n):0));var v=h?h.time():0,p,m,S;if(h&&h.seek(0),isNaN(e)||(e=+e),Ea(e))h&&(e=Re.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,f,e)),o&&jo(o,n,i,!0);else{Tn(t)&&(t=t(l));var w=(e||"0").split(" "),x,E,b,g;S=Un(t,l)||gt,x=ji(S)||{},(!x||!x.left&&!x.top)&&hi(S).display==="none"&&(g=S.style.display,S.style.display="block",x=ji(S),g?S.style.display=g:S.style.removeProperty("display")),E=Qo(w[0],x[i.d]),b=Qo(w[1]||"0",n),e=x[i.p]-c[i.p]-u+E+s-b,o&&jo(o,b,i,n-b<20||o._isStart&&b>20),n-=n-b}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var M=e+n,L=a._isStart;p="scroll"+i.d2,jo(a,M,i,L&&M>20||!L&&(d?Math.max(gt[p],jn[p]):a.parentNode[p])<=M+1),d&&(c=ji(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+en))}return h&&S&&(p=ji(S),h.seek(f),m=ji(S),h._caScrollDist=p[i.p]-m[i.p],e=e/h._caScrollDist*f),h&&h.seek(v),h?e:Math.round(e)},Bg=/(webkit|moz|length|cssText|inset)/i,bh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===gt){e._stOrig=s.cssText,o=hi(e);for(a in o)!+a&&!Bg.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Re.core.getCache(e).uncache=1,t.appendChild(e)}},om=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Mo=function(e,t,n){var i={};i[t.p]="+="+n,Re.set(e,i)},wh=function(e,t){var n=Ir(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var f=a.tween,h=l.onComplete,_={};c=c||n();var v=om(n,c,function(){f.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,f&&f.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return v(c+u*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){Ze.cache++,a.tween&&nr()},l.onComplete=function(){a.tween=0,h&&h.call(f)},f=a.tween=Re.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ln(e,"wheel",n.wheelHandler),Ye.isTouch&&ln(e,"touchmove",n.wheelHandler),s},Ye=(function(){function r(t,n){Ps||r.register(Re)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),tu(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ma){this.update=this.refresh=this.kill=Ci;return}n=xh(Jn(n)||Ea(n)||n.nodeType?{trigger:n}:n,vo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,f=s.trigger,h=s.pin,_=s.pinSpacing,v=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,w=s.once,x=s.snap,E=s.pinReparent,b=s.pinSpacer,g=s.containerAnimation,M=s.fastScrollEnd,L=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?In:tn,N=!d&&d!==0,I=Un(n.scroller||Ke),k=Re.core.getCache(I),D=rs(I),z=("pinType"in n?n.pinType:Cr(I,"pinType")||D&&"fixed")==="fixed",Y=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],P=N&&n.toggleActions.split(" "),G="markers"in n?n.markers:vo.markers,O=D?0:parseFloat(hi(I)["border"+R.p2+Qs])||0,A=this,H=n.onRefreshInit&&function(){return n.onRefreshInit(A)},J=Rg(I,D,R),ce=Cg(I,D),V=0,ae=0,ve=0,Ee=Ir(I,R),he,Ce,ut,Ae,ke,Ie,Oe,ft,at,Q,Je,Vt,St,nt,Ut,kt,B,pt,ot,Ge,pe,ht,Ne,Be,C,y,X,oe,re,de,xe,q,te,fe,U,ee,j,me,ue;if(A._startClamp=A._endClamp=!1,A._dir=R,p*=45,A.scroller=I,A.scroll=g?g.time.bind(g):Ee,Ae=Ee(),A.vars=n,i=i||n.animation,"refreshPriority"in n&&(Xp=1,n.refreshPriority===-9999&&(Ba=A)),k.tweenScroll=k.tweenScroll||{top:wh(I,tn),left:wh(I,In)},A.tweenTo=he=k.tweenScroll[R.p],A.scrubDuration=function(ne){te=Ea(ne)&&ne,te?q?q.duration(ne):q=Re.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:te,paused:!0,onComplete:function(){return m&&m(A)}}):(q&&q.progress(1).kill(),q=0)},i&&(i.vars.lazy=!1,i._initted&&!A.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),A.animation=i.pause(),i.scrollTrigger=A,A.scrubDuration(d),de=0,l||(l=i.vars.id)),x&&((!qr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in gt.style&&Re.set(D?[gt,jn]:I,{scrollBehavior:"auto"}),Ze.forEach(function(ne){return Tn(ne)&&ne.target===(D?vt.scrollingElement||jn:I)&&(ne.smooth=!1)}),ut=Tn(x.snapTo)?x.snapTo:x.snapTo==="labels"?Lg(i):x.snapTo==="labelsDirectional"?Dg(i):x.directional!==!1?function(ne,Se){return bf(x.snapTo)(ne,yn()-ae<500?0:Se.direction)}:Re.utils.snap(x.snapTo),fe=x.duration||{min:.1,max:2},fe=qr(fe)?Da(fe.min,fe.max):Da(fe,fe),U=Re.delayedCall(x.delay||te/2||.1,function(){var ne=Ee(),Se=yn()-ae<500,ie=he.tween;if((Se||Math.abs(A.getVelocity())<10)&&!ie&&!Ol&&V!==ne){var be=(ne-Ie)/nt,Qe=i&&!N?i.totalProgress():be,Ve=Se?0:(Qe-xe)/(yn()-Sa)*1e3||0,At=Re.utils.clamp(-be,1-be,ms(Ve/2)*Ve/.185),Wt=be+(x.inertia===!1?0:At),Rt,Mt,_t=x,Zt=_t.onStart,yt=_t.onInterrupt,_n=_t.onComplete;if(Rt=ut(Wt,A),Ea(Rt)||(Rt=Wt),Mt=Math.max(0,Math.round(Ie+Rt*nt)),ne<=Oe&&ne>=Ie&&Mt!==ne){if(ie&&!ie._initted&&ie.data<=ms(Mt-ne))return;x.inertia===!1&&(At=Rt-be),he(Mt,{duration:fe(ms(Math.max(ms(Wt-Qe),ms(Rt-Qe))*.185/Ve/.05||0)),ease:x.ease||"power3",data:ms(Mt-ne),onInterrupt:function(){return U.restart(!0)&&yt&&ps(A,yt)},onComplete:function(){A.update(),V=Ee(),i&&!N&&(q?q.resetTo("totalProgress",Rt,i._tTime/i._tDur):i.progress(Rt)),de=xe=i&&!N?i.totalProgress():A.progress,S&&S(A),_n&&ps(A,_n)}},ne,At*nt,Mt-ne-At*nt),Zt&&ps(A,Zt,he.tween)}}else A.isActive&&V!==ne&&U.restart(!0)}).pause()),l&&(iu[l]=A),f=A.trigger=Un(f||h!==!0&&h),ue=f&&f._gsap&&f._gsap.stRevert,ue&&(ue=ue(A)),h=h===!0?f:Un(h),Jn(o)&&(o={targets:f,className:o}),h&&(_===!1||_===fi||(_=!_&&h.parentNode&&h.parentNode.style&&hi(h.parentNode).display==="flex"?!1:$t),A.pin=h,Ce=Re.core.getCache(h),Ce.spacer?Ut=Ce.pinState:(b&&(b=Un(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),Ce.spacerIsNative=!!b,b&&(Ce.spacerState=So(b))),Ce.spacer=pt=b||vt.createElement("div"),pt.classList.add("pin-spacer"),l&&pt.classList.add("pin-spacer-"+l),Ce.pinState=Ut=So(h)),n.force3D!==!1&&Re.set(h,{force3D:!0}),A.spacer=pt=Ce.spacer,re=hi(h),Be=re[_+R.os2],Ge=Re.getProperty(h),pe=Re.quickSetter(h,R.a,en),tc(h,pt,re),B=So(h)),G){Vt=qr(G)?xh(G,Sh):Sh,Q=xo("scroller-start",l,I,R,Vt,0),Je=xo("scroller-end",l,I,R,Vt,0,Q),ot=Q["offset"+R.op.d2];var _e=Un(Cr(I,"content")||I);ft=this.markerStart=xo("start",l,_e,R,Vt,ot,0,g),at=this.markerEnd=xo("end",l,_e,R,Vt,ot,0,g),g&&(me=Re.quickSetter([ft,at],R.a,en)),!z&&!(Oi.length&&Cr(I,"fixedMarkers")===!0)&&(Pg(D?gt:I),Re.set([Q,Je],{force3D:!0}),y=Re.quickSetter(Q,R.a,en),oe=Re.quickSetter(Je,R.a,en))}if(g){var le=g.vars.onUpdate,ge=g.vars.onUpdateParams;g.eventCallback("onUpdate",function(){A.update(0,0,1),le&&le.apply(g,ge||[])})}if(A.previous=function(){return qe[qe.indexOf(A)-1]},A.next=function(){return qe[qe.indexOf(A)+1]},A.revert=function(ne,Se){if(!Se)return A.kill(!0);var ie=ne!==!1||!A.enabled,be=Mn;ie!==A.isReverted&&(ie&&(ee=Math.max(Ee(),A.scroll.rec||0),ve=A.progress,j=i&&i.progress()),ft&&[ft,at,Q,Je].forEach(function(Qe){return Qe.style.display=ie?"none":"block"}),ie&&(Mn=A,A.update(ie)),h&&(!E||!A.isActive)&&(ie?Ug(h,pt,Ut):tc(h,pt,hi(h),C)),ie||A.update(ie),Mn=be,A.isReverted=ie)},A.refresh=function(ne,Se,ie,be){if(!((Mn||!A.enabled)&&!Se)){if(h&&ne&&_i){ln(r,"scrollEnd",nm);return}!Dn&&H&&H(A),Mn=A,he.tween&&!ie&&(he.tween.kill(),he.tween=0),q&&q.pause(),v&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(W){return W.vars.immediateRender&&W.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),A.isReverted||A.revert(!0,!0),A._subPinOffset=!1;var Qe=J(),Ve=ce(),At=g?g.duration():Ni(I,R),Wt=nt<=.01||!nt,Rt=0,Mt=be||0,_t=qr(ie)?ie.end:n.end,Zt=n.endTrigger||f,yt=qr(ie)?ie.start:n.start||(n.start===0||!f?0:h?"0 0":"0 100%"),_n=A.pinnedContainer=n.pinnedContainer&&Un(n.pinnedContainer,A),Yn=f&&Math.max(0,qe.indexOf(A))||0,Ft=Yn,Xt,Jt,qn,hs,Qt,Ot,oi,sa,oo,cr,T,F,Z;for(G&&qr(ie)&&(F=Re.getProperty(Q,R.p),Z=Re.getProperty(Je,R.p));Ft-- >0;)Ot=qe[Ft],Ot.end||Ot.refresh(0,1)||(Mn=A),oi=Ot.pin,oi&&(oi===f||oi===h||oi===_n)&&!Ot.isReverted&&(cr||(cr=[]),cr.unshift(Ot),Ot.revert(!0,!0)),Ot!==qe[Ft]&&(Yn--,Ft--);for(Tn(yt)&&(yt=yt(A)),yt=mh(yt,"start",A),Ie=Th(yt,f,Qe,R,Ee(),ft,Q,A,Ve,O,z,At,g,A._startClamp&&"_startClamp")||(h?-.001:0),Tn(_t)&&(_t=_t(A)),Jn(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(Jn(yt)?yt.split(" ")[0]:"")+_t:(Rt=Qo(_t.substr(2),Qe),_t=Jn(yt)?yt:(g?Re.utils.mapRange(0,g.duration(),g.scrollTrigger.start,g.scrollTrigger.end,Ie):Ie)+Rt,Zt=f)),_t=mh(_t,"end",A),Oe=Math.max(Ie,Th(_t||(Zt?"100% 0":At),Zt,Qe,R,Ee()+Rt,at,Je,A,Ve,O,z,At,g,A._endClamp&&"_endClamp"))||-.001,Rt=0,Ft=Yn;Ft--;)Ot=qe[Ft]||{},oi=Ot.pin,oi&&Ot.start-Ot._pinPush<=Ie&&!g&&Ot.end>0&&(Xt=Ot.end-(A._startClamp?Math.max(0,Ot.start):Ot.start),(oi===f&&Ot.start-Ot._pinPush<Ie||oi===_n)&&isNaN(yt)&&(Rt+=Xt*(1-Ot.progress)),oi===h&&(Mt+=Xt));if(Ie+=Rt,Oe+=Rt,A._startClamp&&(A._startClamp+=Rt),A._endClamp&&!Dn&&(A._endClamp=Oe||-.001,Oe=Math.min(Oe,Ni(I,R))),nt=Oe-Ie||(Ie-=.01)&&.001,Wt&&(ve=Re.utils.clamp(0,1,Re.utils.normalize(Ie,Oe,ee))),A._pinPush=Mt,ft&&Rt&&(Xt={},Xt[R.a]="+="+Rt,_n&&(Xt[R.p]="-="+Ee()),Re.set([ft,at],Xt)),h&&!(nu&&A.end>=Ni(I,R)))Xt=hi(h),hs=R===tn,qn=Ee(),ht=parseFloat(Ge(R.a))+Mt,!At&&Oe>1&&(T=(D?vt.scrollingElement||jn:I).style,T={style:T,value:T["overflow"+R.a.toUpperCase()]},D&&hi(gt)["overflow"+R.a.toUpperCase()]!=="scroll"&&(T.style["overflow"+R.a.toUpperCase()]="scroll")),tc(h,pt,Xt),B=So(h),Jt=ji(h,!0),sa=z&&Ir(I,hs?In:tn)(),_?(C=[_+R.os2,nt+Mt+en],C.t=pt,Ft=_===$t?xl(h,R)+nt+Mt:0,Ft&&(C.push(R.d,Ft+en),pt.style.flexBasis!=="auto"&&(pt.style.flexBasis=Ft+en)),Hs(C),_n&&qe.forEach(function(W){W.pin===_n&&W.vars.pinSpacing!==!1&&(W._subPinOffset=!0)}),z&&Ee(ee)):(Ft=xl(h,R),Ft&&pt.style.flexBasis!=="auto"&&(pt.style.flexBasis=Ft+en)),z&&(Qt={top:Jt.top+(hs?qn-Ie:sa)+en,left:Jt.left+(hs?sa:qn-Ie)+en,boxSizing:"border-box",position:"fixed"},Qt[ts]=Qt["max"+Qs]=Math.ceil(Jt.width)+en,Qt[ns]=Qt["max"+Tf]=Math.ceil(Jt.height)+en,Qt[fi]=Qt[fi+Fa]=Qt[fi+Na]=Qt[fi+Oa]=Qt[fi+Ua]="0",Qt[$t]=Xt[$t],Qt[$t+Fa]=Xt[$t+Fa],Qt[$t+Na]=Xt[$t+Na],Qt[$t+Oa]=Xt[$t+Oa],Qt[$t+Ua]=Xt[$t+Ua],kt=Og(Ut,Qt,E),Dn&&Ee(0)),i?(oo=i._initted,Jl(1),i.render(i.duration(),!0,!0),Ne=Ge(R.a)-ht+nt+Mt,X=Math.abs(nt-Ne)>1,z&&X&&kt.splice(kt.length-2,2),i.render(0,!0,!0),oo||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Jl(0)):Ne=nt,T&&(T.value?T.style["overflow"+R.a.toUpperCase()]=T.value:T.style.removeProperty("overflow-"+R.a));else if(f&&Ee()&&!g)for(Jt=f.parentNode;Jt&&Jt!==gt;)Jt._pinOffset&&(Ie-=Jt._pinOffset,Oe-=Jt._pinOffset),Jt=Jt.parentNode;cr&&cr.forEach(function(W){return W.revert(!1,!0)}),A.start=Ie,A.end=Oe,Ae=ke=Dn?ee:Ee(),!g&&!Dn&&(Ae<ee&&Ee(ee),A.scroll.rec=0),A.revert(!1,!0),ae=yn(),U&&(V=-1,U.restart(!0)),Mn=0,i&&N&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(Wt||ve!==A.progress||g||v||i&&!i._initted)&&(i&&!N&&(i._initted||ve||i.vars.immediateRender!==!1)&&i.totalProgress(g&&Ie<-.001&&!ve?Re.utils.normalize(Ie,Oe,0):ve,!0),A.progress=Wt||(Ae-Ie)/nt===ve?0:ve),h&&_&&(pt._pinOffset=Math.round(A.progress*Ne)),q&&q.invalidate(),isNaN(F)||(F-=Re.getProperty(Q,R.p),Z-=Re.getProperty(Je,R.p),Mo(Q,R,F),Mo(ft,R,F-(be||0)),Mo(Je,R,Z),Mo(at,R,Z-(be||0))),Wt&&!Dn&&A.update(),u&&!Dn&&!St&&(St=!0,u(A),St=!1)}},A.getVelocity=function(){return(Ee()-ke)/(yn()-Sa)*1e3||0},A.endAnimation=function(){la(A.callbackAnimation),i&&(q?q.progress(1):i.paused()?N||la(i,A.direction<0,1):la(i,i.reversed()))},A.labelToScroll=function(ne){return i&&i.labels&&(Ie||A.refresh()||Ie)+i.labels[ne]/i.duration()*nt||0},A.getTrailing=function(ne){var Se=qe.indexOf(A),ie=A.direction>0?qe.slice(0,Se).reverse():qe.slice(Se+1);return(Jn(ne)?ie.filter(function(be){return be.vars.preventOverlaps===ne}):ie).filter(function(be){return A.direction>0?be.end<=Ie:be.start>=Oe})},A.update=function(ne,Se,ie){if(!(g&&!ie&&!ne)){var be=Dn===!0?ee:A.scroll(),Qe=ne?0:(be-Ie)/nt,Ve=Qe<0?0:Qe>1?1:Qe||0,At=A.progress,Wt,Rt,Mt,_t,Zt,yt,_n,Yn;if(Se&&(ke=Ae,Ae=g?Ee():be,x&&(xe=de,de=i&&!N?i.totalProgress():Ve)),p&&h&&!Mn&&!po&&_i&&(!Ve&&Ie<be+(be-ke)/(yn()-Sa)*p?Ve=1e-4:Ve===1&&Oe>be+(be-ke)/(yn()-Sa)*p&&(Ve=.9999)),Ve!==At&&A.enabled){if(Wt=A.isActive=!!Ve&&Ve<1,Rt=!!At&&At<1,yt=Wt!==Rt,Zt=yt||!!Ve!=!!At,A.direction=Ve>At?1:-1,A.progress=Ve,Zt&&!Mn&&(Mt=Ve&&!At?0:Ve===1?1:At===1?2:3,N&&(_t=!yt&&P[Mt+1]!=="none"&&P[Mt+1]||P[Mt],Yn=i&&(_t==="complete"||_t==="reset"||_t in i))),L&&(yt||Yn)&&(Yn||d||!i)&&(Tn(L)?L(A):A.getTrailing(L).forEach(function(qn){return qn.endAnimation()})),N||(q&&!Mn&&!po?(q._dp._time-q._start!==q._time&&q.render(q._dp._time-q._start),q.resetTo?q.resetTo("totalProgress",Ve,i._tTime/i._tDur):(q.vars.totalProgress=Ve,q.invalidate().restart())):i&&i.totalProgress(Ve,!!(Mn&&(ae||ne)))),h){if(ne&&_&&(pt.style[_+R.os2]=Be),!z)pe(ya(ht+Ne*Ve));else if(Zt){if(_n=!ne&&Ve>At&&Oe+1>be&&be+1>=Ni(I,R),E)if(!ne&&(Wt||_n)){var Ft=ji(h,!0),Xt=be-Ie;bh(h,gt,Ft.top+(R===tn?Xt:0)+en,Ft.left+(R===tn?0:Xt)+en)}else bh(h,pt);Hs(Wt||_n?kt:B),X&&Ve<1&&Wt||pe(ht+(Ve===1&&!_n?Ne:0))}}x&&!he.tween&&!Mn&&!po&&U.restart(!0),o&&(yt||w&&Ve&&(Ve<1||!Ql))&&$a(o.targets).forEach(function(qn){return qn.classList[Wt||w?"add":"remove"](o.className)}),a&&!N&&!ne&&a(A),Zt&&!Mn?(N&&(Yn&&(_t==="complete"?i.pause().totalProgress(1):_t==="reset"?i.restart(!0).pause():_t==="restart"?i.restart(!0):i[_t]()),a&&a(A)),(yt||!Ql)&&(c&&yt&&ps(A,c),Y[Mt]&&ps(A,Y[Mt]),w&&(Ve===1?A.kill(!1,1):Y[Mt]=0),yt||(Mt=Ve===1?1:3,Y[Mt]&&ps(A,Y[Mt]))),M&&!Wt&&Math.abs(A.getVelocity())>(Ea(M)?M:2500)&&(la(A.callbackAnimation),q?q.progress(1):la(i,_t==="reverse"?1:!Ve,1))):N&&a&&!Mn&&a(A)}if(oe){var Jt=g?be/g.duration()*(g._caScrollDist||0):be;y(Jt+(Q._isFlipped?1:0)),oe(Jt)}me&&me(-be/g.duration()*(g._caScrollDist||0))}},A.enable=function(ne,Se){A.enabled||(A.enabled=!0,ln(I,"resize",Ta),D||ln(I,"scroll",_s),H&&ln(r,"refreshInit",H),ne!==!1&&(A.progress=ve=0,Ae=ke=V=Ee()),Se!==!1&&A.refresh())},A.getTween=function(ne){return ne&&he?he.tween:q},A.setPositions=function(ne,Se,ie,be){if(g){var Qe=g.scrollTrigger,Ve=g.duration(),At=Qe.end-Qe.start;ne=Qe.start+At*ne/Ve,Se=Qe.start+At*Se/Ve}A.refresh(!1,!1,{start:_h(ne,ie&&!!A._startClamp),end:_h(Se,ie&&!!A._endClamp)},be),A.update()},A.adjustPinSpacing=function(ne){if(C&&ne){var Se=C.indexOf(R.d)+1;C[Se]=parseFloat(C[Se])+ne+en,C[1]=parseFloat(C[1])+ne+en,Hs(C)}},A.disable=function(ne,Se){if(ne!==!1&&A.revert(!0,!0),A.enabled&&(A.enabled=A.isActive=!1,Se||q&&q.pause(),ee=0,Ce&&(Ce.uncache=1),H&&on(r,"refreshInit",H),U&&(U.pause(),he.tween&&he.tween.kill()&&(he.tween=0)),!D)){for(var ie=qe.length;ie--;)if(qe[ie].scroller===I&&qe[ie]!==A)return;on(I,"resize",Ta),D||on(I,"scroll",_s)}},A.kill=function(ne,Se){A.disable(ne,Se),q&&!Se&&q.kill(),l&&delete iu[l];var ie=qe.indexOf(A);ie>=0&&qe.splice(ie,1),ie===Ln&&el>0&&Ln--,ie=0,qe.forEach(function(be){return be.scroller===A.scroller&&(ie=1)}),ie||Dn||(A.scroll.rec=0),i&&(i.scrollTrigger=null,ne&&i.revert({kill:!1}),Se||i.kill()),ft&&[ft,at,Q,Je].forEach(function(be){return be.parentNode&&be.parentNode.removeChild(be)}),Ba===A&&(Ba=0),h&&(Ce&&(Ce.uncache=1),ie=0,qe.forEach(function(be){return be.pin===h&&ie++}),ie||(Ce.spacer=0)),n.onKill&&n.onKill(A)},qe.push(A),A.enable(!1,!1),ue&&ue(A),i&&i.add&&!nt){var se=A.update;A.update=function(){A.update=se,Ze.cache++,Ie||Oe||A.refresh()},Re.delayedCall(.01,A.update),nt=.01,Ie=Oe=0}else A.refresh();h&&Ng()},r.register=function(n){return Ps||(Re=n||Zp(),Kp()&&window.document&&r.enable(),Ps=Ma),Ps},r.defaults=function(n){if(n)for(var i in n)vo[i]=n[i];return vo},r.disable=function(n,i){Ma=0,qe.forEach(function(a){return a[i?"kill":"disable"](n)}),on(Ke,"wheel",_s),on(vt,"scroll",_s),clearInterval(ho),on(vt,"touchcancel",Ci),on(gt,"touchstart",Ci),_o(on,vt,"pointerdown,touchstart,mousedown",gh),_o(on,vt,"pointerup,touchend,mouseup",vh),vl.kill(),mo(on);for(var s=0;s<Ze.length;s+=3)go(on,Ze[s],Ze[s+1]),go(on,Ze[s],Ze[s+2])},r.enable=function(){if(Ke=window,vt=document,jn=vt.documentElement,gt=vt.body,Re){if($a=Re.utils.toArray,Da=Re.utils.clamp,tu=Re.core.context||Ci,Jl=Re.core.suppressOverwrites||Ci,Sf=Ke.history.scrollRestoration||"auto",ru=Ke.pageYOffset||0,Re.core.globals("ScrollTrigger",r),gt){Ma=1,Gs=document.createElement("div"),Gs.style.height="100vh",Gs.style.position="absolute",am(),Ag(),Ht.register(Re),r.isTouch=Ht.isTouch,gr=Ht.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),eu=Ht.isTouch===1,ln(Ke,"wheel",_s),xf=[Ke,vt,jn,gt],Re.matchMedia?(r.matchMedia=function(u){var d=Re.matchMedia(),f;for(f in u)d.add(f,u[f]);return d},Re.addEventListener("matchMediaInit",function(){rm(),wf()}),Re.addEventListener("matchMediaRevert",function(){return im()}),Re.addEventListener("matchMedia",function(){Kr(0,1),as("matchMedia")}),Re.matchMedia().add("(orientation: portrait)",function(){return ec(),ec})):console.warn("Requires GSAP 3.11.0 or later"),ec(),ln(vt,"scroll",_s);var n=gt.hasAttribute("style"),i=gt.style,s=i.borderTopStyle,a=Re.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=ji(gt),tn.m=Math.round(o.top+tn.sc())||0,In.m=Math.round(o.left+In.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(gt.setAttribute("style",""),gt.removeAttribute("style")),ho=setInterval(Mh,250),Re.delayedCall(.5,function(){return po=0}),ln(vt,"touchcancel",Ci),ln(gt,"touchstart",Ci),_o(ln,vt,"pointerdown,touchstart,mousedown",gh),_o(ln,vt,"pointerup,touchend,mouseup",vh),jc=Re.utils.checkPrefix("transform"),tl.push(jc),Ps=yn(),vl=Re.delayedCall(.2,Kr).pause(),Ls=[vt,"visibilitychange",function(){var u=Ke.innerWidth,d=Ke.innerHeight;vt.hidden?(dh=u,ph=d):(dh!==u||ph!==d)&&Ta()},vt,"DOMContentLoaded",Kr,Ke,"load",Kr,Ke,"resize",Ta],mo(ln),qe.forEach(function(u){return u.enable(0,1)}),l=0;l<Ze.length;l+=3)go(on,Ze[l],Ze[l+1]),go(on,Ze[l],Ze[l+2])}else if(vt){var c=function u(){r.enable(),vt.removeEventListener("DOMContentLoaded",u)};vt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Ql=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ho)||(ho=i)&&setInterval(Mh,i),"ignoreMobileResize"in n&&(eu=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(mo(on)||mo(ln,n.autoRefreshEvents||"none"),Yp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Un(n),a=Ze.indexOf(s),o=rs(s);~a&&Ze.splice(a,o?6:2),i&&(o?Oi.unshift(Ke,i,gt,i,jn,i):Oi.unshift(s,i))},r.clearMatchMedia=function(n){qe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Jn(n)?Un(n):n).getBoundingClientRect(),o=a[s?ts:ns]*i||0;return s?a.right-o>0&&a.left+o<Ke.innerWidth:a.bottom-o>0&&a.top+o<Ke.innerHeight},r.positionInViewport=function(n,i,s){Jn(n)&&(n=Un(n));var a=n.getBoundingClientRect(),o=a[s?ts:ns],l=i==null?o/2:i in Sl?Sl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/Ke.innerWidth:(a.top+l)/Ke.innerHeight},r.killAll=function(n){if(qe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ss.killAll||[];ss={},i.forEach(function(s){return s()})}},r})();Ye.version="3.15.0";Ye.saveStyles=function(r){return r?$a(r).forEach(function(e){if(e&&e.style){var t=Zn.indexOf(e);t>=0&&Zn.splice(t,5),Zn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Re.core.getCache(e),tu())}}):Zn};Ye.revert=function(r,e){return wf(!r,e)};Ye.create=function(r,e){return new Ye(r,e)};Ye.refresh=function(r){return r?Ta(!0):(Ps||Ye.register())&&Kr(!0)};Ye.update=function(r){return++Ze.cache&&nr(r===!0?2:0)};Ye.clearScrollMemory=sm;Ye.maxScroll=function(r,e){return Ni(r,e?In:tn)};Ye.getScrollFunc=function(r,e){return Ir(Un(r),e?In:tn)};Ye.getById=function(r){return iu[r]};Ye.getAll=function(){return qe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ye.isScrolling=function(){return!!_i};Ye.snapDirectional=bf;Ye.addEventListener=function(r,e){var t=ss[r]||(ss[r]=[]);~t.indexOf(e)||t.push(e)};Ye.removeEventListener=function(r,e){var t=ss[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ye.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],f=[],h=Re.delayedCall(i,function(){u(d,f),d=[],f=[]}).pause();return function(_){d.length||h.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Tn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Tn(s)&&(s=s(),ln(Ye,"refresh",function(){return s=e.batchMax()})),$a(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ye.create(c))}),t};var Ah=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},nc=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ht.isTouch?" pinch-zoom":""):"none",e===jn&&r(gt,t)},yo={auto:1,scroll:1},zg=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Re.core.getCache(s),o=yn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==gt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(yo[(l=hi(s)).overflowY]||yo[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!rs(s)&&(yo[(l=hi(s)).overflowY]||yo[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},lm=function(e,t,n,i){return Ht.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&zg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ln(vt,Ht.eventTypes[0],Ch,!1,!0)},onDisable:function(){return on(vt,Ht.eventTypes[0],Ch,!0)}})},kg=/(input|label|select|textarea)/i,Rh,Ch=function(e){var t=kg.test(e.target.tagName);(t||Rh)&&(e._gsapAllow=!0,Rh=t)},Gg=function(e){qr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Un(e.target)||jn,u=Re.core.globals().ScrollSmoother,d=u&&u.get(),f=gr&&(e.content&&Un(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),h=Ir(c,tn),_=Ir(c,In),v=1,p=(Ht.isTouch&&Ke.visualViewport?Ke.visualViewport.scale*Ke.visualViewport.width:Ke.outerWidth)/Ke.innerWidth,m=0,S=Tn(i)?function(){return i(o)}:function(){return i||2.8},w,x,E=lm(c,e.type,!0,s),b=function(){return x=!1},g=Ci,M=Ci,L=function(){l=Ni(c,tn),M=Da(gr?1:0,l),n&&(g=Da(0,Ni(c,In))),w=is},R=function(){f._gsap.y=ya(parseFloat(f._gsap.y)+h.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},N=function(){if(x){requestAnimationFrame(b);var G=ya(o.deltaY/2),O=M(h.v-G);if(f&&O!==h.v+h.offset){h.offset=O-h.v;var A=ya((parseFloat(f&&f._gsap.y)||0)-h.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+A+", 0, 1)",f._gsap.y=A+"px",h.cacheID=Ze.cache,nr()}return!0}h.offset&&R(),x=!0},I,k,D,z,Y=function(){L(),I.isActive()&&I.vars.scrollY>l&&(h()>l?I.progress(1)&&h(l):I.resetTo("scrollY",l))};return f&&Re.set(f,{y:"+=0"}),e.ignoreCheck=function(P){return gr&&P.type==="touchmove"&&N()||v>1.05&&P.type!=="touchstart"||o.isGesturing||P.touches&&P.touches.length>1},e.onPress=function(){x=!1;var P=v;v=ya((Ke.visualViewport&&Ke.visualViewport.scale||1)/p),I.pause(),P!==v&&nc(c,v>1.01?!0:n?!1:"x"),k=_(),D=h(),L(),w=is},e.onRelease=e.onGestureStart=function(P,G){if(h.offset&&R(),!G)z.restart(!0);else{Ze.cache++;var O=S(),A,H;n&&(A=_(),H=A+O*.05*-P.velocityX/.227,O*=Ah(_,A,H,Ni(c,In)),I.vars.scrollX=g(H)),A=h(),H=A+O*.05*-P.velocityY/.227,O*=Ah(h,A,H,Ni(c,tn)),I.vars.scrollY=M(H),I.invalidate().duration(O).play(.01),(gr&&I.vars.scrollY>=l||A>=l-1)&&Re.to({},{onUpdate:Y,duration:O})}a&&a(P)},e.onWheel=function(){I._ts&&I.pause(),yn()-m>1e3&&(w=0,m=yn())},e.onChange=function(P,G,O,A,H){if(is!==w&&L(),G&&n&&_(g(A[2]===G?k+(P.startX-P.x):_()+G-A[1])),O){h.offset&&R();var J=H[2]===O,ce=J?D+P.startY-P.y:h()+O-H[1],V=M(ce);J&&ce!==V&&(D+=V-ce),h(V)}(O||G)&&nr()},e.onEnable=function(){nc(c,n?!1:"x"),Ye.addEventListener("refresh",Y),ln(Ke,"resize",Y),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=_.smooth=!1),E.enable()},e.onDisable=function(){nc(c,!0),on(Ke,"resize",Y),Ye.removeEventListener("refresh",Y),E.kill()},e.lockAxis=e.lockAxis!==!1,o=new Ht(e),o.iOS=gr,gr&&!h()&&h(1),gr&&Re.ticker.add(Ci),z=o._dc,I=Re.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:om(h,h(),function(){return I.pause()})},onUpdate:nr,onComplete:z.vars.onComplete}),o};Ye.sort=function(r){if(Tn(r))return qe.sort(r);var e=Ke.pageYOffset||0;return Ye.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Ke.innerHeight}),qe.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ye.observe=function(r){return new Ht(r)};Ye.normalizeScroll=function(r){if(typeof r>"u")return Pn;if(r===!0&&Pn)return Pn.enable();if(r===!1){Pn&&Pn.kill(),Pn=r;return}var e=r instanceof Ht?r:Gg(r);return Pn&&Pn.target===e.target&&Pn.kill(),rs(e.target)&&(Pn=e),e};Ye.core={_getVelocityProp:Qc,_inputObserver:lm,_scrollers:Ze,_proxies:Oi,bridge:{ss:function(){_i||as("scrollStart"),_i=yn()},ref:function(){return Mn}}};Zp()&&Re.registerPlugin(Ye);/*!
 * SplitText 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2026, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */let ca,ua,Ph=typeof Symbol=="function"?Symbol():"_split",au,Hg=()=>au||Bl.register(window.gsap),Lh=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Za=r=>r?typeof r=="string"?Za(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...Za(t)):e.push(t),e),[]):[r]:[],Dh=r=>Za(r).filter(e=>e&&e.nodeType===1),ou=[],ic=function(){},Vg={add:r=>r()},Wg=/\s+/g,Ih=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Ml={left:0,top:0,width:0,height:0},Xg=(r,e)=>{for(;++e<r.length&&r[e]===Ml;);return r[e]||Ml},Nh=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},Uh=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||ou),n=r.length,i,s,a,o;if(t.size)for(;--n>-1;){s=r[n];for(a of t)if(a.startsWith(s)&&a.length>s.length){for(i=0,o=s;a.startsWith(o+=r[n+ ++i])&&o.length<a.length;);if(i&&o.length===a.length){r[n]=a,r.splice(n+1,i);break}}}}return r},Fh=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),gs=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),lu=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:a=!1}=e,o=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let d=document.createElement(i),f=t.length+1;return n&&(d.className=n+(l?" "+n+f:"")),a&&d.style.setProperty("--"+r,f+""),s!=="none"&&d.setAttribute("aria-hidden","true"),i!=="span"&&(d.style.position="relative",d.style.display=o),d.textContent=u,t.push(d),d};return l&&(n=n.replace("++","")),c.collection=t,c},Yg=(r,e,t,n)=>{let i=lu("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(a,o)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[a]);a<o;a++)l.appendChild(e[a]);l.normalize()}},cm=(r,e,t,n,i,s,a,o,l,c)=>{var u;let d=Array.from(r.childNodes),f=0,{wordDelimiter:h,reduceWhiteSpace:_=!0,prepareText:v}=e,p=r.getBoundingClientRect(),m=p,S=!_&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",w=0,x=t.collection,E,b,g,M,L,R,N,I,k,D,z,Y,P,G,O,A,H,J;for(typeof h=="object"?(g=h.delimiter||h,b=h.replaceWith||""):b=h===""?"":h||" ",E=b!==" ";f<d.length;f++)if(M=d[f],M.nodeType===3){for(O=M.textContent||"",_?O=O.replace(Wg," "):S&&(O=O.replace(/\n/g,b+`
`)),v&&(O=v(O,r)),M.textContent=O,L=b||g?O.split(g||b):O.match(o)||ou,H=L[L.length-1],I=E?H.slice(-1)===" ":!H,H||L.pop(),m=p,N=E?L[0].charAt(0)===" ":!L[0],N&&gs(" ",r,M),L[0]||L.shift(),Uh(L,l),s&&c||(M.textContent=""),k=1;k<=L.length;k++)if(A=L[k-1],!_&&S&&A.charAt(0)===`
`&&((u=M.previousSibling)==null||u.remove(),gs(document.createElement("br"),r,M),A=A.slice(1)),!_&&A==="")gs(b,r,M);else if(A===" ")r.insertBefore(document.createTextNode(" "),M);else{if(E&&A.charAt(0)===" "&&gs(" ",r,M),w&&k===1&&!N&&x.indexOf(w.parentNode)>-1?(R=x[x.length-1],R.appendChild(document.createTextNode(n?"":A))):(R=t(n?"":A),gs(R,r,M),w&&k===1&&!N&&R.insertBefore(w,R.firstChild)),n)for(z=Lh?Uh([...Lh.segment(A)].map(ce=>ce.segment),l):A.match(o)||ou,J=0;J<z.length;J++)R.appendChild(z[J]===" "?document.createTextNode(" "):n(z[J]));if(s&&c){if(O=M.textContent=O.substring(A.length+1,O.length),D=R.getBoundingClientRect(),D.top>m.top&&D.left<=m.left){for(Y=r.cloneNode(),P=r.childNodes[0];P&&P!==R;)G=P,P=P.nextSibling,Y.appendChild(G);r.parentNode.insertBefore(Y,r),i&&Fh(Y)}m=D}(k<L.length||I)&&gs(k>=L.length?" ":E&&A.slice(-1)===" "?" "+b:b,r,M)}r.removeChild(M),w=0}else M.nodeType===1&&(a&&a.indexOf(M)>-1?(x.indexOf(M.previousSibling)>-1&&x[x.length-1].appendChild(M),w=M):(cm(M,e,t,n,i,s,a,o,l,!0),w=0),i&&Fh(M))};const um=class fm{constructor(e,t){this.isSplit=!1,Hg(),this.elements=Dh(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(a=>{var o;t.overwrite!==!1&&((o=a[Ph])==null||o._data.orig.filter(({element:l})=>l===a).forEach(Nh)),a[Ph]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let a=n.length,o;for(;a--;){o=n[a];let l=o.element.offsetWidth;if(l!==o.width){o.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},ic(this),this.split(t)}split(e){return(this._ctx||Vg).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:a,autoSplit:o=!1,specialChars:l,mask:c}=this.vars,u=t.indexOf("lines")>-1,d=t.indexOf("chars")>-1,f=t.indexOf("words")>-1,h=d&&!f&&!u,_=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),v=_?new RegExp(_.source+"|"+Ih.source,"gu"):Ih,p=!!e.ignore&&Dh(e.ignore),{orig:m,animTime:S,obs:w}=this._data,x;(d||f||u)&&(this.elements.forEach((E,b)=>{m[b]={element:E,html:E.innerHTML,ariaL:E.getAttribute("aria-label"),ariaH:E.getAttribute("aria-hidden")},n==="auto"?E.setAttribute("aria-label",(E.textContent||"").trim()):n==="hidden"&&E.setAttribute("aria-hidden","true");let g=[],M=[],L=[],R=d?lu("char",e,g):null,N=lu("word",e,M),I,k,D,z;if(cm(E,e,N,R,h,i&&(u||h),p,v,_,!1),u){let Y=Za(E.childNodes),P=Yg(E,Y,e,L),G,O=[],A=0,H=Y.map(V=>V.nodeType===1?V.getBoundingClientRect():Ml),J=Ml,ce;for(I=0;I<Y.length;I++)G=Y[I],G.nodeType===1&&(G.nodeName==="BR"?((!I||Y[I-1].nodeName!=="BR")&&(O.push(G),P(A,I+1)),A=I+1,J=Xg(H,I)):(ce=H[I],I&&ce.top>J.top&&ce.left<J.left+J.width-1&&(P(A,I),A=I),J=ce));A<I&&P(A,I),O.forEach(V=>{var ae;return(ae=V.parentNode)==null?void 0:ae.removeChild(V)})}if(!f){for(I=0;I<M.length;I++)if(k=M[I],d||!k.nextSibling||k.nextSibling.nodeType!==3)if(s&&!u){for(D=document.createElement("span"),D.style.whiteSpace="nowrap";k.firstChild;)D.appendChild(k.firstChild);k.replaceWith(D)}else k.replaceWith(...k.childNodes);else z=k.nextSibling,z&&z.nodeType===3&&(z.textContent=(k.textContent||"")+(z.textContent||""),k.remove());M.length=0,E.normalize()}this.lines.push(...L),this.words.push(...M),this.chars.push(...g)}),c&&this[c]&&this.masks.push(...this[c].map(E=>{let b=E.cloneNode();return E.replaceWith(b),b.appendChild(E),E.className&&(b.className=E.className.trim().split(" ").map(g=>g+"-mask").join(" ")),b.style.overflow="clip",b}))),this.isSplit=!0,ua&&u&&o&&ua.addEventListener("loadingdone",this._split),(x=a&&a(this))&&x.totalTime&&(this._data.anim=S?x.totalTime(S):x),u&&o&&this.elements.forEach((E,b)=>{m[b].width=E.offsetWidth,w&&w.observe(E)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),ua==null||ua.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(Nh),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new fm(e,t)}static register(e){ca=ca||e||window.gsap,ca&&(Za=ca.utils.toArray,ic=ca.core.context||ic),!au&&window.innerWidth>0&&(ua=document.fonts,au=!0)}};um.version="3.15.0";let Bl=um;var Oh="1.3.27";function hm(r,e,t){return Math.max(r,Math.min(e,t))}function qg(r,e,t){return(1-t)*r+t*e}function $g(r,e,t,n){return qg(r,e,1-Math.exp(-t*n))}function Kg(r,e){return(r%e+e)%e}var Zg=class{constructor(){Fe(this,"isRunning",!1);Fe(this,"value",0);Fe(this,"from",0);Fe(this,"to",0);Fe(this,"currentTime",0);Fe(this,"lerp");Fe(this,"duration");Fe(this,"easing");Fe(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=hm(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=$g(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function Jg(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var Qg=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){Fe(this,"width",0);Fe(this,"height",0);Fe(this,"scrollHeight",0);Fe(this,"scrollWidth",0);Fe(this,"debouncedResize");Fe(this,"wrapperResizeObserver");Fe(this,"contentResizeObserver");Fe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Fe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Fe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=Jg(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},dm=class{constructor(){Fe(this,"events",{})}emit(r,...e){var n;const t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const jg=100/6,fr={passive:!1};function Bh(r,e){return r===1?jg:r===2?e:1}var e0=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Fe(this,"touchStart",{x:0,y:0});Fe(this,"lastDelta",{x:0,y:0});Fe(this,"window",{width:0,height:0});Fe(this,"emitter",new dm);Fe(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Fe(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Fe(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Fe(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=Bh(n,this.window.width),s=Bh(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});Fe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,fr),this.element.addEventListener("touchstart",this.onTouchStart,fr),this.element.addEventListener("touchmove",this.onTouchMove,fr),this.element.addEventListener("touchend",this.onTouchEnd,fr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,fr),this.element.removeEventListener("touchstart",this.onTouchStart,fr),this.element.removeEventListener("touchmove",this.onTouchMove,fr),this.element.removeEventListener("touchend",this.onTouchEnd,fr)}};const zh=r=>Math.min(1,1.001-2**(-10*r));var t0=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:h=1,wheelMultiplier:_=1,autoResize:v=!0,prevent:p,virtualScroll:m,overscroll:S=!0,autoRaf:w=!1,anchors:x=!1,autoToggle:E=!1,allowNestedScroll:b=!1,__experimental__naiveDimensions:g=!1,naiveDimensions:M=g,stopInertiaOnNavigate:L=!1,respectReducedMotion:R=!0}={}){Fe(this,"_isScrolling",!1);Fe(this,"_isStopped",!1);Fe(this,"_isLocked",!1);Fe(this,"_preventNextNativeScrollEvent",!1);Fe(this,"_resetVelocityTimeout",null);Fe(this,"_rafId",null);Fe(this,"_isDraggingSelection",!1);Fe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Fe(this,"isTouching");Fe(this,"isIos");Fe(this,"time",0);Fe(this,"userData",{});Fe(this,"lastVelocity",0);Fe(this,"velocity",0);Fe(this,"direction",0);Fe(this,"options");Fe(this,"targetScroll");Fe(this,"animatedScroll");Fe(this,"animate",new Zg);Fe(this,"emitter",new dm);Fe(this,"dimensions");Fe(this,"virtualScroll");Fe(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Fe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Fe(this,"onTransitionEnd",r=>{var e;(e=r.propertyName)!=null&&e.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Fe(this,"onClick",r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});Fe(this,"onPointerDown",r=>{r.button===1&&this.reset()});Fe(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(_=>{var v,p,m,S,w;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((v=_.hasAttribute)==null?void 0:v.call(_,"data-lenis-prevent"))||u==="vertical"&&((p=_.hasAttribute)==null?void 0:p.call(_,"data-lenis-prevent-vertical"))||u==="horizontal"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-horizontal"))||i&&((S=_.hasAttribute)==null?void 0:S.call(_,"data-lenis-prevent-touch"))||s&&((w=_.hasAttribute)==null?void 0:w.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const f=i&&this.options.syncTouch,h=i&&n.type==="touchend";h&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...f?{lerp:h?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Fe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Fe(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Oh,window.lenis||(window.lenis={}),window.lenis.version=Oh,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=zh:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:d,touchMultiplier:h,wheelMultiplier:_,autoResize:v,prevent:p,virtualScroll:m,overscroll:S,autoRaf:w,anchors:x,autoToggle:E,allowNestedScroll:b,naiveDimensions:M,stopInertiaOnNavigate:L,respectReducedMotion:R},this.dimensions=new Qg(r,e,{autoResize:v}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new e0(t,{touchMultiplier:h,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],a=40,o=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=a,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=a;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:a=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?t=!0:(s=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=r,h=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let _=null;if(typeof f=="string"?(_=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),_||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof Element&&(_=f),_){if(this.options.wrapper!==window){const x=this.rootElement.getBoundingClientRect();h-=this.isHorizontal?x.left:x.top}const v=_.getBoundingClientRect(),p=getComputedStyle(_),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),S=getComputedStyle(this.rootElement),w=this.isHorizontal?Number.parseFloat(S.scrollPaddingLeft):Number.parseFloat(S.scrollPaddingTop);f=(this.isHorizontal?v.left:v.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(w)?0:w)}}if(typeof f=="number"){if(f+=h,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const _=f-this.animatedScroll;_>this.limit/2?f-=this.limit:_<-this.limit/2&&(f+=this.limit)}}else f=hm(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof a=="number"&&typeof o!="function"?o=zh:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,f,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,v)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),i&&(this.targetScroll=_),v||this.emit(),v&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,a,o,l,c,u,d,f,h,_;if(n-(i.time??0)>2e3){i.time=Date.now();const b=window.getComputedStyle(r);if(i.computedStyle=b,s=["auto","overlay","scroll"].includes(b.overflowX),a=["auto","overlay","scroll"].includes(b.overflowY),c=["auto"].includes(b.overscrollBehaviorX),u=["auto"].includes(b.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=a,!(s||a))return!1;d=r.scrollWidth,f=r.scrollHeight,h=r.clientWidth,_=r.clientHeight,o=d>h,l=f>_,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=f,i.clientWidth=h,i.clientHeight=_,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else o=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,a=i.hasOverflowY,d=i.scrollWidth,f=i.scrollHeight,h=i.clientWidth,_=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const v=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let p,m,S,w,x,E;if(v==="horizontal")p=Math.round(r.scrollLeft),m=d-h,S=e,w=s,x=o,E=c;else if(v==="vertical")p=Math.round(r.scrollTop),m=f-_,S=t,w=a,x=l,E=u;else return!1;return!E&&(p>=m||p<=0)?!0:(S>0?p<m:p>0)&&w&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Kg(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Af="187",n0=0,kh=1,i0=2,il=1,r0=2,ba=3,os=0,Hn=1,Di=2,Vs=0,za=1,Gh=2,Hh=3,Vh=4,s0=5,Ds=100,a0=101,o0=102,l0=103,c0=104,u0=200,f0=201,h0=202,d0=203,pm=204,mm=205,p0=206,m0=207,_0=208,g0=209,v0=210,x0=211,S0=212,M0=213,y0=214,cu=0,uu=1,fu=2,Ja=3,hu=4,du=5,pu=6,mu=7,_m=0,E0=1,T0=2,ir=0,gm=1,vm=2,xm=3,Sm=4,Mm=5,ym=6,Em=7,Tm=300,js=301,Qa=302,rc=303,sc=304,_u=1e3,tr=1001,gu=1002,hn=1003,b0=1004,Eo=1005,On=1006,ac=1007,br=1008,di=1009,bm=1010,wm=1011,ja=1012,Rf=1013,ki=1014,Ui=1015,Gi=1016,Cf=1017,Pf=1018,ea=1020,Am=35902,Rm=35899,Cm=1021,Pm=1022,Fi=1023,Nr=1026,wr=1027,Lm=1028,Lf=1029,ls=1030,Df=1031,If=1033,rl=33776,sl=33777,al=33778,ol=33779,vu=35840,xu=35841,Su=35842,Mu=35843,yu=36196,Eu=37492,Tu=37496,bu=37488,wu=37489,yl=37490,Au=37491,Ru=37808,Cu=37809,Pu=37810,Lu=37811,Du=37812,Iu=37813,Nu=37814,Uu=37815,Fu=37816,Ou=37817,Bu=37818,zu=37819,ku=37820,Gu=37821,Hu=36492,Vu=36494,Wu=36495,Xu=36283,Yu=36284,El=36285,qu=36286,w0=3200,Wh=0,A0=1,vr="",ui="srgb",Tl="srgb-linear",bl="linear",xt="srgb",oc=7680,R0=519,C0=512,P0=513,L0=514,Dm=515,D0=516,I0=517,Im=518,Nm=519,N0=35044,Xh="300 es",Ti=2e3,wl=2001;function U0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Al(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function F0(){const r=Al("canvas");return r.style.display="block",r}const Yh={};function qh(...r){const e="THREE."+r.shift();console.log(e,...r)}function Um(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ze(...r){r=Um(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function dt(...r){r=Um(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ll(...r){const e=r.join(" ");e in Yh||(Yh[e]=!0,ze(...r))}function O0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const B0={[cu]:cu,[fu]:pu,[hu]:hu,[Ja]:du,[uu]:uu,[pu]:fu,[mu]:mu,[du]:Ja};class fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lc=Math.PI/180,$u=180/Math.PI;function to(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function rt(r,e,t){return Math.max(e,Math.min(t,r))}function z0(r,e){return(r%e+e)%e}function cc(r,e,t){return(1-t)*r+t*e}function k0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Nf(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function G0(r,e){if(e.constructor===Float32Array)return r;const t=Nf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/t,-1)}function H0(r,e){if(e.constructor===Float32Array)return r;const t=Nf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*t)}const Vf=class Vf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vf.prototype.isVector2=!0;let tt=Vf;class ia{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],f=s[a+0],h=s[a+1],_=s[a+2],v=s[a+3];if(d!==v||l!==f||c!==h||u!==_){let p=l*f+c*h+u*_+d*v;p<0&&(f=-f,h=-h,_=-_,v=-v,p=-p);let m=1-o;if(p<.9995){const S=Math.acos(p),w=Math.sin(S);m=Math.sin(m*S)/w,o=Math.sin(o*S)/w,l=l*m+f*o,c=c*m+h*o,u=u*m+_*o,d=d*m+v*o}else{l=l*m+f*o,c=c*m+h*o,u=u*m+_*o,d=d*m+v*o;const S=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=S,c*=S,u*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],f=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*h-c*f,e[t+1]=l*_+u*f+c*d-o*h,e[t+2]=c*_+u*h+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),f=l(n/2),h=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Wf=class Wf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($h.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($h.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uc.copy(this).projectOnVector(e),this.sub(uc)}reflect(e){return this.sub(uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wf.prototype.isVector3=!0;let K=Wf;const uc=new K,$h=new ia,Xf=class Xf{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],_=n[8],v=i[0],p=i[3],m=i[6],S=i[1],w=i[4],x=i[7],E=i[2],b=i[5],g=i[8];return s[0]=a*v+o*S+l*E,s[3]=a*p+o*w+l*b,s[6]=a*m+o*x+l*g,s[1]=c*v+u*S+d*E,s[4]=c*p+u*w+d*b,s[7]=c*m+u*x+d*g,s[2]=f*v+h*S+_*E,s[5]=f*p+h*w+_*b,s[8]=f*m+h*x+_*g,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,_=t*d+n*f+i*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(i*c-u*n)*v,e[2]=(o*n-i*a)*v,e[3]=f*v,e[4]=(u*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=h*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ll("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fc.makeScale(e,t)),this}rotate(e){return ll("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fc.makeRotation(-e)),this}translate(e,t){return ll("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Xf.prototype.isMatrix3=!0;let He=Xf;const fc=new He,Kh=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function V0(){const r={enabled:!0,workingColorSpace:Tl,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xt&&(i.r=rr(i.r),i.g=rr(i.g),i.b=rr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(i.r=Ws(i.r),i.g=Ws(i.g),i.b=Ws(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vr?bl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Tl]:{primaries:e,whitePoint:n,transfer:bl,toXYZ:Kh,fromXYZ:Zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Kh,fromXYZ:Zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),r}const it=V0();function rr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vs;class W0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=Al("canvas")),vs.width=e.width,vs.height=e.height;const i=vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Al("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=rr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rr(t[n]/255)*255):t[n]=rr(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let X0=0;class Uf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=to(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(hc(i[a].image)):s.push(hc(i[a]))}else s=hc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function hc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?W0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let Y0=0;const dc=new K;class Nn extends fs{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,n=tr,i=tr,s=On,a=br,o=Fi,l=di,c=Nn.DEFAULT_ANISOTROPY,u=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=to(),this.name="",this.source=new Uf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(dc).x}get height(){return this.source.getSize(dc).y}get depth(){return this.source.getSize(dc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _u:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case gu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _u:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case gu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Tm;Nn.DEFAULT_ANISOTROPY=1;const Yf=class Yf{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,x=(h+1)/2,E=(m+1)/2,b=(u+f)/4,g=(d+v)/4,M=(_+p)/4;return w>x&&w>E?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=b/n,s=g/n):x>E?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=b/i,s=M/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=g/s,i=M/s),this.set(n,i,s,t),this}let S=Math.sqrt((p-_)*(p-_)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(d-v)/S,this.z=(f-u)/S,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yf.prototype.isVector4=!0;let Bt=Yf;class q0 extends fs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];const i=n.count;for(let s=0;s<i;s++)this.textures[s]=new Nn({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Uf(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends q0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fm extends Nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $0 extends Nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Il=class Il{constructor(e,t,n,i,s,a,o,l,c,u,d,f,h,_,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,f,h,_,v,p)}set(e,t,n,i,s,a,o,l,c,u,d,f,h,_,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=_,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Il().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,_=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+_*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,_=c*u,v=c*d;t[0]=f+v*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=h*o-_,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,_=c*u,v=c*d;t[0]=f-v*o,t[4]=-a*d,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,_=o*u,v=o*d;t[0]=l*u,t[4]=_*c-h,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=v-f*d,t[8]=_*d+h,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+_,t[10]=f-v*d}else if(e.order==="XZY"){const f=a*l,h=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+v,t[5]=a*u,t[9]=h*d-_,t[2]=_*d-h,t[6]=o*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(K0,e,Z0)}lookAt(e,t,n){const i=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),hr.crossVectors(n,$n),hr.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),hr.crossVectors(n,$n)),hr.normalize(),To.crossVectors($n,hr),i[0]=hr.x,i[4]=To.x,i[8]=$n.x,i[1]=hr.y,i[5]=To.y,i[9]=$n.y,i[2]=hr.z,i[6]=To.z,i[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],_=n[2],v=n[6],p=n[10],m=n[14],S=n[3],w=n[7],x=n[11],E=n[15],b=i[0],g=i[4],M=i[8],L=i[12],R=i[1],N=i[5],I=i[9],k=i[13],D=i[2],z=i[6],Y=i[10],P=i[14],G=i[3],O=i[7],A=i[11],H=i[15];return s[0]=a*b+o*R+l*D+c*G,s[4]=a*g+o*N+l*z+c*O,s[8]=a*M+o*I+l*Y+c*A,s[12]=a*L+o*k+l*P+c*H,s[1]=u*b+d*R+f*D+h*G,s[5]=u*g+d*N+f*z+h*O,s[9]=u*M+d*I+f*Y+h*A,s[13]=u*L+d*k+f*P+h*H,s[2]=_*b+v*R+p*D+m*G,s[6]=_*g+v*N+p*z+m*O,s[10]=_*M+v*I+p*Y+m*A,s[14]=_*L+v*k+p*P+m*H,s[3]=S*b+w*R+x*D+E*G,s[7]=S*g+w*N+x*z+E*O,s[11]=S*M+w*I+x*Y+E*A,s[15]=S*L+w*k+x*P+E*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],_=e[3],v=e[7],p=e[11],m=e[15],S=l*h-c*f,w=o*h-c*d,x=o*f-l*d,E=a*h-c*u,b=a*f-l*u,g=a*d-o*u;return t*(v*S-p*w+m*x)-n*(_*S-p*E+m*b)+i*(_*w-v*E+m*g)-s*(_*x-v*b+p*g)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],_=e[12],v=e[13],p=e[14],m=e[15],S=t*o-n*a,w=t*l-i*a,x=t*c-s*a,E=n*l-i*o,b=n*c-s*o,g=i*c-s*l,M=u*v-d*_,L=u*p-f*_,R=u*m-h*_,N=d*p-f*v,I=d*m-h*v,k=f*m-h*p,D=S*k-w*I+x*N+E*R-b*L+g*M;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/D;return e[0]=(o*k-l*I+c*N)*z,e[1]=(i*I-n*k-s*N)*z,e[2]=(v*g-p*b+m*E)*z,e[3]=(f*b-d*g-h*E)*z,e[4]=(l*R-a*k-c*L)*z,e[5]=(t*k-i*R+s*L)*z,e[6]=(p*x-_*g-m*w)*z,e[7]=(u*g-f*x+h*w)*z,e[8]=(a*I-o*R+c*M)*z,e[9]=(n*R-t*I-s*M)*z,e[10]=(_*b-v*x+m*S)*z,e[11]=(d*x-u*b-h*S)*z,e[12]=(o*L-a*N-l*M)*z,e[13]=(t*N-n*L+i*M)*z,e[14]=(v*w-_*E-p*S)*z,e[15]=(u*E-d*w+f*S)*z,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,_=s*d,v=a*u,p=a*d,m=o*d,S=l*c,w=l*u,x=l*d,E=n.x,b=n.y,g=n.z;return i[0]=(1-(v+m))*E,i[1]=(h+x)*E,i[2]=(_-w)*E,i[3]=0,i[4]=(h-x)*b,i[5]=(1-(f+m))*b,i[6]=(p+S)*b,i[7]=0,i[8]=(_+w)*g,i[9]=(p-S)*g,i[10]=(1-(f+v))*g,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=xs.set(i[0],i[1],i[2]).length();const o=xs.set(i[4],i[5],i[6]).length(),l=xs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),vi.copy(this);const c=1/a,u=1/o,d=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=d,vi.elements[9]*=d,vi.elements[10]*=d,t.setFromRotationMatrix(vi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Ti,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let _,v;if(l)_=s/(a-s),v=a*s/(a-s);else if(o===Ti)_=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===wl)_=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ti,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),f=-(t+e)/(t-e),h=-(n+i)/(n-i);let _,v;if(l)_=1/(a-s),v=a/(a-s);else if(o===Ti)_=-2/(a-s),v=-(a+s)/(a-s);else if(o===wl)_=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Il.prototype.isMatrix4=!0;let Pt=Il;const xs=new K,vi=new Pt,K0=new K(0,0,0),Z0=new K(1,1,1),hr=new K,To=new K,$n=new K,Jh=new Pt,Qh=new ia;class cs{constructor(e=0,t=0,n=0,i=cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cs.DEFAULT_ORDER="XYZ";class Ff{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let J0=0;const jh=new K,Ss=new ia,Vi=new Pt,bo=new K,fa=new K,Q0=new K,j0=new ia,ed=new K(1,0,0),td=new K(0,1,0),nd=new K(0,0,1),id={type:"added"},ev={type:"removed"},Ms={type:"childadded",child:null},pc={type:"childremoved",child:null};class Vn extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new K,t=new cs,n=new ia,i=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pt},normalMatrix:{value:new He}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ff,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(ed,e)}rotateY(e){return this.rotateOnAxis(td,e)}rotateZ(e){return this.rotateOnAxis(nd,e)}translateOnAxis(e,t){return jh.copy(e).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ed,e)}translateY(e){return this.translateOnAxis(td,e)}translateZ(e){return this.translateOnAxis(nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bo.copy(e):bo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(fa,bo,this.up):Vi.lookAt(bo,fa,this.up),this.quaternion.setFromRotationMatrix(Vi),i&&(Vi.extractRotation(i.matrixWorld),Ss.setFromRotationMatrix(Vi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(id),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ev),pc.child=e,this.dispatchEvent(pc),pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(id),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,Q0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,j0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Vn.DEFAULT_UP=new K(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zr extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tv={type:"move"};class mc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},wo={h:0,s:0,l:0};function _c(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ct{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=z0(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=_c(a,s,e+1/3),this.g=_c(a,s,e),this.b=_c(a,s,e-1/3)}return it.colorSpaceToWorking(this,i),this}setStyle(e,t=ui){function n(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const n=Om[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return it.workingToColorSpace(Sn.copy(this),e),Math.round(rt(Sn.r*255,0,255))*65536+Math.round(rt(Sn.g*255,0,255))*256+Math.round(rt(Sn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Sn.copy(this),t);const n=Sn.r,i=Sn.g,s=Sn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ui){it.workingToColorSpace(Sn.copy(this),e);const t=Sn.r,n=Sn.g,i=Sn.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(wo);const n=cc(dr.h,wo.h,t),i=cc(dr.s,wo.s,t),s=cc(dr.l,wo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new ct;ct.NAMES=Om;class nv extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cs,this.environmentIntensity=1,this.environmentRotation=new cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const xi=new K,Wi=new K,gc=new K,Xi=new K,ys=new K,Es=new K,rd=new K,vc=new K,xc=new K,Sc=new K,Mc=new Bt,yc=new Bt,Ec=new Bt;class Ei{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xi.subVectors(e,t),i.cross(xi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xi.subVectors(i,t),Wi.subVectors(n,t),gc.subVectors(e,t);const a=xi.dot(xi),o=xi.dot(Wi),l=xi.dot(gc),c=Wi.dot(Wi),u=Wi.dot(gc),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-h-_,_,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xi.x),l.addScaledVector(a,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Mc.setScalar(0),yc.setScalar(0),Ec.setScalar(0),Mc.fromBufferAttribute(e,t),yc.fromBufferAttribute(e,n),Ec.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Mc,s.x),a.addScaledVector(yc,s.y),a.addScaledVector(Ec,s.z),a}static isFrontFacing(e,t,n,i){return xi.subVectors(n,t),Wi.subVectors(e,t),xi.cross(Wi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),xi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Ei.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ys.subVectors(i,n),Es.subVectors(s,n),vc.subVectors(e,n);const l=ys.dot(vc),c=Es.dot(vc);if(l<=0&&c<=0)return t.copy(n);xc.subVectors(e,i);const u=ys.dot(xc),d=Es.dot(xc);if(u>=0&&d<=u)return t.copy(i);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(ys,a);Sc.subVectors(e,s);const h=ys.dot(Sc),_=Es.dot(Sc);if(_>=0&&h<=_)return t.copy(s);const v=h*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Es,o);const p=u*_-h*d;if(p<=0&&d-u>=0&&h-_>=0)return rd.subVectors(s,i),o=(d-u)/(d-u+(h-_)),t.copy(i).addScaledVector(rd,o);const m=1/(p+v+f);return a=v*m,o=f*m,t.copy(n).addScaledVector(ys,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class no{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Si):Si.fromBufferAttribute(s,a),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ao.copy(n.boundingBox)),Ao.applyMatrix4(e.matrixWorld),this.union(Ao)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),Ro.subVectors(this.max,ha),Ts.subVectors(e.a,ha),bs.subVectors(e.b,ha),ws.subVectors(e.c,ha),pr.subVectors(bs,Ts),mr.subVectors(ws,bs),Gr.subVectors(Ts,ws);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Gr.z,Gr.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Gr.z,0,-Gr.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Gr.y,Gr.x,0];return!Tc(t,Ts,bs,ws,Ro)||(t=[1,0,0,0,1,0,0,0,1],!Tc(t,Ts,bs,ws,Ro))?!1:(Co.crossVectors(pr,mr),t=[Co.x,Co.y,Co.z],Tc(t,Ts,bs,ws,Ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new K,new K,new K,new K,new K,new K,new K,new K],Si=new K,Ao=new no,Ts=new K,bs=new K,ws=new K,pr=new K,mr=new K,Gr=new K,ha=new K,Ro=new K,Co=new K,Hr=new K;function Tc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Hr.fromArray(r,s);const o=i.x*Math.abs(Hr.x)+i.y*Math.abs(Hr.y)+i.z*Math.abs(Hr.z),l=e.dot(Hr),c=t.dot(Hr),u=n.dot(Hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qt=new K,Po=new tt;let iv=0;class sr extends fs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=N0,this.updateRanges=[],this.gpuType=Ui,this.version=0,this._normalizationScale=e!==void 0?Nf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Po.fromBufferAttribute(this,t),Po.applyMatrix3(e),this.setXY(t,Po.x,Po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):G0(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):H0(e,this.array)}}class Bm extends sr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zm extends sr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mn extends sr{constructor(e,t,n){super(new Float32Array(e),t,n)}}const rv=new no,da=new K,bc=new K;class zl{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const t=da.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(da,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(bc)),this.expandByPoint(da.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sv=0;const li=new Pt,wc=new Vn,As=new K,Kn=new no,pa=new no,an=new K;class Wn extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U0(e)?zm:Bm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return wc.lookAt(e),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];pa.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Kn.min,pa.min),Kn.expandByPoint(an),an.addVectors(Kn.max,pa.max),Kn.expandByPoint(an)):(Kn.expandByPoint(pa.min),Kn.expandByPoint(pa.max))}Kn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)an.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(an));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)an.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(e,c),an.add(As)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new sr(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)o[L]=new K,l[L]=new K;const u=new K,d=new K,f=new K,h=new tt,_=new tt,v=new tt,p=new K,m=new K;function S(L,R,N){c[L]=c[R]=c[N]=1,u.fromBufferAttribute(n,L),d.fromBufferAttribute(n,R),f.fromBufferAttribute(n,N),h.fromBufferAttribute(s,L),_.fromBufferAttribute(s,R),v.fromBufferAttribute(s,N),d.sub(u),f.sub(u),_.sub(h),v.sub(h);const I=1/(_.x*v.y-v.x*_.y);isFinite(I)&&(p.copy(d).multiplyScalar(v.y).addScaledVector(f,-_.y).multiplyScalar(I),m.copy(f).multiplyScalar(_.x).addScaledVector(d,-v.x).multiplyScalar(I),o[L].add(p),o[R].add(p),o[N].add(p),l[L].add(m),l[R].add(m),l[N].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,R=w.length;L<R;++L){const N=w[L],I=N.start,k=N.count;for(let D=I,z=I+k;D<z;D+=3)S(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new K,E=new K,b=new K,g=new K;function M(L){b.fromBufferAttribute(i,L),g.copy(b);const R=o[L];x.copy(R),x.sub(b.multiplyScalar(b.dot(R))).normalize(),E.crossVectors(g,R);const I=E.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,I)}for(let L=0,R=n.count;L<R;++L)c[L]&&M(L);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new sr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const i=new K,s=new K,a=new K,o=new K,l=new K,c=new K,u=new K,d=new K;if(e)for(let f=0,h=e.count;f<h;f+=3){const _=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*u;for(let m=0;m<u;m++)f[_++]=c[h++]}return new sr(f,u,d)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ac=new K,av=new K,ov=new He;class Ji{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ac.subVectors(n,t).cross(av.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Ac),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ov.getNormalMatrix(e),i=this.coplanarPoint(Ac).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let lv=0;class io extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=to(),this.name="",this.type="Material",this.blending=za,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pm,this.blendDst=mm,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oc,this.stencilZFail=oc,this.stencilZPass=oc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ji().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new tt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qi=new K,Rc=new K,Lo=new K,Do=new K;class Of{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Rc.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),Do.copy(this.origin).sub(Rc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Lo),o=Do.dot(this.direction),l=-Do.dot(Lo),c=Do.lengthSq(),u=Math.abs(1-a*a);let d,f,h,_;if(u>0)if(d=a*l-o,f=a*o-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const v=1/u;d*=v,f*=v,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Rc).addScaledVector(Lo,f),h}intersectSphere(e,t){if(e.radius<0)return null;qi.subVectors(e.center,this.origin);const n=qi.dot(this.direction),i=qi.dot(qi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,f=e.y-a.y,h=e.z-a.z,_=t.x-a.x,v=t.y-a.y,p=t.z-a.z,m=n.x-a.x,S=n.y-a.y,w=n.z-a.z,x=Math.abs(l),E=Math.abs(c),b=Math.abs(u);let g,M,L,R,N,I,k,D,z,Y,P,G;if(x>=E&&x>=b?(L=l,I=d,z=_,G=m,l>=0?(g=c,M=u,R=f,N=h,k=v,D=p,Y=S,P=w):(g=u,M=c,R=h,N=f,k=p,D=v,Y=w,P=S)):E>=b?(L=c,I=f,z=v,G=S,c>=0?(g=u,M=l,R=h,N=d,k=p,D=_,Y=w,P=m):(g=l,M=u,R=d,N=h,k=_,D=p,Y=m,P=w)):(L=u,I=h,z=p,G=w,u>=0?(g=l,M=c,R=d,N=f,k=_,D=v,Y=m,P=S):(g=c,M=l,R=f,N=d,k=v,D=_,Y=S,P=m)),L===0)return null;const O=g/L,A=M/L,H=1/L,J=R-O*I,ce=N-A*I,V=k-O*z,ae=D-A*z,ve=Y-O*G,Ee=P-A*G,he=ve*ae-Ee*V,Ce=J*Ee-ce*ve,ut=V*ce-ae*J;if(i){if(he<0||Ce<0||ut<0)return null}else if((he<0||Ce<0||ut<0)&&(he>0||Ce>0||ut>0))return null;const Ae=he+Ce+ut;if(Ae===0)return null;const ke=H*(he*I+Ce*z+ut*G);return(Ae>0?ke<0:ke>0)?null:this.at(ke/Ae,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ku extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cs,this.combine=_m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sd=new Pt,Vr=new Of,Io=new zl,ad=new K,No=new K,Uo=new K,Fo=new K,Cc=new K,Oo=new K,od=new K,Bo=new K;class lr extends Vn{constructor(e=new Wn,t=new Ku){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Oo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Cc.fromBufferAttribute(d,e),a?Oo.addScaledVector(Cc,u):Oo.addScaledVector(Cc.sub(t),u))}t.add(Oo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(s),Vr.copy(e.ray).recast(e.near),!(Io.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Io,ad)===null||Vr.origin.distanceToSquared(ad)>(e.far-e.near)**2))&&(sd.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(sd),!(n.boundingBox!==null&&Vr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const p=f[_],m=a[p.materialIndex],S=Math.max(p.start,h.start),w=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let x=S,E=w;x<E;x+=3){const b=o.getX(x),g=o.getX(x+1),M=o.getX(x+2);i=zo(this,m,e,n,c,u,d,b,g,M),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let p=_,m=v;p<m;p+=3){const S=o.getX(p),w=o.getX(p+1),x=o.getX(p+2);i=zo(this,a,e,n,c,u,d,S,w,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const p=f[_],m=a[p.materialIndex],S=Math.max(p.start,h.start),w=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let x=S,E=w;x<E;x+=3){const b=x,g=x+1,M=x+2;i=zo(this,m,e,n,c,u,d,b,g,M),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let p=_,m=v;p<m;p+=3){const S=p,w=p+1,x=p+2;i=zo(this,a,e,n,c,u,d,S,w,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function cv(r,e,t,n,i,s,a,o){let l;if(e.side===Hn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===os,o),l===null)return null;Bo.copy(o),Bo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Bo);return c<t.near||c>t.far?null:{distance:c,point:Bo.clone(),object:r}}function zo(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,No),r.getVertexPosition(l,Uo),r.getVertexPosition(c,Fo);const u=cv(r,e,t,n,No,Uo,Fo,od);if(u){const d=new K;Ei.getBarycoord(od,No,Uo,Fo,d),i&&(u.uv=Ei.getInterpolatedAttribute(i,o,l,c,d,new tt)),s&&(u.uv1=Ei.getInterpolatedAttribute(s,o,l,c,d,new tt)),a&&(u.normal=Ei.getInterpolatedAttribute(a,o,l,c,d,new K),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new K,materialIndex:0};Ei.getNormal(No,Uo,Fo,f.normal),u.face=f,u.barycoord=d}return u}class uv extends Nn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=hn,u=hn,d,f){super(null,a,o,l,c,u,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wr=new zl,fv=new tt(.5,.5),ko=new K;class Rl{constructor(e=new Ji,t=new Ji,n=new Ji,i=new Ji,s=new Ji,a=new Ji){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],_=s[8],v=s[9],p=s[10],m=s[11],S=s[12],w=s[13],x=s[14],E=s[15];if(i[0].setComponents(c-a,h-u,m-_,E-S).normalize(),i[1].setComponents(c+a,h+u,m+_,E+S).normalize(),i[2].setComponents(c+o,h+d,m+v,E+w).normalize(),i[3].setComponents(c-o,h-d,m-v,E-w).normalize(),n)i[4].setComponents(l,f,p,x).normalize(),i[5].setComponents(c-l,h-f,m-p,E-x).normalize();else if(i[4].setComponents(c-l,h-f,m-p,E-x).normalize(),t===Ti)i[5].setComponents(c+l,h+f,m+p,E+x).normalize();else if(t===wl)i[5].setComponents(l,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);const t=fv.distanceTo(e.center);return Wr.radius=.7071067811865476+t,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ko.x=i.normal.x>0?e.max.x:e.min.x,ko.y=i.normal.y>0?e.max.y:e.min.y,ko.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ld=new Pt;class Bf{constructor(){this.coordinateSystem=Ti,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){const s=t[i];ld.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[i]===void 0&&(n[i]=new Rl),n[i].setFromProjectionMatrix(ld,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Rl),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new Bf().copy(this)}}class Cl extends io{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pl=new K,Ll=new K,cd=new Pt,ma=new Of,Go=new zl,Pc=new K,ud=new K;class Zu extends Vn{constructor(e=new Wn,t=new Cl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Pl.fromBufferAttribute(t,i-1),Ll.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Pl.distanceTo(Ll);e.setAttribute("lineDistance",new mn(n,1))}else ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(i),Go.radius+=s,e.ray.intersectsSphere(Go)===!1)return;cd.copy(i).invert(),ma.copy(e.ray).applyMatrix4(cd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let v=h,p=_-1;v<p;v+=c){const m=u.getX(v),S=u.getX(v+1),w=Ho(this,e,ma,l,m,S,v);w&&t.push(w)}if(this.isLineLoop){const v=u.getX(_-1),p=u.getX(h),m=Ho(this,e,ma,l,v,p,_-1);m&&t.push(m)}}else{const h=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let v=h,p=_-1;v<p;v+=c){const m=Ho(this,e,ma,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=Ho(this,e,ma,l,_-1,h,_-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ho(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Pl.fromBufferAttribute(o,i),Ll.fromBufferAttribute(o,s),t.distanceSqToSegment(Pl,Ll,Pc,ud)>n)return;Pc.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Pc);if(!(c<e.near||c>e.far))return{distance:c,point:ud.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const fd=new K,hd=new K;class dd extends Zu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)fd.fromBufferAttribute(t,i),hd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fd.distanceTo(hd);e.setAttribute("lineDistance",new mn(n,1))}else ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class km extends Nn{constructor(e=[],t=js,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ta extends Nn{constructor(e,t,n=ki,i,s,a,o=hn,l=hn,c,u=Nr,d=1){if(u!==Nr&&u!==wr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Uf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Gm extends ta{constructor(e,t=ki,n=js,i,s,a=hn,o=hn,l,c=Nr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hm extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ro extends Wn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new mn(c,3)),this.setAttribute("normal",new mn(u,3)),this.setAttribute("uv",new mn(d,2));function _(v,p,m,S,w,x,E,b,g,M,L){const R=x/g,N=E/M,I=x/2,k=E/2,D=b/2,z=g+1,Y=M+1;let P=0,G=0;const O=new K;for(let A=0;A<Y;A++){const H=A*N-k;for(let J=0;J<z;J++){const ce=J*R-I;O[v]=ce*S,O[p]=H*w,O[m]=D,c.push(O.x,O.y,O.z),O[v]=0,O[p]=0,O[m]=b>0?1:-1,u.push(O.x,O.y,O.z),d.push(J/g),d.push(1-A/M),P+=1}}for(let A=0;A<M;A++)for(let H=0;H<g;H++){const J=f+H+z*A,ce=f+H+z*(A+1),V=f+(H+1)+z*(A+1),ae=f+(H+1)+z*A;l.push(J,ce,ae),l.push(ce,V,ae),G+=6}o.addGroup(h,G,L),h+=G,f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class kl extends Wn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,f=t/l,h=[],_=[],v=[],p=[];for(let m=0;m<u;m++){const S=m*f-a;for(let w=0;w<c;w++){const x=w*d-s;_.push(x,-S,0),v.push(0,0,1),p.push(w/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const w=S+c*m,x=S+c*(m+1),E=S+1+c*(m+1),b=S+1+c*m;h.push(w,x,b),h.push(x,E,b)}this.setIndex(h),this.setAttribute("position",new mn(_,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.width,e.height,e.widthSegments,e.heightSegments)}}class zf extends Wn{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],u=[];let d=e;const f=(t-e)/i,h=new K,_=new tt;for(let v=0;v<=i;v++){for(let p=0;p<=n;p++){const m=s+p/n*a;h.x=d*Math.cos(m),h.y=d*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),_.x=(h.x/t+1)/2,_.y=(h.y/t+1)/2,u.push(_.x,_.y)}d+=f}for(let v=0;v<i;v++){const p=v*(n+1);for(let m=0;m<n;m++){const S=m+p,w=S,x=S+n+1,E=S+n+2,b=S+1;o.push(w,x,b),o.push(x,E,b)}}this.setIndex(o),this.setAttribute("position",new mn(l,3)),this.setAttribute("normal",new mn(c,3)),this.setAttribute("uv",new mn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class kf extends Wn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new K,f=new K,h=[],_=[],v=[],p=[];for(let m=0;m<=n;m++){const S=[],w=m/n,x=a+w*o,E=e*Math.cos(x),b=Math.sqrt(e*e-E*E);let g=0;m===0&&a===0?g=.5/t:m===n&&l===Math.PI&&(g=-.5/t);for(let M=0;M<=t;M++){const L=M/t,R=i+L*s;d.x=-b*Math.cos(R),d.y=E,d.z=b*Math.sin(R),_.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(L+g,1-w),S.push(c++)}u.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){const w=u[m][S+1],x=u[m][S],E=u[m+1][S],b=u[m+1][S+1];(m!==0||a>0)&&h.push(w,x,b),(m!==n-1||l<Math.PI)&&h.push(x,E,b)}this.setIndex(h),this.setAttribute("position",new mn(_,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function na(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(pd(i))i.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(pd(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Cn(r){const e={};for(let t=0;t<r.length;t++){const n=na(r[t]);for(const i in n)e[i]=n[i]}return e}function pd(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function hv(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Vm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const dv={clone:na,merge:Cn};var pv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pv,this.fragmentShader=mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=hv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ct().setHex(i.value);break;case"v2":this.uniforms[n].value=new tt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new K().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new He().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Pt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class _v extends Ur{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gv extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vv extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xv extends Cl{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Vo=new K,Wo=new ia,wi=new K;class Wm extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vo,Wo,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Vo,Wo,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Wo,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _r=new K,md=new tt,_d=new tt;class yi extends Wm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$u*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $u*2*Math.atan(Math.tan(lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,t){return this.getViewBounds(e,md,_d),t.subVectors(_d,md)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Sv extends Wm{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Rs=-90,Cs=1;class Ju extends Vn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new yi(Rs,Cs,e,t);i.layers=this.layers,this.add(i);const s=new yi(Rs,Cs,e,t);s.layers=this.layers,this.add(s);const a=new yi(Rs,Cs,e,t);a.layers=this.layers,this.add(a);const o=new yi(Rs,Cs,e,t);o.layers=this.layers,this.add(o);const l=new yi(Rs,Cs,e,t);l.layers=this.layers,this.add(l);const c=new yi(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=v,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Mv extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const gd=new Pt;class yv{constructor(e,t,n=0,i=1/0){this.ray=new Of(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ff,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):dt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gd),this}intersectObject(e,t=!0,n=[]){return Qu(e,this,n,t),n.sort(vd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Qu(e[i],this,n,t);return n.sort(vd),n}}function vd(r,e){return r.distance-e.distance}function Qu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Qu(s[a],e,t,!0)}}function xd(r,e,t,n){const i=Ev(n);switch(t){case Cm:return r*e;case Lm:return r*e/i.components*i.byteLength;case Lf:return r*e/i.components*i.byteLength;case ls:return r*e*2/i.components*i.byteLength;case Df:return r*e*2/i.components*i.byteLength;case Pm:return r*e*3/i.components*i.byteLength;case Fi:return r*e*4/i.components*i.byteLength;case If:return r*e*4/i.components*i.byteLength;case rl:case sl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case al:case ol:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xu:case Mu:return Math.max(r,16)*Math.max(e,8)/4;case vu:case Su:return Math.max(r,8)*Math.max(e,8)/2;case yu:case Eu:case bu:case wu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Tu:case yl:case Au:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Du:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Iu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Fu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ou:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Bu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case zu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ku:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Gu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Hu:case Vu:case Wu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Xu:case Yu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case El:case qu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ev(r){switch(r){case di:case bm:return{byteLength:1,components:1};case ja:case wm:case Gi:return{byteLength:2,components:1};case Cf:case Pf:return{byteLength:2,components:4};case ki:case Rf:case Ui:return{byteLength:4,components:1};case Am:case Rm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Af}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Af);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xm(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Tv(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],v=d[h];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const v=d[h];r.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var bv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Av=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Nv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ov=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$v=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Zv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ax=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ox=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,_x=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ex=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ox=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bx=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,eS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,oS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_S=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ES=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,US=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,YS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,KS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:bv,alphahash_pars_fragment:wv,alphamap_fragment:Av,alphamap_pars_fragment:Rv,alphatest_fragment:Cv,alphatest_pars_fragment:Pv,aomap_fragment:Lv,aomap_pars_fragment:Dv,batching_pars_vertex:Iv,batching_vertex:Nv,begin_vertex:Uv,beginnormal_vertex:Fv,bsdfs:Ov,iridescence_fragment:Bv,bumpmap_pars_fragment:zv,clipping_planes_fragment:kv,clipping_planes_pars_fragment:Gv,clipping_planes_pars_vertex:Hv,clipping_planes_vertex:Vv,color_fragment:Wv,color_pars_fragment:Xv,color_pars_vertex:Yv,color_vertex:qv,common:$v,defaultnormal_vertex:Kv,displacementmap_pars_vertex:Zv,displacementmap_vertex:Jv,emissivemap_fragment:Qv,emissivemap_pars_fragment:jv,colorspace_fragment:ex,colorspace_pars_fragment:tx,envmap_fragment:nx,envmap_common_pars_fragment:ix,envmap_pars_fragment:rx,envmap_pars_vertex:sx,envmap_physical_pars_fragment:_x,envmap_vertex:ax,fog_vertex:ox,fog_pars_vertex:lx,fog_fragment:cx,fog_pars_fragment:ux,gradientmap_pars_fragment:fx,lightmap_pars_fragment:hx,lights_lambert_fragment:dx,lights_lambert_pars_fragment:px,lights_pars_begin:mx,lights_toon_fragment:gx,lights_toon_pars_fragment:vx,lights_phong_fragment:xx,lights_phong_pars_fragment:Sx,lights_physical_fragment:Mx,lights_physical_pars_fragment:yx,lights_fragment_begin:Ex,lights_fragment_maps:Tx,lights_fragment_end:bx,lightprobes_pars_fragment:wx,logdepthbuf_fragment:Ax,logdepthbuf_pars_fragment:Rx,logdepthbuf_pars_vertex:Cx,logdepthbuf_vertex:Px,map_fragment:Lx,map_pars_fragment:Dx,map_particle_fragment:Ix,map_particle_pars_fragment:Nx,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:Fx,morphinstance_vertex:Ox,morphcolor_vertex:Bx,morphnormal_vertex:zx,morphtarget_pars_vertex:kx,morphtarget_vertex:Gx,normal_fragment_begin:Hx,normal_fragment_maps:Vx,normal_pars_fragment:Wx,normal_pars_vertex:Xx,normal_vertex:Yx,normalmap_pars_fragment:qx,clearcoat_normal_fragment_begin:$x,clearcoat_normal_fragment_maps:Kx,clearcoat_pars_fragment:Zx,iridescence_pars_fragment:Jx,opaque_fragment:Qx,packing:jx,premultiplied_alpha_fragment:eS,project_vertex:tS,dithering_fragment:nS,dithering_pars_fragment:iS,roughnessmap_fragment:rS,roughnessmap_pars_fragment:sS,shadowmap_pars_fragment:aS,shadowmap_pars_vertex:oS,shadowmap_vertex:lS,shadowmask_pars_fragment:cS,skinbase_vertex:uS,skinning_pars_vertex:fS,skinning_vertex:hS,skinnormal_vertex:dS,specularmap_fragment:pS,specularmap_pars_fragment:mS,tonemapping_fragment:_S,tonemapping_pars_fragment:gS,transmission_fragment:vS,transmission_pars_fragment:xS,uv_pars_fragment:SS,uv_pars_vertex:MS,uv_vertex:yS,worldpos_vertex:ES,background_vert:TS,background_frag:bS,backgroundCube_vert:wS,backgroundCube_frag:AS,cube_vert:RS,cube_frag:CS,depth_vert:PS,depth_frag:LS,distance_vert:DS,distance_frag:IS,equirect_vert:NS,equirect_frag:US,linedashed_vert:FS,linedashed_frag:OS,meshbasic_vert:BS,meshbasic_frag:zS,meshlambert_vert:kS,meshlambert_frag:GS,meshmatcap_vert:HS,meshmatcap_frag:VS,meshnormal_vert:WS,meshnormal_frag:XS,meshphong_vert:YS,meshphong_frag:qS,meshphysical_vert:$S,meshphysical_frag:KS,meshtoon_vert:ZS,meshtoon_frag:JS,points_vert:QS,points_frag:jS,shadow_vert:eM,shadow_frag:tM,sprite_vert:nM,sprite_frag:iM},Te={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Pi={basic:{uniforms:Cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Cn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Cn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ct(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Cn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Cn([Te.points,Te.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Cn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Cn([Te.common,Te.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Cn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Cn([Te.sprite,Te.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:Cn([Te.common,Te.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:Cn([Te.lights,Te.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Pi.physical={uniforms:Cn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Xo={r:0,b:0,g:0},rM=new Pt,Ym=new He;Ym.set(-1,0,0,0,1,0,0,0,1);function sM(r,e,t,n,i,s){const a=new ct(0);let o=i===!0?0:1,l,c,u=null,d=0,f=null;function h(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const x=S.backgroundBlurriness>0;w=e.get(w,x)}return w}function _(S){let w=!1;const x=h(S);x===null?p(a,o):x&&x.isColor&&(p(x,1),w=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(S,w){const x=h(w);x&&x.isCubeTexture?(c===void 0&&(c=new lr(new ro(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:na(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,b,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rM.makeRotationFromEuler(w.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ym),c.material.toneMapped=it.getTransfer(x.colorSpace)!==xt,(u!==x||d!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new lr(new kl(2,2),new Ur({name:"BackgroundMaterial",uniforms:na(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=it.getTransfer(x.colorSpace)!==xt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,w){S.getRGB(Xo,Vm(r)),t.buffers.color.setClear(Xo.r,Xo.g,Xo.b,w,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:_,addToRenderList:v,dispose:m}}function aM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(N,I,k,D,z){let Y=!1;const P=d(N,D,k,I);s!==P&&(s=P,c(s.object)),Y=h(N,D,k,z),Y&&_(N,D,k,z),z!==null&&e.update(z,r.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(N,I,k,D),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return r.createVertexArray()}function c(N){return r.bindVertexArray(N)}function u(N){return r.deleteVertexArray(N)}function d(N,I,k,D){const z=D.wireframe===!0;let Y=n[I.id];Y===void 0&&(Y={},n[I.id]=Y);const P=N.isInstancedMesh===!0?N.id:0;let G=Y[P];G===void 0&&(G={},Y[P]=G);let O=G[k.id];O===void 0&&(O={},G[k.id]=O);let A=O[z];return A===void 0&&(A=f(l()),O[z]=A),A}function f(N){const I=[],k=[],D=[];for(let z=0;z<t;z++)I[z]=0,k[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:D,object:N,attributes:{},index:null}}function h(N,I,k,D){const z=s.attributes,Y=I.attributes;let P=0;const G=k.getAttributes();for(const O in G)if(G[O].location>=0){const H=z[O];let J=Y[O];if(J===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),H===void 0||H.attribute!==J||J&&H.data!==J.data)return!0;P++}return s.attributesNum!==P||s.index!==D}function _(N,I,k,D){const z={},Y=I.attributes;let P=0;const G=k.getAttributes();for(const O in G)if(G[O].location>=0){let H=Y[O];H===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(H=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(H=N.instanceColor));const J={};J.attribute=H,H&&H.data&&(J.data=H.data),z[O]=J,P++}s.attributes=z,s.attributesNum=P,s.index=D}function v(){const N=s.newAttributes;for(let I=0,k=N.length;I<k;I++)N[I]=0}function p(N){m(N,0)}function m(N,I){const k=s.newAttributes,D=s.enabledAttributes,z=s.attributeDivisors;k[N]=1,D[N]===0&&(r.enableVertexAttribArray(N),D[N]=1),z[N]!==I&&(r.vertexAttribDivisor(N,I),z[N]=I)}function S(){const N=s.newAttributes,I=s.enabledAttributes;for(let k=0,D=I.length;k<D;k++)I[k]!==N[k]&&(r.disableVertexAttribArray(k),I[k]=0)}function w(N,I,k,D,z,Y,P){P===!0?r.vertexAttribIPointer(N,I,k,z,Y):r.vertexAttribPointer(N,I,k,D,z,Y)}function x(N,I,k,D){v();const z=D.attributes,Y=k.getAttributes(),P=I.defaultAttributeValues;for(const G in Y){const O=Y[G];if(O.location>=0){let A=z[G];if(A===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(A=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(A=N.instanceColor)),A!==void 0){const H=A.normalized,J=A.itemSize,ce=e.get(A);if(ce===void 0)continue;const V=ce.buffer,ae=ce.type,ve=ce.bytesPerElement,Ee=ae===r.INT||ae===r.UNSIGNED_INT||A.gpuType===Rf;if(A.isInterleavedBufferAttribute){const he=A.data,Ce=he.isInterleavedBuffer===!0?he.stride:he.itemSize,ut=A.offset;if(he.isInstancedInterleavedBuffer||he.isInstancedBufferAttribute){for(let Ae=0;Ae<O.locationSize;Ae++)m(O.location+Ae,he.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ae=0;Ae<O.locationSize;Ae++)p(O.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,V);for(let Ae=0;Ae<O.locationSize;Ae++)w(O.location+Ae,J/O.locationSize,ae,H,Ce*ve,(ut+J/O.locationSize*Ae)*ve,Ee)}else{if(A.isInstancedBufferAttribute){for(let he=0;he<O.locationSize;he++)m(O.location+he,A.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let he=0;he<O.locationSize;he++)p(O.location+he);r.bindBuffer(r.ARRAY_BUFFER,V);for(let he=0;he<O.locationSize;he++)w(O.location+he,J/O.locationSize,ae,H,J*ve,J/O.locationSize*he*ve,Ee)}}else if(P!==void 0){const H=P[G];if(H!==void 0)switch(H.length){case 2:r.vertexAttrib2fv(O.location,H);break;case 3:r.vertexAttrib3fv(O.location,H);break;case 4:r.vertexAttrib4fv(O.location,H);break;default:r.vertexAttrib1fv(O.location,H)}}}}S()}function E(){L();for(const N in n){const I=n[N];for(const k in I){const D=I[k];for(const z in D){const Y=D[z];for(const P in Y)u(Y[P].object),delete Y[P];delete D[z]}}delete n[N]}}function b(N){if(n[N.id]===void 0)return;const I=n[N.id];for(const k in I){const D=I[k];for(const z in D){const Y=D[z];for(const P in Y)u(Y[P].object),delete Y[P];delete D[z]}}delete n[N.id]}function g(N){for(const I in n){const k=n[I];for(const D in k){const z=k[D];if(z[N.id]===void 0)continue;const Y=z[N.id];for(const P in Y)u(Y[P].object),delete Y[P];delete z[N.id]}}}function M(N){for(const I in n){const k=n[I],D=N.isInstancedMesh===!0?N.id:0,z=k[D];if(z!==void 0){for(const Y in z){const P=z[Y];for(const G in P)u(P[G].object),delete P[G];delete z[Y]}delete k[D],Object.keys(k).length===0&&delete n[I]}}}function L(){R(),a=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfObject:M,releaseStatesOfProgram:g,initAttributes:v,enableAttribute:p,disableUnusedAttributes:S}}function oM(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];t.update(f,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function lM(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(g){return!(g!==Fi&&n.convert(g)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){const M=g===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==di&&g!==Ui&&!M&&n.convert(g)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ze("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:x,maxSamples:E,samples:b}}function cM(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Ji,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||n!==0||i;return i=f,n=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,w=S*4;let x=m.clippingState||null;l.value=x,x=u(_,f,w,h);for(let E=0;E!==w;++E)x[E]=t[E];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,h,_){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const m=h+v*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,x=h;w!==v;++w,x+=4)a.copy(d[w]).applyMatrix4(S,o),a.normal.toArray(p,x),p[x+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}class Gf extends Bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new km(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ro(5,5,5),s=new Ur({name:"CubemapFromEquirect",uniforms:na(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:Vs});s.uniforms.tEquirect.value=t;const a=new lr(i,s),o=t.minFilter;return t.minFilter===br&&(t.minFilter=On),new Ju(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Sd=256,uM=3,fM=20,qm=256,$m=16,hM=3,dM=new K,pM=new ct;class Dl{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ju(1,10,null),this._boxMesh=new lr(new ro(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=dM}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,h=l.autoClearDepth,_=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(pM));const p=new Ju(n,i,u);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=h,l.autoClearStencil=_,e.background=v,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Sd,k0(e))}_fromTexture(e,t){e.mapping===js||e.mapping===Qa?this._setSize(e.image.length===0?Sd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Md(e,!1,!1),n=Math.log2(e)-uM;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Md(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const i=this._boxMesh,s=this._cubeCamera;i.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===js||e.mapping===Qa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ed()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=yd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=mM(),this._integrationMaterial=_M());const t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/$m);for(let a=0;a<=n;a++){const o=Dl.lodToRoughness(a,n);if(a>n-hM)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(t)+.5*Math.log2(6/(qm*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=gM());const n=this._blurMaterial,i=n.uniforms,s=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=s.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(s,0,n)}}function Md(r,e,t){return new Gf(r,{minFilter:br,generateMipmaps:e,type:Gi,colorSpace:Tl,depthBuffer:t})}function so(r,e,t){return new Ur({name:r,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:t,side:Hn,blending:Vs,depthTest:!1,depthWrite:!1})}function mM(){return so("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qm}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function _M(){return so("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$m}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function gM(){return so("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fM}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function yd(){return so("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ed(){return so("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vM(r){let e=new WeakMap,t=new WeakMap,n=null;function i(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===rc||h===sc)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const v=new Gf(_.height);return v.fromEquirectangularTexture(r,f),e.set(f,v),f.addEventListener("dispose",c),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const h=f.mapping,_=h===rc||h===sc,v=h===js||h===Qa;if(_||v){let p=t.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Dl(r)),p=_?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{const S=f.image;return _&&S&&S.height>0||v&&S&&l(S)?(n===null&&(n=new Dl(r)),p=_?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function o(f,h){return h===rc?f.mapping=js:h===sc&&(f.mapping=Qa),f}function l(f){let h=0;const _=6;for(let v=0;v<_;v++)f[v]!==void 0&&h++;return h===_}function c(f){const h=f.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function xM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ll("WebGLRenderer: "+n+" extension not supported."),i}}}function SM(r,e,t,n){const i={},s=new WeakMap,a=new FinalizationRegistry(_=>delete i[_]);function o(_){l(_.target)}function l(_){_.index!==null&&e.remove(_.index);for(const p in _.attributes)e.remove(_.attributes[p]);_.removeEventListener("dispose",o),delete i[_.id],a.unregister(_);const v=s.get(_);v&&(e.remove(v),s.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(_,v){return i[v.id]!==void 0||(v.addEventListener("dispose",o),i[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function u(_){const v=_.attributes;for(const p in v)e.update(v[p],r.ARRAY_BUFFER)}function d(_){const v=_.index,p=_.attributes.position;let m=0;if(p===void 0)return;const S=v!==null?v.array.length:p.array.length/3-1,w=p.count>=65535?zm:Bm,x=new w(Math.ceil(S/3)*6,1),E=x.array;if(v!==null){const g=v.array;m=v.version;for(let M=0,L=0;M<S;M+=3){const R=g[M+0],N=g[M+1],I=g[M+2];E[L++]=R,E[L++]=N,E[L++]=N,E[L++]=I,E[L++]=I,E[L++]=R}}else{m=p.version;for(let g=0,M=0;g<S;g+=3){const L=g+0,R=g+1,N=g+2;E[M++]=L,E[M++]=R,E[M++]=R,E[M++]=N,E[M++]=N,E[M++]=L}}x.version=m;const b=s.get(_);b&&e.remove(b),s.set(_,x)}function f(_){const v=s.get(_);if(v){const p=_.index;p!==null&&v.version<p.version&&d(_)}else d(_);return s.get(_)}function h(){for(const _ in i){const v=i[_].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:f,dispose:h}}function MM(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,h){h!==0&&(r.drawElementsInstanced(n,f,s,d*a,h),t.update(f,n,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,h);let v=0;for(let p=0;p<h;p++)v+=f[p];t.update(v,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function yM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function EM(r,e,t){const n=new WeakMap,i=new Bt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let R=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var h=R;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),p===!0&&(x=3);let E=o.attributes.position.count*x,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const g=new Float32Array(E*b*4*d),M=new Fm(g,E,b,d);M.type=Ui,M.needsUpdate=!0;const L=x*4;for(let N=0;N<d;N++){const I=m[N],k=S[N],D=w[N],z=E*b*4*N;for(let Y=0;Y<I.count;Y++){const P=Y*L;_===!0&&(i.fromBufferAttribute(I,Y),g[z+P+0]=i.x,g[z+P+1]=i.y,g[z+P+2]=i.z,g[z+P+3]=0),v===!0&&(i.fromBufferAttribute(k,Y),g[z+P+4]=i.x,g[z+P+5]=i.y,g[z+P+6]=i.z,g[z+P+7]=0),p===!0&&(i.fromBufferAttribute(D,Y),g[z+P+8]=i.x,g[z+P+9]=i.y,g[z+P+10]=i.z,g[z+P+11]=D.itemSize===4?i.w:1)}}f={count:d,texture:M,size:new tt(E,b)},n.set(o,f),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function TM(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const bM={[gm]:"LINEAR_TONE_MAPPING",[vm]:"REINHARD_TONE_MAPPING",[xm]:"CINEON_TONE_MAPPING",[Sm]:"ACES_FILMIC_TONE_MAPPING",[ym]:"AGX_TONE_MAPPING",[Em]:"NEUTRAL_TONE_MAPPING",[Mm]:"CUSTOM_TONE_MAPPING"};function wM(r,e,t,n,i,s){const a=new Bi(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Wn;u.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new mn([0,2,0,0,2,0],2));const d=new _v({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new lr(u,d),h=new Sv(-1,1,1,-1,0,1);let _=null,v=null,p=!1,m,S=null,w=[],x=!1;this.setSize=function(E,b){a.setSize(E,b),o!==null&&o.setSize(E,b),l!==null&&l.setSize(E,b);for(let g=0;g<w.length;g++){const M=w[g];M.setSize&&M.setSize(E,b)}},this.setEffects=function(E){w=E,x=w.length>0&&w[0].isRenderPass===!0;const b=a.width,g=a.height;w.length>0&&o===null&&(o=new Bi(b,g,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),l=new Bi(b,g,{type:Gi,depthBuffer:!1,stencilBuffer:!1}));const M=i===!0&&w.some(L=>L.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new ta(b,g),s===!0&&(c.format=wr,c.type=ea)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let L=0;L<w.length;L++){const R=w[L];R.setSize&&R.setSize(b,g),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(E,b){if(p||E.toneMapping===ir&&w.length===0)return!1;if(S=b,b!==null){const g=b.width,M=b.height;(a.width!==g||a.height!==M)&&this.setSize(g,M)}return x===!1&&E.setRenderTarget(a),m=E.toneMapping,E.toneMapping=ir,!0},this.hasRenderPass=function(){return x},this.end=function(E,b){E.toneMapping=m,p=!0;let g=a,M=o;for(let L=0;L<w.length;L++){const R=w[L];R.enabled!==!1&&(R.render(E,M,g,b),R.needsSwap!==!1&&(g=M,M=M===o?l:o))}if(_!==E.outputColorSpace||v!==E.toneMapping){_=E.outputColorSpace,v=E.toneMapping,d.defines={},it.getTransfer(_)===xt&&(d.defines.SRGB_TRANSFER="");const L=bM[v];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,E.setRenderTarget(S),E.render(f,h),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}const Km=new Nn,Zm=new ta(1,1),Jm=new Gm(1),Qm=new Fm,jm=new $0,e_=new km,Td=[],bd=[],wd=new Float32Array(16),Ad=new Float32Array(9),Rd=new Float32Array(4);function ra(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Td[i];if(s===void 0&&(s=new Float32Array(i),Td[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function nn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function rn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Gl(r,e){let t=bd[e];t===void 0&&(t=new Int32Array(e),bd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function AM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function RM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2fv(this.addr,e),rn(t,e)}}function CM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;r.uniform3fv(this.addr,e),rn(t,e)}}function PM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4fv(this.addr,e),rn(t,e)}}function LM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;Rd.set(n),r.uniformMatrix2fv(this.addr,!1,Rd),rn(t,n)}}function DM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;Ad.set(n),r.uniformMatrix3fv(this.addr,!1,Ad),rn(t,n)}}function IM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;wd.set(n),r.uniformMatrix4fv(this.addr,!1,wd),rn(t,n)}}function NM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function UM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2iv(this.addr,e),rn(t,e)}}function FM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3iv(this.addr,e),rn(t,e)}}function OM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4iv(this.addr,e),rn(t,e)}}function BM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function zM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;r.uniform2uiv(this.addr,e),rn(t,e)}}function kM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;r.uniform3uiv(this.addr,e),rn(t,e)}}function GM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;r.uniform4uiv(this.addr,e),rn(t,e)}}function Hl(r){return r.version===0&&(r.compareFunction=Nm,r.needsUpdate=!0),r}function HM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?s=Hl(Zm):s=Km,t.setTexture2D(e||s,i)}function VM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||jm,i)}function WM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=Hl(Jm):s=e_,t.setTextureCube(e||s,i)}function XM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Qm,i)}function YM(r){switch(r){case 5126:return AM;case 35664:return RM;case 35665:return CM;case 35666:return PM;case 35674:return LM;case 35675:return DM;case 35676:return IM;case 5124:case 35670:return NM;case 35667:case 35671:return UM;case 35668:case 35672:return FM;case 35669:case 35673:return OM;case 5125:return BM;case 36294:return zM;case 36295:return kM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return WM;case 36289:case 36303:case 36311:case 36292:return XM}}function qM(r,e){r.uniform1fv(this.addr,e)}function $M(r,e){const t=ra(e,this.size,2);r.uniform2fv(this.addr,t)}function KM(r,e){const t=ra(e,this.size,3);r.uniform3fv(this.addr,t)}function ZM(r,e){const t=ra(e,this.size,4);r.uniform4fv(this.addr,t)}function JM(r,e){const t=ra(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function QM(r,e){const t=ra(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function jM(r,e){const t=ra(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ey(r,e){r.uniform1iv(this.addr,e)}function ty(r,e){r.uniform2iv(this.addr,e)}function ny(r,e){r.uniform3iv(this.addr,e)}function iy(r,e){r.uniform4iv(this.addr,e)}function ry(r,e){r.uniform1uiv(this.addr,e)}function sy(r,e){r.uniform2uiv(this.addr,e)}function ay(r,e){r.uniform3uiv(this.addr,e)}function oy(r,e){r.uniform4uiv(this.addr,e)}function ly(r,e,t){const n=this.cache,i=e.length,s=Gl(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Hl(Zm):a=Km;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function cy(r,e,t){const n=this.cache,i=e.length,s=Gl(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||jm,s[a])}function uy(r,e,t){const n=this.cache,i=e.length,s=Gl(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));let a;this.type===r.SAMPLER_CUBE_SHADOW?a=Hl(Jm):a=e_;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,s[o])}function fy(r,e,t){const n=this.cache,i=e.length,s=Gl(t,i);nn(n,s)||(r.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Qm,s[a])}function hy(r){switch(r){case 5126:return qM;case 35664:return $M;case 35665:return KM;case 35666:return ZM;case 35674:return JM;case 35675:return QM;case 35676:return jM;case 5124:case 35670:return ey;case 35667:case 35671:return ty;case 35668:case 35672:return ny;case 35669:case 35673:return iy;case 5125:return ry;case 36294:return sy;case 36295:return ay;case 36296:return oy;case 35678:case 36198:case 36298:case 36306:case 35682:return ly;case 35679:case 36299:case 36307:return cy;case 35680:case 36300:case 36308:case 36293:return uy;case 36289:case 36303:case 36311:case 36292:return fy}}class dy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=YM(t.type)}}class py{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hy(t.type)}}class my{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Lc=/(\w+)(\])?(\[|\.)?/g;function Cd(r,e){r.seq.push(e),r.map[e.id]=e}function _y(r,e,t){const n=r.name,i=n.length;for(Lc.lastIndex=0;;){const s=Lc.exec(n),a=Lc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Cd(t,c===void 0?new dy(o,r,e):new py(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new my(o),Cd(t,d)),t=d}}}class cl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);_y(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Pd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const gy=37297;let vy=0;function xy(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ld=new He;function Sy(r){it._getMatrix(Ld,it.workingColorSpace,r);const e=`mat3( ${Ld.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(r)){case bl:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Dd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+xy(r.getShaderSource(e),o)}else return s}function My(r,e){const t=Sy(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const yy={[gm]:"Linear",[vm]:"Reinhard",[xm]:"Cineon",[Sm]:"ACESFilmic",[ym]:"AgX",[Em]:"Neutral",[Mm]:"Custom"};function Ey(r,e){const t=yy[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yo=new K;function Ty(){it.getLuminanceCoefficients(Yo);const r=Yo.x.toFixed(4),e=Yo.y.toFixed(4),t=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function by(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function wy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ay(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function wa(r){return r!==""}function Id(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Nd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function ju(r){return r.replace(Ry,Cy)}function Cy(r,e){const t=Xe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ju(t)}const Py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ud(r){return r.replace(Py,Ly)}function Ly(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Fd(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Dy={[il]:"SHADOWMAP_TYPE_PCF",[ba]:"SHADOWMAP_TYPE_VSM"};function Iy(r){return Dy[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Ny={[Qa]:"ENVMAP_MODE_REFRACTION"};function Uy(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Ny[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Fy={[_m]:"ENVMAP_BLENDING_MULTIPLY",[E0]:"ENVMAP_BLENDING_MIX",[T0]:"ENVMAP_BLENDING_ADD"};function Oy(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Fy[r.combine]||"ENVMAP_BLENDING_NONE"}function By(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Iy(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Uy(t),d=Oy(t),f=by(t),h=wy(s),_=i.createProgram();let v,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(wa).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(wa).join(`
`),p.length>0&&(p+=`
`)):(v=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),p=[Fd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?Xe.tonemapping_pars_fragment:"",t.toneMapping!==ir?Ey("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,My("linearToOutputTexel",t.outputColorSpace),Ty(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wa).join(`
`)),a=ju(a),a=Id(a,t),a=Nd(a,t),o=ju(o),o=Id(o,t),o=Nd(o,t),a=Ud(a),o=Ud(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===Xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=m+v+a,w=m+p+o,x=Pd(i,i.VERTEX_SHADER,S),E=Pd(i,i.FRAGMENT_SHADER,w);i.attachShader(_,x),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(R){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_)||"",I=i.getShaderInfoLog(x)||"",k=i.getShaderInfoLog(E)||"",D=N.trim(),z=I.trim(),Y=k.trim();let P=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(P=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,x,E);else{const O=Dd(i,x,"vertex"),A=Dd(i,E,"fragment");dt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+O+`
`+A)}else D!==""?ze("WebGLProgram: Program Info Log:",D):(z===""||Y==="")&&(G=!1);G&&(R.diagnostics={runnable:P,programLog:D,vertexShader:{log:z,prefix:v},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(x),i.deleteShader(E),g=new cl(i,_),M=Ay(i,_)}let g;this.getUniforms=function(){return g===void 0&&b(this),g};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=i.getProgramParameter(_,gy)),L},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=x,this.fragmentShader=E,this}let zy=0;class ky{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gy(e),t.set(e,n)),n}}class Gy{constructor(e){this.id=zy++,this.code=e,this.usedTimes=0}}function Hy(r){return r===ls||r===yl||r===El}function Vy(r,e,t,n,i,s){const a=new Ff,o=new ky,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(g){return l.add(g),g===0?"uv":`uv${g}`}function _(g,M,L,R,N,I){const k=R.fog,D=N.geometry,z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,P=e.get(g.envMap||z,Y),G=f[g.type];let O=n.precision;g.precision!==null&&(O=n.getMaxPrecision(g.precision),O!==g.precision&&ze("WebGLProgram.getParameters:",g.precision,"not supported, using",O,"instead."));const A=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,H=A!==void 0?A.length:0;let J=0;D.morphAttributes.position!==void 0&&(J=1),D.morphAttributes.normal!==void 0&&(J=2),D.morphAttributes.color!==void 0&&(J=3);let ce,V,ae,ve;if(G){const ie=Pi[G];ce=ie.vertexShader,V=ie.fragmentShader}else{ce=g.vertexShader,V=g.fragmentShader;const ie=o.getVertexShaderStage(g),be=o.getFragmentShaderStage(g);o.update(g,ie,be),ae=ie.id,ve=be.id}const Ee=r.getRenderTarget(),he=r.state.buffers.depth.getReversed(),Ce=N.isInstancedMesh===!0,ut=N.isBatchedMesh===!0,Ae=!!g.map,ke=!!g.matcap,Ie=!!P,Oe=Ie&&P.isPMREMTexture===!0,ft=!!g.aoMap,at=!!g.lightMap,Q=!!g.bumpMap&&g.wireframe===!1,Je=!!g.normalMap,Vt=!!g.displacementMap,St=!!g.emissiveMap,nt=!!g.metalnessMap,Ut=!!g.roughnessMap,kt=g.anisotropy>0,B=g.clearcoat>0,pt=g.diffuseRoughness>0,ot=g.dispersion>0,Ge=g.retroreflectivity>0,pe=g.iridescence>0,ht=g.sheen>0,Ne=g.transmission>0,Be=kt&&!!g.anisotropyMap,C=B&&!!g.clearcoatMap,y=B&&!!g.clearcoatNormalMap,X=B&&!!g.clearcoatRoughnessMap,oe=pt&&!!g.diffuseRoughnessMap,re=pe&&!!g.iridescenceMap,de=pe&&!!g.iridescenceThicknessMap,xe=ht&&!!g.sheenColorMap,q=ht&&!!g.sheenRoughnessMap,te=!!g.specularMap,fe=!!g.specularColorMap,U=!!g.specularIntensityMap,ee=Ne&&!!g.transmissionMap,j=Ne&&!!g.thicknessMap,me=!!g.gradientMap,ue=!!g.alphaMap,_e=g.alphaTest>0,le=!!g.alphaHash,ge=!!g.extensions;let se=ir;g.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(se=r.toneMapping);const ne=Oe?P.isCompressedCubeTexture?P.image[0].mipmaps:P.mipmaps:null,Se={shaderID:G,shaderType:g.type,shaderName:g.name,vertexShader:ce,fragmentShader:V,defines:g.defines,customVertexShaderID:ae,customFragmentShaderID:ve,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:O,batching:ut,batchingColor:ut&&N._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&N.instanceColor!==null,instancingMorph:Ce&&N.morphTexture!==null,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ae,matcap:ke,envMap:Ie,envMapMode:Ie&&P.mapping,envMapPMREM:Oe,envMapMaxLod:Oe?ne.length-1:null,envMapSize:Oe?ne[0].width:null,aoMap:ft,lightMap:at,bumpMap:Q,normalMap:Je,displacementMap:Vt,emissiveMap:St,normalMapObjectSpace:Je&&g.normalMapType===A0,normalMapTangentSpace:Je&&g.normalMapType===Wh,packedNormalMap:Je&&g.normalMapType===Wh&&Hy(g.normalMap.format),metalnessMap:nt,roughnessMap:Ut,anisotropy:kt,anisotropyMap:Be,clearcoat:B,clearcoatMap:C,clearcoatNormalMap:y,clearcoatRoughnessMap:X,diffuseRoughness:pt,diffuseRoughnessMap:oe,dispersion:ot,retroreflection:Ge,iridescence:pe,iridescenceMap:re,iridescenceThicknessMap:de,sheen:ht,sheenColorMap:xe,sheenRoughnessMap:q,specularMap:te,specularColorMap:fe,specularIntensityMap:U,transmission:Ne,transmissionMap:ee,thicknessMap:j,gradientMap:me,opaque:g.transparent===!1&&g.blending===za&&g.alphaToCoverage===!1,alphaMap:ue,alphaTest:_e,alphaHash:le,combine:g.combine,mapUv:Ae&&h(g.map.channel),aoMapUv:ft&&h(g.aoMap.channel),lightMapUv:at&&h(g.lightMap.channel),bumpMapUv:Q&&h(g.bumpMap.channel),normalMapUv:Je&&h(g.normalMap.channel),displacementMapUv:Vt&&h(g.displacementMap.channel),emissiveMapUv:St&&h(g.emissiveMap.channel),metalnessMapUv:nt&&h(g.metalnessMap.channel),roughnessMapUv:Ut&&h(g.roughnessMap.channel),anisotropyMapUv:Be&&h(g.anisotropyMap.channel),clearcoatMapUv:C&&h(g.clearcoatMap.channel),clearcoatNormalMapUv:y&&h(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&h(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:oe&&h(g.diffuseRoughnessMap.channel),iridescenceMapUv:re&&h(g.iridescenceMap.channel),iridescenceThicknessMapUv:de&&h(g.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&h(g.sheenColorMap.channel),sheenRoughnessMapUv:q&&h(g.sheenRoughnessMap.channel),specularMapUv:te&&h(g.specularMap.channel),specularColorMapUv:fe&&h(g.specularColorMap.channel),specularIntensityMapUv:U&&h(g.specularIntensityMap.channel),transmissionMapUv:ee&&h(g.transmissionMap.channel),thicknessMapUv:j&&h(g.thicknessMap.channel),alphaMapUv:ue&&h(g.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Je||kt),vertexNormals:!!D.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(Ae||ue),fog:!!k,useFog:g.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||D.attributes.normal===void 0&&Je===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:J,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:I.filter(ie=>ie.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:Ae&&g.map.isVideoTexture===!0&&it.getTransfer(g.map.colorSpace)===xt,decodeVideoTextureEmissive:St&&g.emissiveMap.isVideoTexture===!0&&it.getTransfer(g.emissiveMap.colorSpace)===xt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Di,flipSided:g.side===Hn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ge&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&g.extensions.multiDraw===!0||ut)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se}function v(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const L in g.defines)M.push(L),M.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(p(M,g),m(M,g),M.push(r.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function p(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapPMREM),g.push(M.envMapMaxLod),g.push(M.envMapSize),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.diffuseRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.numLightProbeGrids),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function m(g,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function S(g){const M=f[g.type];let L;if(M){const R=Pi[M];L=dv.clone(R.uniforms)}else L=g.uniforms;return L}function w(g,M){let L=u.get(M);return L!==void 0?++L.usedTimes:(L=new By(r,M,g,i),c.push(L),u.set(M,L)),L}function x(g){if(--g.usedTimes===0){const M=c.indexOf(g);c[M]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function E(g){o.remove(g)}function b(){o.dispose()}return{getParameters:_,getProgramCacheKey:v,getUniforms:S,acquireProgram:w,releaseProgram:x,releaseShaderCache:E,programs:c,dispose:b}}function Wy(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Xy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Od(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Bd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,_,v,p,m){let S=r[e];return S===void 0?(S={id:f.id,object:f,geometry:h,material:_,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:p,group:m},r[e]=S):(S.id=f.id,S.object=f,S.geometry=h,S.material=_,S.materialVariant=a(f),S.groupOrder=v,S.renderOrder=f.renderOrder,S.z=p,S.group=m),e++,S}function l(f,h,_,v,p,m,S){S.reversedDepth===!0&&(p=-p);const w=o(f,h,_,v,p,m);_.transmission>0?n.push(w):_.transparent===!0?i.push(w):t.push(w)}function c(f,h,_,v,p,m){const S=o(f,h,_,v,p,m);_.transmission>0?n.unshift(S):_.transparent===!0?i.unshift(S):t.unshift(S)}function u(f,h){t.length>1&&t.sort(f||Xy),n.length>1&&n.sort(h||Od),i.length>1&&i.sort(h||Od)}function d(){for(let f=e,h=r.length;f<h;f++){const _=r[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function Yy(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Bd,r.set(n,[a])):i>=s.length?(a=new Bd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function qy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new K,color:new ct};break;case"SpotLight":t={position:new K,direction:new K,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new K,halfWidth:new K,halfHeight:new K};break}return r[e.id]=t,t}}}function $y(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ky=0;function Zy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Jy(r){const e=new qy,t=$y(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new K);const i=new K,s=new Pt,a=new Pt;function o(c){let u=0,d=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let h=0,_=0,v=0,p=0,m=0,S=0,w=0,x=0,E=0,b=0,g=0,M=0,L=0,R=0;c.sort(Zy);for(let I=0,k=c.length;I<k;I++){const D=c[I],z=D.color,Y=D.intensity,P=D.distance;let G=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ls?G=D.shadow.map.texture:G=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=z.r*Y,d+=z.g*Y,f+=z.b*Y;else if(D.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(D.sh.coefficients[O],Y);R++}else if(D.isSunLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const A=D.shadow,H=t.get(D);H.shadowIntensity=A.intensity,H.shadowBias=A.bias,H.shadowNormalBias=A.normalBias,H.shadowRadius=A.radius,H.shadowMapSize.copy(A.mapSize).multiply(A.getFrameExtents()),n.sunShadow[_]=H,n.sunShadowMap[_]=G;const J=A.getViewportCount();for(let ce=0;ce<J;ce++)n.sunShadowMatrix[v+ce]=A.getMatrix(ce),n.sunShadowCascade[v+ce]=A._cascadeData[ce];v+=J,_++}n.sun[h]=O,h++}else if(D.isDirectionalLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const A=D.shadow,H=t.get(D);H.shadowIntensity=A.intensity,H.shadowBias=A.bias,H.shadowNormalBias=A.normalBias,H.shadowRadius=A.radius,H.shadowMapSize=A.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=G,n.directionalShadowMatrix[p]=D.shadow.matrix,E++}n.directional[p]=O,p++}else if(D.isSpotLight){const O=e.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(z).multiplyScalar(Y),O.distance=P,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,n.spot[S]=O;const A=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,A.updateMatrices(D),D.castShadow&&L++),n.spotLightMatrix[S]=A.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=A.intensity,H.shadowBias=A.bias,H.shadowNormalBias=A.normalBias,H.shadowRadius=A.radius,H.shadowMapSize=A.mapSize,n.spotShadow[S]=H,n.spotShadowMap[S]=G,g++}S++}else if(D.isRectAreaLight){const O=e.get(D);O.color.copy(z).multiplyScalar(Y),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=O,w++}else if(D.isPointLight){const O=e.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){const A=D.shadow,H=t.get(D);H.shadowIntensity=A.intensity,H.shadowBias=A.bias,H.shadowNormalBias=A.normalBias,H.shadowRadius=A.radius,H.shadowMapSize=A.mapSize,H.shadowCameraNear=A.camera.near,H.shadowCameraFar=A.camera.far,n.pointShadow[m]=H,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=D.shadow.matrix,b++}n.point[m]=O,m++}else if(D.isHemisphereLight){const O=e.get(D);O.skyColor.copy(D.color).multiplyScalar(Y),O.groundColor.copy(D.groundColor).multiplyScalar(Y),n.hemi[x]=O,x++}}w>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const N=n.hash;(N.sunLength!==h||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==S||N.rectAreaLength!==w||N.hemiLength!==x||N.numSunShadows!==_||N.numDirectionalShadows!==E||N.numPointShadows!==b||N.numSpotShadows!==g||N.numSpotMaps!==M||N.numLightProbes!==R)&&(n.sun.length=h,n.directional.length=p,n.spot.length=S,n.rectArea.length=w,n.point.length=m,n.hemi.length=x,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+M-L,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=R,N.sunLength=h,N.directionalLength=p,N.pointLength=m,N.spotLength=S,N.rectAreaLength=w,N.hemiLength=x,N.numSunShadows=_,N.numDirectionalShadows=E,N.numPointShadows=b,N.numSpotShadows=g,N.numSpotMaps=M,N.numLightProbes=R,n.version=Ky++)}function l(c,u){let d=0,f=0,h=0,_=0,v=0,p=0;const m=u.matrixWorldInverse;for(let S=0,w=c.length;S<w;S++){const x=c[S];if(x.isSunLight){const E=n.sun[d];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),d++}else if(x.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),f++}else if(x.isSpotLight){const E=n.spot[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),_++}else if(x.isRectAreaLight){const E=n.rectArea[v];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const E=n.hemi[p];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function zd(r){const e=new Jy(r),t=[],n=[],i=[];function s(d){u.camera=d,t.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Qy(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new zd(r),e.set(i,[o])):s>=a.length?(o=new zd(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const jy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tE=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],nE=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],kd=new Pt,_a=new K,Dc=new K;function iE(r,e,t){let n=new Rl;const i=new tt,s=new tt,a=new Bt,o=new gv,l=new vv,c={},u=t.maxTextureSize,d={[os]:Hn,[Hn]:os,[Di]:Di},f=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:jy,fragmentShader:eE}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new Wn;_.setAttribute("position",new sr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new lr(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=il;let m=this.type;this.render=function(b,g,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===r0&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=il);const L=r.getRenderTarget(),R=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Vs),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const k=m!==this.type;k&&g.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=b.length;D<z;D++){const Y=b[D],P=Y.shadow;if(P===void 0){ze("WebGLShadowMap:",Y,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const G=P.getFrameExtents();i.multiply(G),s.copy(P.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/G.x),i.x=s.x*G.x,P.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/G.y),i.y=s.y*G.y,P.mapSize.y=s.y));const O=r.state.buffers.depth.getReversed();if(P.camera._reversedDepth=O,P.map===null||k===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===ba){if(Y.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Bi(i.x,i.y,{format:ls,type:Gi,minFilter:On,magFilter:On,generateMipmaps:!1}),P.map.texture.name=Y.name+".shadowMap",P.map.depthTexture=new ta(i.x,i.y,Ui),P.map.depthTexture.name=Y.name+".shadowMapDepth",P.map.depthTexture.format=Nr,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=hn,P.map.depthTexture.magFilter=hn}else Y.isPointLight?(P.map=new Gf(i.x),P.map.depthTexture=new Gm(i.x,ki)):(P.map=new Bi(i.x,i.y),P.map.depthTexture=new ta(i.x,i.y,ki)),P.map.depthTexture.name=Y.name+".shadowMap",P.map.depthTexture.format=Nr,this.type===il?(P.map.depthTexture.compareFunction=O?Im:Dm,P.map.depthTexture.minFilter=On,P.map.depthTexture.magFilter=On):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=hn,P.map.depthTexture.magFilter=hn);P.camera.updateProjectionMatrix()}P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==i.x||P.map.height!==i.y)&&P.map.setSize(i.x,i.y);const A=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();Y.isPointLight!==!0&&P.updateMatrices(Y,M);const H=(P.camera.layers.mask&4294967294)!==0?P.camera.layers:M.layers;for(let J=0;J<A;J++){const ce=P.getCamera(J);if(Y.isPointLight){const V=P.camera,ae=P.matrix,ve=Y.distance||V.far;ve!==V.far&&(V.far=ve,V.updateProjectionMatrix()),_a.setFromMatrixPosition(Y.matrixWorld),V.position.copy(_a),Dc.copy(V.position),Dc.add(tE[J]),V.up.copy(nE[J]),V.lookAt(Dc),V.updateMatrixWorld(),ae.makeTranslation(-_a.x,-_a.y,-_a.z),kd.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),P._frustum.setFromProjectionMatrix(kd,V.coordinateSystem,V.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)r.setRenderTarget(P.map,J),r.clear();else{J===0&&(r.setRenderTarget(P.map),r.clear());const V=P.getViewport(J);a.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),I.viewport(a)}n=P.getFrustum(J),x(g,M,ce,Y,H,this.type)}P.isPointLightShadow!==!0&&this.type===ba&&S(P,M),P.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(L,R,N)};function S(b,g){const M=e.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null?b.mapPass=new Bi(i.x,i.y,{format:ls,type:Gi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(g,null,M,f,v,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(g,null,M,h,v,null)}function w(b,g,M,L){let R=null;const N=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)R=N;else if(R=M.isPointLight===!0?l:o,r.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){const I=R.uuid,k=g.uuid;let D=c[I];D===void 0&&(D={},c[I]=D);let z=D[k];z===void 0&&(z=R.clone(),D[k]=z,g.addEventListener("dispose",E)),R=z}if(R.visible=g.visible,R.wireframe=g.wireframe,L===ba?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:d[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const I=r.properties.get(R);I.light=M}return R}function x(b,g,M,L,R,N){if(b.visible===!1)return;if(b.layers.test(R)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&N===ba)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);const D=e.update(b),z=b.material;if(Array.isArray(z)){const Y=D.groups;for(let P=0,G=Y.length;P<G;P++){const O=Y[P],A=z[O.materialIndex];if(A&&A.visible){const H=w(b,A,L,N);b.onBeforeShadow(r,b,g,M,D,H,O),r.renderBufferDirect(M,null,D,H,b,O),b.onAfterShadow(r,b,g,M,D,H,O)}}}else if(z.visible){const Y=w(b,z,L,N);b.onBeforeShadow(r,b,g,M,D,Y,null),r.renderBufferDirect(M,null,D,Y,b,null),b.onAfterShadow(r,b,g,M,D,Y,null)}}const k=b.children;for(let D=0,z=k.length;D<z;D++)x(k[D],g,M,L,R,N)}function E(b){b.target.removeEventListener("dispose",E);for(const M in c){const L=c[M],R=b.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function rE(r,e){function t(){let U=!1;const ee=new Bt;let j=null;const me=new Bt(0,0,0,0);return{setMask:function(ue){j!==ue&&!U&&(r.colorMask(ue,ue,ue,ue),j=ue)},setLocked:function(ue){U=ue},setClear:function(ue,_e,le,ge,se){se===!0&&(ue*=ge,_e*=ge,le*=ge),ee.set(ue,_e,le,ge),me.equals(ee)===!1&&(r.clearColor(ue,_e,le,ge),me.copy(ee))},reset:function(){U=!1,j=null,me.set(-1,0,0,0)}}}function n(){let U=!1,ee=!1,j=null,me=null,ue=null;return{setReversed:function(_e){if(ee!==_e){const le=e.get("EXT_clip_control");_e?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),ee=_e;const ge=ue;ue=null,this.setClear(ge)}},getReversed:function(){return ee},setTest:function(_e){_e?he(r.DEPTH_TEST):Ce(r.DEPTH_TEST)},setMask:function(_e){j!==_e&&!U&&(r.depthMask(_e),j=_e)},setFunc:function(_e){if(ee&&(_e=B0[_e]),me!==_e){switch(_e){case cu:r.depthFunc(r.NEVER);break;case uu:r.depthFunc(r.ALWAYS);break;case fu:r.depthFunc(r.LESS);break;case Ja:r.depthFunc(r.LEQUAL);break;case hu:r.depthFunc(r.EQUAL);break;case du:r.depthFunc(r.GEQUAL);break;case pu:r.depthFunc(r.GREATER);break;case mu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}me=_e}},setLocked:function(_e){U=_e},setClear:function(_e){ue!==_e&&(ue=_e,ee&&(_e=1-_e),r.clearDepth(_e))},reset:function(){U=!1,j=null,me=null,ue=null,ee=!1}}}function i(){let U=!1,ee=null,j=null,me=null,ue=null,_e=null,le=null,ge=null,se=null;return{setTest:function(ne){U||(ne?he(r.STENCIL_TEST):Ce(r.STENCIL_TEST))},setMask:function(ne){ee!==ne&&!U&&(r.stencilMask(ne),ee=ne)},setFunc:function(ne,Se,ie){(j!==ne||me!==Se||ue!==ie)&&(r.stencilFunc(ne,Se,ie),j=ne,me=Se,ue=ie)},setOp:function(ne,Se,ie){(_e!==ne||le!==Se||ge!==ie)&&(r.stencilOp(ne,Se,ie),_e=ne,le=Se,ge=ie)},setLocked:function(ne){U=ne},setClear:function(ne){se!==ne&&(r.clearStencil(ne),se=ne)},reset:function(){U=!1,ee=null,j=null,me=null,ue=null,_e=null,le=null,ge=null,se=null}}}const s=new t,a=new n,o=new i;let l={};const c=new WeakMap;let u={},d={},f={},h=new WeakMap,_=[],v=null,p=!1,m=null,S=null,w=null,x=null,E=null,b=null,g=null,M=new ct(0,0,0),L=0,R=!1,N=null,I=null,k=null,D=null,z=null;const Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,G=0;const O=r.getParameter(r.VERSION);O.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(O)[1]),P=G>=1):O.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),P=G>=2);let A=null,H={};const J=r.getParameter(r.SCISSOR_BOX),ce=r.getParameter(r.VIEWPORT),V=new Bt().fromArray(J),ae=new Bt().fromArray(ce);function ve(U,ee,j,me){const ue=new Uint8Array(4),_e=r.createTexture();r.bindTexture(U,_e),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let le=0;le<j;le++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ee,0,r.RGBA,1,1,me,0,r.RGBA,r.UNSIGNED_BYTE,ue):r.texImage2D(ee+le,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ue);return _e}const Ee={};Ee[r.TEXTURE_2D]=ve(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=ve(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[r.TEXTURE_2D_ARRAY]=ve(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=ve(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(r.DEPTH_TEST),a.setFunc(Ja),Q(!1),Je(kh),he(r.CULL_FACE),ft(Vs);function he(U){u[U]!==!0&&(r.enable(U),u[U]=!0)}function Ce(U){u[U]!==!1&&(r.disable(U),u[U]=!1)}function ut(U,ee){return f[U]!==ee?(r.bindFramebuffer(U,ee),f[U]=ee,U===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ee),U===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ae(U,ee){let j=_,me=!1;if(U){j=h.get(ee),j===void 0&&(j=[],h.set(ee,j));const ue=U.textures;if(j.length!==ue.length||j[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,le=ue.length;_e<le;_e++)j[_e]=r.COLOR_ATTACHMENT0+_e;j.length=ue.length,me=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,me=!0);me&&r.drawBuffers(j)}function ke(U){return v!==U?(r.useProgram(U),v=U,!0):!1}const Ie={[Ds]:r.FUNC_ADD,[a0]:r.FUNC_SUBTRACT,[o0]:r.FUNC_REVERSE_SUBTRACT};Ie[l0]=r.MIN,Ie[c0]=r.MAX;const Oe={[u0]:r.ZERO,[f0]:r.ONE,[h0]:r.SRC_COLOR,[pm]:r.SRC_ALPHA,[v0]:r.SRC_ALPHA_SATURATE,[_0]:r.DST_COLOR,[p0]:r.DST_ALPHA,[d0]:r.ONE_MINUS_SRC_COLOR,[mm]:r.ONE_MINUS_SRC_ALPHA,[g0]:r.ONE_MINUS_DST_COLOR,[m0]:r.ONE_MINUS_DST_ALPHA,[x0]:r.CONSTANT_COLOR,[S0]:r.ONE_MINUS_CONSTANT_COLOR,[M0]:r.CONSTANT_ALPHA,[y0]:r.ONE_MINUS_CONSTANT_ALPHA};function ft(U,ee,j,me,ue,_e,le,ge,se,ne){if(U===Vs){p===!0&&(Ce(r.BLEND),p=!1);return}if(p===!1&&(he(r.BLEND),p=!0),U!==s0){if(U!==m||ne!==R){if((S!==Ds||E!==Ds)&&(r.blendEquation(r.FUNC_ADD),S=Ds,E=Ds),ne)switch(U){case za:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gh:r.blendFunc(r.ONE,r.ONE);break;case Hh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:dt("WebGLState: Invalid blending: ",U);break}else switch(U){case za:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Hh:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vh:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",U);break}w=null,x=null,b=null,g=null,M.set(0,0,0),L=0,m=U,R=ne}return}ue=ue||ee,_e=_e||j,le=le||me,(ee!==S||ue!==E)&&(r.blendEquationSeparate(Ie[ee],Ie[ue]),S=ee,E=ue),(j!==w||me!==x||_e!==b||le!==g)&&(r.blendFuncSeparate(Oe[j],Oe[me],Oe[_e],Oe[le]),w=j,x=me,b=_e,g=le),(ge.equals(M)===!1||se!==L)&&(r.blendColor(ge.r,ge.g,ge.b,se),M.copy(ge),L=se),m=U,R=!1}function at(U,ee){U.side===Di?Ce(r.CULL_FACE):he(r.CULL_FACE);let j=U.side===Hn;ee&&(j=!j),Q(j),U.blending===za&&U.transparent===!1?ft(Vs):ft(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const me=U.stencilWrite;o.setTest(me),me&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),St(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):Ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function Q(U){N!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),N=U)}function Je(U){U!==n0?(he(r.CULL_FACE),U!==I&&(U===kh?r.cullFace(r.BACK):U===i0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ce(r.CULL_FACE),I=U}function Vt(U){U!==k&&(P&&r.lineWidth(U),k=U)}function St(U,ee,j){U?(he(r.POLYGON_OFFSET_FILL),(D!==ee||z!==j)&&(D=ee,z=j,a.getReversed()&&(ee=-ee,j=-j),r.polygonOffset(ee,j))):Ce(r.POLYGON_OFFSET_FILL)}function nt(U){U?he(r.SCISSOR_TEST):Ce(r.SCISSOR_TEST)}function Ut(U){U===void 0&&(U=r.TEXTURE0+Y-1),A!==U&&(r.activeTexture(U),A=U)}function kt(U,ee,j){j===void 0&&(A===null?j=r.TEXTURE0+Y-1:j=A);let me=H[j];me===void 0&&(me={type:void 0,texture:void 0},H[j]=me),(me.type!==U||me.texture!==ee)&&(A!==j&&(r.activeTexture(j),A=j),r.bindTexture(U,ee||Ee[U]),me.type=U,me.texture=ee)}function B(){const U=H[A];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function pt(){try{r.compressedTexImage2D(...arguments)}catch(U){dt("WebGLState:",U)}}function ot(){try{r.compressedTexImage3D(...arguments)}catch(U){dt("WebGLState:",U)}}function Ge(){try{r.texSubImage2D(...arguments)}catch(U){dt("WebGLState:",U)}}function pe(){try{r.texSubImage3D(...arguments)}catch(U){dt("WebGLState:",U)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(U){dt("WebGLState:",U)}}function Ne(){try{r.compressedTexSubImage3D(...arguments)}catch(U){dt("WebGLState:",U)}}function Be(){try{r.texStorage2D(...arguments)}catch(U){dt("WebGLState:",U)}}function C(){try{r.texStorage3D(...arguments)}catch(U){dt("WebGLState:",U)}}function y(){try{r.texImage2D(...arguments)}catch(U){dt("WebGLState:",U)}}function X(){try{r.texImage3D(...arguments)}catch(U){dt("WebGLState:",U)}}function oe(U){return d[U]!==void 0?d[U]:r.getParameter(U)}function re(U,ee){d[U]!==ee&&(r.pixelStorei(U,ee),d[U]=ee)}function de(U){V.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),V.copy(U))}function xe(U){ae.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),ae.copy(U))}function q(U,ee){let j=c.get(ee);j===void 0&&(j=new WeakMap,c.set(ee,j));let me=j.get(U);me===void 0&&(me=r.getUniformBlockIndex(ee,U.name),r.uniformBlockBinding(ee,me,me),j.set(U,me))}function te(U,ee,j){const ue=c.get(ee).get(U);l[ue]!==j&&(r.bindBufferBase(r.UNIFORM_BUFFER,ue,j),l[ue]=j)}function fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},A=null,H={},f={},l={},h=new WeakMap,_=[],v=null,p=!1,m=null,S=null,w=null,x=null,E=null,b=null,g=null,M=new ct(0,0,0),L=0,R=!1,N=null,I=null,k=null,D=null,z=null,V.set(0,0,r.canvas.width,r.canvas.height),ae.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:he,disable:Ce,bindFramebuffer:ut,drawBuffers:Ae,useProgram:ke,setBlending:ft,setMaterial:at,setFlipSided:Q,setCullFace:Je,setLineWidth:Vt,setPolygonOffset:St,setScissorTest:nt,activeTexture:Ut,bindTexture:kt,unbindTexture:B,compressedTexImage2D:pt,compressedTexImage3D:ot,texImage2D:y,texImage3D:X,pixelStorei:re,getParameter:oe,updateUBOMapping:q,uniformBlockBinding:te,texStorage2D:Be,texStorage3D:C,texSubImage2D:Ge,texSubImage3D:pe,compressedTexSubImage2D:ht,compressedTexSubImage3D:Ne,scissor:de,viewport:xe,reset:fe}}function sE(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap,d=new Set;let f;const h=new WeakMap,_=new Set,v=new FinalizationRegistry(C=>_.delete(C));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,y){return p?new OffscreenCanvas(C,y):Al("canvas")}function S(C,y,X){let oe=1;const re=Be(C);if((re.width>X||re.height>X)&&(oe=X/Math.max(re.width,re.height)),oe<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const de=Math.floor(oe*re.width),xe=Math.floor(oe*re.height);f===void 0&&(f=m(de,xe));const q=y?m(de,xe):f;return q.width=de,q.height=xe,q.getContext("2d").drawImage(C,0,0,de,xe),ze("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+de+"x"+xe+")."),q}else return"data"in C&&ze("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function w(C){return C.generateMipmaps}function x(C){r.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(C,y,X,oe,re,de=!1){if(C!==null){if(r[C]!==void 0)return r[C];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xe;oe&&(xe=e.get("EXT_texture_norm16"),xe||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=y;if(y===r.RED&&(X===r.FLOAT&&(q=r.R32F),X===r.HALF_FLOAT&&(q=r.R16F),X===r.UNSIGNED_BYTE&&(q=r.R8),X===r.UNSIGNED_SHORT&&xe&&(q=xe.R16_EXT),X===r.SHORT&&xe&&(q=xe.R16_SNORM_EXT)),y===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(q=r.R8UI),X===r.UNSIGNED_SHORT&&(q=r.R16UI),X===r.UNSIGNED_INT&&(q=r.R32UI),X===r.BYTE&&(q=r.R8I),X===r.SHORT&&(q=r.R16I),X===r.INT&&(q=r.R32I)),y===r.RG&&(X===r.FLOAT&&(q=r.RG32F),X===r.HALF_FLOAT&&(q=r.RG16F),X===r.UNSIGNED_BYTE&&(q=r.RG8),X===r.UNSIGNED_SHORT&&xe&&(q=xe.RG16_EXT),X===r.SHORT&&xe&&(q=xe.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(q=r.RG8UI),X===r.UNSIGNED_SHORT&&(q=r.RG16UI),X===r.UNSIGNED_INT&&(q=r.RG32UI),X===r.BYTE&&(q=r.RG8I),X===r.SHORT&&(q=r.RG16I),X===r.INT&&(q=r.RG32I)),y===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(q=r.RGB8UI),X===r.UNSIGNED_SHORT&&(q=r.RGB16UI),X===r.UNSIGNED_INT&&(q=r.RGB32UI),X===r.BYTE&&(q=r.RGB8I),X===r.SHORT&&(q=r.RGB16I),X===r.INT&&(q=r.RGB32I)),y===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),X===r.UNSIGNED_INT&&(q=r.RGBA32UI),X===r.BYTE&&(q=r.RGBA8I),X===r.SHORT&&(q=r.RGBA16I),X===r.INT&&(q=r.RGBA32I)),y===r.RGB&&(X===r.UNSIGNED_SHORT&&xe&&(q=xe.RGB16_EXT),X===r.SHORT&&xe&&(q=xe.RGB16_SNORM_EXT),X===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),y===r.RGBA){const te=de?bl:it.getTransfer(re);X===r.FLOAT&&(q=r.RGBA32F),X===r.HALF_FLOAT&&(q=r.RGBA16F),X===r.UNSIGNED_BYTE&&(q=te===xt?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT&&xe&&(q=xe.RGBA16_EXT),X===r.SHORT&&xe&&(q=xe.RGBA16_SNORM_EXT),X===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function g(C,y){let X;return C?y===null||y===ki||y===ea?X=r.DEPTH24_STENCIL8:y===Ui?X=r.DEPTH32F_STENCIL8:y===ja&&(X=r.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ki||y===ea?X=r.DEPTH_COMPONENT24:y===Ui?X=r.DEPTH_COMPONENT32F:y===ja&&(X=r.DEPTH_COMPONENT16),X}function M(C,y){return w(C)===!0||C.isFramebufferTexture&&C.minFilter!==hn&&C.minFilter!==On?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function L(C){const y=new WeakRef(C);n.get(C).__ref=y,_.add(y),v.register(C,y,y)}function R(C){const y=n.get(C).__ref;y!==void 0&&(_.delete(y),v.unregister(y))}function N(C){k(C.target)}function I(C){D(C.target)}function k(C){C.removeEventListener("dispose",N),R(C),Y(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&d.delete(C)}function D(C){C.removeEventListener("dispose",I),R(C),G(C)}function z(){for(const C of _){const y=C.deref();y!==void 0&&(y.isRenderTarget===!0?D(y):k(y))}_.clear(),d.clear()}function Y(C){const y=n.get(C);if(y.__webglInit===void 0)return;const X=C.source,oe=h.get(X);if(oe){const re=oe[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&P(C),Object.keys(oe).length===0&&h.delete(X)}n.remove(C)}function P(C){const y=n.get(C);r.deleteTexture(y.__webglTexture);const X=C.source,oe=h.get(X);delete oe[y.__cacheKey],a.memory.textures--}function G(C){const y=n.get(C);y.__depthDisposeCallback&&y.__depthDisposeCallback();const X=C.depthTexture;if(X&&X.renderTarget===C&&k(X),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(y.__webglFramebuffer[re]))for(let de=0;de<y.__webglFramebuffer[re].length;de++)r.deleteFramebuffer(y.__webglFramebuffer[re][de]);else r.deleteFramebuffer(y.__webglFramebuffer[re]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[re])}else{if(Array.isArray(y.__webglFramebuffer))for(let re=0;re<y.__webglFramebuffer.length;re++)r.deleteFramebuffer(y.__webglFramebuffer[re]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let re=0;re<y.__webglColorRenderbuffer.length;re++)y.__webglColorRenderbuffer[re]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[re]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const oe=C.textures;for(let re=0,de=oe.length;re<de;re++){const xe=n.get(oe[re]);xe.__webglTexture&&(r.deleteTexture(xe.__webglTexture),a.memory.textures--),n.remove(oe[re])}n.remove(C)}let O=0;function A(){O=0}function H(){return O}function J(C){O=C}function ce(){const C=O;return C>=i.maxTextures&&ze("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),O+=1,C}function V(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.mipmapsAutoUpdate),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function ae(C,y){const X=n.get(C);if(C.isVideoTexture&&ht(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){const oe=C.image;if(oe===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{at(X,C,y);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+y)}function ve(C,y){const X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){at(X,C,y);return}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+y)}function Ee(C,y){const X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){at(X,C,y);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+y)}function he(C,y){const X=n.get(C);if(C.version>0&&X.__version!==C.version){Q(X,C,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+y)}const Ce={[_u]:r.REPEAT,[tr]:r.CLAMP_TO_EDGE,[gu]:r.MIRRORED_REPEAT},ut={[hn]:r.NEAREST,[b0]:r.NEAREST_MIPMAP_NEAREST,[Eo]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[ac]:r.LINEAR_MIPMAP_NEAREST,[br]:r.LINEAR_MIPMAP_LINEAR},Ae={[C0]:r.NEVER,[Nm]:r.ALWAYS,[P0]:r.LESS,[Dm]:r.LEQUAL,[L0]:r.EQUAL,[Im]:r.GEQUAL,[D0]:r.GREATER,[I0]:r.NOTEQUAL};function ke(C,y){if(y.type===Ui&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===On||y.magFilter===ac||y.magFilter===Eo||y.magFilter===br||y.minFilter===On||y.minFilter===ac||y.minFilter===Eo||y.minFilter===br)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Ce[y.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Ce[y.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Ce[y.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ut[y.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ut[y.minFilter]),y.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Ae[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===hn||y.minFilter!==Eo&&y.minFilter!==br||y.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ie(C,y){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",N),L(y));const oe=y.source;let re=h.get(oe);re===void 0&&(re={},h.set(oe,re));const de=V(y);if(de!==C.__cacheKey){re[de]===void 0&&(re[de]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),re[de].usedTimes++;const xe=re[C.__cacheKey];xe!==void 0&&(re[C.__cacheKey].usedTimes--,xe.usedTimes===0&&P(y)),C.__cacheKey=de,C.__webglTexture=re[de].texture}return X}function Oe(C,y,X){return Math.floor(Math.floor(C/X)/y)}function ft(C,y,X,oe){const de=C.updateRanges;if(de.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,X,oe,y.data);else{de.sort((U,ee)=>U.start-ee.start);let xe=0;for(let U=1;U<de.length;U++){const ee=de[xe],j=de[U],me=ee.start+ee.count,ue=Oe(j.start,y.width,4),_e=Oe(ee.start,y.width,4);j.start<=me+1&&ue===_e&&Oe(j.start+j.count-1,y.width,4)===ue?ee.count=Math.max(ee.count,j.start+j.count-ee.start):(++xe,de[xe]=j)}de.length=xe+1;const q=t.getParameter(r.UNPACK_ROW_LENGTH),te=t.getParameter(r.UNPACK_SKIP_PIXELS),fe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let U=0,ee=de.length;U<ee;U++){const j=de[U],me=Math.floor(j.start/4),ue=Math.ceil(j.count/4),_e=me%y.width,le=Math.floor(me/y.width),ge=ue,se=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(r.UNPACK_SKIP_ROWS,le),t.texSubImage2D(r.TEXTURE_2D,0,_e,le,ge,se,X,oe,y.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,q),t.pixelStorei(r.UNPACK_SKIP_PIXELS,te),t.pixelStorei(r.UNPACK_SKIP_ROWS,fe)}}function at(C,y,X){let oe=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(oe=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(oe=r.TEXTURE_3D);const re=Ie(C,y),de=y.source;t.bindTexture(oe,C.__webglTexture,r.TEXTURE0+X);const xe=n.get(de);if(de.version!==xe.__version||re===!0){if(t.activeTexture(r.TEXTURE0+X),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const se=it.getPrimaries(it.workingColorSpace),ne=y.colorSpace===vr?null:it.getPrimaries(y.colorSpace),Se=y.colorSpace===vr||se===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let te=S(y.image,!1,i.maxTextureSize);te=Ne(y,te);const fe=s.convert(y.format,y.colorSpace),U=s.convert(y.type);let ee=b(y.internalFormat,fe,U,y.normalized,y.colorSpace,y.isVideoTexture);ke(oe,y);let j;const me=y.mipmaps,ue=y.isVideoTexture!==!0,_e=xe.__version===void 0||re===!0,le=de.dataReady,ge=M(y,te);if(y.isDepthTexture)ee=g(y.format===wr,y.type),_e&&(ue?t.texStorage2D(r.TEXTURE_2D,1,ee,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,ee,te.width,te.height,0,fe,U,null));else if(y.isDataTexture)if(me.length>0){ue&&_e&&t.texStorage2D(r.TEXTURE_2D,ge,ee,me[0].width,me[0].height);for(let se=0,ne=me.length;se<ne;se++)j=me[se],ue?le&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,j.width,j.height,fe,U,j.data):t.texImage2D(r.TEXTURE_2D,se,ee,j.width,j.height,0,fe,U,j.data);y.generateMipmaps=!1}else ue?(_e&&t.texStorage2D(r.TEXTURE_2D,ge,ee,te.width,te.height),le&&ft(y,te,fe,U)):t.texImage2D(r.TEXTURE_2D,0,ee,te.width,te.height,0,fe,U,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ue&&_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,ee,me[0].width,me[0].height,te.depth);for(let se=0,ne=me.length;se<ne;se++)if(j=me[se],y.format!==Fi)if(fe!==null)if(ue){if(le)if(y.layerUpdates.size>0){const Se=xd(j.width,j.height,y.format,y.type);for(const ie of y.layerUpdates){const be=j.data.subarray(ie*Se/j.data.BYTES_PER_ELEMENT,(ie+1)*Se/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,ie,j.width,j.height,1,fe,be)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,j.width,j.height,te.depth,fe,j.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,ee,j.width,j.height,te.depth,0,j.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?le&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,j.width,j.height,te.depth,fe,U,j.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,ee,j.width,j.height,te.depth,0,fe,U,j.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ue&&_e&&t.texStorage2D(r.TEXTURE_2D,ge,ee,me[0].width,me[0].height);for(let se=0,ne=me.length;se<ne;se++)j=me[se],y.format!==Fi?fe!==null?ue?le&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,j.width,j.height,fe,j.data):t.compressedTexImage2D(r.TEXTURE_2D,se,ee,j.width,j.height,0,j.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?le&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,j.width,j.height,fe,U,j.data):t.texImage2D(r.TEXTURE_2D,se,ee,j.width,j.height,0,fe,U,j.data)}else if(y.isDataArrayTexture)if(ue){if(_e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,ee,te.width,te.height,te.depth),le)if(y.layerUpdates.size>0){const se=xd(te.width,te.height,y.format,y.type);for(const ne of y.layerUpdates){const Se=te.data.subarray(ne*se/te.data.BYTES_PER_ELEMENT,(ne+1)*se/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ne,te.width,te.height,1,fe,U,Se)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,U,te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ee,te.width,te.height,te.depth,0,fe,U,te.data);else if(y.isData3DTexture)ue?(_e&&t.texStorage3D(r.TEXTURE_3D,ge,ee,te.width,te.height,te.depth),le&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,U,te.data)):t.texImage3D(r.TEXTURE_3D,0,ee,te.width,te.height,te.depth,0,fe,U,te.data);else if(y.isFramebufferTexture){if(_e)if(ue)t.texStorage2D(r.TEXTURE_2D,ge,ee,te.width,te.height);else{let se=te.width,ne=te.height;for(let Se=0;Se<ge;Se++)t.texImage2D(r.TEXTURE_2D,Se,ee,se,ne,0,fe,U,null),se>>=1,ne>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){const se=r.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),te.parentNode!==se){se.appendChild(te),d.add(y),se.onpaint=ne=>{const Se=ne.changedElements;for(const ie of d)Se.includes(ie.image)&&(ie.needsUpdate=!0)},se.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,te);else{const Se=r.RGBA,ie=r.RGBA,be=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Se,ie,be,te)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(me.length>0){if(ue&&_e){const se=Be(me[0]);t.texStorage2D(r.TEXTURE_2D,ge,ee,se.width,se.height)}for(let se=0,ne=me.length;se<ne;se++)j=me[se],ue?le&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,fe,U,j):t.texImage2D(r.TEXTURE_2D,se,ee,fe,U,j);y.generateMipmaps=!1}else if(ue){if(_e){const se=Be(te);t.texStorage2D(r.TEXTURE_2D,ge,ee,se.width,se.height)}le&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,U,te)}else t.texImage2D(r.TEXTURE_2D,0,ee,fe,U,te);w(y)&&y.mipmapsAutoUpdate===!0&&x(oe),xe.__version=de.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Q(C,y,X){if(y.image.length!==6)return;const oe=Ie(C,y),re=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+X);const de=n.get(re);if(re.version!==de.__version||oe===!0){t.activeTexture(r.TEXTURE0+X);const xe=it.getPrimaries(it.workingColorSpace),q=y.colorSpace===vr?null:it.getPrimaries(y.colorSpace),te=y.colorSpace===vr||xe===q?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const fe=y.isCompressedTexture||y.image[0].isCompressedTexture,U=y.image[0]&&y.image[0].isDataTexture,ee=[];for(let ie=0;ie<6;ie++)!fe&&!U?ee[ie]=S(y.image[ie],!0,i.maxCubemapSize):ee[ie]=U?y.image[ie].image:y.image[ie],ee[ie]=Ne(y,ee[ie]);const j=ee[0],me=s.convert(y.format,y.colorSpace),ue=s.convert(y.type);let _e=b(y.internalFormat,me,ue,y.normalized,y.colorSpace);const le=y.isVideoTexture!==!0,ge=de.__version===void 0||oe===!0,se=re.dataReady;let ne=M(y,j);ke(r.TEXTURE_CUBE_MAP,y);let Se;if(y.isDepthTexture){if(_e=g(y.format===wr,y.type),ge)if(le)t.texStorage2D(r.TEXTURE_CUBE_MAP,1,_e,j.width,j.height);else for(let ie=0;ie<6;ie++)t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,_e,j.width,j.height,0,me,ue,null)}else if(fe){le&&ge&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,_e,j.width,j.height);for(let ie=0;ie<6;ie++){Se=ee[ie].mipmaps;for(let be=0;be<Se.length;be++){const Qe=Se[be];y.format!==Fi?me!==null?le?se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,0,0,Qe.width,Qe.height,me,Qe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,_e,Qe.width,Qe.height,0,Qe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,0,0,Qe.width,Qe.height,me,ue,Qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be,_e,Qe.width,Qe.height,0,me,ue,Qe.data)}}}else{if(Se=y.mipmaps,le&&ge){Se.length>0&&ne++;const ie=Be(ee[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,_e,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(U){le?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ee[ie].width,ee[ie].height,me,ue,ee[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,_e,ee[ie].width,ee[ie].height,0,me,ue,ee[ie].data);for(let be=0;be<Se.length;be++){const Ve=Se[be].image[ie].image;le?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,0,0,Ve.width,Ve.height,me,ue,Ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,_e,Ve.width,Ve.height,0,me,ue,Ve.data)}}else{le?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,me,ue,ee[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,_e,me,ue,ee[ie]);for(let be=0;be<Se.length;be++){const Qe=Se[be];le?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,0,0,me,ue,Qe.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,be+1,_e,me,ue,Qe.image[ie])}}}w(y)&&y.mipmapsAutoUpdate===!0&&x(r.TEXTURE_CUBE_MAP),de.__version=re.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Je(C,y,X,oe,re,de){const xe=s.convert(X.format,X.colorSpace),q=s.convert(X.type),te=b(X.internalFormat,xe,q,X.normalized,X.colorSpace),fe=n.get(y),U=n.get(X);if(U.__renderTarget=y,!fe.__hasExternalTextures){const ee=Math.max(1,y.width>>de),j=Math.max(1,y.height>>de);re===r.TEXTURE_3D||re===r.TEXTURE_2D_ARRAY?t.texImage3D(re,de,te,ee,j,y.depth,0,xe,q,null):t.texImage2D(re,de,te,ee,j,0,xe,q,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),pe(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,oe,re,U.__webglTexture,0,Ge(y)):(re===r.TEXTURE_2D||re>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,oe,re,U.__webglTexture,de),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(C,y,X){if(r.bindRenderbuffer(r.RENDERBUFFER,C),y.depthBuffer){const oe=y.depthTexture,re=oe&&oe.isDepthTexture?oe.type:null,de=g(y.stencilBuffer,re),xe=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pe(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ge(y),de,y.width,y.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge(y),de,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,de,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,C)}else{const oe=y.textures;for(let re=0;re<oe.length;re++){const de=oe[re],xe=s.convert(de.format,de.colorSpace),q=s.convert(de.type),te=b(de.internalFormat,xe,q,de.normalized,de.colorSpace);pe(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ge(y),te,y.width,y.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge(y),te,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,te,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function St(C,y,X){const oe=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const re=n.get(y.depthTexture);re.__renderTarget=y;const de=oe?y.depthTexture.image[0]:y.depthTexture.image;(!re.__webglTexture||de.width!==y.width||de.height!==y.height)&&(de.width=y.width,de.height=y.height,y.depthTexture.needsUpdate=!0),oe?he(y.depthTexture,0):ae(y.depthTexture,0);const xe=re.__webglTexture,q=Ge(y),te=oe?r.TEXTURE_CUBE_MAP_POSITIVE_X+X:r.TEXTURE_2D,fe=y.depthTexture.format===wr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===Nr)pe(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,te,xe,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,fe,te,xe,0);else if(y.depthTexture.format===wr)pe(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,fe,te,xe,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,fe,te,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(C){const y=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const oe=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),oe){const re=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,oe.removeEventListener("dispose",re)};oe.addEventListener("dispose",re),y.__depthDisposeCallback=re}y.__boundDepthTexture=oe}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(X)for(let oe=0;oe<6;oe++)St(y.__webglFramebuffer[oe],C,oe);else C.texture.mipmaps.length>0?St(y.__webglFramebuffer[0],C,0):St(y.__webglFramebuffer,C,0);else if(X){y.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[oe]),y.__webglDepthbuffer[oe]===void 0)y.__webglDepthbuffer[oe]=r.createRenderbuffer(),Vt(y.__webglDepthbuffer[oe],C,!1);else{const re=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer[oe];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,de)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Vt(y.__webglDepthbuffer,C,!1);else{const re=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,re,r.RENDERBUFFER,de)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(C,y,X){const oe=n.get(C);y!==void 0&&Je(oe.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&nt(C)}function kt(C){const y=C.texture,X=n.get(C),oe=n.get(y);C.addEventListener("dispose",I),L(C);const re=C.textures,de=C.isWebGLCubeRenderTarget===!0,xe=re.length>1;if(xe||(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=y.version,a.memory.textures++),de){X.__webglFramebuffer=[];for(let q=0;q<6;q++)if(y.mipmaps.length>0){X.__webglFramebuffer[q]=[];for(let te=0;te<y.mipmaps.length;te++)X.__webglFramebuffer[q][te]=r.createFramebuffer()}else X.__webglFramebuffer[q]=r.createFramebuffer()}else{if(y.mipmaps.length>0){X.__webglFramebuffer=[];for(let q=0;q<y.mipmaps.length;q++)X.__webglFramebuffer[q]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(xe)for(let q=0,te=re.length;q<te;q++){const fe=n.get(re[q]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&pe(C)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let q=0;q<re.length;q++){const te=re[q];X.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[q]);const fe=s.convert(te.format,te.colorSpace),U=s.convert(te.type),ee=b(te.internalFormat,fe,U,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),j=Ge(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,j,ee,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+q,r.RENDERBUFFER,X.__webglColorRenderbuffer[q])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Vt(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,oe.__webglTexture),ke(r.TEXTURE_CUBE_MAP,y);for(let q=0;q<6;q++)if(y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)Je(X.__webglFramebuffer[q][te],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,te);else Je(X.__webglFramebuffer[q],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);w(y)?x(r.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(xe){for(let q=0,te=re.length;q<te;q++){const fe=re[q],U=n.get(fe);let ee=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,U.__webglTexture),ke(ee,fe),Je(X.__webglFramebuffer,C,fe,r.COLOR_ATTACHMENT0+q,ee,0),w(fe)&&x(ee)}t.unbindTexture()}else{let q=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(q,oe.__webglTexture),ke(q,y),y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)Je(X.__webglFramebuffer[te],C,y,r.COLOR_ATTACHMENT0,q,te);else Je(X.__webglFramebuffer,C,y,r.COLOR_ATTACHMENT0,q,0);w(y)?x(q):y.mipmaps.length>0&&r.texParameteri(q,r.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&nt(C)}function B(C){const y=C.textures;for(let X=0,oe=y.length;X<oe;X++){const re=y[X];if(w(re)&&re.mipmapsAutoUpdate===!0){const de=E(C),xe=n.get(re).__webglTexture;t.bindTexture(de,xe),x(de),t.unbindTexture()}}}const pt=[];function ot(C){if(C.samples>0){if(pe(C)===!1){const y=C.textures,X=C.width,oe=C.height;let re=r.COLOR_BUFFER_BIT;const de=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(C),q=y.length>1;if(q)for(let fe=0;fe<y.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=r.STENCIL_BUFFER_BIT)),q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const U=n.get(y[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,U,0)}r.blitFramebuffer(0,0,X,oe,0,0,X,oe,re,r.NEAREST),l===!0&&(pt.length=0,pt.push(r.COLOR_ATTACHMENT0+fe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&pt.push(de),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,pt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),q)for(let fe=0;fe<y.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const U=n.get(y[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,U,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function Ge(C){return Math.min(i.maxSamples,C.samples)}function pe(C){const y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ht(C){const y=a.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function Ne(C,y){const X=C.colorSpace,oe=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Tl&&X!==vr&&(it.getTransfer(X)===xt?(oe!==Fi||re!==di)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",X)),y}function Be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=ce,this.resetTextureUnits=A,this.getTextureUnits=H,this.setTextureUnits=J,this.setTexture2D=ae,this.setTexture2DArray=ve,this.setTexture3D=Ee,this.setTextureCube=he,this.rebindTextures=Ut,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=pe,this.dispose=z}function aE(r,e){function t(n,i=vr){let s;const a=it.getTransfer(i);if(n===di)return r.UNSIGNED_BYTE;if(n===Cf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Pf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Am)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Rm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===bm)return r.BYTE;if(n===wm)return r.SHORT;if(n===ja)return r.UNSIGNED_SHORT;if(n===Rf)return r.INT;if(n===ki)return r.UNSIGNED_INT;if(n===Ui)return r.FLOAT;if(n===Gi)return r.HALF_FLOAT;if(n===Cm)return r.ALPHA;if(n===Pm)return r.RGB;if(n===Fi)return r.RGBA;if(n===Nr)return r.DEPTH_COMPONENT;if(n===wr)return r.DEPTH_STENCIL;if(n===Lm)return r.RED;if(n===Lf)return r.RED_INTEGER;if(n===ls)return r.RG;if(n===Df)return r.RG_INTEGER;if(n===If)return r.RGBA_INTEGER;if(n===rl||n===sl||n===al||n===ol)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ol)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vu||n===xu||n===Su||n===Mu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===vu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Su)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yu||n===Eu||n===Tu||n===bu||n===wu||n===yl||n===Au)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yu||n===Eu)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Tu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===bu)return s.COMPRESSED_R11_EAC;if(n===wu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===yl)return s.COMPRESSED_RG11_EAC;if(n===Au)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ru||n===Cu||n===Pu||n===Lu||n===Du||n===Iu||n===Nu||n===Uu||n===Fu||n===Ou||n===Bu||n===zu||n===ku||n===Gu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ru)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Du)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Iu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Nu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ou)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ku)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gu)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hu||n===Vu||n===Wu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Hu)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xu||n===Yu||n===El||n===qu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Yu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===El)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ea?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const oE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Hm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ur({vertexShader:oE,fragmentShader:lE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lr(new kl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uE extends fs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const v=typeof XRWebGLBinding<"u",p=new cE,m={},S=t.getContextAttributes();let w=null,x=null;const E=[],b=[],g=new tt;let M=null,L=null;const R=new yi;R.viewport=new Bt;const N=new yi;N.viewport=new Bt;const I=[R,N],k=new Mv;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ae=E[V];return ae===void 0&&(ae=new mc,E[V]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(V){let ae=E[V];return ae===void 0&&(ae=new mc,E[V]=ae),ae.getGripSpace()},this.getHand=function(V){let ae=E[V];return ae===void 0&&(ae=new mc,E[V]=ae),ae.getHandSpace()};function Y(V){const ae=b.indexOf(V.inputSource);if(ae===-1)return;const ve=E[ae];ve!==void 0&&(ve.update(V.inputSource,V.frame,c||a),ve.dispatchEvent({type:V.type,data:V.inputSource}))}function P(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",G);for(let V=0;V<E.length;V++){const ae=b[V];ae!==null&&(b[V]=null,E[V].disconnect(ae))}D=null,z=null,p.reset();for(const V in m)delete m[V];if(e.setRenderTarget(w),h=null,f=null,d=null,i=null,x=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(g.width,g.height,!1),L!==null){const V=L.camera;V.fov=L.fov,V.zoom=L.zoom,V.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",P),i.addEventListener("inputsourceschange",G),S.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(g),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ee=null,he=null;S.depth&&(he=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=S.stencil?wr:Nr,Ee=S.stencil?ea:ki);const Ce={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ce),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Bi(f.textureWidth,f.textureHeight,{format:Fi,type:di,depthTexture:new ta(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new Bi(h.framebufferWidth,h.framebufferHeight,{format:Fi,type:di,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function G(V){for(let ae=0;ae<V.removed.length;ae++){const ve=V.removed[ae],Ee=b.indexOf(ve);Ee>=0&&(b[Ee]=null,E[Ee].disconnect(ve))}for(let ae=0;ae<V.added.length;ae++){const ve=V.added[ae];let Ee=b.indexOf(ve);if(Ee===-1){for(let Ce=0;Ce<E.length;Ce++)if(Ce>=b.length){b.push(ve),Ee=Ce;break}else if(b[Ce]===null){b[Ce]=ve,Ee=Ce;break}if(Ee===-1)break}const he=E[Ee];he&&he.connect(ve)}}function O(V,ae){ae===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ae.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let ae=V.near,ve=V.far;p.texture!==null&&(p.depthNear>0&&(ae=p.depthNear),p.depthFar>0&&(ve=p.depthFar)),k.near=N.near=R.near=ae,k.far=N.far=R.far=ve,(D!==k.near||z!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,z=k.far),k.layers.mask=V.layers.mask|6,R.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;const Ee=V.parent,he=k.cameras;O(k,Ee);for(let Ce=0;Ce<he.length;Ce++)O(he[Ce],Ee);k.projectionMatrix.copy(R.projectionMatrix),k.projectionMatrixInverse.copy(R.projectionMatrixInverse),L===null&&V.isPerspectiveCamera&&(L={camera:V,fov:V.fov,zoom:V.zoom}),A(V,k,Ee)};function A(V,ae,ve){ve===null?V.matrix.copy(ae.matrixWorld):(V.matrix.copy(ve.matrixWorld),V.matrix.invert(),V.matrix.multiply(ae.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ae.projectionMatrix),V.projectionMatrixInverse.copy(ae.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=$u*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(V){return m[V]};let H=null;function J(V,ae){if(u=ae.getViewerPose(c||a),_=ae,u!==null){const ve=u.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let Ee=!1;ve.length!==k.cameras.length&&(k.cameras.length=0,Ee=!0);for(let Ae=0;Ae<ve.length;Ae++){const ke=ve[Ae];let Ie=null;if(h!==null)Ie=h.getViewport(ke);else{const ft=d.getViewSubImage(f,ke);Ie=ft.viewport,Ae===0&&(e.setRenderTargetTextures(x,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(x))}let Oe=I[Ae];Oe===void 0&&(Oe=new yi,Oe.layers.enable(Ae),Oe.viewport=new Bt,I[Ae]=Oe),Oe.matrix.fromArray(ke.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(ke.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Ae===0&&(k.matrix.copy(Oe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ee===!0&&k.cameras.push(Oe)}const he=i.enabledFeatures;if(he&&he.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const Ae=d.getDepthInformation(ve[0]);Ae&&Ae.isValid&&Ae.texture&&p.init(Ae,i.renderState)}if(he&&he.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let Ae=0;Ae<ve.length;Ae++){const ke=ve[Ae].camera;if(ke){let Ie=m[ke];Ie||(Ie=new Hm,m[ke]=Ie);const Oe=d.getCameraImage(ke);Ie.sourceTexture=Oe}}}}for(let ve=0;ve<E.length;ve++){const Ee=b[ve],he=E[ve];Ee!==null&&he!==void 0&&he.update(Ee,ae,c||a)}H&&H(V,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),_=null}const ce=new Xm;ce.setAnimationLoop(J),this.setAnimationLoop=function(V){H=V},this.dispose=function(){}}}const fE=new Pt,t_=new He;t_.set(-1,0,0,0,1,0,0,0,1);function hE(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Vm(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,w,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,x)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),v(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Hn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Hn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),w=S.envMap,x=S.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(fE.makeRotationFromEuler(x)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(t_),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,S){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Hn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dE(r,e,t,n){let i={},s={};function a(S,w){const x=w.program;n.uniformBlockBinding(S,x,i[S.id])}function o(S,w){let x=i[S.id];x===void 0&&(_(S),x=l(S),i[S.id]=x,S.addEventListener("dispose",p));const E=w.program;n.updateUBOMapping(S,E);const b=e.render.frame;s[S.id]!==b&&(c(S),s[S.id]=b)}function l(S){const w=r.createBuffer(),x=S.__size,E=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,x,E),r.bindBuffer(r.UNIFORM_BUFFER,null),w}function c(S){const w=i[S.id],x=S.uniforms,E=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let b=0,g=x.length;b<g;b++){const M=x[b];if(Array.isArray(M))for(let L=0,R=M.length;L<R;L++)u(M[L],b,L,E);else u(M,b,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(S,w,x,E){if(f(S,w,x,E)===!0){const b=S.__offset,g=S.value;if(Array.isArray(g)){let M=0;for(let L=0;L<g.length;L++){const R=g[L],N=v(R,!0);d(R,S.__data,M),M+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,S.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,b,S.__data)}}function d(S,w,x){typeof S=="number"||typeof S=="boolean"?w[x]=S:S.isMatrix3?(w[x]=S.elements[0],w[x+1]=S.elements[1],w[x+2]=S.elements[2],w[x+3]=0,w[x+4]=S.elements[3],w[x+5]=S.elements[4],w[x+6]=S.elements[5],w[x+7]=0,w[x+8]=S.elements[6],w[x+9]=S.elements[7],w[x+10]=S.elements[8],w[x+11]=0):ArrayBuffer.isView(S)?w.set(S.subarray(0,w.length-x),x):S.toArray(w,x)}function f(S,w,x,E){const b=S.value,g=w+"_"+x;if(Array.isArray(b)){E[g]===void 0&&(E[g]=[]);const M=E[g];let L=!1;for(let R=0;R<b.length;R++)h(b[R],M,R)===!0&&(L=!0);return L}return h(b,E,g)}function h(S,w,x){if(w[x]===void 0)return typeof S=="number"||typeof S=="boolean"?w[x]=S:ArrayBuffer.isView(S)?w[x]=S.slice():w[x]=S.clone(),!0;{const E=w[x];if(typeof S=="number"||typeof S=="boolean"){if(E!==S)return w[x]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(E.equals(S)===!1)return E.copy(S),!0}}return!1}function _(S){const w=S.uniforms;let x=0;const E=16;for(let g=0,M=w.length;g<M;g++){const L=Array.isArray(w[g])?w[g]:[w[g]];for(let R=0,N=L.length;R<N;R++){const I=L[R],k=Array.isArray(I.value)?I.value:[I.value],D=Array.isArray(w[g])||Array.isArray(I.value);let z=x;for(let P=0,G=k.length;P<G;P++){const O=k[P],A=v(O,D),H=x%E,J=H%A.boundary,ce=H+J;x+=J,ce!==0&&E-ce<A.storage&&(x+=E-ce),P===0&&(z=x),x+=A.storage}const Y=I.type==="int"?Int32Array:I.type==="uint"?Uint32Array:Float32Array;I.__data=new Y((x-z)/Float32Array.BYTES_PER_ELEMENT),I.__offset=z}}const b=x%E;return b>0&&(x+=E-b),S.__size=x,S.__cache={},this}function v(S,w){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=16,x.storage=48):S.isMatrix4?(x.boundary=16,x.storage=64):S.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(x.boundary=16,x.storage=S.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",S),w===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function p(S){const w=S.target;w.removeEventListener("dispose",p),r.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function m(){for(const S in i)r.deleteBuffer(i[S]);i={},s={}}return{bind:a,update:o,dispose:m}}const pE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ai=null;function mE(){return Ai===null&&(Ai=new uv(pE,16,16,ls,Gi),Ai.name="DFG_LUT",Ai.minFilter=On,Ai.magFilter=On,Ai.wrapS=tr,Ai.wrapT=tr,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}class _E{constructor(e={}){const{canvas:t=F0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=di}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const v=h,p=new Set([If,Df,Lf]),m=new Set([di,ki,ja,ea,Cf,Pf]),S=new Uint32Array(4),w=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]};let E=null,b=null;const g=[],M=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let N=!1,I=null,k=null,D=null,z=null;this._outputColorSpace=ui;let Y=0,P=0,G=null,O=-1,A=null;const H=new Bt,J=new Bt;let ce=null;const V=new ct(0);let ae=0,ve=t.width,Ee=t.height,he=1,Ce=null,ut=null;const Ae=new Bt(0,0,ve,Ee),ke=new Bt(0,0,ve,Ee);let Ie=!1;const Oe=new Rl,ft=new Bf;let at=!1,Q=!1;const Je=new Pt,Vt=new K,St=new Bt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function kt(){return G===null?he:1}let B=n;function pt(T,F){return t.getContext(T,F)}let ot,Ge,pe,ht,Ne,Be,C,y,X,oe,re,de,xe,q,te,fe,U,ee,j,me,ue,_e,le;try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Af}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",ie,!1),B===null){const F="webgl2";if(B=pt(F,T),B===null)throw pt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ge()}catch(T){throw t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),dt("WebGLRenderer: "+T.message),T}function ge(){ot=new xM(B),ot.init(),ue=new aE(B,ot),Ge=new lM(B,ot,e,ue),pe=new rE(B,ot),Ge.reversedDepthBuffer&&f&&pe.buffers.depth.setReversed(!0),k=B.createFramebuffer(),D=B.createFramebuffer(),z=B.createFramebuffer(),ht=new yM(B),Ne=new Wy,Be=new sE(B,ot,pe,Ne,Ge,ue,ht),C=new vM(R),y=new Tv(B),_e=new aM(B,y),X=new SM(B,y,ht,_e),oe=new TM(B,X,y,_e,ht),ee=new EM(B,Ge,Be),te=new cM(Ne),re=new Vy(R,C,ot,Ge,_e,te),de=new hE(R,Ne),xe=new Yy,q=new Qy(ot),U=new sM(R,C,pe,oe,_,l),fe=new iE(R,oe,Ge),le=new dE(B,ht,Ge,pe),j=new oM(B,ot,ht),me=new MM(B,ot,ht),ht.programs=re.programs,R.capabilities=Ge,R.extensions=ot,R.properties=Ne,R.renderLists=xe,R.shadowMap=fe,R.state=pe,R.info=ht}v!==di&&(L=new wM(v,t.width,t.height,o,i,s));const se=new uE(R,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=ot.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ot.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(T){T!==void 0&&(he=T,this.setSize(ve,Ee,!1))},this.getSize=function(T){return T.set(ve,Ee)},this.setSize=function(T,F,Z=!0){if(se.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=T,Ee=F,t.width=Math.floor(T*he),t.height=Math.floor(F*he),Z===!0&&(t.style.width=T+"px",t.style.height=F+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(ve*he,Ee*he).floor()},this.setDrawingBufferSize=function(T,F,Z){ve=T,Ee=F,he=Z,t.width=Math.floor(T*Z),t.height=Math.floor(F*Z),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(v===di){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(H)},this.getViewport=function(T){return T.copy(Ae)},this.setViewport=function(T,F,Z,W){T.isVector4?Ae.set(T.x,T.y,T.z,T.w):Ae.set(T,F,Z,W),pe.viewport(H.copy(Ae).multiplyScalar(kt()).round())},this.getScissor=function(T){return T.copy(ke)},this.setScissor=function(T,F,Z,W){T.isVector4?ke.set(T.x,T.y,T.z,T.w):ke.set(T,F,Z,W),pe.scissor(J.copy(ke).multiplyScalar(kt()).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(T){pe.setScissorTest(Ie=T)},this.setOpaqueSort=function(T){Ce=T},this.setTransparentSort=function(T){ut=T},this.getClearColor=function(T){return T.copy(U.getClearColor())},this.setClearColor=function(){U.setClearColor(...arguments)},this.getClearAlpha=function(){return U.getClearAlpha()},this.setClearAlpha=function(){U.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,Z=!0){let W=0;if(T){let $=!1;if(G!==null){const ye=G.texture.format;$=p.has(ye)}if($){const ye=G.texture.type,Pe=m.has(ye),Me=U.getClearColor(),we=U.getClearAlpha(),Ue=Me.r,We=Me.g,je=Me.b;Pe?(S[0]=Ue,S[1]=We,S[2]=je,S[3]=we,B.clearBufferuiv(B.COLOR,0,S)):(w[0]=Ue,w[1]=We,w[2]=je,w[3]=we,B.clearBufferiv(B.COLOR,0,w))}else W|=B.COLOR_BUFFER_BIT}F&&(W|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),I=T},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),U.dispose(),xe.dispose(),q.dispose(),Be.dispose(),Ne.dispose(),C.dispose(),oe.dispose(),X.dispose(),_e.dispose(),le.dispose(),re.dispose(),se.dispose(),se.removeEventListener("sessionstart",Mt),se.removeEventListener("sessionend",_t),Zt.stop()};function ne(T){T.preventDefault(),qh("WebGLRenderer: Context Lost."),N=!0}function Se(){qh("WebGLRenderer: Context Restored."),N=!1;const T=ht.autoReset,F=fe.enabled,Z=fe.autoUpdate,W=fe.needsUpdate,$=fe.type;ge(),ht.autoReset=T,fe.enabled=F,fe.autoUpdate=Z,fe.needsUpdate=W,fe.type=$}function ie(T){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function be(T){const F=T.target;F.removeEventListener("dispose",be),Qe(F)}function Qe(T){Ve(T),Ne.remove(T)}function Ve(T){const F=Ne.get(T).programs;F!==void 0&&(F.forEach(function(Z){re.releaseProgram(Z)}),T.isShaderMaterial&&re.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,Z,W,$,ye){F===null&&(F=nt);const Pe=$.isMesh&&$.matrixWorld.determinantAffine()<0,Me=oi(T,F,Z,W,$);pe.setMaterial(W,Pe);let we=Z.index,Ue=1;if(W.wireframe===!0){if(we=X.getWireframeAttribute(Z),we===void 0)return;Ue=2}const We=Z.drawRange,je=Z.attributes.position;let Le=We.start*Ue,et=(We.start+We.count)*Ue;ye!==null&&(Le=Math.max(Le,ye.start*Ue),et=Math.min(et,(ye.start+ye.count)*Ue)),we!==null?(Le=Math.max(Le,0),et=Math.min(et,we.count)):je!=null&&(Le=Math.max(Le,0),et=Math.min(et,je.count));const Yt=et-Le;if(Yt<0||Yt===1/0)return;_e.setup($,W,Me,Z,we);let wt,Et=j;if(we!==null&&(wt=y.get(we),Et=me,Et.setIndex(wt)),$.isMesh)W.wireframe===!0?(pe.setLineWidth(W.wireframeLinewidth*kt()),Et.setMode(B.LINES)):Et.setMode(B.TRIANGLES);else if($.isLine){let gn=W.linewidth;gn===void 0&&(gn=1),pe.setLineWidth(gn*kt()),$.isLineSegments?Et.setMode(B.LINES):$.isLineLoop?Et.setMode(B.LINE_LOOP):Et.setMode(B.LINE_STRIP)}else $.isPoints?Et.setMode(B.POINTS):$.isSprite&&Et.setMode(B.TRIANGLES);if($.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Et.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const gn=$._multiDrawStarts,De=$._multiDrawCounts,wn=$._multiDrawCount,mt=we?y.get(we).bytesPerElement:1,Or=Ne.get(W).currentProgram.getUniforms();for(let vn=0;vn<wn;vn++)Or.setValue(B,"_gl_DrawID",vn),Et.render(gn[vn]/mt,De[vn])}else if($.isInstancedMesh)Et.renderInstances(Le,Yt,$.count);else if(Z.isInstancedBufferGeometry){const gn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,De=Math.min(Z.instanceCount,gn);Et.renderInstances(Le,Yt,De)}else Et.render(Le,Yt)};function At(T,F,Z,W){I!==null&&T.isNodeMaterial&&I.setObject(W,T),at===!0&&te.setState(T,Z,!1),T.transparent===!0&&T.side===Di&&T.forceSinglePass===!1?(T.side=Hn,T.needsUpdate=!0,qn(T,F,W),T.side=os,T.needsUpdate=!0,qn(T,F,W),T.side=Di):qn(T,F,W)}this.compile=function(T,F,Z=null){Z===null&&(Z=T),I!==null&&I.renderStart(T,F,Z),b=q.get(Z),b.init(F),M.push(b),Z.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),T!==Z&&T.traverseVisible(function($){$.isLight&&$.layers.test(F.layers)&&(b.pushLight($),$.castShadow&&b.pushShadow($))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),Q=this.localClippingEnabled,at=te.init(this.clippingPlanes,Q),at===!0&&te.setGlobalState(this.clippingPlanes,F),I!==null&&fe.render(b.state.shadowsArray,Z,F);const W=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const ye=$.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){const Me=ye[Pe];At(Me,Z,F,$),W.add(Me)}else At(ye,Z,F,$),W.add(ye)}),b=M.pop(),I!==null&&I.renderEnd(),W},this.compileAsync=function(T,F,Z=null){const W=this.compile(T,F,Z);return new Promise($=>{function ye(){if(W.forEach(function(Pe){const we=Ne.get(Pe).currentProgram;(we===void 0||we.isReady())&&W.delete(Pe)}),W.size===0){$(T);return}setTimeout(ye,10)}ot.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Wt=null;function Rt(T){Wt&&Wt(T)}function Mt(){Zt.stop()}function _t(){Zt.start()}const Zt=new Xm;Zt.setAnimationLoop(Rt),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(T){Wt=T,se.setAnimationLoop(T),T===null?Zt.stop():Zt.start()},se.addEventListener("sessionstart",Mt),se.addEventListener("sessionend",_t),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;I!==null&&I.renderStart(T,F);const Z=se.enabled===!0&&se.isPresenting===!0,W=L!==null&&(G===null||Z)&&L.begin(R,G);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(F),F=se.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,F,G),b=q.get(T,M.length),b.init(F),b.state.textureUnits=Be.getTextureUnits(),M.push(b),Je.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?ft.setFromArrayCamera(F):Oe.setFromProjectionMatrix(Je,Ti,F.reversedDepth),Q=this.localClippingEnabled,at=te.init(this.clippingPlanes,Q),E=xe.get(T,g.length),E.init(),g.push(E),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){const Pe=R.xr.getDepthSensingMesh();Pe!==null&&yt(Pe,F,-1/0,R.sortObjects)}yt(T,F,0,R.sortObjects),E.finish(),I!==null&&I.updateLights(b.state.lightsArray),R.sortObjects===!0&&E.sort(Ce,ut),Ut=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ut&&U.addToRenderList(E,T),this.info.autoReset===!0&&this.info.reset(),at===!0&&te.beginShadows();const $=b.state.shadowsArray;if(fe.render($,T,F),at===!0&&te.endShadows(),(W&&L.hasRenderPass())===!1){const Pe=E.opaque,Me=E.transmissive;if(b.setupLights(),F.isArrayCamera){const we=F.cameras;if(Me.length>0)for(let Ue=0,We=we.length;Ue<We;Ue++){const je=we[Ue];Yn(Pe,Me,T,je)}Ut&&U.render(T);for(let Ue=0,We=we.length;Ue<We;Ue++){const je=we[Ue];_n(E,T,je,je.viewport)}}else Me.length>0&&Yn(Pe,Me,T,F),Ut&&U.render(T),_n(E,T,F)}G!==null&&P===0&&(Be.updateMultisampleRenderTarget(G),Be.updateRenderTargetMipmap(G)),W&&L.end(R),T.isScene===!0&&T.onAfterRender(R,T,F),_e.resetDefaultState(),O=-1,A=null,M.pop(),M.length>0?(b=M[M.length-1],Be.setTextureUnits(b.state.textureUnits),at===!0&&te.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,g.pop(),g.length>0?E=g[g.length-1]:E=null,I!==null&&I.renderEnd()};function yt(T,F,Z,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){const Pe=F.isArrayCamera?ft:Oe;if(!T.frustumCulled||T.intersectsFrustum(Pe)){W&&St.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Je);const Me=oe.update(T),we=T.material;we.visible&&E.push(T,Me,we,Z,St.z,null,F)}}else if(T.isMesh||T.isLine||T.isPoints){const Pe=F.isArrayCamera?ft:Oe;if(!T.frustumCulled||T.intersectsFrustum(Pe)){const Me=oe.update(T),we=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),St.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),St.copy(Me.boundingSphere.center)),St.applyMatrix4(T.matrixWorld).applyMatrix4(Je)),Array.isArray(we)){const Ue=Me.groups;for(let We=0,je=Ue.length;We<je;We++){const Le=Ue[We],et=we[Le.materialIndex];et&&et.visible&&E.push(T,Me,et,Z,St.z,Le,F)}}else we.visible&&E.push(T,Me,we,Z,St.z,null,F)}}}const ye=T.children;for(let Pe=0,Me=ye.length;Pe<Me;Pe++)yt(ye[Pe],F,Z,W)}function _n(T,F,Z,W){const{opaque:$,transmissive:ye,transparent:Pe}=T;b.setupLightsView(Z),at===!0&&te.setGlobalState(R.clippingPlanes,Z),W&&pe.viewport(H.copy(W)),$.length>0&&Ft($,F,Z),ye.length>0&&Ft(ye,F,Z),Pe.length>0&&Ft(Pe,F,Z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Yn(T,F,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[W.id]===void 0){const Le=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[W.id]=new Bi(1,1,{generateMipmaps:!0,type:Le?Gi:di,minFilter:br,samples:Math.max(4,Ge.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}const ye=b.state.transmissionRenderTarget[W.id],Pe=W.viewport||H;ye.setSize(Pe.z*R.transmissionResolutionScale,Pe.w*R.transmissionResolutionScale);const Me=R.getRenderTarget(),we=R.getActiveCubeFace(),Ue=R.getActiveMipmapLevel();R.setRenderTarget(ye),R.getClearColor(V),ae=R.getClearAlpha(),ae<1&&R.setClearColor(16777215,.5),R.clear(),Ut&&U.render(Z);const We=R.toneMapping;R.toneMapping=ir;const je=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),b.setupLightsView(W),at===!0&&te.setGlobalState(R.clippingPlanes,W),Ft(T,Z,W),Be.updateMultisampleRenderTarget(ye),Be.updateRenderTargetMipmap(ye),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let et=0,Yt=F.length;et<Yt;et++){const wt=F[et],{object:Et,geometry:gn,material:De,group:wn}=wt;if(De.side===Di&&Et.layers.test(W.layers)){const mt=De.side;De.side=Hn,De.needsUpdate=!0,Xt(Et,Z,W,gn,De,wn),De.side=mt,De.needsUpdate=!0,Le=!0}}Le===!0&&(Be.updateMultisampleRenderTarget(ye),Be.updateRenderTargetMipmap(ye))}R.setRenderTarget(Me,we,Ue),R.setClearColor(V,ae),je!==void 0&&(W.viewport=je),R.toneMapping=We}function Ft(T,F,Z){const W=F.isScene===!0?F.overrideMaterial:null;for(let $=0,ye=T.length;$<ye;$++){const Pe=T[$],{object:Me,geometry:we,group:Ue}=Pe;let We=Pe.material;We.allowOverride===!0&&W!==null&&(We=W),Me.layers.test(Z.layers)&&Xt(Me,F,Z,we,We,Ue)}}function Xt(T,F,Z,W,$,ye){I!==null&&$.isNodeMaterial&&I.setObject(T,$),T.onBeforeRender(R,F,Z,W,$,ye),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(R,F,Z,W,T,ye),$.transparent===!0&&$.side===Di&&$.forceSinglePass===!1?($.side=Hn,$.needsUpdate=!0,R.renderBufferDirect(Z,F,W,$,T,ye),$.side=os,$.needsUpdate=!0,R.renderBufferDirect(Z,F,W,$,T,ye),$.side=Di):R.renderBufferDirect(Z,F,W,$,T,ye),T.onAfterRender(R,F,Z,W,$,ye)}function Jt(T){let F=0;for(const Z of T)Z.texture!==null&&F++;return F}function qn(T,F,Z){F.isScene!==!0&&(F=nt);const W=Ne.get(T),$=b.state.lights,ye=b.state.shadowsArray,Pe=$.state.version,Me=re.getParameters(T,$.state,ye,F,Z,b.state.lightProbeGridArray),we=re.getProgramCacheKey(Me);let Ue=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;const We=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=C.get(T.envMap||W.environment,We),W.envMapRotation=W.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ue===void 0&&(T.addEventListener("dispose",be),Ue=new Map,W.programs=Ue,W.programVariants=new Map);let je=Ue.get(we);if(je!==void 0){if(W.currentProgram===je&&W.lightsStateVersion===Pe)return Ot(T,Me),je}else Me.uniforms=re.getUniforms(T),I!==null&&T.isNodeMaterial&&I.build(T,Z,Me),T.onBeforeCompile(Me,R),je=re.acquireProgram(Me,we),Ue.set(we,je),W.uniforms=Me.uniforms;const Le=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=te.uniform),Ot(T,Me),W.needsLights=oo(T),W.lightsStateVersion=Pe,W.needsLights&&(Le.ambientLightColor.value=$.state.ambient,Le.lightProbe.value=$.state.probe,Le.sunLights.value=$.state.sun,Le.sunLightShadows.value=$.state.sunShadow,Le.directionalLights.value=$.state.directional,Le.directionalLightShadows.value=$.state.directionalShadow,Le.spotLights.value=$.state.spot,Le.spotLightShadows.value=$.state.spotShadow,Le.rectAreaLights.value=$.state.rectArea,Le.ltc_1.value=$.state.rectAreaLTC1,Le.ltc_2.value=$.state.rectAreaLTC2,Le.pointLights.value=$.state.point,Le.pointLightShadows.value=$.state.pointShadow,Le.hemisphereLights.value=$.state.hemi,Le.sunShadowMatrix.value=$.state.sunShadowMatrix,Le.sunShadowCascade.value=$.state.sunShadowCascade,Le.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Le.spotLightMatrix.value=$.state.spotLightMatrix,Le.spotLightMap.value=$.state.spotLightMap,Le.pointShadowMatrix.value=$.state.pointShadowMatrix),W.numLightProbeGrids=Jt(b.state.lightProbeGridArray),W.currentProgram=je,W.uniformsList=null,je}function hs(T,F,Z,W,$){const ye=Ne.get(T),Pe=ye.currentProgram.id+","+W+","+$;let Me=ye.programVariants.get(Pe);return Me===void 0?(Me=qn(T,F,Z),ye.programVariants.set(Pe,Me)):(ye.currentProgram=Me,ye.uniformsList=null,ye.outputColorSpace=W,ye.toneMapping=$),Me}function Qt(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=cl.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Ot(T,F){const Z=Ne.get(T);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function oi(T,F,Z,W,$){F.isScene!==!0&&(F=nt),Be.resetTextureUnits();const ye=F.fog,Pe=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,Me=G===null?R.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:it.workingColorSpace,we=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ue=C.get(W.envMap||Pe,we),We=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,je=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!Z.morphAttributes.position,et=!!Z.morphAttributes.normal,Yt=!!Z.morphAttributes.color;let wt=ir;W.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(wt=R.toneMapping);const Et=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,gn=Et!==void 0?Et.length:0,De=Ne.get(W),wn=b.state.lights;if(at===!0&&(Q===!0||T!==A)){const Lt=T===A&&W.id===O;te.setState(W,T,Lt)}let mt=!1,Or=!1;W.version===De.__version?De.needsLights&&De.lightsStateVersion!==wn.state.version||$.isBatchedMesh&&De.batching===!1||!$.isBatchedMesh&&De.batching===!0||$.isBatchedMesh&&De.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&De.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&De.instancing===!1||!$.isInstancedMesh&&De.instancing===!0||$.isSkinnedMesh&&De.skinning===!1||!$.isSkinnedMesh&&De.skinning===!0||$.isInstancedMesh&&De.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&De.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&De.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&De.instancingMorph===!1&&$.morphTexture!==null||De.envMap!==Ue||W.fog===!0&&De.fog!==ye||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==te.numPlanes||De.numIntersection!==te.numIntersection)||De.vertexAlphas!==We||De.vertexTangents!==je||De.morphTargets!==Le||De.morphNormals!==et||De.morphColors!==Yt||De.morphTargetsCount!==gn||De.numLightProbeGrids!==Jt(b.state.lightProbeGridArray)?mt=!0:(De.outputColorSpace!==Me||De.toneMapping!==wt)&&(Or=!0):(mt=!0,De.__version=W.version);let vn=De.currentProgram;(mt===!0||Or===!0)&&(vn=Or===!0?hs(W,F,$,Me,wt):qn(W,F,$),I&&W.isNodeMaterial&&I.onUpdateProgram(W,vn,De));let lo=!1,ur=!1,Br=!1;const lt=vn.getUniforms(),un=De.uniforms;if(pe.useProgram(vn.program)&&(lo=!0,ur=!0,Br=!0),W.id!==O&&(O=W.id,ur=!0),lo||A!==T){pe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),lt.setValue(B,"projectionMatrix",T.projectionMatrix),lt.setValue(B,"viewMatrix",T.matrixWorldInverse);const sn=lt.map.cameraPosition;sn!==void 0&&sn.setValue(B,Vt.setFromMatrixPosition(T.matrixWorld)),Ge.logarithmicDepthBuffer&&lt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&lt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,ur=!0,Br=!0)}if(De.needsLights&&(wn.state.sunShadowMap.length>0&&lt.setValue(B,"sunShadowMap",wn.state.sunShadowMap,Be),wn.state.directionalShadowMap.length>0&&lt.setValue(B,"directionalShadowMap",wn.state.directionalShadowMap,Be),wn.state.spotShadowMap.length>0&&lt.setValue(B,"spotShadowMap",wn.state.spotShadowMap,Be),wn.state.pointShadowMap.length>0&&lt.setValue(B,"pointShadowMap",wn.state.pointShadowMap,Be)),$.isSkinnedMesh){lt.setOptional(B,$,"bindMatrix"),lt.setOptional(B,$,"bindMatrixInverse");const Lt=$.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),lt.setValue(B,"boneTexture",Lt.boneTexture,Be))}$.isBatchedMesh&&(lt.setOptional(B,$,"batchingTexture"),lt.setValue(B,"batchingTexture",$._matricesTexture,Be),lt.setOptional(B,$,"batchingIdTexture"),lt.setValue(B,"batchingIdTexture",$._indirectTexture,Be),lt.setOptional(B,$,"batchingColorTexture"),$._colorsTexture!==null&&lt.setValue(B,"batchingColorTexture",$._colorsTexture,Be));const gi=Z.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&ee.update($,Z,vn),(ur||De.receiveShadow!==$.receiveShadow)&&(De.receiveShadow=$.receiveShadow,lt.setValue(B,"receiveShadow",$.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(un.envMapIntensity.value=F.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=mE()),ur){if(lt.setValue(B,"toneMappingExposure",R.toneMappingExposure),De.needsLights&&sa(un,Br),ye&&W.fog===!0&&de.refreshFogUniforms(un,ye),de.refreshMaterialUniforms(un,W,he,Ee,b.state.transmissionRenderTarget[T.id]),De.needsLights&&De.numLightProbeGrids>0){const Lt=x;let sn=0;for(const Hi of b.state.lightProbeGridArray)Hi.texture!==null&&(Lt.textures[sn]=Hi.texture,Lt.min[sn]=Hi.boundingBox.min,Lt.max[sn]=Hi.boundingBox.max,Lt.resolution[sn]=Hi.resolution,sn++);for(const Hi in Lt)Lt[Hi].length=sn;un.probesSH.value=Lt.textures,un.probesMin.value=Lt.min,un.probesMax.value=Lt.max,un.probesResolution.value=Lt.resolution}cl.upload(B,Qt(De),un,Be)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(cl.upload(B,Qt(De),un,Be),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&lt.setValue(B,"center",$.center),lt.setValue(B,"modelViewMatrix",$.modelViewMatrix),lt.setValue(B,"normalMatrix",$.normalMatrix),lt.setValue(B,"modelMatrix",$.matrixWorld),W.uniformsGroups!==void 0){const Lt=W.uniformsGroups;for(let sn=0,Hi=Lt.length;sn<Hi;sn++){const qf=Lt[sn];le.update(qf,vn),le.bind(qf,vn)}}return vn}function sa(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function oo(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(T,F,Z){const W=Ne.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ne.get(T.texture).__webglTexture=F,Ne.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const Z=Ne.get(T);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,Z=0){G=T,Y=F,P=Z;let W=null,$=!1,ye=!1;if(T){const Me=Ne.get(T);if(Me.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(B.FRAMEBUFFER,Me.__webglFramebuffer),H.copy(T.viewport),J.copy(T.scissor),ce=T.scissorTest,pe.viewport(H),pe.scissor(J),pe.setScissorTest(ce),O=-1;return}else if(Me.__webglFramebuffer===void 0)Be.setupRenderTarget(T);else if(Me.__hasExternalTextures)Be.rebindTextures(T,Ne.get(T.texture).__webglTexture,Ne.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const We=T.depthTexture;if(Me.__boundDepthTexture!==We){if(We!==null&&Ne.has(We)&&(T.width!==We.image.width||T.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(T)}}const we=T.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ye=!0);const Ue=Ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?W=Ue[F][Z]:W=Ue[F],$=!0):T.samples>0&&Be.useMultisampledRTT(T)===!1?W=Ne.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?W=Ue[Z]:W=Ue,H.copy(T.viewport),J.copy(T.scissor),ce=T.scissorTest}else H.copy(Ae).multiplyScalar(he).floor(),J.copy(ke).multiplyScalar(he).floor(),ce=Ie;if(Z!==0&&(W=k),pe.bindFramebuffer(B.FRAMEBUFFER,W)&&pe.drawBuffers(T,W),pe.viewport(H),pe.scissor(J),pe.setScissorTest(ce),$){const Me=Ne.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me.__webglTexture,Z)}else if(ye){const Me=F;for(let we=0;we<T.textures.length;we++){const Ue=Ne.get(T.textures[we]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+we,Ue.__webglTexture,Z,Me)}}else if(T!==null&&Z!==0){const Me=Ne.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Me.__webglTexture,Z)}O=-1};function cr(T){const F=Ne.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=Ge.textureFormatReadable(T.format),F.__typeReadable=Ge.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,Z,W,$,ye,Pe,Me=0){if(!(T&&T.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(we=we[Pe],Array.isArray(we)&&(we=we[0])),we){pe.bindFramebuffer(B.FRAMEBUFFER,we);try{const Ue=T.textures[Me],We=Ue.format,je=Ue.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);const Le=cr(Ue);if(Le.__formatReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&Z>=0&&Z<=T.height-$&&B.readPixels(F,Z,W,$,ue.convert(We),ue.convert(je),ye)}finally{const Ue=G!==null?Ne.get(G).__webglFramebuffer:null;pe.bindFramebuffer(B.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(T,F,Z,W,$,ye,Pe,Me=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(we=we[Pe],Array.isArray(we)&&(we=we[0])),we)if(F>=0&&F<=T.width-W&&Z>=0&&Z<=T.height-$){pe.bindFramebuffer(B.FRAMEBUFFER,we);const Ue=T.textures[Me],We=Ue.format,je=Ue.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);const Le=cr(Ue);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,et),B.bufferData(B.PIXEL_PACK_BUFFER,ye.byteLength,B.STREAM_READ),B.readPixels(F,Z,W,$,ue.convert(We),ue.convert(je),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const Yt=G!==null?Ne.get(G).__webglFramebuffer:null;pe.bindFramebuffer(B.FRAMEBUFFER,Yt);const wt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await O0(B,wt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,et),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ye),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(et),B.deleteSync(wt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,Z=0){const W=Math.pow(2,-Z),$=Math.floor(T.image.width*W),ye=Math.floor(T.image.height*W),Pe=F!==null?F.x:0,Me=F!==null?F.y:0;Be.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,Pe,Me,$,ye),pe.unbindTexture()},this.copyTextureToTexture=function(T,F,Z=null,W=null,$=0,ye=0){let Pe,Me,we,Ue,We,je,Le,et,Yt;const wt=T.isCompressedTexture?T.mipmaps[ye]:T.image;if(Z!==null)Pe=Z.max.x-Z.min.x,Me=Z.max.y-Z.min.y,we=Z.isBox3?Z.max.z-Z.min.z:1,Ue=Z.min.x,We=Z.min.y,je=Z.isBox3?Z.min.z:0;else{const lt=Math.pow(2,-$);Pe=Math.floor(wt.width*lt),Me=Math.floor(wt.height*lt),T.isDataArrayTexture?we=wt.depth:T.isData3DTexture?we=Math.floor(wt.depth*lt):we=1,Ue=0,We=0,je=0}W!==null?(Le=W.x,et=W.y,Yt=W.z):(Le=0,et=0,Yt=0);const Et=ue.convert(F.format),gn=ue.convert(F.type);let De;F.isData3DTexture?(Be.setTexture3D(F,0),De=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Be.setTexture2DArray(F,0),De=B.TEXTURE_2D_ARRAY):(Be.setTexture2D(F,0),De=B.TEXTURE_2D),pe.activeTexture(B.TEXTURE0),pe.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),pe.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),pe.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);const wn=pe.getParameter(B.UNPACK_ROW_LENGTH),mt=pe.getParameter(B.UNPACK_IMAGE_HEIGHT),Or=pe.getParameter(B.UNPACK_SKIP_PIXELS),vn=pe.getParameter(B.UNPACK_SKIP_ROWS),lo=pe.getParameter(B.UNPACK_SKIP_IMAGES);pe.pixelStorei(B.UNPACK_ROW_LENGTH,wt.width),pe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,wt.height),pe.pixelStorei(B.UNPACK_SKIP_PIXELS,Ue),pe.pixelStorei(B.UNPACK_SKIP_ROWS,We),pe.pixelStorei(B.UNPACK_SKIP_IMAGES,je);const ur=T.isDataArrayTexture||T.isData3DTexture,Br=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const lt=Ne.get(T),un=Ne.get(F),gi=Ne.get(lt.__renderTarget),Lt=Ne.get(un.__renderTarget);pe.bindFramebuffer(B.READ_FRAMEBUFFER,gi.__webglFramebuffer),pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let sn=0;sn<we;sn++)ur&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ne.get(T).__webglTexture,$,je+sn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ne.get(F).__webglTexture,ye,Yt+sn)),B.blitFramebuffer(Ue,We,Ue+Pe,We+Me,Le,et,Le+Pe,et+Me,B.DEPTH_BUFFER_BIT,B.NEAREST);pe.bindFramebuffer(B.READ_FRAMEBUFFER,null),pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||Ne.has(T)){const lt=Ne.get(T),un=Ne.get(F);pe.bindFramebuffer(B.READ_FRAMEBUFFER,D),pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,z);for(let gi=0;gi<we;gi++)ur?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,lt.__webglTexture,$,je+gi):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,lt.__webglTexture,$),Br?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,un.__webglTexture,ye,Yt+gi):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,un.__webglTexture,ye),$!==0?B.blitFramebuffer(Ue,We,Ue+Pe,We+Me,Le,et,Le+Pe,et+Me,B.COLOR_BUFFER_BIT,B.NEAREST):Br?B.copyTexSubImage3D(De,ye,Le,et,Yt+gi,Ue,We,Pe,Me):B.copyTexSubImage2D(De,ye,Le,et,Ue,We,Pe,Me);pe.bindFramebuffer(B.READ_FRAMEBUFFER,null),pe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Br?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(De,ye,Le,et,Yt,Pe,Me,we,Et,gn,wt.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(De,ye,Le,et,Yt,Pe,Me,we,Et,wt.data):B.texSubImage3D(De,ye,Le,et,Yt,Pe,Me,we,Et,gn,wt):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ye,Le,et,Pe,Me,Et,gn,wt.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ye,Le,et,wt.width,wt.height,Et,wt.data):B.texSubImage2D(B.TEXTURE_2D,ye,Le,et,Pe,Me,Et,gn,wt);pe.pixelStorei(B.UNPACK_ROW_LENGTH,wn),pe.pixelStorei(B.UNPACK_IMAGE_HEIGHT,mt),pe.pixelStorei(B.UNPACK_SKIP_PIXELS,Or),pe.pixelStorei(B.UNPACK_SKIP_ROWS,vn),pe.pixelStorei(B.UNPACK_SKIP_IMAGES,lo),ye===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&B.generateMipmap(De),pe.unbindTexture()},this.initRenderTarget=function(T){Ne.get(T).__webglFramebuffer===void 0&&Be.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Be.setTextureCube(T,0):T.isData3DTexture?Be.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Be.setTexture2DArray(T,0):Be.setTexture2D(T,0),pe.unbindTexture()},this.resetState=function(){Y=0,P=0,G=null,pe.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const Ic=10,Nc=56,qo=160,Xs=r=>r*r*(3-2*r),xr=r=>Math.min(1,Math.max(0,r));function gE(r,e,t,n){const i=Math.sin(r*1.1+t*.6)*Math.cos(e*1.1+t*.4)*1.1,s=(r*r-e*e)*.065,a=Math.hypot(r,e),o=Math.sin(a*2.2-t*1.5)*1.4/(1+a*.6),l=Math.exp(-(r*r+e*e)*.12)*2.4-.4;let c=i+(s-i)*Xs(xr(n));return c=c+(o-c)*Xs(xr(n-1)),c=c+(l-c)*Xs(xr(n-2)),c}const vE=`
  uniform float uTime;
  uniform float uMorph;
  uniform vec2  uMouse;
  uniform float uMouseAmt;
  uniform float uIntro;
  varying float vH;
  varying float vFade;

  float f0(vec2 p){ return sin(p.x*1.1 + uTime*.6) * cos(p.y*1.1 + uTime*.4) * 1.1; }
  float f1(vec2 p){ return (p.x*p.x - p.y*p.y) * .065; }
  float f2(vec2 p){ float r = length(p); return sin(r*2.2 - uTime*1.5) * 1.4 / (1. + r*.6); }
  float f3(vec2 p){ return exp(-dot(p,p) * .12) * 2.4 - .4; }

  void main(){
    vec3 pos = position;
    vec2 p = pos.xz;
    float h = mix(f0(p), f1(p), smoothstep(0., 1., clamp(uMorph, 0., 1.)));
    h = mix(h, f2(p), smoothstep(0., 1., clamp(uMorph - 1., 0., 1.)));
    h = mix(h, f3(p), smoothstep(0., 1., clamp(uMorph - 2., 0., 1.)));

    float md = distance(p, uMouse);
    h += exp(-md*md*.9) * .8 * uMouseAmt;

    // intro: surface rises out of a flat sheet, from the centre outward
    float r = length(p);
    float grow = smoothstep(r - 1.5, r, uIntro * 7.5);
    h *= grow;

    pos.y = h;
    vH = h;
    vFade = (1. - smoothstep(3.6, 5.0, r)) * grow;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
  }
`,xE=`
  uniform vec3 uInk;
  uniform vec3 uAccent;
  uniform float uOpacity;
  varying float vH;
  varying float vFade;
  void main(){
    float t = smoothstep(.2, 1.9, vH);
    vec3 col = mix(uInk, uAccent, t);
    float a = vFade * uOpacity * (.32 + .68 * t);
    gl_FragColor = vec4(col, a);
  }
`;function SE(){const r=(Nc+1)*2*(qo-1),e=new Float32Array(r*2*3);let t=0;const n=(s,a)=>{e[t++]=s,e[t++]=0,e[t++]=a};for(let s=0;s<=Nc;s++){const a=-5+s/Nc*Ic;for(let o=0;o<qo-1;o++){const l=-5+o/(qo-1)*Ic,c=-5+(o+1)/(qo-1)*Ic;n(l,a),n(c,a),n(a,l),n(a,c)}}const i=new Wn;return i.setAttribute("position",new sr(e,3)),i}function ME(r){const e=new _E({canvas:r,antialias:!0,alpha:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.setClearColor(0,0);const t=new nv,n=new yi(32,1,.1,100);n.position.set(0,8.5,17),n.lookAt(0,0,0);const i=new Zr;t.add(i);const s=new Zr;i.add(s);const a=new Zr;s.add(a);const o={uTime:{value:0},uMorph:{value:0},uMouse:{value:new tt(99,99)},uMouseAmt:{value:0},uIntro:{value:0},uOpacity:{value:1},uInk:{value:new ct("#111110")},uAccent:{value:new ct("#ff4d1a")}},l=new dd(SE(),new Ur({vertexShader:vE,fragmentShader:xE,uniforms:o,transparent:!0,depthWrite:!1}));a.add(l);const c=new Cl({color:1118480,transparent:!0,opacity:.55}),u=new dd(new Wn().setFromPoints([new K(-5.6,0,0),new K(5.6,0,0),new K(0,-1.5,0),new K(0,3.4,0),new K(0,0,-5.6),new K(0,0,5.6)]),c);a.add(u);const d=new lr(new kf(.13,24,24),new Ku({color:16731418,transparent:!0})),f=new lr(new zf(.22,.26,48),new Ku({color:16731418,transparent:!0,opacity:.6,side:Di}));a.add(d,f);const h=new Wn().setFromPoints([new K,new K]),_=new Zu(h,new xv({color:16731418,dashSize:.1,gapSize:.08,transparent:!0,opacity:.8}));a.add(_);const v=90,p=new Float32Array(v*3),m=new Wn;m.setAttribute("position",new sr(p,3));const S=new Zu(m,new Cl({color:16731418,transparent:!0,opacity:.45}));a.add(S);let w=!1;const x={morph:0,intro:0,opacity:1,x:0,y:0,rotY:-.5,scale:1,active:!0},E=new yv,b=new tt(9,9),g=new Ji(new K(0,1,0),0),M=new K,L=new tt(99,99);let R=0;const N={x:0,y:0,tx:0,ty:0};window.addEventListener("pointermove",P=>{b.x=P.clientX/window.innerWidth*2-1,b.y=-(P.clientY/window.innerHeight)*2+1,N.tx=b.x,N.ty=b.y,R=1},{passive:!0}),document.addEventListener("pointerleave",()=>{R=0});function I(){const P=window.innerWidth,G=window.innerHeight;e.setSize(P,G,!1),n.aspect=P/G,n.fov=P/G<.8?48:32,n.updateProjectionMatrix()}window.addEventListener("resize",I),I();let k=performance.now(),D=0;const z=new Pt;function Y(){requestAnimationFrame(Y);const P=performance.now(),G=Math.min((P-k)/1e3,.05);if(k=P,!x.active)return;D+=G;const O=D;o.uTime.value=O,o.uMorph.value=x.morph,o.uIntro.value=x.intro,o.uOpacity.value=x.opacity,i.position.set(x.x,x.y,0),i.scale.setScalar(x.scale),a.rotation.y=x.rotY+O*.04,N.x+=(N.tx-N.x)*.04,N.y+=(N.ty-N.y)*.04,s.rotation.x=-N.y*.08,s.rotation.z=N.x*.05,t.updateMatrixWorld(),E.setFromCamera(b,n),E.ray.intersectPlane(g,M)&&(z.copy(a.matrixWorld).invert(),M.applyMatrix4(z),L.lerp(new tt(M.x,M.z),.12)),o.uMouse.value.copy(L),o.uMouseAmt.value+=(R*(1-Xs(xr(x.morph-2)))-o.uMouseAmt.value)*Math.min(1,G*4);const A=Xs(xr(x.morph-2.2)),H=Math.sin(O*.45)*3*(1-A),J=Math.sin(O*.31+1.3)*3*(1-A),ce=gE(H,J,O,x.morph)*Xs(xr(x.intro*1.3-.3));d.position.set(H,ce+.13,J),f.position.copy(d.position),f.lookAt(n.position),f.scale.setScalar(1+Math.sin(O*3)*.15);const V=xr(x.intro*2-1)*x.opacity;d.material.opacity=V,f.material.opacity=V*.6,_.material.opacity=V*.8,S.material.opacity=V*.45,c.opacity=.55*x.opacity*xr(x.intro*1.5);const ae=h.attributes.position.array;if(ae[0]=H,ae[1]=0,ae[2]=J,ae[3]=H,ae[4]=ce,ae[5]=J,h.attributes.position.needsUpdate=!0,_.computeLineDistances(),!w){for(let ve=0;ve<v;ve++)p.set([H,ce,J],ve*3);w=!0}p.copyWithin(3,0,(v-1)*3),p[0]=H,p[1]=ce+.02,p[2]=J,m.attributes.position.needsUpdate=!0,e.render(t,n)}return Y(),{state:x}}const Gd="#111110",ga="#ff4d1a",Uc="#1f3bd1",Ys="−",jt=(r,e=2)=>{const t=Math.abs(r)<.005?0:r;return Number(t.toFixed(e)).toString().replace("-",Ys)};function yE(r,e,t){const n=(s,a,o)=>{if(Math.abs(s)<.05)return"";const l=s<0?o?Ys:` ${Ys} `:o?"":" + ",c=Math.abs(s),u=a&&Math.abs(c-1)<.05?"":jt(c,1);return l+u+a};let i=n(r,"x²",!0);return i+=n(e,"x",i===""),i+=n(t,"",i===""),"y = "+(i||"0")}function EE(){const r=document.getElementById("plot");if(!r)return;const e=r.getContext("2d"),t={a:document.getElementById("in-a"),b:document.getElementById("in-b"),c:document.getElementById("in-c")},n={a:document.getElementById("out-a"),b:document.getElementById("out-b"),c:document.getElementById("out-c")},i={eq:document.getElementById("plot-eq"),disc:document.getElementById("r-disc"),roots:document.getElementById("r-roots"),vertex:document.getElementById("r-vertex"),extraLabel:document.getElementById("r-extra-label"),extra:document.getElementById("r-extra"),hint:document.getElementById("plot-hint")},s={a:1,b:-2,c:-3},a={...s};let o="maths",l=2.5,c=l,u=!1,d=!1,f=0,h=0,_=1,v=40,p=0,m=0,S=0,w=!0;const x=(P,G)=>[p+P*v,m-G*v],E=P=>(P-p)/v,b=P=>a.a*P*P+a.b*P+a.c;function g(){const P=r.getBoundingClientRect();_=Math.min(window.devicePixelRatio,2),f=P.width,h=P.height,r.width=f*_,r.height=h*_,e.setTransform(_,0,0,_,0,0),v=Math.max(22,Math.min(f/16,h/12)),p=f/2,m=h*.55}new ResizeObserver(g).observe(r);function M(P){const G=(P.value-P.min)/(P.max-P.min)*100;P.style.setProperty("--fill",G+"%")}for(const P of["a","b","c"])M(t[P]),t[P].addEventListener("input",()=>{s[P]=parseFloat(t[P].value),n[P].textContent=jt(s[P],1),M(t[P]),N()});document.querySelectorAll("[data-mode]").forEach(P=>{P.addEventListener("click",()=>{o=P.dataset.mode,document.querySelectorAll("[data-mode]").forEach(G=>G.setAttribute("aria-pressed",String(G===P))),N()})});const L=P=>{const G=r.getBoundingClientRect();return[P.clientX-G.left,P.clientY-G.top]};r.addEventListener("pointerdown",P=>{if(o!=="add")return;const[G]=L(P);u=!0,l=E(G),r.setPointerCapture(P.pointerId)}),r.addEventListener("pointermove",P=>{const[G,O]=L(P);if(u){l=Math.max(-7.5,Math.min(7.5,E(G))),N();return}const[A,H]=x(c,b(c));d=o==="add"&&Math.hypot(G-A,O-H)<24,r.style.cursor=o==="add"?d?"grab":"crosshair":""});const R=()=>{u=!1};r.addEventListener("pointerup",R),r.addEventListener("pointercancel",R),new IntersectionObserver(([P])=>{w=P.isIntersecting},{rootMargin:"100px"}).observe(r);function N(){const{a:P,b:G,c:O}=s;i.eq.textContent=yE(P,G,O);const A=G*G-4*P*O,H=o==="maths"?["Discriminant","Roots","Vertex"]:["Discriminant","Point","dy/dx"];if(document.querySelectorAll("#playground dl dt").forEach((J,ce)=>{ce<3&&(J.textContent=H[ce])}),o==="maths"){if(i.disc.textContent=jt(A),Math.abs(P)<.05){i.roots.textContent=Math.abs(G)<.05?"—":jt(-O/G),i.vertex.textContent="none",i.extraLabel.textContent="Nature",i.extra.textContent="linear",i.hint.textContent="With a = 0 there is no x² term, so it is a straight line, not a parabola.";return}const J=-G/(2*P);if(i.vertex.textContent=`(${jt(J)}, ${jt(P*J*J+G*J+O)})`,i.extraLabel.textContent="Nature",A>1e-4){const ce=(-G-Math.sqrt(A))/(2*P),V=(-G+Math.sqrt(A))/(2*P);i.roots.textContent=`${jt(Math.min(ce,V))}, ${jt(Math.max(ce,V))}`,i.extra.textContent="2 real roots",i.hint.textContent="b² − 4ac > 0, so the curve crosses the x-axis twice."}else A>-1e-4?(i.roots.textContent=jt(-G/(2*P)),i.extra.textContent="repeated root",i.hint.textContent="b² − 4ac = 0, so the vertex just touches the x-axis."):(i.roots.textContent="none (real)",i.extra.textContent="no real roots",i.hint.textContent="b² − 4ac < 0, so the curve never reaches the x-axis.")}else{const J=P*l*l+G*l+O,ce=2*P*l+G;i.disc.textContent=jt(A),i.roots.textContent=`(${jt(l)}, ${jt(J)})`,i.vertex.textContent=`${jt(ce)}`,i.extraLabel.textContent="Tangent",i.extra.textContent=`y = ${jt(ce)}x ${J-ce*l<0?Ys:"+"} ${jt(Math.abs(J-ce*l))}`,i.hint.textContent=Math.abs(ce)<.05?"dy/dx = 0 — you are on the turning point. That is how differentiation finds a vertex.":`dy/dx = 2ax + b = ${jt(ce)} here. Drag the orange point along the curve.`}}function I(){e.lineWidth=1;const P=Math.floor(-p/v),G=Math.ceil((f-p)/v),O=Math.floor(-(h-m)/v),A=Math.ceil(m/v);for(let H=P;H<=G;H++){e.strokeStyle=H%5===0?"rgba(17,17,16,.12)":"rgba(17,17,16,.05)";const[J]=x(H,0);e.beginPath(),e.moveTo(J+.5,0),e.lineTo(J+.5,h),e.stroke()}for(let H=O;H<=A;H++){e.strokeStyle=H%5===0?"rgba(17,17,16,.12)":"rgba(17,17,16,.05)";const[,J]=x(0,H);e.beginPath(),e.moveTo(0,J+.5),e.lineTo(f,J+.5),e.stroke()}e.strokeStyle=Gd,e.lineWidth=1.25,e.beginPath(),e.moveTo(0,m),e.lineTo(f,m),e.moveTo(p,0),e.lineTo(p,h),e.stroke(),e.fillStyle="rgba(17,17,16,.55)",e.font='11px "JetBrains Mono", monospace',e.textAlign="center",e.textBaseline="top";for(let H=P;H<=G;H++)if(H&&H%2===0){const[J]=x(H,0);e.fillText(String(H).replace("-",Ys),J,m+6)}e.textAlign="right",e.textBaseline="middle";for(let H=O;H<=A;H++)if(H&&H%2===0){const[,J]=x(0,H);e.fillText(String(H).replace("-",Ys),p-6,J)}e.textAlign="left",e.fillText("x",f-14,m-10),e.textBaseline="top",e.fillText("y",p+8,8)}function k(P,G,O,A=5,H=!1){const[J,ce]=x(P,G);H&&(e.beginPath(),e.arc(J,ce,A+6,0,Math.PI*2),e.fillStyle=O+"22",e.fill()),e.beginPath(),e.arc(J,ce,A,0,Math.PI*2),e.fillStyle=O,e.fill(),e.lineWidth=2,e.strokeStyle="#efebe1",e.stroke()}function D(P,G,O,A,H=10,J=-12){const[ce,V]=x(P,G);e.font='12px "JetBrains Mono", monospace',e.textAlign="left",e.textBaseline="middle";const ae=e.measureText(O).width+12;e.fillStyle="#efebe1",e.fillRect(ce+H-6,V+J-10,ae,20),e.fillStyle=A,e.fillText(O,ce+H,V+J)}let z=0;function Y(){if(requestAnimationFrame(Y),!w||!f)return;z+=1/60;for(const J of["a","b","c"])a[J]+=(s[J]-a[J])*.14;c+=(l-c)*(u?.5:.14),S+=((o==="add"?1:0)-S)*.12,e.clearRect(0,0,f,h),I(),e.beginPath();for(let J=0;J<=f;J+=1.5){const ce=E(J),[,V]=x(ce,b(ce));J===0?e.moveTo(J,V):e.lineTo(J,V)}e.strokeStyle=Gd,e.lineWidth=2.5,e.lineJoin="round",e.stroke();const{a:P,b:G,c:O}=a,A=1-S,H=S;if(A>.02){if(e.globalAlpha=A,Math.abs(P)>.05){const J=-G/(2*P),ce=b(J);e.setLineDash([4,6]),e.strokeStyle=Uc,e.lineWidth=1;const[V]=x(J,0);e.beginPath(),e.moveTo(V,0),e.lineTo(V,h),e.stroke(),e.setLineDash([]),k(J,ce,Uc,5,!0),D(J,ce,`(${jt(J,1)}, ${jt(ce,1)})`,Uc,12,P>0?18:-18);const ae=G*G-4*P*O;if(ae>=0){const ve=Math.sqrt(ae),Ee=ae<1e-4?[J]:[(-G-ve)/(2*P),(-G+ve)/(2*P)],he=1+Math.sin(z*4)*.25;Ee.forEach(Ce=>k(Ce,0,ga,5*he,!0))}}else Math.abs(G)>.05&&k(-O/G,0,ga,5,!0);e.globalAlpha=1}if(H>.02){e.globalAlpha=H;const J=b(c),ce=2*P*c+G,V=40,[ae,ve]=x(c-V,J-ce*V),[Ee,he]=x(c+V,J+ce*V);e.strokeStyle=ga,e.lineWidth=1.75,e.setLineDash([8,6]),e.beginPath(),e.moveTo(ae,ve),e.lineTo(Ee,he),e.stroke(),e.setLineDash([]);const[Ce,ut]=x(c,J),[Ae,ke]=x(c+1,J+ce);e.strokeStyle="rgba(255,77,26,.5)",e.lineWidth=1,e.beginPath(),e.moveTo(Ce,ut),e.lineTo(Ae,ut),e.lineTo(Ae,ke),e.stroke(),k(c,J,ga,d||u?8:6,!0),D(c,J,`m = ${jt(ce,2)}`,ga,14,-18),e.globalAlpha=1}}g(),N(),Y()}$e.registerPlugin(Ye,Bl);const ao=matchMedia("(prefers-reduced-motion: reduce)").matches,Hf=matchMedia("(hover: hover) and (pointer: fine)").matches,dn=(r,e=document)=>e.querySelector(r),Qi=(r,e=document)=>[...e.querySelectorAll(r)];let bi=null;ao||(bi=new t0({duration:1.15,easing:r=>1-Math.pow(1-r,4),smoothWheel:!0}),bi.on("scroll",Ye.update),$e.ticker.add(r=>bi.raf(r*1e3)),$e.ticker.lagSmoothing(0),bi.stop());window.scrollTo(0,0);"scrollRestoration"in history&&(history.scrollRestoration="manual");Qi('a[href^="#"]').forEach(r=>{r.addEventListener("click",e=>{const t=r.getAttribute("href"),n=t==="#top"?0:dn(t);n!==null&&(e.preventDefault(),bi?bi.scrollTo(n,{duration:1.6}):n===0?window.scrollTo(0,0):n.scrollIntoView())})});const{state:Ki}=ME(dn("#gl"));Ki.intro=0;function TE(){const n=Math.PI*5;let i="";for(let a=0;a<=280;a++){const o=a/280*n,l=Math.sin(o)*Math.exp(-o/6);i+=`${a?"L":"M"}${(a/280*560).toFixed(2)} ${(110-l*92).toFixed(2)} `}dn("#loader-curve").setAttribute("d",i);const s=dn("#loader .ticks");for(let a=0;a<=560;a+=35)s.insertAdjacentHTML("beforeend",`<line class="tick" x1="${a}" y1="106" x2="${a}" y2="114"/>`)}function bE(){TE();const r=dn("#loader-curve"),e=dn("#loader-pen"),t=dn("#loader-count"),n=dn("#loader-msg"),i=r.getTotalLength(),s=["Sharpening pencils","Finding x","Completing the square","Rationalising denominators","Checking the units","Showing working"],a={v:0};return new Promise(o=>{var u;const l=((u=document.fonts)==null?void 0:u.ready)??Promise.resolve(),c=$e.timeline();c.to(a,{v:100,duration:ao?.3:2.6,ease:"power2.inOut",onUpdate(){const d=a.v/100;r.style.strokeDashoffset=String(1-d);const f=r.getPointAtLength(i*d);e.setAttribute("cx",f.x),e.setAttribute("cy",f.y),t.textContent=String(Math.round(a.v)).padStart(2,"0"),n.textContent=s[Math.min(s.length-1,Math.floor(d*s.length))]}}),Promise.all([l,new Promise(d=>c.eventCallback("onComplete",d))]).then(()=>{n.textContent="Q.E.D.",o()})})}function wE(){const r=Bl.create(".hero-title",{type:"lines",mask:"lines",linesClass:"split-line"});$e.timeline({defaults:{ease:"expo.out"}}).to("#loader",{clipPath:"inset(0 0 100% 0)",duration:1.3,ease:"expo.inOut"}).set("#loader",{display:"none"}).from(r.lines,{yPercent:110,duration:1.4,stagger:.09},"-=0.55").to("#gl",{opacity:1,duration:1.2,ease:"power2.out"},"<").to(Ki,{intro:1,duration:2.6,ease:"power3.out"},"<").from(".hero-meta > *",{y:20,opacity:0,duration:1,stagger:.06},"<+0.25").from(".hero-sub",{y:30,opacity:0,duration:1.2},"<+0.1").from(".hero-cta > *",{y:30,opacity:0,duration:1.2,stagger:.08},"<+0.1").to("#nav",{opacity:1,duration:1},"<").from(".hero-scroll",{opacity:0,duration:1},"<+0.2").add(()=>{document.body.classList.remove("is-loading"),bi==null||bi.start(),Ye.refresh()},1.6),$e.to(".scroll-dot",{y:32,duration:1.4,repeat:-1,ease:"power2.inOut",yoyo:!0})}function AE(){$e.matchMedia().add({desktop:"(min-width: 768px)",mobile:"(max-width: 767px)"},u=>{const{desktop:d}=u.conditions;$e.set(Ki,d?{x:2.9,y:1.1,scale:.95,rotY:-.5}:{x:0,y:3.4,scale:.72,rotY:-.5}),$e.timeline({scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:1}}).to(Ki,d?{x:3.1,y:-.1,scale:1.08,rotY:.1,ease:"none"}:{y:-3.2,scale:.8,rotY:.1,ease:"none"},0).to(".hero-title",{yPercent:-30,opacity:0,ease:"none"},0).to(".hero-sub, .hero-cta, .hero-meta, .hero-scroll",{y:-60,opacity:0,ease:"none"},0)});const e=Qi(".surface-eq"),t=Qi(".surface-copy"),n=Qi(".surface-pip");let i=0;const s=u=>{if(u===i)return;const d=u>i?1:-1;e.forEach((f,h)=>h!==u&&$e.to(f,{yPercent:-60*d,opacity:0,duration:.4,ease:"power3.in",overwrite:!0})),t.forEach((f,h)=>h!==u&&$e.to(f,{y:-20*d,opacity:0,duration:.35,ease:"power2.in",overwrite:!0})),$e.fromTo(e[u],{yPercent:60*d,opacity:0},{yPercent:0,opacity:1,duration:.8,delay:.2,ease:"expo.out",overwrite:!0}),$e.fromTo(t[u],{y:24*d,opacity:0},{y:0,opacity:1,duration:.8,delay:.2,ease:"expo.out",overwrite:!0}),n.forEach((f,h)=>f.classList.toggle("bg-ink",h<=u)),n.forEach((f,h)=>f.classList.toggle("bg-ink/15",h>u)),dn("#fig-num").textContent=u+1,i=u};$e.timeline({scrollTrigger:{trigger:"#surfaces",start:"top top",end:"+=320%",pin:!0,scrub:1.2},onUpdate:()=>s(Math.min(3,Math.round(Ki.morph)))}).to(Ki,{morph:3,ease:"none",duration:3},0).to(Ki,{rotY:"+=1.4",ease:"none",duration:3.4},0),$e.fromTo(".surfaces-col",{opacity:0,y:80},{opacity:1,y:0,ease:"none",scrollTrigger:{trigger:"#surfaces",start:"top 85%",end:"top 15%",scrub:!0}}),Ye.create({trigger:"#content",start:"top top",onEnter:()=>{Ki.active=!1},onLeaveBack:()=>{Ki.active=!0}}),Qi(".reveal-heading").forEach(u=>{const d=Bl.create(u,{type:"lines",mask:"lines",linesClass:"split-line"});$e.from(d.lines,{yPercent:110,duration:1.3,stagger:.08,ease:"expo.out",scrollTrigger:{trigger:u,start:"top 85%"}})}),$e.from(".subject-card",{y:120,rotateX:-12,opacity:0,transformOrigin:"50% 100%",duration:1.4,stagger:.15,ease:"expo.out",scrollTrigger:{trigger:"#subjects .grid.mt-20",start:"top 85%"},clearProps:"transform"}),$e.from(".subject-card li",{opacity:0,x:-12,duration:.6,stagger:.03,ease:"power2.out",scrollTrigger:{trigger:"#subjects .grid.mt-20",start:"top 70%"}}),Qi(".count").forEach(u=>{const d={v:0};$e.to(d,{v:Number(u.dataset.to),duration:1.8,ease:"power3.out",scrollTrigger:{trigger:u,start:"top 90%"},onUpdate:()=>{u.textContent=Math.round(d.v)}})});const a=dn(".method-track"),o=()=>a.scrollWidth-window.innerWidth,l=dn(".method-idx"),c=$e.to(a,{x:()=>-o(),ease:"none",scrollTrigger:{trigger:"#method",start:"top top",end:()=>"+="+o(),pin:!0,scrub:1,invalidateOnRefresh:!0,onUpdate:u=>{l&&(l.textContent=String(Math.min(4,Math.floor(u.progress*3.999)+1)).padStart(2,"0"))}}});Qi(".method-card").forEach(u=>{$e.from(u.querySelector("svg"),{rotate:-25,scale:.7,opacity:.2,ease:"none",scrollTrigger:{trigger:u,containerAnimation:c,start:"left 95%",end:"left 45%",scrub:!0}}),$e.from(u.querySelector("span"),{yPercent:40,opacity:0,ease:"none",scrollTrigger:{trigger:u,containerAnimation:c,start:"left 100%",end:"left 55%",scrub:!0}})}),$e.from("#playground .mt-16",{y:80,opacity:0,duration:1.4,ease:"expo.out",scrollTrigger:{trigger:"#playground .mt-16",start:"top 85%"}}),$e.from(".class-card",{y:100,opacity:0,duration:1.3,stagger:.12,ease:"expo.out",scrollTrigger:{trigger:"#classes .mt-16",start:"top 85%"}}),$e.from("#faq details",{y:40,opacity:0,duration:1,stagger:.07,ease:"expo.out",scrollTrigger:{trigger:"#faq",start:"top 70%"}}),$e.from("#contact-form label, #contact-form button",{y:30,opacity:0,duration:1,stagger:.05,ease:"expo.out",scrollTrigger:{trigger:"#contact",start:"top 70%"}}),$e.from(".wordmark",{yPercent:40,ease:"none",scrollTrigger:{trigger:"footer",start:"top bottom",end:"bottom bottom",scrub:!0}})}function RE(){const r=dn(".marquee-track"),e=r.innerHTML;r.classList.remove("gap-10"),r.innerHTML=`<div class="flex shrink-0 gap-10 pr-10">${e}</div><div class="flex shrink-0 gap-10 pr-10" aria-hidden="true">${e}</div>`}function CE(){if(!Hf||ao)return;document.body.classList.add("has-cursor");const r=dn("#cursor"),e=r.querySelector(".readout"),t=$e.quickTo(r,"x",{duration:.35,ease:"power3.out"}),n=$e.quickTo(r,"y",{duration:.35,ease:"power3.out"}),i=24;let s=!1;window.addEventListener("pointermove",a=>{s||($e.set(r,{x:a.clientX,y:a.clientY}),$e.to(r,{opacity:1,duration:.3}),s=!0),t(a.clientX),n(a.clientY);const o=(a.clientX-innerWidth/2)/i,l=-(a.clientY-innerHeight/2)/i;e.textContent=`(${o.toFixed(2)}, ${l.toFixed(2)})`.replaceAll("-","−")},{passive:!0}),document.addEventListener("pointerover",a=>{r.classList.toggle("is-hover",!!a.target.closest("[data-cursor], a, button, summary"))}),document.addEventListener("pointerleave",()=>$e.to(r,{opacity:0,duration:.2})),document.addEventListener("pointerenter",()=>$e.to(r,{opacity:1,duration:.2}))}function PE(){!Hf||ao||Qi("[data-magnetic]").forEach(r=>{const e=$e.quickTo(r,"x",{duration:.6,ease:"power3.out"}),t=$e.quickTo(r,"y",{duration:.6,ease:"power3.out"});r.addEventListener("pointermove",n=>{const i=r.getBoundingClientRect();e((n.clientX-i.left-i.width/2)*.3),t((n.clientY-i.top-i.height/2)*.4)}),r.addEventListener("pointerleave",()=>{$e.to(r,{x:0,y:0,duration:1,ease:"elastic.out(1, 0.4)"})})})}function LE(){!Hf||ao||Qi(".tilt").forEach(r=>{r.addEventListener("pointermove",e=>{const t=r.getBoundingClientRect(),n=(e.clientX-t.left)/t.width,i=(e.clientY-t.top)/t.height;r.style.setProperty("--ry",`${(n-.5)*8}deg`),r.style.setProperty("--rx",`${(.5-i)*8}deg`),r.style.setProperty("--mx",`${n*100}%`),r.style.setProperty("--my",`${i*100}%`)}),r.addEventListener("pointerleave",()=>{r.style.setProperty("--rx","0deg"),r.style.setProperty("--ry","0deg")})})}function DE(){const r=dn("#nav");let e=0;const t=n=>{r.classList.toggle("is-scrolled",n>40),r.classList.toggle("is-hidden",n>e&&n>400),e=n};bi?bi.on("scroll",({scroll:n})=>t(n)):window.addEventListener("scroll",()=>t(scrollY),{passive:!0})}function IE(){const r=dn("#contact-form"),e=dn("#form-status");r.addEventListener("submit",t=>{t.preventDefault();const n=new FormData(r),i=["name","contact"].filter(s=>!String(n.get(s)||"").trim());if(i.length){e.textContent="We need at least a name and a way to reach you.",e.style.color="#ff4d1a",i.forEach(s=>$e.fromTo(r.elements[s],{x:-8},{x:0,duration:.6,ease:"elastic.out(1, 0.3)"}));return}e.style.color="",e.textContent=`Thanks, ${String(n.get("name")).split(" ")[0]} — we'll get back to you within a day.`,$e.fromTo(e,{opacity:0,y:10},{opacity:1,y:0,duration:.8,ease:"expo.out"}),r.reset()})}dn("#year").textContent=new Date().getFullYear();RE();CE();PE();LE();DE();IE();EE();bE().then(()=>{AE(),wE()});
