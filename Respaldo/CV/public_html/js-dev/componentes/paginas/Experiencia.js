/* global PanelPrincipalTipo, NavegadorTipo */

class Experiencia extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {regresar:false};
    }
    
    componentDidMount(){              
        
        let rellax = new Rellax('.rellax');
        setTimeout(()=>{rellax.refresh();},1);
        
        $('[data-toggle="popover"]').popover();      
        
        let elemento = document.createElement('a');
        elemento.href = '#portada';
        elemento.click();
        
    }
    regresar(){
        this.setState({regresar:true});
    }
    render(){                                    
        if(this.state.regresar)
            return <Redirect to="/inicio"/>;
        return (
                <div className="container-fluid m-0 p-0">
                        <Navegador  tipo = {NavegadorTipo.EXPERIENCIA} 
                                    onclickregresar = {()=>{this.regresar();}}
                        />    
                        <PanelPrincipal tipo = {PanelPrincipalTipo.EXPERIENCIA} />
                        <PanelExperienciaContenido />
                        <PanelDescargarCV />
                        <PanelContacto />
                        <Pie/>
                </div>
               );
    }
    
};
