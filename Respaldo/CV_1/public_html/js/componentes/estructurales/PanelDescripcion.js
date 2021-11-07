"use strict";class PanelDescripcion extends React.Component{renderContenido(){let e=React.createElement("h1",{className:"txt-centrado txt-principal mt-basico","data-aos":"fade-up"},"Descripción __"),t=React.createElement("ul",{className:"txt-negro"},React.createElement("li",{"data-aos":"fade-up"},React.createElement("p",{className:"txt-justificado txt-negro"},"Especializado en la implementación de sistemas basados en ",React.createElement("strong",null,"máquinas de estados"),", ",React.createElement("strong",null,"entidades"),", ",React.createElement("strong",null,"visión por computadora"),", ",React.createElement("strong",null,"inteligencia artificial")," y ",React.createElement("strong",null,"métodos numéricos"),".")),React.createElement("li",{"data-aos":"fade-up"},React.createElement("p",{className:"txt-justificado txt-negro"},"Experiencia desarrollando ",React.createElement("strong",null,"software multiplataforma")," (Windows, Linux y Android), ",React.createElement("strong",null,"desarrollo web")," y ",React.createElement("strong",null,"desarrollo de videojuegos"),". Gracia a esto he obtenido experiencia en diversos softwares para el ",React.createElement("strong",null,"diseño"),", ",React.createElement("strong",null,"maquetación"),", ",React.createElement("strong",null,"modelado 3D"),", ",React.createElement("strong",null,"diseño de contenido multimedia"),", ",React.createElement("strong",null,"renderizado")," y ",React.createElement("strong",null,"programación"),".")),React.createElement("li",{"data-aos":"fade-up"},React.createElement("p",{className:"txt-justificado txt-negro"},"Además, debido a preparación técnica conozco procesos de ",React.createElement("strong",null,"manufactura industrial"),", especializado en la operación de ",React.createElement("strong",null,"maquinaria y soldadura"),"."))),a=React.createElement(Panel,{tipo:PanelTipo.FLEX_BASICO,contenido:t,clases:"flex-column justify-content-center align-items-center h-100"}),n=React.createElement("div",{className:"panel-perfil","data-aos":"fade-up"},React.createElement("img",{className:"w-auto h-100",src:"/media/img/foto/perfil.png"})),c=React.createElement("div",{className:"mt-5","data-aos":"fade-up"},React.createElement("p",{className:"txt-izquierda txt-negro mt-1 mb-0"},React.createElement("strong",{className:"txt-secundario"},"Correo:")," jdj.gutierrezornelas@hotmail.com"),React.createElement("p",{className:"txt-izquierda txt-negro mt-1 mb-0"},React.createElement("strong",{className:"txt-secundario"},"Telefono:"),"  (462) 211 0468"),React.createElement("p",{className:"txt-izquierda txt-negro mt-1 mb-0"},React.createElement("strong",{className:"txt-secundario"},"Nacimiento:")," 11 de abril de 1996"),React.createElement("p",{className:"txt-izquierda txt-negro mt-1 mb-0"},React.createElement("strong",{className:"txt-secundario"},"Ciudad:")," Irapuato, Guanajuato")),l=React.createElement(Panel,{tipo:PanelTipo.FLEX_BASICO,contenido:[n,c],clases:"flex-column justify-content-center align-items-center h-100"}),o=[];o.push({ancho:["12","6"],breakpoint:["sm","lg"],clases:"mt-5 d-flex",contenido:React.createElement(Panel,{tipo:PanelTipo.BASICO,contenido:l})}),o.push({ancho:["12","6"],breakpoint:["sm","lg"],clases:"mt-5 d-flex",contenido:React.createElement(Panel,{tipo:PanelTipo.BASICO,contenido:a})}),o.push({ancho:["12"],contenido:React.createElement("div",{className:"bkg-secundario my-5",style:{width:"100%",height:"2vh"}})});let r=React.createElement(Fila,{columnas:o,clases:"my-basicoi"});return React.createElement(Panel,{tipo:PanelTipo.BASICO,contenido:[e,r],clases:"py-basico-5"})}render(){let e=React.createElement(Panel,{tipo:PanelTipo.BASICO,breakpoint:"fluid",largo:"auto",contenido:this.renderContenido()});return React.createElement("section",{id:"descripcion",className:"container-fluid seccion-descripcion"},e)}}