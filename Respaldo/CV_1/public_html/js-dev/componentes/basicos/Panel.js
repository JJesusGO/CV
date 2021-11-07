/*
 * encabezado = (</>)  
 * contenido = (</>)  
 * pie = (</>)  
 * clases = ""  
 * 
 * tipo = PanelTipo.BASICO
 *      margen     = 0
 *      ancho      = clamp[0,0,0]
 *      largo      = clamp[0,0,0]
 *      size       = [clamp[0,0,0],clamp[0,0,0]]
 *      breakpoint = "sm | md | lg | xl | fluid"
 *      
 * tipo = PanelBasico.BASICO_ABS || PanelBasico.BASICO_REL
 *      possize    = [0,0,0,0]
 *      clampsize  = [[0,0],[0,0]]
 *      
 * tipo = PanelTipo.GRID
 * 
 * tipo = PanelBasico.GRID_ABS || PanelBasico.GRID_REL
 *      possize    = [0,0,0,0]
 *      clampsize  = [[0,0],[0,0]]
 *             
 *                          
 */

const PanelTipo = {
    BASICO      : 0,
    BASICO_ABS  : 1,
    BASICO_REL  : 2,
    GRID_BASICO : 3,
    FLEX_BASICO : 4
};
class Panel extends React.Component{
    
    renderBasico(encabezado,contenido,pie,clases,aos){
        
        let margen = this.props.margen || null;
        let size   = this.props.size  || null;
        let ancho  = this.props.ancho || null;
        let largo  = this.props.largo || "auto";
        
        let contenedor = "container";
        
        let breakpoint = this.props.breakpoint || "";                
        if(breakpoint!=="")
            contenedor = "container-"+breakpoint;                    
        
        let estilo = {};      
        
        if(margen !== null)
            estilo.marginTop = margen;        
        
        if(size!==null){
            ancho = size[0];
            largo = size[1];
        }
        
        largoClamp(estilo,largo);
        anchoClamp(estilo,ancho);
        
        if(aos !== "")
            return (<div className={ contenedor + " p-cero "+clases} style={estilo} data-aos={aos}>
                        {encabezado}
                        {contenido}
                        {pie}
                    </div>);  
        else
            return (<div className={ contenedor + " p-cero "+clases} style={estilo}>
                        {encabezado}
                        {contenido}
                        {pie}
                    </div>);  
    }
    renderBasicoAbsolutoRelativo(tipo,encabezado,contenido,pie,clases,aos){
        
        let possize     = this.props.possize;
        let clampsize   = this.props.clampsize;

        let estilo = {};
        
        if(possize){
            estilo.left   = possize[0];
            estilo.top    = possize[1];
            estilo.width  = possize[2];
            estilo.height = possize[3];
        }
        if(clampsize){
            estilo.minWidth  = clampsize[0][0];
            estilo.minHeight = clampsize[1][0];
            estilo.minWidth  = clampsize[0][1];
            estilo.minHeight = clampsize[1][1];
        }
               
        let clasetipo = (tipo === PanelTipo.BASICO_ABS)?"abs":"rel";

        if(aos !== "")
            return (<div className={"container panel-bas-"+clasetipo+" "+clases} style = {estilo} data-aos={aos}>
                        {encabezado}
                        {contenido}
                        {pie}
                    </div>);  
        else
            return (<div className={"container panel-bas-"+clasetipo+" "+clases} style = {estilo}>
                        {encabezado}
                        {contenido}
                        {pie}
                    </div>);  
            
    }
   
    renderGrid(encabezado,contenido,pie,clases,aos){
        if(aos !== "")
            return ( <div className={"panel-grid "+clases} data-aos={aos}>
                        {encabezado}
                        {contenido}
                        {pie}
                     </div> );
        else
            return ( <div className={"panel-grid "+clases}>
                        {encabezado}
                        {contenido}
                        {pie}
                     </div> );
    }
    renderGridAbsolutoRelativo(tipo,encabezado,contenido,pie,clases,aos){
        
        let possize     = this.props.possize;
        let clampsize   = this.props.clampsize;

        let estilo = {};
        
        if(possize){
            estilo.left   = possize[0];
            estilo.top    = possize[1];
            estilo.width  = possize[2];
            estilo.height = possize[3];
        }
        if(clampsize){
            estilo.minWidth  = clampsize[0][0];
            estilo.minHeight = clampsize[1][0];
            estilo.minWidth  = clampsize[0][1];
            estilo.minHeight = clampsize[1][1];
        }
               
        let clasetipo = (tipo === PanelTipo.GRID_ABS)?"abs":"rel";
        
        if(aos !== "")
            return (<div className={"container panel-grid-"+clasetipo+" "+clases} style = {estilo} data-aos={aos}>
                        {this.renderGrid(encabezado,contenido,pie)}
                    </div>);  
        else
            return (<div className={"container panel-grid-"+clasetipo+" "+clases} style = {estilo}>
                        {this.renderGrid(encabezado,contenido,pie)}
                    </div>);  
    }
    
    renderFlex(encabezado,contenido,pie,clases,aos){
        
        let margen = this.props.margen || 0;
        let size   = this.props.size  || null;
        let ancho  = this.props.ancho || null;
        let largo  = this.props.largo || "auto";
 
        let estilo = {marginTop:margen};      
        
        if(size !== null){
            ancho = size[0];
            largo = size[1];
        }
        
        largoClamp(estilo,largo);
        anchoClamp(estilo,ancho);        
        
        if(aos !== "")
            return (<div className={"d-flex p-cero "+clases} style={estilo} data-aos={aos}>
                        {encabezado}
                        {contenido}
                        {pie}
                    </div>);  
        else
            return (<div className={"d-flex p-cero "+clases} style={estilo}>
                        {encabezado}
                        {contenido}
                        {pie}
                    </div>);  
        
    }
        
    render(){
        let componente = <h1>Error</h1>;
        
        let tipo       = this.props.tipo || PanelTipo.BASICO;        
        
        let encabezado = this.props.encabezado;
        let contenido  = this.props.contenido;
        let pie        = this.props.pie;
                       
        let aos        = this.props.aos    || "";
        let clases     = this.props.clases || ""; 
                
        switch(tipo){
            case PanelTipo.BASICO:
                componente = this.renderBasico(encabezado,contenido,pie,clases,aos);
            break;
            case PanelTipo.BASICO_ABS:
            case PanelTipo.BASICO_REL:
                componente = this.renderBasicoAbsolutoRelativo(tipo,encabezado,contenido,pie,clases,aos);
            break;
            case PanelTipo.GRID_BASICO:
                componente = this.renderGrid(encabezado,contenido,pie,clases,aos);
            break;
            case PanelTipo.GRID_ABS:
            case PanelTipo.GRID_REL:
                componente = this.renderGridAbsolutoRelativo(tipo,encabezado,contenido,pie,clases,aos);
            break;
            case PanelTipo.FLEX_BASICO:
                componente = this.renderFlex(encabezado,contenido,pie,clases,aos);
            break;
        }
        return componente;
    }
    
};


