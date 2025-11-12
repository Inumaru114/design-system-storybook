import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-_N5upG-6.js";import"./preload-helper-PPVm8Dsz.js";function b(e){var o,s,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var t=e.length;for(o=0;o<t;o++)e[o]&&(s=b(e[o]))&&(a&&(a+=" "),a+=s)}else for(s in e)e[s]&&(a&&(a+=" "),a+=s);return a}function p(){for(var e,o,s=0,a="",t=arguments.length;s<t;s++)(e=arguments[s])&&(o=b(e))&&(a&&(a+=" "),a+=o);return a}const h="_button_c7jrb_2",T="_large_c7jrb_13",x="_small_c7jrb_21",O="_toggle_c7jrb_35",S="_toggleOn_c7jrb_46",N="_toggleOff_c7jrb_50",C="_thumb_c7jrb_54",q="_menu_c7jrb_70",k="_hamburger_c7jrb_92",w="_line_c7jrb_99",B="_disabled_c7jrb_106",r={button:h,large:T,small:x,toggle:O,toggleOn:S,toggleOff:N,thumb:C,menu:q,hamburger:k,line:w,disabled:B},_=({type:e="large",label:o,toggled:s=!1,onToggle:a,disabled:t=!1,onClick:y})=>{const[u,j]=v.useState(s),d=()=>{if(!t)if(e==="toggle"){const f=!u;j(f),a?.(f)}else y?.()};return e==="toggle"?n.jsx("button",{className:p(r.toggle,u?r.toggleOn:r.toggleOff,t&&r.disabled),onClick:d,role:"switch","aria-checked":u,disabled:t,children:n.jsx("span",{className:r.thumb})}):e==="menu"?n.jsx("button",{className:p(r.menu,t&&r.disabled),onClick:d,disabled:t,"aria-label":"Menu",children:n.jsxs("span",{className:r.hamburger,children:[n.jsx("span",{className:r.line}),n.jsx("span",{className:r.line}),n.jsx("span",{className:r.line})]})}):n.jsx("button",{className:p(r.button,r[e],t&&r.disabled),onClick:d,disabled:t,children:o})};_.__docgenInfo={description:`Botão unificado do design system:
- large: ação principal, mais arredondado
- small: confirmações / enviar
- toggle: controle de dois estados (ativado/desativado)`,methods:[],displayName:"Button",props:{type:{required:!1,tsType:{name:"union",raw:'"large" | "small" | "toggle" | "menu"',elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"small"'},{name:"literal",value:'"toggle"'},{name:"literal",value:'"menu"'}]},description:"",defaultValue:{value:'"large"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},toggled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(state: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"state"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const V={title:"Components/Button",component:_,parameters:{docs:{description:{component:`
Botão principal do Design System, que inclui:
- **Large:** ações principais, mais arredondado;
- **Small:** confirmações e envios;
- **Toggle:** controle de dois estados (ativado/desativado) estilo iOS.
        `}}},argTypes:{type:{control:"select",options:["large","small","toggle","menu"],description:"Define o tipo de botão ou controle."}}},l={args:{label:"Confirmar",type:"large"}},i={args:{label:"Enviar",type:"small"}},c={args:{type:"toggle",toggled:!1}},g={args:{type:"toggle",toggled:!0}},m={args:{type:"menu"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Confirmar",
    type: "large"
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Enviar",
    type: "small"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: "toggle",
    toggled: false
  }
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: "toggle",
    toggled: true
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: "menu"
  }
}`,...m.parameters?.docs?.source}}};const A=["Large","Small","ToggleOff","ToggleOn","Menu"];export{l as Large,m as Menu,i as Small,c as ToggleOff,g as ToggleOn,A as __namedExportsOrder,V as default};
