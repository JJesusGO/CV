
/* global PanelTipo, PaletaColor, BotonTipo */

class PanelConocimientos extends React.Component{
        
    constructor(props){
        super(props);
        this.state = {
            metodos:[
                {titulo: 'Tecnica de Feynman',subtitulo: 'Aprender, simplificar y enseñar'},
                {titulo: 'Diseño y Desarrollo Orientado a Entidades',subtitulo: 'Diseño modular y estructurado de proyectos'}
            ],        
            tecnologia:[
                [
                    {titulo:"Ensamblador",descripcion:[]},
                    {titulo:"C y C++",descripcion:['SDL','Unreal Engine','Arduino','PIC','Atmel']},
                    {titulo:"C#",descripcion:['WinForms','Unity Engine','Monogame']},
                    {titulo:"Java",descripcion:['Processing','Java Swing']},
                    {titulo:"Scala",descripcion:[]},
                    {titulo:"Python",descripcion:['V-REP','PyGame']}
                ],
                [
                    {titulo:"HTML",descripcion:['HTML5','Bootstrap 4']},
                    {titulo:"CSS",descripcion:['Boostrap 4']},
                    {titulo:"SASS",descripcion:['Boostrap 4','Transpiler']},
                    {titulo:"Javascript",descripcion:['NodeJS','React','ReactNative','JQuery','AnimeJS','Rellax','Parallax','AOS','Babel/JSX','Three.JS','etc']},
                    {titulo:"Typescript",descripcion:[]},
                    {titulo:"PHP",descripcion:['Laravel']}
                ],
                [
                    {titulo:"SQL",descripcion:['MySQL']},
                    {titulo:"JSON y XML",descripcion:[]},
                    {titulo:"Matlab",descripcion:['GUIDE']},
                    {titulo:"PLC",descripcion:['Bloques lógicos','Escalera','LOGO']},
                    {titulo:"VHDL",descripcion:['FPGA','Cyclone III','Cyclone IV']}
                ]
            ],
            software:[
                {titulo: 'General', descripcion: ['Paquetería Office: Excel, Word, PowerPoint','GitHub Desktop']},
                {titulo: 'Analisis de datos',descripcion: ['Knime']},
                {titulo: 'Desarrollo web',descripcion: ['Visual Code (HTML, JAVASCRIPT, TYPESCRIPT, CSS, SASS, Y PHP)','NetBeans (Java, HTML, CSS, SASS, PHP)','nunuStudio (WebGL, Three.js, Javascript)']},
                {titulo: 'Desarrollo de Software',descripcion: ['Visual Studio (C, C++ y C#)','Matlab','Codeblocks (C y C++)','Eclipse (Java)','Processing (Java)','MonoDevelop (C#)','SharpDevelop (C#)','VisionBuilder']},
                {titulo: 'Electrónica',descripcion: ['AtmelStudio','MPLAB (C)','Mbed(C++)','Arduino (C++)','LOGO! Software','Proteus']},
                {titulo: 'Desarrollo de aplicaciones interactivas en tiempo real',descripcion: ['V_REP (Python)','JetBrain-Pycharm(Python)','Unity (C#)','Unreal Engine (Blueprints y C++)']},
                {titulo: 'Modelado, texturizado, animación, simulación 3D y diseño gráfico',descripcion: ['Solidworks','FreeCAD','Blender','Subtance Painter','GravitDesigner']}
            ]
        };
    }
    
    
    componentDidMount(){
        
        this.state.tecnologia.map((a,i1)=>{
                            a.map((e,i2)=>{
                                anime({
                                    targets: "#tecnologia-"+i1+"-"+i2,
                                    translateY: ['0','100%'],
                                    duration : 1,
                                    easing: 'easeOutCirc'
                                });
                                return null;
                            });
                            return null;
                        });
    }
    
