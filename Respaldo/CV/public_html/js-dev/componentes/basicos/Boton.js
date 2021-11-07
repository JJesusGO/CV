/* global PaletaColor*/


const BotonTipo = {
    BASICO  : 0,
    LOGO    : 1,
    ICONO   : 2,
    BORDE   : 3,
    RELLENO : 4,
    LINK    : 5    
};


/** 
 * contenido = {}  
 * onclick = {}
 * clases = ""
 * 
 * tipo = BotonTipo.LOGO || BotonTipo.LINK
 * 
 * tipo = BotonTipo.BORDE || BotonTipo.RELLENO
 *      color = PaletaColor
 *      ancho = [0,0,0]
 * 
 */
class Boton extends React.Component{
         
         
    constructor(props){
        super(props);
        this.state = {
            hover : false
        };
    }
    onhover(hover){
        if(this.state.hover === hover)
            return;
        if(this.props.onhover !== undefined && this.props.onhover!== null){
            this.props.onhover(hover);
        }                   
        this.setState({hover:hover});
    }
         
    renderBasico(contenido,clases){
        return (<button className={"btn-basico "+clases} 
                        onClick={this.props.onclick}
                        onMouseOver = {()=>this.onhover(true)}
                        onMouseLeave = {()=>this.onhover(false)}>
                            {contenido}
                </button>);
    }
    renderLogo(contenido,clases){
        return (<button className={"btn-logo "+clases} 
                        onClick={this.props.onclick}
                        onMouseOver = {()=>this.onhover(true)}
                        onMouseLeave = {()=>this.onhover(false)}>
                            {contenido}
                </button>);
    }
    renderIcono(contenido,clases){
        return (<button className={"btn-icono "+clases} 
                        onClick={this.props.onclick}
                        onMouseOver = {()=>this.onhover(true)}
                        onMouseLeave = {()=>this.onhover(false)}>
                        {contenido}
                </button>);
    }
    renderBorde(contenido,clases){        
        let color      = this.props.color || PaletaColor.PRINCIPAL;
        let ancho      = this.props.ancho || null;                
        
        let claseColor = "";        
        let estilo = {}; 
        
        anchoClamp(estilo,ancho);   
        

        switch(color){
            case PaletaColor.PRINCIPAL:
                claseColor = "b-principal";
                break;
            case PaletaColor.SECUNDARIO:
                claseColor = "b-secundario";
                break;
            case PaletaColor.TERCIARIO:
                claseColor = "b-terciario";
                break;
            case PaletaColor.SUCCESS:
                claseColor = "b-success";
                break;
            case PaletaColor.ERROR:
                claseColor = "b-error";
                break;
            case PaletaColor.WARNING:
                claseColor = "b-warning";
                break;
            case PaletaColor.INFO:
                claseColor = "b-info";
                break;
            case PaletaColor.BLANCO:
                claseColor = "b-blanco";
                break;
        }
                
        return (<button className={"bt-sm btn-borde "+claseColor+" "+clases} 
                        onClick={this.props.onclick}
                        onMouseOver = {()=>this.onhover(true)}
                        onMouseLeave = {()=>this.onhover(false)}
                        style = {estilo}>
                            {contenido}
               </button>);
    }    
    renderRelleno(contenido,clases){        
        let color      = this.props.color || PaletaColor.PRINCIPAL;
        let ancho      = this.props.ancho || null;                
        
        let claseColor = "";        
        let estilo = {}; 
        
        anchoClamp(estilo,ancho);   
        
        switch(color){
            case PaletaColor.PRINCIPAL:
                claseColor = "bkg-principal";
                break;
            case PaletaColor.SECUNDARIO:
                claseColor = "bkg-secundario";
                break;
            case PaletaColor.TERCIARIO:
                claseColor = "bkg-terciario";
                break;
            case PaletaColor.SUCCESS:
                claseColor = "bkg-success";
                break;
            case PaletaColor.ERROR:
                claseColor = "bkg-error";
                break;
            case PaletaColor.WARNING:
                claseColor = "bkg-warning";
                break;
            case PaletaColor.INFO:
                claseColor = "bkg-info";
                break;
            case PaletaColor.BLANCO:
                claseColor = "bkg-blanco";
                break;
        }
                
        return (<button className={"bt-sm btn-relleno "+claseColor+" "+clases} 
                        onClick={this.props.onclick}
                        onMouseOver = {()=>this.onhover(true)}
                        onMouseLeave = {()=>this.onhover(false)}
                        style = {estilo}>
                            {contenido}
               </button>);
    }    
    renderLink(contenido, clases){
        return (<button className={"btn-link "+clases} 
                        onClick={this.props.onclick}
                        onMouseOver = {()=>this.onhover(true)}
                        onMouseLeave = {()=>this.onhover(false)}>
                        {contenido}
                </button>);        
    }
    
    render(){
        let tipo      = this.props.tipo;
        let contenido = this.props.contenido || null;        
        let clases    = this.props.clases || "";
        
        let componente = <h1>Error</h1>        
                 
        switch(tipo){
            case BotonTipo.BASICO:
                componente = this.renderBasico(contenido,clases);
            break;
            case BotonTipo.LOGO:
                componente = this.renderLogo(contenido,clases);
            break;
            case BotonTipo.ICONO:
                componente = this.renderIcono(contenido,clases);
            break;
            case BotonTipo.BORDE:                                
                componente = this.renderBorde(contenido,clases);
             break;
             case BotonTipo.RELLENO:                                
                componente = this.renderRelleno(contenido,clases);
             break;
             case BotonTipo.LINK:                                
                componente = this.renderLink(contenido,clases);
             break;
        }
        
        return componente;
    }  
    
};


