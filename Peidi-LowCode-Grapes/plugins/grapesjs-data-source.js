/*! @silexlabs/grapesjs-data-source - 0.1.1 */
!function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define([],t):'object'==typeof exports?exports["@silexlabs/grapesjs-data-source"]=t():e["@silexlabs/grapesjs-data-source"]=t()}('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:this,(()=>(()=>{var e={365:e=>{e.exports=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=[],o='string'==typeof e?[e]:e.slice();o[o.length-1]=o[o.length-1].replace(/\r?\n([\t ]*)$/,'');for(var i=0;i<o.length;i++){var s;(s=o[i].match(/\n[\t ]+/g))&&r.push.apply(r,s)}if(r.length){var a=Math.min.apply(Math,r.map((function(e){return e.length-1}))),l=new RegExp("\n[\t ]{"+a+"}",'g');for(i=0;i<o.length;i++)o[i]=o[i].replace(l,'\n')}o[0]=o[0].replace(/^\r?\n/,'');var d=o[0];for(i=0;i<t.length;i++)d+=t[i]+o[i+1];return d}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e['default']:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(e,'__esModule',{value:!0})};var r={};return(()=>{"use strict";n.r(r),n.d(r,{BinaryOperator:()=>E,COMMAND_ADD_DATA_SOURCE:()=>x,COMMAND_PREVIEW_ACTIVATE:()=>g,COMMAND_PREVIEW_DEACTIVATE:()=>m,COMMAND_PREVIEW_REFRESH:()=>y,COMMAND_PREVIEW_TOGGLE:()=>b,COMMAND_REFRESH:()=>v,COMPONENT_NAME_PREFIX:()=>uo,COMPONENT_STATE_CHANGED:()=>s,DATA_SOURCE_CHANGED:()=>i,DATA_SOURCE_DATA_LOAD_CANCEL:()=>d,DATA_SOURCE_DATA_LOAD_END:()=>l,DATA_SOURCE_DATA_LOAD_START:()=>a,DATA_SOURCE_ERROR:()=>o,DATA_SOURCE_READY:()=>t,FIXED_TOKEN_ID:()=>e,NOTIFICATION_GROUP:()=>po,PREVIEW_ACTIVATED:()=>h,PREVIEW_DEACTIVATED:()=>f,PREVIEW_RENDER_END:()=>p,PREVIEW_RENDER_ERROR:()=>u,PREVIEW_RENDER_START:()=>c,Properties:()=>S,UnariOperator:()=>w,addDataSource:()=>Fr,addFilters:()=>Zr,buildPageQueries:()=>Dr,builtinTypeIds:()=>_,builtinTypes:()=>$,clearPreviewData:()=>Gr,createDataSource:()=>co,default:()=>ho,fromStored:()=>Yr,getAllDataSources:()=>Ur,getCompletion:()=>Wr,getDataSource:()=>Mr,getExpressionResultType:()=>Xr,getOrCreatePersistantId:()=>no,getPageExpressions:()=>Kr,getPageQuery:()=>Pr,getPersistantId:()=>to,getPreviewData:()=>Br,getState:()=>ro,getStateIds:()=>oo,getStateVariableName:()=>ao,getValue:()=>Jr,loadPreviewData:()=>zr,refreshDataSources:()=>Hr,removeDataSource:()=>qr,removeFilters:()=>eo,removeState:()=>so,setPreviewData:()=>Vr,setPreviewIndex:()=>Qr,setState:()=>io,toExpression:()=>lo,version:()=>fo});const e='fixed',t='data-source:ready',o='data-source:error',i='data-source:changed',s='component:state:changed',a='data-source:data-load:start',l='data-source:data-load:end',d='data-source:data-load:cancel',c='data-source:start:preview',p='data-source:start:end',u='data-source:start:error',h='data-source:preview:activated',f='data-source:preview:deactivated',v='data-source:refresh',g='data-source:preview:activate',m='data-source:preview:deactivate',y='data-source:preview:refresh',b='data-source:preview:toggle',x='data-source:add',_=['String','Int','Float','Boolean','ID','Unknown'],$=_.map((e=>({id:e,label:e,fields:[]})));var w,E,S;!function(e){e["TRUTHY"]="truthy",e["FALSY"]="falsy",e["EMPTY_ARR"]="empty array",e["NOT_EMPTY_ARR"]="not empty array"}(w||(w={})),function(e){e["EQUAL"]="==",e["NOT_EQUAL"]="!=",e["GREATER_THAN"]=">",e["LESS_THAN"]="<",e["GREATER_THAN_OR_EQUAL"]=">=",e["LESS_THAN_OR_EQUAL"]="<="}(E||(E={})),function(e){e["innerHTML"]="innerHTML",e["condition"]="condition",e["condition2"]="condition2",e["__data"]="__data"}(S||(S={}));const k='publicStates',A='privateStates',T='id-plugin-data-source',O='nameForDataSource';function I(e){var t;return null!==(t=e.get(T))&&void 0!==t?t:null}function C(e){const t=e.get(T);if(t)return t;const n=`${e.ccid}-${Math.round(1e4*Math.random())}`;return e.set(T,n),n}function j(e,t){return t?I(t)===e?t:j(e,t.parent()):null}const N=[];function R(e,t){N.forEach((n=>n(e,t)))}function L(e,t=!0,n){var r;try{const o=(null!==(r=e.get(t?k:A))&&void 0!==r?r:[]).sort((e=>e.hidden?-1:0)).map((e=>e.id));if(n){const e=o.indexOf(n);return e<0?o:o.slice(0,e)}return o}catch(e){return console.error('Error while getting state ids',e),[]}}function P(e,t=!0){var n;return(null!==(n=e.get(t?k:A))&&void 0!==n?n:[]).map((e=>({label:e.label,hidden:e.hidden,expression:e.expression})))}function D(e,t,n=!0){var r,o;const i=null!==(o=(null!==(r=e.get(n?k:A))&&void 0!==r?r:[]).find((e=>e.id===t)))&&void 0!==o?o:null;return i?{label:i.label,hidden:i.hidden,expression:i.expression}:null}function U(e,t,n,r=!0,o=-1){var i,s;const a=r?k:A,l=null!==(i=e.get(a))&&void 0!==i?i:[],d=null!==(s=l.find((e=>e.id===t)))&&void 0!==s?s:null;if(d?e.set(a,l.map((e=>e.id!==t?e:Object.assign({id:t},n)))):e.set(a,[...l,Object.assign({id:t},n)]),o>=0){const n=[...e.get(a)],r=n.find((e=>e.id===t));r&&o<n.length&&(n.splice(n.indexOf(r),1),n.splice(o,0,r),e.set(a,n))}R({label:n.label,hidden:n.hidden,expression:n.expression},e)}function M(e,t,n=!0){var r;const o=n?k:A,i=(null!==(r=e.get(o))&&void 0!==r?r:[]).filter((e=>e.id!==t));e.set(o,i),R(null,e)}let F=null;function q(){if(!F)throw new Error('DataSourceRegistry not initialized. Call initializeDataSourceRegistry first.');return F}function H(){return[...q().dataSources]}function z(e){const t=q();t.dataSources.push(e),e.connect().then((()=>{t.editor.trigger(i)})).catch((e=>{console.error('Failed to connect data source:',e),t.editor.trigger(i)}))}function B(e){const t=q(),n=t.dataSources.indexOf(e);n>-1&&(t.dataSources.splice(n,1),t.editor.trigger(i))}function V(e){return q().dataSources.find((t=>t.id===e))}function Q(e){const t=q();t.dataSources=[...e],t.editor.trigger(i)}const G=globalThis,J=G.ShadowRoot&&(void 0===G.ShadyCSS||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),W=new WeakMap;class Y{constructor(e,t,n){if(this._$cssResult$=!0,n!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(J&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=W.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&W.set(t,e))}return e}toString(){return this.cssText}}const X=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1]),e[0]);return new Y(n,e,K)},Z=J?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new Y("string"==typeof e?e:e+"",void 0,K))(t)})(e):e,{is:ee,defineProperty:te,getOwnPropertyDescriptor:ne,getOwnPropertyNames:re,getOwnPropertySymbols:oe,getPrototypeOf:ie}=Object,se=globalThis,ae=se.trustedTypes,le=ae?ae.emptyScript:"",de=se.reactiveElementPolyfillSupport,ce=(e,t)=>e,pe={toAttribute(e,t){switch(t){case Boolean:e=e?le:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},ue=(e,t)=>!ee(e,t),he={attribute:!0,type:String,converter:pe,reflect:!1,useDefault:!1,hasChanged:ue};Symbol.metadata??=Symbol("metadata"),se.litPropertyMetadata??=new WeakMap;class fe extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=he){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);void 0!==r&&te(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:o}=ne(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const i=r?.call(this);o?.call(this,t),this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??he}static _$Ei(){if(this.hasOwnProperty(ce("elementProperties")))return;const e=ie(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ce("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ce("properties"))){const e=this.properties,t=[...re(e),...oe(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(Z(e))}else void 0!==e&&t.push(Z(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(J)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const n of t){const t=document.createElement("style"),r=G.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=n.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(void 0!==r&&!0===n.reflect){const o=(void 0!==n.converter?.toAttribute?n.converter:pe).toAttribute(t,n.type);this._$Em=e,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){const n=this.constructor,r=n._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=n.getPropertyOptions(r),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:pe;this._$Em=r,this[r]=o.fromAttribute(t,e.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){const r=this.constructor,o=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??ue)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:o},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),!0!==o||void 0!==i)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e){const{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,n,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}}fe.elementStyles=[],fe.shadowRootOptions={mode:"open"},fe[ce("elementProperties")]=new Map,fe[ce("finalized")]=new Map,de?.({ReactiveElement:fe}),(se.reactiveElementVersions??=[]).push("2.1.0");const ve=globalThis,ge=ve.trustedTypes,me=ge?ge.createPolicy("lit-html",{createHTML:e=>e}):void 0,ye="$lit$",be=`lit$${Math.random().toFixed(9).slice(2)}$`,xe="?"+be,_e=`<${xe}>`,$e=document,we=()=>$e.createComment(""),Ee=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Se=Array.isArray,ke=e=>Se(e)||"function"==typeof e?.[Symbol.iterator],Ae="[ \t\n\f\r]",Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oe=/-->/g,Ie=/>/g,Ce=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),je=/'/g,Ne=/"/g,Re=/^(?:script|style|textarea|title)$/i,Le=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Pe=Le(1),De=(Le(2),Le(3),Symbol.for("lit-noChange")),Ue=Symbol.for("lit-nothing"),Me=new WeakMap,Fe=$e.createTreeWalker($e,129);function qe(e,t){if(!Se(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==me?me.createHTML(t):t}const He=(e,t)=>{const n=e.length-1,r=[];let o,i=2===t?"<svg>":3===t?"<math>":"",s=Te;for(let t=0;t<n;t++){const n=e[t];let a,l,d=-1,c=0;for(;c<n.length&&(s.lastIndex=c,l=s.exec(n),null!==l);)c=s.lastIndex,s===Te?"!--"===l[1]?s=Oe:void 0!==l[1]?s=Ie:void 0!==l[2]?(Re.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=Ce):void 0!==l[3]&&(s=Ce):s===Ce?">"===l[0]?(s=o??Te,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?Ce:'"'===l[3]?Ne:je):s===Ne||s===je?s=Ce:s===Oe||s===Ie?s=Te:(s=Ce,o=void 0);const p=s===Ce&&e[t+1].startsWith("/>")?" ":"";i+=s===Te?n+_e:d>=0?(r.push(a),n.slice(0,d)+ye+n.slice(d)+be+p):n+be+(-2===d?t:p)}return[qe(e,i+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class ze{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,i=0;const s=e.length-1,a=this.parts,[l,d]=He(e,t);if(this.el=ze.createElement(l,n),Fe.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=Fe.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(ye)){const t=d[i++],n=r.getAttribute(e).split(be),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:o,name:s[2],strings:n,ctor:"."===s[1]?Je:"?"===s[1]?Ke:"@"===s[1]?We:Ge}),r.removeAttribute(e)}else e.startsWith(be)&&(a.push({type:6,index:o}),r.removeAttribute(e));if(Re.test(r.tagName)){const e=r.textContent.split(be),t=e.length-1;if(t>0){r.textContent=ge?ge.emptyScript:"";for(let n=0;n<t;n++)r.append(e[n],we()),Fe.nextNode(),a.push({type:2,index:++o});r.append(e[t],we())}}}else if(8===r.nodeType)if(r.data===xe)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(be,e+1));)a.push({type:7,index:o}),e+=be.length-1}o++}}static createElement(e,t){const n=$e.createElement("template");return n.innerHTML=e,n}}function Be(e,t,n=e,r){if(t===De)return t;let o=void 0!==r?n._$Co?.[r]:n._$Cl;const i=Ee(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),void 0===i?o=void 0:(o=new i(e),o._$AT(e,n,r)),void 0!==r?(n._$Co??=[])[r]=o:n._$Cl=o),void 0!==o&&(t=Be(e,o._$AS(e,t.values),o,r)),t}class Ve{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??$e).importNode(t,!0);Fe.currentNode=r;let o=Fe.nextNode(),i=0,s=0,a=n[0];for(;void 0!==a;){if(i===a.index){let t;2===a.type?t=new Qe(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new Ye(o,this,e)),this._$AV.push(t),a=n[++s]}i!==a?.index&&(o=Fe.nextNode(),i++)}return Fe.currentNode=$e,r}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Qe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=Ue,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Be(this,e,t),Ee(e)?e===Ue||null==e||""===e?(this._$AH!==Ue&&this._$AR(),this._$AH=Ue):e!==this._$AH&&e!==De&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):ke(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Ue&&Ee(this._$AH)?this._$AA.nextSibling.data=e:this.T($e.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,r="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=ze.createElement(qe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new Ve(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Me.get(e.strings);return void 0===t&&Me.set(e.strings,t=new ze(e)),t}k(e){Se(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const o of e)r===t.length?t.push(n=new Qe(this.O(we()),this.O(we()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Ge{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,o){this.type=1,this._$AH=Ue,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Ue}_$AI(e,t=this,n,r){const o=this.strings;let i=!1;if(void 0===o)e=Be(this,e,t,0),i=!Ee(e)||e!==this._$AH&&e!==De,i&&(this._$AH=e);else{const r=e;let s,a;for(e=o[0],s=0;s<o.length-1;s++)a=Be(this,r[n+s],t,s),a===De&&(a=this._$AH[s]),i||=!Ee(a)||a!==this._$AH[s],a===Ue?e=Ue:e!==Ue&&(e+=(a??"")+o[s+1]),this._$AH[s]=a}i&&!r&&this.j(e)}j(e){e===Ue?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Je extends Ge{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ue?void 0:e}}class Ke extends Ge{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ue)}}class We extends Ge{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){if((e=Be(this,e,t,0)??Ue)===De)return;const n=this._$AH,r=e===Ue&&n!==Ue||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==Ue&&(n===Ue||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ye{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Be(this,e)}}const Xe={M:ye,P:be,A:xe,C:1,L:He,R:Ve,D:ke,V:Be,I:Qe,H:Ge,N:Ke,U:We,B:Je,F:Ye},Ze=ve.litHtmlPolyfillSupport;Ze?.(ze,Qe),(ve.litHtmlVersions??=[]).push("3.3.0");const et=(e,t,n)=>{const r=n?.renderBefore??t;let o=r._$litPart$;if(void 0===o){const e=n?.renderBefore??null;r._$litPart$=o=new Qe(t.insertBefore(we(),e),e,void 0,n??{})}return o._$AI(e),o},tt=globalThis;class nt extends fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=et(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return De}}nt._$litElement$=!0,nt["finalized"]=!0,tt.litElementHydrateSupport?.({LitElement:nt});const rt=tt.litElementPolyfillSupport;rt?.({LitElement:nt});(tt.litElementVersions??=[]).push("4.2.0");const ot=`\n  query IntrospectionQuery {\n    __schema {\n      queryType {\n        name\n      }\n      types {\n        ...FullType\n      }\n    }\n  }\n  fragment FullType on __Type {\n    kind\n    name\n    description\n    fields(includeDeprecated: true) {\n      name\n      description\n      args {\n        ...InputValue\n      }\n      type {\n        ...TypeRef\n      }\n      isDeprecated\n      deprecationReason\n    }\n    inputFields {\n      ...InputValue\n    }\n    interfaces {\n      ...TypeRef\n    }\n    enumValues(includeDeprecated: true) {\n      name\n      description\n      isDeprecated\n      deprecationReason\n    }\n    possibleTypes {\n      ...TypeRef\n    }\n  }\n  fragment InputValue on __InputValue {\n    name\n    description\n    type {\n      ...TypeRef\n    }\n    defaultValue\n  }\n  fragment TypeRef on __Type {\n    kind\n    name\n    possibleTypes {\n      kind\n      name\n    }\n    ofType {\n      kind\n      name\n      possibleTypes {\n        kind\n        name\n      }\n      ofType {\n        kind\n        name\n        possibleTypes {\n          kind\n          name\n        }\n        ofType {\n          kind\n          name\n          possibleTypes {\n            kind\n            name\n          }\n          ofType {\n            kind\n            name\n            possibleTypes {\n              kind\n              name\n            }\n            ofType {\n              kind\n              name\n              possibleTypes {\n                kind\n                name\n              }\n              ofType {\n                kind\n                name\n                possibleTypes {\n                  kind\n                  name\n                }\n                ofType {\n                  kind\n                  name\n                  possibleTypes {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n`;var it=n(365),st=n.n(it),at=void 0&&(void 0).__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r["throw"](e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))};class lt{constructor(e){this.type='graphql',this.method='POST',this.headers={},this.types=[],this.queryables=[],this.queryType='',this.ready=!1,this.eventListeners={},this.id=e.id.toString(),this.label=e.label,this.url=e.url,this.type=e.type,this.method=e.method||'POST',this.headers=e.headers||{},this.queryable=e.queryable,this.readonly=e.readonly,this.hidden=e.hidden}on(e,t){this.eventListeners[e]||(this.eventListeners[e]=[]),this.eventListeners[e].push(t)}off(e,t){this.eventListeners[e]&&(this.eventListeners[e]=t?this.eventListeners[e].filter((e=>e!==t)):[])}trigger(e,...t){this.eventListeners[e]&&this.eventListeners[e].forEach((e=>e(...t)))}triggerError(e){throw console.error('GraphQL error:',e),this.trigger(o,e,this),new Error(e)}loadData(){return at(this,void 0,void 0,(function*(){var e,t,n;try{const r=yield this.call(ot);if(!(null===(t=null===(e=r.data)||void 0===e?void 0:e.__schema)||void 0===t?void 0:t.types))return this.triggerError(`Invalid response: ${JSON.stringify(r)}`);const o=r.data.__schema.types.map((e=>e.name)).concat(_),i=null===(n=r.data.__schema.queryType)||void 0===n?void 0:n.name;if(!i)return this.triggerError(`Invalid response, queryType not found: ${JSON.stringify(r)}`);const s=r.data.__schema.types.find((e=>e.name===i));if(!s)return this.triggerError(`Invalid response, query not found: ${JSON.stringify(r)}`);const a=r.data.__schema.types.filter((e=>!e.name.startsWith('__'))).filter((e=>!(null==s?void 0:s.fields.find((t=>t.name===e.name))))).map((e=>this.graphQLToType(o,e,'SCALAR',!1))).concat($);if(!s)return this.triggerError('Query type not found in GraphQL schema');const l=s.fields.map((e=>({type:Object.assign(Object.assign({},r.data.__schema.types.find((t=>t.name===this.getOfTypeProp('name',e.type,e.name)))),{name:e.name}),kind:this.ofKindToKind(e.type)}))).map((({type:e,kind:t})=>this.graphQLToType(o,e,t,!0))),d=s.fields.map((e=>this.graphQLToField(e)));return[l.concat(a),d,i]}catch(e){return this.triggerError(`GraphQL introspection failed: ${e.message}`)}}))}graphQLToField(e){var t;const n=this.ofKindToKind(e.type);return{id:e.name,dataSourceId:this.id,label:e.name,typeIds:this.graphQLToTypes(e),kind:n?this.graphQLToKind(n):'unknown',arguments:null===(t=e.args)||void 0===t?void 0:t.map((e=>({name:e.name,typeId:this.getOfTypeProp('name',e.type,e.name),defaultValue:e.defaultValue})))}}getOfTypeProp(e,t,n){const r=this.getOfTypePropRecursive(e,t);if(r)return r;if(n)return n;throw new Error(`Type ${JSON.stringify(t)} has no property ${e} and no default was provided`)}getOfTypePropRecursive(e,t){if(!t)throw console.error('Invalid type',t),new Error('Invalid type');if(t.ofType){const n=this.getOfTypePropRecursive(e,t.ofType);if(n)return n}return t[e]}graphQLToTypes(e){const t=this.getOfTypeProp('possibleTypes',e.type,[]);return t.length>0?t.map((e=>e.name)):[this.getOfTypeProp('name',e.type,e.name)]}graphQLToKind(e){switch(e){case'LIST':return'list';case'OBJECT':return'object';case'SCALAR':return'scalar';default:throw new Error(`Unable to find a valid kind for ${e}`)}}validKind(e){return['LIST','OBJECT','SCALAR'].includes(e)}ofKindToKind(e){if(e.possibleTypes){const t=e.possibleTypes.reduce(((t,n)=>{if(!t)return n.kind;if(t!==n.kind)throw new Error(`Unable to find a valid kind for ${e.kind}. Union types with different kind is not supported`);return t}),null);return t||(console.error('Unable to find a valid kind (1)',e),null)}return this.validKind(e.kind)?e.kind:e.ofType?this.ofKindToKind(e.ofType):null}graphQLToType(e,t,n,r){var o,i,s;const a=this.queryable;return{id:t.name,dataSourceId:this.id,label:t.name,fields:null!==(s=null===(i=null===(o=t.fields)||void 0===o?void 0:o.filter((t=>e.includes(this.getOfTypeProp('name',t.type,t.name)))))||void 0===i?void 0:i.map((e=>this.graphQLToField(e))))&&void 0!==s?s:[],queryable:r&&(!a||a.includes(t.name))}}connect(){return at(this,void 0,void 0,(function*(){try{const[e,n,r]=yield this.loadData();if(0===e.length)return this.triggerError('No types found in GraphQL schema');if(0===n.length)return this.triggerError('No fields found in GraphQL schema');if(!r)return this.triggerError('No query type found in GraphQL schema');this.types=e,this.queryables=n,this.queryType=r,this.ready?this.trigger(i,this):(this.ready=!0,this.trigger(t,this))}catch(e){return this.triggerError(`GraphQL connection failed: ${e.message}`)}}))}isConnected(){return this.ready}getTypes(){if(!this.ready)throw console.error('DataSource is not ready. Attempted to get types before ready status was achieved.'),new Error('DataSource is not ready. Ensure it is connected and ready before querying.');if(0===this.types.length)throw console.error('No types available. It seems the data source may not be connected or the schema is incomplete.',this.ready),new Error('No types found. The data source may not be connected or there might be an issue with the schema.');return this.types}getQueryables(){return this.queryables}call(e){return at(this,void 0,void 0,(function*(){var t;const n=this.url;if(!n)return this.triggerError('Missing GraphQL URL');const r=this.headers;if(!r)return this.triggerError('Missing GraphQL headers');const o=Object.keys(r).find((e=>'content-type'===e.toLowerCase()));r[o||'Content-Type']=r[o||'Content-Type']||'application/json';const i=null!==(t=this.method)&&void 0!==t?t:'POST',s=yield fetch(n,Object.assign({method:i,headers:r},'POST'===i?{body:JSON.stringify({query:e})}:{}));return(null==s?void 0:s.ok)?s.json():(console.error('GraphQL call failed',null==s?void 0:s.status,null==s?void 0:s.statusText,e),this.triggerError(`GraphQL call failed with \`${null==s?void 0:s.statusText}\` and status ${null==s?void 0:s.status}`))}))}getQuery(e){return this.getQueryRecursive({token:{dataSourceId:this.id,fieldId:'query',kind:'object',typeIds:[this.queryType]},children:e})}getQueryRecursive(t,n='',r=''){const o=r?`...on ${r}`:`${t.token.fieldId}${function(e){const t=e?`(${Object.keys(e).map((t=>({key:t,value:e[t]}))).filter((({value:e})=>!Tt(e))).map((({key:e,value:t})=>`${e}: ${t}`)).join(', ')})`:'';return'()'===t?'':t}(t.token.options)}`;switch(t.token.kind){case'scalar':return t.token.fieldId===e?'':n+o;case'object':case'list':{const e=this.getTypes().filter((e=>{var n;return null===(n=t.token.typeIds)||void 0===n?void 0:n.includes(e.id)}));if(0===e.length)throw new Error(`Type not found for ${t.token.fieldId} (${t.token.typeIds})`);if(e.length>1)throw new Error(`Multiple types found for ${t.token.fieldId}`);const r=e[0],i=t.children.map((e=>{const t=r.fields.find((t=>t.id===e.token.fieldId));return t?{fieldType:t,child:e}:null})).filter((e=>null!==e)),s=i.filter((({fieldType:e})=>e.typeIds.length>1)).map((({child:e})=>({query:this.getQueryRecursive(e,n+'  ',e.token.typeIds[0]),child:e}))).map((({query:e,child:t})=>st()`
            ${n}${t.token.fieldId} {
              ${e}
            }
          `)).join('\n'),a=i.filter((({fieldType:e})=>1===e.typeIds.length)).map((({child:e})=>this.getQueryRecursive(e,n+'  '))).join('\n');return st()`${n}${o} {
        ${n}  __typename
        ${a}
        ${s}
        ${n}}`}default:throw console.error('Unable to build GraphQL query',t),new Error(`Unable to build GraphQL query: unable to build tree ${JSON.stringify(t)}`)}}fetchValues(e){return at(this,void 0,void 0,(function*(){return(yield this.call(e)).data}))}}const dt='Data source';function ct(e){const t=e.parent(),n=null==t?void 0:t.getName(),r=null==t?void 0:t.get('tagName'),o=n?`${n} (${r})`:r,i=e.cid,s=e.get('tagName'),a=e.getClasses(),l=a.length?`.${a.join('.')}`:'';return`${o} > ${e.getName()} (${s}#${i}${l})`}function pt(e,t){switch(t.type){case'property':{const e=function(e,t){const n=e.join(', ').toLowerCase();return'list'===t?` (${n}[])`:'object'===t?` (${n}{})`:` (${n})`}(t.typeIds,t.kind);return`${t.label} ${e}`}case'filter':return t.label;case'state':return function(e,t){var n;const r=j(t.componentId,e),o=null!==(n=null==r?void 0:r.get(O))&&void 0!==n?n:'';return`${o?o+' ':''}${t.label||t.storedStateId}`}(e,t);default:throw console.error('Unknown token type (reading type)',t),new Error('Unknown token type')}}function ut(e,t,n,r){return n.reduce(((n,o)=>{var i,s,a,l;let d;switch(o.type){case'filter':d='Filters';break;case'property':if(o.dataSourceId)if(r.length>0)try{const e=St(r,t);d=null!==(s=null!==(i=null==e?void 0:e.label)&&void 0!==i?i:null==e?void 0:e.id)&&void 0!==s?s:'Unknown'}catch(e){console.error('Error while getting expression result type in groupByType',{expression:r,component:t}),d='Unknown'}else{const t=V(o.dataSourceId);if(!t)throw console.error('Data source not found',o.dataSourceId),e.runCommand('notifications:add',{type:'error',group:dt,message:`Data source not found: ${o.dataSourceId}`}),new Error(`Data source not found: ${o.dataSourceId}`);d=t.label||(null===(l=(a=t).get)||void 0===l?void 0:l.call(a,'label'))||o.dataSourceId}else d='Fields';break;case'state':{const e=j(o.componentId,t),n='body'===(null==e?void 0:e.get('tagName'))?'Website':null==e?void 0:e.getName();d=n?`${n}'s states`:'States';break}default:throw console.error('Unknown token type (reading type)',o),new Error('Unknown token type')}return n[d]||(n[d]=[]),n[d].push(o),n}),{})}function ht(t){return{type:'property',propType:'field',fieldId:e,label:'Fixed value',kind:'scalar',typeIds:['String'],options:{value:t},optionsForm:()=>Pe`
        <label>Value
          <input type="text" name="value" .value=${t}>
        </label>
    `}}function ft(e){return JSON.stringify(Object.assign({},e))}function vt(e){switch(e.type){case'property':return`property__${e.dataSourceId||''}__${e.fieldId}__${e.kind}__${e.typeIds.join(',')}`;case'filter':return`filter____${e.id}`;case'state':return`state__${e.componentId}__${e.storedStateId}`;default:throw console.error('Unknown token type (reading type)',e),new Error('Unknown token type')}}function gt(e,t,n){return $t(JSON.parse(t),n)}function mt(t){try{return'string'==typeof t&&(t=JSON.parse(t)),function(t){if('string'==typeof t)throw new Error('json must be parsed');return!!Array.isArray(t)&&t.every((t=>{var n;if('object'!=typeof t)return!1;if(!t.type)return!1;switch(t.type){case'property':if(!t.fieldId)return!1;if(t.fieldId===e&&!(null===(n=t.options)||void 0===n?void 0:n.value))return!1;break;case'state':if(!t.componentId)return!1;if(!t.storedStateId)return!1;break;case'filter':if(!t.id)return!1}return!0}))}(t)?t:null}catch(e){return null}}function yt(e,t,n){if(!e)return null;if(e.kind!==t)throw console.error(`Field is not a ${t}`,e),new Error(`Field ${e.label} is not a ${t}`);return Object.assign(Object.assign({},e),{kind:n})}function bt(e,t){if(void 0===e)throw new Error('el option must be set');if('string'==typeof e){const t=document.querySelector(e);if(!t)throw new Error(`Element ${e} not found`);return t}if('function'==typeof e){const t=e();if(!t)throw new Error('el option must be a returned by the provided function');return t}if(e instanceof HTMLElement)return e;throw new Error(`${t} must be a string or an HTMLElement or a function`)}function xt(e=Math.random().toString(36).slice(2,8)){return{id:`ds-${e}`,label:'New data source',type:'graphql',url:'',method:'POST',headers:{},readonly:!1}}function _t(e={},t){const n=Object.assign(Object.assign({},xt(t)),e);if('graphql'===n.type)return new lt(n);throw new Error(`Unknown data source type: ${n.type}`)}function $t(e,t){var n;if(!e||'object'!=typeof e)throw console.error('Invalid token: not an object',e),new Error('Invalid token: expected an object');if(!e.type)throw console.error('Invalid token: missing type property',e),new Error('Invalid token: missing type property');switch(e.type){case'filter':{if(e.optionsForm)return e;const t=tn().find((t=>t.id===e.id));if(!t)throw console.error('Filter not found',e),new Error(`Filter ${e.id} not found`);return Object.assign(Object.assign(Object.assign({},t),e),{type:'filter'})}case'property':{if(e.optionsForm)return e;const r=Et(e,t);if(!r)throw console.error('Field not found for token',e),new Error(`Field ${e.fieldId} not found`);return Object.assign(Object.assign(Object.assign({},null!==(n=kt(r))&&void 0!==n?n:{}),e),{type:'property',propType:'field'})}case'state':return e;default:throw console.error('Unknown token type (reading type)',e),new Error('Unknown token type')}}function wt(e,t,n){var r,o,i;switch(e.type){case'filter':try{const n=function(e,t){if('filter'!==e.type)throw new Error('Token is not a filter');const n=t.find((t=>t.id===e.id));if(!n)throw console.error('Filter not found',e),new Error(`Filter ${e.id} not found`);return Object.assign(Object.assign(Object.assign({},e),n),{options:e.options})}(e,tn());try{if(n.validate(t))return n.output(t,null!==(r=n.options)&&void 0!==r?r:{})}catch(n){return console.warn('Filter validate error:',n,{token:e,prev:t}),null}return null}catch(r){return console.error('Error while getting filter result type',{token:e,prev:t,component:n}),null}case'property':try{return Et(e,n.getId())}catch(t){return console.error('Error while getting property result type',{token:e,component:n}),null}case'state':{const r=j(e.componentId,n);if(!r){console.warn('Component not found for state',e);return Zt().editor.runCommand('notifications:add',{type:'error',group:dt,message:`Component not found for state: ${e.storedStateId}`,componentId:n.getId()}),null}const s=null===(o=D(r,e.storedStateId,e.exposed))||void 0===o?void 0:o.expression;if(!s){console.warn('State is not defined on component',{component:r,token:e});return Zt().editor.runCommand('notifications:add',{type:'error',group:dt,message:`State '${e.storedStateId}' is not defined on component '${r.getName()||r.get('id')}'`,componentId:r.getId()}),null}try{const t=St(s,r);return t?Object.assign(Object.assign({},t),{kind:null!==(i=e.forceKind)&&void 0!==i?i:t.kind}):null}catch(o){return console.error('Error while getting expression result type in tokenToField',{expression:s,parent:r,component:n,token:e,prev:t}),null}}default:throw console.error('Unknown token type (reading type)',e),new Error('Unknown token type')}}function Et(e,t){var n,r;const o=Zt(),i=o.cachedTypes.length>0?o.cachedTypes:[],s=[];for(const a of e.typeIds){const l=i.find((t=>t.id===a&&(!e.dataSourceId||t.dataSourceId===e.dataSourceId)));l?s.push(l.label):(o.editor.runCommand('notifications:add',{type:'error',group:dt,message:`Type not found ${null!==(n=e.dataSourceId)&&void 0!==n?n:''}.${a}`,componentId:t}),console.error(`Type not found ${null!==(r=e.dataSourceId)&&void 0!==r?r:''}.${a}`))}const a=e.options?Object.entries(e.options).map((([e,t])=>({typeId:'JSON',name:e,defaultValue:t}))):void 0;return{id:e.fieldId,label:s.length>0?s.join(', '):e.label,typeIds:e.typeIds,kind:e.kind,dataSourceId:e.dataSourceId,arguments:a,previewIndex:e.previewIndex}}function St(e,t){return e.reduce(((e,n)=>wt($t(n,t.getId()),e,t)),null)}function kt(e){return e.arguments&&e.arguments.length>0?{optionsForm:(t=e.arguments.map((e=>({name:e.name,value:e.defaultValue}))),(e,n,r)=>Pe`
              ${t.map((e=>{var t,n;const o=null!==(n=null!==(t=r[e.name])&&void 0!==t?t:e.value)&&void 0!==n?n:'';return Pe`<label>${e.name}</label><input type="text" name=${e.name} .value=${o}>`}))}
          `),options:e.arguments.reduce(((e,t)=>(e[t.name]=t.defaultValue,e)),{})}:null;var t}function At(e,t){if(!e&&!t)return{error:!1,result:void 0};if(Tt(e)&&Tt(t))return{error:!1,result:void 0};if(!e||!t)return{error:!0,result:void 0};if(Tt(e)||Tt(t))return{error:!0,result:void 0};const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return{error:!0,result:void 0};for(const r of n)if(e[r]!==t[r])return{error:!0,result:void 0};return{error:!1,result:e}}function Tt(e){if(null==e)return!0;const t='string'==typeof e,n=t&&function(e){if('string'!=typeof e)return!1;if(0===e.length)return!1;try{JSON.parse(e)}catch(e){return!1}return!0}(e);if(t&&!n)return''===e;const r=n?JSON.parse(e):e;return Array.isArray(r)?0===r.length:'object'==typeof r&&0===Object.values(r).filter((e=>!!e)).length}function Ot(e,t){return void 0===t.previewIndex?e:Array.isArray(e)?e[t.previewIndex]:e}function It(t,n,r=null){if(0===t.length)return r;const o=t.map((e=>Object.assign({},e))),[i,...s]=o;switch(i.type){case'state':return function(e,t,n,r){var o;const i=Ct(e,n.component,n);if(!i)throw new Error(`Unable to resolve state: ${JSON.stringify(e)}`);const s=null===(o=i[i.length-1])||void 0===o?void 0:o.previewIndex;'items'===e.storedStateId&&void 0!==s&&(i[0].isItems=!0);return It([...i,...t],n,r)}(i,s,n,r);case'property':return function(t,n,r,o){var i;if(t.fieldId===e)return It(n,r,null===(i=t.options)||void 0===i?void 0:i.value);let s;if(null==o){if(!t.dataSourceId)throw new Error(`Data source ID is missing for token: ${JSON.stringify(t)}`);s=r.previewData[t.dataSourceId]}else s=o;let a=s?s[t.fieldId]:null;if(r.resolvePreviewIndex){const e=n[0];e&&'filter'===e.type||(a=Ot(a,t))}n.length>0&&!r.resolvePreviewIndex&&'filter'!==n[0].type&&(a=Ot(a,t));return t.isItems&&void 0!==t.previewIndex&&n.length>0&&(a=[a]),It(n,r,a)}(i,s,n,r);case'filter':return function(e,t,n,r){var o;const i=Object.entries(e.options).reduce(((e,[t,r])=>{const o=mt(r);return e[t]=o?It(o,n,null):r,e}),{}),s=n.filters.find((t=>t.id===e.id));if(!s)throw new Error(`Filter not found: ${e.id}`);let a;try{a=s.apply(r,i)}catch(e){return console.warn(`Filter "${s.id}" error:`,e,{filter:s.id,prevValues:r,options:i,valueType:typeof r,isArray:Array.isArray(r),isNull:null===r}),null}t.length>0&&'filter'===(null===(o=t[0])||void 0===o?void 0:o.type)||!(n.resolvePreviewIndex||t.length>0)||(a=Ot(a,e));return It(t,n,a)}(i,s,n,r);default:throw new Error(`Unsupported token type: ${JSON.stringify(i)}`)}}function Ct(e,t,n){const r=j(e.componentId,t);if(!r)return console.error('Component not found for state',e,t.get('id-plugin-data-source')),null;const o=D(r,e.storedStateId,e.exposed);return(null==o?void 0:o.expression)?o.expression.flatMap((e=>{var o;return'state'===e.type?null!==(o=Ct($t(e,t.getId()),r,n))&&void 0!==o?o:[]:e})):(console.warn('State is not defined on component',r.getId(),e,o),null)}function jt(e,t){const n=[],r=t.getMainComponent();return r&&r.onAll((e=>{P(e,!0).concat(P(e,!1)).forEach((t=>{t.expression&&n.push({expression:t.expression,component:e})})),Object.values(e.getAttributes()).forEach((t=>{const r=mt(t);r&&n.push({expression:r,component:e})}))})),n}function Nt(e,{expression:t,component:n},r){if(0===t.length)return[];const o=t[0];switch(o.type){case'property':{if(o.dataSourceId!==r)return[];const i=Nt(e,{expression:t.slice(1),component:n},r);return 0===i.length?[{token:o,children:[]}]:i.flatMap((t=>function(e,t,n,r){const o=e.dataSources.find((e=>e.id===r));if(!o)throw new Error(`Data source not found ${r}`);if(!o.isConnected())throw new Error(`Data source ${r} is not ready (not connected)`);const i=o.getTypes().filter((e=>t.typeIds.includes(e.id))).flatMap((e=>e.fields.map((e=>e.typeIds)).flat()));return i.length>0&&n.typeIds.some((e=>i.includes(e)))}(e,o,t.token,r)?{token:o,children:[t]}:[{token:o,children:[]},t]))}case'filter':{const i=Object.values(o.options).map((e=>mt(e))).filter((e=>!!e&&e.length>0)).flatMap((t=>Nt(e,{expression:t,component:n},r))),s=Nt(e,{expression:t.slice(1),component:n},r);return 0===s.length?i:s.flatMap((e=>[e,...i]))}case'state':{const t=Ct(o,n,e);if(!t)throw e.editor.runCommand('notifications:add',{type:'error',group:dt,message:`Unable to resolve state <pre>${JSON.stringify(o)}</pre>`,componentId:n.getId()}),new Error(`Unable to resolve state ${JSON.stringify(o)}. State defined on component ${ct(n)}`);return Nt(e,{expression:t,component:n},r)}default:throw e.editor.runCommand('notifications:add',{type:'error',group:dt,message:`Invalid expression <pre>${JSON.stringify(t)}</pre>`,componentId:n.getId()}),new Error(`Invalid expression ${JSON.stringify(t)}. Expression used on component ${ct(n)}`)}}function Rt(e,t,n){return 0===t.length?[]:t.flatMap((t=>Nt(e,t,n))).reduce(((e,t)=>{const n=e.find((e=>e[0].token.fieldId===t.token.fieldId&&(!t.token.dataSourceId||e[0].token.dataSourceId===t.token.dataSourceId)));return n?n.push(t):e.push([t]),e}),[]).map((n=>{try{return n.reduce(((e,t)=>Lt(e,t)))}catch(r){throw e.editor.runCommand('notifications:add',{type:'error',group:dt,message:`Unable to merge trees <pre>${JSON.stringify(n)}</pre>`,componentId:t[0].component.getId()}),r}}))}function Lt(e,t){if(e.token.dataSourceId!==t.token.dataSourceId)throw console.error('Unable to merge trees',e,t),new Error(`Unable to build GraphQL query: unable to merge trees ${JSON.stringify(e)} and ${JSON.stringify(t)}`);const n=e.children.filter((e=>t.children.find((t=>e.token.fieldId===t.token.fieldId&&At(e.token.options,t.token.options).error)))).map((e=>{const n=t.children.find((t=>e.token.fieldId===t.token.fieldId));return`${e.token.fieldId} appears twice with different options: ${JSON.stringify(e.token.options)} vs ${JSON.stringify(null==n?void 0:n.token.options)}`}));if(n.length>0)throw console.error('Unable to merge trees',n),new Error(`Unable to build GraphQL query: unable to merge trees: \n* ${n.join('\n* ')}`);const r=e.children.filter((e=>!t.children.find((t=>e.token.fieldId===t.token.fieldId&&e.token.typeIds.join(',')===t.token.typeIds.join(',')&&!At(e.token.options,t.token.options).error)))).concat(t.children.filter((t=>!e.children.find((e=>e.token.fieldId===t.token.fieldId&&e.token.typeIds.join(',')===t.token.typeIds.join(',')&&!At(e.token.options,t.token.options).error))))),o=e.children.filter((e=>t.children.find((t=>e.token.fieldId===t.token.fieldId&&e.token.typeIds.join(',')===t.token.typeIds.join(',')&&!At(e.token.options,t.token.options).error))));return{token:e.token,children:r.concat(o.map((e=>{const n=t.children.find((t=>e.token.fieldId===t.token.fieldId));return Lt(e,n)})))}}function Pt(e,t){const n=Zt(),r=jt(0,e);return H().map((e=>{if(!e.isConnected())return console.error('The data source is not yet connected, the value for this page can not be loaded'),{dataSourceId:e.id.toString(),query:''};const o=r.map((e=>({component:e.component,expression:e.expression.flatMap((n=>{switch(n.type){case'property':case'filter':return n;case'state':{const r=Ct(n,e.component,[]);if(!r)throw t.runCommand('notifications:add',{type:'error',group:dt,message:`Unable to resolve state ${JSON.stringify(n)}. State defined on component ${ct(e.component)}`,componentId:e.component.getId()}),new Error(`Unable to resolve state ${JSON.stringify(n)}. State defined on component ${ct(e.component)}`);return r}}}))}))).filter((t=>{const n=t.expression;if(0===n.length)return!1;const r=n[0];return(null==r?void 0:r.dataSourceId)===e.id})),i=Rt(n,o,e.id);if(0===i.length)return{dataSourceId:e.id.toString(),query:''};const s=e.getQuery(i);return{dataSourceId:e.id.toString(),query:s}})).filter((e=>!!e.query)).reduce(((e,{dataSourceId:t,query:n})=>(e[t]=n,e)),{})}var Dt=void 0&&(void 0).__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r["throw"](e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))};let Ut=null;function Mt(){if(!Ut)throw new Error('PreviewDataLoader not initialized. Call initializePreviewDataLoader first.');return Ut}function Ft(){return Dt(this,arguments,void 0,(function*(e=!1){const t=Mt();t.editor.trigger(a);const n=t.editor.Pages.getSelected();if(!n)return;const r=Pt(n,t.editor),o=!function(e,t){const n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&!!n.every((e=>r.includes(e)))&&n.every((n=>e[n]===t[n]))}(t.lastQueries,r);if(!e&&!o)return void t.editor.trigger(l,rn());t.lastQueries=Object.assign({},r),t.currentUpdatePid++;const i=yield function(e){return Dt(this,void 0,void 0,(function*(){const t=Mt(),n=t.currentUpdatePid,r=Pt(e,t.editor);on({});try{const e=yield Promise.all(Object.entries(r).map((e=>Dt(this,[e],void 0,(function*([e,r]){if(n!==t.currentUpdatePid)return;const o=H().find((t=>t.id===e));if(!o)return console.error(`Data source ${e} not found`),null;if(!o.isConnected())return console.warn(`Data source ${e} is not connected.`),null;try{const t=yield o.fetchValues(r),n=rn();return on(Object.assign(Object.assign({},n),{[e]:t})),{dataSourceId:e,value:t}}catch(n){return console.error(`Error fetching preview data for data source ${e}:`,n),t.editor.runCommand('notifications:add',{type:'error',group:dt,message:`Error fetching preview data for data source ${e}: ${n}`}),null}})))));return n!==t.currentUpdatePid?'interrupted':e.filter((e=>null!==e)).reduce(((e,t)=>{const{dataSourceId:n,value:r}=t;return e[n]=r,e}),{})}catch(e){return console.error('Error while fetching preview data:',e),t.editor.runCommand('notifications:add',{type:'error',group:dt,message:`Error while fetching preview data: ${e}`}),{}}}))}(n);'interrupted'!==i?t.editor.trigger(l,i):(console.warn(`Preview data update process for PID ${t.currentUpdatePid} was interrupted.`),t.editor.trigger(d,i))}))}function qt(){return rn()}function Ht(e,t=!0){if(!e||t&&'scalar'!==e.kind)return!1;const n=e.typeIds.map((e=>e.toLowerCase()));return n.includes('number')||n.includes('int')}function zt(e,t=!0){return!(!e||t&&'scalar'!==e.kind)&&e.typeIds.map((e=>e.toLowerCase())).includes('string')}function Bt(e){return[{type:'filter',id:'strip_html',label:'strip_html',validate:e=>zt(e),output:e=>e,apply:e=>e.replace(/<[^>]*>/g,''),options:{}},{type:'filter',id:'append',label:'append',validate:e=>zt(e),output:e=>e,apply:(e,t)=>`${e}${t.value}`,options:{value:''},optionsForm:(t,n,r,o)=>Pe`
        <state-editor
          .selected=${t}
          .editor=${e}
          name="value"
          parent-name=${o}
          data-is-input
          no-filters
          class="ds-state-editor__options"
          value=${r.value||'[]'}
        >
          <label slot="label">Suffix</label>
        </state-editor>
      `},{type:'filter',id:'prepend',label:'prepend',validate:e=>zt(e),output:e=>e,apply:(e,t)=>`${t.value}${e}`,options:{value:''},optionsForm:(t,n,r,o)=>Pe`
        <state-editor
          .selected=${t}
          .editor=${e}
          name="value"
          parent-name=${o}
          data-is-input
          no-filters
          class="ds-state-editor__options"
          value=${r.value||'[]'}
        >
          <label slot="label">Prefix</label>
        </state-editor>
      `},{type:'filter',id:'where',label:'where',validate:e=>!!e&&'list'===e.kind,output:e=>e,apply:(e,t)=>{const{key:n,value:r}=t;return e.filter((e=>e[n]===r))},options:{key:'',value:''},quotedOptions:['key'],optionsKeys:['key','value'],optionsForm:(t,n,r,o)=>{var i;return Pe`
        <state-editor
          .selected=${t}
          .editor=${e}
          no-filters
          data-is-input
          class="ds-state-editor__options"
          value=${r.key||[]}
          name="key"
          root-type=${null!==(i=null==n?void 0:n.typeIds[0])&&void 0!==i?i:''}
        >
          <label slot="label">Key to filter on</label>
        </state-editor>
        <p>==</p>
        <state-editor
          .selected=${t}
          .editor=${e}
          no-filters
          parent-name=${o}
          data-is-input
          class="ds-state-editor__options"
          value=${r.value||[]}
          name="value"
        >
          <label slot="label">Value to match</label>
        </state-editor>
    `}},{type:'filter',id:'find',label:'find',validate:e=>!!e&&'list'===e.kind,output:e=>yt(e,'list','object'),apply:(e,t)=>{const{key:n,value:r}=t;return e.find((e=>e[n]===r))},options:{key:'',value:''},quotedOptions:['key'],optionsKeys:['key','value'],optionsForm:(t,n,r,o)=>{var i;return Pe`
        <state-editor
          .selected=${t}
          .editor=${e}
          no-filters
          data-is-input
          class="ds-state-editor__options"
          value=${r.key||[]}
          name="key"
          root-type=${null!==(i=null==n?void 0:n.typeIds[0])&&void 0!==i?i:''}
        >
          <label slot="label">Key to filter on</label>
        </state-editor>
        <p>==</p>
        <state-editor
          .selected=${t}
          .editor=${e}
          no-filters
          parent-name=${o}
          data-is-input
          class="ds-state-editor__options"
          value=${r.value||[]}
          name="value"
        >
          <label slot="label">Value to match</label>
        </state-editor>
      `}},{type:'filter',id:'first',label:'first',validate:e=>!!e&&'list'===e.kind,output:e=>yt(e,'list','object'),apply:e=>e[0],options:{}},{type:'filter',id:'last',label:'last',validate:e=>!!e&&'list'===e.kind,output:e=>yt(e,'list','object'),apply:e=>e[e.length-1],options:{}},{type:'filter',id:'join',label:'join',validate:e=>zt(e,!1)&&'list'===(null==e?void 0:e.kind),output:e=>yt(e,'list','scalar'),apply:(e,t)=>{var n;return e.join(null!==(n=t.separator)&&void 0!==n?n:',')},options:{separator:','},quotedOptions:['separator'],optionsForm:(t,n,r,o)=>Pe`
        <state-editor
          .selected=${t}
          .editor=${e}
          no-filters
          parent-name=${o}
          data-is-input
          class="ds-state-editor__options"
          value=${r.separator||[]}
          name="separator"
        >
          <label slot="label">Separator</label>
        </state-editor>
    `},{type:'filter',id:'split',label:'split',validate:e=>zt(e),output:e=>yt(e,'scalar','list'),apply:(e,t)=>{var n;return e.split(null!==(n=t.separator)&&void 0!==n?n:',')},options:{separator:','},quotedOptions:['separator'],optionsForm:(t,n,r,o)=>Pe`
        <state-editor
          .selected=${t}
          .editor=${e}
          no-filters
          parent-name=${o}
          data-is-input
          class="ds-state-editor__options"
          value=${r.separator||[]}
          name="separator"
        >
          <label slot="label">Separator</label>
        </state-editor>
    `},{type:'filter',id:'map',label:'map',validate:e=>!!e&&('list'===e.kind||'object'===e.kind),output:(e,t)=>function(e,t,n){if(!t||!n)return null;const r=H().find((e=>e.id===t.dataSourceId));if(!(null==r?void 0:r.isConnected()))return null;const o=t.typeIds.map((e=>r.getTypes().find((t=>t.id===e)))).filter(Boolean).map((e=>null==e?void 0:e.fields.find((e=>e.label===n)))).filter(Boolean);switch(o.length){case 0:return null;case 1:return o[0];default:return{id:`${t.id}.${n}`,label:`${t.label}.${n}`,typeIds:o.reduce(((e,t)=>e.concat(t.typeIds.filter((t=>!e.includes(t))))),[]),kind:'object',dataSourceId:t.dataSourceId}}}(0,e,t['key']),apply:(e,t)=>e.map((e=>e[t.key])),options:{key:''},quotedOptions:['key'],optionsForm:(t,n,r)=>{var o;return Pe`
        <state-editor
          .selected=${t}
          .editor=${e}
          no-filters
          data-is-input
          class="ds-state-editor__options"
          value=${r.key||[]}
          name="key"
          root-type=${null!==(o=null==n?void 0:n.typeIds[0])&&void 0!==o?o:''}
        >
          <label slot="label">Key to map</label>
        </state-editor>
      `}},{type:'filter',id:'reverse',label:'reverse',validate:e=>!!e&&'list'===e.kind,output:e=>e,apply:e=>[...e].reverse(),options:{}},{type:'filter',id:'size',label:'size',validate:e=>!!e&&'list'===e.kind,output:()=>({id:'Int',label:'Int',typeIds:['Int'],kind:'scalar'}),apply:e=>e.length,options:{}},{type:'filter',id:'at',label:'at',validate:e=>!!e&&'list'===e.kind,output:e=>yt(e,'list','object'),apply:(e,t)=>e[t.index],options:{index:0},optionsForm:(e,t,n)=>Pe`
        <label>Index
          <input type="number" name="index" placeholder="Index" .value=${n.index}/>
        </label>
    `},{type:'filter',id:'slice',label:'slice',validate:e=>!!e&&'list'===e.kind,output:e=>e,apply:(e,t)=>e.slice(t.start,t.end),options:{start:0,end:0},optionsKeys:['start','end'],optionsForm:(t,n,r,o)=>Pe`
        <state-editor
          .selected=${t}
          .editor=${e}
          no-filters
          parent-name=${o}
          data-is-input
          class="ds-state-editor__options"
          value=${r.start||[]}
          name="start"
        >
          <label slot="label">Start index</label>
        </state-editor>
        <state-editor
          .selected=${t}
          .editor=${e}
          no-filters
          parent-name=${o}
          data-is-input
          class="ds-state-editor__options"
          value=${r.end||[]}
          name="end"
        >
          <label slot="label">End index</label>
        </state-editor>
      `},{type:'filter',id:'sort',label:'sort',validate:e=>!!e&&'list'===e.kind,output:e=>e,apply:(e,t)=>e.sort(((e,n)=>e[t.key]<n[t.key]?-1:e[t.key]>n[t.key]?1:0)),quotedOptions:['key'],options:{key:''},optionsForm:(t,n,r)=>{var o;return Pe`
        <state-editor
          .selected=${t}
          .editor=${e}
          no-filters
          data-is-input
          class="ds-state-editor__options"
          value=${r.key||[]}
          name="key"
          root-type=${null!==(o=null==n?void 0:n.typeIds[0])&&void 0!==o?o:''}
        >
          <label slot="label">Key to sort on</label>
        </state-editor>
      `}},{type:'filter',id:'plus',label:'plus',validate:e=>Ht(e),output:e=>e,apply:(e,t)=>e+t.value,options:{value:0},optionsForm:(e,t,n)=>Pe`
        <label>Value
          <input type="number" name="value" placeholder="Value" .value=${n.value}/>
        </label>
      `},{type:'filter',id:'minus',label:'minus',validate:e=>Ht(e),output:e=>e,apply:(e,t)=>e-t.value,options:{value:0},optionsForm:(e,t,n)=>Pe`
        <label>Value
          <input type="number" name="value" placeholder="Value" .value=${n.value}/>
        </label>
      `},{type:'filter',id:'times',label:'times',validate:e=>Ht(e),output:e=>e,apply:(e,t)=>e*t.value,options:{value:0},optionsForm:(e,t,n)=>Pe`
        <label>Value
          <input type="number" name="value" placeholder="Value" .value=${n.value}/>
        </label>
      `},{type:'filter',id:'divided_by',label:'divided_by',validate:e=>Ht(e),output:e=>e,apply:(e,t)=>e/t.value,options:{value:0},optionsForm:(e,t,n)=>Pe`
        <label>Value
          <input type="number" name="value" placeholder="Value" .value=${n.value}/>
        </label>
      `},{type:'filter',id:'modulo',label:'modulo',validate:e=>Ht(e),output:e=>e,apply:(e,t)=>e%t.value,options:{value:0},optionsForm:(e,t,n)=>Pe`
        <label>Value
          <input type="number" name="value" placeholder="Value" .value=${n.value}/>
        </label>
      `},{type:'filter',id:'abs',label:'abs',validate:e=>Ht(e),output:e=>e,apply:e=>Math.abs(e),options:{}},{type:'filter',id:'ceil',label:'ceil',validate:e=>Ht(e),output:e=>e,apply:e=>Math.ceil(e),options:{}},{type:'filter',id:'floor',label:'floor',validate:e=>Ht(e),output:e=>e,apply:e=>Math.floor(e),options:{}},{type:'filter',id:'round',label:'round',validate:e=>Ht(e),output:e=>e,apply:e=>Math.round(e),options:{}},{type:'filter',id:'at_least',label:'at_least',validate:e=>Ht(e),output:e=>e,apply:(e,t)=>Math.max(e,t.value),options:{value:0},optionsForm:(e,t,n)=>Pe`
        <label>Value
          <input type="number" name="value" placeholder="Value" .value=${n.value}/>
        </label>
      `},{type:'filter',id:'at_most',label:'at_most',validate:e=>Ht(e),output:e=>e,apply:(e,t)=>Math.min(e,t.value),options:{value:0},optionsForm:(e,t,n)=>Pe`
        <label>Value
          <input type="number" name="value" placeholder="Value" .value=${n.value}/>
        </label>
      `},{type:'filter',id:'compact',label:'compact',validate:e=>!!e&&'list'===e.kind,output:e=>e,apply:e=>e.filter((e=>!!e)),options:{}},{type:'filter',id:'default',label:'default',validate:e=>!!e&&'scalar'===e.kind,output:e=>e,apply:(e,t)=>e||t.value,options:{value:''},optionsForm:(t,n,r,o)=>Pe`
        <state-editor
          .selected=${t}
          .editor=${e}
          name="value"
          parent-name=${o}
          data-is-input
          no-filters
          class="ds-state-editor__options"
          value=${r.value||'[]'}
        >
          <label slot="label">Default value</label>
        </state-editor>
      `},{type:'filter',id:'escape',label:'escape',validate:e=>zt(e),output:e=>e,apply:e=>e.replace(/"/g,'\\"'),options:{}},{type:'filter',id:'escape_once',label:'escape_once',validate:e=>zt(e),output:e=>e,apply:e=>e.replace(/"/g,'\\"'),options:{}},{type:'filter',id:'newline_to_br',label:'newline_to_br',validate:e=>zt(e),output:e=>e,apply:e=>e.replace(/\n/g,'<br />'),options:{}},{type:'filter',id:'strip_newlines',label:'strip_newlines',validate:e=>zt(e),output:e=>e,apply:e=>e.replace(/\n/g,''),options:{}},{type:'filter',id:'truncate',label:'truncate',validate:e=>zt(e),output:e=>e,apply:(e,t)=>e.slice(0,t.length),options:{length:50},optionsForm:(e,t,n)=>Pe`
        <label>Length
          <input type="number" name="length" placeholder="Length" .value=${n.length}/>
        </label>
      `},{type:'filter',id:'truncatewords',label:'truncatewords',validate:e=>zt(e),output:e=>e,apply:(e,t)=>e.split(' ').slice(0,t.length).join(' '),options:{length:15},optionsForm:(e,t,n)=>Pe`
        <label>Length
          <input type="number" name="length" placeholder="Length" .value=${n.length}/>
        </label>
      `},{type:'filter',id:'date',label:'date',validate:e=>function(e,t=!0){return!(!e||t&&'scalar'!==e.kind)&&e.typeIds.map((e=>e.toLowerCase())).some((e=>['date','instant'].includes(e)))}(e),output:()=>({id:'String',label:'String',typeIds:['String'],kind:'scalar'}),apply:(e,t)=>new Date(e).toLocaleDateString(t.format),options:{format:'%a, %b %d, %y',timeZone:''},optionsKeys:['format','timeZone'],quotedOptions:['format','timeZone'],optionsForm:(e,t,n)=>Pe`
        <label>Format
          <input type="text" name="format" placeholder="Format" .value=${n.format||'%a, %b %d, %y'}/>
        </label>
        <label>Time zone
          <input type="text" name="timeZone" placeholder="Time zone" .value=${n.timeZone||''}/>
        </label>
      `},{type:'filter',id:'replace',label:'replace',validate:e=>zt(e),output:e=>e,apply:(e,t)=>e.replace(t.search,t.replace),options:{search:'',replace:''},quotedOptions:['search','replace'],optionsKeys:['search','replace'],optionsForm:(e,t,n)=>Pe`
        <label>Search
          <input type="text" name="search" placeholder="Search" .value=${n.search}/>
        </label>
        <label>Replace
          <input type="text" name="replace" placeholder="Replace" .value=${n.replace}/>
        </label>
      `},{type:'filter',id:'replace_first',label:'replace_first',validate:e=>zt(e),output:e=>e,apply:(e,t)=>e.replace(t.search,t.replace),options:{search:'',replace:''},quotedOptions:['search','replace'],optionsKeys:['search','replace'],optionsForm:(e,t,n)=>Pe`
        <label>Search
          <input type="text" name="search" placeholder="Search" .value=${n.search}/>
        </label>
        <label>Replace
          <input type="text" name="replace" placeholder="Replace" .value=${n.replace}/>
        </label>
      `},{type:'filter',id:'replace_last',label:'replace_last',validate:e=>zt(e),output:e=>e,apply:(e,t)=>{const n=e.lastIndexOf(t.search);return-1===n?e:e.slice(0,n)+t.replace+e.slice(n+t.search.length)},options:{search:'',replace:''},quotedOptions:['search','replace'],optionsKeys:['search','replace'],optionsForm:(e,t,n)=>Pe`
        <label>Search
          <input type="text" name="search" placeholder="Search" .value=${n.search}/>
        </label>
        <label>Replace
          <input type="text" name="replace" placeholder="Replace" .value=${n.replace}/>
        </label>
      `},{type:'filter',id:'remove',label:'remove',validate:e=>zt(e),output:e=>e,apply:(e,t)=>e.replace(t.search,''),options:{search:''},quotedOptions:['search'],optionsKeys:['search'],optionsForm:(e,t,n)=>Pe`
        <label>Search
          <input type="text" name="search" placeholder="Search" .value=${n.search}/>
        </label>
      `},{type:'filter',id:'remove_first',label:'remove_first',validate:e=>zt(e),output:e=>e,apply:(e,t)=>e.replace(t.search,''),options:{search:''},quotedOptions:['search'],optionsKeys:['search'],optionsForm:(e,t,n)=>Pe`
        <label>Search
          <input type="text" name="search" placeholder="Search" .value=${n.search}/>
        </label>
      `},{type:'filter',id:'remove_last',label:'remove_last',validate:e=>zt(e),output:e=>e,apply:(e,t)=>{const n=e.lastIndexOf(t.search);return-1===n?e:e.slice(0,n)+e.slice(n+t.search.length)},options:{search:''},quotedOptions:['search'],optionsKeys:['search'],optionsForm:(e,t,n)=>Pe`
        <label>Search
          <input type="text" name="search" placeholder="Search" .value=${n.search}/>
        </label>
      `},{type:'filter',id:'downcase',label:'downcase',validate:e=>zt(e),output:e=>e,apply:e=>e?e.toLowerCase():'',options:{}},{type:'filter',id:'upcase',label:'upcase',validate:e=>zt(e),output:e=>e,apply:e=>e?e.toUpperCase():'',options:{}},{type:'filter',id:'capitalize',label:'capitalize',validate:e=>zt(e),output:e=>e,apply:e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase(),options:{}},{type:'filter',id:'sample',label:'sample',validate:e=>!!e&&'list'===e.kind,output:e=>e,apply:(e,t)=>{const n=parseInt(t.count||'1');return console.log('=========>',{arr:e,options:t}),(e||[]).sort((()=>.5-Math.random())).slice(0,n)},options:{count:'1'},optionsForm:(e,t,n)=>Pe`
        <label>Count
          <input type="number" name="count" placeholder="Count" .value=${n.count}/>
        </label>
      `}]}function Vt(e){if(!e.id)throw new Error('Filter id is required');if(!e.label)throw new Error('Filter label is required');if(!e.validate)throw new Error('Filter validate is required');if(!e.output)throw new Error('Filter output is required');if(!e.apply)throw new Error('Filter apply is required')}function Qt(e){e.forEach(Vt)}void 0&&(void 0).__awaiter;const Gt=[{id:'string',label:'String',fields:[]},{id:'number',label:'Number',fields:[]},{id:'boolean',label:'Boolean',fields:[]},{id:'date',label:'Date',fields:[]},{id:'unknown',label:'Unknown',fields:[]}];let Jt=null;function Kt(e){return e.dataSources.filter((e=>e.isConnected())).flatMap((e=>e.getTypes())).concat(Gt)}function Wt(e){return e.dataSources.filter((e=>e.isConnected())).flatMap((e=>e.getQueryables()))}function Yt(){const e=Zt();e.cachedTypes=Kt(e),e.cachedQueryables=Wt(e)}function Xt(e,n,r){const a=function(e,t){return'string'==typeof t.filters?[...Bt(e)]:t.filters.flatMap((t=>{if('string'==typeof t){if('liquid'===t)return Bt(e);throw new Error(`Unknown filters ${t}`)}return[Object.assign(Object.assign({},t),{type:'filter'})]})).map((e=>Object.assign(Object.assign({},e),{type:'filter'})))}(n,r);Qt(a),function(e){F={dataSources:[],editor:e}}(n),Q(e);const l=H();!function(e){Ut={editor:e,currentUpdatePid:0,lastQueries:{}}}(n);const d={dataChangedBinded:e=>{n.trigger(i,null==e?void 0:e.detail)},dataSourceReadyBinded:e=>{Yt(),n.trigger(t,e),Ft(!0)},dataSourceErrorBinded:(e,t)=>{n.trigger(o,e,t)}};var c;Jt={editor:n,options:r,previewData:{},cachedTypes:[],cachedQueryables:[],dataSources:l,filters:a,eventListeners:d},sn(),n.on(i,(()=>{sn(),Yt(),en()})),Yt(),c=(e,t)=>{Ft().then((()=>n.trigger(s,{state:e,component:t})))},N.push(c)}function Zt(){if(!Jt)throw new Error('DataSourceManager not initialized. Call initializeDataSourceManager first.');return Jt}function en(){Ft(!0)}function tn(){return Zt().filters}function nn(e){Zt().filters=e,Yt()}function rn(){return Zt().previewData}function on(e){Zt().previewData=e}function sn(){const e=Zt(),n=H();e.dataSources=[...n],n.forEach((n=>{'function'==typeof n.off&&(n.off(t,e.eventListeners.dataSourceReadyBinded),n.off(i,e.eventListeners.dataChangedBinded),n.off(o,e.eventListeners.dataSourceErrorBinded))})),n.forEach((n=>{'function'==typeof n.on&&(n.on(t,e.eventListeners.dataSourceReadyBinded),n.on(i,e.eventListeners.dataChangedBinded),n.on(o,e.eventListeners.dataSourceErrorBinded))}))}function an(e,t){var n,r;if(e.nodeType===t.nodeType)if(e.nodeType!==Node.TEXT_NODE){if(e.nodeType===Node.ELEMENT_NODE&&t.nodeType===Node.ELEMENT_NODE){const n=e,o=t;if(n.tagName!==o.tagName)return void(null===(r=e.parentNode)||void 0===r||r.replaceChild(t.cloneNode(!0),e));const i=n.attributes;for(let e=i.length-1;e>=0;e--){const t=i[e].name;o.hasAttribute(t)||n.removeAttribute(t)}const s=o.attributes;for(let e=0;e<s.length;e++){const t=s[e];n.getAttribute(t.name)!==t.value&&n.setAttribute(t.name,t.value)}const a=Array.from(n.childNodes),l=Array.from(o.childNodes),d=new Map,c=[];a.forEach((e=>{if(e.nodeType===Node.ELEMENT_NODE){const t=e.id;t?(d.has(t)||d.set(t,[]),d.get(t).push(e)):c.push(e)}else c.push(e)}));const p=new Set;let u=null;l.forEach((e=>{if(e.nodeType===Node.ELEMENT_NODE){const t=e.id;if(t&&d.has(t)){const r=d.get(t).shift();if(!r){const t=e.cloneNode(!0);return u?n.insertBefore(t,u.nextSibling):n.insertBefore(t,n.firstChild),void(u=t)}p.add(r),an(r,e),u?u.nextSibling!==r&&n.insertBefore(r,u.nextSibling):n.firstChild!==r&&n.insertBefore(r,n.firstChild),u=r}else{const t=e.cloneNode(!0);u?n.insertBefore(t,u.nextSibling):n.insertBefore(t,n.firstChild),u=t}}else{const t=c.findIndex((t=>!p.has(t)&&t.nodeType===e.nodeType));if(t>=0){const r=c[t];p.add(r),an(r,e),u?u.nextSibling!==r&&n.insertBefore(r,u.nextSibling):n.firstChild!==r&&n.insertBefore(r,n.firstChild),u=r}else{const t=e.cloneNode(!0);u?n.insertBefore(t,u.nextSibling):n.insertBefore(t,n.firstChild),u=t}}})),a.forEach((e=>{p.has(e)||n.removeChild(e)}))}}else e.textContent!==t.textContent&&(e.textContent=t.textContent);else null===(n=e.parentNode)||void 0===n||n.replaceChild(t.cloneNode(!0),e)}function ln(e,t){return D(e,t,!1)}function dn(e,t,n=!0){try{const r=e.map((e=>{var n;return $t(e,(null===(n=t.getId)||void 0===n?void 0:n.call(t))||null)}));return It(r,{dataSources:H(),filters:tn(),previewData:rn(),component:t,resolvePreviewIndex:n})}catch(e){return console.warn('Error evaluating expression:',e),null}}function cn(e,t){const n=ln(e,S.innerHTML);if(null===n)return null;try{'number'==typeof t&&pn(e,t);const r=function(e,t){return dn(e,t,!0)}(n.expression,e);return null!=r?String(r):null}catch(e){return console.warn('Error rendering innerHTML:',e),null}}function pn(e,t){(e.get('privateStates')||[]).forEach((e=>{e.expression&&e.expression.length>0&&un(e.expression,t)}))}function un(e,t,n){e.forEach((e=>{'state'===e.type&&'__data'===e.storedStateId||'state'===e.type&&'items'===e.storedStateId?(e.previewIndex=t,e.previewGroup=n):'property'!==e.type&&'filter'!==e.type||(e.previewIndex=t,e.previewGroup=n)}))}function hn(e){const t=ln(e,S.condition),n=ln(e,S.condition2),r=e.get('conditionOperator');if(!t||!(null==t?void 0:t.expression)||0===(null==t?void 0:t.expression.length))return!0;let o,i;try{o=dn(t.expression,e,!0)}catch(e){if(console.warn('Error evaluating condition1:',e),null==r)return!0;o=null}switch(r){case w.TRUTHY:return!!o;case w.FALSY:return!o;case w.EMPTY_ARR:return Array.isArray(o)&&0===o.length;case w.NOT_EMPTY_ARR:return Array.isArray(o)&&o.length>0;case void 0:case null:return!!o}if(!n||!n.expression||0===n.expression.length)return!1;try{i=dn(n.expression,e,!0)}catch(e){console.warn('Error evaluating condition2:',e),i=null}switch(r){case E.EQUAL:return o==i;case E.NOT_EQUAL:return o!==i;case E.GREATER_THAN:return Number(o)>Number(i);case E.LESS_THAN:return Number(o)<Number(i);case E.GREATER_THAN_OR_EQUAL:return Number(o)>=Number(i);case E.LESS_THAN_OR_EQUAL:return Number(o)<=Number(i);default:throw new Error(`Unknown operator ${r}`)}}function fn(e){(e.get('privateStates')||[]).forEach((t=>{var n;if(t.id&&t.id!==S.innerHTML&&t.id!==S.__data&&t.id!==S.condition&&t.id!==S.condition2&&t.expression)try{const r=dn(t.expression,e,!0);null!=r&&(null===(n=e.view)||void 0===n||n.el.setAttribute(t.label||t.id,String(r)))}catch(e){console.warn(`Error evaluating attribute ${t.id}:`,e)}}))}function vn(e,t){const n=cn(e);if(null===n)e.components().forEach((e=>mn(e,t+1)));else{const t=e.view.el,r=document.createElement('div');r.innerHTML=n;const o=Array.from(t.childNodes),i=Array.from(r.childNodes),s=Math.min(o.length,i.length);for(let e=0;e<s;e++)an(o[e],i[e]);for(let e=o.length-1;e>=s;e--)t.removeChild(o[e]);for(let e=s;e<i.length;e++)t.appendChild(i[e].cloneNode(!0))}}function gn(e){const t=e.view;t&&(t.render(),e.components().forEach((e=>gn(e))))}function mn(e,t=0){const n=e.view;if(!n)return;const r=n.el,o=function(e){try{const t=ln(e,S.__data);if(null===t)return null;const n=dn(t.expression,e,!1);return Array.isArray(n)?JSON.parse(JSON.stringify(n)):null}catch(e){return console.warn('Error getting loop item:',e),null}}(e);if(o)if(0===o.length)r.remove();else{const n=r.id;let i=r.nextElementSibling;for(;i&&i.id===n;){const e=i;i=i.nextElementSibling,e.remove()}const s=function(e){const t=e.get('privateStates')||[];for(const e of t)if(e.expression&&e.expression.length>0)for(const t of e.expression)if('state'===t.type&&'__data'===t.storedStateId||'property'===t.type||'filter'===t.type)return t.previewIndex}(e)||0,a=o.length-1,l=0;pn(e,a);hn(e)?(vn(e,t),fn(e)):r.remove();for(let n=a-1;n>=l;n--){pn(e,n);if(!hn(e))continue;const o=r.cloneNode(!0);o.classList.remove('gjs-selected'),o.querySelectorAll('.gjs-selected').forEach((e=>e.classList.remove('gjs-selected')));o.querySelectorAll('[style*="display: none"]').forEach((e=>e.remove()));r.querySelectorAll('[style*="display: none"]').forEach((e=>{e instanceof HTMLElement&&e.style&&(e.style.removeProperty('display'),0===e.style.length&&e.removeAttribute('style'))})),o.addEventListener('click',(t=>{const n=t.target;let r=e;if(n.id){const t=e.em,i=(e,t)=>{if(e.getId()===t)return e;for(const n of e.components()){const e=i(n,t);if(e)return e}return null},s=null==t?void 0:t.getWrapper(),a=s?i(s,n.id):null;if(a)r=a;else{const t=[];let i=n;for(;i&&i!==o;){const e=i.parentElement;if(!e)break;{const n=Array.from(e.children).filter((e=>e.hasAttribute('data-gjs-type'))).indexOf(i);n>=0&&t.unshift(n),i=e}}let s=e;for(let e=0;e<t.length;e++){const n=t[e],r=s.components();if(!(n<r.length))break;s=r.at(n)}r=s}}setTimeout((()=>{const e=r.em;e&&e.setSelected(r)})),t.preventDefault(),t.stopImmediatePropagation()})),r.insertAdjacentElement('afterend',o);const i=cn(e);null===i?e.components().forEach((e=>mn(e,t+1))):r.innerHTML=i,fn(e)}pn(e,s)}else{hn(e)?(r.style&&'none'===r.style.display&&(r.style.removeProperty('display'),0===r.style.length&&r.removeAttribute('style')),vn(e,t),fn(e)):r.parentElement&&r.style&&(r.style.display='none')}}function yn(e){var t,n;if(null===(n=null===(t=e.getWrapper())||void 0===t?void 0:t.view)||void 0===n?void 0:n.el)try{e.trigger(c),mn(e.getWrapper()),requestAnimationFrame((()=>{e.trigger(p)}))}catch(t){e.trigger(u,t),console.error('Error during preview render:',t)}}let bn=null,xn=500;function _n(e){bn&&clearTimeout(bn),bn=setTimeout((()=>{yn(e),bn=null}),xn)}function $n(e){const t=e.view;if(!t||!t.el)return;const n=t.el,r=n.id;let o=n.nextElementSibling;for(;o&&o.id===r;){const e=o;o=o.nextElementSibling,e.remove()}e.components().forEach((e=>$n(e)))}const wn=(e,t)=>{const n=t.previewRefreshEvents.split(' ');for(const t of n)e.on(t,(()=>{En&&_n(e)}));e.on('component:remove',(e=>{$n(e)})),setTimeout((()=>{xn=t.previewDebounceDelay}),1e3)};let En=!0;function Sn(e){yn(e)}var kn=void 0&&(void 0).__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{l(r.next(e))}catch(e){i(e)}}function a(e){try{l(r["throw"](e))}catch(e){i(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))};const An=e=>{e.on('storage:start:store',(e=>{e.dataSources=H().filter((e=>void 0===e.readonly||!1===e.readonly)).map((e=>({id:e.id,label:e.label,url:e.url,type:e.type,method:e.method,headers:e.headers,readonly:e.readonly,hidden:e.hidden})))})),e.on('storage:end:load',(e=>kn(void 0,void 0,void 0,(function*(){const t=(e.dataSources||[]).map((e=>new lt(e)));!function(e){Q(e),sn()}(H().filter((e=>!0===e.readonly))),t.forEach((e=>{z(e)})),en()}))))},Tn=`\n  :root {\n    --ds-primary: #8873FE;\n    --ds-secondary: #E5E5E5;\n    --ds-tertiary: #1D1D1D;\n    --ds-highlight: #8873FE;\n    --ds-lowlight: #252525;\n    --ds-button-color: #E5E5E5;\n    --ds-button-bg: #252525;\n    --ds-button-border: var(--ds-button-bg);\n\n    --expression-input-dirty-background-color: var(--ds-button-bg);\n    --expression-input-dirty-border-color: var(--ds-tertiary);\n    --expression-input-dirty-color: var(--ds-highlight);\n    --expression-input-active-color: var(--ds-tertiary);\n    --expression-input-active-background-color: var(--ds-secondary);\n    --popin-dialog-background: var(--ds-secondary);\n    --popin-dialog-color: var(--ds-tertiary);\n    --popin-dialog-header-background: transparent;\n    --popin-dialog-body-background: transparent;\n    --popin-dialog-footer-background: transparent;\n    --expression-input-placeholder-margin: 0 10px;\n    --expression-input-item-button-margin: 0;\n    --expression-input-item-button-padding: 2px;\n    --expression-input-item-button-border-radius: 50%;\n    --expression-input-item-button-width: 20px;\n    --expression-input-item-button-height: 20px;\n    --expression-input-item-button-background-color: transparent;\n    --expression-input-item-button-color: var(--ds-button-color);\n    --expression-input-separator-color: var(--ds-button-color);\n    --expression-input-separator-font-size: 0.7em;\n    --expression-input-separator-margin: 0;\n    --expression-input-separator-padding: 0 3px 0 1px;\n    --expression-input-item-arrow-padding: 5px 5px 0 5px;\n    --expression-input-values-li-icon-margin-right: 0;\n    /*\n    --popin-dialog-header-color: #333;\n    --popin-dialog-body-color: #666;\n    --popin-dialog-footer-color: #333;\n    --popin-dialog-header-border-bottom: none;\n    --popin-dialog-footer-border-top: none;\n    --popin-dialog-header-padding: 0;\n    --popin-dialog-body-padding: 5px;\n    --popin-dialog-footer-padding: 0;\n    */\n  }\n  .ds-state-editor__options {\n    --ds-secondary: #1A1A1A;\n    --ds-tertiary: #F5F5F5;\n    --ds-lowlight: #E0E0E0;\n    --ds-button-color: #1A1A1A;\n    --ds-button-bg: #FFFFFF;\n    --expression-input-dirty-background-color: var(--ds-button-bg);\n    --expression-input-dirty-border-color: var(--ds-tertiary);\n    --expression-input-dirty-color: var(--ds-highlight);\n    --expression-input-active-color: var(--ds-tertiary);\n    --expression-input-active-background-color: var(--ds-secondary);\n  }\n  .gjs-traits-label {\n    font-family: "Ubuntu", sans-serif;\n    font-size: 0.85rem;\n    padding: 9px 10px 9px 20px;\n    text-align: left;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    min-height: 40px;\n  }\n  expression-input {\n    padding: 10px;\n    display: block;\n  }\n  expression-input::part(separator__delete) {\n    border-right: 1px solid var(--ds-button-border);\n    height: 20px;\n  }\n  expression-input::part(add-button) {\n    background-color: var(--ds-tertiary);\n    border-radius: 2px;\n    padding: 3px;\n    margin: 0;\n    border: 1px solid var(--ds-tertiary);\n    width: 24px;\n    height: 24px;\n    box-sizing: border-box;\n    cursor: pointer;\n  }\n  expression-input::part(delete-button) {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    color: var(--ds-button);\n  }\n  expression-input::part(header) {\n    border: none;\n  }\n  expression-input::part(type) {\n    padding-bottom: 0;\n    padding-top: 4px;\n    display: none;\n  }\n  expression-input::part(name) {\n    font-weight: normal;\n    padding-bottom: 0;\n    padding-top: 0;\n    padding-left: 5px;\n  }\n  expression-input::part(property-input) {\n    padding: 4px;\n    border: medium;\n    flex: 1 1 auto;\n    background-color: transparent;\n    color: var(--ds-secondary);\n  }\n  expression-input::part(property-container) {\n    background-color: var(--ds-tertiary);\n    border-radius: 2px;\n    box-sizing: border-box;\n    padding: 5px;\n    margin: 5px 0;\n  }\n  expression-input::part(scroll-container) {\n    overflow: auto;\n    box-sizing: border-box;\n\n    /* inner shadow to make it visible when content is overflowing */\n    box-shadow: inset 0 0 5px 0 rgba(0,0,0,.3);\n\n  }\n  expression-input::part(steps-container) {\n    display: flex;\n    align-items: center;\n    background-color: var(--ds-button-bg);\n    border-radius: 2px;\n    padding: 5px;\n    margin: 5px 0;\n    width: max-content;\n    min-width: 100%;\n    box-sizing: border-box;\n  }\n  expression-input::part(dirty-icon) {\n    cursor: pointer;\n    margin: 0 10px;\n    color: var(--ds-highlight);\n  }\n  expression-input::part(dirty-icon) {\n    color: var(--ds-highlight);\n    vertical-align: bottom;\n    display: inline-flex;\n    margin: 0;\n    margin-left: 20px;\n  }\n  expression-input::part(expression-input-item) {\n    border: 1px solid var(--ds-tertiary);\n    background-color: var(--ds-tertiary);\n    border-radius: 2px;\n    margin-right: 5px;\n  }\n  .ds-section {\n    &:last-child {\n      margin-bottom: 100px;\n    }\n    details {\n      margin: 2px;\n      padding: 2px;\n      background-color: transparent;\n      border-radius: 2px;\n      color: var(--ds-secondary);\n      text-align: left;\n    }\n    details[open] {\n      background-color: var(--ds-tertiary);\n    }\n    details summary {\n      color: var(--ds-secondary);\n      cursor: pointer;\n      padding: 10px 0;\n    }\n    details a {\n      color: var(--ds-link-color);\n    }\n    details .ds-states__help-link {\n      display: block;\n    }\n    details .ds-states__help--tooltip {\n      position: absolute;\n      left: 50%;\n      background: var(--ds-secondary);\n      color: var(--ds-tertiary);\n      padding: 10px;\n    }\n    .gjs-traits-label {\n      background-color: var(--ds-tertiary);\n      span {\n        display: flex;\n        align-items: center;\n      }\n    }\n    main {\n      display: flex;\n      flex-direction: column;\n    }\n    .ds-slot-fixed {\n      width: 100%;\n    }\n    select {\n      width: 150px;\n      flex: 0;\n      margin: 5px;\n      padding: 5px;\n      background-color: var(--ds-button-bg);\n      border-radius: 2px;\n      color: var(--ds-secondary);\n      border: 1px solid var(--ds-tertiary);\n      cursor: pointer;\n      font-size: medium;\n    }\n    input.ds-expression-input__fixed {\n      color: var(--ds-secondary);\n      padding: 10px;\n      border: none;\n      background-color: transparent;\n      width: 100%;\n      box-sizing: border-box;\n    }\n    .ds-expression-input__add {\n      max-width: 40px;\n      text-align: center;\n      font-size: large;\n      padding-right: 9px;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      text-indent: 1px;\n      text-overflow: '';\n    }\n    .ds-expression-input__add option {\n      font-size: medium;\n    }\n    .ds-expression-input__options-button {\n      background-color: transparent;\n      border: none;\n      color: var(--ds-secondary);\n      cursor: pointer;\n      padding: 0;\n      margin: 10px;\n      margin-left: 0;\n    }\n    label.ds-label {\n      display: flex;\n      align-items: center;\n      padding: 10px;\n      color: var(--ds-secondary);\n    }\n    label.ds-label--disabled {\n      justify-content: space-between;\n    }\n    label.ds-label--disabled .ds-label__message {\n      opacity: .5;\n    }\n    select.ds-visibility__condition-operator {\n      margin: 10px;\n    }\n  }\n  /* States CSS Styles */\n  .ds-states {\n    display: flex;\n    flex-direction: column;\n  }\n    .ds-states__buttons {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-end;\n      margin: 0 5px;\n    }\n    .ds-states__button {\n      cursor: pointer;\n      border: 1px solid var(--ds-button-border);\n      border-radius: 2px;\n      padding: 5px;\n      background: var(--ds-button-bg);\n      color: var(--ds-button-color);\n      margin: 5px;\n      padding: 7px 14px;\n    }\n    .ds-states__button--disabled {\n      opacity: 0.5;\n      cursor: default;\n    }\n    .ds-states__remove-button {\n      margin-left: 1em;\n    }\n    .ds-states__sep {\n      width: 100%;\n      border: none;\n      height: 1px;\n      background: var(--ds-button-bg);\n    }\n  /* real data */\n  .ds-real-data {\n    code {\n      overflow: hidden;\n      text-wrap: nowrap;\n      display: block;\n      padding: 0 10px;\n      text-overflow: ellipsis;\n      margin-top: -5px;\n      margin-bottom: 10px;\n      text-align: right;\n    }\n  }\n`,{I:On}=Xe,In=()=>document.createComment(""),Cn=(e,t,n)=>{const r=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===n){const t=r.insertBefore(In(),o),i=r.insertBefore(In(),o);n=new On(t,i,e,e.options)}else{const t=n._$AB.nextSibling,i=n._$AM,s=i!==e;if(s){let t;n._$AQ?.(e),n._$AM=e,void 0!==n._$AP&&(t=e._$AU)!==i._$AU&&n._$AP(t)}if(t!==o||s){let e=n._$AA;for(;e!==t;){const t=e.nextSibling;r.insertBefore(e,o),e=t}}}return n},jn=(e,t,n=e)=>(e._$AI(t,n),e),Nn={},Rn=e=>{e._$AP?.(!1,!0);let t=e._$AA;const n=e._$AB.nextSibling;for(;t!==n;){const e=t.nextSibling;t.remove(),t=e}},Ln=1,Pn=2,Dn=e=>(...t)=>({_$litDirective$:e,values:t});class Un{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Mn=(e,t)=>{const n=e._$AN;if(void 0===n)return!1;for(const e of n)e._$AO?.(t,!1),Mn(e,t);return!0},Fn=e=>{let t,n;do{if(void 0===(t=e._$AM))break;n=t._$AN,n.delete(e),e=t}while(0===n?.size)},qn=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(void 0===n)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Bn(t)}};function Hn(e){void 0!==this._$AN?(Fn(this),this._$AM=e,qn(this)):this._$AM=e}function zn(e,t=!1,n=0){const r=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)Mn(r[e],!1),Fn(r[e]);else null!=r&&(Mn(r,!1),Fn(r));else Mn(this,e)}const Bn=e=>{e.type==Pn&&(e._$AP??=zn,e._$AQ??=Hn)};class Vn extends Un{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),qn(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Mn(this,e),Fn(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}const Qn=()=>new Gn;class Gn{}const Jn=new WeakMap,Kn=Dn(class extends Vn{render(e){return Ue}update(e,[t]){const n=t!==this.G;return n&&void 0!==this.G&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),Ue}rt(e){if(this.isConnected||(e=void 0),"function"==typeof this.G){const t=this.ht??globalThis;let n=Jn.get(t);void 0===n&&(n=new WeakMap,Jn.set(t,n)),void 0!==n.get(this.G)&&this.G.call(this.ht,void 0),n.set(this.G,e),void 0!==e&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return"function"==typeof this.G?Jn.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Wn=(e,t,n)=>{const r=new Map;for(let o=t;o<=n;o++)r.set(e[o],o);return r},Yn=Dn(class extends Un{constructor(e){if(super(e),e.type!==Pn)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let r;void 0===n?n=t:void 0!==t&&(r=t);const o=[],i=[];let s=0;for(const t of e)o[s]=r?r(t,s):s,i[s]=n(t,s),s++;return{values:i,keys:o}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){const o=(e=>e._$AH)(e),{values:i,keys:s}=this.dt(t,n,r);if(!Array.isArray(o))return this.ut=s,i;const a=this.ut??=[],l=[];let d,c,p=0,u=o.length-1,h=0,f=i.length-1;for(;p<=u&&h<=f;)if(null===o[p])p++;else if(null===o[u])u--;else if(a[p]===s[h])l[h]=jn(o[p],i[h]),p++,h++;else if(a[u]===s[f])l[f]=jn(o[u],i[f]),u--,f--;else if(a[p]===s[f])l[f]=jn(o[p],i[f]),Cn(e,l[f+1],o[p]),p++,f--;else if(a[u]===s[h])l[h]=jn(o[u],i[h]),Cn(e,o[p],o[u]),u--,h++;else if(void 0===d&&(d=Wn(s,h,f),c=Wn(a,p,u)),d.has(a[p]))if(d.has(a[u])){const t=c.get(s[h]),n=void 0!==t?o[t]:null;if(null===n){const t=Cn(e,o[p]);jn(t,i[h]),l[h]=t}else l[h]=jn(n,i[h]),Cn(e,o[p],n),o[t]=null;h++}else Rn(o[u]),u--;else Rn(o[p]),p++;for(;h<=f;){const t=Cn(e,l[f+1]);jn(t,i[h]),l[h++]=t}for(;p<=u;){const e=o[p++];null!==e&&Rn(e)}return this.ut=s,((e,t=Nn)=>{e._$AH=t})(e,l),De}}),Xn={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:ue},Zn=(e=Xn,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(void 0===i&&globalThis.litPropertyMetadata.set(o,i=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),"accessor"===r){const{name:r}=n;return{set(n){const o=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,o,e)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=n;return function(n){const o=this[r];t.call(this,n),this.requestUpdate(r,o,e)}}throw Error("Unsupported decorator location: "+r)};function er(e){return(t,n)=>"object"==typeof n?Zn(e,t,n):((e,t,n)=>{const r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}var tr=void 0&&(void 0).__decorate||function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},nr=void 0&&(void 0).__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};const rr=X`
    :host {
      font-family: var(--gjs-main-font);
      font-size: var(--gjs-font-size);
    }
    .ds-field {
      padding: 10px;
    }
    .ds-field > span {
      display: block;
    }
    hr.ds-separator {
      border: none;
      border-top: 1px solid var(--ds-button-bg);
    }
    .ds-field input,
    .ds-field select {
      background-color: var(--gjs-main-dark-color);
      border: none;
      box-shadow: none;
      border-radius: 2px;
      box-sizing: border-box;
      padding: 0;
      position: relative;

      padding: 10px;
      color: inherit;
      width: 100%;
    }
    .ds-btn-prim {
      color:inherit;
      background-color:var(--gjs-main-light-color);
      border-radius:2px;
      padding:3px 6px;
      padding:var(--gjs-input-padding);
      cursor:pointer;
      border:none
    }
    .ds-btn-prim:active {
      background-color:var(--gjs-main-light-color)
    }
    .ds-btn-danger {
      color: var(--gjs-light-color);
      background-color: transparent;
    }
    .ds-btn-danger:hover {
      color: var(--ds-highlight);
    }
    [disabled],
    [readonly] {
      font-style: italic;
    }

    /* Modal specific styles */
    :host(.ds-modal) {
      max-width: 600px;
      width: 90vw;
    }
`;function or(e,t,n){et(Pe`
    <ds-settings
      ${Kn(t)}
      .dataSources=${[]}
      .editor=${e}
      @add=${e=>{const t=e.detail;z(new lt(t))}}
      @add-top=${e=>{const t=e.detail;z(new lt(t))}}
      @delete=${e=>{B(e.detail)}}
      ></ds-settings>
  `,n)}class ir extends nt{constructor(){super(),this.dataSources=[],this.editor=null}connectedCallback(){super.connectedCallback()}openDataSourceModal(e=null){var t;if(!this.editor)return;const n=!!e,r=n?'Edit Data Source':'Add Data Source',o=e||new lt(xt(this.dataSources.length.toString())),i=document.createElement('ds-settings__data-source');i.dataSource=o,i.isEdit=n;const s=()=>{this.dispatchEvent(new CustomEvent('delete',{detail:o})),this.editor.Modal.close()},a=e=>{'Escape'===e.key&&this.editor.Modal.close()};i.addEventListener('change',(()=>{n?this.dispatchEvent(new CustomEvent('change',{detail:o})):this.dispatchEvent(new CustomEvent('add',{detail:o})),this.editor.Modal.close()})),i.addEventListener('cancel',(()=>{this.editor.Modal.close()})),n&&i.addEventListener('delete',s),document.addEventListener('keydown',a);const l=new MutationObserver((()=>{this.editor.Modal.isOpen()||(document.removeEventListener('keydown',a),l.disconnect())})),d=null===(t=this.editor.Modal.getContentEl())||void 0===t?void 0:t.parentElement;d&&l.observe(d,{attributes:!0,attributeFilter:['style','class']}),this.editor.Modal.open({title:r,content:i,attributes:{class:'ds-modal'}})}render(){const e=this.dataSources.filter((e=>!e.hidden));return Pe`
      <section class="ds-settings">
        ${0===e.length?Pe`
          <div class="ds-empty-state">
            <div class="ds-empty-state__content">
              <h3 class="ds-empty-state__title">No Data Sources</h3>
              <p class="ds-empty-state__description">
                Connect to GraphQL APIs to display dynamic data in your website
              </p>
              <button
                type="button"
                class="ds-btn-prim ds-btn-prim--large"
                @click=${()=>this.openDataSourceModal()}
              >
                Add Your First Data Source
              </button>
            </div>
          </div>
        `:Pe`
          <div class="ds-data-sources">
            ${Yn(e,(e=>e.id),(e=>Pe`
              <ds-data-source-card
                .dataSource=${e}
                data-id=${e.id}
                @edit=${e=>this.openDataSourceModal(e.detail)}
                @test=${e=>this.testConnection(e.detail)}
                @delete=${e=>{this.dispatchEvent(new CustomEvent('delete',{detail:e.detail}))}}
              ></ds-data-source-card>
            `))}
          </div>
          <div class="ds-add-section">
            <button
              type="button"
              class="ds-btn-prim"
              @click=${()=>this.openDataSourceModal()}
            >
              Add Data Source
            </button>
          </div>
        `}
      </section>
    `}testConnection(e){var t;const n=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(`ds-data-source-card[data-id="${e.id}"]`);n&&(n.isTestingConnection=!0);const r=document.createElement('ds-settings__data-source');r.dataSource=e,r.connectDataSource=()=>{n&&(n.isTestingConnection=!0),e.connect().then((()=>{n&&(n.isTestingConnection=!1),this.dispatchEvent(new CustomEvent('change',{detail:e})),this.requestUpdate()})).catch((e=>{console.error('Data source connection error',{err:e}),n&&(n.isTestingConnection=!1),this.requestUpdate()}))},r.connectDataSource()}}ir.styles=[rr,X`
      .ds-settings {
        padding: 16px 0;
      }
      .ds-empty-state {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 200px;
        text-align: center;
      }
      .ds-empty-state__content {
        max-width: 300px;
      }
      .ds-empty-state__title {
        margin: 0 0 8px 0;
        font-size: 18px;
        color: inherit;
      }
      .ds-empty-state__description {
        margin: 0 0 24px 0;
        color: var(--gjs-light-color);
        line-height: 1.4;
      }
      .ds-data-sources {
        margin-bottom: 16px;
      }
      .ds-add-section {
        padding: 16px 0;
        border-top: 1px solid var(--ds-button-bg);
        text-align: center;
      }
      .ds-btn-prim--large {
        padding: 12px 24px;
        font-size: 14px;
      }
    `],tr([er({type:Array}),nr("design:type",Array)],ir.prototype,"dataSources",void 0),tr([er({type:Object}),nr("design:type",Object)],ir.prototype,"editor",void 0),customElements.get('ds-settings')||customElements.define('ds-settings',ir);class sr extends nt{constructor(){super(),this.isEdit=!1,this.errorMessage='',this.connected=!1,this.isLoading=!1,this.loadingIcon=Pe`<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="3"><animate attributeName="r" values="3;8;3" dur="1s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/></circle></svg>`,this.connectedIcon=Pe`<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`,this.unknownIcon=Pe`<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2"/></svg>`,this.dataSource=null}connectedCallback(){super.connectedCallback()}connectDataSource(){if(!this.dataSource)throw new Error('No data source provided');this.isLoading=!0,this.errorMessage='',this.requestUpdate(),this.dataSource.connect().then((()=>{this.dispatchEvent(new CustomEvent('change')),this.errorMessage='',this.connected=!0,this.isLoading=!1,this.requestUpdate()})).catch((e=>{console.error('Data source connection error',{err:e}),this.errorMessage=e.message,this.connected=!1,this.isLoading=!1,this.requestUpdate()}))}render(){if(!this.dataSource)throw new Error('No data source provided');const e=Qn();return Pe`
    <form
      ?readonly=${!1!==this.dataSource.readonly}
      @submit=${e=>{e.preventDefault(),e.stopImmediatePropagation(),this.connectDataSource()}}
      >
      <h3 class="ds-property__title">
        ${this.dataSource.label||'Unnamed'}
        <small>${!1!==this.dataSource.readonly?' (Read-only)':''}</small>
      </h3>
      <div class="ds-property__wrapper ds-property__wrapper--horiz">
      <label class="ds-field">
        <span>Label</span>
        <input
          type="text"
          name="label"
          value=${this.dataSource.label}
          @input=${e=>{this.dataSource&&(this.dataSource.label=e.target.value),this.requestUpdate()}}
          ?readonly=${!1!==this.dataSource.readonly}
          />
      </label>
      <label class="ds-field ds-field--large">
        <span>URL</span>
        <input
          type="url"
          name="url"
          value=${this.dataSource.url}
          @change=${e=>{this.dataSource&&(this.dataSource.url=e.target.value)}}
          ?readonly=${!1!==this.dataSource.readonly}
          />
      </label>
      <label class="ds-field">
        <span>ID</span>
        <input
          type="text"
          name="id"
          value=${this.dataSource.id}
          readonly
          disabled
          />
      </label>
      <label class="ds-field">
        <span>Type</span>
        <select
          name="type"
          readonly
          disabled
          >
          <option value="graphql" selected>GraphQL</option>
        </select>
      </label>
      <label class="ds-field">
        <span>Method</span>
        <select
          name="method"
          @change=${e=>{this.dataSource&&(this.dataSource.method=e.target.value)}}
          ?readonly=${!1!==this.dataSource.readonly}
          ?disabled=${!1!==this.dataSource.readonly}
          >
          <option value="POST" ?selected=${'POST'===this.dataSource.method}>POST</option>
          <option value="GET" ?selected=${'GET'===this.dataSource.method}>GET</option>
        </select>
      </label>
      </div>
      <div class="ds-field">
        <details>
          <summary>HTTP Headers</summary>
          <ds-settings__headers
            ${Kn(e)}
            .headers=${this.dataSource.headers}
            @change=${()=>{var t,n;this.dataSource&&(this.dataSource.headers=(null===(t=e.value)||void 0===t?void 0:t.headers)||{}),null===(n=e.value)||void 0===n||n.requestUpdate()}}
            ?readonly=${!1!==this.dataSource.readonly}
            ></ds-settings__headers>
        </details>

        <div class="ds-field">
          <div class="ds-status-section">
            ${this.isLoading?Pe`<div class="ds-status-item ds-status-loading">${this.loadingIcon} Testing connection...</div>`:this.errorMessage?Pe`<div class="ds-status-item ds-status-error">Error: ${this.errorMessage}</div>`:this.dataSource.isConnected()?Pe`<div class="ds-status-item ds-status-success">${this.connectedIcon} Connection successful</div>`:''}
          </div>
        </div>

        <div class="ds-field ds-actions">
          <div class="ds-actions-right">
            <button
              type="button"
              class="ds-btn-prim"
              @click=${()=>{this.dispatchEvent(new CustomEvent('cancel'))}}
            >Cancel</button>
            <button
              type="submit"
              class="ds-btn-prim"
              ?disabled=${this.isLoading}
              >${this.isLoading?'Testing...':'Apply'}</button>
          </div>
        </div>
      </div>
    </form>
    `}}sr.styles=[X`
    form {
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
    form :focus {
      outline: 1px solid var(--ds-highlight);
    }
    .ds-field--large {
      flex: 1 1 auto;
    }
    .ds-property__wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      flex-wrap: wrap;
    }
    .ds-property__wrapper--horiz {
      flex-direction: row;
    }
    .ds-property__wrapper--vert {
      flex-direction: column;
    }
    .ds-status-section {
      margin: 10px 0;
    }
    .ds-status-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-radius: 4px;
      font-size: 14px;
    }
    .ds-status-loading {
      background-color: var(--gjs-main-dark-color);
      color: var(--ds-highlight);
    }
    .ds-status-success {
      background-color: var(--gjs-main-dark-color);
      color: var(--ds-primary);
    }
    .ds-status-error {
      background-color: var(--gjs-main-dark-color);
      color: var(--ds-highlight);
    }
    .ds-actions {
      display: flex;
      gap: 10px;
      justify-content: space-between;
      align-items: center;
      margin-top: 15px;
    }
    .ds-actions-left {
      display: flex;
      gap: 10px;
    }
    .ds-actions-right {
      display: flex;
      gap: 10px;
      margin-left: auto;
    }
    .ds-no-resize {
      flex: 0 0 auto;
    }
    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    `,rr],tr([er({type:Object}),nr("design:type",Object)],sr.prototype,"dataSource",void 0),tr([er({type:Boolean}),nr("design:type",Boolean)],sr.prototype,"isEdit",void 0),customElements.get('ds-settings__data-source')||customElements.define('ds-settings__data-source',sr);class ar extends nt{constructor(){super(),this.isTestingConnection=!1,this.loadingIcon=Pe`<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="3"><animate attributeName="r" values="3;8;3" dur="1s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite"/></circle></svg>`,this.connectedIcon=Pe`<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`,this.errorIcon=Pe`<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`,this.dataSource=null,this.isTestingConnection=!1}render(){if(!this.dataSource)return Pe``;const e=this.dataSource.isConnected();return Pe`
      <div class="ds-card">
        <div class="ds-card__info">
          <h4 class="ds-card__title">${this.dataSource.label||'Unnamed Data Source'}</h4>
          <p class="ds-card__url">${this.dataSource.url||'No URL configured'}</p>
          ${this.isTestingConnection?Pe`
            <div class="ds-card__status ds-card__status--loading">
              ${this.loadingIcon} Testing...
            </div>
          `:e?Pe`
            <div class="ds-card__status ds-card__status--connected">
              ${this.connectedIcon} Connected
            </div>
          `:Pe`
            <div class="ds-card__status ds-card__status--error">
              ${this.errorIcon} Not connected
            </div>
          `}
        </div>
        <div class="ds-card__actions">
          <button
            class="ds-card__btn"
            @click=${()=>this.dispatchEvent(new CustomEvent('edit',{detail:this.dataSource}))}
            ?disabled=${this.isTestingConnection}
          >
            Edit
          </button>
          <button
            class="ds-card__btn"
            @click=${()=>this.dispatchEvent(new CustomEvent('test',{detail:this.dataSource}))}
            ?disabled=${this.isTestingConnection}
          >
            ${this.isTestingConnection?'Testing...':'Test'}
          </button>
          ${!1!==this.dataSource.readonly?'':Pe`
            <button
              class="ds-card__btn ds-card__btn--danger"
              @click=${()=>this.dispatchEvent(new CustomEvent('delete',{detail:this.dataSource}))}
              ?disabled=${this.isTestingConnection}
            >
              Delete
            </button>
          `}
        </div>
      </div>
    `}}ar.styles=[X`
      .ds-card {
        background-color: var(--gjs-main-dark-color);
        border: 1px solid var(--ds-button-bg);
        border-radius: 6px;
        padding: 16px;
        margin: 8px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: border-color 0.2s ease;
      }
      .ds-card:hover {
        border-color: var(--ds-highlight);
      }
      .ds-card__info {
        flex: 1;
        min-width: 0;
      }
      .ds-card__title {
        font-weight: 500;
        margin: 0 0 4px 0;
        color: inherit;
      }
      .ds-card__url {
        font-size: 12px;
        color: var(--gjs-light-color);
        margin: 0 0 8px 0;
        word-break: break-all;
      }
      .ds-card__status {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
      }
      .ds-card__status--connected {
        color: var(--ds-primary);
      }
      .ds-card__status--loading {
        color: var(--ds-highlight);
      }
      .ds-card__status--error {
        color: var(--ds-highlight);
      }
      .ds-card__actions {
        display: flex;
        gap: 8px;
        flex-shrink: 0;
      }
      .ds-card__btn {
        padding: 6px 12px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        background-color: var(--gjs-main-light-color);
        color: inherit;
        transition: background-color 0.2s ease;
      }
      .ds-card__btn:hover {
        background-color: var(--ds-button-bg);
      }
      .ds-card__btn--danger {
        color: var(--ds-highlight);
        background-color: transparent;
      }
      .ds-card__btn--danger:hover {
        background-color: rgba(255, 0, 0, 0.1);
      }
      .ds-card__btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,rr],tr([er({type:Object}),nr("design:type",Object)],ar.prototype,"dataSource",void 0),tr([er({type:Boolean}),nr("design:type",Boolean)],ar.prototype,"isTestingConnection",void 0),customElements.get('ds-data-source-card')||customElements.define('ds-data-source-card',ar);class lr extends nt{constructor(){super(),this.headers={},this.readonly=!1}connectedCallback(){super.connectedCallback()}render(){return Pe`
      <div class="ds-field">
      <fieldset>
      ${this.readonly?'':Pe`
        <button
          type="button"
          class="ds-btn-prim"
          @click=${()=>{let e='Authorization',t='Bearer XXXXXX',n=0;for(;void 0!==this.headers[e];)n++,e=`Header ${n}`,t='';this.headers=Object.assign(Object.assign({},this.headers),{[e]:t}),this.dispatchEvent(new CustomEvent('change'))}}
        >Add a header</button>
      `}
      <ul>
        ${Object.entries(this.headers).map((([e,t])=>Pe`
          <li>
            <label class="ds-field">
              <span>Name</span>
              <input
                type="text"
                value=${e}
                name=${`header-key-${encodeURI(e)}`}
                @change=${n=>{const r=n.target;r.value&&(void 0!==this.headers[e]&&delete this.headers[e],this.headers[r.value]=t,this.dispatchEvent(new CustomEvent('change')))}}
                />
            </label>
            <label class="ds-field">
              <span>Value</span>
              <input
                type="text"
                value=${t}
                name=${`header-value-${encodeURI(t)}`}
                @change=${t=>{const n=t.target;this.headers[e]=n.value,this.dispatchEvent(new CustomEvent('change'))}}
                />
            </label>
            ${this.readonly?'':Pe`
              <button
                type="button"
                class="ds-btn-prim"
                @click=${()=>{void 0!==this.headers[e]&&delete this.headers[e],this.dispatchEvent(new CustomEvent('change'))}}
                .disabled=${this.readonly}
              >Delete</button>
            `}
          </li>
        `))}
      </ul>
      </fieldset>
      </div>
    `}}lr.styles=[X`
    fieldset {
      display: block;
      border: none;
      padding: 0;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    ul > li {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    ul > li > label {
      flex: 1 1 auto;
    }
    ul > li > button {
      margin: 10px;
    }
    `,rr],tr([er({type:Array}),nr("design:type",Object)],lr.prototype,"headers",void 0),tr([er({type:Boolean}),nr("design:type",Boolean)],lr.prototype,"readonly",void 0),customElements.get('ds-settings__headers')||customElements.define('ds-settings__headers',lr);const dr=Dn(class extends Un{constructor(e){if(super(e),e.type!==Ln||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const n=e.element.classList;for(const e of this.st)e in t||(n.remove(e),this.st.delete(e));for(const e in t){const r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return De}}),cr=X`
  .header,
  ::part(header) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .fixed .hide-when-fixed,
  .show-when-fixed {
    visibility: hidden;
    position: absolute;
    top: -9999px;
    left: -9999px;
    display: none;
  }
  .fixed .show-when-fixed {
    visibility: visible;
    position: static;
    display: block;
    width: 100%;
  }
  label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--input-chain-label-font-size, 1rem);
  }
  .dirty {
    color: var(--expression-input-dirty-color, red);
    cursor: pointer;
  }
  .fixed,
  ::part(fixed) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    width: 100%;
  }
  .dirty-icon,
  ::part(dirty-icon),
  .copy-icon,
  ::part(copy-icon),
  .paste-icon,
  ::part(paste-icon) {
    display: inline-flex;
    align-items: center;
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    margin-left: 0.5rem;
    vertical-align: middle;
  }
  .dirty-icon svg,
  .copy-icon svg,
  .paste-icon svg {
    width: 100%;
    height: 100%;
  }
  .property-container,
  ::part(property-container) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    padding: 10px;
    scrollbar-width: thin;
    scrollbar-color: var(--expression-input-active-color, #333)
      var(--expression-input-active-background-color, #eee);
  }
  .fixed-selector,
  ::part(fixed-selector) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--expression-input-dirty-border-color, #ccc);
    background-color: var(--expression-input-dirty-background-color, #ccc);
    border-radius: var(--expression-input-dirty-border-radius, 3px);
    padding: 3px;
  }
  ul[slot='tags'] {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  /* an arrow between elements */
  .steps-container__separator {
    display: inline;
  }
  .steps-container__separator::after {
    content: '▶';
    color: var(--expression-input-separator-color, #333);
    font-size: var(--expression-input-separator-font-size, 1.5em);
    margin: var(--expression-input-separator-margin, 0);
    padding: var(--expression-input-separator-padding, 0);
  }
  /* selector between fixed value (text input) and steps */
  .fixed-selector span {
    padding: 4px 4px 2px 4px;
    font-size: small;
  }
  .fixed-selector span:not(.active):hover {
    color: var(--expression-input-dirty-color, #0091ff);
  }
  .fixed-selector span:not(.active) {
    cursor: pointer;
  }
  .fixed-selector span:last-child {
    margin-left: 5px;
  }
  .fixed-selector span.active {
    border-radius: var(--expression-input-active-border-radius, 3px);
    background-color: var(--expression-input-active-background-color, #eee);
    color: var(--expression-input-active-color, #333);
    cursor: default;
  }
  ul.values-ul {
    list-style: none;
    padding: var(--expression-input-values-ul-padding, 0);
    margin: var(--expression-input-values-ul-margin, 0);
    color: var(--expression-input-values-ul-color, #000);
    background-color: var(
      --expression-input-values-ul-background-color,
      transparent
    );
  }
  li.values-li {
    padding: var(--expression-input-values-li-padding, 5px);
    margin: var(--expression-input-values-li-margin, 0);
    background-color: var(
      --expression-input-values-li-background-color,
      transparent
    );
    border-bottom: var(--expression-input-values-li-border, 1px solid #ccc);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
  }
  li.values-li:last-child {
    border-bottom: none;
  }
  li.values-li:hover {
    background-color: var(
      --expression-input-values-li-hover-background-color,
      #eee
    );
  }
  li.values-li.active {
    background-color: var(
      --expression-input-values-li-active-background-color,
      #ccc
    );
    font-weight: var(--expression-input-values-li-active-font-weight, bold);
  }
  li.values-li.values__title {
    /* Display this line as an array title */
    color: var(--expression-input-values-li-title-color, #333);
    background-color: var(--expression-input-values-li-background-color, #eee);
    text-transform: var(
      --expression-input-values-li-title-text-transform,
      uppercase
    );
    cursor: default;
  }
  li.values-li.values__title .values__name {
    margin: var(--expression-input-values-li-title-margin, auto);
  }
  li.values-li .values__icon {
    margin-right: var(--expression-input-values-li-icon-margin-right, 5px);
  }
  li.values-li .values__name {
    margin-right: var(--expression-input-values-li-name-margin-right, 25px);
  }
  li.values-li .values__type {
    color: var(--expression-input-values-li-type-color, #999);
    width: max-content;
  }
  .placeholder > * {
    color: var(--expression-input-placeholder-color, #999);
    font-style: var(--expression-input-placeholder-font-style, italic);
    margin: var(--expression-input-placeholder-margin, 10px 0);
  }
`,pr=(X`
  :host {
    display: inline-flex;
    flex-direction: column;
    flex-shrink: 0;
  }
  :host header {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: solid 1px gray;
  }
  :host .value {
    display: flex;
    align-items: center;
  }
  :host .buttons {
    display: flex;
    align-items: center;
  }
  :host .button {
    border: none;
    background-color: transparent;
  }
  :host .svg-icon {
    border: var(--expression-input-item-button-border, none);
    cursor: pointer;
    margin: var(--expression-input-item-button-margin, 3px);
    padding: var(--expression-input-item-button-padding, 3px);
    border-radius: var(--expression-input-item-button-border-radius, 50%);
    width: var(--expression-input-item-button-width, 20px);
    height: var(--expression-input-item-button-height, 20px);
    background-color: var(
      --expression-input-item-button-background-color,
      transparent
    );
  }
  /* button svg path white and size 10px
  */
  :host .svg-icon svg path {
    fill: var(--expression-input-item-button-color, #333);
  }
  /*
  :host popin-form {
    position: absolute;
  }
  */
  slot[name='helpTitle'] {
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
  }
  slot[name='name'] {
    font-weight: bold;
    cursor: pointer;
  }
  ::slotted([slot='name']),
  ::slotted([slot='type']) {
    cursor: pointer;
    flex-shrink: 0;
  }
  ::slotted([slot='name']) {
    font-weight: var(--expression-input-item-name-font-weight, bold);
    font-size: var(--expression-input-item-name-font-size, 1rem);
    padding: var(--expression-input-item-name-padding, 5px);
  }
  ::slotted([slot='type']),
  ::slotted([slot='type']) {
    font-weight: var(--expression-input-item-type-font-weight, normal);
    font-size: var(--expression-input-item-type-font-size, 0.8rem);
    padding: var(--expression-input-item-type-padding, 5px);
  }
  .with-arrow::after {
    content: '▼';
    float: right;
    padding: var(--expression-input-item-arrow-padding, 5px);
  }
`,X`
  :host {
    display: inline-block;
    position: fixed;
    max-width: 100vw;
    max-height: 80vh;
    box-sizing: border-box;
    z-index: 1000; /* Ensure it's on top of other content */
    border-radius: var(--popin-form-border-radius, 3px);
    overflow: hidden; /* To ensure border-radius applies to children elements */
    overflow-y: auto;
    outline: none;
    border: var(--popin-form-border, 1px solid #ccc);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: inline-flex;
    flex-direction: column;
    background-color: var(--popin-form-background, #fff);
    color: var(--popin-form-color, #000);
  }
  :host([hidden]) {
    display: none !important;
  }

  header {
    border-bottom: var(--popin-form-header-border-bottom, #f5f5f5);
    background-color: var(--popin-form-header-background, transparent);
    padding: var(--popin-form-header-padding, 0);
    color: var(--popin-form-header-color, #000);
  }

  footer {
    border-top: var(--popin-form-footer-border-top, 1px solid #f5f5f5);
    display: flex;
    justify-content: flex-end;
    background-color: var(--popin-form-footer-background, transparent);
    padding: var(--popin-form-footer-padding);
    color: var(--popin-form-footer-color, #000);
  }

  button {
    border: var(--popin-button-border, 1px solid #ccc);
    border-radius: var(--popin-button-border-radius, 3px);
    background-color: var(--popin-button-background, #f5f5f5);
    color: var(--popin-button-color, #000);
    padding: var(--popin-button-padding, 5px);
    margin: var(--popin-button-margin, 5px);
    cursor: pointer;
  }

  button:hover {
    background-color: var(--popin-button-hover-background, #eee);
    color: var(--popin-button-hover-color, #000);
    border: var(--popin-button-border, 1px solid #ccc);
    padding: var(--popin-button-hover-padding, 5px);
    margin: var(--popin-button-hover-margin, 5px);
  }

  button.secondary {
    background-color: var(--popin-button-background--secondary, transparent);
    color: var(--popin-button-color--secondary, #000);
    border: var(--popin-button-border--secondary, none);
    padding: var(--popin-button-padding--secondary, 5px);
    margin: var(--popin-button-margin--secondary, 5px);
  }

  button.secondary:hover {
    background-color: var(--popin-button-hover-background--secondary, #eee);
    color: var(--popin-button-hover-color--secondary, #000);
    border: var(--popin-button-hover-border--secondary, none);
    padding: var(--popin-button-hover-padding--secondary, 5px);
    margin: var(--popin-button-hover-margin--secondary, 5px);
  }

  main {
    background-color: var(--popin-form-body-background, transparent);
    padding: var(--popin-form-body-padding, 5px);
    color: var(--popin-form-body-color, #000);
    display: flex;
    flex-direction: column;
  }

  ::slotted([slot='header']) {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ::slotted([slot='body']) * {
    background: red !important;
  }
`);var ur=void 0&&(void 0).__decorate||function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};class hr extends nt{get selectTagName(){return this._selectTagName}set selectTagName(e){this._selectTagName=e,this.SELECT_QUERY=`:scope > ${this._selectTagName}`,this.OPTION_QUERY=`:scope > ${this._selectTagName} > ${this._optionTagName}, :scope > ${this._selectTagName} > optgroup > ${this._optionTagName}`,this.requestUpdate()}get optionTagName(){return this._optionTagName}set optionTagName(e){this._optionTagName=e,this.OPTION_QUERY=`:scope > ${this._selectTagName} > ${e}, :scope > ${this._selectTagName} > optgroup > ${e}`,this.requestUpdate()}constructor(){super(),this.SELECT_QUERY=':scope > select, :scope > custom-select',this.OPTION_QUERY=':scope > select > option, :scope > select > optgroup > option, :scope > custom-select > custom-option',this.for='',this.name='',this.reactive=!1,this._selectTagName='select',this._optionTagName='option',this._form=null,this.onChange_=this.onChangeValue.bind(this),this.onFormdata=e=>{if(!this.name)throw new Error('Attribute name is required for input-chain');this.options.filter((e=>e.selected)).forEach((t=>{e.formData.append(this.name,t.value)}))},this.redrawing=!1}set form(e){this._form&&this._form.removeEventListener('formdata',this.onFormdata),e&&e.addEventListener('formdata',this.onFormdata)}get form(){return this._form}get options(){return Array.from(this.querySelectorAll(this.OPTION_QUERY))}render(){return Pe` <slot></slot> `}connectedCallback(){if(super.connectedCallback(),this.for){const e=document.querySelector(`form#${this.for}`);e&&(this.form=e)}else this.form=this.closest('form');this.shadowRoot.addEventListener('change',this.onChange_)}disconnectedCallback(){this.shadowRoot.removeEventListener('change',this.onChange_),this.form=null,super.disconnectedCallback()}onChangeValue(e){const t=e.target,n=Array.from(this.querySelectorAll(this.SELECT_QUERY));n.includes(t)&&(this.changeAt(n.indexOf(t)),e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),this.requestUpdate())}changeAt(e,t=!1){if(!this.redrawing){if(this.redrawing=!0,this.reactive){if(t){Array.from(this.querySelectorAll(':scope > select, :scope > custom-select'))[0].value=''}this.dispatchEvent(new CustomEvent('change',{detail:{idx:e}}))}else{const t=Array.from(this.querySelectorAll(':scope > select, :scope > custom-select')),n=e>=0?t[e]:t[0],r=(null==n?void 0:n.value)?t[e+1]:n||t[0],o=(null==n?void 0:n.value)?e+1:e;r&&(t.slice(o+1).forEach((e=>e.remove())),r.value=''),this.dispatchEvent(new Event('change'))}this.redrawing=!1}}}hr.styles=cr,ur([er({type:String,attribute:'for'})],hr.prototype,"for",void 0),ur([er({type:String})],hr.prototype,"name",void 0),ur([er({type:Boolean})],hr.prototype,"reactive",void 0),ur([er({type:String,attribute:'select-tag-name'})],hr.prototype,"selectTagName",null),ur([er({type:String,attribute:'option-tag-name'})],hr.prototype,"optionTagName",null),ur([er({type:Array})],hr.prototype,"options",null),window.customElements.get('input-chain')||window.customElements.define('input-chain',hr);var fr=void 0&&(void 0).__decorate||function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};class vr extends hr{constructor(){super(...arguments),this.allowFixed=!0,this._fixed=!1,this.placeholder='Enter a fixed value or switch to expression'}get dirty(){return this.value.length>0}get value(){var e;return this.fixed?[null===(e=this.getFixedInput())||void 0===e?void 0:e.value].filter((e=>!!e)):this.options.filter((e=>e.selected&&e.value)).map((e=>e.value))}get fixed(){return this._fixed}set fixed(e){this._fixed=e,this.dispatchEvent(new Event('fixedChange'))}get canPaste(){try{return!!localStorage.getItem(vr.STORAGE_KEY)}catch{return!1}}connectedCallback(){super.connectedCallback()}copy(){const e={type:'expression-input',fixed:this.fixed,value:this.value};try{localStorage.setItem(vr.STORAGE_KEY,JSON.stringify(e)),this.dispatchEvent(new CustomEvent('copy',{detail:e})),this.requestUpdate()}catch(e){throw console.error('Failed to copy expression:',e),e}}async paste(){try{const e=localStorage.getItem(vr.STORAGE_KEY);if(!e)throw new Error('No expression to paste');const t=JSON.parse(e);if('expression-input'!==t.type||!Array.isArray(t.value))throw new Error('Invalid expression data format');if(this.fixed=t.fixed,this.fixed){const e=this.getFixedInput();e&&t.value.length>0&&(e.value=t.value[0])}else await this.restoreExpression(t.value);this.dispatchEvent(new CustomEvent('paste',{detail:t})),this.dispatchEvent(new Event('change')),this.requestUpdate()}catch(e){throw console.error('Failed to paste expression:',e),e}}async restoreExpression(e){const t=Array.from(this.querySelectorAll(this.SELECT_QUERY));t.length>1&&(t[0].value='',t[0].dispatchEvent(new Event('change',{bubbles:!0})),await new Promise((e=>setTimeout(e,50))));for(let t=0;t<e.length;t++){const n=e[t],r=Array.from(this.querySelectorAll(this.SELECT_QUERY))[t];if(r){const e=Array.from(r.options).find((e=>e.value===n));e&&(e.selected=!0,r.value=n,r.dispatchEvent(new Event('change',{bubbles:!0})),await new Promise((e=>setTimeout(e,50))))}}}render(){const e=this.dirty;return Pe`
      <!-- header -->
      <header part="header" class="header">
        <label>
          <div
            class=${dr({dirty:e,'property-name':!0})}
            part="property-name"
          >
            <slot name="label"></slot>
            ${e?Pe`
                  <slot
                    name="dirty-icon"
                    part="dirty-icon"
                    class="dirty-icon"
                    @click=${this.reset}
                    title="Clear expression"
                  >
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                      ></path>
                    </svg>
                  </slot>
                  <slot
                    name="copy-icon"
                    part="copy-icon"
                    class="copy-icon"
                    @click=${this.copy}
                    title="Copy expression"
                  >
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                      ></path>
                    </svg>
                  </slot>
                `:Pe``}
            ${this.canPaste?Pe`
                  <slot
                    name="paste-icon"
                    part="paste-icon"
                    class="paste-icon"
                    @click=${this.paste}
                    title="Paste expression"
                  >
                    <svg viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"
                      ></path>
                    </svg>
                  </slot>
                `:Pe``}
          </div>
          ${this.allowFixed?Pe`
                <div part="fixed-selector" class="fixed-selector">
                  <span
                    class=${dr({active:this.fixed,'fixed-selector-fixed':!0})}
                    @click=${()=>this.fixed=!0}
                    part="fixed-selector-fixed"
                    >Fixed</span
                  >
                  <span
                    class=${dr({active:!this.fixed,'fixed-selector-expression':!0})}
                    @click=${()=>this.fixed=!1}
                    part="fixed-selector-expression"
                    >Expression</span
                  >
                </div>
              `:Pe``}
        </label>
      </header>
      <div
        part="property-container"
        class=${dr({'property-container':!0,fixed:this.fixed})}
      >
        <slot class="hide-when-fixed"
          >${this.options.length?'':this.placeholder}</slot
        >
        <slot name="fixed" part="fixed" class="show-when-fixed"></slot>
      </div>
    `}reset(){if(this.fixed){const e=this.getFixedInput();if(!e)throw new Error('Input not found for fixed value');e.value=''}else this.changeAt(-1,!0);this.dispatchEvent(new Event('change')),this.requestUpdate()}getFixedInput(){return this.querySelector('input, textarea')}}vr.STORAGE_KEY='expression-input-clipboard',fr([er({type:Boolean,attribute:'allow-fixed'})],vr.prototype,"allowFixed",void 0),fr([er({type:Boolean,attribute:'fixed',reflect:!0})],vr.prototype,"fixed",null),fr([er()],vr.prototype,"placeholder",void 0),window.customElements.get('expression-input')||window.customElements.define('expression-input',vr);var gr=void 0&&(void 0).__decorate||function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};class mr extends nt{constructor(){super(...arguments),this.hidden=!1,this.noAutoClose=!1,this.resized_=this.ensureElementInView.bind(this),this.blured_=this.blured.bind(this),this.keydown_=this.keydown.bind(this)}render(){return setTimeout((()=>this.ensureElementInView())),Pe` <slot></slot> `}connectedCallback(){super.connectedCallback(),this.setAttribute('tabindex','0'),this.addEventListener('blur',this.blured_),this.addEventListener('keydown',this.keydown_),window.addEventListener('resize',this.resized_),window.addEventListener('blur',this.blured_)}disconnectedCallback(){window.removeEventListener('resize',this.resized_),window.removeEventListener('blur',this.blured_),this.removeEventListener('blur',this.blured_),this.removeEventListener('keydown',this.keydown_),super.disconnectedCallback()}getActiveElementRecursive(e=document.activeElement){return(null==e?void 0:e.shadowRoot)?this.getActiveElementRecursive(e.shadowRoot.activeElement):e}blured(){this.noAutoClose||setTimeout((()=>{let e=this.getActiveElementRecursive();for(;e&&e!==this;)e=e.parentNode||e.host;e!==this&&this.close()}))}close(){this.setAttribute('hidden',''),this.blur()}keydown(e){'Escape'===e.key&&this.close()}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),'hidden'===e&&null===n&&(this.focus(),this.dispatchEvent(new CustomEvent('popin-opened'))),'hidden'===e&&null!==n&&this.dispatchEvent(new CustomEvent('popin-closed'))}ensureElementInView(){var e;const t=null===(e=this.parentElement)||void 0===e?void 0:e.getBoundingClientRect();this.style.left=`${null==t?void 0:t.left}px`,this.style.top=`${null==t?void 0:t.top}px`;const n=0,r=0,o=this.getBoundingClientRect(),i=window.innerWidth,s=window.innerHeight;o.left+o.width+n>i&&(this.style.left=`${i-o.width-n}px`),o.left+n<0&&(this.style.left=`${-n}px`),o.top+o.height+r>s&&(this.style.top=`${s-o.height-r}px`),o.top+r<0&&(this.style.top=`${-r}px`)}}mr.styles=pr,gr([er()],mr.prototype,"hidden",void 0),gr([er({type:Boolean,attribute:'no-auto-close'})],mr.prototype,"noAutoClose",void 0),window.customElements.get('popin-overlay')||window.customElements.define('popin-overlay',mr);var yr=void 0&&(void 0).__decorate||function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};class br extends mr{constructor(){super(...arguments),this.for='',this.name='',this.formData=new FormData,this.onFormdata_=this.onFormdata.bind(this),this.slotChanged_=this.slotChanged.bind(this),this._form=null,this.inputs=[]}set form(e){this._form&&this._form.removeEventListener('formdata',this.onFormdata_),e&&e.addEventListener('formdata',this.onFormdata_)}get form(){return this._form}get value(){return this.updateFormData(),Object.fromEntries(this.formData.entries())}render(){return super.render(),Pe`
      <form @submit=${this.submit} @change=${this.change}>
        <header>
          <slot class="header" name="header"></slot>
        </header>
        <main>
          <slot class="body" part="body"></slot>
        </main>
        <footer>
          <slot class="footer" name="footer">
            <button type="button" class="secondary" @click=${this.close}>
              Cancel
            </button>
            <button type="submit">Apply</button>
          </slot>
        </footer>
      </form>
    `}connectedCallback(){if(super.connectedCallback(),this.for){const e=document.querySelector(`form#${this.for}`);e&&(this.form=e)}else this.form=this.closest('form');this.shadowRoot.addEventListener('slotchange',this.slotChanged_),this.slotChanged()}disconnectedCallback(){this.removeEventListener('slotchange',this.slotChanged_),this.form=null,super.disconnectedCallback()}slotChanged(){this.inputs=Array.from(this.querySelectorAll('input, select, textarea, [data-is-input]'))}onFormdata(e){e.preventDefault();const t=e.formData;for(const[e,n]of this.formData.entries())t.set(`${this.name}-${e}`,n)}updateFormData(){this.formData=new FormData;for(const e of this.inputs)this.formData.set(e.getAttribute('name'),e.value)}submit(e){e.preventDefault(),e.stopImmediatePropagation(),this.updateFormData(),this.close(),this.dispatchEvent(new Event('change'))}change(e){e.target.closest(this.tagName)===this&&(e.preventDefault(),e.stopImmediatePropagation())}}yr([er({type:String,attribute:'for'})],br.prototype,"for",void 0),yr([er({type:String})],br.prototype,"name",void 0),window.customElements.get('popin-form')||window.customElements.define('popin-form',br);const xr="important",_r=" !"+xr,$r=Dn(class extends Un{constructor(e){if(super(e),e.type!==Ln||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{const r=e[n];return null==r?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(e,[t]){const{style:n}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?n.removeProperty(e):n[e]=null);for(const e in t){const r=t[e];if(null!=r){this.ft.add(e);const t="string"==typeof r&&r.endsWith(_r);e.includes("-")||t?n.setProperty(e,t?r.slice(0,-11):r,t?xr:""):n[e]=r}}return De}});function wr(e){var t;if(!e)throw new Error('Field is required for token');if(!e.dataSourceId)throw new Error(`Field ${e.id} has no data source`);return Object.assign({type:'property',propType:'field',fieldId:e.id,label:e.label,typeIds:e.typeIds,dataSourceId:e.dataSourceId,kind:e.kind},null!==(t=kt(e))&&void 0!==t?t:{})}function Er(e,t,n){const r=Zt();if(t){const o=r.dataSources.find((e=>!t||e.id===t));if(!o)throw new Error(`Data source not found ${t}`);const i=(null==o?void 0:o.getTypes()).find((t=>t.id===e));if(!i)throw r.editor.runCommand('notifications:add',{type:'error',group:dt,message:`Type not found ${null!=t?t:''}.${e}`,componentId:n}),new Error(`Type not found ${null!=t?t:''}.${e}`);return i}{const t=Gt.find((t=>t.id===e.toLowerCase()));if(t)return t;const n=Kt(Zt()).find((t=>t.id===e));if(!n)throw new Error(`Unknown type ${e}`);return n}}function Sr(e){const{component:t,expression:n,manager:r,rootType:o,currentStateId:i,hideLoopData:s}=e;if(!t)throw new Error('Component is required for completion');if(!n)throw new Error('Expression is required for completion');if(0===n.length){if(o){const e=Er(o,null,t.getId());return e?e.fields.map((e=>wr(e))):(console.warn('Root type not found',o),[])}return function(e,t,n,r=!1){if(!e)throw console.error('Component is required for context'),new Error('Component is required for context');const o=t.cachedQueryables.map((e=>{if(!e.dataSourceId)throw new Error(`Type ${e.id} has no data source`);return wr(e)})),i=[],s=[];let a=e;for(;a;){if(i.push(...L(a,!0,a===e?n:void 0).map((e=>{var t;return{type:'state',storedStateId:e,previewIndex:8888,label:(null===(t=D(a,e,!0))||void 0===t?void 0:t.label)||e,componentId:C(a),exposed:!0}}))),a!==e||!r){const e=D(a,'__data',!1);if(e)try{const t=St(e.expression,a);if(t){const n=e=>{var n;return`${null!==(n=a.getName())&&void 0!==n?n:'Unknown'}'s ${t.label} ${e}`};'list'===t.kind?s.push({type:'state',storedStateId:'__data',componentId:C(a),previewIndex:t.previewIndex,exposed:!1,forceKind:'object',label:`Loop item (${t.label})`},{type:'property',propType:'field',fieldId:'forloop.index0',label:n('forloop.index0'),kind:'scalar',typeIds:['number']},{type:'property',propType:'field',fieldId:'forloop.index',label:n('forloop.index'),kind:'scalar',typeIds:['number']}):console.warn('Loop item is not a list for component',a,'and state',e)}else console.warn('Loop item type not found for component',a,'and state',e)}catch(t){console.error('Error while getting loop item for component',a,'and state',e)}}a=a.parent()}const l=t.filters.filter((e=>{try{return e.validate(null)}catch(t){return console.warn('Filter validate error:',t,{filter:e}),!1}})),d=ht('');return[...o,...i,...s,...l,d]}(t,r,i,s)}const a=St(n,t);return a?[].concat('object'===a.kind?a.typeIds.map((e=>{var n;return Er(e,null!==(n=a.dataSourceId)&&void 0!==n?n:null,t.getId())})).flatMap((e=>{var t;return null!==(t=null==e?void 0:e.fields)&&void 0!==t?t:[]})).flatMap((e=>e.typeIds.map((t=>Object.assign(Object.assign({},wr(e)),{typeIds:[t]}))))):[]).concat(r.filters.filter((e=>{try{return e.validate(a)}catch(t){return console.warn('Filter validate error:',t,{filter:e,field:a}),!1}}))):(console.warn('Result type not found for expression',n),[])}var kr=void 0&&(void 0).__decorate||function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},Ar=void 0&&(void 0).__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class Tr extends nt{constructor(){super(...arguments),this.disabled=!1,this.name='',this.hideLoopData=!1,this.parentName='',this.noFilters=!1,this.rootType='',this.defaultFixed=!1,this.dismissCurrentComponentStates=!1,this._selected=null,this.for='',this.onFormdata_=this.onFormdata.bind(this),this.renderBinded=()=>this.requestUpdate(),this._form=null,this._data=[],this._editor=null,this.redrawing=!1,this.expressionInputRef=Qn(),this.popinsRef=[]}get selected(){return this._selected}set selected(e){this._selected=e,this.requestUpdate()}get value(){return JSON.stringify(this.data)}set value(e){const t=mt(e);this.data=t||e}connectedCallback(){var e;if(super.connectedCallback(),this.for){const e=document.querySelector(`form#${this.for}`);e&&(this.form=e)}else this.form=this.closest('form');null===(e=this.editor)||void 0===e||e.on(`${i} ${l}`,this.renderBinded)}disconnectedCallback(){var e;this.form=null,super.disconnectedCallback(),null===(e=this.editor)||void 0===e||e.off(`${i} ${l}`,this.renderBinded)}onFormdata(e){e.preventDefault();e.formData.set(this.name,this.value)}set form(e){this._form&&this._form.removeEventListener('formdata',this.onFormdata_),e&&e.addEventListener('formdata',this.onFormdata_)}get form(){return this._form}get data(){const e=this.expressionInputRef.value;if(!this._selected||!this.editor)return console.error('selected and editor are required',this._selected,this.editor),[];if(!e||0===e.value.length)return[];if(e.fixed)return[ht(e.value[0]||'')];return e.value.filter((e=>!!e)).map((e=>{try{return gt(this.editor,e,this.selected.getId())}catch(t){return console.error(`Error while getting token from id ${e}`,t),{type:'property',propType:'field',fieldId:'unknown',label:'Unknown',kind:'scalar',typeIds:[],options:{}}}})).map(((e,t)=>{var n;const r=null===(n=this.popinsRef[t])||void 0===n?void 0:n.value;switch(e.type){case'property':case'filter':e.options=(null==r?void 0:r.value)||e.options}return e}))}set data(e){this._data='string'==typeof e?''===e?[]:[ht(e)]:e,this.editor&&this.requestUpdate()}get editor(){return this._editor}set editor(e){this._editor=e,this.requestUpdate()}render(){var t,n;if(this.noFilters=!1,this.redrawing=!0,super.render(),!this.name)throw new Error('name is required on state-editor');if(!this.editor||!this.selected)return console.error('editor and selected are required',this.editor,this.selected),Pe`<div class="ds-section
        ds-section--error">Error rendering state-editor component: editor and selected are required</div>`;const r=this.selected,o=this._data.map((e=>$t(e,r.getId()))),i=Zt(),s=Sr({component:this.dismissCurrentComponentStates?r.parent():r,expression:o||[],rootType:this.rootType,currentStateId:this.parentName||this.name,hideLoopData:this.hideLoopData,manager:i}).filter((e=>'filter'!==e.type||!this.noFilters)),a=ut(this.editor,r,s,o),l=1===(null==o?void 0:o.length)&&'property'===o[0].type&&o[0].fieldId===e||this.defaultFixed&&0===o.length||0===s.length&&0===o.length,d=l&&(null===(n=null===(t=o[0])||void 0===t?void 0:t.options)||void 0===n?void 0:n.value)||'';let c='';try{const e={dataSources:H(),filters:tn(),previewData:rn(),component:r,resolvePreviewIndex:!0};c=It(o||[],e)}catch(e){console.error('Current data could not be retrieved:',e)}null==c&&(c='');const p=Pe`
      <expression-input
        @change=${e=>this.onChangeValue(e)}
        data-is-input
        ${Kn(this.expressionInputRef)}
        .fixed=${l}
        class="ds-section"
        name=${this.name}
        reactive
      >
        <style>
          ${Tn}
        </style>
        <slot name="label" slot="label"></slot>
        <div slot="fixed" class="ds-slot-fixed">
          <input
            type="text"
            class="ds-expression-input__fixed"
            placeholder="Enter a text or switch to expression mode"
            .value=${d}
            />
        </div>
        ${o&&o.length>0?Pe`
          ${o.map(((e,t)=>{this.popinsRef[t]=Qn();const n=this.getOptions(r,o,t),s=o.slice(0,t),a=Sr({component:this.dismissCurrentComponentStates?r.parent():r,expression:s,rootType:this.rootType,currentStateId:0===t?this.parentName||this.name:void 0,hideLoopData:this.hideLoopData,manager:i}),l=this.noFilters?a.filter((e=>'filter'!==e.type)):a,d=ut(this.editor,r,l,o.slice(0,t)),c=vt(e);return Pe`
              <select>
                <option value="">-</option>
                ${Object.entries(d).reverse().map((([e,t])=>Pe`
                      <optgroup label="${e}">
                      ${t.map((e=>({displayName:pt(r,e),partialToken:e}))).sort(((e,t)=>e.displayName.localeCompare(t.displayName))).map((({partialToken:e,displayName:t})=>{const n=vt(e);return Pe`
                            <option value=${ft(e)} .selected=${n===c}>${t}</option>
                          `}))}
                      </optgroup>
                    `))}
              </select>
              <button
                class="ds-expression-input__options-button"
                style=${$r({display:''===n?'none':''})}
                @click=${()=>{var e;null===(e=this.popinsRef[t].value)||void 0===e||e.removeAttribute('hidden')}}
              >...</button>
              <popin-form
                ${Kn(this.popinsRef[t])}
                hidden
                name=${`${this.name}_options_${t}`}
                @change=${e=>this.onChangeOptions(e,r,this.popinsRef[t].value,t)}
              >
                ${n}
              </popin-form>
              `}))}
        `:''}
        ${Object.entries(a).length?Pe`
          <select
            class="ds-expression-input__add"
            ${Kn((e=>e&&(e.value='')))}
            >
            <option value="" selected>+</option>
            ${Object.entries(a).reverse().map((([e,t])=>Pe`
                    <optgroup label="${e}">
                    ${t.map((e=>({displayName:pt(r,e),token:e}))).sort(((e,t)=>e.displayName.localeCompare(t.displayName))).map((({displayName:e,token:t})=>Pe`<option value="${ft(t)}">${e}</option>`))}
                    </optgroup>
                `))}
          </select>
      `:''}
      </expression-input>
      <div class="ds-real-data">
        <code class="ds-real-data__display">
          ${Array.isArray(c)?Pe`${c.length} objects with ${Object.keys(c[0]||{}).filter((e=>'__typename'!==e)).join(', ')}`:c}
        </code>
      </div>
        `;return this.redrawing=!1,p}onChangeValue(e){var t;if(this.redrawing)return;const n=null===(t=e.detail)||void 0===t?void 0:t.idx;if(n>=0){const e=this.data.slice(0,n+1);e.length>n&&('property'!==e[n].type&&'filter'!==e[n].type||(e[n].options={})),this.data=e}e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),setTimeout((()=>this.dispatchEvent(new Event('change',{bubbles:!0}))))}onChangeOptions(e,t,n,r){if(this.redrawing)return;if(!this.editor)throw new Error('editor is required');const o=this.expressionInputRef.value,i=o.value.filter((e=>!!e)).map((e=>{try{return gt(this.editor,e,t.getId())}catch(t){return console.error('Error while getting token from string',{id:e},t),{type:'property',propType:'field',fieldId:'unknown',label:'Unknown',kind:'scalar',typeIds:[],options:{}}}})),s=o.options.filter((e=>e.selected));i[r].options=n.value,s[r].value=ft(i[r]),this.requestUpdate(),e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),this.dispatchEvent(new Event('change',{bubbles:!0}))}getOptions(e,t,n){if(!this.editor)throw new Error('editor is required');const r=t[n],o=t.slice(0,n).map((n=>{try{return St(t.concat(n),e)}catch(t){return console.error(`Error while getting expression result type for token ${n} on component ${e.getName()}#${e.get('id')}.${e.getClasses().join('.')} (${e.cid})`,t),null}}));switch(r.type){case'property':case'filter':if(r.optionsForm){return r.optionsForm(e,o[o.length-1],r.options||{},this.parentName||this.name)||''}return'';default:return''}}}kr([er({type:Boolean}),Ar("design:type",Object)],Tr.prototype,"disabled",void 0),kr([er({type:String}),Ar("design:type",Object)],Tr.prototype,"name",void 0),kr([er({type:Boolean,attribute:'hide-loop-data'}),Ar("design:type",Object)],Tr.prototype,"hideLoopData",void 0),kr([er({type:String,attribute:'parent-name'}),Ar("design:type",Object)],Tr.prototype,"parentName",void 0),kr([er({type:Boolean,attribute:'no-filters'}),Ar("design:type",Object)],Tr.prototype,"noFilters",void 0),kr([er({type:String,attribute:'root-type'}),Ar("design:type",Object)],Tr.prototype,"rootType",void 0),kr([er({type:Boolean,attribute:'default-fixed'}),Ar("design:type",Object)],Tr.prototype,"defaultFixed",void 0),kr([er({type:Boolean,attribute:'dismiss-current-component-states'}),Ar("design:type",Object)],Tr.prototype,"dismissCurrentComponentStates",void 0),kr([er({type:Object}),Ar("design:type",Object),Ar("design:paramtypes",[Object])],Tr.prototype,"selected",null),kr([er(),Ar("design:type",String),Ar("design:paramtypes",[String])],Tr.prototype,"value",null),kr([er({type:String,attribute:'for'}),Ar("design:type",Object)],Tr.prototype,"for",void 0),kr([er({type:Object}),Ar("design:type",Object),Ar("design:paramtypes",[Object])],Tr.prototype,"editor",null),window.customElements.get('state-editor')||window.customElements.define('state-editor',Tr);var Or=void 0&&(void 0).__decorate||function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},Ir=void 0&&(void 0).__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class Cr extends nt{constructor(){super(...arguments),this.disabled=!1,this.defaultFixed=!1,this.inputs={innerHTML:void 0,condition:void 0,condition2:void 0,__data:void 0},this.editor=null,this.redrawing=!1}setEditor(e){this.editor?console.warn('property-editor setEditor already set'):(this.editor=e,this.editor.on('page',(()=>this.requestUpdate())),this.editor.on('component:selected',(()=>this.requestUpdate())),this.editor.on('component:update',(()=>this.requestUpdate())))}render(){var e;super.render(),this.redrawing=!0;const t=null===(e=this.editor)||void 0===e?void 0:e.getSelected(),n=Pe`
      <style>
        ${Tn}
      </style>
      <slot></slot>
    `,r=Pe`
      ${n}
      <p class="ds-empty">Select an element to edit its properties</p>
    `;if(!this.editor||this.disabled)return this.resetInputs(),this.redrawing=!1,Pe``;if(!t||'body'===t.get('tagName'))return this.resetInputs(),this.redrawing=!1,r;const o=Pe`
      ${n}
      <section class="ds-section">
        <div>
          <div class="gjs-traits-label">
              Properties
              <details class="ds-states__help">
                <summary>Help</summary>
                <div class="ds-states__help--tooltip">
                  Elements properties are expressions that can replace the HTML attributes of the element or it's whole content (innerHTML).
                  <a target="_blank" href="https://docs.silex.me/en/user/cms-concepts#properties">Learn more about element properties</a>
                </div>
              </details>
          </div>
        </div>
        <main>
          ${[{label:'HTML content',name:S.innerHTML,publicState:!1}].map((({label:e,name:n,publicState:r})=>this.renderStateEditor(t,e,n,r)))}
        </main>
      </section>
      <section class="ds-section">
        <main>
          ${this.renderStateEditor(t,'Visibility Condition',S.condition,!1)}
          <div>
          <span>... is</span>
          <select
            class="ds-visibility__condition-operator"
            @change=${e=>{const n=e.target.value;if(!n)throw new Error('Selection required for operator select element');t.set('conditionOperator',n),this.requestUpdate()}}
          >
          </div>
          ${Object.values(w).concat(Object.values(E)).map((e=>Pe`
                <option value="${e}" .selected=${t.get('conditionOperator')===e} >${e}</option>
              `))}
          </select>
          ${this.renderStateEditor(t,'',S.condition2,!1,!1,t.has('conditionOperator')&&Object.values(E).includes(t.get('conditionOperator')))}
        </main>
      </section>
      <section class="ds-section">
        <main>
          ${this.renderStateEditor(t,'Loop Data',S.__data,!1,!0)}
        </main>
      </section>
    `;return this.redrawing=!1,o}resetInputs(){this.inputs={innerHTML:void 0,condition:void 0,condition2:void 0,__data:void 0}}renderStateEditor(e,t,n,r,o=!1,i=!0){return Pe`
      <state-editor
        .style=${i?'':'display: none;'}
        .selected=${e}
        .editor=${this.editor}
        id="${n}"
        name=${n}
        default-fixed=${this.defaultFixed}
        ?hide-loop-data=${o}
        ${Kn((t=>{if(t){const e=t;this.inputs[n]||(this.inputs[n]={stateEditor:e,selected:void 0})}if(this.inputs[n]){const t=this.inputs[n].stateEditor;this.redrawing=!0;try{t.data=this.getTokens(e,n,r)}catch(e){console.error('Error setting data',e),t.data=[ht(`Error setting data: ${e}`)]}this.redrawing=!1,this.inputs[n].selected=e}}))}
        @change=${()=>this.onChange(e,n,r)}
        ?disabled=${this.disabled}
      >
        <label slot="label">${t}</label>
      </state-editor>
    `}onChange(e,t,n){const{stateEditor:r}=this.inputs[t];this.redrawing||(t===S.__data?0===r.data.length?U(e,t,{expression:[]},n):U(e,t,{expression:r.data.slice(0,-1).concat(Object.assign(Object.assign({},r.data[r.data.length-1]),{previewIndex:0}))},n):U(e,t,{expression:r.data},n))}getTokens(e,t,n){const r=D(e,t,n);return r&&r.expression?r.expression.filter((e=>e&&'object'==typeof e&&e.type)).map((t=>$t(t,e.getId()))):[]}}Or([er({type:Boolean}),Ir("design:type",Object)],Cr.prototype,"disabled",void 0),Or([er({type:Boolean,attribute:'default-fixed'}),Ir("design:type",Object)],Cr.prototype,"defaultFixed",void 0),window.customElements.get('properties-editor')||window.customElements.define('properties-editor',Cr);var jr=void 0&&(void 0).__decorate||function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},Nr=void 0&&(void 0).__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};class Rr extends nt{constructor(){super(...arguments),this.disabled=!1,this.privateState=!1,this.title='Custom states',this.defaultFixed=!1,this.createPrompt='Name this state',this.renamePrompt='Rename this state',this.defaultName='New state',this.hideLoopData=!1,this.helpText='',this.helpLink='',this._reservedNames=[],this.editor=null,this.redrawing=!1}get reservedNames(){return this._reservedNames}set reservedNames(e){this._reservedNames='string'==typeof e?e.split(',').map((e=>e.trim())):e}setEditor(e){this.editor?console.warn('property-editor setEditor already set'):(this.editor=e,this.editor.on('page',(()=>this.requestUpdate())),this.editor.on('component:selected',(()=>this.requestUpdate())),this.editor.on('component:update',(()=>this.requestUpdate())))}getHead(e){return Pe`
      <style>
        ${Tn}
      </style>
      <slot></slot>
      <section class="ds-section">
        <div>
          <div class="gjs-traits-label">
            <span>${this.title}</span>
            <span>
              ${e?Pe`
              <button
              title="Add a new state"
              class="ds-states__add-button ds-states__button"
              @click=${()=>{const t=this.createCustomState(e);t&&this.setState(e,t.name,t.state)}}
              >+</button>
              `:''}
              ${this.helpText?Pe`
              <details class="ds-states__help">
              <summary>Help</summary>
              <div class="ds-states__help--tooltip">
              <span>${this.helpText}</span>
              ${this.helpLink?Pe`
              <a
                class="ds-states__help-link"
                href="${this.helpLink}"
                target="_blank"
                >\u{1F517} Read more...</a>
              `:''}
              </div>
              </details>
              `:''}
            </span>
          </div>
        </div>
      </section>
    `}render(){var e;super.render(),this.redrawing=!0;const t=null===(e=this.editor)||void 0===e?void 0:e.getSelected(),n=Pe`
      ${this.getHead(null)}
      <p class="ds-empty">Select an element to edit its states</p>
    `;if(!this.editor||this.disabled)return this.redrawing=!1,Pe``;if(!t)return this.redrawing=!1,n;const r=this.getStateIds(t).map((e=>({name:e,publicState:!this.privateState,state:this.getState(t,e)}))).filter((e=>e.state&&!e.state.hidden)),o=Pe`
      ${this.getHead(t)}
      <div class="ds-states">
        <div class="ds-states__items">
          ${0===r.length?Pe`
            <p>Use the "+" button to add elements to this list</p>
          `:''}
          ${r.map(((e,n)=>Pe`
            <div class="ds-states__item">
              ${this.getStateEditor(t,e.state.label||'',e.name)}
              <div class="ds-states__buttons">
                <button
                  title="Remove this state"
                  class="ds-states__remove-button ds-states__button"
                  @click=${()=>{this.removeState(t,e.name),this.requestUpdate()}}
                  >x</button>
                <button
                  title="Rename this state"
                  class="ds-states__rename-button ds-states__button"
                  @click=${()=>{const n=this.renameCustomState(e);n&&n!==e&&(this.removeState(t,e.name),this.setState(t,n.name,n.state),this.requestUpdate())}}
                  >\u270F</button>
                  <button
                    title="Move this state up"
                    class="ds-states__item-move-up ds-states__button${0===n?' ds-states__button--disabled':''}"
                    @click=${()=>{r.splice(n-1,0,r.splice(n,1)[0]),this.updateOrderCustomStates(t,r)}}
                    >\u2191</button>
                  <button
                    title="Move this state down"
                    class="ds-states__item-move-down ds-states__button${n===r.length-1?' ds-states__button--disabled':''}"
                    @click=${()=>{r.splice(n+1,0,r.splice(n,1)[0]),this.updateOrderCustomStates(t,r)}}
                  >\u2193</button>
              </div>
            </div>
            <hr class="ds-states__sep" />
          `))}
        </div>
      </div>
    `;return this.redrawing=!1,o}getStateIds(e){return L(e,!this.privateState).filter((e=>!this.reservedNames.includes(e)))}getState(e,t){return D(e,t,!this.privateState)}setState(e,t,n){U(e,t,n,!this.privateState)}removeState(e,t){M(e,t,!this.privateState)}getStateEditor(e,t,n){return Pe`
      <state-editor
        .selected=${e}
        .editor=${this.editor}
        id="${n}"
        name=${n}
        ?hide-loop-data=${this.hideLoopData}
        default-fixed=${this.defaultFixed}
        ${Kn((t=>{if(t){t.data=this.getTokens(e,n)}}))}
        @change=${()=>this.onChange(e,n,t)}
        .disabled=${this.disabled}
      >
        <label slot="label">${t||n}</label>
      </state-editor>
    `}onChange(e,t,n){if(this.redrawing)return;const r=this.shadowRoot.querySelector(`#${t}`);this.setState(e,t,{expression:r.data,label:n})}getTokens(e,t){const n=this.getState(e,t);return n&&n.expression?n.expression.map((r=>{try{return $t(r,e.getId())}catch(r){return console.error('Error while getting expression result type in getTokens',{expression:n.expression,component:e,name:t}),{type:'property',propType:'field',fieldId:'unknown',label:'unknown',kind:'scalar',typeIds:[]}}})):[]}renameCustomState(e){var t,n,r;const o=null===(r=null===(n=null===(t=prompt(this.renamePrompt,e.state.label))||void 0===t?void 0:t.toLowerCase())||void 0===n?void 0:n.replace(/[^a-z0-9]/g,'-'))||void 0===r?void 0:r.replace(/^-+|-+$/g,'');return o&&o!==e.state.label?Object.assign(Object.assign({},e),{state:Object.assign(Object.assign({},e.state),{label:o})}):e}updateOrderCustomStates(e,t){this.getStateIds(e).forEach((n=>{t.map((e=>e.name)).includes(n)&&this.removeState(e,n)})),t.forEach((t=>{this.setState(e,t.name,t.state)}))}createCustomState(e){const t=(n=prompt(this.createPrompt,this.defaultName),null===(o=null===(r=null==n?void 0:n.toLowerCase())||void 0===r?void 0:r.replace(/[^a-z0-9:._-]/g,'-'))||void 0===o?void 0:o.replace(/^[0-9]+/,'-'));var n,r,o;if(!t)return null;if(this.reservedNames.includes(t))return alert(`The name ${t} is reserved, please choose another name`),null;const i=`${e.getId()}-${Math.random().toString(36).slice(2)}`,s={label:t,expression:[]};return this.setState(e,i,s),{name:i,state:s,publicState:!this.privateState}}}jr([er({type:Boolean}),Nr("design:type",Object)],Rr.prototype,"disabled",void 0),jr([er({type:Boolean,attribute:'private-state'}),Nr("design:type",Object)],Rr.prototype,"privateState",void 0),jr([er({type:String}),Nr("design:type",Object)],Rr.prototype,"title",void 0),jr([er({type:Boolean,attribute:'default-fixed'}),Nr("design:type",Object)],Rr.prototype,"defaultFixed",void 0),jr([er({type:String,attribute:'create-prompt'}),Nr("design:type",Object)],Rr.prototype,"createPrompt",void 0),jr([er({type:String,attribute:'rename-prompt'}),Nr("design:type",Object)],Rr.prototype,"renamePrompt",void 0),jr([er({type:String,attribute:'default-name'}),Nr("design:type",Object)],Rr.prototype,"defaultName",void 0),jr([er({type:String,attribute:'reserved-names'}),Nr("design:type",Object),Nr("design:paramtypes",[Object])],Rr.prototype,"reservedNames",null),jr([er({type:Boolean,attribute:'hide-loop-data'}),Nr("design:type",Object)],Rr.prototype,"hideLoopData",void 0),jr([er({type:String,attribute:'help-text'}),Nr("design:type",Object)],Rr.prototype,"helpText",void 0),jr([er({type:String,attribute:'help-link'}),Nr("design:type",Object)],Rr.prototype,"helpLink",void 0),customElements.get('custom-states-editor')||customElements.define('custom-states-editor',Rr);const Lr=(e,n)=>{const r=Object.assign({styles:Tn,defaultFixed:!1,disableStates:!1,disableAttributes:!1,disableProperties:!1,previewDebounceDelay:100,previewRefreshEvents:`\n      ${i}\n      ${l}\n      ${s}\n      storage:after:load\n      component:update:classes\n      component:add\n      component:remove\n    `},n.view);if(n.view.el){const n=document.createElement('section');n.classList.add('gjs-one-bg','ds-wrapper');const s=r.disableStates?'':`\n      <custom-states-editor\n        class="ds-states"\n        title="States"\n        default-fixed=${r.defaultFixed}\n        create-prompt="Create a new state"\n        rename-prompt="Rename the state"\n        default-name="New state"\n        reserved-names=${Object.keys(S).join(',')}\n        hide-loop-data\n        help-text="\n          Custom states are used to store data in the component.\n\n          They are useful to store data that is not displayed in the page, but that is used in the expressions everywhere inside the element.\n        "\n        help-link="https://docs.silex.me/en/user/cms-concepts#states"\n        >\n        <style>\n          ${r.styles}\n        </style>\n      </custom-states-editor>\n    `,a=r.disableAttributes?'':`\n      <custom-states-editor\n        class="ds-attributes"\n        private-state\n        title="Attributes"\n        default-fixed=${r.defaultFixed}\n        create-prompt="Name of the attribute"\n        rename-prompt="Rename the attribute"\n        default-name="New attribute"\n        reserved-names=${Object.keys(S).join(',')}\n        help-text="\n          HTML attributes of the element.\n\n          For example you can set the 'href' attribute of a link, or the 'src' attribute of an image.\n        "\n        help-link="https://docs.silex.me/en/user/cms-concepts#attributes"\n        >\n        <style>\n          ${r.styles}\n        </style>\n      </custom-states-editor>\n    `,d=r.disableProperties?'':`\n      <properties-editor\n        class="ds-properties"\n        default-fixed=${r.defaultFixed}\n      >\n        <style>\n          ${r.styles}\n        </style>\n      </properties-editor>\n    `;n.innerHTML=`\n      ${s}\n      ${a}\n      ${d}\n    `,((e,n={})=>{if(n.settingsEl){const r=bt(n.settingsEl,'options.settingsEl'),s=Qn();e.on(`${i} ${o} ${t} ${l}`,(()=>{s.value?(s.value.dataSources=[...H()],s.value.requestUpdate()):or(e,s,r)})),or(e,s,r),e.Commands.add(x,{run(){var e;null===(e=s.value)||void 0===e||e.openDataSourceModal()}})}})(e,r),e.onReady((()=>{const t=bt(r.el,'options.el');t.appendChild(n);const o=n.querySelector('properties-editor.ds-properties'),i=n.querySelector('custom-states-editor.ds-states'),s=n.querySelector('custom-states-editor.ds-attributes');if(null==o||o.setEditor(e),null==i||i.setEditor(e),null==s||s.setEditor(e),r.button){const e='function'==typeof r.button?r.button():r.button;if(!e)throw new Error(`Element ${r.button} not found`);e.on('change',(()=>{e.active?(t.appendChild(n),n.style.display='block',null==o||o.removeAttribute('disabled'),null==i||i.removeAttribute('disabled'),null==s||s.removeAttribute('disabled')):(n.style.display='none',null==o||o.setAttribute('disabled',''),null==i||i.setAttribute('disabled',''),null==s||s.setAttribute('disabled',''))})),n.style.display=e.active?'block':'none'}}))}else console.info('Dynamic data UI not enabled, please set the el option to enable it');wn(e,r)};function Pr(e,t){return Pt(e,t)}function Dr(e,t){return function(e,t){return e.reduce(((e,n)=>(e[n.getId()]=Pt(n,t),e)),{})}(e,t)}function Ur(){return H()}function Mr(e){return V(e)}function Fr(e){return z(e)}function qr(e){return B(e)}function Hr(){return en()}function zr(e=!1){return Ft(e)}function Br(){return qt()}function Vr(e){on(e)}function Qr(e,t,n){un(e,t,n)}function Gr(){on({})}function Jr(e,t,n=!0){return It(e,{dataSources:Ur(),filters:tn(),previewData:qt(),component:t,resolvePreviewIndex:n})}function Kr(e){Zt();return jt(0,e)}function Wr(e){const t=Zt();return Sr(Object.assign(Object.assign({},e),{manager:t}))}function Yr(e,t){return $t(e,t)}function Xr(e,t){return St(e,t)}function Zr(e){const t=tn(),n=Array.isArray(e)?e:[e];nn(t.concat(n))}function eo(e){const t=tn();Array.isArray(e)?nn(t.filter((t=>!e.includes(t)))):nn(t.filter((t=>t!==e)))}function to(e){return I(e)}function no(e){return C(e)}function ro(e,t,n=!0){return D(e,t,n)}function oo(e,t=!0,n){return L(e,t,n)}function io(e,t,n,r=!0,o=-1){return U(e,t,n,r,o)}function so(e,t,n=!0){return M(e,t,n)}function ao(e,t){return function(e,t){return`state_${e}_${t}`}(e,t)}function lo(e){return mt(e)}function co(e={}){return _t(e)}const po=dt,uo=O,ho=(e,t={})=>{const n=Object.assign(Object.assign({dataSources:[],filters:[],previewActive:!0},t),{view:Object.assign({el:'.gjs-pn-panel.gjs-pn-views-container'},null==t?void 0:t.view)}),r=n.dataSources.map((e=>Object.assign(Object.assign({},e),{readonly:!0}))).map((e=>_t(e)));Promise.all(r.map((e=>e.connect().catch((t=>console.error(`Data source ${e.id} connection failed:`,t)))))).catch((e=>console.error('Error while connecting data sources',e))),Xt(r,e,n),Lr(e,n),An(e),((e,t)=>{En=t.previewActive,e.Commands.add(v,{run(){en()}}),e.Commands.add(g,{run(){En||(En=!0,Sn(e),e.trigger(h))}}),e.Commands.add(m,{run(){var t;if(En){En=!1;const n=null===(t=e.Pages.getSelected())||void 0===t?void 0:t.getMainComponent();n&&gn(n),e.trigger(f)}}}),e.Commands.add(b,{run(){var t;if(En=!En,En)Sn(e),e.trigger(h);else{const n=null===(t=e.Pages.getSelected())||void 0===t?void 0:t.getMainComponent();n&&gn(n),e.trigger(f)}}}),e.Commands.add(y,{run(){En&&Sn(e)}})})(e,n),e.on(o,((t,n)=>e.runCommand('notifications:add',{type:'error',message:`Data source \`${n.id}\` error: ${t}`,group:dt}))),e.on('load',(()=>{en()})),e.on('storage:end:load',(()=>{setTimeout((()=>{en()}),100)}))},fo='__VERSION__'})(),r})()));
//# sourceMappingURL=index.js.map