import{D as s}from"./HardwareInstallation-a49fa11f.js";import{_ as u,u as i,l as p,m as l,G as t,E as m,y as c}from"./vendor-0c15df0c.js";import"./vendor-fortawesome-231ff303.js";import"./index-8a28b331.js";import"./vendor-bootstrap-83e2d5a1.js";import"./vendor-jquery-84e2bf4a.js";import"./vendor-axios-c9d2afa0.js";import"./vendor-sortablejs-1a751103.js";import"./dynamic-import-helper-be004503.js";const f={name:"DeviceE3dc",mixins:[s]},b={class:"device-e3dc"};function v(o,e,_,g,w,C){const a=i("openwb-base-heading"),r=i("openwb-base-text-input"),d=i("openwb-base-number-input");return p(),l("div",b,[t(a,null,{default:m(()=>e[3]||(e[3]=[c(" Einstellungen für E3DC ")])),_:1}),t(r,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.device.configuration.address,"onUpdate:modelValue":e[0]||(e[0]=n=>o.updateConfiguration(n,"configuration.address"))},null,8,["model-value"]),t(d,{title:"Port",required:"",min:1,max:65535,"model-value":o.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=n=>o.updateConfiguration(n,"configuration.port"))},null,8,["model-value"]),t(d,{title:"Modbus ID",required:"","model-value":o.device.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[2]||(e[2]=n=>o.updateConfiguration(n,"configuration.modbus_id"))},null,8,["model-value"])])}const y=u(f,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/e3dc/e3dc/device.vue"]]);export{y as default};
