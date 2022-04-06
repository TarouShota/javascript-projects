import logo from './logo.svg';

import './App.css';
import React, { useState } from 'react';

// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null)
//     }
//   }
//   renderSquare(i) {
//     return <square value={i} />;
//   }
// }


const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

// function List() {

// }






/**
 * It sets the state of the input to the value of the input.
 * @returns A form with an input field.
 */
export function Input() {
  const [nameInput, setNameInput] = useState('');

  function InputChange(nameInput, setNameInput) {

    setNameInput(nameInput);
  }


  function changeView() {
    setNameInput(nameInput + 'suui');
  }

  function MyButton() {
    return (
      <button onClick={changeView}>
        Clicked me?
      </button>
    )
  }


  return (
    <>
      <form>
        <input type='text'
          value={nameInput}
          placeholder='name'
          onChange={(e) => InputChange(e.target.value, setNameInput)}
        />
        <MyButton />

        <h1>{nameInput}</h1>

      </form>
    </>
  );
}



// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }


//export default App;
