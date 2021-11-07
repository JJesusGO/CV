const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

let raiz = document.getElementById("ventana-app");

const modelo = new Modelo();
const aplicacion = <App/>;

ReactDOM.render(aplicacion,raiz);


