

class PanelDescripcion extends React.Component{
    
        
     renderContenido(){
                  
        let encabezado = <h1 className="txt-centrado txt-principal mt-basico" data-aos="fade-up">Descripción __</h1>
         
        let descripcioncontenido = (<ul className="txt-negro">
                                       <li data-aos="fade-up"><p className="txt-justificado txt-negro">Especializado en la implementación de sistemas basados en <strong>máquinas de estados</strong>, <strong>entidades</strong>, <strong>visión por computadora</strong>, <strong>inteligencia artificial</strong> y <strong>métodos numéricos</strong>.</p></li>
                                       <li data-aos="fade-up"><p className="txt-justificado txt-negro">Experiencia desarrollando <strong>software multiplataforma</strong> (Windows, Linux y Android), <strong>desarrollo web</strong> y <strong>desarrollo de videojuegos</strong>. Gracia a esto he obtenido experiencia en diversos softwares para el <strong>diseño</strong>, <strong>maquetación</strong>, <strong>modelado 3D</strong>, <strong>diseño de contenido multimedia</strong>, <strong>renderizado</strong> y <strong>programación</strong>.</p></li>
                                       <li data-aos="fade-up"><p className="txt-justificado txt-negro">Además, debido a preparación técnica conozco procesos de <strong>manufactura industrial</strong>, especializado en la operación de <strong>maquinaria y soldadura</strong>.</p></li>
                                    </ul>);
        let descripcion = (<Panel tipo     = {PanelTipo.FLEX_BASICO}
                             contenido = {descripcioncontenido}
                             clases    = "flex-column justify-content-center align-items-center h-100"
                            />);
         
        let perfilcontenido = <div className="panel-perfil" data-aos="fade-up">
                                <img className="w-auto h-100" src="/media/img/foto/perfil.png"/>
                              </div>        
        let perfilpie = <div className="mt-5" data-aos="fade-up">
                            <p className="txt-izquierda txt-negro mt-1 mb-0"><strong className="txt-secundario">Correo:</strong> jdj.gutierrezornelas@hotmail.com</p>
                            <p className="txt-izquierda txt-negro mt-1 mb-0"><strong className="txt-secundario">Telefono:</strong>  (462) 211 0468</p>
                            <p className="txt-izquierda txt-negro mt-1 mb-0"><strong className="txt-secundario">Nacimiento:</strong> 11 de abril de 1996</p>
                            <p className="txt-izquierda txt-negro mt-1 mb-0"><strong className="txt-secundario">Ciudad:</strong> Irapuato, Guanajuato</p>
                        </div>;                                     
        let perfil  = (<Panel tipo     = {PanelTipo.FLEX_BASICO}
                             contenido = {[perfilcontenido,perfilpie]}
                             clases    = "flex-column justify-content-center align-items-center h-100"
                        />);        
                  
                  
         let columnas = [];         
         columnas.push({
                ancho: ['12','6'],
                breakpoint: ['sm','lg'],   
                clases: 'mt-5 d-flex',
                contenido: <Panel   tipo = {PanelTipo.BASICO} 
                                    contenido = {perfil}                                    
                            />
         });
         columnas.push({
                ancho: ['12','6'],
                breakpoint: ['sm','lg'],
                clases: 'mt-5 d-flex',
                contenido: <Panel   tipo = {PanelTipo.BASICO} 
                                    contenido = {descripcion}
                            />                            
         });
         columnas.push({
                ancho: ['12'],                
                contenido: (<div className="bkg-secundario my-5" style = {{width:'100%',height:'2vh'}}></div>)                           
         });
         
         
         let fila = (<Fila columnas = {columnas}                          
                          clases = "my-basicoi"
                    />);
         
                  
         let panelprincipal =   <Panel tipo = {PanelTipo.BASICO}         
                                     contenido={[encabezado,fila]} 
                                     clases="py-basico-5"
                                />
         
         return panelprincipal;
         
     }
        
     render(){
                          
        let paneldescripcion = <Panel    
                                    tipo = {PanelTipo.BASICO}           
                                    breakpoint = "fluid"                                    
                                    largo = "auto"                                    
                                    contenido = {this.renderContenido()}
                                />;                  
        
        
        return (<section id = "descripcion" className = "container-fluid seccion-descripcion">
                      {paneldescripcion}                             
                </section>);
    }
    
}


