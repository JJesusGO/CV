/* global PanelTipo, BotonTipo, PaletaColor, ModalTipo */


function EncabezadoSeccion(props){
    
    let color = props.color || PaletaColor.PRINCIPAL;
    let estilo = {height:'7vh',marginTop:'-10vh'};
    
    switch(color){
        case PaletaColor.PRINCIPAL:
            return <img className="w-100" style={estilo} src="/media/img/elementos/encabezado-principal.png"/>
            break;
        case PaletaColor.SECUNDARIO:
            return <img className="w-100" style={estilo} src="/media/img/elementos/encabezado-secundario.png"/>
            break;
        case PaletaColor.BLANCO:
            return <img className="w-100" style={estilo} src="/media/img/elementos/encabezado-blanco.png"/>
            break;
    }          
                    
 } 
 
 function BotonPrincipal(props){
     
    let color    = props.color || PaletaColor.PRINCIPAL;    
    let barColor = props.barColor || PaletaColor.PRINCIPAL;    
    let texto    = props.texto || "";
    let textoClases = props.textoClases || ""; 
    let clases = props.clases || ""; 
    let id = props.id || "";  
    
    let barcolor = "bkg-secundario";        
    switch(barColor){
        case PaletaColor.PRINCIPAL:
            barcolor = "bkg-principal";
            break;
        case PaletaColor.SECUNDARIO:
            barcolor = "bkg-secundario";
            break;
        case PaletaColor.TERCIARIO:
            barcolor = "bkg-terciario";
            break;
        case PaletaColor.SUCCESS:
            barcolor = "bkg-success";
            break;
        case PaletaColor.ERROR:
            barcolor = "bkg-error";
            break;
        case PaletaColor.WARNING:
            barcolor = "bkg-warning";
            break;
        case PaletaColor.INFO:
            barcolor = "bkg-info";
            break;
        case PaletaColor.BLANCO:
            barcolor = "bkg-blanco";
            break;
    }
    
    let contenido = <div className="p-basico--2 position-relative overflow-hidden">                        
                        <p   id = {id+"-txt"} p className={"m-cero "+textoClases}>{texto}</p>                        
                        <div id = {id+"-bar"} className={'position-absolute '+barcolor} style={{width:'50%',left:'-40%',bottom:'0%',height:'10%'}}></div>
                    </div>;
    
    let hover = (e)=>{
                    
                        if(id === "")
                            return;
                            
                        if(e){
                            anime({
                                targets: '#'+id+"-bar",
                                translateX: ['0%','75%'],
                                easing: 'easeInOutQuart',
                                duration : 500
                            });
                            anime({
                                targets: '#'+id+"-txt",
                                scale: ['1','1.05'],
                                easing: 'easeInOutQuart',
                                duration : 500
                            });
                        }
                        else{
                            anime({
                                targets: '#'+id+"-bar",
                                translateX: ['75%','0%'],
                                easing: 'easeInOutQuart',
                                duration : 500  
                            });
                            anime({
                                targets: '#'+id+"-txt",
                                scale: ['1.05','1'],
                                easing: 'easeInOutQuart',
                                duration : 500
                            });
                        }
             
                    };
    
    return <Boton   tipo ={BotonTipo.RELLENO} 
                    color = {color}
                    clases = {clases}
                    contenido={contenido}
                    onclick = {props.onclick}
                    onhover = {hover}
            />;
    
 }
 

/*-------------------------------------------------------------------FORMULARIOS*/

function BotonFormulario(props){
    
    let titulo = props.titulo || "";
    let color  = props.color || PaletaColor.SUCCESS;
    let clases = props.clases || "";
    
    
    
}
function MensajeFormulario(props){
    
    let mensaje       = props.mensaje;
    let clasesMensaje = props.clasesMensaje || "";
    let clases        = props.clases || "";    
    
    return (<Panel tipo = {PanelTipo.BASICO}                          
                          breakpoint = "fluid"
                          clases     = {"p-basico "+clases}
                          contenido  = {(<h5 className={"txt-centrado "+clasesMensaje}>{mensaje}</h5>)}                          
                    />);
    
    
}


/*-------------------------------------------------------------------COLUMNAS*/

function columnaCompleta(contenido){
    
    return    { contenido : contenido,                            
                ancho      : [12]                                       
              }; 
    
}
function columnaCentrada1(contenido){
    
    return    { contenido : contenido,                            
                ancho      : [10],
                pos        : [1],                       
                breakpoint : ["sm"]                        
              }; 
    
}
function columnaCentrada2(contenido){
    
    return    { contenido : contenido,                            
                ancho      : [8],
                pos        : [2],                       
                breakpoint : ["sm"]                        
              }; 
    
}
function columnaCentrada3(contenido){
    
    return    { contenido : contenido,                            
                ancho      : [8,6],
                pos        : [2,3],                       
                breakpoint : ["sm","md"]                        
              }; 
    
}
function columnaCentrada4(contenido){
    
    return    { contenido : contenido,                            
                ancho      : [8,6,4],
                pos        : [2,3,4],                       
                breakpoint : ["sm","md","lg"]                        
              }; 
    
}

