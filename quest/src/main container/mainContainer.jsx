import style from "./main.module.css";
import { useState, useRef, createContext } from "react";
import Secondary from "../secondary side/secondarySide.jsx";
export const currentContext = createContext();
export const counter = createContext();
function Main() {
  let [quests, setQuests] = useState([]);
  let [newQuests, setNewQuests] = useState("");
  let [search, setSearch] = useState("");
  let [current, setCurrent] = useState(null);
  let [questCount, setQuestCount] = useState(0);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleQuestTyping(e) {
    setNewQuests(e.target.value);
  }

  function handleAdding() {
    if (newQuests.trim() != "") {
      setQuests((q) => [...q, newQuests]);
      setNewQuests("");
      setSearch("");
      setQuestCount((c) => c + 1);
    }
  }

  let filtered = quests.filter((quest) => quest.includes(search));

  function handleAsort() {
    let Asort = filtered.sort((a, b) => a.localeCompare(b));
    setQuests(Asort);
  }

  function handleZsort() {
    let Zsort = filtered.sort((a, b) => b.localeCompare(a));
    setQuests(Zsort);
  }

  function handleRemove(questName) {
    let removed = quests.filter(quest => quest != questName);
    setQuests(removed);
    setQuestCount((c) => c - 1);
    if(current==questName){
      setCurrent("None Active")
    }
  }

  function handleCurrent(questCurrent) {
      setCurrent(quests.filter(quest=>quest==questCurrent))
    
  }

  return (
    <>
      <div className={style.main}>
        {" "}
        {/* main container beginning*/}
        <h1>Quest Board</h1>
        <div className={style.options}>
          <div className={style.search}>
            {" "}
            {/*  searching */}
            <h2>Search</h2>
            <input
              onChange={handleSearch}
              className={style.searchInput}
              value={search}
              type="text"
            />
          </div>

          <div className={style.questAdd}>
            {" "}
            {/* Adding */}
            <h2>Add Quest</h2>
            <input
              className={style.questAddInput}
              type="text"
              onChange={handleQuestTyping}
              value={newQuests}
            />
          </div>

          <button className={style.addButton} onClick={handleAdding}>
            Add Quest
          </button>

          <div className={style.sorting}>
            {" "}
            {/* Sorting */}
            <button onClick={handleAsort}>
              Sort <br /> A-Z
            </button>
            <button onClick={handleZsort}>
              Sort <br /> Z-A
            </button>
          </div>
        </div>
        <div className={style.quests}>
          {" "}
          {/* Quests List */}
          {filtered.map((quest, index) => (
            <div key={quest} className={`${style.quest} ${style.quest1}`}>
              <div className={style.questText}>
                <h3>{quest}</h3>
              </div>
              <div className={style.questBtns}>
                {/*removing */}
                <button className={style.removebtn} onClick={() => handleRemove(quest)}>Remove</button>{" "}
                {/* current */}
                <button className={style.currentbtn} onClick={() => handleCurrent(quest)}>
                  Set Current
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <currentContext.Provider value={current}>
        <counter.Provider value={questCount}>
          <Secondary />
        </counter.Provider>
      </currentContext.Provider>
    </>
  );
}

export default Main;
