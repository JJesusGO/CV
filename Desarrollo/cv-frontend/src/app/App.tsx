import styled from 'styled-components';
import { EntradaSelectProps, EntradaTextoProps, Label } from '../react-framework/componentes/basicos/Entradas';
import Panel, { PanelTipo } from '../react-framework/componentes/basicos/Panel';
import Fila, { Col } from '../react-framework/componentes/compuestos/Fila';
import Formulario, { FormularioLayout, FormularioNodo } from '../react-framework/componentes/compuestos/Formulario';

const Viewport = styled(Panel)`
  background-color: #3c86c2;
  color: white;
  padding: 2rem !important;
  min-height: 100vh;
`;

interface IFormulario{
  f1_nombre: string;
  f1_seleccion: string;
}

function App() {

  const entradas: FormularioLayout = [
    {
      className: 'row mt-3',
      props: {        
        id: 'f1_nombre',                        
        type: 'text',
        label: {text:"Nombre", className:"txt-blanco"} as Label,
      },
    } as FormularioNodo<EntradaTextoProps>,
    {
      className: 'row mt-3',
      props: {        
        id: 'f1_seleccion',                        
        opciones: [{id:"opcion1",value:"Opcion 1"},{id:"opcion2",value:"Opcion 2"}],
        label: {text:"Seleccion", className:"txt-blanco"} as Label,
      },
    } as FormularioNodo<EntradaSelectProps>,
  ]; 
  return (
    <div className="App">
      <Viewport tipo={PanelTipo.BASICO}>
        <Fila>
          <Col sm={12} md={{size:6,offset:3}}>
            <h1>Formulario</h1>
            <Formulario<IFormulario> className="w-100" initialValue={{f1_nombre: "", f1_seleccion: "opcion1"}} onInput={(formulario)=>{
              console.log(formulario);
            }} onSubmit = {(formulario)=>{
              console.log(formulario);
            }}>
                {entradas}
            </Formulario>
          </Col>          
        </Fila>        
      </Viewport>
    </div>
  );
}



export default App;
