/*로그인 페이지*/
import React, { useState } from "react";
import AppRotuer from "components/Router";
import firebase from "../fbase";

const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={onChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value="Log In"
                />
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    )
}

export default Auth;