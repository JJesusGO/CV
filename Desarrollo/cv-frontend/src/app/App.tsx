import styled from 'styled-components';
import { EntradaTextoProps, Label } from '../react-framework/componentes/basicos/Entradas';
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
}

function App() {

  const entradas: FormularioLayout = [
    {
      className: 'row',
      props: {        
        id: 'f1_nombre',                        
        type: 'text',
        label: {text:"Nombre", className:"txt-principal"} as Label,
      } as EntradaTextoProps
    } as FormularioNodo<EntradaTextoProps>,
  ] 
  return (
    <div className="App">
      <Viewport tipo={PanelTipo.BASICO}>
        <Fila>
          <Col sm={12} md={{size:6,offset:3}}>
            <h1>Formulario</h1>
            <Formulario<IFormulario> className="w-100" onInput={(formulario)=>{
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
