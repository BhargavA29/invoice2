import e from"postcss-selector-parser";function t(e){const t=e.parent,n=t.index(e);return n&&t.cloneBefore().removeAll().append(t.nodes.slice(0,n)),t.before(e),t}function n(e){e.nodes.length||e.remove()}function r(e,t){if(t<2)throw new Error("n must be greater than 1");if(e.length<2)throw new Error("s must be greater than 1");if(Math.pow(e.length,t)>1e4)throw new Error("Too many combinations when trying to resolve a nested selector with lists, reduce the complexity of your selectors");const n=[];for(let e=0;e<t;e++)n[e]=0;const r=[];for(;;){const o=[];for(let s=t-1;s>=0;s--){let t=n[s];if(t>=e.length){if(t=0,n[s]=0,0===s)return r;n[s-1]+=1}o[s]=e[t]}r.push(o),n[n.length-1]++}}const o=e.pseudo({value:":is"});function s(e){const t=e.nodes.filter((e=>"tag"===e.type));t.length>1&&t.slice(1).forEach((e=>{const t=o.clone();e.replaceWith(t),t.append(e)}))}function c(t,n){let r=[],o=!1;const c=[...t.nodes];for(let t=0;t<c.length+1;t++){const l=c[t];if(l&&"combinator"!==l.type)"nesting"===l.type&&(o=!0),r.push(l);else{if(o){r=[];continue}if(r.length>1){const t=e.selector();r[0].replaceWith(t),r.slice(1).forEach((e=>{e.remove()})),r.forEach((e=>{t.append(e)})),a(t),n&&s(t),t.replaceWith(...t.nodes)}r=[]}}}function a(e){e.nodes.sort(((e,t)=>e.type===t.type?0:l[e.type]<l[t.type]?-1:1))}const l={universal:0,tag:1,id:2,class:3,attribute:4,pseudo:5,selector:7,string:8,root:9,comment:10,nesting:9999};function i(t){const n=t.map((t=>e().astSync(t))).map((e=>p(e))),r=n[0];for(let e=1;e<n.length;e++)if(r.a!==n[e].a||r.b!==n[e].b||r.c!==n[e].c)return!1;return!0}function p(t){let n=0,r=0,o=0;if("id"===t.type)n+=1;else if("tag"===t.type)o+=1;else if("class"===t.type)r+=1;else if("attribute"===t.type)r+=1;else if("pseudo"===t.type)switch(t.value){case"::after":case":after":case"::backdrop":case"::before":case":before":case"::cue":case"::cue-region":case"::first-letter":case":first-letter":case"::first-line":case":first-line":case"::file-selector-button":case"::grammar-error":case"::marker":case"::part":case"::placeholder":case"::selection":case"::slotted":case"::spelling-error":case"::target-text":o+=1;break;case":is":case":has":case":not":if(t.nodes&&t.nodes.length>0){let e={a:0,b:0,c:0};t.nodes.forEach((t=>{const n=p(t);n.a>e.a?e=n:n.a<e.a||(n.b>e.b?e=n:n.b<e.b||n.c>e.c&&(e=n))})),n+=e.a,r+=e.b,o+=e.c}break;case"where":break;case":nth-child":case":nth-last-child":{const s=t.nodes.findIndex((e=>{e.value}));if(s>-1){const c=p(e.selector({nodes:t.nodes.slice(s+1)}));n+=c.a,r+=c.b,o+=c.c}else n+=n,r+=r,o+=o}break;default:r+=1}else t.nodes&&t.nodes.length>0&&t.nodes.forEach((e=>{const t=p(e);n+=t.a,r+=t.b,o+=t.c}));return{a:n,b:r,c:o}}function u(t,n,o){let l=[];l=i(t)||o.noIsPseudoSelector?t.map((t=>e().astSync(t))):[e().astSync(`:is(${t.join(",")})`)];let p=[];for(let t=0;t<n.length;t++){const i=n[t];let u=1,y=[],g=0;if(e().astSync(i).walkNesting((()=>{g++})),g>1&&l.length>1)y=r(l,g),u=y.length;else{u=l.length;for(let e=0;e<l.length;e++){y.push([]);for(let t=0;t<g;t++)y[e].push(l[e])}}for(let t=0;t<u;t++){let n=0;const r=e().astSync(i);r.walk((r=>{if("nesting"!==r.type)return;let l=y[t][n];n++,"root"===l.type&&1===l.nodes.length&&(l=l.nodes[0]);const i=e().astSync(`:is(${l.toString()})`),p=d(l.nodes[0]),u=f(l.nodes[0]),g=d(r),b=f(r);if(p&&g)return void r.replaceWith(l.clone());if((p||u)&&(g||b)){const e=r.parent;return p&&"selector"===l.type?r.replaceWith(l.clone().nodes[0]):r.replaceWith(...l.clone().nodes),void(e&&e.nodes.length>1&&(a(e),o.noIsPseudoSelector||s(e)))}if(p){const e=r.parent;return r.replaceWith(l.clone().nodes[0]),void(e&&c(e,!o.noIsPseudoSelector))}if(u){const e=r.parent;return r.replaceWith(...l.clone().nodes),void(e&&c(e,!o.noIsPseudoSelector))}if(h(r)){const e=r.parent;return r.replaceWith(...l.clone().nodes),void(e&&c(e,!o.noIsPseudoSelector))}if(m(r)){const e=r.parent;return r.replaceWith(...l.clone().nodes),void(e&&c(e,!o.noIsPseudoSelector))}const v=r.parent;o.noIsPseudoSelector?r.replaceWith(...l.clone().nodes):r.replaceWith(...i.clone().nodes),v&&c(v,!o.noIsPseudoSelector)})),p.push(r.toString())}}return p}function d(e){return"combinator"!==e.type&&!(e.parent&&e.parent.nodes.length>1)}function f(e,t=null){if(d(e))return!1;if(!e.parent)return!1;if(!!e.parent.nodes.find((e=>"combinator"===e.type||"comment"===e.type)))return!1;return!(!!e.parent.nodes.find((e=>"nesting"===e.type))&&t&&!f(t))}function h(e){if(!e.parent)return!1;if(0!==e.parent.nodes.indexOf(e))return!1;for(let t=1;t<e.parent.nodes.length;t++)if("combinator"===e.parent.nodes[t].type&&" "!==e.parent.nodes[t].value&&">"!==e.parent.nodes[t].value)return!1;return!0}function m(e){if(d(e))return!0;if(!e.parent)return!1;for(let t=0;t<e.parent.nodes.length;t++)if("nesting"!==!e.parent.nodes[t].type&&(e.parent.nodes[t].prev()||e.parent.nodes[t].next())){if(e.parent.nodes[t].prev()&&"combinator"!==e.parent.nodes[t].prev().type)return!1;if(e.parent.nodes[t].next()&&"combinator"!==e.parent.nodes[t].next().type)return!1}return!0}const y=e=>{let t=[],n="",r=!1,o=0,s=!1,c=!1;for(let a of e)c?c=!1:"\\"===a?c=!0:s?a===s&&(s=!1):'"'===a||"'"===a?s=a:"("===a?o+=1:")"===a?o>0&&(o-=1):0===o&&","===a&&(r=!0),r?(""!==n&&t.push(n.trim()),n="",r=!1):n+=a;return t.push(n.trim()),t};var g=["container","document","media","supports"];function b(e){const r=t(e);var o,s;e.params=(o=r.params,s=e.params,y(o).map((e=>y(s).map((t=>`${e} and ${t}`)).join(", "))).join(", ")),n(r)}function v(e,r){e.each((e=>{(e=>"rule"===e.type&&"rule"===Object(e.parent).type&&e.selectors.every((e=>0===e.trim().indexOf("&")&&-1===e.indexOf("|"))))(e)?function(e,r){const o=t(e);e.selectors=u(o.selectors,e.selectors,r),("rule"===e.type&&"rule"===o.type&&e.selector===o.selector||"atrule"===e.type&&"atrule"===o.type&&e.params===o.params)&&e.append(...o.nodes),n(o)}(e,r):(e=>"atrule"===e.type&&"nest"===e.name&&"rule"===Object(e.parent).type&&y(e.params).every((e=>e.split("&").length>=2&&-1===e.indexOf("|"))))(e)?function(e,r,o){const s=t(e),c=s.clone().removeAll().append(e.nodes);e.replaceWith(c),c.selectors=u(s.selectors,y(e.params),o),n(s),r(c,o)}(e,v,r):(e=>"atrule"===e.type&&g.includes(e.name)&&"rule"===Object(e.parent).type)(e)?function(e,r,o){const s=t(e),c=s.clone().removeAll().append(e.nodes);e.append(c),n(s),r(c,o)}(e,v,r):(e=>"atrule"===e.type&&g.includes(e.name)&&"atrule"===Object(e.parent).type&&e.name===e.parent.name)(e)&&b(e),Object(e.nodes).length&&v(e,r)}))}function S(e){const t=Object(e).noIsPseudoSelector||!1;return{postcssPlugin:"postcss-nesting",Rule(e){v(e,{noIsPseudoSelector:t})}}}S.postcss=!0;export{S as default};
