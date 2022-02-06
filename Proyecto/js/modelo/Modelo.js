"use strict";const DEBUG=!1,ServidorRoute="/inicio";function arrayMove(e,t,n){var r=e.splice(t,1)[0];e.splice(n,0,r)}function format0000(e){return e<10?"000"+e:e<100?"00"+e:e<1e3?"0"+e:e.toString()}function formDatatoString(e){return[...e.entries()].map((e=>`${encodeURIComponent(e[0])}=${encodeURIComponent(e[1])}`)).join("&")}function formatDate(e){if(isNaN(e.getTime()))return"";let t=""+(e.getMonth()+1),n=""+e.getDate(),r=e.getFullYear();return t.length<2&&(t="0"+t),n.length<2&&(n="0"+n),[n,t,r].join("/")}function formatDateTime(e){if(isNaN(e.getTime()))return"";let t=""+(e.getMonth()+1),n=""+e.getDate(),r=e.getFullYear();t.length<2&&(t="0"+t),n.length<2&&(n="0"+n);let i=e.toTimeString().split(" ")[0].split(":");return[n,t,r].join("/")+" - "+[i[0],i[1]].join(":")+" hrs"}function formatDateTimePHP(e){if(isNaN(e.getTime()))return"";let t=""+(e.getMonth()+1),n=""+e.getDate(),r=e.getFullYear();return t.length<2&&(t="0"+t),n.length<2&&(n="0"+n),[r,t,n].join("-")+" "+e.toTimeString().split(" ")[0]}function parseDateTimePHP(e){let t=e.split(" "),n=t[0].split("-"),r=t[1].split(":"),i=Number.parseInt(n[0]),a=Number.parseInt(n[1])-1,o=Number.parseInt(n[2]),u=Number.parseInt(r[0]),s=Number.parseInt(r[1]);return new Date(i,a,o,u,s)}function parseDatePHP(e){let t=e.split("-"),n=Number.parseInt(t[0]),r=Number.parseInt(t[1])-1,i=Number.parseInt(t[2]);return new Date(n,r,i)}function modDias(e,t){e.setDate(e.getDate()+t)}function isString(e){return"string"==typeof e}function isFechaValida(e,t,n){if(""===e||""===t||""===n)return!1;let r=new Date(Number.parseInt(n),Number.parseInt(t)-1,Number.parseInt(e));return r.getFullYear()===Number.parseInt(n)&&r.getMonth()+1===Number.parseInt(t)&&r.getDate()===Number.parseInt(e)}function isTextoValido(e){return""!==e&&!(e.includes("|")||e.includes("&")||e.includes("%")||e.includes("$")||e.includes('"')||e.includes("'"))}class Modelo{Solicitud(e,t,n){fetch("/php/"+e,{method:"POST",body:t}).then((function(e){if(e.ok)return e.text();throw"Error en la llamada Ajax "+e.statusText})).then((function(e){null!=n&&n(JSON.parse(e))})).catch((function(e){n({operacion:"error",estado:"-1",mensaje:e})}))}SolicitudSolicitud(e,t,n,r,i,a){const o=new FormData;o.append("nombre",e),o.append("correo",t),o.append("tipo",n),o.append("asunto",r),o.append("mensaje",i),this.Solicitud("solicitud.php",o,a)}}