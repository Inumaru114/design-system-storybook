import{j as o}from"./jsx-runtime-u17CrQMm.js";import{l as a,d as n}from"./styled-components.browser.esm-qGPNUyUJ.js";import"./iframe-gs5flB3S.js";import"./preload-helper-PPVm8Dsz.js";const s=n.div`
  max-width: 70%;
  padding: 10px 14px;
  border-radius: 16px;
  margin: 6px 0;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  line-height: 1.4;

  ${({sender:t})=>t==="user"?a`
          background-color: #eaf8de;
          color: #132a31;
          align-self: flex-end;
        `:a`
          background-color: #9aab89;
          color: #fefefe;
          align-self: flex-start;
        `}
`,m={title:"Componentes/ChatMessage",component:s},e={render:()=>o.jsx(s,{sender:"bot",children:"Olá! Posso te ajudar?"})},r={render:()=>o.jsx(s,{sender:"user",children:"Sim, por favor!"})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <ChatMessage sender="bot">Olá! Posso te ajudar?</ChatMessage>
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <ChatMessage sender="user">Sim, por favor!</ChatMessage>
}`,...r.parameters?.docs?.source}}};const l=["Bot","Usuario"];export{e as Bot,r as Usuario,l as __namedExportsOrder,m as default};
