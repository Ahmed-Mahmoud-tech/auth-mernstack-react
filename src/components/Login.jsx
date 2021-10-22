import React, {useState} from 'react'
import axios from "axios"
import { useHistory } from "react-router-dom";

const Rregistration = () => {
    let history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitform = (e) => {
        e.preventDefault()
        const data = {
            email,
            password
        }

        axios.post('http://localhost:4000/app/Login', data)
        .then(res =>{
            localStorage.setItem('token', JSON.stringify(res.data))
            history.push("/post");
        })
    }


    return (
        <div>
            <form action="" onSubmit={(e)=>submitform(e)}>
                <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default Rregistration;