(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8262)}])},8262:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return l},default:function(){return f}});var r=n(5893);if(!o)var o={map:function(t,e){var n={};return e?t.map(function(t,r){return n.index=r,e.call(n,t)}):t.slice()},naturalOrder:function(t,e){return t<e?-1:t>e?1:0},sum:function(t,e){var n={};return t.reduce(e?function(t,r,o){return n.index=o,t+e.call(n,r)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?o.map(t,e):t)}};var a=function(){function t(t,e,n){return(t<<10)+(e<<5)+n}function e(t){var e=[],n=!1;function r(){e.sort(t),n=!0}return{push:function(t){e.push(t),n=!1},peek:function(t){return n||r(),void 0===t&&(t=e.length-1),e[t]},pop:function(){return n||r(),e.pop()},size:function(){return e.length},map:function(t){return e.map(t)},debug:function(){return n||r(),e}}}function n(t,e,n,r,o,a,s){this.r1=t,this.r2=e,this.g1=n,this.g2=r,this.b1=o,this.b2=a,this.histo=s}function r(){this.vboxes=new e(function(t,e){return o.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())})}return n.prototype={volume:function(t){return this._volume&&!t||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(e){var n=this.histo;if(!this._count_set||e){var r,o,a,s=0;for(r=this.r1;r<=this.r2;r++)for(o=this.g1;o<=this.g2;o++)for(a=this.b1;a<=this.b2;a++)s+=n[t(r,o,a)]||0;this._count=s,this._count_set=!0}return this._count},copy:function(){return new n(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(e){var n=this.histo;if(!this._avg||e){var r,o,a,s,u=0,c=0,h=0,l=0;for(o=this.r1;o<=this.r2;o++)for(a=this.g1;a<=this.g2;a++)for(s=this.b1;s<=this.b2;s++)u+=r=n[t(o,a,s)]||0,c+=r*(o+.5)*8,h+=r*(a+.5)*8,l+=r*(s+.5)*8;this._avg=u?[~~(c/u),~~(h/u),~~(l/u)]:[~~(8*(this.r1+this.r2+1)/2),~~(8*(this.g1+this.g2+1)/2),~~(8*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(t){var e=t[0]>>3;return gval=t[1]>>3,bval=t[2]>>3,e>=this.r1&&e<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},r.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map(function(t){return t.color})},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,n=0;n<e.size();n++)if(e.peek(n).vbox.contains(t))return e.peek(n).color;return this.nearest(t)},nearest:function(t){for(var e,n,r,o=this.vboxes,a=0;a<o.size();a++)((n=Math.sqrt(Math.pow(t[0]-o.peek(a).color[0],2)+Math.pow(t[1]-o.peek(a).color[1],2)+Math.pow(t[2]-o.peek(a).color[2],2)))<e||void 0===e)&&(e=n,r=o.peek(a).color);return r},forcebw:function(){var t=this.vboxes;t.sort(function(t,e){return o.naturalOrder(o.sum(t.color),o.sum(e.color))});var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var n=t.length-1,r=t[n].color;r[0]>251&&r[1]>251&&r[2]>251&&(t[n].color=[255,255,255])}},{quantize:function(a,s){if(!a.length||s<2||s>256)return!1;var u,c,h,l,f,d,p,v,m,g,b,w=(c=Array(32768),a.forEach(function(e){c[u=t(e[0]>>3,e[1]>>3,e[2]>>3)]=(c[u]||0)+1}),c);w.forEach(function(){});var x=(d=1e6,p=0,v=1e6,m=0,g=1e6,b=0,a.forEach(function(t){(h=t[0]>>3)<d?d=h:h>p&&(p=h),(l=t[1]>>3)<v?v=l:l>m&&(m=l),(f=t[2]>>3)<g?g=f:f>b&&(b=f)}),new n(d,p,v,m,g,b,w)),y=new e(function(t,e){return o.naturalOrder(t.count(),e.count())});function k(e,n){for(var r,a=e.size(),s=0;s<1e3;){if(a>=n||s++>1e3)return;if((r=e.pop()).count()){var u=function(e,n){if(n.count()){var r=n.r2-n.r1+1,a=n.g2-n.g1+1,s=o.max([r,a,n.b2-n.b1+1]);if(1==n.count())return[n.copy()];var u,c,h,l,f=0,d=[],p=[];if(s==r)for(u=n.r1;u<=n.r2;u++){for(l=0,c=n.g1;c<=n.g2;c++)for(h=n.b1;h<=n.b2;h++)l+=e[t(u,c,h)]||0;d[u]=f+=l}else if(s==a)for(u=n.g1;u<=n.g2;u++){for(l=0,c=n.r1;c<=n.r2;c++)for(h=n.b1;h<=n.b2;h++)l+=e[t(c,u,h)]||0;d[u]=f+=l}else for(u=n.b1;u<=n.b2;u++){for(l=0,c=n.r1;c<=n.r2;c++)for(h=n.g1;h<=n.g2;h++)l+=e[t(c,h,u)]||0;d[u]=f+=l}return d.forEach(function(t,e){p[e]=f-t}),function(t){var e,r,o,a,s,c=t+"1",h=t+"2",l=0;for(u=n[c];u<=n[h];u++)if(d[u]>f/2){for(o=n.copy(),a=n.copy(),s=(e=u-n[c])<=(r=n[h]-u)?Math.min(n[h]-1,~~(u+r/2)):Math.max(n[c],~~(u-1-e/2));!d[s];)s++;for(l=p[s];!l&&d[s-1];)l=p[--s];return o[h]=s,a[c]=o[h]+1,[o,a]}}(s==r?"r":s==a?"g":"b")}}(w,r),c=u[0],h=u[1];if(!c)return;e.push(c),h&&(e.push(h),a++)}else e.push(r),s++}}y.push(x),k(y,.75*s);for(var _=new e(function(t,e){return o.naturalOrder(t.count()*t.volume(),e.count()*e.volume())});y.size();)_.push(y.pop());k(_,s);for(var E=new r;_.size();)E.push(_.pop());return E}}}().quantize,s=function(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=t.naturalWidth,this.height=this.canvas.height=t.naturalHeight,this.context.drawImage(t,0,0,this.width,this.height)};s.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var u=function(){};u.prototype.getColor=function(t,e){return void 0===e&&(e=10),this.getPalette(t,5,e)[0]},u.prototype.getPalette=function(t,e,n){var r=function(t){var e=t.colorCount,n=t.quality;if(void 0!==e&&Number.isInteger(e)){if(1===e)throw Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");e=Math.min(e=Math.max(e,2),20)}else e=10;return(void 0===n||!Number.isInteger(n)||n<1)&&(n=10),{colorCount:e,quality:n}}({colorCount:e,quality:n}),o=new s(t),u=a(function(t,e,n){for(var r,o,a,s,u,c=[],h=0;h<e;h+=n)o=t[0+(r=4*h)],a=t[r+1],s=t[r+2],(void 0===(u=t[r+3])||u>=125)&&(o>250&&a>250&&s>250||c.push([o,a,s]));return c}(o.getImageData().data,o.width*o.height,r.quality),r.colorCount);return u?u.palette():null},u.prototype.getColorFromUrl=function(t,e,n){var r=this,o=document.createElement("img");o.addEventListener("load",function(){e(r.getPalette(o,5,n)[0],t)}),o.src=t},u.prototype.getImageData=function(t,e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer",n.onload=function(){if(200==this.status){var t=new Uint8Array(this.response);i=t.length;for(var n=Array(i),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);var o=n.join("");e("data:image/png;base64,"+window.btoa(o))}},n.send()},u.prototype.getColorAsync=function(t,e,n){var r=this;this.getImageData(t,function(t){var o=document.createElement("img");o.addEventListener("load",function(){e(r.getPalette(o,5,n)[0],this)}),o.src=t})};var c=n(7294);n(5486),n(3024);let h=[{narration:[{speaker:"Maya",text:"Wait a minute, how does a computer even think?"},{speaker:"Wu",text:"Child of curiosity, think of computers not as thinkers, but as vast libraries filled with information. The processor, the core of the computer, is akin to a wise librarian. It knows where to find every piece of information in this vast library and fetches it when it's needed. Much like how a note played on your violin creates a beautiful sound, when you command, the computer acquires the right 'note' or information."}]},{narration:[{speaker:"Maya",text:"Then, how does the computer know which 'note' to play?"},{speaker:"Nia",text:"Imagine you're building a castle in Minecraft. You start with different blocks, don't you? In the computer's world, the 'blocks' are instructions in the form of binary codes. Like a cunning fox swiftly darting between the trees, the processor swiftly sifts through these different binary blocks to find the one it needs."}]},{narration:[{speaker:"Maya",text:"But why binary? Does the computer speak a different language?"},{speaker:"Elara",text:"Indeed, darling. Computers communicate with the language of nature, binary. It's as clear to them as leaves rustling in the wind is to us. It's a song of two notes: ones and zeros. Just as your ballet performance is a dance of motions and stillness, the flow of binary codes are a dance of ones and zeros."}]},{narration:[{speaker:"Maya",text:"So a computer doesn't think, it follows instructions in binary, like how I follow the notes when playing my violin. It interprets these instructions like how I interpret the steps in ballet. It's like a complex Minecraft build, where each block is significant. Maybe computers aren't that different from us after all; we also follow instructions, in our own way..."}]}];n(9182);var l=!0;function f(t){let{scenesFromProps:e}=t,[n,o]=(0,c.useState)(0),a=(0,c.useRef)([]),[s,l]=(0,c.useState)([0,0,0]);if((0,c.useEffect)(()=>{a.current=e.map((t,e)=>a.current[e]||null)},[e]),(0,c.useEffect)(()=>{let t=()=>{n<e.length-1&&o(n+1)};return a.current instanceof HTMLAudioElement&&(a.current.play(),a.current.addEventListener("ended",t)),()=>{a.current instanceof HTMLAudioElement&&a.current.removeEventListener("ended",t)}},[n,e]),!e.length)return(0,r.jsx)("div",{children:"loading..."});let f=t=>{if(t.complete){let e=new u;try{l(e.getColor(t))}catch(t){console.error("Error retrieving color from image",t)}}else t.addEventListener("load",function(){l(new u().getColor(t))})};return e[n],(0,r.jsxs)("div",{className:"px-0 mx-auto max-w-screen-2xl",children:[" ",(0,r.jsx)("div",{className:"flex justify-center",children:e.map((t,e)=>(0,r.jsxs)("div",{className:"scene ".concat(e===n?"current":"hidden"),children:[(0,r.jsx)("audio",{ref:a,src:t.audio,controls:!0,autoPlay:!0}),(0,r.jsxs)("div",{className:"flex flex-row justify-center",children:[" ",t.frames.map((t,n)=>(0,r.jsxs)("div",{className:"frame m-2",children:[" ",(0,r.jsx)("img",{src:t.image,alt:"frame",onLoad:t=>f(t.target)}),(0,r.jsx)("div",{className:"frame-color",style:{backgroundColor:"rgb(".concat(s.join(","),")")}})]},"frame-".concat(e,"-").concat(n)))]}),(0,r.jsx)("div",{className:"mt-8 text-xl",children:h[e].narration.map((t,n)=>(0,r.jsxs)("div",{className:"narration mt-5",children:[(0,r.jsxs)("div",{className:"speaker font-bold",children:[t.speaker,":"]}),(0,r.jsx)("div",{className:"text",children:t.text})]},"narration-".concat(e,"-").concat(n)))})]},"scene-".concat(e)))}),(0,r.jsxs)("div",{className:"w-full flex justify-center mt-5",children:[" ",(0,r.jsx)("button",{className:"button text-2xl border-2 border-white rounded-xl py-2 px-5",onClick:()=>{o(n<e.length-1?n+1:0)},children:n<e.length-1?"Next":"Restart"})]})]})}},9182:function(){},5486:function(){},3024:function(){}},function(t){t.O(0,[888,774,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);