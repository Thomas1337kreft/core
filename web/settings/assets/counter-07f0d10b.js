import{C as p}from"./HardwareInstallation-a49fa11f.js";import{_ as u,u as t,l,m as d,G as r,E as i,y as n,x as c}from"./vendor-0c15df0c.js";import"./vendor-fortawesome-231ff303.js";import"./index-8a28b331.js";import"./vendor-bootstrap-83e2d5a1.js";import"./vendor-jquery-84e2bf4a.js";import"./vendor-axios-c9d2afa0.js";import"./vendor-sortablejs-1a751103.js";import"./dynamic-import-helper-be004503.js";const _={name:"DeviceSmahmCounter",mixins:[p]},f={class:"device-smahm-counter"};function b(o,e,g,v,M,h){const s=t("openwb-base-heading"),a=t("openwb-base-number-input");return l(),d("div",f,[r(s,null,{default:i(()=>e[1]||(e[1]=[n(" Einstellungen für SMA-HM/EM Zähler ")])),_:1}),r(a,{title:"Seriennummer","model-value":o.component.configuration.serials,"onUpdate:modelValue":e[0]||(e[0]=m=>o.updateConfiguration(m,"configuration.serials"))},{help:i(()=>e[2]||(e[2]=[n(" Eine Seriennummer ist nur erforderlich, wenn mehrere SMA HomeManager in Betrieb sind."),c("br",null,null,-1),n(" Funktioniert auch mit Energy Meter anstatt Home Manager. ")])),_:1},8,["model-value"])])}const H=u(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sma/sma_shm/counter.vue"]]);export{H as default};
