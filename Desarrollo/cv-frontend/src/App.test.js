import { render } from '@testing-library/react';
import App from './App';

describe("Aplicacion",()=>{
  const renderComponente = () => {return render(<App />);}

  test('Se renderiza el componente', () => {   
    expect(renderComponente()).toBeDefined();
  });
  
});
