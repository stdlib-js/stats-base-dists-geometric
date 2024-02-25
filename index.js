// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,o=n-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,b=/(\..*[^0])0*e/;function w(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,b,"$1e"),e=p.call(e,h,"e"),e=p.call(e,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,y,"e-0$1"),r.alternate&&(e=p.call(e,g,"$1."),e=p.call(e,d,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function m(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}var N=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function U(r){var n,t,e,o,a,f,c,s,p,l,y,g,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))f+=e;else{if(n=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),t=e.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,A(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,A(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!A(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=A(a)?String(e.arg):N(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,y=e.width,g=e.padRight,d=void 0,(d=y-l.length)<0?l:l=g?l+m(d):m(d)+l)),f+=e.arg||"",c+=1}return f}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function j(r){var n,t,e,i;for(t=[],i=0,e=k.exec(r);e;)(n=r.slice(i,k.lastIndex-e[0].length)).length&&t.push(n),t.push(S(e)),i=k.lastIndex,e=k.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function x(r){var n,t;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[j(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return U.apply(null,n)}var I=Object.prototype,F=I.toString,T=I.__defineGetter__,O=I.__defineSetter__,V=I.__lookupGetter__,G=I.__lookupSetter__,$=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,n)||G.call(r,n)?(e=r.__proto__,r.__proto__=I,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&T&&T.call(r,n,t.get),a&&O&&O.call(r,n,t.set),r};function P(r,n,t){$(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function H(r,n,t){$(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function W(r){return r!=r}var C=Math.floor;function L(r){return C(r)===r}function M(r){return L(r/2)}function R(r){return M(r>0?r-1:r+1)}var Z=Number.POSITIVE_INFINITY,q=Number,X=q.NEGATIVE_INFINITY;function Y(r){return r===Z||r===X}var z=Math.sqrt;function B(r){return Math.abs(r)}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return D&&"symbol"==typeof Symbol.toStringTag}var K,Q=Object.prototype.toString,rr=Object.prototype.hasOwnProperty,nr="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof nr?nr.toStringTag:"",er=J()?function(r){var n,t,e,i,o;if(null==r)return Q.call(r);t=r[tr],o=tr,n=null!=(i=r)&&rr.call(i,o);try{r[tr]=void 0}catch(n){return Q.call(r)}return e=Q.call(r),n?r[tr]=t:delete r[tr],e}:function(r){return Q.call(r)},ir="function"==typeof Uint32Array,or="function"==typeof Uint32Array?Uint32Array:null,ar="function"==typeof Uint32Array?Uint32Array:void 0;K=function(){var r,n,t;if("function"!=typeof or)return!1;try{n=new or(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ir&&t instanceof Uint32Array||"[object Uint32Array]"===er(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var ur,fr=K,cr="function"==typeof Float64Array,sr="function"==typeof Float64Array?Float64Array:null,pr="function"==typeof Float64Array?Float64Array:void 0;ur=function(){var r,n,t;if("function"!=typeof sr)return!1;try{n=new sr([1,3.14,-3.14,NaN]),t=n,r=(cr&&t instanceof Float64Array||"[object Float64Array]"===er(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var lr,yr=ur,gr="function"==typeof Uint8Array,dr="function"==typeof Uint8Array?Uint8Array:null,vr="function"==typeof Uint8Array?Uint8Array:void 0;lr=function(){var r,n,t;if("function"!=typeof dr)return!1;try{n=new dr(n=[1,3.14,-3.14,256,257]),t=n,r=(gr&&t instanceof Uint8Array||"[object Uint8Array]"===er(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var hr,br=lr,wr="function"==typeof Uint16Array,mr="function"==typeof Uint16Array?Uint16Array:null,Nr="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,n,t;if("function"!=typeof mr)return!1;try{n=new mr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(wr&&t instanceof Uint16Array||"[object Uint16Array]"===er(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var Ar,_r={uint16:hr,uint8:br};(Ar=new _r.uint16(1))[0]=4660;var Er,Ur,kr=52===new _r.uint8(Ar.buffer)[0];!0===kr?(Er=1,Ur=0):(Er=0,Ur=1);var Sr={HIGH:Er,LOW:Ur},jr=new yr(1),xr=new fr(jr.buffer),Ir=Sr.HIGH,Fr=Sr.LOW;function Tr(r,n,t,e){return jr[0]=r,n[e]=xr[Ir],n[e+t]=xr[Fr],n}function Or(r){return Tr(r,[0,0],1,0)}H(Or,"assign",Tr);var Vr=!0===kr?0:1,Gr=new yr(1),$r=new fr(Gr.buffer);function Pr(r,n){return Gr[0]=r,$r[Vr]=n>>>0,Gr[0]}function Hr(r){return 0|r}var Wr,Cr,Lr=2147483647,Mr=2147483648,Rr=!0===kr?1:0,Zr=new yr(1),qr=new fr(Zr.buffer);function Xr(r){return Zr[0]=r,qr[Rr]}!0===kr?(Wr=1,Cr=0):(Wr=0,Cr=1);var Yr={HIGH:Wr,LOW:Cr},zr=new yr(1),Br=new fr(zr.buffer),Dr=Yr.HIGH,Jr=Yr.LOW;function Kr(r,n){return Br[Dr]=r,Br[Jr]=n,zr[0]}var Qr=[0,0];function rn(r,n){var t,e;return Or.assign(r,Qr,1,0),t=Qr[0],t&=Lr,e=Xr(n),Kr(t|=e&=Mr,Qr[1])}var nn=1072693247,tn=1e300,en=1e-300,on=!0===kr?1:0,an=new yr(1),un=new fr(an.buffer);function fn(r,n){return an[0]=r,un[on]=n>>>0,an[0]}var cn=1023,sn=1048575,pn=1048576,ln=1072693248,yn=536870912,gn=524288,dn=20,vn=9007199254740992,hn=.9617966939259756,bn=.9617967009544373,wn=-7.028461650952758e-9,mn=[1,1.5],Nn=[0,.5849624872207642],An=[0,1.350039202129749e-8],_n=1.4426950408889634,En=1.4426950216293335,Un=1.9259629911266175e-8,kn=1023,Sn=-1023,jn=-1074,xn=22250738585072014e-324,In=4503599627370496;function Fn(r,n,t,e){return W(r)||Y(r)?(n[e]=r,n[e+t]=0,n):0!==r&&B(r)<xn?(n[e]=r*In,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}H((function(r){return Fn(r,[0,0],1,0)}),"assign",Fn);var Tn=2146435072,On=2220446049250313e-31,Vn=2148532223,Gn=[0,0],$n=[0,0];function Pn(r,n){var t,e;return 0===n||0===r||W(r)||Y(r)?r:(Fn(r,Gn,1,0),r=Gn[0],n+=Gn[1],n+=function(r){var n=Xr(r);return(n=(n&Tn)>>>20)-cn|0}(r),n<jn?rn(0,r):n>kn?r<0?X:Z:(n<=Sn?(n+=52,e=On):e=1,Or.assign(r,$n,1,0),t=$n[0],t&=Vn,e*Kr(t|=n+cn<<20,$n[1])))}var Hn=.6931471805599453,Wn=1048575,Cn=1048576,Ln=1071644672,Mn=20,Rn=.6931471824645996,Zn=-1.904654299957768e-9,qn=1072693247,Xn=1105199104,Yn=1139802112,zn=1083179008,Bn=1072693248,Dn=1083231232,Jn=3230714880,Kn=31,Qn=1e300,rt=1e-300,nt=8008566259537294e-32,tt=[0,0],et=[0,0];function it(r,n){var t,e,i,o,a,u,f,c,s,p,l,y,g,d;if(W(r)||W(n))return NaN;if(Or.assign(n,tt,1,0),a=tt[0],0===tt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return z(r);if(-.5===n)return 1/z(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Y(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:B(r)<1==(n===Z)?0:Z}(r,n)}if(Or.assign(r,tt,1,0),o=tt[0],0===tt[1]){if(0===o)return function(r,n){return n===X?Z:n===Z?0:n>0?R(n)?r:0:R(n)?rn(Z,r):Z}(r,n);if(1===r)return 1;if(-1===r&&R(n))return-1;if(Y(r))return r===X?it(-0,-n):n<0?0:Z}if(r<0&&!1===L(n))return(r-r)/(r-r);if(i=B(r),t=o&Lr|0,e=a&Lr|0,f=a>>>Kn|0,u=(u=o>>>Kn|0)&&R(n)?-1:1,e>Xn){if(e>Yn)return function(r,n){return(Xr(r)&Lr)<=nn?n<0?tn*tn:en*en:n>0?tn*tn:en*en}(r,n);if(t<qn)return 1===f?u*Qn*Qn:u*rt*rt;if(t>Bn)return 0===f?u*Qn*Qn:u*rt*rt;l=function(r,n){var t,e,i,o,a,u,f;return o=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(u=i*Un-o*_n)-((e=Pr(e=(a=En*i)+u,0))-a),r[0]=e,r[1]=t,r}(et,i)}else l=function(r,n,t){var e,i,o,a,u,f,c,s,p,l,y,g,d,v,h,b,w,m,N,A,_;return m=0,t<pn&&(m-=53,t=Xr(n*=vn)),m+=(t>>dn)-cn|0,t=(N=t&sn|0)|ln|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,t-=pn),a=Pr(i=(b=(n=fn(n,t))-(c=mn[A]))*(w=1/(n+c)),0),e=(t>>1|yn)+gn,f=fn(0,e+=A<<18),h=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Pr(f=3+(o=a*a)+(h+=(u=w*(b-a*f-a*(n-(f-c))))*(a+i)),0),p=Pr(p=(b=a*f)+(w=u*f+(h-(f-3-o))*i),0),l=bn*p,d=(y=wn*p+(w-(p-b))*hn+An[A])-((g=Pr(g=l+y+(s=Nn[A])+(v=m),0))-v-s-l),r[0]=g,r[1]=d,r}(et,i,t);if(y=(p=(n-(c=Pr(n,0)))*l[0]+n*l[1])+(s=c*l[0]),Or.assign(y,tt,1,0),g=Hr(tt[0]),d=Hr(tt[1]),g>=zn){if(0!=(g-zn|d))return u*Qn*Qn;if(p+nt>y-s)return u*Qn*Qn}else if((g&Lr)>=Dn){if(0!=(g-Jn|d))return u*rt*rt;if(p<=y-s)return u*rt*rt}return y=function(r,n,t){var e,i,o,a,u,f,c,s,p,l;return p=((s=r&Lr|0)>>Mn)-cn|0,c=0,s>Ln&&(i=fn(0,((c=r+(Cn>>p+1)>>>0)&~(Wn>>(p=((c&Lr)>>Mn)-cn|0)))>>>0),c=(c&Wn|Cn)>>Mn-p>>>0,r<0&&(c=-c),n-=i),r=Hr(r=Xr(f=1-((f=(o=(i=Pr(i=t+n,0))*Rn)+(a=(t-(i-n))*Hn+i*Zn))*(e=f-(i=f*f)*(0===(l=i)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<Mn>>>0)>>Mn<=0?Pn(f,c):fn(f,r)}(g,s,p),u*y}function ot(r,n){return W(r)||W(n)||n<0||n>1?NaN:r<0?0:r===Z?1:1-it(1-n,(r=C(r))+1)}function at(r){return function(){return r}}function ut(r,n,t){$(r,n,{configurable:!1,enumerable:!1,get:t})}function ft(r){return"number"==typeof r}H(ot,"factory",(function(r){return W(r)||r<0||r>1?at(NaN):function(n){return W(n)?NaN:n<0?0:n===Z?1:(n=C(n),1-it(1-r,n+1))}}));var ct=q.prototype.toString,st=J();function pt(r){return"object"==typeof r&&(r instanceof q||(st?function(r){try{return ct.call(r),!0}catch(r){return!1}}(r):"[object Number]"===er(r)))}function lt(r){return ft(r)||pt(r)}function yt(r){return ft(r)&&r>=0&&r<=1}function gt(r){return pt(r)&&r.valueOf()>=0&&r.valueOf()<=1}function dt(r){return yt(r)||gt(r)}H(lt,"isPrimitive",ft),H(lt,"isObject",pt),H(dt,"isPrimitive",yt),H(dt,"isObject",gt);var vt=.6931471803691238,ht=1.9082149292705877e-10,bt=0x40000000000000,wt=.3333333333333333,mt=1048575,Nt=2146435072,At=1048576,_t=1072693248;function Et(r){var n,t,e,i,o,a,u,f,c,s,p,l;return 0===r?X:W(r)||r<0?NaN:(o=0,(t=Xr(r))<At&&(o-=54,t=Xr(r*=bt)),t>=Nt?r+r:(o+=(t>>20)-cn|0,o+=(f=614244+(t&=mt)&1048576|0)>>20|0,u=(r=fn(r,t|f^_t))-1,(mt&2+t)<3?0===u?0===o?0:o*vt+o*ht:(a=u*u*(.5-wt*u),0===o?u-a:o*vt-(a-o*ht-u)):(f=t-398458|0,c=440401-t|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=e+i,(f|=c)>0?(n=.5*u*u,0===o?u-(n-s*(n+a)):o*vt-(n-(s*(n+a)+o*ht)-u)):0===o?u-s*(u-a):o*vt-(s*(u-a)-o*ht-u))))}function Ut(r){var n;return W(r)||r<=0||r>=1?NaN:(n=1-r,(-r*Et(r)-n*Et(n))/r)}function kt(r){return W(r)||r<=0||r>=1?NaN:6+r*r/(1-r)}function St(r){return W(r)||r<0||r>1?NaN:(1-r)/r}var jt=Math.ceil,xt=1048575,It=.3333333333333333,Ft=0x40000000000000,Tt=1.4426950407214463,Ot=1.6751713164886512e-10,Vt=2146435072,Gt=1048576,$t=1072693248,Pt=[0,0];function Ht(r){var n,t,e,i,o,a;if(W(r)||r<0)return NaN;if(Or.assign(r,Pt,1,0),t=Pt[0],e=Pt[1],a=0,t<Gt){if(0==(t&Lr|e))return X;a-=54,t=Xr(r*=Ft)}return t>=Vt?r+r:(a+=(t>>20)-cn|0,a+=(o=614244+(t&=Wn)&1048576|0)>>20|0,i=function(r){var n,t,e,i,o,a,u,f,c,s,p;return i=Xr(r),o=r-1,(xt&2+i)<3?0===o?0:o*o*(It*o-.5):(s=(i&=xt)-398458|0,p=440401-i|0,t=(c=(u=(a=o/(2+o))*a)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),f=e+t,(s|=p)>0?a*((n=.5*o*o)+f)-n:a*(f-o))}(r=fn(r,t|o^$t)),n=Pr(r-=1,0),(r+i)*Ot+(r-n+i)*Tt+n*Tt+a)}function Wt(r){return W(r)||r<0||r>1?NaN:jt(-1/Ht(1-r))-1}function Ct(r){return W(r)||r<0||r>1?NaN:0}function Lt(r){return W(r)||r<=0||r>=1?NaN:(2-r)/z(1-r)}function Mt(r){return W(r)||r<=0||r>=1?NaN:z(1-r)/r}function Rt(r){return W(r)||r<=0||r>=1?NaN:(1-r)/(r*r)}var Zt=.6931471803691238,qt=1.9082149292705877e-10,Xt=.41421356237309503,Yt=-.2928932188134525,zt=1.862645149230957e-9,Bt=5551115123125783e-32,Dt=9007199254740992,Jt=.6666666666666666;function Kt(r){var n,t,e,i,o,a,u,f,c,s;if(r<-1||W(r))return NaN;if(-1===r)return X;if(r===Z)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<Xt){if(e<zt)return e<Bt?r:r-r*r*.5;r>Yt&&(s=0,i=r,t=1)}return 0!==s&&(e<Dt?(o=(s=((t=Xr(c=1+r))>>20)-cn)>0?1-(c-r):r-(c-1),o/=c):(s=((t=Xr(c=r))>>20)-cn,o=0),(t&=1048575)<434334?c=fn(c,1072693248|t):(s+=1,c=fn(c,1071644672|t),t=1048576-t>>2),i=c-1),n=.5*i*i,0===t?0===i?s*Zt+(o+=s*qt):s*Zt-((f=n*(1-Jt*i))-(s*qt+o)-i):(f=(u=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-a*(n+f)):s*Zt-(n-(a*(n+f)+(s*qt+o))-i))}function Qt(r,n){return W(r)||W(n)||n<0||n>1?NaN:r<0?X:r===Z?0:Kt(-it(1-n,(r=C(r))+1))}function re(r){return C(r)===r&&r>=0}function ne(r,n){var t;return W(r)||W(n)||n<0||n>1?NaN:re(r)?(t=1-n,Et(n)+r*Et(t)):X}function te(r){return r>=0&&r<=1}function ee(r){return r<0?jt(r):C(r)}H(Qt,"factory",(function(r){return W(r)||r<0||r>1?at(NaN):function(n){return W(n)?NaN:n<0?X:n===Z?0:(n=C(n),Kt(-it(1-r,n+1)))}})),H(ne,"factory",(function(r){return W(r)||r<0||r>1?at(NaN):function(n){var t;return W(n)?NaN:re(n)?(t=1-r,Et(r)+n*Et(t)):X}}));var ie=.6931471803691238,oe=1.9082149292705877e-10,ae=1.4426950408889634,ue=709.782712893384,fe=-745.1332191019411,ce=1/(1<<28),se=-ce;function pe(r){var n;return W(r)||r===Z?r:r===X?0:r>ue?Z:r<fe?0:r>se&&r<ce?1+r:function(r,n,t){var e,i,o,a;return Pn(1-(n-(e=r-n)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-(n=ee(r<0?ae*r-.5:ae*r+.5))*ie,n*oe,n)}function le(r,n){var t,e;return W(r)||!te(n)||r>=-Et(e=1-n)?NaN:n*(t=pe(r))/(1-e*t)}function ye(r,n){return W(r)||W(n)||n<0||n>1?NaN:re(r)?n*it(1-n,r):0}function ge(r,n){return W(r)||W(n)?NaN:r===Z||n===Z?Z:r===n&&0===r?function(r){return 0===r&&1/r===Z}(r)?r:n:r>n?r:n}function de(r,n){return W(n)||W(r)||n<0||n>1||r<0||r>1?NaN:1===r?Z:ge(0,jt(Et(1-r)/Kt(-n)-(1+1e-12)))}function ve(){var r;if(!(this instanceof ve))return 0===arguments.length?new ve:new ve(arguments[0]);if(arguments.length){if(!yt(r=arguments[0]))throw new TypeError(x("invalid argument. Mean parameter `%s` must be a probability. Value: `%s`.","p",r))}else r=.5;return $(this,"p",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!yt(n))throw new TypeError(x("invalid assignment. Must be a probability. Value: `%s`.",n));r=n}}),this}H(le,"factory",(function(r){return te(r)?function(n){var t,e;return W(n)||n>=-Et(e=1-r)?NaN:(t=pe(n),r*t/(1-e*t))}:at(NaN)})),H(ye,"factory",(function(r){return W(r)||r<0||r>1?at(NaN):function(n){return W(n)?NaN:re(n)?r*it(1-r,n):0}})),H(de,"factory",(function(r){return W(r)||r<0||r>1?at(NaN):function(n){return W(n)||n<0||n>1?NaN:1===n?Z:ge(0,jt(Et(1-n)/Kt(-r)-(1+1e-12)))}})),ut(ve.prototype,"entropy",(function(){return Ut(this.p)})),ut(ve.prototype,"kurtosis",(function(){return kt(this.p)})),ut(ve.prototype,"mean",(function(){return St(this.p)})),ut(ve.prototype,"median",(function(){return Wt(this.p)})),ut(ve.prototype,"mode",(function(){return Ct(this.p)})),ut(ve.prototype,"skewness",(function(){return Lt(this.p)})),ut(ve.prototype,"stdev",(function(){return Mt(this.p)})),ut(ve.prototype,"variance",(function(){return Rt(this.p)})),H(ve.prototype,"cdf",(function(r){return ot(r,this.p)})),H(ve.prototype,"logcdf",(function(r){return Qt(r,this.p)})),H(ve.prototype,"logpmf",(function(r){return ne(r,this.p)})),H(ve.prototype,"mgf",(function(r){return le(r,this.p)})),H(ve.prototype,"pmf",(function(r){return ye(r,this.p)})),H(ve.prototype,"quantile",(function(r){return de(r,this.p)}));var he={};return P(he,"cdf",ot),P(he,"Geometric",ve),P(he,"entropy",Ut),P(he,"kurtosis",kt),P(he,"logcdf",Qt),P(he,"logpmf",ne),P(he,"mean",St),P(he,"median",Wt),P(he,"mgf",le),P(he,"mode",Ct),P(he,"pmf",ye),P(he,"quantile",de),P(he,"skewness",Lt),P(he,"stdev",Mt),P(he,"variance",Rt),he},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).geometric=n();
//# sourceMappingURL=index.js.map