function columnaDobleFluid(contenido,clases=""){
    
    return      {   contenido : contenido,                            
                    ancho      : [6],                       
                    clases : clases
                };
    
}
function columnaDoble(contenido,clases=""){
    
    return      {   contenido : contenido,                            
                    ancho      : [12,6],                       
                    breakpoint : ["sm","md"],
                    clases : clases
                };
    
}


/*-------------------------------------------------------------------PANEL*/

function PanelReset(){    
    return <div className="panel-reset"> </div>;    
}

const    PanelCargandoTipo = {
    PRINCIPAL : 0,
    BLANCO : 1
};
function PanelCargando(props){
    let clases = props.clases || "";
    let tipo = props.tipo || PanelCargandoTipo.PRINCIPAL;
    let largo = props.largo || "auto";

    let cargando =null;
    
    switch(tipo){
        
        case PanelCargandoTipo.PRINCIPAL:
            cargando = (<div className = "d-flex flex-row justify-content-center">
                            <div className = "lds-ellipsis cargando-principal">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>);
                break;
        case PanelCargandoTipo.BLANCO:
            cargando = (<div className = "d-flex flex-row justify-content-center">
                            <div className = "lds-ellipsis">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>);
                break;
    }   
    
    return <Panel   tipo={PanelTipo.BASICO}
                    encabezado={cargando}             
                    contenido={props.contenido}
                    pie = {props.pie}                 
                    largo = {largo}
                    breakpoint="fluid"
                    clases = {"p-cero m-cero "+clases}
            />;
 

}

/*-------------------------------------------------------------------ENTRADAS*/

/* 
{   id:"usuario",
    titulo:"Usuario:",
    clases: "",
    labelClases:"",
    contenido:(<EntradaTexto   id          = "usuario"
                               tipo        = "text"
                               placeholder = "Correo o codigo de ingreso"
                               clases = "txt-info"/>)
}
 */
function EntradaTexto(props){
    let tipo   = props.tipo             || "text";
    let id     = props.id             || "";
    let placeholder = props.placeholder || "";
    let clases      = props.clases      || "";
    
    let valor = props.valor || null;

    if(valor !== null)
        return (<input type={tipo} 
                   className   = {"form-control "+clases} 
                   placeholder = {placeholder} 
                   value = {valor}
                   id={id} name={id}/>);
    return (<input type={tipo} 
                   className   = {"form-control "+clases} 
                   placeholder = {placeholder} 
                   id={id} name={id}/>);
}
function EntradaTextoArea(props){
    let id          = props.id          || "";    
    let clases      = props.clases      || "";
    let filas       = (props.filas===undefined)?3:props.filas;
    
    let valor = props.valor || null;

    if(valor !== null)
        return (<textarea className   = {"form-control "+clases}                         
                   id={id} name={id} rows={filas} value={valor}/>);
    return (<textarea className   = {"form-control "+clases}                    
                   id={id} name={id} rows={filas}/>);
}


function EntradaNumero(props){    
    let id          = props.id          || "";
    let min         = props.min         || "";
    let max         = props.max         || "";
    let placeholder = props.placeholder || "";
    let clases      = props.clases      || "";
    let valor       = (props.valor===undefined)? null: props.valor;
    
    if(valor === null)    
        return (<input type = "number" 
                       className  = {"form-control "+clases} 
                       min={min} max={max}
                       placeholder = {placeholder} 
                       id={id} name={id}/>);
                     
    return (<input type = "number" 
                   className  = {"form-control "+clases} 
                   value = {valor}
                   min={min} max={max}
                   placeholder = {placeholder} 
                   id={id} name={id}/>);
                   
}

/* 
{   id:"fecha",
    titulo:"Fecha:",
    clases: "",
    labelClases:"",
    contenido:(<EntradaFecha   id          = "usuario"                               
                               fecha  = "YYYY-MM-DD"
                               clases = "txt-info"/>)
}
 */
function EntradaFecha(props){

    let id          = props.id             || "";    
    let fecha       = props.fecha          || "";    
    let clases      = props.clases         || "";
    
    if(fecha === "")    
        return (<input type="date" 
                       className  = {"form-control "+clases}                    
                       value = {fecha}
                       id={id} name={id}/>);
                   
    return (<input  type="date" 
                    className  = {"form-control "+clases}                                        
                    id={id} name={id}/>);
}

