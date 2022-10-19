import React, { useContext, useState, useRef } from 'react';
import { InputContex } from '../../Context';
import TaskStyle from "./Task.module.css"
interface Props {
  items: any,
  setRemove?: React.Dispatch<React.SetStateAction<any[]>>
  filter?: () => {}
}
export const Task = ({ items }: Props) => {
  const inputsetState = useContext(InputContex)
  const { setDelete } = inputsetState
  const [checked, setChecked] = useState(false)
  const [update, setUpdate] = useState(false)
  const [edit, setEdit] = useState(`${items.input}`)
  const setToDelete = () => {
    setDelete(items.id)
  }
  const handleEdit = (event: React.FormEvent<HTMLInputElement>): void => {
    setEdit(event.currentTarget.value)
  }
  return (
    <div className={TaskStyle.TaskContianer}>
      <div className={TaskStyle.Value}>
        {checked ? <s>{edit}</s> : edit}
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
          <button onClick={setToDelete}>
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
