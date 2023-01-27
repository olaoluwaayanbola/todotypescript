import { useContext } from 'react';
import AppStyle from './App.module.css';
import { InputContex } from './Context';
import { Task } from './Component/Task/Task';
import SignIn from './Component/SignIn/SignIn';
import { Input } from './Component/Input/Input';
import { Routes, Route } from "react-router-dom";

function App() {
  const val = useContext(InputContex)
  const newList = () => {
    let arr = []
    for(let i = 0;i < val.Tasks.length;i++){
      if(val.Tasks[i].id !== val.deleted){
        arr.push(val.Tasks[i])
      }
    }
    return arr
  }


  return (
    <div className={AppStyle.App}>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/Home' element={
          <div className={AppStyle.AppContainer}>
            <div className={AppStyle.Input}>
              <Input
                input={val.input}
                setInputs={val.setInputs}
                handleChange={val.handleChange}
                setTasks={val.setTasks}
              />
            </div>
            <div className={AppStyle.Task}>
              {
                newList().map((items: any) => {
                  return (
                    <Task
                      key={items.id}
                      items={items}
                    />
                  )
                })
              }
            </div>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
