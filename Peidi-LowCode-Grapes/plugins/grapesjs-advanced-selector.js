/*! @silexlabs/grapesjs-advanced-selector - 1.4.0 */
!function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define([],t):'object'==typeof exports?exports["@silexlabs/grapesjs-advanced-selector"]=t():e["@silexlabs/grapesjs-advanced-selector"]=t()}('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:this,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var s in o)e.o(o,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:o[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(e,'__esModule',{value:!0})}},t={};e.r(t),e.d(t,{default:()=>to,name:()=>eo});const o=globalThis,s=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap;class l{constructor(e,t,o){if(this._$cssResult$=!0,o!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const o=void 0!==t&&1===t.length;o&&(e=i.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&i.set(t,e))}return e}toString(){return this.cssText}}const n=e=>new l("string"==typeof e?e:e+"",void 0,r),a=(e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,o,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1]),e[0]);return new l(o,e,r)},c=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return n(t)})(e):e,{is:d,defineProperty:h,getOwnPropertyDescriptor:p,getOwnPropertyNames:u,getOwnPropertySymbols:v,getPrototypeOf:m}=Object,S=globalThis,g=S.trustedTypes,f=g?g.emptyScript:"",y=S.reactiveElementPolyfillSupport,b=(e,t)=>e,C={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},$=(e,t)=>!d(e,t),_={attribute:!0,type:String,converter:C,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),S.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(e,o,t);void 0!==s&&h(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){const{get:s,set:r}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const i=s?.call(this);r?.call(this,t),this.requestUpdate(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...u(e),...v(e)];for(const o of t)this.createProperty(o,e[o])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,o]of t)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const o=this._$Eu(e,t);void 0!==o&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eu(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(s)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const s of t){const t=document.createElement("style"),r=o.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=s.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(void 0!==s&&!0===o.reflect){const r=(void 0!==o.converter?.toAttribute?o.converter:C).toAttribute(t,o.type);this._$Em=e,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){const o=this.constructor,s=o._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=o.getPropertyOptions(s),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:C;this._$Em=s,this[s]=r.fromAttribute(t,e.type)??this._$Ej?.get(s)??null,this._$Em=null}}requestUpdate(e,t,o){if(void 0!==e){const s=this.constructor,r=this[e];if(o??=s.getPropertyOptions(e),!((o.hasChanged??$)(r,t)||o.useDefault&&o.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,o))))return;this.C(e,t,o)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:s,wrapped:r},i){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),!0!==r||void 0!==i)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,o]of e){const{wrapped:e}=o,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,o,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[b("elementProperties")]=new Map,A[b("finalized")]=new Map,y?.({ReactiveElement:A}),(S.reactiveElementVersions??=[]).push("2.1.0");const E=globalThis,W=E.trustedTypes,U=W?W.createPolicy("lit-html",{createHTML:e=>e}):void 0,w="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+z,R=`<${T}>`,P=document,L=()=>P.createComment(""),k=e=>null===e||"object"!=typeof e&&"function"!=typeof e,I=Array.isArray,x=e=>I(e)||"function"==typeof e?.[Symbol.iterator],N="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,D=/>/g,M=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,F=/"/g,B=/^(?:script|style|textarea|title)$/i,V=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),G=V(1),q=(V(2),V(3),Symbol.for("lit-noChange")),Y=Symbol.for("lit-nothing"),Z=new WeakMap,J=P.createTreeWalker(P,129);function K(e,t){if(!I(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==U?U.createHTML(t):t}const Q=(e,t)=>{const o=e.length-1,s=[];let r,i=2===t?"<svg>":3===t?"<math>":"",l=O;for(let t=0;t<o;t++){const o=e[t];let n,a,c=-1,d=0;for(;d<o.length&&(l.lastIndex=d,a=l.exec(o),null!==a);)d=l.lastIndex,l===O?"!--"===a[1]?l=j:void 0!==a[1]?l=D:void 0!==a[2]?(B.test(a[2])&&(r=RegExp("</"+a[2],"g")),l=M):void 0!==a[3]&&(l=M):l===M?">"===a[0]?(l=r??O,c=-1):void 0===a[1]?c=-2:(c=l.lastIndex-a[2].length,n=a[1],l=void 0===a[3]?M:'"'===a[3]?F:H):l===F||l===H?l=M:l===j||l===D?l=O:(l=M,r=void 0);const h=l===M&&e[t+1].startsWith("/>")?" ":"";i+=l===O?o+R:c>=0?(s.push(n),o.slice(0,c)+w+o.slice(c)+z+h):o+z+(-2===c?t:h)}return[K(e,i+(e[o]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class X{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let r=0,i=0;const l=e.length-1,n=this.parts,[a,c]=Q(e,t);if(this.el=X.createElement(a,o),J.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=J.nextNode())&&n.length<l;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(w)){const t=c[i++],o=s.getAttribute(e).split(z),l=/([.?@])?(.*)/.exec(t);n.push({type:1,index:r,name:l[2],strings:o,ctor:"."===l[1]?re:"?"===l[1]?ie:"@"===l[1]?le:se}),s.removeAttribute(e)}else e.startsWith(z)&&(n.push({type:6,index:r}),s.removeAttribute(e));if(B.test(s.tagName)){const e=s.textContent.split(z),t=e.length-1;if(t>0){s.textContent=W?W.emptyScript:"";for(let o=0;o<t;o++)s.append(e[o],L()),J.nextNode(),n.push({type:2,index:++r});s.append(e[t],L())}}}else if(8===s.nodeType)if(s.data===T)n.push({type:2,index:r});else{let e=-1;for(;-1!==(e=s.data.indexOf(z,e+1));)n.push({type:7,index:r}),e+=z.length-1}r++}}static createElement(e,t){const o=P.createElement("template");return o.innerHTML=e,o}}function ee(e,t,o=e,s){if(t===q)return t;let r=void 0!==s?o._$Co?.[s]:o._$Cl;const i=k(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),void 0===i?r=void 0:(r=new i(e),r._$AT(e,o,s)),void 0!==s?(o._$Co??=[])[s]=r:o._$Cl=r),void 0!==r&&(t=ee(e,r._$AS(e,t.values),r,s)),t}class te{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:o}=this._$AD,s=(e?.creationScope??P).importNode(t,!0);J.currentNode=s;let r=J.nextNode(),i=0,l=0,n=o[0];for(;void 0!==n;){if(i===n.index){let t;2===n.type?t=new oe(r,r.nextSibling,this,e):1===n.type?t=new n.ctor(r,n.name,n.strings,this,e):6===n.type&&(t=new ne(r,this,e)),this._$AV.push(t),n=o[++l]}i!==n?.index&&(r=J.nextNode(),i++)}return J.currentNode=P,s}p(e){let t=0;for(const o of this._$AV)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class oe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ee(this,e,t),k(e)?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):x(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Y&&k(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:o}=e,s="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=X.createElement(K(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new te(s,this),o=e.u(this.options);e.p(t),this.T(o),this._$AH=e}}_$AC(e){let t=Z.get(e.strings);return void 0===t&&Z.set(e.strings,t=new X(e)),t}k(e){I(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,s=0;for(const r of e)s===t.length?t.push(o=new oe(this.O(L()),this.O(L()),this,this.options)):o=t[s],o._$AI(r),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class se{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,r){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=Y}_$AI(e,t=this,o,s){const r=this.strings;let i=!1;if(void 0===r)e=ee(this,e,t,0),i=!k(e)||e!==this._$AH&&e!==q,i&&(this._$AH=e);else{const s=e;let l,n;for(e=r[0],l=0;l<r.length-1;l++)n=ee(this,s[o+l],t,l),n===q&&(n=this._$AH[l]),i||=!k(n)||n!==this._$AH[l],n===Y?e=Y:e!==Y&&(e+=(n??"")+r[l+1]),this._$AH[l]=n}i&&!s&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class re extends se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}class ie extends se{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class le extends se{constructor(e,t,o,s,r){super(e,t,o,s,r),this.type=5}_$AI(e,t=this){if((e=ee(this,e,t,0)??Y)===q)return;const o=this._$AH,s=e===Y&&o!==Y||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==Y&&(o===Y||s);s&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}}const ae={M:w,P:z,A:T,C:1,L:Q,R:te,D:x,V:ee,I:oe,H:se,N:ie,U:le,B:re,F:ne},ce=E.litHtmlPolyfillSupport;ce?.(X,oe),(E.litHtmlVersions??=[]).push("3.3.0");const de=(e,t,o)=>{const s=o?.renderBefore??t;let r=s._$litPart$;if(void 0===r){const e=o?.renderBefore??null;s._$litPart$=r=new oe(t.insertBefore(L(),e),e,void 0,o??{})}return r._$AI(e),r},he=globalThis;class pe extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=de(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}pe._$litElement$=!0,pe["finalized"]=!0,he.litElementHydrateSupport?.({LitElement:pe});const ue=he.litElementPolyfillSupport;ue?.({LitElement:pe});var ve;(he.litElementVersions??=[]).push("4.2.0"),function(e){e["HOVER"]="hover",e["ACTIVE"]="active",e["FOCUS"]="focus",e["FOCUS_WITHIN"]="focus-within",e["FOCUS_VISIBLE"]="focus-visible",e["VISITED"]="visited",e["LINK"]="link",e["ANY_LINK"]="any-link",e["FIRST_CHILD"]="first-child",e["LAST_CHILD"]="last-child",e["NTH_CHILD"]="nth-child",e["NTH_LAST_CHILD"]="nth-last-child",e["ONLY_CHILD"]="only-child",e["FIRST_OF_TYPE"]="first-of-type",e["LAST_OF_TYPE"]="last-of-type",e["NTH_OF_TYPE"]="nth-of-type",e["NTH_LAST_OF_TYPE"]="nth-last-of-type",e["ONLY_OF_TYPE"]="only-of-type",e["EMPTY"]="empty",e["ROOT"]="root",e["SCOPE"]="scope",e["TARGET"]="target",e["BEFORE"]="before",e["AFTER"]="after",e["FIRST_LINE"]="first-line",e["FIRST_LETTER"]="first-letter",e["ENABLED"]="enabled",e["DISABLED"]="disabled",e["CHECKED"]="checked",e["INDETERMINATE"]="indeterminate",e["DEFAULT"]="default",e["VALID"]="valid",e["INVALID"]="invalid",e["IN_RANGE"]="in-range",e["OUT_OF_RANGE"]="out-of-range",e["REQUIRED"]="required",e["OPTIONAL"]="optional",e["READ_ONLY"]="read-only",e["READ_WRITE"]="read-write",e["LANG"]="lang",e["DIR"]="dir"}(ve||(ve={}));const me=[{type:ve.HOVER,hasParam:!1,sentencePre:'On mouse',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:hover'},{type:ve.ACTIVE,hasParam:!1,sentencePre:'When',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:active'},{type:ve.FOCUS,hasParam:!1,sentencePre:'When it has the',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:focus'},{type:ve.FOCUS_WITHIN,hasParam:!1,sentencePre:'When the',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within'},{type:ve.FOCUS_VISIBLE,hasParam:!1,sentencePre:'When the',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible'},{type:ve.VISITED,hasParam:!1,sentencePre:'When',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:visited'},{type:ve.LINK,hasParam:!1,sentencePre:'When it is a',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:link'},{type:ve.ANY_LINK,hasParam:!1,sentencePre:'When it is a',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link'},{type:ve.FIRST_CHILD,hasParam:!1,sentencePre:'When it is the',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child'},{type:ve.LAST_CHILD,hasParam:!1,sentencePre:'When it is the',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child'},{type:ve.NTH_CHILD,hasParam:!0,sentencePre:'When it is the',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child'},{type:ve.NTH_LAST_CHILD,hasParam:!0,sentencePre:'When it is the',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child'},{type:ve.ONLY_CHILD,hasParam:!1,sentencePre:'When it is the',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child'},{type:ve.FIRST_OF_TYPE,hasParam:!1,sentencePre:'When it is the',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type'},{type:ve.LAST_OF_TYPE,hasParam:!1,sentencePre:'When it is the',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type'},{type:ve.NTH_OF_TYPE,hasParam:!0,sentencePre:'When it is the',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type'},{type:ve.NTH_LAST_OF_TYPE,hasParam:!0,sentencePre:'When it is the',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type'},{type:ve.ONLY_OF_TYPE,hasParam:!1,sentencePre:'When it is the',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type'},{type:ve.EMPTY,hasParam:!1,sentencePre:'When it is',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:empty'},{type:ve.ROOT,hasParam:!1,sentencePre:'When it is the',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:root'},{type:ve.SCOPE,hasParam:!1,sentencePre:'When it is within',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:scope'},{type:ve.TARGET,hasParam:!1,sentencePre:'When URL matches',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:target'},{type:ve.BEFORE,hasParam:!1,sentencePre:'Style the',sentencePost:'pseudo-element',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/::before'},{type:ve.AFTER,hasParam:!1,sentencePre:'Style the',sentencePost:'pseudo-element',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/::after'},{type:ve.FIRST_LINE,hasParam:!1,sentencePre:'Style the',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line'},{type:ve.FIRST_LETTER,hasParam:!1,sentencePre:'Style the',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter'},{type:ve.ENABLED,hasParam:!1,sentencePre:'When it is',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled'},{type:ve.DISABLED,hasParam:!1,sentencePre:'When it is',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled'},{type:ve.CHECKED,hasParam:!1,sentencePre:'When it is',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:checked'},{type:ve.INDETERMINATE,hasParam:!1,sentencePre:'When it is',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate'},{type:ve.REQUIRED,hasParam:!1,sentencePre:'When it is',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:required'},{type:ve.OPTIONAL,hasParam:!1,sentencePre:'When it is',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:optional'},{type:ve.LANG,hasParam:!0,sentencePre:'When it matches',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:lang'},{type:ve.DIR,hasParam:!0,sentencePre:'When the text direction is',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:dir'}];function Se(e){var t;return e.hasParam?`:${e.type}(${null!==(t=e.param)&&void 0!==t?t:''})`:`:${e.type}`}var ge,fe;!function(e){e["TAG"]="tag",e["CUSTOM_TAG"]="custom-tag",e["CLASS"]="class",e["ID"]="id",e["ATTRIBUTE"]="attribute",e["UNIVERSAL"]="universal",e["UNKNOWN"]="unknown"}(ge||(ge={})),function(e){e["EQUALS"]="=",e["INCLUDES"]="~=",e["DASH_MATCH"]="|=",e["PREFIX_MATCH"]="^=",e["SUFFIX_MATCH"]="$=",e["SUBSTRING_MATCH"]="*="}(fe||(fe={}));const ye=['id','class','style','name','type','value','placeholder','href','src','alt','title','width','height','disabled','checked','selected','hidden','readonly','multiple','required','min','max','step','pattern','autocomplete','autofocus','spellcheck','contenteditable','dir','lang','tabindex','accesskey','role'],be=['a','abbr','address','area','article','aside','audio','b','base','bdi','bdo','blockquote','body','br','button','canvas','caption','cite','code','col','colgroup','data','datalist','dd','del','details','dfn','dialog','div','dl','dt','em','embed','fieldset','figcaption','figure','footer','form','h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','i','iframe','img','input','ins','kbd','label','legend','li','link','main','map','mark','meta','meter','nav','noscript','object','ol','optgroup','option','output','p','param','picture','pre','progress','q','rb','rp','rt','rtc','ruby','s','samp','script','section','select','slot','small','source','span','strong','style','sub','summary','sup','table','tbody','td','template','textarea','tfoot','th','thead','time','title','tr','track','u','ul','var','video','wbr'],Ce=[' '],$e={[ge.TAG]:{color:'var(--gjs-color-blue, #3b97e3)'},[ge.CUSTOM_TAG]:{color:'var(--gjs-color-blue, #3b97e3)'},[ge.CLASS]:{color:'var(--gjs-color-green, #62c462)'},[ge.ID]:{color:'var(--gjs-color-yellow, #ffca6f)'},[ge.ATTRIBUTE]:{color:'var(--gjs-color-yellow, #ffca6f)'},[ge.UNIVERSAL]:{color:'var(--gjs-color-red, #dd3636)'},[ge.UNKNOWN]:{color:'var(--gjs-color-red, #dd3636)'}},_e='•',Ae='#',Ee='[ ]',We='',Ue='⚛',we='⚛',ze='?';function Te(e,t,o=!0){if(e.type!==t.type)return!1;if(!o&&e.active!==t.active)return!1;switch(e.type){case ge.TAG:case ge.CUSTOM_TAG:case ge.CLASS:case ge.ID:{const o=t;return e.value===o.value}case ge.ATTRIBUTE:{const o=e,s=t;return o.operator===s.operator&&((!o.operator||o.attributeValue===s.attributeValue)&&o.value===s.value)}case ge.UNIVERSAL:return!0;default:return!1}}function Re(e){var t;switch(e.type){case ge.ATTRIBUTE:{const o=e;return`[${o.value||''}${o.operator?`${o.operator}"${null!==(t=o.attributeValue)&&void 0!==t?t:''}"`:''}]`}case ge.CLASS:return`.${e.value||''}`;case ge.ID:return`#${e.value||''}`;case ge.TAG:case ge.CUSTOM_TAG:return e.value||'';case ge.UNIVERSAL:return'*';default:return''}}function Pe(e){if(e.type===ge.ATTRIBUTE){return`[${e.value||''}]`}return Re(e)}function Le(e){if(''===e)return e;if('*'===e)return e;const t=Ce.map((e=>`\\${e}`)).join('|'),o=e.toLowerCase().replace(new RegExp(t,'g'),'-');if(o.match(/^[0-9-]/))return!1;if(o.startsWith('-'))return!1;if(o.match(/^\[[a-z-]*\]?$/)&&ye.includes(o.replace('[','').replace(']','')))return o.replace(']','')+']';const s=e.match(/^\[([\w-]+)\s*=\s*"([^"]*)"?\]?$/);if(s){const[,e,t]=s;if(ye.includes(e))return`[${e}="${t}"]`}return o.match(/^\[data-[_a-zA-Z]+[_a-zA-Z0-9]*\]?$/)?o.replace(']','')+']':o.match(/^[a-z-]*[a-z]$/)&&o.includes('-')&&window.customElements.get(o)||o.match(/^[a-z]*$/)&&be.includes(o)||o.match(/^\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/)||o.match(/^#-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/)?o:!!o.match(/^-?[_a-zA-Z]+[_a-zA-Z0-9-]*[_a-zA-Z0-9]$/)&&'.'+o}function ke(e,t=!1){if(!t&&!e.active)return 0;switch(e.type){case ge.TAG:return 1;case ge.CLASS:case ge.ATTRIBUTE:case ge.CUSTOM_TAG:return 10;case ge.ID:return 100;case ge.UNIVERSAL:return 0;default:return console.warn(`Unknown selector type: ${e.type}`),0}}function Ie(e){switch(e.type){case ge.TAG:case ge.CUSTOM_TAG:return 1;case ge.ID:return 2;case ge.CLASS:return 3;case ge.ATTRIBUTE:return 4;case ge.UNIVERSAL:return 5;default:return 6}}function xe(e,t=!1){var o;if(e.selectors.length>1&&(null===(o=e.selectors.find((e=>'universal'===e.type)))||void 0===o?void 0:o.active))return console.warn('The universal selector can only be used alone'),`*${e.pseudoClass?Se(e.pseudoClass):''}`;const s=e.selectors.filter((e=>e.active)).sort(((e,t)=>Ie(e)-Ie(t))).map(Re).join('');return`${s}${!t&&e.pseudoClass?Se(e.pseudoClass):''}`}function Ne(e){return e.selectors.filter((e=>e.active)).reduce(((e,t)=>e+ke(t)),0)+(e.pseudoClass?10:0)}function Oe(e){const t=e.match(/(#[-\w]+)|(\.[-\w]+)|(\*)|([a-zA-Z][-a-zA-Z0-9]*)|(\[([a-zA-Z][-a-zA-Z0-9]*)\s*([~|^$*]?=)?\s*"?([^"\]]*)"?\])|(:[-\w]+(\([^)]*\))?)/g);if(!t)throw new Error(`Invalid selector: ${e}`);const o=[];let s;return t.forEach((e=>{if(e.startsWith('#'))o.push({type:ge.ID,value:e.slice(1),active:!0});else if(e.startsWith('.'))o.push({type:ge.CLASS,value:e.slice(1),active:!0});else if(e.startsWith('[')){const t=e.match(/^\[([a-zA-Z][-a-zA-Z0-9]*)\s*([~|^$*]?=)?\s*"?([^"\]]*)"?\]$/);if(t){const e={type:ge.ATTRIBUTE,value:t[1],attributeValue:t[3]||'',active:!0};t[2]&&(e.operator=t[2]),o.push(e)}}else if('*'===e)o.push({type:ge.UNIVERSAL,active:!0});else if(e.match(/^[a-zA-Z][-a-zA-Z0-9]*$/))o.push({type:ge.TAG,value:e,active:!0});else if(e.startsWith(':')){const t=e.match(/:([-\w]+)(\([^)]*\))?/);if(t){if(s={...me.find((e=>e.type===t[1]))},!s)throw new Error(`Pseudo-class not found: ${t[1]}`);s.hasParam&&t[2]&&(s={...s,param:t[2].slice(1,-1)})}}})),s?{selectors:o,pseudoClass:s}:{selectors:o}}function je(e,t){const o=[...e.selectors];return t.selectors.forEach((e=>{o.some((t=>t.type===e.type&&t.value===e.value))||o.push(e)})),{selectors:o,pseudoClass:e.pseudoClass||t.pseudoClass||null}}function De(e,t){return e.map((e=>{const o=t.find((t=>t.type===e.type&&t.value===e.value));return{...e,active:!!o&&o.active}}))}var Me;!function(e){e["HAS"]="has",e["NOT"]="not",e["IS"]="is",e["WHERE"]="where",e["CHILD"]=">",e["DESCENDANT"]=" ",e["ADJACENT"]="+",e["GENERAL_SIBLING"]="~"}(Me||(Me={}));const He=[{type:Me.DESCENDANT,hasParam:!1,sentencePre:'When it is',displayName:'inside of',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator',isCombinator:!0,stringRepresentation:' '},{type:Me.CHILD,hasParam:!1,sentencePre:'When it is a',displayName:'direct child of',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator',isCombinator:!0,stringRepresentation:' > '},{type:Me.ADJACENT,hasParam:!1,sentencePre:'When it is',displayName:'adjacent to',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator',isCombinator:!0,stringRepresentation:' + '},{type:Me.GENERAL_SIBLING,hasParam:!1,sentencePre:'When it is',displayName:'after',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator',isCombinator:!0,stringRepresentation:' ~ '},{type:Me.HAS,hasParam:!1,sentencePre:'When it',displayName:'contains',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:has',isCombinator:!1,stringRepresentation:':has'},{type:Me.NOT,hasParam:!1,sentencePre:'When it',displayName:'does not match',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:not',isCombinator:!1,stringRepresentation:':not'},{type:Me.IS,hasParam:!1,sentencePre:'When it',displayName:'matches',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:is',isCombinator:!1,stringRepresentation:':is'},{type:Me.WHERE,hasParam:!1,sentencePre:'When it',displayName:'matches (no spec)',helpLink:'https://developer.mozilla.org/en-US/docs/Web/CSS/:where',isCombinator:!1,stringRepresentation:':where'}];function Fe(e,t){const o=t?xe(t):'';if(!o)return'';switch(e.type){case Me.HAS:case Me.NOT:case Me.IS:case Me.WHERE:return`${e.stringRepresentation}(${o})`;case Me.CHILD:case Me.ADJACENT:case Me.GENERAL_SIBLING:case Me.DESCENDANT:return`${e.stringRepresentation}${o}`;default:throw new Error(`Unknown operator type: ${e.type}`)}}function Be(e){const t=He.find((t=>e===t.stringRepresentation));if(!t)throw new Error(`Operator not found: ${e}`);return{...t}}const Ve={mainSelector:{selectors:[]}};function Ge(e,t=!1){var o;return(e.operator?Fe(e.operator,e.relatedSelector):'')?!0===(null===(o=e.operator)||void 0===o?void 0:o.isCombinator)?`${e.relatedSelector?xe(e.relatedSelector,t):''}${Fe(e.operator,e.mainSelector)}`:`${xe(e.mainSelector,t)}${Fe(e.operator,e.relatedSelector)}`:xe(e.mainSelector,t)}function qe(e){return{...e,mainSelector:{...e.mainSelector,pseudoClass:void 0},relatedSelector:e.relatedSelector?{...e.relatedSelector,pseudoClass:void 0}:void 0}}function Ye(e){let t=0;return e.mainSelector&&(t+=Ne(e.mainSelector)),e.relatedSelector&&(t+=Ne(e.relatedSelector)),t}function Ze(e,t){const o=t?{atRule:t}:{},s=e.match(/:(\w+)\((.+)\)$/);if(s){const[,t,r]=s,i=e.replace(s[0],'');return{mainSelector:i?Oe(i):{selectors:[]},operator:Be(`:${t}`),relatedSelector:Oe(r),...o}}const r=e.replace(/ ([>+~]) /,'$1').split(/([>+~ ])/),i=r.shift(),l=r.shift(),n=l&&' '!==l?` ${l} `:l;if(n&&i){const e=r.join('');return{mainSelector:e?Oe(e):{selectors:[]},operator:Be(n),relatedSelector:Oe(i),...o}}return{mainSelector:i?Oe(i):{selectors:[]},...o}}function Je(e,t){return{mainSelector:je(e.mainSelector,t.mainSelector),relatedSelector:e.relatedSelector&&t.relatedSelector?je(e.relatedSelector,t.relatedSelector):e.relatedSelector||t.relatedSelector,operator:e.operator||t.operator,atRule:e.atRule||t.atRule}}const Ke=new Set;function Qe(e,t){var o;if(!t)return'';const s=null===(o=null==e?void 0:e.I18n)||void 0===o?void 0:o.t(t);return s||(Ke.add(t),console.info(`Untranslated key "${t}", call editor.runCommand("i18n:info") to see all untranslated keys`)),s||t}function Xe(e,t){var o;const s=null===(o=e.DeviceManager.getSelected())||void 0===o?void 0:o.get('widthMedia'),r={atRuleType:s?'media':'',atRuleParams:s?`(max-width: ${s})`:''},i=e.CssComposer.getRule(t,r),l=e.CssComposer.setRule(t,null==i?void 0:i.getStyle(),{addStyles:!!(null==i?void 0:i.getStyle()),...r});e.StyleManager.select(l)}function et(e,t,o){if(t.type===o.type)if(Te(t,o))console.warn('No change',t,o);else switch(t.type){case ge.ID:throw new Error('Cannot rename ID selector');case ge.CLASS:!function(e,t,o){if(!t||!o||t===o)return void console.warn('Invalid class names or same names provided.');const s=e.SelectorManager,r=s.get(t);if(!r)return void console.warn(`Class "${t}" not found.`);const i=(e,t)=>{var o;const s=[],r=e.get('selector');if(null===(o=null==r?void 0:r.mainSelector)||void 0===o?void 0:o.selectors){r.mainSelector.selectors.some((e=>e.type===ge.CLASS&&e.value===t))&&s.push(e)}return e.components().forEach((e=>{s.push(...i(e,t))})),s},l=e.Pages.getAll().flatMap((e=>i(e.getMainComponent(),t)));r.set('name',o),l.forEach((e=>{const s=ot(e);tt(e,{...s,mainSelector:{...s.mainSelector,selectors:s.mainSelector.selectors.filter((e=>e.type!==ge.CLASS||e.value!==o)).map((e=>e.type===ge.CLASS&&e.value===t?{...e,value:o}:e))}})}))}(e,t.value,o.value);break;case ge.TAG:throw new Error('Cannot rename ID selector');default:console.error('Cannot rename selector: Unknown Type',{oldSelector:t,newSelector:o})}else console.warn('Cannot rename to a different types',t,o)}function tt(e,t){e.set('selector',{...t});const o=[];t.mainSelector.selectors.forEach((t=>{switch(t.type){case'id':e.setId(t.value);break;case'class':o.push(t.value);break;default:console.warn('Unhandled selector type',t)}}));const s=[...e.getClasses().filter((e=>!o.includes(e))),...o];e.setClass(s)}function ot(e){var t;const o=e.getClasses();return{...null!==(t=e.get('selector'))&&void 0!==t?t:{mainSelector:{selectors:o.map((e=>({type:ge.CLASS,value:e,active:!0})))}}}}function st(e,t,o){var s;if(!o.operator)return[];const r=[];switch(null===(s=o.operator)||void 0===s?void 0:s.type){case Me.HAS:t.forEach((e=>{r.push(...rt(nt(e),o.relatedSelector||{selectors:[]}))}));break;case Me.NOT:r.push(...be.map((e=>({type:ge.TAG,value:e,active:!0})))),t.forEach((t=>{const s=t.getClasses();e.CssComposer.getAll().forEach((e=>{e.getSelectors().forEach((e=>{if(!e.get('private'))if(1!==e.get('type')||s.includes(e.get('name'))){if(2===e.get('type')){const t={type:ge.ID,value:e.get('name'),active:!0};lt(t,o.relatedSelector,r)&&r.push(t)}}else{const t={type:ge.CLASS,value:e.get('name'),active:!0};lt(t,o.relatedSelector,r)&&r.push(t)}}))}))}));break;case Me.IS:case Me.WHERE:r.push(...rt(t,o.relatedSelector||{selectors:[]}));break;case Me.CHILD:t.forEach((e=>{const t=e.parent();t&&r.push(...rt([t],o.relatedSelector||{selectors:[]}))}));break;case Me.DESCENDANT:t.forEach((e=>{r.push(...rt(function(e){const t=[];let o=e.parent();for(;o;)t.push(o),o=o.parent();return t}(e),o.relatedSelector||{selectors:[]}))}));break;case Me.ADJACENT:const s=t.map((e=>at(e)[0])).filter((e=>!!e));r.push(...rt(s,o.relatedSelector||{selectors:[]}));break;case Me.GENERAL_SIBLING:const i=t.flatMap(at).filter((e=>!!e));r.push(...rt(i,o.relatedSelector||{selectors:[]}));break;default:throw console.error('Unhandled operator',o.operator),new Error(`Unhandled operator: ${o.operator}`)}return r}function rt(e,t){const o=[];return e.forEach((e=>{it(e,o,t)})),e.flatMap((e=>e.getClasses())).forEach((e=>{o.some((t=>t.type===ge.CLASS&&t.value===e))||t.selectors.some((t=>t.active&&t.type===ge.CLASS&&t.value===e))||o.push({type:ge.CLASS,value:e,active:!0})})),e.forEach((e=>{if('function'==typeof e.getAttributes){const s=e.getAttributes({noStyle:!0,noClass:!0});Object.keys(s).forEach((e=>{if('id'===e)return;if(o.some((t=>t.type===ge.ATTRIBUTE&&t.value===e)))return;if(t.selectors.some((t=>t.active&&t.type===ge.ATTRIBUTE&&t.value===e)))return;const r={type:ge.ATTRIBUTE,value:e,active:!0};s[e]&&(r.operator=fe.EQUALS,r.attributeValue=s[e]),o.push(r)}))}})),o}function it(e,t,o){const s=e.tagName.toLowerCase(),r={type:ge.TAG,value:s,active:!0};if(lt(r,o,t)&&t.push(r),'body'===s){const e={type:ge.TAG,value:'html',active:!0};lt(e,o,t)&&t.push(e)}}function lt(e,t,o){return!t.selectors.some((t=>Te(t,e)))&&!o.some((t=>Te(t,e)))}function nt(e){return e.components().reduce(((e,t)=>[...e,t,...nt(t)]),[])}function at(e){var t,o;return null!==(o=null===(t=e.parent())||void 0===t?void 0:t.components().filter((t=>t!==e)))&&void 0!==o?o:[]}const ct={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:$},dt=(e=ct,t,o)=>{const{kind:s,metadata:r}=o;let i=globalThis.litPropertyMetadata.get(r);if(void 0===i&&globalThis.litPropertyMetadata.set(r,i=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),i.set(o.name,e),"accessor"===s){const{name:s}=o;return{set(o){const r=t.get.call(this);t.set.call(this,o),this.requestUpdate(s,r,e)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=o;return function(o){const r=this[s];t.call(this,o),this.requestUpdate(s,r,e)}}throw Error("Unsupported decorator location: "+s)};function ht(e){return(t,o)=>"object"==typeof o?dt(e,t,o):((e,t,o)=>{const s=t.hasOwnProperty(o);return t.constructor.createProperty(o,e),s?Object.getOwnPropertyDescriptor(t,o):void 0})(e,t,o)}var pt=void 0&&(void 0).__decorate||function(e,t,o,s){var r,i=arguments.length,l=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,s);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(l=(i<3?r(l):i>3?r(t,o,l):r(t,o))||l);return i>3&&l&&Object.defineProperty(t,o,l),l};class ut extends pe{constructor(){super(...arguments),this.t=e=>e}connectedCallback(){super.connectedCallback();document.querySelectorAll('style, link[rel="stylesheet"]').forEach((e=>{var t;null===(t=this.shadowRoot)||void 0===t||t.appendChild(e.cloneNode(!0))}))}}pt([ht()],ut.prototype,"t",void 0);const vt=5;class mt extends HTMLInputElement{constructor(){super(),this.addEventListener('input',(()=>this.adjustWidth())),this.adjustWidth(),requestAnimationFrame((()=>this.adjustWidth()))}adjustWidth(){var e;this.style.width=`${Math.max(null===(e=this.value)||void 0===e?void 0:e.length,vt)}ch`}}function St(e){return a`
    ${n(e)} {
      border: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      font-family: inherit;
      cursor: pointer;
      /* chrome */
      background: var(--gjs-main-color, #444);
      /* in chrome, make the dropdown text align to the left, with padding */
      text-align-last: center;
      padding: 0 0.5rem;
      text-align: left;
      padding: 0 0.5rem;
    }
  `}function gt(e){return a`
    ${n(e)} {
      border: none;
      border-bottom: 1px dashed;
      background: none;
      text-align: center;
      font-family: inherit;
    }
  `}customElements.get('resize-input')||customElements.define('resize-input',mt,{extends:'input'});const ft=a`
  :focus-visible {
    outline: 1px solid var(--gjs-tertiary-color, #ddd);
  }
`,{I:yt}=ae,bt=1,Ct=2,$t=e=>(...t)=>({_$litDirective$:e,values:t});class _t{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const At=(e,t)=>{const o=e._$AN;if(void 0===o)return!1;for(const e of o)e._$AO?.(t,!1),At(e,t);return!0},Et=e=>{let t,o;do{if(void 0===(t=e._$AM))break;o=t._$AN,o.delete(e),e=t}while(0===o?.size)},Wt=e=>{for(let t;t=e._$AM;e=t){let o=t._$AN;if(void 0===o)t._$AN=o=new Set;else if(o.has(e))break;o.add(e),zt(t)}};function Ut(e){void 0!==this._$AN?(Et(this),this._$AM=e,Wt(this)):this._$AM=e}function wt(e,t=!1,o=0){const s=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(s))for(let e=o;e<s.length;e++)At(s[e],!1),Et(s[e]);else null!=s&&(At(s,!1),Et(s));else At(this,e)}const zt=e=>{e.type==Ct&&(e._$AP??=wt,e._$AQ??=Ut)};class Tt extends _t{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),Wt(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(At(this,e),Et(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const Rt=()=>new Pt;class Pt{}const Lt=new WeakMap,kt=$t(class extends Tt{render(e){return Y}update(e,[t]){const o=t!==this.G;return o&&void 0!==this.G&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Y}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){const t=this.ht??globalThis;let o=Lt.get(t);void 0===o&&(o=new WeakMap,Lt.set(t,o)),void 0!==o.get(this.G)&&this.G.call(this.ht,void 0),o.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?Lt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var It=void 0&&(void 0).__decorate||function(e,t,o,s){var r,i=arguments.length,l=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,s);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(l=(i<3?r(l):i>3?r(t,o,l):r(t,o))||l);return i>3&&l&&Object.defineProperty(t,o,l),l};class xt extends ut{constructor(){super(...arguments),this.options=[],this.placeholder='Select an option',this.paramRef=Rt()}render(){var e;return this.value?G`
      <section>
        <main>
          ${this.t(this.value.sentencePre)}
          <span class="unbreakable">
            ${this.renderList()}
            ${null!==(e=this.value.sentencePost)&&void 0!==e?e:''}
            ${this.renderParam()}
          </span>
        </main>
        <aside>
          ${this.renderButtons()}
        </aside>
      </section>
    `:G`
        ${this.renderList()}
      `}select(e){this.value=e,this.dispatchEvent(new CustomEvent('change',{bubbles:!0,composed:!0,detail:e})),requestAnimationFrame((()=>{var e;return null===(e=this.paramRef.value)||void 0===e?void 0:e.focus()}))}renderList(){return G`
      <select
        class="asm-inline-select__select"
        @change=${e=>{const t=this.options[e.target.selectedIndex-1];this.select(t)}}
      >
        <option
          .selected=${!this.value}
        >${this.placeholder}</option>
        ${this.options.map((e=>{var t;return G`
          <option
            .selected=${(null===(t=this.value)||void 0===t?void 0:t.type)===e.type}
          >${e.displayName?this.t(e.displayName):e.type}</option>
        `}))}
      </select>
    `}renderButtons(){var e;return G`
      ${(null===(e=this.value)||void 0===e?void 0:e.helpLink)?G`
        <a
          .title=${this.t('Help')}
          class="asm-inline-select__btn"
          href=${this.t(this.value.helpLink)}
          target="_blank"
        >?</a>`:G``}<a
        href="#"
        .title=${this.t('Remove')}
        class="asm-inline-select__btn"
        @click=${e=>{this.select(),e.preventDefault()}}
      >\u2715</a>
    `}renderParam(){var e,t;return(null===(e=this.value)||void 0===e?void 0:e.hasParam)?G`
      ( <input
        is="resize-input"
        id="resize-input"
        ${kt(this.paramRef)}
        type="text"
        autocomplete="off"
        .value=${null!==(t=this.value.param)&&void 0!==t?t:''}
        placeholder=""
        @input=${e=>{this.select({...this.value,param:e.target.value})}}
      /> )
    `:G``}}xt.styles=a`
  :host {
    ${ft}
    & {
      display: block;
      text-align: left;
      padding: 0 0.5rem;
      margin: 0.5rem 0;
    }
    button:hover, a:hover {
      transform: translateY(1px);
      color: var(--gjs-primary-color, #333);
    }
    input, select, button, inline-select {
      font-family: inherit;
      font-size: inherit;
      color: var(--gjs-secondary-color, #333);
      margin: 0;
      padding: 0;
    }
    section {
      display: flex;
    }
    ${St('select')}
    select {
      border-bottom: 1px dashed;
    }
    aside {
      flex: 0 0 auto;
    }
    ${gt('input')}
    input {
      text-align: center;
    }
    .asm-inline-select__btn {
      font-size: 0.8rem;
      text-decoration: none;
      border-radius: 50%;
      color: var(--gjs-secondary-color, #333);
      /* make the link a circle */
      display: inline-block;
      width: .5rem;
      height: .5rem;
      text-align: center;
      line-height: .7rem;
      font-size: .7rem;
      padding: 4px;
      &:hover {
        background-color: var(--gjs-secondary-color, #fff);
      }
    }
    .unbreakable {
      white-space: nowrap;
      margin: 0 0.4rem;
    }
  }
  `;It([ht({type:Object,reflect:!1})],xt.prototype,"value",void 0),It([ht({type:Array,reflect:!1})],xt.prototype,"options",void 0),It([ht({type:String,reflect:!1})],xt.prototype,"placeholder",void 0),customElements.get('inline-select')||customElements.define('inline-select',xt);const Nt="important",Ot=" !"+Nt,jt=$t(class extends _t{constructor(e){if(super(e),e.type!==bt||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,o)=>{const s=e[o];return null==s?t:t+`${o=o.includes("-")?o:o.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[t]){const{style:o}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?o.removeProperty(e):o[e]=null);for(const e in t){const s=t[e];if(null!=s){this.ft.add(e);const t="string"==typeof s&&s.endsWith(Ot);e.includes("-")||t?o.setProperty(e,t?s.slice(0,-11):s,t?Nt:""):o[e]=s}}return q}});var Dt=void 0&&(void 0).__decorate||function(e,t,o,s){var r,i=arguments.length,l=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,s);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(l=(i<3?r(l):i>3?r(t,o,l):r(t,o))||l);return i>3&&l&&Object.defineProperty(t,o,l),l};class Mt extends ut{constructor(){super(...arguments),this.suggestions=[],this._editing=!1,this.readonly=!1,this.selectorInputRef=Rt(),this.attributeOptionsAttrValueRef=Rt(),this.mainRef=Rt(),this.datalistSelectionInProgress=!1}get value(){return this._value}set value(e){try{this._value='string'==typeof e?JSON.parse(e):e}catch(t){console.error('Error parsing value for selector',{sel:e,error:t})}this.requestUpdate()}get editing(){return this._editing}set editing(e){this._editing=e}focus(){var e;null===(e=this.selectorInputRef.value)||void 0===e||e.focus()}render(){return this.value?G`
    <section
      class="${this.value.type===ge.ID?'asm-simple-selector__id':''}"
      tabindex="0"
      @keydown=${e=>{'Enter'!==e.key&&' '!==e.key||(this.value={...this.value,active:!this.value.active},this.dispatchEvent(new CustomEvent('change',{detail:this.value})))}}
      @dblclick=${()=>this.edit()}
      @click=${()=>{this.value={...this.value,active:!this.value.active},this.dispatchEvent(new CustomEvent('change',{detail:this.value}))}}
    >
      <header>
        ${this.editing?'':function(e){switch(e.type){case ge.ATTRIBUTE:return Ee;case ge.CLASS:return _e;case ge.ID:return Ae;case ge.TAG:return we;case ge.UNIVERSAL:return We;case ge.CUSTOM_TAG:return Ue;default:return ze}}(this.value)}
      </header>
      ${this.renderMain()}
      <footer>
        ${this.value.type!==ge.ID?G`
          <button
            .title=${this.t('Delete')}
            class="gjs-btn-prim asm-simple-selector__delete-button"
            @keydown=${e=>{'Enter'!==e.key&&' '!==e.key||e.stopPropagation()}}
            @click=${e=>{this.dispatchEvent(new CustomEvent('delete',{detail:this.value})),e.stopPropagation()}}
          >
            &times;
          </button>
        `:''}
        <input
          type="checkbox"
          autocomplete="off"
          class="asm-simple-selector__active"
          .checked=${this.value.active}
        />
      </footer>
    </section>
    `:G`<div>Initializing</div>`}edit(){this.hasAttribute('readonly')?console.warn('Cannot edit a readonly selector'):(this.editing=!0,requestAnimationFrame((()=>this.focus())))}select(e){var t;const o={...e};delete o.createText,delete o.createValue,!e||e.keepEditing?requestAnimationFrame((()=>this.focus())):(this.editing=!1,null===(t=this.attributeOptionsAttrValueRef.value)||void 0===t||t.blur()),this.dispatchEvent(new CustomEvent('change',{detail:o}))}cancelEdit(){var e,t;null===(e=this.attributeOptionsAttrValueRef.value)||void 0===e||e.blur(),this.editing&&(this.editing=!1,(null===(t=this.value)||void 0===t?void 0:t.type)===ge.UNKNOWN?this.dispatchEvent(new CustomEvent('delete',{detail:this.value})):this.dispatchEvent(new CustomEvent('cancel',{detail:this.value})))}updated(e){var t,o;if(super.updated(e),this.value){const e=(null===(t=this.selectorInputRef.value)||void 0===t?void 0:t.value)||'';null===(o=this.selectorInputRef.value)||void 0===o||o.setCustomValidity(!1===Le(e)?'Invalid selector':'')}}renderMain(){var e,t,o;const s=(null===(e=this.selectorInputRef.value)||void 0===e?void 0:e.value)||'',r=Le(s),i=function(e,t){const o=[];if(e){const t=!0;if('*'===e)o.push({createText:'*',type:ge.UNIVERSAL,active:t});else if(e.startsWith('.'))o.push({createText:e,type:ge.CLASS,value:e.slice(1),active:t});else if(e.startsWith('[')){const[s,r]=e.substring(1,e.length-1).split('=');r?o.push({createText:`[${s}="${r}"]`,type:ge.ATTRIBUTE,value:s,operator:'=',attributeValue:r.replace(/"/g,''),active:t}):o.push({createText:e,type:ge.ATTRIBUTE,value:s,active:t})}else e.match(/^[a-z-]*-[a-z]*$/)&&o.push({createText:e,type:ge.CUSTOM_TAG,value:e,active:t})}else if(t&&t.startsWith('[')){const e=!0,s=t.substring(1).toLowerCase();if(ye.forEach((t=>{t.toLowerCase().startsWith(s)&&o.push({createText:`[${t}]`,createValue:`[${t}]`,type:ge.ATTRIBUTE,value:t,active:e})})),s.startsWith('data-')&&s.length>5){const t=s;o.push({createText:`[${t}]`,createValue:`[${t}]`,type:ge.ATTRIBUTE,value:t,active:e})}}return o}(r,s).concat(function(e,t){return'*'===e?[]:(t.forEach((e=>{if(!e.type)throw new Error('Invalid suggestion')})),t.filter((t=>Pe(t).toLowerCase().includes(e.toLowerCase()))))}(s,this.suggestions));return G`
      ${this.renderLayout(G`
        ${this.editing?this.renderSelectorInput({suggestions:i,valid:!1!==r}):''}
      ${this.editing&&(null===(t=this.value)||void 0===t?void 0:t.type)===ge.ATTRIBUTE?this.renderOptionsEditor():G``}
      ${this.editing?'':this.renderSelector(G`
      ${(null===(o=this.value)||void 0===o?void 0:o.type)===ge.ATTRIBUTE?this.renderOptionsEditor():G``}
  `)}
        ${this.editing?this.renderSuggestionList(i,s):''}
      `,{valid:!1!==r,suggestions:i})}
    `}renderLayout(e,{valid:t,suggestions:o}){return G`
      <main
        style=${jt($e[this.value.type])}
        tabindex="0"
        ${kt(this.mainRef)}
        @keydown=${e=>{this.editing||e.target!==this.mainRef.value||'Enter'!==e.key||(this.edit(),e.stopPropagation())}}
        @focusout=${e=>{if(!this.editing)return;if(this.datalistSelectionInProgress)return;const s=e.relatedTarget;this.renderRoot.querySelector('main').contains(s)||(t?this.select(o[0]):requestAnimationFrame((()=>this.focus())),e.stopPropagation())}}
      >
        ${e}
      </main>
    `}renderSelector(e){return G`
      <span
        class="asm-simple-selector__name"
      >
        ${this.value?G`
          ${function(e){switch(e.type){case ge.CLASS:case ge.ID:case ge.TAG:case ge.ATTRIBUTE:case ge.CUSTOM_TAG:return e.value;case ge.UNIVERSAL:return'⭐';default:return''}}(this.value)}
          ${e}
        `:'No selector'}
      </span>
    `}renderSelectorInput({suggestions:e,valid:t}){return G`
    <input
      ${kt(this.selectorInputRef)}
      list="suggestions"
      is="resize-input"
      type="text"
      autocomplete="off"
      .value=${Pe(this.value)}
      .disabled=${!this.editing}
      class="asm-simple-selector__like-text asm-simple-selector__selector"
      aria-invalid=${!t}
      @keydown=${o=>{this.value&&('Escape'===o.key?(this.cancelEdit(),o.stopPropagation()):'Enter'===o.key&&(t&&this.select(e[0]),o.stopPropagation()))}}
      @keyup=${()=>{const e=this.selectorInputRef.value;e&&(e.setCustomValidity(t?'':'Invalid selector'),e.reportValidity()),this.requestUpdate()}}
      @click=${e=>e.stopPropagation()}
      @input=${t=>{const o=t.target.value,s='insertReplacementText'===t.inputType||'insertCompositionText'===t.inputType,r=e.find((e=>{var t;return(null!==(t=e.createValue)&&void 0!==t?t:Re(e))===o}));s&&r&&''!==o.trim()&&(this.datalistSelectionInProgress=!0,setTimeout((()=>{this.select(r),this.datalistSelectionInProgress=!1}),50))}}
    />
  `}renderSuggestionList(e,t){return G`
      <datalist
        id="suggestions"
      >
        ${e.sort(((e,o)=>Re(e)===t?-1:Re(o)===t?1:0)).map((e=>{var t,o;return G`
            <option
              value=${null!==(t=e.createValue)&&void 0!==t?t:Re(e)}
            >${null!==(o=e.createText)&&void 0!==o?o:Re(e)}</option>
        `}))}
      </datalist>
    `}renderOptionsEditor(){var e,t;if((null===(e=this.value)||void 0===e?void 0:e.type)!==ge.ATTRIBUTE)throw new Error('Invalid selector type, only attribute selectors have options');const o=this.value;return G`
          <select
            class="asm-simple-selector__options-select"
            id="operator"
            @click=${e=>{e.stopPropagation()}}
            @change=${e=>{var t;const s=e.target.value;this.value={...o,operator:s,attributeValue:s&&(null===(t=this.attributeOptionsAttrValueRef.value)||void 0===t?void 0:t.value)||''},this.dispatchEvent(new CustomEvent('change',{detail:this.value}))}}
              @keydown=${e=>{' '===e.key&&e.stopPropagation()}}
          >
            <option value="">...</option>
            <option value="=" .selected=${'='===o.operator}>=</option>
            <option value="~=" .selected=${'~='===o.operator}>~=</option>
            <option value="|=" .selected=${'|='===o.operator}>|=</option>
            <option value="^=" .selected=${'^='===o.operator}>^=</option>
            <option value="$=" .selected=${'$='===o.operator}>$=</option>
            <option value="*=" .selected=${'*='===o.operator}>*=</option>
          </select>
          ${o.operator?G`
            "&nbsp;
            <input
              is="resize-input"
              type="text"
              ${kt(this.attributeOptionsAttrValueRef)}
              autocomplete="off"
              class="asm-simple-selector__like-text"
              .value=${null!==(t=o.attributeValue)&&void 0!==t?t:''}
          @click=${e=>{e.stopPropagation()}}
              @keydown=${e=>{var t;'Enter'===e.key?(this.value={...o,attributeValue:e.target.value},this.select(this.value),e.stopPropagation()):'Escape'===e.key&&(e.target.value=null!==(t=o.attributeValue)&&void 0!==t?t:'',this.cancelEdit(),e.stopPropagation())}}
    @focusout=${e=>{this.value={...o,attributeValue:e.target.value},this.select(this.value)}}
              @input=${e=>{this.value={...o,attributeValue:e.target.value},this.dispatchEvent(new CustomEvent('change',{detail:this.value}))}}
            />
            &nbsp;"
          `:''}
        `}}Mt.styles=a`
  :host {
    ${ft}
    section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.25rem;
      padding: 0.10rem;
      border-radius: 0.2rem;
      cursor: pointer;
      background-color: var(--gjs-main-light-color, #f9f9f9);
    }
    section:has(:invalid) {
      background: rgba(255, 0, 0, 0.1) !important;
    }
    header {
      width: 12px;
      text-wrap: nowrap;
      transition: all .2s ease-out;
      overflow: hidden;
      text-align: center;
      line-height: 1;
    }
    section:focus-within header,
    section:hover header {
      width: 0;
    }
    section.asm-simple-selector__id:focus-within header,
    section.asm-simple-selector__id:hover header {
      width: 12px;
    }
    footer {
      width: 0;
      transition: all .2s ease-out;
      overflow: hidden;
    }
    section:focus-within footer,
    section:hover footer {
      width: 12px;
    }
    section.asm-simple-selector__id:focus-within footer,
    section.asm-simple-selector__id:hover footer {
      width: 0;
    }
    select {
      text-align: center;
    }
    input, select, button {
      font-family: inherit;
      font-size: inherit;
      color: var(--gjs-secondary-color, #333);
    }
    .asm-simple-selector__delete-button {
      padding: 0;
      line-height: 1;
      margin: 1px;
      background: transparent;
      color: var(--gjs-color-warn, #f00);
      font-size: 1.1rem;
    }
    /*
    .asm-simple-selector__delete-button:hover {
      color: var(--gjs-color-warn, #f00);
      transform: scale(2) translateY(-1px);
    }
    */
    .asm-simple-selector__active {
      display: none;
    }
    ${gt('.asm-simple-selector__like-text')}
    .asm-simple-selector__like-text {
      padding: .25rem;
    }
    ${St('.asm-simple-selector__options-select')}
    .asm-simple-selector__name {
      display: inline-flex;
      text-wrap: wrap;
      justify-content: center;
      align-items: center;
      min-height: 20px;
      line-height: 1;
      user-select: none;
    }
    .asm-simple-selector__selector {
      cursor: text;
      min-width: 200px;
    }

    /* Try to style datalist options - browser support varies */
    datalist {
      position: absolute;
      max-height: 200px;
      overflow-y: auto;
      border: 1px solid var(--gjs-border-color, #ddd);
      border-radius: 4px;
      background: var(--gjs-main-bg-color, white);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    /* Some browsers support styling datalist options */
    datalist option {
      padding: 8px 12px;
      border-bottom: 1px solid var(--gjs-border-light-color, #eee);
      background: var(--gjs-main-bg-color, white);
      color: var(--gjs-main-color, #333);
      cursor: pointer;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 250px;
    }

    datalist option:hover {
      background: var(--gjs-main-light-color, #f9f9f9);
    }

    datalist option:last-child {
      border-bottom: none;
    }
  }
  /* FIXME: this should be inside :host but it breaks opactity when visible */
  section:not(:has(.asm-simple-selector__active:checked)):not(:has(.asm-simple-selector__selector)) {
    opacity: 0.5;
  }
  `;Dt([ht({type:Object,attribute:!0,reflect:!1})],Mt.prototype,"value",null),Dt([ht({type:Array,attribute:!0,reflect:!1})],Mt.prototype,"suggestions",void 0),Dt([ht({type:Boolean,attribute:!0,reflect:!1,state:!0})],Mt.prototype,"editing",null),Dt([ht({type:Boolean,attribute:!0,reflect:!1})],Mt.prototype,"readonly",void 0),customElements.get('simple-selector')||customElements.define('simple-selector',Mt);var Ht=void 0&&(void 0).__decorate||function(e,t,o,s){var r,i=arguments.length,l=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,s);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(l=(i<3?r(l):i>3?r(t,o,l):r(t,o))||l);return i>3&&l&&Object.defineProperty(t,o,l),l};class Ft extends ut{constructor(){super(...arguments),this.suggestions=[],this.disablePseudoClass=!1}get value(){return this._value}set value(e){try{this._value='string'==typeof e?JSON.parse(e):e}catch(t){console.error('Error parsing value for selector',{value:e,error:t})}this.requestUpdate()}toString(){return xe(this.value)}render(){var e,t,o;return G`
      <section>
        <div
          class="asm-compound__selectors"
        >
          ${null===(e=this.value)||void 0===e?void 0:e.selectors.sort(((e,t)=>ke(t,!0)-ke(e,!0))).map(((e,t)=>G`
            <simple-selector
              .t=${this.t}
              .value=${e}
              .suggestions=${this.suggestions}
              ?readonly=${![ge.CLASS,ge.UNKNOWN].includes(e.type)}
              @change=${e=>this.changeSelector(e,t)}
              @delete=${e=>this.deleteSelector(e,t)}
            ></simple-selector>
          `))}
          <button
            id="gjs-clm-add-tag"
            class="gjs-clm-tags-btn gjs-clm-tags-btn__add asm-compound__add"
            .title=${this.t('Add a new selector')}
            @click=${this.addSelector}
            >
            <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>
          </button>
        </div>
        ${this.disablePseudoClass?'':G`
          ${(null===(t=this.value)||void 0===t?void 0:t.pseudoClass)?G`
            <div>
              <inline-select
                .t=${this.t}
                .value=${null===(o=this.value)||void 0===o?void 0:o.pseudoClass}
                .options=${me}
                @change=${this.changePseudoClass}
                placeholder=""
              ></inline-select>
            </div>
          `:G`
            <button
              class="gjs-btn-prim asm__add-inline"
              @click=${this.addPseudoClass}
              >\u2192 ${this.t('Pseudo Class')}</button>
          `}
        `}
      </section>
    `}changeSelector(e,t){const o=this.value.selectors[t],s=e.detail.type===ge.ID&&e.detail.active;let r=this.value.selectors.map(((o,s)=>s===t?e.detail:o));s&&(r=r.map((e=>e.type!==ge.ID?{...e,active:!1}:e)));(null==o?void 0:o.type)===ge.UNKNOWN&&e.detail.type===ge.CLASS&&e.detail.active&&(r=r.map((t=>t.type!==ge.CLASS||Te(t,e.detail)?t:{...t,active:!1})));!r.some((e=>e.active))&&this.value.pseudoClass&&(r=r.map((e=>e.type===ge.ID?{...e,active:!0}:e))),this.value={...this.value,selectors:r},Te(o,e.detail,!1)||(this.dispatchEvent(new CustomEvent('rename',{detail:{oldValue:o,value:e.detail}})),this.dispatchEvent(new CustomEvent('change',{detail:this.value}))),e.stopPropagation(),this.requestUpdate()}addSelector(e){var t;this.value=null!==(t=this.value)&&void 0!==t?t:{selectors:[]},this.value.selectors.push({type:ge.UNKNOWN,active:!0}),e.stopPropagation(),this.requestUpdate(),requestAnimationFrame((()=>this.focusLastSelector()))}focusLastSelector(){if(!this.value)return;const e=this.shadowRoot.querySelectorAll('simple-selector')[this.value.selectors.length-1];e.editing=!0,requestAnimationFrame((()=>{e.focus()}))}deleteSelector(e,t){var o;const s=null===(o=this.value)||void 0===o?void 0:o.selectors.splice(t,1)[0];this.dispatchEvent(new CustomEvent('delete',{detail:s})),this.dispatchEvent(new CustomEvent('change',{detail:this.value})),e.stopPropagation(),this.requestUpdate()}addPseudoClass(e){this.value={...this.value,pseudoClass:me[0]},this.dispatchEvent(new CustomEvent('change',{detail:this.value})),e.stopPropagation()}changePseudoClass(e){this.value={...this.value,pseudoClass:e.detail},this.dispatchEvent(new CustomEvent('change',{detail:this.value})),e.stopPropagation()}}Ft.styles=a`
  :host {
    ${ft}
    button:hover, a:hover {
      transform: translateX(1px);
      font-weight: bold;
    }
    .asm-compound__selectors {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      flex-wrap: wrap;
      /* material design card style */
      padding: 0.5rem;
      background-color: var(--gjs-main-dark-color);
    }
    .asm-compound__add {
      color: var(--gjs-secondary-color, #b9a5a6);
    }
    .asm__add-inline {
      font-size: 0.8rem;
      background: transparent;
    }
  }
  `;Ht([ht({type:Object,attribute:!0,reflect:!1})],Ft.prototype,"value",null),Ht([ht({type:Array,attribute:!0,reflect:!1})],Ft.prototype,"suggestions",void 0),Ht([ht({type:Boolean,attribute:'disable-pseudo-class'})],Ft.prototype,"disablePseudoClass",void 0),customElements.get('compound-selector')||customElements.define('compound-selector',Ft);var Bt=void 0&&(void 0).__decorate||function(e,t,o,s){var r,i=arguments.length,l=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,s);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(l=(i<3?r(l):i>3?r(t,o,l):r(t,o))||l);return i>3&&l&&Object.defineProperty(t,o,l),l};class Vt extends ut{constructor(){super(...arguments),this.suggestions=[],this.relations=[],this.hasBody=!1}get value(){return this._value}set value(e){try{this._value='string'==typeof e?JSON.parse(e):e}catch(t){console.error('Error parsing value for selector',{value:e,error:t})}this.requestUpdate()}render(){var e,t,o,s,r,i;return G`
      <compound-selector
        .t=${this.t}
        .value=${null===(e=this.value)||void 0===e?void 0:e.mainSelector}
        .suggestions=${this.suggestions}
        @delete=${e=>{const t=e.detail;(null==t?void 0:t.type)===ge.CLASS&&this.dispatchEvent(new CustomEvent('removeClass',{detail:e.detail}))}}
        @change=${e=>{const t=e.target;this.value={...this.value,mainSelector:t.value},e.stopPropagation(),this.dispatchEvent(new CustomEvent('change',{detail:this.value}))}}
        @rename=${e=>this.dispatchEvent(new CustomEvent('rename',{detail:e.detail}))}
      ></compound-selector>
      ${this.hasBody?G``:G`
        ${(null===(t=this.value)||void 0===t?void 0:t.operator)?G`
        <inline-select
          .t=${this.t}
          .value=${null===(o=this.value)||void 0===o?void 0:o.operator}
          .options=${He}
          placeholder=""
          @change=${this.changeOperator}
        ></inline-select>
      `:G`
        <button
          class="gjs-btn-prim asm__add-inline"
          @click=${this.addOperator}
        >\u2192 ${this.t('Relation')}</button>
        `}
      `}
      ${(null===(s=this.value)||void 0===s?void 0:s.operator)?G`
        <compound-selector
          .t=${this.t}
          .value=${null===(r=this.value)||void 0===r?void 0:r.relatedSelector}
          .suggestions=${this.relations}
          ?disable-pseudo-class=${!1===(null===(i=this.value)||void 0===i?void 0:i.operator.isCombinator)}
          @change=${this.changeRelatedSelector}
        ></compound-selector>
      `:''}
    `}changeOperator(e){var t,o,s,r,i;const l=e.target;!1===(null===(t=l.value)||void 0===t?void 0:t.isCombinator)&&(null===(s=null===(o=this.value)||void 0===o?void 0:o.relatedSelector)||void 0===s||delete s.pseudoClass),this.value={...this.value,operator:l.value},l.value||(null===(r=this.value)||void 0===r||delete r.relatedSelector,null===(i=this.value)||void 0===i||delete i.operator),e.stopPropagation(),this.dispatchEvent(new CustomEvent('change',{detail:this.value}))}addOperator(){this.requestUpdate(),this.value={...this.value,operator:He[0],relatedSelector:{selectors:[]}},this.dispatchEvent(new CustomEvent('change',{detail:this.value}))}changeRelatedSelector(e){const t=e.target;this.value={...this.value,relatedSelector:t.value},e.stopPropagation(),this.dispatchEvent(new CustomEvent('change',{detail:this.value}))}toString(){return Ge(this.value)}}Vt.styles=a`
  :host {
    ${ft}
    & {
      display: block;
      text-align: left;
      padding: 0.5rem 0;
    }
    button:hover, a:hover {
      transform: translateX(1px);
      font-weight: bold;
    }
    button.asm__add-inline {
      font-size: 0.8rem;
      background: transparent;
    }
  }
  `;Bt([ht({type:Object,attribute:!0,reflect:!1})],Vt.prototype,"value",null),Bt([ht({type:Array,attribute:!0,reflect:!1})],Vt.prototype,"suggestions",void 0),Bt([ht({type:Array,attribute:!0,reflect:!1})],Vt.prototype,"relations",void 0),Bt([ht({type:Boolean,attribute:!0,reflect:!1})],Vt.prototype,"hasBody",void 0),customElements.get('complex-selector')||customElements.define('complex-selector',Vt);var Gt=void 0&&(void 0).__decorate||function(e,t,o,s){var r,i=arguments.length,l=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,s);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(l=(i<3?r(l):i>3?r(t,o,l):r(t,o))||l);return i>3&&l&&Object.defineProperty(t,o,l),l};class qt extends ut{constructor(){super(...arguments),this.placeholder='Select an option',this.selectors=[],this.helpLink='',this.error='',this.warning='',this.specificity=0,this.selectRef=Rt()}get value(){return this._value}set value(e){try{this._value='string'==typeof e?JSON.parse(e):e,this.specificity=Ye(this._value)}catch(t){console.error('Error parsing value for selector',{value:e,error:t})}}render(){if(!this.value)return G``;const e=Ge(this.value),t=[{selector:this.value,selectorString:e},...this.selectors.sort(((e,t)=>Ye(t)-Ye(e))).map((e=>({selector:e,selectorString:Ge(e)}))).filter((({selector:t,selectorString:o})=>{var s;return e!==o||t.atRule!==(null===(s=this.value)||void 0===s?void 0:s.atRule)}))],o=t.map((({selectorString:e,selector:t})=>G`
          ${t.atRule?t.atRule.replace(/@media \(max-width: (.+)\)/,'@$1'):''}
          ${e}
        `));return requestAnimationFrame((()=>this.selectRef.value?this.selectRef.value.selectedIndex=0:'')),G`
      <main id="pre" class="selection">
        <select
          ${kt(this.selectRef)}
          class="value"
          @change=${e=>{e.stopPropagation();const o=e.target,s=t[parseInt(o.value)].selector;this.changeSelector(s)}}
        >
          ${o.map(((e,t)=>G`
          <option
            value=${t}
            ?selected=${0===t}
          >
            ${e}
          </option>`))}
        </select>
        <aside>
          <ul>
            <li
              .title=${this.t('Specificity')}
              class="specificity"
              >
              ${this.specificity}
            </li>
            <li>
              <button
                .title=${this.t('Edit selector')}
                @click=${()=>{var e;const t=prompt(this.t('Edit selector'),Ge(this.value));this.changeSelector(t?Ze(t,null!==(e=this.value.atRule)&&void 0!==e?e:''):this.value)}}
              >✏️</button>
            </li>
            <li>
              <button
                .title=${this.t('Copy style')}
                @click=${()=>this.dispatchEvent(new CustomEvent('copy'))}
              >📋</button>
            </li>
            <li>
              <button
                .title=${this.t('Paste style')}
                @click=${()=>this.dispatchEvent(new CustomEvent('paste'))}
              >📥</button>
            </li>
            <li>
              <button
                .title=${this.t('Clear style for this selector')}
                @click=${()=>{this.clearStyle()}}
              >️🧹</button>
            </li>
            ${this.helpLink?G`
            <li>
              <a
                class="asm-display__help"
                .title=${this.t('Help')}
                .href=${this.helpLink}
                target="_blank"
              >?</a>
            </li>
            `:''}
          </ul>
        </aside>
      </main>
      <footer>
        ${this.error?G`
          <p class="asm-display__error">\u26A0 ${this.error} <a href="https://docs.silex.me/en/user/selectors#troubleshooting" target="_blank" title="${this.t('Troubleshooting guide')}">?</a></p>
        `:''}
        ${this.warning?G`
          <p class="asm-display__warning">\u26A0 ${this.warning} <a href="https://docs.silex.me/en/user/selectors#troubleshooting" target="_blank" title="${this.t('Troubleshooting guide')}">?</a></p>
        `:''}
      </footer>
    `}changeSelector(e){this.value=e,this.dispatchEvent(new CustomEvent('change',{detail:e}))}clearStyle(){this.dispatchEvent(new CustomEvent('delete',{detail:this.value}))}}qt.styles=a`
  :host {
    ${ft}
    & {
      font-size: 0.65rem;
      padding: 0.5rem 0;
    }
    .selection {
      display: flex;
      border: 1px solid var(--gjs-primary-color, #333);
      font-size: .85rem;
      ${St('select.value')}
      select.value {
        appearance: auto;
        border: 1px solid var(--gjs-light-border, #333);
        font-size: inherit;
        font-family: monospace;
        text-align: center;
        margin: .25rem;
        padding: .15rem 0;
        text-align: center;
        text-wrap: wrap;
        width: 100%;
        cursor: pointer;
        background: var(--gjs-primary-color);
        color: inherit;
      }
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        & > li {
          display: inline;
          margin: 0 0.25rem;
        }
      }
      aside {
        ul {
          display: flex;
          align-items: center;
          height: 100%;
        }
        button {
          background-color: transparent;
          color: var(--gjs-font-color-active, #f8f8f8);
          cursor: pointer;
          padding: 0;
          margin: 0;
          border: 1px solid transparent;
          opacity: 0.8;
          &:hover {
            transform: translateY(-1px);
            opacity: 1;
            background-color: var(--gjs-primary-color, #444);
          }
        }
        .specificity {
          font-size: small;
          padding-top: 2px;
          cursor: default;
        }
      }
    }
    .asm-display__help {
      text-decoration: none;
      border-radius: 50%;
      color: var(--gjs-secondary-color, #333);
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      text-align: center;
      line-height: 0.7rem;
      font-size: 0.7rem;
      padding: 4px;
      &:hover {
        background-color: var(--gjs-secondary-color, #fff);
        color: var(--gjs-main-color, #333);
      }
    }

    .asm-display__error {
      color: var(--gjs-warning-color, #f90);
      margin: 0;
      a {
        text-decoration: none;
        border-radius: 50%;
        color: var(--gjs-secondary-color, #333);
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        text-align: center;
        line-height: 0.7rem;
        font-size: 0.7rem;
        padding: 4px;
        margin-left: 0.5rem;
        &:hover {
          background-color: var(--gjs-secondary-color, #fff);
          color: var(--gjs-main-color, #333);
        }
      }
    }
    .asm-display__warning {
      color: var(--gjs-warning-color, #f90);
      margin: 0;
      a {
        text-decoration: none;
        border-radius: 50%;
        color: var(--gjs-secondary-color, #333);
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        text-align: center;
        line-height: 0.7rem;
        font-size: 0.7rem;
        padding: 4px;
        margin-left: 0.5rem;
        &:hover {
          background-color: var(--gjs-secondary-color, #fff);
          color: var(--gjs-main-color, #333);
        }
      }
    }
  }
  `,Gt([ht({type:Object,attribute:!0,reflect:!1})],qt.prototype,"value",null),Gt([ht({type:String,attribute:!0,reflect:!1})],qt.prototype,"placeholder",void 0),Gt([ht({type:Array,attribute:!0,reflect:!1})],qt.prototype,"selectors",void 0),Gt([ht({type:String,attribute:!0,reflect:!1})],qt.prototype,"helpLink",void 0),Gt([ht({type:String,attribute:!0,reflect:!1})],qt.prototype,"error",void 0),Gt([ht({type:String,attribute:!0,reflect:!1})],qt.prototype,"warning",void 0),customElements.get('current-selector-display')||customElements.define('current-selector-display',qt);const Yt=document.createElement('div');function Zt(e,t){e.Commands.add('i18n:info',(()=>{console.log('i18n',Array.from(Ke))})),e.on('undo redo',(()=>{requestAnimationFrame((()=>Kt(e,t)))}))}function Jt(e,t,o){o&&o.container?(o.container.appendChild(Yt),e.on('selector:custom component:update',function(e,t=100){let o;return function(...s){clearTimeout(o),o=setTimeout((()=>e.apply(this,s)),t)}}((()=>Kt(e,t))))):e.once('selector:custom',(o=>Jt(e,t,o)))}function Kt(e,t){var o;const s=e.getSelectedAll(),r=null===(o=e.DeviceManager.getSelected())||void 0===o?void 0:o.get('widthMedia'),i=function(e){if(0===e.length)return null;const t=function(e){if(0===e.length)return!1;if(1===e.length)return e[0];const[t,...o]=e;for(const e of o){if(t.atRule!==e.atRule)return!1;if(t.mainSelector!==e.mainSelector)return!1;if(t.operator!==e.operator)return!1;if(t.relatedSelector!==e.relatedSelector)return!1}return{mainSelector:t.mainSelector,operator:t.operator,relatedSelector:t.relatedSelector,atRule:t.atRule}}(e.map((e=>ot(e)||Ve)));if(!t)return null;const o={type:ge.ID,value:e[0].getId(),active:!1},s={type:ge.ID,value:e[0].getId(),active:!0},r=JSON.parse(JSON.stringify(t));r.mainSelector.selectors=t.mainSelector.selectors.filter((t=>t.type!==ge.ID||t.value===e[0].getId()));const i=Je(r,{mainSelector:{selectors:[o]}});return i.mainSelector.selectors.filter((e=>e.type!==ge.ID&&e.active)).length>0&&(i.mainSelector.selectors=i.mainSelector.selectors.map((e=>e.type===ge.ID?o:e))),Ge(i)||(i.mainSelector.selectors=i.mainSelector.selectors.map((e=>e.type===ge.ID?s:e))),i}(s);if(i){const o={...i,atRule:r?`@media (max-width: ${r})`:void 0},[l,n]=function(e,t){const o=qe(e);if(!function(e,t){try{return t.some((t=>{var o,s;return!('body'!==(null===(o=t.tagName)||void 0===o?void 0:o.toLowerCase())||!e.toLowerCase().startsWith('body')&&!e.toLowerCase().startsWith('html'))||(null===(s=t.view)||void 0===s?void 0:s.el.matches(e))}))}catch{return!1}}(Ge(o,!0),t))return['Current selector does not match the selected components',null];if(!function(e,t){try{return t.every((t=>{var o,s;return!('body'!==(null===(o=t.tagName)||void 0===o?void 0:o.toLowerCase())||!e.toLowerCase().startsWith('body')&&!e.toLowerCase().startsWith('html'))||(null===(s=t.view)||void 0===s?void 0:s.el.matches(e))}))}catch{return!1}}(Ge(o,!0),t))return[null,'Current selector does not match all the selected components'];return[null,null]}(o,s);requestAnimationFrame((()=>Xe(e,Ge(o)))),de(G`
      <current-selector-display
        .t=${t=>Qe(e,t)}
        .value=${o||void 0}
        .selectors=${function(e){return e.getSelectedAll().flatMap((t=>e.CssComposer.getRules().reduce(((e,o)=>{var s;const r=o.clone();if(0===Object.keys(r.getStyle()).length)return e;const i=r.getSelectorsString();if(!i)return console.warn('Empty selector for rule',r.get('state'),{rule:r}),e;try{const o=Ze(i,r.getAtRule()),l=Ge(qe(o));((null===(s=t.view)||void 0===s?void 0:s.el.matches(l))||'body'===t.tagName.toLowerCase()&&(l.toLowerCase().startsWith('body')||l.toLowerCase().startsWith('html')))&&e.push(o)}catch(e){console.warn('Error matching selector',i,e)}return e}),[])))}(e)}
        .helpLink=${t.helpLinks.actionBar}
        .error=${Qe(e,l||'')}
        .warning=${Qe(e,n||'')}
        @change=${t=>function(e,t,o){var s;if(o.forEach((t=>{var o;const s=Je(ot(t)||Ve,e),r=(l=e,{mainSelector:{selectors:De((i=s).mainSelector.selectors,l.mainSelector.selectors),pseudoClass:i.mainSelector.pseudoClass},relatedSelector:i.relatedSelector?{selectors:l.relatedSelector?De(i.relatedSelector.selectors,l.relatedSelector.selectors):i.relatedSelector.selectors.map((e=>({...e,active:!1}))),pseudoClass:i.relatedSelector.pseudoClass}:void 0,operator:i.operator,atRule:i.atRule});var i,l;r.atRule=e.atRule,r.mainSelector.pseudoClass=e.mainSelector.pseudoClass,r.relatedSelector&&(r.relatedSelector.pseudoClass=null===(o=e.relatedSelector)||void 0===o?void 0:o.pseudoClass),tt(t,r)})),e.atRule){const o=null===(s=t.DeviceManager.getAll().find((t=>{const o=t.get('widthMedia');return!!o&&e.atRule.includes(o)})))||void 0===s?void 0:s.get('id');o&&t.DeviceManager.select(o)}else t.DeviceManager.select(t.DeviceManager.getAll().first());Xe(t,Ge(e))}(t.detail,e,s)}
        @delete=${()=>function(e,t){(function(e){const t=e.StyleManager.getSelected();t?e.CssComposer.remove(t):console.warn('No rule selected')})(e),Xe(e,Ge(t))}(e,o)}
        @copy=${()=>function(e){null===localStorage||void 0===localStorage||localStorage.setItem('asm:clipboard',JSON.stringify(function(e){var t;return null===(t=e.StyleManager.getSelected())||void 0===t?void 0:t.getStyle()}(e)))}(e)}
        @paste=${()=>function(e){const t=null===localStorage||void 0===localStorage?void 0:localStorage.getItem('asm:clipboard');if(t){!function(e,t){var o;null===(o=e.StyleManager.getSelected())||void 0===o||o.setStyle(t)}(e,JSON.parse(t))}}(e)}
      ></current-selector-display>
      <complex-selector
        .t=${t=>Qe(e,t)}
        .hasBody=${s.some((e=>'body'===e.tagName.toLocaleLowerCase()))}
        .value=${o}
        .suggestions=${function(e,t,o){const s=[];return t.forEach((t=>{it(t,s,o.mainSelector);const r=t.getClasses();e.CssComposer.getAll().forEach((e=>{e.getSelectors().forEach((e=>{const t={type:ge.CLASS,value:e.get('name'),active:!0};1!==e.get('type')||e.get('private')||r.includes(e.get('name'))||!lt(t,o.mainSelector,s)||s.push(t)}))}));const i=t.getAttributes({noStyle:!0,noClass:!0});Object.keys(i).forEach((e=>{if('id'===e)return;const t={type:ge.ATTRIBUTE,value:e,active:!0};i[e]&&(t.operator=fe.EQUALS,t.attributeValue=i[e]),lt(t,o.mainSelector,s)&&s.push(t)}))})),s}(e,s,o)}
        .relations=${st(e,s,o)}
        @change=${t=>function(e,t,o){o.forEach((t=>{tt(t,e)})),Xe(t,Ge(e))}(t.detail,e,s)}
        @rename=${t=>et(e,t.detail.oldValue,t.detail.value)}
        @removeClass=${t=>function(e,t){if(t.type!==ge.CLASS)return;const o=t.value;if(!o)return void console.warn('Invalid class name provided.');e.getSelectedAll().forEach((e=>{const t=e.getClasses().filter((e=>e!==o));e.setClass(t)}))}(e,t.detail)}
      ></complex-selector>
    `,Yt)}else de(G`
      <p>Select a component to edit its selector</p>
    `,Yt)}Yt.id='asm-container';const Qt={Remove:'Remove',Specificity:'Specificity','Edit selector':'Edit selector','Copy style':'Copy style','Paste style':'Paste style','Clear style for this selector':'Clear style for this selector',Help:'Help','Troubleshooting guide':'Troubleshooting guide',Relation:'Relation','Add a new selector':'Add a new selector','Pseudo Class':'Pseudo Class',Delete:'Delete','When it is':'When it is','When it is a':'When it is a','When it':'When it','Style the':'Style the','inside of':'inside of','direct child of':'direct child of ( > )','adjacent to':'adjacent to ( + )',after:'after ( ~ )',contains:'contains ( :has )','does not match':'does not match ( :not )',matches:'matches ( :is )','matches (no spec)':'matches ( :where )','https://developer.mozilla.org/en-US/docs/Web/CSS/:where':'https://developer.mozilla.org/en-US/docs/Web/CSS/:where','https://developer.mozilla.org/en-US/docs/Web/CSS/:is':'https://developer.mozilla.org/en-US/docs/Web/CSS/:is','https://developer.mozilla.org/en-US/docs/Web/CSS/:not':'https://developer.mozilla.org/en-US/docs/Web/CSS/:not','https://developer.mozilla.org/en-US/docs/Web/CSS/:has':'https://developer.mozilla.org/en-US/docs/Web/CSS/:has','https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator':'https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator','https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator':'https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator','https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator':'https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator','https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator':'https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator','On mouse':'On mouse',When:'When','When it has the':'When it has the','When the':'When the','When it is the':'When it is the','When it is within':'When it is within','When URL matches':'When URL matches','When it matches':'When it matches','When the text direction is':'When the text direction is','https://developer.mozilla.org/en-US/docs/Web/CSS/:dir':'https://developer.mozilla.org/en-US/docs/Web/CSS/:dir','https://developer.mozilla.org/en-US/docs/Web/CSS/:lang':'https://developer.mozilla.org/en-US/docs/Web/CSS/:lang','https://developer.mozilla.org/en-US/docs/Web/CSS/:optional':'https://developer.mozilla.org/en-US/docs/Web/CSS/:optional','https://developer.mozilla.org/en-US/docs/Web/CSS/:required':'https://developer.mozilla.org/en-US/docs/Web/CSS/:required','https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate':'https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate','https://developer.mozilla.org/en-US/docs/Web/CSS/:checked':'https://developer.mozilla.org/en-US/docs/Web/CSS/:checked','https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled':'https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled','https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled':'https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled','https://developer.mozilla.org/en-US/docs/Web/CSS/:target':'https://developer.mozilla.org/en-US/docs/Web/CSS/:target','https://developer.mozilla.org/en-US/docs/Web/CSS/:scope':'https://developer.mozilla.org/en-US/docs/Web/CSS/:scope','https://developer.mozilla.org/en-US/docs/Web/CSS/:root':'https://developer.mozilla.org/en-US/docs/Web/CSS/:root','https://developer.mozilla.org/en-US/docs/Web/CSS/:empty':'https://developer.mozilla.org/en-US/docs/Web/CSS/:empty','https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type':'https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type','https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type':'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type','https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type':'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type','https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type':'https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type','https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type':'https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type','https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child':'https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child','https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child':'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child','https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child':'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child','https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child':'https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child','https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child':'https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child','https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link':'https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link','https://developer.mozilla.org/en-US/docs/Web/CSS/:link':'https://developer.mozilla.org/en-US/docs/Web/CSS/:link','https://developer.mozilla.org/en-US/docs/Web/CSS/:visited':'https://developer.mozilla.org/en-US/docs/Web/CSS/:visited','https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible':'https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible','https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within':'https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within','https://developer.mozilla.org/en-US/docs/Web/CSS/:focus':'https://developer.mozilla.org/en-US/docs/Web/CSS/:focus','https://developer.mozilla.org/en-US/docs/Web/CSS/:active':'https://developer.mozilla.org/en-US/docs/Web/CSS/:active','https://developer.mozilla.org/en-US/docs/Web/CSS/:hover':'https://developer.mozilla.org/en-US/docs/Web/CSS/:hover','Current selector does not match the selected components':'Current selector does not match the selected components','Current selector does not match all the selected components':'Current selector does not match all the selected components'},Xt={Remove:'Supprimer',Specificity:'Spécificité','Edit selector':'Modifier le sélecteur','Copy style':'Copier le style','Paste style':'Coller le style','Clear style for this selector':'Effacer le style pour ce sélecteur',Help:'Aide','Troubleshooting guide':'Guide de dépannage',Relation:'Relation','Add a new selector':'Ajouter un nouveau sélecteur','Pseudo Class':'Pseudo-classe',Delete:'Supprimer','When it is':'Lorsqu\'il est','When it is a':'Lorsqu\'il est un','When it':'Lorsqu\'il','inside of':'à l\'intérieur de','direct child of':'enfant direct de ( > )','adjacent to':'adjacent à ( + )',after:'après ( ~ )',contains:'contient ( :has )','does not match':'ne correspond pas ( :not )',matches:'correspond à ( :is )','matches (no spec)':'correspond à ( :where )','https://developer.mozilla.org/en-US/docs/Web/CSS/:where':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:where','https://developer.mozilla.org/en-US/docs/Web/CSS/:is':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:is','https://developer.mozilla.org/en-US/docs/Web/CSS/:not':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:not','https://developer.mozilla.org/en-US/docs/Web/CSS/:has':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:has','https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/General_sibling_combinator','https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/Adjacent_sibling_combinator','https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/Child_combinator','https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/Descendant_combinator','On mouse':'Au ',When:'Lorsqu\'il est','When it has the':'Lorsqu\'il a','When the':'Lorsqu\'il a','When it is the':'Lorsqu\'il est le','Style the':'Style le','When it is within':'Lorsqu\'il est dans le','When URL matches':'Lorsque l\'URL est sa','When it matches':'Lorsqu\'il a','When the text direction is':'Lorsqu\'il a','https://developer.mozilla.org/en-US/docs/Web/CSS/:dir':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:dir','https://developer.mozilla.org/en-US/docs/Web/CSS/:lang':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:lang','https://developer.mozilla.org/en-US/docs/Web/CSS/:optional':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:optional','https://developer.mozilla.org/en-US/docs/Web/CSS/:required':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:required','https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:indeterminate','https://developer.mozilla.org/en-US/docs/Web/CSS/:checked':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:checked','https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:disabled','https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:enabled','https://developer.mozilla.org/en-US/docs/Web/CSS/:target':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:target','https://developer.mozilla.org/en-US/docs/Web/CSS/:scope':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:scope','https://developer.mozilla.org/en-US/docs/Web/CSS/:root':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:root','https://developer.mozilla.org/en-US/docs/Web/CSS/:empty':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:empty','https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:only-of-type','https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:nth-last-of-type','https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:nth-of-type','https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:last-of-type','https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:first-of-type','https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:only-child','https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:nth-last-child','https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:nth-child','https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:last-child','https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:first-child','https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:any-link','https://developer.mozilla.org/en-US/docs/Web/CSS/:link':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:link','https://developer.mozilla.org/en-US/docs/Web/CSS/:visited':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:visited','https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:focus-visible','https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:focus-within','https://developer.mozilla.org/en-US/docs/Web/CSS/:focus':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:focus','https://developer.mozilla.org/en-US/docs/Web/CSS/:active':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:active','https://developer.mozilla.org/en-US/docs/Web/CSS/:hover':'https://developer.mozilla.org/fr-FR/docs/Web/CSS/:hover','Current selector does not match the selected components':'Le sélecteur actuel ne correspond pas aux composants sélectionnés','Current selector does not match all the selected components':'Le sélecteur actuel ne correspond pas à tous les composants sélectionnés'},eo='@silexlabs/grapesjs-advanced-selector',to=(e,t={})=>{const o={...t,i18n:{},helpLinks:{actionBar:'https://docs.silex.me/en/user/selectors',...t.helpLinks}};e.config.selectorManager={...e.config.selectorManager},e.I18n&&e.I18n.addMessages({en:Qt,fr:Xt,...o.i18n}),Jt(e,o),Zt(e,o)};return t})()));
//# sourceMappingURL=index.js.map