import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-_N5upG-6.js";import{d as s}from"./styled-components.browser.esm-DuEMh9uo.js";import"./preload-helper-PPVm8Dsz.js";const p=s.div`
  position: relative;
  width: 100%;
`,c=s.input`
  width: 100%;
  padding: 16px 20px;
  padding-right: ${({$withMicrophone:o})=>o?"60px":"20px"};
  border-radius: 50px;
  border: 1px solid #758664;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #132a31;
  background-color: #eaf8de;
  transition: all 0.2s ease;

  &::placeholder {
    color: #758664;
  }

  &:focus {
    outline: none;
    border-color: #9aab89;
    box-shadow: 0 0 0 2px rgba(154, 171, 137, 0.3);
  }
`,d=s.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`,l=()=>e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12V6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V12C9 13.6569 10.3431 15 12 15Z",stroke:"#132A31",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M19 10V12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12V10",stroke:"#132A31",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12 19V23",stroke:"#132A31",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),n=({withMicrophone:o=!1,onMicrophoneClick:i,...a})=>e.jsxs(p,{children:[e.jsx(c,{$withMicrophone:o,...a}),o&&e.jsx(d,{onClick:i,type:"button",children:e.jsx(l,{})})]});n.__docgenInfo={description:"",methods:[],displayName:"Input",props:{withMicrophone:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onMicrophoneClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const g={title:"Componentes/Input",component:n},r={render:()=>e.jsx(n,{placeholder:"Digite aqui..."})},t={render:()=>e.jsx(n,{placeholder:"Digite uma mensagem",withMicrophone:!0,onMicrophoneClick:()=>alert("Microfone clicado!")})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Input placeholder="Digite aqui..." />
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Input placeholder="Digite uma mensagem" withMicrophone onMicrophoneClick={() => alert("Microfone clicado!")} />
}`,...t.parameters?.docs?.source}}};const f=["Padrao","ComMicrofone"];export{t as ComMicrofone,r as Padrao,f as __namedExportsOrder,g as default};
