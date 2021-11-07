/* global PanelTipo, BotonTipo */

/*
 * id = ""
 * encabezado = </>
 * contenido  = </>
 * clases = ""  
 * entradas = [,,]
 * onchange = evento{}
 * 
 * tipo = FormularioTipo.SIMPLE
 *
 * pie = </>  
 *         
 * tipo = FormularioTipo.BASICO
 *   
 * botonColor = PaletaColor
 * botonContenido = </>
 * botonClases    = ""
 * onsubmit       = evento{}
 * 
 */
const FormularioTipo = {
    BASICO : 0,
    SIMPLE : 1
};

class Formulario extends React.Component{
        
    constructor(props){
        super(props);                
        this.reset();        
    }
    reset(){
        
        this.state = {};        
        let entradas = this.props.entradas;                         
        if(Array.isArray(entradas)){                
            let id = [], entrada = [];                        
            for(let i=0;i<entradas.length;i++){
                if(entradas[i].readonly === true && !Array.isArray(entradas[i].readonly))
                    continue;
                if(entradas[i].id === undefined || entradas[i].id === null)
                    continue;
                if(Array.isArray(entradas[i].id)){
                    for(let j=0;j<entradas[i].id.length;j++){
                         if(entradas[i].readonly!==undefined && entradas[i].readonly!==null)
                            if(entradas[i].readonly[j] === true)
                                continue;
                        id.push(entradas[i].id[j]);          
                    }
                }
                else
                    id.push(entradas[i].id);                
            }                   
            for(let i=0;i<id.length;i++)
                entrada.push("");            
            this.state = {id : id, entrada : entrada};
        }
    }
    
    input(e){            
        this.actualizarEntrada(e.target);       
        if(this.props.onchange !== null && this.props.onchange !== undefined)
            this.props.onchange(this.state);
            
    }
    submit(){
        if(this.props.onsubmit !== undefined)
            this.props.onsubmit(this.state);
        
    }
      
    actualizarEntrada(target){
        
        let id = this.state.id;
        let entrada = this.state.entrada;
        
        for(let i=0;i<id.length;i++){
            if((target.type === "radio") && 
               (target.name === document.getElementById(id[i]).name))
                entrada[i] = document.getElementById(id[i]).checked;                            
            else if(id[i] === target.id){ 
                if(target.nodeName === "SELECT"){
                    let valores = $('#'+id[i]).val();                    
                    if(valores.length === 1)
                        entrada[i] = valores[0];
                    else if(valores.length >= 1)
                        entrada[i] = valores;
                    else 
                        entrada[i] = "";
                }                    
                else if(target.type==="checkbox")
                    entrada[i] = target.checked;
                else
                    entrada[i] = target.value;                             
                break;
            }            
        }
        this.setState({entrada:entrada});   
        
    }
    
    renderFormulario(id,contenido,entradas){
                        
        let formulario = null;                  
                          
        if(contenido!==null){
            formulario = (<form className="panel-form" id={id} onSubmit={e => { e.preventDefault(); }}>
                            {contenido}
                          </form>);                
        }
        if(entradas!==null){
            if(Array.isArray(entradas)){               
               formulario = (<form className="panel-form" id={id} onSubmit={e => { e.preventDefault(); }}>
                                {entradas.map((e)=>renderEntrada(e))}                    
                             </form>);                             
            }
            else{                
                formulario = (<form className="panel-form" id={id} onSubmit={e => { e.preventDefault(); }}>
                                {renderEntrada(entradas)}                                    
                              </form>);                                        
            }
        }           
           
        return formulario;
    }  
      
    renderSimple(id,encabezado,contenido,entradas,clases){
        
        let formulario = this.renderFormulario(id,contenido,entradas);
        let pie        = this.props.pie;  
        
        return (<Panel  tipo={PanelTipo.GRID_BASICO}
                        encabezado = {encabezado}
                        contenido  = {formulario}
                        pie        = {pie}
                        clases = {"overflow-hidden "+clases}
                />);   
        
    }
    renderBasico(id,encabezado,contenido,entradas,clases){
        
        let botonColor     = this.props.botonColor;
        let botonContenido = this.props.botonContenido;
        let botonClases    = this.props.botonClases;
                                                     
        
        let boton = <Boton tipo  ={BotonTipo.RELLENO}
                           contenido = {botonContenido}
                           color = {botonColor}
                           clases = "w-100 p-basico"
                           onclick = {()=>this.submit()}
                    />;
                    
        let formulario = this.renderFormulario(id,contenido,entradas);
           
        return (<Panel  tipo={PanelTipo.GRID_BASICO}
                        encabezado = {encabezado}
                        contenido  = {formulario}
                        pie        = {boton}
                        clases = {"overflow-hidden "+clases}
                />);    
        
    }
    
    componentDidMount(){ 
                       
        let id = this.state.id;        
        for(let i=0;i<id.length;i++) {
           let target = document.getElementById(id[i]);
           target.addEventListener("input",(e)=>this.input(e));                                            
           this.actualizarEntrada(target);           
        }
        if(this.props.onchange !== null && this.props.onchange !== undefined)
            this.props.onchange(this.state);
    
    } 
    render(){  
                        
        let tipo        = this.props.tipo  || FormularioTipo.BASICO;
        let id          = this.props.id || null;        
        let encabezado  = this.props.encabezado;      
        let contenido   = this.props.contenido || null;
        let entradas    = this.props.entradas || null;
        let clases      = this.props.clases || "";               
        
        let componente = <h1>Error</h1>;                   
          
        switch(tipo){
            case FormularioTipo.SIMPLE:
                componente = this.renderSimple(id,encabezado,contenido,entradas,clases);
                break;
            case FormularioTipo.BASICO:
                 componente = this.renderBasico(id,encabezado,contenido,entradas,clases);
                break;
            case FormularioTipo.CONDICIONADO:
                break;
        }           
        
        return componente;
    }

    
};