    renderSoftwareElemento(titulo,descripcion){
        let elementotitulo = <h3 className="txt-izquierda txt-secundario" data-aos="fade-up">{titulo}</h3>;
        
        let listadoelementos = descripcion.map((d)=>{
           return <li className="txt-terciario"><p className="txt-izquierda txt-terciario mb-0">{d}</p></li>; 
        });
        let listadodescripcion = <ul data-aos="fade-up">{listadoelementos}</ul>;
        
        let columnas = [];        
        columnas.push({ contenido:(<div className="w-100 h-100">{[elementotitulo,listadodescripcion]}</div> ),
                        ancho : [11],
                        clases:"w-100 h-100"
                    });
        columnas.push({ contenido:(<div className="w-100 h-100 bkg-error"></div> ),
                        ancho : [1],
                        clases:"d-flex w-100 h-100"
                    });
        
        let filaprincipal = <Fila columnas = {columnas}/>;
        
        return <Panel tipo={PanelTipo.BASICO}
                    contenido={filaprincipal}
                />;
    }
    renderSoftware(){
                
        let columnas = [[],[],[]];                    
  
        let titulo = <h3 className = "txt-centrado txt-blanco">Campos del diseño, desarrollo y programación: Software</h3>;        
        columnas[0] = [{
                            contenido:  <div className="container-fluid p-basico bkg-terciario overflow-hidden" data-aos="fade-up">
                                            {titulo}
                                        </div>,
                            ancho  : [10],   
                            clases : "p-0"
                        }];        
        let titulocontenedor = <Fila columnas={columnas[0]} clases="mt-5"/>;
                
                
        let metodos = this.state.software.map((m)=>{
            return this.renderSoftwareElemento(m.titulo,m.descripcion);
        });
                
        columnas[1].push({  
                            contenido:  (<div className="w-100 h-100 p-basico--2 d-flex flex-column justify-content-center align-items-center">
                                            {metodos}
                                        </div>),
                            ancho : [10]
                        });
        columnas[1].push({
                            contenido: (<div className="bkg-principal h-100"></div>),
                            ancho    : [2],
                            clases   : "w-100 h-100 p-cero"
                        });
                                            
        let filacontenido = (<Fila columnas = {columnas[1]} clases="h-100"/>);                        
        let barra = <div className="position-absolute bkg-terciario" style={{bottom:'0',left:'0',right:'0',height:'2vh'}}></div>;
        
        columnas[2] = [{
                    contenido:  <div className="h-100 shadow overflow-hidden position-relative" data-aos="fade-up">
                                    {filacontenido}
                                    {barra}
                                </div>,
                    ancho  : [12,10],
                    offset : [0,2],
                    breakpoint : ['sm','md'],
                    clases : "pr-0"                  
                }];
        let filacontenedor = <Fila columnas={columnas[2]} clases="mt-5"/>;
        
        
        return <Panel tipo = {PanelTipo.BASICO}
                           breakpoint = "fluid"
                           clases = "my-basicoi"
                           contenido = {[titulocontenedor,filacontenedor]}
                        />;                
                
    }
    
