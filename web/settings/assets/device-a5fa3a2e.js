import{D as b}from"./HardwareInstallation-237f4420.js";import{_ as v,u as i,k as s,l as g,G as t,E as a,y as r,z as f,x as w,B as c}from"./vendor-06e11d0e.js";import"./vendor-fortawesome-05d7e447.js";import"./index-90e11756.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./dynamic-import-helper-be004503.js";const S={name:"DeviceSungrow",mixins:[b]},N={class:"device-sungrow"};function _(n,e,D,V,H,h){const d=i("openwb-base-heading"),m=i("openwb-base-alert"),p=i("openwb-base-text-input"),l=i("openwb-base-number-input"),u=i("openwb-base-select-input");return s(),g("div",N,[t(d,null,{default:a(()=>e[5]||(e[5]=[r(" Einstellungen für Sungrow ")])),_:1}),t(m,{subtype:"info"},{default:a(()=>e[6]||(e[6]=[r(" Bitte zur Fehlervermeidung die Firmware des Sungrow Wechselrichters und WiNet-S Dongles aktuell halten. ")])),_:1}),t(p,{title:"IP oder Hostname",subtype:"host",required:"","model-value":n.device.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=o=>n.updateConfiguration(o,"configuration.ip_address"))},null,8,["model-value"]),t(l,{title:"Port",required:"",min:1,max:65535,"model-value":n.device.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=o=>n.updateConfiguration(o,"configuration.port"))},null,8,["model-value"]),t(l,{title:"Modbus ID",required:"","model-value":n.device.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[2]||(e[2]=o=>n.updateConfiguration(o,"configuration.modbus_id"))},null,8,["model-value"]),t(u,{title:"Version",options:[{value:0,text:"SH (Hybrid)"},{value:3,text:"SH (Hybrid) über WiNet-S Dongle"},{value:1,text:"SG (kein Hybrid)"},{value:2,text:"SG (kein Hybrid) über WiNet-S Dongle"}],"model-value":n.device.configuration.version,required:"","onUpdate:modelValue":e[3]||(e[3]=o=>n.updateConfiguration(o,"configuration.version"))},{help:a(()=>e[7]||(e[7]=[r(" Die Variante SH sollte möglichst über den internen LAN-Port genutzt werden (befindet sich am Wechselrichter hinter dem WiNet-S Dongle), da nur hier alle Werte vollständig ausgelesen werden können. Den WiNet-S Dongle zusätzlich ins Heimnetz (per LAN oder WLAN) einbinden, um iSolarCloud nutzen zu können. ")])),_:1},8,["model-value"]),n.device.configuration.version===0?(s(),f(u,{key:0,title:"Firmware",options:[{value:"v1",text:"bis November 2024"},{value:"v2",text:"ab November 2024"}],"model-value":n.device.configuration.firmware,required:"","onUpdate:modelValue":e[4]||(e[4]=o=>n.updateConfiguration(o,"configuration.firmware"))},{help:a(()=>e[8]||(e[8]=[r(' Mit einem Firmwareupdate hat Sungrow ab November 2024 die Auslesung der Speicherleistung verändert. Sollte ab November 2024 selbst oder vom Installateur ein Firmwareupdate gemacht worden sein bitte "ab November 2024" als Firmware wählen. Ohne dieses Update ist "bis November 2024" die richtige Auswahl (Standard).'),w("br",null,null,-1),r(' Für Benutzer mit Installateur-Account: Dies entspricht einer Version des MDSP Moduls größer gleich "SAPPHIRE-H_03011.95.03" ')])),_:1},8,["model-value"])):c("",!0)])}const P=v(S,[["render",_],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sungrow/sungrow/device.vue"]]);export{P as default};
