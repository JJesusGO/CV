import Boton, { BotonTipo } from '../react-framework/componentes/basicos/Boton';
import { PaletaColor } from '../react-framework/componentes/types';
import styled from 'styled-components';
import Panel, { PanelTipo } from '../react-framework/componentes/basicos/Panel';
import Modal, { ModalContenido, ModalContenidoTipo, ModalDialog, ModalTipo} from '../react-framework/componentes/basicos/Modal';
import { useState } from 'react';
import Multiplexor from '../react-framework/componentes/basicos/Multiplexor';

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
  const [enable, setEnable] = useState(true);
  const [index, setIndex] = useState(0);
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
      <Modal tipo={ModalTipo.BASICO} enable={enable} onClose={()=>setEnable(false)}>
        <ModalDialog breakpoint='lg'>
          <ModalContenido tipo={ModalContenidoTipo.HEADER} className="bkg-blanco">
            <Panel tipo={PanelTipo.FLEX}>
              <Boton tipo={BotonTipo.RELLENO} onClick={()=>setIndex(0)} className='px-5 py-1 mx-2'>1</Boton>
              <Boton tipo={BotonTipo.RELLENO} onClick={()=>setIndex(1)} className='px-5 py-1 mx-2'>2</Boton>
            </Panel>
          </ModalContenido>          
          <ModalContenido tipo={ModalContenidoTipo.BODY} className="bkg-blanco">
            <Multiplexor index={index}>
              {["Prueba 1", "Prueba 2"]}
            </Multiplexor>            
          </ModalContenido>          
          <ModalContenido tipo={ModalContenidoTipo.FOOTER} className="bkg-blanco">
            <h1>FOOTER</h1>
          </ModalContenido>          
        </ModalDialog>
      </Modal>
    </div>
  );
}



export default App;
