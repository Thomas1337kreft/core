import{O as m}from"./IoConfig-b2ffa806.js";import{_ as p,u as r,l as a,m as s,G as t}from"./vendor-ad7c30fd.js";import"./vendor-fortawesome-f5a68be9.js";import"./index-97a78ab5.js";import"./vendor-bootstrap-a61a47ba.js";import"./vendor-jquery-f04b6372.js";import"./vendor-axios-8313efad.js";import"./vendor-sortablejs-20ba8ac2.js";import"./dynamic-import-helper-be004503.js";const d={name:"IoDeviceDimmKit",mixins:[m]},l={class:"io-device-dimm-kit"};function v(o,e,c,f,_,b){const u=r("openwb-base-text-input"),n=r("openwb-base-number-input");return a(),s("div",l,[t(u,{title:"IP oder Hostname",subtype:"host",required:"","model-value":o.ioDevice.configuration.host,"onUpdate:modelValue":e[0]||(e[0]=i=>o.updateConfiguration(i,"configuration.host"))},null,8,["model-value"]),t(n,{title:"Port",required:"","model-value":o.ioDevice.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=i=>o.updateConfiguration(i,"configuration.port"))},null,8,["model-value"]),t(n,{title:"Modbus-ID",required:"",min:1,max:255,"model-value":o.ioDevice.configuration.modbus_id,"onUpdate:modelValue":e[2]||(e[2]=i=>o.updateConfiguration(i,"configuration.modbus_id"))},null,8,["model-value"])])}const B=p(d,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/io_devices/dimm_kit/io_device.vue"]]);export{B as default};
