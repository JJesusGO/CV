/*
 *  index = 0
 *  elementos = []
 *  clases = ""
 * 
 */
class Elemento extends React.Component{

    render(){
        
        let clases    = this.props.clases || "";
        let index     = this.props.index  || 0; 
        let elementos = this.props.elementos || [];
         
        let contenido = null;
        if(Array.isArray(elementos)){
            if(elementos.length !== 0){                
                if(index < 0)
                    index = 0;
                else if(index >= elementos.length)
                    index = elementos.length-1;
            }            
            contenido = elementos[index];
        }
        
        return (<span className={clases}>                                
                    {contenido}
                </span>);        
    }
    
    
};
