import logo from './logo.svg';

import './App.css';
import React, { useEffect, useState, Fragment } from 'react';
import Cursor from "react-cursor-follow";
import mainImage from './main-image.jpg'
import turnipHead from './turnip-head.png'
import bowser from './Super-Mario-Bowser.png'
import ryuk from './shinigami-ryu.png'
import patrick from './patrick.png'
import dio from './dio.png'
import { useTimer } from 'react-timer-hook';
import Demo from './PositionTracker';
import { useMouse } from 'react-use';
import MyTimer from './Timer';
import { characters, chars } from './main-script';
import { getNextKeyDef } from '@testing-library/user-event/dist/keyboard/getNextKeyDef';







/**
 * It sets the state of the input to the value of the input.
 * @returns A form with an input field.
 */
export function Input() {

  window.time = new Date();
  window.time.setSeconds(700);

  const [gameStateOver, setGameStateOver] = useState(false);//starting,playing,losing,wining

  const [nameInput, setNameInput] = useState('');
  const [gameStart, setGameStart] = useState(false);

  const [chooseObject, setChooseObject] = useState(false);
  const [alertBlock, setAlertBlock] = useState('hidden');//right,wrong

  window.charList = []


  const ref = React.useRef(null);
  const { docX, docY } = useMouse(ref);


  // 10 minutes timer

  function InputChange(nameInput, setNameInput) {

    setNameInput(nameInput);
  }


  function changeView() {
    setGameStart(true);

  }


  function MyButton() {
    return (
      <button onClick={changeView}>
        Start
      </button>
    )
  }
  /* A function that is called when the user clicks on the image. It is used to display the dropdown
  menu. */
  function GotClicked() {
    console.log(`IN ELEM ${docX}, ${docY}`);
    //bowser Y 2345-2480 
    dropDown(docX, docY);
    setChooseObject(true);

    // console.log(`IN DOC ${docX}, ${docY}`);
  }

  /* Checking if the character is in the position of the click. */
  function verifyClick(toVerify) {
    return (chars[`${toVerify}`].position.includes(docY)) ? chars[`${toVerify}`].clicked() : false;

  }

  function listClick(e) {

    (verifyClick(e.target.innerText)) ? setAlertBlock('right') : setAlertBlock('wrong');
    setTimeout(() => setAlertBlock('hidden'), 2000);
    setChooseObject(false);
  }



  // //
  // for (const char in chars) {
  //   if(chars[`${char}`].found===false){
  //       console.log(chars[`${char}`].name)
  //   }

  // }


  // }

  /**
   * It loops through the characters object and if the character has not been found, it adds it to the
   * character list
   */
  function createArray() {

    for (const char in chars) {
      if (chars[`${char}`].found === false) {
        window.charList.push(<li key={char} onClick={listClick}>{chars[`${char}`].name}</li>)
      }
    }
    if (window.charList.length == 0) {
      setGameStateOver(true);
    }

  }


  function dropDown(x, y) {
    createArray();


    window.dropDownMenu = <div style={{
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
      background: '#221E22',
      color: 'white',
      borderRadius: '0.6rem'
    }}>
      <ul style={{
        listStyleType: 'none',
        marginRight: '2rem'
      }}> {window.charList}</ul>
    </div>

  }

  // function Block() {
  //   return (
  //     <div onClick={GotClicked} style={{
  //       position: 'relative',
  //       top: '150rem',
  //       left: '75rem',
  //       width: '40%',
  //       height: '120px',
  //       border: '10px solid white'
  //     }}>

  //     </div>
  //   )
  // }




  if (gameStateOver) {
    return (<><h1 style={{ textAlign: 'center', marginTop: '15%' }}>Uakyt bitti, mal!</h1 >

    </>
    )

  }
  if (gameStart) {
    return (
      <>

        <MyTimer expiryTimestamp={window.time} changeState={setGameStateOver} />

        {/* <FollowCursor /> */}
        {/* <Demo /> */}
        <div ref={ref} style={{ display: 'flex', justifyContent: 'center', }}>
          {alertBlock !== 'hidden' && <div style={{ position: 'fixed', left: '40%', top: '7vh', backgroundColor: 'white', padding: '1.5rem', borderRadius: '1.2rem' }}>
            <h1>You got it
              {alertBlock == 'right' && <span style={{ color: 'green' }}> {alertBlock}!</span>
              }
              {alertBlock == 'wrong' && <span style={{ color: 'red' }}> {alertBlock}!</span>}
            </h1>
          </div>
          }
          <img onClick={GotClicked} src={mainImage} className='main-image' ></img>
          {chooseObject &&
            window.dropDownMenu
          }
        </div>
      </>
    )
  }

  return (

    <div className='main-div'>

      <div className='input-form'>
        <form>
          <h1>Gonna find them all!</h1>
          <input type='text' className='main-input'
            value={nameInput}
            placeholder='Your Name'
            onChange={(e) => InputChange(e.target.value, setNameInput)}
          />
          <MyButton />

        </form >
      </div>
      <div className='items-to-find'>
        <h2>Bowser - <span className='easy-dif'> Easy</span></h2>
        <img className='toFind' src={bowser}></img>
        <h2>Turnip-Head - <span className='normal-dif'> Normal</span></h2>
        <img className='toFind' src={turnipHead}></img>
        <h2>Shinigami Ryuk - <span className='normal-dif'> Normal</span></h2>
        <img className='toFind' src={ryuk}></img>
        <h2>Patrick - <span className='hard-dif'> Hard</span></h2>
        <img className='toFind' src={patrick}></img>
        <h2>Dio - <span className='hard-dif'> Hard</span></h2>
        <img className='toFind' src={dio}></img>
      </div>
    </div >
  );
}


// export function Waldo() {


//   return (
//     <form>
//       <input type="text" placeholder='your name'>
//       </input>
//       <input type="submit">
//       </input>
//     </form>
//   )
// }
export function FollowCursor() {
  const [i, setI] = useState(0);
  return (
    <Cursor hollow={true} duration={0.1} size={35} opacity={1} color="white" />
  )
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
