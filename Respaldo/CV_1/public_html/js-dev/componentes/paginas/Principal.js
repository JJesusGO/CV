/* global EncabezadoTipo, modelo*/

class Principal extends React.Component{

    componentDidMount(){              
        
        let rellax = new Rellax('.rellax');
        setTimeout(()=>{rellax.refresh();},1);
        
        $('[data-toggle="popover"]').popover();       
        
        
    }
    render(){                                     
        return (
                <div className="container-fluid m-0 p-0">
                        <Navegador />
                        <PanelPrincipal />  
                        <PanelDescripcion />
                        <PanelExperiencia />
                        <PanelProyectos />
                        <PanelPortafolioBlog />
                        <PanelConocimientos />
                        <PanelServicios />
                        <PanelContacto />
                    <Pie/>
                </div>
               );
    }
    
};