function EntradaHora(props){

    let id          = props.id             || "";    
    let hora        = props.hora          || 0;   
    let minuto      = props.minuto         || 0;   
    let clases      = props.clases         || "";   
    
    let tiempo = "";
    tiempo += (hora<10)?"0"+hora:hora.toString();
    tiempo += ":";
    tiempo += (minuto<10)?"0"+minuto:minuto.toString();
 
    return (<input type="time" 
                   className  = {"form-control "+clases} 
                   value = {tiempo}
                   id={id} name={id}/>);                   
 
}

/* 
{   
    id:     "id",
    titulo: "Usuario:",
    clases: "",
    labelClases:"",
    contenido:(<EntradaTexto   id          = "id"
                               titulo      = "Titulo"
                               onclick     = {}
                               clases      = "txt-info"/>)
}
 */
function EntradaBoton(props){
    let titulo   = props.titulo || "";    
    let id       = props.id             || "";    
    let clases   = props.clases      || "";
    
    return (<input type = "button" 
                   className  = {"form-control "+clases} 
                   value = {titulo}           
                   onClick = {props.onclick}
                   id={id} name={id}/>);
}
/* 
{   
    id:     "id",
    titulo: "Usuario:",
    clases: "",
    labelClases:"",
    contenido:(<EntradaCheckbox   id          = "id"
                               clases      = "txt-info"/>)
}
 */
function EntradaCheckbox(props){
    let id       = props.id             || "";       
    let clases   = props.clases      || "";
    let check    = props.check;
    
    if(check !== undefined && check !== null){
        
        if(check){
            return (<input type = "checkbox"                     
                            className  = {"form-check-input "+clases}                          
                            value  = {id} id={id} name={id}
                            checked
                    />
                    );
        }
        else{
            
         return (<input type = "checkbox"                     
                           className  = {"form-check-input "+clases}                          
                           value  = {id} id={id} name={id}
                />
                );   
            
        }
    }
    else{
        return (<input type = "checkbox"                     
                           className  = {"form-check-input "+clases}                          
                           value  = {id} id={id} name={id}
                />
                );
    }
}
function EntradaCheckboxInline(props){
    let id            = props.id           || "";        
    let titulo        = props.titulo       || "";
    let clases        = props.clases       || "";
    let inputClases   = props.inputClases  || "";
    let labelClases   = props.labelClases  || "";
    
    return (<div className={"form-check "+clases}> 
                <input  type = "checkbox"                     
                        className  = {"form-check-input "+inputClases}                          
                        value  = {id} id={id} name={id}
                />                                      
                <label className={"form-check-label "+labelClases} for = {id}>{titulo}</label>            
            </div>);    
}
/* 
{   
    id:         "id",
    titulo:     "Usuario:",
    clases:     "",
    labelClases:"",
    contenido:(<EntradaRadio       id      = "id"
                                valor      = "conjunto"
                               clases      = "txt-info"/>)
}
 */
function EntradaRadio(props){
    let id       = props.id             || "";        
    let nombre   = props.nombre      || "";
    let clases   = props.clases      || "";
    
    return (<input type = "radio"                     
                       className  = {"form-check-input "+clases}                          
                       name = {nombre}
                       id={id} value = {id}
            />
            );
}
function EntradaRadioInline(props){
    let id            = props.id           || "";        
    let nombre        = props.nombre       || "";
    let titulo        = props.titulo       || "";
    let clases        = props.clases       || "";
    let inputClases   = props.inputClases  || "";
    let labelClases   = props.labelClases  || "";
    
    
    return (<div className={"form-check "+clases}> 
                <input  type = "radio"                     
                        className  = {"form-check-input "+inputClases}                          
                        name = {nombre}
                        id={id} value = {id}
                />                                      
                <label className={"form-check-label "+labelClases} for = {id}>{titulo}</label>            
            </div>);    
}


function EntradaSelect(props){
    let id        = props.id        || "";    
    let opciones  = props.opciones  || [];        
    let clases    = props.clases    || "";
    let index     = props.index     || -1;
    
    return (<select   className = {"form-control "+clases}
                        id = {id} name={id}>
                       {opciones.map((opcion,i)=>{
                            if(i!==index)                                                
                                return (<option value={opcion}>{opcion}</option>);
                            else 
                                return (<option value={opcion} selected>{opcion}</option>);
                        })}
            </select>);    
}
function EntradaMultiSelect(props){
    let id        = props.id        || "";    
    let opciones  = props.opciones  || [];        
    let clases    = props.clases    || "";
    
    return (<select   className = {"form-control "+clases}
                        id = {id} name={id} multiple> 
                       {opciones.map((opcion)=>{                            
                            return (<option value={opcion}>{opcion}</option>);
                        })}
            </select>);    
}
function EntradaArea(props){
    let contenido = props.contenido || "";    
    let id        = props.id        || "";    
    let clases    = props.clases    || "";
    
    return (<textarea   className = {"form-control "+clases}
                        id = {id} name={id}>
                {contenido}
            </textarea>);    
}
