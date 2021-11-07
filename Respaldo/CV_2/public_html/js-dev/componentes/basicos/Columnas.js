/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function renderColumna(columna){
        
        let contenido   = columna.contenido  || null; 
        let clasesextra = columna.clases     || "";    
        let ancho       = columna.ancho      || [-1];
        let offset      = columna.offset     || [-1];           
        let breakpoint  = columna.breakpoint || [""];
            
            
        let clases = "";
        
        for(let i = 0; i < ancho.length;i++){            
            let claseCol  = "col",
                claseOffset = "";
        
            if(breakpoint[i] !== null && breakpoint[i] !== undefined){
                if(breakpoint[i].trim() !== "")
                    claseCol += "-"+breakpoint[i];
            }                
            if(ancho[i] !== null && ancho[i] !== undefined){                
                if(ancho[i] !== -1)
                    claseCol += "-"+ancho[i];
            }
            if(offset[i] !== null && offset[i] !== undefined){    
                claseOffset = "";
                if(breakpoint[i] !== null && breakpoint[i] !== undefined){
                    if(breakpoint[i].trim() !== ""){
                        if(claseOffset==="")
                            claseOffset = "offset"; 
                        claseOffset += "-"+breakpoint[i];
                    }
                }                
                if(offset[i] !== -1){
                    if(claseOffset==="")
                        claseOffset = "offset"; 
                    claseOffset += "-"+offset[i];
                }
            }
           
            clases += " "+claseCol;
            if(claseOffset !== "")
                clases+=" "+claseOffset;            
        }        
        
        return (<div className={clases+" "+clasesextra}>
                    {contenido}
                </div>);
    }
    
class Columnas{
    
    constructor(){
        this.columnas = [];         
    }    
    
    addColumna(columna){
        let contenido   = columna.contenido  || null; 
        let clases      = columna.clases     || "";
        let ancho       = columna.ancho      || [1];
        let offset      = columna.offset     || [-1];           
        let breakpoint  = columna.breakpoint || [""];
        
        this.columnas.push({contenido:contenido,clases:clases,ancho:ancho,offset:offset,breakpoint:breakpoint});        
    }
    removeColumna(columna){        
       this.columnas.splice(columna);        
    }
    
    getColumnas(index){
        if(index === undefined)
            return this.columnas;
        return this.columnas[index];
    }
    getColumnasCount(){
        return this.columnas.length;
    }
    
 
}
