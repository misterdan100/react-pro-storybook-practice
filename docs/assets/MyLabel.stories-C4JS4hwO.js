import{j as v}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";function f({label:o,size:g="normal",allCaps:x=!1,color:z="text-primary",backColor:L="#FFF"}){return v.jsx("span",{className:`${g} ${z} label`,style:{backgroundColor:L},children:x?o.toUpperCase():o})}f.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Label size",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Text color",defaultValue:{value:"'text-primary'",computed:!1}},backColor:{required:!1,tsType:{name:"string"},description:"Background color",defaultValue:{value:"'#FFF'",computed:!1}}}};const S={title:"UI/labels/My Label",tags:["autodocs"],component:f,parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},allCaps:{control:"boolean"},backColor:{control:"color"}}},e={args:{label:"Basic Label",allCaps:!1,size:"normal",color:"text-primary",backColor:"#fff"}},a={args:{label:"All Caps Label",size:"normal",allCaps:!0}},r={args:{label:"Secondary Label",size:"normal",color:"text-secondary"}},l={args:{label:"Custom Color Label",size:"normal",backColor:"#899098"}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label',
    allCaps: false,
    size: 'normal',
    color: 'text-primary',
    backColor: '#fff'
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'All Caps Label',
    size: 'normal',
    allCaps: true
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,u,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    size: 'normal',
    color: "text-secondary"
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var b,y,C;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    size: 'normal',
    backColor: '#899098'
  }
}`,...(C=(y=l.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const T=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,T as __namedExportsOrder,S as default};
