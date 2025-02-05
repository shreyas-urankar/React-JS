import { useState } from "react";
import "./App.css";
import { tabs } from "./tabs";

function App() {
  let [todolist, setTodolist] = useState([]);
  let [activeTabs, setactiveTabs] = useState(0);
  let[activeContent, setactiveContant]=useState(tabs[0]);
  let changeData=(index)=>{
    setactiveTabs(index)
    setactiveContant(tabs[index])
  }
  let saveToDoList = (event) => {
    let todoname = event.target.todoname.value;
    if (!todolist.includes(todoname)) {
      let finalDolist = [...todolist, todoname];
      setTodolist(finalDolist);
    } else {
      alert("ToDo Name Allready Exists..... ");
    }

    event.preventDefault();
  };

  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems
        value={value}
        key={index}
        indexNumber={index}
        todolist={todolist}
        setTodolist={setTodolist}
      />
    );
  });
  return (
    <div className="App">
      <div className="tabsOuter">
        <h1 style={{ textAlign: "left" }}>
          Law Prep Vision Mission and Values
        </h1>

        <ul>
          {tabs.map((tabsItems, index) => {
            return (
              <li>
                <button onClick={()=>changeData(index)} className={activeTabs==index? 'activeButton': ''}>{tabsItems.title}</button>
              </li>
            );
          })}

        </ul>
        {activeContent!==undefined?<p>
            {activeContent.description}
          </p>
          :
          ''
           }
        
      </div>
      <h1>Todo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="todoname" /> <button>Save</button>
      </form>
      <div className="outerDiv">
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItems({ value, indexNumber, todolist, setTodolist }) {
  let [status, setStatus] = useState(false);
  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i != indexNumber);
    setTodolist(finalData);
  };

  let checkStatus = () => {
    setStatus(!status);
  };
  return (
    <li className={status ? "completetodo" : ""} onClick={checkStatus}>
      {indexNumber + 1} {value} <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
