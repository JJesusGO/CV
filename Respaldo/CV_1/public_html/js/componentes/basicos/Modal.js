"use strict";const ModalTipo={BASICO:0,ESTATICO:1};class Modal extends React.Component{render(){let e=this.props.tipo||ModalTipo.BASICO,a=this.props.id||"",t=this.props.clases||"",s=this.props.dialogClases||"",l=this.props.encabezado||null,o=this.props.contenido||null,c=this.props.pie||null;switch(e){case ModalTipo.BASICO:return React.createElement("div",{className:"modal "+t,id:a},React.createElement("div",{className:"modal-dialog "+s},React.createElement("div",{className:"modal-content"},l,o,c)));case ModalTipo.ESTATICO:return React.createElement("div",{className:"modal "+t,id:a,"data-backdrop":"static"},React.createElement("div",{className:"modal-dialog "+s},React.createElement("div",{className:"modal-content"},l,o,c)))}}}