"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=e(require("postcss-selector-parser"));function n(e){if(!e||!e.nodes)return;let n=[];const o=[...e.nodes];for(let e=0;e<o.length+1;e++){const r=o[e];if(r&&"combinator"!==r.type)n.push(r);else{if(n.length>1){const e=t.default.selector({value:""});n[0].replaceWith(e),n.slice(1).forEach((e=>{e.remove()})),n.forEach((t=>{e.append(t)})),s(e),e.replaceWith(...e.nodes)}n=[]}}}function s(e){e&&e.nodes&&e.nodes.sort(((e,t)=>{if("selector"===e.type&&"selector"===t.type&&e.nodes.length&&t.nodes.length){if(e.nodes[0].type===t.nodes[0].type)return 0;if(o[e.nodes[0].type]<o[t.nodes[0].type])return-1;if(o[e.nodes[0].type]>o[t.nodes[0].type])return 1}if("selector"===e.type&&e.nodes.length){if(e.nodes[0].type===t.type)return 0;if(o[e.nodes[0].type]<o[t.type])return-1;if(o[e.nodes[0].type]>o[t.type])return 1}if("selector"===t.type&&t.nodes.length){if(e.type===t.nodes[0].type)return 0;if(o[e.type]<o[t.nodes[0].type])return-1;if(o[e.type]>o[t.nodes[0].type])return 1}return e.type===t.type?0:o[e.type]<o[t.type]?-1:1}))}const o={universal:0,tag:1,id:2,class:3,attribute:4,pseudo:5,selector:7,string:8,root:9,comment:10},r=t.default().astSync(":link").nodes[0],l=t.default().astSync(":visited").nodes[0],c=t.default().astSync("area[href]").nodes[0];function u(e,s){let o=[];return t.default((e=>{let t=0;if(e.walkPseudos((e=>{":any-link"!==e.value||e.nodes&&e.nodes.length||t++})),!t)return;let u=[];for(let e=0;e<t;e++)s?u.push([r.clone(),l.clone(),c.clone()]):u.push([r.clone(),l.clone()]);(function(...e){const t=[],n=e.length-1;function s(o,r){for(let l=0,c=e[r].length;l<c;l++){const c=o.slice(0);c.push(e[r][l]),r==n?t.push(c):s(c,r+1)}}return s([],0),t})(...u).forEach((t=>{const s=e.clone();s.walkPseudos((e=>{":any-link"!==e.value||e.nodes&&e.nodes.length||e.replaceWith(...t.shift().nodes)})),s.walk((e=>{"nodes"in e&&(e.nodes.forEach((e=>{n(e)})),n(e))})),o.push(s.toString())}))})).processSync(e),o}const i=/:any-link/;function p(e){const t={preserve:!0,...e},n={areaHrefNeedsFixing:!1,...Object(t.subFeatures)};return{postcssPlugin:"postcss-pseudo-class-any-link",Rule(e,{result:s}){if(!i.test(e.selector))return;const o=e.raws.selector&&e.raws.selector.raw||e.selector;":"!==o[o.length-1]&&function(e,t,n,s){let o=[],r=[];try{for(let t=0;t<e.selectors.length;t++){const n=e.selectors[t],l=u(n,s);l.length?o.push(...l):r.push(n)}}catch(n){return void e.warn(t,`Failed to parse selector : ${e.selector}`)}o.length&&(e.cloneBefore({selectors:o}),n?r.length&&e.cloneBefore({selectors:r}):r.length?e.selectors=r:e.remove())}(e,s,t.preserve,n.areaHrefNeedsFixing)}}}p.postcss=!0,module.exports=p;
