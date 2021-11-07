
/* global PanelTipo, PaletaColor */

class PanelExperiencia extends React.Component{
            
    constructor(props){
        super(props);
        this.state = {
            contenidoizquierda : [
                {
                    titulo: 'Educación', 
                    contenido: [
                                'GRADO Técnico en Mecanica Industrial.',
                                'GRADO Licenciatura en Ingenieria en Mecatronica.'
                                ]
                },
                {
                    titulo: 'Cursos y/o talleres', 
                    contenido: [
                                'Introducción a la programación del PLC Beckhoff Cx1010: Conexiones e interacción de datos.',
                                'Curso: "Introducción a las habilidades digitales".',
                                'Curso: "Aprendiendo a aprender"'
                                ]
                },
                {
                    titulo: 'Trabajos y/o investigaciones', 
                    contenido: [
                                'Tesis: "Simulación numérica de anillos de auto-difracción"'
                                ]
                }
            ],
            contenidoderecha : [
                {
                    titulo: 'Experiencia Profesional', 
                    contenido: [
                                'Desarrollador de aplicaciones y sistemas: Prototipo de aplicación de control de inventario local y en la nube para dispositivos Android y Windows. Desarrollo de un recorrido virtual.',
                                'Desarrollador de software: Aplicación para el apoyo en el diseño de transformadores de alto voltaje. Análisis de regresión de variables mediante IA para la aproximación de peso en la construcción de transformadores.',
                                'Desarrollador web: Desarrollo de una plataforma web para la creación e implementación de encuestas del "Efecto de la cultura organizacional sobre los factores de riesgo psicosocial en Universidades e Instituciones de Educación Superior de Guanajuato"'
                                ]
                }
            ] 
        };
    }
                      
    renderExperiencia(titulo,contenido){
                
        let elementocontenido =  contenido.map((e)=>{
            return (<li className="txt-izquierda txt-blanco mt-2">{e}</li>);       
        });
        let elementoinfo = [<h3 className="txt-blanco txt-izquierda" data-aos="fade-up">{titulo}</h3>,
                            <ul className="mt-3" data-aos="fade-up"> {elementocontenido} </ul>];
        
        let columnas = [];                
        
        columnas.push({ancho:[2], clases:"p-0", contenido:[<div className="bkg-blanco w-100 h-100 shadow"></div>]});
        columnas.push({ancho:[10], contenido:[<div className="w-100 h-100">{elementoinfo}</div>]});
        
        return (<Fila columnas={columnas} clases="mt-3"/>);
      
    }
            
    renderContenido(){
        let encabezado = <h1 className="txt-centrado txt-blanco mt-basico" data-aos="fade-up">__ Experiencia</h1>       
                
        let contenidoizquierda = this.state.contenidoizquierda.map((e)=>{
            return this.renderExperiencia(e.titulo,e.contenido);
        });
        let contenidoderecha = this.state.contenidoderecha.map((e)=>{
            return this.renderExperiencia(e.titulo,e.contenido);
        });
                
        let panelizquierdo = (<Panel tipo = {PanelTipo.FLEX_BASICO}
                                contenido = {contenidoizquierda}
                                clases = "flex-column justify-content-center align-items-center h-100"
                              />);
        let panelderecho   = (<Panel tipo = {PanelTipo.FLEX_BASICO}
                                contenido = {contenidoderecha}
                                clases = "flex-column justify-content-center align-items-center h-100"
                              />);
                
        let columnas = [];     
        
        columnas.push({
                contenido: panelizquierdo,
                ancho : [12,6],
                breakpoint: ['sm','md'],
                clases : "mt-3 d-flex p-0"
        });
        columnas.push({
                contenido: panelderecho,
                ancho : [12,6],
                breakpoint: ['sm','md'],
                clases : "mt-3 d-flex p-0"
        });
        
        let fila =  (<Fila columnas={columnas}
                          clases = "my-basicoi px-basico"
                    />);        
            
        let boton = (<BotonPrincipal id = "experiencia_mas" 
                                    color = {PaletaColor.BLANCO}
                                    barColor = {PaletaColor.SECUNDARIO}
                                    texto="[ Conocer más ]"
                                    clases =  "mb-5 py-basico--3"
                                    textoClases="txt-secundario txt-centrado"
                                    onclick = {this.props.onclickexperiencia}
                    />);
            
        let panelprincipal =   <Panel tipo = {PanelTipo.BASICO}         
                                     contenido={[encabezado,fila,boton]} 
                                     breakpoint = "sm"
                                     clases = "py-basico-5"
                                />;
         
        return panelprincipal;
    }
     
    render(){
                                                               
        let contenido = [
                            <EncabezadoSeccion color = {PaletaColor.SECUNDARIO}/>,
                            this.renderContenido()
                        ];
        
        let panelexperiencia = <Panel    
                                    tipo = {PanelTipo.BASICO}           
                                    breakpoint = "fluid"                                    
                                    largo = "auto"
                                    contenido={contenido}
                                />;                          
        
        return (<section id="experiencia" className = "container-fluid seccion-experiencia">
                      {panelexperiencia}                             
                </section>);
    }
    
}

