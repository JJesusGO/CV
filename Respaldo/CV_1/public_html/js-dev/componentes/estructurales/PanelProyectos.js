
/* global PanelTipo */

class PanelProyectos extends React.Component{
            
    constructor(props){
        super(props);               
        this.state = {
            proyectos : [
                { 
                    fecha  : "21/02/2021",
                    titulo : "Titulo1",
                    descripcion : "Descripcion1"
                },
                { 
                    fecha  : "21/02/2021",
                    titulo : "Titulo2",
                    descripcion : "Descripcion2"
                },
                { 
                    fecha  : "21/02/2021",
                    titulo : "Titulo3",
                    descripcion : "Descripcion3"
                }                        
            ]
        };
    }
    
    renderProyecto(fecha,titulo,descripcion){
        
        
        let imagen    = <div className = "w-100 h-50 overflow-hidden bkg-imagen"></div>;
        let contenido = (<div className = "w-100 p-basico--2"> 
                            <p className="txt-negro txt-derecha m-0">{fecha}</p>
                            <p className="txt-negro txt-izquierda"><strong>{titulo}</strong></p>
                            <p className="txt-negro txt-justificado mt-2">{descripcion}</p>
                        </div>);
        
        let panelcontenido = (<Panel tipo = {PanelTipo.BASICO} 
                                contenido = {[imagen,contenido]}
                                breakpoint = "fluid"
                                clases = "h-100"
                               />);
        
        let columnas = [];         
        columnas.push({
                        contenido : (<div className="w-100 h-100 bkg-terciario"></div>),
                        ancho : [1],
                        clases : "h-100 p-0"
                    });        
        columnas.push({
                    contenido : (panelcontenido),
                        ancho : [11],
                        clases : "h-100 p-0"
                    });
        
        
        let principal = <Fila columnas={columnas}
                              clases = "h-100"
                        />                
                
        let panelprincipal = (<Panel tipo  = {PanelTipo.BASICO} 
                       largo = "60vh"
                       breakpoint = "fluid" 
                       contenido = {principal}
                       clases = "bkg-blanco shadow overflow-hidden"
                       aos = "fade-up"
                />);
                
        return (<Boton tipo={BotonTipo.BASICO}
                       contenido = {panelprincipal}
                        clases ="w-100 h-100"
                />);
        
    }
        
    renderContenido(){
        let encabezado = <h1 className="txt-centrado txt-principal mt-basico" data-aos="fade-up">Proyectos __</h1>       
                       
        let columnas = [];
        
        let proyectos = this.state.proyectos.map((p)=>{           
            return {
                contenido: this.renderProyecto(p.fecha,p.titulo,p.descripcion),
                ancho : [12,4],
                breakpoint: ['sm','md'],
                clases : "mt-3 d-flex"
            };            
        });
        
        for(let i=0;i<proyectos.length;i++)
            columnas.push(proyectos[i]);
                
        let fila =  (<Fila columnas={columnas}
                          clases = "my-basicoi px-basico"
                    />);        
                                
        let panelprincipal =   (<Panel tipo = {PanelTipo.BASICO}         
                                     contenido={[encabezado,fila]} 
                                     breakpoint = "fluid"
                                     clases = "py-basico-5"
                                />);
         
        return panelprincipal;
    }
     
    render(){
                                                               
        let contenido = [
                            <EncabezadoSeccion color = {PaletaColor.BLANCO}/>,
                            this.renderContenido()
                        ];
        
        let panelproyectos = <Panel    
                                    tipo = {PanelTipo.BASICO}           
                                    breakpoint = "fluid"                                    
                                    largo = "auto"
                                    contenido={contenido}
                                />;                          
        
        return (<section id="proyectos" className = "container-fluid seccion-proyectos">
                      {panelproyectos}                             
                </section>);
    }
    
}

