import React, { useContext } from 'react';
import { InputContex } from './Context';
import { Input } from './Component/Input/Input';
import { Task } from './Component/Task/Task';
import AppStyle from './App.module.css';
function App() {
  const val = useContext(InputContex)
  return (
    <div className={AppStyle.App}>
      <div className={AppStyle.AppContainer}>
        <div className={AppStyle.Input}>
          <Input
            input={val.input}
            Tasks={val.Tasks}
            setTasks={val.setTasks}
            handleChange={val.handleChange}
          />
        </div>
        <div className={AppStyle.Task}>
          {
            val.filtter.map((items: any) => {
              return (
                <Task
                  key={items.id}
                  items={items}
                  setRemove={val.setRemove}
                  filter={val.filtered}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
