/*
 * 
 *  index   =  0
 *  encabezado = </>
 *  paginas    = []
 * 
 */

/* global PanelTipo */

class Paginas extends React.Component{
     
    render(){   
        
        let index = this.props.index || 0;        
        
        let encabezado = this.props.encabezado;        
        let paginas    = this.props.paginas || [];
        let pie        = this.props.pie;
        
        let clases = this.props.clases || "";
        let margen    = this.props.margen || "0";
        let largo     = this.props.largo || "auto";
        
        let estilo = {marginTop:margen};
        
        largoClamp(estilo, largo);
        
        
        let contenido = null;
        if(Array.isArray(paginas)){            
            if(paginas.length !== 0){
            
                if(index < 0)
                    index = 0;
                else if(index >= paginas.length)
                    index = paginas.length-1;
                
                contenido = paginas[index];
            
            }
        }
                
       return ( <div style={estilo}>               
                    <Panel  tipo={PanelTipo.GRID_BASICO}
                            encabezado = {encabezado}
                            contenido  = {contenido}
                            pie        = {pie}
                            clases = {clases}
                    />
                </div>);   
    }
    
};

