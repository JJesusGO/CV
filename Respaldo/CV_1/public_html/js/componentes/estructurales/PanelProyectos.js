"use strict";class PanelProyectos extends React.Component{constructor(e){super(e),this.state={proyectos:[{fecha:"21/02/2021",titulo:"Titulo1",descripcion:"Descripcion1"},{fecha:"21/02/2021",titulo:"Titulo2",descripcion:"Descripcion2"},{fecha:"21/02/2021",titulo:"Titulo3",descripcion:"Descripcion3"}]}}renderProyecto(e,t,a){let c=React.createElement("div",{className:"w-100 h-50 overflow-hidden bkg-imagen"}),o=React.createElement("div",{className:"w-100 p-basico--2"},React.createElement("p",{className:"txt-negro txt-derecha m-0"},e),React.createElement("p",{className:"txt-negro txt-izquierda"},React.createElement("strong",null,t)),React.createElement("p",{className:"txt-negro txt-justificado mt-2"},a)),n=React.createElement(Panel,{tipo:PanelTipo.BASICO,contenido:[c,o],breakpoint:"fluid",clases:"h-100"}),i=[];i.push({contenido:React.createElement("div",{className:"w-100 h-100 bkg-terciario"}),ancho:[1],clases:"h-100 p-0"}),i.push({contenido:n,ancho:[11],clases:"h-100 p-0"});let l=React.createElement(Fila,{columnas:i,clases:"h-100"}),s=React.createElement(Panel,{tipo:PanelTipo.BASICO,largo:"60vh",breakpoint:"fluid",contenido:l,clases:"bkg-blanco shadow overflow-hidden",aos:"fade-up"});return React.createElement(Boton,{tipo:BotonTipo.BASICO,contenido:s,clases:"w-100 h-100"})}renderContenido(){let e=React.createElement("h1",{className:"txt-centrado txt-principal mt-basico","data-aos":"fade-up"},"Proyectos __"),t=[],a=this.state.proyectos.map((e=>({contenido:this.renderProyecto(e.fecha,e.titulo,e.descripcion),ancho:[12,4],breakpoint:["sm","md"],clases:"mt-3 d-flex"})));for(let e=0;e<a.length;e++)t.push(a[e]);let c=React.createElement(Fila,{columnas:t,clases:"my-basicoi px-basico"});return React.createElement(Panel,{tipo:PanelTipo.BASICO,contenido:[e,c],breakpoint:"fluid",clases:"py-basico-5"})}render(){let e=[React.createElement(EncabezadoSeccion,{color:PaletaColor.BLANCO}),this.renderContenido()],t=React.createElement(Panel,{tipo:PanelTipo.BASICO,breakpoint:"fluid",largo:"auto",contenido:e});return React.createElement("section",{id:"proyectos",className:"container-fluid seccion-proyectos"},t)}}