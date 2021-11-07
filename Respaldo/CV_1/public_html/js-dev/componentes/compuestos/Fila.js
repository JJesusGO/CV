/*
 * 
 * contenido = (</>)
 * clases    = ""
 * 
 * 
 */

class Fila extends React.Component{
                
    render(){          
        let contenido = this.props.contenido;        
        let columnas  = this.props.columnas || null; 
        let clases    = this.props.clases || "";
        let margen    = this.props.margen || null;
        let largo     = this.props.largo || "auto";
        
        let estilo = {};
        if(margen!==null)
            estilo.marginTop = margen;
        
        largoClamp(estilo, largo);
        
        if(columnas !== null){    
            
            if(Array.isArray(columnas)){               
                return (<div className={"row p-cero m-cero w-100 "+clases} style={estilo}>        
                            {columnas.map((c)=>renderColumna(c))}
                        </div>);
            }
            else{                
                return (<div className={"row p-cero m-cero w-100 "+clases} style={estilo}>        
                            {renderColumna(columnas)}
                        </div>);                                        
            }
            
        }
        else{
            return (<div className={"row p-cero m-cero w-100 "+clases}>        
                        {contenido}
                    </div>);       
        }
    }
    
};


