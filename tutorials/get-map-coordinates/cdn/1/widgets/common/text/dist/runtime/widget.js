System.register(["jimu-core","jimu-ui","jimu-theme"],(function(e,t){var o={},a={},n={};return{setters:[function(e){o.AppMode=e.AppMode,o.ExpressionResolverComponent=e.ExpressionResolverComponent,o.Immutable=e.Immutable,o.MutableStoreManager=e.MutableStoreManager,o.React=e.React,o.ReactRedux=e.ReactRedux,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.expressionUtils=e.expressionUtils,o.getAppStore=e.getAppStore,o.jsx=e.jsx,o.polished=e.polished},function(e){a.RichTextDisplayer=e.RichTextDisplayer,a.SVG=e.SVG,a.Scrollable=e.Scrollable,a.hooks=e.hooks,a.richTextUtils=e.richTextUtils},function(e){n.useTheme=e.useTheme}],execute:function(){e((()=>{var e={72957:e=>{e.exports='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.854 2.153a.485.485 0 0 0-.708 0 .538.538 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.538.538 0 0 0 0-.738.485.485 0 0 0-.708 0L8 7.74 2.854 2.153Zm0 5a.485.485 0 0 0-.708 0 .538.538 0 0 0 0 .738l5.5 5.956a.485.485 0 0 0 .708 0l5.5-5.956a.538.538 0 0 0 0-.738.485.485 0 0 0-.708 0L8 12.74 2.854 7.153Z" fill="#000"></path></svg>'},48891:e=>{"use strict";e.exports=o},34796:e=>{"use strict";e.exports=n},30726:e=>{"use strict";e.exports=a}},t={};function s(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var r={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(r),s.d(r,{default:()=>m});var e=s(48891),t=s(30726),o=s(72957),a=s.n(o);const n=o=>{const{className:n}=o,s=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o}(o,["className"]),r=(0,e.classNames)("jimu-icon jimu-icon-component",n);return e.React.createElement(t.SVG,Object.assign({className:r,src:a()},s))};var l=s(34796);const{useState:i,useEffect:u,useRef:c}=e.React;function d(o){var a;const{value:s="",placeholder:r,repeatedDataSource:d,useDataSources:p,widgetId:f,wrap:g,tooltip:m}=o,v=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o}(o,["value","placeholder","repeatedDataSource","useDataSources","widgetId","wrap","tooltip"]),x=e.React.useMemo((()=>s.replace(/\ufeff/g,"")),[s]),h=(0,l.useTheme)(),b=c(),S=e.expressionUtils.isSingleStringExpression(m),[w,y]=i(""),[R,j]=e.React.useState("24px"),[M,E]=e.React.useState(!1),[O,D]=e.React.useState(!1),[I,N]=e.React.useState(0),[P,k]=e.React.useState(!1),T=((t,o,a)=>{var n,s,r,l,i;const u=null===(n=null==a?void 0:a.colors)||void 0===n?void 0:n.white,c=null!==(i=null===(l=null===(r=null===(s=null==a?void 0:a.colors)||void 0===s?void 0:s.palette)||void 0===r?void 0:r.light)||void 0===l?void 0:l[500])&&void 0!==i?i:"#444";return e.React.useMemo((()=>{const a=e.css`
      .rich-displayer {
        white-space: nowrap !important;
      }
   `;return e.css`
      width: 100%;
      height: 100%;
      position: relative;
      overflow-y: hidden;
      .rich-displayer {
        width: 100%;
        height: fit-content;
      }

      ${!t&&a};
      .text-fade {
        position: absolute;
        left: 0;
        height: ${o};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        pointer-events: none;
        > .arrow {
          position: absolute;
          width: 16px;
          height: 16px;
          background: ${u};
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          &.arrow-bottom {
            bottom: 4px;
          }
        }
        &.text-fade-bottom {
          bottom: 0;
          background: linear-gradient(180deg, rgba(182, 182, 182, 0) 0%, ${e.polished.rgba(c,.5)} 100%);
        }
      }

      .bounce {
        animation-name: bounce;
        animation-duration:0.6s;
        animation-iteration-count:infinite;
        animation-timing-function:linear;
      }

      @keyframes bounce {
        0% { 
          transform: translateY(0px) 
        }
        50% {
          transform: translateY(2px)
        }
        100%{
          transform: translateY(4px)
        }
      }
    `}),[u,c,o,t])})(g,R,h),A=e.React.useCallback((e=>{if(null==e)return;const{scrollable:t,bottoming:o}=e;E(o),D(t)}),[]);u((()=>{if(null!=m&&S){const t=e.expressionUtils.getSingleStringExpressionText(m);y(t)}}),[m,S]);const U=c();return(0,e.jsx)("div",Object.assign({css:T,title:w,onMouseEnter:()=>{var e,t;null!=U.current&&(clearTimeout(U.current),U.current=null);const o=(a=null!==(t=null===(e=b.current)||void 0===e?void 0:e.clientHeight)&&void 0!==t?t:0)<=80?"0px":a<=140?"24px":"15%";var a;k("0px"!==o),N((e=>e+1)),j(o)},onMouseLeave:()=>{U.current=setTimeout((()=>{k(!1),U.current=null}),500)},ref:b},v),(0,e.jsx)(t.Scrollable,{ref:A,version:I},(0,e.jsx)(t.RichTextDisplayer,{widgetId:f,repeatedDataSource:d,useDataSources:p,value:x,placeholder:r})),P&&O&&!M&&(0,e.jsx)("div",{className:"text-fade text-fade-bottom"},(0,e.jsx)("span",{className:"arrow arrow-bottom rounded-circle mr-1"},(0,e.jsx)(n,{className:"bounce",color:null===(a=null==h?void 0:h.colors)||void 0===a?void 0:a.black}))),!S&&m&&(0,e.jsx)(e.ExpressionResolverComponent,{useDataSources:p,expression:m,widgetId:f,onChange:e=>{(null==e?void 0:e.isSuccessful)&&y(e.value)}}))}const p={_widgetLabel:"Text",defaultPlaceholder:"Double click to edit text"};var f;!function(e){e[e.None=0]="None",e[e.Main=1]="Main",e[e.Sub=2]="Sub"}(f||(f={}));const g=e.css`
  /* Ensure that the cursor can be displayed when automatic width of layout */
  min-width: 12px;
`,m=o=>{var a,n,s;const{builderSupportModules:r,id:l,intl:i,useDataSources:u,repeatedDataSource:c,useDataSourcesEnabled:m,isInlineEditing:v,config:x,onInitResizeHandler:h}=o,b=e.ReactRedux.useDispatch(),{current:S}=e.React.useRef((0,e.getAppStore)().getState().appContext.isInBuilder),w=t.hooks.useWidgetSelected(l),y=t.hooks.useRefValue(w),R=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode)),j=null==r?void 0:r.jimuForBuilderLib.getAppConfigAction,M=null==r?void 0:r.widgetModules.Editor,E=null==r?void 0:r.widgetModules.builderUtils,O=null===(n=null===(a=null==x?void 0:x.style)||void 0===a?void 0:a.wrap)||void 0===n||n,D=null==x?void 0:x.text,I=null==x?void 0:x.tooltip,N=((e,t)=>(e===p.defaultPlaceholder&&(e=((e,t)=>null!==t?t.formatMessage({id:e,defaultMessage:p[e]}):"")("defaultPlaceholder",t)),e))(null==x?void 0:x.placeholder,i),P=m?u:void 0,k=null!==(s=null==P?void 0:P.length)&&void 0!==s?s:0,[T,A]=e.React.useState(f.Sub),[U,C]=e.React.useState(null);e.React.useEffect((()=>{let e;e=null==c?f.None:0===c.recordIndex?f.Main:f.Sub,A(e)}),[c]),e.React.useEffect((()=>{y.current&&R===e.AppMode.Run&&b(e.appActions.setWidgetIsInlineEditingState(l,!1))}),[y,R,b,l]),t.hooks.useUpdateEffect((()=>{S&&(v||b(e.appActions.widgetStatePropChange(l,"showExpression",!1)))}),[v,b,l]);const V=R===e.AppMode.Design&&T!==f.Sub,L=V&&w,W=V&&v,_=e.React.useRef(!1);e.React.useEffect((()=>()=>{_.current=!0}),[]),t.hooks.useUpdateEffect((()=>{let o=t.richTextUtils.getAllExpressions(D);o=null!=o?o:(0,e.Immutable)({}),o=o.merge(null!=I?{tooltip:I}:{}),C(o)}),[D,I,k]);const $=t.hooks.useEventCallback((()=>{if(_.current)return;if(!S)return;const t=E.getExpressionParts(U),o=e.expressionUtils.getUseDataSourceFromExpParts(t,P);j().editWidget({id:l,useDataSources:o}).exec()}));return t.hooks.useUpdateEffect((()=>{$()}),[U,$]),(0,e.jsx)("div",{"data-testid":"text-widget",css:g,className:(0,e.classNames)("widget-text jimu-widget p-1")},L&&(0,e.jsx)(M,{className:(0,e.classNames)({"d-none":!W}),widgetId:l,nowrap:!O,onInitResizeHandler:h,useDataSources:P,enabled:!!v,onCreate:t=>{e.MutableStoreManager.getInstance().updateStateValue(l,"editor",t)},onDestory:()=>{e.MutableStoreManager.getInstance().updateStateValue(l,"editor",null)},onComplete:(e,t)=>{_.current||S&&j().editWidget({id:l,config:x.set("text",e).set("placeholder",t)}).exec()},placeholder:N,preserveWhitespace:!0,value:D}),(0,e.jsx)(d,{className:(0,e.classNames)({"d-none":W}),value:D,tooltip:I,wrap:O,placeholder:N,useDataSources:P,widgetId:l,repeatedDataSource:c}))}})(),r})())}}}));