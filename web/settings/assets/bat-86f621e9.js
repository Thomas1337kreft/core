import{C as r}from"./HardwareInstallation-a49fa11f.js";import{_ as m,u as t,l as p,m as l,G as n,E as u,y as d}from"./vendor-0c15df0c.js";import"./vendor-fortawesome-231ff303.js";import"./index-8a28b331.js";import"./vendor-bootstrap-83e2d5a1.js";import"./vendor-jquery-84e2bf4a.js";import"./vendor-axios-c9d2afa0.js";import"./vendor-sortablejs-1a751103.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceSolarmaxBat",mixins:[r]},b={class:"device-solarmax-bat"};function _(o,e,f,x,v,g){const a=t("openwb-base-alert"),s=t("openwb-base-number-input");return p(),l("div",b,[n(a,{subtype:"info"},{default:u(()=>e[1]||(e[1]=[d(" Solarmax MAX.STORAGE / MAX.STORAGE Ultimate Batteriespeicher sind Teil eines Hybridsystems. Daher muss auch eine Komponente Wechselrichter angelegt werden. ")])),_:1}),n(s,{title:"Modbus ID",required:"","model-value":o.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=i=>o.updateConfiguration(i,"configuration.modbus_id"))},null,8,["model-value"])])}const T=m(c,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solarmax/solarmax/bat.vue"]]);export{T as default};
