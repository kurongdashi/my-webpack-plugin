(()=>{var o={922:o=>{o.exports=class{constructor(o){console.log("options=",o),this.options=o}apply(o){o.hooks.emit.tapAsync("MyWebpackPlugin",((o,s)=>{const{chunks:e,assets:t}=o;e.forEach((o=>{for(const s of o.modulesIterable)s.dependencies.forEach((o=>{console.log("依赖的模块有：",o)}))}));const r={};Object.keys(t).forEach((o=>{r[o]=t[o].size()})),t["manifest.json"]={source:()=>JSON.stringify(r),size(){return this.source().length}},s()}))}}}},s={};!function e(t){var r=s[t];if(void 0!==r)return r.exports;var n=s[t]={exports:{}};return o[t](n,n.exports,e),n.exports}(922)})();