import style from "./secondary.module.css";
import {currentContext} from '../main container/mainContainer.jsx'
import {counter} from '../main container/mainContainer.jsx'
import { useContext,useState } from "react";
// import {handleCurrent} from './mainContainer'
// import {currentQuest} from './mainContainer'
function Secondary() {
  let current = useContext(currentContext)
  let [appearance,setAppearance]=useState(false)
  
  function handleAucBtn(){
   setAppearance(!appearance)
  }

  return (
    <>
      <div className={style.secondary}>

        <div className={`${style.box} ${style.box1}`}>
          <h2>Current Quest</h2>
          <p>{current?current:"None Active"}</p>
          <div className={style.hr}></div>
          <h2>Total Quests</h2>
          <p>{counter}</p>
        </div>

        <div className={`${style.box} ${style.box2}`}>
          
         <div className={`${style.auc}  ${appearance ? style.shown : '' }`} >
          <h2>Game Guide <div className={style.aucbtn} onClick={handleAucBtn}></div> </h2>
          <p>Basics Of Adventure</p>
          <p>Quest Mechanics</p>
          <p>Combat Tips</p>
         </div>
        </div>
      </div>
    </>
  );
}

export default Secondary;
