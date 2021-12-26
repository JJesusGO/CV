import Boton, { BotonTipo } from '../framework/componentes/basicos/Boton';
import { PaletaColor } from '../framework/componentes/types';

function App() {
  return (
    <div className="App">
      <Boton tipo={BotonTipo.LINK}
             color={PaletaColor.PRINCIPAL}
             className='px-5 py-1 mx-auto my-1 txt-principal'
             onClick={()=>{console.log('HOLA MUNDO')}}
             width={'75%'}
      >
        Boton
      </Boton>
    </div>
  );
}

export default App;
