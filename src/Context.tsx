import React from 'react'
import { createContext, useState } from 'react'

interface Props {
    children: React.ReactNode
}

export const InputContex: React.Context<any> = createContext({})
export const InputProvider = ({ children }: Props) => {
    const [input, setInputs] = useState<any>("")
    const [Tasks, setTasks] = useState<any[]>([])
    const [remove, setRemove] = useState("")

    const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
        setInputs(event.currentTarget.value)
    }
    const index = Tasks.findIndex((object: any) => {
        return object.id === remove;
    });
    const filtered = () => {
        if (index !== -1) {
            Tasks.splice(index, 1)
        }
    }
    const filtter = Tasks.filter((item: any) => {
        return item.id !== remove
    })
    
    return (
        <InputContex.Provider value={
            {
                input,
                setInputs,
                Tasks,
                setTasks,
                handleChange,
                remove,
                setRemove,
                filtered,
                filtter
            }
        }>
            {children}
        </InputContex.Provider>
    )
}
