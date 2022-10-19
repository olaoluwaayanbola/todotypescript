import React from 'react'
import InputStyle from "./Input.module.css"
import shortid from 'shortid';
interface Props {
    input: string,
    handleChange:any;
    setInputs:React.Dispatch<React.SetStateAction<any>>
    setTasks: React.Dispatch<React.SetStateAction<any[]>>,
}

export const Input = ({ input, setTasks,handleChange,setInputs}: Props) => {
    const handlepush = (): void => {
        if (!input) {
            return;
        } else {
            setTasks(prev => [...prev, { input , id: shortid.generate() }])
            setInputs("")
        }
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