    renderTecnologiaElemento(index,titulo,descripcion){            
                
        let titular    = '<h5 class = "txt-principal txt-izquierda">'+titulo+'</h5>';
        let elementos = '';
        for(let i=0;i<descripcion.length;i++)
            elementos += '<li class="txt-terciario"><p class="txt-terciario txt-justificado m-0">'+descripcion[i]+'</p></li>';
        let contenido = titular+"<ul>"+elementos+"</ul>";
    
        let panel = <div className="b-simple-principal w-100 position-relative overflow-hidden" data-aos="fade-up" data-html="true" data-toggle="popover" data-trigger="hover" data-placement="top" data-content={contenido}>
                        <div className="d-flex flex-column align-items-end">
                            <h5 className="txt-derecha txt-principal mt-basico mr-2 mb-2">{titulo}</h5>
                        </div>  
                        <div id = {"tecnologia-"+index} className="position-absolute w-100 h-100 bkg-terciario b-hide" style={{top:0}}>
                            <h5 className="txt-derecha txt-blanco mt-basico mr-2 mb-2">{titulo}</h5>
                        </div>                                              
                    </div>;                              
        let funcion  = (estado)=>{
            if(estado){
                anime({
                    targets: "#tecnologia-"+index,
                    translateY: ['100%','0'],
                    duration : 400,
                    easing: 'easeOutCirc'
                });
            }
            else{
                anime({
                    targets: "#tecnologia-"+index,
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
    renderTecnologia(){
                
        let columnas = [[],[]];                    
  
        let titulo = <h3 className = "txt-centrado txt-blanco">Tecnologia: Desarrollo y programación</h3>;        
        columnas[0] = [{
                            contenido:  <div className="container-fluid p-basico bkg-terciario overflow-hidden" data-aos="fade-up">
                                            {titulo}
                                        </div>,
                            ancho  : [10],                               
                            clases : "p-0"
                        }];        
        let titulocontenedor = <Fila columnas={columnas[0]} clases="mt-5"/>;  
        
                
        let contenido = this.state.tecnologia.map((a,i1)=>{
                            return a.map((e,i2)=>{
                                return {
                                    contenido : this.renderTecnologiaElemento(i1+"-"+i2,e.titulo,e.descripcion),
                                    ancho: [4,2],
                                    breakpoint: ['sm','md'],
                                    clases: 'p-0'
                                };
                            });                            
                        });
        let filas = contenido.map((c)=>{
           return <Fila columnas={c} clases="justify-content-end"/>; 
        });                    
        
        columnas[1].push({  
                            contenido:  (<div className="w-100 h-auto m-0">
                                            {filas}
                                        </div>),
                            ancho : [10],
                            clases: "p-0"
                        });
        columnas[1].push({
                            contenido: (<div className="bkg-principal h-100 m-0" data-aos="fade-up"></div>),
                            ancho    : [2],
                            clases   : "pl-4 pr-0"
                        });
        
        let filacontenedor = <Fila columnas = {columnas[1]} clases='mt-5 p-0'/>;
                
        return <Panel tipo = {PanelTipo.BASICO}
                           breakpoint = "fluid"
                           clases = "my-basicoi"
                           contenido = {[titulocontenedor,filacontenedor]}
                        />;                
                
    }
    
    
    renderMetodoElemento(titulo,subtitulo){
        let elementotitulo = <h3 className="txt-izquierda txt-secundario">{titulo}</h3>;
        let elementosubtitulo = <p className="txt-centrado txt-terciario">{subtitulo}</p>;        
        
        let columnas = [];
        
        columnas.push({ contenido:(<div className="w-100 h-100">{[elementotitulo,elementosubtitulo]}</div> ),
                        ancho : [11],
                        clases:"w-100 h-100"
                    });
        columnas.push({ contenido:(<div className="w-100 h-100 bkg-error"></div> ),
                        ancho : [1],
                        clases:"d-flex w-100 h-100"
                    });
        
        let filaprincipal = <Fila columnas = {columnas}/>;
        
        return <Panel tipo={PanelTipo.BASICO}
                    contenido={filaprincipal}
                />;
    }
    renderMetodologiasTecnicas(){
                
        let columnas = [[],[],[]];                    
  
        let titulo = <h3 className = "txt-centrado txt-blanco">Metodologias y tecnicas</h3>;        
        columnas[0] = [{
                            contenido:  <div className="container-fluid p-basico bkg-terciario overflow-hidden" data-aos="fade-up">
                                            {titulo}
                                        </div>,
                            ancho  : [10],   
                            clases : "p-0"
                        }];        
        let titulocontenedor = <Fila columnas={columnas[0]} clases="mt-5"/>;
                
                
        let metodos = this.state.metodos.map((m)=>{
            return this.renderMetodoElemento(m.titulo,m.subtitulo);
        });
                
        columnas[1].push({  
                            contenido:  (<div className="w-100 h-100 p-basico--2 d-flex flex-column justify-content-center align-items-center">
                                            {metodos}
                                        </div>),
                            ancho : [10]
                        });
        columnas[1].push({
                            contenido: (<div className="bkg-principal h-100"></div>),
                            ancho    : [2],
                            clases   : "w-100 h-100 p-cero"
                        });
                                            
        let filacontenido = (<Fila columnas = {columnas[1]} clases="h-100 p-0"/>);                        
        let barra = <div className="position-absolute bkg-terciario" style={{bottom:'0',left:'0',right:'0',height:'2vh'}}></div>;
        
        columnas[2] = [{
                    contenido:  <div className="h-100 shadow overflow-hidden position-relative" data-aos="fade-up">
                                    {filacontenido}
                                    {barra}
                                </div>,
                    ancho  : [12,10],
                    offset : [0,2],
                    breakpoint : ['sm','md'],
                    clases : "pr-0"
                }];
        let filacontenedor = <Fila columnas={columnas[2]} clases="mt-5"/>;
        
        
        return <Panel tipo = {PanelTipo.BASICO}
                           breakpoint = "fluid"
                           clases = "my-basicoi"
                           contenido = {[titulocontenedor,filacontenedor]}
                        />;                
                
    }
    
    renderContenido(){
        let encabezado = (<h1 className="txt-centrado txt-principal mt-basico" data-aos="fade-up">Conocimientos __</h1>);      
                
        let secciones = [encabezado,this.renderMetodologiasTecnicas(),this.renderTecnologia(),this.renderSoftware()];
                
        let panelprincipal =   <Panel tipo = {PanelTipo.BASICO}         
                                     contenido = {secciones} 
                                     breakpoint = "fluid"
                                     clases = "py-basico-5"
                                />;
         
        return panelprincipal;
    }
     
    render(){
                                                               
        let contenido = [
                            <EncabezadoSeccion color = {PaletaColor.BLANCO}/>,
                            this.renderContenido()
                        ];
        
        let panelconocimientos = <Panel    
                                    tipo = {PanelTipo.BASICO}           
                                    breakpoint = "fluid"                                    
                                    largo = "auto"
                                    contenido={contenido}
                                />;                          
        
        return (<section id="conocimientos"  className = "container-fluid seccion-conocimientos">
                      {panelconocimientos}                             
                </section>);
    }
    
};

