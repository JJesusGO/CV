/* global EncabezadoTipo, modelo, PanelPrincipalTipo, NavegadorTipo*/

class Principal extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {experiencia:false};
    }

    componentDidMount(){              
        
        let rellax = new Rellax('.rellax');
        setTimeout(()=>{rellax.refresh();},1);
        
        $('[data-toggle="popover"]').popover();       
        
        
    }
    
    clickexperiencia(){
        this.setState({experiencia:true});
    }
    
    render(){                           
        
        if(this.state.experiencia)
            return <Redirect to="/experiencia" />;
        return (
                <div className="container-fluid m-0 p-0">
                    <Navegador tipo={NavegadorTipo.INICIO} />    
                    <PanelPrincipal tipo = {PanelPrincipalTipo.INICIO}/>  
                    <PanelDescripcion />
                    <PanelExperiencia onclickexperiencia = {()=>{this.clickexperiencia();}} />
                    <PanelProyectos />
                    <PanelPortafolioBlog />
                    <PanelConocimientos />
                    <PanelServicios />
                    <PanelDescargarCV />
                    <PanelContacto />
                    <Pie/>
                </div>
               );
    }
    
};


