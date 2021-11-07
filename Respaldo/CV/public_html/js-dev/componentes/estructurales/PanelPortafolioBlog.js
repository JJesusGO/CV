

/* global PanelTipo, BotonTipo */

class PanelPortafolioBlog extends React.Component{
            
    constructor(props){
        super(props);               
        this.state = {
            entradas : [
                { 
                    fecha  : "21/02/2021",
                    titulo : "Simulación numerica de anillos de auto-difracción",
                    descripcion : "Los patrones de anillos de auto-difracción son un fenómeno de la óptica no-lineal, cuya investigación es importante para la caracterización de materiales, debido a esto se vuelve necesario crear un sistema de muestreo y parametrización de los patrones obtenidos de manera experimental con respecto a un modelo matemático. Sin embargo, realizar este ajuste de manera manual puede ser una práctica tediosa e imprecisa, que presente un desgaste humano y un prolongado tiempo hora-máquina, por lo que en esta tesis se planteó aplicar diversos campos del desarrollo de software, como la visión por computadora y modelos numéricos para automatizar y crear una metodología más eficiente y confiable.",
                    tipo : "Tesis",
                    portada: "/media/img/portafolio/portafolio1.jpg"
                }
            ]
        };
    }
    
    renderEntrada(fecha,titulo,descripcion,tipo,portada){
        
        let imagen    = <div className = "w-100 h-100 overflow-hidden bkg-imagen">
                            <div className="d-flex flex-row-reverse justify-content-end justify-content-center">
                                <img className="p-0 m-0 h-100 w-auto" src={portada} />      
                            </div>
                        </div>;
        
        let contenido = (<div className = "w-100 p-basico--2"> 
                            <p className="txt-negro txt-derecha m-0">{fecha}</p>
                            <p className="txt-negro txt-izquierda"><strong>{titulo}</strong></p>                            
                            <p className="txt-negro txt-justificado mt-2" style={{fontSize : 'clamp(9px,2vh,13px)'}}>{descripcion}</p>
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
                       largo = {'85vh'}
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
                contenido: this.renderEntrada(c.fecha,c.titulo,c.descripcion,c.tipo,c.portada),
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

