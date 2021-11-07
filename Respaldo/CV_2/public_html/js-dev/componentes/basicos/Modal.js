
const ModalTipo = {
    BASICO : 0,
    ESTATICO : 1    
};

/**
 * encabezado = (</>)  
 * contenido  = (</>)  
 * pie        = (</>)  
 * clases     = ""  
 * id         = "" 
 */
class Modal extends React.Component{
    
    render(){
        
        let tipo = this.props.tipo || ModalTipo.BASICO;
        
        let id = this.props.id || "";
        let clases = this.props.clases || "";
        let dialogClases = this.props.dialogClases || "";
        
        let encabezado  = this.props.encabezado || null;
        let contenido   = this.props.contenido || null;
        let pie         = this.props.pie || null;
        
        switch(tipo){
            case ModalTipo.BASICO:
                
            return (<div className={"modal "+clases} id={id}>
                        <div className={"modal-dialog "+dialogClases}>
                          <div className="modal-content">
                              {encabezado}
                              {contenido}
                              {pie}
                          </div>
                        </div>
                    </div>);        
                
                break;
            case ModalTipo.ESTATICO:
                
                return (<div className={"modal "+clases} id={id} data-backdrop="static">
                        <div className={"modal-dialog "+dialogClases}>
                            <div className="modal-content">
                              {encabezado}
                              {contenido}
                              {pie}
                            </div>
                        </div>
                    </div>);
                
                
                break;            
        }
        
        
    }    
    
    
};

