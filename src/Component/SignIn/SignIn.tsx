import React, { useRef, useState, useContext } from 'react'
import { InputContex } from '../../Context';

import Signin from "./SignIn.module.css"

const SignIn = () => {
    const contextData = useContext(InputContex)
    const [display, setDisplay] = useState<boolean>(true)
    const { handleForm, setHandleForm, HandleSubmit } = contextData

    const HandleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setHandleForm((prev: any) => ({ ...prev, [event.target.name]: event.target.value }))
    }
    return (
        <div className={Signin.Container}>
            <form action="" onSubmit={HandleSubmit} className={Signin.FormContainer}>
                {
                    display ?
                        <div className={Signin.box1}>
                            <label htmlFor="name">Email:
                                <br />
                                <input
                                    type='text'
                                    onChange={HandleChange}
                                    value={handleForm.Name}
                                    name="Name"
                                    autoFocus>
                                </input>
                            </label>

                            <label htmlFor="password">Password:
                                <br />
                                <input type="password"
                                    onChange={HandleChange}
                                    value={handleForm.Password}
                                    name='Password'>
                                </input>
                            </label>
                        </div>
                        :
                        <div className={Signin.box2}>
                            <label htmlFor="name">Email:
                                <br />
                                <input
                                    type='text'
                                    onChange={HandleChange}
                                    value={handleForm.Name}
                                    name="Name"
                                    autoFocus>
                                </input>
                            </label>

                            <label htmlFor="password">Password:
                                <br />
                                <input type="password"
                                    onChange={HandleChange}
                                    value={handleForm.Password}
                                    name='Password'>
                                </input>
                            </label>
                        </div>
                }
                <button className={Signin.Button} onClick={() => { setDisplay(false) }}>SignUp</button>
            </form>
        </div>
    )
}

export default SignIn