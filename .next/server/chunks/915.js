"use strict";exports.id=915,exports.ids=[915],exports.modules={3967:(e,n,i)=>{i.d(n,{Z:()=>MiniDrawer});var t=i(997),r=i(6689),s=i(8442),a=i(19),o=i.n(a),l=i(7898),d=i.n(l),c=i(4192),p=i.n(c),x=i(4960),h=i.n(x),u=i(3646),g=i.n(u),j=i(7934),m=i.n(j),f=i(3365),v=i.n(f),w=i(6959),k=i.n(w),y=i(834),M=i.n(y),b=i(1011),C=i.n(b),S=i(3787),D=i.n(S),P=i(8315),F=i.n(P),$=i(9528),T=i(6022),B=i(3157),X=i(5031),L=i.n(X),E=i(1664),I=i.n(E);let O={activeButton:"#000000",staticButton:"rgba(0,0,0,0.7)"},R=(0,s.styled)(I())`
text-decoration: none;
color: rgba(0,0,0,0.6);
&:hover  {
  color: #000000;
}
&:hover svg {
  color: #000000;
}
`,openedMixin=e=>({width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"}),closedMixin=e=>({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:`calc(${e.spacing(7)} + 1px)`,[e.breakpoints.up("sm")]:{width:`calc(${e.spacing(8)} + 1px)`}}),U=(0,s.styled)("div")(({theme:e})=>({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1),...e.mixins.toolbar})),Z=(0,s.styled)(d(),{shouldForwardProp:e=>"open"!==e})(({theme:e,open:n})=>({width:240,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box",...n&&{...openedMixin(e),"& .MuiDrawer-paper":openedMixin(e)},...!n&&{...closedMixin(e),"& .MuiDrawer-paper":closedMixin(e)}}));function MiniDrawer(){let e=(0,s.useTheme)(),[n,i]=r.useState(!1),a=(0,T.useDispatch)(),{currentPage:l}=(0,T.useSelector)(e=>e.main),handleClick=(e,n)=>{n!==l&&a((0,B.D4)(n))};return(0,t.jsxs)(o(),{sx:{display:"flex"},children:[t.jsx(h(),{}),t.jsx("div",{onMouseEnter:e=>{i(!0)},onMouseLeave:e=>{i(!1)},children:t.jsx(Z,{variant:"permanent",open:n,sx:{".MuiDrawer-paper":{backgroundColor:`${e.palette.primary.main}`}},children:(0,t.jsxs)("div",{style:{backgroundColor:`${e.palette.primary.main}`,height:"100vh"},children:[t.jsx(U,{children:t.jsx(m(),{onClick:()=>{i(!n)},children:n?t.jsx(k(),{}):t.jsx(v(),{})})}),t.jsx(g(),{}),t.jsx(p(),{sx:{pt:"50%"},children:$.$.map(e=>t.jsx(R,{href:e.link,onClick:n=>handleClick(n,e.link),color:O.staticButton,children:t.jsx(M(),{disablePadding:!0,sx:{display:"block"},children:(0,t.jsxs)(C(),{sx:{minHeight:48,justifyContent:n?"initial":"center",px:2.5},children:[t.jsx(D(),{sx:{minWidth:0,mr:n?3:"auto",justifyContent:"center",color:l===e.link?O.activeButton:null},children:e.icon}),t.jsx(F(),{primary:e.title,sx:{opacity:n?1:0}})]})})},L().generate()))})]})})})]})}},4650:(e,n,i)=>{i.d(n,{Z:()=>PageTitle});var t=i(997),r=i(7986),s=i(7163),a=i.n(s),o=i(8442);let l=(0,r.styled)(a())`
    padding-top: 5%;
    padding-left: 15%;
    text-transform: uppercase;
    text-shadow: 0px 0px 30px #FFFFFF;
    margin-bottom: 20px;
    @media (max-width: 600px) {
      padding-left: 20%;
    } 

`;function PageTitle({title:e}){let n=(0,o.useTheme)();return t.jsx(l,{variant:"h2",color:n.palette.secondary.contrastText,children:e})}},9528:(e,n,i)=>{i.d(n,{$:()=>u,P:()=>g});var t=i(997),r=i(2289),s=i.n(r),a=i(6593),o=i.n(a),l=i(3966),d=i.n(l),c=i(3943),p=i.n(c),x=i(5301),h=i.n(x);let u=[{title:"главное меню",icon:t.jsx(h(),{}),link:"/"},{title:"портфолио",icon:t.jsx(o(),{}),link:"portfolio"},{title:"услуги и цены",icon:t.jsx(p(),{}),link:"price"},{title:"отзывы о нас",icon:t.jsx(d(),{}),link:"reviews"},{title:"контакты",icon:t.jsx(s(),{}),link:"contacts"}],g={padding:{paddingPages:{plMD:"8%",plLG:"10%",plXL:"10%",plXS:"10%"}}}},9749:(e,n,i)=>{i.d(n,{F:()=>UseSetCurrentPageOnRefresh});var t=i(6689),r=i(6022),s=i(3157);function UseSetCurrentPageOnRefresh(){let e=(0,r.useDispatch)();(0,t.useEffect)(()=>{let n=sessionStorage.getItem("currentPage");null!==n&&e((0,s.D4)(n))})}}};