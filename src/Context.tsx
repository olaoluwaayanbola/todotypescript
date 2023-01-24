import React from 'react'
import { app } from "../src/Firebase/Firebase"
import { createContext, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";

interface Props {
    children: React.ReactNode
}
interface handleForm {
    Name: string;
    Password: string;
}

export const InputContex: React.Context<any> = createContext({})

// --->Handles localStorage without Firebase
// const localdata = (): any => {
//     const data: any = JSON.parse(localStorage.getItem("items") || " ")
//     return data
// }

export const InputProvider = ({ children }: Props) => {
    const auth = getAuth(app);
    const [input, setInputs] = useState<any>("")
    const [Tasks, setTasks] = useState<any[]>([])
    const [deleted, setDelete] = useState<[]>()
    const [handleForm, setHandleForm] = useState<handleForm>({
        Name: "",
        Password: ""
    })
    const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
        setInputs(event.currentTarget.value)
    }
    const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, handleForm.Name, handleForm.Password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error: any) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
            });
        signInWithEmailAndPassword(auth, handleForm.Name, handleForm.Password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    // --->Handles localStorage without Firebase
    // useEffect(() => {
    //     localStorage.setItem("items", JSON.stringify(Tasks))
    // }, [Tasks])
    return (
        <InputContex.Provider value={
            {
                input,
                setInputs,
                Tasks,
                setTasks,
                setDelete,
                handleChange,
                handleForm,
                HandleSubmit,
                setHandleForm
            }
        }>
            {children}
        </InputContex.Provider>
    )
}
