/* global PanelTipo, PaletaColor, ModalTipo, BotonTipo, FormularioTipo, EntradaTipo */

class PanelContacto extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            respuestaestado : false,
            respuestamensaje: '',
            formulario: null,
            perfiles:[
                {icono:"/media/img/icono-llamame.png",titulo:"Llamame",descripcion:"(462) 211 0468"},
                {icono:"/media/img/icono-wa.png",titulo:"WhatsApp",descripcion:"(462) 211 0468"},
                {icono:"/media/img/icono-correo.png",titulo:"Mandame un correo",descripcion:"jdj.gutierrezornelas@hotmail.com"},
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
        this.setState({respuestaestado:false,respuestamensaje:''});
        $('#modal-contacto').modal('hide');
    }
    
    solicitar(){
        
        let nombre  = this.state.formulario.entrada[0];
        let correo  = this.state.formulario.entrada[1];
        let tipo    = this.state.formulario.entrada[2];
        let asunto  = this.state.formulario.entrada[3];
        let mensaje = this.state.formulario.entrada[4];
        
        modelo.SolicitudSolicitud(nombre,correo,tipo,asunto,mensaje,(respuesta)=>{
           if(respuesta.estado === '1'){
               this.setState({respuestaestado:true,respuestamensaje:respuesta.mensaje});
           }
        });
        
    }
    formulario(f){
        
        let index = 0;  
        if(isTextoValido(f.entrada[0]) && isTextoValido(f.entrada[1]) && isTextoValido(f.entrada[3]) && isTextoValido(f.entrada[4]))
            index = 1;
        else 
            index = 0;
        
        this.setState({formulario:f,index:index});
      
        
    }
    
    renderFormulario(){                
        
        let entradas = [];

        let elementos = [ (<Panel tipo = {PanelTipo.BASICO}                          
                            breakpoint = "fluid"
                            clases     = "p-basico bkg-secundario mt-5 w-50 shadow"
                            contenido  = {(<h5 className = "txt-centrado txt-blanco">Es necesario llenar todos los campos solicitados</h5>)}                          
                        />),
                        (<BotonPrincipal id = "solicitar" 
                                        color = {PaletaColor.SECUNDARIO}
                                        barColor = {PaletaColor.BLANCO}
                                        texto="[ Enviar solicitud ]"
                                        clases =  "py-basico--4 mt-5 shadow"
                                        textoClases="txt-blanco txt-centrado"
                                        onclick={()=>this.solicitar()}
                                    />)
                        ];
        let elemento = <Elemento index={this.state.index} elementos={elementos}/>; 


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
                        contenido:elemento
                    }); 
                    
   
        
        let formulario = <Formulario entradas  = {entradas} 
                                     tipo      = {FormularioTipo.SIMPLE} 
                                     onchange = {(f)=>{this.formulario(f);}}
                                     clases    = "mx-5"
                        />;        
                                
                        
        return formulario;
    }
    renderFormularioRespuesta(){
        let mensaje = this.state.respuestamensaje;
        
        let contenido =   <div className="container-fluid">
                                <h3 className="txt-secundario txt-centrado mt-3 mb-0">{mensaje}</h3>
                                <BotonPrincipal id = "aceptar" 
                                        color = {PaletaColor.SECUNDARIO}
                                        barColor = {PaletaColor.BLANCO}
                                        texto="[ Aceptar ]"
                                        clases =  "py-basico--4 mt-5 shadow"
                                        textoClases="txt-blanco txt-centrado"
                                        onclick={()=>this.cerrar()}
                                />
                          </div>;
        
        return (<Panel contenido={contenido} clases="mb-5"/>);
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
                            
        let formulario = null;
        if(this.state.respuestaestado){
            formulario = this.renderFormularioRespuesta();
        }
        else{
            formulario = this.renderFormulario();
        }
                            
        let contenedorcontenido = (<div className="container-fluid bkg-fondo">   
                                        {[this.renderPerfil(),formulario]}
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
                                    clases =  "shadow"
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

