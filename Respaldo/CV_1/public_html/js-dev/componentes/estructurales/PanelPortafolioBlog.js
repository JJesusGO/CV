

/* global PanelTipo, BotonTipo */

class PanelPortafolioBlog extends React.Component{
            
    constructor(props){
        super(props);               
        this.state = {
            entradas : [
                { 
                    fecha  : "21/02/2021",
                    titulo : "Titulo1",
                    descripcion : "Descripcion1",
                    tipo : "Blog"
                },
                { 
                    fecha  : "21/02/2021",
                    titulo : "Titulo2",
                    descripcion : "Descripcion2",
                    tipo : "Blog"
                },
                { 
                    fecha  : "21/02/2021",
                    titulo : "Titulo3",
                    descripcion : "Descripcion3",
                    tipo : "Portafolio"
                },
                { 
                    fecha  : "21/02/2021",
                    titulo : "Titulo4",
                    descripcion : "Descripcion4",
                    tipo : "Portafolio"
                }                     
            ]
        };
    }
    
    renderEntrada(fecha,titulo,descripcion,tipo){
        
        let imagen    = <div className = "w-100 h-100 bkg-imagen"></div>;
        
        let contenido = (<div className = "w-100 p-basico--2"> 
                            <p className="txt-negro txt-derecha m-0">{fecha}</p>
                            <p className="txt-negro txt-izquierda"><strong>{titulo}</strong></p>                            
                            <p className="txt-negro txt-justificado mt-2">{descripcion}</p>
                            <div className="w-100 bkg-terciario" style = {{height: '1vh'}}></div>
                            <p className="txt-negro txt-derecha mt-2">{tipo}</p>
                        </div>);
        
        let panelcontenido = (<Panel tipo = {PanelTipo.BASICO} 
                                contenido = {[contenido]}
                                breakpoint = "fluid"
                                clases = "h-100"
                               />);
        
        let columnas = [];     
        columnas.push({
                        contenido : (panelcontenido),
                        ancho : [9,6],
                        breakpoint : ['sm','md'],
                        clases : "h-auto p-0"
                    });        
        columnas.push({
                        contenido : (imagen),
                        ancho : [3,6],
                        breakpoint : ['sm','md'],
                        clases : "h-100 p-0"
                    });        
        
        let principal = <Fila columnas={columnas}
                              clases = "h-100"
                        />                
                
        let barra = <div className="position-absolute bkg-secundario" style={{bottom:'0',left:'0',right:'0',height:'2vh'}}></div>;
                
        let panelprincipal = (<Panel tipo  = {PanelTipo.BASICO} 
                       largo = {['0','70vh','500px']}
                       breakpoint = "fluid" 
                       contenido = {[principal,barra]}
                       clases = "bkg-blanco shadow overflow-hidden position-relative"
                       aos = "fade-up"
                />);
                
        return (<Boton tipo={BotonTipo.BASICO}
                       contenido = {panelprincipal}
                       clases ="w-100 h-100"
                />);
        
    }
        
    renderContenido(){
        let encabezado = <h1  className="txt-centrado txt-blanco mt-basico" data-aos="fade-up">__ Portafolio/Blog</h1>       
                       
        let columnas = [];
        
        let entradas = this.state.entradas.map((c)=>{           
            return {
                contenido: this.renderEntrada(c.fecha,c.titulo,c.descripcion,c.tipo),
                ancho : [12,6],
                breakpoint: ['sm','md'],
                clases : "mt-3 d-flex p-basico"
            };            
        });
        
        for(let i=0;i<entradas.length;i++)
            columnas.push(entradas[i]);
                
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
                            <EncabezadoSeccion color = {PaletaColor.PRINCIPAL}/>,
                            this.renderContenido()
                        ];
        
        let panelprotafolioblog = <Panel    
                                    tipo = {PanelTipo.BASICO}           
                                    breakpoint = "fluid"                                    
                                    largo = "auto"
                                    contenido={contenido}
                                />;                          
        
        return (<section id="portafolioblog" className = "container-fluid seccion-portafolioblog">
                      {panelprotafolioblog}                             
                </section>);
    }
    
}

