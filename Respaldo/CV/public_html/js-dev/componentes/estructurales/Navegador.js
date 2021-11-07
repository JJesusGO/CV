

const NavegadorTipo={
    INICIO: 0,
    EXPERIENCIA: 1
};

class Navegador extends React.Component{

    constructor(props){
        super(props);
        this.scroll = this.scroll.bind(this);
    }
    componentDidMount(){
                                                      
        window.addEventListener('scroll',this.scroll,true);             
        $("a").on('click', this.aclick);
        
        
    }    
    componentWillUnmount() {
        window.removeEventListener('scroll',this.scroll,true);          
        $("a").off('click',this.aclick);
    }
    
    scroll(){
        let tipo = this.props.tipo || NavegadorTipo.INICIO;
        let fondo = '';
       
        switch(tipo){
            case NavegadorTipo.INICIO:
                fondo = 'bkg-principal';
                break;
            case NavegadorTipo.EXPERIENCIA:
                fondo = 'bkg-secundario';
                break;
        }

        
        let top = $(document).scrollTop();
            if(top >= $(window).height()){
                if(!$('#navegador').hasClass('fix')){
                    $('#navegador').addClass('fix'); 
                    $('#navegador').addClass(fondo); 
                }
            }
            else{
                if($('#navegador').hasClass('fix')){
                   $('#navegador').removeClass('fix');       
                   $('#navegador').removeClass(fondo); 
               }
            }
    }
    aclick(event){
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;

            anime({
                targets: 'html, body',
                scrollTop: $(hash).offset().top,
                duration: 500,
                easing: 'easeInOutQuint',
                complete: function(anim) {
                    window.location.hash = hash; 
                }
            });           
        }            
        
    }
                
    renderInicio(){
        return  (<ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-1">
                        <a href="#descripcion" className="nav-link">Descripción</a>
                    </li>
                    <li className="nav-item mx-1">
                        <a href="#experiencia" className="nav-link">Experiencia</a>
                    </li>
                    <li className="nav-item mx-1">
                        <a href="#proyectos" className="nav-link">Proyectos</a>
                    </li>                           
                    <li className="nav-item mx-1">
                        <a href="#portafolioblog" className="nav-link">Portafolio/Blog</a>
                    </li>
                    <li className="nav-item mx-1">
                        <a href="#conocimientos" className="nav-link">Conocimientos</a>
                    </li>
                    <li className="nav-item mx-1">
                        <a href="#servicios" className="nav-link">Servicios</a>
                    </li>
                </ul>);
    }
    renderExperiencia(){
        return  (<ul className="navbar-nav ml-auto">
                    <li className="nav-item mx-1">
                        <a href="#educacion" className="nav-link">Educación</a>
                    </li>
                    <li className="nav-item mx-1">
                        <a href="#experienciaprofesional" className="nav-link">Profesional</a>
                    </li>                    
                    <li className="nav-item mx-1">
                        <a href="#cursostalleres" className="nav-link">Cursos</a>
                    </li>                    
                    <li className="nav-item mx-1">
                        <a href="#trabajosinvestigaciones" className="nav-link">Trabajos</a>
                    </li>  
                </ul>);
    }
   
    render(){
     
        let tipo = this.props.tipo || NavegadorTipo.INICIO;
        let fondo = '';
        
        let opciones = null;

        switch(tipo){
            case NavegadorTipo.INICIO:
                fondo = 'bkg-principal';
                opciones = this.renderInicio();
                break;
            case NavegadorTipo.EXPERIENCIA:
                fondo = 'bkg-secundario';
                opciones = this.renderExperiencia();
                break;
        }
        
        let navegador = (<nav id="navegador" className="navbar navbar-expand-xl navbar-dark seccion-nav ">

                            <a href="#portada" className="navbar-brand" onClick={this.props.onclickregresar}>
                                <h1>Jesús G.O.</h1>
                            </a>

                            <button className = "navbar-toggler" type = "button" data-toggle="collapse" data-target="#navegacion-lista" aria-controls="navegacion-lista" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div id="navegacion-lista" className={"collapse navbar-collapse p-basico--4 "+fondo}>
                                {opciones}
                            </div>
                        </nav>);
        
        let columnas = [{
                            contenido:navegador, 
                            ancho:[7,8],
                            breakpoint : ['lg','xl']
                            
                        }];
        
        return <Fila columnas={columnas} clases="position-absolute z-9"/>;
        /*return <Panel tipo={PanelTipo.BASICO} 
                    contenido = {fila}                    
                    clases = "position-absolute z-9"
                />;*/
    }    
    
}; 


