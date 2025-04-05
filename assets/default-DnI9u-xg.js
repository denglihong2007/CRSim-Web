import{g as I,m as E,c as Le,h as W,a as de,p as P,r as U,b as K,t as F,s as V,u as Ne,d as h,e as ve,f as ge,w as fe,i as L,j as Y,k as me,l as o,n as N,o as ye,q as he,v as p,x,y as be,z as O,F as Q,A as Fe,B as C,C as $e,T as Z,D as X,E as ee,S as Se,G as Oe,H as A,I as je,J as De,K as _e,L as ie,M as pe,N as We,O as Ue,P as qe,Q as Me,R as Ge,U as Je,V as Ke,W as Ye}from"./index-CbiSuNva.js";import{u as te,a as ae,b as xe,c as q,m as M,d as G,e as Ve,f as ne,V as R,_ as ke,g as Qe,h as Ze,i as D,j as Xe,k as et,l as tt,n as at,o as nt,p as lt,q as st,r as ot,s as J,t as rt}from"./VMain-CV9as_B5.js";function it(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return I()({name:t??Le(de(e.replace(/__/g,"-"))),props:{tag:{type:String,default:s},...E()},setup(a,i){let{slots:r}=i;return()=>{var n;return W(a.tag,{class:[e,a.class],style:a.style},(n=r.default)==null?void 0:n.call(r))}}})}const ut=P({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ne(),...E(),...Ve(),...me(),...G(),...M({tag:"footer"}),...Y()},"VFooter"),ct=I()({name:"VFooter",props:ut(),setup(e,s){let{slots:t}=s;const a=U(),{themeClasses:i}=K(e),{backgroundColorClasses:r,backgroundColorStyles:n}=te(F(e,"color")),{borderClasses:l}=ae(e),{elevationClasses:f}=xe(e),{roundedClasses:c}=q(e),u=V(32),{resizeRef:d}=Ne(v=>{v.length&&(u.value=v[0].target.clientHeight)}),b=h(()=>e.height==="auto"?u.value:parseInt(e.height,10));return ve(()=>e.app,()=>{const v=ge({id:e.name,order:h(()=>parseInt(e.order,10)),position:h(()=>"bottom"),layoutSize:b,elementSize:h(()=>e.height==="auto"?void 0:b.value),active:h(()=>e.app),absolute:F(e,"absolute")});fe(()=>{a.value=v.layoutItemStyles.value})}),L(()=>o(e.tag,{ref:d,class:["v-footer",i.value,r.value,l.value,f.value,c.value,e.class],style:[n.value,e.app?a.value:{height:N(e.height)},e.style]},t)),{}}}),dt=["href","title"],vt={class:"text-caption text-disabled",style:{position:"absolute",right:"16px"}},gt=ye({__name:"AppFooter",setup(e){const s=[{title:"CRSim-Web GitHub",icon:"mdi-github",href:"https://github.com/denglihong2007/CRSim-Web"}];return(t,a)=>(p(),he(ct,{height:"40",app:""},{default:x(()=>[(p(),be(Q,null,Fe(s,i=>O("a",{key:i.title,href:i.href,title:i.title,class:"d-inline-block mx-2 social-link",rel:"noopener noreferrer",target:"_blank"},[o(R,{icon:i.icon},null,8,["icon"])],8,dt)),64)),O("div",vt,[C(" © "+$e(new Date().getFullYear())+" ",1),a[0]||(a[0]=O("span",{class:"d-none d-sm-inline-block"},"电排骨",-1)),a[1]||(a[1]=C(" — ")),a[2]||(a[2]=O("a",{class:"text-decoration-none on-surface",href:"https://www.gnu.org/licenses/gpl-3.0.html",rel:"noopener noreferrer",target:"_blank"}," GPL-3.0 License ",-1))])]),_:1}))}}),ft=ke(gt,[["__scopeId","data-v-e2ce1923"]]),mt="/assets/logo-B_uAZJRH.png",yt=P({text:String,...E(),...M()},"VToolbarTitle"),Te=I()({name:"VToolbarTitle",props:yt(),setup(e,s){let{slots:t}=s;return L(()=>{const a=!!(t.default||t.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var i;return[a&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(i=t.default)==null?void 0:i.call(t)])]}})}),{}}}),ht=P({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function k(e,s,t){return I()({name:e,props:ht({mode:t,origin:s}),setup(a,i){let{slots:r}=i;const n={onBeforeEnter(l){a.origin&&(l.style.transformOrigin=a.origin)},onLeave(l){if(a.leaveAbsolute){const{offsetTop:f,offsetLeft:c,offsetWidth:u,offsetHeight:d}=l;l._transitionInitialStyles={position:l.style.position,top:l.style.top,left:l.style.left,width:l.style.width,height:l.style.height},l.style.position="absolute",l.style.top=`${f}px`,l.style.left=`${c}px`,l.style.width=`${u}px`,l.style.height=`${d}px`}a.hideOnLeave&&l.style.setProperty("display","none","important")},onAfterLeave(l){if(a.leaveAbsolute&&(l!=null&&l._transitionInitialStyles)){const{position:f,top:c,left:u,width:d,height:b}=l._transitionInitialStyles;delete l._transitionInitialStyles,l.style.position=f||"",l.style.top=c||"",l.style.left=u||"",l.style.width=d||"",l.style.height=b||""}}};return()=>{const l=a.group?Z:X;return W(l,{name:a.disabled?"":e,css:!a.disabled,...a.group?void 0:{mode:a.mode},...a.disabled?{}:n},r.default)}}})}function Be(e,s){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return I()({name:e,props:{mode:{type:String,default:t},disabled:Boolean,group:Boolean},setup(a,i){let{slots:r}=i;const n=a.group?Z:X;return()=>W(n,{name:a.disabled?"":e,css:!a.disabled,...a.disabled?{}:s},r.default)}})}function Ce(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",a=de(`offset-${t}`);return{onBeforeEnter(n){n._parent=n.parentNode,n._initialStyle={transition:n.style.transition,overflow:n.style.overflow,[t]:n.style[t]}},onEnter(n){const l=n._initialStyle;if(!l)return;n.style.setProperty("transition","none","important"),n.style.overflow="hidden";const f=`${n[a]}px`;n.style[t]="0",n.offsetHeight,n.style.transition=l.transition,e&&n._parent&&n._parent.classList.add(e),requestAnimationFrame(()=>{n.style[t]=f})},onAfterEnter:r,onEnterCancelled:r,onLeave(n){n._initialStyle={transition:"",overflow:n.style.overflow,[t]:n.style[t]},n.style.overflow="hidden",n.style[t]=`${n[a]}px`,n.offsetHeight,requestAnimationFrame(()=>n.style[t]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(n){e&&n._parent&&n._parent.classList.remove(e),r(n)}function r(n){if(!n._initialStyle)return;const l=n._initialStyle[t];n.style.overflow=n._initialStyle.overflow,l!=null&&(n.style[t]=l),delete n._initialStyle}}k("fab-transition","center center","out-in");k("dialog-bottom-transition");k("dialog-top-transition");k("fade-transition");k("scale-transition");k("scroll-x-transition");k("scroll-x-reverse-transition");k("scroll-y-transition");k("scroll-y-reverse-transition");k("slide-x-transition");k("slide-x-reverse-transition");k("slide-y-transition");k("slide-y-reverse-transition");const bt=Be("expand-transition",Ce());Be("expand-x-transition",Ce("",!0));function St(e){return{aspectStyles:h(()=>{const s=Number(e.aspectRatio);return s?{paddingBottom:String(1/s*100)+"%"}:void 0})}}const we=P({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...E(),...Qe()},"VResponsive"),ue=I()({name:"VResponsive",props:we(),setup(e,s){let{slots:t}=s;const{aspectStyles:a}=St(e),{dimensionStyles:i}=Ze(e);return L(()=>{var r;return o("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[o("div",{class:"v-responsive__sizer",style:a.value},null),(r=t.additional)==null?void 0:r.call(t),t.default&&o("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}}),_t=P({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),j=(e,s)=>{let{slots:t}=s;const{transition:a,disabled:i,group:r,...n}=e,{component:l=r?Z:X,...f}=typeof a=="object"?a:{};return W(l,ee(typeof a=="string"?{name:i?"":a}:f,typeof a=="string"?{}:Object.fromEntries(Object.entries({disabled:i,group:r}).filter(c=>{let[u,d]=c;return d!==void 0})),n),t)};function xt(e,s){if(!Se)return;const t=s.modifiers||{},a=s.value,{handler:i,options:r}=typeof a=="object"?a:{handler:a,options:{}},n=new IntersectionObserver(function(){var d;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const c=(d=e._observe)==null?void 0:d[s.instance.$.uid];if(!c)return;const u=l.some(b=>b.isIntersecting);i&&(!t.quiet||c.init)&&(!t.once||u||c.init)&&i(u,l,f),u&&t.once?Ie(e,s):c.init=!0},r);e._observe=Object(e._observe),e._observe[s.instance.$.uid]={init:!1,observer:n},n.observe(e)}function Ie(e,s){var a;const t=(a=e._observe)==null?void 0:a[s.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[s.instance.$.uid])}const Vt={mounted:xt,unmounted:Ie},kt=P({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...we(),...E(),...G(),..._t()},"VImg"),le=I()({name:"VImg",directives:{intersect:Vt},props:kt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,s){let{emit:t,slots:a}=s;const{backgroundColorClasses:i,backgroundColorStyles:r}=te(F(e,"color")),{roundedClasses:n}=q(e),l=Oe("VImg"),f=V(""),c=U(),u=V(e.eager?"loading":"idle"),d=V(),b=V(),v=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),y=h(()=>v.value.aspect||d.value/b.value||0);A(()=>e.src,()=>{_(u.value!=="idle")}),A(y,(g,S)=>{!g&&S&&c.value&&B(c.value)}),je(()=>_());function _(g){if(!(e.eager&&g)&&!(Se&&!g&&!e.eager)){if(u.value="loading",v.value.lazySrc){const S=new Image;S.src=v.value.lazySrc,B(S,null)}v.value.src&&De(()=>{var S;t("loadstart",((S=c.value)==null?void 0:S.currentSrc)||v.value.src),setTimeout(()=>{var z;if(!l.isUnmounted)if((z=c.value)!=null&&z.complete){if(c.value.naturalWidth||H(),u.value==="error")return;y.value||B(c.value,null),u.value==="loading"&&w()}else y.value||B(c.value),m()})})}}function w(){var g;l.isUnmounted||(m(),B(c.value),u.value="loaded",t("load",((g=c.value)==null?void 0:g.currentSrc)||v.value.src))}function H(){var g;l.isUnmounted||(u.value="error",t("error",((g=c.value)==null?void 0:g.currentSrc)||v.value.src))}function m(){const g=c.value;g&&(f.value=g.currentSrc||g.src)}let T=-1;_e(()=>{clearTimeout(T)});function B(g){let S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const z=()=>{if(clearTimeout(T),l.isUnmounted)return;const{naturalHeight:oe,naturalWidth:re}=g;oe||re?(d.value=re,b.value=oe):!g.complete&&u.value==="loading"&&S!=null?T=window.setTimeout(z,S):(g.currentSrc.endsWith(".svg")||g.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,b.value=1)};z()}const $=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),ze=()=>{var z;if(!v.value.src||u.value==="idle")return null;const g=o("img",{class:["v-img__img",$.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:v.value.src,srcset:v.value.srcset,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:c,onLoad:w,onError:H},null),S=(z=a.sources)==null?void 0:z.call(a);return o(j,{transition:e.transition,appear:!0},{default:()=>[ie(S?o("picture",{class:"v-img__picture"},[S,g]):g,[[We,u.value==="loaded"]])]})},He=()=>o(j,{transition:e.transition},{default:()=>[v.value.lazySrc&&u.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",$.value],style:{objectPosition:e.position},crossorigin:e.crossorigin,src:v.value.lazySrc,alt:e.alt,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),Re=()=>a.placeholder?o(j,{transition:e.transition,appear:!0},{default:()=>[(u.value==="loading"||u.value==="error"&&!a.error)&&o("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,Ae=()=>a.error?o(j,{transition:e.transition,appear:!0},{default:()=>[u.value==="error"&&o("div",{class:"v-img__error"},[a.error()])]}):null,Ee=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,se=V(!1);{const g=A(y,S=>{S&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{se.value=!0})}),g())})}return L(()=>{const g=ue.filterProps(e);return ie(o(ue,ee({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!se.value},i.value,n.value,e.class],style:[{width:N(e.width==="auto"?d.value:e.width)},r.value,e.style]},g,{aspectRatio:y.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>o(Q,null,[o(ze,null,null),o(He,null,null),o(Ee,null,null),o(Re,null,null),o(Ae,null,null)]),default:a.default}),[[pe("intersect"),{handler:_,options:e.options},null,{once:!0}]])}),{currentSrc:f,image:c,state:u,naturalWidth:d,naturalHeight:b}}}),Tt=[null,"prominent","default","comfortable","compact"],Pe=P({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Tt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ne(),...E(),...Ve(),...G(),...M({tag:"header"}),...Y()},"VToolbar"),ce=I()({name:"VToolbar",props:Pe(),setup(e,s){var v;let{slots:t}=s;const{backgroundColorClasses:a,backgroundColorStyles:i}=te(F(e,"color")),{borderClasses:r}=ae(e),{elevationClasses:n}=xe(e),{roundedClasses:l}=q(e),{themeClasses:f}=K(e),{rtlClasses:c}=Ue(),u=V(!!(e.extended||(v=t.extension)!=null&&v.call(t))),d=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),b=h(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return qe({VBtn:{variant:"text"}}),L(()=>{var H;const y=!!(e.title||t.title),_=!!(t.image||e.image),w=(H=t.extension)==null?void 0:H.call(t);return u.value=!!(e.extended||w),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},a.value,r.value,n.value,l.value,f.value,c.value,e.class],style:[i.value,e.style]},{default:()=>[_&&o("div",{key:"image",class:"v-toolbar__image"},[t.image?o(D,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):o(le,{key:"image-img",cover:!0,src:e.image},null)]),o(D,{defaults:{VTabs:{height:N(d.value)}}},{default:()=>{var m,T,B;return[o("div",{class:"v-toolbar__content",style:{height:N(d.value)}},[t.prepend&&o("div",{class:"v-toolbar__prepend"},[(m=t.prepend)==null?void 0:m.call(t)]),y&&o(Te,{key:"title",text:e.title},{text:t.title}),(T=t.default)==null?void 0:T.call(t),t.append&&o("div",{class:"v-toolbar__append"},[(B=t.append)==null?void 0:B.call(t)])])]}}),o(D,{defaults:{VTabs:{height:N(b.value)}}},{default:()=>[o(bt,null,{default:()=>[u.value&&o("div",{class:"v-toolbar__extension",style:{height:N(b.value)}},[w])]})]})]})}),{contentHeight:d,extensionHeight:b}}}),Bt=P({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Ct(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=s;let a=0,i=0;const r=U(null),n=V(0),l=V(0),f=V(0),c=V(!1),u=V(!1),d=h(()=>Number(e.scrollThreshold)),b=h(()=>Me((d.value-n.value)/d.value||0)),v=()=>{const y=r.value;if(!y||t&&!t.value)return;a=n.value,n.value="window"in y?y.pageYOffset:y.scrollTop;const _=y instanceof Window?document.documentElement.scrollHeight:y.scrollHeight;if(i!==_){i=_;return}u.value=n.value<a,f.value=Math.abs(n.value-d.value)};return A(u,()=>{l.value=l.value||n.value}),A(c,()=>{l.value=0}),Ge(()=>{A(()=>e.scrollTarget,y=>{var w;const _=y?document.querySelector(y):window;_&&_!==r.value&&((w=r.value)==null||w.removeEventListener("scroll",v),r.value=_,r.value.addEventListener("scroll",v,{passive:!0}))},{immediate:!0})}),_e(()=>{var y;(y=r.value)==null||y.removeEventListener("scroll",v)}),t&&A(t,v,{immediate:!0}),{scrollThreshold:d,currentScroll:n,currentThreshold:f,isScrollActive:c,scrollRatio:b,isScrollingUp:u,savedScroll:l}}const wt=P({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Pe(),...me(),...Bt(),height:{type:[Number,String],default:64}},"VAppBar"),It=I()({name:"VAppBar",props:wt(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;const a=U(),i=Je(e,"modelValue"),r=h(()=>{var T;const m=new Set(((T=e.scrollBehavior)==null?void 0:T.split(" "))??[]);return{hide:m.has("hide"),fullyHide:m.has("fully-hide"),inverted:m.has("inverted"),collapse:m.has("collapse"),elevate:m.has("elevate"),fadeImage:m.has("fade-image")}}),n=h(()=>{const m=r.value;return m.hide||m.fullyHide||m.inverted||m.collapse||m.elevate||m.fadeImage||!i.value}),{currentScroll:l,scrollThreshold:f,isScrollingUp:c,scrollRatio:u}=Ct(e,{canScroll:n}),d=h(()=>r.value.hide||r.value.fullyHide),b=h(()=>e.collapse||r.value.collapse&&(r.value.inverted?u.value>0:u.value===0)),v=h(()=>e.flat||r.value.fullyHide&&!i.value||r.value.elevate&&(r.value.inverted?l.value>0:l.value===0)),y=h(()=>r.value.fadeImage?r.value.inverted?1-u.value:u.value:void 0),_=h(()=>{var B,$;if(r.value.hide&&r.value.inverted)return 0;const m=((B=a.value)==null?void 0:B.contentHeight)??0,T=(($=a.value)==null?void 0:$.extensionHeight)??0;return d.value?l.value<f.value||r.value.fullyHide?m+T:m:m+T});ve(h(()=>!!e.scrollBehavior),()=>{fe(()=>{d.value?r.value.inverted?i.value=l.value>f.value:i.value=c.value||l.value<f.value:i.value=!0})});const{ssrBootStyles:w}=Xe(),{layoutItemStyles:H}=ge({id:e.name,order:h(()=>parseInt(e.order,10)),position:F(e,"location"),layoutSize:_,elementSize:V(void 0),active:i,absolute:F(e,"absolute")});return L(()=>{const m=ce.filterProps(e);return o(ce,ee({ref:a,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...H.value,"--v-toolbar-image-opacity":y.value,height:void 0,...w.value},e.style]},m,{collapse:b.value,flat:v.value}),t)}),{}}}),Pt=P({start:Boolean,end:Boolean,icon:Ke,image:String,text:String,...ne(),...E(),...st(),...G(),...lt(),...M(),...Y(),...nt({variant:"flat"})},"VAvatar"),zt=I()({name:"VAvatar",props:Pt(),setup(e,s){let{slots:t}=s;const{themeClasses:a}=K(e),{borderClasses:i}=ae(e),{colorClasses:r,colorStyles:n,variantClasses:l}=et(e),{densityClasses:f}=tt(e),{roundedClasses:c}=q(e),{sizeClasses:u,sizeStyles:d}=at(e);return L(()=>o(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,i.value,r.value,f.value,c.value,u.value,l.value,e.class],style:[n.value,d.value,e.style]},{default:()=>[t.default?o(D,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?o(le,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?o(R,{key:"icon",icon:e.icon},null):e.text,ot(!1,"v-avatar")]})),{}}}),Ht=it("v-spacer","div","VSpacer"),Rt={},At={class:"d-flex align-center ml-2"};function Et(e,s){return p(),he(It,{app:"","elevate-on-scroll":""},{default:x(()=>[O("div",At,[o(zt,{size:"48"},{default:x(()=>[o(le,{src:mt})]),_:1}),o(Te,{class:"text-h5 font-weight-bold ml-2"},{default:x(()=>s[0]||(s[0]=[C(" CRSim ")])),_:1})]),o(Ht),o(J,{text:"",to:"/","active-class":"active-link",class:"mx-1 nav-btn"},{default:x(()=>[o(R,{left:"",class:"mr-1"},{default:x(()=>s[1]||(s[1]=[C("mdi-home")])),_:1}),s[2]||(s[2]=C(" 首页 "))]),_:1}),o(J,{text:"",href:"https://docs.crsim.tech/",target:"_blank",rel:"noopener noreferrer",class:"mx-1 nav-btn"},{default:x(()=>[o(R,{left:"",class:"mr-1"},{default:x(()=>s[3]||(s[3]=[C("mdi-text-box")])),_:1}),s[5]||(s[5]=C(" 文档 ")),o(R,{right:"",small:"",class:"ml-1"},{default:x(()=>s[4]||(s[4]=[C("mdi-open-in-new")])),_:1})]),_:1}),o(J,{text:"",href:"http://47.122.74.193/CRSim/Key/",target:"_blank",rel:"noopener noreferrer",class:"mx-1 nav-btn"},{default:x(()=>[o(R,{left:"",class:"mr-1"},{default:x(()=>s[6]||(s[6]=[C("mdi-key")])),_:1}),s[8]||(s[8]=C(" 申请密钥 ")),o(R,{right:"",small:"",class:"ml-1"},{default:x(()=>s[7]||(s[7]=[C("mdi-open-in-new")])),_:1})]),_:1})]),_:1})}const Lt=ke(Rt,[["render",Et],["__scopeId","data-v-e239fa26"]]),$t=ye({__name:"default",setup(e){return(s,t)=>{const a=Ye("router-view");return p(),be(Q,null,[o(Lt),o(rt,null,{default:x(()=>[o(a)]),_:1}),o(ft)],64)}}});export{$t as default};
