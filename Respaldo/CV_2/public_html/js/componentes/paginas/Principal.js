"use strict";class Principal extends React.Component{constructor(e){super(e),this.state={experiencia:!1}}componentDidMount(){let e=new Rellax(".rellax");setTimeout((()=>{e.refresh()}),1),$('[data-toggle="popover"]').popover()}clickexperiencia(){this.setState({experiencia:!0})}render(){return this.state.experiencia?React.createElement(Redirect,{to:"/experiencia"}):React.createElement("div",{className:"container-fluid m-0 p-0"},React.createElement(Navegador,{tipo:NavegadorTipo.INICIO}),React.createElement(PanelPrincipal,{tipo:PanelPrincipalTipo.INICIO}),React.createElement(PanelDescripcion,null),React.createElement(PanelExperiencia,{onclickexperiencia:()=>{this.clickexperiencia()}}),React.createElement(PanelProyectos,null),React.createElement(PanelPortafolioBlog,null),React.createElement(PanelConocimientos,null),React.createElement(PanelServicios,null),React.createElement(PanelDescargarCV,null),React.createElement(PanelContacto,null),React.createElement(Pie,null))}}