!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(){}n.r(e);function o(t){return t()}function c(){return Object.create(null)}function a(t){t.forEach(o)}function u(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}new Set;function l(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function m(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}let g;function $(t){g=t}function b(){if(!g)throw new Error("Function called outside component initialization");return g}const y=[],v=[],x=[],_=[],j=Promise.resolve();let w=!1;function O(){w||(w=!0,j.then(k))}function S(t){x.push(t)}function k(){const t=new Set;do{for(;y.length;){const t=y.shift();$(t),C(t.$$)}for(;v.length;)v.pop()();for(let e=0;e<x.length;e+=1){const n=x[e];t.has(n)||(n(),t.add(n))}x.length=0}while(y.length);for(;_.length;)_.pop()();w=!1}function C(t){t.fragment&&(t.update(t.dirty),a(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(S))}const E=new Set;function M(t,e){t&&t.i&&(E.delete(t),t.i(e))}"undefined"!=typeof window?window:global;let P;function T(t,e){t.$$.fragment&&(a(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function q(t,e,n,i,l,s){const f=g;$(t);const d=e.props||{},p=t.$$={fragment:null,ctx:null,props:s,update:r,not_equal:l,bound:c(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:c(),dirty:null};let h=!1;var m;p.ctx=n?n(t,d,(e,n)=>{p.ctx&&l(p.ctx[e],p.ctx[e]=n)&&(p.bound[e]&&p.bound[e](n),h&&function(t,e){t.$$.dirty||(y.push(t),O(),t.$$.dirty=c()),t.$$.dirty[e]=!0}(t,e))}):d,p.update(),h=!0,a(p.before_update),p.fragment=i(p.ctx),e.target&&(e.hydrate?p.fragment.l((m=e.target,Array.from(m.childNodes))):p.fragment.c(),e.intro&&M(t.$$.fragment),function(t,e,n){const{fragment:r,on_mount:c,on_destroy:i,after_update:l}=t.$$;r.m(e,n),S(()=>{const e=c.map(o).filter(u);i?i.push(...e):a(e),t.$$.on_mount=[]}),l.forEach(S)}(t,e.target,e.anchor),k()),$(f)}"undefined"!=typeof HTMLElement&&(P=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){T(this,1),this.$destroy=r}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class A{$destroy(){T(this,1),this.$destroy=r}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function L(t,e,n){const r=Object.create(t);return r.character=e[n],r}function N(t){var e;return{c(){(e=d("p")).textContent="Loading..."},m(t,n){s(t,e,n)},d(t){t&&f(e)}}}function B(t){var e,n,r,o,c,a,u,i,g=t.character.name+"";return{c(){e=d("figure"),n=d("img"),c=h(),a=d("figcaption"),u=p(g),i=h(),m(n,"src",r=t.character.image),m(n,"alt",o=t.character.name),m(n,"class","svelte-b6jpb5"),m(e,"class","svelte-b6jpb5")},m(t,r){s(t,e,r),l(e,n),l(e,c),l(e,a),l(a,u),l(e,i)},p(t,e){var c,a;t.characters&&r!==(r=e.character.image)&&m(n,"src",r),t.characters&&o!==(o=e.character.name)&&m(n,"alt",o),t.characters&&g!==(g=e.character.name+"")&&(a=""+(a=g),(c=u).data!==a&&(c.data=a))},d(t){t&&f(e)}}}function H(t){for(var e,n=t.characters,o=[],c=0;c<n.length;c+=1)o[c]=B(L(t,n,c));var a=null;return n.length||(a=N()).c(),{c(){e=d("div");for(var t=0;t<o.length;t+=1)o[t].c();m(e,"class","characters svelte-b6jpb5")},m(t,n){s(t,e,n);for(var r=0;r<o.length;r+=1)o[r].m(e,null);a&&a.m(e,null)},p(t,r){if(t.characters){n=r.characters;for(var c=0;c<n.length;c+=1){const a=L(r,n,c);o[c]?o[c].p(t,a):(o[c]=B(a),o[c].c(),o[c].m(e,null))}for(;c<o.length;c+=1)o[c].d(1);o.length=n.length}n.length?a&&(a.d(1),a=null):a||((a=N()).c(),a.m(e,null))},i:r,o:r,d(t){t&&f(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(o,t),a&&a.d()}}}const z="https://rickandmortyapi.com/api/character";function F(t,e,n){let r=[],o=[];var c;return c=async()=>{const t=await fetch(z);r=await t.json(),n("characters",o=r.results)},b().$$.on_mount.push(c),{characters:o}}new class extends A{constructor(t){var e;super(),document.getElementById("svelte-b6jpb5-style")||((e=d("style")).id="svelte-b6jpb5-style",e.textContent=".characters.svelte-b6jpb5{width:100%;display:grid;grid-template-columns:repeat(5, 1fr);grid-gap:8px}figure.svelte-b6jpb5,img.svelte-b6jpb5{width:100%;margin:0}",l(document.head,e)),q(this,t,F,H,i,[])}}({target:document.querySelector("main"),data:{quotes:[]}})}]);