
/* global PanelTipo */

class PanelProyectos extends React.Component{
            
    constructor(props){
        super(props);               
        this.state = {
            proyectos : [
                { 
                    fecha  : "Febrero 2021",
                    titulo : "Aplicación web para elaboración de encuestas con fines de investigación.",
                    descripcion : "Este proyecto constó del diseño, desarrollo y programación de una aplicación web responsiva para elaborar, administrar y aplicar encuestas con fines de investigación dentro de la cultura organizacional para el estudio de la salud de colaboradores dentro de instituciones de educación superior de Guanajuato. Esta página está elaborada con Javascript basado en React Production, JSX, Babel, Bootstrap, SASS y montado en un modelo MVC.",
                    portada : "/media/img/proyectos/portada_1.jpg"
                },
                { 
                    fecha  : "Enero 2021",
                    titulo : "Aplicación de escritorio para el apoyo en el diseño de transformadores de alto voltaje.",
                    descripcion : 'Es un proyecto donde se realizó un programa que permite apoyar a los ingenieros en el diseño de transformadores eléctricos, tiene como principal propósito que el cálculo e interpretación de datos se realice de una manera más optima, es decir, reduce los tiempos y requerimiento humano por medio de una estructura intuitiva y fácil de usar. En cuanto a los aspectos técnicos se realizó con ayuda de la distribución open-source de C# (Mono, en su versión de WinForms) y adicionalmente fue necesario crear un lenguaje de “scripteado” denominado "NOST" para describir conexiones de los transformadores de una manera más rápida y estandarizada.',
                    portada : "/media/img/proyectos/portada_2.jpg"
                },
                { 
                    fecha  : "Marzo 2020",
                    titulo : "Recorrido virtual para departamento Oben Irapuato",
                    descripcion : 'Este proyecto corresponde a una propuesta de recorrido virtual para venta de un departamento. Cuenta con modelado 3D, texturizado, iluminación y ambientación. Así como información de cada una de las habitaciones que lo componen. El render está disponible como aplicación de escritorio y para su montaje y publicación en página web.  Todo el proyecto está programado en C#, montado en Unity Engine y los modelados, texturas, materiales e ilustraciones elaborados en Blender, GravitDesigner y FreeCAD.',
                    portada : "/media/img/proyectos/portada_3.jpg"
                }                        
            ]
        };
    }
    
    renderProyecto(fecha,titulo,descripcion,portada){
        
        
        let imagen    = <div className = "w-100 overflow-hidden bkg-imagen" style={{height:'35%'}}>                            
                            <img className="p-0 m-0 h-auto w-100" src={portada} />                            
                        </div>;
        let contenido = (<div className = "w-100 p-basico--2"> 
                            <p className="txt-negro txt-derecha m-0">{fecha}</p>
                            <p className="txt-negro txt-izquierda mt-2"><strong>{titulo}</strong></p>
                            <p className="txt-negro txt-justificado mt-2" style={{fontSize : 'clamp(9px,2vh,13px)'}}>{descripcion}</p>
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
                       largo = "95vh"
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
                contenido: this.renderProyecto(p.fecha,p.titulo,p.descripcion,p.portada),
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

