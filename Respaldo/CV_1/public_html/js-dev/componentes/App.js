/* global ServidorRoute */

class App extends React.Component{
    
    
    componentDidMount(){              
        AOS.init(); 
        $("#ventana-carga").fadeOut("200");    
    }
    render(){
                
        return (<Router>
                    <Switch>
                      <Route exact path="/">
                        <Redirect to={ServidorRoute}/>
                      </Route>
                      <Route exact path="/inicio">
                        <Principal />
                      </Route>                      
                    </Switch>
                </Router>);        
    }
    
};


