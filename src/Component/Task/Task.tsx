import React, { useState } from 'react';
import TaskStyle from "./Task.module.css"

interface Props {
  items: any,
  setRemove?: React.Dispatch<React.SetStateAction<any[]>>
  filter?: () => {}
}

export const Task = ({ items }: Props) => {
  const [checked, setChecked] = useState<boolean>(false)
  const [update, setUpdate] = useState<boolean>(false)
  const [edit, setEdit] = useState<string>(`${items.input}`)
  const handleEdit = (event: React.FormEvent<HTMLInputElement>): void => {
    setEdit(event.currentTarget.value)
  }
  console.log(items)
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
          {/* <button onClick={setToDelete}>
            Delete
          </button> */}
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
