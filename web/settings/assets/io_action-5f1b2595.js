import{a as m}from"./IoConfig-b2ffa806.js";import{O as d}from"./OpenwbIoPattern-48f3a27d.js";import{_ as c,u as i,l as g,m as v,G as l,E as r,B as s,F as _,A as f,N as w}from"./vendor-ad7c30fd.js";import"./vendor-fortawesome-f5a68be9.js";import"./index-97a78ab5.js";import"./vendor-bootstrap-a61a47ba.js";import"./vendor-jquery-f04b6372.js";import"./vendor-axios-8313efad.js";import"./vendor-sortablejs-20ba8ac2.js";import"./dynamic-import-helper-be004503.js";const b={name:"IoActionPowerLevels",components:{OpenwbIoPattern:d},mixins:[m],computed:{value:{get(){return this.ioAction.configuration.input_pattern},set(e){this.updateConfiguration(e,"configuration.input_pattern")}},availableDevices(){return[{label:"Wechselrichter",options:this.availableComponents.filter(e=>e.type==="inverter").map(e=>({value:e.value,text:e.text}))}]}}};function h(e,t,x,B,C,o){var a;const p=i("openwb-io-pattern"),u=i("openwb-base-select-input");return g(),v(w,null,[l(p,{"model-value":o.value,"digital-inputs":e.ioDevice.input.digital,"enable-add-delete":!1,class:"text-center"},{default:r(n=>[s(_(n.pattern.value*100)+" % ",1)]),_:1},8,["model-value","digital-inputs"]),t[2]||(t[2]=f("hr",null,null,-1)),l(u,{title:"Verhalten anwenden auf...","not-selected":"Bitte auswählen","empty-value":null,groups:o.availableDevices,"model-value":(a=e.ioAction)==null?void 0:a.configuration.component_id,"onUpdate:modelValue":t[0]||(t[0]=n=>e.updateConfiguration(n,"configuration.component_id"))},{help:r(()=>t[1]||(t[1]=[s(" Bitte die Erzeugungsanlage auswählen, auf welche das Verhalten angewendet werden soll. Es kann nur eine Erzeugungsanlage ausgewählt werden. ")])),_:1},8,["groups","model-value"])],64)}const F=c(b,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/io_actions/generator_systems/power_levels/io_action.vue"]]);export{F as default};
