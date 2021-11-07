
const PaletaColor = {
    PRINCIPAL  : 0,
    SECUNDARIO : 1,
    TERCIARIO  : 2,
    SUCCESS    : 3,
    ERROR      : 4,
    WARNING    : 5,
    INFO       : 6,
    BLANCO     : 7
};

function largoClamp(estilo,largo){    
    if(largo){
        if(Array.isArray(largo)){
            estilo.minHeight = largo[0];
            estilo.height    = largo[1];
            estilo.maxHeight = largo[2];
        }
        else{
            estilo.height = largo;
        }
    }
}
function anchoClamp(estilo,ancho){
    if(ancho){
        if(Array.isArray(ancho)){
            estilo.minWidth = ancho[0];
            estilo.width    = ancho[1];
            estilo.maxWidth = ancho[2];
        }
        else{
            estilo.width = ancho;
        }
    }
}
