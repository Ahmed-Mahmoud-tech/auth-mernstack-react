import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

import axios from "axios"

const Rregistration = () => {
    let history = useHistory();
    const [fullName, setFullName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitform = (e) => {
        e.preventDefault()
        const data = {
            fullName,
            userName,
            email,
            password
        }

        axios.post('http://localhost:4000/app/singup', data)
        .then(res => {
            localStorage.setItem('token', JSON.stringify(res.data))
            history.push("/post");
            console.log(res.data)
        })
    }


    return (
        <div>
            <form action="" onSubmit={(e)=>submitform(e)}>
                <input type="text" placeholder="full name" value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
                <input type="text" placeholder="userName" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default Rregistration;