"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[284],{4954:function(e,t,a){var r=a(4836);t.Z=void 0;var o=r(a(4938)),i=a(5893),l=(0,o.default)((0,i.jsx)("path",{fillRule:"evenodd",d:"M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM10 17H5v-2h5v2zm0-4H5v-2h5v2zm0-4H5V7h5v2zm4.82 6L12 12.16l1.41-1.41 1.41 1.42L17.99 9l1.42 1.42L14.82 15z"}),"FactCheck");t.Z=l},6323:function(e,t,a){var r=a(4836);t.Z=void 0;var o=r(a(4938)),i=a(5893),l=(0,o.default)((0,i.jsx)("path",{d:"M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"}),"Toc");t.Z=l},2660:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7462),o=a(3366),i=a(7294),l=a(512),n=a(4780),s=a(1657),d=a(948),c=a(1588),u=a(4867);function getCardActionAreaUtilityClass(e){return(0,u.Z)("MuiCardActionArea",e)}let p=(0,c.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]);var v=a(7739),g=a(5893);let f=["children","className","focusVisibleClassName"],useUtilityClasses=e=>{let{classes:t}=e;return(0,n.Z)({root:["root"],focusHighlight:["focusHighlight"]},getCardActionAreaUtilityClass,t)},h=(0,d.ZP)(v.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${p.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${p.focusVisible} .${p.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}})),Z=(0,d.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})(({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})})),y=i.forwardRef(function(e,t){let a=(0,s.Z)({props:e,name:"MuiCardActionArea"}),{children:i,className:n,focusVisibleClassName:d}=a,c=(0,o.Z)(a,f),u=useUtilityClasses(a);return(0,g.jsxs)(h,(0,r.Z)({className:(0,l.Z)(u.root,n),focusVisibleClassName:(0,l.Z)(d,u.focusVisible),ref:t,ownerState:a},c,{children:[i,(0,g.jsx)(Z,{className:u.focusHighlight,ownerState:a})]}))});var m=y},3965:function(e,t,a){a.d(t,{Z:function(){return y}});var r=a(3366),o=a(7462),i=a(7294),l=a(512),n=a(4780),s=a(1657),d=a(948),c=a(1588),u=a(4867);function getCardMediaUtilityClass(e){return(0,u.Z)("MuiCardMedia",e)}(0,c.Z)("MuiCardMedia",["root","media","img"]);var p=a(5893);let v=["children","className","component","image","src","style"],useUtilityClasses=e=>{let{classes:t,isMediaComponent:a,isImageComponent:r}=e;return(0,n.Z)({root:["root",a&&"media",r&&"img"]},getCardMediaUtilityClass,t)},g=(0,d.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e,{isMediaComponent:r,isImageComponent:o}=a;return[t.root,r&&t.media,o&&t.img]}})(({ownerState:e})=>(0,o.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),f=["video","audio","picture","iframe","img"],h=["picture","img"],Z=i.forwardRef(function(e,t){let a=(0,s.Z)({props:e,name:"MuiCardMedia"}),{children:i,className:n,component:d="div",image:c,src:u,style:Z}=a,y=(0,r.Z)(a,v),m=-1!==f.indexOf(d),b=!m&&c?(0,o.Z)({backgroundImage:`url("${c}")`},Z):Z,C=(0,o.Z)({},a,{component:d,isMediaComponent:m,isImageComponent:-1!==h.indexOf(d)}),x=useUtilityClasses(C);return(0,p.jsx)(g,(0,o.Z)({className:(0,l.Z)(x.root,n),as:d,role:!m&&c?"img":void 0,ref:t,style:b,ownerState:C,src:m?c||u:void 0},y,{children:i}))});var y=Z},7906:function(e,t,a){a.d(t,{Z:function(){return y}});var r=a(3366),o=a(7462),i=a(7294),l=a(512),n=a(4780),s=a(1618),d=a(1657),c=a(948),u=a(1588),p=a(4867);function getTableUtilityClass(e){return(0,p.Z)("MuiTable",e)}(0,u.Z)("MuiTable",["root","stickyHeader"]);var v=a(5893);let g=["className","component","padding","size","stickyHeader"],useUtilityClasses=e=>{let{classes:t,stickyHeader:a}=e;return(0,n.Z)({root:["root",a&&"stickyHeader"]},getTableUtilityClass,t)},f=(0,c.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>(0,o.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,o.Z)({},e.typography.body2,{padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"})),h="table",Z=i.forwardRef(function(e,t){let a=(0,d.Z)({props:e,name:"MuiTable"}),{className:n,component:c=h,padding:u="normal",size:p="medium",stickyHeader:Z=!1}=a,y=(0,r.Z)(a,g),m=(0,o.Z)({},a,{component:c,padding:u,size:p,stickyHeader:Z}),b=useUtilityClasses(m),C=i.useMemo(()=>({padding:u,size:p,stickyHeader:Z}),[u,p,Z]);return(0,v.jsx)(s.Z.Provider,{value:C,children:(0,v.jsx)(f,(0,o.Z)({as:c,role:c===h?null:"table",ref:t,className:(0,l.Z)(b.root,n),ownerState:m},y))})});var y=Z},1618:function(e,t,a){var r=a(7294);let o=r.createContext();t.Z=o},4063:function(e,t,a){var r=a(7294);let o=r.createContext();t.Z=o},295:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7462),o=a(3366),i=a(7294),l=a(512),n=a(4780),s=a(4063),d=a(1657),c=a(948),u=a(1588),p=a(4867);function getTableBodyUtilityClass(e){return(0,p.Z)("MuiTableBody",e)}(0,u.Z)("MuiTableBody",["root"]);var v=a(5893);let g=["className","component"],useUtilityClasses=e=>{let{classes:t}=e;return(0,n.Z)({root:["root"]},getTableBodyUtilityClass,t)},f=(0,c.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),h={variant:"body"},Z="tbody",y=i.forwardRef(function(e,t){let a=(0,d.Z)({props:e,name:"MuiTableBody"}),{className:i,component:n=Z}=a,c=(0,o.Z)(a,g),u=(0,r.Z)({},a,{component:n}),p=useUtilityClasses(u);return(0,v.jsx)(s.Z.Provider,{value:h,children:(0,v.jsx)(f,(0,r.Z)({className:(0,l.Z)(p.root,i),as:n,ref:t,role:n===Z?null:"rowgroup",ownerState:u},c))})});var m=y},3252:function(e,t,a){a.d(t,{Z:function(){return C}});var r=a(3366),o=a(7462),i=a(7294),l=a(512),n=a(4780),s=a(1796),d=a(8216),c=a(1618),u=a(4063),p=a(1657),v=a(948),g=a(1588),f=a(4867);function getTableCellUtilityClass(e){return(0,f.Z)("MuiTableCell",e)}let h=(0,g.Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]);var Z=a(5893);let y=["align","className","component","padding","scope","size","sortDirection","variant"],useUtilityClasses=e=>{let{classes:t,variant:a,align:r,padding:o,size:i,stickyHeader:l}=e,s={root:["root",a,l&&"stickyHeader","inherit"!==r&&`align${(0,d.Z)(r)}`,"normal"!==o&&`padding${(0,d.Z)(o)}`,`size${(0,d.Z)(i)}`]};return(0,n.Z)(s,getTableCellUtilityClass,t)},m=(0,v.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,t[a.variant],t[`size${(0,d.Z)(a.size)}`],"normal"!==a.padding&&t[`padding${(0,d.Z)(a.padding)}`],"inherit"!==a.align&&t[`align${(0,d.Z)(a.align)}`],a.stickyHeader&&t.stickyHeader]}})(({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${"light"===e.palette.mode?(0,s.$n)((0,s.Fq)(e.palette.divider,1),.88):(0,s._j)((0,s.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:(e.vars||e).palette.text.primary},"footer"===t.variant&&{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${h.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default})),b=i.forwardRef(function(e,t){let a;let n=(0,p.Z)({props:e,name:"MuiTableCell"}),{align:s="inherit",className:d,component:v,padding:g,scope:f,size:h,sortDirection:b,variant:C}=n,x=(0,r.Z)(n,y),M=i.useContext(c.Z),T=i.useContext(u.Z),w=T&&"head"===T.variant,R=f;"td"===(a=v||(w?"th":"td"))?R=void 0:!R&&w&&(R="col");let H=C||T&&T.variant,k=(0,o.Z)({},n,{align:s,component:a,padding:g||(M&&M.padding?M.padding:"normal"),size:h||(M&&M.size?M.size:"medium"),sortDirection:b,stickyHeader:"head"===H&&M&&M.stickyHeader,variant:H}),U=useUtilityClasses(k),z=null;return b&&(z="asc"===b?"ascending":"descending"),(0,Z.jsx)(m,(0,o.Z)({as:a,ref:t,className:(0,l.Z)(U.root,d),"aria-sort":z,scope:R,ownerState:k},x))});var C=b},2882:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(7462),o=a(3366),i=a(7294),l=a(512),n=a(4780),s=a(1657),d=a(948),c=a(1588),u=a(4867);function getTableContainerUtilityClass(e){return(0,u.Z)("MuiTableContainer",e)}(0,c.Z)("MuiTableContainer",["root"]);var p=a(5893);let v=["className","component"],useUtilityClasses=e=>{let{classes:t}=e;return(0,n.Z)({root:["root"]},getTableContainerUtilityClass,t)},g=(0,d.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),f=i.forwardRef(function(e,t){let a=(0,s.Z)({props:e,name:"MuiTableContainer"}),{className:i,component:n="div"}=a,d=(0,o.Z)(a,v),c=(0,r.Z)({},a,{component:n}),u=useUtilityClasses(c);return(0,p.jsx)(g,(0,r.Z)({ref:t,as:n,className:(0,l.Z)(u.root,i),ownerState:c},d))});var h=f},3184:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7462),o=a(3366),i=a(7294),l=a(512),n=a(4780),s=a(4063),d=a(1657),c=a(948),u=a(1588),p=a(4867);function getTableHeadUtilityClass(e){return(0,p.Z)("MuiTableHead",e)}(0,u.Z)("MuiTableHead",["root"]);var v=a(5893);let g=["className","component"],useUtilityClasses=e=>{let{classes:t}=e;return(0,n.Z)({root:["root"]},getTableHeadUtilityClass,t)},f=(0,c.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),h={variant:"head"},Z="thead",y=i.forwardRef(function(e,t){let a=(0,d.Z)({props:e,name:"MuiTableHead"}),{className:i,component:n=Z}=a,c=(0,o.Z)(a,g),u=(0,r.Z)({},a,{component:n}),p=useUtilityClasses(u);return(0,v.jsx)(s.Z.Provider,{value:h,children:(0,v.jsx)(f,(0,r.Z)({as:n,className:(0,l.Z)(p.root,i),ref:t,role:n===Z?null:"rowgroup",ownerState:u},c))})});var m=y},3816:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7462),o=a(3366),i=a(7294),l=a(512),n=a(4780),s=a(1796),d=a(4063),c=a(1657),u=a(948),p=a(1588),v=a(4867);function getTableRowUtilityClass(e){return(0,v.Z)("MuiTableRow",e)}let g=(0,p.Z)("MuiTableRow",["root","selected","hover","head","footer"]);var f=a(5893);let h=["className","component","hover","selected"],useUtilityClasses=e=>{let{classes:t,selected:a,hover:r,head:o,footer:i}=e;return(0,n.Z)({root:["root",a&&"selected",r&&"hover",o&&"head",i&&"footer"]},getTableRowUtilityClass,t)},Z=(0,u.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.head&&t.head,a.footer&&t.footer]}})(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${g.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${g.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,s.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}})),y=i.forwardRef(function(e,t){let a=(0,c.Z)({props:e,name:"MuiTableRow"}),{className:n,component:s="tr",hover:u=!1,selected:p=!1}=a,v=(0,o.Z)(a,h),g=i.useContext(d.Z),y=(0,r.Z)({},a,{component:s,hover:u,selected:p,head:g&&"head"===g.variant,footer:g&&"footer"===g.variant}),m=useUtilityClasses(y);return(0,f.jsx)(Z,(0,r.Z)({as:s,ref:t,className:(0,l.Z)(m.root,n),role:"tr"===s?null:"row",ownerState:y},v))});var m=y}}]);