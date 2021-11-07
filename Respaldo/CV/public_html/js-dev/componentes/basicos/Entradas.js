const EntradaTipo = {
    GRUPO: 0,
    GRUPO_INLINE: 1,
    CHECK: 2
};

function renderEntrada(entrada){
    
    let titulo      = entrada.titulo      || "";    
    let tipo        = entrada.tipo        || EntradaTipo.GRUPO;    
    let id          = entrada.id          || [""];
    let contenido   = entrada.contenido   || null; 
    let readonly    = entrada.readonly    || false;
    let clases      = entrada.clases      || "";
    let labelClases = entrada.labelClases || "";
    
    if(!Array.isArray(id))
        id = [id];
        
    if(titulo === ""){
        let claseform = "";
        
        if(tipo === EntradaTipo.GRUPO){            
            return (<div className={"form-group "+clases}>                
                        <div>                
                            {contenido}
                        </div>
                    </div>); 
        }
         if(tipo === EntradaTipo.GRUPO_INLINE){            
            return (<div className={"form-group "+clases}>                
                        <div className="row p-basico--3">                
                            {contenido}
                        </div>
                    </div>); 
        }
        else if(tipo === EntradaTipo.CHECK)            
            return (<div className={"form-check "+clases}>                
                        <div>                
                            {contenido}
                        </div>
                    </div>); 
    }
    else{
        if(tipo === EntradaTipo.GRUPO)
            return (<div className={"form-group "+clases}>                
                        <label className={""+labelClases} for = {id[0]}>{titulo}</label>       
                        <div>                
                            {contenido}
                        </div>                                         
                    </div>);  
        if(tipo === EntradaTipo.GRUPO_INLINE)
            return (<div className={"form-group "+clases}> 
                        <label className={""+labelClases} for = {id[0]}>{titulo}</label> 
                        <div className="row p-basico--3">  
                            {contenido}                
                        </div>                                   
                    </div>);  
        if(tipo === EntradaTipo.CHECK)
            return (<div className={"form-check "+clases}> 
                        <div>  
                            {contenido}                
                        </div>
                        <label className={"form-check-label "+labelClases} for = {id[0]}>{titulo}</label>            
                    </div>);  
        
    }

}
    
class Entradas{
    
    constructor(){
        this.entradas = [];         
    }
    
    addEntrada(entrada){
        let tipo        = entrada.tipo       || EntradaTipo.GRUPO;    
        let id          = entrada.id         || "";
        let titulo      = entrada.titulo     || "";        
        let contenido   = entrada.contenido  || null; 
        let readonly    = entrada.readonly   || false;
        let clases      = entrada.clases     || "";
        let labelClases = entrada.labelClases || "";
        
        
        this.entradas.push({tipo:tipo,id:id,titulo:titulo,contenido:contenido,
                            readonly:readonly,clases:clases,labelClases:labelClases});        
    }
    removeEntrada(entrada){        
       this.entradas.splice(entrada);        
    }
    
    getEntradas(index){
        if(index === undefined)
            return this.entradas;
        return this.entradas[index];
    }
    getEntradasCount(){
        return this.entradas.length;
    }
 
}
