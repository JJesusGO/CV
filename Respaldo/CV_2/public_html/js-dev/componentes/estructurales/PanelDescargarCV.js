
/* global PaletaColor, PanelTipo*/

class PanelDescargarCV extends React.Component{
    
    
    constructor(props){
        super(props);
                        
    }   
    descargar(){
        let link = document.createElement("a");
        link.download = 'CV - Gutiérrez Ornelas José de Jesús.pdf';
        link.href = '/bd/docs/cv.pdf';
        link.click();
    }
    
    render(){                  
        
        let boton = (<BotonPrincipal id = "descargarCV" 
                                     color = {PaletaColor.SECUNDARIO}
                                     barColor = {PaletaColor.BLANCO}
                                     texto="[ Descargar CV ]"
                                     clases =  "shadow"
                                     textoClases="txt-blanco txt-centrado"
                                     onclick={()=>this.descargar()}
                    />);
        
        let paneldescargarcv = <Panel    
                                    tipo = {PanelTipo.BASICO}           
                                    breakpoint = "fluid"                                                                        
                                    contenido={boton}
                            />;                        
        return (<div className="container-fluid">
                    <div className = "container-fluid panel-descargarcv">
                      {paneldescargarcv}                                  
                    </div>
                </div>);
    }
    
    
};

