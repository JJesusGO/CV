import { CSSProperties } from "react";
import { PaletaColor } from "./componentes/types";

export function heightClamp(style : CSSProperties,height : string[] | string){    
    if(height){
        if(Array.isArray(height)){
            style.minHeight = height[0];
            style.height    = height[1];
            style.maxHeight = height[2];
        }
        else{
            style.height = height;
        }
    }
}
export function widthClamp(style: CSSProperties,width : string[] | string){
    if(width){
        if(Array.isArray(width)){
            style.minWidth = width[0];
            style.width    = width[1];
            style.maxWidth = width[2];
        }
        else{
            style.width = width;
        }
    }
    return style;
}
export function paletaColor2String(color : PaletaColor): string{
    switch(color){
        case PaletaColor.PRINCIPAL:
            return "principal";
        case PaletaColor.SECUNDARIO:
            return "secundario";
        case PaletaColor.TERCIARIO:
            return "terciario";
        case PaletaColor.SUCCESS:
            return "success";
        case PaletaColor.ERROR:
            return "error";
        case PaletaColor.WARNING:
            return "warning";
        case PaletaColor.INFO:
            return "info";
        case PaletaColor.BLANCO:
            return "blanco";
    }
}
