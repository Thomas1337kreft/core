import{D as a}from"./HardwareInstallation-a49fa11f.js";import{_ as d,u as t,l,m,G as i,E as s,y as n,x as c}from"./vendor-0c15df0c.js";import"./vendor-fortawesome-231ff303.js";import"./index-8a28b331.js";import"./vendor-bootstrap-83e2d5a1.js";import"./vendor-jquery-84e2bf4a.js";import"./vendor-axios-c9d2afa0.js";import"./vendor-sortablejs-1a751103.js";import"./dynamic-import-helper-be004503.js";const p={name:"DeviceMqtt",mixins:[a]},u={class:"device-mqtt"};function g(_,e,b,f,h,v){const r=t("openwb-base-heading"),o=t("openwb-base-alert");return l(),m("div",u,[i(r,null,{default:s(()=>e[0]||(e[0]=[n("Einstellungen für MQTT")])),_:1}),i(o,{subtype:"info"},{default:s(()=>e[1]||(e[1]=[n(" Das MQTT Modul stellt keine aktive Verbindung her, sondern erwartet, dass die Daten an die angegebenen Topics im Broker gesendet werden. Da die Daten direkt an den Broker gesendet werden, erfolgt keine Verrechnung bei Hybrid-Systemen und auch keine Berechnung fehlender Werte, z.B. von Phasen-Leistung aus Spannung und Strömen. Beim Logging und im Lastmanagement, z.B. bei verschachtelten Zählern, werden die MQTT-Zähler wie gewohnt berücksichtigt."),c("br",null,null,-1),n(" Alle Daten sind als gültiges JSON zu senden! Zahlen mit Nachkommastellen (Float) müssen einen Punkt als Dezimaltrenner verwenden (internationales Format). ")])),_:1})])}const y=d(p,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/generic/mqtt/device.vue"]]);export{y as default};
