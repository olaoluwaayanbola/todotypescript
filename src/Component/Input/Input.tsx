import React from 'react'
import InputStyle from "./Input.module.css"
import shortid from 'shortid';
interface Props {
    input: string,
    Tasks: [],
    setTasks: React.Dispatch<React.SetStateAction<any[]>>,
    handleChange: () => {}
}

export const Input = ({ input, setTasks, handleChange }: Props) => {
    const handlepush = (): void => {
        setTasks(prev => [...prev, { input: input, id: shortid.generate() }])
    }
    return (
        <div className={InputStyle.InputContainer}>
            <div className={InputStyle.InputBox}>
                <input
                    value={input}
                    onChange={handleChange}
                    type="text"
                    placeholder="Enter Task"
                    autoFocus
                />
                <button onClick={handlepush}>
                    ADD
                </button>
            </div>
        </div >
    )
}
