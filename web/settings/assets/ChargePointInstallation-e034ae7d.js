import{l as Z,d as J,a7 as H,A as G,ag as Q,ah as X,M as Y,ai as K,F as ee,I as te}from"./vendor-fortawesome-c5ffc2b2.js";import{_ as P,C as ne}from"./index-ad11aee2.js";import{_ as z}from"./dynamic-import-helper-be004503.js";import{_ as S,u as h,l,m as p,z as f,E as o,y as r,F as w,G as a,x as d,a1 as E,a2 as q,N as A,M as U,B as g,D as M,q as ae,A as oe}from"./vendor-ea36120f.js";const le={props:{chargePoint:{type:Object,required:!0}},emits:["update:configuration"],methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},ie=S(le,[["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/ChargePointConfigMixin.vue"]]),re={name:"ChargePointConfigFallback",mixins:[ie]},se={class:"charge-point-config-fallback"},ue={key:1};function de(t,e,m,V,c,u){const k=h("openwb-base-alert"),_=h("openwb-base-textarea");return l(),p("div",se,[Object.keys(t.chargePoint.configuration).length==0?(l(),f(k,{key:0,subtype:"info"},{default:o(()=>[r(' Der Ladepunkt-Typ "'+w(t.chargePoint.type)+'" bietet keine Einstellungen. ',1)]),_:1})):(l(),p("div",ue,[a(k,{subtype:"warning"},{default:o(()=>[r(' Es wurde keine Konfigurationsseite für den Ladepunkt-Typ "'+w(t.chargePoint.type)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),a(_,{title:"Konfiguration",subtype:"json","model-value":t.chargePoint.configuration,"onUpdate:modelValue":e[0]||(e[0]=L=>t.updateConfiguration(L,"configuration"))},{help:o(()=>e[1]||(e[1]=[r(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")])),_:1},8,["model-value"]),a(k,{subtype:"info"},{default:o(()=>[d("pre",null,w(JSON.stringify(t.chargePoint.configuration,void 0,2)),1)]),_:1})]))])}const pe=S(re,[["render",de],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/OpenwbChargePointConfigFallback.vue"]]),me={props:{chargePoint:{type:Object,required:!0}}},ge=S(me,[["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/ChargePointCommandsMixin.vue"]]),he={name:"ChargePointCommandsFallback",mixins:[ge]},ce={class:"charge-point-commands-fallback"};function be(t,e,m,V,c,u){const k=h("openwb-base-alert");return l(),p("div",ce,[a(k,{subtype:"secondary"},{default:o(()=>[r(' Der Ladepunkt-Typ "'+w(t.chargePoint.type)+'" bietet keine Befehle an. ',1)]),_:1})])}const fe=S(he,[["render",be],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/OpenwbChargePointCommandsFallback.vue"]]),_e={name:"OpenwbChargePointProxy",props:{chargePoint:{required:!0,type:Object}},emits:["update:configuration"],methods:{getChargePointSettingsComponent(){return console.debug(`loading charge point settings: ${this.chargePoint.type}`),E({loader:()=>z(Object.assign({"./external_openwb/chargePoint.vue":()=>P(()=>import("./chargePoint-b0a6debe.js"),["assets/chargePoint-b0a6debe.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/index-ad11aee2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/dynamic-import-helper-be004503.js"]),"./internal_openwb/chargePoint.vue":()=>P(()=>import("./chargePoint-1fdab31c.js"),["assets/chargePoint-1fdab31c.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/index-ad11aee2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/dynamic-import-helper-be004503.js"]),"./mqtt/chargePoint.vue":()=>P(()=>import("./chargePoint-4841a797.js"),["assets/chargePoint-4841a797.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/index-ad11aee2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/dynamic-import-helper-be004503.js"]),"./openwb_dc_adapter/chargePoint.vue":()=>P(()=>import("./chargePoint-83d3fcec.js"),["assets/chargePoint-83d3fcec.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/index-ad11aee2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/dynamic-import-helper-be004503.js"]),"./openwb_pro/chargePoint.vue":()=>P(()=>import("./chargePoint-49393003.js"),["assets/chargePoint-49393003.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/index-ad11aee2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/dynamic-import-helper-be004503.js"]),"./openwb_series2_satellit/chargePoint.vue":()=>P(()=>import("./chargePoint-5d1371bf.js"),["assets/chargePoint-5d1371bf.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/index-ad11aee2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/dynamic-import-helper-be004503.js"]),"./smartwb/chargePoint.vue":()=>P(()=>import("./chargePoint-684f2a93.js"),["assets/chargePoint-684f2a93.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/index-ad11aee2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/dynamic-import-helper-be004503.js"])}),`./${this.chargePoint.type}/chargePoint.vue`),errorComponent:pe})},getChargePointCommandsComponent(){return console.debug(`loading charge point commands: ${this.chargePoint.type}`),E({loader:()=>z(Object.assign({"./internal_openwb/commands.vue":()=>P(()=>import("./commands-b4417123.js"),["assets/commands-b4417123.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/index-ad11aee2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/dynamic-import-helper-be004503.js"]),"./openwb_pro/commands.vue":()=>P(()=>import("./commands-79d9ab52.js"),["assets/commands-79d9ab52.js","assets/vendor-ea36120f.js","assets/vendor-sortablejs-c6aaccb3.js","assets/vendor-3a7c342f.css","assets/vendor-fortawesome-c5ffc2b2.js","assets/index-ad11aee2.js","assets/vendor-bootstrap-038cab7c.js","assets/vendor-jquery-48e02303.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-1f03ee31.js","assets/index-932929b9.css","assets/dynamic-import-helper-be004503.js"])}),`./${this.chargePoint.type}/commands.vue`),errorComponent:fe})},updateConfiguration(t){this.$emit("update:configuration",t)}}};function ve(t,e,m,V,c,u){const k=h("openwb-base-heading");return l(),p(A,null,[a(k,null,{default:o(()=>[r(' Einstellungen für Ladepunkt Typ "'+w(m.chargePoint.type)+'" ',1)]),_:1}),(l(),f(q(u.getChargePointSettingsComponent()),{"charge-point":m.chargePoint,"onUpdate:configuration":e[0]||(e[0]=_=>u.updateConfiguration(_))},null,40,["charge-point"])),e[1]||(e[1]=d("hr",null,null,-1)),a(k,null,{default:o(()=>[r(' Befehle für Ladepunkt Typ "'+w(m.chargePoint.type)+'" ',1)]),_:1}),(l(),f(q(u.getChargePointCommandsComponent()),{"charge-point":m.chargePoint},null,8,["charge-point"]))],64)}const we=S(_e,[["render",ve],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/OpenwbChargePointProxy.vue"]]);Z.add(J,H,G,Q,X,Y,K);const ke={name:"OpenwbChargePointInstallationView",components:{FontAwesomeIcon:ee,FontAwesomeLayers:te,OpenwbChargePointProxy:we},mixins:[ne],props:{installAssistantActive:{type:Boolean,required:!1,default:!1}},emits:["sendCommand","save","reset","defaults"],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/optional/dc_charging","openWB/optional/ocpp/config","openWB/optional/rfid/active","openWB/chargepoint/+/config","openWB/chargepoint/template/+","openWB/chargepoint/template/+/autolock/+","openWB/system/configurable/chargepoints","openWB/system/configurable/chargepoints_internal"],chargePointToAdd:void 0,showChargePointModal:!1,modalChargePointIndex:void 0,showChargePointTemplateModal:!1,modalChargePointTemplateIndex:void 0,showChargePointTemplateAutolockPlanModal:!1,modalChargePointTemplateAutolockPlanIndex:void 0}},computed:{dcChargingEnabled:{get(){return this.$store.state.mqtt["openWB/optional/dc_charging"]}},installedChargePoints:{get(){let t=this.getWildcardTopics("openWB/chargepoint/+/config"),e={};for(const[m,V]of Object.entries(t))(V.type==="internal_openwb"||this.$store.state.mqtt["openWB/general/extern"]===!1)&&(e[m]=V);return e}},chargePointTemplates:{get(){return this.getWildcardTopics("openWB/chargepoint/template/+")}},chargePointTemplateList:{get(){let t=[];return Object.keys(this.chargePointTemplates).forEach(e=>{let m=parseInt(e.match(/([0-9]+)/g)[0]),V=this.$store.state.mqtt["openWB/chargepoint/template/"+m].name;t.push({value:m,text:V})}),t}}},methods:{addChargePoint(){this.$emit("sendCommand",{command:"addChargepoint",data:{type:this.chargePointToAdd}})},removeChargePointModal(t,e){e.stopPropagation(),this.modalChargePointIndex=parseInt(t.match(/(?:\/)(\d+)(?=\/)/)[1]),this.showChargePointModal=!0},removeChargePoint(t,e){this.showChargePointModal=!1,e=="confirm"&&this.$emit("sendCommand",{command:"removeChargepoint",data:{id:t}})},getChargePointList(){return this.$store.state.mqtt["openWB/general/extern"]===!1?this.$store.state.mqtt["openWB/system/configurable/chargepoints"]:this.$store.state.mqtt["openWB/system/configurable/chargepoints_internal"]},getChargePointName(t){return this.$store.state.mqtt["openWB/chargepoint/"+t+"/config"]?this.$store.state.mqtt["openWB/chargepoint/"+t+"/config"].name:"Ladepunkt "+t},getChargePointTemplateName(t){return this.$store.state.mqtt["openWB/chargepoint/template/"+t]?this.$store.state.mqtt["openWB/chargepoint/template/"+t].name:"Profil "+t},addChargePointTemplate(t){t.stopPropagation(),this.$emit("sendCommand",{command:"addChargepointTemplate",data:{}})},getChargePointTemplateIndex(t){return parseInt(t.match(/([^/]+)$/)[0])},removeChargePointTemplateModal(t,e){e.stopPropagation(),this.modalChargePointTemplateIndex=this.getChargePointTemplateIndex(t),this.showChargePointTemplateModal=!0},removeChargePointTemplate(t,e){this.showChargePointTemplateModal=!1,e=="confirm"&&this.$emit("sendCommand",{command:"removeChargepointTemplate",data:{id:t}})},addChargePointTemplateAutolockPlan(t,e){e.stopPropagation();let m=this.getChargePointTemplateIndex(t);this.$emit("sendCommand",{command:"addAutolockPlan",data:{template:m}})},removeChargePointTemplateAutolockPlanModal(t,e,m){m.stopPropagation(),this.modalChargePointTemplateIndex=this.getChargePointTemplateIndex(t),this.modalChargePointTemplateAutolockPlanIndex=parseInt(e.match(/([^/]+)$/)[0]),this.showChargePointTemplateAutolockPlanModal=!0},removeChargePointTemplateAutolockPlan(t,e,m){this.showChargePointTemplateAutolockPlanModal=!1,m=="confirm"&&this.$emit("sendCommand",{command:"removeAutolockPlan",data:{template:t,plan:e}})},getChargePointTemplateAutolockPlanName(t,e){return this.$store.state.mqtt["openWB/chargepoint/template/"+t+"/autolock/"+e]?this.$store.state.mqtt["openWB/chargepoint/template/"+t+"/autolock/"+e].name:"Autolock Zeitplan "+t+"/"+e},getChargePointTemplateAutolockPlans(t){let e=this.getChargePointTemplateIndex(t);return this.getWildcardTopics("openWB/chargepoint/template/"+e+"/autolock/+")},updateConfiguration(t,e){console.debug("updateConfiguration",t,e),this.updateState(t,e.value,e.object)}}},Ce={class:"chargePointInstallation"},ye={name:"chargePointInstallationForm"},Pe={key:0},Ve={key:2},Le={key:0},Be={key:0},We={key:1},Ae={key:1},Se={key:0},xe={key:2},Ue={key:4},Ie=["onClick"],Te={key:0},De={key:1},ze={key:2},Ee={key:2};function qe(t,e,m,V,c,u){const k=h("openwb-base-modal-dialog"),_=h("font-awesome-icon"),L=h("openwb-base-avatar"),y=h("openwb-base-text-input"),I=h("openwb-base-select-input"),O=h("openwb-charge-point-proxy"),B=h("openwb-base-heading"),C=h("openwb-base-button-group-input"),x=h("openwb-base-card"),F=h("font-awesome-layers"),T=h("openwb-base-alert"),N=h("openwb-base-array-input"),D=h("openwb-base-range-input"),$=h("openwb-base-number-input"),j=h("openwb-base-submit-buttons");return l(),p(A,null,[a(k,{show:c.showChargePointModal,title:"Ladepunkt löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:e[0]||(e[0]=i=>u.removeChargePoint(c.modalChargePointIndex,i))},{default:o(()=>[r(' Wollen Sie den Ladepunkt "'+w(u.getChargePointName(c.modalChargePointIndex))+'" (ID: '+w(c.modalChargePointIndex)+") wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ",1)]),_:1},8,["show"]),a(k,{show:c.showChargePointTemplateModal,title:"Ladepunkt-Profil löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:e[1]||(e[1]=i=>u.removeChargePointTemplate(c.modalChargePointTemplateIndex,i))},{default:o(()=>[r(' Wollen Sie das Ladepunkt-Profil "'+w(u.getChargePointTemplateName(c.modalChargePointTemplateIndex))+'" (ID: '+w(c.modalChargePointTemplateIndex)+") wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ",1)]),_:1},8,["show"]),a(k,{show:c.showChargePointTemplateAutolockPlanModal,title:"Autolock Zeitplan löschen",subtype:"danger",buttons:[{text:"Löschen",event:"confirm",subtype:"danger"}],onModalResult:e[2]||(e[2]=i=>u.removeChargePointTemplateAutolockPlan(c.modalChargePointTemplateIndex,c.modalChargePointTemplateAutolockPlanIndex,i))},{default:o(()=>[r(' Wollen Sie den Autolock Zeitplan "'+w(u.getChargePointTemplateAutolockPlanName(c.modalChargePointTemplateIndex,c.modalChargePointTemplateAutolockPlanIndex))+'" wirklich entfernen? Dieser Vorgang kann nicht rückgängig gemacht werden! ',1)]),_:1},8,["show"]),d("div",Ce,[d("form",ye,[a(x,{title:"Ladepunkte",subtype:"primary",collapsible:!0,collapsed:!m.installAssistantActive},{header:o(()=>[a(_,{"fixed-width":"",icon:["fas","charging-station"]}),e[7]||(e[7]=r(" Ladepunkte "))]),default:o(()=>[(l(!0),p(A,null,U(u.installedChargePoints,(i,s)=>(l(),f(x,{key:s,title:i.name+" (ID: "+i.id+")",collapsible:!0,collapsed:!0,subtype:"primary"},{actions:o(n=>[n.collapsed?g("",!0):(l(),f(L,{key:0,class:"bg-danger clickable",onClick:v=>u.removeChargePointModal(s,v)},{default:o(()=>[a(_,{"fixed-width":"",icon:["fas","trash"]})]),_:2},1032,["onClick"]))]),default:o(()=>[a(y,{title:"Bezeichnung",subtype:"text","model-value":i.name,"onUpdate:modelValue":n=>t.updateState(s,n,"name")},null,8,["model-value","onUpdate:modelValue"]),a(y,{title:"Modul",subtype:"text",disabled:"",readonly:"","model-value":t.$store.state.mqtt[s].type},null,8,["model-value"]),i.type!=="internal_openwb"||t.$store.state.mqtt["openWB/general/extern"]===!1?(l(),p("span",Pe,[a(I,{title:"Ladepunkt-Profil",options:u.chargePointTemplateList,"model-value":t.$store.state.mqtt[s].template,"onUpdate:modelValue":n=>t.updateState(s,n,"template")},null,8,["options","model-value","onUpdate:modelValue"])])):g("",!0),t.$store.state.mqtt["openWB/optional/ocpp/config"].active===!0?(l(),f(y,{key:1,title:"OCPP-Chargebox ID","model-value":i.ocpp_chargebox_id,"onUpdate:modelValue":n=>t.updateState(s,n,"ocpp_chargebox_id")},{help:o(()=>[...e[8]||(e[8]=[r(" Bitte geben Sie hier die Chargebox ID ein, die im OCPP-Backend für diesen Ladepunkt verwendet wird. Sollen die Daten dieses Ladepunktes nicht an ein OCPP-Backend übertragen werden, lasse dieses Feld leer. ")])]),_:2},1032,["model-value","onUpdate:modelValue"])):g("",!0),e[14]||(e[14]=d("hr",null,null,-1)),a(O,{"charge-point":i,"onUpdate:configuration":n=>u.updateConfiguration(s,n)},null,8,["charge-point","onUpdate:configuration"]),(i.type!=="internal_openwb"||t.$store.state.mqtt["openWB/general/extern"]===!1)&&i.charging_type!=="DC"?(l(),p("div",Ve,[e[13]||(e[13]=d("hr",null,null,-1)),a(B,null,{default:o(()=>[...e[9]||(e[9]=[r(" Hardware-Optionen ")])]),_:1}),a(C,{title:"automatische Phasenumschaltung vorhanden",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":i.auto_phase_switch_hw,"onUpdate:modelValue":n=>t.updateState(s,n,"auto_phase_switch_hw")},null,8,["model-value","onUpdate:modelValue"]),a(C,{title:"Control-Pilot-Unterbrechung vorhanden",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":i.control_pilot_interruption_hw,"onUpdate:modelValue":n=>t.updateState(s,n,"control_pilot_interruption_hw")},{help:o(()=>[...e[10]||(e[10]=[r(' Die Control-Pilot-Leitung ist im Ladekabel integriert und dient der Steuerung der Fahrzeugladung (An/Aus/Stromvorgaben). Bei einigen Fahrzeugen können durch die Regelung erzwungene, längere Ladestopps (z.B. beim PV-Laden) zu unerwünschten "Einschlaf"-Effekten des Fahrzeuges führen. Mit diesem Feature, welches hardwareseitig verbaut sein muss, kann ein Abstecken des Ladesteckers simuliert werden, um ein Aufwecken des Fahrzeuges zu ermöglichen. Die Funktion hängt immer auch vom Fahrzeugtyp ab. ')])]),_:2},1032,["model-value","onUpdate:modelValue"]),a(B,null,{default:o(()=>[...e[11]||(e[11]=[r(" Elektrischer Anschluss ")])]),_:1}),a(C,{title:"Anzahl angeschlossener Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:2,text:"2"},{buttonValue:3,text:"3"}],"model-value":i.connected_phases,"onUpdate:modelValue":n=>t.updateState(s,n,"connected_phases")},null,8,["model-value","onUpdate:modelValue"]),a(C,{title:"Phase 1 des Ladekabels",buttons:[{buttonValue:1,text:"EVU L1"},{buttonValue:2,text:"EVU L2"},{buttonValue:3,text:"EVU L3"}],"model-value":i.phase_1,"onUpdate:modelValue":n=>t.updateState(s,n,"phase_1")},{help:o(()=>[...e[12]||(e[12]=[r(" Hier ist anzugeben, an welcher Phase des Hausanschlusses (EVU-Punkt) die Phase 1 dieses Ladepunktes angeschlossen ist. Diese Information wird für das Lastmanagement benötigt, um bei einer Schieflast gezielt einzelne Ladepunkte zu drosseln."),d("br",null,null,-1),r(' Bei mehreren Ladepunkten macht es Sinn, die Phasen der LP rotierend anzuschließen, damit mehrere "nicht-dreiphasig" ladende Fahrzeuge mit optimaler Leistung laden können, bevor das Lastmanagement eingreift.'),d("br",null,null,-1),r(" Es wird vorausgesetzt, dass das Drehfeld innerhalb der Installation gleich bleibt. Wenn z.B. L1 des Ladepunktes auf EVU-L2 liegt, muss L2 des Ladepunktes auf EVU-L3 aufgelegt sein (und L3 des Ladepunktes auf EVU-L1)."),d("br",null,null,-1),r(" Eine Möglichkeit, die zur Ladepunktphase L1 zugehörige EVU-Phase zu ermitteln, ist eine einphasige Ladung zu starten und die Phasenströme am EVU-Zähler zu beobachten. Mit einem zweiphasig ladenden Fahrzeug kann danach auch der Anschluss von L2 ermittelt und so das Drehfeld kontrolliert werden."),d("br",null,null,-1),r(" Im Zweifel bitte das Drehfeld von einer Fachkraft prüfen und korrigieren lassen. ")])]),_:2},1032,["model-value","onUpdate:modelValue"])])):g("",!0)]),_:2},1032,["title"]))),128)),Object.keys(u.installedChargePoints).length>0?(l(),p("hr",Le)):g("",!0),a(I,{title:"Verfügbare Ladepunkte","not-selected":"Bitte auswählen",options:u.getChargePointList(),"model-value":c.chargePointToAdd,"add-button":!0,"onUpdate:modelValue":e[3]||(e[3]=i=>c.chargePointToAdd=i),"onInput:add":u.addChargePoint},{help:o(()=>e[15]||(e[15]=[r(" Bitte einen Ladepunkt auswählen, der der openWB-Regelung hinzugefügt werden soll."),d("br",null,null,-1),d("ul",null,[d("li",null," Interne openWB - wenn diese openWB über einen verbauten Ladepunkt mit Regelcontroller verfügt (z.B. Standard(+), Custom, Duo, Buchse, NICHT Standalone); ansonsten immer anlegen, egal ob diese openWB steuert = primary oder ferngesteuert wird = secondary "),d("li",null," Secondary openWB - wenn diese openWB (primary) die Fernsteuerung von weiteren openWB (secondary) übernimmt "),d("li",null,"MQTT-Ladepunkt - nur zur Nutzung des openWB-Simulators zugelassen"),d("li",null,"openWB Pro - wenn diese openWB (primary) die Fernsteuerung einer openWB Pro (secondary) übernimmt"),d("li",null," openWB series2 Satellit/Satellit Duo - wenn diese openWB (primary) die Fernsteuerung einer openWB series2 Satellit/Satellit Duo (secondary) übernimmt "),d("li",null," smartWB/EVSE-Wifi - wenn diese openWB (primary) die Fernsteuerung einer smartWB/EVSE-Wifi übernimmt ")],-1)])),_:1},8,["options","model-value","onInput:add"])]),_:1},8,["collapsed"]),e[37]||(e[37]=d("hr",{class:"border-secondary"},null,-1)),a(x,{title:"Ladepunkt-Profile",collapsible:!0,collapsed:!0},{header:o(()=>[a(F,{"fixed-width":"",class:"fa-lg"},{default:o(()=>[a(_,{"fixed-width":"",icon:["far","file"]}),a(_,{"fixed-width":"",icon:["fas","charging-station"],transform:"shrink-8"})]),_:1}),e[16]||(e[16]=r(" Ladepunkt-Profile "))]),actions:o(()=>[t.$store.state.mqtt["openWB/general/extern"]===!1?(l(),f(L,{key:0,class:"bg-success clickable",onClick:u.addChargePointTemplate},{default:o(()=>[a(_,{"fixed-width":"",icon:["fas","plus"]})]),_:1},8,["onClick"])):g("",!0)]),default:o(()=>[t.$store.state.mqtt["openWB/general/extern"]===!0?(l(),p("div",Be,[a(T,{subtype:"info"},{default:o(()=>e[17]||(e[17]=[r(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')])),_:1})])):(l(),p("div",We,[(l(!0),p(A,null,U(u.chargePointTemplates,(i,s)=>(l(),f(x,{key:s,title:i.name+" (ID: "+u.getChargePointTemplateIndex(s)+")",collapsible:!0,collapsed:!0},M({default:o(()=>[a(y,{title:"Bezeichnung",subtype:"text","model-value":i.name,disabled:s.endsWith("/0"),"onUpdate:modelValue":n=>t.updateState(s,n,"name")},M({_:2},[s.endsWith("/0")?{name:"help",fn:o(()=>[e[18]||(e[18]=r(" Das Standard-Profil kann nicht umbenannt werden. "))]),key:"0"}:void 0]),1032,["model-value","disabled","onUpdate:modelValue"]),u.dcChargingEnabled===!0?(l(),f(C,{key:0,title:"Typ des Ladeprofils",buttons:[{buttonValue:"AC",text:"AC"},{buttonValue:"DC",text:"DC"}],"model-value":i.charging_type,"onUpdate:modelValue":n=>t.updateState(s,n,"charging_type")},null,8,["model-value","onUpdate:modelValue"])):g("",!0),e[35]||(e[35]=d("hr",null,null,-1)),a(B,null,{default:o(()=>[...e[19]||(e[19]=[r(" Zugangskontrolle ")])]),_:1}),a(C,{title:"Sperre nach Abstecken",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":i.disable_after_unplug,"onUpdate:modelValue":n=>t.updateState(s,n,"disable_after_unplug")},{help:o(()=>[...e[20]||(e[20]=[r(" Sperrt den Ladepunkt nach Abstecken eines Fahrzeuges. ")])]),_:2},1032,["model-value","onUpdate:modelValue"]),t.$store.state.mqtt["openWB/optional/rfid/active"]===!0&&!m.installAssistantActive?(l(),p("div",Ae,[i.disable_after_unplug?(l(),f(N,{key:0,title:"Zugeordnete ID-Tags","no-elements-message":"Keine ID-Tags zugeordnet.","model-value":i.valid_tags,"onUpdate:modelValue":n=>t.updateState(s,n,"valid_tags")},{help:o(()=>[...e[21]||(e[21]=[r(" Die hier eingetragenen ID-Tags dienen ausschließlich zum Entsperren des Ladepunktes. ")])]),_:2},1032,["model-value","onUpdate:modelValue"])):g("",!0)])):g("",!0),e[36]||(e[36]=d("hr",null,null,-1)),a(B,null,{default:o(()=>[...e[22]||(e[22]=[r(" Angaben zum konfigurierten Ladestrom der openWB ")])]),_:1}),a(T,{subtype:"info"},{default:o(()=>[e[23]||(e[23]=r(" Hier werden die maximalen Ladeströme entsprechend der in dem zugeordneten Ladepunkt genutzten Phasen eingestellt.")),e[24]||(e[24]=d("br",null,null,-1)),e[25]||(e[25]=r(" Generell gilt, dass diese Werte in Übereinstimmung mit der Ausführung des Ladepunktes und des elektrischen Anschlusses bzw. der Absicherung zu wählen sind. ")),i.charging_type==="AC"?(l(),p("span",Se," Bei einer openWB mit 22kW Maximalleistung sind hier jeweils 32A einzustellen. Ist die openWB beispielsweise auf 11kW begrenzt (KfW-Förderung oder die Zuleitung ist mit 16A abgesichert), dann sind hier jeweils 16A einzustellen. ")):g("",!0),e[26]||(e[26]=d("br",null,null,-1)),e[27]||(e[27]=r(" Komplexere Installationen mit mehreren Ladepunkten werden im ")),e[28]||(e[28]=d("a",{href:"https://github.com/openWB/core/wiki/Lastmanagement-und-kaskadierte-Z%C3%A4hler",target:"_blank",rel:"noopener noreferrer"},"Wiki zum Lastmanagement",-1)),e[29]||(e[29]=r(" beschrieben. "))]),_:2},1024),i.charging_type==="AC"||u.dcChargingEnabled!==!0?(l(),p("div",xe,[a(D,{title:"Maximalstrom bei einer Phase",min:6,max:32,step:1,unit:"A","model-value":i.max_current_single_phase,"onUpdate:modelValue":n=>t.updateState(s,n,"max_current_single_phase")},null,8,["model-value","onUpdate:modelValue"]),a(D,{title:"Maximalstrom mehrere Phasen",min:6,max:32,step:1,unit:"A","model-value":i.max_current_multi_phases,"onUpdate:modelValue":n=>t.updateState(s,n,"max_current_multi_phases")},null,8,["model-value","onUpdate:modelValue"])])):(l(),f($,{key:3,title:"Maximalleistung",min:22,max:420,step:1,unit:"kW",precision:5,"model-value":t.ac_current2dc_power(i.dc_max_current),"onUpdate:modelValue":n=>t.updateState(s,t.dc_power2ac_current(n),"dc_max_current")},null,8,["model-value","onUpdate:modelValue"])),m.installAssistantActive?g("",!0):(l(),p("div",Ue,[e[34]||(e[34]=d("hr",null,null,-1)),a(B,null,{default:o(()=>[...e[30]||(e[30]=[r(" Automatische Sperre ")])]),_:1}),a(C,{title:"Automatische Sperre aktiv",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":i.autolock.active,"onUpdate:modelValue":n=>t.updateState(s,n,"autolock.active")},{help:o(()=>[...e[31]||(e[31]=[r(" Wird die automatische Sperre aktiviert, können Fahrzeugladungen mittels Zeitplan auf gewünschte Zeitbereiche eingeschränkt werden. Dies kann z.B. bei Zugänglichkeiten zu Ladepunkten in öffentlichen oder halb-öffentlichen Bereichen sinnvoll sein. ")])]),_:2},1032,["model-value","onUpdate:modelValue"]),a(C,{title:"Erst nach Ladeende sperren",buttons:[{buttonValue:!1,text:"Nein"},{buttonValue:!0,text:"Ja"}],"model-value":i.autolock.wait_for_charging_end,"onUpdate:modelValue":n=>t.updateState(s,n,"autolock.wait_for_charging_end")},{help:o(()=>[...e[32]||(e[32]=[r(' Wenn ein Zeitplan die automatische Sperre aktiviert, werden alle Ladepunkte direkt gesperrt und laufende Ladevorgänge beendet. Wird hier "Ja" ausgewählt, dann werden laufende Ladevorgänge NICHT beendet und diese Ladepunkte erst nach abgeschlossener Ladung gesperrt. ')])]),_:2},1032,["model-value","onUpdate:modelValue"]),a(B,null,{actions:o(()=>[a(L,{class:"bg-success clickable",onClick:n=>u.addChargePointTemplateAutolockPlan(s,n)},{default:o(()=>[a(_,{"fixed-width":"",icon:["fas","plus"]})]),_:2},1032,["onClick"])]),default:o(()=>[e[33]||(e[33]=r(" Zeitpläne für die automatische Sperre "))]),_:2},1024)])),(l(!0),p(A,null,U(u.getChargePointTemplateAutolockPlans(s),(n,v)=>(l(),f(x,{key:v,title:n.name,collapsible:!0,collapsed:!0},{actions:o(b=>[b.collapsed==!0?(l(),p("span",{key:0,class:ae(["subheader pill clickable",n.active?"bg-success":"bg-danger"]),onClick:oe(W=>t.updateState(v,!n.active,"active"),["stop"])},[a(_,{"fixed-width":"",icon:["fas","clock"]}),r(" "+w(n.time[0])+" - "+w(n.time[1])+" ",1),n.frequency.selected=="once"?(l(),p("span",Te,[a(_,{"fixed-width":"",icon:["fas","calendar-day"]}),r(" "+w(t.formatDate(n.frequency.once[0])==t.formatDate(n.frequency.once[1])?t.formatDate(n.frequency.once[0]):t.formatDate(n.frequency.once[0])+" - "+t.formatDate(n.frequency.once[1])),1)])):g("",!0),n.frequency.selected=="daily"?(l(),p("span",De,[a(_,{"fixed-width":"",icon:["fas","calendar-week"]})])):g("",!0),n.frequency.selected=="weekly"?(l(),p("span",ze,[a(_,{"fixed-width":"",icon:["fas","calendar-alt"]})])):g("",!0)],10,Ie)):g("",!0),b.collapsed==!1?(l(),f(L,{key:1,class:"bg-danger clickable",onClick:W=>u.removeChargePointTemplateAutolockPlanModal(s,v,W)},{default:o(()=>[a(_,{"fixed-width":"",icon:["fas","trash"]})]),_:2},1032,["onClick"])):g("",!0)]),default:o(()=>[a(y,{title:"Bezeichnung","model-value":n.name,"onUpdate:modelValue":b=>t.updateState(v,b,"name")},null,8,["model-value","onUpdate:modelValue"]),a(C,{title:"Zeitplan aktiv",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":n.active,"onUpdate:modelValue":b=>t.updateState(v,b,"active")},null,8,["model-value","onUpdate:modelValue"]),a(y,{title:"Sperren um",subtype:"time","model-value":n.time[0],"onUpdate:modelValue":b=>t.updateState(v,b,"time.0")},null,8,["model-value","onUpdate:modelValue"]),a(y,{title:"Freigeben um",subtype:"time","model-value":n.time[1],"onUpdate:modelValue":b=>t.updateState(v,b,"time.1")},null,8,["model-value","onUpdate:modelValue"]),a(C,{title:"Wiederholungen",buttons:[{buttonValue:"once",text:"Einmalig",class:"btn-outline-info"},{buttonValue:"daily",text:"Täglich",class:"btn-outline-info"},{buttonValue:"weekly",text:"Wöchentlich",class:"btn-outline-info"}],"model-value":n.frequency.selected,"onUpdate:modelValue":b=>t.updateState(v,b,"frequency.selected")},null,8,["model-value","onUpdate:modelValue"]),n.frequency.selected=="once"?(l(),f(y,{key:0,title:"Sperren ab ...",subtype:"date","model-value":n.frequency.once[0],"onUpdate:modelValue":b=>t.updateState(v,b,"frequency.once.0")},null,8,["model-value","onUpdate:modelValue"])):g("",!0),n.frequency.selected=="once"?(l(),f(y,{key:1,title:"... bis",subtype:"date",min:n.frequency.once[0],"model-value":n.frequency.once[1],"onUpdate:modelValue":b=>t.updateState(v,b,"frequency.once.1")},null,8,["min","model-value","onUpdate:modelValue"])):g("",!0),n.frequency.selected=="weekly"?(l(),p("div",Ee,[(l(!0),p(A,null,U(t.weekdays,(b,W)=>(l(),f(C,{key:W,title:b,buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":n.frequency.weekly[W],"onUpdate:modelValue":R=>t.updateState(v,R,"frequency.weekly."+W)},null,8,["title","model-value","onUpdate:modelValue"]))),128))])):g("",!0)]),_:2},1032,["title"]))),128))]),_:2},[s.endsWith("/0")?void 0:{name:"actions",fn:o(n=>[n.collapsed?g("",!0):(l(),f(L,{key:0,class:"bg-danger clickable",onClick:v=>u.removeChargePointTemplateModal(s,v)},{default:o(()=>[a(_,{"fixed-width":"",icon:["fas","trash"]})]),_:2},1032,["onClick"]))]),key:"0"}]),1032,["title"]))),128))]))]),_:1}),a(j,{"form-name":"chargePointInstallationForm",onSave:e[4]||(e[4]=i=>t.$emit("save")),onReset:e[5]||(e[5]=i=>t.$emit("reset")),onDefaults:e[6]||(e[6]=i=>t.$emit("defaults"))})])])],64)}const Me=S(ke,[["render",qe],["__scopeId","data-v-75fe5743"],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/ChargePointInstallation.vue"]]),je=Object.freeze(Object.defineProperty({__proto__:null,default:Me},Symbol.toStringTag,{value:"Module"}));export{ie as C,ge as a,Me as b,je as c};
