import logo from './logo.svg';

import './App.css';
import React, { useState } from 'react';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    }
  }
  renderSquare(i) {
    return <square value={i} />;
  }
}
/**
 * It returns a div element with a header and a paragraph.
 * @returns The JSX code is being returned.
 */
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export function MyButton({ count, onClick }) {

  return (
    <button onClick={onClick}>
      U clicked me {count} times
    </button>
  );
}
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

// function List() {

// }


export function List() {
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);

  }
  console.log(listItems)
  return (
    <>
      <ul>{listItems}</ul>
      <h1>{count}</h1>

      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} /></>
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
