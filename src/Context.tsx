import React from 'react'
import { app } from "../src/Firebase/Firebase"
import { useNavigate } from "react-router-dom"
import { createContext, useState } from 'react'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    getAuth 
    } from "firebase/auth";

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
    const Navigate = useNavigate()
    const [input, setInputs] = useState<any>("")
    const [Tasks, setTasks] = useState<any[]>([])
    const [deleted, setDelete] = useState<string>("")
    const [User,setUser] = useState<{}>()
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
            .then(async (userCredential) => {
                // Signed in user 
                const user = await userCredential.user;
                Navigate("/Home")
                console.log(user)
                setUser(user)
            })
            .catch(async (error: any) => {
                const errorCode = await error.code;
                const errorMessage = await error.message;
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
                User,
                input,
                Tasks,
                deleted,
                setTasks,
                setDelete,
                setInputs,
                handleForm,
                handleChange,
                HandleSubmit,
                setHandleForm
            }
        }>
            {children}
        </InputContex.Provider>
    )
}
