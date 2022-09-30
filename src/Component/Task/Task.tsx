import React, { useContext,useState } from 'react';
import { InputContex } from '../../Context';
import TaskStyle from "./Task.module.css"
interface Props {
  items: any,
  setRemove: React.Dispatch<React.SetStateAction<any[]>>
  filter: () => {}
}
export const Task = ({ items, setRemove, filter }: Props) => {
  const inputsetState = useContext(InputContex)
  const {setInputs} = inputsetState
  const [checked, setChecked] = useState(false)
  const [edit, setEdit] = useState(`${items.input}`)
  const handleChecked = (): void => {
    setChecked(prev => !prev)
  }
  const handleRemove = (): void => {
    setRemove(items.id)
    filter()
  }
  const handleEdit = (event:React.FormEvent<HTMLInputElement>): void => {
    setEdit(event.currentTarget.value)
  }
  const handleUpdate = () => {
    
  }
  console.log(inputsetState.input)
  return (
    <div className={TaskStyle.TaskContianer}>
      <div className={TaskStyle.Value}>
        {
          checked ? <s>{items.input}</s> : checked ? <span>{inputsetState.input}</span> :<span>{edit}</span>
        }
        <input type="text" value={edit} onChange={handleEdit}/>
      </div>
      <div className={TaskStyle.Function}>
        <div className={TaskStyle.Check}>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChecked}
          />
        </div>
        <div className={TaskStyle.Delete}>
          <button onClick={handleRemove}>
            Delete
          </button>
        </div>
        <div className={TaskStyle.Update}>
          <button onClick={handleUpdate} >
            Update
          </button>
        </div>
      </div>
    </div>
  )
}
