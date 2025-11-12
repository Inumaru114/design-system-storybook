import{j as r}from"./jsx-runtime-u17CrQMm.js";import"./iframe-_N5upG-6.js";import{l as a,d as s}from"./styled-components.browser.esm-DuEMh9uo.js";import"./preload-helper-PPVm8Dsz.js";const d=s.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 12px 0;
  ${({sender:e})=>e==="user"?a`
          flex-direction: row-reverse;
          justify-content: flex-start;
        `:a`
          flex-direction: row;
        `}
`,c=s.div`
  min-width: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #758664;
  border: 3px solid #9aab89;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,p=s.div`
  width: 28px;
  height: 20px;
  background-color: #132a31;
  border-radius: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &::before,
  &::after {
    content: "";
    width: 4px;
    height: 4px;
    background-color: #9aab89;
    border-radius: 50%;
  }

  &::after {
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 3px;
    border-radius: 2px;
    background-color: #ffa500;
  }
`,l=s.div`
  max-width: 70%;
  padding: 14px 18px;
  border-radius: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 1.5;

  ${({sender:e})=>e==="user"?a`
          background-color: #eaf8de;
          color: #132a31;
        `:a`
          background-color: #9aab89;
          color: #fefefe;
        `}
`,i=({sender:e="bot",children:n})=>r.jsxs(d,{sender:e,children:[e==="bot"&&r.jsx(c,{children:r.jsx(p,{})}),r.jsx(l,{sender:e,children:n})]});i.__docgenInfo={description:"",methods:[],displayName:"ChatMessage",props:{sender:{required:!1,tsType:{name:"union",raw:'"user" | "bot"',elements:[{name:"literal",value:'"user"'},{name:"literal",value:'"bot"'}]},description:"",defaultValue:{value:'"bot"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const g={title:"Componentes/ChatMessage",component:i},t={render:()=>r.jsx(i,{sender:"bot",children:"Olá! Posso te ajudar?"})},o={render:()=>r.jsx(i,{sender:"user",children:"Sim, por favor!"})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <ChatMessage sender="bot">Olá! Posso te ajudar?</ChatMessage>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ChatMessage sender="user">Sim, por favor!</ChatMessage>
}`,...o.parameters?.docs?.source}}};const h=["Bot","Usuario"];export{t as Bot,o as Usuario,h as __namedExportsOrder,g as default};
