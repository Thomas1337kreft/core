import{C as p}from"./ChargePointInstallation-e2d03469.js";import{_ as s,u as t,l as u,m,G as i,E as d,y as l}from"./vendor-0c15df0c.js";import"./vendor-fortawesome-231ff303.js";import"./index-8a28b331.js";import"./vendor-bootstrap-83e2d5a1.js";import"./vendor-jquery-84e2bf4a.js";import"./vendor-axios-c9d2afa0.js";import"./vendor-sortablejs-1a751103.js";import"./dynamic-import-helper-be004503.js";const _={name:"ChargePointSatellite",mixins:[p]},c={class:"charge-point-openwb-satellite"};function g(n,e,f,b,h,w){const r=t("openwb-base-text-input"),a=t("openwb-base-number-input");return u(),m("div",c,[i(r,{title:"IP oder Hostname",subtype:"host",required:"","model-value":n.chargePoint.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=o=>n.updateConfiguration(o,"configuration.ip_address"))},null,8,["model-value"]),i(a,{title:"Ladepunkt-Nummer",required:"",min:1,max:2,"model-value":n.chargePoint.configuration.duo_num+1,"onUpdate:modelValue":e[1]||(e[1]=o=>n.updateConfiguration(o-1,"configuration.duo_num"))},{help:d(()=>e[2]||(e[2]=[l(' Bei einfachen Ladepunkten ist hier immer eine "1" einzutragen. Lediglich bei einer openWB Duo kann mit "2" der zweite enthaltene Ladepunkt angesprochen werden. ')])),_:1},8,["model-value"])])}const N=s(_,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/openwb_series2_satellit/chargePoint.vue"]]);export{N as default};
