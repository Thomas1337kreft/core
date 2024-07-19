import{C as l}from"./index-5fe069a6.js";import u from"./InstallAssistantStepTemplate-65da117a.js";import p from"./ChargePointInstallation-34d5cb5d.js";import{_ as m,q as a,k as h,z as g,M as r,B as c,u as n}from"./vendor-b3afda6d.js";import"./vendor-fortawesome-b013cb5c.js";import"./vendor-bootstrap-37731caa.js";import"./vendor-jquery-2371184a.js";import"./vendor-axios-dc7988e3.js";import"./vendor-sortablejs-806a0b5c.js";import"./dynamic-import-helper-be004503.js";const w={name:"InstallAssistantStep6",mixins:[l],emits:["save","reset","defaults","sendCommand","switchPage","endAssistant"],components:{InstallAssistantStepTemplate:u,ChargePointInstallationView:p},data:()=>({mqttTopicsToSubscribe:[]}),methods:{nextPage(){this.$emit("switchPage",7)},previousPage(){this.$emit("switchPage",5)},endAssistant(){this.$emit("endAssistant")}}},P=n("p",null,' Enthält die steuernde openWB (primary) Ladetechnik, wird bei "Verfügbare Ladepunkte" Interne openWB ausgewählt. Weitere LP werden im primary als Externe openWB (als secondary konfigurierte openWB) oder andere WB-Typen wie Pro, Satellit eingebunden. ',-1),f=n("p",null," Bei openWBs ab Werk kann hier bereits ein Ladepunkt eingetragen sein. ",-1),k=n("p",null," Nachfolgend werden die Eigenschaften des Ladepunktes wie IP-Adresse und elektrischer Anschluss definiert. Die meisten openWB werden 3-phasig angeschlossen! Bei mehreren openWB's ist auf phasenrotierten Anschluss der openWB-Zuleitung zu achten! Abschließend wird die korrekte Zuordnung der Phase 1 des Ladekabels zur zugehörigen EVU-Zählerphase konfiguriert. Dies ist sehr wichtig, um optimales Lastmanagement sicherzustellen! ",-1),b=n("p",null," Tipp zur Zuordnung: Verwende ein nur 1-phasig ladendes Auto (z.B. Hybrid) oder stelle bei openWB mit 1p3p-Phasenumschaltung temporär unter Sofortladen (s. Einstellungen -> Ladeeinstellungen) auf einphasig, um eine 1-phasige Ladung zu erzwingen. Gehe unter Status und vergleiche die Leistungen bzw. Ströme der 3 Phasen am EVU-Zähler (rot) beim und nach dem Autoladen (Sofortladen mit 16A/ Stop). Diejenige EVU-Phase, die deutlich erhöhte Werte anzeigt, ist die auszuwählende EVU-Phase. ",-1),A=n("p",null," Im grauen Menü Ladepunkt-Profile können neben dem Standard-Ladepunkt-Profil auch weitere Ladepunkt-Profile, die andere WB-Typen abbilden, erstellt werden. Dort sind Eintragungen bzgl. des Ladepunkt-Maximalstroms bei einer Phase bzw. mehreren Phasen vorzunehmen. Die Profile werden abschließend im jeweiligen blauen Ladepunkt mittels Auswahlmenü zugeordnet. ",-1),B=n("p",{class:"font-weight-bold"}," Änderungen werden nur bei klicken auf Speichern wirksam! ",-1);function S(t,e,_,v,z,i){const o=a("ChargePointInstallationView"),d=a("InstallAssistantStepTemplate");return h(),g(d,{title:"5. Einrichten der Ladepunkte (openWB als primary)",onNextPage:i.nextPage,onPreviousPage:i.previousPage,onEndAssistant:i.endAssistant},{help:r(()=>[P,f,k,b,A,B]),content:r(()=>[c(o,{installAssistantActive:!0,onSendCommand:e[0]||(e[0]=s=>t.$emit("sendCommand",s)),onSave:e[1]||(e[1]=s=>t.$emit("save")),onReset:e[2]||(e[2]=s=>t.$emit("reset")),onDefaults:e[3]||(e[3]=s=>t.$emit("defaults"))})]),_:1},8,["onNextPage","onPreviousPage","onEndAssistant"])}const D=m(w,[["render",S],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/install_assistant/InstallAssistantStep6.vue"]]);export{D as default};
