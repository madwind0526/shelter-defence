var Qo=Object.defineProperty;var el=(r,e,t)=>e in r?Qo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var V=(r,e,t)=>el(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gs="164",tl=0,Fs=1,nl=2,go=1,il=2,jt=3,un=0,St=1,zt=2,cn=0,ni=1,os=2,Os=3,Bs=4,rl=5,wn=100,sl=101,al=102,ol=103,ll=104,cl=200,hl=201,dl=202,ul=203,ls=204,cs=205,fl=206,pl=207,ml=208,gl=209,_l=210,vl=211,xl=212,Sl=213,Ml=214,yl=0,El=1,Tl=2,lr=3,bl=4,wl=5,Al=6,Rl=7,_o=0,Cl=1,Pl=2,hn=0,Ll=1,Il=2,Ul=3,Dl=4,Nl=5,Fl=6,Ol=7,vo=300,ai=301,oi=302,hs=303,ds=304,mr=306,us=1e3,Rn=1001,fs=1002,Ct=1003,Bl=1004,Ui=1005,Ut=1006,Er=1007,Cn=1008,fn=1009,zl=1010,kl=1011,xo=1012,So=1013,li=1014,on=1015,gr=1016,Mo=1017,yo=1018,Ri=1020,Hl=35902,Gl=1021,Vl=1022,Ht=1023,Wl=1024,Xl=1025,ii=1026,Ti=1027,ql=1028,Eo=1029,$l=1030,To=1031,bo=1033,Tr=33776,br=33777,wr=33778,Ar=33779,zs=35840,ks=35841,Hs=35842,Gs=35843,Vs=36196,Ws=37492,Xs=37496,qs=37808,$s=37809,Ys=37810,js=37811,Ks=37812,Zs=37813,Js=37814,Qs=37815,ea=37816,ta=37817,na=37818,ia=37819,ra=37820,sa=37821,Rr=36492,aa=36494,oa=36495,Yl=36283,la=36284,ca=36285,ha=36286,jl=3200,Kl=3201,wo=0,Zl=1,an="",At="srgb",mn="srgb-linear",_s="display-p3",_r="display-p3-linear",cr="linear",Ye="srgb",hr="rec709",dr="p3",Un=7680,da=519,Jl=512,Ql=513,ec=514,Ao=515,tc=516,nc=517,ic=518,rc=519,ua=35044,fa="300 es",Kt=2e3,ur=2001;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pa=1234567;const yi=Math.PI/180,bi=180/Math.PI;function di(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ht[r&255]+ht[r>>8&255]+ht[r>>16&255]+ht[r>>24&255]+"-"+ht[e&255]+ht[e>>8&255]+"-"+ht[e>>16&15|64]+ht[e>>24&255]+"-"+ht[t&63|128]+ht[t>>8&255]+"-"+ht[t>>16&255]+ht[t>>24&255]+ht[n&255]+ht[n>>8&255]+ht[n>>16&255]+ht[n>>24&255]).toLowerCase()}function gt(r,e,t){return Math.max(e,Math.min(t,r))}function vs(r,e){return(r%e+e)%e}function sc(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function ac(r,e,t){return r!==e?(t-r)/(e-r):0}function Ei(r,e,t){return(1-t)*r+t*e}function oc(r,e,t,n){return Ei(r,e,1-Math.exp(-t*n))}function lc(r,e=1){return e-Math.abs(vs(r,e*2)-e)}function cc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function hc(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function dc(r,e){return r+Math.floor(Math.random()*(e-r+1))}function uc(r,e){return r+Math.random()*(e-r)}function fc(r){return r*(.5-Math.random())}function pc(r){r!==void 0&&(pa=r);let e=pa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mc(r){return r*yi}function gc(r){return r*bi}function _c(r){return(r&r-1)===0&&r!==0}function vc(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function xc(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Sc(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),m=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*m,o*c);break;case"YXY":r.set(l*m,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const xt={DEG2RAD:yi,RAD2DEG:bi,generateUUID:di,clamp:gt,euclideanModulo:vs,mapLinear:sc,inverseLerp:ac,lerp:Ei,damp:oc,pingpong:lc,smoothstep:cc,smootherstep:hc,randInt:dc,randFloat:uc,randFloatSpread:fc,seededRandom:pc,degToRad:mc,radToDeg:gc,isPowerOfTwo:_c,ceilPowerOfTwo:vc,floorPowerOfTwo:xc,setQuaternionFromProperEuler:Sc,normalize:pt,denormalize:Qn};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class be{constructor(e,t,n,i,s,a,o,l,c){be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],d=i[6],T=i[1],M=i[4],E=i[7],D=i[2],w=i[5],A=i[8];return s[0]=a*_+o*T+l*D,s[3]=a*p+o*M+l*w,s[6]=a*d+o*E+l*A,s[1]=c*_+h*T+u*D,s[4]=c*p+h*M+u*w,s[7]=c*d+h*E+u*A,s[2]=f*_+m*T+g*D,s[5]=f*p+m*M+g*w,s[8]=f*d+m*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*s,m=c*s-a*l,g=t*u+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cr.makeScale(e,t)),this}rotate(e){return this.premultiply(Cr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cr=new be;function Ro(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function wi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Mc(){const r=wi("canvas");return r.style.display="block",r}const ma={};function yc(r){r in ma||(ma[r]=!0,console.warn(r))}const ga=new be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),_a=new be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Di={[mn]:{transfer:cr,primaries:hr,toReference:r=>r,fromReference:r=>r},[At]:{transfer:Ye,primaries:hr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[_r]:{transfer:cr,primaries:dr,toReference:r=>r.applyMatrix3(_a),fromReference:r=>r.applyMatrix3(ga)},[_s]:{transfer:Ye,primaries:dr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(_a),fromReference:r=>r.applyMatrix3(ga).convertLinearToSRGB()}},Ec=new Set([mn,_r]),Ve={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Ec.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Di[e].toReference,i=Di[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Di[r].primaries},getTransfer:function(r){return r===an?cr:Di[r].transfer}};function ri(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Pr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Dn;class Tc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Dn===void 0&&(Dn=wi("canvas")),Dn.width=e.width,Dn.height=e.height;const n=Dn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Dn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ri(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bc=0;class Co{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Lr(i[a].image)):s.push(Lr(i[a]))}else s=Lr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Lr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Tc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wc=0;class vt extends hi{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=Rn,i=Rn,s=Ut,a=Cn,o=Ht,l=fn,c=vt.DEFAULT_ANISOTROPY,h=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=di(),this.name="",this.source=new Co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=vo;vt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,i=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,E=(m+1)/2,D=(d+1)/2,w=(h+f)/4,A=(u+_)/4,L=(g+p)/4;return M>E&&M>D?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=A/n):E>D?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=w/i,s=L/i):D<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(D),n=A/s,i=L/s),this.set(n,i,s,t),this}let T=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(u-_)/T,this.z=(f-h)/T,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ac extends hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new vt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Co(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends Ac{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Po extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rc extends vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ci{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==m||h!==g){let p=1-o;const d=l*f+c*m+h*g+u*_,T=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const D=Math.sqrt(M),w=Math.atan2(D,d*T);p=Math.sin(p*w)/D,o=Math.sin(o*w)/D}const E=o*T;if(l=l*p+f*E,c=c*p+m*E,h=h*p+g*E,u=u*p+_*E,p===1-o){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*m-c*f,e[t+1]=l*g+h*f+c*u-o*m,e[t+2]=c*g+h*m+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(va.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(va.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ir.copy(this).projectOnVector(e),this.sub(Ir)}reflect(e){return this.sub(Ir.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ir=new U,va=new Ci;class Pi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pt):Pt.fromBufferAttribute(s,a),Pt.applyMatrix4(e.matrixWorld),this.expandByPoint(Pt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ni.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ni.copy(n.boundingBox)),Ni.applyMatrix4(e.matrixWorld),this.union(Ni)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pt),Pt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gi),Fi.subVectors(this.max,gi),Nn.subVectors(e.a,gi),Fn.subVectors(e.b,gi),On.subVectors(e.c,gi),Jt.subVectors(Fn,Nn),Qt.subVectors(On,Fn),_n.subVectors(Nn,On);let t=[0,-Jt.z,Jt.y,0,-Qt.z,Qt.y,0,-_n.z,_n.y,Jt.z,0,-Jt.x,Qt.z,0,-Qt.x,_n.z,0,-_n.x,-Jt.y,Jt.x,0,-Qt.y,Qt.x,0,-_n.y,_n.x,0];return!Ur(t,Nn,Fn,On,Fi)||(t=[1,0,0,0,1,0,0,0,1],!Ur(t,Nn,Fn,On,Fi))?!1:(Oi.crossVectors(Jt,Qt),t=[Oi.x,Oi.y,Oi.z],Ur(t,Nn,Fn,On,Fi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wt=[new U,new U,new U,new U,new U,new U,new U,new U],Pt=new U,Ni=new Pi,Nn=new U,Fn=new U,On=new U,Jt=new U,Qt=new U,_n=new U,gi=new U,Fi=new U,Oi=new U,vn=new U;function Ur(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){vn.fromArray(r,s);const o=i.x*Math.abs(vn.x)+i.y*Math.abs(vn.y)+i.z*Math.abs(vn.z),l=e.dot(vn),c=t.dot(vn),h=n.dot(vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Cc=new Pi,_i=new U,Dr=new U;class vr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cc.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_i.subVectors(e,this.center);const t=_i.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_i,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_i.copy(e.center).add(Dr)),this.expandByPoint(_i.copy(e.center).sub(Dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xt=new U,Nr=new U,Bi=new U,en=new U,Fr=new U,zi=new U,Or=new U;class xs{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xt.copy(this.origin).addScaledVector(this.direction,t),Xt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Nr.copy(e).add(t).multiplyScalar(.5),Bi.copy(t).sub(e).normalize(),en.copy(this.origin).sub(Nr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Bi),o=en.dot(this.direction),l=-en.dot(Bi),c=en.lengthSq(),h=Math.abs(1-a*a);let u,f,m,g;if(h>0)if(u=a*l-o,f=a*o-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Nr).addScaledVector(Bi,f),m}intersectSphere(e,t){Xt.subVectors(e.center,this.origin);const n=Xt.dot(this.direction),i=Xt.dot(Xt)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xt)!==null}intersectTriangle(e,t,n,i,s){Fr.subVectors(t,e),zi.subVectors(n,e),Or.crossVectors(Fr,zi);let a=this.direction.dot(Or),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;en.subVectors(this.origin,e);const l=o*this.direction.dot(zi.crossVectors(en,zi));if(l<0)return null;const c=o*this.direction.dot(Fr.cross(en));if(c<0||l+c>a)return null;const h=-o*en.dot(Or);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,i,s,a,o,l,c,h,u,f,m,g,_,p){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,f,m,g,_,p)}set(e,t,n,i,s,a,o,l,c,h,u,f,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Bn.setFromMatrixColumn(e,0).length(),s=1/Bn.setFromMatrixColumn(e,1).length(),a=1/Bn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*u,g=c*h,_=c*u;t[0]=f+_*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*u,g=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,m=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pc,e,Lc)}lookAt(e,t,n){const i=this.elements;return Et.subVectors(e,t),Et.lengthSq()===0&&(Et.z=1),Et.normalize(),tn.crossVectors(n,Et),tn.lengthSq()===0&&(Math.abs(n.z)===1?Et.x+=1e-4:Et.z+=1e-4,Et.normalize(),tn.crossVectors(n,Et)),tn.normalize(),ki.crossVectors(Et,tn),i[0]=tn.x,i[4]=ki.x,i[8]=Et.x,i[1]=tn.y,i[5]=ki.y,i[9]=Et.y,i[2]=tn.z,i[6]=ki.z,i[10]=Et.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],T=n[3],M=n[7],E=n[11],D=n[15],w=i[0],A=i[4],L=i[8],y=i[12],v=i[1],N=i[5],G=i[9],R=i[13],k=i[2],q=i[6],j=i[10],ae=i[14],H=i[3],Q=i[7],J=i[11],pe=i[15];return s[0]=a*w+o*v+l*k+c*H,s[4]=a*A+o*N+l*q+c*Q,s[8]=a*L+o*G+l*j+c*J,s[12]=a*y+o*R+l*ae+c*pe,s[1]=h*w+u*v+f*k+m*H,s[5]=h*A+u*N+f*q+m*Q,s[9]=h*L+u*G+f*j+m*J,s[13]=h*y+u*R+f*ae+m*pe,s[2]=g*w+_*v+p*k+d*H,s[6]=g*A+_*N+p*q+d*Q,s[10]=g*L+_*G+p*j+d*J,s[14]=g*y+_*R+p*ae+d*pe,s[3]=T*w+M*v+E*k+D*H,s[7]=T*A+M*N+E*q+D*Q,s[11]=T*L+M*G+E*j+D*J,s[15]=T*y+M*R+E*ae+D*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+s*l*u-i*c*u-s*o*f+n*c*f+i*o*m-n*l*m)+_*(+t*l*m-t*c*f+s*a*f-i*a*m+i*c*h-s*l*h)+p*(+t*c*u-t*o*m-s*a*u+n*a*m+s*o*h-n*c*h)+d*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],T=u*p*c-_*f*c+_*l*m-o*p*m-u*l*d+o*f*d,M=g*f*c-h*p*c-g*l*m+a*p*m+h*l*d-a*f*d,E=h*_*c-g*u*c+g*o*m-a*_*m-h*o*d+a*u*d,D=g*u*l-h*_*l-g*o*f+a*_*f+h*o*p-a*u*p,w=t*T+n*M+i*E+s*D;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=T*A,e[1]=(_*f*s-u*p*s-_*i*m+n*p*m+u*i*d-n*f*d)*A,e[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*d+n*l*d)*A,e[3]=(u*l*s-o*f*s-u*i*c+n*f*c+o*i*m-n*l*m)*A,e[4]=M*A,e[5]=(h*p*s-g*f*s+g*i*m-t*p*m-h*i*d+t*f*d)*A,e[6]=(g*l*s-a*p*s-g*i*c+t*p*c+a*i*d-t*l*d)*A,e[7]=(a*f*s-h*l*s+h*i*c-t*f*c-a*i*m+t*l*m)*A,e[8]=E*A,e[9]=(g*u*s-h*_*s-g*n*m+t*_*m+h*n*d-t*u*d)*A,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*d+t*o*d)*A,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*m-t*o*m)*A,e[12]=D*A,e[13]=(h*_*i-g*u*i+g*n*f-t*_*f-h*n*p+t*u*p)*A,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*p-t*o*p)*A,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,f=s*c,m=s*h,g=s*u,_=a*h,p=a*u,d=o*u,T=l*c,M=l*h,E=l*u,D=n.x,w=n.y,A=n.z;return i[0]=(1-(_+d))*D,i[1]=(m+E)*D,i[2]=(g-M)*D,i[3]=0,i[4]=(m-E)*w,i[5]=(1-(f+d))*w,i[6]=(p+T)*w,i[7]=0,i[8]=(g+M)*A,i[9]=(p-T)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Bn.set(i[0],i[1],i[2]).length();const a=Bn.set(i[4],i[5],i[6]).length(),o=Bn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Lt.copy(this);const c=1/s,h=1/a,u=1/o;return Lt.elements[0]*=c,Lt.elements[1]*=c,Lt.elements[2]*=c,Lt.elements[4]*=h,Lt.elements[5]*=h,Lt.elements[6]*=h,Lt.elements[8]*=u,Lt.elements[9]*=u,Lt.elements[10]*=u,t.setFromRotationMatrix(Lt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Kt){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let m,g;if(o===Kt)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ur)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Kt){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),f=(t+e)*c,m=(n+i)*h;let g,_;if(o===Kt)g=(a+s)*u,_=-2*u;else if(o===ur)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bn=new U,Lt=new Ke,Pc=new U(0,0,0),Lc=new U(1,1,1),tn=new U,ki=new U,Et=new U,xa=new Ke,Sa=new Ci;class Dt{constructor(e=0,t=0,n=0,i=Dt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sa.setFromEuler(this),this.setFromQuaternion(Sa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dt.DEFAULT_ORDER="XYZ";class Ss{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ic=0;const Ma=new U,zn=new Ci,qt=new Ke,Hi=new U,vi=new U,Uc=new U,Dc=new Ci,ya=new U(1,0,0),Ea=new U(0,1,0),Ta=new U(0,0,1),ba={type:"added"},Nc={type:"removed"},kn={type:"childadded",child:null},Br={type:"childremoved",child:null};class at extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new U,t=new Dt,n=new Ci,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new be}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.multiply(zn),this}rotateOnWorldAxis(e,t){return zn.setFromAxisAngle(e,t),this.quaternion.premultiply(zn),this}rotateX(e){return this.rotateOnAxis(ya,e)}rotateY(e){return this.rotateOnAxis(Ea,e)}rotateZ(e){return this.rotateOnAxis(Ta,e)}translateOnAxis(e,t){return Ma.copy(e).applyQuaternion(this.quaternion),this.position.add(Ma.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ya,e)}translateY(e){return this.translateOnAxis(Ea,e)}translateZ(e){return this.translateOnAxis(Ta,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hi.copy(e):Hi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qt.lookAt(vi,Hi,this.up):qt.lookAt(Hi,vi,this.up),this.quaternion.setFromRotationMatrix(qt),i&&(qt.extractRotation(i.matrixWorld),zn.setFromRotationMatrix(qt),this.quaternion.premultiply(zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ba),kn.child=e,this.dispatchEvent(kn),kn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nc),Br.child=e,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(qt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ba),kn.child=e,this.dispatchEvent(kn),kn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,e,Uc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,Dc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}at.DEFAULT_UP=new U(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const It=new U,$t=new U,zr=new U,Yt=new U,Hn=new U,Gn=new U,wa=new U,kr=new U,Hr=new U,Gr=new U;class kt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),It.subVectors(e,t),i.cross(It);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){It.subVectors(i,t),$t.subVectors(n,t),zr.subVectors(e,t);const a=It.dot(It),o=It.dot($t),l=It.dot(zr),c=$t.dot($t),h=$t.dot(zr),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yt)===null?!1:Yt.x>=0&&Yt.y>=0&&Yt.x+Yt.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Yt)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yt.x),l.addScaledVector(a,Yt.y),l.addScaledVector(o,Yt.z),l)}static isFrontFacing(e,t,n,i){return It.subVectors(n,t),$t.subVectors(e,t),It.cross($t).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return It.subVectors(this.c,this.b),$t.subVectors(this.a,this.b),It.cross($t).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return kt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Hn.subVectors(i,n),Gn.subVectors(s,n),kr.subVectors(e,n);const l=Hn.dot(kr),c=Gn.dot(kr);if(l<=0&&c<=0)return t.copy(n);Hr.subVectors(e,i);const h=Hn.dot(Hr),u=Gn.dot(Hr);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Hn,a);Gr.subVectors(e,s);const m=Hn.dot(Gr),g=Gn.dot(Gr);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Gn,o);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return wa.subVectors(s,i),o=(u-h)/(u-h+(m-g)),t.copy(i).addScaledVector(wa,o);const d=1/(p+_+f);return a=_*d,o=f*d,t.copy(n).addScaledVector(Hn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nn={h:0,s:0,l:0},Gi={h:0,s:0,l:0};function Vr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ve.workingColorSpace){if(e=vs(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Vr(a,s,e+1/3),this.g=Vr(a,s,e),this.b=Vr(a,s,e-1/3)}return Ve.toWorkingColorSpace(this,i),this}setStyle(e,t=At){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=Lo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ve.fromWorkingColorSpace(dt.copy(this),e),Math.round(gt(dt.r*255,0,255))*65536+Math.round(gt(dt.g*255,0,255))*256+Math.round(gt(dt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(dt.copy(this),t);const n=dt.r,i=dt.g,s=dt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(dt.copy(this),t),e.r=dt.r,e.g=dt.g,e.b=dt.b,e}getStyle(e=At){Ve.fromWorkingColorSpace(dt.copy(this),e);const t=dt.r,n=dt.g,i=dt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(nn),this.setHSL(nn.h+e,nn.s+t,nn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nn),e.getHSL(Gi);const n=Ei(nn.h,Gi.h,t),i=Ei(nn.s,Gi.s,t),s=Ei(nn.l,Gi.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dt=new Fe;Fe.NAMES=Lo;let Fc=0;class ui extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=di(),this.name="",this.type="Material",this.blending=ni,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ls,this.blendDst=cs,this.blendEquation=wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Un,this.stencilZFail=Un,this.stencilZPass=Un,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ni&&(n.blending=this.blending),this.side!==un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ls&&(n.blendSrc=this.blendSrc),this.blendDst!==cs&&(n.blendDst=this.blendDst),this.blendEquation!==wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==da&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Un&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Un&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Un&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pn extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dt,this.combine=_o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new U,Vi=new Le;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ua,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return yc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vi.fromBufferAttribute(this,t),Vi.applyMatrix3(e),this.setXY(t,Vi.x,Vi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),n=pt(n,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ua&&(e.usage=this.usage),e}}class Io extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uo extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mt extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Oc=0;const wt=new Ke,Wr=new at,Vn=new U,Tt=new Pi,xi=new Pi,rt=new U;class Nt extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oc++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ro(e)?Uo:Io)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new be().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wt.makeRotationFromQuaternion(e),this.applyMatrix4(wt),this}rotateX(e){return wt.makeRotationX(e),this.applyMatrix4(wt),this}rotateY(e){return wt.makeRotationY(e),this.applyMatrix4(wt),this}rotateZ(e){return wt.makeRotationZ(e),this.applyMatrix4(wt),this}translate(e,t,n){return wt.makeTranslation(e,t,n),this.applyMatrix4(wt),this}scale(e,t,n){return wt.makeScale(e,t,n),this.applyMatrix4(wt),this}lookAt(e){return Wr.lookAt(e),Wr.updateMatrix(),this.applyMatrix4(Wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vn).negate(),this.translate(Vn.x,Vn.y,Vn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Tt.setFromBufferAttribute(s),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Tt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];xi.setFromBufferAttribute(o),this.morphTargetsRelative?(rt.addVectors(Tt.min,xi.min),Tt.expandByPoint(rt),rt.addVectors(Tt.max,xi.max),Tt.expandByPoint(rt)):(Tt.expandByPoint(xi.min),Tt.expandByPoint(xi.max))}Tt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)rt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)rt.fromBufferAttribute(o,c),l&&(Vn.fromBufferAttribute(e,c),rt.add(Vn)),i=Math.max(i,n.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new U,l[L]=new U;const c=new U,h=new U,u=new U,f=new Le,m=new Le,g=new Le,_=new U,p=new U;function d(L,y,v){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),f.fromBufferAttribute(s,L),m.fromBufferAttribute(s,y),g.fromBufferAttribute(s,v),h.sub(c),u.sub(c),m.sub(f),g.sub(f);const N=1/(m.x*g.y-g.x*m.y);isFinite(N)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(N),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(N),o[L].add(_),o[y].add(_),o[v].add(_),l[L].add(p),l[y].add(p),l[v].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,y=T.length;L<y;++L){const v=T[L],N=v.start,G=v.count;for(let R=N,k=N+G;R<k;R+=3)d(e.getX(R+0),e.getX(R+1),e.getX(R+2))}const M=new U,E=new U,D=new U,w=new U;function A(L){D.fromBufferAttribute(i,L),w.copy(D);const y=o[L];M.copy(y),M.sub(D.multiplyScalar(D.dot(y))).normalize(),E.crossVectors(w,y);const N=E.dot(l[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,N)}for(let L=0,y=T.length;L<y;++L){const v=T[L],N=v.start,G=v.count;for(let R=N,k=N+G;R<k;R+=3)A(e.getX(R+0)),A(e.getX(R+1)),A(e.getX(R+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new Gt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Aa=new Ke,xn=new xs,Wi=new vr,Ra=new U,Wn=new U,Xn=new U,qn=new U,Xr=new U,Xi=new U,qi=new Le,$i=new Le,Yi=new Le,Ca=new U,Pa=new U,La=new U,ji=new U,Ki=new U;class _t extends at{constructor(e=new Nt,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Xi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Xr.fromBufferAttribute(u,e),a?Xi.addScaledVector(Xr,h):Xi.addScaledVector(Xr.sub(t),h))}t.add(Xi)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(s),xn.copy(e.ray).recast(e.near),!(Wi.containsPoint(xn.origin)===!1&&(xn.intersectSphere(Wi,Ra)===null||xn.origin.distanceToSquared(Ra)>(e.far-e.near)**2))&&(Aa.copy(s).invert(),xn.copy(e.ray).applyMatrix4(Aa),!(n.boundingBox!==null&&xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],T=Math.max(p.start,m.start),M=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,D=M;E<D;E+=3){const w=o.getX(E),A=o.getX(E+1),L=o.getX(E+2);i=Zi(this,d,e,n,c,h,u,w,A,L),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const T=o.getX(p),M=o.getX(p+1),E=o.getX(p+2);i=Zi(this,a,e,n,c,h,u,T,M,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=a[p.materialIndex],T=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=T,D=M;E<D;E+=3){const w=E,A=E+1,L=E+2;i=Zi(this,d,e,n,c,h,u,w,A,L),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const T=p,M=p+1,E=p+2;i=Zi(this,a,e,n,c,h,u,T,M,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Bc(r,e,t,n,i,s,a,o){let l;if(e.side===St?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===un,o),l===null)return null;Ki.copy(o),Ki.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ki);return c<t.near||c>t.far?null:{distance:c,point:Ki.clone(),object:r}}function Zi(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Wn),r.getVertexPosition(l,Xn),r.getVertexPosition(c,qn);const h=Bc(r,e,t,n,Wn,Xn,qn,ji);if(h){i&&(qi.fromBufferAttribute(i,o),$i.fromBufferAttribute(i,l),Yi.fromBufferAttribute(i,c),h.uv=kt.getInterpolation(ji,Wn,Xn,qn,qi,$i,Yi,new Le)),s&&(qi.fromBufferAttribute(s,o),$i.fromBufferAttribute(s,l),Yi.fromBufferAttribute(s,c),h.uv1=kt.getInterpolation(ji,Wn,Xn,qn,qi,$i,Yi,new Le)),a&&(Ca.fromBufferAttribute(a,o),Pa.fromBufferAttribute(a,l),La.fromBufferAttribute(a,c),h.normal=kt.getInterpolation(ji,Wn,Xn,qn,Ca,Pa,La,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};kt.getNormal(Wn,Xn,qn,u.normal),h.face=u}return h}class In extends Nt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(u,2));function g(_,p,d,T,M,E,D,w,A,L,y){const v=E/A,N=D/L,G=E/2,R=D/2,k=w/2,q=A+1,j=L+1;let ae=0,H=0;const Q=new U;for(let J=0;J<j;J++){const pe=J*N-R;for(let Ie=0;Ie<q;Ie++){const We=Ie*v-G;Q[_]=We*T,Q[p]=pe*M,Q[d]=k,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[p]=0,Q[d]=w>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(Ie/A),u.push(1-J/L),ae+=1}}for(let J=0;J<L;J++)for(let pe=0;pe<A;pe++){const Ie=f+pe+q*J,We=f+pe+q*(J+1),W=f+(pe+1)+q*(J+1),ee=f+(pe+1)+q*J;l.push(Ie,We,ee),l.push(We,W,ee),H+=6}o.addGroup(m,H,y),m+=H,f+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ci(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mt(r){const e={};for(let t=0;t<r.length;t++){const n=ci(r[t]);for(const i in n)e[i]=n[i]}return e}function zc(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Do(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const kc={clone:ci,merge:mt};var Hc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hc,this.fragmentShader=Gc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ci(e.uniforms),this.uniformsGroups=zc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class No extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Kt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rn=new U,Ia=new Le,Ua=new Le;class Rt extends No{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bi*2*Math.atan(Math.tan(yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rn.x,rn.y).multiplyScalar(-e/rn.z),rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rn.x,rn.y).multiplyScalar(-e/rn.z)}getViewSize(e,t){return this.getViewBounds(e,Ia,Ua),t.subVectors(Ua,Ia)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $n=-90,Yn=1;class Vc extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Rt($n,Yn,e,t);i.layers=this.layers,this.add(i);const s=new Rt($n,Yn,e,t);s.layers=this.layers,this.add(s);const a=new Rt($n,Yn,e,t);a.layers=this.layers,this.add(a);const o=new Rt($n,Yn,e,t);o.layers=this.layers,this.add(o);const l=new Rt($n,Yn,e,t);l.layers=this.layers,this.add(l);const c=new Rt($n,Yn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Kt)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Fo extends vt{constructor(e,t,n,i,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ai,super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wc extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new In(5,5,5),s=new pn({name:"CubemapFromEquirect",uniforms:ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:cn});s.uniforms.tEquirect.value=t;const a=new _t(i,s),o=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Ut),new Vc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const qr=new U,Xc=new U,qc=new be;class Tn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=qr.subVectors(n,t).cross(Xc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qc.getNormalMatrix(e),i=this.coplanarPoint(qr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sn=new vr,Ji=new U;class Ms{constructor(e=new Tn,t=new Tn,n=new Tn,i=new Tn,s=new Tn,a=new Tn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kt){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],d=i[12],T=i[13],M=i[14],E=i[15];if(n[0].setComponents(l-s,f-c,p-m,E-d).normalize(),n[1].setComponents(l+s,f+c,p+m,E+d).normalize(),n[2].setComponents(l+a,f+h,p+g,E+T).normalize(),n[3].setComponents(l-a,f-h,p-g,E-T).normalize(),n[4].setComponents(l-o,f-u,p-_,E-M).normalize(),t===Kt)n[5].setComponents(l+o,f+u,p+_,E+M).normalize();else if(t===ur)n[5].setComponents(o,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sn)}intersectsSprite(e){return Sn.center.set(0,0,0),Sn.radius=.7071067811865476,Sn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ji.x=i.normal.x>0?e.max.x:e.min.x,Ji.y=i.normal.y>0?e.max.y:e.min.y,Ji.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ji)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oo(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function $c(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=r.HALF_FLOAT:m=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=r.SHORT;else if(c instanceof Uint32Array)m=r.UNSIGNED_INT;else if(c instanceof Int32Array)m=r.INT;else if(c instanceof Int8Array)m=r.BYTE;else if(c instanceof Uint8Array)m=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l._updateRange,f=l.updateRanges;if(r.bindBuffer(c,o),u.count===-1&&f.length===0&&r.bufferSubData(c,0,h),f.length!==0){for(let m=0,g=f.length;m<g;m++){const _=f[m];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class dn extends Nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<h;d++){const T=d*f-a;for(let M=0;M<c;M++){const E=M*u-s;g.push(E,-T,0),_.push(0,0,1),p.push(M/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){const M=T+c*d,E=T+c*(d+1),D=T+1+c*(d+1),w=T+1+c*d;m.push(M,E,w),m.push(E,D,w)}this.setIndex(m),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jc=`#ifdef USE_ALPHAHASH
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
#endif`,Kc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eh=`#ifdef USE_AOMAP
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
#endif`,th=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,ih=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,rh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ah=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oh=`#ifdef USE_IRIDESCENCE
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
#endif`,lh=`#ifdef USE_BUMPMAP
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
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_h=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,vh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xh=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Th="gl_FragColor = linearToOutputTexel( gl_FragColor );",bh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,wh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rh=`#ifdef USE_ENVMAP
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
#endif`,Ch=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ph=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ih=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nh=`#ifdef USE_GRADIENTMAP
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
}`,Fh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Oh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zh=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,kh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,qh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$h=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Yh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ed=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,id=`#if defined( USE_POINTS_UV )
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
#endif`,rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ad=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,od=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ld=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gd=`#ifdef USE_NORMALMAP
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
#endif`,_d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ed=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ld=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Id=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dd=`#ifdef USE_SKINNING
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
#endif`,Nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fd=`#ifdef USE_SKINNING
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
#endif`,Od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hd=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gd=`#ifdef USE_TRANSMISSION
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
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $d=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yd=`uniform sampler2D t2D;
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`#include <common>
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
}`,eu=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tu=`#define DISTANCE
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
}`,nu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ru=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,su=`uniform float scale;
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
}`,au=`uniform vec3 diffuse;
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
}`,ou=`#include <common>
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
}`,lu=`uniform vec3 diffuse;
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
}`,cu=`#define LAMBERT
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
}`,hu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,du=`#define MATCAP
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
}`,uu=`#define MATCAP
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
}`,fu=`#define NORMAL
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
}`,pu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mu=`#define PHONG
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
}`,gu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,_u=`#define STANDARD
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
}`,vu=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,xu=`#define TOON
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
}`,Su=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Mu=`uniform float size;
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
}`,yu=`uniform vec3 diffuse;
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
}`,Eu=`#include <common>
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
}`,Tu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,bu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,wu=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:Yc,alphahash_pars_fragment:jc,alphamap_fragment:Kc,alphamap_pars_fragment:Zc,alphatest_fragment:Jc,alphatest_pars_fragment:Qc,aomap_fragment:eh,aomap_pars_fragment:th,batching_pars_vertex:nh,batching_vertex:ih,begin_vertex:rh,beginnormal_vertex:sh,bsdfs:ah,iridescence_fragment:oh,bumpmap_pars_fragment:lh,clipping_planes_fragment:ch,clipping_planes_pars_fragment:hh,clipping_planes_pars_vertex:dh,clipping_planes_vertex:uh,color_fragment:fh,color_pars_fragment:ph,color_pars_vertex:mh,color_vertex:gh,common:_h,cube_uv_reflection_fragment:vh,defaultnormal_vertex:xh,displacementmap_pars_vertex:Sh,displacementmap_vertex:Mh,emissivemap_fragment:yh,emissivemap_pars_fragment:Eh,colorspace_fragment:Th,colorspace_pars_fragment:bh,envmap_fragment:wh,envmap_common_pars_fragment:Ah,envmap_pars_fragment:Rh,envmap_pars_vertex:Ch,envmap_physical_pars_fragment:kh,envmap_vertex:Ph,fog_vertex:Lh,fog_pars_vertex:Ih,fog_fragment:Uh,fog_pars_fragment:Dh,gradientmap_pars_fragment:Nh,lightmap_pars_fragment:Fh,lights_lambert_fragment:Oh,lights_lambert_pars_fragment:Bh,lights_pars_begin:zh,lights_toon_fragment:Hh,lights_toon_pars_fragment:Gh,lights_phong_fragment:Vh,lights_phong_pars_fragment:Wh,lights_physical_fragment:Xh,lights_physical_pars_fragment:qh,lights_fragment_begin:$h,lights_fragment_maps:Yh,lights_fragment_end:jh,logdepthbuf_fragment:Kh,logdepthbuf_pars_fragment:Zh,logdepthbuf_pars_vertex:Jh,logdepthbuf_vertex:Qh,map_fragment:ed,map_pars_fragment:td,map_particle_fragment:nd,map_particle_pars_fragment:id,metalnessmap_fragment:rd,metalnessmap_pars_fragment:sd,morphinstance_vertex:ad,morphcolor_vertex:od,morphnormal_vertex:ld,morphtarget_pars_vertex:cd,morphtarget_vertex:hd,normal_fragment_begin:dd,normal_fragment_maps:ud,normal_pars_fragment:fd,normal_pars_vertex:pd,normal_vertex:md,normalmap_pars_fragment:gd,clearcoat_normal_fragment_begin:_d,clearcoat_normal_fragment_maps:vd,clearcoat_pars_fragment:xd,iridescence_pars_fragment:Sd,opaque_fragment:Md,packing:yd,premultiplied_alpha_fragment:Ed,project_vertex:Td,dithering_fragment:bd,dithering_pars_fragment:wd,roughnessmap_fragment:Ad,roughnessmap_pars_fragment:Rd,shadowmap_pars_fragment:Cd,shadowmap_pars_vertex:Pd,shadowmap_vertex:Ld,shadowmask_pars_fragment:Id,skinbase_vertex:Ud,skinning_pars_vertex:Dd,skinning_vertex:Nd,skinnormal_vertex:Fd,specularmap_fragment:Od,specularmap_pars_fragment:Bd,tonemapping_fragment:zd,tonemapping_pars_fragment:kd,transmission_fragment:Hd,transmission_pars_fragment:Gd,uv_pars_fragment:Vd,uv_pars_vertex:Wd,uv_vertex:Xd,worldpos_vertex:qd,background_vert:$d,background_frag:Yd,backgroundCube_vert:jd,backgroundCube_frag:Kd,cube_vert:Zd,cube_frag:Jd,depth_vert:Qd,depth_frag:eu,distanceRGBA_vert:tu,distanceRGBA_frag:nu,equirect_vert:iu,equirect_frag:ru,linedashed_vert:su,linedashed_frag:au,meshbasic_vert:ou,meshbasic_frag:lu,meshlambert_vert:cu,meshlambert_frag:hu,meshmatcap_vert:du,meshmatcap_frag:uu,meshnormal_vert:fu,meshnormal_frag:pu,meshphong_vert:mu,meshphong_frag:gu,meshphysical_vert:_u,meshphysical_frag:vu,meshtoon_vert:xu,meshtoon_frag:Su,points_vert:Mu,points_frag:yu,shadow_vert:Eu,shadow_frag:Tu,sprite_vert:bu,sprite_frag:wu},ne={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new be}},envmap:{envMap:{value:null},envMapRotation:{value:new be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new be},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0},uvTransform:{value:new be}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new be},alphaMap:{value:null},alphaMapTransform:{value:new be},alphaTest:{value:0}}},Bt={basic:{uniforms:mt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:mt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:mt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:mt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:mt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:mt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:mt([ne.points,ne.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:mt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:mt([ne.common,ne.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:mt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:mt([ne.sprite,ne.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new be}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:mt([ne.common,ne.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:mt([ne.lights,ne.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Bt.physical={uniforms:mt([Bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new be},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new be},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new be},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new be},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new be},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new be}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const Qi={r:0,b:0,g:0},Mn=new Dt,Au=new Ke;function Ru(r,e,t,n,i,s,a){const o=new Fe(0);let l=s===!0?0:1,c,h,u=null,f=0,m=null;function g(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function _(T){let M=!1;const E=g(T);E===null?d(o,l):E&&E.isColor&&(d(E,1),M=!0);const D=r.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil)}function p(T,M){const E=g(M);E&&(E.isCubeTexture||E.mapping===mr)?(h===void 0&&(h=new _t(new In(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:ci(Bt.backgroundCube.uniforms),vertexShader:Bt.backgroundCube.vertexShader,fragmentShader:Bt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Mn.copy(M.backgroundRotation),Mn.x*=-1,Mn.y*=-1,Mn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Mn.y*=-1,Mn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Au.makeRotationFromEuler(Mn)),h.material.toneMapped=Ve.getTransfer(E.colorSpace)!==Ye,(u!==E||f!==E.version||m!==r.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,m=r.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new _t(new dn(2,2),new pn({name:"BackgroundMaterial",uniforms:ci(Bt.background.uniforms),vertexShader:Bt.background.vertexShader,fragmentShader:Bt.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(E.colorSpace)!==Ye,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,m=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function d(T,M){T.getRGB(Qi,Do(r)),n.buffers.color.setClear(Qi.r,Qi.g,Qi.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(T,M=1){o.set(T),l=M,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,d(o,l)},render:_,addToRenderList:p}}function Cu(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(v,N,G,R,k){let q=!1;const j=u(R,G,N);s!==j&&(s=j,c(s.object)),q=m(v,R,G,k),q&&g(v,R,G,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,E(v,N,G,R),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,N,G){const R=G.wireframe===!0;let k=n[v.id];k===void 0&&(k={},n[v.id]=k);let q=k[N.id];q===void 0&&(q={},k[N.id]=q);let j=q[R];return j===void 0&&(j=f(l()),q[R]=j),j}function f(v){const N=[],G=[],R=[];for(let k=0;k<t;k++)N[k]=0,G[k]=0,R[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:R,object:v,attributes:{},index:null}}function m(v,N,G,R){const k=s.attributes,q=N.attributes;let j=0;const ae=G.getAttributes();for(const H in ae)if(ae[H].location>=0){const J=k[H];let pe=q[H];if(pe===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(pe=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(pe=v.instanceColor)),J===void 0||J.attribute!==pe||pe&&J.data!==pe.data)return!0;j++}return s.attributesNum!==j||s.index!==R}function g(v,N,G,R){const k={},q=N.attributes;let j=0;const ae=G.getAttributes();for(const H in ae)if(ae[H].location>=0){let J=q[H];J===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(J=v.instanceColor));const pe={};pe.attribute=J,J&&J.data&&(pe.data=J.data),k[H]=pe,j++}s.attributes=k,s.attributesNum=j,s.index=R}function _(){const v=s.newAttributes;for(let N=0,G=v.length;N<G;N++)v[N]=0}function p(v){d(v,0)}function d(v,N){const G=s.newAttributes,R=s.enabledAttributes,k=s.attributeDivisors;G[v]=1,R[v]===0&&(r.enableVertexAttribArray(v),R[v]=1),k[v]!==N&&(r.vertexAttribDivisor(v,N),k[v]=N)}function T(){const v=s.newAttributes,N=s.enabledAttributes;for(let G=0,R=N.length;G<R;G++)N[G]!==v[G]&&(r.disableVertexAttribArray(G),N[G]=0)}function M(v,N,G,R,k,q,j){j===!0?r.vertexAttribIPointer(v,N,G,k,q):r.vertexAttribPointer(v,N,G,R,k,q)}function E(v,N,G,R){_();const k=R.attributes,q=G.getAttributes(),j=N.defaultAttributeValues;for(const ae in q){const H=q[ae];if(H.location>=0){let Q=k[ae];if(Q===void 0&&(ae==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),ae==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor)),Q!==void 0){const J=Q.normalized,pe=Q.itemSize,Ie=e.get(Q);if(Ie===void 0)continue;const We=Ie.buffer,W=Ie.type,ee=Ie.bytesPerElement,de=W===r.INT||W===r.UNSIGNED_INT||Q.gpuType===So;if(Q.isInterleavedBufferAttribute){const ie=Q.data,Ue=ie.stride,De=Q.offset;if(ie.isInstancedInterleavedBuffer){for(let I=0;I<H.locationSize;I++)d(H.location+I,ie.meshPerAttribute);v.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let I=0;I<H.locationSize;I++)p(H.location+I);r.bindBuffer(r.ARRAY_BUFFER,We);for(let I=0;I<H.locationSize;I++)M(H.location+I,pe/H.locationSize,W,J,Ue*ee,(De+pe/H.locationSize*I)*ee,de)}else{if(Q.isInstancedBufferAttribute){for(let ie=0;ie<H.locationSize;ie++)d(H.location+ie,Q.meshPerAttribute);v.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ie=0;ie<H.locationSize;ie++)p(H.location+ie);r.bindBuffer(r.ARRAY_BUFFER,We);for(let ie=0;ie<H.locationSize;ie++)M(H.location+ie,pe/H.locationSize,W,J,pe*ee,pe/H.locationSize*ie*ee,de)}}else if(j!==void 0){const J=j[ae];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(H.location,J);break;case 3:r.vertexAttrib3fv(H.location,J);break;case 4:r.vertexAttrib4fv(H.location,J);break;default:r.vertexAttrib1fv(H.location,J)}}}}T()}function D(){L();for(const v in n){const N=n[v];for(const G in N){const R=N[G];for(const k in R)h(R[k].object),delete R[k];delete N[G]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const N=n[v.id];for(const G in N){const R=N[G];for(const k in R)h(R[k].object),delete R[k];delete N[G]}delete n[v.id]}function A(v){for(const N in n){const G=n[N];if(G[v.id]===void 0)continue;const R=G[v.id];for(const k in R)h(R[k].object),delete R[k];delete G[v.id]}}function L(){y(),a=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:T}}function Pu(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<u;m++)this.render(c[m],h[m]);else{f.multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g];t.update(m,n,1)}}function l(c,h,u,f){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<f.length;_++)t.update(g,n,f[_])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Lu(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Ht&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const A=w===gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==fn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==on&&!A)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),d=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,D=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:d,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:E,maxSamples:D}}function Iu(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Tn,o=new be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,d=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const T=s?0:n,M=T*4;let E=d.clippingState||null;l.value=E,E=h(g,f,M,m);for(let D=0;D!==M;++D)E[D]=t[D];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,m,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,E=m;M!==_;++M,E+=4)a.copy(u[M]).applyMatrix4(T,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Uu(r){let e=new WeakMap;function t(a,o){return o===hs?a.mapping=ai:o===ds&&(a.mapping=oi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===hs||o===ds)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Wc(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Bo extends No{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ei=4,Da=[.125,.215,.35,.446,.526,.582],An=20,$r=new Bo,Na=new Fe;let Yr=null,jr=0,Kr=0,Zr=!1;const bn=(1+Math.sqrt(5))/2,jn=1/bn,Fa=[new U(-bn,jn,0),new U(bn,jn,0),new U(-jn,0,bn),new U(jn,0,bn),new U(0,bn,-jn),new U(0,bn,jn),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Oa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Yr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=za(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yr,jr,Kr),this._renderer.xr.enabled=Zr,e.scissorTest=!1,er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ai||e.mapping===oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:gr,format:Ht,colorSpace:mn,depthBuffer:!1},i=Ba(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ba(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Du(s)),this._blurMaterial=Nu(s,e,t)}return i}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,$r)}_sceneToCubeUV(e,t,n,i){const o=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Na),h.toneMapping=hn,h.autoClear=!1;const m=new Pn({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),g=new _t(new In,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Na),_=!0);for(let d=0;d<6;d++){const T=d%3;T===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):T===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const M=this._cubeSize;er(i,T*M,d>2?M:0,M,M),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ai||e.mapping===oi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=za());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;er(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,$r)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Fa[(i-s-1)%Fa.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new _t(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*An-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):An;p>An&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${An}`);const d=[];let T=0;for(let A=0;A<An;++A){const L=A/_,y=Math.exp(-L*L/2);d.push(y),A===0?T+=y:A<p&&(T+=2*y)}for(let A=0;A<d.length;A++)d[A]=d[A]/T;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const E=this._sizeLods[i],D=3*E*(i>M-ei?i-M+ei:0),w=4*(this._cubeSize-E);er(t,D,w,3*E,2*E),l.setRenderTarget(t),l.render(u,$r)}}function Du(r){const e=[],t=[],n=[];let i=r;const s=r-ei+1+Da.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-ei?l=Da[a-r+ei-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,d=1,T=new Float32Array(_*g*m),M=new Float32Array(p*g*m),E=new Float32Array(d*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,L=w>2?0:-1,y=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];T.set(y,_*g*w),M.set(f,p*g*w);const v=[w,w,w,w,w,w];E.set(v,d*g*w)}const D=new Nt;D.setAttribute("position",new Gt(T,_)),D.setAttribute("uv",new Gt(M,p)),D.setAttribute("faceIndex",new Gt(E,d)),e.push(D),i>ei&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ba(r,e,t){const n=new Ln(r,e,t);return n.texture.mapping=mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Nu(r,e,t){const n=new Float32Array(An),i=new U(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:An,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function za(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function ka(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function ys(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Fu(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===hs||l===ds,h=l===ai||l===oi;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Oa(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&i(m)?(t===null&&(t=new Oa(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Ou(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Bu(r,e,t,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)e.remove(_[p])}f.removeEventListener("dispose",a),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)e.update(f[g],r.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let p=0,d=_.length;p<d;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const T=m.array;_=m.version;for(let M=0,E=T.length;M<E;M+=3){const D=T[M+0],w=T[M+1],A=T[M+2];f.push(D,w,w,A,A,D)}}else if(g!==void 0){const T=g.array;_=g.version;for(let M=0,E=T.length/3-1;M<E;M+=3){const D=M+0,w=M+1,A=M+2;f.push(D,w,w,A,A,D)}}else return;const p=new(Ro(f)?Uo:Io)(f,1);p.version=_;const d=s.get(u);d&&e.remove(d),s.set(u,p)}function h(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function zu(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){r.drawElements(n,m,s,f*a),t.update(m,n,1)}function c(f,m,g){g!==0&&(r.drawElementsInstanced(n,m,s,f*a,g),t.update(m,n,g))}function h(f,m,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(f[p]/a,m[p]);else{_.multiDrawElementsWEBGL(n,m,0,s,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,n,1)}}function u(f,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/a,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,_,0,g);let d=0;for(let T=0;T<g;T++)d+=m[T];for(let T=0;T<_.length;T++)t.update(d,n,_[T])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ku(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Hu(r,e,t){const n=new WeakMap,i=new st;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let y=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let M=0;m===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let E=o.attributes.position.count*M,D=1;E>e.maxTextureSize&&(D=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*D*4*u),A=new Po(w,E,D,u);A.type=on,A.needsUpdate=!0;const L=M*4;for(let v=0;v<u;v++){const N=p[v],G=d[v],R=T[v],k=E*D*4*v;for(let q=0;q<N.count;q++){const j=q*L;m===!0&&(i.fromBufferAttribute(N,q),w[k+j+0]=i.x,w[k+j+1]=i.y,w[k+j+2]=i.z,w[k+j+3]=0),g===!0&&(i.fromBufferAttribute(G,q),w[k+j+4]=i.x,w[k+j+5]=i.y,w[k+j+6]=i.z,w[k+j+7]=0),_===!0&&(i.fromBufferAttribute(R,q),w[k+j+8]=i.x,w[k+j+9]=i.y,w[k+j+10]=i.z,w[k+j+11]=R.itemSize===4?i.w:1)}}f={count:u,texture:A,size:new Le(E,D)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Gu(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class zo extends vt{constructor(e,t,n,i,s,a,o,l,c,h){if(h=h!==void 0?h:ii,h!==ii&&h!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ii&&(n=li),n===void 0&&h===Ti&&(n=Ri),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ko=new vt,Ho=new zo(1,1);Ho.compareFunction=Ao;const Go=new Po,Vo=new Rc,Wo=new Fo,Ha=[],Ga=[],Va=new Float32Array(16),Wa=new Float32Array(9),Xa=new Float32Array(4);function fi(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ha[i];if(s===void 0&&(s=new Float32Array(i),Ha[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function nt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function it(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function xr(r,e){let t=Ga[e];t===void 0&&(t=new Int32Array(e),Ga[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Vu(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Wu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2fv(this.addr,e),it(t,e)}}function Xu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nt(t,e))return;r.uniform3fv(this.addr,e),it(t,e)}}function qu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4fv(this.addr,e),it(t,e)}}function $u(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;Xa.set(n),r.uniformMatrix2fv(this.addr,!1,Xa),it(t,n)}}function Yu(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;Wa.set(n),r.uniformMatrix3fv(this.addr,!1,Wa),it(t,n)}}function ju(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;Va.set(n),r.uniformMatrix4fv(this.addr,!1,Va),it(t,n)}}function Ku(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Zu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2iv(this.addr,e),it(t,e)}}function Ju(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;r.uniform3iv(this.addr,e),it(t,e)}}function Qu(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4iv(this.addr,e),it(t,e)}}function ef(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function tf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2uiv(this.addr,e),it(t,e)}}function nf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;r.uniform3uiv(this.addr,e),it(t,e)}}function rf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4uiv(this.addr,e),it(t,e)}}function sf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Ho:ko;t.setTexture2D(e||s,i)}function af(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Vo,i)}function of(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Wo,i)}function lf(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Go,i)}function cf(r){switch(r){case 5126:return Vu;case 35664:return Wu;case 35665:return Xu;case 35666:return qu;case 35674:return $u;case 35675:return Yu;case 35676:return ju;case 5124:case 35670:return Ku;case 35667:case 35671:return Zu;case 35668:case 35672:return Ju;case 35669:case 35673:return Qu;case 5125:return ef;case 36294:return tf;case 36295:return nf;case 36296:return rf;case 35678:case 36198:case 36298:case 36306:case 35682:return sf;case 35679:case 36299:case 36307:return af;case 35680:case 36300:case 36308:case 36293:return of;case 36289:case 36303:case 36311:case 36292:return lf}}function hf(r,e){r.uniform1fv(this.addr,e)}function df(r,e){const t=fi(e,this.size,2);r.uniform2fv(this.addr,t)}function uf(r,e){const t=fi(e,this.size,3);r.uniform3fv(this.addr,t)}function ff(r,e){const t=fi(e,this.size,4);r.uniform4fv(this.addr,t)}function pf(r,e){const t=fi(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function mf(r,e){const t=fi(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function gf(r,e){const t=fi(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _f(r,e){r.uniform1iv(this.addr,e)}function vf(r,e){r.uniform2iv(this.addr,e)}function xf(r,e){r.uniform3iv(this.addr,e)}function Sf(r,e){r.uniform4iv(this.addr,e)}function Mf(r,e){r.uniform1uiv(this.addr,e)}function yf(r,e){r.uniform2uiv(this.addr,e)}function Ef(r,e){r.uniform3uiv(this.addr,e)}function Tf(r,e){r.uniform4uiv(this.addr,e)}function bf(r,e,t){const n=this.cache,i=e.length,s=xr(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ko,s[a])}function wf(r,e,t){const n=this.cache,i=e.length,s=xr(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Vo,s[a])}function Af(r,e,t){const n=this.cache,i=e.length,s=xr(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Wo,s[a])}function Rf(r,e,t){const n=this.cache,i=e.length,s=xr(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Go,s[a])}function Cf(r){switch(r){case 5126:return hf;case 35664:return df;case 35665:return uf;case 35666:return ff;case 35674:return pf;case 35675:return mf;case 35676:return gf;case 5124:case 35670:return _f;case 35667:case 35671:return vf;case 35668:case 35672:return xf;case 35669:case 35673:return Sf;case 5125:return Mf;case 36294:return yf;case 36295:return Ef;case 36296:return Tf;case 35678:case 36198:case 36298:case 36306:case 35682:return bf;case 35679:case 36299:case 36307:return wf;case 35680:case 36300:case 36308:case 36293:return Af;case 36289:case 36303:case 36311:case 36292:return Rf}}class Pf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cf(t.type)}}class Lf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cf(t.type)}}class If{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Jr=/(\w+)(\])?(\[|\.)?/g;function qa(r,e){r.seq.push(e),r.map[e.id]=e}function Uf(r,e,t){const n=r.name,i=n.length;for(Jr.lastIndex=0;;){const s=Jr.exec(n),a=Jr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){qa(t,c===void 0?new Pf(o,r,e):new Lf(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new If(o),qa(t,u)),t=u}}}class or{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);Uf(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function $a(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Df=37297;let Nf=0;function Ff(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Of(r){const e=Ve.getPrimaries(Ve.workingColorSpace),t=Ve.getPrimaries(r);let n;switch(e===t?n="":e===dr&&t===hr?n="LinearDisplayP3ToLinearSRGB":e===hr&&t===dr&&(n="LinearSRGBToLinearDisplayP3"),r){case mn:case _r:return[n,"LinearTransferOETF"];case At:case _s:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Ya(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Ff(r.getShaderSource(e),a)}else return i}function Bf(r,e){const t=Of(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function zf(r,e){let t;switch(e){case Ll:t="Linear";break;case Il:t="Reinhard";break;case Ul:t="OptimizedCineon";break;case Dl:t="ACESFilmic";break;case Fl:t="AgX";break;case Ol:t="Neutral";break;case Nl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kf(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mi).join(`
`)}function Hf(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gf(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Mi(r){return r!==""}function ja(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ka(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ps(r){return r.replace(Vf,Xf)}const Wf=new Map;function Xf(r,e){let t=Te[e];if(t===void 0){const n=Wf.get(e);if(n!==void 0)t=Te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ps(t)}const qf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Za(r){return r.replace(qf,$f)}function $f(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ja(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Yf(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===go?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===il?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===jt&&(e="SHADOWMAP_TYPE_VSM"),e}function jf(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ai:case oi:e="ENVMAP_TYPE_CUBE";break;case mr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kf(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case oi:e="ENVMAP_MODE_REFRACTION";break}return e}function Zf(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case _o:e="ENVMAP_BLENDING_MULTIPLY";break;case Cl:e="ENVMAP_BLENDING_MIX";break;case Pl:e="ENVMAP_BLENDING_ADD";break}return e}function Jf(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Qf(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Yf(t),c=jf(t),h=Kf(t),u=Zf(t),f=Jf(t),m=kf(t),g=Hf(s),_=i.createProgram();let p,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mi).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Mi).join(`
`),d.length>0&&(d+=`
`)):(p=[Ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),d=[Ja(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?Te.tonemapping_pars_fragment:"",t.toneMapping!==hn?zf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,Bf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mi).join(`
`)),a=ps(a),a=ja(a,t),a=Ka(a,t),o=ps(o),o=ja(o,t),o=Ka(o,t),a=Za(a),o=Za(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=T+p+a,E=T+d+o,D=$a(i,i.VERTEX_SHADER,M),w=$a(i,i.FRAGMENT_SHADER,E);i.attachShader(_,D),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(N){if(r.debug.checkShaderErrors){const G=i.getProgramInfoLog(_).trim(),R=i.getShaderInfoLog(D).trim(),k=i.getShaderInfoLog(w).trim();let q=!0,j=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,D,w);else{const ae=Ya(i,D,"vertex"),H=Ya(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+ae+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(R===""||k==="")&&(j=!1);j&&(N.diagnostics={runnable:q,programLog:G,vertexShader:{log:R,prefix:p},fragmentShader:{log:k,prefix:d}})}i.deleteShader(D),i.deleteShader(w),L=new or(i,_),y=Gf(i,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Df)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nf++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=w,this}let ep=0;class tp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new np(e),t.set(e,n)),n}}class np{constructor(e){this.id=ep++,this.code=e,this.usedTimes=0}}function ip(r,e,t,n,i,s,a){const o=new Ss,l=new tp,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,v,N,G,R){const k=G.fog,q=R.geometry,j=y.isMeshStandardMaterial?G.environment:null,ae=(y.isMeshStandardMaterial?t:e).get(y.envMap||j),H=ae&&ae.mapping===mr?ae.image.height:null,Q=g[y.type];y.precision!==null&&(m=i.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const J=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pe=J!==void 0?J.length:0;let Ie=0;q.morphAttributes.position!==void 0&&(Ie=1),q.morphAttributes.normal!==void 0&&(Ie=2),q.morphAttributes.color!==void 0&&(Ie=3);let We,W,ee,de;if(Q){const Ge=Bt[Q];We=Ge.vertexShader,W=Ge.fragmentShader}else We=y.vertexShader,W=y.fragmentShader,l.update(y),ee=l.getVertexShaderID(y),de=l.getFragmentShaderID(y);const ie=r.getRenderTarget(),Ue=R.isInstancedMesh===!0,De=R.isBatchedMesh===!0,I=!!y.map,qe=!!y.matcap,_e=!!ae,Xe=!!y.aoMap,Se=!!y.lightMap,Oe=!!y.bumpMap,Ce=!!y.normalMap,Be=!!y.displacementMap,Ze=!!y.emissiveMap,b=!!y.metalnessMap,x=!!y.roughnessMap,z=y.anisotropy>0,$=y.clearcoat>0,K=y.dispersion>0,Z=y.iridescence>0,ge=y.sheen>0,le=y.transmission>0,oe=z&&!!y.anisotropyMap,we=$&&!!y.clearcoatMap,te=$&&!!y.clearcoatNormalMap,me=$&&!!y.clearcoatRoughnessMap,ze=Z&&!!y.iridescenceMap,ve=Z&&!!y.iridescenceThicknessMap,he=ge&&!!y.sheenColorMap,Ae=ge&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,Qe=!!y.specularColorMap,Re=!!y.specularIntensityMap,C=le&&!!y.transmissionMap,Y=le&&!!y.thicknessMap,X=!!y.gradientMap,re=!!y.alphaMap,ce=y.alphaTest>0,ke=!!y.alphaHash,$e=!!y.extensions;let Je=hn;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Je=r.toneMapping);const ot={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:We,fragmentShader:W,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:De,instancing:Ue,instancingColor:Ue&&R.instanceColor!==null,instancingMorph:Ue&&R.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:mn,alphaToCoverage:!!y.alphaToCoverage,map:I,matcap:qe,envMap:_e,envMapMode:_e&&ae.mapping,envMapCubeUVHeight:H,aoMap:Xe,lightMap:Se,bumpMap:Oe,normalMap:Ce,displacementMap:f&&Be,emissiveMap:Ze,normalMapObjectSpace:Ce&&y.normalMapType===Zl,normalMapTangentSpace:Ce&&y.normalMapType===wo,metalnessMap:b,roughnessMap:x,anisotropy:z,anisotropyMap:oe,clearcoat:$,clearcoatMap:we,clearcoatNormalMap:te,clearcoatRoughnessMap:me,dispersion:K,iridescence:Z,iridescenceMap:ze,iridescenceThicknessMap:ve,sheen:ge,sheenColorMap:he,sheenRoughnessMap:Ae,specularMap:Ne,specularColorMap:Qe,specularIntensityMap:Re,transmission:le,transmissionMap:C,thicknessMap:Y,gradientMap:X,opaque:y.transparent===!1&&y.blending===ni&&y.alphaToCoverage===!1,alphaMap:re,alphaTest:ce,alphaHash:ke,combine:y.combine,mapUv:I&&_(y.map.channel),aoMapUv:Xe&&_(y.aoMap.channel),lightMapUv:Se&&_(y.lightMap.channel),bumpMapUv:Oe&&_(y.bumpMap.channel),normalMapUv:Ce&&_(y.normalMap.channel),displacementMapUv:Be&&_(y.displacementMap.channel),emissiveMapUv:Ze&&_(y.emissiveMap.channel),metalnessMapUv:b&&_(y.metalnessMap.channel),roughnessMapUv:x&&_(y.roughnessMap.channel),anisotropyMapUv:oe&&_(y.anisotropyMap.channel),clearcoatMapUv:we&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(y.sheenRoughnessMap.channel),specularMapUv:Ne&&_(y.specularMap.channel),specularColorMapUv:Qe&&_(y.specularColorMap.channel),specularIntensityMapUv:Re&&_(y.specularIntensityMap.channel),transmissionMapUv:C&&_(y.transmissionMap.channel),thicknessMapUv:Y&&_(y.thicknessMap.channel),alphaMapUv:re&&_(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ce||z),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!q.attributes.uv&&(I||re),fog:!!k,useFog:y.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:R.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ie,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&N.length>0,shadowMapType:r.shadowMap.type,toneMapping:Je,useLegacyLights:r._useLegacyLights,decodeVideoTexture:I&&y.map.isVideoTexture===!0&&Ve.getTransfer(y.map.colorSpace)===Ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zt,flipSided:y.side===St,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:$e&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:$e&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function d(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)v.push(N),v.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(T(v,y),M(v,y),v.push(r.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function T(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function M(y,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.alphaToCoverage&&o.enable(20),y.push(o.mask)}function E(y){const v=g[y.type];let N;if(v){const G=Bt[v];N=kc.clone(G.uniforms)}else N=y.uniforms;return N}function D(y,v){let N;for(let G=0,R=h.length;G<R;G++){const k=h[G];if(k.cacheKey===v){N=k,++N.usedTimes;break}}return N===void 0&&(N=new Qf(r,v,y,s),h.push(N)),N}function w(y){if(--y.usedTimes===0){const v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:D,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:L}}function rp(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function sp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Qa(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function eo(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,m,g,_,p){let d=r[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},r[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=p),e++,d}function o(u,f,m,g,_,p){const d=a(u,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):t.push(d)}function l(u,f,m,g,_,p){const d=a(u,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||sp),n.length>1&&n.sort(f||Qa),i.length>1&&i.sort(f||Qa)}function h(){for(let u=e,f=r.length;u<f;u++){const m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function ap(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new eo,r.set(n,[a])):i>=s.length?(a=new eo,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function op(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Fe};break;case"SpotLight":t={position:new U,direction:new U,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function lp(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let cp=0;function hp(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function dp(r){const e=new op,t=lp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new Ke,a=new Ke;function o(c,h){let u=0,f=0,m=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let g=0,_=0,p=0,d=0,T=0,M=0,E=0,D=0,w=0,A=0,L=0;c.sort(hp);const y=h===!0?Math.PI:1;for(let N=0,G=c.length;N<G;N++){const R=c[N],k=R.color,q=R.intensity,j=R.distance,ae=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=k.r*q*y,f+=k.g*q*y,m+=k.b*q*y;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],q);L++}else if(R.isDirectionalLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity*y),R.castShadow){const Q=R.shadow,J=t.get(R);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=ae,n.directionalShadowMatrix[g]=R.shadow.matrix,M++}n.directional[g]=H,g++}else if(R.isSpotLight){const H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(k).multiplyScalar(q*y),H.distance=j,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[p]=H;const Q=R.shadow;if(R.map&&(n.spotLightMap[w]=R.map,w++,Q.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[p]=Q.matrix,R.castShadow){const J=t.get(R);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,n.spotShadow[p]=J,n.spotShadowMap[p]=ae,D++}p++}else if(R.isRectAreaLight){const H=e.get(R);H.color.copy(k).multiplyScalar(q),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[d]=H,d++}else if(R.isPointLight){const H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity*y),H.distance=R.distance,H.decay=R.decay,R.castShadow){const Q=R.shadow,J=t.get(R);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,J.shadowCameraNear=Q.camera.near,J.shadowCameraFar=Q.camera.far,n.pointShadow[_]=J,n.pointShadowMap[_]=ae,n.pointShadowMatrix[_]=R.shadow.matrix,E++}n.point[_]=H,_++}else if(R.isHemisphereLight){const H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(q*y),H.groundColor.copy(R.groundColor).multiplyScalar(q*y),n.hemi[T]=H,T++}}d>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=m;const v=n.hash;(v.directionalLength!==g||v.pointLength!==_||v.spotLength!==p||v.rectAreaLength!==d||v.hemiLength!==T||v.numDirectionalShadows!==M||v.numPointShadows!==E||v.numSpotShadows!==D||v.numSpotMaps!==w||v.numLightProbes!==L)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=d,n.point.length=_,n.hemi.length=T,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=D,n.spotShadowMap.length=D,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=D+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=L,v.directionalLength=g,v.pointLength=_,v.spotLength=p,v.rectAreaLength=d,v.hemiLength=T,v.numDirectionalShadows=M,v.numPointShadows=E,v.numSpotShadows=D,v.numSpotMaps=w,v.numLightProbes=L,n.version=cp++)}function l(c,h){let u=0,f=0,m=0,g=0,_=0;const p=h.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const M=c[d];if(M.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),u++}else if(M.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const E=n.hemi[_];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function to(r){const e=new dp(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(h){e.setup(t,h)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function up(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new to(r),e.set(i,[o])):s>=a.length?(o=new to(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class fp extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pp extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _p(r,e,t){let n=new Ms;const i=new Le,s=new Le,a=new st,o=new fp({depthPacking:Kl}),l=new pp,c={},h=t.maxTextureSize,u={[un]:St,[St]:un,[zt]:zt},f=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:mp,fragmentShader:gp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=go;let d=this.type;this.render=function(w,A,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const y=r.getRenderTarget(),v=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),G=r.state;G.setBlending(cn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const R=d!==jt&&this.type===jt,k=d===jt&&this.type!==jt;for(let q=0,j=w.length;q<j;q++){const ae=w[q],H=ae.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const Q=H.getFrameExtents();if(i.multiply(Q),s.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Q.x),i.x=s.x*Q.x,H.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Q.y),i.y=s.y*Q.y,H.mapSize.y=s.y)),H.map===null||R===!0||k===!0){const pe=this.type!==jt?{minFilter:Ct,magFilter:Ct}:{};H.map!==null&&H.map.dispose(),H.map=new Ln(i.x,i.y,pe),H.map.texture.name=ae.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const J=H.getViewportCount();for(let pe=0;pe<J;pe++){const Ie=H.getViewport(pe);a.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),G.viewport(a),H.updateMatrices(ae,pe),n=H.getFrustum(),E(A,L,H.camera,ae,this.type)}H.isPointLightShadow!==!0&&this.type===jt&&T(H,L),H.needsUpdate=!1}d=this.type,p.needsUpdate=!1,r.setRenderTarget(y,v,N)};function T(w,A){const L=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ln(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,L,f,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,L,m,_,null)}function M(w,A,L,y){let v=null;const N=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)v=N;else if(v=L.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=v.uuid,R=A.uuid;let k=c[G];k===void 0&&(k={},c[G]=k);let q=k[R];q===void 0&&(q=v.clone(),k[R]=q,A.addEventListener("dispose",D)),v=q}if(v.visible=A.visible,v.wireframe=A.wireframe,y===jt?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const G=r.properties.get(v);G.light=L}return v}function E(w,A,L,y,v){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===jt)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const R=e.update(w),k=w.material;if(Array.isArray(k)){const q=R.groups;for(let j=0,ae=q.length;j<ae;j++){const H=q[j],Q=k[H.materialIndex];if(Q&&Q.visible){const J=M(w,Q,y,v);w.onBeforeShadow(r,w,A,L,R,J,H),r.renderBufferDirect(L,null,R,J,w,H),w.onAfterShadow(r,w,A,L,R,J,H)}}}else if(k.visible){const q=M(w,k,y,v);w.onBeforeShadow(r,w,A,L,R,q,null),r.renderBufferDirect(L,null,R,q,w,null),w.onAfterShadow(r,w,A,L,R,q,null)}}const G=w.children;for(let R=0,k=G.length;R<k;R++)E(G[R],A,L,y,v)}function D(w){w.target.removeEventListener("dispose",D);for(const L in c){const y=c[L],v=w.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}function vp(r){function e(){let C=!1;const Y=new st;let X=null;const re=new st(0,0,0,0);return{setMask:function(ce){X!==ce&&!C&&(r.colorMask(ce,ce,ce,ce),X=ce)},setLocked:function(ce){C=ce},setClear:function(ce,ke,$e,Je,ot){ot===!0&&(ce*=Je,ke*=Je,$e*=Je),Y.set(ce,ke,$e,Je),re.equals(Y)===!1&&(r.clearColor(ce,ke,$e,Je),re.copy(Y))},reset:function(){C=!1,X=null,re.set(-1,0,0,0)}}}function t(){let C=!1,Y=null,X=null,re=null;return{setTest:function(ce){ce?de(r.DEPTH_TEST):ie(r.DEPTH_TEST)},setMask:function(ce){Y!==ce&&!C&&(r.depthMask(ce),Y=ce)},setFunc:function(ce){if(X!==ce){switch(ce){case yl:r.depthFunc(r.NEVER);break;case El:r.depthFunc(r.ALWAYS);break;case Tl:r.depthFunc(r.LESS);break;case lr:r.depthFunc(r.LEQUAL);break;case bl:r.depthFunc(r.EQUAL);break;case wl:r.depthFunc(r.GEQUAL);break;case Al:r.depthFunc(r.GREATER);break;case Rl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}X=ce}},setLocked:function(ce){C=ce},setClear:function(ce){re!==ce&&(r.clearDepth(ce),re=ce)},reset:function(){C=!1,Y=null,X=null,re=null}}}function n(){let C=!1,Y=null,X=null,re=null,ce=null,ke=null,$e=null,Je=null,ot=null;return{setTest:function(Ge){C||(Ge?de(r.STENCIL_TEST):ie(r.STENCIL_TEST))},setMask:function(Ge){Y!==Ge&&!C&&(r.stencilMask(Ge),Y=Ge)},setFunc:function(Ge,Ft,ft){(X!==Ge||re!==Ft||ce!==ft)&&(r.stencilFunc(Ge,Ft,ft),X=Ge,re=Ft,ce=ft)},setOp:function(Ge,Ft,ft){(ke!==Ge||$e!==Ft||Je!==ft)&&(r.stencilOp(Ge,Ft,ft),ke=Ge,$e=Ft,Je=ft)},setLocked:function(Ge){C=Ge},setClear:function(Ge){ot!==Ge&&(r.clearStencil(Ge),ot=Ge)},reset:function(){C=!1,Y=null,X=null,re=null,ce=null,ke=null,$e=null,Je=null,ot=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],m=null,g=!1,_=null,p=null,d=null,T=null,M=null,E=null,D=null,w=new Fe(0,0,0),A=0,L=!1,y=null,v=null,N=null,G=null,R=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,j=0;const ae=r.getParameter(r.VERSION);ae.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ae)[1]),q=j>=1):ae.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),q=j>=2);let H=null,Q={};const J=r.getParameter(r.SCISSOR_BOX),pe=r.getParameter(r.VIEWPORT),Ie=new st().fromArray(J),We=new st().fromArray(pe);function W(C,Y,X,re){const ce=new Uint8Array(4),ke=r.createTexture();r.bindTexture(C,ke),r.texParameteri(C,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(C,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $e=0;$e<X;$e++)C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY?r.texImage3D(Y,0,r.RGBA,1,1,re,0,r.RGBA,r.UNSIGNED_BYTE,ce):r.texImage2D(Y+$e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ce);return ke}const ee={};ee[r.TEXTURE_2D]=W(r.TEXTURE_2D,r.TEXTURE_2D,1),ee[r.TEXTURE_CUBE_MAP]=W(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[r.TEXTURE_2D_ARRAY]=W(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ee[r.TEXTURE_3D]=W(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),de(r.DEPTH_TEST),s.setFunc(lr),Oe(!1),Ce(Fs),de(r.CULL_FACE),Xe(cn);function de(C){c[C]!==!0&&(r.enable(C),c[C]=!0)}function ie(C){c[C]!==!1&&(r.disable(C),c[C]=!1)}function Ue(C,Y){return h[C]!==Y?(r.bindFramebuffer(C,Y),h[C]=Y,C===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=Y),C===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=Y),!0):!1}function De(C,Y){let X=f,re=!1;if(C){X=u.get(Y),X===void 0&&(X=[],u.set(Y,X));const ce=C.textures;if(X.length!==ce.length||X[0]!==r.COLOR_ATTACHMENT0){for(let ke=0,$e=ce.length;ke<$e;ke++)X[ke]=r.COLOR_ATTACHMENT0+ke;X.length=ce.length,re=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,re=!0);re&&r.drawBuffers(X)}function I(C){return m!==C?(r.useProgram(C),m=C,!0):!1}const qe={[wn]:r.FUNC_ADD,[sl]:r.FUNC_SUBTRACT,[al]:r.FUNC_REVERSE_SUBTRACT};qe[ol]=r.MIN,qe[ll]=r.MAX;const _e={[cl]:r.ZERO,[hl]:r.ONE,[dl]:r.SRC_COLOR,[ls]:r.SRC_ALPHA,[_l]:r.SRC_ALPHA_SATURATE,[ml]:r.DST_COLOR,[fl]:r.DST_ALPHA,[ul]:r.ONE_MINUS_SRC_COLOR,[cs]:r.ONE_MINUS_SRC_ALPHA,[gl]:r.ONE_MINUS_DST_COLOR,[pl]:r.ONE_MINUS_DST_ALPHA,[vl]:r.CONSTANT_COLOR,[xl]:r.ONE_MINUS_CONSTANT_COLOR,[Sl]:r.CONSTANT_ALPHA,[Ml]:r.ONE_MINUS_CONSTANT_ALPHA};function Xe(C,Y,X,re,ce,ke,$e,Je,ot,Ge){if(C===cn){g===!0&&(ie(r.BLEND),g=!1);return}if(g===!1&&(de(r.BLEND),g=!0),C!==rl){if(C!==_||Ge!==L){if((p!==wn||M!==wn)&&(r.blendEquation(r.FUNC_ADD),p=wn,M=wn),Ge)switch(C){case ni:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case os:r.blendFunc(r.ONE,r.ONE);break;case Os:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bs:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ni:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case os:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Os:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bs:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}d=null,T=null,E=null,D=null,w.set(0,0,0),A=0,_=C,L=Ge}return}ce=ce||Y,ke=ke||X,$e=$e||re,(Y!==p||ce!==M)&&(r.blendEquationSeparate(qe[Y],qe[ce]),p=Y,M=ce),(X!==d||re!==T||ke!==E||$e!==D)&&(r.blendFuncSeparate(_e[X],_e[re],_e[ke],_e[$e]),d=X,T=re,E=ke,D=$e),(Je.equals(w)===!1||ot!==A)&&(r.blendColor(Je.r,Je.g,Je.b,ot),w.copy(Je),A=ot),_=C,L=!1}function Se(C,Y){C.side===zt?ie(r.CULL_FACE):de(r.CULL_FACE);let X=C.side===St;Y&&(X=!X),Oe(X),C.blending===ni&&C.transparent===!1?Xe(cn):Xe(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),i.setMask(C.colorWrite);const re=C.stencilWrite;a.setTest(re),re&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ze(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(C){y!==C&&(C?r.frontFace(r.CW):r.frontFace(r.CCW),y=C)}function Ce(C){C!==tl?(de(r.CULL_FACE),C!==v&&(C===Fs?r.cullFace(r.BACK):C===nl?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ie(r.CULL_FACE),v=C}function Be(C){C!==N&&(q&&r.lineWidth(C),N=C)}function Ze(C,Y,X){C?(de(r.POLYGON_OFFSET_FILL),(G!==Y||R!==X)&&(r.polygonOffset(Y,X),G=Y,R=X)):ie(r.POLYGON_OFFSET_FILL)}function b(C){C?de(r.SCISSOR_TEST):ie(r.SCISSOR_TEST)}function x(C){C===void 0&&(C=r.TEXTURE0+k-1),H!==C&&(r.activeTexture(C),H=C)}function z(C,Y,X){X===void 0&&(H===null?X=r.TEXTURE0+k-1:X=H);let re=Q[X];re===void 0&&(re={type:void 0,texture:void 0},Q[X]=re),(re.type!==C||re.texture!==Y)&&(H!==X&&(r.activeTexture(X),H=X),r.bindTexture(C,Y||ee[C]),re.type=C,re.texture=Y)}function $(){const C=Q[H];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function le(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function oe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ze(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function he(C){Ie.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),Ie.copy(C))}function Ae(C){We.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),We.copy(C))}function Ne(C,Y){let X=l.get(Y);X===void 0&&(X=new WeakMap,l.set(Y,X));let re=X.get(C);re===void 0&&(re=r.getUniformBlockIndex(Y,C.name),X.set(C,re))}function Qe(C,Y){const re=l.get(Y).get(C);o.get(Y)!==re&&(r.uniformBlockBinding(Y,re,C.__bindingPointIndex),o.set(Y,re))}function Re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},H=null,Q={},h={},u=new WeakMap,f=[],m=null,g=!1,_=null,p=null,d=null,T=null,M=null,E=null,D=null,w=new Fe(0,0,0),A=0,L=!1,y=null,v=null,N=null,G=null,R=null,Ie.set(0,0,r.canvas.width,r.canvas.height),We.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:de,disable:ie,bindFramebuffer:Ue,drawBuffers:De,useProgram:I,setBlending:Xe,setMaterial:Se,setFlipSided:Oe,setCullFace:Ce,setLineWidth:Be,setPolygonOffset:Ze,setScissorTest:b,activeTexture:x,bindTexture:z,unbindTexture:$,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:ze,texImage3D:ve,updateUBOMapping:Ne,uniformBlockBinding:Qe,texStorage2D:te,texStorage3D:me,texSubImage2D:ge,texSubImage3D:le,compressedTexSubImage2D:oe,compressedTexSubImage3D:we,scissor:he,viewport:Ae,reset:Re}}function xp(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,x){return m?new OffscreenCanvas(b,x):wi("canvas")}function _(b,x,z){let $=1;const K=Ze(b);if((K.width>z||K.height>z)&&($=z/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor($*K.width),ge=Math.floor($*K.height);u===void 0&&(u=g(Z,ge));const le=x?g(Z,ge):u;return le.width=Z,le.height=ge,le.getContext("2d").drawImage(b,0,0,Z,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Z+"x"+ge+")."),le}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function p(b){return b.generateMipmaps&&b.minFilter!==Ct&&b.minFilter!==Ut}function d(b){r.generateMipmap(b)}function T(b,x,z,$,K=!1){if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=x;if(x===r.RED&&(z===r.FLOAT&&(Z=r.R32F),z===r.HALF_FLOAT&&(Z=r.R16F),z===r.UNSIGNED_BYTE&&(Z=r.R8)),x===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.R8UI),z===r.UNSIGNED_SHORT&&(Z=r.R16UI),z===r.UNSIGNED_INT&&(Z=r.R32UI),z===r.BYTE&&(Z=r.R8I),z===r.SHORT&&(Z=r.R16I),z===r.INT&&(Z=r.R32I)),x===r.RG&&(z===r.FLOAT&&(Z=r.RG32F),z===r.HALF_FLOAT&&(Z=r.RG16F),z===r.UNSIGNED_BYTE&&(Z=r.RG8)),x===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(Z=r.RG8UI),z===r.UNSIGNED_SHORT&&(Z=r.RG16UI),z===r.UNSIGNED_INT&&(Z=r.RG32UI),z===r.BYTE&&(Z=r.RG8I),z===r.SHORT&&(Z=r.RG16I),z===r.INT&&(Z=r.RG32I)),x===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),x===r.RGBA){const ge=K?cr:Ve.getTransfer($);z===r.FLOAT&&(Z=r.RGBA32F),z===r.HALF_FLOAT&&(Z=r.RGBA16F),z===r.UNSIGNED_BYTE&&(Z=ge===Ye?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(b,x){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ct&&b.minFilter!==Ut?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function E(b){const x=b.target;x.removeEventListener("dispose",E),w(x),x.isVideoTexture&&h.delete(x)}function D(b){const x=b.target;x.removeEventListener("dispose",D),L(x)}function w(b){const x=n.get(b);if(x.__webglInit===void 0)return;const z=b.source,$=f.get(z);if($){const K=$[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&A(b),Object.keys($).length===0&&f.delete(z)}n.remove(b)}function A(b){const x=n.get(b);r.deleteTexture(x.__webglTexture);const z=b.source,$=f.get(z);delete $[x.__cacheKey],a.memory.textures--}function L(b){const x=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let K=0;K<x.__webglFramebuffer[$].length;K++)r.deleteFramebuffer(x.__webglFramebuffer[$][K]);else r.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)r.deleteFramebuffer(x.__webglFramebuffer[$]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const z=b.textures;for(let $=0,K=z.length;$<K;$++){const Z=n.get(z[$]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(z[$])}n.remove(b)}let y=0;function v(){y=0}function N(){const b=y;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),y+=1,b}function G(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function R(b,x){const z=n.get(b);if(b.isVideoTexture&&Ce(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(z,b,x);return}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+x)}function k(b,x){const z=n.get(b);if(b.version>0&&z.__version!==b.version){Ie(z,b,x);return}t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+x)}function q(b,x){const z=n.get(b);if(b.version>0&&z.__version!==b.version){Ie(z,b,x);return}t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+x)}function j(b,x){const z=n.get(b);if(b.version>0&&z.__version!==b.version){We(z,b,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+x)}const ae={[us]:r.REPEAT,[Rn]:r.CLAMP_TO_EDGE,[fs]:r.MIRRORED_REPEAT},H={[Ct]:r.NEAREST,[Bl]:r.NEAREST_MIPMAP_NEAREST,[Ui]:r.NEAREST_MIPMAP_LINEAR,[Ut]:r.LINEAR,[Er]:r.LINEAR_MIPMAP_NEAREST,[Cn]:r.LINEAR_MIPMAP_LINEAR},Q={[Jl]:r.NEVER,[rc]:r.ALWAYS,[Ql]:r.LESS,[Ao]:r.LEQUAL,[ec]:r.EQUAL,[ic]:r.GEQUAL,[tc]:r.GREATER,[nc]:r.NOTEQUAL};function J(b,x){if(x.type===on&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ut||x.magFilter===Er||x.magFilter===Ui||x.magFilter===Cn||x.minFilter===Ut||x.minFilter===Er||x.minFilter===Ui||x.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(b,r.TEXTURE_WRAP_S,ae[x.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,ae[x.wrapT]),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,ae[x.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,H[x.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,H[x.minFilter]),x.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,Q[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ct||x.minFilter!==Ui&&x.minFilter!==Cn||x.type===on&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(b,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function pe(b,x){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",E));const $=x.source;let K=f.get($);K===void 0&&(K={},f.set($,K));const Z=G(x);if(Z!==b.__cacheKey){K[Z]===void 0&&(K[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),K[Z].usedTimes++;const ge=K[b.__cacheKey];ge!==void 0&&(K[b.__cacheKey].usedTimes--,ge.usedTimes===0&&A(x)),b.__cacheKey=Z,b.__webglTexture=K[Z].texture}return z}function Ie(b,x,z){let $=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=r.TEXTURE_3D);const K=pe(b,x),Z=x.source;t.bindTexture($,b.__webglTexture,r.TEXTURE0+z);const ge=n.get(Z);if(Z.version!==ge.__version||K===!0){t.activeTexture(r.TEXTURE0+z);const le=Ve.getPrimaries(Ve.workingColorSpace),oe=x.colorSpace===an?null:Ve.getPrimaries(x.colorSpace),we=x.colorSpace===an||le===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let te=_(x.image,!1,i.maxTextureSize);te=Be(x,te);const me=s.convert(x.format,x.colorSpace),ze=s.convert(x.type);let ve=T(x.internalFormat,me,ze,x.colorSpace,x.isVideoTexture);J($,x);let he;const Ae=x.mipmaps,Ne=x.isVideoTexture!==!0,Qe=ge.__version===void 0||K===!0,Re=Z.dataReady,C=M(x,te);if(x.isDepthTexture)ve=r.DEPTH_COMPONENT16,x.type===on?ve=r.DEPTH_COMPONENT32F:x.type===li?ve=r.DEPTH_COMPONENT24:x.type===Ri&&(ve=r.DEPTH24_STENCIL8),Qe&&(Ne?t.texStorage2D(r.TEXTURE_2D,1,ve,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,ve,te.width,te.height,0,me,ze,null));else if(x.isDataTexture)if(Ae.length>0){Ne&&Qe&&t.texStorage2D(r.TEXTURE_2D,C,ve,Ae[0].width,Ae[0].height);for(let Y=0,X=Ae.length;Y<X;Y++)he=Ae[Y],Ne?Re&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,he.width,he.height,me,ze,he.data):t.texImage2D(r.TEXTURE_2D,Y,ve,he.width,he.height,0,me,ze,he.data);x.generateMipmaps=!1}else Ne?(Qe&&t.texStorage2D(r.TEXTURE_2D,C,ve,te.width,te.height),Re&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,te.width,te.height,me,ze,te.data)):t.texImage2D(r.TEXTURE_2D,0,ve,te.width,te.height,0,me,ze,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ne&&Qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,C,ve,Ae[0].width,Ae[0].height,te.depth);for(let Y=0,X=Ae.length;Y<X;Y++)he=Ae[Y],x.format!==Ht?me!==null?Ne?Re&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,he.width,he.height,te.depth,me,he.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,ve,he.width,he.height,te.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?Re&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,he.width,he.height,te.depth,me,ze,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,ve,he.width,he.height,te.depth,0,me,ze,he.data)}else{Ne&&Qe&&t.texStorage2D(r.TEXTURE_2D,C,ve,Ae[0].width,Ae[0].height);for(let Y=0,X=Ae.length;Y<X;Y++)he=Ae[Y],x.format!==Ht?me!==null?Ne?Re&&t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,he.width,he.height,me,he.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,ve,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?Re&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,he.width,he.height,me,ze,he.data):t.texImage2D(r.TEXTURE_2D,Y,ve,he.width,he.height,0,me,ze,he.data)}else if(x.isDataArrayTexture)Ne?(Qe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,C,ve,te.width,te.height,te.depth),Re&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,me,ze,te.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ve,te.width,te.height,te.depth,0,me,ze,te.data);else if(x.isData3DTexture)Ne?(Qe&&t.texStorage3D(r.TEXTURE_3D,C,ve,te.width,te.height,te.depth),Re&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,me,ze,te.data)):t.texImage3D(r.TEXTURE_3D,0,ve,te.width,te.height,te.depth,0,me,ze,te.data);else if(x.isFramebufferTexture){if(Qe)if(Ne)t.texStorage2D(r.TEXTURE_2D,C,ve,te.width,te.height);else{let Y=te.width,X=te.height;for(let re=0;re<C;re++)t.texImage2D(r.TEXTURE_2D,re,ve,Y,X,0,me,ze,null),Y>>=1,X>>=1}}else if(Ae.length>0){if(Ne&&Qe){const Y=Ze(Ae[0]);t.texStorage2D(r.TEXTURE_2D,C,ve,Y.width,Y.height)}for(let Y=0,X=Ae.length;Y<X;Y++)he=Ae[Y],Ne?Re&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,me,ze,he):t.texImage2D(r.TEXTURE_2D,Y,ve,me,ze,he);x.generateMipmaps=!1}else if(Ne){if(Qe){const Y=Ze(te);t.texStorage2D(r.TEXTURE_2D,C,ve,Y.width,Y.height)}Re&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,me,ze,te)}else t.texImage2D(r.TEXTURE_2D,0,ve,me,ze,te);p(x)&&d($),ge.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function We(b,x,z){if(x.image.length!==6)return;const $=pe(b,x),K=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture,r.TEXTURE0+z);const Z=n.get(K);if(K.version!==Z.__version||$===!0){t.activeTexture(r.TEXTURE0+z);const ge=Ve.getPrimaries(Ve.workingColorSpace),le=x.colorSpace===an?null:Ve.getPrimaries(x.colorSpace),oe=x.colorSpace===an||ge===le?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const we=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,me=[];for(let X=0;X<6;X++)!we&&!te?me[X]=_(x.image[X],!0,i.maxCubemapSize):me[X]=te?x.image[X].image:x.image[X],me[X]=Be(x,me[X]);const ze=me[0],ve=s.convert(x.format,x.colorSpace),he=s.convert(x.type),Ae=T(x.internalFormat,ve,he,x.colorSpace),Ne=x.isVideoTexture!==!0,Qe=Z.__version===void 0||$===!0,Re=K.dataReady;let C=M(x,ze);J(r.TEXTURE_CUBE_MAP,x);let Y;if(we){Ne&&Qe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,C,Ae,ze.width,ze.height);for(let X=0;X<6;X++){Y=me[X].mipmaps;for(let re=0;re<Y.length;re++){const ce=Y[re];x.format!==Ht?ve!==null?Ne?Re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,re,0,0,ce.width,ce.height,ve,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,re,Ae,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,re,0,0,ce.width,ce.height,ve,he,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,re,Ae,ce.width,ce.height,0,ve,he,ce.data)}}}else{if(Y=x.mipmaps,Ne&&Qe){Y.length>0&&C++;const X=Ze(me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,C,Ae,X.width,X.height)}for(let X=0;X<6;X++)if(te){Ne?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,me[X].width,me[X].height,ve,he,me[X].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ae,me[X].width,me[X].height,0,ve,he,me[X].data);for(let re=0;re<Y.length;re++){const ke=Y[re].image[X].image;Ne?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,re+1,0,0,ke.width,ke.height,ve,he,ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,re+1,Ae,ke.width,ke.height,0,ve,he,ke.data)}}else{Ne?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ve,he,me[X]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ae,ve,he,me[X]);for(let re=0;re<Y.length;re++){const ce=Y[re];Ne?Re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,re+1,0,0,ve,he,ce.image[X]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+X,re+1,Ae,ve,he,ce.image[X])}}}p(x)&&d(r.TEXTURE_CUBE_MAP),Z.__version=K.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function W(b,x,z,$,K,Z){const ge=s.convert(z.format,z.colorSpace),le=s.convert(z.type),oe=T(z.internalFormat,ge,le,z.colorSpace);if(!n.get(x).__hasExternalTextures){const te=Math.max(1,x.width>>Z),me=Math.max(1,x.height>>Z);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,Z,oe,te,me,x.depth,0,ge,le,null):t.texImage2D(K,Z,oe,te,me,0,ge,le,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),Oe(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,K,n.get(z).__webglTexture,0,Se(x)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,K,n.get(z).__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ee(b,x,z){if(r.bindRenderbuffer(r.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let $=r.DEPTH_COMPONENT24;if(z||Oe(x)){const K=x.depthTexture;K&&K.isDepthTexture&&(K.type===on?$=r.DEPTH_COMPONENT32F:K.type===li&&($=r.DEPTH_COMPONENT24));const Z=Se(x);Oe(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,$,x.width,x.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,$,x.width,x.height)}else r.renderbufferStorage(r.RENDERBUFFER,$,x.width,x.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){const $=Se(x);z&&Oe(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$,r.DEPTH24_STENCIL8,x.width,x.height):Oe(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$,r.DEPTH24_STENCIL8,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,b)}else{const $=x.textures;for(let K=0;K<$.length;K++){const Z=$[K],ge=s.convert(Z.format,Z.colorSpace),le=s.convert(Z.type),oe=T(Z.internalFormat,ge,le,Z.colorSpace),we=Se(x);z&&Oe(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,oe,x.width,x.height):Oe(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,oe,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,oe,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function de(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),R(x.depthTexture,0);const $=n.get(x.depthTexture).__webglTexture,K=Se(x);if(x.depthTexture.format===ii)Oe(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(x.depthTexture.format===Ti)Oe(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ie(b){const x=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");de(x.__webglFramebuffer,b)}else if(z){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]=r.createRenderbuffer(),ee(x.__webglDepthbuffer[$],b,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),ee(x.__webglDepthbuffer,b,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(b,x,z){const $=n.get(b);x!==void 0&&W($.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&ie(b)}function De(b){const x=b.texture,z=n.get(b),$=n.get(x);b.addEventListener("dispose",D);const K=b.textures,Z=b.isWebGLCubeRenderTarget===!0,ge=K.length>1;if(ge||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=x.version,a.memory.textures++),Z){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let oe=0;oe<x.mipmaps.length;oe++)z.__webglFramebuffer[le][oe]=r.createFramebuffer()}else z.__webglFramebuffer[le]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)z.__webglFramebuffer[le]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ge)for(let le=0,oe=K.length;le<oe;le++){const we=n.get(K[le]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),a.memory.textures++)}if(b.samples>0&&Oe(b)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let le=0;le<K.length;le++){const oe=K[le];z.__webglColorRenderbuffer[le]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[le]);const we=s.convert(oe.format,oe.colorSpace),te=s.convert(oe.type),me=T(oe.internalFormat,we,te,oe.colorSpace,b.isXRRenderTarget===!0),ze=Se(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,me,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,z.__webglColorRenderbuffer[le])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),ee(z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),J(r.TEXTURE_CUBE_MAP,x);for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0)for(let oe=0;oe<x.mipmaps.length;oe++)W(z.__webglFramebuffer[le][oe],b,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,oe);else W(z.__webglFramebuffer[le],b,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);p(x)&&d(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let le=0,oe=K.length;le<oe;le++){const we=K[le],te=n.get(we);t.bindTexture(r.TEXTURE_2D,te.__webglTexture),J(r.TEXTURE_2D,we),W(z.__webglFramebuffer,b,we,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,0),p(we)&&d(r.TEXTURE_2D)}t.unbindTexture()}else{let le=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(le,$.__webglTexture),J(le,x),x.mipmaps&&x.mipmaps.length>0)for(let oe=0;oe<x.mipmaps.length;oe++)W(z.__webglFramebuffer[oe],b,x,r.COLOR_ATTACHMENT0,le,oe);else W(z.__webglFramebuffer,b,x,r.COLOR_ATTACHMENT0,le,0);p(x)&&d(le),t.unbindTexture()}b.depthBuffer&&ie(b)}function I(b){const x=b.textures;for(let z=0,$=x.length;z<$;z++){const K=x[z];if(p(K)){const Z=b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ge=n.get(K).__webglTexture;t.bindTexture(Z,ge),d(Z),t.unbindTexture()}}}const qe=[],_e=[];function Xe(b){if(b.samples>0){if(Oe(b)===!1){const x=b.textures,z=b.width,$=b.height;let K=r.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(b),le=x.length>1;if(le)for(let oe=0;oe<x.length;oe++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let oe=0;oe<x.length;oe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),le){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[oe]);const we=n.get(x[oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,we,0)}r.blitFramebuffer(0,0,z,$,0,0,z,$,K,r.NEAREST),l===!0&&(qe.length=0,_e.length=0,qe.push(r.COLOR_ATTACHMENT0+oe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(qe.push(Z),_e.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,_e)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),le)for(let oe=0;oe<x.length;oe++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,ge.__webglColorRenderbuffer[oe]);const we=n.get(x[oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,we,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const x=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function Se(b){return Math.min(i.maxSamples,b.samples)}function Oe(b){const x=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ce(b){const x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Be(b,x){const z=b.colorSpace,$=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||z!==mn&&z!==an&&(Ve.getTransfer(z)===Ye?($!==Ht||K!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function Ze(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=v,this.setTexture2D=R,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=Ue,this.setupRenderTarget=De,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=W,this.useMultisampledRTT=Oe}function Sp(r,e){function t(n,i=an){let s;const a=Ve.getTransfer(i);if(n===fn)return r.UNSIGNED_BYTE;if(n===Mo)return r.UNSIGNED_SHORT_4_4_4_4;if(n===yo)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Hl)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===zl)return r.BYTE;if(n===kl)return r.SHORT;if(n===xo)return r.UNSIGNED_SHORT;if(n===So)return r.INT;if(n===li)return r.UNSIGNED_INT;if(n===on)return r.FLOAT;if(n===gr)return r.HALF_FLOAT;if(n===Gl)return r.ALPHA;if(n===Vl)return r.RGB;if(n===Ht)return r.RGBA;if(n===Wl)return r.LUMINANCE;if(n===Xl)return r.LUMINANCE_ALPHA;if(n===ii)return r.DEPTH_COMPONENT;if(n===Ti)return r.DEPTH_STENCIL;if(n===ql)return r.RED;if(n===Eo)return r.RED_INTEGER;if(n===$l)return r.RG;if(n===To)return r.RG_INTEGER;if(n===bo)return r.RGBA_INTEGER;if(n===Tr||n===br||n===wr||n===Ar)if(a===Ye)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Tr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Tr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ar)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zs||n===ks||n===Hs||n===Gs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===zs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ks)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vs||n===Ws||n===Xs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vs||n===Ws)return a===Ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Xs)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qs||n===$s||n===Ys||n===js||n===Ks||n===Zs||n===Js||n===Qs||n===ea||n===ta||n===na||n===ia||n===ra||n===sa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===qs)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$s)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ys)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===js)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ks)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zs)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Js)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qs)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ea)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ta)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===na)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ia)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ra)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sa)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rr||n===aa||n===oa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Rr)return a===Ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===aa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yl||n===la||n===ca||n===ha)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Rr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===la)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ca)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ha)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Mp extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ti extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yp={type:"move"};class Qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ti;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ep=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tp=`
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

}`;class bp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new vt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new pn({vertexShader:Ep,fragmentShader:Tp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _t(new dn(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class wp extends hi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const _=new bp,p=t.getContextAttributes();let d=null,T=null;const M=[],E=[],D=new Le;let w=null;const A=new Rt;A.layers.enable(1),A.viewport=new st;const L=new Rt;L.layers.enable(2),L.viewport=new st;const y=[A,L],v=new Mp;v.layers.enable(1),v.layers.enable(2);let N=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ee=M[W];return ee===void 0&&(ee=new Qr,M[W]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(W){let ee=M[W];return ee===void 0&&(ee=new Qr,M[W]=ee),ee.getGripSpace()},this.getHand=function(W){let ee=M[W];return ee===void 0&&(ee=new Qr,M[W]=ee),ee.getHandSpace()};function R(W){const ee=E.indexOf(W.inputSource);if(ee===-1)return;const de=M[ee];de!==void 0&&(de.update(W.inputSource,W.frame,c||a),de.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){i.removeEventListener("select",R),i.removeEventListener("selectstart",R),i.removeEventListener("selectend",R),i.removeEventListener("squeeze",R),i.removeEventListener("squeezestart",R),i.removeEventListener("squeezeend",R),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",q);for(let W=0;W<M.length;W++){const ee=E[W];ee!==null&&(E[W]=null,M[W].disconnect(ee))}N=null,G=null,_.reset(),e.setRenderTarget(d),m=null,f=null,u=null,i=null,T=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(d=e.getRenderTarget(),i.addEventListener("select",R),i.addEventListener("selectstart",R),i.addEventListener("selectend",R),i.addEventListener("squeeze",R),i.addEventListener("squeezestart",R),i.addEventListener("squeezeend",R),i.addEventListener("end",k),i.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(D),i.renderState.layers===void 0){const ee={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new Ln(m.framebufferWidth,m.framebufferHeight,{format:Ht,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,de=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?Ti:ii,de=p.stencil?Ri:li);const Ue={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Ue),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Ln(f.textureWidth,f.textureHeight,{format:Ht,type:fn,depthTexture:new zo(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),We.setContext(i),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(W){for(let ee=0;ee<W.removed.length;ee++){const de=W.removed[ee],ie=E.indexOf(de);ie>=0&&(E[ie]=null,M[ie].disconnect(de))}for(let ee=0;ee<W.added.length;ee++){const de=W.added[ee];let ie=E.indexOf(de);if(ie===-1){for(let De=0;De<M.length;De++)if(De>=E.length){E.push(de),ie=De;break}else if(E[De]===null){E[De]=de,ie=De;break}if(ie===-1)break}const Ue=M[ie];Ue&&Ue.connect(de)}}const j=new U,ae=new U;function H(W,ee,de){j.setFromMatrixPosition(ee.matrixWorld),ae.setFromMatrixPosition(de.matrixWorld);const ie=j.distanceTo(ae),Ue=ee.projectionMatrix.elements,De=de.projectionMatrix.elements,I=Ue[14]/(Ue[10]-1),qe=Ue[14]/(Ue[10]+1),_e=(Ue[9]+1)/Ue[5],Xe=(Ue[9]-1)/Ue[5],Se=(Ue[8]-1)/Ue[0],Oe=(De[8]+1)/De[0],Ce=I*Se,Be=I*Oe,Ze=ie/(-Se+Oe),b=Ze*-Se;ee.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(b),W.translateZ(Ze),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const x=I+Ze,z=qe+Ze,$=Ce-b,K=Be+(ie-b),Z=_e*qe/z*x,ge=Xe*qe/z*x;W.projectionMatrix.makePerspective($,K,Z,ge,x,z),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Q(W,ee){ee===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ee.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;_.texture!==null&&(W.near=_.depthNear,W.far=_.depthFar),v.near=L.near=A.near=W.near,v.far=L.far=A.far=W.far,(N!==v.near||G!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),N=v.near,G=v.far,A.near=N,A.far=G,L.near=N,L.far=G,A.updateProjectionMatrix(),L.updateProjectionMatrix(),W.updateProjectionMatrix());const ee=W.parent,de=v.cameras;Q(v,ee);for(let ie=0;ie<de.length;ie++)Q(de[ie],ee);de.length===2?H(v,A,L):v.projectionMatrix.copy(A.projectionMatrix),J(W,v,ee)};function J(W,ee,de){de===null?W.matrix.copy(ee.matrixWorld):(W.matrix.copy(de.matrixWorld),W.matrix.invert(),W.matrix.multiply(ee.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ee.projectionMatrix),W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=bi*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null};let pe=null;function Ie(W,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){const de=h.views;m!==null&&(e.setRenderTargetFramebuffer(T,m.framebuffer),e.setRenderTarget(T));let ie=!1;de.length!==v.cameras.length&&(v.cameras.length=0,ie=!0);for(let De=0;De<de.length;De++){const I=de[De];let qe=null;if(m!==null)qe=m.getViewport(I);else{const Xe=u.getViewSubImage(f,I);qe=Xe.viewport,De===0&&(e.setRenderTargetTextures(T,Xe.colorTexture,f.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(T))}let _e=y[De];_e===void 0&&(_e=new Rt,_e.layers.enable(De),_e.viewport=new st,y[De]=_e),_e.matrix.fromArray(I.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(I.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(qe.x,qe.y,qe.width,qe.height),De===0&&(v.matrix.copy(_e.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ie===!0&&v.cameras.push(_e)}const Ue=i.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const De=u.getDepthInformation(de[0]);De&&De.isValid&&De.texture&&_.init(e,De,i.renderState)}}for(let de=0;de<M.length;de++){const ie=E[de],Ue=M[de];ie!==null&&Ue!==void 0&&Ue.update(ie,ee,c||a)}_.render(e,v),pe&&pe(W,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const We=new Oo;We.setAnimationLoop(Ie),this.setAnimationLoop=function(W){pe=W},this.dispose=function(){}}}const yn=new Dt,Ap=new Ke;function Rp(r,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Do(r)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,T,M,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),h(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,T,M):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===St&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===St&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const T=e.get(d),M=T.envMap,E=T.envMapRotation;if(M&&(p.envMap.value=M,yn.copy(E),yn.x*=-1,yn.y*=-1,yn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(yn.y*=-1,yn.z*=-1),p.envMapRotation.value.setFromMatrix4(Ap.makeRotationFromEuler(yn)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const D=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*D,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,T,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*T,p.scale.value=M*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,T){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===St&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const T=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cp(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,M){const E=M.program;n.uniformBlockBinding(T,E)}function c(T,M){let E=i[T.id];E===void 0&&(g(T),E=h(T),i[T.id]=E,T.addEventListener("dispose",p));const D=M.program;n.updateUBOMapping(T,D);const w=e.render.frame;s[T.id]!==w&&(f(T),s[T.id]=w)}function h(T){const M=u();T.__bindingPointIndex=M;const E=r.createBuffer(),D=T.__size,w=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,D,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,E),E}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const M=i[T.id],E=T.uniforms,D=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let w=0,A=E.length;w<A;w++){const L=Array.isArray(E[w])?E[w]:[E[w]];for(let y=0,v=L.length;y<v;y++){const N=L[y];if(m(N,w,y,D)===!0){const G=N.__offset,R=Array.isArray(N.value)?N.value:[N.value];let k=0;for(let q=0;q<R.length;q++){const j=R[q],ae=_(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,G+k,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):(j.toArray(N.__data,k),k+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(T,M,E,D){const w=T.value,A=M+"_"+E;if(D[A]===void 0)return typeof w=="number"||typeof w=="boolean"?D[A]=w:D[A]=w.clone(),!0;{const L=D[A];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return D[A]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(T){const M=T.uniforms;let E=0;const D=16;for(let A=0,L=M.length;A<L;A++){const y=Array.isArray(M[A])?M[A]:[M[A]];for(let v=0,N=y.length;v<N;v++){const G=y[v],R=Array.isArray(G.value)?G.value:[G.value];for(let k=0,q=R.length;k<q;k++){const j=R[k],ae=_(j),H=E%D;H!==0&&D-H<ae.boundary&&(E+=D-H),G.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=E,E+=ae.storage}}}const w=E%D;return w>0&&(E+=D-w),T.__size=E,T.__cache={},this}function _(T){const M={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(M.boundary=4,M.storage=4):T.isVector2?(M.boundary=8,M.storage=8):T.isVector3||T.isColor?(M.boundary=16,M.storage=12):T.isVector4?(M.boundary=16,M.storage=16):T.isMatrix3?(M.boundary=48,M.storage=48):T.isMatrix4?(M.boundary=64,M.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),M}function p(T){const M=T.target;M.removeEventListener("dispose",p);const E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function d(){for(const T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:l,update:c,dispose:d}}class Pp{constructor(e={}){const{canvas:t=Mc(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const d=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=hn,this.toneMappingExposure=1;const M=this;let E=!1,D=0,w=0,A=null,L=-1,y=null;const v=new st,N=new st;let G=null;const R=new Fe(0);let k=0,q=t.width,j=t.height,ae=1,H=null,Q=null;const J=new st(0,0,q,j),pe=new st(0,0,q,j);let Ie=!1;const We=new Ms;let W=!1,ee=!1;const de=new Ke,ie=new U,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return A===null?ae:1}let I=n;function qe(S,P){return t.getContext(S,P)}try{const S={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gs}`),t.addEventListener("webglcontextlost",C,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",X,!1),I===null){const P="webgl2";if(I=qe(P,S),I===null)throw qe(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let _e,Xe,Se,Oe,Ce,Be,Ze,b,x,z,$,K,Z,ge,le,oe,we,te,me,ze,ve,he,Ae,Ne;function Qe(){_e=new Ou(I),_e.init(),he=new Sp(I,_e),Xe=new Lu(I,_e,e,he),Se=new vp(I),Oe=new ku(I),Ce=new rp,Be=new xp(I,_e,Se,Ce,Xe,he,Oe),Ze=new Uu(M),b=new Fu(M),x=new $c(I),Ae=new Cu(I,x),z=new Bu(I,x,Oe,Ae),$=new Gu(I,z,x,Oe),me=new Hu(I,Xe,Be),oe=new Iu(Ce),K=new ip(M,Ze,b,_e,Xe,Ae,oe),Z=new Rp(M,Ce),ge=new ap,le=new up(_e),te=new Ru(M,Ze,b,Se,$,f,l),we=new _p(M,$,Xe),Ne=new Cp(I,Oe,Xe,Se),ze=new Pu(I,_e,Oe),ve=new zu(I,_e,Oe),Oe.programs=K.programs,M.capabilities=Xe,M.extensions=_e,M.properties=Ce,M.renderLists=ge,M.shadowMap=we,M.state=Se,M.info=Oe}Qe();const Re=new wp(M,I);this.xr=Re,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=_e.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=_e.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(S){S!==void 0&&(ae=S,this.setSize(q,j,!1))},this.getSize=function(S){return S.set(q,j)},this.setSize=function(S,P,B=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,j=P,t.width=Math.floor(S*ae),t.height=Math.floor(P*ae),B===!0&&(t.style.width=S+"px",t.style.height=P+"px"),this.setViewport(0,0,S,P)},this.getDrawingBufferSize=function(S){return S.set(q*ae,j*ae).floor()},this.setDrawingBufferSize=function(S,P,B){q=S,j=P,ae=B,t.width=Math.floor(S*B),t.height=Math.floor(P*B),this.setViewport(0,0,S,P)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(J)},this.setViewport=function(S,P,B,F){S.isVector4?J.set(S.x,S.y,S.z,S.w):J.set(S,P,B,F),Se.viewport(v.copy(J).multiplyScalar(ae).round())},this.getScissor=function(S){return S.copy(pe)},this.setScissor=function(S,P,B,F){S.isVector4?pe.set(S.x,S.y,S.z,S.w):pe.set(S,P,B,F),Se.scissor(N.copy(pe).multiplyScalar(ae).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(S){Se.setScissorTest(Ie=S)},this.setOpaqueSort=function(S){H=S},this.setTransparentSort=function(S){Q=S},this.getClearColor=function(S){return S.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(S=!0,P=!0,B=!0){let F=0;if(S){let O=!1;if(A!==null){const se=A.texture.format;O=se===bo||se===To||se===Eo}if(O){const se=A.texture.type,ue=se===fn||se===li||se===xo||se===Ri||se===Mo||se===yo,fe=te.getClearColor(),xe=te.getClearAlpha(),Me=fe.r,Ee=fe.g,Pe=fe.b;ue?(m[0]=Me,m[1]=Ee,m[2]=Pe,m[3]=xe,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Me,g[1]=Ee,g[2]=Pe,g[3]=xe,I.clearBufferiv(I.COLOR,0,g))}else F|=I.COLOR_BUFFER_BIT}P&&(F|=I.DEPTH_BUFFER_BIT),B&&(F|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",C,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",X,!1),ge.dispose(),le.dispose(),Ce.dispose(),Ze.dispose(),b.dispose(),$.dispose(),Ae.dispose(),Ne.dispose(),K.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Ge),Re.removeEventListener("sessionend",Ft),ft.stop()};function C(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=Oe.autoReset,P=we.enabled,B=we.autoUpdate,F=we.needsUpdate,O=we.type;Qe(),Oe.autoReset=S,we.enabled=P,we.autoUpdate=B,we.needsUpdate=F,we.type=O}function X(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function re(S){const P=S.target;P.removeEventListener("dispose",re),ce(P)}function ce(S){ke(S),Ce.remove(S)}function ke(S){const P=Ce.get(S).programs;P!==void 0&&(P.forEach(function(B){K.releaseProgram(B)}),S.isShaderMaterial&&K.releaseShaderCache(S))}this.renderBufferDirect=function(S,P,B,F,O,se){P===null&&(P=Ue);const ue=O.isMesh&&O.matrixWorld.determinant()<0,fe=jo(S,P,B,F,O);Se.setMaterial(F,ue);let xe=B.index,Me=1;if(F.wireframe===!0){if(xe=z.getWireframeAttribute(B),xe===void 0)return;Me=2}const Ee=B.drawRange,Pe=B.attributes.position;let et=Ee.start*Me,lt=(Ee.start+Ee.count)*Me;se!==null&&(et=Math.max(et,se.start*Me),lt=Math.min(lt,(se.start+se.count)*Me)),xe!==null?(et=Math.max(et,0),lt=Math.min(lt,xe.count)):Pe!=null&&(et=Math.max(et,0),lt=Math.min(lt,Pe.count));const yt=lt-et;if(yt<0||yt===1/0)return;Ae.setup(O,F,fe,B,xe);let Vt,He=ze;if(xe!==null&&(Vt=x.get(xe),He=ve,He.setIndex(Vt)),O.isMesh)F.wireframe===!0?(Se.setLineWidth(F.wireframeLinewidth*De()),He.setMode(I.LINES)):He.setMode(I.TRIANGLES);else if(O.isLine){let ye=F.linewidth;ye===void 0&&(ye=1),Se.setLineWidth(ye*De()),O.isLineSegments?He.setMode(I.LINES):O.isLineLoop?He.setMode(I.LINE_LOOP):He.setMode(I.LINE_STRIP)}else O.isPoints?He.setMode(I.POINTS):O.isSprite&&He.setMode(I.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?He.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):He.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)He.renderInstances(et,yt,O.count);else if(B.isInstancedBufferGeometry){const ye=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,pi=Math.min(B.instanceCount,ye);He.renderInstances(et,yt,pi)}else He.render(et,yt)};function $e(S,P,B){S.transparent===!0&&S.side===zt&&S.forceSinglePass===!1?(S.side=St,S.needsUpdate=!0,Ii(S,P,B),S.side=un,S.needsUpdate=!0,Ii(S,P,B),S.side=zt):Ii(S,P,B)}this.compile=function(S,P,B=null){B===null&&(B=S),p=le.get(B),p.init(P),T.push(p),B.traverseVisible(function(O){O.isLight&&O.layers.test(P.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),S!==B&&S.traverseVisible(function(O){O.isLight&&O.layers.test(P.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(M._useLegacyLights);const F=new Set;return S.traverse(function(O){const se=O.material;if(se)if(Array.isArray(se))for(let ue=0;ue<se.length;ue++){const fe=se[ue];$e(fe,B,O),F.add(fe)}else $e(se,B,O),F.add(se)}),T.pop(),p=null,F},this.compileAsync=function(S,P,B=null){const F=this.compile(S,P,B);return new Promise(O=>{function se(){if(F.forEach(function(ue){Ce.get(ue).currentProgram.isReady()&&F.delete(ue)}),F.size===0){O(S);return}setTimeout(se,10)}_e.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Je=null;function ot(S){Je&&Je(S)}function Ge(){ft.stop()}function Ft(){ft.start()}const ft=new Oo;ft.setAnimationLoop(ot),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(S){Je=S,Re.setAnimationLoop(S),S===null?ft.stop():ft.start()},Re.addEventListener("sessionstart",Ge),Re.addEventListener("sessionend",Ft),this.render=function(S,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(P),P=Re.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,P,A),p=le.get(S,T.length),p.init(P),T.push(p),de.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),We.setFromProjectionMatrix(de),ee=this.localClippingEnabled,W=oe.init(this.clippingPlanes,ee),_=ge.get(S,d.length),_.init(),d.push(_),Rs(S,P,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(H,Q);const B=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1;B&&te.addToRenderList(_,S),this.info.render.frame++,W===!0&&oe.beginShadows();const F=p.state.shadowsArray;we.render(F,S,P),W===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=_.opaque,se=_.transmissive;if(p.setupLights(M._useLegacyLights),P.isArrayCamera){const ue=P.cameras;if(se.length>0)for(let fe=0,xe=ue.length;fe<xe;fe++){const Me=ue[fe];Ps(O,se,S,Me)}B&&te.render(S);for(let fe=0,xe=ue.length;fe<xe;fe++){const Me=ue[fe];Cs(_,S,Me,Me.viewport)}}else se.length>0&&Ps(O,se,S,P),B&&te.render(S),Cs(_,S,P);A!==null&&(Be.updateMultisampleRenderTarget(A),Be.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(M,S,P),Ae.resetDefaultState(),L=-1,y=null,T.pop(),T.length>0?(p=T[T.length-1],W===!0&&oe.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Rs(S,P,B,F){if(S.visible===!1)return;if(S.layers.test(P.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(P);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||We.intersectsSprite(S)){F&&ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(de);const ue=$.update(S),fe=S.material;fe.visible&&_.push(S,ue,fe,B,ie.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||We.intersectsObject(S))){const ue=$.update(S),fe=S.material;if(F&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ie.copy(S.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),ie.copy(ue.boundingSphere.center)),ie.applyMatrix4(S.matrixWorld).applyMatrix4(de)),Array.isArray(fe)){const xe=ue.groups;for(let Me=0,Ee=xe.length;Me<Ee;Me++){const Pe=xe[Me],et=fe[Pe.materialIndex];et&&et.visible&&_.push(S,ue,et,B,ie.z,Pe)}}else fe.visible&&_.push(S,ue,fe,B,ie.z,null)}}const se=S.children;for(let ue=0,fe=se.length;ue<fe;ue++)Rs(se[ue],P,B,F)}function Cs(S,P,B,F){const O=S.opaque,se=S.transmissive,ue=S.transparent;p.setupLightsView(B),W===!0&&oe.setGlobalState(M.clippingPlanes,B),F&&Se.viewport(v.copy(F)),O.length>0&&Li(O,P,B),se.length>0&&Li(se,P,B),ue.length>0&&Li(ue,P,B),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Ps(S,P,B,F){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new Ln(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float")?gr:fn,minFilter:Cn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const se=p.state.transmissionRenderTarget[F.id],ue=F.viewport||v;se.setSize(ue.z,ue.w);const fe=M.getRenderTarget();M.setRenderTarget(se),M.getClearColor(R),k=M.getClearAlpha(),k<1&&M.setClearColor(16777215,.5),M.clear();const xe=M.toneMapping;M.toneMapping=hn;const Me=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),W===!0&&oe.setGlobalState(M.clippingPlanes,F),Li(S,B,F),Be.updateMultisampleRenderTarget(se),Be.updateRenderTargetMipmap(se),_e.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let Pe=0,et=P.length;Pe<et;Pe++){const lt=P[Pe],yt=lt.object,Vt=lt.geometry,He=lt.material,ye=lt.group;if(He.side===zt&&yt.layers.test(F.layers)){const pi=He.side;He.side=St,He.needsUpdate=!0,Ls(yt,B,F,Vt,He,ye),He.side=pi,He.needsUpdate=!0,Ee=!0}}Ee===!0&&(Be.updateMultisampleRenderTarget(se),Be.updateRenderTargetMipmap(se))}M.setRenderTarget(fe),M.setClearColor(R,k),Me!==void 0&&(F.viewport=Me),M.toneMapping=xe}function Li(S,P,B){const F=P.isScene===!0?P.overrideMaterial:null;for(let O=0,se=S.length;O<se;O++){const ue=S[O],fe=ue.object,xe=ue.geometry,Me=F===null?ue.material:F,Ee=ue.group;fe.layers.test(B.layers)&&Ls(fe,P,B,xe,Me,Ee)}}function Ls(S,P,B,F,O,se){S.onBeforeRender(M,P,B,F,O,se),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(M,P,B,F,S,se),O.transparent===!0&&O.side===zt&&O.forceSinglePass===!1?(O.side=St,O.needsUpdate=!0,M.renderBufferDirect(B,P,F,O,S,se),O.side=un,O.needsUpdate=!0,M.renderBufferDirect(B,P,F,O,S,se),O.side=zt):M.renderBufferDirect(B,P,F,O,S,se),S.onAfterRender(M,P,B,F,O,se)}function Ii(S,P,B){P.isScene!==!0&&(P=Ue);const F=Ce.get(S),O=p.state.lights,se=p.state.shadowsArray,ue=O.state.version,fe=K.getParameters(S,O.state,se,P,B),xe=K.getProgramCacheKey(fe);let Me=F.programs;F.environment=S.isMeshStandardMaterial?P.environment:null,F.fog=P.fog,F.envMap=(S.isMeshStandardMaterial?b:Ze).get(S.envMap||F.environment),F.envMapRotation=F.environment!==null&&S.envMap===null?P.environmentRotation:S.envMapRotation,Me===void 0&&(S.addEventListener("dispose",re),Me=new Map,F.programs=Me);let Ee=Me.get(xe);if(Ee!==void 0){if(F.currentProgram===Ee&&F.lightsStateVersion===ue)return Us(S,fe),Ee}else fe.uniforms=K.getUniforms(S),S.onBuild(B,fe,M),S.onBeforeCompile(fe,M),Ee=K.acquireProgram(fe,xe),Me.set(xe,Ee),F.uniforms=fe.uniforms;const Pe=F.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Pe.clippingPlanes=oe.uniform),Us(S,fe),F.needsLights=Zo(S),F.lightsStateVersion=ue,F.needsLights&&(Pe.ambientLightColor.value=O.state.ambient,Pe.lightProbe.value=O.state.probe,Pe.directionalLights.value=O.state.directional,Pe.directionalLightShadows.value=O.state.directionalShadow,Pe.spotLights.value=O.state.spot,Pe.spotLightShadows.value=O.state.spotShadow,Pe.rectAreaLights.value=O.state.rectArea,Pe.ltc_1.value=O.state.rectAreaLTC1,Pe.ltc_2.value=O.state.rectAreaLTC2,Pe.pointLights.value=O.state.point,Pe.pointLightShadows.value=O.state.pointShadow,Pe.hemisphereLights.value=O.state.hemi,Pe.directionalShadowMap.value=O.state.directionalShadowMap,Pe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pe.spotShadowMap.value=O.state.spotShadowMap,Pe.spotLightMatrix.value=O.state.spotLightMatrix,Pe.spotLightMap.value=O.state.spotLightMap,Pe.pointShadowMap.value=O.state.pointShadowMap,Pe.pointShadowMatrix.value=O.state.pointShadowMatrix),F.currentProgram=Ee,F.uniformsList=null,Ee}function Is(S){if(S.uniformsList===null){const P=S.currentProgram.getUniforms();S.uniformsList=or.seqWithValue(P.seq,S.uniforms)}return S.uniformsList}function Us(S,P){const B=Ce.get(S);B.outputColorSpace=P.outputColorSpace,B.batching=P.batching,B.instancing=P.instancing,B.instancingColor=P.instancingColor,B.instancingMorph=P.instancingMorph,B.skinning=P.skinning,B.morphTargets=P.morphTargets,B.morphNormals=P.morphNormals,B.morphColors=P.morphColors,B.morphTargetsCount=P.morphTargetsCount,B.numClippingPlanes=P.numClippingPlanes,B.numIntersection=P.numClipIntersection,B.vertexAlphas=P.vertexAlphas,B.vertexTangents=P.vertexTangents,B.toneMapping=P.toneMapping}function jo(S,P,B,F,O){P.isScene!==!0&&(P=Ue),Be.resetTextureUnits();const se=P.fog,ue=F.isMeshStandardMaterial?P.environment:null,fe=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:mn,xe=(F.isMeshStandardMaterial?b:Ze).get(F.envMap||ue),Me=F.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ee=!!B.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Pe=!!B.morphAttributes.position,et=!!B.morphAttributes.normal,lt=!!B.morphAttributes.color;let yt=hn;F.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(yt=M.toneMapping);const Vt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,He=Vt!==void 0?Vt.length:0,ye=Ce.get(F),pi=p.state.lights;if(W===!0&&(ee===!0||S!==y)){const bt=S===y&&F.id===L;oe.setState(F,S,bt)}let je=!1;F.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==pi.state.version||ye.outputColorSpace!==fe||O.isBatchedMesh&&ye.batching===!1||!O.isBatchedMesh&&ye.batching===!0||O.isInstancedMesh&&ye.instancing===!1||!O.isInstancedMesh&&ye.instancing===!0||O.isSkinnedMesh&&ye.skinning===!1||!O.isSkinnedMesh&&ye.skinning===!0||O.isInstancedMesh&&ye.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ye.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ye.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ye.instancingMorph===!1&&O.morphTexture!==null||ye.envMap!==xe||F.fog===!0&&ye.fog!==se||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==oe.numPlanes||ye.numIntersection!==oe.numIntersection)||ye.vertexAlphas!==Me||ye.vertexTangents!==Ee||ye.morphTargets!==Pe||ye.morphNormals!==et||ye.morphColors!==lt||ye.toneMapping!==yt||ye.morphTargetsCount!==He)&&(je=!0):(je=!0,ye.__version=F.version);let gn=ye.currentProgram;je===!0&&(gn=Ii(F,P,O));let Ds=!1,mi=!1,Sr=!1;const ct=gn.getUniforms(),Zt=ye.uniforms;if(Se.useProgram(gn.program)&&(Ds=!0,mi=!0,Sr=!0),F.id!==L&&(L=F.id,mi=!0),Ds||y!==S){ct.setValue(I,"projectionMatrix",S.projectionMatrix),ct.setValue(I,"viewMatrix",S.matrixWorldInverse);const bt=ct.map.cameraPosition;bt!==void 0&&bt.setValue(I,ie.setFromMatrixPosition(S.matrixWorld)),Xe.logarithmicDepthBuffer&&ct.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ct.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,mi=!0,Sr=!0)}if(O.isSkinnedMesh){ct.setOptional(I,O,"bindMatrix"),ct.setOptional(I,O,"bindMatrixInverse");const bt=O.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),ct.setValue(I,"boneTexture",bt.boneTexture,Be))}O.isBatchedMesh&&(ct.setOptional(I,O,"batchingTexture"),ct.setValue(I,"batchingTexture",O._matricesTexture,Be));const Mr=B.morphAttributes;if((Mr.position!==void 0||Mr.normal!==void 0||Mr.color!==void 0)&&me.update(O,B,gn),(mi||ye.receiveShadow!==O.receiveShadow)&&(ye.receiveShadow=O.receiveShadow,ct.setValue(I,"receiveShadow",O.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Zt.envMap.value=xe,Zt.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&P.environment!==null&&(Zt.envMapIntensity.value=P.environmentIntensity),mi&&(ct.setValue(I,"toneMappingExposure",M.toneMappingExposure),ye.needsLights&&Ko(Zt,Sr),se&&F.fog===!0&&Z.refreshFogUniforms(Zt,se),Z.refreshMaterialUniforms(Zt,F,ae,j,p.state.transmissionRenderTarget[S.id]),or.upload(I,Is(ye),Zt,Be)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(or.upload(I,Is(ye),Zt,Be),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ct.setValue(I,"center",O.center),ct.setValue(I,"modelViewMatrix",O.modelViewMatrix),ct.setValue(I,"normalMatrix",O.normalMatrix),ct.setValue(I,"modelMatrix",O.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const bt=F.uniformsGroups;for(let yr=0,Jo=bt.length;yr<Jo;yr++){const Ns=bt[yr];Ne.update(Ns,gn),Ne.bind(Ns,gn)}}return gn}function Ko(S,P){S.ambientLightColor.needsUpdate=P,S.lightProbe.needsUpdate=P,S.directionalLights.needsUpdate=P,S.directionalLightShadows.needsUpdate=P,S.pointLights.needsUpdate=P,S.pointLightShadows.needsUpdate=P,S.spotLights.needsUpdate=P,S.spotLightShadows.needsUpdate=P,S.rectAreaLights.needsUpdate=P,S.hemisphereLights.needsUpdate=P}function Zo(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,P,B){Ce.get(S.texture).__webglTexture=P,Ce.get(S.depthTexture).__webglTexture=B;const F=Ce.get(S);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=B===void 0,F.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,P){const B=Ce.get(S);B.__webglFramebuffer=P,B.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(S,P=0,B=0){A=S,D=P,w=B;let F=!0,O=null,se=!1,ue=!1;if(S){const xe=Ce.get(S);xe.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(I.FRAMEBUFFER,null),F=!1):xe.__webglFramebuffer===void 0?Be.setupRenderTarget(S):xe.__hasExternalTextures&&Be.rebindTextures(S,Ce.get(S.texture).__webglTexture,Ce.get(S.depthTexture).__webglTexture);const Me=S.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(ue=!0);const Ee=Ce.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ee[P])?O=Ee[P][B]:O=Ee[P],se=!0):S.samples>0&&Be.useMultisampledRTT(S)===!1?O=Ce.get(S).__webglMultisampledFramebuffer:Array.isArray(Ee)?O=Ee[B]:O=Ee,v.copy(S.viewport),N.copy(S.scissor),G=S.scissorTest}else v.copy(J).multiplyScalar(ae).floor(),N.copy(pe).multiplyScalar(ae).floor(),G=Ie;if(Se.bindFramebuffer(I.FRAMEBUFFER,O)&&F&&Se.drawBuffers(S,O),Se.viewport(v),Se.scissor(N),Se.setScissorTest(G),se){const xe=Ce.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,xe.__webglTexture,B)}else if(ue){const xe=Ce.get(S.texture),Me=P||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,xe.__webglTexture,B||0,Me)}L=-1},this.readRenderTargetPixels=function(S,P,B,F,O,se,ue){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=Ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ue!==void 0&&(fe=fe[ue]),fe){Se.bindFramebuffer(I.FRAMEBUFFER,fe);try{const xe=S.texture,Me=xe.format,Ee=xe.type;if(!Xe.textureFormatReadable(Me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=S.width-F&&B>=0&&B<=S.height-O&&I.readPixels(P,B,F,O,he.convert(Me),he.convert(Ee),se)}finally{const xe=A!==null?Ce.get(A).__webglFramebuffer:null;Se.bindFramebuffer(I.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(S,P,B=0){const F=Math.pow(2,-B),O=Math.floor(P.image.width*F),se=Math.floor(P.image.height*F);Be.setTexture2D(P,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,S.x,S.y,O,se),Se.unbindTexture()},this.copyTextureToTexture=function(S,P,B,F=0){const O=P.image.width,se=P.image.height,ue=he.convert(B.format),fe=he.convert(B.type);Be.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment),P.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,F,S.x,S.y,O,se,ue,fe,P.image.data):P.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,F,S.x,S.y,P.mipmaps[0].width,P.mipmaps[0].height,ue,P.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,F,S.x,S.y,ue,fe,P.image),F===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(S,P,B,F,O=0){const se=S.max.x-S.min.x,ue=S.max.y-S.min.y,fe=S.max.z-S.min.z,xe=he.convert(F.format),Me=he.convert(F.type);let Ee;if(F.isData3DTexture)Be.setTexture3D(F,0),Ee=I.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Be.setTexture2DArray(F,0),Ee=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Pe=I.getParameter(I.UNPACK_ROW_LENGTH),et=I.getParameter(I.UNPACK_IMAGE_HEIGHT),lt=I.getParameter(I.UNPACK_SKIP_PIXELS),yt=I.getParameter(I.UNPACK_SKIP_ROWS),Vt=I.getParameter(I.UNPACK_SKIP_IMAGES),He=B.isCompressedTexture?B.mipmaps[O]:B.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,He.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,He.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,S.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,S.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,S.min.z),B.isDataTexture||B.isData3DTexture?I.texSubImage3D(Ee,O,P.x,P.y,P.z,se,ue,fe,xe,Me,He.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Ee,O,P.x,P.y,P.z,se,ue,fe,xe,He.data):I.texSubImage3D(Ee,O,P.x,P.y,P.z,se,ue,fe,xe,Me,He),I.pixelStorei(I.UNPACK_ROW_LENGTH,Pe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,et),I.pixelStorei(I.UNPACK_SKIP_PIXELS,lt),I.pixelStorei(I.UNPACK_SKIP_ROWS,yt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Vt),O===0&&F.generateMipmaps&&I.generateMipmap(Ee),Se.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Be.setTextureCube(S,0):S.isData3DTexture?Be.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Be.setTexture2DArray(S,0):Be.setTexture2D(S,0),Se.unbindTexture()},this.resetState=function(){D=0,w=0,A=null,Se.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===_s?"display-p3":"srgb",t.unpackColorSpace=Ve.workingColorSpace===_r?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Es{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new Es(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Lp extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dt,this.environmentIntensity=1,this.environmentRotation=new Dt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xo extends ui{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fr=new U,pr=new U,no=new Ke,Si=new xs,tr=new vr,es=new U,io=new U;class Ip extends at{constructor(e=new Nt,t=new Xo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)fr.fromBufferAttribute(t,i-1),pr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=fr.distanceTo(pr);e.setAttribute("lineDistance",new Mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(i),tr.radius+=s,e.ray.intersectsSphere(tr)===!1)return;no.copy(i).invert(),Si.copy(e.ray).applyMatrix4(no);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=m,p=g-1;_<p;_+=c){const d=h.getX(_),T=h.getX(_+1),M=nr(this,e,Si,l,d,T);M&&t.push(M)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(m),d=nr(this,e,Si,l,_,p);d&&t.push(d)}}else{const m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=m,p=g-1;_<p;_+=c){const d=nr(this,e,Si,l,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=nr(this,e,Si,l,g-1,m);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function nr(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(fr.fromBufferAttribute(a,i),pr.fromBufferAttribute(a,s),t.distanceSqToSegment(fr,pr,es,io)>n)return;es.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(es);if(!(l<e.near||l>e.far))return{distance:l,point:io.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}class Ts extends Nt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],f=[],m=[];let g=0;const _=[],p=n/2;let d=0;T(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Mt(u,3)),this.setAttribute("normal",new Mt(f,3)),this.setAttribute("uv",new Mt(m,2));function T(){const E=new U,D=new U;let w=0;const A=(t-e)/n;for(let L=0;L<=s;L++){const y=[],v=L/s,N=v*(t-e)+e;for(let G=0;G<=i;G++){const R=G/i,k=R*l+o,q=Math.sin(k),j=Math.cos(k);D.x=N*q,D.y=-v*n+p,D.z=N*j,u.push(D.x,D.y,D.z),E.set(q,A,j).normalize(),f.push(E.x,E.y,E.z),m.push(R,1-v),y.push(g++)}_.push(y)}for(let L=0;L<i;L++)for(let y=0;y<s;y++){const v=_[y][L],N=_[y+1][L],G=_[y+1][L+1],R=_[y][L+1];h.push(v,N,R),h.push(N,G,R),w+=6}c.addGroup(d,w,0),d+=w}function M(E){const D=g,w=new Le,A=new U;let L=0;const y=E===!0?e:t,v=E===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,p*v,0),f.push(0,v,0),m.push(.5,.5),g++;const N=g;for(let G=0;G<=i;G++){const k=G/i*l+o,q=Math.cos(k),j=Math.sin(k);A.x=y*j,A.y=p*v,A.z=y*q,u.push(A.x,A.y,A.z),f.push(0,v,0),w.x=q*.5+.5,w.y=j*.5*v+.5,m.push(w.x,w.y),g++}for(let G=0;G<i;G++){const R=D+G,k=N+G;E===!0?h.push(k,k+1,R):h.push(k+1,k,R),L+=3}c.addGroup(d,L,E===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bs extends Ts{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new bs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ws extends Nt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new U,f=new U,m=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){const T=[],M=d/n;let E=0;d===0&&a===0?E=.5/t:d===n&&l===Math.PI&&(E=-.5/t);for(let D=0;D<=t;D++){const w=D/t;u.x=-e*Math.cos(i+w*s)*Math.sin(a+M*o),u.y=e*Math.cos(a+M*o),u.z=e*Math.sin(i+w*s)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(w+E,1-M),T.push(c++)}h.push(T)}for(let d=0;d<n;d++)for(let T=0;T<t;T++){const M=h[d][T+1],E=h[d][T],D=h[d+1][T],w=h[d+1][T+1];(d!==0||a>0)&&m.push(M,E,w),(d!==n-1||l<Math.PI)&&m.push(E,D,w)}this.setIndex(m),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(_,3)),this.setAttribute("uv",new Mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Up extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ro={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Dp{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const Np=new Dp;class As{constructor(e){this.manager=e!==void 0?e:Np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}As.DEFAULT_MATERIAL_NAME="__DEFAULT";class Fp extends As{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ro.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=wi("img");function l(){h(),ro.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class qo extends As{constructor(e){super(e)}load(e,t,n,i){const s=new vt,a=new Fp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class $o extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ts=new Ke,so=new U,ao=new U;class Op{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ms,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;so.setFromMatrixPosition(e.matrixWorld),t.position.copy(so),ao.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ao),t.updateMatrixWorld(),ts.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ts),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ts)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bp extends Op{constructor(){super(new Bo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zp extends $o{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new Bp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kp extends $o{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const oo=new Ke;class Hp{constructor(e,t,n=0,i=1/0){this.ray=new xs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return oo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(oo),this}intersectObject(e,t=!0,n=[]){return ms(e,this,n,t),n.sort(lo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ms(e[i],this,n,t);return n.sort(lo),n}}function lo(r,e){return r.distance-e.distance}function ms(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)ms(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gs);const co={pistol:new URL("/shelter-defence/assets/pistol-BLHxvt3O.mp3",import.meta.url).href,revolver:new URL("/shelter-defence/assets/pistol-BLHxvt3O.mp3",import.meta.url).href,ak47:new URL("/shelter-defence/assets/ak-47-BXViyyoo.mp3",import.meta.url).href,m4Carbine:new URL("/shelter-defence/assets/mp5k-Dz-42cSu.mp3",import.meta.url).href,mp5k:new URL("/shelter-defence/assets/mp5k-Dz-42cSu.mp3",import.meta.url).href,rifle:new URL("/shelter-defence/assets/rifle-jvQLiuUL.mp3",import.meta.url).href,mgl:new URL("/shelter-defence/assets/mgl-C5Sh_XbG.mp3",import.meta.url).href,machineGun:new URL("/shelter-defence/assets/machine%20gun-BZbxV3an.mp3",import.meta.url).href,shotgun:new URL("/shelter-defence/assets/mgl-C5Sh_XbG.mp3",import.meta.url).href,laserGun:new URL("/shelter-defence/assets/laser-gun-Cm7mP8BQ.mp3",import.meta.url).href,turret1:new URL("/shelter-defence/assets/mgl-C5Sh_XbG.mp3",import.meta.url).href,explosion:new URL("/shelter-defence/assets/explosion-BXcrQ-gW.mp3",import.meta.url).href,fallingBomb:new URL("/shelter-defence/assets/falling-bomb-Beoo-nfj.mp3",import.meta.url).href},Gp={reload:new URL("/shelter-defence/assets/Gun-Reload-BlkZzbMd.mp3",import.meta.url).href,gameStart:new URL("/shelter-defence/assets/GameStart-BwloAsvF.mp3",import.meta.url).href,gameOver:new URL("/shelter-defence/assets/GameOver-mU-4cWdG.mp3",import.meta.url).href,rank:new URL("/shelter-defence/assets/Rank-B-YpaTJd.mp3",import.meta.url).href},ns={pistol:.42,revolver:.44,ak47:.36,m4Carbine:.34,mp5k:.31,rifle:.42,mgl:.45,machineGun:.28,shotgun:.46,laserGun:.32,turret1:.27,explosion:.42,fallingBomb:.36};class Vp{constructor(){V(this,"sounds",new Map);V(this,"effects",new Map);V(this,"unlocked",!1);for(const e of Object.keys(co))this.preload(e,["machineGun","mp5k","turret1"].includes(e)?8:4);this.preloadEffect("reload",3,.34),this.preloadEffect("gameStart",1,.46),this.preloadEffect("gameOver",1,.5),this.preloadEffect("rank",1,.48)}unlock(){this.unlocked=!0}playWeaponShot(e){this.play(e,.94+Math.random()*.1)}stopWeaponShots(e,t=0){for(const n of new Set(e)){const i=this.sounds.get(n);if(i)for(const s of i){if(s.paused)continue;const a=t-s.currentTime*1e3;if(a>0){window.setTimeout(()=>this.stopAudio(s,n),a);continue}this.stopAudio(s,n)}}}playReload(){this.playEffect("reload",.98+Math.random()*.06)}playGameStart(){this.playEffect("gameStart")}playGameOver(){this.playEffect("gameOver")}playRank(){this.playEffect("rank")}stopGameStart(){this.stopEffect("gameStart")}preload(e,t){const n=[];for(let i=0;i<t;i+=1){const s=new Audio(co[e]);s.preload="auto",s.volume=ns[e],n.push(s)}this.sounds.set(e,n)}preloadEffect(e,t,n){const i=[];for(let s=0;s<t;s+=1){const a=new Audio(Gp[e]);a.preload="auto",a.volume=n,i.push(a)}this.effects.set(e,i)}play(e,t=1){if(!this.unlocked)return;const n=this.sounds.get(e);if(!n)return;const i=n.find(s=>s.paused)??n[0];i.pause(),i.currentTime=0,i.volume=ns[e],i.playbackRate=t,i.play().catch(()=>{})}stopAudio(e,t){e.paused||(e.pause(),e.currentTime=0,e.volume=ns[t])}playEffect(e,t=1){if(!this.unlocked)return;const n=this.effects.get(e);if(!n)return;const i=n.find(s=>s.paused)??n[0];i.pause(),i.currentTime=0,i.playbackRate=t,i.play().catch(()=>{})}stopEffect(e){const t=this.effects.get(e);if(t)for(const n of t)n.paused||(n.pause(),n.currentTime=0)}}const ln={stage1Background:new URL("/shelter-defence/assets/bg1-tyUkadXQ.jpg",import.meta.url).href,stageBackgrounds:[new URL("/shelter-defence/assets/bg1-tyUkadXQ.jpg",import.meta.url).href,new URL("/shelter-defence/assets/bg2-CwjlJuz1.jpg",import.meta.url).href,new URL("/shelter-defence/assets/bg3-CFj4MTrc.jpg",import.meta.url).href,new URL("/shelter-defence/assets/bg4-pbMB7ywT.jpg",import.meta.url).href,new URL("/shelter-defence/assets/bg5-C1cdDeZT.jpg",import.meta.url).href,new URL("/shelter-defence/assets/bg6-B5ydiASL.jpg",import.meta.url).href],stageRoadMasks:[new URL("/shelter-defence/assets/bg1-road-C7gsG3Rg.png",import.meta.url).href,new URL("/shelter-defence/assets/bg1-road-C7gsG3Rg.png",import.meta.url).href,new URL("/shelter-defence/assets/bg3-road-CqgG4FP8.png",import.meta.url).href,new URL("/shelter-defence/assets/bg4-road-DN2gfX72.png",import.meta.url).href,new URL("/shelter-defence/assets/bg5-road-3oFB_wcl.png",import.meta.url).href,new URL("/shelter-defence/assets/bg6-road-DJTakL2w.png",import.meta.url).href],nextStage:new URL("/shelter-defence/assets/NextStage-CV2TjPgM.png",import.meta.url).href,gameOver:new URL("/shelter-defence/assets/GameOver-CEaHHhE7.png",import.meta.url).href,topRanks:new URL("/shelter-defence/assets/TopRanks-CVw1xdZD.png",import.meta.url).href,barricadeBlock:new URL("/shelter-defence/assets/barricade-block-BOB9cRn9.png",import.meta.url).href,weaponSheet:new URL("/shelter-defence/assets/Weapon_item_sheet-C0qNzL_t.jpeg",import.meta.url).href,firearmIcons:new URL("/shelter-defence/assets/Stylized_firearm_icons_game-BFNBsPoh.jpeg",import.meta.url).href,heartFilled:new URL("/shelter-defence/assets/heart-filled-Dg4y9nFP.png",import.meta.url).href},Ot={background:new URL("/shelter-defence/assets/prep-background-BapZg3N_.jpeg",import.meta.url).href,gold:new URL("/shelter-defence/assets/gold-DTGwxhXh.png",import.meta.url).href,rubi:new URL("/shelter-defence/assets/rubi-BedUucJv.png",import.meta.url).href,leftArrow:new URL("/shelter-defence/assets/left-arrow-CjQ0J0uq.png",import.meta.url).href,rightArrow:new URL("/shelter-defence/assets/right-arrow-BZzLCZI7.png",import.meta.url).href,startIcon:new URL("/shelter-defence/assets/start-game2-BVTxQqQi.png",import.meta.url).href,startButton:new URL("/shelter-defence/assets/start-BKwtXf2D.png",import.meta.url).href,reset:new URL("/shelter-defence/assets/reset-B44hyJQE.png",import.meta.url).href},ut={airAttack:new URL("/shelter-defence/assets/air-attack-C5ij9lax.png",import.meta.url).href,barricade:new URL("/shelter-defence/assets/barricade-DYNwWXDM.png",import.meta.url).href,barricadeBlock:new URL("/shelter-defence/assets/barricade-block-BOB9cRn9.png",import.meta.url).href,bullet:new URL("/shelter-defence/assets/bullet-Cu0Zzghy.png",import.meta.url).href,menu:new URL("/shelter-defence/assets/menu1-DDiwoNNZ.png",import.meta.url).href,settings:new URL("/shelter-defence/assets/menu2-Cd_cO8WH.png",import.meta.url).href,pause:new URL("/shelter-defence/assets/menu3-ChNaX9jM.png",import.meta.url).href,grenade:new URL("/shelter-defence/assets/grenade-eBFw4g-p.png",import.meta.url).href,magazine:new URL("/shelter-defence/assets/magazine-B4z13Ucf.png",import.meta.url).href,player:new URL("/shelter-defence/assets/player-CNOEmzAc.png",import.meta.url).href,potionDex:new URL("/shelter-defence/assets/potion-dex-CsxIRE7G.png",import.meta.url).href,potionHealth:new URL("/shelter-defence/assets/potion-health-B5UmcRml.png",import.meta.url).href,potionInt:new URL("/shelter-defence/assets/potion-int-C73qrjOY.png",import.meta.url).href,repairKit:new URL("/shelter-defence/assets/repair-kit-BG_2T_wF.png",import.meta.url).href,turret:new URL("/shelter-defence/assets/turret-Cb3cy8mN.png",import.meta.url).href,turret1On:new URL("/shelter-defence/assets/turret1-on-B5VrtUwJ.png",import.meta.url).href,turret1Off:new URL("/shelter-defence/assets/turret1-off-Da-LS3vz.png",import.meta.url).href,waves:new URL("/shelter-defence/assets/waves-Bk_nbtf5.png",import.meta.url).href},Kn={fieldKit:new URL("/shelter-defence/assets/medic-X3KXxB13.png",import.meta.url).href,reinforcedNest:new URL("/shelter-defence/assets/repair-kit-IN6-oTlz.png",import.meta.url).href,extendedMag:new URL("/shelter-defence/assets/magazine1-B5J1NTOo.png",import.meta.url).href,fastHands:new URL("/shelter-defence/assets/fast-IgB0X2lr.png",import.meta.url).href,lightTrigger:new URL("/shelter-defence/assets/bullets-BVtqQSWR.png",import.meta.url).href,hotRounds:new URL("/shelter-defence/assets/explosion-M4CLutg9.png",import.meta.url).href},ir={background:new URL("/shelter-defence/assets/intro-background-Nibc6fO_.jpeg",import.meta.url).href,logo:new URL("/shelter-defence/assets/shelter-defence-logo-DJwvL7PJ.png",import.meta.url).href,buttons:new URL("/shelter-defence/assets/intro-buttons1-BwgGNnm-.png",import.meta.url).href},Zn={anais:new URL("/shelter-defence/assets/anais-CFW4ShY6.png",import.meta.url).href,henry:new URL("/shelter-defence/assets/henry-tsfKITfY.png",import.meta.url).href,kim:new URL("/shelter-defence/assets/kim-BXBd0Pyx.png",import.meta.url).href,kino:new URL("/shelter-defence/assets/kino-BtNxz1l9.png",import.meta.url).href,tomas:new URL("/shelter-defence/assets/tomas-Bcj8ArU4.png",import.meta.url).href,turret1:new URL("/shelter-defence/assets/turret1-DdNxJdJ7.png",import.meta.url).href},is={"ai-aw-sniper":new URL("/shelter-defence/assets/rifle-CP4gIyq7.png",import.meta.url).href,"bren-lmg":new URL("/shelter-defence/assets/machine%20gun-BsFzZe11.png",import.meta.url).href,"colt-m1911":new URL("/shelter-defence/assets/pisto-D7Yoy6NL.png",import.meta.url).href,"colt-saa":new URL("/shelter-defence/assets/revolver-_wDoYu7M.png",import.meta.url).href,"m4-carbine":new URL("/shelter-defence/assets/carbine-DIL61Lt4.png",import.meta.url).href,"milkor-mgl":new URL("/shelter-defence/assets/mgl-BbjK423E.png",import.meta.url).href,mp5k:new URL("/shelter-defence/assets/mp5k-Bk_8-ARy.png",import.meta.url).href,shotgun:new URL("/shelter-defence/assets/shotgun-Fm0OY8lR.png",import.meta.url).href},Jn={jacket:new URL("/shelter-defence/assets/jacket-7JVoC5TF.png",import.meta.url).href,magazine:new URL("/shelter-defence/assets/magazine-ClAEBqcP.png",import.meta.url).href,potionDex:new URL("/shelter-defence/assets/potion-dex-CsxIRE7G.png",import.meta.url).href,potionHealth:new URL("/shelter-defence/assets/potion-health-B5UmcRml.png",import.meta.url).href,potionInt:new URL("/shelter-defence/assets/potion-int-C73qrjOY.png",import.meta.url).href,repairKit:new URL("/shelter-defence/assets/repair-kit-IN6-oTlz.png",import.meta.url).href},sn={aiAwSniper:new URL("/shelter-defence/assets/AI%20AW%20sniper%20rifle-XyM06f9v.png",import.meta.url).href,brenLightMachineGun:new URL("/shelter-defence/assets/Bren%20Light%20Machine%20Gun-ylWvDpKS.png",import.meta.url).href,coltM1911:new URL("/shelter-defence/assets/Colt%20M1911%20Pistol-C-Ms9iBp.png",import.meta.url).href,coltSaa:new URL("/shelter-defence/assets/Colt%20Single%20Action%20Army%20(SAA)%20Revolver-BS_-b4xl.png",import.meta.url).href,mp5k:new URL("/shelter-defence/assets/Heckler%20Koch%20MP5K-C9GPFO55.png",import.meta.url).href,m4Carbine:new URL("/shelter-defence/assets/M4%20Carbine-DBIj9iFe.png",import.meta.url).href,milkorMgl:new URL("/shelter-defence/assets/Milkor%20MGL-BEAgVJdg.png",import.meta.url).href,shotgun:new URL("/shelter-defence/assets/Short%E2%80%91Barreled%20Pump%E2%80%91Action%20Shotgun-Qp4sbKXx.png",import.meta.url).href},Wp={playerPanel:new URL("/shelter-defence/assets/player-panel-BXxLzQfG.png",import.meta.url).href,barricadePanel:new URL("/shelter-defence/assets/barricade-DYNwWXDM.png",import.meta.url).href,helperHealthPanel:new URL("/shelter-defence/assets/helper-health-panel-CMEBLYwj.png",import.meta.url).href,wavePanel:new URL("/shelter-defence/assets/wave-panel-BAPdv99G.png",import.meta.url).href,counterPanel:new URL("/shelter-defence/assets/counter-panel-BjHTYvrJ.png",import.meta.url).href,togglePanel:new URL("/shelter-defence/assets/toggle-panel-C1smYmv-.png",import.meta.url).href,squareButton:new URL("/shelter-defence/assets/square-button--v2nSrBi.png",import.meta.url).href,weaponPanel:new URL("/shelter-defence/assets/weapon-panel-C2XruoNJ.png",import.meta.url).href,specialButton:new URL("/shelter-defence/assets/player-CNOEmzAc.png",import.meta.url).href,helperCommandPanel:new URL("/shelter-defence/assets/helper-command-panel-D_GrjEel.png",import.meta.url).href,crosshair:new URL("/shelter-defence/assets/crosshair-BB-4WzMs.png",import.meta.url).href},rr={id:"walker",name:"Walker",maxHealth:100,speed:2.6,damage:10,attackRange:1.55,attackCooldown:.85,score:10,radius:.7};class Xp{constructor(e){V(this,"enemies",new Map);V(this,"bodyToEnemy",new Map);V(this,"nextId",1);V(this,"killed",0);V(this,"bodyGeometry",new In(.82,1.15,.46));V(this,"limbGeometry",new In(.25,.88,.25));V(this,"headGeometry",new ws(.33,12,8));this.scene=e}spawn(e,t){const n=t.healthMultiplier??1,i=t.damageMultiplier??1,s=t.sizeMultiplier??1,a={...rr,maxHealth:t.baseHealth*n,speed:rr.speed+Math.min(t.wave*.04,.5),damage:rr.damage*i,radius:rr.radius*s},o=this.nextId;this.nextId+=1;const l=new ti,c=this.createMaterial("#526b47"),h=this.createMaterial("#95b66e"),u=this.createMaterial("#40533c"),f=this.createPart(this.bodyGeometry,c,0,1.12,0),m=this.createPart(this.headGeometry,h,0,1.88,.02),g=this.createPart(this.limbGeometry,u,-.62,1.16,.06),_=this.createPart(this.limbGeometry,u,.62,1.16,.06),p=this.createPart(this.limbGeometry,u.clone(),-.24,.42,0),d=this.createPart(this.limbGeometry,u.clone(),.24,.42,0);g.rotation.z=.18,_.rotation.z=-.18,l.add(f,m,g,_,p,d),l.position.copy(e),l.scale.setScalar(s),this.scene.add(l);const T=[f,m,g,_,p,d];for(const M of T)M.name=`enemy-hit-${o}`,this.bodyToEnemy.set(M.uuid,o);this.enemies.set(o,{id:o,definition:a,mesh:l,hitMeshes:T,parts:{body:f,head:m,leftArm:g,rightArm:_,leftLeg:p,rightLeg:d},health:a.maxHealth,baseScale:s,attackTimer:Math.random()*.4,age:Math.random()*10,hitTimer:0,deathTimer:0,state:"chasing"})}update(e,t,n){const i=t.position.clone();i.y=0;const s=!!(n&&n.health>0);for(const a of this.enemies.values()){if(a.age+=e,a.state==="dead"){this.updateDeath(e,a);continue}a.hitTimer>0?(a.hitTimer-=e,this.applyHitFlash(a,!0)):this.applyHitFlash(a,!1);const o=a.mesh.position.clone();o.y=0;const l=s&&n?new U(xt.clamp(o.x,-n.halfWidth,n.halfWidth),0,n.z):i,c=l.clone().sub(o);if(c.length()>a.definition.attackRange){a.state=a.hitTimer>0?"hit":"chasing",c.normalize();const u=a.hitTimer>0?a.definition.speed*.25:a.definition.speed;a.mesh.position.add(c.multiplyScalar(u*e)),s&&n&&(a.mesh.position.z=Math.min(a.mesh.position.z,n.z-.25)),a.mesh.position.x=xt.clamp(a.mesh.position.x,-10,10),a.mesh.lookAt(l.x,a.mesh.position.y,l.z),this.animateWalk(a)}else a.state="attacking",a.attackTimer-=e,this.animateAttack(a),a.attackTimer<=0&&(s&&n?n.damage(a.definition.damage):t.damage(a.definition.damage),a.attackTimer=a.definition.attackCooldown)}}raycast(e){const t=[...this.enemies.values()].filter(a=>a.state!=="dead").flatMap(a=>a.hitMeshes),i=e.intersectObjects(t,!1)[0];if(!i)return null;const s=this.bodyToEnemy.get(i.object.uuid);return s?{enemyId:s,point:i.point.clone()}:null}damage(e,t,n=!0){const i=this.enemies.get(e);if(!i||i.state==="dead")return"none";i.health-=t,i.hitTimer=.12,n&&(i.mesh.position.z-=.16);const s=i.baseScale*(.88+.12*Math.max(0,i.health/i.definition.maxHealth));return i.mesh.scale.setScalar(s),i.health<=0?(i.state="dead",i.deathTimer=1.65,i.mesh.rotation.z=xt.randFloatSpread(.35),this.killed+=1,"killed"):"hit"}damageAll(e,t=Number.POSITIVE_INFINITY){let n=0;for(const i of this.enemies.values())if(i.state!=="dead"&&(this.damage(i.id,e,!1),n+=1,n>=t))break;return n}hasEnemyInRange(e){for(const t of this.enemies.values())if(t.state!=="dead"&&t.mesh.position.z>=e)return!0;return!1}damageInRange(e,t,n=Number.POSITIVE_INFINITY){let i=0;for(const s of this.enemies.values())if(s.state!=="dead"&&!(s.mesh.position.z<t)&&(this.damage(s.id,e,!1),i+=1,i>=n))break;return i}damageFirstInRange(e,t){for(const n of this.enemies.values()){if(n.state==="dead"||n.mesh.position.z<t)continue;const i=n.mesh.position.clone();i.y+=n.baseScale*2.35;const s=this.damage(n.id,e,!1);return s==="none"?null:{enemyId:n.id,point:i,result:s}}return null}clear(){for(const e of this.enemies.values()){this.scene.remove(e.mesh);for(const t of e.hitMeshes)this.bodyToEnemy.delete(t.uuid)}this.enemies.clear(),this.killed=0}getSnapshot(){return{remaining:this.getCount(),killed:this.killed}}getHealthBars(e){const t=[];for(const n of this.enemies.values()){if(n.state==="dead")continue;const i=this.getOverheadScreenPosition(n.id,e);i&&t.push({id:n.id,x:i.x,y:i.y,healthPercent:Math.min(100,Math.max(0,n.health/n.definition.maxHealth*100))})}return t}getOverheadScreenPosition(e,t){const n=this.enemies.get(e);if(!n)return null;const i=n.mesh.position.clone();i.y+=n.baseScale*2.85;const s=i.project(t);if(s.z<-1||s.z>1)return null;const a=(s.x*.5+.5)*100,o=(-s.y*.5+.5)*100;return a<-4||a>104||o<-4||o>104?null:{x:a,y:o}}getCount(){return[...this.enemies.values()].filter(e=>e.state!=="dead").length}remove(e){const t=this.enemies.get(e);if(t){this.scene.remove(t.mesh);for(const n of t.hitMeshes)this.bodyToEnemy.delete(n.uuid);this.enemies.delete(e)}}createMaterial(e){return new Up({color:e,roughness:.74,metalness:.02,transparent:!0})}createPart(e,t,n,i,s){const a=new _t(e,t);return a.position.set(n,i,s),a}animateWalk(e){const t=Math.sin(e.age*8.5)*.55,n=Math.abs(Math.sin(e.age*8.5))*.08;e.parts.body.position.y=1.12+n,e.parts.head.position.y=1.88+n,e.parts.leftArm.rotation.x=t,e.parts.rightArm.rotation.x=-t,e.parts.leftLeg.rotation.x=-t*.7,e.parts.rightLeg.rotation.x=t*.7}animateAttack(e){const t=Math.sin(e.age*14)*.22;e.parts.body.position.z=-.08,e.parts.head.position.z=-.08,e.parts.leftArm.rotation.x=-1.15+t,e.parts.rightArm.rotation.x=-1.15-t}updateDeath(e,t){t.deathTimer-=e;const n=1-Math.max(0,t.deathTimer/1.65);t.mesh.rotation.x=xt.lerp(t.mesh.rotation.x,-1.35,.12),t.mesh.position.y=xt.lerp(t.mesh.position.y,-.42,.08);for(const i of t.hitMeshes){const s=i.material;s.opacity=Math.max(0,1-n*1.25),s.emissive.set("#000000")}t.deathTimer<=0&&this.remove(t.id)}applyHitFlash(e,t){for(const n of e.hitMeshes)n.material.emissive.set(t?"#7a1313":"#000000")}}class qp{constructor(e){V(this,"keys",new Set);V(this,"requestedActions",new Set);V(this,"shootHeld",!1);V(this,"shootRequested",!1);V(this,"shootReleased",!1);V(this,"reloadRequested",!1);V(this,"handleKeyDown",e=>{["F1","F2","F3","F4","F5","Space"].includes(e.code)&&e.preventDefault(),this.keys.add(e.code),e.code==="KeyR"&&(this.reloadRequested=!0),e.repeat||this.requestedActions.add(e.code)});V(this,"handleKeyUp",e=>{this.keys.delete(e.code)});V(this,"handleMouseDown",e=>{e.button===0&&document.pointerLockElement===this.target&&(this.shootHeld=!0,this.shootRequested=!0)});V(this,"handleMouseUp",e=>{e.button===0&&(this.shootReleased=this.shootHeld||this.shootReleased,this.shootHeld=!1)});V(this,"handlePointerLockChange",()=>{document.pointerLockElement!==this.target&&(this.shootReleased=this.shootHeld||this.shootReleased,this.shootHeld=!1)});this.target=e,window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),document.addEventListener("pointerlockchange",this.handlePointerLockChange),e.addEventListener("mousedown",this.handleMouseDown),window.addEventListener("mouseup",this.handleMouseUp)}dispose(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),document.removeEventListener("pointerlockchange",this.handlePointerLockChange),this.target.removeEventListener("mousedown",this.handleMouseDown),window.removeEventListener("mouseup",this.handleMouseUp)}isDown(e){return this.keys.has(e)}isShooting(){return this.shootHeld}consumeShootRelease(){const e=this.shootReleased;return this.shootReleased=!1,e}consumeShootRequest(){const e=this.shootRequested;return this.shootRequested=!1,e}consumeReload(){const e=this.reloadRequested;return this.reloadRequested=!1,e}consumeAction(e){const t=this.requestedActions.has(e);return this.requestedActions.delete(e),t}}class $p{constructor(){V(this,"camera");V(this,"position",new U(0,1.7,6));V(this,"maxHealth",100);V(this,"health",100);V(this,"incomingDamageMultiplier",1);V(this,"yaw",0);V(this,"pitch",0);V(this,"euler",new Dt(0,0,0,"YXZ"));this.camera=new Rt(70,window.innerWidth/window.innerHeight,.1,120),this.camera.position.copy(this.position)}update(){this.camera.position.copy(this.position)}look(e,t){this.yaw-=e*.0022,this.pitch-=t*.0022,this.yaw=xt.clamp(this.yaw,-1.15,1.15),this.pitch=xt.clamp(this.pitch,-1.25,1.2),this.euler.set(this.pitch,this.yaw,0),this.camera.quaternion.setFromEuler(this.euler)}resetView(e=0){this.yaw=0,this.pitch=xt.clamp(e,-1.25,1.2),this.euler.set(this.pitch,this.yaw,0),this.camera.quaternion.setFromEuler(this.euler)}damage(e){this.health=Math.max(0,this.health-e*this.incomingDamageMultiplier)}heal(e){this.health=Math.min(this.maxHealth,this.health+e)}getCamera(){return this.camera}}const si=2,rs=10,ho="anais";class Yp{constructor(){V(this,"selectedSoldierIndex",0);V(this,"selectedWeaponIndex",3);V(this,"gold",1e5);V(this,"rubi",200);V(this,"itemGoldSpent",0);V(this,"message","Prepare your squad before the next wave.");V(this,"turretSlots",Array(si).fill(null));V(this,"soldiers",[{id:"anais",name:"Anais",role:"Field Medic",image:Zn.anais,hired:!0,hireCost:0,stats:{str:30,dex:80,int:115},equippedWeaponId:"colt-m1911"},{id:"henry",name:"Henry",role:"Barricade Engineer",image:Zn.henry,hired:!1,hireCost:850,stats:{str:40,dex:60,int:90},equippedWeaponId:"bren-lmg"},{id:"kim",name:"Kim",role:"Forward Scout",image:Zn.kim,hired:!1,hireCost:760,stats:{str:30,dex:120,int:75},equippedWeaponId:"mp5k"},{id:"kino",name:"Kino",role:"Signal Technician",image:Zn.kino,hired:!1,hireCost:900,stats:{str:35,dex:85,int:125},equippedWeaponId:"m4-carbine"},{id:"tomas",name:"Tomas",role:"Veteran Guard",image:Zn.tomas,hired:!1,hireCost:1e3,stats:{str:40,dex:70,int:70},equippedWeaponId:"shotgun"}]);V(this,"weapons",[{id:"bren-lmg",name:"Bren Light Machine Gun",image:sn.brenLightMachineGun,summary:"Reliable heavy support weapon with sustained fire.",magazineSize:30,trait:"High stability, heavy weight",statScale:{str:1.3,dex:1.25,int:.85},damage:55,fireRate:10,criticalChance:.05,reloadTime:2.4,range:58,spread:.018,soundId:"machineGun"},{id:"milkor-mgl",name:"Milkor MGL",image:sn.milkorMgl,summary:"Revolver-style grenade launcher for crowd control.",magazineSize:6,trait:"Explosive area damage",statScale:{str:1.45,dex:.55,int:1.05},damage:100,fireRate:5,criticalChance:.05,reloadTime:3.1,range:44,spread:.026,soundId:"mgl"},{id:"ai-aw-sniper",name:"AI AW Sniper Rifle",image:sn.aiAwSniper,summary:"Precision bolt-action rifle for long-range threats.",magazineSize:5,trait:"Extreme range, slow fire",statScale:{str:.9,dex:.75,int:1.5},damage:115,fireRate:5,criticalChance:.25,reloadTime:2.5,range:82,spread:.004,soundId:"rifle"},{id:"colt-m1911",name:"Colt M1911 Pistol",image:sn.coltM1911,summary:"Compact sidearm with reliable stopping power.",magazineSize:7,trait:"Fast handling",statScale:{str:.85,dex:.85,int:1},damage:25,fireRate:5,criticalChance:.1,reloadTime:1.15,range:45,spread:.014,soundId:"pistol"},{id:"colt-saa",name:"Colt SAA Revolver",image:sn.coltSaa,summary:"Classic six-shot revolver with deliberate fire.",magazineSize:6,trait:"High impact sidearm",statScale:{str:.95,dex:.75,int:1.05},damage:30,fireRate:5,criticalChance:.1,reloadTime:1.45,range:48,spread:.012,soundId:"revolver"},{id:"mp5k",name:"Heckler Koch MP5K",image:sn.mp5k,summary:"Compact SMG for fast close-range defense.",magazineSize:30,trait:"Very high fire rate",statScale:{str:1.1,dex:1.4,int:.8},damage:35,fireRate:20,criticalChance:.05,reloadTime:1.7,range:40,spread:.023,soundId:"mp5k"},{id:"shotgun",name:"Pump-Action Shotgun",image:sn.shotgun,summary:"Short-barreled shotgun for near barricade threats.",magazineSize:8,trait:"Close-range spread",statScale:{str:1.4,dex:.6,int:.65},damage:90,fireRate:5,criticalChance:.1,reloadTime:2.2,range:30,spread:.052,soundId:"shotgun"},{id:"m4-carbine",name:"M4 Carbine",image:sn.m4Carbine,summary:"Lightweight all-round rifle for flexible defense.",magazineSize:30,trait:"Balanced range and fire rate",statScale:{str:1.15,dex:1.2,int:1},damage:45,fireRate:15,criticalChance:.1,reloadTime:1.8,range:60,spread:.015,soundId:"m4Carbine"}]);V(this,"turrets",[{id:"turret-gun",name:"TURRET (GUN)",image:Zn.turret1,kind:"gun",hireCost:5e4,hiredCount:0,stats:{str:50,dex:150,int:100},damage:40,fireRate:2,criticalChance:.1,maxShield:200}]);V(this,"items",[{id:"jacket",name:"Defense Vest",image:Jn.jacket,count:0,maxCount:1,priceGold:450,detail:"Reduces damage."},{id:"potion-health",name:"Health Potion",image:Jn.potionHealth,count:0,maxCount:999,priceGold:100,detail:"Restores health."},{id:"potion-dex",name:"Agility Potion",image:Jn.potionDex,count:0,maxCount:999,priceGold:100,detail:"Boosts dexterity."},{id:"potion-int",name:"Intelligence Potion",image:Jn.potionInt,count:0,maxCount:999,priceGold:100,detail:"Raises critical hit chance."},{id:"repair-kit",name:"Repair Kit",image:Jn.repairKit,count:0,maxCount:999,priceGold:250,detail:"Repairs barricade."},{id:"magazine",name:"Magazine",image:Jn.magazine,count:rs,maxCount:999,priceGold:100,detail:"Adds ammo reserve."}])}snapshot(){const e=this.hiredCount();return{soldiers:this.soldiers.map(t=>({...t,stats:{...t.stats}})),weapons:this.weapons.map(t=>({...t})),turrets:this.turrets.map(t=>({...t,stats:{...t.stats},hiredCount:this.turretSlots.filter(n=>n===t.id).length})),turretSlots:this.turretSlots.map(t=>this.getTurretById(t)),items:this.items.map(t=>({...t,maxCount:t.id==="jacket"?e:t.maxCount})),selectedSoldierIndex:this.selectedSoldierIndex,selectedWeaponIndex:this.selectedWeaponIndex,gold:this.gold,rubi:this.rubi,message:this.message}}selectSoldier(e){if(this.selectedSoldierIndex=this.wrap(this.selectedSoldierIndex+e,this.rosterLength()),this.isSoldierSelected()){this.syncSelectedWeaponToSoldier(),this.message=`${this.currentSoldier().name} selected.`;return}this.message=`${this.currentTurret().name} selected.`}selectWeapon(e){if(!this.isSoldierSelected()){this.message=`${this.currentTurret().name} has a fixed weapon.`;return}this.selectedWeaponIndex=this.wrap(this.selectedWeaponIndex+e,this.weapons.length),this.message=`${this.currentWeapon().name} selected. Click the weapon to equip.`}equipSelectedWeapon(){if(!this.isSoldierSelected()){this.message=`${this.currentTurret().name} has a fixed weapon.`;return}const e=this.currentSoldier(),t=this.currentWeapon();e.equippedWeaponId=t.id,this.message=`${e.name} equipped ${t.name}.`}hireSelectedSoldier(){if(!this.isSoldierSelected()){this.message="Select a soldier to hire or fire.";return}const e=this.currentSoldier();if(e.id===ho){e.hired=!0,this.message=`${e.name} is required for every run.`;return}if(e.hired){const n=Math.floor(e.hireCost/2);e.hired=!1,this.gold+=n;const i=this.items.find(s=>s.id==="jacket");i&&i.count>this.hiredCount()&&(i.count=this.hiredCount()),this.message=`${e.name} fired. ${n} gold refunded.`;return}if(this.gold<e.hireCost){this.message=`Need ${e.hireCost-this.gold} more gold to hire ${e.name}.`;return}this.gold-=e.hireCost,e.hired=!0;const t=this.items.find(n=>n.id==="jacket");t&&t.count>this.hiredCount()&&(t.count=this.hiredCount()),this.message=`${e.name} joined the squad.`}fireSelectedTurret(){if(this.isSoldierSelected())return;const e=this.currentTurret(),t=this.turretSlots.findIndex(i=>i===e.id);if(t<0){this.message=`${e.name} is not installed.`;return}this.turretSlots[t]=null;const n=Math.floor(e.hireCost/2);this.gold+=n,this.message=`${e.name} fired. ${n} gold refunded.`}hireSelectedTurret(){if(this.isSoldierSelected()){this.message="Select a turret to install.";return}const e=this.currentTurret();if(this.turretSlots.filter(Boolean).length>=this.turretSlots.length){this.message="Turret slots are full.";return}const n=this.turretSlots.findIndex(i=>i===null);if(n<0){this.message="Turret slots are full.";return}if(this.gold<e.hireCost){this.message=`Need ${e.hireCost-this.gold} more gold to hire ${e.name}.`;return}this.gold-=e.hireCost,this.turretSlots[n]=e.id,this.message=`${e.name} installed in turret slot ${n+1}.`}buyItem(e){const t=this.items.find(i=>i.id===e);if(!t)return;const n=this.maxItemCount(t);if(t.count>=n){this.message=`${t.name} is already at max stock.`;return}if(this.gold<t.priceGold){this.message=`Need ${t.priceGold-this.gold} more gold for ${t.name}.`;return}this.gold-=t.priceGold,this.itemGoldSpent+=t.priceGold,t.count=Math.min(n,t.count+1),this.message=`${t.name} purchased.`}resetItems(){for(const e of this.items)e.count=e.id==="magazine"?rs:0;this.gold+=this.itemGoldSpent,this.itemGoldSpent=0,this.message="Items reset."}reset(){this.selectedSoldierIndex=0,this.selectedWeaponIndex=3,this.gold=1e5,this.rubi=200,this.itemGoldSpent=0,this.message="Prepare your squad before the next wave.",this.turretSlots.fill(null);for(const e of this.soldiers)e.hired=e.id===ho;this.soldiers[0].equippedWeaponId="colt-m1911",this.soldiers[1].equippedWeaponId="bren-lmg",this.soldiers[2].equippedWeaponId="mp5k",this.soldiers[3].equippedWeaponId="m4-carbine",this.soldiers[4].equippedWeaponId="shotgun";for(const e of this.items)e.count=e.id==="magazine"?rs:0}useItem(e){const t=this.items.find(n=>n.id===e);return!t||t.count<=0?!1:(t.count-=1,this.message=`${t.name} used.`,!0)}addGold(e){this.gold+=Math.max(0,Math.floor(e))}addRubi(e){this.rubi+=Math.max(0,Math.floor(e))}addItemCount(e,t){const n=this.items.find(i=>i.id===e);n&&(n.count=Math.min(n.maxCount,n.count+Math.max(0,Math.floor(t))))}currentSoldier(){return this.soldiers[this.selectedSoldierIndex]}currentTurret(){return this.turrets[this.selectedSoldierIndex-this.soldiers.length]}currentWeapon(){return this.weapons[this.selectedWeaponIndex]}syncSelectedWeaponToSoldier(){if(!this.isSoldierSelected())return;const e=this.currentSoldier().equippedWeaponId,t=this.weapons.findIndex(n=>n.id===e);this.selectedWeaponIndex=t>=0?t:0}maxItemCount(e){return e.id==="jacket"?this.hiredCount():e.maxCount}hiredCount(){return this.soldiers.filter(e=>e.hired).length}getTurretById(e){if(!e)return null;const t=this.turrets.find(n=>n.id===e);return t?{...t,stats:{...t.stats},hiredCount:this.turretSlots.filter(n=>n===t.id).length}:null}isSoldierSelected(){return this.selectedSoldierIndex<this.soldiers.length}rosterLength(){return this.soldiers.length+this.turrets.length}wrap(e,t){return(e+t)%t}}const Ai={topFraction:.61,bottomFraction:1,centerFraction:.5,widthFraction:.62,laneHalfWidth:9};class jp{constructor(e){V(this,"cache",new Map);this.maskUrls=e}load(e,t=!1){const n=(Math.max(1,e)-1)%this.maskUrls.length,i=n+1,s=this.cache.get(i);if(s&&!t)return s;const a=this.analyze(this.getMaskUrl(n,t)).catch(()=>Ai);return this.cache.set(i,a),a}getMaskUrl(e,t){const n=this.maskUrls[e];if(!t)return n;const i=n.includes("?")?"&":"?";return`${n}${i}roadMaskReload=${Date.now()}`}analyze(e){return new Promise((t,n)=>{const i=new Image;i.onload=()=>{const s=document.createElement("canvas");s.width=i.naturalWidth||i.width,s.height=i.naturalHeight||i.height;const a=s.getContext("2d",{willReadFrequently:!0});if(!a||s.width<=0||s.height<=0){n(new Error("Road mask could not be read."));return}a.drawImage(i,0,0);const o=a.getImageData(0,0,s.width,s.height).data;t(this.profileFromPixels(o,s.width,s.height))},i.onerror=()=>n(new Error(`Road mask failed to load: ${e}`)),i.src=e})}profileFromPixels(e,t,n){let i=t,s=-1,a=n,o=-1,l=0,c=0,h=0;for(let f=0;f<n;f+=1){let m=t,g=-1;for(let _=0;_<t;_+=1){const p=(f*t+_)*4,d=e[p],T=e[p+1],M=e[p+2];d+T+M>96||(i=Math.min(i,_),s=Math.max(s,_),a=Math.min(a,f),o=Math.max(o,f),m=Math.min(m,_),g=Math.max(g,_))}g>=m&&(l+=(m+g)/2/t,c+=(g-m+1)/t,h+=1)}if(s<i||o<a||h<=0)return Ai;const u=c/h;return{topFraction:a/n,bottomFraction:o/n,centerFraction:l/h,widthFraction:u,laneHalfWidth:Math.min(10,Math.max(4,u*18))}}}class Kp{constructor(e,t){this.player=e,this.weapon=t}getChoices(){return[{id:"damage",title:"Hot Rounds",detail:"+18% weapon damage",icon:Kn.hotRounds,apply:()=>{this.weapon.damageMultiplier+=.18}},{id:"fireRate",title:"Light Trigger",detail:"+15% fire rate",icon:Kn.lightTrigger,apply:()=>{this.weapon.fireRateMultiplier+=.15}},{id:"magazine",title:"Extended Mag",detail:"+4 magazine size",icon:Kn.extendedMag,apply:()=>{this.weapon.increaseMagazine(4)}},{id:"defense",title:"Reinforced Nest",detail:"-10% incoming damage",icon:Kn.reinforcedNest,apply:()=>{this.player.incomingDamageMultiplier*=.9}},{id:"maxHealth",title:"Field Kit",detail:"+18 max health and heal",icon:Kn.fieldKit,apply:()=>{this.player.maxHealth+=18,this.player.heal(30)}},{id:"reloadSpeed",title:"Fast Hands",detail:"-14% reload time",icon:Kn.fastHands,apply:()=>{this.weapon.reloadMultiplier*=.86}}].sort(()=>Math.random()-.5).slice(0,3)}resetStageUpgrades(){this.player.incomingDamageMultiplier=1,this.weapon.resetStageModifiers()}}const uo={id:"sidearm",name:"Sidearm",damage:24,fireRate:5,magazineSize:12,reloadTime:1.15,range:45,spread:.012,criticalChance:.05,soundId:"pistol"};class Zp{constructor(e){V(this,"definition",{...uo});V(this,"ammo",this.definition.magazineSize);V(this,"damageMultiplier",1);V(this,"fireRateMultiplier",1);V(this,"reloadMultiplier",1);V(this,"infiniteAmmo",!1);V(this,"powerShot",!1);V(this,"noReload",!1);V(this,"cooldown",0);V(this,"reloadTimer",0);V(this,"raycaster",new Hp);V(this,"center",new Le(0,0));V(this,"trails",[]);this.scene=e}update(e){this.cooldown=Math.max(0,this.cooldown-e),this.reloadTimer>0&&(this.reloadTimer-=e,this.reloadTimer<=0&&(this.ammo=this.definition.magazineSize));for(let t=this.trails.length-1;t>=0;t-=1){const n=this.trails[t];n.ttl-=e;const i=n.line.material;i.opacity=Math.max(0,n.ttl/.08),n.ttl<=0&&(this.scene.remove(n.line),n.line.geometry.dispose(),i.dispose(),this.trails.splice(t,1))}}tryReload(){return this.reloadTimer>0||this.ammo===this.definition.magazineSize?!1:(this.reloadTimer=this.definition.reloadTime*this.reloadMultiplier,!0)}tryFire(e,t,n=this.center){if(this.reloadTimer>0||this.cooldown>0)return{result:"none",reloadStarted:!1};if(this.ammo<=0&&(this.infiniteAmmo||this.noReload)&&(this.ammo=this.definition.magazineSize),this.ammo<=0)return{result:"none",reloadStarted:this.tryReload()};this.infiniteAmmo||(this.ammo-=1),this.cooldown=1/(this.definition.fireRate*this.fireRateMultiplier);const i=this.ammo<=0&&!this.noReload,s=this.fireDefinition(e,t,this.definition,this.damageMultiplier,this.powerShot,n);return this.noReload&&this.ammo<=0&&(this.ammo=this.definition.magazineSize),i?{...s,reloadStarted:this.tryReload()}:{...s,reloadStarted:!1}}fireDefinition(e,t,n,i=1,s=!1,a=this.center){this.raycaster.setFromCamera(a,e),this.raycaster.ray.direction.x+=(Math.random()-.5)*n.spread,this.raycaster.ray.direction.y+=(Math.random()-.5)*n.spread,this.raycaster.ray.direction.normalize(),this.raycaster.far=n.range;const o=t.raycast(this.raycaster),l=e.position.clone(),c=o?o.point:l.clone().add(this.raycaster.ray.direction.clone().multiplyScalar(n.range));let h=o?"hit":"miss",u=0,f=!1;if(o){f=Math.random()<n.criticalChance;const m=f?2:1;u=s?999999:n.damage*i*m,h=t.damage(o.enemyId,u,this.shouldKnockBack(n))}return this.addTrail(l,c,o?"#fffb9a":"#70f0ff"),{result:h,reloadStarted:!1,hitEnemyId:o==null?void 0:o.enemyId,hitPoint:o==null?void 0:o.point,damageAmount:o?u:void 0,critical:o?f:void 0}}isReloading(){return this.reloadTimer>0}getReloadProgress(){return this.reloadTimer<=0?0:1-this.reloadTimer/(this.definition.reloadTime*this.reloadMultiplier)}setDefinition(e){this.definition={...e},this.ammo=this.definition.magazineSize,this.cooldown=0,this.reloadTimer=0}increaseMagazine(e){this.definition.magazineSize+=e,this.ammo=this.definition.magazineSize}resetStageModifiers(){this.damageMultiplier=1,this.fireRateMultiplier=1,this.reloadMultiplier=1}resetAll(){this.definition={...uo},this.ammo=this.definition.magazineSize,this.cooldown=0,this.reloadTimer=0,this.resetStageModifiers(),this.infiniteAmmo=!1,this.powerShot=!1,this.noReload=!1;for(const e of this.trails.splice(0))this.scene.remove(e.line),e.line.geometry.dispose(),e.line.material.dispose()}addTrail(e,t,n){const i=new Nt().setFromPoints([e,t]),s=new Xo({color:new Fe(n),transparent:!0,opacity:.85,blending:os}),a=new Ip(i,s);this.scene.add(a),this.trails.push({line:a,ttl:.08})}shouldKnockBack(e){return e.id==="shotgun"||e.id==="milkor-mgl"||e.soundId==="machineGun"}}const ss={muzzleX:.1,muzzleY:.3,viewHeight:.65},En={x:.02,y:-.02,planeZ:-.92,flashZ:-1.34},fo={x:.1,y:-.15},as=[{x:.08,y:-.28},{x:-.12,y:-.28},{x:.24,y:-.29},{x:-.37,y:-.29},{x:.48,y:-.3}];class Jp{constructor(e){V(this,"group",new ti);V(this,"textureLoader",new qo);V(this,"textures",new Map);V(this,"alignments",new Map);V(this,"pendingLoads",new Map);V(this,"slots",[]);V(this,"visibleWeaponIds",[]);V(this,"aim",{x:En.x,y:En.y});V(this,"activeWeaponId","");V(this,"activeSlotIndex",0);V(this,"recoil",0);V(this,"flashTimer",0);this.camera=e,e.add(this.group),this.prepareWeapons(Object.keys(is)),this.setWeapon("colt-m1911")}setAim(e,t){const n=Math.abs(En.planeZ),i=Math.tan(this.camera.fov*Math.PI/360)*n,s=i*this.camera.aspect;this.aim.x=En.x+e*s,this.aim.y=En.y+t*i,this.refreshVisibleSlots()}prepareWeapons(e){for(const t of new Set(e))this.loadWeaponTexture(t)}setWeapon(e){this.setWeapons([e],e)}setWeapons(e,t=e[0]??"colt-m1911"){const n=e.filter(Boolean).slice(0,5);n.length<=0&&n.push("colt-m1911"),this.activeWeaponId=t,this.activeSlotIndex=Math.max(0,n.findIndex(i=>i===t)),this.visibleWeaponIds.splice(0,this.visibleWeaponIds.length,...n),this.ensureSlotCount(n.length);for(const[i,s]of n.entries()){const a=this.slots[i];a.weaponId=s,a.plane.visible=!0,a.flash.visible=!0;const o=this.textures.get(this.getWeaponUrl(s));if(o){this.applyTexture(a,s,o,i,n.length);continue}this.loadWeaponTexture(s).then(l=>{this.visibleWeaponIds[i]===s&&this.applyTexture(a,s,l,i,this.visibleWeaponIds.length)})}for(let i=n.length;i<this.slots.length;i+=1)this.slots[i].plane.visible=!1,this.slots[i].flash.visible=!1}update(e){this.recoil=Math.max(0,this.recoil-e*6.5),this.flashTimer=Math.max(0,this.flashTimer-e),this.group.position.z=this.recoil*.16,this.group.position.y=-this.recoil*.035,this.group.rotation.x=-this.recoil*.12;for(const t of this.slots){const n=t.flash.material;n.opacity=t.flash.visible&&this.flashTimer>0?this.flashTimer/.055:0,t.flash.scale.setScalar(.75+Math.random()*.65)}}kick(){this.recoil=1,this.flashTimer=.055}loadWeaponTexture(e){const t=this.getWeaponUrl(e),n=this.textures.get(t);if(n)return Promise.resolve(n);const i=this.pendingLoads.get(t);if(i)return i;const s=new Promise((a,o)=>{this.textureLoader.load(t,l=>{l.colorSpace=At,this.textures.set(t,l),this.alignments.set(t,this.estimateAlignment(l)),this.pendingLoads.delete(t),a(l)},void 0,l=>{this.pendingLoads.delete(t),o(l)})});return this.pendingLoads.set(t,s),s}applyTexture(e,t,n,i,s){e.material.map=n;const a=i===this.activeSlotIndex;e.material.opacity=s===1||a?1:.76,e.material.needsUpdate=!0;const o=this.getAimTarget(i,s,a),l=n.image,c=(l==null?void 0:l.width)??443,h=(l==null?void 0:l.height)??329,u=this.alignments.get(this.getWeaponUrl(t))??ss,f=this.getSizeScale(s),m=u.viewHeight*f,g=m*(c/Math.max(1,h)),_=this.shouldFlipSlot(i)?-g:g,p=(u.muzzleX-.5)*_,d=(.5-u.muzzleY)*m;e.plane.scale.set(_,m,1),e.plane.position.set(o.x-p,o.y-d,En.planeZ),e.plane.renderOrder=6+i,e.flash.position.set(o.x,o.y,En.flashZ),e.flash.renderOrder=12+i}estimateAlignment(e){const t=e.image;if(!(t!=null&&t.width)||!t.height)return ss;const n=document.createElement("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d",{willReadFrequently:!0});if(!i)return this.defaultForImage(t.width,t.height);i.drawImage(t,0,0);const s=i.getImageData(0,0,t.width,t.height).data,a=this.getAlphaBounds(s,t.width,t.height);if(!a)return this.defaultForImage(t.width,t.height);const o=a.maxX-a.minX+1,l=a.maxY-a.minY+1,c=Math.min(a.maxX,a.minX+Math.ceil(o*.08)),h=a.minY+Math.floor(l*.68);let u=0,f=0;for(let _=a.minY;_<=h;_+=1)for(let p=a.minX;p<=c;p+=1)s[(_*t.width+p)*4+3]<=24||(u+=1,f+=_);const m=a.minX/t.width,g=u>0?f/u/t.height:(a.minY+l*.32)/t.height;return{muzzleX:m,muzzleY:g,viewHeight:this.defaultForImage(t.width,t.height).viewHeight}}getAlphaBounds(e,t,n){let i=t,s=-1,a=n,o=-1;for(let l=0;l<n;l+=1)for(let c=0;c<t;c+=1)e[(l*t+c)*4+3]<=24||(i=Math.min(i,c),s=Math.max(s,c),a=Math.min(a,l),o=Math.max(o,l));return s>=i&&o>=a?{minX:i,maxX:s,minY:a,maxY:o}:null}defaultForImage(e,t){const n=e/Math.max(1,t);return{...ss,viewHeight:Math.min(.7,Math.max(.58,.88/Math.max(1,n)))}}getWeaponUrl(e){return is[e]??is["colt-m1911"]}ensureSlotCount(e){for(;this.slots.length<e;)this.slots.push(this.createSlot(this.slots.length))}refreshVisibleSlots(){for(const[e,t]of this.slots.entries()){if(!t.plane.visible||!t.weaponId)continue;const n=this.textures.get(this.getWeaponUrl(t.weaponId));n&&this.applyTexture(t,t.weaponId,n,e,this.visibleWeaponIds.length)}}createSlot(e){const t=new Pn({transparent:!0,depthWrite:!1,side:zt}),n=new _t(new dn(1,1),t);n.renderOrder=6+e;const i=new Pn({color:"#ffef8f",transparent:!0,opacity:0,depthWrite:!1}),s=new _t(new bs(.14,.34,8),i);return s.rotation.x=-Math.PI/2,s.renderOrder=12+e,this.group.add(n,s),{plane:n,material:t,flash:s,weaponId:""}}getAimTarget(e,t,n){if(t<=1)return{x:this.aim.x+fo.x,y:this.aim.y+fo.y};const i=as[e]??as[as.length-1];return{x:this.aim.x+i.x,y:this.aim.y+i.y}}getSizeScale(e){return e<=1?.5:e<=2?.34:e<=3?.31:.28}shouldFlipSlot(e){return e===1||e===3}}const sr=5,po=[20,40,60,80,100],Qp=100,em=1.5;class tm{constructor(e){V(this,"wave",0);V(this,"stage",1);V(this,"waveInStage",0);V(this,"spawnQueue",[]);V(this,"enemiesTotal",0);V(this,"spawnTimer",0);V(this,"breakTimer",1.2);V(this,"awaitingContinue",!1);V(this,"roadProfile",Ai);this.enemies=e}setRoadProfile(e){this.roadProfile=e}reset(){this.wave=0,this.stage=1,this.waveInStage=0,this.spawnQueue=[],this.enemiesTotal=0,this.spawnTimer=0,this.breakTimer=1.2,this.awaitingContinue=!1,this.roadProfile=Ai}update(e,t){if(this.awaitingContinue)return"none";if(this.spawnQueue.length<=0&&this.enemies.getCount()===0){if(this.wave>0)return this.awaitingContinue=!0,this.waveInStage>=sr?"stageComplete":"waveComplete";this.startNextWave()}if(this.breakTimer>0)return this.breakTimer-=e,"none";if(this.spawnTimer-=e,this.spawnQueue.length>0&&this.spawnTimer<=0){const n=this.spawnQueue.shift()??"normal";this.enemies.spawn(this.getSpawnPosition(t.position),this.getSpawnOptions(n)),this.spawnTimer=xt.clamp(.55-this.waveInStage*.035,.18,.55)}return"none"}continueAfterUpgrade(){this.awaitingContinue=!1,this.startNextWave()}continueAfterStageClear(){this.awaitingContinue=!1,this.stage+=1,this.waveInStage=0,this.startNextWave()}jumpToWave(e){this.stage=Math.max(1,Math.floor(e)),this.wave=(this.stage-1)*sr,this.waveInStage=0,this.awaitingContinue=!1,this.startNextWave()}getSnapshot(){return{stage:this.stage,wave:this.wave,waveInStage:this.waveInStage,wavesPerStage:sr,total:this.enemiesTotal,remaining:this.spawnQueue.length+this.enemies.getCount()}}startNextWave(){this.waveInStage>=sr&&(this.stage+=1,this.waveInStage=0),this.wave+=1,this.waveInStage+=1,this.spawnQueue=this.createSpawnQueue(this.waveInStage),this.enemiesTotal=this.spawnQueue.length,this.spawnTimer=.3,this.breakTimer=.9}createSpawnQueue(e){const t=po[e-1]??po[0];if(e===4){const n=Array.from({length:t/2}).fill("normal"),i=Array.from({length:t/2}).fill("normal");return[...n,"midBoss",...i]}return e===5?["midBoss","midBoss",...Array.from({length:t}).fill("normal"),"bigBoss"]:Array.from({length:t}).fill("normal")}getSpawnOptions(e){const t=Qp*Math.pow(em,this.stage-1),n={normal:1,midBoss:50,bigBoss:100},i={normal:1,midBoss:2,bigBoss:3};return{baseHealth:t,wave:this.waveInStage,healthMultiplier:n[e],damageMultiplier:n[e],sizeMultiplier:i[e]}}getSpawnPosition(e){const t=xt.clamp(this.roadProfile.laneHalfWidth+this.waveInStage*.12,4,10),n=e.x+xt.randFloatSpread(t*2),i=e.z-xt.randFloat(28,42);return new U(xt.clamp(n,-t,t),0,xt.clamp(i,-37,37))}}const mo="shelter-defence-top-ranks",ar=10;class nm{constructor(e){V(this,"shell");V(this,"stats");V(this,"overlay");V(this,"crosshair");this.shell=document.createElement("div"),this.shell.className="game-shell",this.stats=document.createElement("div"),this.stats.className="hud",this.crosshair=document.createElement("div"),this.crosshair.className="crosshair",this.crosshair.innerHTML=`<img src="${Wp.crosshair}" alt="" />`,this.overlay=document.createElement("div"),this.overlay.className="overlay",this.shell.append(this.stats,this.crosshair,this.overlay),e.append(this.shell)}getCanvasHost(){return this.shell}update(e){this.stats.innerHTML=this.renderMainHud(e)}renderMainHud(e){const t=Math.max(1,e.waveTotal),n=Math.max(0,e.waveRemaining),i=e.loadout.gold,s=e.loadout.rubi,a=Math.min(100,Math.max(0,e.barricade.health/Math.max(1,e.barricade.maxHealth)*100));return`
      <div class="main-hud">
        <div class="main-squad-roster">
          ${this.renderMainSoldiers(e)}
        </div>

        <div class="main-wave-card">
          <strong>STAGE ${Math.max(1,e.stage)} WAVES (${Math.max(1,e.waveInStage)}/${e.wavesPerStage})</strong>
          <b>${n}/${t} Zombies are remaining</b>
        </div>

        <div class="main-top-controls">
          ${this.renderTopControl(ut.menu,"MENU","F1")}
          ${this.renderTopControl(ut.settings,"SETTINGS","F2")}
          ${this.renderTopControl(ut.pause,"PAUSE","F3")}
        </div>
        ${this.renderCheatIndicator(e.cheats)}

        <div class="main-special-stack">
          <div class="main-special${e.grenadeCount>0?" ready":" unavailable"}">
            <em>F4</em>
            <strong>GRENADE</strong>
            <img class="main-special-icon" src="${ut.grenade}" alt="" />
            <small>${e.grenadeCount}</small>
          </div>
          <div class="main-special${e.airStrikeCount>0?" ready":" unavailable"}">
            <em>F5</em>
            <strong>AIR STRIKE</strong>
            <img class="main-special-icon" src="${ut.airAttack}" alt="" />
            <small>${e.airStrikeCount}</small>
          </div>
        </div>

        <div
          class="main-crosshair-mark"
          style="left: ${50+e.aimX*50}%; top: ${50-e.aimY*50}%"
        ></div>

        ${this.renderEnemyHealthBars(e.enemyHealthBars)}

        ${this.renderMainFieldTurrets(e.turrets)}

        <div class="main-field-defense">
          <img class="main-field-barricade" src="${ut.barricadeBlock}" alt="" />
        </div>

        <div class="main-barricade">
          <span>BARRICADE</span>
          <strong>${Math.ceil(e.barricade.health)} / ${e.barricade.maxHealth} HP</strong>
          <i><span style="width: ${a}%"></span></i>
        </div>

        <div class="main-item-bar">
          ${this.renderMainItems(e.loadout)}
        </div>

        <div class="main-score">
          <span>Score <b>${this.formatNumber(e.score)}</b></span>
          <span>Gold <b>${this.formatNumber(i)}</b></span>
          <span>Rubi <b>${this.formatNumber(s)}</b></span>
        </div>

        <div class="main-turret-panel">
          <strong>TURRET</strong>
          <div class="main-turret-grid">
            ${this.renderMainTurrets(e.turrets)}
          </div>
        </div>
      </div>
    `}renderEnemyHealthBars(e){return e.length===0?"":`
      <div class="main-enemy-health-layer">
        ${e.map(t=>`
            <span
              class="main-enemy-health"
              style="left: ${t.x}%; top: ${t.y}%;"
            >
              <i style="width: ${t.healthPercent}%"></i>
            </span>
          `).join("")}
      </div>
    `}renderMainSoldiers(e){const t=this.getItemCount(e.loadout,"magazine"),n=e.loadout.soldiers.slice(0,5),i=t;return n.map(s=>{if(!s.hired)return`
            <div class="main-soldier-row empty">
              <span class="main-soldier-portrait"></span>
              <span class="main-soldier-weapon"></span>
              <span class="main-ammo-box"></span>
              <span class="main-mag-box"></span>
            </div>
          `;const a=e.loadout.weapons.find(g=>g.id===s.equippedWeaponId)??e.loadout.weapons[0],o=e.soldierHealth.find(g=>g.soldierId===s.id),l=o?Math.round(Math.min(1,Math.max(0,o.health/Math.max(1,o.maxHealth)))*100):100,c=l<=20?"#ff1828":"#20c8ff",h=o?o.health<=0:!1,u=(o==null?void 0:o.ammo)??a.magazineSize,f=e.cheats.infiniteAmmo?"&infin;":String(u),m=(o==null?void 0:o.magazines)??i;return`
          <div class="main-soldier-row${h?" dead":""}">
            <span class="main-soldier-portrait" style="--health-percent: ${l}%; --health-color: ${c}">
              <img src="${s.image}" alt="${s.name}" />
              <i style="--player-frame: url('${ut.player}')"></i>
            </span>
            <span class="main-soldier-weapon">
              <img src="${a.image}" alt="${a.name}" />
            </span>
            <span class="main-ammo-box">
              <img src="${ut.bullet}" alt="" />
              <b>${f}</b>
            </span>
            <span class="main-mag-box">
              <img src="${ut.magazine}" alt="" />
              <b>${m}</b>
            </span>
          </div>
        `}).join("")}renderMainItems(e){return["potion-health","potion-dex","potion-int","repair-kit"].map((n,i)=>{const s=e.items.find(a=>a.id===n);return s?`
          <div class="main-item-slot">
            <span>${i+1}</span>
            <img class="${s.id==="repair-kit"?"repair-kit":""}" src="${this.getMainItemImage(s.id)}" alt="${s.name}" />
            <b>${s.count}</b>
          </div>
        `:""}).join("")}renderMainTurrets(e){return Array.from({length:si},(t,n)=>{const i=e[n],s=!!(i!=null&&i.installed),a=s?Math.min(100,Math.max(0,i.shield/i.maxShield*100)):0;return`
        <span class="main-turret-slot${s?" ready":""}">
          ${s?`
                <img class="main-turret-unit" src="${ut.turret}" alt="${i.name??""}" />
                <i><span style="width: ${a}%"></span></i>
              `:""}
        </span>
      `}).join("")}renderMainFieldTurrets(e){return Array.from({length:si},(t,n)=>{const i=e[n];return i!=null&&i.installed?`
        <span class="main-side-turret turret-side-${n===0?"right":"left"}">
          <img
            src="${this.getMainTurretImage(i)}"
            alt="${i.name??""}"
          />
        </span>
      `:""}).join("")}renderTopControl(e,t,n){return`
      <span class="main-control">
        <em>${n}</em>
        <img class="main-control-icon" src="${e}" alt="" />
        <b>${t}</b>
      </span>
    `}renderCheatIndicator(e){return e.visible?`
      <div class="main-cheat-indicator">
        ${[["Bullet",e.infiniteAmmo],["Power",e.powerShot],["Reload",e.noReload],["Jump",e.jumpUsed]].map(([n,i])=>`<span class="${i?"active":""}">${n}</span>`).join("")}
      </div>
    `:""}getMainTurretImage(e){return(e.fireTimer??0)>0?ut.turret1On:ut.turret1Off}getItemCount(e,t,n=0){var i;return((i=e.items.find(s=>s.id===t))==null?void 0:i.count)??n}getMainItemImage(e){return{"potion-health":ut.potionHealth,"potion-dex":ut.potionDex,"potion-int":ut.potionInt,"repair-kit":ut.repairKit}[e]??""}formatNumber(e){return Math.max(0,Math.floor(e)).toLocaleString()}showIntro(e,t){var n,i;this.overlay.className="overlay visible intro-overlay",this.overlay.innerHTML=`
      <section class="intro-screen" style="--intro-bg: url('${ir.background}')">
        <div class="intro-vignette"></div>
        <img class="intro-logo" src="${ir.logo}" alt="Shelter Defence" />
        <div class="intro-buttons">
          <img src="${ir.buttons}" alt="" />
          <button class="intro-button-hotspot intro-preparation" type="button" aria-label="Preparation"></button>
          <button class="intro-button-hotspot intro-start" type="button" aria-label="Start Game"></button>
        </div>
      </section>
    `,(n=this.overlay.querySelector(".intro-preparation"))==null||n.addEventListener("click",e,{once:!0}),(i=this.overlay.querySelector(".intro-start"))==null||i.addEventListener("click",t,{once:!0})}showPreparationPlaceholder(e,t){var n,i;this.overlay.className="overlay visible intro-overlay",this.overlay.innerHTML=`
      <section class="intro-screen" style="--intro-bg: url('${ir.background}')">
        <div class="intro-vignette"></div>
        <article class="preparation-placeholder">
          <p class="eyebrow">Preparation</p>
          <h2>Loadout bay opening soon.</h2>
          <p>Hire soldiers, assign weapons, and buy combat items here.</p>
          <div class="placeholder-actions">
            <button class="secondary-action" type="button">Back</button>
            <button class="primary-action" type="button">Start Game</button>
          </div>
        </article>
      </section>
    `,(n=this.overlay.querySelector(".secondary-action"))==null||n.addEventListener("click",e,{once:!0}),(i=this.overlay.querySelector(".primary-action"))==null||i.addEventListener("click",t,{once:!0})}showPreparation(e,t){var g,_,p,d,T,M,E,D,w,A;const n=this.getSelectedPreparationTurret(e),i=n?null:e.soldiers[e.selectedSoldierIndex],s=e.weapons[e.selectedWeaponIndex],a=i?e.weapons.find(L=>L.id===i.equippedWeaponId)??s:s,o=i?this.getDerivedPreparationStats(i,a):null,l=e.soldiers.filter(L=>L.hired).length,c=(i==null?void 0:i.id)==="anais",h=(i==null?void 0:i.name)??(n==null?void 0:n.name)??"",u=(i==null?void 0:i.role)??(n==null?void 0:n.name)??"",f=(i==null?void 0:i.image)??(n==null?void 0:n.image)??"",m=i?{str:Math.round((o==null?void 0:o.str)??i.stats.str),dex:Math.round((o==null?void 0:o.dex)??i.stats.dex),int:Math.round((o==null?void 0:o.int)??i.stats.int)}:(n==null?void 0:n.stats)??{str:0,dex:0,int:0};this.overlay.className="overlay visible preparation-overlay",this.overlay.innerHTML=`
      <section class="preparation-screen" style="--prep-bg: url('${Ot.background}')">
        <header class="preparation-header">
          <button class="prep-start" type="button" aria-label="Start Game">
            <img class="prep-start-icon" src="${Ot.startIcon}" alt="" />
            <img class="prep-start-label" src="${Ot.startButton}" alt="Start Game" />
          </button>
          <div class="prep-currency">
            <span>
              <img src="${Ot.gold}" alt="" />
              <b>${e.gold.toLocaleString()}</b>
            </span>
            <span>
              <img src="${Ot.rubi}" alt="" />
              <b>${e.rubi.toLocaleString()}</b>
            </span>
          </div>
        </header>

        <section class="prep-soldier-zone">
          <h2>Soldiers <span>(${l}/5)</span></h2>
          <div class="prep-soldier-card">
            <button class="prep-arrow prep-prev-soldier" type="button" aria-label="Previous soldier">
              <img src="${Ot.leftArrow}" alt="" />
            </button>
            <img class="prep-soldier-art${n?" turret-art":""}" src="${f}" alt="${h}" />
            <button class="prep-arrow prep-next-soldier" type="button" aria-label="Next soldier">
              <img src="${Ot.rightArrow}" alt="" />
            </button>
            ${i&&o?this.renderPreparationInfoPanel(i,a,o):n?this.renderPreparationTurretInfoPanel(n):""}
          </div>
          <div class="prep-soldier-name">
            <strong>${h}</strong>
            <span>${u}</span>
          </div>
          <div class="prep-stats">
            <span>STR <b>${m.str}</b></span>
            <span>DEX <b>${m.dex}</b></span>
            <span>INT <b>${m.int}</b></span>
          </div>
          ${n?this.renderPreparationTurretActions(n,e.turretSlots):`
                <button class="prep-hire prep-hire-soldier${i!=null&&i.hired?" fire":""}${c?" locked":""}" type="button"${c?" disabled":""}>
                  ${c?"Hired":i!=null&&i.hired?`Fire ${Math.floor(((i==null?void 0:i.hireCost)??0)/2)}`:`Hire ${(i==null?void 0:i.hireCost)??0}`}
                </button>
              `}
        </section>

        <aside class="prep-inventory-strip${n?" turret-selected":""}">
          <div class="prep-equipped-weapon">
            ${i?`<img src="${a.image}" alt="${a.name}" />`:""}
          </div>
          <div class="prep-strip-list">
            ${e.items.map(L=>`
                  <div class="prep-strip-item">
                    <img src="${L.image}" alt="${L.name}" />
                    <b>${this.formatItemCount(L.count)}</b>
                  </div>
                `).join("")}
          </div>
        </aside>

        <section class="prep-loadout-zone">
          <div class="prep-weapon-section${n?" disabled":""}">
            <h2>WEAPON</h2>
            <div class="prep-weapon-body">
              <button class="prep-arrow prep-prev-weapon" type="button" aria-label="Previous weapon"${n?" disabled":""}>
                <img src="${Ot.leftArrow}" alt="" />
              </button>
              <div class="prep-weapon-stack">
                <button class="prep-weapon-card" type="button" aria-label="Equip ${s.name}"${n?" disabled":""}>
                  ${n?`<img src="${n.image}" alt="${n.name}" />`:`<img src="${s.image}" alt="${s.name}" />`}
                </button>
                <div class="prep-weapon-copy">
                  <strong>${n?"FIXED TURRET WEAPON":s.name}</strong>
                  <span>${n?"Turrets do not equip soldier weapons.":s.summary}</span>
                  <small>${n?`${n.damage} damage - ${n.fireRate} speed`:`${s.magazineSize} rounds - ${s.trait}`}</small>
                </div>
              </div>
              <button class="prep-arrow prep-next-weapon" type="button" aria-label="Next weapon"${n?" disabled":""}>
                <img src="${Ot.rightArrow}" alt="" />
              </button>
            </div>
          </div>

          <div class="prep-items-section">
            <h2>
              <span>ITEMS</span>
              <button class="prep-reset-items" type="button" aria-label="Reset items">
                <img src="${Ot.reset}" alt="Reset" />
              </button>
            </h2>
            <div class="prep-item-grid">
              ${e.items.map(L=>`
                    <button class="prep-item-card" type="button" data-item-id="${L.id}"${L.count>=L.maxCount?" disabled":""}>
                      <span class="prep-item-content">
                        <img src="${L.image}" alt="${L.name}" />
                        <strong>${L.name}</strong>
                      <span>${L.detail}</span>
                      </span>
                      <small>${L.priceGold}</small>
                    </button>
                  `).join("")}
            </div>
          </div>
        </section>

        <p class="prep-message">${e.message}</p>
      </section>
    `,(g=this.overlay.querySelector(".prep-start"))==null||g.addEventListener("click",t.onStart,{once:!0}),(_=this.overlay.querySelector(".prep-prev-soldier"))==null||_.addEventListener("click",t.onPrevSoldier,{once:!0}),(p=this.overlay.querySelector(".prep-next-soldier"))==null||p.addEventListener("click",t.onNextSoldier,{once:!0}),(d=this.overlay.querySelector(".prep-prev-weapon"))==null||d.addEventListener("click",t.onPrevWeapon,{once:!0}),(T=this.overlay.querySelector(".prep-next-weapon"))==null||T.addEventListener("click",t.onNextWeapon,{once:!0}),(M=this.overlay.querySelector(".prep-weapon-card"))==null||M.addEventListener("click",t.onEquipWeapon,{once:!0}),(E=this.overlay.querySelector(".prep-hire-soldier"))==null||E.addEventListener("click",t.onHireSoldier,{once:!0}),(D=this.overlay.querySelector(".prep-hire-turret"))==null||D.addEventListener("click",t.onHireTurret,{once:!0}),(w=this.overlay.querySelector(".prep-fire-turret"))==null||w.addEventListener("click",t.onFireTurret,{once:!0});for(const L of this.overlay.querySelectorAll(".prep-item-card"))L.addEventListener("click",()=>t.onBuyItem(L.dataset.itemId??""),{once:!0});(A=this.overlay.querySelector(".prep-reset-items"))==null||A.addEventListener("click",t.onResetItems,{once:!0})}showUpgrades(e,t,n){this.overlay.className="overlay visible",this.overlay.innerHTML=`
      <section class="panel upgrade-panel">
        <h2>CHOOSE A CARD</h2>
        <p class="clear-reward">+${t.magazines} MAGAZINE / +${this.formatNumber(t.gold)} GOLD / +${t.rubi} RUBI</p>
        <div class="upgrade-grid"></div>
      </section>
    `;const i=this.overlay.querySelector(".upgrade-grid");if(i)for(const s of e){const a=document.createElement("button");a.type="button",a.className="upgrade-choice",a.innerHTML=`
        <span class="upgrade-icon">
          ${s.icon?`<img src="${s.icon}" alt="" />`:""}
        </span>
        <span class="upgrade-copy">
          <strong>${s.title}</strong>
          <span>${s.detail}</span>
        </span>
      `,a.addEventListener("click",()=>n(s),{once:!0}),i.append(a)}}showStageClear(e,t,n,i){var s;this.overlay.className="overlay visible",this.overlay.innerHTML=`
      <section class="panel stage-clear-panel">
        <img class="next-stage-image" src="${ln.nextStage}" alt="Next Stage" />
        <h2>Stage ${e} Clear</h2>
        <p class="clear-reward">+${this.formatNumber(t.gold)} Gold / +${t.rubi} Rubi</p>
        <p>${n?"Next stage begins with stronger zombies.":"All prepared stages are cleared."}</p>
        <button type="button">${n?"Next Stage":"Title"}</button>
      </section>
    `,(s=this.overlay.querySelector("button"))==null||s.addEventListener("click",i,{once:!0})}showMainControlPanel(e,t,n){var i;this.overlay.className="overlay visible",this.overlay.innerHTML=`
      <section class="panel main-control-panel">
        <p class="eyebrow">${e}</p>
        <h2>${e}</h2>
        <p>${t}</p>
        <button type="button">Resume</button>
      </section>
    `,(i=this.overlay.querySelector("button"))==null||i.addEventListener("click",n,{once:!0})}showMainMenu(e){var t,n,i,s;this.overlay.className="overlay visible",this.overlay.innerHTML=`
      <section class="panel main-menu-panel">
        <h2>MENU</h2>
        <div class="menu-action-grid">
          <button class="menu-prep" type="button">STORE</button>
          <button class="menu-cheat" type="button">CHEAT</button>
          <button class="menu-resume" type="button">Resume</button>
          <button class="menu-exit" type="button">Exit</button>
        </div>
      </section>
    `,(t=this.overlay.querySelector(".menu-prep"))==null||t.addEventListener("click",e.onPreparation,{once:!0}),(n=this.overlay.querySelector(".menu-exit"))==null||n.addEventListener("click",e.onExit,{once:!0}),(i=this.overlay.querySelector(".menu-cheat"))==null||i.addEventListener("click",e.onCheat,{once:!0}),(s=this.overlay.querySelector(".menu-resume"))==null||s.addEventListener("click",e.onResume,{once:!0})}showCheatMenu(e,t){var n,i,s,a,o,l;this.overlay.className="overlay visible",this.overlay.innerHTML=`
      <section class="panel cheat-panel">
        <p class="eyebrow">Menu</p>
        <h2>CHEAT MODE</h2>
        <div class="menu-action-grid cheat-grid">
          <button class="cheat-infinite" type="button">Infinite Bullet: ${e.infiniteAmmo?"ON":"OFF"}</button>
          <button class="cheat-power" type="button">Power Shooting: ${e.powerShot?"ON":"OFF"}</button>
          <button class="cheat-reload" type="button">No Reload: ${e.noReload?"ON":"OFF"}</button>
          <button class="cheat-stage" type="button">Jump to Stage #</button>
          <button class="cheat-rank" type="button">Go to Rank</button>
          <button class="cheat-back" type="button">Back</button>
        </div>
      </section>
    `,(n=this.overlay.querySelector(".cheat-infinite"))==null||n.addEventListener("click",t.onInfiniteAmmo,{once:!0}),(i=this.overlay.querySelector(".cheat-power"))==null||i.addEventListener("click",t.onPowerShot,{once:!0}),(s=this.overlay.querySelector(".cheat-reload"))==null||s.addEventListener("click",t.onNoReload,{once:!0}),(a=this.overlay.querySelector(".cheat-stage"))==null||a.addEventListener("click",t.onJumpStage,{once:!0}),(o=this.overlay.querySelector(".cheat-rank"))==null||o.addEventListener("click",t.onRank,{once:!0}),(l=this.overlay.querySelector(".cheat-back"))==null||l.addEventListener("click",t.onBack,{once:!0})}showGameOver(e,t,n,i){var s;this.overlay.className="overlay visible",this.overlay.innerHTML=`
      <section class="gameover-panel">
        <img class="gameover-image" src="${ln.gameOver}" alt="Game Over" />
        <p class="gameover-score">Score ${this.formatNumber(e)}</p>
        <p class="gameover-prompt">Click</p>
      </section>
    `,(s=this.overlay.querySelector(".gameover-panel"))==null||s.addEventListener("click",()=>{this.qualifiesForLeaderboard(e)?this.showNameEntry(e,t,n,i):this.showTopRanks(n,void 0,i)},{once:!0})}showTopRanks(e,t=this.loadLeaderboard(),n){var i;n==null||n(),this.overlay.className="overlay visible rank-overlay",this.overlay.innerHTML=`
      <section class="top-rank-panel">
        <div class="top-rank-frame">
          <img class="top-rank-image" src="${ln.topRanks}" alt="Top Ranks" />
          <div class="top-rank-list">
            <div class="top-rank-row top-rank-header">
              <span>Rank</span><span>Name</span><span>Score</span><span>Stage</span>
            </div>
            ${this.renderRankRows(t)}
          </div>
        </div>
        <p class="gameover-prompt">Click</p>
      </section>
    `,(i=this.overlay.querySelector(".top-rank-panel"))==null||i.addEventListener("click",e,{once:!0})}hideOverlay(){this.overlay.className="overlay",this.overlay.innerHTML=""}showFloatingGold(e,t,n){const i=document.createElement("span");i.className="floating-gold",i.textContent=`+${e}`,i.style.left=`${t}%`,i.style.top=`${n}%`,this.shell.append(i),window.setTimeout(()=>i.remove(),1100)}showFloatingDamage(e,t,n,i){const s=document.createElement("span");s.className=`floating-damage${i?" critical":""}`,s.textContent=e>=999999?"+∞":`+${Math.ceil(e)}`,s.style.left=`${t}%`,s.style.top=`${n}%`,this.shell.append(s),window.setTimeout(()=>s.remove(),900)}showNameEntry(e,t,n,i){var o;this.overlay.className="overlay visible name-entry-overlay",this.overlay.innerHTML=`
      <section class="gameover-panel name-entry-panel">
        <img class="gameover-image" src="${ln.gameOver}" alt="Game Over" />
        <p class="gameover-score">Score ${this.formatNumber(e)}</p>
        <label class="rank-name-entry">
          <span>Name</span>
          <input class="rank-name-input" type="text" maxlength="10" autocomplete="off" />
        </label>
        <button class="rank-name-submit" type="button">OK</button>
      </section>
    `;const s=this.overlay.querySelector(".rank-name-input"),a=()=>{const l=this.addLeaderboardEntry((s==null?void 0:s.value)??"",e,t);this.showTopRanks(n,l,i)};s==null||s.addEventListener("click",l=>l.stopPropagation()),s==null||s.addEventListener("input",()=>{s.value=this.sanitizePlayerName(s.value)}),s==null||s.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),a())}),(o=this.overlay.querySelector(".rank-name-submit"))==null||o.addEventListener("click",l=>{l.stopPropagation(),a()},{once:!0}),s==null||s.focus()}loadLeaderboard(){try{const e=localStorage.getItem(mo),t=e?JSON.parse(e):[];return(Array.isArray(t)?t:[]).filter(n=>typeof(n==null?void 0:n.name)=="string"&&Number.isFinite(n==null?void 0:n.score)&&Number.isFinite(n==null?void 0:n.stage)).map(n=>({name:n.name,score:Math.max(0,Math.floor(n.score)),stage:Math.max(1,Math.floor(n.stage))})).sort((n,i)=>i.score-n.score).slice(0,ar)}catch{return[]}}saveLeaderboard(e){localStorage.setItem(mo,JSON.stringify(e.slice(0,ar)))}qualifiesForLeaderboard(e){const t=this.loadLeaderboard();return t.length<ar||e>t[t.length-1].score}addLeaderboardEntry(e,t,n){const i=this.loadLeaderboard();i.push({name:this.sanitizePlayerName(e)||"PLAYER",score:Math.max(0,Math.floor(t)),stage:Math.max(1,Math.floor(n))}),i.sort((a,o)=>o.score-a.score);const s=i.slice(0,ar);return this.saveLeaderboard(s),s}renderRankRows(e){return(e.length?e:[{name:"NO RANK",score:0,stage:1}]).map((n,i)=>`
        <div class="top-rank-row">
          <span>${e.length?i+1:"-"}</span>
          <span>${n.name}</span>
          <span>${this.formatNumber(n.score)}</span>
          <span>${n.stage}</span>
        </div>
      `).join("")}sanitizePlayerName(e){return e.replace(/[^a-z0-9 ]/gi,"").replace(/\s+/g," ").slice(0,10).toUpperCase()}formatItemCount(e){return String(Math.min(999,Math.max(0,e))).padStart(3,"0")}getSelectedPreparationTurret(e){return e.selectedSoldierIndex<e.soldiers.length?null:e.turrets[e.selectedSoldierIndex-e.soldiers.length]??null}renderPreparationTurretActions(e,t){const n=t.filter(a=>(a==null?void 0:a.id)===e.id).length,i=t.filter(Boolean).length;return`
      <div class="prep-turret-actions">
        <button class="prep-hire prep-hire-turret" type="button"${i<t.length?"":" disabled"}>
          Hire ${e.hireCost} (${i}/${t.length})
        </button>
        <button class="prep-hire fire prep-fire-turret" type="button"${n>0?"":" disabled"}>
          Fire ${Math.floor(e.hireCost/2)} (${n})
        </button>
      </div>
    `}getDerivedPreparationStats(e,t){const n=e.stats.str*t.statScale.str,i=e.stats.dex*t.statScale.dex,s=e.stats.int*t.statScale.int,a=n/100,o=i/100,l=s/100;return{str:n,dex:i,int:s,health:Math.max(1,Math.ceil(n)*10),damageMultiplier:a,speedMultiplier:o,criticalMultiplier:l,damage:t.damage*a,fireRate:t.fireRate*o,criticalChance:Math.min(.95,t.criticalChance*l)}}renderPreparationInfoPanel(e,t,n){return`
      <aside class="prep-soldier-tooltip">
        <strong>${e.name} + ${t.name}</strong>

        <div class="prep-info-block">
          <b>WEAPON</b>
          <span>STR%</span><em>${this.formatScalePercent(t.statScale.str)}</em>
          <span>DEX%</span><em>${this.formatScalePercent(t.statScale.dex)}</em>
          <span>INT%</span><em>${this.formatScalePercent(t.statScale.int)}</em>
          <span>MAG</span><em>${t.magazineSize}</em>
          <span>DAMAGE</span><em>${this.formatDecimal(t.damage)}</em>
          <span>SPEED</span><em>${this.formatDecimal(t.fireRate)}</em>
          <span>CRIT</span><em>${this.formatPercent(t.criticalChance)}</em>
        </div>

        <div class="prep-info-block">
          <b>SOLDIER</b>
          <span>STR</span><em>${e.stats.str}</em>
          <span>DEX</span><em>${e.stats.dex}</em>
          <span>INT</span><em>${e.stats.int}</em>
          <span>HEALTH</span><em>${e.stats.str*10}</em>
          <span>DAMAGE%</span><em>${this.formatScalePercent(e.stats.str/100)}</em>
          <span>SPEED%</span><em>${this.formatScalePercent(e.stats.dex/100)}</em>
          <span>CRIT%</span><em>${this.formatScalePercent(e.stats.int/100)}</em>
        </div>

        <div class="prep-info-block final">
          <b>FINAL</b>
          <span>STR</span><em>${this.formatDecimal(n.str)}</em>
          <span>DEX</span><em>${this.formatDecimal(n.dex)}</em>
          <span>INT</span><em>${this.formatDecimal(n.int)}</em>
          <span>HEALTH</span><em>${n.health}</em>
          <span>DAMAGE</span><em>${this.formatDecimal(n.damage)}</em>
          <span>SPEED</span><em>${this.formatDecimal(n.fireRate)}</em>
          <span>CRIT</span><em>${this.formatPercent(n.criticalChance)}</em>
        </div>
      </aside>
    `}renderPreparationTurretInfoPanel(e){return`
      <aside class="prep-soldier-tooltip turret-tooltip">
        <strong>${e.name}</strong>

        <div class="prep-info-block">
          <b>WEAPON</b>
          <span>TYPE</span><em>GUN</em>
          <span>STR</span><em>${e.stats.str}</em>
          <span>DEX</span><em>${e.stats.dex}</em>
          <span>INT</span><em>${e.stats.int}</em>
          <span>DAMAGE</span><em>${this.formatDecimal(e.damage)}</em>
          <span>SPEED</span><em>${this.formatDecimal(e.fireRate)}</em>
          <span>SHIELD</span><em>${e.maxShield}</em>
        </div>

        <div class="prep-info-block empty">
          <b>SOLDIER</b>
        </div>

        <div class="prep-info-block final">
          <b>FINAL</b>
          <span>STR</span><em>${e.stats.str}</em>
          <span>DEX</span><em>${e.stats.dex}</em>
          <span>INT</span><em>${e.stats.int}</em>
          <span>HEALTH</span><em>${e.maxShield}</em>
          <span>DAMAGE</span><em>${this.formatDecimal(e.damage)}</em>
          <span>SPEED</span><em>${this.formatDecimal(e.fireRate)}</em>
          <span>CRIT</span><em>-</em>
        </div>
      </aside>
    `}formatScalePercent(e){return`${Math.ceil(e*100)}%`}formatPercent(e){return`${Math.ceil(e*100)}%`}formatDecimal(e){return String(Math.ceil(e))}}class im{constructor(e){V(this,"hud");V(this,"scene",new Lp);V(this,"renderer",new Pp({antialias:!0}));V(this,"player",new $p);V(this,"input");V(this,"audio",new Vp);V(this,"enemies",new Xp(this.scene));V(this,"weapon",new Zp(this.scene));V(this,"weaponView",new Jp(this.player.camera));V(this,"waves",new tm(this.enemies));V(this,"upgrades",new Kp(this.player,this.weapon));V(this,"preparation",new Yp);V(this,"size",new Le);V(this,"textureLoader",new qo);V(this,"stageBackgrounds",new Map);V(this,"roadMaskLoader",new jp(ln.stageRoadMasks));V(this,"roadTopWorldPoint",new U(0,0,-36));V(this,"stageRoadProfile",Ai);V(this,"currentStageNumber",1);V(this,"preparationFromRun",!1);V(this,"mode","ready");V(this,"lastTime",0);V(this,"animationId",0);V(this,"grenadeCount",0);V(this,"grenadeTimer",0);V(this,"airStrikeCount",0);V(this,"airStrikeTimer",0);V(this,"pausedControl",null);V(this,"activeSoldierId",null);V(this,"activeWeaponId",null);V(this,"cheatModeUsed",!1);V(this,"cheatJumpUsed",!1);V(this,"aim",new Le(0,0));V(this,"score",0);V(this,"soldierCombat",new Map);V(this,"pendingDamagePopups",new Map);V(this,"turretFireCooldowns",new Map);V(this,"turretShotCounts",new Map);V(this,"barricade",{health:1500,maxHealth:1500});V(this,"barricadeTarget",{get health(){return this.owner.barricade.health},z:-4.5,halfWidth:8,damage:e=>this.damageBarricade(e),owner:this});V(this,"turrets",Array.from({length:si},()=>({installed:!1,fireTimer:0,shield:0,maxShield:100})));V(this,"soldierTarget",{get position(){return this.owner.player.position},damage:e=>this.damageSoldier(e),owner:this});V(this,"tick",e=>{const t=Math.min((e-this.lastTime)/1e3,.05);this.lastTime=e,this.update(t),this.renderer.render(this.scene,this.player.camera),this.animationId=requestAnimationFrame(this.tick)});V(this,"handleMouseMove",e=>{if(document.pointerLockElement!==this.hud.getCanvasHost())return;const t=.0018;this.aim.x=Math.max(-.96,Math.min(.96,this.aim.x+e.movementX*t)),this.aim.y=Math.max(-.86,Math.min(.86,this.aim.y-e.movementY*t)),this.weaponView.setAim(this.aim.x,this.aim.y)});V(this,"resize",()=>{const e=this.hud.getCanvasHost().getBoundingClientRect();this.size.set(Math.max(1,e.width),Math.max(1,e.height)),this.renderer.setSize(this.size.x,this.size.y),this.player.camera.aspect=this.size.x/this.size.y,this.player.camera.updateProjectionMatrix()});this.hud=new nm(e),this.input=new qp(this.hud.getCanvasHost()),this.configureRenderer(),this.createWorld(),this.bindEvents(),this.showIntro()}start(){this.resize(),this.lastTime=performance.now(),this.animationId=requestAnimationFrame(this.tick)}beginRun(){this.audio.stopGameStart(),this.audio.unlock(),this.resetRunProgress(),this.setupCombatantsFromPreparation(),this.resetAim(),this.alignStageMapToBackground(),this.mode="playing",this.hud.hideOverlay(),this.hud.getCanvasHost().requestPointerLock()}showIntro(){this.mode="ready",this.audio.unlock(),this.audio.playGameStart(),this.hud.showIntro(()=>this.openPreparation(),()=>this.beginRun())}openPreparation(e=!1){this.preparationFromRun=e,this.mode=e?"paused":"ready",this.hud.showPreparation(this.preparation.snapshot(),{onBack:()=>e?this.resumeFromPreparation():this.showIntro(),onStart:()=>e?this.resumeFromPreparation():this.beginRun(),onPrevSoldier:()=>{this.preparation.selectSoldier(-1),this.openPreparation(e)},onNextSoldier:()=>{this.preparation.selectSoldier(1),this.openPreparation(e)},onPrevWeapon:()=>{this.preparation.selectWeapon(-1),this.openPreparation(e)},onNextWeapon:()=>{this.preparation.selectWeapon(1),this.openPreparation(e)},onEquipWeapon:()=>{this.preparation.equipSelectedWeapon(),this.openPreparation(e)},onHireSoldier:()=>{this.preparation.hireSelectedSoldier(),this.openPreparation(e)},onHireTurret:()=>{this.preparation.hireSelectedTurret(),this.openPreparation(e)},onFireTurret:()=>{this.preparation.fireSelectedTurret(),this.openPreparation(e)},onBuyItem:t=>{this.preparation.buyItem(t),this.openPreparation(e)},onResetItems:()=>{this.preparation.resetItems(),this.openPreparation(e)}})}restart(){this.enemies.clear(),window.location.reload()}resetRunProgress(){this.enemies.clear(),this.waves.reset(),this.upgrades.resetStageUpgrades(),this.weapon.resetAll(),this.player.maxHealth=100,this.player.health=100,this.player.incomingDamageMultiplier=1,this.score=0,this.activeSoldierId=null,this.activeWeaponId=null,this.soldierCombat.clear(),this.pendingDamagePopups.clear(),this.turretFireCooldowns.clear(),this.turretShotCounts.clear(),this.resetSpecialCounters(),this.resetBarricade(),this.cheatModeUsed=!1,this.cheatJumpUsed=!1,this.turrets=Array.from({length:si},()=>({installed:!1,fireTimer:0,shield:0,maxShield:100})),this.setStageBackground(1)}update(e){if(this.handleMainControlHotkeys(),this.mode==="playing"){this.weapon.update(e),this.weaponView.update(e),this.syncActiveSoldierWeapon(),this.updateSoldierCombatTimers(e),this.updateSpecialCounters(e),this.handleGameplayHotkeys(),this.handleSquadFire(),this.handleShootRelease(),this.updateTurretFire(e),this.player.update(),this.enemies.update(e,this.soldierTarget,this.barricadeTarget),this.input.consumeReload()&&this.reloadLivingSoldiers();const s=this.waves.update(e,this.player);s==="waveComplete"&&this.openUpgradeMenu(this.applyWaveClearRewards()),s==="stageComplete"&&this.openStageClearPanel(this.applyStageClearRewards()),this.getAliveSoldiers().length<=0&&(this.mode="gameover",this.stopLivingSoldierWeaponShots(),document.exitPointerLock(),this.audio.playGameOver(),this.hud.showGameOver(this.score,this.waves.stage,()=>this.resetToFreshIntro(),()=>this.audio.playRank()))}this.updateFloatingDamagePopups(e);const t=this.enemies.getSnapshot(),n=this.preparation.snapshot(),i=this.waves.getSnapshot();this.hud.update({health:this.player.health,maxHealth:this.player.maxHealth,ammo:this.weapon.ammo,magazine:this.weapon.definition.magazineSize,wave:i.wave,stage:i.stage,waveInStage:i.waveInStage,waveTotal:i.total,wavesPerStage:i.wavesPerStage,waveRemaining:i.remaining,kills:t.killed,score:this.score,weaponName:this.weapon.definition.name,reloading:this.weapon.isReloading(),reloadProgress:this.weapon.getReloadProgress(),loadout:n,grenadeCount:this.grenadeCount,airStrikeCount:this.airStrikeCount,turrets:this.turrets.map(s=>({...s})),barricade:{...this.barricade},soldierHealth:this.getSoldierHealthSnapshots(n),enemyHealthBars:this.enemies.getHealthBars(this.player.camera),cheats:{visible:this.cheatModeUsed,infiniteAmmo:this.weapon.infiniteAmmo,powerShot:this.weapon.powerShot,noReload:this.weapon.noReload,jumpUsed:this.cheatJumpUsed},aimX:this.aim.x,aimY:this.aim.y})}resetSpecialCounters(){this.grenadeCount=0,this.grenadeTimer=0,this.airStrikeCount=0,this.airStrikeTimer=0}resetAim(){this.aim.set(0,-.26),this.weaponView.setAim(this.aim.x,this.aim.y)}resetBarricade(){this.barricade.health=this.barricade.maxHealth}alignStageMapToBackground(){this.player.resetView(this.getAlignedStagePitch()),this.player.update(),this.player.camera.updateProjectionMatrix(),this.weaponView.setAim(this.aim.x,this.aim.y)}getAlignedStagePitch(){const e=this.stageRoadProfile.topFraction,t=-.45,n=.75,i=this.projectRoadTopY(t),s=this.projectRoadTopY(n),a=s>i,o=Math.min(i,s),l=Math.max(i,s);if(e<=o)return a?t:n;if(e>=l)return a?n:t;let c=t,h=n;for(let u=0;u<16;u+=1){const f=(c+h)/2;this.projectRoadTopY(f)<e===a?c=f:h=f}return(c+h)/2}projectRoadTopY(e){return this.player.resetView(e),this.player.update(),this.player.camera.updateMatrixWorld(!0),-this.roadTopWorldPoint.clone().project(this.player.camera).y*.5+.5}updateSpecialCounters(e){for(this.grenadeTimer+=e;this.grenadeTimer>=10;)this.grenadeTimer-=10,this.grenadeCount+=1;for(this.airStrikeTimer+=e;this.airStrikeTimer>=30;)this.airStrikeTimer-=30,this.airStrikeCount+=1}handleGameplayHotkeys(){const e=[["Digit1","potion-health"],["Digit2","potion-dex"],["Digit3","potion-int"],["Digit4","repair-kit"]];for(const[t,n]of e)this.input.consumeAction(t)&&this.usePreparedItem(n);this.input.consumeAction("F4")&&this.useGrenade(),this.input.consumeAction("F5")&&this.useAirStrike()}handleShootRelease(){this.input.consumeShootRelease()&&this.audio.stopWeaponShots(this.getAliveSoldiers().map(e=>e.definition.soundId),90)}usePreparedItem(e){this.preparation.useItem(e)&&(e==="potion-health"&&this.healMostWoundedSoldier(35),e==="repair-kit"&&this.repairBarricade(350))}useGrenade(){if(this.grenadeCount<=0)return;this.grenadeCount-=1;const e=this.enemies.getSnapshot().killed;this.enemies.damageAll(80,6),this.awardIndirectKills(this.enemies.getSnapshot().killed-e),this.audio.playWeaponShot("explosion")}useAirStrike(){if(this.airStrikeCount<=0)return;this.airStrikeCount-=1;const e=this.enemies.getSnapshot().killed;this.enemies.damageAll(160),this.awardIndirectKills(this.enemies.getSnapshot().killed-e),this.audio.playWeaponShot("fallingBomb")}updateSoldierCombatTimers(e){for(const t of this.soldierCombat.values())t.fireCooldown=Math.max(0,t.fireCooldown-e),!(t.reloadTimer<=0)&&(t.reloadTimer-=e,t.reloadTimer<=0&&(t.ammo=t.definition.magazineSize,t.reloadTimer=0))}handleSquadFire(){const e=this.input.consumeShootRequest();if(document.pointerLockElement!==this.hud.getCanvasHost()||!e&&!this.input.isShooting()||this.enemies.getCount()<=0)return;let t=!1;for(const n of this.getAliveSoldiers()){if(n.fireCooldown>0||n.reloadTimer>0)continue;if(n.ammo<=0&&(this.weapon.infiniteAmmo||this.weapon.noReload)&&(n.ammo=n.definition.magazineSize),n.ammo<=0){this.startSoldierReload(n)&&this.audio.playReload();continue}this.weapon.infiniteAmmo||(n.ammo-=1);const i=this.weapon.fireDefinition(this.player.camera,this.enemies,n.definition,this.weapon.damageMultiplier,this.weapon.powerShot,this.aim);n.fireCooldown=1/Math.max(.1,n.definition.fireRate*this.weapon.fireRateMultiplier),i.result!=="none"&&(t=!0,this.audio.playWeaponShot(n.definition.soundId)),(i.result==="hit"||i.result==="killed")&&i.hitPoint&&i.damageAmount&&this.queueFloatingDamage(i.hitEnemyId,i.hitPoint,i.damageAmount,!!i.critical),i.result==="killed"&&this.awardZombieKill(),this.weapon.noReload&&n.ammo<=0?n.ammo=n.definition.magazineSize:n.ammo<=0&&this.startSoldierReload(n)&&this.audio.playReload()}t&&this.weaponView.kick()}reloadLivingSoldiers(){let e=!1;for(const t of this.getAliveSoldiers())e=this.startSoldierReload(t)||e;e&&this.audio.playReload()}startSoldierReload(e){return e.reloadTimer>0||e.ammo>=e.definition.magazineSize||e.magazines<=0?!1:(e.magazines-=1,e.reloadTimer=e.definition.reloadTime*this.weapon.reloadMultiplier,!0)}updateTurretFire(e){const t=this.barricadeTarget.z-2.8;for(const[n,i]of this.turrets.entries()){if(!i.installed||i.shield<=0)continue;i.fireTimer=Math.max(0,(i.fireTimer??0)-e);const s=(this.turretFireCooldowns.get(n)??0)-e;if(s>0){this.turretFireCooldowns.set(n,s);continue}if(!this.enemies.hasEnemyInRange(t))continue;const a=this.weapon.powerShot?999999:i.damage??40,o=i.fireRate??2,l=this.enemies.getSnapshot().killed,c=this.enemies.damageFirstInRange(a,t);if(!c)continue;this.awardIndirectKills(this.enemies.getSnapshot().killed-l),this.queueFloatingDamage(c.enemyId,c.point,a,this.weapon.powerShot),this.audio.playWeaponShot("turret1"),i.fireTimer=.06;const h=(this.turretShotCounts.get(n)??0)+1;this.turretShotCounts.set(n,h%100),this.turretFireCooldowns.set(n,h%100===0?1:1/o)}}awardZombieKill(){const e=50+Math.floor(Math.random()*101),t=20+Math.floor(Math.random()*61);this.score+=e,this.preparation.addGold(t)}queueFloatingDamage(e,t,n,i){if(typeof e!="number"){this.showFloatingDamage(void 0,t,n,i);return}const s=this.pendingDamagePopups.get(e);if(s){s.amount+=n,s.critical=s.critical||i,s.point.copy(t),s.timer=.07;return}this.pendingDamagePopups.set(e,{amount:n,critical:i,point:t.clone(),timer:.07})}updateFloatingDamagePopups(e){for(const[t,n]of this.pendingDamagePopups.entries())n.timer-=e,!(n.timer>0)&&(this.pendingDamagePopups.delete(t),this.showFloatingDamage(t,n.point,n.amount,n.critical))}showFloatingDamage(e,t,n,i){const s=typeof e=="number"?this.enemies.getOverheadScreenPosition(e,this.player.camera):null,a=t.clone().project(this.player.camera),o=(s==null?void 0:s.x)??(a.x*.5+.5)*100,l=(s==null?void 0:s.y)??(-a.y*.5+.5)*100;o>=-10&&o<=110&&l>=-10&&l<=110&&this.hud.showFloatingDamage(n,o,l,i)}awardIndirectKills(e){for(let t=0;t<Math.max(0,e);t+=1)this.awardZombieKill()}damageSoldier(e){const t=this.getAliveSoldiers()[0];t&&(t.health=Math.max(0,t.health-e*this.player.incomingDamageMultiplier),t.health<=0&&t.soldierId===this.activeSoldierId&&(this.activeSoldierId=null,this.activeWeaponId=null))}healMostWoundedSoldier(e){const t=this.getAliveSoldiers().filter(n=>n.health<n.maxHealth).sort((n,i)=>n.health/n.maxHealth-i.health/i.maxHealth)[0];t&&(t.health=Math.min(t.maxHealth,t.health+e))}damageBarricade(e){this.barricade.health=Math.max(0,this.barricade.health-e)}repairBarricade(e){this.barricade.health=Math.min(this.barricade.maxHealth,this.barricade.health+e)}handleMainControlHotkeys(){const e=[["F1","menu"],["F2","settings"],["F3","pause"],["Space","pause"]];for(const[t,n]of e)if(this.input.consumeAction(t)){if(this.mode==="playing"){this.openMainControlPanel(n);return}if(this.mode==="paused"){this.pausedControl===n?this.resumeFromMainControlPanel():this.openMainControlPanel(n);return}}}openMainControlPanel(e){if(this.mode="paused",this.pausedControl=e,this.stopLivingSoldierWeaponShots(),document.exitPointerLock(),e==="menu"){this.hud.showMainMenu({onPreparation:()=>this.openPreparation(!0),onExit:()=>this.resetToFreshIntro(),onCheat:()=>this.openCheatMenu(),onResume:()=>this.resumeFromMainControlPanel()});return}const t={menu:"Run menu selected with F1.",settings:"Settings will be implemented later.",pause:"Game paused with F3."},n=e==="settings"?"SETTINGS":e.toUpperCase();this.hud.showMainControlPanel(n,t[e],()=>this.resumeFromMainControlPanel())}openCheatMenu(){this.mode="paused",this.pausedControl="menu",this.hud.showCheatMenu({infiniteAmmo:this.weapon.infiniteAmmo,powerShot:this.weapon.powerShot,noReload:this.weapon.noReload},{onInfiniteAmmo:()=>{this.cheatModeUsed=!0,this.weapon.infiniteAmmo=!this.weapon.infiniteAmmo,this.openCheatMenu()},onPowerShot:()=>{this.cheatModeUsed=!0,this.weapon.powerShot=!this.weapon.powerShot,this.openCheatMenu()},onNoReload:()=>{this.cheatModeUsed=!0,this.weapon.noReload=!this.weapon.noReload,this.openCheatMenu()},onJumpStage:()=>this.jumpToStageFromCheat(),onRank:()=>this.showRankPlaceholder(),onBack:()=>this.openMainControlPanel("menu")})}jumpToStageFromCheat(){const e=window.prompt("Jump to stage number",String(Math.max(1,this.waves.stage))),t=Number.parseInt(e??"",10);Number.isFinite(t)&&t>0&&(this.enemies.clear(),this.upgrades.resetStageUpgrades(),this.waves.jumpToWave(t),this.setStageBackground(this.waves.stage),this.setupCombatantsFromPreparation(),this.resetBarricade(),this.resetAim(),this.alignStageMapToBackground(),this.cheatModeUsed=!0,this.cheatJumpUsed=!0),this.resumeFromMainControlPanel()}showRankPlaceholder(){this.audio.playRank(),this.hud.showTopRanks(()=>this.openCheatMenu())}forceGameOver(){this.mode="gameover",this.pausedControl=null,this.stopLivingSoldierWeaponShots(),this.audio.playGameOver(),this.hud.showGameOver(this.score,this.waves.stage,()=>this.resetToFreshIntro(),()=>this.audio.playRank())}exitToIntro(){this.mode="ready",this.pausedControl=null,this.stopLivingSoldierWeaponShots(),this.enemies.clear(),this.hud.hideOverlay(),document.exitPointerLock(),this.showIntro()}resetToFreshIntro(){this.mode="ready",this.pausedControl=null,this.preparationFromRun=!1,this.stopLivingSoldierWeaponShots(),document.exitPointerLock(),this.preparation.reset(),this.resetRunProgress(),this.resetAim(),this.alignStageMapToBackground(),this.hud.hideOverlay(),this.showIntro()}resumeFromMainControlPanel(){this.mode==="paused"&&(this.pausedControl=null,this.mode="playing",this.audio.unlock(),this.hud.hideOverlay(),this.hud.getCanvasHost().requestPointerLock())}resumeFromPreparation(){this.preparationFromRun=!1,this.audio.unlock(),this.setupCombatantsFromPreparation(),this.alignStageMapToBackground(),this.pausedControl=null,this.mode="playing",this.hud.hideOverlay(),this.hud.getCanvasHost().requestPointerLock()}setupCombatantsFromPreparation(){const e=this.preparation.snapshot(),t=this.getPreparedMagazineCount(e);this.soldierCombat.clear(),this.activeSoldierId=null,this.activeWeaponId=null,this.turretFireCooldowns.clear(),this.turretShotCounts.clear();const n=e.soldiers.filter(i=>i.hired);this.weaponView.prepareWeapons(n.map(i=>i.equippedWeaponId));for(const[i,s]of n.entries()){const a=e.weapons.find(c=>c.id===s.equippedWeaponId)??e.weapons[0],o=this.getDerivedCombatStats(s,a),l=this.createWeaponDefinition(s,a);this.soldierCombat.set(s.id,{soldierId:s.id,health:o.health,maxHealth:o.health,fireCooldown:i*.12,reloadTimer:0,ammo:l.magazineSize,magazines:t,weaponId:s.equippedWeaponId,definition:l})}for(this.turrets=e.turretSlots.map(i=>({installed:!!i,id:i==null?void 0:i.id,name:i==null?void 0:i.name,image:i==null?void 0:i.image,kind:i==null?void 0:i.kind,damage:i==null?void 0:i.damage,fireRate:i==null?void 0:i.fireRate,fireTimer:0,shield:(i==null?void 0:i.maxShield)??0,maxShield:(i==null?void 0:i.maxShield)??100}));this.turrets.length<si;)this.turrets.push({installed:!1,fireTimer:0,shield:0,maxShield:100});this.syncActiveSoldierWeapon()}syncActiveSoldierWeapon(){const e=this.preparation.snapshot(),t=e.soldiers.find(a=>a.id===this.activeSoldierId&&a.hired&&this.isSoldierAlive(a.id))??e.soldiers.find(a=>a.hired&&this.isSoldierAlive(a.id));if(!t){this.activeSoldierId=null,this.activeWeaponId=null,this.player.health=0;return}const n=this.soldierCombat.get(t.id);n&&(this.player.maxHealth=n.maxHealth,this.player.health=n.health);const i=this.getAliveSoldiers().map(a=>a.weaponId);this.weaponView.setWeapons(i,t.equippedWeaponId);const s=e.weapons.find(a=>a.id===t.equippedWeaponId)??e.weapons[0];this.activeSoldierId===t.id&&this.activeWeaponId===t.equippedWeaponId||(this.activeSoldierId=t.id,this.activeWeaponId=t.equippedWeaponId,this.weapon.setDefinition((n==null?void 0:n.definition)??this.createWeaponDefinition(t,s)))}getAliveSoldiers(){return[...this.soldierCombat.values()].filter(e=>e.health>0)}stopLivingSoldierWeaponShots(){this.audio.stopWeaponShots(this.getAliveSoldiers().map(e=>e.definition.soundId))}isSoldierAlive(e){var t;return(((t=this.soldierCombat.get(e))==null?void 0:t.health)??0)>0}getSoldierHealthSnapshots(e){return e.soldiers.map(t=>{const n=this.soldierCombat.get(t.id);return{soldierId:t.id,health:(n==null?void 0:n.health)??0,maxHealth:(n==null?void 0:n.maxHealth)??1,ammo:(n==null?void 0:n.ammo)??0,magazines:(n==null?void 0:n.magazines)??0}})}getPreparedMagazineCount(e){var t;return((t=e.items.find(n=>n.id==="magazine"))==null?void 0:t.count)??0}createWeaponDefinition(e,t){const n=this.getDerivedCombatStats(e,t);return{id:t.id,name:t.name,damage:n.damage,fireRate:n.fireRate,criticalChance:n.criticalChance,magazineSize:t.magazineSize,reloadTime:t.reloadTime,range:t.range,spread:t.spread,soundId:t.soundId}}getDerivedCombatStats(e,t){const n=e.stats.str*t.statScale.str,i=e.stats.dex*t.statScale.dex,s=e.stats.int*t.statScale.int;return{str:n,dex:i,int:s,health:Math.max(1,Math.ceil(n)*10),damage:t.damage*(n/100),fireRate:t.fireRate*(i/100),criticalChance:Math.min(.95,t.criticalChance*(s/100))}}applyWaveClearRewards(){const e={gold:this.randomInt(1e4,5e4),rubi:this.randomInt(1,10),magazines:10};this.preparation.addGold(e.gold),this.preparation.addRubi(e.rubi),this.preparation.addItemCount("magazine",e.magazines);for(const t of this.soldierCombat.values())t.magazines+=e.magazines;return e}applyStageClearRewards(){this.applyWaveClearRewards();const e={gold:this.randomInt(5e4,1e5),rubi:this.randomInt(10,20),magazines:0};return this.preparation.addGold(e.gold),this.preparation.addRubi(e.rubi),e}openUpgradeMenu(e){this.mode="upgrade",this.stopLivingSoldierWeaponShots(),document.exitPointerLock(),this.hud.showUpgrades(this.upgrades.getChoices(),e,t=>{t.apply(),this.audio.unlock(),this.hud.hideOverlay(),this.waves.continueAfterUpgrade(),this.alignStageMapToBackground(),this.mode="playing",this.hud.getCanvasHost().requestPointerLock()})}openStageClearPanel(e){this.mode="upgrade",this.stopLivingSoldierWeaponShots(),document.exitPointerLock(),this.upgrades.resetStageUpgrades();const t=this.waves.stage<ln.stageBackgrounds.length;this.hud.showStageClear(this.waves.stage,e,t,()=>{if(this.audio.unlock(),this.hud.hideOverlay(),!t){this.resetToFreshIntro();return}this.waves.continueAfterStageClear(),this.setStageBackground(this.waves.stage),this.resetBarricade(),this.setupCombatantsFromPreparation(),this.resetAim(),this.alignStageMapToBackground(),this.mode="playing",this.hud.getCanvasHost().requestPointerLock()})}randomInt(e,t){return Math.floor(e+Math.random()*(t-e+1))}configureRenderer(){this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),this.renderer.setClearColor("#111518"),this.renderer.domElement.className="game-canvas",this.hud.getCanvasHost().prepend(this.renderer.domElement)}createWorld(){this.scene.background=new Fe("#111518"),this.scene.fog=new Es("#111518",34,74),this.setStageBackground(1);const e=new _t(new dn(84,84),new Pn({color:"#0d1412",transparent:!0,opacity:.5,depthWrite:!1}));e.rotation.x=-Math.PI/2,this.scene.add(e);const t=new _t(new dn(17,84),new Pn({color:"#1c2424",transparent:!0,opacity:.5,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.set(0,.014,-11),this.scene.add(t);const n=new Pn({color:"#d9c778",transparent:!0,opacity:.5,depthWrite:!1});for(let a=-44;a<8;a+=7){const o=new _t(new dn(.26,3.2),n);o.rotation.x=-Math.PI/2,o.position.set(0,.05,a),this.scene.add(o)}const i=new kp("#d9f7ff",.42),s=new zp("#fff0c9",1.7);s.position.set(-8,14,6),this.scene.add(i,s,this.player.camera)}bindEvents(){window.addEventListener("resize",this.resize),document.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("beforeunload",()=>{cancelAnimationFrame(this.animationId),this.input.dispose()})}setStageBackground(e){const t=(Math.max(1,e)-1)%ln.stageBackgrounds.length,n=t+1;this.currentStageNumber=n;const i=this.stageBackgrounds.get(n);if(i){this.scene.background=i,this.loadStageRoadProfile(n);return}const s=this.textureLoader.load(ln.stageBackgrounds[t]);s.colorSpace=At,this.stageBackgrounds.set(n,s),this.scene.background=s,this.loadStageRoadProfile(n)}loadStageRoadProfile(e){this.roadMaskLoader.load(e,!0).then(t=>{this.currentStageNumber===e&&(this.stageRoadProfile=t,this.waves.setRoadProfile(t),this.alignStageMapToBackground())})}}const Yo=document.querySelector("#app");if(!Yo)throw new Error("App root was not found.");const rm=new im(Yo);rm.start();
