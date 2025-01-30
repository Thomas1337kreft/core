import{l as J,a2 as X,a3 as Q,F,Y,K as ee,z as te,ab as ne,ac as oe,ad as ae}from"./vendor-fortawesome-231ff303.js";import{_ as L,C as re}from"./index-8a28b331.js";import{_ as j}from"./dynamic-import-helper-be004503.js";import{_ as h,u as b,l,m as d,z as v,E as o,y as a,F as c,G as n,x as s,a1 as M,a2 as I,N as G,B as _}from"./vendor-0c15df0c.js";const ie={props:{webTheme:{type:Object,required:!0}},emits:["update:configuration"],methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},le=h(ie,[["__file","/opt/openWB-dev/openwb-ui-settings/src/components/web_themes/WebThemeConfigMixin.vue"]]),se={name:"WebThemeFallback",mixins:[le]},ue={class:"web-theme-fallback"},de={key:1};function pe(t,e,p,B,y,m){const g=b("openwb-base-alert"),r=b("openwb-base-textarea");return l(),d("div",ue,[Object.keys(t.webTheme.configuration).length==0?(l(),v(g,{key:0,subtype:"info"},{default:o(()=>[a(' Das Web Theme "'+c(t.webTheme.name)+'" bietet keine Einstellungen. ',1)]),_:1})):(l(),d("div",de,[n(g,{subtype:"warning"},{default:o(()=>[a(' Es wurde keine Konfigurationsseite für das Web Theme "'+c(t.webTheme.name)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(r,{title:"Theme Konfiguration",subtype:"json","model-value":t.webTheme.configuration,"onUpdate:modelValue":e[0]||(e[0]=w=>t.updateConfiguration(w,"configuration"))},{help:o(()=>e[1]||(e[1]=[a(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")])),_:1},8,["model-value"]),n(g,{subtype:"info"},{default:o(()=>[s("pre",null,c(JSON.stringify(t.webTheme.configuration,void 0,2)),1)]),_:1})]))])}const ge=h(se,[["render",pe],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/web_themes/OpenwbWebThemeFallback.vue"]]);J.add(X,Q);const me={name:"OpenwbWebThemeProxy",components:{FontAwesomeIcon:F},props:{webTheme:{type:Object,required:!0}},emits:["update:configuration"],computed:{myComponent(){return console.debug(`loading web theme: ${this.webTheme.name} (${this.webTheme.type})`),M({loader:()=>j(Object.assign({}),`./${this.webTheme.type}/webTheme.vue`),errorComponent:ge})}},methods:{updateConfiguration(t){this.$emit("update:configuration",t)}}};function be(t,e,p,B,y,m){const g=b("font-awesome-icon"),r=b("openwb-base-alert"),w=b("openwb-base-heading");return l(),d(G,null,[p.webTheme.official?(l(),v(r,{key:0,subtype:"success"},{default:o(()=>[n(g,{"fixed-width":"",icon:["fas","certificate"]}),a(' Das ausgewählte Web Theme "'+c(p.webTheme.name)+'" wird von openWB gepflegt. ',1)]),_:1})):(l(),v(r,{key:1,subtype:"info"},{default:o(()=>[n(g,{"fixed-width":"",icon:["fas","people-group"]}),e[1]||(e[1]=a(" Das ausgewählte Theme wird in unserer Community gepflegt. Rückfragen oder Probleme bitte im Forum diskutieren. "))]),_:1})),n(w,null,{default:o(()=>[a(' Einstellungen für Web Theme "'+c(p.webTheme.name)+'" ',1)]),_:1}),(l(),v(I(m.myComponent),{"web-theme":p.webTheme,"onUpdate:configuration":e[0]||(e[0]=W=>m.updateConfiguration(W))},null,40,["web-theme"]))],64)}const fe=h(me,[["render",be],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/web_themes/OpenwbWebThemeProxy.vue"]]),ce={props:{rippleControlReceiver:{type:Object,required:!0}},emits:["update:configuration"],methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},_e=h(ce,[["__file","/opt/openWB-dev/openwb-ui-settings/src/components/ripple_control_receivers/RippleControlReceiverConfigMixin.vue"]]),ve={name:"RippleControlReceiverConfigFallback",mixins:[_e]},we={class:"ripple-control-receiver-fallback"},he={key:1};function We(t,e,p,B,y,m){const g=b("openwb-base-alert"),r=b("openwb-base-textarea");return l(),d("div",we,[Object.keys(t.rippleControlReceiver.configuration).length==0?(l(),v(g,{key:0,subtype:"info"},{default:o(()=>[a(' Das RSE-Modul "'+c(t.rippleControlReceiver.name)+'" bietet keine Einstellungen. ',1)]),_:1})):(l(),d("div",he,[n(g,{subtype:"warning"},{default:o(()=>[a(' Es wurde keine Konfigurationsseite für das RSE-Modul "'+c(t.rippleControlReceiver.name)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(r,{title:"Konfiguration",subtype:"json","model-value":t.rippleControlReceiver.configuration,"onUpdate:modelValue":e[0]||(e[0]=w=>t.updateConfiguration(w,"configuration"))},{help:o(()=>e[1]||(e[1]=[a(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")])),_:1},8,["model-value"]),n(g,{subtype:"info"},{default:o(()=>[s("pre",null,c(JSON.stringify(t.rippleControlReceiver.configuration,void 0,2)),1)]),_:1})]))])}const Be=h(ve,[["render",We],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/ripple_control_receivers/OpenwbRippleControlReceiverConfigFallback.vue"]]),ye={name:"OpenwbRippleControlReceiverProxy",props:{rippleControlReceiver:{type:Object,required:!0}},emits:["update:configuration","sendCommand"],computed:{myComponent(){return console.debug(`loading ripple control receiver: ${this.rippleControlReceiver.name} (${this.rippleControlReceiver.type})`),M({loader:()=>j(Object.assign({"./dimm_kit/ripple_control_receiver.vue":()=>L(()=>import("./ripple_control_receiver-f1d976fb.js"),["assets/ripple_control_receiver-f1d976fb.js","assets/vendor-0c15df0c.js","assets/vendor-sortablejs-1a751103.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-231ff303.js","assets/index-8a28b331.js","assets/vendor-bootstrap-83e2d5a1.js","assets/vendor-jquery-84e2bf4a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-c9d2afa0.js","assets/index-932929b9.css","assets/dynamic-import-helper-be004503.js"]),"./gpio/ripple_control_receiver.vue":()=>L(()=>import("./ripple_control_receiver-71f6915a.js"),["assets/ripple_control_receiver-71f6915a.js","assets/vendor-0c15df0c.js","assets/vendor-sortablejs-1a751103.js","assets/vendor-aab9f734.css","assets/vendor-fortawesome-231ff303.js","assets/index-8a28b331.js","assets/vendor-bootstrap-83e2d5a1.js","assets/vendor-jquery-84e2bf4a.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-c9d2afa0.js","assets/index-932929b9.css","assets/dynamic-import-helper-be004503.js"])}),`./${this.rippleControlReceiver.type}/ripple_control_receiver.vue`),errorComponent:Be})}},methods:{updateConfiguration(t){this.$emit("update:configuration",t)},sendCommand(t){this.$emit("sendCommand",t)}}};function Se(t,e,p,B,y,m){const g=b("openwb-base-heading");return l(),d(G,null,[n(g,null,{default:o(()=>[a(' Einstellungen für RSE-Modul "'+c(p.rippleControlReceiver.name)+'" ',1)]),_:1}),(l(),v(I(m.myComponent),{"ripple-control-receiver":p.rippleControlReceiver,"onUpdate:configuration":e[0]||(e[0]=r=>m.updateConfiguration(r)),onSendCommand:e[1]||(e[1]=r=>m.sendCommand(r))},null,40,["ripple-control-receiver"]))],64)}const ke=h(ye,[["render",Se],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/ripple_control_receivers/OpenwbRippleControlReceiverProxy.vue"]]);J.add(Y,ee,te,ne,oe,ae);const Ve={name:"OpenwbGeneralConfigView",components:{OpenwbWebThemeProxy:fe,OpenwbRippleControlReceiverProxy:ke,FontAwesomeIcon:F},mixins:[re],props:{installAssistantActive:{type:Boolean,required:!1,default:!1}},emits:["save","reset","defaults"],data(){return{mqttTopicsToSubscribe:["openWB/general/charge_log_data_config","openWB/general/control_interval","openWB/general/extern","openWB/general/external_buttons_hw","openWB/general/grid_protection_configured","openWB/general/http_api","openWB/general/modbus_control","openWB/general/notifications/configuration","openWB/general/notifications/plug","openWB/general/notifications/selected","openWB/general/notifications/smart_home","openWB/general/notifications/start_charging","openWB/general/notifications/stop_charging","openWB/general/price_kwh","openWB/general/range_unit","openWB/general/ripple_control_receiver/module","openWB/general/web_theme","openWB/system/configurable/ripple_control_receivers","openWB/system/configurable/web_themes","openWB/system/ip_address"]}},computed:{webThemeList:{get(){return this.$store.state.mqtt["openWB/system/configurable/web_themes"]}},webThemeGroupList:{get(){let t=[{label:"openWB",options:[]},{label:"Community",options:[]}];return this.webThemeList.forEach(e=>{e.official===!0?t[0].options.push(e):t[1].options.push(e)}),t}},rippleControlReceiverList(){return this.$store.state.mqtt["openWB/system/configurable/ripple_control_receivers"]}},methods:{getIpAddress(){return this.$store.state.mqtt["openWB/system/ip_address"]},getWebThemeDefaults(t){const e=this.webThemeList.find(p=>p.value==t);return Object.prototype.hasOwnProperty.call(e,"defaults")?{...JSON.parse(JSON.stringify(e.defaults))}:(console.warn("no default configuration found for web theme type!",t),{})},updateSelectedWebTheme(t){this.updateState("openWB/general/web_theme",this.getWebThemeDefaults(t))},updateConfiguration(t,e){console.debug("updateConfiguration",t,e),this.updateState(t,e.value,e.object)},getRippleControlReceiverDefaultConfiguration(t){const e=this.rippleControlReceiverList.find(p=>p.value==t);return Object.prototype.hasOwnProperty.call(e,"defaults")?{...e.defaults}:(console.warn("no default configuration found for electricity tariff type!",t),{})},updateSelectedRippleControlReceiverModule(t){this.updateState("openWB/general/ripple_control_receiver/module",t,"type"),this.updateState("openWB/general/ripple_control_receiver/module",this.getRippleControlReceiverDefaultConfiguration(t))}}},Ce={class:"generalConfig"},$e={name:"generalConfigForm"},Re={key:0},Te={key:1},qe={key:1},ze={class:"border border-info w-100 p-1"},Oe={class:"border border-info w-100 p-1"},De={key:0},Ee={key:1},Ne={key:0},Ae={key:2},Pe={key:0},xe={key:0},Ue={key:1},Le={key:0},Je={key:0},Fe={key:1};function je(t,e,p,B,y,m){const g=b("openwb-base-alert"),r=b("openwb-base-button-group-input"),w=b("openwb-base-copy-to-clipboard"),W=b("openwb-base-card"),S=b("openwb-base-heading"),k=b("openwb-base-select-input"),K=b("openwb-ripple-control-receiver-proxy"),H=b("openwb-web-theme-proxy"),f=b("font-awesome-icon"),Z=b("openwb-base-submit-buttons");return l(),d("div",Ce,[s("form",$e,[n(W,{title:"Steuerungsmodus"},{default:o(()=>[n(g,{subtype:"info"},{default:o(()=>e[29]||(e[29]=[s("p",null,' Wird für den Steuerungsmodus "primary" gewählt, übernimmt diese openWB die alleinige Regelung und steuert ggf. vorhandene weitere openWB (z.B. secondary openWB, openWB Pro, Satellit u.a.) fern. Sie werden in den Ladepunkt-Einstellungen der primary-openWB hinzugefügt. ',-1),s("p",null,[a(' Wird für den Steuerungsmodus "secondary" gewählt, übernimmt diese openWB keine Regelung und muss von einer anderen primary openWB ferngesteuert werden. Wichtig ist, dass in der secondary-openWB eine "interne openWB" mit der korrekten Bauart (= openWB-Hardwarevariante z.B. "Custom, Standard, Standard+, Duo, Buchse") konfiguriert ist. Bei einer Duo sind zwei "interne openWB" zu konfigurieren. Im "secondary"-Modus bleiben alle ausgeblendeten Einstellungen unbeachtet.'),s("br"),a(" Eine bebilderte Anleitung zur Konfiguration der Ladepunkte findest Du auf der "),s("a",{href:"https://openwb.de/main/?page_id=1025",target:"_blank",rel:"noopener noreferrer"}," Homepage "),a(". ")],-1)])),_:1}),n(r,{title:"Steuerungsmodus",buttons:[{buttonValue:!1,text:"primary",class:"btn-outline-danger"},{buttonValue:!0,text:"secondary",class:"btn-outline-success"}],"model-value":t.$store.state.mqtt["openWB/general/extern"],"onUpdate:modelValue":e[0]||(e[0]=u=>t.updateState("openWB/general/extern",u))},null,8,["model-value"]),p.installAssistantActive?_("",!0):(l(),d("div",Re,[t.$store.state.mqtt["openWB/general/extern"]===!0?(l(),v(r,{key:0,title:"Steuerung über Modbus als secondary",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":t.$store.state.mqtt["openWB/general/modbus_control"],"onUpdate:modelValue":e[1]||(e[1]=u=>t.updateState("openWB/general/modbus_control",u))},{help:o(()=>e[30]||(e[30]=[a(" Im secondary-Modus kann die openWB über die Modbus-Schnittstelle gesteuert werden. Die Register sind "),s("a",{href:"https://openwb.de/main/wp-content/uploads/2023/10/ModbusTCP-openWB-series2-Pro-1.pdf",target:"_blank",rel:"noopener noreferrer"}," hier ",-1),a(" dokumentiert. Bei aktivierter Modbus-Schnittstelle darf die openWB nicht von einer primary-openWB gesteuert werden. ")])),_:1},8,["model-value"])):_("",!0),t.$store.state.mqtt["openWB/general/extern"]===!0&&t.$store.state.mqtt["openWB/general/modbus_control"]!==!0?(l(),d("div",Te,[n(g,{subtype:"info",class:"mb-2"},{default:o(()=>e[31]||(e[31]=[a(' Wenn die Steuerung über Modbus auf "Aus" geändert wird, muss danach ein Neustart durchgeführt werden! ')])),_:1})])):_("",!0)])),p.installAssistantActive?_("",!0):(l(),d("div",qe,[n(r,{title:"HTTP-API",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":t.$store.state.mqtt["openWB/general/http_api"],"onUpdate:modelValue":e[2]||(e[2]=u=>t.updateState("openWB/general/http_api",u))},{help:o(()=>[e[38]||(e[38]=s("p",null," Mit der HTTP-API kann man den Wert eines MQTT-Topics per HTTPs (Port 8443) abfragen oder neu setzen. Topics können über GET oder POST abgefragt, neue Werte nur mit POST gesetzt werden. ",-1)),e[39]||(e[39]=s("p",null,"Beispiel 1: Abfrage des aktuellen Systemzeitstempels",-1)),s("ul",null,[s("li",null,[e[32]||(e[32]=a(" GET-Request:")),e[33]||(e[33]=s("br",null,null,-1)),n(w,{class:"text-info",tooltip:"URL kopieren"},{default:o(()=>[a(" https://"+c(m.getIpAddress())+":8443/v1/?topic=openWB/system/time ",1)]),_:1})]),s("li",null,[e[34]||(e[34]=a(" POST-Request über 'curl' mit privatem SSL-Zertifikat und Verarbeitung durch 'jq':")),e[35]||(e[35]=s("br",null,null,-1)),n(w,{class:"text-info",tooltip:"Befehl kopieren"},{default:o(()=>[a(` curl -k -s -X POST --data '{"topic":"openWB/system/time"}' https://`+c(m.getIpAddress())+":8443/v1/ | jq . ",1)]),_:1})])]),e[40]||(e[40]=s("p",null,"Die zurückgegebenen Daten sind im JSON-Format. Der Inhalt ist nach folgendem Schema aufgebaut:",-1)),s("pre",ze,c(JSON.stringify({status:"success",topic:"openWB/system/time",message:1721287000646975e-6},null,4)),1),e[41]||(e[41]=s("p",null,'Im Fehlerfall wird der Status auf "failed" gesetzt und eine Fehlermeldung zurückgegeben.',-1)),e[42]||(e[42]=s("p",null,"Beispiel 2: integriertes Display abschalten",-1)),s("ul",null,[s("li",null,[e[36]||(e[36]=a(" POST-Request über 'curl' mit privatem SSL-Zertifikat und Verarbeitung durch 'jq':")),e[37]||(e[37]=s("br",null,null,-1)),n(w,{class:"text-info",tooltip:"Befehl kopieren"},{default:o(()=>[a(` curl -k -s -X POST --data '{"topic": "openWB/set/optional/int_display/active", "message": false}' https://`+c(m.getIpAddress())+":8443/v1/ | jq . ",1)]),_:1})])]),e[43]||(e[43]=s("p",null,"Die zurückgegebenen Daten sind im JSON-Format. Der Inhalt ist nach folgendem Schema aufgebaut:",-1)),s("pre",Oe,c(JSON.stringify({status:"success",topic:"openWB/set/optional/int_display/active",message:!1},null,4)),1)]),_:1},8,["model-value"])]))]),_:1}),n(W,{title:"Hardware"},{default:o(()=>[t.$store.state.mqtt["openWB/general/extern"]===!0?(l(),d("div",De,[n(g,{subtype:"info"},{default:o(()=>e[44]||(e[44]=[a(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')])),_:1})])):_("",!0),p.installAssistantActive?_("",!0):(l(),d("div",Ee,[t.$store.state.mqtt["openWB/general/extern"]===!1?(l(),d("div",Ne,[n(r,{title:"Geschwindigkeit Regelintervall",buttons:[{buttonValue:10,text:"Normal",class:"btn-outline-success"},{buttonValue:20,text:"Langsam",class:"btn-outline-warning"},{buttonValue:60,text:"Sehr Langsam",class:"btn-outline-danger"}],"model-value":t.$store.state.mqtt["openWB/general/control_interval"],"onUpdate:modelValue":e[3]||(e[3]=u=>t.updateState("openWB/general/control_interval",u))},{help:o(()=>e[45]||(e[45]=[a(' Sollten Probleme oder Fehlermeldungen auftauchen, stelle bitte zunächst das Regelintervall auf "Normal". Werden Module genutzt, welche z.B. eine Online-API zur Abfrage nutzen (höhere Latenzzeiten) oder möchte man weniger Regeleingriffe, so kann man das Regelintervall auf "Langsam" (20 Sekunden) herabsetzen. Die Einstellung „Sehr Langsam“ führt zu einer Regelzeit von 60 Sekunden.'),s("br",null,null,-1),s("span",{class:"text-danger"},' Nicht nur die Regelung der PV geführten Ladung, sondern auch die Ladestromänderung, beispielsweise “Stop“ etc., werden dann nur noch in diesem Intervall ausgeführt. Die Regelung wird insgesamt träger. Solange es keinen triftigen Grund gibt, sollte "Normal" gewählt werden. ',-1)])),_:1},8,["model-value"]),n(r,{title:"Netzschutz",buttons:[{buttonValue:!1,text:"Aus",class:"btn-outline-danger"},{buttonValue:!0,text:"An",class:"btn-outline-success"}],"model-value":t.$store.state.mqtt["openWB/general/grid_protection_configured"],"onUpdate:modelValue":e[4]||(e[4]=u=>t.updateState("openWB/general/grid_protection_configured",u))},{help:o(()=>e[46]||(e[46]=[a(' Diese Option ist standardmäßig aktiviert und sollte so belassen werden. Bei Unterschreitung einer kritischen Frequenz des Stromnetzes wird die Ladung nach einer zufälligen Zeit zwischen 1 und 90 Sekunden pausiert. Der Lademodus wechselt auf "Stop". Sobald die Frequenz wieder in einem normalen Bereich ist wird automatisch der zuletzt gewählte Lademodus wieder aktiviert. Ebenso wird die Ladung bei Überschreiten von 51,8 Hz unterbrochen. Dies ist dann der Fall, wenn der Energieversorger Wartungsarbeiten am (Teil-)Netz durchführt und auf einen vorübergehenden Generator-Betrieb umschaltet. Die Erhöhung der Frequenz wird durchgeführt, um die PV Anlagen abzuschalten.'),s("br",null,null,-1),s("span",{class:"text-danger"}," Die Option ist nur aktiv, wenn der EVU-Zähler die Frequenz übermittelt. ",-1)])),_:1},8,["model-value"])])):_("",!0),e[47]||(e[47]=s("hr",null,null,-1))])),t.$store.state.mqtt["openWB/general/extern"]===!1?(l(),d("div",Ae,[n(S,{class:"mt-0"},{default:o(()=>e[48]||(e[48]=[a(" Steuerbare Verbrauchseinrichtung ")])),_:1}),n(g,{sub_type:"info"},{default:o(()=>e[49]||(e[49]=[a(' Aktuell unterstützt openWB die eingehende Steuerung als "Steuerbare Verbrauchseinrichtung" nur über potentialfreie Kontakte (Rundsteuerempfänger, RSE). Ebenfalls können derzeit bei Auslösung des RSE nur alle Ladevorgänge komplett beendet werden. Die Unterstützung von "Dimmung" im Sinne von §14a EnWG wird umgesetzt, sobald wir weitere Informationen von den Netzbetreibern erhalten, wie die Ansteuerung technisch umgesetzt wird. ')])),_:1}),n(k,{class:"mb-2",title:"Anbindung RSE-Kontakt",options:m.rippleControlReceiverList,"model-value":t.$store.state.mqtt["openWB/general/ripple_control_receiver/module"]?t.$store.state.mqtt["openWB/general/ripple_control_receiver/module"].type:"","onUpdate:modelValue":e[5]||(e[5]=u=>m.updateSelectedRippleControlReceiverModule(u))},null,8,["options","model-value"]),t.$store.state.mqtt["openWB/general/ripple_control_receiver/module"]&&t.$store.state.mqtt["openWB/general/ripple_control_receiver/module"].type?(l(),d("div",Pe,[n(K,{"ripple-control-receiver":t.$store.state.mqtt["openWB/general/ripple_control_receiver/module"],"onUpdate:configuration":e[6]||(e[6]=u=>m.updateConfiguration("openWB/general/ripple_control_receiver/module",u))},null,8,["ripple-control-receiver"])])):_("",!0)])):_("",!0)]),_:1}),p.installAssistantActive?_("",!0):(l(),v(W,{key:0,title:"Darstellung"},{default:o(()=>[t.$store.state.mqtt["openWB/general/extern"]===!0?(l(),d("div",xe,[n(g,{subtype:"info"},{default:o(()=>e[50]||(e[50]=[a(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')])),_:1})])):(l(),d("div",Ue,[n(S,{class:"mt-0"},{default:o(()=>e[51]||(e[51]=[a(" Hauptseite ")])),_:1}),t.$store.state.mqtt["openWB/general/web_theme"]!==void 0?(l(),d("div",Le,[n(k,{class:"mb-2",title:"Theme",groups:m.webThemeGroupList,"model-value":t.$store.state.mqtt["openWB/general/web_theme"].type,"onUpdate:modelValue":e[7]||(e[7]=u=>m.updateSelectedWebTheme(u))},null,8,["groups","model-value"]),t.$store.state.mqtt["openWB/general/web_theme"].type?(l(),v(H,{key:0,"web-theme":t.$store.state.mqtt["openWB/general/web_theme"],"onUpdate:configuration":e[8]||(e[8]=u=>m.updateConfiguration("openWB/general/web_theme",u))},null,8,["web-theme"])):_("",!0)])):_("",!0)]))]),_:1})),p.installAssistantActive?_("",!0):(l(),v(W,{key:1,title:"Lade-Protokoll"},{default:o(()=>{var u,V,C,$,R,T,q,z,O,D,E,N,A,P,x,U;return[t.$store.state.mqtt["openWB/general/extern"]===!0?(l(),d("div",Je,[n(g,{subtype:"info"},{default:o(()=>e[52]||(e[52]=[a(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')])),_:1})])):(l(),d("div",Fe,[n(r,{title:"Einheit für Entfernungen","model-value":t.$store.state.mqtt["openWB/general/range_unit"],buttons:[{buttonValue:"km",text:"Kilometer"},{buttonValue:"mi",text:"Meilen"}],"onUpdate:modelValue":e[9]||(e[9]=i=>t.updateState("openWB/general/range_unit",i))},null,8,["model-value"]),n(S,null,{default:o(()=>e[53]||(e[53]=[a(" Auswahl der Datenfelder ")])),_:1}),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(u=t.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:u.time_begin,"onUpdate:modelValue":e[10]||(e[10]=i=>t.updateState("openWB/general/charge_log_data_config",i,"time_begin"))},{title:o(()=>[n(f,{"fixed-width":"",icon:["fas","calendar"]}),e[54]||(e[54]=a(" Beginn "))]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(V=t.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:V.time_end,"onUpdate:modelValue":e[11]||(e[11]=i=>t.updateState("openWB/general/charge_log_data_config",i,"time_end"))},{title:o(()=>[n(f,{"fixed-width":"",icon:["fas","calendar"]}),e[55]||(e[55]=a(" Ende "))]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(C=t.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:C.time_time_charged,"onUpdate:modelValue":e[12]||(e[12]=i=>t.updateState("openWB/general/charge_log_data_config",i,"time_time_charged"))},{title:o(()=>[n(f,{"fixed-width":"",icon:["fas","clock"]}),e[56]||(e[56]=a(" Dauer "))]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":($=t.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:$.data_costs,"onUpdate:modelValue":e[13]||(e[13]=i=>t.updateState("openWB/general/charge_log_data_config",i,"data_costs"))},{title:o(()=>[n(f,{"fixed-width":"",icon:["fas","coins"]}),e[57]||(e[57]=a(" Kosten "))]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(R=t.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:R.data_power_source,"onUpdate:modelValue":e[14]||(e[14]=i=>t.updateState("openWB/general/charge_log_data_config",i,"data_power_source"))},{title:o(()=>[n(f,{"fixed-width":"",icon:["fas","pie-chart"]}),e[58]||(e[58]=a(" Energieaufteilung "))]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(T=t.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:T.vehicle_name,"onUpdate:modelValue":e[15]||(e[15]=i=>t.updateState("openWB/general/charge_log_data_config",i,"vehicle_name"))},{title:o(()=>[n(f,{"fixed-width":"",icon:["fas","car"]}),e[59]||(e[59]=a(" Name "))]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(q=t.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:q.vehicle_chargemode,"onUpdate:modelValue":e[16]||(e[16]=i=>t.updateState("openWB/general/charge_log_data_config",i,"vehicle_chargemode"))},{title:o(()=>[n(f,{"fixed-width":"",icon:["fas","car"]}),e[60]||(e[60]=a(" Lademodus "))]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(z=t.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:z.vehicle_prio,"onUpdate:modelValue":e[17]||(e[17]=i=>t.updateState("openWB/general/charge_log_data_config",i,"vehicle_prio"))},{title:o(()=>[n(f,{"fixed-width":"",icon:["fas","car"]}),e[61]||(e[61]=a(" Priorität "))]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(O=t.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:O.vehicle_rfid,"onUpdate:modelValue":e[18]||(e[18]=i=>t.updateState("openWB/general/charge_log_data_config",i,"vehicle_rfid"))},{title:o(()=>[n(f,{"fixed-width":"",icon:["fas","car"]}),e[62]||(e[62]=a(" ID-Tag "))]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(D=t.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:D.vehicle_soc_at_start,"onUpdate:modelValue":e[19]||(e[19]=i=>t.updateState("openWB/general/charge_log_data_config",i,"vehicle_soc_at_start"))},{title:o(()=>[n(f,{"fixed-width":"",icon:["fas","car"]}),e[63]||(e[63]=a(" SoC bei Ladebeginn "))]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(E=t.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:E.vehicle_soc_at_end,"onUpdate:modelValue":e[20]||(e[20]=i=>t.updateState("openWB/general/charge_log_data_config",i,"vehicle_soc_at_end"))},{title:o(()=>[n(f,{"fixed-width":"",icon:["fas","car"]}),e[64]||(e[64]=a(" SoC bei Ladende "))]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(N=t.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:N.chargepoint_name,"onUpdate:modelValue":e[21]||(e[21]=i=>t.updateState("openWB/general/charge_log_data_config",i,"chargepoint_name"))},{title:o(()=>[n(f,{"fixed-width":"",icon:["fas","charging-station"]}),e[65]||(e[65]=a(" Name "))]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(A=t.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:A.chargepoint_serial_number,"onUpdate:modelValue":e[22]||(e[22]=i=>t.updateState("openWB/general/charge_log_data_config",i,"chargepoint_serial_number"))},{title:o(()=>[n(f,{"fixed-width":"",icon:["fas","charging-station"]}),e[66]||(e[66]=a(" Seriennummer "))]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(P=t.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:P.data_imported_since_mode_switch,"onUpdate:modelValue":e[23]||(e[23]=i=>t.updateState("openWB/general/charge_log_data_config",i,"data_imported_since_mode_switch"))},{title:o(()=>[n(f,{"fixed-width":"",icon:["fas","charging-station"]}),e[67]||(e[67]=a(" Geladene Energie "))]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(x=t.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:x.chargepoint_imported_at_start,"onUpdate:modelValue":e[24]||(e[24]=i=>t.updateState("openWB/general/charge_log_data_config",i,"chargepoint_imported_at_start"))},{title:o(()=>[n(f,{"fixed-width":"",icon:["fas","charging-station"]}),e[68]||(e[68]=a(" Zählerstand bei Ladebeginn "))]),_:1},8,["model-value"]),n(r,{buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(U=t.$store.state.mqtt["openWB/general/charge_log_data_config"])==null?void 0:U.chargepoint_imported_at_end,"onUpdate:modelValue":e[25]||(e[25]=i=>t.updateState("openWB/general/charge_log_data_config",i,"chargepoint_imported_at_end"))},{title:o(()=>[n(f,{"fixed-width":"",icon:["fas","charging-station"]}),e[69]||(e[69]=a(" Zählerstand bei Ladeende "))]),_:1},8,["model-value"])]))]}),_:1})),n(Z,{"form-name":"generalConfigForm",onSave:e[26]||(e[26]=u=>t.$emit("save")),onReset:e[27]||(e[27]=u=>t.$emit("reset")),onDefaults:e[28]||(e[28]=u=>t.$emit("defaults"))})])])}const Me=h(Ve,[["render",je],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/GeneralConfig.vue"]]),Ze=Object.freeze(Object.defineProperty({__proto__:null,default:Me},Symbol.toStringTag,{value:"Module"}));export{Me as G,_e as R,Ze as a};
