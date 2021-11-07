"use strict";function EncabezadoSeccion(e){let a={height:"7vh",marginTop:"-10vh"};switch(e.color||PaletaColor.PRINCIPAL){case PaletaColor.PRINCIPAL:return React.createElement("img",{className:"w-100",style:a,src:"/media/img/elementos/encabezado-principal.png"});case PaletaColor.SECUNDARIO:return React.createElement("img",{className:"w-100",style:a,src:"/media/img/elementos/encabezado-secundario.png"});case PaletaColor.BLANCO:return React.createElement("img",{className:"w-100",style:a,src:"/media/img/elementos/encabezado-blanco.png"})}}function BotonPrincipal(e){let a=e.color||PaletaColor.PRINCIPAL,t=e.barColor||PaletaColor.PRINCIPAL,n=e.texto||"",l=e.textoClases||"",c=e.clases||"",o=e.id||"",r="bkg-secundario";switch(t){case PaletaColor.PRINCIPAL:r="bkg-principal";break;case PaletaColor.SECUNDARIO:r="bkg-secundario";break;case PaletaColor.TERCIARIO:r="bkg-terciario";break;case PaletaColor.SUCCESS:r="bkg-success";break;case PaletaColor.ERROR:r="bkg-error";break;case PaletaColor.WARNING:r="bkg-warning";break;case PaletaColor.INFO:r="bkg-info";break;case PaletaColor.BLANCO:r="bkg-blanco"}let i=React.createElement("div",{className:"p-basico--2 position-relative overflow-hidden"},React.createElement("p",{id:o+"-txt",p:!0,className:"m-cero "+l},n),React.createElement("div",{id:o+"-bar",className:"position-absolute "+r,style:{width:"50%",left:"-40%",bottom:"0%",height:"10%"}}));return React.createElement(Boton,{tipo:BotonTipo.RELLENO,color:a,clases:c,contenido:i,onclick:e.onclick,onhover:e=>{""!==o&&(e?(anime({targets:"#"+o+"-bar",translateX:["0%","75%"],easing:"easeInOutQuart",duration:500}),anime({targets:"#"+o+"-txt",scale:["1","1.05"],easing:"easeInOutQuart",duration:500})):(anime({targets:"#"+o+"-bar",translateX:["75%","0%"],easing:"easeInOutQuart",duration:500}),anime({targets:"#"+o+"-txt",scale:["1.05","1"],easing:"easeInOutQuart",duration:500})))}})}function BotonFormulario(e){e.titulo,e.color||PaletaColor.SUCCESS,e.clases}function MensajeFormulario(e){let a=e.mensaje,t=e.clasesMensaje||"",n=e.clases||"";return React.createElement(Panel,{tipo:PanelTipo.BASICO,breakpoint:"fluid",clases:"p-basico "+n,contenido:React.createElement("h5",{className:"txt-centrado "+t},a)})}function columnaCompleta(e){return{contenido:e,ancho:[12]}}function columnaCentrada1(e){return{contenido:e,ancho:[10],pos:[1],breakpoint:["sm"]}}function columnaCentrada2(e){return{contenido:e,ancho:[8],pos:[2],breakpoint:["sm"]}}function columnaCentrada3(e){return{contenido:e,ancho:[8,6],pos:[2,3],breakpoint:["sm","md"]}}function columnaCentrada4(e){return{contenido:e,ancho:[8,6,4],pos:[2,3,4],breakpoint:["sm","md","lg"]}}function columnaDobleFluid(e,a=""){return{contenido:e,ancho:[6],clases:a}}function columnaDoble(e,a=""){return{contenido:e,ancho:[12,6],breakpoint:["sm","md"],clases:a}}function PanelReset(){return React.createElement("div",{className:"panel-reset"}," ")}const PanelCargandoTipo={PRINCIPAL:0,BLANCO:1};function PanelCargando(e){let a=e.clases||"",t=e.tipo||PanelCargandoTipo.PRINCIPAL,n=e.largo||"auto",l=null;switch(t){case PanelCargandoTipo.PRINCIPAL:l=React.createElement("div",{className:"d-flex flex-row justify-content-center"},React.createElement("div",{className:"lds-ellipsis cargando-principal"},React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null)));break;case PanelCargandoTipo.BLANCO:l=React.createElement("div",{className:"d-flex flex-row justify-content-center"},React.createElement("div",{className:"lds-ellipsis"},React.createElement("div",null),React.createElement("div",null),React.createElement("div",null),React.createElement("div",null)))}return React.createElement(Panel,{tipo:PanelTipo.BASICO,encabezado:l,contenido:e.contenido,pie:e.pie,largo:n,breakpoint:"fluid",clases:"p-cero m-cero "+a})}function EntradaTexto(e){let a=e.tipo||"text",t=e.id||"",n=e.placeholder||"",l=e.clases||"",c=e.valor||null;return null!==c?React.createElement("input",{type:a,className:"form-control "+l,placeholder:n,value:c,id:t,name:t}):React.createElement("input",{type:a,className:"form-control "+l,placeholder:n,id:t,name:t})}function EntradaTextoArea(e){let a=e.id||"",t=e.clases||"",n=void 0===e.filas?3:e.filas,l=e.valor||null;return null!==l?React.createElement("textarea",{className:"form-control "+t,id:a,name:a,rows:n,value:l}):React.createElement("textarea",{className:"form-control "+t,id:a,name:a,rows:n})}function EntradaNumero(e){let a=e.id||"",t=e.min||"",n=e.max||"",l=e.placeholder||"",c=e.clases||"",o=void 0===e.valor?null:e.valor;return null===o?React.createElement("input",{type:"number",className:"form-control "+c,min:t,max:n,placeholder:l,id:a,name:a}):React.createElement("input",{type:"number",className:"form-control "+c,value:o,min:t,max:n,placeholder:l,id:a,name:a})}function EntradaFecha(e){let a=e.id||"",t=e.fecha||"",n=e.clases||"";return""===t?React.createElement("input",{type:"date",className:"form-control "+n,value:t,id:a,name:a}):React.createElement("input",{type:"date",className:"form-control "+n,id:a,name:a})}function EntradaHora(e){let a=e.id||"",t=e.hora||0,n=e.minuto||0,l=e.clases||"",c="";return c+=t<10?"0"+t:t.toString(),c+=":",c+=n<10?"0"+n:n.toString(),React.createElement("input",{type:"time",className:"form-control "+l,value:c,id:a,name:a})}function EntradaBoton(e){let a=e.titulo||"",t=e.id||"",n=e.clases||"";return React.createElement("input",{type:"button",className:"form-control "+n,value:a,onClick:e.onclick,id:t,name:t})}function EntradaCheckbox(e){let a=e.id||"",t=e.clases||"",n=e.check;return null!=n&&n?React.createElement("input",{type:"checkbox",className:"form-check-input "+t,value:a,id:a,name:a,checked:!0}):React.createElement("input",{type:"checkbox",className:"form-check-input "+t,value:a,id:a,name:a})}function EntradaCheckboxInline(e){let a=e.id||"",t=e.titulo||"",n=e.clases||"",l=e.inputClases||"",c=e.labelClases||"";return React.createElement("div",{className:"form-check "+n},React.createElement("input",{type:"checkbox",className:"form-check-input "+l,value:a,id:a,name:a}),React.createElement("label",{className:"form-check-label "+c,for:a},t))}function EntradaRadio(e){let a=e.id||"",t=e.nombre||"",n=e.clases||"";return React.createElement("input",{type:"radio",className:"form-check-input "+n,name:t,id:a,value:a})}function EntradaRadioInline(e){let a=e.id||"",t=e.nombre||"",n=e.titulo||"",l=e.clases||"",c=e.inputClases||"",o=e.labelClases||"";return React.createElement("div",{className:"form-check "+l},React.createElement("input",{type:"radio",className:"form-check-input "+c,name:t,id:a,value:a}),React.createElement("label",{className:"form-check-label "+o,for:a},n))}function EntradaSelect(e){let a=e.id||"",t=e.opciones||[],n=e.clases||"",l=e.index||-1;return React.createElement("select",{className:"form-control "+n,id:a,name:a},t.map(((e,a)=>a!==l?React.createElement("option",{value:e},e):React.createElement("option",{value:e,selected:!0},e))))}function EntradaMultiSelect(e){let a=e.id||"",t=e.opciones||[],n=e.clases||"";return React.createElement("select",{className:"form-control "+n,id:a,name:a,multiple:!0},t.map((e=>React.createElement("option",{value:e},e))))}function EntradaArea(e){let a=e.contenido||"",t=e.id||"",n=e.clases||"";return React.createElement("textarea",{className:"form-control "+n,id:t,name:t},a)}