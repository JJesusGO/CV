"use strict";class App extends React.Component{componentDidMount(){AOS.init(),$("#ventana-carga").fadeOut("200")}render(){return React.createElement(Router,null,React.createElement(Switch,null,React.createElement(Route,{exact:!0,path:"/"},React.createElement(Redirect,{to:ServidorRoute})),React.createElement(Route,{exact:!0,path:"/inicio"},React.createElement(Principal,null))))}}