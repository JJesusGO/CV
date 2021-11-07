/* global PanelTipo, BotonTipo, PaletaColor*/

const PanelPrincipalTipo = {
    INICIO : 0,
    EXPERIENCIA : 1
};

class PanelPrincipal extends React.Component{
    
            
    renderImagen(){
        
        let imagen = ( <img  className = "h-100 w-auto rellax" 
                            src="/media/img/foto/foto.jpg"
                            data-rellax-speed = "-8"
                        />);                   
                
                
        let panelimagen = <Panel    
                               tipo = {PanelTipo.BASICO}
                               breakpoint = "fluid"
                               contenido = {imagen}
                               largo = "100vh"
                               clases = "panel-foto m-0"    
                               aos="fade-down"
                          />;          
                          
        return panelimagen;
    }
    renderInicio(){
                
        let nombrestilo = {fontSize: "clamp(20px,10vh,50px)"};
                
        let columnas = [[],[],[]];        
        columnas[0].push(  {                        
                            contenido: (<div className="w-100 h-100 bkg-blanco p-basico--2 shadow">
                                            <h3 className="txt-principal txt-centrado">Mi nombre es:</h3>
                                        </div>),
                            ancho  : [12,9,5],
                            offset : [0,1,1],
                            breakpoint : ['md','lg','xl']
                        });
        columnas[1].push(  {                        
                            contenido: (<div className="w-100 h-100 p-basico--2">
                                            <h1 className="nombre txt-blanco txt-izquierda" style={nombrestilo}>Gutiérrez</h1>
                                            <h1 className="nombre txt-blanco txt-izquierda" style={nombrestilo}>Ornelas</h1>
                                            <h1 className="nombre txt-blanco txt-izquierda" style={nombrestilo}>José de Jesús</h1>
                                        </div>),
                            ancho  : [12,10],
                            offset : [0,2],              
                            breakpoint : ['md','lg']
                        });
        columnas[2].push(  {                        
                            contenido: (<div className="w-100 h-100 bkg-secundario px-basico--2 py-basico shadow">
                                            <h4 className="txt-blanco txt-centrado">Diseñador,desarrollador y programador</h4>
                                        </div>),
                            ancho  : [12,6],
                            offset : [0,3],              
                            breakpoint : ['md','lg']                            
                        });
                        
               
        let panelfilas = [   <Fila columnas={columnas[0]}/>,
                            <Fila clases="mt-3" columnas={columnas[1]}/>,
                            <Fila clases="mt-3 mb-3" columnas={columnas[2]}/>];
                
        let panelinicio = <Panel tipo = {PanelTipo.BASICO} 
                                breakpoint = "fluid"                                
                                contenido = {panelfilas}
                                margen = "13vh"
                                clases = "d-flex flex-column justify-content-center align-items-center"
                                aos="fade-up"
                              />;
                              
        return panelinicio;
    }
    renderExperiencia(){
                
        let nombrestilo = {fontSize: "clamp(10px,7vh,50px)"};
                
        let columnas = [[],[],[]];   
        columnas[0].push(  {                        
                            contenido: (
                                            <h1 className="txt-blanco txt-centrado" style={nombrestilo}>__ Experiencia</h1>
                                        ),
                            ancho  : [12,10],
                            offset : [0,1],              
                            breakpoint : ['md','lg']
                        });
        columnas[1].push(  {                        
                            contenido: (<div className="w-100 d-flex justify-content-center" style={{height:'200%'}}>
                                        <img className="h-100 w-auto mx-auto" src="/media/img/icono-experiencia.svg"/>
                                        </div>),
                            ancho  : [8],
                            offset : [2],
                            breakpoint : ['md']
                        });
        
                                      
        let panelfilas = [  <Fila clases ="mt-basicoi-3" columnas={columnas[0]}/>,
                            <Fila clases ="mt-basicoi" columnas={columnas[1]} /> ];
                
        let panelexperiencia = <Panel   tipo = {PanelTipo.BASICO} 
                                        breakpoint = "fluid"                                
                                        contenido = {panelfilas}
                                        margen = "12vh"
                                        clases = "d-flex flex-column justify-content-start align-items-center"
                                        aos="fade-up"
                                />;
                              
        return panelexperiencia;
    }
    
    
    render(){
            
        let tipo = this.props.tipo || PanelPrincipalTipo.INICIO;
        let contenido = null;
        let fondo = 'bkg-principal';
        
        if(tipo === PanelPrincipalTipo.INICIO){
            contenido  = this.renderInicio();
            fondo = 'bkg-principal';
        }
        else if(tipo === PanelPrincipalTipo.EXPERIENCIA){
            contenido  = this.renderExperiencia();
            fondo = 'bkg-secundario';
        }
        
        let panelpresentacion = <Panel    
                                    tipo = {PanelTipo.BASICO}           
                                    breakpoint = "fluid"   
                                    largo  = "100%"
                                    clases = "panel-presentacion"    
                                    contenido = {[contenido,this.renderImagen()]}
                                />;                  
        
        
        return (<section id="portada" className = {"container-fluid seccion-presentacion "+fondo}>
                      {panelpresentacion}                             
                </section>);
    }
       
};
