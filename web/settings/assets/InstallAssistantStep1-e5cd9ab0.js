import{C as m}from"./index-5fe069a6.js";import p from"./InstallAssistantStepTemplate-65da117a.js";import l from"./DataManagement-122d6fa9.js";import{_ as d,q as a,k as u,z as g,M as i,B as f,u as c}from"./vendor-b3afda6d.js";import"./vendor-fortawesome-b013cb5c.js";import"./vendor-bootstrap-37731caa.js";import"./vendor-jquery-2371184a.js";import"./vendor-axios-dc7988e3.js";import"./vendor-sortablejs-806a0b5c.js";import"./dynamic-import-helper-be004503.js";const A={name:"InstallAssistantStep1",mixins:[m],emits:["save","reset","defaults","sendCommand","switchPage","endAssistant"],components:{InstallAssistantStepTemplate:p,DataManagement:l},data:()=>({mqttTopicsToSubscribe:[]}),methods:{nextPage(){this.$emit("switchPage",2)},previousPage(){this.$emit("switchPage",0)},endAssistant(){this.$emit("endAssistant")}}},v=c("p",null," Wir empfehlen an dieser Stelle eine Sicherung der openWB zu erzeugen, auf welche später zurückgegriffen werden kann, insbesondere, wenn die openWB schon konfiguriert war und der Assistent nun erneut ausgeführt wird. ",-1);function S(t,e,P,h,w,s){const o=a("DataManagement"),r=a("InstallAssistantStepTemplate");return u(),g(r,{title:"1. Datensicherung - Eine Sicherung erstellen",onNextPage:s.nextPage,onPreviousPage:s.previousPage,onEndAssistant:s.endAssistant},{help:i(()=>[v]),content:i(()=>[f(o,{installAssistantActive:!0,showBackupCloudSection:!1,onSendCommand:e[0]||(e[0]=n=>t.$emit("sendCommand",n)),onSave:e[1]||(e[1]=n=>t.$emit("save")),onReset:e[2]||(e[2]=n=>t.$emit("reset")),onDefaults:e[3]||(e[3]=n=>t.$emit("defaults"))})]),_:1},8,["onNextPage","onPreviousPage","onEndAssistant"])}const z=d(A,[["render",S],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/install_assistant/InstallAssistantStep1.vue"]]);export{z as default};
