import Boton, { BotonTipo } from '../react-framework/componentes/basicos/Boton';
import { PaletaColor } from '../react-framework/componentes/types';
import styled from 'styled-components';
import Panel, { PanelTipo } from '../react-framework/componentes/basicos/Panel';
import Modal, { ModalContenido, ModalContenidoTipo, ModalDialog, ModalTipo} from '../react-framework/componentes/compuestos/Modal';
import { useState } from 'react';
import Multiplexor from '../react-framework/componentes/basicos/Multiplexor';
import Nav, { NavItem, NavItemTipo, NavTipo } from '../react-framework/componentes/compuestos/Nav';
import Fila, { ColumnaItem } from '../react-framework/componentes/compuestos/Fila';

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
  background-color: #3c86c2;
`;

function App() {
  const [enable, setEnable] = useState(true);
  const [index, setIndex] = useState(0);
  const [tab, setTab] = useState(0);
  const getNavItems = (): NavItem[]=>{
    return [
      {
        key: "1",
        tipo: NavItemTipo.ITEM,
        children: <h5 className='txt-blanco'>Link 1</h5>,
      },
      {
        key: "2",
        tipo: NavItemTipo.ITEM,
        children: <h5 className='txt-blanco'>Link 2</h5>,
      }
    ];
  }
  const getColumnas = (): ColumnaItem[]=>{
    return [
      {
        key: "1",
        md: {
          size: 3,
          offset: 3
        },
        sm: 12,
        children: <Botonazo tipo={BotonTipo.RELLENO} className='w-100'>Boton 1</Botonazo>,
        className: 'px-1',
      },
      {
        key: "2",
        md: 3,
        sm: 12,
        children: <Botonazo tipo={BotonTipo.RELLENO} className='w-100'>Boton 2</Botonazo>,
        className: 'px-1',
      },
      {
        key: "3",
        md: 3,
        sm: 12,
        children: <Botonazo tipo={BotonTipo.RELLENO} className='w-100'>Boton 3</Botonazo>,
        className: 'px-1',
      },
    ];
  }
  return (
    <div className="App">
      <Panelazo tipo={PanelTipo.FLEX} className="flex-column" breakpoint='sm'>
        <Nav tipo={NavTipo.PILLS} index={tab} onSelect={(index)=>setTab(index)}>
          {getNavItems()}
        </Nav>
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
      <Panel tipo={PanelTipo.FLEX} className="justify-content-center">
        <Fila className="w-75">
            {getColumnas()}
        </Fila>          
      </Panel>      
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
              {["Prueba 1", "Prueba 2"].map((text,index)=>{
                return <h1 key={`key.${index}`}>Item : {text}</h1>
              })}
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
