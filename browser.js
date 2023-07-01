// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,i=t.__defineGetter__,o=t.__defineSetter__,a=t.__lookupGetter__,u=t.__lookupSetter__,f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,s,p,l;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(a.call(r,n)||u.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),p="get"in f,l="set"in f,s&&(p||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(r,n,f.get),l&&o&&o.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function s(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function p(r){return r!=r}var l=Math.floor;function y(r){return l(r)===r}function g(r){return y(r/2)}function d(r){return g(r>0?r-1:r+1)}var h=Number.POSITIVE_INFINITY,v=Number,b=v.NEGATIVE_INFINITY;function w(r){return r===h||r===b}var m=Math.sqrt;function N(r){return Math.abs(r)}var A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return A&&"symbol"==typeof Symbol.toStringTag}var E,U=Object.prototype.toString,k=Object.prototype.hasOwnProperty,S="function"==typeof Symbol?Symbol.toStringTag:"",j=_()?function(r){var n,t,e,i,o;if(null==r)return U.call(r);t=r[S],o=S,n=null!=(i=r)&&k.call(i,o);try{r[S]=void 0}catch(n){return U.call(r)}return e=U.call(r),n?r[S]=t:delete r[S],e}:function(r){return U.call(r)},x="function"==typeof Uint32Array,I="function"==typeof Uint32Array?Uint32Array:null,F="function"==typeof Uint32Array?Uint32Array:void 0;E=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(x&&t instanceof Uint32Array||"[object Uint32Array]"===j(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var T,O=E,V="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,$="function"==typeof Float64Array?Float64Array:void 0;T=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G([1,3.14,-3.14,NaN]),t=n,r=(V&&t instanceof Float64Array||"[object Float64Array]"===j(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?$:function(){throw new Error("not implemented")};var P,H=T,W="function"==typeof Uint8Array,C="function"==typeof Uint8Array?Uint8Array:null,L="function"==typeof Uint8Array?Uint8Array:void 0;P=function(){var r,n,t;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,256,257]),t=n,r=(W&&t instanceof Uint8Array||"[object Uint8Array]"===j(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M,R=P,Z="function"==typeof Uint16Array,q="function"==typeof Uint16Array?Uint16Array:null,X="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var r,n,t;if("function"!=typeof q)return!1;try{n=new q(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Z&&t instanceof Uint16Array||"[object Uint16Array]"===j(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?X:function(){throw new Error("not implemented")};var Y,z={uint16:M,uint8:R};(Y=new z.uint16(1))[0]=4660;var B,D,J=52===new z.uint8(Y.buffer)[0];!0===J?(B=1,D=0):(B=0,D=1);var K={HIGH:B,LOW:D},Q=new H(1),rr=new O(Q.buffer),nr=K.HIGH,tr=K.LOW;function er(r,n,t,e){return Q[0]=r,n[e]=rr[nr],n[e+t]=rr[tr],n}function ir(r){return er(r,[0,0],1,0)}s(ir,"assign",er);var or=!0===J?0:1,ar=new H(1),ur=new O(ar.buffer);function fr(r,n){return ar[0]=r,ur[or]=n>>>0,ar[0]}function cr(r){return 0|r}var sr,pr,lr=2147483647,yr=!0===J?1:0,gr=new H(1),dr=new O(gr.buffer);function hr(r){return gr[0]=r,dr[yr]}!0===J?(sr=1,pr=0):(sr=0,pr=1);var vr={HIGH:sr,LOW:pr},br=new H(1),wr=new O(br.buffer),mr=vr.HIGH,Nr=vr.LOW;function Ar(r,n){return wr[mr]=r,wr[Nr]=n,br[0]}var _r=[0,0];function Er(r,n){var t,e;return ir.assign(r,_r,1,0),t=_r[0],t&=lr,e=hr(n),Ar(t|=e&=2147483648,_r[1])}var Ur=!0===J?1:0,kr=new H(1),Sr=new O(kr.buffer);function jr(r,n){return kr[0]=r,Sr[Ur]=n>>>0,kr[0]}var xr=1023,Ir=1048576,Fr=[1,1.5],Tr=[0,.5849624872207642],Or=[0,1.350039202129749e-8];function Vr(r,n,t,e){return p(r)||w(r)?(n[e]=r,n[e+t]=0,n):0!==r&&N(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}s((function(r){return Vr(r,[0,0],1,0)}),"assign",Vr);var Gr=[0,0],$r=[0,0];function Pr(r,n){var t,e;return 0===n||0===r||p(r)||w(r)?r:(Vr(r,Gr,1,0),n+=Gr[1],n+=function(r){var n=hr(r);return(n=(2146435072&n)>>>20)-xr|0}(r=Gr[0]),n<-1074?Er(0,r):n>1023?r<0?b:h:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ir.assign(r,$r,1,0),t=$r[0],t&=2148532223,e*Ar(t|=n+xr<<20,$r[1])))}var Hr=1048575,Wr=1048576,Cr=1083179008,Lr=1e300,Mr=1e-300,Rr=[0,0],Zr=[0,0];function qr(r,n){var t,e,i,o,a,u,f,c,s,l,g,v,A,_;if(p(r)||p(n))return NaN;if(ir.assign(n,Rr,1,0),a=Rr[0],0===Rr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return m(r);if(-.5===n)return 1/m(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(w(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:N(r)<1==(n===h)?0:h}(r,n)}if(ir.assign(r,Rr,1,0),o=Rr[0],0===Rr[1]){if(0===o)return function(r,n){return n===b?h:n===h?0:n>0?d(n)?r:0:d(n)?Er(h,r):h}(r,n);if(1===r)return 1;if(-1===r&&d(n))return-1;if(w(r))return r===b?qr(-0,-n):n<0?0:h}if(r<0&&!1===y(n))return(r-r)/(r-r);if(i=N(r),t=o&lr|0,e=a&lr|0,f=a>>>31|0,u=(u=o>>>31|0)&&d(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(hr(r)&lr)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*Lr*Lr:u*Mr*Mr;if(t>1072693248)return 0===f?u*Lr*Lr:u*Mr*Mr;g=function(r,n){var t,e,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=fr(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=t,r}(Zr,i)}else g=function(r,n,t){var e,i,o,a,u,f,c,s,p,l,y,g,d,h,v,b,w,m,N,A,_;return m=0,t<Ir&&(m-=53,t=hr(n*=9007199254740992)),m+=(t>>20)-xr|0,t=1072693248|(N=1048575&t|0),N<=235662?A=0:N<767610?A=1:(A=0,m+=1,t-=Ir),a=fr(i=(b=(n=jr(n,t))-(c=Fr[A]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),f=jr(0,e+=A<<18),v=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=fr(f=3+(o=a*a)+(v+=(u=w*(b-a*f-a*(n-(f-c))))*(a+i)),0),d=(y=-7.028461650952758e-9*(p=fr(p=(b=a*f)+(w=u*f+(v-(f-3-o))*i),0))+.9617966939259756*(w-(p-b))+Or[A])-((g=fr(g=(l=.9617967009544373*p)+y+(s=Tr[A])+(h=m),0))-h-s-l),r[0]=g,r[1]=d,r}(Zr,i,t);if(v=(l=(n-(c=fr(n,0)))*g[0]+n*g[1])+(s=c*g[0]),ir.assign(v,Rr,1,0),A=cr(Rr[0]),_=cr(Rr[1]),A>=Cr){if(0!=(A-Cr|_))return u*Lr*Lr;if(l+8008566259537294e-32>v-s)return u*Lr*Lr}else if((A&lr)>=1083231232){if(0!=(A-3230714880|_))return u*Mr*Mr;if(l<=v-s)return u*Mr*Mr}return v=function(r,n,t){var e,i,o,a,u,f,c,s,p,l;return p=((s=r&lr|0)>>20)-xr|0,c=0,s>1071644672&&(i=jr(0,((c=r+(Wr>>p+1)>>>0)&~(Hr>>(p=((c&lr)>>20)-xr|0)))>>>0),c=(c&Hr|Wr)>>20-p>>>0,r<0&&(c=-c),n-=i),r=cr(r=hr(f=1-((f=(o=.6931471824645996*(i=fr(i=t+n,0)))+(a=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Pr(f,c):jr(f,r)}(A,s,l),u*v}function Xr(r,n){return p(r)||p(n)||n<0||n>1?NaN:r<0?0:r===h?1:1-qr(1-n,(r=l(r))+1)}function Yr(r){return function(){return r}}function zr(r,n,t){f(r,n,{configurable:!1,enumerable:!1,get:t})}function Br(r){return"number"==typeof r}s(Xr,"factory",(function(r){return p(r)||r<0||r>1?Yr(NaN):function(n){return p(n)?NaN:n<0?0:n===h?1:(n=l(n),1-qr(1-r,n+1))}}));var Dr=v.prototype.toString,Jr=_();function Kr(r){return"object"==typeof r&&(r instanceof v||(Jr?function(r){try{return Dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===j(r)))}function Qr(r){return Br(r)||Kr(r)}function rn(r){return Br(r)&&r>=0&&r<=1}function nn(r){return Kr(r)&&r.valueOf()>=0&&r.valueOf()<=1}function tn(r){return rn(r)||nn(r)}s(Qr,"isPrimitive",Br),s(Qr,"isObject",Kr),s(tn,"isPrimitive",rn),s(tn,"isObject",nn);var en=.6931471803691238,on=1.9082149292705877e-10,an=1048575;function un(r){var n,t,e,i,o,a,u,f,c,s,l,y;return 0===r?b:p(r)||r<0?NaN:(o=0,(t=hr(r))<1048576&&(o-=54,t=hr(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-xr|0,o+=(f=614244+(t&=an)&1048576|0)>>20|0,u=(r=jr(r,t|1072693248^f))-1,(an&2+t)<3?0===u?0===o?0:o*en+o*on:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*en-(a-o*on-u)):(f=t-398458|0,c=440401-t|0,i=(l=(y=(s=u/(2+u))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-s*(n+a)):o*en-(n-(s*(n+a)+o*on)-u)):0===o?u-s*(u-a):o*en-(s*(u-a)-o*on-u))))}function fn(r){var n;return p(r)||r<=0||r>=1?NaN:(n=1-r,(-r*un(r)-n*un(n))/r)}function cn(r){return p(r)||r<=0||r>=1?NaN:6+r*r/(1-r)}function sn(r){return p(r)||r<0||r>1?NaN:(1-r)/r}var pn=Math.ceil,ln=1048575,yn=1.4426950407214463,gn=[0,0];function dn(r){var n,t,e,i,o;if(p(r)||r<0)return NaN;if(ir.assign(r,gn,1,0),o=0,(t=gn[0])<1048576){if(0==(t&lr|gn[1]))return b;o-=54,t=hr(r*=0x40000000000000)}return t>=2146435072?r+r:(o+=(t>>20)-xr|0,o+=(i=614244+(t&=Hr)&1048576|0)>>20|0,e=function(r){var n,t,e,i,o,a,u,f,c,s,p;return i=hr(r),o=r-1,(ln&2+i)<3?0===o?0:o*o*(.3333333333333333*o-.5):(s=(i&=ln)-398458|0,p=440401-i|0,t=(c=(u=(a=o/(2+o))*a)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),f=e+t,(s|=p)>0?a*((n=.5*o*o)+f)-n:a*(f-o))}(r=jr(r,t|1072693248^i)),1.6751713164886512e-10*((r-=1)+e)+(r-(n=fr(r,0))+e)*yn+n*yn+o)}function hn(r){return p(r)||r<0||r>1?NaN:pn(-1/dn(1-r))-1}function vn(r){return p(r)||r<0||r>1?NaN:0}function bn(r){return p(r)||r<=0||r>=1?NaN:(2-r)/m(1-r)}function wn(r){return p(r)||r<=0||r>=1?NaN:m(1-r)/r}function mn(r){return p(r)||r<=0||r>=1?NaN:(1-r)/(r*r)}var Nn=.6931471803691238,An=1.9082149292705877e-10;function _n(r){var n,t,e,i,o,a,u,f,c,s;if(r<-1||p(r))return NaN;if(-1===r)return b;if(r===h)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,t=1)}return 0!==s&&(e<9007199254740992?(o=(s=((t=hr(c=1+r))>>20)-xr)>0?1-(c-r):r-(c-1),o/=c):(s=((t=hr(c=r))>>20)-xr,o=0),(t&=1048575)<434334?c=jr(c,1072693248|t):(s+=1,c=jr(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*Nn+(o+=s*An):s*Nn-((f=n*(1-.6666666666666666*i))-(s*An+o)-i):(f=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-a*(n+f)):s*Nn-(n-(a*(n+f)+(s*An+o))-i))}function En(r,n){return p(r)||p(n)||n<0||n>1?NaN:r<0?b:r===h?0:_n(-qr(1-n,(r=l(r))+1))}function Un(r){return l(r)===r&&r>=0}function kn(r,n){var t;return p(r)||p(n)||n<0||n>1?NaN:Un(r)?(t=1-n,un(n)+r*un(t)):b}function Sn(r){return r>=0&&r<=1}function jn(r){return r<0?pn(r):l(r)}s(En,"factory",(function(r){return p(r)||r<0||r>1?Yr(NaN):function(n){return p(n)?NaN:n<0?b:n===h?0:(n=l(n),_n(-qr(1-r,n+1)))}})),s(kn,"factory",(function(r){return p(r)||r<0||r>1?Yr(NaN):function(n){var t;return p(n)?NaN:Un(n)?(t=1-r,un(r)+n*un(t)):b}}));var xn=1.4426950408889634,In=1/(1<<28);function Fn(r){var n;return p(r)||r===h?r:r===b?0:r>709.782712893384?h:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<In?1+r:function(r,n,t){var e,i,o,a;return Pr(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=jn(r<0?xn*r-.5:xn*r+.5)),1.9082149292705877e-10*n,n)}function Tn(r,n){var t,e;return p(r)||!Sn(n)||r>=-un(e=1-n)?NaN:n*(t=Fn(r))/(1-e*t)}function On(r,n){return p(r)||p(n)||n<0||n>1?NaN:Un(r)?n*qr(1-n,r):0}function Vn(r){return 0===r&&1/r===h}function Gn(r,n){var t,e,i,o;if(2===(t=arguments.length))return p(r)||p(n)?NaN:r===h||n===h?h:r===n&&0===r?Vn(r)?r:n:r>n?r:n;for(e=b,o=0;o<t;o++){if(p(i=arguments[o])||i===h)return i;(i>e||i===e&&0===i&&Vn(i))&&(e=i)}return e}function $n(r,n){return p(n)||p(r)||n<0||n>1||r<0||r>1?NaN:1===r?h:Gn(0,pn(un(1-r)/_n(-n)-(1+1e-12)))}function Pn(r){return"number"==typeof r}function Hn(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function Wn(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+Hn(i):Hn(i)+r,e&&(r="-"+r)),r}s(Tn,"factory",(function(r){return Sn(r)?function(n){var t,e;return p(n)||n>=-un(e=1-r)?NaN:(t=Fn(n),r*t/(1-e*t))}:Yr(NaN)})),s(On,"factory",(function(r){return p(r)||r<0||r>1?Yr(NaN):function(n){return p(n)?NaN:Un(n)?r*qr(1-r,n):0}})),s($n,"factory",(function(r){return p(r)||r<0||r>1?Yr(NaN):function(n){return p(n)||n<0||n>1?NaN:1===n?h:Gn(0,pn(un(1-n)/_n(-r)-(1+1e-12)))}}));var Cn=String.prototype.toLowerCase,Ln=String.prototype.toUpperCase;function Mn(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!Pn(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=Wn(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=Wn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===Ln.call(r.specifier)?Ln.call(t):Cn.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Rn(r){return"string"==typeof r}var Zn=Math.abs,qn=String.prototype.toLowerCase,Xn=String.prototype.toUpperCase,Yn=String.prototype.replace,zn=/e\+(\d)$/,Bn=/e-(\d)$/,Dn=/^(\d+)$/,Jn=/^(\d+)e/,Kn=/\.0$/,Qn=/\.0*e/,rt=/(\..*[^0])0*e/;function nt(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!Pn(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":Zn(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=Yn.call(t,rt,"$1e"),t=Yn.call(t,Qn,"e"),t=Yn.call(t,Kn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Yn.call(t,zn,"e+0$1"),t=Yn.call(t,Bn,"e-0$1"),r.alternate&&(t=Yn.call(t,Dn,"$1."),t=Yn.call(t,Jn,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Xn.call(r.specifier)?Xn.call(t):qn.call(t)}function tt(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function et(r,n,t){var e=n-r.length;return e<0?r:r=t?r+tt(e):tt(e)+r}var it=String.fromCharCode,ot=isNaN,at=Array.isArray;function ut(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function ft(r){var n,t,e,i,o,a,u,f,c;if(!at(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(Rn(e=r[f]))a+=e;else{if(n=void 0!==e.precision,!(e=ut(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,ot(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,ot(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=Mn(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!ot(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=ot(o)?String(e.arg):it(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=nt(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=Wn(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=et(e.arg,e.width,e.padRight)),a+=e.arg||"",u+=1}return a}var ct=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function st(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function pt(r){var n,t,e,i;for(t=[],i=0,e=ct.exec(r);e;)(n=r.slice(i,ct.lastIndex-e[0].length)).length&&t.push(n),t.push(st(e)),i=ct.lastIndex,e=ct.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function lt(r){return"string"==typeof r}function yt(r){var n,t,e;if(!lt(r))throw new TypeError(yt("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=pt(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return ft.apply(null,t)}function gt(){var r;if(!(this instanceof gt))return 0===arguments.length?new gt:new gt(arguments[0]);if(arguments.length){if(!rn(r=arguments[0]))throw new TypeError(yt("invalid argument. Mean parameter `%s` must be a probability. Value: `%s`.","p",r))}else r=.5;return f(this,"p",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!rn(n))throw new TypeError(yt("invalid assignment. Must be a probability. Value: `%s`.",n));r=n}}),this}zr(gt.prototype,"entropy",(function(){return fn(this.p)})),zr(gt.prototype,"kurtosis",(function(){return cn(this.p)})),zr(gt.prototype,"mean",(function(){return sn(this.p)})),zr(gt.prototype,"median",(function(){return hn(this.p)})),zr(gt.prototype,"mode",(function(){return vn(this.p)})),zr(gt.prototype,"skewness",(function(){return bn(this.p)})),zr(gt.prototype,"stdev",(function(){return wn(this.p)})),zr(gt.prototype,"variance",(function(){return mn(this.p)})),s(gt.prototype,"cdf",(function(r){return Xr(r,this.p)})),s(gt.prototype,"logcdf",(function(r){return En(r,this.p)})),s(gt.prototype,"logpmf",(function(r){return kn(r,this.p)})),s(gt.prototype,"mgf",(function(r){return Tn(r,this.p)})),s(gt.prototype,"pmf",(function(r){return On(r,this.p)})),s(gt.prototype,"quantile",(function(r){return $n(r,this.p)}));var dt={};return c(dt,"cdf",Xr),c(dt,"Geometric",gt),c(dt,"entropy",fn),c(dt,"kurtosis",cn),c(dt,"logcdf",En),c(dt,"logpmf",kn),c(dt,"mean",sn),c(dt,"median",hn),c(dt,"mgf",Tn),c(dt,"mode",vn),c(dt,"pmf",On),c(dt,"quantile",$n),c(dt,"skewness",bn),c(dt,"stdev",wn),c(dt,"variance",mn),dt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).geometric=n();
//# sourceMappingURL=browser.js.map
