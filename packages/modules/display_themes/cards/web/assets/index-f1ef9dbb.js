import{o as f,e as S,k as p,x as V,j as I,F as E,H as N,l as d,n as _,p as i,f as B,i as v,s as a,I as M,z as O,R as F,J as R,K as A,L as U,M as z,N as j,O as H,P as G}from"./vendor-5b88de11.js";import{_ as b,I as K,c as J}from"./vendor-inkline-1cb250cb.js";import{l as P,f as T,a as $,F as D,b as Z,c as Y}from"./vendor-fortawesome-e1f714a9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const Q={name:"DateTime",props:{separator:{String,default:"<br />"}},data(){return{dateTimeInterval:"",date:"",time:""}},methods:{update(){const e=new Date,t={weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"},r={hour:"2-digit",minute:"2-digit",second:"2-digit"};this.date=e.toLocaleDateString(void 0,t),this.time=e.toLocaleTimeString(void 0,r)}},mounted(){this.update(),this.dateTimeInterval=setInterval(this.update,1e3)},beforeUnmount(){clearInterval(this.dateTimeInterval)}},X=["innerHTML"];function ee(e,t,r,c,o,n){return f(),S(E,null,[p(V(o.time),1),I("span",{innerHTML:r.separator},null,8,X),p(V(o.date),1)],64)}const te=b(Q,[["render",ee]]),y=N("mqtt",{state:()=>({settings:{parentChargePoint1:void 0,parentChargePoint2:void 0},topics:{},chartData:{}}),getters:{getChargePointFilter:e=>{let t=[];return e.settings.parentChargePoint1!==void 0&&t.push(e.settings.parentChargePoint1),e.settings.parentChargePoint2!==void 0&&t.push(e.settings.parentChargePoint2),t},getWildcardIndexList:e=>(t,r=!1)=>{let c=t;r||(c="^"+t.replaceAll("/","\\/").replaceAll("+","[^+/]+").replaceAll("#","[^#/]+")+"$");let o=Object.keys(e.topics).filter(n=>n.match(c));return o.forEach((n,s,l)=>{l[s]=parseInt(n.match(/(?:\/)([0-9]+)(?=\/)*/g)[0].replace(/[^0-9]+/g,""))}),o},getWildcardTopics:e=>(t,r=!1)=>{let c=t;return r||(c="^"+t.replaceAll("/","\\/").replaceAll("+","[^+/]+").replaceAll("#","[^#/]+")+"$"),Object.keys(e.topics).filter(o=>o.match(c)).reduce((o,n)=>({...o,[n]:e.topics[n]}),{})},getObjectIds:e=>t=>{function r(c){let o=[];return c!==void 0&&c.forEach(n=>{n.type==t&&o.push(n.id),o=[...o,...r(n.children)]}),o}return r(e.topics["openWB/counter/get/hierarchy"])},getValueBool:e=>(t,r=!1)=>{let c=e.topics[t];return c!==void 0?c:(console.warn("topic not found! using default",t,r),r)},getValueString:e=>(t,r="W",c="",o=!0,n=!1,s="---",l=void 0)=>{var g=!1,u=e.topics[t];if(u===void 0||l!==void 0&&u[l]===void 0)console.warn("topic not found! using default",t,s),m=s;else{l!==void 0&&(u=u[l]),n&&(u*=-1);for(var m=u.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0});o&&(u>999||u<-999);)switch(u=u/1e3,g=!0,c){case"":c="k";break;case"k":c="M";break;case"M":c="G";break}m=u.toLocaleString(void 0,{minimumFractionDigits:g?2:0,maximumFractionDigits:g?2:0})}return`${m} ${c}${r}`},getChartData:e=>t=>e.chartData[t]===void 0?[]:e.chartData[t],getDisplayStandby:e=>e.topics["openWB/optional/int_display/standby"],getThemeConfiguration:e=>{if("openWB/optional/int_display/theme"in e.topics&&e.topics["openWB/optional/int_display/theme"]!==void 0&&"configuration"in e.topics["openWB/optional/int_display/theme"])return e.topics["openWB/optional/int_display/theme"].configuration},getDashBoardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_view:!0},getChargePointsEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_charge_points_view:!0},getStateEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_status_view:!0},getGridCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_grid:!0},getHomeCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_home_consumption:!0},getBatteryCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_battery_sum:!0},getChargePointsCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_charge_point_sum:!0},getPvCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_inverter_sum:!0},getLockChanges(e){return e.getThemeConfiguration?e.getThemeConfiguration.lock_changes:!0},getGridId(e){let t=e.topics["openWB/counter/get/hierarchy"];if(t!==void 0&&Object.keys(t).length>0){let r=Object.keys(e.topics["openWB/counter/get/hierarchy"])[0];if(console.debug("getGridId",r,e.topics["openWB/counter/get/hierarchy"][r]),e.topics["openWB/counter/get/hierarchy"][r].type=="counter")return e.topics["openWB/counter/get/hierarchy"][r].id}},getGridPower(e){let t=e.getGridId;return t===void 0?"---":e.getValueString(`openWB/counter/${t}/get/power`,"W")},getGridPowerChartData(e){let t=e.getGridId;return t===void 0?[]:e.getChartData(`openWB/counter/${t}/get/power`)},getHomePower(e){return e.getValueString("openWB/counter/set/home_consumption","W")},getHomePowerChartData(e){return e.getChartData("openWB/counter/set/home_consumption")},getBatteryConfigured(e){return e.getValueBool("openWB/bat/config/configured")},getBatteryPower(e){return e.getValueString("openWB/bat/get/power","W")},getBatteryPowerChartData(e){return e.getChartData("openWB/bat/get/power")},getBatterySoc(e){return e.getValueString("openWB/bat/get/soc","%","",!1)},getBatterySocChartData(e){return e.getChartData("openWB/bat/get/soc")},getPvConfigured(e){return e.getValueBool("openWB/pv/config/configured")},getPvPower(e){return e.getValueString("openWB/pv/get/power","W","",!0,!0)},getPvPowerChartData(e){return e.getChartData("openWB/pv/get/power").map(t=>t*-1)},getChargePointSumPower(e){return e.getValueString("openWB/chargepoint/get/power","W")},getChargePointSumPowerChartData(e){return e.getChartData("openWB/chargepoint/get/power")},getChargePointIds(e){let t=e.getObjectIds("cp"),r=this.getChargePointFilter;return r.length>0?(console.debug("charge points are filtered!",t,r),t.filter(c=>r.includes(c))):t},getChargePointName(e){return t=>e.topics[`openWB/chargepoint/${t}/config`]!==void 0?e.topics[`openWB/chargepoint/${t}/config`].name:"---"},getChargePointPower(e){return t=>e.getValueString(`openWB/chargepoint/${t}/get/power`,"W")},getChargePointImportedSincePlugged(e){return t=>({energy:e.getValueString(`openWB/chargepoint/${t}/set/log`,"Wh","",!0,!1,"---","imported_since_plugged"),range:e.getValueString(`openWB/chargepoint/${t}/set/log`,"m","k",!1,!1,"---","range_charged")})},getChargePointPowerChartData(e){return t=>e.getChartData(`openWB/chargepoint/${t}/get/power`)},getChargePointSetCurrent(e){return t=>e.getValueString(`openWB/chargepoint/${t}/set/current`,"A")},getChargePointPhasesInUse(e){return t=>{const r=["/","①","②","③"],c=e.topics[`openWB/chargepoint/${t}/get/phases_in_use`];return c!==void 0&&c>=0&&c<r.length?r[e.topics[`openWB/chargepoint/${t}/get/phases_in_use`]]:(console.warn("topic not found!",`openWB/chargepoint/${t}/get/phases_in_use`),"?")}},getChargePointPlugState(e){return t=>e.getValueBool(`openWB/chargepoint/${t}/get/plug_state`)},getChargePointChargeState(e){return t=>e.getValueBool(`openWB/chargepoint/${t}/get/charge_state`)},getChargePointManualLock(e){return t=>e.getValueBool(`openWB/chargepoint/${t}/set/manual_lock`)},getChargepointTagState(e){return t=>{if([void 0,null,""].includes(e.topics[`openWB/chargepoint/${t}/set/rfid`])){if(![void 0,null,""].includes(e.topics[`openWB/chargepoint/${t}/get/rfid`]))return 1}else return 2;return 0}},getChargePointVehicleChangePermitted(e){return t=>Array.isArray(e.topics[`openWB/chargepoint/${t}/set/change_ev_permitted`])?e.topics[`openWB/chargepoint/${t}/set/change_ev_permitted`][0]:!0},getChargePointConnectedVehicleConfig(e){return t=>e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/config`]},getChargePointConnectedVehicleChargeMode(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.translateChargeMode(e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.selected)}},getChargePointConnectedVehiclePriority(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).prio}},getChargePointConnectedVehicleInfo(e){return t=>e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/info`]},getChargePointConnectedVehicleId(e){return t=>{if(e.getChargePointConnectedVehicleInfo(t))return e.getChargePointConnectedVehicleInfo(t).id}},getChargePointConnectedVehicleChargeTemplateIndex(e){return t=>{if(e.getChargePointConnectedVehicleConfig(t))return e.getChargePointConnectedVehicleConfig(t).charge_template}},getChargePointConnectedVehicleChargeTemplate(e){return t=>{let r=e.getChargePointConnectedVehicleChargeTemplateIndex(t);return e.topics[`openWB/vehicle/template/charge_template/${r}`]}},getChargePointConnectedVehicleEvTemplate(e){return t=>{if(e.getChargePointConnectedVehicleConfig(t))return e.getChargePointConnectedVehicleConfig(t).ev_template}},getChargePointConnectedVehicleName(e){return t=>{if(e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/info`])return e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/info`].name}},getChargePointConnectedVehicleSoc(e){return t=>e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/soc`]},getChargePointConnectedVehicleTimeChargingActive(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).time_charging.active}},getChargePointConnectedVehicleTimeChargingRunning(e){return t=>{let r=e.getChargePointConnectedVehicleConfig(t).time_charging_in_use;return r!==void 0?r:!1}},getChargePointConnectedVehicleInstantChargingCurrent(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.instant_charging.current}},getChargePointConnectedVehicleInstantChargingLimit(e){return t=>e.getChargePointConnectedVehicleChargeTemplate(t)?e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.instant_charging.limit:{selected:void 0}},getChargePointConnectedVehiclePvChargingFeedInLimit(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.pv_charging.feed_in_limit}},getChargePointConnectedVehiclePvChargingMinCurrent(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.pv_charging.min_current}},getChargePointConnectedVehiclePvChargingMinSoc(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.pv_charging.min_soc}},getChargePointConnectedVehiclePvChargingMinSocCurrent(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.pv_charging.min_soc_current}},getChargePointConnectedVehiclePvChargingMaxSoc(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.pv_charging.max_soc}},getChargePointConnectedVehicleScheduledChargingPlans(e){return t=>{let r=e.getChargePointConnectedVehicleChargeTemplateIndex(t);return e.getWildcardTopics(`openWB/vehicle/template/charge_template/${r}/chargemode/scheduled_charging/plans/+`)}},getChargePointConnectedVehicleTimeChargingPlans(e){return t=>{let r=e.getChargePointConnectedVehicleChargeTemplateIndex(t);return e.getWildcardTopics(`openWB/vehicle/template/charge_template/${r}/time_charging/plans/+`)}},getVehicleList(e){return e.getWildcardTopics("openWB/vehicle/+/name")},getVehicleName(e){return t=>e.topics[`openWB/vehicle/${t}/name`]},getVehicleSocConfigured(e){return t=>e.topics[`openWB/vehicle/${t}/soc_module/config`].type!=null},getVehicleSocIsManual(e){return t=>e.topics[`openWB/vehicle/${t}/soc_module/config`].type=="manual"},getVehicleFaultState(e){return t=>e.topics[`openWB/vehicle/${t}/get/fault_state`]?e.topics[`openWB/vehicle/${t}/get/fault_state`]:0},getSystemCurrentCommit(e){if(e.topics["openWB/system/current_commit"])return e.topics["openWB/system/current_commit"]},getSystemIp(e){if(e.topics["openWB/system/ip_address"])return e.topics["openWB/system/ip_address"]},getSystemBranch(e){if(e.topics["openWB/system/current_branch"])return e.topics["openWB/system/current_branch"]},getSystemTime(e){if(e.topics["openWB/system/time"])return new Date(e.topics["openWB/system/time"]*1e3).toLocaleString()},getSystemVersion(e){if(e.topics["openWB/system/version"])return e.topics["openWB/system/version"]},getRfidEnabled(e){return this.getValueBool("openWB/optional/rfid/active")}},actions:{updateSetting(e,t){e in this.settings&&(this.settings[e]=t)},initTopic(e,t=void 0){e.includes("#")||e.includes("+")?console.debug("skipping init of wildcard topic:",e):this.addTopic(e,t)},addTopic(e,t){console.debug("addTopic",e,t),this.topics[e]=t},removeTopic(e){e.includes("#")||e.includes("+")?(console.debug("expanding wildcard topic for removal:",e),Object.keys(this.getWildcardTopics(e)).forEach(t=>{console.debug("removing wildcardTopic:",t),delete this.topics[t]})):delete this.topics[e]},updateTopic(e,t,r=void 0){const c=(o,n,s)=>n.split(".").reduce((l,g,u)=>l[g]=n.split(".").length===++u?s:l[g]||{},o);e in this.topics?r!=null?c(this.topics[e],r,t):this.topics[e]=t:console.debug("topic not found: ",e)},updateChartData(){for(const[e,t]of Object.entries(this.topics))(e.endsWith("home_consumption")||e.endsWith("power")||e.endsWith("soc"))&&(this.chartData[e]===void 0&&(this.chartData[e]=[]),t!=null&&(this.chartData[e].push(t),this.chartData[e].slice(-128)))},updateState(e,t,r=void 0){console.debug("updateState:",e,t,r),this.updateTopic(e,t,r)},chargeModeList(){var e=[{id:"instant_charging"},{id:"pv_charging"},{id:"scheduled_charging"},{id:"standby"},{id:"stop"}];return e.forEach(t=>{t.label=this.translateChargeMode(t.id).label,t.class=this.translateChargeMode(t.id).class}),e},translateChargeMode(e){switch(e){case"instant_charging":return{mode:e,label:"Sofort",class:"danger"};case"pv_charging":return{mode:e,label:"PV",class:"success"};case"scheduled_charging":return{mode:e,label:"Zielladen",class:"primary"};case"time_charging":return{mode:e,label:"Zeitladen",class:"warning"};case"standby":return{mode:e,label:"Standby",class:"secondary"};case"stop":return{mode:e,label:"Stop",class:"dark"};default:return console.warn("unknown charge mode:",e),{mode:e,label:e,class:e}}},checkChangesLockCode(e){return!!(this.getThemeConfiguration&&this.getThemeConfiguration.lock_changes_code==e)},formatDate(e,t={year:"numeric",month:"2-digit",day:"2-digit"}){return new Date(e).toLocaleDateString(void 0,t)},formatDateRange(e,t="-"){const r={year:"numeric",month:"2-digit",day:"2-digit"};let c={day:"2-digit"};const o=new Date(e[0]),n=new Date(e[1]);return o.getFullYear()==n.getFullYear()?o.getMonth()!=n.getMonth()&&(c.month=r.month):c=r,`${this.formatDate(e[0],c)}${t}${this.formatDate(e[1],r)}`},formatWeeklyScheduleDays(e){const t=["Mo","Di","Mi","Do","Fr","Sa","So"];let r=[];return e.forEach(function(c,o){c==!0&&r.push(t[o])}),r.join(",")}}});const ne={name:"NavItem",props:{to:{type:Object,required:!0}}};function re(e,t,r,c,o,n){const s=d("i-nav-item");return f(),_(s,{to:r.to,"active-class":"-active",class:"_border _border-color:primary _text-align:center"},{default:i(()=>[B(e.$slots,"default",{},void 0,!0)]),_:3},8,["to"])}const oe=b(ne,[["render",re],["__scopeId","data-v-57706a44"]]),ie={name:"NavBar",components:{NavItem:oe},data(){return{mqttStore:y()}}};function ae(e,t,r,c,o,n){const s=d("nav-item"),l=d("i-nav");return f(),_(l,{vertical:"",class:"_align-items:stretch"},{default:i(()=>[o.mqttStore.getDashBoardEnabled?(f(),_(s,{key:0,to:{name:"dash-board"}},{default:i(()=>[p(" Übersicht ")]),_:1})):v("",!0),o.mqttStore.getChargePointsEnabled&&o.mqttStore.getChargePointIds.length>0?(f(),_(s,{key:1,to:{name:"charge-points"}},{default:i(()=>[p(" Ladepunkte ")]),_:1})):v("",!0),o.mqttStore.getStateEnabled?(f(),_(s,{key:2,to:{name:"status"}},{default:i(()=>[p(" Status ")]),_:1})):v("",!0)]),_:1})}const se=b(ie,[["render",ae]]);P.add(T,$);const ce={name:"NumberPad",data(){return{}},components:{FontAwesomeIcon:D},emits:["key:digit","key:clear","key:delete"],methods:{emitDigit(e){this.$emit("key:digit",e)},emitClear(){this.$emit("key:clear")},emitDelete(){this.$emit("key:delete")}}};function le(e,t,r,c,o,n){const s=d("i-button"),l=d("i-column"),g=d("i-row"),u=d("FontAwesomeIcon"),m=d("i-container");return f(),_(m,null,{default:i(()=>[a(g,{center:"",class:"_padding-bottom:1"},{default:i(()=>[a(l,{class:"_flex-grow:0"},{default:i(()=>[a(s,{size:"lg",class:"pinButton",onClick:t[0]||(t[0]=h=>n.emitDigit("1"))},{default:i(()=>[p("1")]),_:1})]),_:1}),a(l,{class:"_flex-grow:0"},{default:i(()=>[a(s,{size:"lg",class:"pinButton",onClick:t[1]||(t[1]=h=>n.emitDigit("2"))},{default:i(()=>[p("2")]),_:1})]),_:1}),a(l,{class:"_flex-grow:0"},{default:i(()=>[a(s,{size:"lg",class:"pinButton",onClick:t[2]||(t[2]=h=>n.emitDigit("3"))},{default:i(()=>[p("3")]),_:1})]),_:1})]),_:1}),a(g,{center:"",class:"_padding-bottom:1"},{default:i(()=>[a(l,{class:"_flex-grow:0"},{default:i(()=>[a(s,{size:"lg",class:"pinButton",onClick:t[3]||(t[3]=h=>n.emitDigit("4"))},{default:i(()=>[p("4")]),_:1})]),_:1}),a(l,{class:"_flex-grow:0"},{default:i(()=>[a(s,{size:"lg",class:"pinButton",onClick:t[4]||(t[4]=h=>n.emitDigit("5"))},{default:i(()=>[p("5")]),_:1})]),_:1}),a(l,{class:"_flex-grow:0"},{default:i(()=>[a(s,{size:"lg",class:"pinButton",onClick:t[5]||(t[5]=h=>n.emitDigit("6"))},{default:i(()=>[p("6")]),_:1})]),_:1})]),_:1}),a(g,{center:"",class:"_padding-bottom:1"},{default:i(()=>[a(l,{class:"_flex-grow:0"},{default:i(()=>[a(s,{size:"lg",class:"pinButton",onClick:t[6]||(t[6]=h=>n.emitDigit("7"))},{default:i(()=>[p("7")]),_:1})]),_:1}),a(l,{class:"_flex-grow:0"},{default:i(()=>[a(s,{size:"lg",class:"pinButton",onClick:t[7]||(t[7]=h=>n.emitDigit("8"))},{default:i(()=>[p("8")]),_:1})]),_:1}),a(l,{class:"_flex-grow:0"},{default:i(()=>[a(s,{size:"lg",class:"pinButton",onClick:t[8]||(t[8]=h=>n.emitDigit("9"))},{default:i(()=>[p("9")]),_:1})]),_:1})]),_:1}),a(g,{center:""},{default:i(()=>[a(l,{class:"_flex-grow:0"},{default:i(()=>[a(s,{size:"lg",class:"pinButton",onClick:t[9]||(t[9]=h=>n.emitClear())},{default:i(()=>[a(u,{"fixed-width":"",icon:["fas","fa-eraser"]})]),_:1})]),_:1}),a(l,{class:"_flex-grow:0"},{default:i(()=>[a(s,{size:"lg",class:"pinButton",onClick:t[10]||(t[10]=h=>n.emitDigit("0"))},{default:i(()=>[p("0")]),_:1})]),_:1}),a(l,{class:"_flex-grow:0"},{default:i(()=>[a(s,{size:"lg",class:"pinButton",onClick:t[11]||(t[11]=h=>n.emitDelete())},{default:i(()=>[a(u,{"fixed-width":"",icon:["fas","fa-delete-left"]})]),_:1})]),_:1})]),_:1})]),_:1})}const ue=b(ce,[["render",le],["__scopeId","data-v-90b9d9ba"]]);P.add(T,$);const de={name:"CodeInputModal",props:{modelValue:{type:Boolean,required:!0},backgroundColor:{type:String,default:"warning"},placeholderCharacter:{type:String,default:"*",validator(e){return e.length==1}},inputVisible:{type:Boolean,default:!1},minLength:{type:Number,default:4},maxLength:{type:Number,default:4}},data(){return{number:"",modalBackground:this.backgroundColor}},components:{FontAwesomeIcon:D,NumberPad:ue},emits:["update:modelValue","update:inputValue"],computed:{placeholder(){return this.placeholderCharacter.repeat(this.minLength)},enableSubmit(){return this.number.length>=this.minLength&&this.number.length<=this.maxLength}},watch:{modelValue(e,t){e===!1&&t===!0&&this.clear()}},methods:{abort(){this.$emit("update:modelValue",!1)},addDigit(e){this.number.length<this.maxLength&&(this.number+=e)},removeDigit(){this.number=this.number.slice(0,-1)},clear(){this.number=""},submit(){this.$emit("update:inputValue",this.number)},success(e="success"){this.modalBackground=e,setTimeout(()=>{this.$emit("update:modelValue",!1),this.modalBackground=this.backgroundColor},500)},error(e="danger"){this.modalBackground=e,setTimeout(()=>{this.clear(),this.modalBackground=this.backgroundColor},2e3)}}};function ge(e,t,r,c,o,n){const s=d("i-input"),l=d("i-column"),g=d("i-row"),u=d("NumberPad"),m=d("i-container"),h=d("i-button"),w=d("i-modal");return f(),_(M,{to:"body"},[a(w,{modelValue:r.modelValue,"onUpdate:modelValue":t[4]||(t[4]=C=>e.$emit("update:modelValue",C)),color:o.modalBackground},{header:i(()=>[B(e.$slots,"header",{},()=>[p(" **HEADER** ")])]),footer:i(()=>[a(m,null,{default:i(()=>[a(g,null,{default:i(()=>[a(l,null,{default:i(()=>[a(h,{color:"danger",onClick:n.abort},{default:i(()=>[B(e.$slots,"abort",{},()=>[p(" Zurück ")])]),_:3},8,["onClick"])]),_:3}),a(l,{class:"_text-align:right"},{default:i(()=>[n.enableSubmit?(f(),_(h,{key:0,color:"success",onClick:n.submit},{default:i(()=>[B(e.$slots,"submit",{},()=>[p(" OK ")])]),_:3},8,["onClick"])):v("",!0)]),_:3})]),_:3})]),_:3})]),default:i(()=>[a(m,null,{default:i(()=>[a(g,{center:"",class:"_padding-bottom:1"},{default:i(()=>[a(l,null,{default:i(()=>[a(s,{modelValue:o.number,"onUpdate:modelValue":t[0]||(t[0]=C=>o.number=C),placeholder:n.placeholder,readonly:"",size:"lg",type:r.inputVisible?"text":"password",class:"_text-align:center"},null,8,["modelValue","placeholder","type"])]),_:1})]),_:1}),a(u,{"onKey:digit":t[1]||(t[1]=C=>n.addDigit(C)),"onKey:clear":t[2]||(t[2]=C=>n.clear()),"onKey:delete":t[3]||(t[3]=C=>n.removeDigit(C))})]),_:1})]),_:3},8,["modelValue","color"])])}const he=b(de,[["render",ge]]);P.add(Z,Y,T,$);const pe={name:"LockNavItem",props:{},data(){return{mqttStore:y(),modalPinEntryVisible:!1,modalPinEntryColor:"warning",code:"",countdown:0,countdownInterval:void 0,events:["mousemove","touchmove","wheel"]}},components:{FontAwesomeIcon:D,CodeInputModal:he},computed:{changesLocked:{get(){return this.mqttStore.settings.changesLocked},set(e){this.mqttStore.settings.changesLocked=e}},timer(){return Math.trunc(this.countdown/60).toString()+":"+(this.countdown%60).toString().padStart(2,"0")}},methods:{toggleChangesLock(){this.changesLocked?this.unlockChanges():this.lockChanges()},unlockChanges(){this.modalPinEntryVisible=!0},checkUnlockCode(e){console.log("checkUnlockCode",e),this.mqttStore.checkChangesLockCode(e)?(this.$refs.lockInput.success("success"),this.changesLocked=!1,this.mqttStore.getDisplayStandby>0&&(this.countdown=this.mqttStore.getDisplayStandby,this.countdownInterval=setInterval(this.updateCountdown,1e3),this.events.forEach(t=>{document.addEventListener(t,this.handleDocumentEvent,{passive:!0})}))):(console.warn("check unlock code failed!"),this.$refs.lockInput.error("danger"))},lockChanges(){this.changesLocked=!0,this.events.forEach(e=>{document.removeEventListener(e,this.handleDocumentEvent,{passive:!0})}),this.countdownInterval!==void 0&&(clearInterval(this.countdownInterval),this.countdownInterval=void 0)},updateCountdown(){this.countdown-=1,this.countdown<1&&this.lockChanges()},handleDocumentEvent(){this.countdown=this.mqttStore.getDisplayStandby}},mounted(){this.changesLocked=!0}},me={key:0,class:"_padding-left:1"};function fe(e,t,r,c,o,n){const s=d("FontAwesomeIcon"),l=d("i-button"),g=d("CodeInputModal");return f(),S(E,null,[o.mqttStore.getLockChanges?(f(),_(l,{key:0,onClick:t[0]||(t[0]=u=>n.toggleChangesLock()),class:"_padding-left:0 _padding-right:0 _margin-bottom:1",size:"lg",block:"",color:this.changesLocked?"danger":"success"},{default:i(()=>[a(s,{"fixed-width":"",icon:this.changesLocked?["fas","fa-lock"]:["fas","fa-lock-open"],class:O(this.changesLocked?"_color:danger-80":"_color:success-80")},null,8,["icon","class"]),!n.changesLocked&&o.countdownInterval?(f(),S("span",me,V(n.timer),1)):v("",!0)]),_:1},8,["color"])):v("",!0),a(g,{modelValue:o.modalPinEntryVisible,"onUpdate:modelValue":t[1]||(t[1]=u=>o.modalPinEntryVisible=u),"onUpdate:inputValue":n.checkUnlockCode,ref:"lockInput",minLength:4,maxLength:10},{header:i(()=>[p(" Bitte den PIN zur Freigabe von Änderungen eingeben. ")]),_:1},8,["modelValue","onUpdate:inputValue"])],64)}const _e=b(pe,[["render",fe]]);const Ce={name:"openwbDisplayCardsApp",components:{RouterView:F,DateTime:te,NavBar:se,LockNavItem:_e},data(){return{client:{connected:!1},connection:{protocol:location.protocol=="https:"?"wss":"ws",host:location.hostname,port:parseInt(location.port)||(location.protocol=="https:"?443:80),endpoint:"/ws",connectTimeout:4e3,reconnectPeriod:4e3},mqttTopicsToSubscribe:["openWB/bat/config/configured","openWB/bat/get/power","openWB/bat/get/soc","openWB/chargepoint/+/config","openWB/chargepoint/+/get/charge_state","openWB/chargepoint/+/get/connected_vehicle/+","openWB/chargepoint/+/get/phases_in_use","openWB/chargepoint/+/get/plug_state","openWB/chargepoint/+/get/power","openWB/chargepoint/+/get/rfid","openWB/chargepoint/+/set/change_ev_permitted","openWB/chargepoint/+/set/current","openWB/chargepoint/+/set/manual_lock","openWB/chargepoint/+/set/log","openWB/chargepoint/+/set/rfid","openWB/chargepoint/get/power","openWB/counter/+/get/power","openWB/counter/get/hierarchy","openWB/counter/set/home_consumption","openWB/optional/int_display/theme","openWB/optional/int_display/standby","openWB/optional/rfid/active","openWB/pv/config/configured","openWB/pv/get/power","openWB/system/current_branch","openWB/system/current_commit","openWB/system/ip_address","openWB/system/time","openWB/system/version","openWB/vehicle/+/get/fault_state","openWB/vehicle/+/name","openWB/vehicle/+/soc_module/config","openWB/vehicle/template/charge_template/#"],mqttStore:y(),chartInterval:""}},computed:{changesLocked(){return this.mqttStore.getLockChanges&&this.mqttStore.settings.changesLocked}},methods:{createConnection(){const{protocol:e,host:t,port:r,endpoint:c,...o}=this.connection,n=`${e}://${t}:${r}${c}`;console.debug("connecting to broker:",n);try{this.client=R.connect(n,o)}catch(s){console.error("mqtt.connect error",s)}this.client.on("connect",()=>{console.debug("Connection succeeded! ClientId: ",this.client.options.clientId)}),this.client.on("error",s=>{console.error("Connection failed",s)}),this.client.on("message",(s,l)=>{if(console.debug(`Received message "${l}" from topic "${s}"`),l.toString().length>0){let g;try{g=JSON.parse(l.toString())}catch{console.debug("Json parsing failed, fallback to string: ",s),g=l.toString()}this.mqttStore.addTopic(s,g)}else this.mqttStore.removeTopic(s)})},doSubscribe(e){e.forEach(t=>{this.mqttStore.initTopic(t)}),this.client.subscribe(e,{},t=>{if(t){console.error("Subscribe to topics error",t);return}})},doUnsubscribe(e){e.forEach(t=>{this.mqttStore.removeTopic(t)}),this.client.unsubscribe(e,t=>{t&&console.error("Unsubscribe error",t)})},doPublish(e,t,r=!0,c=2){console.debug("doPublish",e,t);let o={qos:c,retain:r};this.client.publish(e,JSON.stringify(t),o,n=>{n&&console.error("Publish error",n)})},sendTopicToBroker(e,t=void 0){let r=e.replace("openWB/","openWB/set/");t===void 0&&(t=this.mqttStore.topics[e]),this.doPublish(r,t)},sendCommand(e){this.doPublish("openWB/set/command/"+this.client.options.clientId+"/todo",e,!1)},sendSystemCommand(e,t={}){this.sendCommand({command:e,data:t})}},created(){this.createConnection()},mounted(){let e=window.location.search;e!=""&&(console.debug("search",e),new URLSearchParams(e).forEach((r,c)=>{this.mqttStore.updateSetting(c,parseInt(r))})),this.doSubscribe(this.mqttTopicsToSubscribe),this.chartInterval=setInterval(this.mqttStore.updateChartData,5e3)},beforeUnmount(){this.doUnsubscribe(this.mqttTopicsToSubscribe),clearInterval(this.chartInterval)}};function be(e,t,r,c,o,n){const s=d("DateTime"),l=d("i-column"),g=d("i-row"),u=d("i-container"),m=d("LockNavItem"),h=d("NavBar"),w=d("i-layout-aside"),C=d("RouterView"),x=d("i-layout-content"),q=d("i-layout");return f(),_(q,{vertical:""},{default:i(()=>[a(w,{class:"_position:fixed"},{default:i(()=>[a(u,{fluid:"",class:"_margin-bottom:1"},{default:i(()=>[a(g,{center:""},{default:i(()=>[a(l,null,{default:i(()=>[a(s)]),_:1})]),_:1})]),_:1}),a(m),a(h,{changesLocked:n.changesLocked},null,8,["changesLocked"])]),_:1}),a(x,null,{default:i(()=>[a(C,{changesLocked:n.changesLocked},null,8,["changesLocked"])]),_:1})]),_:1})}const ve=b(Ce,[["render",be],["__scopeId","data-v-a7155469"]]),Be="modulepreload",ye=function(e){return"/openWB/web/display/themes/cards/"+e},L={},k=function(t,r,c){if(!r||r.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(r.map(n=>{if(n=ye(n),n in L)return;L[n]=!0;const s=n.endsWith(".css"),l=s?'[rel="stylesheet"]':"";if(!!c)for(let m=o.length-1;m>=0;m--){const h=o[m];if(h.href===n&&(!s||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${l}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":Be,s||(u.as="script",u.crossOrigin=""),u.href=n,document.head.appendChild(u),s)return new Promise((m,h)=>{u.addEventListener("load",m),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},We="/openWB/web/display/themes/cards/openWB_logo_dark.png";const we={name:"WelcomeView",data(){return{mqttStore:y()}},computed:{firstView(){if(this.mqttStore.getThemeConfiguration){if(this.mqttStore.getThemeConfiguration.enable_dashboard_view)return"dash-board";if(this.mqttStore.getThemeConfiguration.enable_charge_points_view)return"charge-points";if(this.mqttStore.getThemeConfiguration.enable_status_view)return"status"}}},methods:{selectFirstRoute(){this.firstView?this.$router.push({name:this.firstView}):console.warn("no router view enabled, check your configuration!")}},mounted(){setTimeout(this.selectFirstRoute,3e3)}},ke=e=>(A("data-v-e5759067"),e=e(),U(),e),Se=ke(()=>I("img",{class:"logo",src:We},null,-1));function Ve(e,t,r,c,o,n){const s=d("i-card"),l=d("i-column"),g=d("i-row"),u=d("i-container");return f(),_(u,null,{default:i(()=>[a(g,{center:"",middle:""},{default:i(()=>[a(l,null,{default:i(()=>[a(s,{color:"primary"},{header:i(()=>[p(" Cards Theme ")]),default:i(()=>[Se]),_:1})]),_:1})]),_:1})]),_:1})}const Pe=b(we,[["render",Ve],["__scopeId","data-v-e5759067"]]),Te=z({history:j("/openWB/web/display/themes/cards/"),routes:[{path:"/",name:"welcome",component:Pe},{path:"/DashBoard",name:"dash-board",component:()=>k(()=>import("./DashBoardView-846b8376.js"),["assets/DashBoardView-846b8376.js","assets/DashBoardCard-b23b7b4e.js","assets/vendor-inkline-1cb250cb.js","assets/vendor-5b88de11.js","assets/vendor-inkline-f1e599d0.css","assets/DashBoardCard-2fd49a0d.css","assets/ChargePointPlugBadge-aea7b908.js","assets/vendor-fortawesome-e1f714a9.js","assets/ChargePointPlugBadge-84f404d8.css","assets/DashBoardView-1c69da8b.css"])},{path:"/ChargePoints",name:"charge-points",component:()=>k(()=>import("./ChargePointsView-08e63573.js"),["assets/ChargePointsView-08e63573.js","assets/DashBoardCard-b23b7b4e.js","assets/vendor-inkline-1cb250cb.js","assets/vendor-5b88de11.js","assets/vendor-inkline-f1e599d0.css","assets/DashBoardCard-2fd49a0d.css","assets/ChargePointPlugBadge-aea7b908.js","assets/vendor-fortawesome-e1f714a9.js","assets/ChargePointPlugBadge-84f404d8.css","assets/ChargePointsView-083b9b9c.css"])},{path:"/Status",name:"status",component:()=>k(()=>import("./StatusView-0b757c5a.js"),["assets/StatusView-0b757c5a.js","assets/vendor-fortawesome-e1f714a9.js","assets/vendor-5b88de11.js","assets/vendor-inkline-1cb250cb.js","assets/vendor-inkline-f1e599d0.css","assets/DashBoardCard-b23b7b4e.js","assets/DashBoardCard-2fd49a0d.css"])}]});const W=H(ve);W.use(G());W.use(Te);W.use(K,{colorMode:"dark",components:J});W.mount("#app");export{he as C,ue as N,y as u};
