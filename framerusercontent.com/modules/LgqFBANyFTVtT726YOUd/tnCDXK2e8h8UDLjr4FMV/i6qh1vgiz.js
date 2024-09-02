// Generated by Framer (315fd46)
import{jsx as _jsx,jsxs as _jsxs,Fragment as _Fragment}from"react/jsx-runtime";import{addFonts,ChildrenCanSuspend,ComponentViewportProvider,Container,cx,GeneratedComponentContext,getFonts,getFontsFromSharedStyle,getWhereExpressionFromPathVariables,NotFoundError,PathVariablesContext,PropertyOverrides,ResolveLinks,RichText,useCurrentPathVariables,useCustomCursors,useHydratedBreakpointVariants,useLocaleInfo,useQueryData,useRouter,withCSS,withFX,withOptimizedAppearEffect}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";import ConnectArrow from"#framer/local/canvasComponent/BmRFs_6AJ/BmRFs_6AJ.js";import ProjectCard from"#framer/local/canvasComponent/Qe0tSloKL/Qe0tSloKL.js";import Footer from"#framer/local/canvasComponent/UHdRXV4dR/UHdRXV4dR.js";import NavMenu from"#framer/local/canvasComponent/WxNZXah7I/WxNZXah7I.js";import Illustrations from"#framer/local/collection/Oi6YAKbAE/Oi6YAKbAE.js";import*as sharedStyle from"#framer/local/css/MuLsaBAMB/MuLsaBAMB.js";import metadataProvider from"#framer/local/webPageMetadata/i6qh1vgiz/i6qh1vgiz.js";const NavMenuFonts=getFonts(NavMenu);const ContainerWithFX=withFX(Container);const MotionSectionWithOptimizedAppearEffect=withOptimizedAppearEffect(motion.section);const ProjectCardFonts=getFonts(ProjectCard);const ConnectArrowFonts=getFonts(ConnectArrow);const MotionSectionWithFX=withFX(motion.section);const FooterFonts=getFonts(Footer);const cycleOrder=["KLuI22_rw","Q70PuC_Lw","idRUPl7rr"];const breakpoints={idRUPl7rr:"(max-width: 809px)",KLuI22_rw:"(min-width: 1200px)",Q70PuC_Lw:"(min-width: 810px) and (max-width: 1199px)"};const isBrowser=()=>typeof document!=="undefined";const serializationHash="framer-pXT6e";const variantClassNames={idRUPl7rr:"framer-v-12t3om7",KLuI22_rw:"framer-v-1t751wq",Q70PuC_Lw:"framer-v-71fqx3"};const transition1={damping:30,delay:0,mass:1,stiffness:400,type:"spring"};const animation={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transformPerspective:1200,x:0,y:-98};const transition2={damping:40,delay:0,mass:1,stiffness:400,type:"spring"};const animation1={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transformPerspective:1200,transition:transition2,x:0,y:0};const animation2={opacity:.001,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transformPerspective:1200,x:0,y:48};const transition3={damping:40,delay:.1,mass:1,stiffness:400,type:"spring"};const animation3={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transformPerspective:1200,transition:transition3,x:0,y:0};const toResponsiveImage=value=>{if(typeof value==="object"&&value!==null&&typeof value.src==="string"){return value;}return typeof value==="string"?{src:value}:undefined;};const QueryData=({query,pageSize,children})=>{const data=useQueryData(query);return children(data);};const animation4={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transformPerspective:1200,x:0,y:48};const metadata=metadataProvider();const humanReadableVariantMap={Desktop:"KLuI22_rw",Phone:"idRUPl7rr",Tablet:"Q70PuC_Lw"};const getProps=({height,id,width,...props})=>{var _humanReadableVariantMap_props_variant,_ref;return{...props,variant:(_ref=(_humanReadableVariantMap_props_variant=humanReadableVariantMap[props.variant])!==null&&_humanReadableVariantMap_props_variant!==void 0?_humanReadableVariantMap_props_variant:props.variant)!==null&&_ref!==void 0?_ref:"KLuI22_rw"};};const Component=/*#__PURE__*/React.forwardRef(function(props,ref){const{activeLocale,setLocale}=useLocaleInfo();const currentPathVariables=useCurrentPathVariables();const[currentRouteData]=useQueryData({from:{alias:"default",data:Illustrations,type:"Collection"},select:[{collection:"default",name:"lEUYDjWat",type:"Identifier"}],where:getWhereExpressionFromPathVariables(currentPathVariables)});const getFromCurrentRouteData=key=>{if(!currentRouteData)throw new NotFoundError(`No data matches path variables: ${JSON.stringify(currentPathVariables)}`);return currentRouteData[key];};const{style,className,layoutId,variant,lEUYDjWat=getFromCurrentRouteData("lEUYDjWat"),qa_Xdcbd2GGuPZEDMt,QHSFfhXjIGGuPZEDMt,lEUYDjWatGGuPZEDMt,idGGuPZEDMt,mxeqiiq5e,...restProps}=getProps(props);React.useEffect(()=>{const metadata1=metadataProvider(currentRouteData,activeLocale);if(metadata1.robots){let robotsTag=document.querySelector('meta[name="robots"]');if(robotsTag){robotsTag.setAttribute("content",metadata1.robots);}else{robotsTag=document.createElement("meta");robotsTag.setAttribute("name","robots");robotsTag.setAttribute("content",metadata1.robots);document.head.appendChild(robotsTag);}}},[currentRouteData,activeLocale]);React.useInsertionEffect(()=>{const metadata1=metadataProvider(currentRouteData,activeLocale);document.title=metadata1.title||"";if(metadata1.viewport){var _document_querySelector;(_document_querySelector=document.querySelector('meta[name="viewport"]'))===null||_document_querySelector===void 0?void 0:_document_querySelector.setAttribute("content",metadata1.viewport);}const bodyCls=metadata1.bodyClassName;if(bodyCls){const body=document.body;body.classList.forEach(c=>c.startsWith("framer-body-")&&body.classList.remove(c));body.classList.add(`${metadata1.bodyClassName}-framer-pXT6e`);}return()=>{if(bodyCls)document.body.classList.remove(`${metadata1.bodyClassName}-framer-pXT6e`);};},[currentRouteData,activeLocale]);const[baseVariant,hydratedBaseVariant]=useHydratedBreakpointVariants(variant,breakpoints,false);const gestureVariant=undefined;const ref1=React.useRef(null);const isDisplayed=()=>{if(!isBrowser())return true;if(baseVariant==="idRUPl7rr")return true;return false;};const isDisplayed1=()=>{if(!isBrowser())return true;if(baseVariant==="idRUPl7rr")return false;return true;};const router=useRouter();const defaultLayoutId=React.useId();const sharedStyleClassNames=[sharedStyle.className];useCustomCursors({});return /*#__PURE__*/_jsx(GeneratedComponentContext.Provider,{value:{primaryVariantId:"KLuI22_rw",variantClassNames},children:/*#__PURE__*/_jsxs(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:[/*#__PURE__*/_jsxs(motion.div,{...restProps,className:cx(serializationHash,...sharedStyleClassNames,"framer-1t751wq",className),ref:ref!==null&&ref!==void 0?ref:ref1,style:{...style},children:[isDisplayed()&&/*#__PURE__*/_jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{idRUPl7rr:{width:"100vw"}},children:/*#__PURE__*/_jsx(ComponentViewportProvider,{children:/*#__PURE__*/_jsx(ContainerWithFX,{__framer__animate:{transition:transition1},__framer__animateOnce:false,__framer__scrollDirection:{direction:"down",target:animation},__framer__styleAppearEffectEnabled:true,__framer__threshold:.5,__perspectiveFX:false,__targetOpacity:1,className:"framer-k7yrnk-container hidden-1t751wq hidden-71fqx3",layoutScroll:true,style:{transformPerspective:1200},children:/*#__PURE__*/_jsx(NavMenu,{height:"100%",id:"zRcMeFDdI",layoutId:"zRcMeFDdI",style:{width:"100%"},variant:"wqwPKQQgS",width:"100%"})})})}),/*#__PURE__*/_jsxs("div",{className:"framer-j087bz",children:[isDisplayed1()&&/*#__PURE__*/_jsx(ComponentViewportProvider,{children:/*#__PURE__*/_jsx(Container,{className:"framer-30646y-container hidden-12t3om7",children:/*#__PURE__*/_jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{Q70PuC_Lw:{variant:"JfBUOoYkl"}},children:/*#__PURE__*/_jsx(NavMenu,{height:"100%",id:"ByVYUqUrl",layoutId:"ByVYUqUrl",style:{height:"100%"},variant:"nye2_8MNT",width:"100%"})})})}),/*#__PURE__*/_jsxs("main",{className:"framer-1vce38f",children:[/*#__PURE__*/_jsx(MotionSectionWithOptimizedAppearEffect,{animate:animation1,className:"framer-setxsc","data-framer-appear-id":"setxsc","data-framer-name":"Hero Section",initial:animation2,name:"Hero Section",optimized:true,style:{transformPerspective:1200},children:/*#__PURE__*/_jsx("div",{className:"framer-130abbd","data-framer-name":"Heading + Paragraph",name:"Heading + Paragraph",children:/*#__PURE__*/_jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/_jsx(React.Fragment,{children:/*#__PURE__*/_jsx("h1",{className:"framer-styles-preset-16drd9p","data-styles-preset":"MuLsaBAMB",children:"My Illustrations"})}),className:"framer-wduerx",fonts:["Inter"],text:lEUYDjWat,verticalAlignment:"top",withExternalLayout:true})})}),/*#__PURE__*/_jsx(MotionSectionWithOptimizedAppearEffect,{animate:animation3,className:"framer-zy5ad1","data-framer-appear-id":"zy5ad1","data-framer-name":"Projects Section",initial:animation2,name:"Projects Section",optimized:true,style:{transformPerspective:1200},children:/*#__PURE__*/_jsx("div",{className:"framer-o3z35p",children:/*#__PURE__*/_jsx(ChildrenCanSuspend,{children:/*#__PURE__*/_jsx(QueryData,{query:{from:{alias:"default",data:Illustrations,type:"Collection"},select:[{collection:"default",name:"qa_Xdcbd2",type:"Identifier"},{collection:"default",name:"QHSFfhXjI",type:"Identifier"},{collection:"default",name:"lEUYDjWat",type:"Identifier"},{collection:"default",name:"id",type:"Identifier"}]},children:(collection,paginationInfo,loadMore)=>/*#__PURE__*/_jsx(_Fragment,{children:collection.map(({"qa_Xdcbd2":qa_Xdcbd2GGuPZEDMt,"QHSFfhXjI":QHSFfhXjIGGuPZEDMt,"lEUYDjWat":lEUYDjWatGGuPZEDMt,"id":idGGuPZEDMt},i)=>{return /*#__PURE__*/_jsx(LayoutGroup,{id:`GGuPZEDMt-${idGGuPZEDMt}`,children:/*#__PURE__*/_jsx(PathVariablesContext.Provider,{value:{qa_Xdcbd2:qa_Xdcbd2GGuPZEDMt},children:/*#__PURE__*/_jsx(ResolveLinks,{links:[{href:{pathVariables:{qa_Xdcbd2:qa_Xdcbd2GGuPZEDMt},webPageId:"NU0RVWbvY"},implicitPathVariables:{qa_Xdcbd2:qa_Xdcbd2GGuPZEDMt}},{href:{pathVariables:{qa_Xdcbd2:qa_Xdcbd2GGuPZEDMt},webPageId:"NU0RVWbvY"},implicitPathVariables:{qa_Xdcbd2:qa_Xdcbd2GGuPZEDMt}},{href:{pathVariables:{qa_Xdcbd2:qa_Xdcbd2GGuPZEDMt},webPageId:"NU0RVWbvY"},implicitPathVariables:{qa_Xdcbd2:qa_Xdcbd2GGuPZEDMt}}],children:resolvedLinks=>/*#__PURE__*/_jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{idRUPl7rr:{width:"max(100vw - 48px, 200px)"}},children:/*#__PURE__*/_jsx(ComponentViewportProvider,{children:/*#__PURE__*/_jsx(Container,{className:"framer-1qjdc0h-container",children:/*#__PURE__*/_jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{idRUPl7rr:{owCq6DoYe:resolvedLinks[2]},Q70PuC_Lw:{owCq6DoYe:resolvedLinks[1]}},children:/*#__PURE__*/_jsx(ProjectCard,{height:"100%",id:"EHi6zQUPv",jh_6BKouk:lEUYDjWatGGuPZEDMt,layoutId:"EHi6zQUPv",mSK690HmA:lEUYDjWatGGuPZEDMt,owCq6DoYe:resolvedLinks[0],style:{width:"100%"},tLmwnvzWn:toResponsiveImage(QHSFfhXjIGGuPZEDMt),width:"100%"})})})})})})})},idGGuPZEDMt);})})})})})}),/*#__PURE__*/_jsxs(MotionSectionWithFX,{__framer__animate:{transition:transition2},__framer__animateOnce:true,__framer__enter:animation4,__framer__styleAppearEffectEnabled:true,__framer__threshold:0,__perspectiveFX:false,__targetOpacity:1,className:"framer-1l1r96l",style:{transformPerspective:1200},children:[/*#__PURE__*/_jsx(ResolveLinks,{links:[{href:{webPageId:"augiA20Il"},implicitPathVariables:undefined},{href:{webPageId:"augiA20Il"},implicitPathVariables:undefined},{href:{webPageId:"augiA20Il"},implicitPathVariables:undefined}],children:resolvedLinks1=>/*#__PURE__*/_jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{idRUPl7rr:{width:"calc(100vw - 48px)"}},children:/*#__PURE__*/_jsx(ComponentViewportProvider,{children:/*#__PURE__*/_jsx(Container,{className:"framer-1cha3za-container",children:/*#__PURE__*/_jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{idRUPl7rr:{rHRoUJm0Z:resolvedLinks1[2],variant:"dUx0MOGwy"},Q70PuC_Lw:{rHRoUJm0Z:resolvedLinks1[1]}},children:/*#__PURE__*/_jsx(ConnectArrow,{height:"100%",id:"nCmgA4RtD",layoutId:"nCmgA4RtD",rHRoUJm0Z:resolvedLinks1[0],style:{height:"100%",width:"100%"},variant:"AyD5qj9YP",width:"100%"})})})})})}),/*#__PURE__*/_jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{idRUPl7rr:{children:/*#__PURE__*/_jsx(React.Fragment,{children:/*#__PURE__*/_jsx("p",{style:{"--font-selector":"SW50ZXItTWVkaXVt","--framer-font-family":'"Inter-Medium", "Inter", sans-serif',"--framer-font-size":"32px","--framer-font-weight":"500","--framer-line-height":"1em","--framer-text-alignment":"center","--framer-text-color":"var(--token-bbb54a95-9e73-4c8c-ac1e-b3ba6454c678, rgb(230, 230, 230))"},children:"Let's Connect!"})}),viewBox:"0 0 221 32"},Q70PuC_Lw:{children:/*#__PURE__*/_jsx(React.Fragment,{children:/*#__PURE__*/_jsx("p",{style:{"--font-selector":"SW50ZXItTWVkaXVt","--framer-font-family":'"Inter-Medium", "Inter", sans-serif',"--framer-font-size":"64px","--framer-font-weight":"500","--framer-line-height":"1em","--framer-text-alignment":"center","--framer-text-color":"var(--token-bbb54a95-9e73-4c8c-ac1e-b3ba6454c678, rgb(230, 230, 230))"},children:"Let's Connect!"})}),viewBox:"0 0 441 64"}},children:/*#__PURE__*/_jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/_jsx(React.Fragment,{children:/*#__PURE__*/_jsx("p",{style:{"--font-selector":"SW50ZXItTWVkaXVt","--framer-font-family":'"Inter-Medium", "Inter", sans-serif',"--framer-font-size":"96px","--framer-font-weight":"500","--framer-line-height":"1em","--framer-text-alignment":"center","--framer-text-color":"var(--token-bbb54a95-9e73-4c8c-ac1e-b3ba6454c678, rgb(230, 230, 230))"},children:"Let's Connect!"})}),className:"framer-l7d6na",fonts:["Inter-Medium"],text:mxeqiiq5e,verticalAlignment:"top",viewBox:"0 0 662 96",withExternalLayout:true})})]}),/*#__PURE__*/_jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{idRUPl7rr:{width:"calc(100vw - 48px)"}},children:/*#__PURE__*/_jsx(ComponentViewportProvider,{children:/*#__PURE__*/_jsx(Container,{className:"framer-wj3vhk-container",children:/*#__PURE__*/_jsx(PropertyOverrides,{breakpoint:baseVariant,overrides:{idRUPl7rr:{variant:"bOx5yO0eg"}},children:/*#__PURE__*/_jsx(Footer,{height:"100%",id:"ZdhbwLc9T",layoutId:"ZdhbwLc9T",style:{width:"100%"},variant:"yIEDUpDys",width:"100%"})})})})})]})]})]}),/*#__PURE__*/_jsx("div",{className:cx(serializationHash,...sharedStyleClassNames),id:"overlay"})]})});});const css=["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",`.${metadata.bodyClassName}-framer-pXT6e { background: var(--token-e9918eff-958a-498e-b150-7017d5cc3030, rgb(26, 26, 26)); }`,".framer-pXT6e.framer-1wemxbu, .framer-pXT6e .framer-1wemxbu { display: block; }",".framer-pXT6e.framer-1t751wq { align-content: center; align-items: center; background-color: var(--token-e9918eff-958a-498e-b150-7017d5cc3030, #1a1a1a); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }",".framer-pXT6e .framer-k7yrnk-container { flex: none; height: auto; left: 0px; position: fixed; right: 0px; top: 0px; z-index: 6; }",".framer-pXT6e .framer-j087bz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",".framer-pXT6e .framer-30646y-container { flex: none; height: 100vh; position: sticky; top: 0px; width: auto; will-change: transform; z-index: 1; }",".framer-pXT6e .framer-1vce38f { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 48px 48px 0px 48px; position: relative; width: 1px; }",".framer-pXT6e .framer-setxsc, .framer-pXT6e .framer-zy5ad1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 48px 0px 48px 0px; position: relative; width: 100%; }",".framer-pXT6e .framer-130abbd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",".framer-pXT6e .framer-wduerx { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }",".framer-pXT6e .framer-o3z35p { display: grid; flex: none; gap: 24px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(200px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }",".framer-pXT6e .framer-1qjdc0h-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }",".framer-pXT6e .framer-1l1r96l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 48px 0px 48px 0px; position: relative; width: 100%; }",".framer-pXT6e .framer-1cha3za-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }",".framer-pXT6e .framer-l7d6na { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre; width: 1px; }",".framer-pXT6e .framer-wj3vhk-container { flex: none; height: auto; position: relative; width: 100%; }","@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-pXT6e.framer-1t751wq, .framer-pXT6e .framer-j087bz, .framer-pXT6e .framer-1vce38f, .framer-pXT6e .framer-setxsc, .framer-pXT6e .framer-130abbd, .framer-pXT6e .framer-zy5ad1, .framer-pXT6e .framer-1l1r96l { gap: 0px; } .framer-pXT6e.framer-1t751wq > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-pXT6e.framer-1t751wq > :first-child, .framer-pXT6e .framer-1vce38f > :first-child, .framer-pXT6e .framer-setxsc > :first-child, .framer-pXT6e .framer-130abbd > :first-child, .framer-pXT6e .framer-zy5ad1 > :first-child { margin-top: 0px; } .framer-pXT6e.framer-1t751wq > :last-child, .framer-pXT6e .framer-1vce38f > :last-child, .framer-pXT6e .framer-setxsc > :last-child, .framer-pXT6e .framer-130abbd > :last-child, .framer-pXT6e .framer-zy5ad1 > :last-child { margin-bottom: 0px; } .framer-pXT6e .framer-j087bz > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-pXT6e .framer-j087bz > :first-child, .framer-pXT6e .framer-1l1r96l > :first-child { margin-left: 0px; } .framer-pXT6e .framer-j087bz > :last-child, .framer-pXT6e .framer-1l1r96l > :last-child { margin-right: 0px; } .framer-pXT6e .framer-1vce38f > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-pXT6e .framer-setxsc > *, .framer-pXT6e .framer-zy5ad1 > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-pXT6e .framer-130abbd > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-pXT6e .framer-1l1r96l > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }","@media (min-width: 1200px) { .framer-pXT6e .hidden-1t751wq { display: none !important; } }",`@media (min-width: 810px) and (max-width: 1199px) { .framer-pXT6e .hidden-71fqx3 { display: none !important; } .${metadata.bodyClassName}-framer-pXT6e { background: var(--token-e9918eff-958a-498e-b150-7017d5cc3030, rgb(26, 26, 26)); } .framer-pXT6e.framer-1t751wq { width: 810px; } .framer-pXT6e .framer-1vce38f { padding: 24px 24px 0px 24px; } .framer-pXT6e .framer-zy5ad1 { padding: 24px 0px 48px 0px; } .framer-pXT6e .framer-o3z35p { grid-template-columns: repeat(1, minmax(200px, 1fr)); }}`,`@media (max-width: 809px) { .framer-pXT6e .hidden-12t3om7 { display: none !important; } .${metadata.bodyClassName}-framer-pXT6e { background: var(--token-e9918eff-958a-498e-b150-7017d5cc3030, rgb(26, 26, 26)); } .framer-pXT6e.framer-1t751wq { width: 390px; } .framer-pXT6e .framer-j087bz { flex-direction: column; } .framer-pXT6e .framer-1vce38f { flex: none; padding: 96px 24px 0px 24px; width: 100%; } .framer-pXT6e .framer-zy5ad1 { padding: 24px 0px 48px 0px; } .framer-pXT6e .framer-o3z35p { grid-template-columns: repeat(1, minmax(200px, 1fr)); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-pXT6e .framer-j087bz { gap: 0px; } .framer-pXT6e .framer-j087bz > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-pXT6e .framer-j087bz > :first-child { margin-top: 0px; } .framer-pXT6e .framer-j087bz > :last-child { margin-bottom: 0px; } }}`,...sharedStyle.css];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 1148
 * @framerIntrinsicWidth 1200
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Q70PuC_Lw":{"layout":["fixed","auto"]},"idRUPl7rr":{"layout":["fixed","auto"]}}}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 * @framerComponentViewportWidth true
 * @framerResponsiveScreen
 */const Frameri6qh1vgiz=withCSS(Component,css,"framer-pXT6e");export default Frameri6qh1vgiz;Frameri6qh1vgiz.displayName="Projects";Frameri6qh1vgiz.defaultProps={height:1148,width:1200};addFonts(Frameri6qh1vgiz,[{explicitInter:true,fonts:[{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",url:"https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",weight:"400"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",url:"https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",weight:"400"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+1F00-1FFF",url:"https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",weight:"400"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0370-03FF",url:"https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",weight:"400"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",url:"https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",weight:"400"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",url:"https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",weight:"400"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",url:"https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",weight:"400"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",url:"https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",url:"https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+1F00-1FFF",url:"https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0370-03FF",url:"https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",url:"https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",url:"https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2",weight:"500"},{family:"Inter",source:"framer",style:"normal",unicodeRange:"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",url:"https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2",weight:"500"}]},...NavMenuFonts,...ProjectCardFonts,...ConnectArrowFonts,...FooterFonts,...getFontsFromSharedStyle(sharedStyle.fonts)],{supportsExplicitInterCodegen:true});
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"Frameri6qh1vgiz","slots":[],"annotations":{"framerContractVersion":"1","framerImmutableVariables":"true","framerComponentViewportWidth":"true","framerDisplayContentsDiv":"false","framerIntrinsicHeight":"1148","framerResponsiveScreen":"","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"auto\"]},\"Q70PuC_Lw\":{\"layout\":[\"fixed\",\"auto\"]},\"idRUPl7rr\":{\"layout\":[\"fixed\",\"auto\"]}}}","framerIntrinsicWidth":"1200"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}