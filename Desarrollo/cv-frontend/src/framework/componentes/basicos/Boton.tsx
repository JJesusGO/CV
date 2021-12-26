import { CSSProperties, MouseEventHandler, ReactNode, useState } from "react";
import { paletaColor2String, widthClamp } from "../../tools";
import { PaletaColor } from "../types"
import "./Boton.scss";

export enum BotonTipo {
    BASICO  ,
    LOGO    ,
    ICONO   ,
    BORDE   ,
    RELLENO ,
    LINK       
};
export interface BotonProps{
    tipo: BotonTipo;
    children : ReactNode;
    className? : string;
    color? : PaletaColor;  
    width? : string | string[];  
    onClick? : MouseEventHandler<HTMLButtonElement> | (()=>void);
    onHover? : (hover:boolean)=>void;
}

export default function Boton({
    className = "", 
    color = PaletaColor.PRINCIPAL,
    ...props
} : BotonProps){

    const [stateHover, setHover] = useState<boolean>(false);

    const onHover = (hover : boolean) => {
        if(stateHover === hover)        
            return;
        props.onHover?.(hover);
        setHover(hover);
    }
    const getClassName : ()=>string = ()=>{
        let clases = "btn";
        switch(props.tipo){
            case BotonTipo.BASICO:
                clases += "-basico";
                break;
            case BotonTipo.LOGO:
                clases += "-logo";
                break;
            case BotonTipo.ICONO:
                clases += "-icono";
                break;
            case BotonTipo.BORDE:
                clases += `-borde b-${paletaColor2String(color)}`;
                break;
            case BotonTipo.RELLENO:
                clases += `-borde bkg-${paletaColor2String(color)}`;
                break;
            case BotonTipo.LINK:
                clases += `-link`;
                break;
        }
        return clases + " " + className;
    }
    const getStyle : (()=>(CSSProperties|undefined)) = ()=>{
        if(!props.width)
            return undefined;
        return widthClamp({},props.width);
    }
    return (
        <button onClick={props.onClick} 
                className={getClassName()} 
                onMouseOver = {()=>onHover(true)}
                onMouseLeave = {()=>onHover(false)}
                style={getStyle()}>                
            { props.children}
        </button>
    );   
};


