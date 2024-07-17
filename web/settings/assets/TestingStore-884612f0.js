import{C as V}from"./index-5fe069a6.js";import{S as U}from"./OpenwbSortableList-83baffc2.js";import{_ as y,q as s,k as E,l as k,u,B as o,M as a,x as n,y as v}from"./vendor-b3afda6d.js";import"./vendor-fortawesome-b013cb5c.js";import"./vendor-bootstrap-37731caa.js";import"./vendor-jquery-2371184a.js";import"./vendor-axios-dc7988e3.js";import"./vendor-sortablejs-806a0b5c.js";const T={name:"OpenwbTestingStoreView",mixins:[V],components:{SortableList:U},data(){return{mqttTopicsToSubscribe:[]}}},_={class:"testingStore"},N={name:"testingStoreForm"},z=u("hr",null,null,-1),O=u("br",null,null,-1),Z=u("br",null,null,-1),j=u("hr",null,null,-1),B=u("hr",null,null,-1),D=u("hr",null,null,-1),J=u("hr",null,null,-1),L=u("span",{style:{"text-decoration":"underline","font-style":"italic"}},[n(" Styled "),u("span",{style:{"font-weight":"initial"}},"Header"),n(" Slot ")],-1);function W(e,t,G,R,H,A){const p=s("openwb-base-text-input"),m=s("openwb-base-number-input"),g=s("openwb-base-textarea"),i=s("openwb-base-card"),r=s("openwb-base-range-input"),b=s("openwb-base-select-input"),f=s("openwb-base-button-group-input"),S=s("openwb-base-checkbox-input"),h=s("openwb-base-array-input"),w=s("openwb-base-heading"),d=s("openwb-base-alert"),x=s("sortable-list"),$=s("openwb-base-submit-buttons");return E(),k("div",_,[u("form",N,[o(i,{title:"Einfache Eingabefelder"},{default:a(()=>[o(p,{title:"1. Text","model-value":e.$store.state.examples.text1,"onUpdate:modelValue":t[0]||(t[0]=l=>e.updateState("text1",l))},{help:a(()=>[n("Einfacher Text")]),_:1},8,["model-value"]),o(p,{title:"2. Text (E-Mail)",subtype:"email","model-value":e.$store.state.examples.text2,"onUpdate:modelValue":t[1]||(t[1]=l=>e.updateState("text2",l))},{help:a(()=>[n("Eingabefeld für E-Mailadressen")]),_:1},8,["model-value"]),o(p,{title:"3. Text (Host)",subtype:"host","model-value":e.$store.state.examples.text3,"onUpdate:modelValue":t[2]||(t[2]=l=>e.updateState("text3",l))},{help:a(()=>[n(" Eingabefeld für Hosts (IP oder Namen) ")]),_:1},8,["model-value"]),o(p,{title:"4. Text (URL)",subtype:"url","model-value":e.$store.state.examples.text4,"onUpdate:modelValue":t[3]||(t[3]=l=>e.updateState("text4",l))},{help:a(()=>[n("Eingabefeld für URLs")]),_:1},8,["model-value"]),o(p,{title:"5. Text (User)",subtype:"user","model-value":e.$store.state.examples.text5,"onUpdate:modelValue":t[4]||(t[4]=l=>e.updateState("text5",l))},{help:a(()=>[n("Eingabefeld für Benutzernamen")]),_:1},8,["model-value"]),o(p,{title:"6. Text (Time)",subtype:"time","model-value":e.$store.state.examples.text6,"onUpdate:modelValue":t[5]||(t[5]=l=>e.updateState("text6",l))},{help:a(()=>[n("Eingabefeld für Zeiten")]),_:1},8,["model-value"]),o(p,{title:"7. Text (Date)",subtype:"date","model-value":e.$store.state.examples.text7,"onUpdate:modelValue":t[6]||(t[6]=l=>e.updateState("text7",l))},{help:a(()=>[n("Eingabefeld für ein Datum")]),_:1},8,["model-value"]),z,o(m,{title:"1. Zahl",min:5,max:9,step:2,unit:"kW","model-value":e.$store.state.examples.number1,"onUpdate:modelValue":t[7]||(t[7]=l=>e.updateState("number1",l))},{help:a(()=>[n("Zahl mit Einheit")]),_:1},8,["model-value"]),o(m,{title:"2. Zahl",min:10,max:32,step:2,"model-value":e.$store.state.examples.number2,"onUpdate:modelValue":t[8]||(t[8]=l=>e.updateState("number2",l))},{help:a(()=>[n("Eingabefeld für Zahlen ohne Einheit")]),_:1},8,["model-value"]),o(m,{title:"3. Zahl",min:-30,max:30,step:.01,precision:2,unit:"ct/kWh","model-value":e.$store.state.examples.number3*1e5,"onUpdate:modelValue":t[9]||(t[9]=l=>e.updateState("number3",parseFloat((l/1e5).toFixed(7))))},{help:a(()=>[n(" Eingabefeld für Zahlen mit Einheit und Nachkommastellen"),O,n(' Zusätzlich zum optionalen Parameter "step" sollte immer auch "precision" gesetzt sein, um unvermeidbare Darstellungsfehler zu vermeiden.'),Z,n(" Wenn der dargestellte Wert eine andere Genauigkeit/Einheit als der Wert im Backend hat (z.B. €/Wh <-> ct/kWh), dann ist bei der Umrechnung darauf zu achten, dass es nicht erneut zu Ungenauigkeiten bei Dezimalzahlen kommt. ")]),_:1},8,["model-value"]),o(p,{title:"1. Passwort",subtype:"password","model-value":e.$store.state.examples.password1,"onUpdate:modelValue":t[10]||(t[10]=l=>e.updateState("password1",l))},{help:a(()=>[n(" Das Passwort kann per Klick auf das Auge angezeigt werden. ")]),_:1},8,["model-value"]),j,o(g,{title:"1. Textarea",maxlength:"50","model-value":e.$store.state.examples.textarea1,"onUpdate:modelValue":t[11]||(t[11]=l=>e.updateState("textarea1",l))},{help:a(()=>[n(" Textarea mit maximaler Länge von 50 Zeichen. ")]),_:1},8,["model-value"])]),_:1}),o(i,{title:"Spezielle Elemente"},{default:a(()=>[o(r,{title:"1. Range",min:6,max:32,step:1,unit:"A","model-value":e.$store.state.examples.range1,"onUpdate:modelValue":t[12]||(t[12]=l=>e.updateState("range1",l))},{help:a(()=>[n("Range ohne spezielle Labels")]),_:1},8,["model-value"]),o(r,{title:"2. Range",min:0,max:11,step:1,unit:"A",labels:[{label:"Aus",value:0},{label:6,value:6},{label:7,value:7},{label:8,value:8},{label:9,value:9},{label:10,value:10},{label:11,value:11},{label:12,value:12},{label:13,value:13},{label:14,value:14},{label:15,value:15},{label:16,value:16}],"model-value":e.$store.state.examples.range2,"onUpdate:modelValue":t[13]||(t[13]=l=>e.updateState("range2",l))},{help:a(()=>[n("Range mit speziellen Labels")]),_:1},8,["model-value"]),B,o(b,{title:"1. Select",notSelected:"Bitte auswählen",options:[{value:1,text:"Eins"},{value:2,text:"Zwei"}],"model-value":e.$store.state.examples.select1,"onUpdate:modelValue":t[14]||(t[14]=l=>e.updateState("select1",l))},{help:a(()=>[n("Select mit einfachen Optionen")]),_:1},8,["model-value"]),o(b,{title:"2. Select",groups:[{label:"Gruppe 1 (Number)",options:[{value:1,text:"Eins"},{value:2,text:"Zwei"}]},{label:"Gruppe 2 (String)",options:[{value:"three",text:"Drei"},{value:"four",text:"Vier"}]}],"model-value":e.$store.state.examples.select2,"onUpdate:modelValue":t[15]||(t[15]=l=>e.updateState("select2",l))},{help:a(()=>[n("Select mit Gruppen")]),_:1},8,["model-value"]),D,o(f,{title:"1. Button-Group",buttons:[{buttonValue:1,text:"Eins"},{buttonValue:2,text:"Zwei"}],"model-value":e.$store.state.examples.buttonGroup1,"onUpdate:modelValue":t[16]||(t[16]=l=>e.updateState("buttonGroup1",l))},{help:a(()=>[n("Hilfetext")]),_:1},8,["model-value"]),J,o(S,{title:"1. Checkbox","model-value":e.$store.state.examples.checkbox1,"onUpdate:modelValue":t[17]||(t[17]=l=>e.updateState("checkbox1",l))},{help:a(()=>[n("Hilfetext")]),_:1},8,["model-value"])]),_:1}),o(i,{title:"JSON Gruppe"},{default:a(()=>[o(p,{title:"JSON 1",subtype:"json","model-value":e.$store.state.examples.json1,"onUpdate:modelValue":t[18]||(t[18]=l=>e.updateState("json1",l))},{help:a(()=>[n("JSON Objekt")]),_:1},8,["model-value"]),o(p,{title:"JSON 1 Text","model-value":e.$store.state.examples.json1.text,"onUpdate:modelValue":t[19]||(t[19]=l=>e.updateState("json1",l,"text"))},{help:a(()=>[n("Text im JSON Objekt")]),_:1},8,["model-value"]),o(m,{title:"JSON 1 Zahl","model-value":e.$store.state.examples.json1.number,"onUpdate:modelValue":t[20]||(t[20]=l=>e.updateState("json1",l,"number"))},{help:a(()=>[n("Zahl im JSON Objekt")]),_:1},8,["model-value"]),o(h,{title:"Tag Array","model-value":e.$store.state.examples.tags,"onUpdate:modelValue":t[21]||(t[21]=l=>e.updateState("tags",l))},{help:a(()=>[u("pre",null,v(JSON.stringify(e.$store.state.examples.tags,void 0,2)),1)]),_:1},8,["model-value"])]),_:1}),o(i,{title:"Meldungen"},{header:a(()=>[L]),default:a(()=>[o(w,null,{help:a(()=>[n(" Es sind auch Hilfetexte im #help Slot möglich. ")]),default:a(()=>[n(" Das ist eine Überschrift ")]),_:1}),o(d,null,{default:a(()=>[n(" Meldung ohne speziellen Subtype. ")]),_:1}),o(d,{subtype:"info"},{default:a(()=>[n("Infomeldung")]),_:1}),o(d,{subtype:"warning"},{default:a(()=>[n("Warnmeldung")]),_:1}),o(d,{subtype:"danger"},{default:a(()=>[n(" Fehlermeldung ")]),_:1})]),_:1}),o(i,{title:"Listen"},{default:a(()=>[o(x,{title:"Liste 1",modelValue:e.$store.state.examples.hierarchy1,"onUpdate:modelValue":t[22]||(t[22]=l=>e.$store.state.examples.hierarchy1=l),labels:e.$store.state.examples.hierarchy1Labels},{help:a(()=>[u("pre",null,v(JSON.stringify(e.$store.state.examples.hierarchy1,void 0,2)),1)]),_:1},8,["modelValue","labels"])]),_:1}),o($,{formName:"testingStoreForm",onSave:t[23]||(t[23]=l=>e.$emit("save")),onReset:t[24]||(t[24]=l=>e.$emit("reset")),onDefaults:t[25]||(t[25]=l=>e.$emit("defaults"))})])])}const X=y(T,[["render",W],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/TestingStore.vue"]]);export{X as default};
