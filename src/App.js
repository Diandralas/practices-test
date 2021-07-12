import './App.css';
import { useState } from 'react';

function App() {
  const [ buttonColor, setButtonColor] = useState('red')
  const[ disabled, setDisabled ] = useState(false);

  const buttonNewColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button style={{backgroundColor: disabled ? 'gray': buttonColor, color: 'white'}} 
      onClick={() => setButtonColor(buttonNewColor)} 
      disabled={disabled}>
        Change to {buttonNewColor}</button>
        <br />
        <input type='checkbox'
        id='enable-button-checkbox'
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
        />
        <label htmlFor='enable-button-checkbox'>Disable button</label>
    </div>
  );
}

export default App;
