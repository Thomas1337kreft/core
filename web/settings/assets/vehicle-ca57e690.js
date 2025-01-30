import{V as p}from"./VehicleConfig-268e1718.js";import{_ as m,u as s,l as g,m as f,G as i,E as r,y as t,x as n}from"./vendor-0c15df0c.js";import"./vendor-fortawesome-231ff303.js";import"./index-8a28b331.js";import"./vendor-bootstrap-83e2d5a1.js";import"./vendor-jquery-84e2bf4a.js";import"./vendor-axios-c9d2afa0.js";import"./vendor-sortablejs-1a751103.js";import"./dynamic-import-helper-be004503.js";const b={name:"VehicleSocBmwBimmerConnected",mixins:[p]},v={class:"vehicle-soc-bmwbc"},w={href:"https://bimmer-connected.readthedocs.io/en/latest/captcha/rest_of_world.html",target:"_blank"};function C(o,e,k,B,V,S){const u=s("openwb-base-text-input"),a=s("font-awesome-icon"),d=s("openwb-base-button-group-input");return g(),f("div",v,[i(u,{title:"Benutzername",required:"",subtype:"user","model-value":o.vehicle.configuration.user_id,"onUpdate:modelValue":e[0]||(e[0]=l=>o.updateConfiguration(l,"configuration.user_id"))},{help:r(()=>e[5]||(e[5]=[t(" Der Benutzername für die Anmeldung an den BMW-Servern. ")])),_:1},8,["model-value"]),i(u,{title:"Kennwort",required:"",subtype:"password","model-value":o.vehicle.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=l=>o.updateConfiguration(l,"configuration.password"))},{help:r(()=>e[6]||(e[6]=[t(" Das Passwort für die Anmeldung an den BMW-Servern. ")])),_:1},8,["model-value"]),i(u,{title:"VIN",required:"","model-value":o.vehicle.configuration.vin,"onUpdate:modelValue":e[2]||(e[2]=l=>o.updateConfiguration(l,"configuration.vin"))},{help:r(()=>e[7]||(e[7]=[t(" Die Fahrgestellnummer des Fahrzeugs. ")])),_:1},8,["model-value"]),i(u,{title:"Captcha-Token",required:"","model-value":o.vehicle.configuration.captcha_token,"onUpdate:modelValue":e[3]||(e[3]=l=>o.updateConfiguration(l,"configuration.captcha_token"))},{help:r(()=>[e[17]||(e[17]=t(" Zum erstmaligen Login z.B. nach einem Neustart ist ein ")),e[18]||(e[18]=n("b",null,"aktuelles Captcha-Token",-1)),e[19]||(e[19]=t(" notwendig.")),e[20]||(e[20]=n("br",null,null,-1)),e[21]||(e[21]=t(" Dazu bitte folgende Schritte durchführen: ")),n("ol",null,[n("li",null,[e[9]||(e[9]=t(" In einem neuen Browser-Tab auf diese Seite gehen:")),e[10]||(e[10]=n("br",null,null,-1)),n("a",w,[e[8]||(e[8]=t(" Captcha Lösen ")),i(a,{"fixed-width":"",icon:["fas","external-link-alt"]})]),e[11]||(e[11]=t(" (https://bimmer-connected.readthedocs.io/en/latest/captcha/rest_of_world.html) "))]),e[12]||(e[12]=n("li",null,' Dort falls angefragt das Captcha lösen und/oder "Ich bin ein Mensch" und dann Submit anklicken. Als Ergebnis wird ein sehr langer String angezeigt. ',-1)),e[13]||(e[13]=n("li",null,[t("Diesen String komplett mit "),n("b",null,"Copy&Paste"),t(" in das Feld Captcha-Token eingeben.")],-1)),e[14]||(e[14]=n("li",null,"Die Konfiguration speichern.",-1)),e[15]||(e[15]=n("li",null,[n("b",null,"Sofort einmal im Desktop manuell (Kreispfeil) den SoC für das Fahrzeug abrufen.")],-1)),e[16]||(e[16]=n("li",null,[n("b",null,"Fertig."),t(" Ab jetzt wird bis zum nächsten Neustart das sog. Refresh-Token verwendet.")],-1))]),e[22]||(e[22]=n("b",null,"Achtung: Das Captcha-Token kann nur einmal verwendet werden und gilt nur kurze Zeit!",-1))]),_:1},8,["model-value"]),i(d,{title:"SoC während der Ladung berechnen",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":o.vehicle.configuration.calculate_soc,"onUpdate:modelValue":e[4]||(e[4]=l=>o.updateConfiguration(l,"configuration.calculate_soc"))},{help:r(()=>e[23]||(e[23]=[t(" Berechnet den Ladestand (SoC) während der Ladung. "),n("br",null,null,-1),t(" Die Berechnung erfolgt über die Ladeleistung und die Ladedauer. "),n("br",null,null,-1)])),_:1},8,["model-value"])])}const q=m(b,[["render",C],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/bmwbc/vehicle.vue"]]);export{q as default};
