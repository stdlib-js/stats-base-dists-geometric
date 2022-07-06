// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,i=t.__defineSetter__,o=t.__lookupGetter__,f=t.__lookupSetter__;var a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,p,y;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(o.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),p="get"in a,y="set"in a,l&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(r,n,a.get),y&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function l(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function p(r){return r!=r}var y=Math.floor;function v(r){return y(r)===r}function N(r){return v(r/2)}function s(r){return N(r>0?r-1:r+1)}var b=Number.POSITIVE_INFINITY,m=Number,h=m.NEGATIVE_INFINITY;function w(r){return r===b||r===h}var d=Math.sqrt;function g(r){return Math.abs(r)}var A="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function _(){return A&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var j=Object.prototype.hasOwnProperty;var O="function"==typeof Symbol?Symbol.toStringTag:"";var I=_()?function(r){var n,t,e,u,i;if(null==r)return U.call(r);t=r[O],i=O,n=null!=(u=r)&&j.call(u,i);try{r[O]=void 0}catch(n){return U.call(r)}return e=U.call(r),n?r[O]=t:delete r[O],e}:function(r){return U.call(r)},S="function"==typeof Uint32Array;var E="function"==typeof Uint32Array?Uint32Array:null;var F,T="function"==typeof Uint32Array?Uint32Array:void 0;F=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(S&&t instanceof Uint32Array||"[object Uint32Array]"===I(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var G=F,H="function"==typeof Float64Array;var P="function"==typeof Float64Array?Float64Array:null;var k,M="function"==typeof Float64Array?Float64Array:void 0;k=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P([1,3.14,-3.14,NaN]),t=n,r=(H&&t instanceof Float64Array||"[object Float64Array]"===I(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var V=k,x="function"==typeof Uint8Array;var L="function"==typeof Uint8Array?Uint8Array:null;var W,q="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,256,257]),t=n,r=(x&&t instanceof Uint8Array||"[object Uint8Array]"===I(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?q:function(){throw new Error("not implemented")};var Y=W,C="function"==typeof Uint16Array;var z="function"==typeof Uint16Array?Uint16Array:null;var B,D="function"==typeof Uint16Array?Uint16Array:void 0;B=function(){var r,n,t;if("function"!=typeof z)return!1;try{n=new z(n=[1,3.14,-3.14,65536,65537]),t=n,r=(C&&t instanceof Uint16Array||"[object Uint16Array]"===I(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?D:function(){throw new Error("not implemented")};var J,K={uint16:B,uint8:Y};(J=new K.uint16(1))[0]=4660;var Q,R,X=52===new K.uint8(J.buffer)[0];!0===X?(Q=1,R=0):(Q=0,R=1);var Z={HIGH:Q,LOW:R},$=new V(1),rr=new G($.buffer),nr=Z.HIGH,tr=Z.LOW;function er(r,n){return $[0]=n,r[0]=rr[nr],r[1]=rr[tr],r}function ur(r,n){return 1===arguments.length?er([0,0],r):er(r,n)}var ir=!0===X?0:1,or=new V(1),fr=new G(or.buffer);function ar(r,n){return or[0]=r,fr[ir]=n>>>0,or[0]}function cr(r){return 0|r}var lr,pr,yr=!0===X?1:0,vr=new V(1),Nr=new G(vr.buffer);function sr(r){return vr[0]=r,Nr[yr]}!0===X?(lr=1,pr=0):(lr=0,pr=1);var br={HIGH:lr,LOW:pr},mr=new V(1),hr=new G(mr.buffer),wr=br.HIGH,dr=br.LOW;function gr(r,n){return hr[wr]=r,hr[dr]=n,mr[0]}var Ar=[0,0];function _r(r,n){var t,e;return ur(Ar,r),t=Ar[0],t&=2147483647,e=sr(n),gr(t|=e&=2147483648,Ar[1])}var Ur=!0===X?1:0,jr=new V(1),Or=new G(jr.buffer);function Ir(r,n){return jr[0]=r,Or[Ur]=n>>>0,jr[0]}var Sr=[1,1.5],Er=[0,.5849624872207642],Fr=[0,1.350039202129749e-8];function Tr(r,n){return p(n)||w(n)?(r[0]=n,r[1]=0,r):0!==n&&g(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Gr=[0,0],Hr=[0,0];function Pr(r,n){var t,e;return 0===n||0===r||p(r)||w(r)?r:(function(r,n){1===arguments.length?Tr([0,0],r):Tr(r,n)}(Gr,r),n+=Gr[1],n+=function(r){var n=sr(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Gr[0]),n<-1074?_r(0,r):n>1023?r<0?h:b:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,ur(Hr,r),t=Hr[0],t&=2148532223,e*gr(t|=n+1023<<20,Hr[1])))}var kr=1e300,Mr=[0,0],Vr=[0,0];function xr(r,n){var t,e,u,i,o,f,a,c,l,y,N,m,A,_;if(p(r)||p(n))return NaN;if(ur(Mr,n),o=Mr[0],0===Mr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return d(r);if(-.5===n)return 1/d(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(w(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:g(r)<1==(n===b)?0:b}(r,n)}if(ur(Mr,r),i=Mr[0],0===Mr[1]){if(0===i)return function(r,n){return n===h?b:n===b?0:n>0?s(n)?r:0:s(n)?_r(b,r):b}(r,n);if(1===r)return 1;if(-1===r&&s(n))return-1;if(w(r))return r===h?xr(-0,-n):n<0?0:b}if(r<0&&!1===v(n))return(r-r)/(r-r);if(u=g(r),t=2147483647&i|0,e=2147483647&o|0,a=o>>>31|0,f=(f=i>>>31|0)&&s(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&sr(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*kr*kr:1e-300*f*1e-300;if(t>1072693248)return 0===a?f*kr*kr:1e-300*f*1e-300;N=function(r,n){var t,e,u,i,o,f;return t=(o=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=ar(e=(i=1.4426950216293335*u)+o,0))-i),r[0]=e,r[1]=t,r}(Vr,u)}else N=function(r,n,t){var e,u,i,o,f,a,c,l,p,y,v,N,s,b,m,h,w,d,g,A,_;return d=0,t<1048576&&(d-=53,t=sr(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(g=1048575&t|0),g<=235662?A=0:g<767610?A=1:(A=0,d+=1,t-=1048576),o=ar(u=(h=(n=Ir(n,t))-(c=Sr[A]))*(w=1/(n+c)),0),e=524288+(t>>1|536870912),a=Ir(0,e+=A<<18),m=(i=u*u)*i*(0===(_=i)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),a=ar(a=3+(i=o*o)+(m+=(f=w*(h-o*a-o*(n-(a-c))))*(o+u)),0),s=(v=-7.028461650952758e-9*(p=ar(p=(h=o*a)+(w=f*a+(m-(a-3-i))*u),0))+.9617966939259756*(w-(p-h))+Fr[A])-((N=ar(N=(y=.9617967009544373*p)+v+(l=Er[A])+(b=d),0))-b-l-y),r[0]=N,r[1]=s,r}(Vr,u,t);if(y=(n-(c=ar(n,0)))*N[0]+n*N[1],l=c*N[0],ur(Mr,m=y+l),A=cr(Mr[0]),_=cr(Mr[1]),A>=1083179008){if(0!=(A-1083179008|_))return f*kr*kr;if(y+8008566259537294e-32>m-l)return f*kr*kr}else if((2147483647&A)>=1083231232){if(0!=(A-3230714880|_))return 1e-300*f*1e-300;if(y<=m-l)return 1e-300*f*1e-300}return m=function(r,n,t){var e,u,i,o,f,a,c,l,p,y,v;return y=((p=2147483647&r|0)>>20)-1023|0,l=0,p>1071644672&&(e=((l=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-y>>>0,r<0&&(l=-l),n-=i=Ir(0,e)),r=cr(r=sr(c=1-((c=(o=.6931471824645996*(i=ar(i=t+n,0)))+(f=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(v=i)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=f-(c-o))+c*a)-c))),(r+=l<<20>>>0)>>20<=0?Pr(c,l):Ir(c,r)}(A,l,y),f*m}function Lr(r,n){return p(r)||p(n)||n<0||n>1?NaN:r<0?0:r===b?1:1-xr(1-n,(r=y(r))+1)}function Wr(r){return function(){return r}}function qr(r,n,t){a(r,n,{configurable:!1,enumerable:!1,get:t})}function Yr(r){return"number"==typeof r}l(Lr,"factory",(function(r){return p(r)||r<0||r>1?Wr(NaN):function(n){if(p(n))return NaN;if(n<0)return 0;if(n===b)return 1;return n=y(n),1-xr(1-r,n+1)}}));var Cr=m.prototype.toString;var zr=_();function Br(r){return"object"==typeof r&&(r instanceof m||(zr?function(r){try{return Cr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===I(r)))}function Dr(r){return Yr(r)||Br(r)}function Jr(r){return Yr(r)&&r>=0&&r<=1}function Kr(r){return Br(r)&&r.valueOf()>=0&&r.valueOf()<=1}function Qr(r){return Jr(r)||Kr(r)}l(Dr,"isPrimitive",Yr),l(Dr,"isObject",Br),l(Qr,"isPrimitive",Jr),l(Qr,"isObject",Kr);var Rr=.6931471803691238,Xr=1.9082149292705877e-10;function Zr(r){var n,t,e,u,i,o,f,a,c,l,y,v;return 0===r?h:p(r)||r<0?NaN:(i=0,(t=sr(r))<1048576&&(i-=54,t=sr(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-1023|0,i+=(a=(t&=1048575)+614244&1048576|0)>>20|0,f=(r=Ir(r,t|1072693248^a))-1,(1048575&2+t)<3?0===f?0===i?0:i*Rr+i*Xr:(o=f*f*(.5-.3333333333333333*f),0===i?f-o:i*Rr-(o-i*Xr-f)):(a=t-398458|0,c=440401-t|0,u=(y=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),o=e+u,(a|=c)>0?(n=.5*f*f,0===i?f-(n-l*(n+o)):i*Rr-(n-(l*(n+o)+i*Xr)-f)):0===i?f-l*(f-o):i*Rr-(l*(f-o)-i*Xr-f))))}function $r(r){var n;return p(r)||r<=0||r>=1?NaN:(n=1-r,(-r*Zr(r)-n*Zr(n))/r)}function rn(r){return p(r)||r<=0||r>=1?NaN:6+r*r/(1-r)}function nn(r){return p(r)||r<0||r>1?NaN:(1-r)/r}var tn=Math.ceil;var en=[0,0];function un(r){var n,t,e,u,i;if(p(r)||r<0)return NaN;if(ur(en,r),i=0,(t=en[0])<1048576){if(0==(2147483647&t|en[1]))return h;i-=54,t=sr(r*=0x40000000000000)}return t>=2146435072?r+r:(i+=(t>>20)-1023|0,i+=(u=(t&=1048575)+614244&1048576|0)>>20|0,e=function(r){var n,t,e,u,i,o,f,a,c,l,p;return i=r-1,(1048575&2+(u=sr(r)))<3?0===i?0:i*i*(.3333333333333333*i-.5):(l=(u&=1048575)-398458|0,p=440401-u|0,t=(c=(f=(o=i/(2+i))*o)*f)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),e=f*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),a=e+t,(l|=p)>0?o*((n=.5*i*i)+a)-n:o*(a-i))}(r=Ir(r,t|1072693248^u)),1.6751713164886512e-10*((r-=1)+e)+1.4426950407214463*(r-(n=ar(r,0))+e)+1.4426950407214463*n+i)}function on(r){return p(r)||r<0||r>1?NaN:tn(-1/un(1-r))-1}function fn(r){return p(r)||r<0||r>1?NaN:0}function an(r){return p(r)||r<=0||r>=1?NaN:(2-r)/d(1-r)}function cn(r){return p(r)||r<=0||r>=1?NaN:d(1-r)/r}function ln(r){return p(r)||r<=0||r>=1?NaN:(1-r)/(r*r)}var pn=.6931471803691238,yn=1.9082149292705877e-10;function vn(r){var n,t,e,u,i,o,f,a,c,l;if(r<-1||p(r))return NaN;if(-1===r)return h;if(r===b)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(i=(l=((t=sr(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),i/=c):(l=((t=sr(c=r))>>20)-1023,i=0),(t&=1048575)<434334?c=Ir(c,1072693248|t):(l+=1,c=Ir(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?l*pn+(i+=l*yn):l*pn-((a=n*(1-.6666666666666666*u))-(l*yn+i)-u):(a=(f=(o=u/(2+u))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(f),0===l?u-(n-o*(n+a)):l*pn-(n-(o*(n+a)+(l*yn+i))-u))}function Nn(r,n){return p(r)||p(n)||n<0||n>1?NaN:r<0?h:r===b?0:vn(-xr(1-n,(r=y(r))+1))}function sn(r){return y(r)===r&&r>=0}function bn(r,n){var t;return p(r)||p(n)||n<0||n>1?NaN:sn(r)?(t=1-n,Zr(n)+r*Zr(t)):h}function mn(r){return r>=0&&r<=1}function hn(r){return r<0?tn(r):y(r)}l(Nn,"factory",(function(r){return p(r)||r<0||r>1?Wr(NaN):function(n){if(p(n))return NaN;if(n<0)return h;if(n===b)return 0;return n=y(n),vn(-xr(1-r,n+1))}})),l(bn,"factory",(function(r){return p(r)||r<0||r>1?Wr(NaN):function(n){var t;if(p(n))return NaN;if(sn(n))return t=1-r,Zr(r)+n*Zr(t);return h}}));function wn(r){var n;return p(r)||r===b?r:r===h?0:r>709.782712893384?b:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,i,o;return Pr(1-(n-(e=r-n)*(i=e-(u=e*e)*(0===(o=u)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=hn(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function dn(r,n){var t,e;return p(r)||!mn(n)||r>=-Zr(e=1-n)?NaN:n*(t=wn(r))/(1-e*t)}function gn(r,n){return p(r)||p(n)||n<0||n>1?NaN:sn(r)?n*xr(1-n,r):0}function An(r){return 0===r&&1/r===b}function _n(r,n){var t,e,u,i;if(2===(t=arguments.length))return p(r)||p(n)?NaN:r===b||n===b?b:r===n&&0===r?An(r)?r:n:r>n?r:n;for(e=h,i=0;i<t;i++){if(p(u=arguments[i])||u===b)return u;(u>e||u===e&&0===u&&An(u))&&(e=u)}return e}function Un(r,n){return p(n)||p(r)||n<0||n>1||r<0||r>1?NaN:1===r?b:_n(0,tn(Zr(1-r)/vn(-n)-(1+1e-12)))}function jn(){var r;if(!(this instanceof jn))return 0===arguments.length?new jn:new jn(arguments[0]);if(arguments.length){if(!Jr(r=arguments[0]))throw new TypeError("invalid argument. Mean parameter `p` must be a probability. Value: `"+r+"`")}else r=.5;return a(this,"p",{configurable:!1,enumerable:!0,get:function(){return r},set:function(n){if(!Jr(n))throw new TypeError("invalid value. Must be a probability. Value: `"+n+"`");r=n}}),this}l(dn,"factory",(function(r){return mn(r)?function(n){var t,e;if(p(n))return NaN;if(n>=-Zr(e=1-r))return NaN;return t=wn(n),r*t/(1-e*t)}:Wr(NaN)})),l(gn,"factory",(function(r){return p(r)||r<0||r>1?Wr(NaN):function(n){if(p(n))return NaN;if(sn(n))return r*xr(1-r,n);return 0}})),l(Un,"factory",(function(r){return p(r)||r<0||r>1?Wr(NaN):function(n){if(p(n)||n<0||n>1)return NaN;if(1===n)return b;return _n(0,tn(Zr(1-n)/vn(-r)-(1+1e-12)))}})),qr(jn.prototype,"entropy",(function(){return $r(this.p)})),qr(jn.prototype,"kurtosis",(function(){return rn(this.p)})),qr(jn.prototype,"mean",(function(){return nn(this.p)})),qr(jn.prototype,"median",(function(){return on(this.p)})),qr(jn.prototype,"mode",(function(){return fn(this.p)})),qr(jn.prototype,"skewness",(function(){return an(this.p)})),qr(jn.prototype,"stdev",(function(){return cn(this.p)})),qr(jn.prototype,"variance",(function(){return ln(this.p)})),l(jn.prototype,"cdf",(function(r){return Lr(r,this.p)})),l(jn.prototype,"logcdf",(function(r){return Nn(r,this.p)})),l(jn.prototype,"logpmf",(function(r){return bn(r,this.p)})),l(jn.prototype,"mgf",(function(r){return dn(r,this.p)})),l(jn.prototype,"pmf",(function(r){return gn(r,this.p)})),l(jn.prototype,"quantile",(function(r){return Un(r,this.p)}));var On={};c(On,"cdf",Lr),c(On,"Geometric",jn),c(On,"entropy",$r),c(On,"kurtosis",rn),c(On,"logcdf",Nn),c(On,"logpmf",bn),c(On,"mean",nn),c(On,"median",on),c(On,"mgf",dn),c(On,"mode",fn),c(On,"pmf",gn),c(On,"quantile",Un),c(On,"skewness",an),c(On,"stdev",cn),c(On,"variance",ln);export{jn as Geometric,Lr as cdf,On as default,$r as entropy,rn as kurtosis,Nn as logcdf,bn as logpmf,nn as mean,on as median,dn as mgf,fn as mode,gn as pmf,Un as quantile,an as skewness,cn as stdev,ln as variance};
//# sourceMappingURL=mod.js.map
