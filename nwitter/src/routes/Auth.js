/*로그인 페이지*/
import React, { useState } from "react";
import firebase, { authService, firebaseInstance } from "../fbase";
import {
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
} from 'firebase/auth';
import { async } from "@firebase/util";


const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newAccount, setNewAccount] = useState(true)
    const [error, setError] = useState("");
    const onChange = (event) => {
        const { target: { name, value } } = event;
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value)
        }
    }
    // const [form, setForm] = useState({ email: "", password: "" });
    // const onChange = ({ target: { name, value } }) => setForm({ ...form, [name]: value });
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            const auth = getAuth();
            if (newAccount) {
                data = await createUserWithEmailAndPassword(
                    auth, email, password
                )
            } else {
                data = await signInWithEmailAndPassword(
                    auth, email, password
                )
            }
            console.log(data)
        } catch (error) {
            setError(error.message)
        }
    }
    const toggleAccount = () => setNewAccount((prev) => !prev)
    const onSocialClick = async (event) => {
        const {
            target: { name },
        } = event;
        let provider
        if (name === "google") {
            provider = new GoogleAuthProvider();
        } else if (name === "github") {
            provider = new GithubAuthProvider();
        }
        const data = await signInWithPopup(authService, provider);
        console.log(data)
    
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    //필드 입력값 체크
                    required
                    //자동완성 금지
                    autoComplete="off"
                    value={email}
                    onChange={onChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    autoComplete="off"
                    value={password}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value={newAccount ? "Create Account" : "Sign in"}
                />
                {error}
            </form>
            <span onClick={toggleAccount}>
                {newAccount ? "Sign in" : "Create Account"}
            </span>
            <div>
                <button onClick={onSocialClick} name="google">Continue with Google</button>
                <button onClick={onSocialClick} name="github">Continue with Github</button>
            </div>
        </div>
    )
}

export default Auth;