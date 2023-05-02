import React from "react"
import {atom, useRecoilState} from 'recoil'

// define atom

const userNameAtom = atom({
    key:'userName',
    default:""
})

const userEmailAtom = atom({
    key:"userEmail",
    default:""
})

const getuserNameAtom = atom({
    key:"getUserName",
    default:""
})

const getuserEmailAtom = atom({
    key:"getUserEmail",
    default:""
})

export default function RecoilTest(){

    // defaine recoil state veriable using useRecoilState hooks
    const [userName, setUserName] = useRecoilState(userNameAtom)
    const [userEmail, setUserEmail] = useRecoilState(userEmailAtom)
    const [getUserName, setGetUserName] = useRecoilState(getuserNameAtom)
    const [getUserEmail, setGetUserEmail] = useRecoilState(getuserEmailAtom)

    const handleChangeName = (e)=>{
        setUserName(e.target.value)
    }

    const handleChangeEmail = (e)=>{
        setUserEmail(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setGetUserName(userName)
        setGetUserEmail(userEmail)
    }

    return <>
        <div>
            <form onSubmit={handleSubmit}>
                <label>UserName</label><br></br>
                <input type="text" placeholder="username" value={userName} onChange={handleChangeName} /><br></br>
                <label>UserEmail</label><br></br>
                <input type="text" placeholder="useremail" value={userEmail} onChange={handleChangeEmail} /><br></br>
                <button type="submit">Submit</button>
            </form>
            
            <div>Name:{getUserName}</div>
            <div>Email:{getUserEmail}</div>
        </div>
    </>
}