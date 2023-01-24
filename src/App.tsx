import { useContext } from 'react';
import AppStyle from './App.module.css';
import { InputContex } from './Context';
import { Task } from './Component/Task/Task';
import SignIn from './Component/SignIn/SignIn';
import { Input } from './Component/Input/Input';
import { Routes, Route } from "react-router-dom";

function App() {
  const val = useContext(InputContex)
  return (
    <div className={AppStyle.App}>
      <Routes>
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/' element={
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
                val.Tasks.map((items: any) => {
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
