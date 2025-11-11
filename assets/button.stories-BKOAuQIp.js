import{j as m}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-gs5flB3S.js";import"./preload-helper-PPVm8Dsz.js";function f(e){var o,a,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(o=0;o<r;o++)e[o]&&(a=f(e[o]))&&(t&&(t+=" "),t+=a)}else for(a in e)e[a]&&(t&&(t+=" "),t+=a);return t}function p(){for(var e,o,a=0,t="",r=arguments.length;a<r;a++)(e=arguments[a])&&(o=f(e))&&(t&&(t+=" "),t+=o);return t}const T="_button_1s4yr_3",O="_large_1s4yr_25",h="_small_1s4yr_41",S="_toggle_1s4yr_69",x="_toggleOn_1s4yr_91",q="_toggleOff_1s4yr_99",C="_thumb_1s4yr_107",s={button:T,large:O,small:h,toggle:S,toggleOn:x,toggleOff:q,thumb:C},y=({type:e="large",label:o,toggled:a=!1,onToggle:t,disabled:r=!1,onClick:_})=>{const[c,b]=v.useState(a),d=()=>{if(!r)if(e==="toggle"){const u=!c;b(u),t?.(u)}else _?.()};return e==="toggle"?m.jsx("button",{className:p(s.toggle,c?s.toggleOn:s.toggleOff,r&&s.disabled),onClick:d,role:"switch","aria-checked":c,disabled:r,children:m.jsx("span",{className:s.thumb})}):m.jsx("button",{className:p(s.button,s[e],r&&s.disabled),onClick:d,disabled:r,children:o})};y.__docgenInfo={description:`Botão unificado do design system:\r
- large: ação principal, mais arredondado\r
- small: confirmações / enviar\r
- toggle: controle de dois estados (ativado/desativado)`,methods:[],displayName:"Button",props:{type:{required:!1,tsType:{name:"union",raw:'"large" | "small" | "toggle"',elements:[{name:"literal",value:'"large"'},{name:"literal",value:'"small"'},{name:"literal",value:'"toggle"'}]},description:"",defaultValue:{value:'"large"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},toggled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(state: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"state"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const B={title:"Components/Button",component:y,parameters:{docs:{description:{component:`
Botão principal do Design System, que inclui:
- **Large:** ações principais, mais arredondado;
- **Small:** confirmações e envios;
- **Toggle:** controle de dois estados (ativado/desativado) estilo iOS.
        `}}},argTypes:{type:{control:"select",options:["large","small","toggle"],description:"Define o tipo de botão ou controle."}}},n={args:{label:"Confirmar",type:"large"}},l={args:{label:"Enviar",type:"small"}},g={args:{type:"toggle",toggled:!1}},i={args:{type:"toggle",toggled:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Confirmar",
    type: "large"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Enviar",
    type: "small"
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    type: "toggle",
    toggled: false
  }
}`,...g.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: "toggle",
    toggled: true
  }
}`,...i.parameters?.docs?.source}}};const E=["Large","Small","ToggleOff","ToggleOn"];export{n as Large,l as Small,g as ToggleOff,i as ToggleOn,E as __namedExportsOrder,B as default};
