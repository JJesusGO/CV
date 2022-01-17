import Boton, { BotonTipo } from '../react-framework/componentes/basicos/Boton';
import { PaletaColor } from '../react-framework/componentes/types';
import styled from 'styled-components';
import Panel, { PanelTipo } from '../react-framework/componentes/basicos/Panel';

const Botonazo = styled(Boton)`
  color:black !important;
  &:focus{
    color:black !important;
    text-decoration: underline;
  }
  &:hover{
    color:black !important;
    transform: scale(1.1);
    text-decoration: underline;
  }
  &:active{
    color:red !important;
    transform: scale(0.9);
  }
`;

const Panelazo = styled(Panel)`
  background-color: #c28c3c;
`;

function App() {
  return (
    <div className="App">
      <Panelazo tipo={PanelTipo.FLEX} className="flex-column" breakpoint='sm'>
        <Botonazo tipo={BotonTipo.LINK}
              color={PaletaColor.PRINCIPAL}
              className='px-5 py-1 mx-auto my-1 txt-principal'
              onClick={()=>{console.log('HOLA MUNDO')}}
        >
          Boton
        </Botonazo>
        <Botonazo tipo={BotonTipo.RELLENO}
              color={PaletaColor.PRINCIPAL}
              className='px-5 py-1 mx-auto my-1 txt-principal'
              onClick={()=>{console.log('HOLA MUNDO')}}
        >
          Boton
        </Botonazo>
      </Panelazo>            
    </div>
  );
}



export default App;
