// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,i=t.__defineGetter__,o=t.__defineSetter__,a=t.__lookupGetter__,u=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,p,s,l;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((p="value"in f)&&(a.call(r,n)||u.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),s="get"in f,l="set"in f,p&&(s||l))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(r,n,f.get),l&&o&&o.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function p(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function s(r){return r!=r}var l=Math.floor;function y(r){return l(r)===r}function v(r){return y(r/2)}function g(r){return v(r>0?r-1:r+1)}var h=Number.POSITIVE_INFINITY,d=Number,b=d.NEGATIVE_INFINITY;function w(r){return r===h||r===b}var N=Math.sqrt;function m(r){return Math.abs(r)}var A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return A&&"symbol"==typeof Symbol.toStringTag}var E=Object.prototype.toString;var U=Object.prototype.hasOwnProperty;var k="function"==typeof Symbol?Symbol.toStringTag:"";var S=_()?function(r){var n,t,e,i,o;if(null==r)return E.call(r);t=r[k],o=k,n=null!=(i=r)&&U.call(i,o);try{r[k]=void 0}catch(n){return E.call(r)}return e=E.call(r),n?r[k]=t:delete r[k],e}:function(r){return E.call(r)},I="function"==typeof Uint32Array;var j="function"==typeof Uint32Array?Uint32Array:null;var x,F="function"==typeof Uint32Array?Uint32Array:void 0;x=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(I&&t instanceof Uint32Array||"[object Uint32Array]"===S(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var O=x,T="function"==typeof Float64Array;var V="function"==typeof Float64Array?Float64Array:null;var G,$="function"==typeof Float64Array?Float64Array:void 0;G=function(){var r,n,t;if("function"!=typeof V)return!1;try{n=new V([1,3.14,-3.14,NaN]),t=n,r=(T&&t instanceof Float64Array||"[object Float64Array]"===S(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?$:function(){throw new Error("not implemented")};var P=G,H="function"==typeof Uint8Array;var W="function"==typeof Uint8Array?Uint8Array:null;var C,L="function"==typeof Uint8Array?Uint8Array:void 0;C=function(){var r,n,t;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,256,257]),t=n,r=(H&&t instanceof Uint8Array||"[object Uint8Array]"===S(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var M=C,R="function"==typeof Uint16Array;var Z="function"==typeof Uint16Array?Uint16Array:null;var q,X="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var r,n,t;if("function"!=typeof Z)return!1;try{n=new Z(n=[1,3.14,-3.14,65536,65537]),t=n,r=(R&&t instanceof Uint16Array||"[object Uint16Array]"===S(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?X:function(){throw new Error("not implemented")};var Y,z={uint16:q,uint8:M};(Y=new z.uint16(1))[0]=4660;var B,D,J=52===new z.uint8(Y.buffer)[0];!0===J?(B=1,D=0):(B=0,D=1);var K={HIGH:B,LOW:D},Q=new P(1),rr=new O(Q.buffer),nr=K.HIGH,tr=K.LOW;function er(r,n){return Q[0]=n,r[0]=rr[nr],r[1]=rr[tr],r}function ir(r,n){return 1===arguments.length?er([0,0],r):er(r,n)}var or=!0===J?0:1,ar=new P(1),ur=new O(ar.buffer);function fr(r,n){return ar[0]=r,ur[or]=n>>>0,ar[0]}function cr(r){return 0|r}var pr,sr,lr=!0===J?1:0,yr=new P(1),vr=new O(yr.buffer);function gr(r){return yr[0]=r,vr[lr]}!0===J?(pr=1,sr=0):(pr=0,sr=1);var hr={HIGH:pr,LOW:sr},dr=new P(1),br=new O(dr.buffer),wr=hr.HIGH,Nr=hr.LOW;function mr(r,n){return br[wr]=r,br[Nr]=n,dr[0]}var Ar=[0,0];function _r(r,n){var t,e;return ir(Ar,r),t=Ar[0],t&=2147483647,e=gr(n),mr(t|=e&=2147483648,Ar[1])}var Er=!0===J?1:0,Ur=new P(1),kr=new O(Ur.buffer);function Sr(r,n){return Ur[0]=r,kr[Er]=n>>>0,Ur[0]}var Ir=[1,1.5],jr=[0,.5849624872207642],xr=[0,1.350039202129749e-8];function Fr(r,n){return s(n)||w(n)?(r[0]=n,r[1]=0,r):0!==n&&m(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Or=[0,0],Tr=[0,0];function Vr(r,n){var t,e;return 0===n||0===r||s(r)||w(r)?r:(function(r,n){1===arguments.length?Fr([0,0],r):Fr(r,n)}(Or,r),n+=Or[1],n+=function(r){var n=gr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Or[0]),n<-1074?_r(0,r):n>1023?r<0?b:h:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ir(Tr,r),t=Tr[0],t&=2148532223,e*mr(t|=n+1023<<20,Tr[1])))}var Gr=1e300,$r=[0,0],Pr=[0,0];function Hr(r,n){var t,e,i,o,a,u,f,c,p,l,v,d,A,_;if(s(r)||s(n))return NaN;if(ir($r,n),a=$r[0],0===$r[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return N(r);if(-.5===n)return 1/N(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(w(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:m(r)<1==(n===h)?0:h}(r,n)}if(ir($r,r),o=$r[0],0===$r[1]){if(0===o)return function(r,n){return n===b?h:n===h?0:n>0?g(n)?r:0:g(n)?_r(h,r):h}(r,n);if(1===r)return 1;if(-1===r&&g(n))return-1;if(w(r))return r===b?Hr(-0,-n):n<0?0:h}if(r<0&&!1===y(n))return(r-r)/(r-r);if(i=m(r),t=2147483647&o|0,e=2147483647&a|0,f=a>>>31|0,u=(u=o>>>31|0)&&g(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&gr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*Gr*Gr:1e-300*u*1e-300;if(t>1072693248)return 0===f?u*Gr*Gr:1e-300*u*1e-300;v=function(r,n){var t,e,i,o,a,u;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=fr(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=t,r}(Pr,i)}else v=function(r,n,t){var e,i,o,a,u,f,c,p,s,l,y,v,g,h,d,b,w,N,m,A,_;return N=0,t<1048576&&(N-=53,t=gr(n*=9007199254740992)),N+=(t>>20)-1023|0,t=1072693248|(m=1048575&t|0),m<=235662?A=0:m<767610?A=1:(A=0,N+=1,t-=1048576),a=fr(i=(b=(n=Sr(n,t))-(c=Ir[A]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),f=Sr(0,e+=A<<18),d=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=fr(f=3+(o=a*a)+(d+=(u=w*(b-a*f-a*(n-(f-c))))*(a+i)),0),g=(y=-7.028461650952758e-9*(s=fr(s=(b=a*f)+(w=u*f+(d-(f-3-o))*i),0))+.9617966939259756*(w-(s-b))+xr[A])-((v=fr(v=(l=.9617967009544373*s)+y+(p=jr[A])+(h=N),0))-h-p-l),r[0]=v,r[1]=g,r}(Pr,i,t);if(l=(n-(c=fr(n,0)))*v[0]+n*v[1],p=c*v[0],ir($r,d=l+p),A=cr($r[0]),_=cr($r[1]),A>=1083179008){if(0!=(A-1083179008|_))return u*Gr*Gr;if(l+8008566259537294e-32>d-p)return u*Gr*Gr}else if((2147483647&A)>=1083231232){if(0!=(A-3230714880|_))return 1e-300*u*1e-300;if(l<=d-p)return 1e-300*u*1e-300}return d=function(r,n,t){var e,i,o,a,u,f,c,p,s,l,y;return l=((s=2147483647&r|0)>>20)-1023|0,p=0,s>1071644672&&(e=((p=r+(1048576>>l+1)>>>0)&~(1048575>>(l=((2147483647&p)>>20)-1023|0)))>>>0,p=(1048575&p|1048576)>>20-l>>>0,r<0&&(p=-p),n-=o=Sr(0,e)),r=cr(r=gr(c=1-((c=(a=.6931471824645996*(o=fr(o=t+n,0)))+(u=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(i=c-(o=c*c)*(0===(y=o)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-a))+c*f)-c))),(r+=p<<20>>>0)>>20<=0?Vr(c,p):Sr(c,r)}(A,p,l),u*d}function Wr(r,n){return s(r)||s(n)||n<0||n>1?NaN:r<0?0:r===h?1:1-Hr(1-n,(r=l(r))+1)}function Cr(r){return function(){return r}}function Lr(r,n,t){f(r,n,{configurable:!1,enumerable:!1,get:t})}function Mr(r){return"number"==typeof r}p(Wr,"factory",(function(r){return s(r)||r<0||r>1?Cr(NaN):function(n){if(s(n))return NaN;if(n<0)return 0;if(n===h)return 1;return n=l(n),1-Hr(1-r,n+1)}}));var Rr=d.prototype.toString;var Zr=_();function qr(r){return"object"==typeof r&&(r instanceof d||(Zr?function(r){try{return Rr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===S(r)))}function Xr(r){return Mr(r)||qr(r)}function Yr(r){return Mr(r)&&r>=0&&r<=1}function zr(r){return qr(r)&&r.valueOf()>=0&&r.valueOf()<=1}function Br(r){return Yr(r)||zr(r)}p(Xr,"isPrimitive",Mr),p(Xr,"isObject",qr),p(Br,"isPrimitive",Yr),p(Br,"isObject",zr);var Dr=.6931471803691238,Jr=1.9082149292705877e-10;function Kr(r){var n,t,e,i,o,a,u,f,c,p,l,y;return 0===r?b:s(r)||r<0?NaN:(o=0,(t=gr(r))<1048576&&(o-=54,t=gr(r*=0x40000000000000)),t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(f=(t&=1048575)+614244&1048576|0)>>20|0,u=(r=Sr(r,t|1072693248^f))-1,(1048575&2+t)<3?0===u?0===o?0:o*Dr+o*Jr:(a=u*u*(.5-.3333333333333333*u),0===o?u-a:o*Dr-(a-o*Jr-u)):(f=t-398458|0,c=440401-t|0,i=(l=(y=(p=u/(2+u))*p)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-p*(n+a)):o*Dr-(n-(p*(n+a)+o*Jr)-u)):0===o?u-p*(u-a):o*Dr-(p*(u-a)-o*Jr-u))))}function Qr(r){var n;return s(r)||r<=0||r>=1?NaN:(n=1-r,(-r*Kr(r)-n*Kr(n))/r)}function rn(r){return s(r)||r<=0||r>=1?NaN:6+r*r/(1-r)}function nn(r){return s(r)||r<0||r>1?NaN:(1-r)/r}var tn=Math.ceil;var en=[0,0];function on(r){var n,t,e,i,o;if(s(r)||r<0)return NaN;if(ir(en,r),o=0,(t=en[0])<1048576){if(0==(2147483647&t|en[1]))return b;o-=54,t=gr(r*=0x40000000000000)}return t>=2146435072?r+r:(o+=(t>>20)-1023|0,o+=(i=(t&=1048575)+614244&1048576|0)>>20|0,e=function(r){var n,t,e,i,o,a,u,f,c,p,s;return o=r-1,(1048575&2+(i=gr(r)))<3?0===o?0:o*o*(.3333333333333333*o-.5):(p=(i&=1048575)-398458|0,s=440401-i|0,t=(c=(u=(a=o/(2+o))*a)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),f=e+t,(p|=s)>0?a*((n=.5*o*o)+f)-n:a*(f-o))}(r=Sr(r,t|1072693248^i)),1.6751713164886512e-10*((r-=1)+e)+1.4426950407214463*(r-(n=fr(r,0))+e)+1.4426950407214463*n+o)}function an(r){return s(r)||r<0||r>1?NaN:tn(-1/on(1-r))-1}function un(r){return s(r)||r<0||r>1?NaN:0}function fn(r){return s(r)||r<=0||r>=1?NaN:(2-r)/N(1-r)}function cn(r){return s(r)||r<=0||r>=1?NaN:N(1-r)/r}function pn(r){return s(r)||r<=0||r>=1?NaN:(1-r)/(r*r)}var sn=.6931471803691238,ln=1.9082149292705877e-10;function yn(r){var n,t,e,i,o,a,u,f,c,p;if(r<-1||s(r))return NaN;if(-1===r)return b;if(r===h)return r;if(0===r)return r;if(p=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(p=0,i=r,t=1)}return 0!==p&&(e<9007199254740992?(o=(p=((t=gr(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),o/=c):(p=((t=gr(c=r))>>20)-1023,o=0),(t&=1048575)<434334?c=Sr(c,1072693248|t):(p+=1,c=Sr(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?p*sn+(o+=p*ln):p*sn-((f=n*(1-.6666666666666666*i))-(p*ln+o)-i):(f=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===p?i-(n-a*(n+f)):p*sn-(n-(a*(n+f)+(p*ln+o))-i))}function vn(r,n){return s(r)||s(n)||n<0||n>1?NaN:r<0?b:r===h?0:yn(-Hr(1-n,(r=l(r))+1))}function gn(r){return l(r)===r&&r>=0}function hn(r,n){var t;return s(r)||s(n)||n<0||n>1?NaN:gn(r)?(t=1-n,Kr(n)+r*Kr(t)):b}function dn(r){return r>=0&&r<=1}function bn(r){return r<0?tn(r):l(r)}p(vn,"factory",(function(r){return s(r)||r<0||r>1?Cr(NaN):function(n){if(s(n))return NaN;if(n<0)return b;if(n===h)return 0;return n=l(n),yn(-Hr(1-r,n+1))}})),p(hn,"factory",(function(r){return s(r)||r<0||r>1?Cr(NaN):function(n){var t;if(s(n))return NaN;if(gn(n))return t=1-r,Kr(r)+n*Kr(t);return b}}));function wn(r){var n;return s(r)||r===h?r:r===b?0:r>709.782712893384?h:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,i,o,a;return Vr(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=bn(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Nn(r,n){var t,e;return s(r)||!dn(n)||r>=-Kr(e=1-n)?NaN:n*(t=wn(r))/(1-e*t)}function mn(r,n){return s(r)||s(n)||n<0||n>1?NaN:gn(r)?n*Hr(1-n,r):0}function An(r){return 0===r&&1/r===h}function _n(r,n){var t,e,i,o;if(2===(t=arguments.length))return s(r)||s(n)?NaN:r===h||n===h?h:r===n&&0===r?An(r)?r:n:r>n?r:n;for(e=b,o=0;o<t;o++){if(s(i=arguments[o])||i===h)return i;(i>e||i===e&&0===i&&An(i))&&(e=i)}return e}function En(r,n){return s(n)||s(r)||n<0||n>1||r<0||r>1?NaN:1===r?h:_n(0,tn(Kr(1-r)/yn(-n)-(1+1e-12)))}function Un(r){return"number"==typeof r}function kn(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function Sn(r,n,t){var e=!1,i=n-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+kn(i):kn(i)+r,e&&(r="-"+r)),r}p(Nn,"factory",(function(r){return dn(r)?function(n){var t,e;if(s(n))return NaN;if(n>=-Kr(e=1-r))return NaN;return t=wn(n),r*t/(1-e*t)}:Cr(NaN)})),p(mn,"factory",(function(r){return s(r)||r<0||r>1?Cr(NaN):function(n){if(s(n))return NaN;if(gn(n))return r*Hr(1-r,n);return 0}})),p(En,"factory",(function(r){return s(r)||r<0||r>1?Cr(NaN):function(n){if(s(n)||n<0||n>1)return NaN;if(1===n)return h;return _n(0,tn(Kr(1-n)/yn(-r)-(1+1e-12)))}}));var In=String.prototype.toLowerCase,jn=String.prototype.toUpperCase;function xn(r){var n,t,e;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,e=parseInt(t,10),!isFinite(e)){if(!Un(t))throw new Error("invalid integer. Value: "+t);e=0}return e<0&&("u"===r.specifier||10!==n)&&(e=4294967295+e+1),e<0?(t=(-e).toString(n),r.precision&&(t=Sn(t,r.precision,r.padRight)),t="-"+t):(t=e.toString(n),e||r.precision?r.precision&&(t=Sn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===jn.call(r.specifier)?jn.call(t):In.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Fn(r){return"string"==typeof r}var On=Math.abs,Tn=String.prototype.toLowerCase,Vn=String.prototype.toUpperCase,Gn=String.prototype.replace,$n=/e\+(\d)$/,Pn=/e-(\d)$/,Hn=/^(\d+)$/,Wn=/^(\d+)e/,Cn=/\.0$/,Ln=/\.0*e/,Mn=/(\..*[^0])0*e/;function Rn(r){var n,t,e=parseFloat(r.arg);if(!isFinite(e)){if(!Un(r.arg))throw new Error("invalid floating-point number. Value: "+t);e=r.arg}switch(r.specifier){case"e":case"E":t=e.toExponential(r.precision);break;case"f":case"F":t=e.toFixed(r.precision);break;case"g":case"G":On(e)<1e-4?((n=r.precision)>0&&(n-=1),t=e.toExponential(n)):t=e.toPrecision(r.precision),r.alternate||(t=Gn.call(t,Mn,"$1e"),t=Gn.call(t,Ln,"e"),t=Gn.call(t,Cn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Gn.call(t,$n,"e+0$1"),t=Gn.call(t,Pn,"e-0$1"),r.alternate&&(t=Gn.call(t,Hn,"$1."),t=Gn.call(t,Wn,"$1.e")),e>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Vn.call(r.specifier)?Vn.call(t):Tn.call(t)}function Zn(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function qn(r,n,t){var e=n-r.length;return e<0?r:r=t?r+Zn(e):Zn(e)+r}var Xn=String.fromCharCode,Yn=isNaN,zn=Array.isArray;function Bn(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function Dn(r){var n,t,e,i,o,a,u,f,c;if(!zn(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(Fn(e=r[f]))a+=e;else{if(n=void 0!==e.precision,!(e=Bn(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),t=e.flags,c=0;c<t.length;c++)switch(i=t.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,Yn(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,Yn(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=xn(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!Yn(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Yn(o)?String(e.arg):Xn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=Rn(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=Sn(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=qn(e.arg,e.width,e.padRight)),a+=e.arg||"",u+=1}return a}var Jn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Kn(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function Qn(r){var n,t,e,i;for(t=[],i=0,e=Jn.exec(r);e;)(n=r.slice(i,Jn.lastIndex-e[0].length)).length&&t.push(n),t.push(Kn(e)),i=Jn.lastIndex,e=Jn.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function rt(r){return"string"==typeof r}function nt(r){var n,t,e;if(!rt(r))throw new TypeError(nt("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=Qn(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return Dn.apply(null,t)}function tt(){var r;if(!(this instanceof tt))return 0===arguments.length?new tt:new tt(arguments[0]);if(arguments.length){if(!Yr(r=arguments[0]))throw new TypeError(nt("invalid argument. Mean parameter `%s` must be a probability. Value: `%s`.","p",r))}else r=.5;return f(this,"p",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Yr(n))throw new TypeError(nt("invalid assignment. Must be a probability. Value: `%s`.",n));r=n}}),this}Lr(tt.prototype,"entropy",(function(){return Qr(this.p)})),Lr(tt.prototype,"kurtosis",(function(){return rn(this.p)})),Lr(tt.prototype,"mean",(function(){return nn(this.p)})),Lr(tt.prototype,"median",(function(){return an(this.p)})),Lr(tt.prototype,"mode",(function(){return un(this.p)})),Lr(tt.prototype,"skewness",(function(){return fn(this.p)})),Lr(tt.prototype,"stdev",(function(){return cn(this.p)})),Lr(tt.prototype,"variance",(function(){return pn(this.p)})),p(tt.prototype,"cdf",(function(r){return Wr(r,this.p)})),p(tt.prototype,"logcdf",(function(r){return vn(r,this.p)})),p(tt.prototype,"logpmf",(function(r){return hn(r,this.p)})),p(tt.prototype,"mgf",(function(r){return Nn(r,this.p)})),p(tt.prototype,"pmf",(function(r){return mn(r,this.p)})),p(tt.prototype,"quantile",(function(r){return En(r,this.p)}));var et={};c(et,"cdf",Wr),c(et,"Geometric",tt),c(et,"entropy",Qr),c(et,"kurtosis",rn),c(et,"logcdf",vn),c(et,"logpmf",hn),c(et,"mean",nn),c(et,"median",an),c(et,"mgf",Nn),c(et,"mode",un),c(et,"pmf",mn),c(et,"quantile",En),c(et,"skewness",fn),c(et,"stdev",cn),c(et,"variance",pn);export{tt as Geometric,Wr as cdf,et as default,Qr as entropy,rn as kurtosis,vn as logcdf,hn as logpmf,nn as mean,an as median,Nn as mgf,un as mode,mn as pmf,En as quantile,fn as skewness,cn as stdev,pn as variance};
//# sourceMappingURL=mod.js.map
