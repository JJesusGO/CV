/* global PanelTipo, PaletaColor, ModalTipo, BotonTipo, FormularioTipo, EntradaTipo */

class PanelContacto extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
            perfiles:[
                {icono:"/media/img/icono-formato.svg",titulo:"Llamame",descripcion:"(462) 211 0468"},
                {icono:"/media/img/icono-formato.svg",titulo:"WhatsApp",descripcion:"(462) 211 0468"},
                {icono:"/media/img/icono-formato.svg",titulo:"Mandame un correo",descripcion:"jdj.gutierrezornelas@hotmail.com"},
            ],
            opciones:[
                "Desarrollo web",
                "Desarrollo de aplicaciones",
                "Desarrollo de videojuegos",
                "Diseño de UI/UX",
                "Ingenieria",
                "Sistemas de control industrial",
                "Artista tecnico",
                "Modelado y/o texturizado",
                "Animacion",
                "Proyecto 3D",
                "Renderizado",
                "Diseño y administración de proyectos",
                "Optimizacion y/o analisis de datos",
                "Consultoria y/o asesoria",
                "Otro"
            ]
        };
    }
       
    abrir(){
        $('#modal-contacto').modal('show');
    }
    cerrar(){
        $('#modal-contacto').modal('hide');
    }
    
    solicitar(){
        this.cerrar();
    }
    
    renderFormulario(){                
        
        let entradas = [];

        entradas.push({tipo: EntradaTipo.GRUPO_INLINE,
                       id : ["nombre","correo"],
                       titulo : "Solicitante:",
                       contenido:[
                                    (<EntradaTexto   id  = "nombre"
                                                    tipo = "text"
                                             placeholder = "Nombre"
                                             clases      = "col-sm m-1"
                                    />),
                                    (<EntradaTexto   id  = "correo"
                                                    tipo = "text"
                                             placeholder = "Correo de contacto"
                                             clases      = "col-sm m-1"
                                    />)
                                 ]
                        });
        entradas.push({id:"tipo",                       
                       titulo : "Tipo de proyecto:",                       
                       contenido: (<EntradaSelect id = "tipo"
                                            opciones = {this.state.opciones}
                                   />)
                     }); 
        entradas.push({id:"asunto",
                       titulo:"Asunto:",
                       contenido:(<EntradaTexto id   = "asunto"
                                                tipo = "text"
                                                placeholder = "Asunto"/>)
                     }); 
        entradas.push({ id:"mensaje",  
                        titulo:"Mensaje:",
                        contenido:(<EntradaTextoArea   id    = "mensaje"  
                                                          filas = "5"
                                    />)
                    }); 
        entradas.push({ readonly:"true",                          
                        contenido:(<BotonPrincipal id = "solicitar" 
                                        color = {PaletaColor.SECUNDARIO}
                                        barColor = {PaletaColor.BLANCO}
                                        texto="[ Enviar solicitud ]"
                                        clases =  "py-basico--4 mt-5 shadow"
                                        textoClases="txt-blanco txt-centrado"
                                        onclick={()=>this.solicitar()}
                                    />)
                    }); 
                    
   
        
        let formulario = <Formulario entradas={entradas} tipo={FormularioTipo.SIMPLE} clases="mx-5"/>;        
        return formulario;
    }
    renderPerfilElemento(icono,titulo,descripcion){
        return <div className = "d-flex flex-column justify-content-center container-fluid">
                                        <img src={icono} className="mx-auto w-25 h-auto"/>
                                        <h4 className="txt-principal txt-centrado mt-2">{titulo}</h4>
                                        <p className="txt-terciario txt-centrado">{descripcion}</p>
                </div>;
    }
    renderPerfil(){
        
        let columnas = [];
        
        let descripcion =   <div className="container-fluid">
                                <h3 className="txt-secundario txt-centrado mt-3 mb-0">¿Tienes un proyecto en mente?</h3>
                                <h4 className="txt-principal txt-centrado mt-0 mb-3">Yo te puedo ayudar, contactame y demosle forma a tus ideas.</h4>
                            </div>;
        
        let perfiles = this.state.perfiles.map((e)=>{
           return   {
                        contenido : (this.renderPerfilElemento(e.icono,e.titulo,e.descripcion)),
                        ancho:['12','6','4'],
                        breakpoint:['sm','md','lg'],
                        clases : "mt-3 px-0"
                    }; 
        });        
                
        let filaperfiles = (<Fila columnas={perfiles} clases="mt-5 p-0"/>);  
        
        return <Panel 
                        tipo = {PanelTipo.BASICO} 
                        contenido={[descripcion,filaperfiles]}
                        breakpoint = "fluid"
                        clases = "p-basico-3"
                />;
    }
    
    renderModal(){
        
        
        let botoncerrar = <Boton tipo={BotonTipo.BASICO}
                            onclick = {()=>this.cerrar()}
                            contenido = {(<h5 className="txt-derecha txt-blanco">Cerrar</h5>)}                            
                          />;
        
        let contenedorencabezado =  (<div className="container-fluid d-flex justify-content-between align-content-center bkg-secundario p-basico">                                        
                                        <h1 className="txt-blanco txt-centrado">Contacto</h1> 
                                        {botoncerrar}
                                    </div>);
        let contenedorcontenido = (<div className="container-fluid bkg-fondo">   
                                        {[this.renderPerfil(),this.renderFormulario()]}
                                   </div>);
        
        let panel = <Panel  tipo={PanelTipo.BASICO} 
                            breakpoint="fluid"
                            encabezado={contenedorencabezado}
                            contenido={contenedorcontenido}
                            clases = "shadow"                            
                    />;        
        return <Modal   tipo={ModalTipo.ESTATICO} 
                        id="modal-contacto"
                        contenido={panel}
                        clases = "fade"
                        dialogClases = "modal-xl"
                />;
    }
  
     render(){                  
        let boton = (<BotonPrincipal id = "contacto" 
                                    color = {PaletaColor.PRINCIPAL}
                                    barColor = {PaletaColor.BLANCO}
                                    texto="[ ¡Contactame! ]"
                                    clases =  "py-basico--4 shadow"
                                    textoClases="txt-blanco txt-centrado"
                                    onclick={()=>this.abrir()}
                    />);
        
        let panelcontacto = <Panel    
                                    tipo = {PanelTipo.BASICO}           
                                    breakpoint = "fluid"                                                                        
                                    contenido={boton}
                            />;                        
        return (<div className="container-fluid">
                    <div className = "container-fluid panel-contacto">
                      {panelcontacto}                                  
                    </div>
                    {this.renderModal()}
                </div>);
    }
    
};

