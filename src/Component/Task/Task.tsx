import React, { useState,useContext } from 'react';
import {InputContex} from "../../Context"
import TaskStyle from "./Task.module.css"

interface Props {
  items: any,
  setRemove?: React.Dispatch<React.SetStateAction<any[]>>
  filter?: () => {}
}

export const Task = ({ items }: Props) => {
  const {setDelete} = useContext(InputContex)
  const [checked, setChecked] = useState<boolean>(false)
  const [update, setUpdate] = useState<boolean>(false)
  const [edit, setEdit] = useState<string>(`${items.input}`)
  const handleEdit = (event: React.FormEvent<HTMLInputElement>): void => {
    setEdit(event.currentTarget.value)
  }
  return (
    <div className={TaskStyle.TaskContianer}>
      <div className={TaskStyle.Value}>
        {checked ? <s> {edit} </s> : edit}
        {
          update &&
          <div className="ModalClass">
            <input type="text" value={edit} onChange={handleEdit} />
          </div>
        }
      </div>
      <div className={TaskStyle.Function}>
        <div className={TaskStyle.Check}>
          <input
            type="checkbox"
            checked={checked}
            onChange={(): void => { setChecked(prev => !prev) }}
          />
        </div>
        <div className={TaskStyle.Delete}>
          <button onClick={() => {
            setDelete(items.id)
          }}>
            Delete
          </button>
        </div>
        <div className={TaskStyle.Update}>
          <button onClick={() => { setUpdate(prev => !prev) }} >
            Update
          </button>
        </div>
      </div>
    </div>
  )
}
