(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{521:function(e,t,i){Promise.resolve().then(i.bind(i,3259)),Promise.resolve().then(i.t.bind(i,1036,23)),Promise.resolve().then(i.t.bind(i,3177,23))},3259:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return M}});var s=i(7437),n=i(2514),a=i.n(n),r=i(5008),l=i.n(r),o=i(8206),c=e=>{let{isActive:t,setIsActive:i}=e;return(0,s.jsx)("div",{onClick:()=>{i(!t)},className:l().button,children:(0,s.jsxs)(o.E.div,{className:l().slider,animate:{top:t?"-100%":"0"},transition:{duration:.5,ease:[.76,0,.24,1]},children:[(0,s.jsx)("div",{className:l().el,children:(0,s.jsx)(d,{label:"Menu"})}),(0,s.jsx)("div",{className:l().el,children:(0,s.jsx)(d,{label:"Close"})})]})})};let d=e=>{let{label:t}=e;return(0,s.jsxs)("div",{className:l().perspectiveText,children:[(0,s.jsx)("p",{children:t}),(0,s.jsx)("p",{children:t})]})};var p=i(2265),u=i(538);function m(){let e=(0,p.useRef)(!1);return(0,u.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var h=i(3041),f=i(8243),x=i(961);class g extends p.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function v({children:e,isPresent:t}){let i=(0,p.useId)(),s=(0,p.useRef)(null),n=(0,p.useRef)({width:0,height:0,top:0,left:0});return(0,p.useInsertionEffect)(()=>{let{width:e,height:a,top:r,left:l}=n.current;if(t||!s.current||!e||!a)return;s.current.dataset.motionPopId=i;let o=document.createElement("style");return document.head.appendChild(o),o.sheet&&o.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${a}px !important;
            top: ${r}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(o)}},[t]),p.createElement(g,{isPresent:t,childRef:s,sizeRef:n},p.cloneElement(e,{ref:s}))}let w=({children:e,initial:t,isPresent:i,onExitComplete:s,custom:n,presenceAffectsLayout:a,mode:r})=>{let l=(0,x.h)(b),o=(0,p.useId)(),c=(0,p.useMemo)(()=>({id:o,initial:t,isPresent:i,custom:n,onExitComplete:e=>{for(let t of(l.set(e,!0),l.values()))if(!t)return;s&&s()},register:e=>(l.set(e,!1),()=>l.delete(e))}),a?void 0:[i]);return(0,p.useMemo)(()=>{l.forEach((e,t)=>l.set(t,!1))},[i]),p.useEffect(()=>{i||l.size||!s||s()},[i]),"popLayout"===r&&(e=p.createElement(v,{isPresent:i},e)),p.createElement(f.O.Provider,{value:c},e)};function b(){return new Map}var y=i(781),j=i(6567);let _=e=>e.key||"",N=({children:e,custom:t,initial:i=!0,onExitComplete:s,exitBeforeEnter:n,presenceAffectsLayout:a=!0,mode:r="sync"})=>{var l;(0,j.k)(!n,"Replace exitBeforeEnter with mode='wait'");let o=(0,p.useContext)(y.p).forceRender||function(){let e=m(),[t,i]=(0,p.useState)(0),s=(0,p.useCallback)(()=>{e.current&&i(t+1)},[t]),n=(0,p.useCallback)(()=>h.Wi.postRender(s),[s]);return[n,t]}()[0],c=m(),d=function(e){let t=[];return p.Children.forEach(e,e=>{(0,p.isValidElement)(e)&&t.push(e)}),t}(e),f=d,x=(0,p.useRef)(new Map).current,g=(0,p.useRef)(f),v=(0,p.useRef)(new Map).current,b=(0,p.useRef)(!0);if((0,u.L)(()=>{b.current=!1,function(e,t){e.forEach(e=>{let i=_(e);t.set(i,e)})}(d,v),g.current=f}),l=()=>{b.current=!0,v.clear(),x.clear()},(0,p.useEffect)(()=>()=>l(),[]),b.current)return p.createElement(p.Fragment,null,f.map(e=>p.createElement(w,{key:_(e),isPresent:!0,initial:!!i&&void 0,presenceAffectsLayout:a,mode:r},e)));f=[...f];let N=g.current.map(_),E=d.map(_),k=N.length;for(let e=0;e<k;e++){let t=N[e];-1!==E.indexOf(t)||x.has(t)||x.set(t,void 0)}return"wait"===r&&x.size&&(f=[]),x.forEach((e,i)=>{if(-1!==E.indexOf(i))return;let n=v.get(i);if(!n)return;let l=N.indexOf(i),u=e;u||(u=p.createElement(w,{key:_(n),isPresent:!1,onExitComplete:()=>{v.delete(i),x.delete(i);let e=g.current.findIndex(e=>e.key===i);if(g.current.splice(e,1),!x.size){if(g.current=d,!1===c.current)return;o(),s&&s()}},custom:t,presenceAffectsLayout:a,mode:r},n),x.set(i,u)),f.splice(l,0,u)}),f=f.map(e=>{let t=e.key;return x.has(t)?e:p.createElement(w,{key:_(e),isPresent:!0,presenceAffectsLayout:a,mode:r},e)}),p.createElement(p.Fragment,null,x.size?f:f.map(e=>(0,p.cloneElement)(e)))},E={initial:{opacity:0,rotateX:90,translateY:80,translateX:-20},enter:e=>({opacity:1,rotateX:0,translateY:0,translateX:0,transition:{delay:.5+.1*e,duration:.35,opacity:{duration:.35},ease:[.235,.61,.355,.1]}}),exit:{opacity:0,transition:{duration:.5,ease:[.76,0,.24,1]}}},k={initial:{opacity:0,y:20},enter:e=>({opacity:1,y:0,transition:{delay:.75+.1*e,duration:.5,opacity:{duration:.35},ease:[.235,.61,.355,.1]}}),exit:{opacity:0,transition:{duration:.5,ease:[.76,0,.24,1]}}};var C=()=>(0,s.jsxs)("div",{className:"h-full p-[80px_40px_50px_40px] box-border flex justify-between flex-col",children:[(0,s.jsx)("div",{className:"text-black text-[30px] lg:text-[46px] flex gap-[10px] flex-col",children:[{title:"Home",href:"#Home"},{title:"About Us",href:"#About"},{title:"Our Mission",href:"#Approach"},{title:"Services",href:"#Resources"},{title:"Contact",href:"#Contact"}].map((e,t)=>(0,s.jsx)("div",{className:"perspective",children:(0,s.jsx)(o.E.div,{custom:t,variants:E,animate:"enter",exit:"exit",initial:"initial",children:(0,s.jsx)("a",{href:e.href,children:e.title})})},t))}),(0,s.jsx)("div",{className:"flex flex-wrap",children:[{name:"Instagram",link:"#Home"},{name:"Linkedin",link:"#About"},{name:"Facebook",link:"#Approach"},{name:"Twitter",link:"#Resources"}].map((e,t)=>(0,s.jsx)(o.E.a,{className:"w-1/2 text-black [text-decoration:_none]",variants:k,custom:t,animate:"enter",exit:"exit",initial:"initial",href:e.link,children:e.name},"f_".concat(t)))})]}),R=i(8788);let{useEffect:A,useState:L}=i(2265);var P=()=>{let[e,t]=L(0),i=()=>{let e=window.scrollY,i=document.querySelectorAll(".seccion1"),s=0;i.forEach((t,i)=>{let n=t.offsetTop,a=n+t.offsetHeight;e>=n&&e<a&&(s=i)}),t(s)};return A(()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}),[]),e},M=()=>{let[e,t]=(0,p.useState)(!1),[i,n]=(0,p.useState)(!1),{width:r}=(0,R.Z)(),l=P(),d={widthMobile:280,widthDesktop:480,heightMobile:450,heightDesktop:600};(0,p.useEffect)(()=>{r<768?n(!0):n(!1)},[r]);let u={open:{width:i?d.widthMobile:d.widthDesktop,height:i?d.heightMobile:d.heightDesktop,top:"-25px",right:"-25px",transition:{duration:.75,ease:[.76,0,.24,1]}},closed:{width:100,height:40,top:"0px",right:"0px",transition:{duration:.75,delay:.35,ease:[.76,0,.24,1]}}},m=()=>{window.scrollTo(0,0)};return(0,s.jsx)("main",{className:"w-full z-50 absolute h-full justify-center ",children:(0,s.jsxs)("nav",{className:" h-full flex justify-center items-center",children:[(0,s.jsxs)("div",{className:"text-[#303036] flex items-center justify-center gap-3 lg:gap-4",children:[0!==l?(0,s.jsxs)("div",{className:" w-full transition-opacity flex duration-300 gap-3 sm:gap-4 opacity-1 backdrop-blur-xl fixed top-0 bg-[#000000b3] lg:left-0 py-8   ",children:[(0,s.jsx)("img",{src:"./images/ChimiaDAO Logo - PNG - By Dcmat copy.webp",alt:"logo",className:"h-10 w-10 sm:h-12 sm:w-12 ml-[10px] sm:ml-[11%]"}),(0,s.jsxs)("button",{className:"text-white font-normal  text-2xl  lg:text-3xl ".concat(a().className),onClick:m,children:["Chimia",(0,s.jsx)("span",{className:"uppercase font-medium ".concat(a().className),children:"dao"})]})]}):(0,s.jsxs)("div",{className:"w-full transition-opacity flex duration-300 gap-3 sm:gap-4 opacity-0  backdrop-blur-xl fixed top-0 bg-[#000000b3] lg:left-0 py-8 ",children:[(0,s.jsx)("img",{src:"./images/ChimiaDAO Logo - PNG - By Dcmat copy.webp",alt:"logo",className:"h-10 w-10 lg:h-12 lg:w-12 ml-[11%]"}),(0,s.jsxs)("button",{className:"text-white font-normal  text-2xl  lg:text-3xl ".concat(a().className),onClick:m,children:["Chimia",(0,s.jsx)("span",{className:"uppercase font-medium ".concat(a().className),children:"dao"})]})]}),(0,s.jsx)("img",{src:"./images/Shade.webp",alt:"sombra",className:"min-h-[100vh] w-full object-cover"}),(0,s.jsx)("img",{src:"./images/Logo-ChimiaDAO---Shade.webp",alt:"",className:"min-h-[100vh] w-full object-cover absolute animacionCirculo"}),(0,s.jsxs)("p",{className:" rounded-full bg-white animacionCirculo text-[#000] border px-10 py-3  text-xl lg:text-2xl absolute top-[57%] cursor-pointer",children:["Explore"," "]})]}),0!==l?(0,s.jsxs)("div",{className:"fixed transition opacity-1 duration-300 top-[33px] right-[10px] sm:top-[40px] sm:right-[11%]",children:[(0,s.jsx)(o.E.div,{variants:u,animate:e?"open":"closed",initial:"closed",className:"w-[280px] lg:w-[480px] lg:h-[600px] relative bg-[#f9fafa] rounded-[25px]",children:(0,s.jsx)(N,{children:e&&(0,s.jsx)(C,{})})}),(0,s.jsx)(c,{isActive:e,setIsActive:t})]}):(0,s.jsxs)("div",{className:"fixed transition opacity-0 duration-300 top-[33px] right-[10px]  sm:top-[40px] sm:right-[11%]",children:[(0,s.jsx)(o.E.div,{variants:u,animate:e?"open":"closed",initial:"closed",className:"w-[280px] lg:w-[480px] lg:h-[600px] relative bg-[#f9fafa] rounded-[25px]",children:(0,s.jsx)(N,{children:e&&(0,s.jsx)(C,{})})}),(0,s.jsx)(c,{isActive:e,setIsActive:t})]})]})})}},8788:function(e,t,i){"use strict";let{useEffect:s,useState:n}=i(2265);t.Z=()=>{let[e,t]=n({width:0,height:0}),i=()=>{let{innerHeight:e,innerWidth:i}=window;t({width:i,height:e})};return s(()=>(i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}),[]),e}},3177:function(){},5008:function(e){e.exports={button:"ButtonGrad_button__WTTYj",slider:"ButtonGrad_slider__8xL7v",el:"ButtonGrad_el__Hf6vG",perspectiveText:"ButtonGrad_perspectiveText__5_Fb_"}},2514:function(e){e.exports={style:{fontFamily:"'__Poppins_6d1a03', '__Poppins_Fallback_6d1a03'",fontStyle:"normal"},className:"__className_6d1a03"}},1036:function(e){e.exports={style:{fontFamily:"'__Raleway_ae9009', '__Raleway_Fallback_ae9009'",fontStyle:"normal"},className:"__className_ae9009"}}},function(e){e.O(0,[738,389,971,596,744],function(){return e(e.s=521)}),_N_E=e.O()}]);