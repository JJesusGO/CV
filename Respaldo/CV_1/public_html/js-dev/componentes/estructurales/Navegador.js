

class Navegador extends React.Component{
    
    componentDidMount(){
        
        $(window).scroll(function () {
            let top = $(document).scrollTop();            
            if(top >= $(window).height()){
                if(!$('#navegador').hasClass('fix'))
                    $('#navegador').addClass('fix');
            }
            else{
                if($('#navegador').hasClass('fix'))
                   $('#navegador').removeClass('fix');
            }
        });
        $("a").on('click', function(event) {
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
        });
        
        
    }    
    render(){
     
        let navegador = (<nav id="navegador" className="navbar navbar-expand-xl navbar-dark seccion-nav">

                            <a href="#portada" className="navbar-brand">
                                <h1>Jesús G.O.</h1>
                            </a>

                            <button className = "navbar-toggler" type = "button" data-toggle="collapse" data-target="#navegacion-lista" aria-controls="navegacion-lista" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div id="navegacion-lista" className="collapse navbar-collapse bkg-principal p-basico--4">
                                <ul className="navbar-nav ml-auto">
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
                                </ul>
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


