/* global PanelTipo, PaletaColor, BotonTipo */

class PanelServicios extends React.Component{
        
    constructor(props){
        super(props);
        this.state = {
            servicios :[
                {titulo:'Desarrollo web',descripcion:'Diseño, desarrollo y programación de páginas y aplicaciones web responsivas para su funcionamiento en diversos dispositivos usando las tendencias de desarrollo front-end y back-end con Javascript, React, SASS, HTML, PHP, MySQL, etc.'},
                {titulo:'Desarrollo de aplicaciones',descripcion:'Diseño, desarrollo y programación de aplicaciones y software enfocados a ejecutarse en dispositivos Windows, Linux y Android con una operación offline, online y multiplataforma e implementando algoritmos especializados y optimizados.'},
                {titulo:'Desarrollo de videojuegos',descripcion:'Creación de videojuegos, partiendo desde el diseño de gameplay, entidades, actores, mecánicas y niveles, hasta su implementación o prototipado de UI/UX, Creación de recursos 2D y 3D, IA, programación, sistemas, entrada de periféricos, físicas, VFX y audio para plataformas como Windows, Linux y Android con Unity, Unreal Engine y Monogame.'},
                {titulo:'Diseño de UI/UX',descripcion:'Implementación de la metodología "Diseño Orientado a Entidades" con enfoque en la creación de sistemas, maquinas de estado y flujos de trabajo, tomando como base el principio de "diseño orientado al humano".'},
                {titulo:'Sistemas de control industrial',descripcion:'Diseño, desarrollo y programación de sistemas enfocados a aplicarse en procesos industriales, tanto en su implementación en dispositivos especializado (Microcontrolador o PLC) como a el manejo y diseño de la metodología de administración de los recursos materiales y humanos.'},
                {titulo:'Artista Tecnico',descripcion:'Creación de herramientas e investigacion de nuevas tecnologías para volver más productivo el trabajo, proyectos y productos. Consolidación de las áreas de arte y programación, enfocado en la capacitación e implementación. Enfoque técnico de las herramientas de creación de arte digital para la optimización de tiempos y recursos.'},
                {titulo:'Modelado y Texturizado 3D',descripcion:'Diseño de la topología de una geometria 3D, retopologia, normales, UV’s y creación de las texturas base y baking de características y propiedades mediante técnicas de mapeo usando Blender, FreeCAD, Solidworks y Subtance Painter.'},
                {titulo:'Animación',descripcion:'Diseño e implementación del rigging de un modelo o escultura 3D para su composiciones de escena y animación usando Blender.'},   
                {titulo:'Renderizado',descripcion:'Creación de imágenes y videos a partir de la proyección de escenas 3D utilizando técnicas en tiempo real y por trazado de rayos para mostrar shaders, materiales PBR e iluminación en Blender.'},
                {titulo:'Diseño y Administración de Proyectos',descripcion:'Utilizando la metodología de “diseño y desarrollo orientado a entidades” se modelan las etapas y procesos que se requiere en un proyecto en un equipo. La principal motivación es que esta metodología permite crear recursos útiles y optimizados para que equipos de trabajo de diferentes ámbitos y rubros conozcan la planeación.'},
                {titulo:'Optimización y análisis de datos',descripcion:'Utilizando diversos recursos virtuales y reales se puede hacer un análisis de los procesos, servicios y/o productos. Con dicha investigación se pueden obtener valores que se pueden filtrar y darles un tratamiento para obtener resultados que permitan la evolución del proyecto a un punto donde los resultados se puedan obtener de mejor manera.'},
                {titulo:'Consultoria o Asesoria',descripcion:'¿Requiere aprender o implementar un tema en específico? Utilizando la técnica de Feynman se puede crear un curso especializado en sus necesidades y requerimientos. El tema disponible puede ser cualquier tema que este dentro de los conocimientos o que pueda aprender y simplificar con diversos recursos y presentaciones.'}
            ] 
        };
    }    
    
    componentDidMount(){
        this.state.servicios.map((s,i)=>{
            anime({
                    targets: "#servicio-"+i,
                    translateY: ['0','100%'],
                    duration : 100,
                    easing: 'easeOutCirc'
              });
        });            
    }
    
    renderServicio(index,titulo,descripcion){            
                
        let panel = <div className="b-simple-blanco w-100 h-100 position-relative overflow-hidden" data-aos="fade-up">
                        <div className="d-flex flex-column justify-content-center align-content-center p-basico-2 w-100 h-100">
                            <img src="/media/img/icono-formato.svg" className="h-auto mx-auto" style={{width: '35%'}}/>
                            <h4  className="txt-centrado txt-blanco">{titulo}</h4>
                        </div>  
                        <div id = {"servicio-"+index} className="position-absolute w-100 h-100 bkg-blanco b-hide" style={{top:0}}>
                            <div className="d-flex flex-column justify-content-center align-content-center p-basico w-100 h-100">
                                <h5 className="txt-centrado txt-secundario mt-1"><strong>{titulo}</strong></h5>
                                <p className="txt-centrado txt-secundario txt-1 mt-2">{descripcion}</p>
                            </div>
                        </div>                                              
                    </div>;                              
        let funcion  = (estado)=>{
            if(estado){
                anime({
                    targets: "#servicio-"+index,
                    translateY: ['100%','0'],
                    duration : 400,
                    easing: 'easeOutCirc'
                });
            }
            else{
                anime({
                    targets: "#servicio-"+index,
                    translateY: ['0','100%'],
                    duration : 400,
                    easing: 'easeOutCirc'
                });
            }            
        };
        
        return <Boton tipo = {BotonTipo.BASICO} 
                      clases="p-basico--4 w-100 h-100" 
                      contenido={panel}
                      onhover = {funcion}
                />;
        
    }
    renderContenido(){
        let encabezado = <h1 className="txt-centrado txt-blanco mt-basico" data-aos="fade-up">__ Servicios</h1>;
        
        let servicios = this.state.servicios.map((s,i)=>{
            return {
                contenido : this.renderServicio(i,s.titulo,s.descripcion),
                ancho : [4],
                breakpoint : ['md'],
                clases : "mt-3 p-1"
            };
        });
        
        let fila = <Fila columnas={servicios} clases="mt-basicoi"/>;  
        
        return (<Panel tipo = {PanelTipo.BASICO}         
                                     contenido={[encabezado,fila]} 
                                     breakpoint = "sm"
                                     clases = "py-basico-5"
                                />);                 
    }
     
    render(){                                                               
        let contenido = [
                            <EncabezadoSeccion color = {PaletaColor.SECUNDARIO}/>,
                            this.renderContenido()
                        ];        
        let panelservicios = <Panel    
                                    tipo = {PanelTipo.BASICO}           
                                    breakpoint = "fluid"                                    
                                    largo = "auto"
                                    contenido={contenido}
                            />;                          
        
        return (<section id="servicios" className = "container-fluid seccion-servicios">
                      {panelservicios}                             
                </section>);
    }
    
};

